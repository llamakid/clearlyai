import type { CategoryResult, Finding, PageData } from '../types'

export function analyzeSemantic(page: PageData): CategoryResult {
  const findings: Finding[] = []
  let score = 0
  const maxScore = 15

  const lowerHtml = page.html.toLowerCase()
  const semanticTags = ['<article', '<section', '<nav', '<main', '<header', '<footer']
  const foundTags = semanticTags.filter((t) => lowerHtml.includes(t))
  if (foundTags.length >= 3) {
    score += 5
    findings.push({
      id: 'semantic-tags',
      status: 'good',
      message: `Uses ${foundTags.length} semantic HTML5 elements (${foundTags.map((t) => t.slice(1)).join(', ')}).`,
    })
  } else if (foundTags.length >= 1) {
    score += 2
    findings.push({
      id: 'semantic-tags',
      status: 'warn',
      message: `Only ${foundTags.length} semantic HTML5 element(s) detected.`,
      recommendation:
        'Use <article>, <main>, <section>, and <nav> to help AI parsers understand page structure.',
    })
  } else {
    findings.push({
      id: 'semantic-tags',
      status: 'bad',
      message: 'No semantic HTML5 structural elements detected.',
      recommendation:
        'Replace generic <div> wrappers with semantic tags like <main>, <article>, and <section>.',
    })
  }

  let orderOk = true
  let lastLevel = 0
  for (const h of page.headings) {
    const level = Number(h.tag.replace('h', ''))
    if (lastLevel !== 0 && level > lastLevel + 1) {
      orderOk = false
      break
    }
    lastLevel = level
  }
  if (page.headings.length > 0 && orderOk) {
    score += 4
    findings.push({
      id: 'heading-order',
      status: 'good',
      message: 'Heading levels follow a logical hierarchy (no skipped levels).',
    })
  } else if (page.headings.length > 0) {
    score += 1
    findings.push({
      id: 'heading-order',
      status: 'warn',
      message: 'Heading levels skip unexpectedly (e.g. H1 to H3).',
      recommendation: 'Fix heading hierarchy so it goes H1 -> H2 -> H3 without skipping levels.',
    })
  }

  const hasDatePattern =
    /\b(published|updated|last modified)\b/i.test(page.html) || /\d{4}-\d{2}-\d{2}/.test(page.html)
  if (hasDatePattern) {
    score += 3
    findings.push({
      id: 'freshness',
      status: 'good',
      message: 'Page shows a published/updated date.',
    })
  } else {
    findings.push({
      id: 'freshness',
      status: 'warn',
      message: 'No visible publish or last-updated date found.',
      recommendation:
        'Display a clear published/updated date. AI engines weigh content freshness when choosing sources.',
    })
  }

  const hasAuthorSignal = /\b(author|written by|by\s+[A-Z][a-z]+\s+[A-Z][a-z]+)\b/i.test(page.html)
  const hasAboutOrContact = page.links.some(
    (l) => /about|contact/i.test(l.href) || /about|contact/i.test(l.text)
  )
  if (hasAuthorSignal || hasAboutOrContact) {
    score += 3
    findings.push({
      id: 'trust-signals',
      status: 'good',
      message: 'Found author byline or about/contact links, supporting E-E-A-T trust signals.',
    })
  } else {
    findings.push({
      id: 'trust-signals',
      status: 'warn',
      message: 'No author byline or about/contact links detected.',
      recommendation:
        'Add an author byline and link to an About/Contact page to strengthen trust (E-E-A-T) signals.',
    })
  }

  return { key: 'semantic', label: 'Semantic HTML & Trust', score, maxScore, findings }
}
