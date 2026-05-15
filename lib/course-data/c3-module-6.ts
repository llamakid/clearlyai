import type { CourseData } from './types'

const c3module6: CourseData = {
  moduleId: 18,
  title: 'Build Your AI-Powered Business',
  subtitle: 'AI for Your Business · Module 6',
  lessons: [
    // ─────────────────────────────────────────
    // Lesson 1 — Your AI Stack
    // ─────────────────────────────────────────
    {
      id: 0,
      title: 'Your AI Stack',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for Your Business · Lesson 1',
          icon: '🛠️',
          title: 'Your AI Stack',
          body: [
            "By the end of this lesson, you'll know exactly which AI tools are worth your time, how to evaluate new ones without getting distracted, and what a simple, practical AI setup actually looks like for a small business owner.",
          ],
          sub: "You don't need 20 tools. You need 2 or 3 great ones.",
        },
        {
          type: 'concept',
          eyebrow: "The tool overwhelm trap",
          icon: '🌀',
          title: "There are hundreds of AI tools competing for your attention. Most of them aren't worth your time.",
          body: [
            "New AI tools launch every week. Each one promises to transform some part of your business. It's easy to spend more time evaluating tools than actually using them.",
            "The business owners getting the most value from AI aren't using the most tools — they're using a small number of tools deeply. They know how to use them well, they have saved prompts and workflows built up, and they reach for them automatically.",
            "That depth beats breadth every time. One tool you use expertly outperforms five you use occasionally.",
          ],
          highlight: "The goal isn't to have the most AI tools. It's to get the most value from the ones you actually use.",
        },
        {
          type: 'concept',
          eyebrow: "The core tool",
          icon: '💬',
          title: "ChatGPT (or Claude) is the foundation. Everything else is optional.",
          body: [
            "For everything this course has covered — customer communications, marketing content, proposals, hiring documents, research, financial analysis, decision support — a single AI assistant like ChatGPT or Claude handles it all.",
            "ChatGPT (from OpenAI) and Claude (from Anthropic) are the two most capable general-purpose AI assistants available. Either one, used well, covers 90% of what a small business owner needs.",
            "ChatGPT is more widely known and has a large ecosystem of add-ons. Claude tends to excel at longer, more nuanced writing. For most business owners, either is excellent — pick one and get good at it before adding anything else.",
          ],
          highlight: "Start with one. Get good at it. Add tools only when you have a specific need the core tool can't meet.",
        },
        {
          type: 'concept',
          eyebrow: "Tools worth knowing about",
          icon: '⭐',
          title: "A few specialized tools earn their place for specific small business needs.",
          body: ["These are worth knowing — not necessarily using right away, but worth trying when the need arises:"],
          list: {
            items: [
              '<strong>Otter.ai or Fireflies</strong> — transcribes meetings and calls automatically; generates summaries and action items',
              '<strong>Canva AI</strong> — design tool with built-in AI for creating social media graphics, flyers, and marketing visuals',
              '<strong>Jasper or Copy.ai</strong> — AI writing tools with templates specifically built for marketing copy and ads',
              '<strong>Midjourney or DALL-E</strong> — image generation for creating custom visuals for your business',
              '<strong>Zapier with AI</strong> — connects your tools and automates workflows between them',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: "How to evaluate a new tool",
          icon: '🔍',
          title: "Three questions before you try anything new.",
          body: [
            "<strong>Does it solve a real problem I have right now?</strong> Not a hypothetical future problem — something you're actually spending time on today. If not, set it aside.",
            "<strong>Can my core tool (ChatGPT or Claude) already do this?</strong> New tools often duplicate what you already have. Try it in your existing tool first.",
            "<strong>Is the time to learn it worth the time it saves?</strong> If a tool takes 4 hours to learn and saves you 10 minutes per week, the math doesn't work for months. Factor in the learning curve.",
          ],
          highlight: "Most new tools fail test one. That's not a problem — it's the filter working correctly.",
        },
        {
          type: 'concept',
          eyebrow: "Free vs. paid",
          icon: '💳',
          title: "When to pay for AI tools — and when the free tier is enough.",
          body: [
            "ChatGPT's free tier is genuinely useful for most of what this course covers. The paid version (ChatGPT Plus, currently $20/month) adds faster responses, access to newer models, and higher usage limits — worth it if you're using it daily.",
            "Most specialized tools offer free trials. Use the trial to determine if the tool actually saves you meaningful time before paying.",
            "As a rough rule: if an AI tool saves you more than an hour per month, it's worth $10–20 per month. If it saves you more than that, it's probably one of your best business investments.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Audit your current AI setup.',
          body: [
            "Open <strong>chatgpt.com</strong> and take stock of where you are. This helps you see your starting point clearly.",
          ],
          prompt:
            "I run [business name], a [type of business]. I want to audit my current AI setup and make sure I'm using the right tools for my needs. Here's what I currently use: [list any AI tools you use now, even if just ChatGPT occasionally]. Here are the main tasks I use or want to use AI for: [list them]. Based on my business type and these use cases, what is the simplest AI tool stack I should be running — and are there any tools I'm likely missing that would make a meaningful difference?",
          body2:
            "Save what it gives you. By the end of this module you'll have a clear, simple AI setup that covers everything your business needs — without unnecessary complexity.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: "Simple, deep, and consistent beats complex, broad, and occasional.",
          body: [
            "One core tool used well every day is more valuable than a dozen tools used sporadically. Build depth first. Add breadth only when a specific need demands it.",
            "In the next lesson, we turn that tool into something more powerful: a set of reusable workflows that handle your most repetitive tasks automatically.",
          ],
          summaryList: [
            "Depth beats breadth — one AI tool used expertly outperforms five used occasionally",
            "ChatGPT or Claude handles 90% of small business AI needs — start there before adding anything else",
            "Evaluate new tools with three questions: real problem, can my current tool do it, is the learning curve worth it",
            "If a tool saves more than an hour per month, the $10–20/month price is almost always worth it",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 2 — Workflows That Run Themselves
    // ─────────────────────────────────────────
    {
      id: 1,
      title: 'Workflows That Run Themselves',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for Your Business · Lesson 2',
          icon: '⚙️',
          title: 'Workflows That Run Themselves',
          body: [
            "By the end of this lesson, you'll understand how to chain AI tasks together into repeatable workflows — so your most common, recurring business processes take a fraction of the time they do today.",
          ],
          sub: "Using AI once is valuable. Having AI workflows is transformative.",
        },
        {
          type: 'concept',
          eyebrow: "The difference between using AI and having workflows",
          icon: '🔄',
          title: "Most people use AI reactively. Workflows make it proactive.",
          body: [
            "Reactive AI use: you have a task, you go to ChatGPT, you figure out what to ask, you get a result, you move on.",
            "AI workflows: the task triggers a process you've already built. You know exactly what to paste in, exactly what prompt to use, exactly what to do with the output. The friction is gone. The result is consistent.",
            "The difference in time isn't dramatic on any single task. Across a week or a month, it's significant — because you've removed all the 'figuring it out' that happens every time you start from scratch.",
          ],
          highlight: "A workflow you've built once runs faster and better every subsequent time. That's the compounding advantage.",
        },
        {
          type: 'concept',
          eyebrow: "What a workflow looks like",
          icon: '📋',
          title: "A workflow is just a documented sequence of steps — with AI at the center.",
          body: [
            "A customer inquiry workflow might look like: customer emails → you copy the email → paste into saved prompt → AI drafts a response → you edit for 90 seconds → you send. That's a workflow.",
            "A content creation workflow might look like: monthly planning session → paste business context into batch prompt → AI generates 12 posts → you edit in one pass → you schedule them all → done for the month.",
            "The key elements: a trigger (what starts it), the AI step (what you paste and which saved prompt you use), and the output step (what you do with the result). Write those three things down for your most common tasks.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "Your highest-value workflows",
          icon: '⭐',
          title: "The five workflows worth building first for most small businesses.",
          body: ["These cover the tasks you'll do most often — build these first:"],
          list: {
            items: [
              '<strong>Customer inquiry response</strong> — from new email to sent reply in under 2 minutes',
              '<strong>Review response</strong> — weekly batch, 10 minutes to handle everything that came in',
              '<strong>Monthly content batch</strong> — one session, a month of social posts and newsletter drafted',
              '<strong>New proposal</strong> — from client notes to professional proposal in 10 minutes',
              '<strong>Weekly business check-in</strong> — paste your week\'s notes, AI gives you a summary and flags anything worth attention',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: "The weekly check-in workflow",
          icon: '📅',
          title: "One workflow most business owners haven't tried — and should.",
          body: [
            "At the end of each week, spend 10 minutes dumping your week into a note: what happened, what went well, what was frustrating, what's pending, what's coming next week.",
            "Paste that into AI with the prompt: 'Review these notes from my week. Summarize the key wins, flag anything that needs follow-up, and suggest one thing I should prioritize next week based on what I've described.'",
            "This weekly check-in habit — 10 minutes to close the week and open the next one clearly — is one of the highest-value things an owner can do. AI makes the synthesis instant.",
          ],
          highlight: "The owners who are most on top of their businesses aren't working more hours. They're reflecting and planning more consistently.",
        },
        {
          type: 'concept',
          eyebrow: "Connecting tools together",
          icon: '🔗',
          title: "When you're ready: automation tools that link AI to the rest of your business.",
          body: [
            "Once you have manual workflows running smoothly, there's a next level: tools like Zapier that connect AI to your other software automatically.",
            "Examples: a new customer fills out a contact form → Zapier sends the details to AI → AI drafts a response → the draft lands in your email drafts folder ready to review and send. You didn't touch the keyboard.",
            "This level of automation takes more setup. Don't start here — start with the manual workflows. Once those are smooth and you know exactly what you want the automation to do, tools like Zapier make it possible.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Map and document your first workflow.',
          body: [
            "Open <strong>chatgpt.com</strong> and build a documented workflow for the task you do most frequently.",
          ],
          prompt:
            "I run [business name], a [type of business]. I want to build a documented AI workflow for [the task you do most often — e.g., 'responding to new customer inquiries' or 'creating social media content for the month']. Please create a step-by-step workflow document that includes: (1) the trigger — what starts this workflow, (2) what information I need to gather before using AI, (3) the exact AI prompt to use (with [brackets] for the parts that change each time), (4) what to do with the AI output, and (5) how long the whole process should take once I'm running it smoothly.",
          body2:
            "Save this workflow document alongside your saved prompt templates. Add a new workflow every month — within six months you'll have a complete system that handles your most repetitive tasks almost automatically.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: "Your business is starting to run on systems, not just effort.",
          body: [
            "That's the shift this lesson represents. Effort is finite. Systems scale. Every workflow you build removes a decision, reduces friction, and makes the task faster every time it happens.",
            "In the next lesson, we tackle something every AI user faces: how to stay current as this technology evolves — without drowning in the noise.",
          ],
          summaryList: [
            "AI workflows remove the 'figuring it out' friction — consistent process, consistent results, less time",
            "A workflow has three parts: a trigger, an AI step with a saved prompt, and an output action",
            "Build the five core workflows first: inquiry response, review batch, content batch, proposal, and weekly check-in",
            "Manual workflows first — automate with tools like Zapier only once you know exactly what you want to automate",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 3 — Staying Current Without Getting Overwhelmed
    // ─────────────────────────────────────────
    {
      id: 2,
      title: 'Staying Current Without Getting Overwhelmed',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for Your Business · Lesson 3',
          icon: '📡',
          title: 'Staying Current Without Getting Overwhelmed',
          body: [
            "By the end of this lesson, you'll have a simple, 15-minutes-a-week approach for staying meaningfully informed about AI — without being distracted by every new tool, headline, or hype cycle.",
          ],
          sub: "AI is moving fast. You don't have to follow every step.",
        },
        {
          type: 'concept',
          eyebrow: "The noise problem",
          icon: '📢',
          title: "There is more AI news, content, and hype than any person can or should consume.",
          body: [
            "LinkedIn is full of AI posts. YouTube has endless tutorials. Newsletters arrive daily. Every week there's a new tool, a new model release, a new claim about how everything is about to change.",
            "For a business owner trying to run an actual business, following all of this is impossible — and trying to will leave you more anxious and less productive, not more informed.",
            "The goal isn't to follow AI closely. The goal is to stay aware of the developments that actually affect your business and your customers — and to miss nothing important.",
          ],
          highlight: "Signal vs. noise: most AI news is noise for small business owners. The signal is rare, specific, and genuinely useful.",
        },
        {
          type: 'concept',
          eyebrow: "What actually matters for your business",
          icon: '🎯',
          title: "You only need to pay attention to three types of AI developments.",
          body: [
            "<strong>New capabilities in tools you already use.</strong> ChatGPT and Claude release updates regularly. When a new feature lands in a tool you use daily, it's worth 10 minutes to understand it.",
            "<strong>AI tools that become standard in your industry.</strong> If competitors or industry publications start talking about a specific tool, pay attention. That's a signal it's becoming mainstream.",
            "<strong>AI applications that directly affect your customers.</strong> If your customers start using AI in ways that change what they expect from you, that matters. Everything else can wait.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "A 15-minute weekly habit",
          icon: '⏱️',
          title: "This is all it takes to stay meaningfully current.",
          body: [
            "Once a week — Friday morning or Monday, wherever you have a natural pause — spend 15 minutes on AI news.",
            "One reliable newsletter (The Rundown AI or TLDR AI are well-curated and brief). Skim the headlines. Click on anything that's directly relevant to your tools or your industry. Skip everything else without guilt.",
            "That's it. Fifteen minutes a week keeps you ahead of most business owners in your market, who are either ignoring AI entirely or drowning in it.",
          ],
          highlight: "Fifteen minutes a week, consistently, beats three hours occasionally. This is the habit that keeps you current without consuming your week.",
        },
        {
          type: 'concept',
          eyebrow: "When to adopt a new tool",
          icon: '🚦',
          title: "Not every new tool deserves your time. Here's when it does.",
          body: [
            "<strong>Adopt quickly</strong> when: the tool directly addresses a pain point you have right now, multiple credible sources confirm it works as advertised, and the learning curve is under two hours.",
            "<strong>Watch and wait</strong> when: the tool is new and reviews are mixed, it overlaps significantly with something you already use, or the use case is interesting but not urgent.",
            "<strong>Ignore</strong> when: the tool solves a problem you don't have, the hype comes mostly from the company selling it, or it requires significant behavior change for uncertain benefit.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "Using AI to learn about AI",
          icon: '🔄',
          title: "The fastest way to understand a new AI development is to ask AI about it.",
          body: [
            "When you read about a new tool or capability and want to understand if it applies to your business, don't spend an hour reading reviews and tutorials. Ask ChatGPT or Claude directly.",
            "'I just read about [new tool or feature]. I run a [type of business]. Is this relevant to what I do, and if so, what would I actually use it for?'",
            "You'll get a plain-English assessment in 30 seconds. If the answer is yes, spend 20 minutes trying it. If it's no, move on. That's a dramatically more efficient way to evaluate the constant stream of new developments.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "The longer view",
          icon: '🔭',
          title: "AI is a slow wave, not a sudden flood — and you're already riding it.",
          body: [
            "The AI anxiety that many business owners feel comes from imagining that the change is sudden — that one day everything will be different and anyone who wasn't paying attention will be left behind.",
            "That's not how it works. AI adoption is a gradual shift. The owners who build fluency now — even imperfect fluency, even just the tools and habits in this course — have a meaningful head start.",
            "You don't need to be an AI expert. You need to be more fluent than your competitors. That bar is lower than you think — and you've already cleared it.",
          ],
          highlight: "You're not trying to master a moving target. You're building a foundation that lets you adapt as things evolve — which is all anyone can do.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Set up your 15-minute weekly AI check-in.',
          body: [
            "Open <strong>chatgpt.com</strong> and use this prompt to get your personalized list of what to follow. Then block 15 minutes on your calendar — recurring, weekly.",
          ],
          prompt:
            "I run [business name], a [type of business]. I want to stay current on AI developments that matter specifically to small businesses like mine — without being overwhelmed by every new announcement. Please recommend: (1) the 2–3 most useful newsletters or resources for a business owner at my level (not technical deep-dives, but practical and business-focused), (2) the 2–3 AI capabilities or tools I should watch for in the next 6–12 months that are likely to become relevant for a business like mine, and (3) what I should and shouldn't pay attention to in the current AI landscape.",
          body2:
            "Block 15 minutes every Friday or Monday on your calendar labeled 'AI check-in.' Show up for it every week. That's the whole habit.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: "Staying current is a habit, not a project.",
          body: [
            "Fifteen minutes a week. One reliable newsletter. Ask AI to explain what matters. Adopt tools that pass the three-question test. That's it.",
            "In the next lesson, we talk about the advantage this all gives you — and how to lead as the owner who actually gets it.",
          ],
          summaryList: [
            "Most AI news is noise — pay attention only to updates in tools you use, industry-specific adoption, and changes to customer expectations",
            "Fifteen minutes per week, with one well-curated newsletter, is all it takes to stay meaningfully current",
            "Use AI to evaluate new AI: 'Is this relevant to my business?' gets a useful answer in 30 seconds",
            "You don't need to be an AI expert — you need to be more fluent than your competitors, and you already are",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 4 — Lead as the Owner Who Gets It
    // ─────────────────────────────────────────
    {
      id: 3,
      title: 'Lead as the Owner Who Gets It',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for Your Business · Lesson 4',
          icon: '🌟',
          title: 'Lead as the Owner Who Gets It',
          body: [
            "By the end of this lesson, you'll understand how to use your AI fluency as a visible advantage — with customers, with employees or contractors, and in your market — without overcomplicating it.",
          ],
          sub: "You don't have to announce it. You just have to show up differently.",
        },
        {
          type: 'concept',
          eyebrow: "The reputation that builds quietly",
          icon: '📈',
          title: "AI fluency shows up in how you operate — and customers notice.",
          body: [
            "You don't need to tell customers you're using AI. What they notice is the outcome: faster responses, more professional communications, consistent follow-through, polished proposals, thoughtful review responses.",
            "They notice that you respond to their inquiry the same day, every time. That your proposal looks like it came from a company twice your size. That you followed up three days later without them having to chase you.",
            "That's the reputation that builds. Not 'this owner uses AI' — but 'this owner is on top of things.' That reputation drives referrals, repeat business, and the ability to charge more.",
          ],
          highlight: "The best advertisement for your AI use is the quality it produces — not the announcement that you're using it.",
        },
        {
          type: 'concept',
          eyebrow: "Transparency with customers",
          icon: '🤝',
          title: "If customers ask, honesty is the right answer — and it's a non-issue.",
          body: [
            "Some customers will ask if you use AI. A direct, confident answer is the best one: 'Yes — I use AI tools to help me draft communications and handle administrative work faster, which means I can spend more time on the actual [service] for clients like you.'",
            "That answer is honest, professional, and reassuring. It positions AI as a tool that benefits them — not a shortcut that replaces your expertise.",
            "The owners who get anxious about this question are imagining a customer who cares more about the process than the result. Most customers care about the result.",
          ],
          highlight: "You're not replacing your expertise with AI. You're giving your expertise more time to show up — because the admin isn't eating it.",
        },
        {
          type: 'concept',
          eyebrow: "Working with employees and contractors",
          icon: '👥',
          title: "How to introduce AI to the people who work with you.",
          body: [
            "If you have employees or contractors, your AI fluency is an opportunity to make your business better for them too — reducing their administrative burden and giving them better tools.",
            "Introduce it simply: 'I've been using AI to handle [specific tasks] and it's been saving me a lot of time. I thought it might help you with [specific tasks in their role] too. Here's what I've found works well...'",
            "Lead by showing, not just telling. Share a saved prompt that works. Show them the workflow you built. Let them see the result before you ask them to change how they work.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "Your market position",
          icon: '🏆',
          title: "Being the AI-fluent owner in your market is a real, durable advantage.",
          body: [
            "In most local markets, the majority of small business owners are either ignoring AI or using it very occasionally. A business that has built consistent AI workflows — for communications, marketing, operations, and decision-making — runs noticeably more professionally.",
            "This advantage compounds over time. Your communications are more consistent. Your marketing is more regular. Your response times are faster. Your documents are more polished. Across all of these, you're building a business that operates above its weight class.",
            "That's not a temporary advantage from a new technology. It's the compounded result of better habits, built now, running consistently.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "The community angle",
          icon: '🤲',
          title: "Sharing what you know builds your reputation and your network.",
          body: [
            "Some of the most respected small business owners in any community are known as the people who generously share what's working. Not the people with the biggest marketing budget — the ones who are genuinely helpful.",
            "Your AI fluency is something other business owners in your community — in peer groups, networking events, local business associations — are hungry to learn. Sharing a prompt that works, or a workflow that saves you time, positions you as a leader.",
            "You don't have to become an AI trainer. One conversation at a time, sharing what you've learned, builds the kind of reputation that brings business and goodwill your way.",
          ],
          highlight: "Generosity with knowledge is one of the most underrated competitive advantages in any local market.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Write your AI fluency statement.',
          body: [
            "Open <strong>chatgpt.com</strong> and draft a clear, confident answer to 'How do you use AI in your business?' — one you could say to a customer, a peer, or at a networking event.",
          ],
          prompt:
            "I run [business name], a [type of business]. I've built AI into how I run my business — specifically for [list 2–3 areas: e.g., customer communications, marketing content, proposals, business decisions]. I want a clear, confident, honest answer I could give if a customer or peer asks how I use AI in my business. It should: be honest about what I use AI for, position it as something that benefits my customers (not just me), and take about 30 seconds to say out loud. Please draft 2–3 versions at different lengths.",
          body2:
            "Practice saying your favorite version out loud. It should feel natural — like something you'd actually say, not something you'd read. That's the version to keep.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: "You lead differently now. The results will show.",
          body: [
            "Not because you announced it. Because the quality, consistency, and responsiveness of your business reflects it — in every customer interaction, every piece of content, every proposal.",
            "In the final lesson, we bring everything together — all six modules, all the tools you've built — into a clear 90-day plan for what to do next.",
          ],
          summaryList: [
            "AI fluency shows up in outcomes — faster responses, polished communications, consistent follow-through — and customers notice without being told",
            "If asked, honest transparency about AI use positions it as a benefit to customers, not a shortcut",
            "Introduce AI to employees and contractors by showing, not just telling — share a saved prompt or workflow that works",
            "Generosity with what you know builds your reputation and your network in any local market",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 5 — Your AI-Powered Business: The Next 90 Days
    // ─────────────────────────────────────────
    {
      id: 4,
      title: 'Your AI-Powered Business: The Next 90 Days',
      meta: '9 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for Your Business · Lesson 5',
          icon: '🚀',
          title: 'Your AI-Powered Business: The Next 90 Days',
          body: [
            "By the end of this lesson, you'll have a clear, specific 90-day plan for putting everything you've learned into practice — so the skills from this course become the way you actually run your business.",
          ],
          sub: "Everything you've built. A clear path for what comes next.",
        },
        {
          type: 'concept',
          eyebrow: "What you've built",
          icon: '🏗️',
          title: "Six modules. A complete AI system for your business.",
          body: ["Here's everything this course built — not just knowledge, but capability:"],
          list: {
            items: [
              '<strong>Module 1</strong> — The foundation: what AI is, where your time goes, your first business win',
              '<strong>Module 2</strong> — Customer communications: email drafts, review responses, FAQ, template library',
              '<strong>Module 3</strong> — Marketing: social content batching, email newsletter, inbound content, monthly rhythm',
              '<strong>Module 4</strong> — Operations: proposals, hiring docs, onboarding checklist, SOPs, operations playbook',
              '<strong>Module 5</strong> — Decision-making: competitive intelligence, market research, financial analysis, scenario planning',
              '<strong>Module 6</strong> — The full system: AI stack, workflows, staying current, leading as the owner who gets it',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: "The 90-day plan: Month 1",
          icon: '📅',
          title: "Month 1: Install the core habits.",
          body: [
            "<strong>Week 1</strong> — Set up your operations playbook folder. Add all the documents you built in this course.",
            "<strong>Week 2</strong> — Run your first monthly content batch. Draft four weeks of social posts and your newsletter in one session.",
            "<strong>Week 3</strong> — Respond to every outstanding review using your saved prompts. Set up your weekly review response habit.",
            "<strong>Week 4</strong> — Document your first AI workflow end to end. Use it for a full week and note what to adjust.",
          ],
          highlight: "Month 1 is about turning what you learned into what you do. Small, consistent actions — not a complete overhaul.",
        },
        {
          type: 'concept',
          eyebrow: "The 90-day plan: Month 2",
          icon: '📅',
          title: "Month 2: Deepen and expand.",
          body: [
            "<strong>Customer communications</strong> — Build the remaining templates in your library. Every type of message you send more than twice a month should have a saved prompt by end of Month 2.",
            "<strong>Operations</strong> — Write two more SOPs for your next most critical processes. Add them to your playbook.",
            "<strong>Marketing</strong> — Run your second monthly content batch. By now, the session should feel routine — faster and smoother than the first.",
            "<strong>Decisions</strong> — Use AI for one real research or analysis task. A pricing decision, a market opportunity, a financial question.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "The 90-day plan: Month 3",
          icon: '📅',
          title: "Month 3: Refine and look ahead.",
          body: [
            "<strong>Review what's working</strong> — Which workflows save the most time? Which templates get used most? Double down on those. Let go of anything that hasn't stuck.",
            "<strong>One annual planning session</strong> — Use the AI advisor prompts from Module 5 to map out where you want your business to be in 12 months. Write a one-page summary.",
            "<strong>Add one new capability</strong> — Try one tool or technique from Lesson 1 of this module that you haven't explored yet.",
            "<strong>Share one thing</strong> — Tell one peer, employee, or customer about something specific that's working. Generosity with knowledge builds the reputation that builds the business.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "The habits that compound",
          icon: '📈',
          title: "These five weekly habits are the engine of everything.",
          body: ["Small and consistent. Every week. This is what separates the businesses that change from those that take a course and go back to their old way:"],
          list: {
            items: [
              'Use a saved prompt before writing any customer email from scratch',
              'Respond to every review within 24 hours using your review workflow',
              'Post to social media 3× per week from your batched content — no scrambling',
              'Spend 15 minutes on your AI check-in (Friday or Monday)',
              'Add one saved prompt or workflow to your library when you find something that works',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: "The compounding view",
          icon: '🔭',
          title: "What your business looks like 12 months from now.",
          body: ["Ninety days of consistent habits becomes twelve months of compounded results:"],
          beforeAfter: {
            before: {
              label: 'Before this course',
              items: [
                'Customer communications reactive and inconsistent',
                'Marketing sporadic or nonexistent',
                'Back-office undocumented and dependent on your memory',
                'Big decisions made on gut feel',
                'Feeling behind on AI and anxious about it',
              ],
            },
            after: {
              label: '12 months from now',
              items: [
                'Every customer interaction fast, professional, and consistent',
                'Marketing running on a rhythm that takes one hour a month',
                'Operations playbook that lets your business run without you present for everything',
                'Decisions backed by research, competitive intelligence, and scenario planning',
                'Confidently ahead of most competitors in your market',
              ],
            },
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Build your 90-day action plan.',
          body: [
            "Open <strong>chatgpt.com</strong> and generate a personalized 90-day plan for your specific business. This is your roadmap — not a generic template.",
          ],
          prompt:
            "I just completed a course on using AI in my small business. I run [business name], a [type of business]. Here's what I've already built or started during this course: [list what you've done — e.g., saved prompt templates, a proposal template, a content batch, review response workflow]. Here's what I haven't done yet that I want to prioritize: [list the things you know you should do but haven't started]. Please build me a specific, realistic 90-day action plan with clear weekly milestones — organized by month. Focus on the highest-impact activities for a business like mine, and make the first week's tasks concrete enough that I could start tomorrow.",
          body2:
            "Print or save this plan somewhere you'll actually see it — not buried in a doc folder. Review it at the start of each week. Cross things off when you do them. That's the whole system.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Course Complete',
          icon: '🎓',
          title: "You built something real. Now use it.",
          body: [
            "This wasn't a course about AI. It was a course about running your business better — using AI as the tool that makes it possible. The marketing that gets done. The communications that are fast and professional. The decisions that are informed. The operations that run without you personally managing every detail.",
            "That's the business you've been building toward. It's closer now than it was six modules ago.",
          ],
          summaryList: [
            "Month 1: install the core habits — playbook, content batch, review workflow, first documented AI workflow",
            "Month 2: deepen the system — complete your template library, add two more SOPs, run research on a real decision",
            "Month 3: refine, plan ahead, and share what's working — that's the cycle that keeps compounding",
            "Five weekly habits are the engine: saved prompts, review responses, batched content, AI check-in, and adding to your library",
          ],
          gradBlock: {
            icon: '🏪',
            title: "You're the AI-Powered Business Owner Now",
            body: "Six modules. A complete system for communications, marketing, operations, and decision-making. A 90-day plan to make it real. The skills that took you from 'meaning to look into AI' to running a business that operates above its weight class. What you do with it from here is yours.",
            name: 'Course Complete',
          },
        },
      ],
    },
  ],

  quiz: [
    {
      q: "What is the most effective approach to building an AI tool stack for a small business?",
      options: [
        "Try as many tools as possible to find the best ones for each task",
        "Start with one core tool, use it deeply, and add specialized tools only when you have a specific need they address",
        "Use the most popular tools, regardless of whether they fit your specific needs",
        "Wait until AI tools are more mature before committing to any of them",
      ],
      correct: 1,
      feedback:
        "Depth beats breadth. One tool used expertly — with saved prompts, built workflows, and daily habit — outperforms five tools used occasionally. Start with ChatGPT or Claude, get genuinely good at it, and add specialized tools only when a specific need the core tool can't meet arises.",
    },
    {
      q: "What is an AI workflow, and what makes it more valuable than using AI reactively?",
      options: [
        "An AI workflow is a fully automated system that requires no human input",
        "A documented sequence of steps with AI at the center — removing the 'figuring it out' friction so recurring tasks are consistently faster",
        "A subscription to an AI service that automatically handles business tasks",
        "A written plan for which AI tools to use in the future",
      ],
      correct: 1,
      feedback:
        "An AI workflow is simply a documented process: a trigger, a saved prompt, and an output action. The value is eliminating the friction of starting from scratch every time. Once built, the workflow runs faster and more consistently every subsequent time — that's the compounding advantage reactive AI use doesn't provide.",
    },
    {
      q: "What is the recommended weekly time commitment for staying current on AI developments?",
      options: [
        "Several hours — AI is moving too fast to stay current with less",
        "None — tools will prompt you when something relevant changes",
        "About 15 minutes, focused on one reliable newsletter and developments that directly affect your tools or industry",
        "At least an hour daily to stay competitive",
      ],
      correct: 2,
      feedback:
        "Fifteen minutes per week, with one well-curated newsletter, is enough to stay meaningfully current. The goal isn't to follow all AI news — it's to catch the signal in the noise: updates to tools you use, AI becoming standard in your industry, and changes to what customers expect. Everything else can be skipped.",
    },
    {
      q: "If a customer asks whether you use AI in your business, what is the best response?",
      options: [
        "Deny it — customers may distrust AI-generated work",
        "Change the subject — it's not relevant to the service you provide",
        "Be honest and frame it as a benefit to them: AI handles administrative work faster, giving your expertise more time to show up in their service",
        "Explain all the technical details of how you use AI so they understand it fully",
      ],
      correct: 2,
      feedback:
        "Honest, direct, and customer-focused is the right answer. 'Yes — I use AI to handle communications and admin faster, which means I spend more time on the actual work for clients like you.' That's truthful, professional, and reassuring. Most customers care about the result, not the process — and this answer positions AI as something that benefits them.",
    },
    {
      q: "What is the single most important factor in whether the skills from this course change how you actually run your business?",
      options: [
        "Finding the most advanced AI tools available",
        "Having employees who can help implement the systems",
        "Building small, consistent weekly habits — and maintaining them even in busy weeks",
        "Completing all six modules as quickly as possible",
      ],
      correct: 2,
      feedback:
        "Small and consistent beats big and occasional, every time. The habits — using saved prompts before writing from scratch, weekly review responses, monthly content batches, the 15-minute AI check-in — are what separate business owners who genuinely change how they work from those who take a course and return to their old patterns. The tools and knowledge mean nothing without the habits.",
    },
  ],
}

export default c3module6
