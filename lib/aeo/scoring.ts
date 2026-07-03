import type { AuditReport, PageData } from './types'
import { analyzeTechnical } from './analyzers/technical'
import { analyzeStructuredData } from './analyzers/structuredData'
import { analyzeContent } from './analyzers/content'
import { analyzeSemantic } from './analyzers/semantic'

function gradeFor(pct: number): string {
  if (pct >= 90) return 'A'
  if (pct >= 80) return 'B'
  if (pct >= 70) return 'C'
  if (pct >= 60) return 'D'
  return 'F'
}

export function buildReport(page: PageData): AuditReport {
  const categories = [
    analyzeTechnical(page),
    analyzeStructuredData(page),
    analyzeContent(page),
    analyzeSemantic(page),
  ]

  const score = categories.reduce((sum, c) => sum + c.score, 0)
  const maxScore = categories.reduce((sum, c) => sum + c.maxScore, 0)
  const pct = Math.round((score / maxScore) * 100)

  return {
    url: page.finalUrl,
    score: pct,
    maxScore: 100,
    grade: gradeFor(pct),
    categories,
    crawledAt: new Date().toISOString(),
  }
}
