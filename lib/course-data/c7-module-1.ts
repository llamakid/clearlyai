import type { CourseData } from './types'

const c7module1: CourseData = {
  moduleId: 37,
  title: 'Meet Claude',
  subtitle: 'Module 1',
  nextModuleId: 38,
  lessons: [
    {
      id: 0,
      title: 'What Claude Is — and Why It Feels Different',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 1 · Lesson 1',
          icon: '👋',
          title: 'Meet Claude — your new thinking partner.',
          body: [
            "Claude is an AI assistant you talk to in plain English. You type what you need — a question, a task, a half-formed idea — and Claude responds like a knowledgeable, patient colleague who's happy to keep going until you've got what you came for.",
            "This whole course is about getting comfortable and confident with Claude. No tech background required. By the end of this first module, you'll have had a real conversation and gotten something useful out of it.",
          ],
          sub: "If you can write a text message, you already have the only skill you need to start.",
        },
        {
          type: 'concept',
          eyebrow: 'The plain-English version',
          icon: '🧠',
          title: 'Claude is an AI made by a company called Anthropic.',
          body: [
            "Anthropic is an AI company whose whole focus is building AI that's genuinely helpful and safe to use. Claude is their assistant — the thing you actually talk to. You'll find it at <strong>claude.ai</strong> in any web browser, and there are apps for your phone and computer too.",
            "You don't need to understand how it works under the hood any more than you need to understand an engine to drive a car. You just need to know what it's good at and how to ask. That's what we'll build.",
          ],
          highlight: "Anthropic makes the AI. Claude is the assistant you talk to. That's the whole vocabulary lesson.",
        },
        {
          type: 'concept',
          eyebrow: 'Why people say it feels different',
          icon: '💬',
          title: 'Claude is built to be a thoughtful conversation, not a search box.',
          body: [
            "If you've tried other AI tools and found them clunky or robotic, Claude often feels different in a good way. It's known for being a strong writer, for explaining things clearly without dumbing them down, and for thinking through a problem with you rather than spitting out one canned answer.",
            "It's also designed to be honest about what it doesn't know, to ask you a clarifying question when your request is fuzzy, and to stay genuinely helpful instead of pushy. The result feels less like using software and more like talking to a capable, even-tempered colleague.",
          ],
          highlight: "Claude is built to be helpful, honest, and harmless — and you can feel that in how it talks.",
        },
        {
          type: 'concept',
          eyebrow: 'What it can actually do for you',
          icon: '🛠️',
          title: "Claude is a generalist — it helps with a surprisingly wide range of everyday things.",
          body: [
            "People use Claude to draft and polish emails, summarize long documents, plan trips and projects, brainstorm ideas, explain confusing topics, prepare for difficult conversations, and think through decisions out loud. If a task involves words, ideas, or planning, Claude can usually help.",
            "You don't have to pick one use. Over this course you'll try many of them. For now, the important thing is the mindset: Claude is a flexible helper for the thinking-and-writing parts of your day.",
          ],
          list: {
            items: [
              '<strong>Write & polish</strong> — emails, messages, posts, letters, summaries',
              '<strong>Understand</strong> — explain a topic, break down a document, answer questions',
              '<strong>Plan & organize</strong> — trips, projects, schedules, to-do lists',
              '<strong>Think with you</strong> — brainstorm options, weigh a decision, talk it through',
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'A search engine vs. Claude',
          title: 'Google gives you links. Claude gives you an answer you can talk back to.',
          body: ["The difference isn't that one is better — it's that they do different jobs:"],
          bad: {
            label: '🔎 A search engine',
            text: "You type keywords. You get a list of blue links. You click around, read several pages, and assemble the answer yourself. Great for finding a specific website or a fact.",
          },
          good: {
            label: '💬 Claude',
            text: "You describe what you need in full sentences. Claude gives you a direct, written answer — and you can reply, ask it to adjust, or go deeper. Great for creating, explaining, planning, and thinking things through.",
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: "Ask Claude to introduce itself in a way that's useful to you.",
          body: [
            "The best way to understand Claude is to talk to it. Open claude.ai (we'll cover signing up in the next lesson if you haven't yet), and paste the prompt below. Notice the tone — it's conversational, and it adapts to what you ask.",
          ],
          prompt: "I'm brand new to using AI assistants. In plain English, explain what you can and can't help me with, and give me 5 specific examples of things I could ask you that would actually be useful in my everyday life. Keep it warm and jargon-free.",
          body2: "Read the response, then reply with a follow-up — anything from \"Tell me more about the third one\" to \"Now give me 5 examples for someone who runs a small business.\" That back-and-forth is the whole game.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: "You know what Claude is and what it's for.",
          body: [
            "Claude is an AI assistant from Anthropic that you talk to in plain English. It's built to be helpful, honest, and thoughtful — a generalist that's strong with words, ideas, and planning.",
            "Next lesson: getting your account set up and finding your way around the screen, so the tool itself never gets in your way.",
          ],
          summaryList: [
            'Claude is an AI assistant made by Anthropic — find it at claude.ai',
            "It's a conversation partner, not a search box",
            "It's built to be helpful, honest, and harmless",
            'It helps with writing, understanding, planning, and thinking things through',
          ],
        },
      ],
    },
    {
      id: 1,
      title: 'Getting In: Your Account and the Screen',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 1 · Lesson 2',
          icon: '🚪',
          title: "Let's get you signed in and oriented — it takes about two minutes.",
          body: [
            "Before we go further, you need an account and a quick tour of the screen. Both are simpler than you'd expect. There's nothing to install if you don't want to — Claude runs right in your web browser.",
            "We'll walk through signing up, the free vs. paid options, and the handful of buttons that actually matter so nothing on the screen feels mysterious.",
          ],
          sub: "You only have to do the setup part once.",
        },
        {
          type: 'tool',
          eyebrow: 'Where to go',
          icon: '🌐',
          title: 'Claude lives at claude.ai.',
          body: [
            "Go to claude.ai in any web browser — on your computer, tablet, or phone. You can sign up with a Google account or an email address. There are also free apps for iPhone, Android, Mac, and Windows if you'd rather have it as its own program, but the website does everything you need to start.",
          ],
          toolName: 'Claude',
          toolMaker: 'Anthropic',
          toolUrl: 'https://claude.ai',
          setupGuide: true,
          highlight: "Bookmark claude.ai so it's always one click away. That single habit makes a real difference.",
        },
        {
          type: 'concept',
          eyebrow: 'Free or paid?',
          icon: '💳',
          title: 'You can do everything in this course on the free plan.',
          body: [
            "Claude has a free plan that's genuinely useful — it's plenty for learning and for everyday tasks. There's also a paid plan (called Pro) that gives you more usage and access to the most capable features, which you might consider later once you know you'll use it.",
            "Don't pay for anything yet. Start free, get comfortable, and let your own experience tell you whether an upgrade is worth it. There's no pressure and no need to decide now.",
          ],
          highlight: "Start on the free plan. Upgrade later only if you find yourself hitting its limits.",
        },
        {
          type: 'concept',
          eyebrow: 'The screen, demystified',
          icon: '🖥️',
          title: 'There are really only three things to notice on the screen.',
          body: [
            "Claude's screen looks clean and uncluttered on purpose. Once you spot these three things, you'll never feel lost:",
          ],
          list: {
            items: [
              "<strong>The message box</strong> — the big text field at the bottom. This is where you type. Everything starts here.",
              "<strong>The conversation</strong> — the main area where your messages and Claude's replies stack up, newest at the bottom, like a text thread.",
              "<strong>The sidebar</strong> — a list of your past conversations down the left side. Click any one to pick up exactly where you left off. Start a fresh one with “New chat.”",
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'A helpful habit from day one',
          icon: '🗂️',
          title: 'One conversation per topic keeps things tidy.',
          body: [
            "Each conversation (or “chat”) is its own thread. Claude remembers everything within that thread, so it builds up context as you go. When you start something unrelated, it's worth starting a New chat so topics don't bleed together.",
            "Think of it like having separate notebooks: one for the trip you're planning, one for work emails, one for a project. You can always scroll back through the sidebar to find and reopen any of them.",
          ],
          highlight: "New topic? Start a New chat. Same topic later? Reopen the old one from the sidebar.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Sign in, then send one message to make it real.',
          body: [
            "Go to claude.ai, sign up or log in, and start a New chat. Then send the message below. The goal isn't a perfect prompt — it's just to feel the rhythm of typing something and getting a reply.",
          ],
          prompt: "Hi Claude! I'm just getting set up and learning how to use you. Can you welcome me, then suggest one small, genuinely useful thing I could try asking you in the next five minutes?",
          body2: "When the reply comes back, try whatever it suggested. You're now officially using Claude — the rest of this course just makes you better at it.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: "You're in, and the screen makes sense.",
          body: [
            "You have an account, you know the free plan is all you need to start, and you can find the message box, the conversation, and the sidebar without thinking about it.",
            "Next lesson: your first real conversation — how to actually talk to Claude so you get something useful back.",
          ],
          summaryList: [
            'Claude lives at claude.ai — works in any browser, no install required',
            'The free plan covers everything in this course',
            'Three things on screen: the message box, the conversation, the sidebar',
            'One conversation per topic; reopen old ones from the sidebar',
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Your First Conversation',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 1 · Lesson 3',
          icon: '💭',
          title: 'The secret to a great first conversation: just talk normally.',
          body: [
            "A lot of people freeze the first time, convinced there's a special way you're supposed to phrase things. There isn't. Claude understands ordinary, everyday language — the same way you'd explain something to a helpful colleague.",
            "In this lesson you'll learn the small handful of habits that turn an okay conversation into a genuinely useful one. None of them are technical.",
          ],
          sub: "You don't need magic words. You need to say what you actually want.",
        },
        {
          type: 'concept',
          eyebrow: 'The one habit that matters most',
          icon: '🎯',
          title: 'Tell Claude what you want — not just the topic.',
          body: [
            "The difference between a weak request and a strong one usually comes down to one thing: did you say what you actually wanted to happen? “Taxes” is a topic. “Explain, in simple terms, what a tax deduction is and give me three common ones I might be missing” is a request.",
            "You don't need to be formal or fancy. You just need to name the outcome you're after, in plain words. Claude takes it from there.",
          ],
          highlight: "Name the outcome you want. That single move improves almost every reply you'll ever get.",
        },
        {
          type: 'concept',
          eyebrow: 'Three sentences is plenty',
          icon: '🧩',
          title: 'A strong message is often just: the task, a little context, and the shape you want.',
          body: [
            "You can write a great message in three short sentences. First, the <strong>task</strong> — what you want done. Second, a bit of <strong>context</strong> — who it's for or what your situation is. Third, the <strong>shape</strong> — how long, what tone, what format.",
            "Put together, that's: “Write a thank-you note to my daughter's teacher. She went out of her way to help my daughter with reading this year. Keep it warm, genuine, and about four sentences.” That's all it takes.",
          ],
          highlight: "Task + context + shape. Three sentences gets you most of the way, every time.",
        },
        {
          type: 'concept',
          eyebrow: "When you're not sure what to ask",
          icon: '🆘',
          title: "You can hand the hard part back to Claude.",
          body: [
            "Stuck on how to even begin? Tell Claude that. “I'm trying to plan a 50th birthday party but I don't know where to start — what questions should I be thinking about?” works beautifully. Claude is happy to ask <em>you</em> questions to figure out what you need.",
            "This flips the pressure off you. You don't have to arrive with the perfect request. You can think out loud and let the conversation find its shape together.",
          ],
          highlight: "“Help me think this through” is a complete, excellent prompt all on its own.",
        },
        {
          type: 'compare',
          eyebrow: 'Same goal, two messages',
          title: 'Watch how a few extra words change everything.',
          bad: {
            label: '❌ Vague',
            text: '"Write a birthday message."',
          },
          good: {
            label: '✅ Clear',
            text: '"Write a short, funny-but-heartfelt birthday text for my brother turning 40. We tease each other a lot but we’re close. Two or three sentences, nothing cheesy."',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Have your first real, useful conversation.',
          body: [
            "Pick something small you genuinely need this week — a message to write, a question to understand, a small thing to plan. Use the task + context + shape formula. Fill in the prompt below with your own details and send it.",
          ],
          prompt: "I need help with [the task — e.g. writing a message / understanding something / planning something]. Here's my situation: [one or two sentences of context — who it's for, what's going on]. I'd like the result to be [the shape — how long, what tone, what format].",
          body2: "Read the reply. If it's not quite right, don't start over — just tell Claude what to change. That follow-up is the entire focus of the next module.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: "You can hold a real conversation with Claude now.",
          body: [
            "You talk to Claude in plain language, you name the outcome you want, and when you're stuck you let Claude ask the questions. That's a genuinely capable starting point.",
            "Next lesson: a quick, honest look at how Claude actually works — including the things it can't do — so you always know when to trust it.",
          ],
          summaryList: [
            'Talk to Claude in normal, everyday language',
            'Name the outcome you want, not just the topic',
            'Task + context + shape makes almost any message strong',
            "When you're stuck, ask Claude to ask you questions",
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'How Claude Works (and What It Can’t Do)',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 1 · Lesson 4',
          icon: '🔍',
          title: "A little honesty about how Claude works will make you trust it in the right places.",
          body: [
            "Claude is powerful, but it isn't magic — and knowing its few real limits is what separates confident users from frustrated ones. This is the lesson that keeps you from getting burned.",
            "None of this is technical. It's just a clear-eyed picture of what's actually happening when you talk to Claude, so you know when to lean on it and when to double-check.",
          ],
          sub: "Trust grows when you understand the edges, not just the strengths.",
        },
        {
          type: 'concept',
          eyebrow: 'What it actually does',
          icon: '🧩',
          title: 'Claude predicts helpful language based on a huge amount of reading.',
          body: [
            "Under the hood, Claude has “read” an enormous amount of text and learned the patterns of how language and ideas fit together. When you ask something, it generates a thoughtful response one piece at a time, drawing on those patterns.",
            "That's why it's so good with words, explanations, and reasoning — and also why it's not a database of perfect facts. It's composing a response, not looking up a guaranteed-correct entry. Most of the time it's remarkably accurate. But “most of the time” is the part to remember.",
          ],
          highlight: "Claude composes answers from patterns it learned — it doesn't look them up in a fact file.",
        },
        {
          type: 'concept',
          eyebrow: 'The most important limit',
          icon: '⚠️',
          title: 'Claude can sound completely confident and still be wrong.',
          body: [
            "Sometimes Claude will state something incorrect — a wrong date, a made-up detail, a citation that doesn't exist — in the same calm, confident tone it uses for everything else. People in AI call this a “hallucination.” It's the single most important thing to know.",
            "This doesn't make Claude untrustworthy; it makes it a tool you verify on anything that matters. For brainstorming or drafting, just go. For facts, figures, names, dates, medical or legal or financial specifics — check them against a reliable source before you rely on them.",
          ],
          highlight: "Confidence is not the same as correctness. Verify anything that matters.",
        },
        {
          type: 'concept',
          eyebrow: 'What it doesn’t automatically know',
          icon: '🚧',
          title: "By default, Claude doesn't know today's news or anything about you personally.",
          body: [
            "Claude's core knowledge was learned up to a certain point in time, so on its own it won't know yesterday's headlines or this week's events. (It can search the web when you ask — more on that later in the course.)",
            "It also doesn't know anything about your life, your accounts, or your files unless you tell it or share them in the conversation. It isn't watching you or connected to your email by default. You're always in control of what it sees.",
          ],
          list: {
            items: [
              "<strong>Not automatically current</strong> — ask it to search the web for recent events",
              "<strong>Doesn't know you</strong> — it only knows what you share in the chat",
              "<strong>Not connected to your stuff</strong> — your email and files are private unless you add them",
              "<strong>Can make mistakes</strong> — verify facts, numbers, and anything high-stakes",
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'When to trust, when to check',
          title: 'A simple rule of thumb for everyday use.',
          bad: {
            label: '🔴 Verify before relying',
            text: 'Facts, dates, statistics, names, quotes, legal/medical/financial specifics, anything you’ll act on or send to others as true.',
          },
          good: {
            label: '🟢 Just go',
            text: 'Drafting and rewriting, brainstorming, summarizing text you provided, explaining a concept, planning, organizing your own thoughts.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Ask Claude to be honest about its own confidence.',
          body: [
            "You can actually ask Claude how sure it is — and prompt it to flag the shaky parts. This is a habit worth keeping for anything important.",
          ],
          prompt: "Answer this question, then tell me honestly how confident you are in each part of your answer and which specific details I should double-check from another source: [your question here].",
          body2: "Notice how Claude will often point you to exactly the parts worth verifying. That's the tool working the way it should — and you using it like a pro.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: "You know where Claude shines and where to keep your guard up.",
          body: [
            "Claude composes thoughtful answers from patterns it learned — brilliant for words and ideas, but capable of confident mistakes on facts. It isn't current and doesn't know you unless you tell it. Verify what matters, and you'll never be caught out.",
            "Last lesson in this module: putting it all together to get a real, satisfying win today.",
          ],
          summaryList: [
            'Claude composes answers from learned patterns — it doesn’t look up guaranteed facts',
            'It can be confidently wrong — verify facts, numbers, and high-stakes details',
            "It isn't automatically current and doesn't know you unless you share",
            'Trust it freely for drafting, brainstorming, and explaining',
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Your First Win Today',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 1 · Lesson 5',
          icon: '🏆',
          title: "Let's turn everything you've learned into one real result, right now.",
          body: [
            "You know what Claude is, you're signed in, you can hold a conversation, and you know what to trust. That's everything you need for your first genuine win — a task you actually had to do, done faster and better with Claude.",
            "This lesson is short on theory and long on doing. Pick one real thing and let's finish it together.",
          ],
          sub: "Confidence comes from one good result, not ten more lessons.",
        },
        {
          type: 'concept',
          eyebrow: 'A quick recap',
          icon: '📚',
          title: "Here's everything you've learned, in four lines.",
          body: [
            "Claude is a thoughtful AI assistant from Anthropic that you talk to in plain English. You name the outcome you want — task, context, shape. You verify anything high-stakes. And you keep the conversation going instead of grading the first reply.",
            "That's a complete, working foundation. The rest of this course makes each piece sharper, but you can already get real value today.",
          ],
          highlight: "You already know enough to make Claude genuinely useful. Now you just use it.",
        },
        {
          type: 'concept',
          eyebrow: 'The mistake to avoid',
          icon: '🔁',
          title: "Don't grade the first reply — improve it.",
          body: [
            "The number one habit of people who get great results: they never stop at the first response. They reply with “make it shorter,” “warmer,” “add a line about the deadline,” “give me three other options.”",
            "Claude expects this. Each reply is a draft you shape, not a final verdict. One or two follow-ups almost always gets you to something you're genuinely happy with.",
          ],
          highlight: "The first reply is a starting point. The good stuff usually lands on the second or third.",
        },
        {
          type: 'concept',
          eyebrow: 'Pick your win',
          icon: '🎯',
          title: 'Choose one of these three — whichever you actually need today.',
          body: [
            "Don't overthink which one. Pick the task that's most real for you right now and do it for real:",
          ],
          list: {
            items: [
              "<strong>Something to write</strong> — an email you've been avoiding, a message, a note, a post. Let Claude draft it; you refine it.",
              "<strong>Something to understand</strong> — a confusing letter, a topic in the news, a document. Paste it in and ask Claude to explain it simply.",
              "<strong>Something to plan</strong> — a trip, a weekend, a project, a tough conversation. Ask Claude to help you map it out step by step.",
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'Before and after this module',
          title: "What's changed in how you'll approach Claude.",
          bad: {
            label: '📅 Before Module 1',
            text: "Heard of Claude, maybe tried it once, typed a vague request, got a so-so answer, and weren't sure whether to trust it.",
          },
          good: {
            label: '✅ After Module 1',
            text: "Signed in and comfortable. You name what you want, keep the conversation going, and know exactly when to verify. You get real results.",
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Get one thing fully done — start to finish.',
          body: [
            "Use the prompt below for your chosen task. The key is the last line: it invites the follow-up loop that gets you to a result you'll actually use.",
          ],
          prompt: "I need help with [your real task today]. Here's the situation: [a sentence or two of context]. I'd like the result to be [tone, length, format]. Give me a first version, then ask me one or two questions that would help you make it better.",
          body2: "Answer Claude's questions, let it revise, and keep going until you're happy. When you've got a result you'd actually use — that's your first win. You're off and running.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 1 Complete',
          icon: '🎉',
          title: "You've met Claude — and you've already gotten real value from it.",
          body: [
            "You understand what Claude is, you're set up, you can hold a useful conversation, you know its limits, and you've finished a real task. That's a genuinely strong start.",
            "Module 2 goes deeper into the heart of it all: conversation. You'll learn to steer Claude's tone and length, master the follow-up, and get unstuck when an answer isn't quite right.",
          ],
          summaryList: [
            'Claude is a thoughtful AI assistant you talk to in plain English',
            'Name the outcome you want: task + context + shape',
            'Verify anything high-stakes; trust it freely for drafting and thinking',
            'Never stop at the first reply — refine your way to a great result',
            "You've completed a real task with Claude — the habit starts here",
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'What is the simplest, most accurate way to describe Claude?',
      options: [
        'A search engine that returns a list of website links',
        'An AI assistant from Anthropic that you talk to in plain English',
        'A database that looks up guaranteed-correct facts',
        'A program you must install and learn to code before using',
      ],
      correct: 1,
      feedback:
        "Claude is an AI assistant made by Anthropic, and you interact with it through ordinary conversation at claude.ai. It's a thinking and writing partner — not a search engine, not a fact database, and nothing you need to install or code to use.",
    },
    {
      q: 'Claude gives you a confident-sounding answer with a specific date and statistic. What should you do?',
      options: [
        'Trust it completely — Claude sounds sure, so it must be right',
        'Verify the date and statistic against a reliable source before relying on them',
        'Assume the whole answer is wrong and start over',
        'Only trust it if you paid for the Pro plan',
      ],
      correct: 1,
      feedback:
        "Claude can state incorrect details in the same confident tone it uses for everything — that's called a hallucination. Confidence isn't the same as correctness. For facts, dates, numbers, and anything high-stakes, verify against a reliable source. For drafting and brainstorming, you can just go.",
    },
    {
      q: "You're not sure how to even phrase what you need. What's the best move?",
      options: [
        'Give up until you can write the perfect, detailed prompt',
        "Type a single vague keyword and hope for the best",
        'Tell Claude you’re stuck and ask it to ask you questions to figure it out',
        'Search Google instead — Claude only works with perfect prompts',
      ],
      correct: 2,
      feedback:
        "You never have to arrive with a perfect request. “Help me think this through” is a complete prompt on its own. Claude is happy to ask you questions and figure out what you need together — which takes all the pressure off you.",
    },
  ],
}

export default c7module1
