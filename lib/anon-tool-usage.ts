import { createHash } from 'crypto'
import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

// Logged-out visitors get a small daily allowance per tool so they can
// experience the tools before being asked to sign up. Enforced two ways:
// an HttpOnly cookie (fast, survives IP changes) and an ip-hash row in
// anon_tool_usage (survives cookie clearing). Both degrade gracefully.
export const ANON_DAILY_LIMIT = 2

const COOKIE_NAME = 'cai_tool_uses'

function serviceClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

function ipHash(req: NextRequest): string {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  return createHash('sha256').update(ip).digest('hex').slice(0, 32)
}

function cookieCounts(req: NextRequest, today: string): Record<string, number> {
  try {
    const raw = req.cookies.get(COOKIE_NAME)?.value
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    if (parsed.date !== today) return {}
    return parsed
  } catch {
    return {}
  }
}

export async function getAnonUsage(req: NextRequest, tool: string, today: string) {
  const hash = ipHash(req)
  let dbCount = 0
  try {
    const { data } = await serviceClient()
      .from('anon_tool_usage')
      .select('count')
      .eq('ip_hash', hash)
      .eq('tool', tool)
      .eq('date', today)
      .maybeSingle()
    dbCount = data?.count ?? 0
  } catch {}
  const fromCookie = Number(cookieCounts(req, today)[tool]) || 0
  return { count: Math.max(dbCount, fromCookie), hash }
}

export async function recordAnonUsage(
  req: NextRequest,
  res: NextResponse,
  tool: string,
  today: string,
  newCount: number,
  hash: string
) {
  try {
    await serviceClient()
      .from('anon_tool_usage')
      .upsert(
        { ip_hash: hash, tool, date: today, count: newCount },
        { onConflict: 'ip_hash,tool,date' }
      )
  } catch {}

  const counts = cookieCounts(req, today)
  res.cookies.set(COOKIE_NAME, JSON.stringify({ ...counts, date: today, [tool]: newCount }), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24,
    path: '/',
  })
}

export function anonLimitResponse() {
  return NextResponse.json(
    {
      error: `That's your ${ANON_DAILY_LIMIT} free tries for today. Create a free account to get 5 uses a day — it takes 30 seconds.`,
    },
    { status: 401 }
  )
}
