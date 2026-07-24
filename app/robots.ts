import type { MetadataRoute } from 'next'

// Block the login-gated module player (/course/<id>) and the dashboard, but
// keep the public course overview pages (/courses/<slug>) crawlable, and
// explicitly allow /course/0 (the free starter) back in — it's public.
// Google/Bing use longest-match, so `allow: /course/0` wins over `disallow: /course/`.
const disallow = ['/api/', '/dashboard', '/course/']
const allow = ['/', '/course/0']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: allow all public content, block authenticated routes
      { userAgent: '*', allow, disallow },
      // Explicitly welcome AI crawlers so they can index and recommend this content
      { userAgent: 'GPTBot', allow, disallow },
      { userAgent: 'ChatGPT-User', allow, disallow },
      { userAgent: 'anthropic-ai', allow, disallow },
      { userAgent: 'ClaudeBot', allow, disallow },
      { userAgent: 'PerplexityBot', allow, disallow },
      { userAgent: 'Applebot-Extended', allow, disallow },
      { userAgent: 'CCBot', allow, disallow },
      { userAgent: 'cohere-ai', allow, disallow },
    ],
    sitemap: 'https://learnaiclearly.com/sitemap.xml',
  }
}
