import type { MetadataRoute } from 'next'

const disallow = ['/api/', '/dashboard', '/courses/', '/course/']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: allow all public content, block authenticated routes
      { userAgent: '*', allow: '/', disallow },
      // Explicitly welcome AI crawlers so they can index and recommend this content
      { userAgent: 'GPTBot', allow: '/', disallow },
      { userAgent: 'ChatGPT-User', allow: '/', disallow },
      { userAgent: 'anthropic-ai', allow: '/', disallow },
      { userAgent: 'ClaudeBot', allow: '/', disallow },
      { userAgent: 'PerplexityBot', allow: '/', disallow },
      { userAgent: 'Applebot-Extended', allow: '/', disallow },
      { userAgent: 'CCBot', allow: '/', disallow },
      { userAgent: 'cohere-ai', allow: '/', disallow },
    ],
    sitemap: 'https://learnaiclearly.com/sitemap.xml',
  }
}
