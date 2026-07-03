import type { CategoryResult, Finding, PageData } from '../types'

const QUESTION_WORDS = ['what', 'why', 'how', 'when', 'where', 'who', 'which', 'can', 'does', 'is']

function looksLikeQuestion(text: string): boolean {
  const t = text.trim().toLowerCase()
  if (t.endsWith('?')) return true
  return QUESTION_WORDS.some((w) => t.startsWith(`${w} `))
}

export function analyzeContent(page: PageData): CategoryResult {
  const findings: Finding[] = []
  let score = 0
  const maxScore = 25

  const h1s = page.headings.filter((h) => h.tag === 'h1')
  if (h1s.length === 1) {
    score += 4
    findings.push({
      id: 'single-h1',
      status: 'good',
      message: `Page has exactly one H1: "${h1s[0].text}".`,
    })
  } else if (h1s.length === 0) {
    findings.push({
      id: 'single-h1',
      status: 'bad',
      message: 'Page has no H1 heading.',
      recommendation: "Add a single, clear H1 that states the page's main topic or question.",
    })
  } else {
    score += 1
    findings.push({
      id: 'single-h1',
      status: 'warn',
      message: `Page has ${h1s.length} H1 headings.`,
      recommendation: 'Use exactly one H1 per page to avoid diluting topical focus.',
    })
  }

  const questionHeadings = page.headings.filter((h) => looksLikeQuestion(h.text))
  if (questionHeadings.length >= 2) {
    score += 6
    findings.push({
      id: 'question-headings',
      status: 'good',
      message: `${questionHeadings.length} headings are phrased as questions, matching how users query AI engines.`,
    })
  } else if (questionHeadings.length === 1) {
    score += 3
    findings.push({
      id: 'question-headings',
      status: 'warn',
      message: 'Only one question-style heading found.',
      recommendation:
        'Rephrase more subheadings as direct questions (e.g. "How does X work?") to align with conversational AI queries.',
    })
  } else {
    findings.push({
      id: 'question-headings',
      status: 'bad',
      message: 'No headings are phrased as questions.',
      recommendation:
        'Add question-style subheadings that mirror how people ask AI assistants about this topic.',
    })
  }

  const lowerHtml = page.html.toLowerCase()
  const hasList = /<ul|<ol/.test(lowerHtml)
  const hasTable = /<table/.test(lowerHtml)
  if (hasList || hasTable) {
    score += 5
    findings.push({
      id: 'structured-lists',
      status: 'good',
      message: `Content includes ${hasList ? 'list' : ''}${hasList && hasTable ? ' and ' : ''}${hasTable ? 'table' : ''} elements, which AI engines extract easily.`,
    })
  } else {
    findings.push({
      id: 'structured-lists',
      status: 'warn',
      message: 'No lists or tables detected in the content.',
      recommendation:
        'Break out steps, comparisons, or key facts into bulleted lists or tables — these are the easiest formats for AI engines to lift into answers.',
    })
  }

  const summaryRegex = /\b(tl;dr|in summary|key takeaway|quick answer|short answer)\b/i
  if (summaryRegex.test(page.html)) {
    score += 4
    findings.push({
      id: 'summary-block',
      status: 'good',
      message: 'Found a TL;DR/summary-style block.',
    })
  } else {
    findings.push({
      id: 'summary-block',
      status: 'warn',
      message: 'No TL;DR or summary block detected.',
      recommendation:
        'Add a short 1-3 sentence direct-answer summary near the top of the page — this is the section AI engines most often quote.',
    })
  }

  if (page.wordCount >= 300) {
    score += 3
    findings.push({
      id: 'word-count',
      status: 'good',
      message: `Page has ${page.wordCount} words of visible content.`,
    })
  } else if (page.wordCount >= 100) {
    score += 1
    findings.push({
      id: 'word-count',
      status: 'warn',
      message: `Page has only ${page.wordCount} words.`,
      recommendation:
        'Thin content is less likely to be treated as an authoritative source. Aim for 300+ substantive words.',
    })
  } else {
    findings.push({
      id: 'word-count',
      status: 'bad',
      message: `Page has only ${page.wordCount} words.`,
      recommendation:
        'Add substantive, original content — very thin pages are rarely cited by AI engines. (If this page builds its content with JavaScript, note this audit reads the raw HTML the way most AI crawlers do.)',
    })
  }

  const altTotal = page.images.length
  const altMissing = page.images.filter((img) => !img.alt).length
  if (altTotal === 0) {
    score += 3
    findings.push({ id: 'alt-text', status: 'good', message: 'No images to evaluate for alt text.' })
  } else if (altMissing === 0) {
    score += 3
    findings.push({ id: 'alt-text', status: 'good', message: 'All images have alt text.' })
  } else {
    findings.push({
      id: 'alt-text',
      status: 'warn',
      message: `${altMissing} of ${altTotal} images are missing alt text.`,
      recommendation: 'Add descriptive alt text to all images to reinforce content context for AI crawlers.',
    })
  }

  return { key: 'content', label: 'Content Answer-ability', score, maxScore, findings }
}
