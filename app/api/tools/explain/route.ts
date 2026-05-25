import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

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

  // TODO: swap mock for real Claude call
  // import Anthropic from '@anthropic-ai/sdk'
  // const client = new Anthropic()
  // const message = await client.messages.create({
  //   model: 'claude-haiku-4-5-20251001',
  //   max_tokens: 1024,
  //   messages: [{ role: 'user', content: buildExplainPrompt(text) }],
  // })
  // parse JSON from message.content[0].text

  const result = getMockExplainResult(text)

  try {
    await supabase.from('tool_usage').upsert(
      { user_id: user.id, tool: 'explain', date: today, count: currentCount + 1 },
      { onConflict: 'user_id,tool,date' }
    )
  } catch {}

  return NextResponse.json(result)
}

function getMockExplainResult(text: string) {
  const wordCount = text.trim().split(/\s+/).length
  const looksLikeEmail = /hi |hello |dear |regards|sincerely/i.test(text)

  return {
    summary:
      'This is a preview of what the AI will explain. In real mode, it reads what you pasted and gives you a clear, plain-English summary — no jargon, no confusion.\n\n(Preview mode is active. Connect the AI key to get real explanations.)',
    takeaways: [
      'The main point of what you pasted would appear here',
      'Important dates, deadlines, or numbers would be called out',
      'Anything you need to do or decide would be listed clearly',
    ],
    meaning:
      'In real mode, this section explains what the text means for you personally — whether it needs action, whether it\'s good or bad news, and what you should do next.',
    suggestedResponse:
      wordCount < 300 || looksLikeEmail
        ? `Hi there,\n\nThank you for your message. I'll look into this and get back to you shortly.\n\nBest,\n[Your name]\n\n---\n⚠️ Preview mode — connect the AI key to generate real responses.`
        : undefined,
  }
}
