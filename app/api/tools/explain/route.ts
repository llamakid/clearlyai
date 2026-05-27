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
      .eq('tool', 'explain')
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
  const { text } = body

  if (!text || typeof text !== 'string') {
    return NextResponse.json({ error: 'Please provide some text to explain.' }, { status: 400 })
  }

  const message = await anthropic.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 1024,
    system: [
      {
        type: 'text',
        text: EXPLAIN_SYSTEM_PROMPT,
        cache_control: { type: 'ephemeral' },
      },
    ],
    messages: [{ role: 'user', content: `Text to explain:\n"""\n${text}\n"""` }],
  })

  const raw = message.content[0].type === 'text' ? message.content[0].text : ''
  let result: Record<string, unknown>
  try {
    result = JSON.parse(raw)
  } catch {
    result = { summary: raw, takeaways: [], meaning: '', suggestedResponse: undefined }
  }

  try {
    await supabase.from('tool_usage').upsert(
      { user_id: user.id, tool: 'explain', date: today, count: currentCount + 1 },
      { onConflict: 'user_id,tool,date' }
    )
  } catch {}

  return NextResponse.json(result)
}

const EXPLAIN_SYSTEM_PROMPT = `You are a plain-English explainer. A non-technical adult has pasted text and needs help understanding it.

Analyze the text and respond with ONLY a valid JSON object in this exact shape:
{
  "summary": "A 2-3 sentence plain-English summary of what this text is about. No jargon.",
  "takeaways": ["Key point 1", "Key point 2", "Key point 3"],
  "meaning": "1-2 sentences on what this means for the reader personally — does it require action? Is it good or bad news? What should they do next?",
  "suggestedResponse": "A short, friendly reply they could send back — only include this field if the text is a message or email that warrants a reply, otherwise omit the field entirely."
}

Rules:
- Use plain, everyday language. Imagine explaining to a 60-year-old who is not tech-savvy.
- takeaways should be 2-4 bullet points, each a single sentence.
- Do not include any text outside the JSON object.`
