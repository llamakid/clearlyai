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

  // TODO: swap mock for real Claude call
  // import Anthropic from '@anthropic-ai/sdk'
  // const client = new Anthropic()
  // const message = await client.messages.create({
  //   model: 'claude-haiku-4-5-20251001',
  //   max_tokens: 1024,
  //   messages: [{ role: 'user', content: buildWritePrompt(type, about, forWho, tone, refine) }],
  // })
  // const result = message.content[0].type === 'text' ? message.content[0].text : ''

  const result = getMockWriteResult(type, about, forWho, tone, refine)

  try {
    await supabase.from('tool_usage').upsert(
      { user_id: user.id, tool: 'write', date: today, count: currentCount + 1 },
      { onConflict: 'user_id,tool,date' }
    )
  } catch {}

  return NextResponse.json({ result })
}

function getMockWriteResult(
  type: string,
  about: string,
  _forWho: string,
  _tone: string,
  refine?: string
): string {
  const recipient = _forWho || 'there'

  if (refine === 'Make it shorter') {
    return `Hi ${recipient},\n\nJust a quick note about ${about}. Would love to connect!\n\n— [Your name]\n\n---\n⚠️ Preview mode — connect the AI key to generate real content.`
  }
  if (refine === 'Make it more professional') {
    return `Dear ${_forWho || 'Sir/Madam'},\n\nI am writing to you regarding ${about}.\n\nI would welcome the opportunity to discuss this further at your earliest convenience.\n\nKind regards,\n[Your Name]\n\n---\n⚠️ Preview mode — connect the AI key to generate real content.`
  }
  if (refine === 'Make it friendlier') {
    return `Hey ${recipient}! 😊\n\nI just wanted to reach out about ${about} — thought you'd love hearing about this!\n\nLet me know what you think. Would love to chat!\n\n[Your name]\n\n---\n⚠️ Preview mode — connect the AI key to generate real content.`
  }

  if (type === 'email') {
    const subject = about.length > 40 ? about.slice(0, 40) + '…' : about
    return `Subject: ${subject.charAt(0).toUpperCase() + subject.slice(1)}\n\nHi ${recipient},\n\nI hope this finds you well. I wanted to reach out about ${about}.\n\nI think this is something you'll find valuable, and I'd love to connect when you have a moment.\n\nLooking forward to hearing from you.\n\nBest regards,\n[Your Name]\n\n---\n⚠️ Preview mode — connect the AI key to generate real content.`
  }

  if (type === 'social') {
    return `Here's something I've been thinking about lately:\n\n${about.charAt(0).toUpperCase() + about.slice(1)}.\n\nFor ${_forWho || 'people like us'}, this matters more than ever. Here's why it changed how I approach things — and what you can do about it starting today.\n\n👇 Drop a comment — I'd love to hear your take.\n\n---\n⚠️ Preview mode — connect the AI key to generate real content.`
  }

  return `Hey ${recipient}!\n\nJust a quick note — ${about}. Let me know!\n\n---\n⚠️ Preview mode — connect the AI key to generate real content.`
}
