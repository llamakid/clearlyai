import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { ANON_DAILY_LIMIT, getAnonUsage, recordAnonUsage, anonLimitResponse } from '@/lib/anon-tool-usage'
import { crawlPage, normalizeUrl, isBlockedHost } from '@/lib/aeo/crawler'
import { buildReport } from '@/lib/aeo/scoring'

export const maxDuration = 60

const DAILY_LIMIT = 5

export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const today = new Date().toISOString().split('T')[0]
  let currentCount = 0
  let anonHash = ''

  if (user) {
    try {
      const { data: usage } = await supabase
        .from('tool_usage')
        .select('count')
        .eq('user_id', user.id)
        .eq('tool', 'audit')
        .eq('date', today)
        .maybeSingle()
      currentCount = usage?.count ?? 0
      if (currentCount >= DAILY_LIMIT) {
        return NextResponse.json(
          { error: `You've used this tool ${DAILY_LIMIT} times today. Come back tomorrow!` },
          { status: 429 }
        )
      }
    } catch {}
  } else {
    const anon = await getAnonUsage(req, 'audit', today)
    currentCount = anon.count
    anonHash = anon.hash
    if (currentCount >= ANON_DAILY_LIMIT) {
      return anonLimitResponse()
    }
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

  try {
    const page = await crawlPage(rawUrl)
    const report = buildReport(page)

    const res = NextResponse.json(report)

    if (user) {
      try {
        await supabase.from('tool_usage').upsert(
          { user_id: user.id, tool: 'audit', date: today, count: currentCount + 1 },
          { onConflict: 'user_id,tool,date' }
        )
      } catch {}
    } else {
      await recordAnonUsage(req, res, 'audit', today, currentCount + 1, anonHash)
    }

    return res
  } catch (err) {
    console.error('Audit failed', err)
    return NextResponse.json(
      { error: "We couldn't reach that page. It may be blocking automated visits, or the address may be wrong." },
      { status: 502 }
    )
  }
}
