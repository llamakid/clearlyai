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
    subtitle: 'Start here. No tech background needed.',
    description:
      'A plain-English introduction to artificial intelligence for everyday people. Learn what AI actually is, how to use the tools confidently, and build habits that save you real time every week.',
    icon: '🧠',
    tag: 'Beginner',
    totalLessons: 30,
    estimatedTime: '~3 hours',
    whatYoullLearn: [
      'What AI actually is, in plain English',
      'How to use ChatGPT, Gemini, and other tools from day one',
      'How to write prompts that get you genuinely useful results',
      'How to use AI for research, writing, and planning',
      'How to think critically about AI-generated content',
    ],
    modules: [
      { id: 1, num: 1, title: 'AI 101: What It Is & Why It Matters', desc: 'Understand what AI actually is, in plain terms. Feel confident in any conversation about it.', lessons: 5, available: true },
      { id: 2, num: 2, title: 'ChatGPT & Your Work: Getting Things Done', desc: 'Draft emails, summarize documents, brainstorm ideas, and do research in a fraction of the usual time.', lessons: 5, available: true },
      { id: 3, num: 3, title: 'Think Smarter: AI for Research, Planning & Decisions', desc: 'Automate repetitive tasks, build your own templates, and reclaim five or more hours every week.', lessons: 5, available: true },
      { id: 4, num: 4, title: 'Creating Content with AI: Your Voice, Amplified', desc: 'Write social posts, create proposals, respond to reviews, and plan campaigns. No marketing team needed.', lessons: 5, available: true },
      { id: 5, num: 5, title: 'AI Tools Beyond ChatGPT: Image, Audio & More', desc: 'Explore image generators, voice tools, and specialized AI. Know what to trust and what to question.', lessons: 5, available: true },
      { id: 6, num: 6, title: 'Your AI Life: Staying Current and Going Further', desc: 'Choose the right tools for your needs, build your daily workflow, and keep growing as AI evolves.', lessons: 5, available: true },
    ],
  },
  {
    slug: 'ai-for-your-business',
    title: 'AI for Your Business',
    subtitle: 'More output. Lower overhead. No tech team needed.',
    description:
      'Built for small business owners who wear every hat and want to reclaim time, look more professional, and grow without adding headcount. Practical AI skills for your biggest time drains.',
    icon: '🏪',
    tag: 'Small Business',
    totalLessons: 30,
    estimatedTime: '~3 hours',
    whatYoullLearn: [
      'Why AI is the ultimate leveler for small businesses right now',
      'How to handle customer communications faster without losing your voice',
      'How to create consistent marketing content without a team or agency',
      'How to build proposals, SOPs, and admin docs in minutes',
      'How to set up reusable workflows that run your most repetitive tasks',
    ],
    modules: [
      { id: 13, num: 1, title: 'The Small Business Edge', desc: 'Understand why AI is built for owners who wear every hat, and get your first real business win today.', lessons: 5, available: true },
      { id: 14, num: 2, title: 'Customer Communications, Done Right', desc: 'Handle emails, inquiries, follow-ups, and review responses at scale, in your voice, every time.', lessons: 5, available: true },
      { id: 15, num: 3, title: 'Marketing Without a Marketing Team', desc: 'Social posts, email newsletters, and content that actually gets done. No agency, no freelancer needed.', lessons: 5, available: true },
      { id: 16, num: 4, title: 'Run Your Operations Smarter', desc: 'Proposals, hiring docs, onboarding, and SOPs. The back-office work done in minutes, not hours.', lessons: 5, available: true },
      { id: 17, num: 5, title: 'Make Smarter Business Decisions', desc: 'Research, competitive intel, financial summaries, and scenario planning. No consultant required.', lessons: 5, available: true },
      { id: 18, num: 6, title: 'Build Your AI-Powered Business', desc: 'Reusable workflows, staying current, and leading as the owner who has a real edge.', lessons: 5, available: true },
    ],
  },
  {
    slug: 'ai-at-work',
    title: 'AI at Work',
    subtitle: 'Stop drowning. Start leading.',
    description:
      'Built for working professionals who want their time back. Practical skills for the emails, meetings, and reports that eat most of your week.',
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
      { id: 8, num: 2, title: 'Tame Your Inbox', desc: 'Draft, respond to, and summarize email in a fraction of the time, without losing your voice.', lessons: 5, available: true },
      { id: 9, num: 3, title: "Meetings That Don't Drain You", desc: 'AI-powered prep, live note-taking, action items, and follow-up emails. All handled.', lessons: 5, available: true },
      { id: 10, num: 4, title: 'Reports in Minutes, Not Hours', desc: 'Turn rough notes and bullet points into polished, professional output your team will notice.', lessons: 5, available: true },
      { id: 11, num: 5, title: 'Kill the Repetitive Stuff', desc: 'Build templates and workflows that handle your most time-consuming tasks automatically.', lessons: 5, available: true },
      { id: 12, num: 6, title: 'Be the One Who Gets It', desc: 'Lead your team into the AI era, stay current as things evolve, and become indispensable.', lessons: 5, available: true },
    ],
  },
  {
    slug: 'better-prompts',
    title: 'Better Prompts, Better Results',
    subtitle: 'The one skill that makes every AI tool 10x more useful.',
    description:
      'Most people get mediocre results from AI because they don\'t know how to ask. This course teaches you how to write requests that actually get you what you need, every time.',
    icon: '🎯',
    tag: 'Universal',
    totalLessons: 30,
    estimatedTime: '~3 hours',
    whatYoullLearn: [
      'Why most people get mediocre AI results, and what to do about it',
      'The four-part formula behind every great prompt',
      'How to add context that transforms the quality of any response',
      'How to follow up and iterate your way to exactly what you need',
      'Ready-to-use prompt templates for your most common tasks',
    ],
    modules: [
      { id: 25, num: 1, title: "Why Your Prompts Aren't Working", desc: 'Understand the gap between weak and strong prompts, and get your first win today.', lessons: 5, available: true },
      { id: 26, num: 2, title: 'The Four Building Blocks of a Great Prompt', desc: 'Role, Task, Context, Format. The simple formula that makes every prompt better.', lessons: 5, available: true },
      { id: 27, num: 3, title: 'Context Is Everything', desc: 'Two sentences of context can transform your results. Learn exactly what to share and how.', lessons: 5, available: true },
      { id: 28, num: 4, title: 'The Art of the Follow-Up', desc: 'The first response is just a draft. Learn how to iterate your way to exactly what you need.', lessons: 5, available: true },
      { id: 29, num: 5, title: 'Prompts for Real Life', desc: 'Proven prompt patterns for email, research, brainstorming, writing, and planning.', lessons: 5, available: true },
      { id: 30, num: 6, title: 'Your Personal Prompt Library', desc: 'Save your best prompts, build reusable templates, and develop a system that gets sharper every week.', lessons: 5, available: true },
    ],
  },
  {
    slug: 'ai-career-growth',
    title: 'AI for Career Growth',
    subtitle: 'Get promoted. Negotiate better. Build your edge.',
    description:
      'Built for working professionals who want to move faster. Use AI to document your wins, ace your self-reviews, negotiate with confidence, build your professional brand, and stay ahead of the curve.',
    icon: '🚀',
    tag: 'Professional',
    totalLessons: 30,
    estimatedTime: '~3 hours',
    whatYoullLearn: [
      'How to document your wins so you\'re never caught off guard at review time',
      'How to write self-reviews and promotion cases that actually get noticed',
      'How to negotiate salary with research, preparation, and confidence',
      'How to build a LinkedIn profile and professional brand that opens doors',
      'How to grow your skills faster using AI as a personal learning system',
    ],
    modules: [
      { id: 31, num: 1, title: 'Your Career, Your Advantage', desc: 'Understand why right now is a career-defining moment and get your first AI-powered win this week.', lessons: 5, available: true },
      { id: 32, num: 2, title: 'Position Yourself for the Promotion', desc: 'Document your contributions, write self-reviews that get noticed, and have the promotion conversation with confidence.', lessons: 5, available: true },
      { id: 33, num: 3, title: 'Your Professional Brand', desc: 'Rebuild your LinkedIn from the ground up, sharpen your pitch, and make recruiters and decision-makers take notice.', lessons: 5, available: true },
      { id: 34, num: 4, title: 'Negotiate Like You\'ve Done Your Homework', desc: 'Research market rates, prepare your counter, and walk into salary conversations ready for every response.', lessons: 5, available: true },
      { id: 35, num: 5, title: 'Grow Faster Than Your Job Description', desc: 'Build a personal learning system, close your skill gaps, and stay ahead of what the next level requires.', lessons: 5, available: true },
      { id: 36, num: 6, title: "The Career Professional's AI Playbook", desc: 'Apply AI to job searching, interview prep, and building a sustainable edge that compounds over time.', lessons: 5, available: true },
    ],
  },
  {
    slug: 'ai-richer-retirement',
    title: 'AI for a Richer Retirement',
    subtitle: 'More time. More connection. More confidence.',
    description:
      'Built for people who finally have the time to do what matters. Health questions, family connection, travel, creative projects, staying sharp. Practical skills for a fuller retirement.',
    icon: '🌅',
    tag: 'Retirement',
    totalLessons: 30,
    estimatedTime: '~3 hours',
    whatYoullLearn: [
      'What AI actually is, in plain everyday English',
      'How to use AI to understand medical information and prepare for doctor appointments',
      'How to stay closer to family with letters, messages, and shared memories',
      'How to plan meaningful travel with less stress and more confidence',
      'How to capture your stories, pursue your hobbies, and keep learning',
    ],
    modules: [
      { id: 19, num: 1, title: 'Your New Digital Assistant', desc: 'Understand what AI is, how to talk to it naturally, and build the confidence to use it every day.', lessons: 5, available: true },
      { id: 20, num: 2, title: 'Your Health, Your Questions', desc: 'Use AI to understand medical information, prepare for appointments, and advocate for yourself.', lessons: 5, available: true },
      { id: 21, num: 3, title: 'Family, Closer Than Ever', desc: 'Write messages that land, share your stories, and stay connected no matter the distance.', lessons: 5, available: true },
      { id: 22, num: 4, title: "Travel Like You've Always Wanted", desc: 'Plan trips with ease, find experiences worth having, and travel smarter at any age.', lessons: 5, available: true },
      { id: 23, num: 5, title: 'Your Stories, Your Projects', desc: 'Write your memoir, explore genealogy, pursue hobbies, and keep learning something new.', lessons: 5, available: true },
      { id: 24, num: 6, title: 'Stay Sharp, Stay Safe', desc: 'Spot scams, protect your privacy, build daily habits, and finish strong.', lessons: 5, available: true },
    ],
  },
  {
    slug: 'getting-started-with-claude',
    title: 'Getting Started with Claude',
    subtitle: 'Anthropic\'s Claude, from zero. No tech background needed.',
    description:
      'A plain-English introduction to Claude — the AI assistant from Anthropic. Learn your way around it, hold real conversations, get everyday work done, and build a daily habit that sticks. The first course in our hands-on Claude path.',
    icon: '💬',
    tag: 'Claude · Beginner',
    totalLessons: 30,
    estimatedTime: '~3 hours',
    whatYoullLearn: [
      'What Claude is, how it\'s different, and how to get set up',
      'How to hold a real conversation and steer it to what you need',
      'How to get writing, summarizing, and planning done faster',
      'How to bring your own files, documents, and images to Claude',
      'How to use Artifacts and Memory, and build a daily Claude habit',
    ],
    modules: [
      { id: 37, num: 1, title: 'Meet Claude', desc: 'What Claude is, why it feels different, how to get in, and your very first conversation.', lessons: 5, available: true },
      { id: 38, num: 2, title: 'Your First Real Conversations', desc: 'Talk to Claude like a person, master the follow-up, and steer any answer to exactly what you need.', lessons: 5, available: true },
      { id: 39, num: 3, title: 'Everyday Wins', desc: 'Writing, summarizing, planning, and brainstorming — the everyday tasks Claude makes faster today.', lessons: 5, available: true },
      { id: 40, num: 4, title: 'Bring Your Own Stuff', desc: 'Upload files, documents, and images, ask questions about them, and keep your information safe.', lessons: 5, available: true },
      { id: 41, num: 5, title: 'Things Claude Can Build & Remember', desc: 'Use Artifacts to create things you can keep, and Memory to make Claude work the way you do.', lessons: 5, available: true },
      { id: 42, num: 6, title: 'Your Claude Habit', desc: 'Web search, knowing when to verify, staying safe, and building Claude into your everyday routine.', lessons: 5, available: true },
    ],
  },
  {
    slug: 'claude-for-real-work',
    title: 'Claude for Real Work',
    subtitle: 'Go beyond the chat box. Make Claude part of how you work.',
    description:
      'Turn Claude from a helpful chat into a real part of your workflow. Set up Projects, connect the tools you already use, automate your document work, and hand whole multi-step tasks to Claude\'s Cowork assistant. The second course in our hands-on Claude path.',
    icon: '💼',
    tag: 'Claude · Intermediate',
    totalLessons: 30,
    estimatedTime: '~3 hours',
    whatYoullLearn: [
      'How to set custom instructions so Claude always responds your way',
      'How to use Projects to give Claude lasting context without repeating yourself',
      'How to connect Claude to your email, calendar, and files',
      'How to automate Word, PDF, spreadsheet, and slide work with Skills',
      'What Cowork is and how to delegate whole multi-step tasks to it',
    ],
    modules: [
      { id: 43, num: 1, title: 'Sharper Conversations', desc: 'Move from one-off chats to a system: custom instructions, roles and styles, and an organized workspace.', lessons: 5, available: true },
      { id: 44, num: 2, title: 'Projects: Your Persistent Workspace', desc: 'Give Claude lasting context with Projects, so it knows your work without you repeating yourself.', lessons: 5, available: true },
      { id: 45, num: 3, title: 'Connect Claude to Your Tools', desc: 'Link Claude to your email, calendar, and files — and stay in full control of permissions and privacy.', lessons: 5, available: true },
      { id: 46, num: 4, title: 'Skills & Document Work', desc: 'Automate the grind: repeatable workflows for Word, PDF, spreadsheets, and slide decks.', lessons: 5, available: true },
      { id: 47, num: 5, title: 'Meet Cowork', desc: 'Claude\'s desktop assistant that does the work, not just the talking. Get set up and delegate your first task.', lessons: 5, available: true },
      { id: 48, num: 6, title: 'Delegating Real Tasks', desc: 'Hand Claude whole multi-step deliverables, choose chat vs. Cowork, and keep the agent on the rails.', lessons: 5, available: true },
    ],
  },
]

export function getCourseBySlug(slug: string): CourseMeta | undefined {
  return COURSES_META.find((c) => c.slug === slug)
}
