import type { CategoryResult, Finding, PageData } from '../types'

function collectTypes(jsonLd: unknown[]): string[] {
  const types: string[] = []
  for (const entry of jsonLd) {
    if (!entry || typeof entry !== 'object') continue
    const obj = entry as Record<string, unknown>
    const graph = Array.isArray(obj['@graph']) ? (obj['@graph'] as unknown[]) : [obj]
    for (const item of graph) {
      if (!item || typeof item !== 'object') continue
      const t = (item as Record<string, unknown>)['@type']
      if (typeof t === 'string') types.push(t)
      if (Array.isArray(t)) types.push(...t.filter((x): x is string => typeof x === 'string'))
    }
  }
  return types
}

export function analyzeStructuredData(page: PageData): CategoryResult {
  const findings: Finding[] = []
  let score = 0
  const maxScore = 20

  const types = collectTypes(page.jsonLd)

  if (page.jsonLd.length > 0) {
    score += 6
    findings.push({
      id: 'jsonld-present',
      status: 'good',
      message: `Found ${page.jsonLd.length} JSON-LD structured data block(s): ${types.join(', ') || 'unknown type'}.`,
    })
  } else {
    findings.push({
      id: 'jsonld-present',
      status: 'bad',
      message: 'No JSON-LD structured data found.',
      recommendation:
        'Add schema.org JSON-LD markup (Organization, Article, FAQPage) so AI engines can parse your content\'s meaning directly.',
    })
  }

  const answerFriendlyTypes = ['FAQPage', 'HowTo', 'QAPage', 'Article', 'NewsArticle', 'BlogPosting']
  const hasAnswerType = types.some((t) => answerFriendlyTypes.includes(t))
  if (hasAnswerType) {
    score += 6
    findings.push({
      id: 'answer-schema',
      status: 'good',
      message: 'Content uses an answer-friendly schema type (e.g. FAQPage, HowTo, Article).',
    })
  } else {
    findings.push({
      id: 'answer-schema',
      status: 'warn',
      message: 'No FAQPage, HowTo, or Article schema detected.',
      recommendation:
        'If this page answers questions or explains a process, mark it up with FAQPage or HowTo schema to increase AI citation odds.',
    })
  }

  if (page.metaDescription && page.metaDescription.length >= 50 && page.metaDescription.length <= 160) {
    score += 4
    findings.push({
      id: 'meta-description',
      status: 'good',
      message: 'Meta description is present and well-sized.',
    })
  } else if (page.metaDescription) {
    score += 2
    findings.push({
      id: 'meta-description',
      status: 'warn',
      message: `Meta description is ${page.metaDescription.length} characters (ideal is 50-160).`,
      recommendation: 'Tighten the meta description to a concise 50-160 character summary.',
    })
  } else {
    findings.push({
      id: 'meta-description',
      status: 'bad',
      message: 'No meta description found.',
      recommendation: "Add a concise meta description summarizing the page's answer/topic.",
    })
  }

  const ogKeys = Object.keys(page.openGraph)
  if (ogKeys.includes('og:title') && ogKeys.includes('og:description')) {
    score += 4
    findings.push({
      id: 'open-graph',
      status: 'good',
      message: 'Open Graph title and description tags are present.',
    })
  } else {
    findings.push({
      id: 'open-graph',
      status: 'warn',
      message: 'Open Graph tags are missing or incomplete.',
      recommendation:
        'Add og:title, og:description, and og:image tags for consistent summarization across platforms.',
    })
  }

  return { key: 'structured-data', label: 'Structured Data', score, maxScore, findings }
}
