import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { createClient as createServerClient } from '@/lib/supabase/server'
import { crawlPage, normalizeUrl, isBlockedHost } from '@/lib/aeo/crawler'
import { buildReport } from '@/lib/aeo/scoring'

export const maxDuration = 60

function serviceClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

export async function GET() {
  const supabase = await createServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Please sign in.' }, { status: 401 })

  const { data: site } = await supabase
    .from('tracked_sites')
    .select('id, url, created_at')
    .eq('user_id', user.id)
    .maybeSingle()

  if (!site) return NextResponse.json({ site: null, snapshots: [] })

  const { data: snapshots } = await serviceClient()
    .from('visibility_snapshots')
    .select('id, score, max_score, report, crawled_at')
    .eq('tracked_site_id', site.id)
    .order('crawled_at', { ascending: false })
    .limit(12)

  return NextResponse.json({ site, snapshots: snapshots ?? [] })
}

export async function POST(req: NextRequest) {
  const supabase = await createServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Please sign in.' }, { status: 401 })

  const { count: existingCount } = await supabase
    .from('tracked_sites')
    .select('id', { count: 'exact', head: true })
    .eq('user_id', user.id)
  if ((existingCount ?? 0) > 0) {
    return NextResponse.json(
      { error: 'You can track one site at a time. Remove your current site first to track a different one.' },
      { status: 409 }
    )
  }

  let body: { url?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const rawUrl = body.url?.trim()
  if (!rawUrl) {
    return NextResponse.json({ error: 'Please enter a website address.' }, { status: 400 })
  }

  let parsed: URL
  try {
    parsed = new URL(normalizeUrl(rawUrl))
  } catch {
    return NextResponse.json({ error: "That doesn't look like a valid website address." }, { status: 400 })
  }
  if (!/^https?:$/.test(parsed.protocol) || isBlockedHost(parsed.hostname)) {
    return NextResponse.json({ error: "That doesn't look like a public website address." }, { status: 400 })
  }

  let report
  try {
    const page = await crawlPage(rawUrl)
    report = buildReport(page)
  } catch (err) {
    console.error('Tracker: initial crawl failed', err)
    return NextResponse.json(
      { error: "We couldn't reach that page. It may be blocking automated visits, or the address may be wrong." },
      { status: 502 }
    )
  }

  const { data: site, error: siteErr } = await supabase
    .from('tracked_sites')
    .insert({ user_id: user.id, url: report.url })
    .select('id, url, created_at')
    .single()

  if (siteErr || !site) {
    console.error('Tracker: could not save tracked site', siteErr)
    return NextResponse.json({ error: 'Could not start tracking. Please try again.' }, { status: 500 })
  }

  await serviceClient().from('visibility_snapshots').insert({
    tracked_site_id: site.id,
    score: report.score,
    max_score: report.maxScore,
    report,
  })

  return NextResponse.json({ site, report })
}
