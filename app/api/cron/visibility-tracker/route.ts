import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { crawlPage } from '@/lib/aeo/crawler'
import { buildReport } from '@/lib/aeo/scoring'
import { getResend, fromAddress } from '@/lib/resend'
import { visibilityAlertEmail } from '@/lib/email-drip'

// Runs weekly via Vercel Cron (see vercel.json). Re-crawls every tracked site
// belonging to a still-active subscriber, saves a new snapshot, and emails an
// alert if the score dropped meaningfully. Lapsed subscribers' sites are
// skipped (not deleted) so history is intact if they resubscribe.

export const maxDuration = 60

const SCORE_DROP_ALERT_THRESHOLD = 10

export async function GET(request: Request) {
  if (request.headers.get('authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { data: sites, error: sitesErr } = await supabase
    .from('tracked_sites')
    .select('id, user_id, url')

  if (sitesErr) {
    console.error('Visibility tracker: could not load tracked sites:', sitesErr)
    return NextResponse.json({ error: 'Could not load tracked sites' }, { status: 500 })
  }
  if (!sites || sites.length === 0) {
    return NextResponse.json({ ok: true, crawled: 0, skipped: 0 })
  }

  const { data: purchases } = await supabase
    .from('purchases')
    .select('user_id, plan_type, subscription_status')

  const activeUserIds = new Set(
    (purchases ?? [])
      .filter(
        (p) =>
          p.plan_type === 'forever' ||
          p.subscription_status === 'active' ||
          p.subscription_status === 'past_due'
      )
      .map((p) => p.user_id)
  )

  const { data: authUsers, error: usersErr } = await supabase.auth.admin.listUsers({ page: 1, perPage: 1000 })
  const emailByUserId = new Map<string, string>()
  if (!usersErr) {
    for (const u of authUsers.users) {
      if (u.email) emailByUserId.set(u.id, u.email)
    }
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://learnaiclearly.com'
  const resend = getResend()

  let crawled = 0
  let skipped = 0
  let alerted = 0

  for (const site of sites) {
    if (!activeUserIds.has(site.user_id)) {
      skipped++
      continue
    }

    const { data: prior } = await supabase
      .from('visibility_snapshots')
      .select('score')
      .eq('tracked_site_id', site.id)
      .order('crawled_at', { ascending: false })
      .limit(1)
      .maybeSingle()

    try {
      const page = await crawlPage(site.url)
      const report = buildReport(page)

      await supabase.from('visibility_snapshots').insert({
        tracked_site_id: site.id,
        score: report.score,
        max_score: report.maxScore,
        report,
      })
      crawled++

      const email = emailByUserId.get(site.user_id)
      if (email && prior && prior.score - report.score >= SCORE_DROP_ALERT_THRESHOLD) {
        const { subject, html } = visibilityAlertEmail({
          siteUrl,
          trackedUrl: site.url,
          oldScore: prior.score,
          newScore: report.score,
        })
        try {
          await resend.emails.send({ from: fromAddress(), to: email, subject, html })
          alerted++
        } catch (err) {
          console.error(`Visibility tracker: alert email failed for ${email}:`, err)
        }
      }
    } catch (err) {
      console.error(`Visibility tracker: crawl failed for ${site.url}:`, err)
    }

    // Stay well under Resend's/hosting fetch concurrency limits when crawling sequentially
    await new Promise((r) => setTimeout(r, 600))
  }

  return NextResponse.json({ ok: true, crawled, skipped, alerted })
}
