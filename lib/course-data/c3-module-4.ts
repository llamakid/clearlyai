import type { CourseData } from './types'

const c3module4: CourseData = {
  moduleId: 16,
  title: 'Run Your Operations Smarter',
  subtitle: 'AI for Your Business · Module 4',
  lessons: [
    // ─────────────────────────────────────────
    // Lesson 1 — The Back-Office Backlog
    // ─────────────────────────────────────────
    {
      id: 0,
      title: 'The Back-Office Backlog',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for Your Business · Lesson 1',
          icon: '📋',
          title: 'The Back-Office Backlog',
          body: [
            "By the end of this lesson, you'll understand why the back-office tasks that never get done actually matter — and how AI makes clearing that backlog realistic in a way it never was before.",
          ],
          sub: "The pile on your desk that moved to the back of your mind.",
        },
        {
          type: 'concept',
          eyebrow: "Every owner has the list",
          icon: '📝',
          title: "There's a list of operational tasks you've been meaning to do for months.",
          body: [
            "Write a real employee handbook. Build a proper onboarding checklist. Create a proposal template you can actually reuse. Document the process for how things get done so someone else could follow it.",
            "These tasks aren't difficult. They're just never urgent. A customer always needs something. A job always needs finishing. The operational foundation keeps slipping.",
            "The result: every time you hire someone, you start from scratch. Every proposal is built from memory. Every new employee figures things out on their own because there's nothing written down.",
          ],
          highlight: "The back-office backlog isn't just inconvenient. It's the thing limiting how professional, scalable, and valuable your business can become.",
        },
        {
          type: 'concept',
          eyebrow: "Why it matters more than it seems",
          icon: '🔍',
          title: "A well-documented business is worth more, runs better, and depends less on you alone.",
          body: [
            "Think about what happens when you hire someone new. Without documentation, you spend weeks training them personally. Every question comes to you. Mistakes happen because the process isn't written down.",
            "Or think about a proposal. Without a template, every quote is built from scratch — inconsistent in format, inconsistent in what it includes, taking 30–60 minutes each time.",
            "These aren't just annoyances. They're the difference between a business that runs smoothly and one that runs only as well as its owner's memory holds up.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "The AI opportunity here",
          icon: '⚡',
          title: "AI doesn't just speed up back-office work. It makes it actually happen.",
          body: [
            "The reason the back-office backlog exists isn't that these tasks are hard — it's that they require sitting down and writing, from scratch, without a clear starting point.",
            "AI eliminates the starting-from-scratch problem. You describe what you need, in rough notes or bullet points, and it produces a complete first draft. A real onboarding checklist. A structured SOP. A professional proposal template.",
            "The draft isn't perfect — but it's 80% there. And editing 80% of the way there takes a fraction of the time of building from zero.",
          ],
          highlight: "The backlog you've been carrying for months can be cleared in a single afternoon. That's the real opportunity here.",
        },
        {
          type: 'concept',
          eyebrow: "What this module covers",
          icon: '🗺️',
          title: "Four areas. Each one worth hours back in your week.",
          body: ["By the end of this module you'll have:"],
          list: {
            items: [
              'A proposal and quote template that wins business and takes 10 minutes to customize',
              'A job posting framework that attracts better candidates',
              'A new hire or contractor onboarding checklist that runs itself',
              'At least one standard operating procedure (SOP) for your most repeated process',
              'An operations library — a single place where all of this lives and can be reused',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: "The write-once mindset",
          icon: '🔄',
          title: "Every document you build this week pays dividends for years.",
          body: [
            "Here's the mindset shift for this module: everything we build is built once and reused indefinitely.",
            "A proposal template isn't just for the next quote — it's for every quote you send this year. An onboarding checklist isn't just for the next hire — it's for every person who joins your business going forward.",
            "The work feels like overhead. It isn't. It's infrastructure. And infrastructure, once built, runs quietly in the background while you focus on growth.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Audit your back-office backlog.',
          body: [
            "Open <strong>chatgpt.com</strong> and do this quick audit. It takes 5 minutes and tells you exactly what to build first.",
          ],
          prompt:
            "I run [business name], a [type of business] with [number of employees or 'just me']. I want to clear my operational back-office backlog. Based on my business type, what are the 8–10 most important documents or templates a business like mine should have in place — and which ones are most critical to build first? For each one, tell me what it should include and roughly how long it would take to create with AI help.",
          body2:
            "Save what it gives you. This is your priority list for this module and beyond. We'll build the highest-impact ones together in the lessons ahead.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: "The backlog is about to get cleared.",
          body: [
            "Every operational document you've been putting off has a first draft waiting in AI — you just have to ask for it.",
            "In the next lesson, we start with proposals and quotes: the documents most directly tied to whether you win business.",
          ],
          summaryList: [
            "The back-office backlog exists because these tasks are never urgent — but they limit how well your business can run and scale",
            "A well-documented business runs without constant owner involvement and is more professional to clients and employees",
            "AI eliminates the starting-from-scratch problem — rough notes become complete first drafts in minutes",
            "Everything built in this module is written once and reused indefinitely — it's infrastructure, not overhead",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 2 — Proposals and Quotes That Win Business
    // ─────────────────────────────────────────
    {
      id: 1,
      title: 'Proposals and Quotes That Win Business',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for Your Business · Lesson 2',
          icon: '📄',
          title: 'Proposals and Quotes That Win Business',
          body: [
            "By the end of this lesson, you'll have a proposal template that takes 10 minutes to customize, looks professional enough to win business on presentation alone, and can be reused for every future quote.",
          ],
          sub: "A proposal that looks polished closes more deals. That's not opinion — it's what clients tell you when they pick a competitor.",
        },
        {
          type: 'concept',
          eyebrow: "What a proposal is actually doing",
          icon: '🎯',
          title: "A proposal isn't just a price list. It's a trust document.",
          body: [
            "When a potential client receives your proposal, they're asking one question: do I trust this business to deliver what they're promising?",
            "A proposal that's clear, professional, and specific answers that question before they ever call a competitor. One that's vague, inconsistently formatted, or missing key information makes them nervous — even if your price is right.",
            "Most small business owners know this. The problem is that building a polished proposal from scratch takes an hour they don't have. AI gets you a strong first draft in minutes.",
          ],
          highlight: "The proposal is often a client's first look at how you operate. Make it look like you operate exceptionally well.",
        },
        {
          type: 'concept',
          eyebrow: "The structure that works",
          icon: '📋',
          title: "Every winning proposal covers the same six elements.",
          body: ["Clients want to know six things before they say yes:"],
          list: {
            items: [
              '<strong>What you understand about their situation</strong> — shows you listened, not just selling',
              '<strong>What you\'re proposing to do</strong> — the scope, clearly defined',
              '<strong>How you\'ll do it</strong> — your process or approach, briefly',
              '<strong>What it costs</strong> — clear pricing, no hidden surprises',
              '<strong>Timeline</strong> — when it starts, when it finishes, key milestones',
              '<strong>Next steps</strong> — exactly what they need to do to move forward',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: "The common mistakes",
          icon: '⚠️',
          title: "What makes clients choose a competitor even when your price is lower.",
          body: [
            "<strong>Too vague on scope.</strong> If the client isn't sure exactly what they're getting, they feel like they're taking a risk. Be specific.",
            "<strong>No process section.</strong> Showing how you work — even briefly — signals professionalism and reduces uncertainty about what it'll be like to work with you.",
            "<strong>Burying the next step.</strong> End every proposal with a clear, specific action: 'To move forward, sign below and reply to this email.' Not 'let me know if you have questions.'",
            "<strong>Generic opening.</strong> Start by referencing what they told you — their specific situation, goal, or challenge. It shows you were paying attention.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "Building the template",
          icon: '🔨',
          title: "Build the template once. Customize it for every quote in 10 minutes.",
          body: [
            "The goal isn't a proposal you write from scratch each time — it's a template with your structure, your language, and your professional sections already in place.",
            "For each new proposal, you fill in the client-specific details: their situation, the scope of their job, the price, the timeline. The structure, the process description, and the professional formatting are already there.",
            "AI builds that template in one conversation. You customize and refine it once. Then every future proposal starts from a professional foundation instead of a blank page.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "The follow-up that closes deals",
          icon: '📨',
          title: "Most proposals don't get a decision because nobody followed up.",
          body: [
            "Research on sales proposals consistently shows the same thing: 80% of decisions happen after the fifth follow-up, but most businesses follow up only once or twice.",
            "A simple follow-up email — sent 2–3 days after the proposal, then again at 7 days — dramatically improves close rates. It doesn't need to be pushy. 'Just checking in to see if you have any questions about the proposal' is enough.",
            "Write this follow-up template once with AI. Save it. Use it for every proposal you send. The difference it makes in your close rate will pay for this course many times over.",
          ],
          highlight: "The sale is almost never lost on the proposal. It's lost in the silence after it.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Build your proposal template right now.',
          body: [
            "Open <strong>chatgpt.com</strong> and generate a real, reusable proposal template for your specific business type.",
          ],
          prompt:
            "I run [business name], a [type of business]. I want to build a professional, reusable proposal template. Please create a complete proposal template that includes: (1) an opening section where I acknowledge the client's specific situation [with a placeholder], (2) a scope of work section with [placeholder for specific deliverables], (3) a brief description of my process or approach (write this based on a typical [type of business]), (4) pricing section [with placeholder for amounts], (5) timeline [with placeholders], and (6) a clear next steps section. Make it sound professional but warm — not like a legal document. Include [brackets] wherever I'll need to fill in client-specific details.",
          body2:
            "Once you have the template, reply: 'Now write a 3-sentence follow-up email I can send 3 days after sending a proposal, to check in without being pushy.' Save both. That's your proposal system.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: "Every future proposal starts from a professional foundation.",
          body: [
            "That template is now your competitive advantage. Clients comparing your proposal to a handwritten quote from a competitor are going to notice the difference.",
            "In the next lesson, we build the documents that attract good people to work with you — starting with a job posting that actually works.",
          ],
          summaryList: [
            "A proposal is a trust document — professionalism and specificity win business before price even comes up",
            "Six elements every winning proposal needs: their situation, scope, process, price, timeline, and next steps",
            "Build a template once, customize in 10 minutes for each new client — never start from scratch again",
            "80% of decisions happen after the fifth follow-up — write a follow-up template and actually use it",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 3 — Hiring Documents That Attract Good People
    // ─────────────────────────────────────────
    {
      id: 2,
      title: 'Hiring Documents That Attract Good People',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for Your Business · Lesson 3',
          icon: '👥',
          title: 'Hiring Documents That Attract Good People',
          body: [
            "By the end of this lesson, you'll have a job posting framework that attracts better candidates, a set of screening questions, and a simple offer letter template — so your next hire starts on the right foot.",
          ],
          sub: "Good hiring starts before the interview.",
        },
        {
          type: 'concept',
          eyebrow: "The hiring document most owners get wrong",
          icon: '❌',
          title: "Most small business job postings read like a requirements list. That's why they attract the wrong people.",
          body: [
            "The typical small business job posting: a list of duties, a list of qualifications, maybe a line about salary. It reads like a legal document.",
            "The problem: a posting that describes only requirements attracts candidates who are checking boxes — not people who are genuinely excited about the work and the business.",
            "The best candidates — the ones you actually want — are choosing between multiple opportunities. They're reading job postings to find a place they'll be glad to work. Give them something to want.",
          ],
          highlight: "Your job posting is an advertisement. You're selling the opportunity, not just listing the requirements.",
        },
        {
          type: 'concept',
          eyebrow: "The structure that attracts better candidates",
          icon: '📋',
          title: "A job posting that works does four things.",
          body: ["The best job postings cover these in order:"],
          list: {
            items: [
              '<strong>Who you are</strong> — a 2–3 sentence description of your business that makes someone want to be part of it',
              '<strong>What this role is about</strong> — the purpose and impact of the job, not just the task list',
              '<strong>What you\'re looking for</strong> — specific qualities and experience (requirements vs. nice-to-haves, clearly separated)',
              '<strong>What they get</strong> — compensation, flexibility, growth opportunity, culture — whatever makes your business a good place to work',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: "Screening before the interview",
          icon: '🔍',
          title: "A few screening questions save you hours of bad interviews.",
          body: [
            "The most expensive thing in hiring is a bad hire. The second most expensive is spending five hours interviewing people you'd have screened out in 10 minutes.",
            "Adding two or three short application questions filters for candidates who read carefully, can communicate clearly, and are genuinely interested in your specific business — not just any job.",
            "Good screening questions: 'What appeals to you about working for a small, owner-operated business?' 'Describe a situation where you had to figure something out without much guidance.' 'What's one thing you'd want to understand about this role before accepting it?'",
          ],
          highlight: "The candidates who answer these questions thoughtfully are your candidates. The ones who send a generic cover letter aren't.",
        },
        {
          type: 'concept',
          eyebrow: "The offer letter",
          icon: '✍️',
          title: "An offer letter doesn't have to be complicated — but it does have to be clear.",
          body: [
            "A small business offer letter doesn't need to be a 10-page legal document. But it does need to cover the basics clearly: role, start date, compensation, hours, and any conditions (background check, reference check, probationary period).",
            "Clarity in an offer letter sets the right expectations from day one. Vague offers lead to misunderstandings about pay, hours, and responsibilities — all of which become problems in the first 30 days.",
            "AI can draft a professional, clear offer letter in under a minute. You review it, fill in the specifics, and have your attorney look it over once if your state requires it.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "Hiring as a small business",
          icon: '🤝',
          title: "Your size is an advantage. Lead with it.",
          body: [
            "Many small business owners feel like they can't compete with larger employers on salary or benefits. Sometimes that's true. But size comes with real advantages that matter deeply to the right candidates.",
            "Direct access to the owner. Real impact from day one. Variety in the role. The ability to grow fast when the business grows. A culture that isn't defined by a policy binder.",
            "Lead with these in your job posting. The candidate who wants to be a small piece of a large machine is not your candidate. The one who wants to matter — that person is looking for exactly what you're offering.",
          ],
          highlight: "Small business isn't a compromise for the right hire. It's exactly what they want.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Write a job posting for a role you need (or might need).',
          body: [
            "Open <strong>chatgpt.com</strong> and draft a real job posting. Even if you're not hiring right now, having a template ready is valuable.",
          ],
          prompt:
            "I run [business name], a [type of business]. I need to hire a [job title]. Here's what this role involves: [brief description of key responsibilities]. Here's what I'm looking for in a candidate: [qualities, experience, or skills that matter most]. Here's what makes working here good: [what you offer — flexibility, variety, direct access to the owner, competitive pay, etc.]. Please write a job posting that: opens with an exciting 2-sentence description of my business, describes the role's purpose and impact (not just a task list), lists requirements and nice-to-haves separately, and ends with what we offer. Make it sound like a place someone would actually want to work.",
          body2:
            "After the posting, reply: 'Give me 3 screening questions I can add to the application that will help me identify the right candidates.' Save both. That's your hiring framework.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: "Better job postings bring better candidates. Better candidates build better businesses.",
          body: [
            "The document you just built isn't just for the next hire — it's the foundation for every hire. Update the specifics each time, but the structure and the voice of your business are already there.",
            "In the next lesson, we tackle what happens after someone is hired: onboarding and the SOPs that let your business run without constant owner involvement.",
          ],
          summaryList: [
            "A job posting is an advertisement — sell the opportunity, don't just list requirements",
            "Structure: who you are, what the role is about, what you're looking for, what they get",
            "Two or three screening questions filter great candidates from generic applicants before a single interview",
            "Your size is an advantage to the right hire — lead with what makes a small business a great place to work",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 4 — Onboarding and SOPs That Run Themselves
    // ─────────────────────────────────────────
    {
      id: 3,
      title: 'Onboarding and SOPs That Run Themselves',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for Your Business · Lesson 4',
          icon: '🗂️',
          title: 'Onboarding and SOPs That Run Themselves',
          body: [
            "By the end of this lesson, you'll have a new hire onboarding checklist and at least one standard operating procedure — so the next person who joins your business hits the ground running without needing you to personally walk them through everything.",
          ],
          sub: "The best operations run without the owner having to be in the room.",
        },
        {
          type: 'concept',
          eyebrow: "The cost of no onboarding",
          icon: '💸',
          title: "Bad onboarding is one of the most expensive things a small business can do.",
          body: [
            "Studies consistently show that employees who experience poor onboarding are significantly more likely to leave within the first 90 days. Recruiting, hiring, and training a replacement costs most businesses 50–200% of that employee's annual salary.",
            "Beyond turnover, poor onboarding means more mistakes in the early weeks, more time from the owner answering basic questions, and a slower path to the new person actually contributing.",
            "Most small business onboarding isn't bad on purpose. It's just not documented. 'I'll just show them when they start' is the default — and it's expensive.",
          ],
          highlight: "A written onboarding process is one of the highest-ROI documents a small business can build. And AI creates the first draft in minutes.",
        },
        {
          type: 'concept',
          eyebrow: "What good onboarding covers",
          icon: '📋',
          title: "A new hire checklist for their first 30 days.",
          body: ["Good onboarding is organized by time — day one, week one, month one:"],
          list: {
            items: [
              '<strong>Day one</strong> — paperwork, introductions, tools access, a tour of how the business works, their role in it',
              '<strong>Week one</strong> — shadow key processes, understand customer expectations, learn the tools they\'ll use daily',
              '<strong>Week two to three</strong> — start doing the work with supervision, ask questions, flag confusion',
              '<strong>Month one</strong> — operating independently on core tasks, feedback conversation, clear on what success looks like',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: "What a SOP actually is",
          icon: '📘',
          title: "An SOP is just a written version of 'here's how we do this.'",
          body: [
            "Standard operating procedure sounds formal and corporate. What it actually is: a written description of how your business handles a specific task, so anyone following it gets the same result you would.",
            "Every small business has unwritten SOPs — they're in the owner's head. The risk: if you're the only one who knows how something gets done, you're the bottleneck for everything.",
            "SOPs aren't about bureaucracy. They're about freeing yourself from being the manual for every process in your business.",
          ],
          highlight: "An SOP answers the question: 'What does good look like here?' — so anyone can deliver it, not just you.",
        },
        {
          type: 'concept',
          eyebrow: "What to write an SOP for",
          icon: '🎯',
          title: "Start with your most repeated, most important processes.",
          body: [
            "You don't need an SOP for everything — you need one for the things that happen often and matter a lot. Ask yourself: what are the processes in my business where a mistake costs money, damages a customer relationship, or has to be redone?",
            "For most small businesses, the top candidates: how a new customer gets onboarded, how a job or project gets kicked off, how the work gets quality-checked before delivery, and how problems or complaints get handled.",
            "Pick one. Build the SOP. Then add the next one. Over time, you'll have a library — but it starts with one.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "How to write an SOP with AI",
          icon: '🔨',
          title: "Describe the process out loud. AI turns it into a document.",
          body: [
            "The fastest way to write an SOP: describe the process in your own words — even messy, stream-of-consciousness notes. AI takes that raw description and structures it into a clear, numbered, step-by-step document.",
            "You don't need to know what format it should take. You just need to know the process — and you already do. You've been doing it for years.",
            "After the first draft, read through it once and fix anything that's wrong or missing. That review usually takes 10–15 minutes. You'll have a document that would have taken you half a day to write from scratch.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Build a new hire checklist and your first SOP.',
          body: [
            "Open <strong>chatgpt.com</strong> and do both parts. They build on each other.",
          ],
          prompt:
            "Part 1 — New hire onboarding checklist: I run [business name], a [type of business]. Please build a 30-day new hire onboarding checklist organized by Day 1, Week 1, Weeks 2–3, and Month 1. Include the logistical setup tasks (paperwork, tools, access), the learning milestones for understanding our business and customers, and a suggested check-in structure for feedback and questions.\n\nPart 2 — First SOP: Now write a step-by-step SOP for [your most repeated important process — e.g., 'how we handle a new customer inquiry from first contact to booked job' or 'how we complete and deliver a finished project to a client']. Use numbered steps. Include what to do when something goes wrong.",
          body2:
            "Once you have both documents, read through the SOP and add anything missing. These two documents alone will save you hours the next time you hire someone — and every time after.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: "Your business just got a little less dependent on only you.",
          body: [
            "That's the goal of every SOP and every onboarding document: making your business something that can run well even when you're not personally managing every detail.",
            "In the final lesson, we bring all of this together into an operations library — one place where every template, SOP, and document lives and can be found.",
          ],
          summaryList: [
            "Poor onboarding leads to early turnover — replacing an employee costs 50–200% of their annual salary",
            "Good onboarding is organized by time: day one, week one, weeks two to three, month one",
            "An SOP is just a written version of 'here's how we do this' — it frees you from being the manual for every process",
            "Start with your most repeated, highest-stakes process — describe it in rough notes and AI turns it into a clear document",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 5 — Your Operations Playbook
    // ─────────────────────────────────────────
    {
      id: 4,
      title: 'Your Operations Playbook',
      meta: '9 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for Your Business · Lesson 5',
          icon: '📚',
          title: 'Your Operations Playbook',
          body: [
            "By the end of this lesson, you'll have a plan for your operations library — one place where every template, SOP, and document lives — and a clear picture of how a documented business runs differently from an undocumented one.",
          ],
          sub: "Everything you've built in this module, organized for permanent use.",
        },
        {
          type: 'concept',
          eyebrow: "The problem with documents that live nowhere",
          icon: '🔍',
          title: "A document nobody can find might as well not exist.",
          body: [
            "Many business owners have built at least some of this: a proposal template in an old email draft, an onboarding checklist buried in a folder, a process described in a text thread somewhere.",
            "Documents that aren't organized and findable don't get used. The next hire doesn't find the checklist. The next proposal starts from memory because the template is somewhere but nobody remembers where.",
            "An operations playbook solves this. One location. Clear categories. Everything in the same place. Two minutes to find any document your business needs.",
          ],
          highlight: "The value of every document you build multiplies when it's organized and actually used.",
        },
        {
          type: 'concept',
          eyebrow: "Building your playbook",
          icon: '🗂️',
          title: "A simple structure that works for any small business.",
          body: ["Organize your operations library into four sections:"],
          list: {
            items: [
              '<strong>Client documents</strong> — proposal templates, quote templates, follow-up email templates, contracts',
              '<strong>Hiring documents</strong> — job posting templates, screening questions, offer letter template',
              '<strong>Onboarding documents</strong> — new hire checklists, first-30-days schedule, tool access guide',
              '<strong>SOPs</strong> — step-by-step processes for every core function in your business, added over time',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: "Where to keep it",
          icon: '💾',
          title: "Pick one place. Make it the only place.",
          body: [
            "<strong>Google Drive or Google Docs</strong> — free, accessible from anywhere, easy to share with employees or contractors. Create a folder called 'Operations' and organize by the four categories above.",
            "<strong>Notion</strong> — slightly more powerful for structured documents with checklists and linked pages. Better if you have a team who will reference it regularly.",
            "<strong>A shared folder on your device</strong> — works fine for solo operators, but not ideal once you have anyone else who needs access.",
            "The tool matters less than the habit of putting everything there. When you build a new document, it goes in the playbook. Always.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "Adding SOPs over time",
          icon: '📈',
          title: "One SOP a month builds a complete playbook in a year.",
          body: [
            "You don't need to document everything at once. One SOP a month — the next time a process frustrates you, or a mistake happens because something wasn't written down — and in a year you have a comprehensive operations manual.",
            "The trigger to write a new SOP: any time you answer the same question twice, or find yourself doing the same task correction more than once. That's a sign the process needs to be documented.",
            "AI makes each one take 20–30 minutes. The cumulative effect of a year of one-a-month is a business that runs like a much larger, more organized operation.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "What a documented business is worth",
          icon: '💰',
          title: "Documentation doesn't just help you run the business. It makes the business more valuable.",
          body: [
            "If you ever want to sell your business, bring on a partner, or step back from day-to-day operations — documentation is what makes that possible.",
            "A business where every process lives in the owner's head can't be sold easily. A buyer can't run what they can't learn. A business with documented processes, templates, and SOPs has a transfer value that an undocumented one doesn't.",
            "Even if you never sell, documentation lets you take a real vacation. It lets you delegate without being the backup for every question. It lets your business run without you having to be present for everything.",
          ],
          highlight: "Documentation is the difference between owning a business and owning a job. A job can't run without you. A business can.",
        },
        {
          type: 'concept',
          eyebrow: "The compounding effect",
          icon: '📊',
          title: "How your operations look six months from now.",
          body: ["Each document you build changes something specific:"],
          beforeAfter: {
            before: {
              label: 'Without an operations playbook',
              items: [
                'Every proposal built from memory — inconsistent and slow',
                'New hires figure things out on their own — mistakes and turnover',
                'You answer the same questions about your process every week',
                'The business depends entirely on your personal knowledge',
                'A vacation means the business stops — or you work through it',
              ],
            },
            after: {
              label: 'With your operations playbook',
              items: [
                'Proposals from a template — professional, consistent, 10 minutes',
                'New hires follow a checklist — faster to productive, less time from you',
                'SOPs answer the repeated questions automatically',
                'The business runs on documented processes, not just memory',
                'You can step away — things don\'t fall apart when you do',
              ],
            },
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: "Set up your operations playbook right now.",
          body: [
            "Open <strong>chatgpt.com</strong> and use this prompt to build the index for your operations library. Then create the actual folder or Notion page today — not next week.",
          ],
          prompt:
            "I run [business name], a [type of business]. I want to set up an operations playbook — a single organized location for all my business documents and processes. Based on my business type, please: (1) create a complete table of contents for my operations playbook organized into: Client Documents, Hiring Documents, Onboarding Documents, and SOPs, (2) list the specific documents that should go in each section, marking which ones I've already built this module with [DONE] and which ones to build next, (3) suggest the top 3 SOPs I should prioritize writing first based on my business type.",
          body2:
            "Create a Google Drive folder called '[Business Name] Operations Playbook' right now and add the documents you've built this module. Block 30 minutes on your calendar each month to add one more SOP.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 4 Complete',
          icon: '🎓',
          title: "You're building a business, not a job.",
          body: [
            "Every document in your playbook is a piece of infrastructure — built once, working indefinitely. A proposal template that wins business. An onboarding checklist that gets new hires productive faster. SOPs that mean your process doesn't live only in your head.",
            "That's what separates a business from a job: the systems that let it run without the owner being present for every decision.",
          ],
          summaryList: [
            "An operations playbook is one organized location for all business documents — four sections: client, hiring, onboarding, SOPs",
            "Documents that aren't findable don't get used — pick one place and make it the only place",
            "One SOP per month builds a comprehensive operations manual in a year",
            "Documentation makes your business more valuable, more scalable, and less dependent on you personally",
          ],
          gradBlock: {
            icon: '📋',
            title: 'Your Operations Foundation Is Built',
            body: "Proposal templates that win business. Hiring documents that attract good people. An onboarding checklist that gets new hires productive. SOPs that capture how your business works. That's the foundation of a business that runs well — whether you're in the room or not.",
            name: 'Module 4 Complete',
          },
        },
      ],
    },
  ],

  quiz: [
    {
      q: "What is the most important purpose of a business proposal beyond listing a price?",
      options: [
        "To give clients as much information as possible about your business history",
        "To serve as a trust document — showing professionalism and specificity that makes clients confident in hiring you",
        "To legally protect your business from scope creep",
        "To demonstrate that your price is lower than competitors",
      ],
      correct: 1,
      feedback:
        "A proposal is primarily a trust document. When a client receives it, they're asking: do I trust this business to deliver? A clear, professional, specific proposal answers that question before they look elsewhere — often before price even becomes a deciding factor.",
    },
    {
      q: "What is the most common reason a small business loses a deal after sending a proposal?",
      options: [
        "The price was too high",
        "The proposal was too long",
        "No one followed up — the sale was lost in the silence after sending",
        "The client chose a larger, more established competitor",
      ],
      correct: 2,
      feedback:
        "Research consistently shows that 80% of decisions happen after the fifth follow-up, but most businesses follow up only once or twice. The sale is rarely lost on the proposal itself — it's lost in the silence afterward. A simple, non-pushy follow-up email sent 2–3 days later dramatically improves close rates.",
    },
    {
      q: "What does a well-written job posting do differently from a typical requirements list?",
      options: [
        "It includes salary ranges, which legally must be disclosed",
        "It sells the opportunity — describing who you are, the role's purpose, and what makes working there good",
        "It lists more requirements to attract more qualified candidates",
        "It focuses entirely on what you need rather than what you offer",
      ],
      correct: 1,
      feedback:
        "A job posting is an advertisement. The best candidates — the ones you want — are choosing between multiple opportunities. A posting that only lists requirements attracts box-checkers. One that describes who you are, what the role means, and what makes your business a great place to work attracts people who actually want to be there.",
    },
    {
      q: "What is a Standard Operating Procedure (SOP) and why does it matter for a small business?",
      options: [
        "A legal contract that defines how employees must perform their duties",
        "A written description of how a process gets done — so anyone can deliver consistent results without the owner personally explaining it",
        "A government-required document for businesses with more than 10 employees",
        "A financial report showing how operations are performing",
      ],
      correct: 1,
      feedback:
        "An SOP is simply a written version of 'here's how we do this.' For small businesses, the value is freeing the owner from being the manual for every process. When procedures live only in the owner's head, the owner is a bottleneck. SOPs let the business run consistently without constant personal involvement.",
    },
    {
      q: "What is the key difference between a business and a job, according to this module?",
      options: [
        "A business has employees; a job doesn't",
        "A business generates more revenue",
        "A business has documented systems that let it run without the owner present; a job can't run without the owner",
        "A business is incorporated; a job is just self-employment",
      ],
      correct: 2,
      feedback:
        "The core distinction: a job requires the owner to be present for everything — it runs on personal knowledge, memory, and constant involvement. A business has systems, documentation, and processes that let it run even when the owner steps back. Every SOP, template, and playbook document moves you from owning a job to owning a business.",
    },
  ],
}

export default c3module4
