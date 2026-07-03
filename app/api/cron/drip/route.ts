import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { getResend, fromAddress } from '@/lib/resend'
import { NURTURE_SEQUENCE, unsubscribeUrl, safeName } from '@/lib/email-drip'

// Runs daily via Vercel Cron (see vercel.json). The audience is the union of
// confirmed auth users and the subscribers table, deduped by email, minus
// anyone who unsubscribed or already purchased. Each recipient gets at most
// the single next due step per run. The unique constraint on email_sends +
// insert-before-send makes each step at-most-once: a failed send is skipped,
// never duplicated.

export const maxDuration = 60

const SEQUENCE = 'nurture'
const MAX_SENDS_PER_RUN = 30
const DAY_MS = 24 * 60 * 60 * 1000

export async function GET(request: Request) {
  if (request.headers.get('authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  // ── Build the audience: auth users ∪ subscribers ──────────
  // audience: lowercased email → earliest known join date
  const audience = new Map<string, string>()
  const firstNames = new Map<string, string>() // lowercased email → first name

  const userIdEmail = new Map<string, string>()
  let page = 1
  while (true) {
    const { data, error } = await supabase.auth.admin.listUsers({ page, perPage: 1000 })
    if (error) {
      console.error('Drip: could not list auth users:', error)
      return NextResponse.json({ error: 'Could not list auth users' }, { status: 500 })
    }
    for (const u of data.users) {
      if (!u.email || !u.email_confirmed_at) continue // never market to unverified addresses
      const email = u.email.toLowerCase()
      userIdEmail.set(u.id, email)
      if (!audience.has(email)) audience.set(email, u.created_at)
      const name = safeName(u.user_metadata?.first_name)
      if (name && !firstNames.has(email)) firstNames.set(email, name)
    }
    if (data.users.length < 1000) break
    page++
  }

  const { data: subscribers, error: subErr } = await supabase
    .from('subscribers')
    .select('email, first_name, subscribed_at, unsubscribed')

  if (subErr) {
    console.error('Drip: could not load subscribers:', subErr)
    return NextResponse.json({ error: 'Could not load subscribers' }, { status: 500 })
  }

  const unsubscribed = new Set<string>()
  for (const s of subscribers ?? []) {
    const email = s.email.toLowerCase()
    if (s.unsubscribed) {
      unsubscribed.add(email)
      continue
    }
    const existing = audience.get(email)
    if (!existing || s.subscribed_at < existing) audience.set(email, s.subscribed_at)
    const name = safeName(s.first_name)
    if (name && !firstNames.has(email)) firstNames.set(email, name)
  }
  for (const email of unsubscribed) audience.delete(email)

  // Paying customers are done being nurtured
  const { data: purchases } = await supabase.from('purchases').select('user_id')
  for (const p of purchases ?? []) {
    const email = userIdEmail.get(p.user_id)
    if (email) audience.delete(email)
  }

  // ── Sequence progress ──────────────────────────────────────
  const { data: sends, error: sendErr } = await supabase
    .from('email_sends')
    .select('email, step, sent_at')
    .eq('sequence', SEQUENCE)

  if (sendErr) {
    console.error('Drip: could not load send history:', sendErr)
    return NextResponse.json({ error: 'Could not load send history' }, { status: 500 })
  }

  // email → { maxStep, lastSentAt } for the latest step already sent
  const progress = new Map<string, { maxStep: number; lastSentAt: string }>()
  for (const s of sends ?? []) {
    const email = s.email.toLowerCase()
    const cur = progress.get(email)
    if (!cur || s.step > cur.maxStep) {
      progress.set(email, { maxStep: s.step, lastSentAt: s.sent_at })
    }
  }

  // ── Send what's due, oldest recipients first ───────────────
  const recipients = [...audience.entries()]
    .sort((a, b) => a[1].localeCompare(b[1]))

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://learnaiclearly.com'
  const resend = getResend()
  let sent = 0
  let failed = 0

  for (const [email, joinedAt] of recipients) {
    if (sent >= MAX_SENDS_PER_RUN) break

    const prog = progress.get(email)
    const stepDef = NURTURE_SEQUENCE.find(s => s.step === (prog?.maxStep ?? 0) + 1)
    if (!stepDef) continue // sequence finished

    const anchor = prog ? Date.parse(prog.lastSentAt) : Date.parse(joinedAt)
    const waitDays = prog ? stepDef.daysAfterPrev : 0
    if (Date.now() - anchor < waitDays * DAY_MS) continue // not due yet

    // Claim the step before sending so retries can never double-send
    const { error: claimErr } = await supabase
      .from('email_sends')
      .insert({ email, sequence: SEQUENCE, step: stepDef.step })
    if (claimErr) continue // already claimed by a concurrent/previous run

    try {
      await resend.emails.send({
        from: fromAddress(),
        to: email,
        subject: stepDef.subject,
        html: stepDef.html({ siteUrl, unsubUrl: unsubscribeUrl(email), firstName: firstNames.get(email) }),
      })
      sent++
    } catch (err) {
      console.error(`Drip: send failed for ${email} step ${stepDef.step}:`, err)
      failed++
    }

    // Stay under Resend's default 2 req/s rate limit
    await new Promise(r => setTimeout(r, 600))
  }

  return NextResponse.json({
    ok: true,
    sent,
    failed,
    audience: audience.size,
  })
}
