import { createClient } from '@supabase/supabase-js'
import type { BotMatch } from './bot-detect'

function serviceClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

// Fire-and-forget insert — never let logging affect the actual response.
// Called from proxy.ts with event.waitUntil() so it can finish after the
// response is sent without blocking the request.
export async function logBotVisit(bot: BotMatch, path: string, userAgent: string) {
  try {
    await serviceClient().from('bot_visits').insert({
      bot_name: bot.name,
      bot_type: bot.type,
      path,
      user_agent: userAgent.slice(0, 500),
    })
  } catch {
    // best-effort only
  }
}
