import type { CourseData } from './types'

const c4module6: CourseData = {
  moduleId: 24,
  title: 'Stay Sharp, Stay Safe',
  subtitle: 'AI for a Richer Retirement · Module 6',
  lessons: [
    // ─────────────────────────────────────────
    // Lesson 0 — Spotting Scams Before They Get You
    // ─────────────────────────────────────────
    {
      id: 0,
      title: 'Spotting Scams Before They Get You',
      meta: '7 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for a Richer Retirement · Lesson 1',
          icon: '🛡️',
          title: 'Spotting Scams Before They Get You',
          body: [
            "By the end of this lesson, you'll know exactly what AI-powered scams look like today, the red flags that give them away, and a simple three-step process for verifying anything that feels off — before you act on it.",
          ],
          sub: "Knowing what to look for is your strongest protection.",
        },
        {
          type: 'concept',
          eyebrow: "Why scams are harder to spot now",
          icon: '⚠️',
          title: "AI has made scam messages much more convincing than they used to be.",
          body: [
            "You've probably seen the old-style scams — misspelled words, awkward sentences, implausible stories about a Nigerian prince. Those were easy to spot.",
            "Today's scams are different. Scammers are using the same AI tools you've been learning about to write perfectly professional emails, create realistic-sounding phone calls, and even clone the voices of real people you know.",
            "The technology hasn't made you less safe — but it does mean the old 'bad writing' test no longer works. You need better tools, and this lesson gives you exactly that.",
          ],
          highlight: "Good writing is no longer proof that something is legitimate. You need to look deeper.",
        },
        {
          type: 'concept',
          eyebrow: "The most common scams targeting retirees right now",
          icon: '🎣',
          title: "These are the scams you're most likely to encounter.",
          body: [
            "Knowing what to expect is the first line of defense. The most common scams targeting people in retirement today involve:",
          ],
          list: {
            items: [
              '<strong>Grandchild in trouble:</strong> An urgent call or message claiming a grandchild is in jail, in an accident, or in danger — and needs money immediately. The voice may sound familiar.',
              '<strong>Medicare or Social Security fraud:</strong> Someone claiming your benefits are suspended, your account has been compromised, or you owe money to the government right now.',
              '<strong>Tech support imposters:</strong> A popup or call claiming your computer has a virus and they need remote access to fix it — often requesting gift card payment.',
              '<strong>Investment "opportunities":</strong> Too-good-to-be-true returns on crypto, gold, or real estate — often with high-pressure urgency and fake testimonials.',
              '<strong>Romance scams:</strong> Someone who meets you online, builds a relationship over weeks or months, then asks for money for an emergency.',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: "The red flags that never change",
          icon: '🚩',
          title: "Scammers almost always use one of these pressure tactics.",
          body: [
            "AI can make a scam message sound polished and professional — but the underlying tactics stay the same, because they work. Watch for these in any message, email, or phone call:",
          ],
          list: {
            items: [
              '<strong>Urgency:</strong> You must act right now. Today. Before something terrible happens.',
              '<strong>Secrecy:</strong> Don\'t tell your family. Don\'t tell your bank. This is just between us.',
              '<strong>Unusual payment:</strong> They want gift cards, wire transfer, cryptocurrency, or cash — not a normal payment method.',
              '<strong>Unsolicited contact:</strong> You didn\'t reach out to them. They called, texted, or emailed you out of nowhere.',
              '<strong>Pressure to skip verification:</strong> They discourage you from calling anyone to confirm or taking any time to think.',
            ],
          },
          highlight: "Urgency, secrecy, and unusual payment methods together are almost always a scam. Slow down.",
        },
        {
          type: 'compare',
          eyebrow: "Legitimate vs. scam",
          icon: '🔍',
          title: "Here's the difference between a real message and a scam.",
          bad: {
            label: 'Almost always a scam',
            text: '"Your Medicare account has been flagged. Call this number immediately or your benefits will be suspended by end of day. Do not share this with anyone until the matter is resolved."',
          },
          good: {
            label: 'How real agencies communicate',
            text: 'Real government agencies contact you by mail first. They never demand immediate payment by phone. They never ask for gift cards. They never tell you to keep the conversation secret. And they always give you time to verify.',
          },
        },
        {
          type: 'concept',
          eyebrow: "Your three-step verify process",
          icon: '✅',
          title: "When something feels off — pause, hang up, verify.",
          body: [
            "You don't have to know whether something is a scam in the moment. You just need one habit: pause before acting.",
            "<strong>Step 1 — Pause and name it:</strong> Say out loud: 'This could be a scam. I'm not going to act until I check.' That one sentence interrupts the urgency the scammer created.",
            "<strong>Step 2 — Hang up or close the message.</strong> Don't argue, don't explain — just disengage. Scammers are trained to keep you on the line.",
            "<strong>Step 3 — Verify through a trusted channel.</strong> If it involves your bank, call the number on the back of your card. If it's about a grandchild, call them directly on a number you already have. If it's a government agency, look up their official number yourself.",
          ],
          highlight: "Any legitimate organization will give you time to verify. If they won't, that's your answer.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Ask AI to help you practice spotting scams.',
          body: [
            "Open <strong>chatgpt.com</strong> and run this prompt. It'll create a short, realistic practice exercise so you can test what you've just learned.",
          ],
          prompt:
            "I'm learning how to spot AI-generated scams and I want to practice. Please give me three short example messages — one that's a scam, one that's legitimate, and one that's ambiguous. Write them as if they're real emails or texts I might receive. After I guess which is which, tell me the answer and explain the red flags I should have noticed in the scam message. Keep the examples realistic for someone who is retired.",
          body2:
            "After you read the examples, make your guesses before scrolling to the answer. The practice of actually deciding is what builds the instinct.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: "You now know more than most people about how to spot AI-powered scams.",
          body: [
            "The old 'bad writing' test is gone — but the emotional tactics scammers use haven't changed. Urgency, secrecy, and unusual payment methods are always red flags. And when something feels off, pause, disengage, and verify through a channel you control.",
            "In the next lesson, we zoom out to your whole digital life — passwords, privacy, and what AI actually knows about you.",
          ],
          summaryList: [
            'AI has made scam messages look professional — good writing is no longer proof of legitimacy',
            'The most common scams: grandchild emergencies, Medicare fraud, tech support imposters, fake investments, romance scams',
            'Red flags: urgency, secrecy, unusual payment, unsolicited contact, pressure to skip verification',
            'When something feels off: pause, hang up or close it, verify through a trusted channel you find yourself',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 1 — Protecting Your Digital Life
    // ─────────────────────────────────────────
    {
      id: 1,
      title: 'Protecting Your Digital Life',
      meta: '7 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for a Richer Retirement · Lesson 2',
          icon: '🔐',
          title: 'Protecting Your Digital Life',
          body: [
            "By the end of this lesson, you'll understand the basics of protecting yourself online — passwords, what to share and what not to, and what AI actually knows about you — explained in plain English, without fear.",
          ],
          sub: "A few simple habits protect far more than you'd expect.",
        },
        {
          type: 'concept',
          eyebrow: "The password problem most people have",
          icon: '🔑',
          title: "Reusing the same password is the single biggest risk most people carry.",
          body: [
            "Here's a pattern that's incredibly common: you pick a password you can remember, and you use it everywhere — your email, your bank, your shopping accounts, maybe with a '1' or '!' added at the end for the sites that require it.",
            "The problem is that when any one of those sites gets hacked — and they do, regularly — the attackers try that same password on your email and bank accounts immediately. If it works, they're in.",
            "You don't need a complicated system. You need one strong, unique password for your email (the most important account you have), one for your bank, and a password manager to handle the rest. That's it.",
          ],
          highlight: "Your email password is the most important one. If someone gets into your email, they can reset every other password you have.",
        },
        {
          type: 'concept',
          eyebrow: "Password managers — simpler than they sound",
          icon: '🗝️',
          title: "A password manager remembers your passwords so you don't have to.",
          body: [
            "A password manager is an app that stores all your passwords in one secure place. You remember one master password to open the manager — it handles everything else.",
            "When you visit a website, the manager fills in your username and password automatically. When you create a new account, it suggests a strong password you'll never have to remember.",
            "Two good options that are simple to use: <strong>1Password</strong> and <strong>Bitwarden</strong> (Bitwarden has a free version). Both work on phones, tablets, and computers. Setting one up takes about 20 minutes — and you only have to do it once.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "What to share — and what not to",
          icon: '🤫',
          title: "Some information is fine to share. Some you should always protect.",
          body: [
            "AI tools are helpful and mostly safe to use — but like any tool, it helps to know what's appropriate to put into them.",
          ],
          list: {
            items: [
              '<strong>Safe to share with AI:</strong> Questions, topics you want to learn about, draft messages you\'re writing, recipes you\'re planning, travel ideas',
              '<strong>Think twice before sharing:</strong> Your full name combined with your home address, the names of your grandchildren, details about your daily routine or when you\'re away from home',
              '<strong>Never share with AI:</strong> Your Social Security number, bank account or credit card numbers, passwords, Medicare or insurance policy numbers',
            ],
          },
          highlight: "AI tools don't store your conversations to use against you — but good habits mean you never have to worry about what might have slipped through.",
        },
        {
          type: 'concept',
          eyebrow: "What AI actually knows about you",
          icon: '🧠',
          title: "Less than you might fear — but it's worth understanding.",
          body: [
            "When you use a tool like ChatGPT, your conversations are generally not stored permanently and are not shared with other users. The company uses conversations to improve the AI, but not to sell your information to advertisers.",
            "What AI doesn't know: your name, your location, your financial situation, or anything about you personally — unless you tell it in the conversation.",
            "What you should know: AI tools are made by companies with privacy policies, and those policies can change. Reading a summary of the privacy policy — or asking AI to explain it in plain English — is a reasonable thing to do once a year.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "Two minutes of protection that pay off for years",
          icon: '📱',
          title: "Turn on two-step verification for your most important accounts.",
          body: [
            "Two-step verification (also called two-factor authentication or 2FA) adds a second layer of security to your accounts. When you log in, you also get a text message with a code — and you have to enter that code to get in.",
            "Even if someone steals your password, they can't access your account without your phone. It's one of the most effective protections available and it takes about two minutes to set up.",
            "Set it up first on your email account, then your bank. Most accounts have a 'Security' section in Settings where you can enable it. Your bank's customer service line can walk you through it if you'd like help.",
          ],
          highlight: "Two-step verification stops the vast majority of account takeover attempts — even when a password has been stolen.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Ask AI to give you a personal digital safety checklist.',
          body: [
            "Open <strong>chatgpt.com</strong> and run this prompt to get a simple, personalized checklist for your situation.",
          ],
          prompt:
            "I'm a retiree who wants to make sure my digital life is reasonably protected without getting overwhelmed. I use [list the accounts and devices you use regularly — e.g., 'Gmail, online banking, Facebook, an iPhone, and a Windows laptop']. Please give me a simple priority list of the 5 most important things I should do to protect myself online. Explain each one in plain English, estimate how long each takes, and start with the highest impact ones. No technical jargon — just clear steps I can actually follow.",
          body2:
            "Tackle one item from the list this week. Just one. The highest-priority item first. Small steps add up to real protection.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: "A handful of habits protects most of what matters.",
          body: [
            "You don't need to be a tech expert to stay safe online. A strong, unique email password, two-step verification on your most important accounts, and knowing what not to share — that combination handles the vast majority of the risk.",
            "In the next lesson, we talk about the bigger picture: AI is changing fast. Here's how to keep learning without feeling behind.",
          ],
          summaryList: [
            'Reusing passwords is the biggest risk — your email password especially must be unique and strong',
            'A password manager (1Password or Bitwarden) remembers passwords for you — set it up once, use it forever',
            'Never share Social Security numbers, bank details, or passwords with AI tools — or anyone online who asks',
            'Two-step verification stops most account takeovers — set it up on email and banking first',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 2 — Staying Current as AI Keeps Evolving
    // ─────────────────────────────────────────
    {
      id: 2,
      title: 'Staying Current as AI Keeps Evolving',
      meta: '7 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for a Richer Retirement · Lesson 3',
          icon: '📡',
          title: 'Staying Current as AI Keeps Evolving',
          body: [
            "By the end of this lesson, you'll have a simple, low-effort approach to keeping up with AI — without drowning in news, feeling overwhelmed, or needing to know everything. Just the parts that matter for your life.",
          ],
          sub: "You don't need to follow every update. Just a few good habits.",
        },
        {
          type: 'concept',
          eyebrow: "Why it feels like AI is changing so fast",
          icon: '🌪️',
          title: "There's a lot of noise right now. Most of it doesn't affect you.",
          body: [
            "You can't open a newspaper or turn on the television without hearing something new about AI. New tools. New capabilities. New concerns. New predictions about what it means for society.",
            "It's a genuinely fast-moving field — but most of what gets covered in the news is aimed at businesses, developers, and investors. For someone using AI to improve daily life, most of those announcements don't change what you do tomorrow.",
            "The tools you've learned in this course will continue to work. New features will appear over time. And the skills you've built — knowing how to ask good questions, how to get useful answers, how to verify what AI tells you — those skills transfer to every new tool you'll ever encounter.",
          ],
          highlight: "The ability to use AI well is a skill you carry with you — not a set of features tied to any one tool.",
        },
        {
          type: 'concept',
          eyebrow: "What to expect in the next few years",
          icon: '🔭',
          title: "A few honest, practical things you can expect as AI keeps improving.",
          body: [
            "You don't need predictions about artificial general intelligence or the distant future. Here's what's realistically likely for someone in your situation over the next few years:",
          ],
          list: {
            items: [
              '<strong>The tools get easier to use:</strong> AI assistants will understand your questions more naturally and need less precise wording from you.',
              '<strong>Voice gets more capable:</strong> Talking to AI (instead of typing) will become a more natural option — useful if typing is inconvenient.',
              '<strong>More things you use will include AI:</strong> Search engines, health apps, and other everyday tools will quietly get smarter — you may not even notice the changes.',
              '<strong>Some information will need extra verification:</strong> As AI-generated content becomes more common, checking facts from trusted sources stays important.',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: "Trustworthy sources — without the overwhelm",
          icon: '📰',
          title: "You only need one or two reliable places to check in.",
          body: [
            "You don't need a stack of newsletters or a social media feed full of tech accounts. A small number of reliable sources, checked occasionally, is all you need.",
            "<strong>AARP Technology:</strong> aarp.org/technology — written specifically for older adults, plain English, practical focus. This is your best starting point.",
            "<strong>NPR Technology:</strong> A radio segment and website that covers tech and AI in a calm, balanced way — good for occasional listening.",
            "<strong>Ask AI itself:</strong> 'What's new in AI this month that might be useful for someone who is retired?' — a simple prompt you can use anytime to get a plain-English summary of what's changed.",
          ],
          highlight: "One good source, checked once a month, keeps you informed without overwhelming you.",
        },
        {
          type: 'concept',
          eyebrow: "When you feel behind",
          icon: '💙',
          title: "Everyone feels this sometimes. Here's what to do with it.",
          body: [
            "Even people who work in technology feel like they can't keep up with AI. That feeling of being behind — of missing something, of not knowing enough — is nearly universal right now.",
            "When it shows up for you, try this: instead of trying to catch up on everything, just ask AI one question about the thing that's confusing you. One question. The answer almost always helps more than reading ten articles.",
            "You don't have to know everything about AI to benefit from it. You just have to know enough to use it for the things that improve your life. That's what this course has been building — and you already have it.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "Staying curious — without pressure",
          icon: '🌱',
          title: "Curiosity, not ambition, is the right engine for this.",
          body: [
            "The best relationship with a fast-changing technology like AI isn't anxious ambition — trying to always know the latest thing. It's calm curiosity: when something sounds interesting or useful, you explore it. When it doesn't, you don't.",
            "You've already demonstrated that curiosity by taking this course. You didn't have to do this. You chose to learn something new, tried unfamiliar tools, and built real skills. That's not nothing — that's exactly the kind of openness that serves you as things keep evolving.",
            "Trust that instinct. When something catches your attention, follow it. That's how you keep growing without it ever feeling like a chore.",
          ],
          highlight: "Curiosity without pressure is sustainable. Anxious ambition burns out. Choose the one that feels like you.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Ask AI what you should know about AI right now.',
          body: [
            "Open <strong>chatgpt.com</strong> and run this prompt. It's a simple way to see what's actually relevant to you — no news scrolling required.",
          ],
          prompt:
            "I'm a retiree who has been learning to use AI tools for everyday life — things like travel planning, staying in touch with family, health research, and personal projects. I'm not in business or technology. Please give me a brief, friendly summary of: (1) the most useful things that have changed about AI tools in the past few months that I might actually notice or benefit from, and (2) anything I should be more careful about as AI becomes more common. Keep it to the things that matter for someone living a full retirement — skip the technical and business stuff.",
          body2:
            "Save this as a prompt you come back to every few months. Think of it as your personal AI news briefing — filtered for your actual life.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: "Staying current doesn't take much — just a little curiosity, consistently.",
          body: [
            "One reliable source, checked occasionally. One question asked when something confuses you. A prompt you run every few months for a brief, relevant update. That's a staying-current habit that fits a full, busy life.",
            "In the next lesson, we look at how to bring all of this into your daily routine — simply and sustainably.",
          ],
          summaryList: [
            'Most AI news is aimed at businesses and developers — the updates that matter for your life are much fewer',
            'Your skills transfer: knowing how to ask good questions works with every new AI tool you\'ll encounter',
            'Best source: AARP Technology (aarp.org/technology) — written for older adults, plain English',
            'Ask AI itself: "What\'s new in AI this month that would be useful for someone who is retired?" — monthly check-in',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 3 — Your Daily AI Habits
    // ─────────────────────────────────────────
    {
      id: 3,
      title: 'Your Daily AI Habits',
      meta: '7 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for a Richer Retirement · Lesson 4',
          icon: '☀️',
          title: 'Your Daily AI Habits',
          body: [
            "By the end of this lesson, you'll have a simple, realistic daily routine with AI that fits your life — not an ambitious system, but a light and consistent one that keeps compounding over time.",
          ],
          sub: "Ten minutes a day, applied consistently, changes more than you'd expect.",
        },
        {
          type: 'concept',
          eyebrow: "Why routines matter more than effort",
          icon: '🔄',
          title: "You don't need to use AI intensively. You need to use it consistently.",
          body: [
            "The people who get the most out of AI aren't necessarily the ones who use it for hours. They're the ones who reach for it regularly — as a natural first step when they have a question, a task, or a problem to think through.",
            "That kind of casual, consistent use is built through simple routines. Not elaborate systems. Just a handful of moments in your day where AI becomes the obvious thing to reach for.",
            "Think of it the way you might think about a daily walk. You don't have to go far. You don't have to go fast. You just have to go — and the benefits accumulate.",
          ],
          highlight: "A small habit used every day is worth more than a grand plan used once a month.",
        },
        {
          type: 'concept',
          eyebrow: "Five natural touchpoints in your day",
          icon: '📍',
          title: "Here's where AI fits most naturally into daily life.",
          body: [
            "You don't need to carve out dedicated 'AI time.' You need to recognize the moments in your day where it's the most useful:",
          ],
          list: {
            items: [
              '<strong>Morning question:</strong> Something you read in the news, heard on the radio, or wondered about — ask AI instead of letting it go unanswered.',
              '<strong>Meal planning or recipes:</strong> "What can I make with chicken, rice, and these vegetables?" — a simple, practical use that saves time and adds variety.',
              '<strong>Writing a message:</strong> A condolence card, a note to a grandchild, a letter to a neighbor — AI can help you find the right words when you\'re not sure how to start.',
              '<strong>Health question:</strong> Before or after a doctor\'s appointment, use AI to understand a term, prepare a question, or make sense of what you were told.',
              '<strong>Evening curiosity:</strong> Something you saw during the day, a word in a book, a place you want to learn about — follow that curiosity with AI before bed.',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: "A realistic 10-minute routine",
          icon: '⏱️',
          title: "What ten minutes with AI actually looks like.",
          body: [
            "Not all of these will apply every day — and that's fine. Pick the ones that fit your morning:",
            "<strong>One morning question (3 minutes):</strong> Whatever's on your mind — the news, a health question, something about a trip you're planning. Type it in, read the answer.",
            "<strong>One task AI can help with (5 minutes):</strong> An email you need to write, a recipe you want, something you want to understand better. Ask it. Use what comes back.",
            "<strong>One curiosity follow-up (2 minutes):</strong> A word, a person, a place, a 'how does that work' question. This is the fun part — let it wander.",
          ],
          highlight: "Ten minutes, three prompts. That's a habit. Habits compound.",
        },
        {
          type: 'concept',
          eyebrow: "When you haven't used it in a few days",
          icon: '💙',
          title: "Getting back on track is always easier than you think.",
          body: [
            "Life gets busy. You travel, you have family visits, you get sick, you have a full week. And then you realize you haven't opened ChatGPT in a while.",
            "That's completely fine. There's no streak to maintain, no performance to keep up. You just open it and ask something — anything — and you're back.",
            "The habit doesn't require perfection to work. It requires return. Every time you come back to it, you're reinforcing the pattern. Don't let a skipped week turn into a reason to stop.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "Making it your own",
          icon: '🎨',
          title: "The best AI habit is the one that fits your life — not a template.",
          body: [
            "Some people love using AI in the morning with coffee. Others prefer it in the evening. Some people use it for practical tasks; others use it mostly for conversation and curiosity.",
            "After six modules, you have a good sense of what's been most useful for you. Lean into that. The parts of this course that excited you the most, that made you think 'I'm definitely doing this regularly' — those are the parts to anchor your habit around.",
            "You don't need to use AI for everything. You need to use it for the things that genuinely make your days richer, easier, or more interesting. That's the whole goal.",
          ],
          highlight: "Your AI habit should feel like something you want to do — not something you're supposed to do.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Design your own simple daily AI routine.',
          body: [
            "Open <strong>chatgpt.com</strong> and let AI help you figure out what your routine should actually look like — based on your own life and interests.",
          ],
          prompt:
            "I'm building a simple daily habit of using AI, and I want it to fit my actual life — not a generic template. Here's a little about me: I'm retired and my days typically include [describe 2–3 things you do regularly — e.g., 'morning coffee and the newspaper, afternoon errands, evenings watching TV or reading']. The things I most enjoyed learning about AI in this course were [mention 1–2 things from the course you found most useful or enjoyable]. Please suggest a simple, realistic 10-minute daily AI routine that builds on what I already enjoy and fits naturally into when and how I spend my time. Make it feel doable — not ambitious.",
          body2:
            "Pick the one or two suggestions that feel most natural. Write them down somewhere visible — a sticky note on your computer, or a note in your phone. That's your routine.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: "Small, consistent, and enjoyable — that's the recipe.",
          body: [
            "A daily AI habit doesn't have to be impressive. It just has to be yours. Ten minutes a day, built around the moments that already exist in your life, focused on the things you actually care about.",
            "In the final lesson, we step back and celebrate what you've accomplished. You've built real skills — skills most people your age don't have — and you deserve to feel good about that.",
          ],
          summaryList: [
            'Consistent, casual use builds more skill than occasional intense sessions',
            'Five natural touchpoints: morning question, meal planning, writing a message, health question, evening curiosity',
            'A realistic routine is 10 minutes: one question, one task, one follow-up curiosity',
            'Skipping a few days is fine — the only move is to return, not to restart from zero',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 4 — Your Richer Retirement — What's Next
    // ─────────────────────────────────────────
    {
      id: 4,
      title: "Your Richer Retirement — What's Next",
      meta: '7 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for a Richer Retirement · Lesson 5',
          icon: '🌅',
          title: "Your Richer Retirement — What's Next",
          body: [
            "This is the final lesson. We're not going to teach you anything new — we're going to help you see exactly what you've built, celebrate it honestly, and look ahead at where these skills can take you.",
          ],
          sub: "You came in curious. You leave with real skills.",
        },
        {
          type: 'concept',
          eyebrow: "Look at what you've done",
          icon: '🏗️',
          title: "Six modules. Real, practical skills you didn't have before.",
          body: [
            "Let's be specific about what this course gave you — not just knowledge, but capability. These are things you can actually do now:",
          ],
          list: {
            items: [
              '<strong>Module 1:</strong> You understand what AI is, how to talk to it, and how to get useful answers without being a tech expert',
              '<strong>Module 2:</strong> You can use AI for health questions — preparing for doctor appointments, understanding diagnoses, researching medications',
              '<strong>Module 3:</strong> You can plan travel with AI — itineraries, local tips, translation, staying connected away from home',
              '<strong>Module 4:</strong> You can use AI for family and creativity — staying in touch, writing stories, learning new things, working on projects you care about',
              '<strong>Module 5:</strong> You can manage your finances and home with AI — making sense of retirement income, organizing accounts, home projects',
              '<strong>Module 6:</strong> You can protect yourself from scams, keep your digital life safe, and build habits that keep growing with you',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: "The real size of this accomplishment",
          icon: '🌟',
          title: "You learned something that most people your age haven't tried.",
          body: [
            "This is worth saying directly: the skills you've built in this course are not common. Most people in their 50s, 60s, and 70s have heard about AI, maybe even worried about it — but haven't taken the time to actually learn it.",
            "You did. You showed up for six modules. You tried the exercises. You asked questions, you experimented, and you built a real foundation.",
            "That's not a small thing. That takes curiosity and courage — the willingness to learn something unfamiliar at a stage of life when it would have been perfectly reasonable to say 'that's not for me.'",
          ],
          highlight: "You proved that it is for you. And now you have the skills to show for it.",
        },
        {
          type: 'concept',
          eyebrow: "What to do next",
          icon: '🚀',
          title: "Three things that will make the most of what you've built.",
          body: [
            "You don't need an elaborate plan. Three simple things, done consistently, will take you further than you might expect:",
            "<strong>Use it regularly.</strong> The daily habit from Lesson 4. Even ten minutes. Even one question. Consistent use is how skills deepen naturally.",
            "<strong>Follow what interests you.</strong> In this course, something caught your attention more than the rest. Maybe it was the health research. Maybe it was the creativity. Maybe it was travel planning. Follow that thread — it's where the richest use is for you.",
            "<strong>Share it with one person.</strong> A friend, a sibling, an adult child who doesn't expect you to know this. Show them one thing you've learned. That conversation will matter to both of you.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "The people who will ask you for help",
          icon: '🤝',
          title: "You may become the person in your circle who 'gets' AI.",
          body: [
            "Something interesting tends to happen to people who take a course like this. Friends and family who've been curious — but haven't done anything about it — start asking questions.",
            "'Didn't you do a course on that AI thing? Can you show me how it works?' That question will come.",
            "You don't have to become a teacher or an expert. You just have to share one thing that worked for you. A prompt that helped you understand a medical bill. A message it helped you write. A trip it helped you plan. One real example does more than any explanation.",
          ],
          highlight: "Being the person in your circle who understands AI is a generous thing to be. You can make this less confusing and more approachable for the people you love.",
        },
        {
          type: 'concept',
          eyebrow: "Retirement just got richer",
          icon: '💛',
          title: "This was always about your life — not the technology.",
          body: [
            "AI isn't the point. The point is the years ahead of you — and the freedom, curiosity, and engagement that make those years feel full.",
            "AI is just a tool that can make some things easier: the health conversations that feel complicated, the travel that takes more planning than it used to, the projects you've been meaning to start, the grandchildren you want to stay connected with.",
            "When a tool makes your life richer — makes you feel more capable, more curious, more connected — it's worth learning. That's what this course was always about.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Your Final Exercise',
          icon: '🌅',
          title: 'Write a letter to yourself — from AI.',
          body: [
            "Open <strong>chatgpt.com</strong> for one final prompt. This one is just for you.",
          ],
          prompt:
            "I just completed a six-module course called 'AI for a Richer Retirement.' I'm a retiree who is [your age, optional] and the things I'm most hoping to use AI for going forward are [describe 2–3: e.g., 'staying on top of my health, keeping in touch with my grandkids, and finally writing the family memoir I've been putting off']. Please write me a short, warm, encouraging letter — as if you're writing it to me personally — that celebrates what I've done, reminds me of what I've learned, and encourages me in the specific things I want to use AI for next. Make it feel like it's actually meant for me, not a generic graduation message.",
          body2:
            "Save what it writes. Read it when you feel uncertain about technology, or when you wonder whether this was worth your time. It was. You're proof of that.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Course Complete',
          icon: '🌅',
          title: "You did it. And this is just the beginning.",
          body: [
            "Six modules. Real skills. A daily habit that keeps growing. And a genuine understanding of something that most people your age are still figuring out.",
            "The years ahead are yours — fuller, more curious, and a little more capable than they were when you started. That's what AI for a Richer Retirement was always for.",
          ],
          summaryList: [
            'You built real skills across six modules: health, travel, family, creativity, finances, and safety',
            'Most people your age haven\'t done this — you took the time to learn, and it shows',
            'Three things going forward: use it regularly, follow what interests you most, share one thing with someone you care about',
            'AI is just the tool — a richer, more curious, more connected retirement is the point',
          ],
          gradBlock: {
            icon: '🌅',
            title: 'You did it.',
            body: "You now have skills that most people your age don't — and the confidence to keep building. AI for a Richer Retirement is complete.",
            name: 'AI for a Richer Retirement',
          },
        },
      ],
    },
  ],

  quiz: [
    {
      q: "When you receive an urgent message — by phone, text, or email — claiming something is wrong with your bank account or Medicare, what is the most important first step?",
      options: [
        "Follow the instructions in the message to resolve the issue quickly before it gets worse",
        "Reply to the message or stay on the phone and ask for more details to decide if it\'s real",
        "Pause, disengage from the message, and verify by calling the organization using a number you find yourself",
        "Forward the message to a family member and let them decide what to do",
      ],
      correct: 2,
      feedback:
        "The right move is always to pause, disengage, and verify through a channel you control. Hang up, close the message, then call the bank or agency using the number on the back of your card or from the official website — never a number in the message itself. Legitimate organizations give you time to do this. Scammers pressure you not to.",
    },
    {
      q: "Which of the following is the most important password habit to protect your online accounts?",
      options: [
        "Change all your passwords every 30 days to stay ahead of hackers",
        "Use a unique, strong password for your email account — and a password manager for the rest",
        "Use the same password everywhere, but make it very long and hard to guess",
        "Write all your passwords in a notebook kept near your computer for easy reference",
      ],
      correct: 1,
      feedback:
        "Your email account is the most important one to protect — if someone gets into your email, they can reset every other password you have. Use a unique, strong password there. A password manager (like 1Password or Bitwarden) handles the rest, so you only have to remember one master password. Reusing passwords across accounts is the single biggest risk most people carry.",
    },
    {
      q: "What is the best approach to staying current with AI developments without feeling overwhelmed?",
      options: [
        "Read every AI news article you come across to stay fully informed",
        "Ignore AI news entirely — you already know enough from this course",
        "Follow one reliable source aimed at your situation, and occasionally ask AI itself what\'s new and relevant for you",
        "Subscribe to at least five AI newsletters so you don\'t miss anything important",
      ],
      correct: 2,
      feedback:
        "One reliable source — like AARP Technology — checked occasionally, plus the occasional AI prompt ('What's new in AI this month that would be useful for someone who is retired?') is all you need. Most AI news is aimed at businesses and developers. The updates that matter for your life are much fewer, and AI itself is a great filter for finding them.",
    },
  ],
}

export default c4module6
