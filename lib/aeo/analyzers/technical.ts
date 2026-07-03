import type { CategoryResult, Finding, PageData } from '../types'

export function analyzeTechnical(page: PageData): CategoryResult {
  const findings: Finding[] = []
  let score = 0
  const maxScore = 20

  if (page.statusCode >= 200 && page.statusCode < 300) {
    score += 4
    findings.push({
      id: 'status-code',
      status: 'good',
      message: `Page responded with HTTP ${page.statusCode}.`,
    })
  } else {
    findings.push({
      id: 'status-code',
      status: 'bad',
      message: `Page responded with HTTP ${page.statusCode}.`,
      recommendation:
        'Fix server errors or redirects so crawlers and AI engines can reliably fetch the page.',
    })
  }

  if (page.robotsTxt.found && !page.robotsTxt.blocksAll) {
    score += 5
    findings.push({
      id: 'robots-txt',
      status: 'good',
      message: 'robots.txt exists and does not block crawling.',
    })
  } else if (page.robotsTxt.found && page.robotsTxt.blocksAll) {
    findings.push({
      id: 'robots-txt',
      status: 'bad',
      message: 'robots.txt blocks all crawlers, including AI answer engines.',
      recommendation:
        'Update robots.txt to allow reputable AI crawlers (e.g. GPTBot, PerplexityBot, ClaudeBot) if you want to be cited in AI answers.',
    })
  } else {
    score += 2
    findings.push({
      id: 'robots-txt',
      status: 'warn',
      message: 'No robots.txt found.',
      recommendation:
        'Add a robots.txt file to explicitly allow AI crawlers and point to your sitemap.',
    })
  }

  if (page.sitemapFound) {
    score += 4
    findings.push({
      id: 'sitemap',
      status: 'good',
      message: 'sitemap.xml is present.',
    })
  } else {
    findings.push({
      id: 'sitemap',
      status: 'warn',
      message: 'No sitemap.xml found at the site root.',
      recommendation:
        'Publish a sitemap.xml so search and AI crawlers can discover all your content.',
    })
  }

  if (page.canonicalUrl) {
    score += 3
    findings.push({
      id: 'canonical',
      status: 'good',
      message: 'Canonical URL tag is present.',
    })
  } else {
    findings.push({
      id: 'canonical',
      status: 'warn',
      message: 'No canonical URL tag found.',
      recommendation: 'Add a <link rel="canonical"> tag to avoid duplicate-content confusion.',
    })
  }

  // Thresholds are for raw HTML fetch time (no browser render), so tighter
  // than a full page-load budget.
  if (page.loadTimeMs < 2000) {
    score += 4
    findings.push({
      id: 'load-time',
      status: 'good',
      message: `Server delivered the page in ${page.loadTimeMs}ms.`,
    })
  } else if (page.loadTimeMs < 5000) {
    score += 2
    findings.push({
      id: 'load-time',
      status: 'warn',
      message: `Server took ${page.loadTimeMs}ms to deliver the page.`,
      recommendation:
        'Speed up server response. Slow pages are more likely to be skipped or timed out by crawlers.',
    })
  } else {
    findings.push({
      id: 'load-time',
      status: 'bad',
      message: `Server took ${page.loadTimeMs}ms to deliver the page, which is slow.`,
      recommendation: 'Investigate server latency, large HTML payloads, or slow redirects.',
    })
  }

  return { key: 'technical', label: 'Crawlability & Technical', score, maxScore, findings }
}
