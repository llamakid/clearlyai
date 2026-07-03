import * as cheerio from 'cheerio'
import type { PageData } from './types'

const USER_AGENT =
  'Mozilla/5.0 (compatible; ClearlyAIAuditBot/1.0; +https://learnaiclearly.com/tools/audit)'

async function fetchText(url: string, timeoutMs = 8000): Promise<string | null> {
  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(timeoutMs),
      headers: { 'User-Agent': USER_AGENT },
      redirect: 'follow',
    })
    if (!res.ok) return null
    return await res.text()
  } catch {
    return null
  }
}

export function normalizeUrl(input: string): string {
  let url = input.trim()
  if (!/^https?:\/\//i.test(url)) {
    url = `https://${url}`
  }
  return url
}

// Runs on Vercel serverless, so no headless browser — reject anything that
// could reach internal services (SSRF) before fetching.
export function isBlockedHost(hostname: string): boolean {
  const host = hostname.toLowerCase()
  if (host === 'localhost' || host.endsWith('.local') || host.endsWith('.internal')) return true
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(host)) {
    const [a, b] = host.split('.').map(Number)
    if (a === 127 || a === 10 || a === 0) return true
    if (a === 192 && b === 168) return true
    if (a === 172 && b >= 16 && b <= 31) return true
    if (a === 169 && b === 254) return true
  }
  if (host.includes(':')) return true // raw IPv6
  return false
}

export async function crawlPage(inputUrl: string): Promise<PageData> {
  const url = normalizeUrl(inputUrl)
  const origin = new URL(url).origin

  const start = Date.now()
  const response = await fetch(url, {
    signal: AbortSignal.timeout(15000),
    headers: {
      'User-Agent': USER_AGENT,
      Accept: 'text/html,application/xhtml+xml',
    },
    redirect: 'follow',
  })
  const html = await response.text()
  const loadTimeMs = Date.now() - start
  const finalUrl = response.url || url
  const statusCode = response.status

  const [robotsTxtContent, sitemapCheck] = await Promise.all([
    fetchText(`${origin}/robots.txt`),
    fetchText(`${origin}/sitemap.xml`),
  ])

  const $ = cheerio.load(html)

  const title = $('title').first().text().trim() || null
  const metaDescription = $('meta[name="description"]').attr('content')?.trim() || null

  const headings: { tag: string; text: string }[] = []
  $('h1, h2, h3, h4, h5, h6').each((_, el) => {
    const tag = el.tagName?.toLowerCase() ?? ''
    const text = $(el).text().trim()
    if (text) headings.push({ tag, text })
  })

  const jsonLd: unknown[] = []
  $('script[type="application/ld+json"]').each((_, el) => {
    const raw = $(el).contents().text()
    try {
      jsonLd.push(JSON.parse(raw))
    } catch {
      // ignore invalid JSON-LD blocks
    }
  })

  const openGraph: Record<string, string> = {}
  $('meta[property^="og:"]').each((_, el) => {
    const property = $(el).attr('property')
    const content = $(el).attr('content')
    if (property && content) openGraph[property] = content
  })

  const canonicalUrl = $('link[rel="canonical"]').attr('href') || null

  const bodyText = $('body').text().replace(/\s+/g, ' ').trim()
  const wordCount = bodyText ? bodyText.split(' ').length : 0

  const links: { href: string; text: string; internal: boolean }[] = []
  $('a[href]').each((_, el) => {
    const href = $(el).attr('href')
    if (!href) return
    let resolved: string
    try {
      resolved = new URL(href, finalUrl).toString()
    } catch {
      return
    }
    links.push({ href: resolved, text: $(el).text().trim(), internal: resolved.startsWith(origin) })
  })

  const images: { src: string; alt: string | null }[] = []
  $('img').each((_, el) => {
    const src = $(el).attr('src')
    if (!src) return
    images.push({ src, alt: $(el).attr('alt') ?? null })
  })

  const blocksAll = /User-agent:\s*\*\s*\n\s*Disallow:\s*\/\s*(\n|$)/i.test(robotsTxtContent ?? '')

  return {
    url,
    finalUrl,
    statusCode,
    html,
    title,
    metaDescription,
    headings,
    jsonLd,
    openGraph,
    robotsTxt: { found: robotsTxtContent !== null, content: robotsTxtContent, blocksAll },
    sitemapFound: sitemapCheck !== null,
    canonicalUrl,
    wordCount,
    loadTimeMs,
    links,
    images,
  }
}
