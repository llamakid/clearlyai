export interface CourseModule {
  id: number
  num: number
  title: string
  desc: string
  lessons: number
  available: boolean
}

export interface CourseMeta {
  slug: string
  title: string
  subtitle: string
  description: string
  icon: string
  tag: string
  totalLessons: number
  estimatedTime: string
  whatYoullLearn: string[]
  modules: CourseModule[]
}

export const COURSES_META: CourseMeta[] = [
  {
    slug: 'ai-foundations',
    title: 'AI Foundations',
    subtitle: 'Start here — no tech background needed.',
    description:
      'A plain-English introduction to artificial intelligence for everyday people. Learn what AI actually is, how to use the tools confidently, and build habits that save you real time every week.',
    icon: '🧠',
    tag: 'Beginner',
    totalLessons: 30,
    estimatedTime: '~3 hours',
    whatYoullLearn: [
      'What AI actually is — explained in plain English',
      'How to use ChatGPT, Gemini, and other tools from day one',
      'How to write prompts that get you genuinely useful results',
      'How to use AI for research, writing, and planning',
      'How to think critically about AI-generated content',
    ],
    modules: [
      { id: 1, num: 1, title: 'AI 101: What It Is & Why It Matters', desc: 'Understand what AI actually is, in plain terms. Feel confident in any conversation about it.', lessons: 5, available: true },
      { id: 2, num: 2, title: 'ChatGPT & Your Work: Getting Things Done', desc: 'Draft emails, summarize documents, brainstorm ideas, and do research in minutes — not hours.', lessons: 5, available: true },
      { id: 3, num: 3, title: 'Think Smarter: AI for Research, Planning & Decisions', desc: 'Automate repetitive tasks, build your own templates, and reclaim five or more hours every week.', lessons: 5, available: true },
      { id: 4, num: 4, title: 'Creating Content with AI: Your Voice, Amplified', desc: 'Write social posts, create proposals, respond to reviews, and plan campaigns — without a marketing team.', lessons: 5, available: true },
      { id: 5, num: 5, title: 'AI Tools Beyond ChatGPT: Image, Audio & More', desc: 'Explore image generators, voice tools, and specialized AI. Know what to trust and what to question.', lessons: 5, available: true },
      { id: 6, num: 6, title: 'Your AI Life — Staying Current and Going Further', desc: 'Choose the right tools for your needs, build your daily workflow, and keep growing as AI evolves.', lessons: 5, available: true },
    ],
  },
  {
    slug: 'ai-at-work',
    title: 'AI at Work',
    subtitle: 'Stop drowning. Start leading.',
    description:
      'Built for working professionals who want to reclaim time, look sharper, and become indispensable to their organization. Practical AI skills for the tasks eating 30–40% of your week.',
    icon: '⚡',
    tag: 'Professional',
    totalLessons: 30,
    estimatedTime: '~3 hours',
    whatYoullLearn: [
      'Why right now is the moment to build your AI advantage',
      'How to clear your inbox in a fraction of the usual time',
      'How to turn rough notes into polished reports in minutes',
      'How to handle meeting prep, notes, and follow-ups automatically',
      'How to build reusable workflows for your most repetitive tasks',
    ],
    modules: [
      { id: 7, num: 1, title: 'Your AI Advantage', desc: 'Understand why right now matters, where your time is going, and how to get your first real win this week.', lessons: 5, available: true },
      { id: 8, num: 2, title: 'Tame Your Inbox', desc: 'Draft, respond to, and summarize email in a fraction of the time — without losing your voice.', lessons: 5, available: true },
      { id: 9, num: 3, title: "Meetings That Don't Drain You", desc: 'AI-powered prep, live note-taking, action items, and follow-up emails — all handled.', lessons: 5, available: true },
      { id: 10, num: 4, title: 'Reports in Minutes, Not Hours', desc: 'Turn rough notes and bullet points into polished, professional output your team will notice.', lessons: 5, available: true },
      { id: 11, num: 5, title: 'Kill the Repetitive Stuff', desc: 'Build templates and workflows that handle your most time-consuming tasks automatically.', lessons: 5, available: true },
      { id: 12, num: 6, title: 'Be the One Who Gets It', desc: 'Lead your team into the AI era, stay current as things evolve, and become indispensable.', lessons: 5, available: true },
    ],
  },
]

export function getCourseBySlug(slug: string): CourseMeta | undefined {
  return COURSES_META.find((c) => c.slug === slug)
}
