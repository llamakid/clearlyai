export type FindingStatus = 'good' | 'warn' | 'bad'

export interface Finding {
  id: string
  status: FindingStatus
  message: string
  recommendation?: string
}

export interface CategoryResult {
  key: string
  label: string
  score: number
  maxScore: number
  findings: Finding[]
}

export interface PageData {
  url: string
  finalUrl: string
  statusCode: number
  html: string
  title: string | null
  metaDescription: string | null
  headings: { tag: string; text: string }[]
  jsonLd: unknown[]
  openGraph: Record<string, string>
  robotsTxt: { found: boolean; content: string | null; blocksAll: boolean }
  sitemapFound: boolean
  canonicalUrl: string | null
  wordCount: number
  loadTimeMs: number
  links: { href: string; text: string; internal: boolean }[]
  images: { src: string; alt: string | null }[]
}

export interface AuditReport {
  url: string
  score: number
  maxScore: number
  grade: string
  categories: CategoryResult[]
  crawledAt: string
}
