import type { CourseData } from './types'

const c5module6: CourseData = {
  moduleId: 30,
  title: 'Your Personal Prompt Library',
  subtitle: 'Module 6',
  lessons: [
    {
      id: 0,
      title: 'Why Saving Your Prompts Changes Everything',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 6 · Lesson 1',
          icon: '📚',
          title: 'The best AI users never start from scratch.',
          body: [
            "You've spent this course building real prompt skills. Now it's time to make sure you don't lose them. Most people treat every AI session as disposable — they get a result they're happy with, close the tab, and the next time they need something similar, they start over from zero.",
            "Building a prompt library changes that. It turns a skill you've learned into a system you own — one that compounds over time and gets more useful with every prompt you add.",
          ],
          sub: 'This module is about making what you\'ve learned permanent.',
        },
        {
          type: 'concept',
          eyebrow: 'The disposable session trap',
          icon: '🗑️',
          title: 'Most people treat AI like a vending machine — use it and forget it.',
          body: [
            "Every time you craft a prompt that works really well — one that gets you exactly the kind of response you needed — that prompt has value. Not just for this task, but for every similar task in the future. But if you don't save it, that value disappears the moment you close the window.",
            "The best AI users have learned to treat good prompts the way a chef treats a great recipe: write it down, keep it somewhere you can find it, and refine it each time you use it. The investment is tiny. The return compounds.",
          ],
          highlight: 'A prompt you save is a tool. A prompt you forget is a one-time favor.',
        },
        {
          type: 'concept',
          eyebrow: 'What a prompt library is',
          icon: '🧰',
          title: 'Think of it like a toolbox, not an archive.',
          body: [
            "A prompt library isn't a collection of everything you've ever typed into AI. It's a curated set of your most useful, reusable prompts — the ones you reach for again and again. Think of each saved prompt as a tool: it does a specific job, it's ready when you need it, and you can customize it for each new situation.",
            "The goal isn't to save everything. It's to save the prompts that save you the most time. Start with 5 to 10, and add when you discover something new that works well. Quality over quantity — every time.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Where to keep it',
          icon: '📝',
          title: 'The best system is the one you\'ll actually use.',
          body: [
            "Your prompt library doesn't need special software. The best location is wherever you already go to find things — a Google Doc, a note on your phone, a folder in Notion, a section in your email drafts, a physical notebook. The tool doesn't matter. What matters is that it's somewhere you can find it in under 10 seconds.",
            "A simple format works best: the prompt name, what it's for, and the template text with [PLACEHOLDERS] for the parts that change each time. That's it. You'll refine the format as you go.",
          ],
          list: {
            items: [
              '<strong>Google Doc:</strong> Easy to search, always accessible, shareable with others',
              '<strong>Apple Notes / Google Keep:</strong> Fast to access from your phone or desktop',
              '<strong>Notion:</strong> Great if you already use it — add a "Prompts" page',
              '<strong>A plain text file:</strong> Simple, fast, and always works',
            ],
            negative: false,
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Build your first saved prompt — a professional bio generator.',
          body: [
            "Let's start your library with a prompt that almost everyone needs at some point and almost no one enjoys writing: a professional bio. This is a great first saved prompt because you'll use it more than you expect — for conference programs, LinkedIn, speaking introductions, client proposals, and more.",
          ],
          prompt: "Write a professional bio for me in [first person / third person]. Here are the key details: Name: [your name]. Current role and organization: [role at company]. Years of experience: [X years in field]. Two or three notable accomplishments or areas of expertise: [list them]. Personal touch (optional): [something human — a hobby, a location, a mission]. Tone: [professional and warm / formal / conversational]. Length: [short — 75 words / medium — 150 words / long — 250 words].",
          body2: "Save this prompt now — in a doc, a note, anywhere you'll find it later. Replace the details with [PLACEHOLDERS] so you can grab it the next time you need a bio update. That's your first tool in the library.",
        },
        {
          type: 'concept',
          eyebrow: 'When to add a prompt',
          icon: '⭐',
          title: 'Save it when it works — not after.',
          body: [
            "The best time to add a prompt to your library is right after it produces a response you're genuinely happy with. Don't wait until later — you'll forget. Build the habit of asking yourself after a good AI session: \"Is this a prompt I'd use again in the next three months?\" If yes, save it.",
            "Over time, you'll find you have prompts for every recurring task: email templates for common situations, a summary prompt for your most common document types, a brainstorming prompt you reach for when you're stuck. That collection is worth more than any single conversation.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'The compounding effect',
          icon: '📈',
          title: 'Your library gets more valuable the longer you use it.',
          body: [
            "The first week, your library has a few prompts and saves you maybe 20 minutes. After a month of consistent use, it has a dozen well-refined prompts and saves you an hour or more per week. After a year, it reflects your actual workflow — and the people around you start to notice that you consistently produce better, faster work.",
            "This isn't about becoming an AI expert. It's about building a personal system that quietly makes you more effective at the things you already do. That's the real payoff.",
          ],
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: "You've started the system. Now let's fill it.",
          body: [
            "Saving prompts is a small habit with a large return. Start with the bio prompt you just built. Add one more each week. In a month, you'll have a library worth using every day.",
            'Next lesson: the 10 prompts that almost everyone should have saved.',
          ],
          summaryList: [
            'Treat good prompts like tools — save them so you can reuse them',
            'A prompt library is a curated set of your most useful, reusable prompts — not everything you\'ve ever used',
            'Keep it wherever you already go to find things — simplicity beats the perfect system',
            'Save a prompt right after it works — don\'t wait until later',
          ],
        },
      ],
    },
    {
      id: 1,
      title: 'The 10 Prompts Everyone Should Save',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 6 · Lesson 2',
          icon: '🔟',
          title: 'Ten prompts. Dozens of hours saved every year.',
          body: [
            "Across six modules, you've practiced prompts for email, summarizing, brainstorming, writing, editing, and planning. This lesson distills all of that into the 10 highest-value prompts — the ones that work for almost everyone, in almost any professional or personal context.",
            "These are your starter library. You'll customize them for your situation, but as starting points, each one is worth having ready to use.",
          ],
          sub: 'These aren\'t hypothetical examples. They\'re real, copy-paste-ready prompts.',
        },
        {
          type: 'concept',
          eyebrow: 'Your core 10',
          icon: '📋',
          title: 'The 10 prompts worth saving right now.',
          body: [
            "Copy these into your prompt library. Replace the [BRACKETS] with your details when you use them. These are starting points — you'll refine each one over time as you learn what works for your specific situations.",
          ],
          list: {
            items: [
              "<strong>Email draft:</strong> \"Write a [type] email to [who] about [topic]. Tone: [tone]. Goal: [outcome]. Under [length].\"",
              "<strong>Summarizer:</strong> \"Summarize this in 3 bullet points for someone who [context]: [paste text]\"",
              "<strong>Brainstorm:</strong> \"Give me 10 ideas for [goal]. Constraints: [constraints]. I've already considered: [options].\"",
              "<strong>Editor:</strong> \"Improve this [text type]. Make it [shorter/clearer/more engaging]. Keep my voice: [paste]\"",
              "<strong>Explainer:</strong> \"Explain [topic] in plain English as if I'm a [non-technical person/beginner/smart but busy professional].\"",
              "<strong>Devil's advocate:</strong> \"Here's my plan: [plan]. Play devil's advocate — what could go wrong?\"",
              "<strong>Decision helper:</strong> \"I'm deciding between [A] and [B]. List the pros and cons of each given that [context].\"",
              "<strong>Rewriter:</strong> \"Rewrite this to sound more [professional/casual/confident/concise]: [paste text]\"",
              "<strong>Planner:</strong> \"Create a step-by-step plan for [goal] by [date]. I'm starting from [current state].\"",
              "<strong>Follow-up:</strong> \"Look at your last response. What did you leave out that would be most useful to add?\"",
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'About prompt 10',
          icon: '🔁',
          title: 'The follow-up prompt is a secret weapon.',
          body: [
            "Prompt number 10 — \"Look at your last response. What did you leave out that would be most useful to add?\" — is deceptively simple and consistently underused. After any response you find useful, this follow-up almost always produces something valuable that the first answer missed.",
            "It works because AI, like people, sometimes takes shortcuts in its first response. Asking it to self-critique surfaces the nuances, caveats, and additional details that would have required you to know the right follow-up question. You don't need to know what you don't know — you just ask AI what it left out.",
          ],
          highlight: '"Look at your last response. What did you leave out that would be most useful to add? Be honest — what was missing?"',
        },
        {
          type: 'concept',
          eyebrow: 'These are starting points',
          icon: '🔧',
          title: 'Customize them. They get better every time you use them.',
          body: [
            "These 10 prompts are designed to work broadly — which means they're not yet optimized for your specific context. As you use each one, you'll discover what details to add, what instructions to make more specific, and what language produces better results for your particular situation.",
            "That customization is the point. A prompt you've refined 5 times based on your own experience is worth far more than a perfect-sounding template you found online. Your version knows your context. Generic templates don't.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Pick 3. Try them. Save the results.',
          body: [
            "Don't try to use all 10 at once. Pick the three that are most relevant to something you're working on right now. Open AI, run each one with real details from your actual work or life, and save the results — both the prompt and the output — in your prompt library.",
          ],
          prompt: "I'm going to test three prompts from my new prompt library. For each one, I'll give you the filled-in prompt. After each response, tell me: what would make this prompt even more specific for someone in my situation? My context: I'm a [your role] who primarily uses AI for [your top 2-3 use cases].\n\nFirst prompt: [paste the first prompt you chose with your real details filled in]",
          body2: "After testing all three, add a note next to each saved prompt: what worked well, what you'd change, and what detail you'd always include next time. That note is the beginning of your own prompt expertise.",
        },
        {
          type: 'concept',
          eyebrow: 'Sharing your library',
          icon: '🤝',
          title: 'Your prompts are worth sharing with your team.',
          body: [
            "Once your prompt library has a few good prompts, consider sharing it with one or two colleagues who are also trying to get better at AI. Shared prompt libraries are one of the fastest ways teams level up together — someone finds a great prompt, it gets added to the shared doc, and everyone benefits.",
            "You don't need a formal process. A shared Google Doc with the team's best prompts — organized by use case — is enough. The person who starts that doc usually becomes the team's informal AI resource. That's not a bad reputation to have.",
          ],
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: "You have a working library. Now let's make them reusable.",
          body: [
            "Ten prompts. Each one covers a category of work you do regularly. Each one is better than starting from scratch. Together, they're a solid foundation.",
            "Next lesson: how to turn specific prompts into reusable templates you can grab in seconds.",
          ],
          summaryList: [
            'Copy all 10 prompts into your library — they cover the most common professional use cases',
            'Prompt 10 (the follow-up) is underused and consistently valuable — use it after any good response',
            'Customize each prompt as you use it — your refined version will outperform the generic template',
            'Sharing your library with teammates multiplies the value for everyone',
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Turning Prompts into Templates',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 6 · Lesson 3',
          icon: '🔧',
          title: 'A template is a prompt that works every single time.',
          body: [
            "There's a difference between a prompt that worked once and a template that works every time. The difference is [PLACEHOLDERS]. When you replace the specific details of a prompt with clearly labeled blanks, you transform a one-time use into a reusable tool.",
            "This lesson is about making that upgrade. It takes about five minutes per prompt, and it's what separates people who occasionally get value from AI from people who rely on it every day.",
          ],
          sub: 'A good template is like a form you can fill out in 30 seconds.',
        },
        {
          type: 'concept',
          eyebrow: 'What makes a template',
          icon: '📐',
          title: 'Replace the specifics with [PLACEHOLDERS IN CAPS].',
          body: [
            "Converting a prompt into a template is a simple find-and-replace exercise. Go through the prompt and identify every piece of information that would change next time you use it: the recipient, the topic, the document, the goal. Replace each one with a [PLACEHOLDER IN CAPS] that makes it obvious what goes there.",
            "Caps matter — they help the placeholder stand out when you're scanning the template quickly. Brackets matter — they signal \"fill this in\" without ambiguity. Clear, descriptive placeholder names matter — \"[RECIPIENT'S ROLE AND YOUR RELATIONSHIP]\" is more useful than \"[PERSON]\".",
          ],
          highlight: 'Before: "Write an email to Marcus, our vendor, about the contract renewal. Be professional but warm." → After: "Write an email to [RECIPIENT\'S NAME AND ROLE] about [TOPIC OR SITUATION]. Be [TONE]."',
        },
        {
          type: 'concept',
          eyebrow: 'What good templates include',
          icon: '✅',
          title: 'Four ingredients of a reusable template.',
          body: [
            "The best templates have four things: a <strong>task verb</strong> that tells AI what to do (write, summarize, create, explain, rewrite), a <strong>context placeholder</strong> for the relevant background, an <strong>audience placeholder</strong> for who the output is for, and a <strong>format instruction</strong> that specifies length, structure, or style.",
            "When all four are present, you can fill in the template in under a minute and get a useful result on the first try — without having to think about how to prompt. The thinking is already done. You just fill in the blanks.",
          ],
          list: {
            items: [
              '<strong>Task verb:</strong> Write / Summarize / Create / Explain / Rewrite / Brainstorm',
              '<strong>Context placeholder:</strong> [SITUATION] / [DOCUMENT] / [TOPIC] / [BACKGROUND]',
              '<strong>Audience placeholder:</strong> [WHO THIS IS FOR] / [RECIPIENT\'S ROLE] / [YOUR CONTEXT]',
              '<strong>Format instruction:</strong> "Under 150 words" / "3 bullet points" / "Friendly and professional"',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'The template test',
          icon: '🧪',
          title: 'Could a colleague fill it in without asking you questions?',
          body: [
            "A simple test for any template: could you hand it to a colleague who doesn't know your situation and they'd know exactly what to fill in? If yes, it's a good template. If they'd need to ask questions, your placeholders aren't clear enough.",
            "This test also reveals when a template is trying to do too much. If filling it in takes more than a minute, it's either too complex or needs to be split into two separate templates. The best templates are fast — that's the whole point.",
          ],
          highlight: "If it takes more than 60 seconds to fill in, simplify the template. Friction is the enemy of a habit you'll actually keep.",
        },
        {
          type: 'compare',
          eyebrow: 'Template conversion',
          title: 'The same prompt — one-time use vs. reusable template.',
          body: ["Here's a real example of converting a specific prompt into a reusable template:"],
          bad: {
            label: '📌 One-time prompt (hard to reuse)',
            text: '"Write a follow-up email to Sarah Chen, the hiring manager at Meridian Group. We had a phone interview on Tuesday about the senior marketing role. I want to thank her, mention my enthusiasm for the company\'s expansion into sustainability, and ask about next steps. Keep it brief and warm."',
          },
          good: {
            label: '🔄 Reusable template',
            text: '"Write a follow-up email to [RECIPIENT\'S NAME AND ROLE] at [COMPANY]. We [PREVIOUS INTERACTION — e.g., had a phone interview / met at a conference / spoke briefly about X]. I want to [KEY POINTS TO INCLUDE — e.g., thank them, mention my specific interest in X, ask about Y]. Tone: [TONE]. Length: [BRIEF / UNDER 150 WORDS / 3 SHORT PARAGRAPHS]."',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Convert one of your prompts into a template.',
          body: [
            "Pick a prompt from your library that you've used at least once and would use again. Paste it into AI using the template below — and let AI do the conversion for you.",
          ],
          prompt: "Here is a prompt I used recently that I'd like to turn into a reusable template:\n\n[Paste your prompt here]\n\nConvert it into a reusable template by replacing the specific details with [PLACEHOLDERS IN CAPS]. Each placeholder should clearly describe what goes there. Add a one-sentence description at the top that explains what this template is for and when to use it. Make sure the template is something I could fill out in under 60 seconds.",
          body2: "Save the template in your prompt library — with the original prompt saved next to it as an example of a filled-in version. That way, if you're ever unsure what goes in a placeholder, you can look at the real example.",
        },
        {
          type: 'concept',
          eyebrow: 'Building the habit',
          icon: '🔁',
          title: 'Every good prompt deserves a template upgrade.',
          body: [
            "You don't need to convert every prompt into a template at once. The sustainable habit is simple: when you use a prompt more than twice and it works well both times, spend three minutes converting it to a template. That's it.",
            "Over a month, you'll naturally build a library of 8 to 12 solid templates that cover most of your recurring AI needs. After that, you're mostly maintaining and refining — not building from scratch.",
          ],
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: 'Your prompts are now tools you can pick up in seconds.',
          body: [
            "Templates are the difference between a prompt you remember working once and a tool you can reach for reliably. [PLACEHOLDERS IN CAPS]. Four ingredients. The colleague test. That's all you need.",
            "Next lesson: how to stay current as AI evolves — without becoming a full-time AI follower.",
          ],
          summaryList: [
            'Replace specific details with [PLACEHOLDERS IN CAPS] to convert any prompt into a template',
            'Good templates have a task verb, context placeholder, audience placeholder, and format instruction',
            'Test: could a colleague fill it in without asking questions? If no, make the placeholders clearer',
            'Convert a prompt to a template after the second time it works well — that\'s the habit trigger',
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Staying Sharp as AI Evolves',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 6 · Lesson 4',
          icon: '🌱',
          title: "AI is changing fast. Your fundamentals aren't.",
          body: [
            "If you've felt anxious about how quickly AI is evolving — new tools, new models, new features every few weeks — this lesson is for you. The pace of change is real. But the fundamentals you've built in this course don't become obsolete. They get more valuable.",
            "Role. Task. Context. Format. Follow-ups. A library of reusable templates. These skills work with every AI tool that exists today, and they'll work with every AI tool that gets built in the next five years. The platform changes. The skill doesn't.",
          ],
          sub: "You don't need to keep up with everything — just the things that matter for how you work.",
        },
        {
          type: 'concept',
          eyebrow: 'What stays constant',
          icon: '⚓',
          title: 'The four building blocks will always be the foundation.',
          body: [
            "Every AI tool — regardless of how new, how powerful, or how different it looks from what you've used — responds to the same underlying prompt structure: Role, Task, Context, Format. That's because those four things are what humans need to communicate clearly, not just what AI needs.",
            "When a new tool launches and everyone around you is confused about how to use it, you'll have a head start. You already know how to communicate what you want. Applying that to a new interface takes an afternoon, not a course.",
          ],
          highlight: 'The skill is transferable. What you\'ve built here works with ChatGPT, Claude, Gemini, Copilot, and every AI tool that doesn\'t exist yet.',
        },
        {
          type: 'concept',
          eyebrow: 'The 10-minute monthly habit',
          icon: '🗓️',
          title: 'Once a month — no more, no less.',
          body: [
            "You don't need to follow AI news every day to stay current. Most AI developments that matter for everyday users — new features, better capabilities, useful new tools — show up in a handful of places and can be absorbed in 10 minutes a month.",
            "The habit: once a month, spend 10 minutes scanning one trusted source for anything new that might belong in your toolkit. Ask yourself one question: \"Is there anything here that would meaningfully improve one of the things I already do with AI?\" If yes, try it. If no, close the tab and move on. That's the whole habit.",
          ],
          highlight: '"Once a month, 10 minutes. One question: does this help me do something I already do better? If yes, try it. If no, skip it."',
        },
        {
          type: 'concept',
          eyebrow: 'Where to stay current',
          icon: '📡',
          title: 'One source is enough. More is just noise.',
          body: [
            "The most common mistake people make when trying to stay current with AI is following too many sources. They subscribe to 10 newsletters, join 3 Slack communities, watch 5 YouTube channels — and then feel overwhelmed and tune out everything.",
            "Pick one thing. One newsletter, one YouTube channel, or one person on LinkedIn whose judgment you trust. That's enough. The important developments will show up there. Everything else is signal you don't need.",
          ],
          list: {
            items: [
              '<strong>One newsletter:</strong> Something weekly, focused on practical AI use — not hype',
              '<strong>One YouTube channel:</strong> Tutorials over theory — someone who shows you how to use things',
              '<strong>LinkedIn:</strong> Follow 2 or 3 people who share practical AI tips in your field',
              '<strong>Ask AI itself:</strong> "What\'s new and useful in AI tools that I should know about this month?"',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'The most underrated option',
          icon: '🤖',
          title: "Ask AI what you should know. It'll tell you.",
          body: [
            "One of the simplest ways to stay current is to ask AI directly. At the start of any session, you can ask: \"What are the most useful recent developments in AI tools for someone who uses AI primarily for [your use cases]?\" You'll often learn about features, capabilities, or approaches you hadn't heard of.",
            "AI can't browse the internet in real time (unless you have a tool with web search enabled), so its knowledge has a cutoff. But its awareness of the capabilities you might not be using — features built into tools you already have — is often more valuable than news about brand-new tools.",
          ],
          highlight: '"I use AI primarily for [your top 3 use cases]. What are the most useful AI capabilities or features I might not be using that are worth trying?"',
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Ask AI what you should know — right now.',
          body: [
            "You've spent this course building prompt skills for the tools you already use. Now ask AI what capabilities you might be underusing, or what recent developments are worth paying attention to for your specific situation.",
          ],
          prompt: "I use AI primarily for [list your top 2-3 use cases — e.g., 'writing emails, summarizing documents, and brainstorming content ideas']. What are the most useful recent developments in AI tools that I should know about? For each one, explain it in plain English and tell me whether it's worth trying for someone with my use cases. Focus on practical improvements, not research or hype.",
          body2: "If it mentions a feature or capability you haven't tried, add it to your prompt library as a note: \"Try this: [brief description].\" That keeps your curiosity active without requiring you to act on everything immediately.",
        },
        {
          type: 'concept',
          eyebrow: 'The right mindset',
          icon: '🧘',
          title: "You don't need to know everything — just enough to keep getting value.",
          body: [
            "The people who get the most out of AI long-term aren't the ones who follow every development. They're the ones who build a consistent habit of using what they know, add new tools slowly when they genuinely help, and don't feel guilty about ignoring everything else.",
            "\"I use AI every day for three things I rely on, and I add one new skill every month or two.\" That person, five years from now, will have a deeply personalized, highly effective AI workflow. That's the goal. Not knowing everything — knowing your system.",
          ],
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: "Your skills are future-proof. Your habit keeps them sharp.",
          body: [
            "The four building blocks are your foundation. The 10-minute monthly habit keeps you current. One good source is all you need. Ask AI what you might be missing. That's the whole strategy.",
            "Last lesson: your graduation — and what you're capable of now.",
          ],
          summaryList: [
            'Role, Task, Context, Format — these fundamentals work with every AI tool that exists or will be built',
            'Once a month, 10 minutes: scan one trusted source for anything practically useful to you',
            'Follow one source, not ten — more sources create noise, not knowledge',
            'Ask AI directly what capabilities you might be underusing — it\'s a surprisingly effective approach',
          ],
        },
      ],
    },
    {
      id: 4,
      title: "You're a Prompt Expert Now",
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 6 · Lesson 5',
          icon: '🎓',
          title: "Six modules. Real skills. A system that's yours.",
          body: [
            "You started this course as someone who wanted to get better results from AI. You're finishing it with something more valuable than a collection of tips: a system. Four building blocks, a context habit, a follow-up reflex, real-life templates, and a growing library of prompts that reflect your actual work.",
            "This lesson is a celebration and a challenge. It's worth taking a moment to recognize what you've built — and then deciding what you're going to do with it.",
          ],
          sub: "The skills are permanent. The practice starts now.",
        },
        {
          type: 'concept',
          eyebrow: 'What you\'ve built',
          icon: '🗺️',
          title: 'A complete prompt skill set — from foundations to library.',
          body: [
            "Here's the full arc of what this course covered:",
            "<strong>Modules 1–2:</strong> The four building blocks (Role, Task, Context, Format) and how to use them. Context as the secret ingredient. Follow-ups as the multiplier.<br><strong>Modules 3–4:</strong> Iterating prompts, avoiding common mistakes, and matching your tone and voice.<br><strong>Module 5:</strong> Real-life applications — email, summarizing, brainstorming, writing, planning.<br><strong>Module 6:</strong> Building a prompt library, creating reusable templates, and staying sharp as AI evolves.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'The real differentiator',
          icon: '🔑',
          title: 'What separates prompt experts from everyone else.',
          body: [
            "Here's the truth about what makes someone genuinely good at prompting: it's not technical knowledge. It's not knowing special tricks or secret formulas. It's asking better questions.",
            "Prompt experts think more carefully about what they actually want before they type. They give AI the context it needs to be specific. They follow up instead of accepting a mediocre first answer. They iterate rather than start over. These are communication skills applied to a new medium — and you've been practicing them for six modules.",
          ],
          highlight: '"What separates prompt experts from everyone else: they ask better questions, not harder ones."',
        },
        {
          type: 'concept',
          eyebrow: 'Your 7-day challenge',
          icon: '📅',
          title: 'One intentional AI session per day for the next 7 days.',
          body: [
            "The skills you've built are only as useful as the habit you build around them. The best way to lock in everything from this course is to use it deliberately and consistently for the next week. Not for major projects. Not for anything that feels like homework. Just one real AI session per day — something from your actual work or life.",
            "It doesn't need to take long. Ten minutes is enough. The goal is to make intentional AI use a reflex, not a conscious decision. After 7 days, it will be. After 30 days, you won't remember working without it.",
          ],
          highlight: "Seven days. One session per day. Real tasks, real prompts, real results. That's how skills become habits.",
        },
        {
          type: 'concept',
          eyebrow: 'What you can do now',
          icon: '🛠️',
          title: 'Concrete skills you have that you didn\'t have before.',
          body: [
            "Here's a real list of things you can do now that you couldn't do — or couldn't do well — six modules ago:",
          ],
          list: {
            items: [
              'Write a clear, specific prompt from scratch using Role, Task, Context, and Format',
              'Give AI a role that transforms the quality of any response',
              'Layer context into prompts so AI understands your situation, not just your question',
              'Follow up strategically — ask for a different format, push back, go deeper',
              'Draft, reply to, and follow up on emails in a fraction of the usual time',
              'Summarize any document with a targeted, context-aware prompt',
              'Brainstorm 10 constrained, specific ideas and stress-test them with the skeptic prompt',
              'Edit your own writing — shorter, clearer, more engaging — without losing your voice',
              'Plan any project or goal with a backwards-from-deadline action plan',
              'Build and maintain a personal prompt library that gets more valuable over time',
            ],
            negative: false,
          },
        },
        {
          type: 'exercise',
          eyebrow: 'The Final Boss',
          icon: '🎯',
          title: 'One complex, real prompt — using everything you\'ve learned.',
          body: [
            "This is your graduation prompt. It uses every skill from this course: role, task, context, format, and a built-in follow-up invitation. Fill it in with something real and meaningful from your actual life or work.",
          ],
          prompt: "You are a [ROLE — e.g., 'senior consultant who specializes in small business strategy' / 'experienced communications coach' / 'expert project manager']. I need your help with the following: [TASK — describe what you need in one clear sentence].\n\nHere's the context you need: [CONTEXT — describe your situation in 3-5 sentences: who you are, what's happening, what you've tried, what matters most to you, and any constraints].\n\nPlease format your response as [FORMAT — e.g., 'a step-by-step action plan with clear headings' / 'a short memo I can share with my team' / 'a direct recommendation followed by 3 supporting reasons']. After your response, tell me the single most important follow-up question I should ask to get even more value from your answer.",
          body2: "Then ask that follow-up question. Notice how much you've grown: you're not just getting a response — you're running a real conversation, shaping the output, and building on it. That's what a prompt expert does.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Course Complete',
          icon: '🎓',
          title: "You're a prompt expert. Use it every day.",
          body: [
            "You've completed Better Prompts, Better Results. You now have a system — not just a set of tips — for getting genuinely useful results from any AI tool, every single time.",
            "The best thing you can do now is use what you've built. Open your prompt library. Run the 7-day challenge. Add one new template each week. And when someone at work asks why your AI outputs are so much better than theirs, share what you know.",
          ],
          summaryList: [
            'The four building blocks (Role, Task, Context, Format) are your permanent foundation',
            'Prompt experts ask better questions, not harder ones — clarity is the skill',
            'Use the 7-day challenge to turn skills into habits — one intentional AI session per day',
            'Your prompt library is a living tool — keep adding to it as you discover what works',
            'You have a complete system now. The rest is practice.',
          ],
          gradBlock: {
            icon: '🎓',
            title: 'Better Prompts, Better Results',
            body: "You've completed the course. You now have a system for getting genuinely useful results from any AI tool — every single time. You know how to set the right role, give the right context, ask the right follow-ups, and build templates that save you hours every month. That's not a beginner skill. That's how AI professionals work.",
            name: 'Prompt Expert',
          },
        },
      ],
    },
  ],
  quiz: [
    {
      q: "What's the most important reason to save prompts to a personal library?",
      options: [
        'So you can share them on social media and build a following',
        'So you never have to start from scratch — good prompts are tools you reuse and refine over time',
        'Because AI requires you to use the same prompt each time for consistent results',
        'To avoid paying for AI subscriptions by recycling old prompts',
      ],
      correct: 1,
      feedback: "Saving prompts turns a one-time win into a reusable tool. The best AI users build a library of prompts they refine over time — each one gets better with use. The compounding effect of a good library is one of the highest-return habits in AI use.",
    },
    {
      q: "You want to convert this prompt into a reusable template: 'Write a thank-you email to Dr. Kim at Northside Clinic for referring my patient last week. Keep it warm and brief.' What's the best template version?",
      options: [
        '"Write a thank-you email to [PERSON] for [THING]. Keep it [TONE]."',
        '"Write a [EMAIL TYPE] email to [RECIPIENT\'S NAME AND ROLE] for [REASON]. Tone: [TONE]. Length: [BRIEF / UNDER 100 WORDS]."',
        '"Write an email."',
        '"Write a thank-you email — fill in the details yourself."',
      ],
      correct: 1,
      feedback: "Good templates have descriptive placeholders that make it obvious what to fill in. [EMAIL TYPE] is more flexible than assuming it's always a thank-you. [RECIPIENT'S NAME AND ROLE] is more useful than [PERSON] because it reminds you to include both. Explicit format instructions (tone and length) prevent you from having to re-specify those each time.",
    },
    {
      q: "How should you approach staying current as AI tools and capabilities evolve?",
      options: [
        'Subscribe to every AI newsletter and follow the latest developments daily',
        'Ignore all developments — the tools you already know are enough',
        'Pick one trusted source, spend 10 minutes a month, and ask AI directly what you might be missing',
        'Take a new AI course every 6 months to stay certified',
      ],
      correct: 2,
      feedback: "The most sustainable approach is one trusted source and a 10-minute monthly habit — not daily monitoring. Following too many sources creates noise and burnout. And asking AI directly what capabilities you might be underusing is one of the most underrated ways to stay current. Your fundamentals (Role, Task, Context, Format) don't expire — so you're building on a stable foundation.",
    },
  ],
}

export default c5module6
