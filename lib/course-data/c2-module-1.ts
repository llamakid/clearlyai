import type { CourseData } from './types'

const c2module1: CourseData = {
  moduleId: 7,
  title: 'Your AI Advantage',
  subtitle: 'AI at Work · Module 1',
  lessons: [
    // ─────────────────────────────────────────
    // Lesson 1 — The Moment You're In
    // ─────────────────────────────────────────
    {
      id: 0,
      title: "The Moment You're In",
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI at Work · Lesson 1',
          icon: '⚡',
          title: "The Moment You're In",
          body: [
            "By the end of this lesson, you'll understand why right now — not someday — is the moment that matters for your career. And you'll move from anxious to ready.",
          ],
          sub: "Let's start with what's actually happening.",
        },
        {
          type: 'concept',
          eyebrow: "The thing nobody's saying out loud",
          icon: '🤫',
          title: "You're worried. And you're not alone.",
          body: [
            "There's a conversation happening quietly in offices everywhere. Younger colleagues are finishing in an hour what used to take a day. Leadership is asking what your team is doing with AI. And you're thinking: <em>am I falling behind?</em>",
            "That feeling is completely valid. And it's also the right signal — because it means you're paying attention.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "What's really happening",
          icon: '📈',
          title: "AI isn't changing what work <em>is.</em> It's changing how fast it gets done.",
          body: [
            "The core of your job — your expertise, your relationships, your judgment calls built over years — none of that is going away.",
            "What's changing: the routine parts of your work can now be done much, much faster. Drafting. Summarizing. Researching. Reporting. Tasks that used to take hours can take minutes.",
          ],
          highlight: "The people winning right now aren't the most technical. They're the most willing to try.",
        },
        {
          type: 'concept',
          eyebrow: "Let's address the fear directly",
          icon: '🎯',
          title: "AI isn't replacing people. But something is.",
          body: [
            "Here's what the research and real-world hiring actually shows: AI isn't replacing experienced professionals. AI-fluent professionals are replacing AI-illiterate ones.",
            "The risk isn't that a machine takes your job. The risk is that someone your age — with your experience — learns to use these tools and simply outperforms you.",
          ],
          highlight: "The answer to that risk is exactly what you're doing right now.",
        },
        {
          type: 'concept',
          eyebrow: 'The timing',
          icon: '🪟',
          title: 'The window is still open — but it won\'t be forever.',
          body: [
            "Three years ago, almost no working professionals were using AI. Today, early adopters are pulling ahead. In two or three more years, AI fluency will be table stakes — like knowing how to use a spreadsheet.",
            "Right now, you're in the best possible position: early enough to build a real advantage, with tools that are actually ready to use.",
          ],
          highlight: "Starting today puts you ahead of most people in your organization. That gap widens every month you wait.",
        },
        {
          type: 'concept',
          eyebrow: 'Two weeks from now',
          icon: '🔄',
          title: "Here's what starts to look different.",
          body: ['The change isn\'t dramatic at first. It\'s in the everyday moments.'],
          beforeAfter: {
            before: {
              label: 'Before this course',
              items: [
                'Spending 45 minutes on a single email',
                'Dreading Monday morning status reports',
                'Staying late to catch up on documentation',
                'Watching colleagues finish things faster',
                "Googling 'how to use AI at work'",
              ],
            },
            after: {
              label: 'After this course',
              items: [
                'Drafting that email in 5 minutes',
                'Reports done before lunch',
                'Documentation handled as you go',
                'Being the person others ask for help',
                'Actually using AI — every single day',
              ],
            },
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Name your moment.',
          body: [
            "Open <strong>chatgpt.com</strong> in a new browser tab and type this in. Be honest — this is just for you.",
          ],
          prompt:
            "I'm a [your job title] at [type of company or industry]. I've been feeling behind on AI — like it's moving fast and I'm not keeping up. Without any judgment, can you tell me: what are the 3 most realistic ways someone in my role could start using AI this week to save time?",
          body2:
            "Read what comes back. Notice the suggestions are specific to your role — not generic tech advice. That's the whole point.",
          setupGuide: true,
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: "You're not behind. You're starting.",
          body: [
            "The worry you felt? That's not a sign you're too late — it's a sign you're ready. The professionals who don't feel that urgency are the ones who'll wake up behind.",
            "In the next lesson, we cut through all the hype and give you an accurate, useful picture of what AI tools actually do.",
          ],
          summaryList: [
            "The real risk is AI-fluent colleagues outpacing you — not machines replacing you",
            "The window to get ahead is still open right now",
            "Your expertise and judgment stay irreplaceable — AI handles the routine",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 2 — What AI Actually Is (For You)
    // ─────────────────────────────────────────
    {
      id: 1,
      title: 'What AI Actually Is (For You)',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI at Work · Lesson 2',
          icon: '🧠',
          title: 'What AI Actually Is (For You)',
          body: [
            "By the end of this lesson, you'll have a clear, accurate mental model of what AI tools can and can't do — so you're never surprised and always getting value from them.",
          ],
          sub: 'No hype. No jargon. Just what you actually need to know.',
        },
        {
          type: 'concept',
          eyebrow: "Let's cut through it",
          icon: '✂️',
          title: "AI is not what the headlines say.",
          body: [
            "Headlines say AI is either going to save the world or destroy it. Neither is useful for you, today, at work.",
            "What's actually true: AI tools are software that can read what you type, understand the meaning behind it, and generate a useful response — in seconds.",
            "It's impressive technology. It's also a tool. Think of it like a very capable calculator that works with language instead of numbers.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'The mental model that sticks',
          icon: '👤',
          title: 'A brilliant assistant who has read <em>everything.</em>',
          body: [
            "Here's the most useful way to think about modern AI: imagine an assistant who has read millions of books, articles, emails, reports, and websites — across almost every topic imaginable.",
            "You can ask them to draft things, summarize things, explain things, research things, or improve things you've already written. They respond in seconds.",
            "The catch: they need clear direction. Vague requests get vague results. Specific requests get specific, useful results.",
          ],
          highlight: "The quality of what you get back is almost entirely determined by how clearly you ask.",
        },
        {
          type: 'concept',
          eyebrow: 'Where AI shines',
          icon: '⭐',
          title: "What AI tools are genuinely great at.",
          body: ["Here's where you'll get the most consistent value:"],
          list: {
            items: [
              'Writing first drafts of emails, reports, and documents',
              'Summarizing long texts into key points',
              'Brainstorming and giving you options to choose from',
              'Reformatting or reorganizing content you\'ve already written',
              'Explaining complex topics in plain language',
              'Turning rough notes into polished professional output',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: 'Important honesty',
          icon: '⚠️',
          title: "And where it can trip you up.",
          body: ["Knowing the limits keeps you in control — always:"],
          list: {
            items: [
              'It can be confidently wrong — always verify facts and numbers',
              "It doesn't know what happened after its training cutoff date",
              "It doesn't know your company's specific context unless you tell it",
              'It can sound polished while missing your actual point — read critically',
            ],
            negative: true,
          },
          highlight: "None of these are reasons to avoid AI. They're reasons to use it thoughtfully — which you already do.",
        },
        {
          type: 'concept',
          eyebrow: "The skill nobody talks about",
          icon: '🔄',
          title: 'The real skill is the follow-up.',
          body: [
            "Most people try AI once, get a mediocre response, and decide it doesn't work. They're missing the most important part.",
            "AI works best as a conversation. If the first response isn't right: tell it. 'Make it shorter.' 'More formal.' 'That's not what I meant — here's what I actually need.'",
            "Every follow-up gets you closer to exactly what you want. Experienced AI users rarely get a perfect result on the first try. They get there on the second or third.",
          ],
          highlight: "The back-and-forth is the skill. Most people never figure this out.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Ask it something — then push it.',
          body: [
            "Open ChatGPT and try this two-step exercise. First ask, then refine.",
          ],
          prompt:
            "Step 1 — Ask: 'Explain [a topic relevant to your work or industry] in plain English, like I'm explaining it to a smart colleague who doesn't work in our field.'\n\nStep 2 — Refine: Whatever it says, reply with: 'Good. Now make it 30% shorter and give me one concrete real-world example.'",
          body2:
            "Notice how the second response is better than the first. That's the back-and-forth at work — and it's the skill that separates people who get value from AI from those who don't.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: 'You know exactly what you\'re working with.',
          body: [
            "You have an accurate mental model — not the hype version, not the fear version. The real, useful version.",
            "In the next lesson, we get specific about where your time is actually going — and put a real number on what's possible.",
          ],
          summaryList: [
            'AI is a fast, capable tool — not magic, not a threat',
            'It excels at drafting, summarizing, explaining, and organizing',
            'The back-and-forth is where the real value is — don\'t stop at the first response',
            'Always verify facts and numbers — AI can be confidently wrong',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 3 — The 30–40% Problem
    // ─────────────────────────────────────────
    {
      id: 2,
      title: 'The 30–40% Problem',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI at Work · Lesson 3',
          icon: '⏰',
          title: 'The 30–40% Problem',
          body: [
            "By the end of this lesson, you'll know exactly where your time is going — and exactly what AI is going to do about it.",
          ],
          sub: "Let's put real numbers on what's eating your week.",
        },
        {
          type: 'concept',
          eyebrow: "Let's name it",
          icon: '📊',
          title: "A third of your week isn't doing the work. It's <em>documenting</em> the work.",
          body: [
            "Studies on knowledge workers consistently find the same thing: 30–40% of a professional's week goes to communication and documentation.",
            "If you work 50 hours a week, 15–20 of those hours are spent on email, reports, status updates, meeting follow-ups, and written communication.",
            "Not thinking. Not creating. Not deciding. <em>Writing about the work.</em>",
          ],
          highlight: "That's not a personal productivity problem. That's a structural one — and AI directly addresses it.",
        },
        {
          type: 'concept',
          eyebrow: 'The numbers are striking',
          icon: '🔢',
          title: "Here's what that actually costs you.",
          body: [
            "Let's do simple math. If just 2 hours of your day goes to email, reports, and repetitive documentation:",
            "That's 10 hours a week. 40 hours a month. <strong>500 hours a year.</strong>",
            "That's more than 12 full work weeks. Every year. Gone.",
          ],
          highlight: "What would you do with 500 hours back? Deeper client relationships? Strategic work that advances your career? Just leaving on time?",
        },
        {
          type: 'concept',
          eyebrow: 'The biggest culprit',
          icon: '📧',
          title: "Email is eating your most focused time.",
          body: [
            "Studies consistently find professionals spend 2–3 hours a day on email — not reading, but writing. Drafting responses, choosing words, second-guessing tone.",
            "The pain isn't just the time. It's that email requires real cognitive effort. You're context-switching, worrying about how something lands, spending mental energy on communication instead of the thing you're actually paid to think about.",
            "AI can draft those emails in seconds. Your job becomes reviewing and sending.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'The weekly grind',
          icon: '📄',
          title: "Reports that take hours can take minutes.",
          body: [
            "Weekly status reports. Client summaries. Project updates. Meeting recaps. End-of-month rundowns.",
            "These tasks are pure documentation — you know the content, you just need to write it down in a polished way. That's exactly what AI is built for.",
            "Paste in your rough notes or bullet points. Tell it the format you need. Get a first draft in 30 seconds that you spend 3 minutes editing.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'The quiet drain',
          icon: '🔁',
          title: "Repetitive tasks are the hidden cost.",
          body: [
            "Beyond email and reports: the tasks you do every week that follow the same pattern. Client check-in emails. Proposal templates. Meeting agendas. Onboarding notes. Follow-up summaries.",
            "Each one feels small. Together they're enormous. And almost all of them can be handled with an AI template you build once and reuse forever.",
            "We'll build those templates in Module 5. For now — start noticing them.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Your personal time audit.',
          body: [
            "Open ChatGPT and do this quick exercise. The more specific you are, the more useful the result.",
          ],
          prompt:
            "I want to do a quick time audit. I work as a [job title] and here's roughly how my week goes: [describe your week — what takes the most time, what feels repetitive, what you dread doing]. Based on this, what are my top 3 biggest time drains that AI could realistically help me reduce — and how?",
          body2:
            "Save what it tells you. We're going to work through each one of those in the modules ahead.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: "Now you know what you're reclaiming.",
          body: [
            "You've put a real number on the drain. That 30–40% isn't overhead — it's time that belongs to higher-value work, and AI can hand most of it back.",
            "In the next lesson, we make it real. You're going to handle something from your actual work life and see exactly how much faster it goes.",
          ],
          summaryList: [
            '30–40% of your week goes to communication and documentation',
            "That's 400–500 hours a year — most of which AI can dramatically compress",
            'Email, reports, and repetitive tasks are the three biggest targets',
            "You've identified your personal top 3 — we'll tackle them one by one",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 4 — Your First Win Today
    // ─────────────────────────────────────────
    {
      id: 3,
      title: 'Your First Win — Today',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI at Work · Lesson 4',
          icon: '🏆',
          title: 'Your First Win — Today',
          body: [
            "By the end of this lesson, you'll have used AI to draft a real work email — from blank page to send-ready. Not a demo. Your actual work.",
          ],
          sub: 'This is where it gets real.',
        },
        {
          type: 'concept',
          eyebrow: 'Why we start here',
          icon: '📧',
          title: 'Email is the perfect first win.',
          body: [
            "We're starting with email because it's where most professionals spend the most time, the results are immediate, and there's zero risk — you review everything before it goes out.",
            "Every email you send from this point on can be drafted with AI first. You'll spend your time editing and personalizing — not staring at a blank screen trying to figure out how to start.",
          ],
          highlight: "The blank screen problem goes away. Permanently.",
        },
        {
          type: 'concept',
          eyebrow: 'The old way',
          icon: '😓',
          title: "Here's what writing a work email usually looks like.",
          body: [
            "You stare at the blank reply box. You type a few words, delete them. You think about how the other person will read it. You write the whole thing, re-read it twice, change a few things, and finally hit send — 20 minutes later.",
            "That's not a character flaw. That's how writing works when you're starting from nothing.",
            "AI doesn't start from nothing.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'The setup',
          icon: '🎯',
          title: 'Give AI context. Get a draft worth editing.',
          body: [
            "The key to a great AI draft is giving it three things:",
            "<strong>Who you're writing to</strong> — their role, your relationship, the right tone.",
            "<strong>What you need to say</strong> — the core message, even in rough notes or bullet points.",
            "<strong>What you want it to do</strong> — draft an email, keep it brief, make it professional.",
          ],
          highlight: "That's it. Three pieces of context. You'll have a first draft in under 10 seconds.",
        },
        {
          type: 'concept',
          eyebrow: 'A real example',
          icon: '💡',
          title: "Here's what this looks like in practice.",
          body: [
            "Situation: You need to follow up with a client who hasn't responded to a proposal you sent 10 days ago. You don't want to be pushy, but you need an answer.",
            "Here's the prompt you'd type into ChatGPT:",
          ],
          highlight: '"I need to follow up with a client who hasn\'t responded to a proposal I sent 10 days ago. I want to be polite and professional — not pushy — but I do need a response. Please draft a short, clear follow-up email. Keep it to 3–4 sentences."',
        },
        {
          type: 'concept',
          eyebrow: 'The finishing touch',
          icon: '✏️',
          title: "Your job is to make it sound like you.",
          body: [
            "AI gives you a strong, send-ready draft. Your job is a 2-minute edit.",
            "Change anything that doesn't sound like you. Add a specific detail only you would know. Adjust the tone if needed. Replace any generic phrases with your natural language.",
            "This isn't settling for less. It's getting 80% of the work done in seconds — and spending your actual time on the 20% that makes it personal.",
          ],
          highlight: "AI does the heavy lifting. You add the humanity.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Draft a real email — right now.',
          body: [
            "Open <strong>chatgpt.com</strong> and use this template. Fill in the brackets with your actual situation.",
          ],
          prompt:
            "I need to write a work email. Here's the situation: [describe who you're emailing, what you need to communicate, and the relationship/tone — e.g. 'a client update about a delayed project, professional but warm']. Please draft a clear, concise email for me. Keep it under 150 words.",
          body2:
            "When you get the draft, try replying with: 'Make it 20% shorter' or 'Make the opening warmer.' Watch how quickly it adjusts. That's the back-and-forth — and it's free.",
          setupGuide: true,
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: 'You just did the thing.',
          body: [
            "You used AI on real work. Not a toy prompt, not a tutorial exercise — something that could actually land in someone's inbox.",
            "In the final lesson, we zoom out and talk about what this really changes — not just for your output, but for how you show up at work.",
          ],
          summaryList: [
            'Give AI three things: who, what, and the tone — and you get a real draft',
            'Your job is a 2-minute edit, not a 20-minute writing session',
            'The back-and-forth refines any draft quickly — never settle for the first response',
            'Email is just the start — every lesson ahead builds on this',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 5 — This Changes Who You Are at Work
    // ─────────────────────────────────────────
    {
      id: 4,
      title: 'This Changes Who You Are at Work',
      meta: '9 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI at Work · Lesson 5',
          icon: '🌟',
          title: 'This Changes Who You Are at Work',
          body: [
            "By the end of this lesson, you'll understand the full picture — not just what AI does for your productivity, but what it does for your reputation, your career, and how others see you.",
          ],
          sub: 'This is the bigger shift.',
        },
        {
          type: 'concept',
          eyebrow: 'The shift that matters most',
          icon: '🦋',
          title: "You're not just doing tasks faster. You're becoming someone different.",
          body: [
            "There's a version of this that's purely about efficiency. That's valuable. But there's a bigger shift available to you.",
            "When you consistently produce high-quality work faster than people expect — emails that are perfectly calibrated, reports done early, proposals that look like they took days — something changes. About how you're seen. About how you see yourself.",
            "You stop being the person who's behind. You become the person who always seems on top of it.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Your reputation at work',
          icon: '👀',
          title: "People notice when you're the one who always delivers.",
          body: [
            "Leadership notices who responds thoughtfully and fast. Clients notice who sends polished, professional communications. Colleagues notice who seems to handle more without burning out.",
            "You don't have to announce you're using AI. You just have to show up with better output, more consistently. The reputation follows.",
            "In a world where most professionals are still figuring this out, being genuinely fluent is a visible advantage.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'It gets better over time',
          icon: '📈',
          title: 'Small gains compound quickly.',
          body: [
            "Saving 30 minutes today doesn't feel life-changing. But saving 30 minutes a day, five days a week, is 125 hours a year.",
            "That time doesn't just disappear — you redirect it. Into strategic work that actually advances your career. Into thinking instead of typing. Into leaving at a reasonable hour.",
            "The professionals two years ahead on AI adoption didn't do anything dramatic. They started a little earlier and let it compound.",
          ],
          highlight: "The best time to start was two years ago. The second best time is right now.",
        },
        {
          type: 'concept',
          eyebrow: "Here's what's ahead",
          icon: '🗺️',
          title: 'This module was the foundation. Here\'s what you\'re building on it.',
          body: ["Over the next five modules, you'll build a complete AI workflow for your professional life:"],
          list: {
            items: [
              'Module 2: Tame Your Inbox — draft, respond, and summarize email in minutes',
              "Module 3: Meetings That Don't Drain You — prep, notes, and follow-ups, handled",
              'Module 4: Reports in Minutes, Not Hours — turn rough notes into polished output',
              'Module 5: Kill the Repetitive Stuff — templates and workflows that run themselves',
              "Module 6: Be the One Who Gets It — lead your team and stay current as AI evolves",
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: 'Before you go',
          icon: '🤝',
          title: 'Make one commitment.',
          body: [
            "Here's what separates people who genuinely change how they work from those who take a course and go back to their old habits: a concrete first step.",
            "Not 'I'll try AI when I have time.' One specific task, this week, that you'll handle with AI instead of the old way.",
            "It doesn't have to be big. One email. One summary. One report. Just enough to prove to yourself that it works.",
          ],
          highlight: "One win this week becomes a habit next month. A habit next month becomes a new way of working this year.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Lock in your first commitment.',
          body: [
            "Open ChatGPT and use this prompt to make a concrete plan.",
          ],
          prompt:
            "I just finished a module about how AI can help me save time at work. I want to make one concrete commitment to use AI this week. My job is [job title] and the task I'm going to try first is [describe the task — e.g., 'writing a client update email' or 'summarizing meeting notes']. Can you walk me through exactly how I'd use AI for this — what I'd type, what to watch out for, and how I'll know it worked?",
          body2:
            "Copy or screenshot what it gives you. That's your plan. Come back for Module 2 when you're ready — your inbox is waiting.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 1 Complete',
          icon: '🎓',
          title: "You're ready.",
          body: [
            "You came in asking: is it too late? The answer is no — but the window doesn't stay open forever.",
            "You leave with a clear picture of what AI is, where your time is going, and exactly how to start winning it back.",
          ],
          summaryList: [
            'AI-fluent professionals are outpacing colleagues at every level right now',
            'Your biggest time drains — email, reports, repetitive tasks — are all addressable',
            'The identity shift from behind to ahead is available to you starting this week',
            'One specific win this week is all it takes to begin',
          ],
          gradBlock: {
            icon: '⚡',
            title: 'Your AI Advantage Starts Now',
            body: "You understand why this moment matters, what AI actually does, where your time is going, and how to get your first real win. The rest of this course makes all of it concrete — one module at a time.",
            name: 'Module 1 Complete',
          },
        },
      ],
    },
  ],

  quiz: [
    {
      q: "What is the most accurate way to think about modern AI tools?",
      options: [
        "A robot that thinks and feels like a human",
        "A fast, capable assistant trained on vast amounts of text who needs clear direction",
        "A system that can replace most professional jobs within a year",
        "A search engine that finds information online",
      ],
      correct: 1,
      feedback:
        "AI tools work best when you think of them as a capable assistant — impressive and fast, but dependent on clear direction from you. They don't think or feel; they match patterns from training data.",
    },
    {
      q: "Studies show what percentage of a knowledge worker's week goes to communication and documentation?",
      options: ["10–15%", "20–25%", "30–40%", "50–60%"],
      correct: 2,
      feedback:
        "Research consistently shows 30–40% of a professional's week goes to email, reports, documentation, and written communication. At 2 hours a day, that's over 500 hours a year.",
    },
    {
      q: "What is the most effective way to get a great result from an AI tool?",
      options: [
        "Type a single, very long and detailed prompt",
        "Ask the question once and accept whatever comes back",
        "Start a conversation, then refine with follow-up messages",
        "Use very short prompts so AI isn't overwhelmed",
      ],
      correct: 2,
      feedback:
        "The back-and-forth is where the real value comes from. AI works best as a conversation — your first request gets you close, and follow-up refinements get you exactly what you need.",
    },
    {
      q: "According to this module, what is the real career risk from AI?",
      options: [
        "AI systems will replace most professional roles within 2–3 years",
        "AI-fluent professionals will outperform and displace AI-illiterate ones",
        "Only younger people can learn to use AI effectively",
        "AI makes work harder because there's more to learn",
      ],
      correct: 1,
      feedback:
        "The research is clear: AI isn't replacing experienced professionals — but AI-fluent professionals are replacing AI-illiterate ones. The advantage goes to those willing to learn.",
    },
    {
      q: "When AI produces a draft email you're going to send, what should your role be?",
      options: [
        "Send it exactly as written — that's the whole point of AI",
        "Rewrite it from scratch since AI drafts aren't good enough",
        "Do a 2-minute edit to make it sound like you and add personal details",
        "Run it through spell-check and that's enough",
      ],
      correct: 2,
      feedback:
        "AI handles the heavy lifting — getting 80% of the work done instantly. Your job is the 2-minute edit: making it sound like you, adding specific context, and ensuring the tone is right. That combination is unbeatable.",
    },
  ],
}

export default c2module1
