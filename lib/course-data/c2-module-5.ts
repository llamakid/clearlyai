import type { CourseData } from './types'

const c2module5: CourseData = {
  moduleId: 11,
  title: 'Kill the Repetitive Stuff',
  subtitle: 'AI at Work · Module 5',
  lessons: [
    // ─────────────────────────────────────────
    // Lesson 1 — The Repetition Tax
    // ─────────────────────────────────────────
    {
      id: 0,
      title: 'The Repetition Tax',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI at Work · Lesson 1',
          icon: '🔁',
          title: 'The Repetition Tax',
          body: [
            "By the end of this lesson, you'll see exactly how much time recurring tasks are quietly costing you — and you'll have identified your three biggest opportunities to win it back.",
          ],
          sub: "The hidden overhead hiding in plain sight.",
        },
        {
          type: 'concept',
          eyebrow: "The cost you stopped noticing",
          icon: '⏱️',
          title: "Small recurring tasks don't feel expensive. They are.",
          body: [
            "A 20-minute weekly prep task doesn't feel like much. But 20 minutes × 50 weeks = 16+ hours a year — on one task. Add three or four of those together and you're looking at a full work week, every year, spent on things that haven't changed in years.",
            "These tasks are invisible because they're spread out. No single instance hurts enough to fix. But the compound total is enormous.",
            "This lesson is about making that total visible — and deciding which tasks deserve a permanent system.",
          ],
          highlight: "Doing something the same way twice is a signal, not a coincidence. Recurring tasks deserve recurring systems.",
        },
        {
          type: 'concept',
          eyebrow: "What the repetition tax looks like",
          icon: '🗂️',
          title: "You probably have more recurring tasks than you realize.",
          body: [
            "Recurring tasks hide in a few common categories. Any of these sound familiar?",
          ],
          list: {
            items: [
              'Emails you write almost the same way every week (status updates, check-ins, follow-ups)',
              'Documents you recreate from scratch each time (reports, agendas, proposals)',
              'Prep work before recurring meetings (pulling data, summarizing last week, setting the agenda)',
              'Intake or response routines (same questions answered, same format used each time)',
              'Internal updates that follow the same structure every single cycle',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: "Why we keep doing it manually",
          icon: '🧠',
          title: "It's not laziness. It's the path of least resistance.",
          body: [
            "When you're busy, the easiest move is to open a blank doc, knock out the task from memory, and move on. Setting up a system feels like extra work — even when that system would pay for itself in a week.",
            "The other reason: most people don't think of their own recurring tasks as 'automatable.' Automation sounds like something for developers or IT. It's not.",
            "A reusable AI prompt is a system. A saved workflow is a system. Neither requires any technical skill — just a willingness to do something once instead of repeatedly.",
          ],
          highlight: "You don't need to automate. You need to systematize. There's a big difference — and the second one takes 20 minutes.",
        },
        {
          type: 'concept',
          eyebrow: "The decision that changes everything",
          icon: '💡',
          title: "When you do something twice, it's worth asking: should this be a workflow?",
          body: [
            "The habit to develop isn't technical — it's noticing. Every time you find yourself doing something for the second time the same way you did it the first time, that's the signal.",
            "Not every recurring task needs a full system. But the ones that happen weekly or more, or that take meaningful time, are worth a one-time investment to simplify.",
            "In the rest of this module, you'll build that investment: a workflow for one task, a library of reliable prompts, and a complete personal AI productivity stack.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "What this module covers",
          icon: '🗺️',
          title: "Four lessons. Your personal repetition-killing system.",
          body: ["Here's what you'll build across the next four lessons:"],
          list: {
            items: [
              'Lesson 2: What an AI workflow actually is — and how to build one for a real task',
              'Lesson 3: How to write prompts that produce reliable results every time',
              'Lesson 4: Your personal prompt library — built once, used forever',
              'Lesson 5: Your complete AI productivity stack — everything working together',
            ],
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Find your top three time drains.',
          body: [
            "Open <strong>chatgpt.com</strong> and run this audit. Be specific — name your actual tasks, not general categories.",
          ],
          prompt:
            "I want to identify the recurring tasks in my work that are costing me the most time. I work as a [job title] and my main responsibilities include [briefly describe your role]. Here are some tasks I do repeatedly: [list 5–8 recurring tasks, e.g., 'weekly status email to my manager', 'preparing the agenda for our Monday team meeting', 'writing client proposals']. Based on these, which three are likely costing me the most cumulative time per month — and which would be easiest to systematize with AI? Give me a rough estimate of how much time I could save per year on each one.",
          body2:
            "Note your top three. Those are the tasks this module will help you systematize. Keep them in mind for the next lesson.",
          setupGuide: true,
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: "The repetition tax is real. Now you know what you're paying.",
          body: [
            "Recurring tasks compound into enormous overhead over a year — but because they're spread out, they stay invisible. The first step is simply naming them.",
            "In the next lesson, you'll build your first AI workflow: a repeatable, reliable process for one recurring task, built from scratch in under 20 minutes.",
          ],
          summaryList: [
            'Recurring tasks feel small but compound to weeks of lost time per year',
            'Emails, documents, meeting prep, and intake routines are the most common categories',
            'The key habit: notice when you do something the same way twice',
            'A system doesn\'t mean automation — it means doing it once instead of repeatedly',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 2 — Your First AI Workflow
    // ─────────────────────────────────────────
    {
      id: 1,
      title: 'Your First AI Workflow',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI at Work · Lesson 2',
          icon: '⚙️',
          title: 'Your First AI Workflow',
          body: [
            "By the end of this lesson, you'll know exactly what an AI workflow is — and you'll have built one for a real recurring task you actually do.",
          ],
          sub: "Not software. Not code. Just a repeatable process.",
        },
        {
          type: 'concept',
          eyebrow: "What 'workflow' actually means here",
          icon: '🔍',
          title: "A workflow isn't software. It's a repeatable process.",
          body: [
            "When most people hear 'workflow,' they picture Zapier, automation tools, or something that requires setup. That's not what we're talking about.",
            "An AI workflow, in practical terms, is three things: a specific prompt you've saved, a consistent way to feed information into that prompt, and a predictable output you can use right away.",
            "That's it. No software. No integrations. Just a process you can repeat in under two minutes every time a recurring task comes up.",
          ],
          highlight: "A workflow is a prompt + a process + a predictable result. The magic is in doing it the same way every time.",
        },
        {
          type: 'concept',
          eyebrow: "Workflow vs. one-off prompt",
          icon: '🔄',
          title: "The difference between a prompt and a workflow.",
          body: [
            "A one-off prompt is what most people do: you open ChatGPT, type something, get a result, close the tab. Next time you need the same thing, you start from scratch.",
            "A workflow is different. You've done the work once to figure out the right prompt, tested it until the output is consistently good, and saved it somewhere you can reach in one click.",
            "The result: instead of thinking about how to prompt AI every time, you paste your saved prompt, fill in the specifics, and you're done in two minutes.",
          ],
          beforeAfter: {
            before: {
              label: 'One-Off Prompt',
              items: [
                'Open ChatGPT and type something new each time',
                'Results vary — sometimes great, sometimes off',
                'Start from scratch every week',
                'Takes 5–10 minutes just to get a decent draft',
                'No compounding benefit over time',
              ],
            },
            after: {
              label: 'Saved Workflow',
              items: [
                'Open your saved prompt, paste the specific details',
                'Consistent, reliable output every time',
                'Same great result in 2 minutes or less',
                'Improves over time as you refine it',
                'Pays off every week, indefinitely',
              ],
            },
          },
        },
        {
          type: 'concept',
          eyebrow: "Three elements of a real workflow",
          icon: '🧩',
          title: "Specificity, a saved prompt, and a consistent output.",
          body: [
            "Here's what separates a true workflow from a one-off: specificity, storage, and stability.",
            "Specificity means the prompt is written for this task — not a general 'help me write an email' but a detailed prompt that covers the context, format, tone, and constraints for this exact recurring situation.",
            "Storage means it's saved somewhere one click away — not in your head, not buried in a chat history, but in a note or doc you can open instantly. Stability means the output is consistent enough that you trust it every time.",
          ],
          highlight: "If the output varies wildly each time, you don't have a workflow yet — you have a starting point. A workflow is something you trust.",
        },
        {
          type: 'concept',
          eyebrow: "A complete example",
          icon: '💡',
          title: "Building a workflow for a weekly status update.",
          body: [
            "Let's say you write a status update to your manager or team every Friday. Here's what that workflow looks like:",
            "The saved prompt tells AI your role, the update's audience, what format to use (3 sections: progress this week, blockers, plan for next week), and the tone (concise, professional, no filler).",
            "Each Friday, you open the saved prompt, fill in this week's specific details in the brackets, paste it into ChatGPT, and get a polished update in 90 seconds. Review, adjust if needed, send.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "How to build yours in 20 minutes",
          icon: '🛠️',
          title: "The four steps to building your first workflow.",
          body: ["You can build a reliable AI workflow for any recurring task in four steps:"],
          list: {
            items: [
              '<strong>Pick one task</strong> — choose the highest-frequency recurring task you identified in Lesson 1',
              '<strong>Write the prompt</strong> — include the role, context, output format, tone, and constraints specific to this task',
              '<strong>Test it twice</strong> — run it on two real examples and refine anything that\'s off',
              '<strong>Save it</strong> — put it in a note app or doc, labeled clearly, one click away',
            ],
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Build your first workflow end-to-end.',
          body: [
            "Pick the top recurring task from your Lesson 1 exercise. Open <strong>chatgpt.com</strong> and start with this prompt to help you build the workflow:",
          ],
          prompt:
            "I want to build a reusable AI workflow for a recurring task I do every week. The task is: [describe your recurring task, e.g., 'writing a status update for my team every Friday']. Here's what the output needs to include: [list the components, e.g., 'what was accomplished, current blockers, plan for next week']. The audience is: [who reads it]. Tone: [professional / casual / concise / detailed]. Please write a reusable prompt template for this task, with [brackets] for the specific details I'd fill in each time. Make it specific enough that the output is consistent and ready to use every time.",
          body2:
            "Test it on a real example — fill in the brackets with actual details from your work. If the output isn't quite right, refine the prompt now. Once it's good twice in a row, save it to your notes app. That's your first workflow.",
          setupGuide: true,
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: "You know what a workflow is — and you have one.",
          body: [
            "A workflow is a saved, tested prompt with a consistent process. It's not software — it's just not starting from scratch. You built your first one today.",
            "In the next lesson, we go deeper: how to write prompts that produce reliable results every single time, so every workflow you build is one you can trust.",
          ],
          summaryList: [
            'A workflow is a saved prompt + a repeatable process + a predictable output',
            'The difference from a one-off: specificity, storage, and stable results',
            'Build it once in 20 minutes — it pays off every week after',
            'Four steps: pick a task, write the prompt, test twice, save it',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 3 — Prompts That Work Every Time
    // ─────────────────────────────────────────
    {
      id: 2,
      title: 'Prompts That Work Every Time',
      meta: '9 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI at Work · Lesson 3',
          icon: '🎯',
          title: 'Prompts That Work Every Time',
          body: [
            "By the end of this lesson, you'll know exactly why some prompts produce great results every time and others are hit-or-miss — and you'll have at least one prompt that's been refined into something you can trust.",
          ],
          sub: "Reliable prompts are the foundation of every good workflow.",
        },
        {
          type: 'concept',
          eyebrow: "Why some prompts fail",
          icon: '🚫',
          title: "Inconsistent results usually come from inconsistent prompts.",
          body: [
            "If you've ever gotten a great AI result one day and a mediocre one the next for the same task, the prompt is almost always the reason. Not the AI — the prompt.",
            "Vague prompts leave too much for AI to guess. When it guesses, results vary. When results vary, you can't trust the workflow. When you can't trust the workflow, you end up doing it manually anyway.",
            "A reliable prompt doesn't leave things to chance. It tells AI everything it needs to produce a consistent, useful result — every single time.",
          ],
          highlight: "If you can't predict what you'll get, you don't have a prompt worth saving. The goal is a prompt that's boring — because it works the same way every time.",
        },
        {
          type: 'concept',
          eyebrow: "The four elements of a reliable prompt",
          icon: '🧩',
          title: "Every reliable prompt has these four things.",
          body: [
            "You don't need to memorize a formula. But these four elements, when present, are what separate a reliable prompt from a hit-or-miss one:",
          ],
          list: {
            items: [
              '<strong>Role context</strong> — tell AI who it\'s writing for and in what context ("You\'re helping a project manager write a weekly update to their team")',
              '<strong>Specific input format</strong> — tell it what information you\'ll provide and in what form ("I\'ll give you bullet points of what was accomplished this week")',
              '<strong>Explicit output format</strong> — tell it exactly how the result should be structured ("Return three short paragraphs: progress, blockers, next steps")',
              '<strong>Constraints</strong> — length, tone, what to include, what to avoid ("Keep it under 150 words. Professional but direct. No corporate filler phrases")',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: "Role context explained",
          icon: '👤',
          title: "Tell AI who it's working for. Context shapes everything.",
          body: [
            "AI doesn't know your job, your audience, or your communication style unless you tell it. A single sentence of context changes the output dramatically.",
            "Compare: 'Write a summary of this meeting' versus 'You're helping a sales manager summarize a client discovery call for their CRM. Audience is the account team. Focus on client pain points, decisions made, and next steps.'",
            "Same underlying task. Completely different — and much more useful — result. Role context is the single highest-leverage improvement you can make to any prompt.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "Output format is non-negotiable",
          icon: '📋',
          title: "If you don't specify the format, AI will invent one.",
          body: [
            "AI will always produce something. But if you don't tell it what structure you need, it chooses its own — and its choice may not match what you actually use.",
            "Specify the exact format you want: numbered list, three short paragraphs, a table, a subject line + body, bullet points under headers. Whatever format you need in your work, describe it explicitly.",
            "This is especially important for workflows — because a workflow needs to produce the same format every time so you can use it without reformatting.",
          ],
          highlight: "Specifying format isn't being demanding. It's telling AI what 'done' looks like for your situation.",
        },
        {
          type: 'concept',
          eyebrow: "Testing and refining",
          icon: '🔬',
          title: "A prompt becomes reliable through testing, not on the first try.",
          body: [
            "The standard isn't perfection on the first attempt — it's knowing what to adjust when the result isn't quite right.",
            "Test your prompt on two or three real examples. After each one, ask: what was off? Too long? Wrong tone? Missing a key component? Then add a sentence to the prompt that addresses exactly that.",
            "Most prompts reach a reliable state after two or three refinements. Once you've tested it and it works the same way twice in a row, it's ready to save as a workflow.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "The refinement vocabulary",
          icon: '✏️',
          title: "You only need a few phrases to fix almost any prompt.",
          body: [
            "When a draft isn't quite right, these refinement instructions fix it almost every time:",
          ],
          list: {
            items: [
              '"Make this more concise — cut it to [X] words or fewer"',
              '"The tone is too formal. Rewrite it to sound more direct and human"',
              '"You\'re missing [specific element]. Add that as its own section"',
              '"The [section name] is off. Here\'s what it should convey: [explain it]"',
              '"Ignore the previous draft and start fresh with this additional context: [add it]"',
            ],
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Make an existing prompt reliable.',
          body: [
            "Take a prompt you already have — from Lesson 2 or from your own past ChatGPT use — and make it reliable. Open <strong>chatgpt.com</strong> and run this refinement audit:",
          ],
          prompt:
            "I have an existing prompt I use for a recurring task, but the results aren't consistent. Here's my current prompt:\n\n[Paste your existing prompt here]\n\nPlease review it against these four criteria:\n1. Role context — does it tell you who I am and what context I'm working in?\n2. Input format — does it tell you what information I'll provide?\n3. Output format — does it specify exactly how the result should be structured?\n4. Constraints — does it include tone, length, and what to avoid?\n\nIdentify what's missing or vague, then rewrite the prompt to be more reliable and specific.",
          body2:
            "Test the rewritten version on a real example. If it produces a result you'd actually use, save the refined version and replace the old one. One good prompt is worth more than ten mediocre ones.",
          setupGuide: true,
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: "Reliable prompts aren't magic. They're just specific.",
          body: [
            "Four elements — role context, input format, output format, and constraints — are what separate a prompt that works every time from one that doesn't. Now you know how to diagnose and fix any prompt that isn't reliable.",
            "In the next lesson, you'll take everything you've built and organize it into a personal prompt library: the permanent home for every workflow you build.",
          ],
          summaryList: [
            'Inconsistent results come from vague prompts — not from AI being unreliable',
            'Four elements make a prompt reliable: role context, input format, output format, constraints',
            'Specifying the output format is the single most important structural improvement',
            'Most prompts reach a reliable state after two or three focused refinements',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 4 — Your Personal Prompt Library
    // ─────────────────────────────────────────
    {
      id: 3,
      title: 'Your Personal Prompt Library',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI at Work · Lesson 4',
          icon: '📚',
          title: 'Your Personal Prompt Library',
          body: [
            "By the end of this lesson, you'll have a personal library of saved, tested prompts for your most common recurring work — and a system for keeping it organized so you actually use it.",
          ],
          sub: "Build it once. Reach for it every day.",
        },
        {
          type: 'concept',
          eyebrow: "Why a library changes everything",
          icon: '📈',
          title: "A single good prompt is useful. A library is a system.",
          body: [
            "You've built a workflow and refined a prompt. Those are real wins. But the full payoff comes when you have a small collection of reliable prompts for your most common tasks — and they're all in one place you can reach instantly.",
            "Without a library, you rebuild from scratch every time. You remember that you got a good result once but can't recall exactly what you typed. You start over. You get inconsistent results.",
            "A library eliminates all of that. The prompts are tested, named clearly, and one click away. When a recurring task comes up, you reach for the right prompt and you're done in two minutes.",
          ],
          highlight: "Every prompt you add to your library saves you time forever — not just today.",
        },
        {
          type: 'concept',
          eyebrow: "What belongs in your library",
          icon: '🏆',
          title: "Start with the prompts for your five highest-frequency tasks.",
          body: [
            "You don't need 50 prompts. You need 5–8 really good ones — for the tasks that come up most in your specific work. A useful starting point:",
          ],
          list: {
            items: [
              'Your recurring update or status report (weekly or daily)',
              'Your most common outbound email or message type',
              'Meeting prep — agenda or pre-read for a recurring meeting',
              'A summary prompt — for threads, documents, or call notes',
              'A first-draft prompt for a document type you create regularly',
              'Any intake or response routine that follows a consistent pattern',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: "Where to store them",
          icon: '🗂️',
          title: "Keep them one click away — or you won't use them.",
          body: [
            "Storage matters more than you think. A prompt library buried in a folder you rarely open is not a prompt library — it's an archive. The goal is frictionless access.",
            "The best options are the simplest: a pinned note in Apple Notes, Google Keep, or Notion. A single doc in your desktop folder. A pinned message to yourself in Slack or Teams.",
            "Name each prompt clearly — 'Weekly team status', 'Client follow-up after meeting', 'Summarize a long email thread' — so you can find the right one in under 10 seconds.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "How to organize them",
          icon: '🔖',
          title: "Simple categories. One document. Easy access.",
          body: [
            "The organization system that works best is also the simplest: one document with a short list of prompts grouped by type.",
            "Consider three sections: Communication (emails, messages, follow-ups), Documentation (reports, summaries, proposals), and Meetings (agendas, recaps, prep). Most professional work fits into those three.",
            "Resist the urge to over-organize. A prompt library with 6 prompts in a clear list is infinitely more useful than 40 prompts sorted into a taxonomy you'll never navigate.",
          ],
          highlight: "Simple beats thorough. A library you use beats a system you maintain.",
        },
        {
          type: 'concept',
          eyebrow: "The compounding effect",
          icon: '🌱',
          title: "The library grows — and so do the savings.",
          body: [
            "Here's the compounding math: if each prompt saves you 15 minutes per week, three prompts save you 45 minutes. Eight prompts save you two hours. Every week. Every year.",
            "The library also improves over time. When a prompt produces something slightly off, you update it. When a new recurring task appears, you add a new prompt. Within a few months, you have a system that handles most of your routine work without friction.",
            "This is what it means to build with AI rather than just use it. You're creating a personal productivity asset that compounds in value.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Build and save your first three library prompts.',
          body: [
            "Open <strong>chatgpt.com</strong> and a blank note or doc side by side. Use the prompt below to generate your first three library prompts, then copy them into your notes app right now — not later.",
          ],
          prompt:
            "I want to build a personal AI prompt library for my recurring work tasks. I work as a [job title] and here are my three most common recurring tasks:\n1. [Describe task 1, e.g., 'weekly progress update to my manager']\n2. [Describe task 2, e.g., 'follow-up email after a client call']\n3. [Describe task 3, e.g., 'preparing the agenda for our weekly team meeting']\n\nFor each task, please write a reliable, reusable AI prompt that:\n- Includes role context for my situation\n- Specifies what input I'll provide (with [brackets] for the variable details)\n- Specifies the exact output format I need\n- Includes tone and length constraints\n\nLabel each prompt clearly with the task name so I can save them to my library.",
          body2:
            "Copy all three prompts into your notes app now. Name the document 'AI Prompt Library' and keep it accessible. You've just built the foundation of a system that will save you hours every month.",
          setupGuide: true,
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: "Your library is built. Every prompt you add saves you time forever.",
          body: [
            "A personal prompt library is the difference between using AI occasionally and building with it systematically. You've started yours today. Keep it accessible and add to it every time you find yourself doing something the same way twice.",
            "In the final lesson, we zoom out: your entire AI productivity stack — everything from this course working together — and how to keep building from here.",
          ],
          summaryList: [
            'A library of 5–8 great prompts is more valuable than 40 mediocre ones',
            'Store prompts one click away — a buried library is just an archive',
            'Name prompts by task so you can find the right one in under 10 seconds',
            'Every prompt you add compounds: it saves you time every single week going forward',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 5 — Your AI Productivity Stack
    // ─────────────────────────────────────────
    {
      id: 4,
      title: 'Your AI Productivity Stack',
      meta: '9 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI at Work · Lesson 5',
          icon: '🚀',
          title: 'Your AI Productivity Stack',
          body: [
            "By the end of this lesson, you'll see how everything you've learned across this course works together — and you'll have a clear picture of your complete personal AI productivity stack.",
          ],
          sub: "Everything you've built, working together.",
        },
        {
          type: 'concept',
          eyebrow: "What you've actually built",
          icon: '🏗️',
          title: "Five modules. A complete system.",
          body: [
            "Look at what you've put together across AI at Work. This isn't a collection of tricks — it's a layered system that covers most of the recurring overhead in a knowledge worker's week.",
          ],
          stackCards: [
            {
              num: '01',
              name: 'Email system (Module 2)',
              desc: 'Prompt formula, difficult email playbook, inbox triage, email template library',
            },
            {
              num: '02',
              name: 'Meeting system (Module 3)',
              desc: 'AI-assisted prep, live capture, follow-up emails, recurring meeting workflow',
            },
            {
              num: '03',
              name: 'Report & document system (Module 4)',
              desc: 'AI-structured reports, executive summaries, first drafts from raw notes',
            },
            {
              num: '04',
              name: 'Workflow & prompt library (Module 5)',
              desc: 'Saved workflows for top recurring tasks, reliable reusable prompts, organized library',
            },
          ],
        },
        {
          type: 'concept',
          eyebrow: "The stack in practice",
          icon: '📅',
          title: "What a typical week looks like when the stack is running.",
          body: [
            "Here's what changes when everything works together:",
            "Monday morning: you open your prompt library and run the weekly prep workflow. Agenda drafted in 90 seconds. Status update pulled from last week's notes.",
            "Throughout the week: emails that used to take 15 minutes take 3. Difficult situations get handled instead of avoided. Meeting notes get turned into follow-up emails in two minutes.",
            "Friday: your weekly report or update is assembled from notes you've collected, structured by AI, and ready in under 10 minutes.",
          ],
          highlight: "The stack doesn't change what you do. It changes how long the routine parts take — freeing you for the work that actually needs you.",
        },
        {
          type: 'concept',
          eyebrow: "How to identify the next thing to systematize",
          icon: '🔍',
          title: "The habit that keeps the stack growing.",
          body: [
            "Your stack isn't finished — it grows every time you notice a recurring task and add a workflow for it. The habit is simple: when you do something manually that you've done before, pause for 5 seconds and ask yourself: 'Should this be a workflow?'",
            "If the task takes more than 10 minutes and happens at least twice a month, the answer is almost always yes. Build the prompt, test it twice, add it to your library.",
            "This isn't a commitment to a big project. It's a 20-minute investment that pays off indefinitely.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "The noticing habit",
          icon: '💡',
          title: 'Turn "I just did that manually again" into action.',
          body: [
            "The most powerful habit you can build from this module isn't technical — it's attentional. Noticing.",
            "When you catch yourself doing something repetitive — writing the same kind of email, prepping the same kind of document, summarizing the same type of content — that's the signal.",
            "You now have everything you need to convert that signal into a workflow. The noticing is the hard part. The building takes 20 minutes.",
          ],
          highlight: '"I just did that manually again" is the most valuable sentence in your productivity vocabulary.',
        },
        {
          type: 'concept',
          eyebrow: "What comes next",
          icon: '🌱',
          title: "The compounding continues beyond this course.",
          body: [
            "Everything you've built in this course is designed to keep paying dividends. Each workflow runs every week. Each saved prompt saves time every time you use it. The library gets better as you refine and add to it.",
            "AI tools will improve too — and the skills you've built here (knowing what to ask, how to structure a prompt, how to build a workflow) are transferable to any AI tool, now and in the future.",
            "You're not just someone who uses AI occasionally. You're someone who builds with it systematically. That's a meaningful professional advantage.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "Three things to do this week",
          icon: '✅',
          title: "Concrete next steps to make this real.",
          body: ["Here's what will lock in everything you've learned:"],
          list: {
            items: [
              '<strong>Use your prompt library for real work this week</strong> — reach for it every time a recurring task comes up, even if it\'s faster to start from scratch. Build the habit.',
              '<strong>Add one prompt</strong> — identify one recurring task not in your library yet, build the workflow today, save it.',
              '<strong>Notice the moments</strong> — when you do something manually that you\'ve done before, write it down. Convert one of those notes into a workflow within 48 hours.',
            ],
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Map your complete AI stack.',
          body: [
            "Open <strong>chatgpt.com</strong> and create a personal AI stack map — a clear inventory of every system you have in place and the gaps still worth filling.",
          ],
          prompt:
            "I want to create a personal AI productivity stack map. I've been building AI workflows for my work and I want to take inventory of what I have and identify what to build next.\n\nHere's what I currently use AI for at work: [describe the types of tasks — emails, meeting prep, reports, summaries, etc.]\n\nHere are the recurring tasks I've already built workflows or saved prompts for: [list them]\n\nMy role is [job title] and my most time-consuming recurring tasks are: [list your top 5]\n\nBased on this, please:\n1. Create a simple inventory of my current AI stack by category\n2. Identify the 3 recurring tasks most worth systematizing next\n3. Suggest a prompt template for the highest-priority one",
          body2:
            "Save the stack map alongside your prompt library. Review it once a month and add one new workflow. In six months, you'll have a system that handles most of your routine work — and more time for everything else.",
          setupGuide: true,
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 5 Complete',
          icon: '🎓',
          title: "You build with AI now. That's the difference.",
          body: [
            "Most people use AI occasionally, for one-off tasks, starting from scratch each time. You've built systems: a workflow for your most repetitive work, a library of reliable prompts, and a complete productivity stack that compounds in value every week.",
            "The habit of noticing — catching the moment when you do something manually that should be a workflow — is what keeps it growing. You have everything you need.",
          ],
          summaryList: [
            'Your stack covers email, meetings, reports, and workflows — most of recurring professional overhead',
            'The noticing habit is more valuable than any single workflow you\'ll ever build',
            '"I just did that manually again" is the signal to add a workflow',
            'The stack compounds: every workflow runs indefinitely, every prompt improves with use',
          ],
          gradBlock: {
            icon: '⚙️',
            title: 'Your Repetitive Work Is Systematized',
            body: "You've built a personal AI productivity stack: tested workflows, a reliable prompt library, and the habit of turning recurring tasks into systems. The overhead that used to compound quietly in the background now has a different answer — you have a workflow for that.",
            name: 'Module 5 Complete',
          },
        },
      ],
    },
  ],

  quiz: [
    {
      q: "According to this module, what is the 'repetition tax'?",
      options: [
        "The extra cost of an AI subscription when you use it for repetitive tasks",
        "The compounding time cost of recurring tasks that feel small individually but add up to enormous overhead over a year",
        "The time it takes to build a workflow for the first time",
        "The mental fatigue from doing the same task too many times in one day",
      ],
      correct: 1,
      feedback:
        "A 20-minute weekly recurring task compounds to 16+ hours per year. Multiple tasks together can add up to a full work week annually. The tasks feel invisible because they're spread out — making the total cost easy to underestimate until you calculate it.",
    },
    {
      q: "What is the practical definition of an AI workflow in this module?",
      options: [
        "A software automation that runs tasks in the background without your involvement",
        "A saved, tested prompt combined with a repeatable process that produces a consistent, usable output",
        "A Zapier integration that connects ChatGPT to your email and calendar",
        "Any time you use AI to complete a task at work",
      ],
      correct: 1,
      feedback:
        "An AI workflow is a saved prompt + a repeatable process + a predictable result. No software or integrations required. The key is that it produces the same quality output consistently — because the prompt is specific, tested, and saved somewhere accessible.",
    },
    {
      q: "Which of the following makes a prompt reliable and reusable?",
      options: [
        "Making it as short as possible so it's easy to remember",
        "Using the same prompt for every task to keep things simple",
        "Including role context, input format, output format, and constraints",
        "Starting every prompt with 'Please' to get better results",
      ],
      correct: 2,
      feedback:
        "The four elements of a reliable prompt are: role context (who AI is helping and in what situation), specific input format (what information you'll provide), explicit output format (exactly how the result should be structured), and constraints (tone, length, what to include or avoid). Together, they eliminate the guesswork that causes inconsistent outputs.",
    },
    {
      q: "Where should you store your personal prompt library?",
      options: [
        "In your ChatGPT conversation history so you can search it later",
        "Memorized — the best prompts stick with you naturally",
        "In a detailed folder system with subcategories for each project",
        "Somewhere one click away — a pinned note, accessible doc, or simple text file",
      ],
      correct: 3,
      feedback:
        "Accessibility is the most important factor in prompt library storage. A library buried in a folder you rarely open is an archive, not a tool. The goal is frictionless access: a pinned note, a file on your desktop, or a doc you can open in under 10 seconds. Simple and accessible beats organized and buried.",
    },
    {
      q: "What is the key habit that keeps your AI productivity stack growing over time?",
      options: [
        "Checking for new AI tools every week and adding them to your workflow",
        "Rebuilding your prompt library every three months to keep it current",
        "Noticing when you do something manually that you've done before — and converting that into a workflow",
        "Sharing your prompts with colleagues so they can improve them",
      ],
      correct: 2,
      feedback:
        "The noticing habit — catching the moment when you do something manually that should be a workflow — is what turns a static library into a growing system. When you do something the same way twice, that's the signal. The building takes 20 minutes. The payoff runs indefinitely.",
    },
  ],
}

export default c2module5
