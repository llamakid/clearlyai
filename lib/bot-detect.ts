// Known crawler/agent user-agent substrings, mapped to a readable name and
// a bucket. Order matters — first match wins, so more specific strings
// (e.g. "Claude-User") are listed before broader ones.
const KNOWN_BOTS: Array<{ match: string; name: string; type: 'ai_crawler' | 'search_engine' }> = [
  // AI crawlers / agents — training, retrieval, or live browsing on behalf of an AI product
  { match: 'GPTBot', name: 'OpenAI GPTBot', type: 'ai_crawler' },
  { match: 'ChatGPT-User', name: 'ChatGPT (live browsing)', type: 'ai_crawler' },
  { match: 'OAI-SearchBot', name: 'OpenAI SearchBot', type: 'ai_crawler' },
  { match: 'ClaudeBot', name: 'Anthropic ClaudeBot', type: 'ai_crawler' },
  { match: 'Claude-User', name: 'Claude (live browsing)', type: 'ai_crawler' },
  { match: 'Claude-SearchBot', name: 'Claude SearchBot', type: 'ai_crawler' },
  { match: 'anthropic-ai', name: 'Anthropic (API/tooling)', type: 'ai_crawler' },
  { match: 'PerplexityBot', name: 'Perplexity', type: 'ai_crawler' },
  { match: 'Perplexity-User', name: 'Perplexity (live browsing)', type: 'ai_crawler' },
  { match: 'CCBot', name: 'Common Crawl (CCBot)', type: 'ai_crawler' },
  { match: 'Google-Extended', name: 'Google AI training (Google-Extended)', type: 'ai_crawler' },
  { match: 'GoogleOther', name: 'Google (GoogleOther)', type: 'ai_crawler' },
  { match: 'Applebot-Extended', name: 'Apple AI training', type: 'ai_crawler' },
  { match: 'Bytespider', name: 'ByteDance (Bytespider)', type: 'ai_crawler' },
  { match: 'Amazonbot', name: 'Amazon', type: 'ai_crawler' },
  { match: 'meta-externalagent', name: 'Meta AI', type: 'ai_crawler' },
  { match: 'Diffbot', name: 'Diffbot', type: 'ai_crawler' },
  { match: 'YouBot', name: 'You.com', type: 'ai_crawler' },
  { match: 'cohere-ai', name: 'Cohere', type: 'ai_crawler' },
  { match: 'Applebot', name: 'Applebot', type: 'ai_crawler' },

  // Traditional search engine crawlers — not AI, but useful to see separately
  { match: 'Googlebot', name: 'Googlebot', type: 'search_engine' },
  { match: 'bingbot', name: 'Bingbot', type: 'search_engine' },
  { match: 'DuckDuckBot', name: 'DuckDuckGo', type: 'search_engine' },
  { match: 'Slurp', name: 'Yahoo (Slurp)', type: 'search_engine' },
  { match: 'Baiduspider', name: 'Baidu', type: 'search_engine' },
  { match: 'YandexBot', name: 'Yandex', type: 'search_engine' },
]

// Catches unlisted crawlers that self-identify with these words but aren't
// one of the specific bots above. Lumped into 'other_bot' so nothing that
// clearly announces itself as automated gets missed.
const GENERIC_BOT_PATTERN = /\b(bot|crawler|spider)\b/i

export type BotMatch = {
  name: string
  type: 'ai_crawler' | 'search_engine' | 'other_bot'
}

export function detectBot(userAgent: string | null): BotMatch | null {
  if (!userAgent) return null

  for (const bot of KNOWN_BOTS) {
    if (userAgent.includes(bot.match)) {
      return { name: bot.name, type: bot.type }
    }
  }

  if (GENERIC_BOT_PATTERN.test(userAgent)) {
    return { name: userAgent.slice(0, 120), type: 'other_bot' }
  }

  return null
}
