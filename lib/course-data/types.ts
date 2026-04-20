export interface Slide {
  type: 'intro' | 'concept' | 'tool' | 'compare' | 'exercise' | 'takeaway'
  eyebrow?: string
  icon?: string
  title?: string
  body?: string[]
  body2?: string
  sub?: string
  highlight?: string
  list?: { items: string[]; negative?: boolean }
  summaryList?: string[]
  prompt?: string
  template?: boolean
  templateText?: string
  setupGuide?: boolean
  toolName?: string
  toolMaker?: string
  toolUrl?: string
  bad?: { label: string; text: string }
  good?: { label: string; text: string }
  platformGrid?: Array<{ name: string; detail: string }>
  scriptStructure?: Array<{ time: string; label: string; desc: string }>
  stackCards?: Array<{ num: string; name: string; desc: string }>
  habitCards?: Array<{ num: string; name: string; desc: string }>
  beforeAfter?: {
    before: { label: string; items: string[] }
    after: { label: string; items: string[] }
  }
  gradBlock?: { icon: string; title: string; body: string; name: string }
}

export interface Lesson {
  id: number
  title: string
  meta: string
  slides: Slide[]
}

export interface QuizQuestion {
  q: string
  options: string[]
  correct: number
  feedback: string
}

export interface CourseData {
  moduleId: number
  title: string
  subtitle: string
  lessons: Lesson[]
  quiz: QuizQuestion[]
  nextModuleId?: number
}
