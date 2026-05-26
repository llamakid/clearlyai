import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic()

const DAILY_LIMIT = 5

export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Sign in to use AI Tools.' }, { status: 401 })
  }

  const today = new Date().toISOString().split('T')[0]
  let currentCount = 0
  try {
    const { data: usage } = await supabase
      .from('tool_usage')
      .select('count')
      .eq('user_id', user.id)
      .eq('tool', 'write')
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

  const body = await req.json()
  const { type, about, forWho, tone, refine } = body

  if (!type || !about) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  const message = await anthropic.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 1024,
    messages: [{ role: 'user', content: buildWritePrompt(type, about, forWho, tone, refine) }],
  })
  const result = message.content[0].type === 'text' ? message.content[0].text : ''

  try {
    await supabase.from('tool_usage').upsert(
      { user_id: user.id, tool: 'write', date: today, count: currentCount + 1 },
      { onConflict: 'user_id,tool,date' }
    )
  } catch {}

  return NextResponse.json({ result })
}

function buildWritePrompt(
  type: string,
  about: string,
  forWho: string,
  tone: string,
  refine?: string
): string {
  const typeLabel = type === 'email' ? 'email' : type === 'social' ? 'social media post' : 'message'
  const audienceClause = forWho ? ` for ${forWho}` : ''
  const toneClause = tone ? ` Tone: ${tone}.` : ''

  if (refine) {
    return `You previously wrote a ${typeLabel} about: "${about}"${audienceClause}.

Now rewrite it with this adjustment: ${refine}.${toneClause}

Return only the rewritten ${typeLabel} — no explanations, no preamble.`
  }

  const formatNote = type === 'email'
    ? 'Include a subject line on the first line formatted as "Subject: ..." followed by a blank line, then the email body.'
    : type === 'social'
    ? 'Write a short, engaging post (2–4 short paragraphs). No hashtags unless they feel natural.'
    : 'Keep it concise and clear.'

  return `Write a ${typeLabel} about: "${about}"${audienceClause}.${toneClause}

${formatNote}

Write in plain, natural language — warm but not salesy. Return only the ${typeLabel} itself, no explanations.`
}
