import type { CourseData } from './types'

const c3module1: CourseData = {
  moduleId: 13,
  title: 'The Small Business Edge',
  subtitle: 'AI for Your Business · Module 1',
  lessons: [
    // ─────────────────────────────────────────
    // Lesson 1 — You're Already Running a Complex Operation
    // ─────────────────────────────────────────
    {
      id: 0,
      title: "You're Already Running a Complex Operation",
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for Your Business · Lesson 1',
          icon: '🏪',
          title: "You're Already Running a Complex Operation",
          body: [
            "By the end of this lesson, you'll understand exactly why AI is built for business owners — and why the timing right now is better than it's ever been.",
          ],
          sub: "Let's start with the reality of what you're actually doing every day.",
        },
        {
          type: 'concept',
          eyebrow: "The hat rack nobody talks about",
          icon: '🎩',
          title: "You're not running a business. You're running eight of them.",
          body: [
            "Every small business owner knows this feeling. On any given day, you're the CEO, the salesperson, the customer service rep, the marketing department, the HR person, the bookkeeper, the operations manager — and the person actually delivering the product or service.",
            "That's not just tiring. It means every hour you spend on admin is an hour you're not spending on growth. And for most owners, admin wins too often.",
          ],
          highlight: "AI doesn't replace your expertise. It handles the overhead — so you can focus on the work only you can do.",
        },
        {
          type: 'concept',
          eyebrow: "The real cost of doing it all",
          icon: '⏰',
          title: "Small business owners spend 30–40% of their week on tasks AI can handle.",
          body: [
            "Research on small business owners is consistent: a third to nearly half of every work week goes to communication, documentation, and administrative tasks.",
            "Customer emails. Responding to reviews. Writing social posts. Drafting quotes and proposals. Creating invoices. Following up with vendors. Writing job postings. Updating the website.",
            "None of these require your expertise. They require your time. And that time is finite.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "The old options",
          icon: '❌',
          title: "Until now, you had two choices. Neither was great.",
          body: [
            "You could do everything yourself — which means working long hours on tasks that drain you and keep you from the work you actually love.",
            "Or you could hire help — which means payroll, management, training, and overhead you may not be ready for.",
            "Most owners do a mix: grind through it themselves, hire as little as possible, and feel perpetually behind.",
          ],
          highlight: "There's now a third option. And it costs a fraction of even a part-time hire.",
        },
        {
          type: 'concept',
          eyebrow: "The leveler",
          icon: '⚖️',
          title: "AI gives small businesses capabilities that used to require teams.",
          body: [
            "Three years ago, polished marketing content required an agency. Professional customer communications required a trained staff. Market research required a consultant.",
            "Today, a business owner who knows how to use AI can produce that same quality output — in a fraction of the time and cost.",
            "Your competitor with 50 employees doesn't have an automatic advantage over you anymore. The playing field has changed. That's not hype — it's what's actually happening right now.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "The window",
          icon: '🪟',
          title: "Most small business owners haven't figured this out yet.",
          body: [
            "According to recent surveys, fewer than 20% of small business owners are using AI tools regularly. Most have heard of ChatGPT but haven't built it into how they work.",
            "That gap is your opportunity. The owners who build AI into their workflow now will be more efficient, more consistent, and more responsive than their competitors — for years.",
            "In 18 months, this will be standard. Right now, it's still a real advantage.",
          ],
          highlight: "Starting today puts you in the top 20% of your market. That gap widens every month.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Tell AI about your business.',
          body: [
            "Open <strong>chatgpt.com</strong> and give AI a quick picture of what you do. This sets up every exercise ahead.",
          ],
          prompt:
            "I run a small business. Here's a quick description: [your type of business, how long you've been running it, roughly how many customers or clients you serve, and whether you have any employees or contractors]. What are the top 3 administrative or communication tasks that AI could most realistically help a business like mine with — and what would that actually look like in practice?",
          body2:
            "Read what it tells you. Notice how specific it is to your type of business — not generic advice. Save the response. We'll be working through each of those opportunities in this course.",
          setupGuide: true,
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: "You're not behind. You're right on time.",
          body: [
            "The window to build a real AI advantage in your market is still open. Most of your competitors haven't walked through it yet.",
            "In the next lesson, we clear up exactly what AI is and isn't — so you know precisely what you're working with and what to expect.",
          ],
          summaryList: [
            "Small business owners are already running complex, multi-role operations — AI directly addresses the overhead",
            "30–40% of your week goes to tasks AI can handle faster and cheaper than a hire",
            "Fewer than 20% of small business owners use AI regularly — that gap is your opportunity",
            "Starting now puts you ahead of most competitors in your market",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 2 — What AI Actually Is (For Business Owners)
    // ─────────────────────────────────────────
    {
      id: 1,
      title: 'What AI Actually Is (For Business Owners)',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for Your Business · Lesson 2',
          icon: '🧠',
          title: 'What AI Actually Is (For Business Owners)',
          body: [
            "By the end of this lesson, you'll have a clear, practical mental model of AI — no jargon, no hype. Just what you need to use it confidently and get real results.",
          ],
          sub: "Plain English. That's the whole point.",
        },
        {
          type: 'concept',
          eyebrow: "Cut through the noise",
          icon: '✂️',
          title: "AI is not what the news says it is.",
          body: [
            "The headlines either say AI is going to change everything overnight or that it's dangerous and overhyped. Neither framing is useful for you, running your business today.",
            "Here's what's actually true: AI tools like ChatGPT are software that can read what you type, understand the meaning behind it, and write back a genuinely useful response — in seconds.",
            "That's it. Very impressive technology. Still just a tool. Like a calculator that works with language instead of numbers.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'The mental model that sticks',
          icon: '👤',
          title: 'Think of it as a very capable business assistant who has read everything.',
          body: [
            "Imagine you could hire an assistant who has read millions of business books, marketing guides, customer service manuals, legal documents, financial reports, and websites across virtually every industry.",
            "You can ask them to draft emails, write social posts, respond to reviews, summarize reports, create job postings, write proposals — and they respond in seconds.",
            "The catch: they need clear direction. Vague asks get vague results. Specific asks get specific, useful output.",
          ],
          highlight: "Your job is to direct it well. This course teaches you exactly how to do that for your business.",
        },
        {
          type: 'concept',
          eyebrow: 'Where AI earns its keep',
          icon: '⭐',
          title: "What AI tools are genuinely great at for small businesses.",
          body: ["Here's where you'll get consistent, immediate value:"],
          list: {
            items: [
              'Writing customer emails — first drafts in seconds, your edits take 2 minutes',
              'Responding to reviews — professional, thoughtful, on-brand responses every time',
              'Creating social media content — posts, captions, and campaign ideas on demand',
              'Drafting proposals and quotes — professional format, your details filled in',
              'Writing job postings and HR documents',
              'Summarizing and explaining complex information (contracts, reports, research)',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: 'Be clear-eyed about limits',
          icon: '⚠️',
          title: "What to watch out for — so you're always in control.",
          body: ["Knowing the limits keeps you from getting burned:"],
          list: {
            items: [
              "It can be confidently wrong — always verify facts, numbers, and legal claims",
              "It doesn't know your business unless you tell it — give it context",
              "It can't access real-time information by default (pricing, live inventory, etc.)",
              "It sounds polished even when it's off — read everything before it goes out",
            ],
            negative: true,
          },
          highlight: "None of these are deal-breakers. They're just reasons to stay in the driver's seat — which you always are.",
        },
        {
          type: 'concept',
          eyebrow: "The skill that changes everything",
          icon: '🔄',
          title: 'The real skill is the back-and-forth.',
          body: [
            "Most people try AI once, get a mediocre response, and decide it doesn't work for them. They're skipping the most valuable part.",
            "AI works best as a conversation. If the first response isn't right: tell it. 'Make it shorter.' 'More professional.' 'This is for a home services business, not a tech company — rewrite it.' 'The tone is too formal.'",
            "Two or three exchanges and you have exactly what you need. That back-and-forth is the skill. Once you have it, you'll use it every day.",
          ],
          highlight: "The businesses getting the most value from AI aren't the most technical. They're the best at giving direction.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: "Ask it something about your business — then push it.",
          body: [
            "Open ChatGPT and try this two-step exercise specific to your business.",
          ],
          prompt:
            "Step 1 — Ask: 'I run a [type of business]. Write me a short, professional response to a customer who asked: [a question you get asked frequently].'\n\nStep 2 — Refine: Reply with: 'Good. Now make it warmer and more personal — I want it to sound like it came from the owner, not a corporate script.'",
          body2:
            "Notice how the second version is better. That refinement took 5 seconds. That's the back-and-forth — and it's the most important skill in this entire course.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: "You know exactly what you're working with.",
          body: [
            "You have a clear mental model — not the hype, not the fear. The practical, business-owner version that lets you actually use this.",
            "In the next lesson, we get specific about where your time is going every week — and put real numbers on what's possible.",
          ],
          summaryList: [
            'AI is a fast, capable assistant — not magic, not a threat',
            'For small businesses: email, reviews, social, proposals, and job postings are the highest-value use cases',
            'Always verify facts and numbers — AI can sound right while being wrong',
            'The back-and-forth is where the value is — never settle for the first response',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 3 — Where Your Hours Are Actually Going
    // ─────────────────────────────────────────
    {
      id: 2,
      title: 'Where Your Hours Are Actually Going',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for Your Business · Lesson 3',
          icon: '⏰',
          title: 'Where Your Hours Are Actually Going',
          body: [
            "By the end of this lesson, you'll have a clear picture of exactly where AI can reclaim your most wasted hours — and a real sense of what those hours are worth.",
          ],
          sub: "Let's put numbers on the problem.",
        },
        {
          type: 'concept',
          eyebrow: "The hidden tax on your week",
          icon: '📊',
          title: "The tasks that eat your week aren't random. They follow a pattern.",
          body: [
            "Survey small business owners across industries and the same categories come up every time: customer communication, marketing and social media, administrative tasks, and internal documentation.",
            "These aren't the hard parts of running a business — the strategy, the service, the relationships. They're the overhead. The necessary friction. And for most owners, they're consuming 15–20 hours a week.",
            "That's 15–20 hours of high-effort, low-value work. Every week.",
          ],
          highlight: "AI was built to eliminate exactly this category of work.",
        },
        {
          type: 'concept',
          eyebrow: "The biggest drain: customer communication",
          icon: '📧',
          title: "Customer emails, inquiries, and follow-ups take more than you realize.",
          body: [
            "Most small business owners answer the same 10–15 questions over and over. New customer inquiries. Pricing questions. Availability. How does this work? What's your process?",
            "Each response feels small — 5 minutes here, 10 minutes there. Together, they can consume 1–2 hours a day. And because they're urgent (customers are waiting), they interrupt everything else.",
            "AI can draft professional, on-brand responses to all of these in seconds. You review and send. The customer gets a great experience. You get your time back.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "The marketing grind",
          icon: '📱',
          title: "Social media, email newsletters, and content feel like a part-time job.",
          body: [
            "You know you need to post consistently. You know email marketing works. You know content drives customers.",
            "And you also know it takes time you don't have — time to think of ideas, write captions, draft emails, keep things consistent. So it gets done inconsistently. Or not at all.",
            "AI generates first drafts of all of this in under a minute. Your job becomes editing and publishing — not staring at a blank screen.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "The paperwork pile",
          icon: '📋',
          title: "Proposals, job postings, policies, and onboarding docs eat more time than they should.",
          body: [
            "Every quote or proposal is nearly the same structure. Every job posting covers the same ground. Employee handbooks and onboarding documents are written once but rarely updated.",
            "These documents represent hours of work — mostly starting from scratch each time, or updating templates that are years out of date.",
            "AI drafts these in minutes. You customize, review, and finalize. The work that used to take half a day takes 20 minutes.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "Let's do the math",
          icon: '🔢',
          title: "Even a conservative estimate is striking.",
          body: [
            "Say AI saves you just 90 minutes a day across customer emails, social content, and admin tasks. That's modest.",
            "90 minutes a day = 7.5 hours a week = 30 hours a month = <strong>360 hours a year.</strong>",
            "360 hours is nine full work weeks. Returned to you. To do the actual work of building your business.",
          ],
          highlight: "What's 360 hours worth to you? At any reasonable rate for your own time — it's substantial.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Your personal business time audit.',
          body: [
            "Open ChatGPT and do this exercise. Be specific — the more detail you give, the more useful the output.",
          ],
          prompt:
            "I want to audit where my time goes as a small business owner. I run a [type of business] and here's roughly how my week breaks down: [describe your typical week — what takes the most time, what feels repetitive, what you dread doing, what you always push to later]. Based on this, what are my top 3 time drains that AI could realistically help me reduce — and specifically how?",
          body2:
            "Save what it tells you. We'll be building workflows around those exact tasks in the modules ahead.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: "Now you know what you're reclaiming.",
          body: [
            "The hours aren't random. They follow a pattern — and AI addresses almost every category in that pattern.",
            "In the next lesson, we make it real. You're going to handle something from your actual business right now and see how much faster it goes.",
          ],
          summaryList: [
            'Customer communication, marketing, and admin together consume 15–20 hours per week for most owners',
            "Even 90 minutes of daily savings adds up to 360 hours — nine full work weeks — per year",
            "These aren't the valuable parts of running your business. They're the overhead AI is built to handle.",
            "You've identified your personal top 3 drains — we're going to tackle them one by one",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 4 — Your First Business Win — Today
    // ─────────────────────────────────────────
    {
      id: 3,
      title: 'Your First Business Win — Today',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for Your Business · Lesson 4',
          icon: '🏆',
          title: 'Your First Business Win — Today',
          body: [
            "By the end of this lesson, you'll have used AI on something real from your business — not a demo, not a tutorial. Something that goes to an actual customer.",
          ],
          sub: 'This is where it gets tangible.',
        },
        {
          type: 'concept',
          eyebrow: 'Why we start here',
          icon: '⭐',
          title: 'The best first win for a business owner is a customer review response.',
          body: [
            "Responding to reviews is something almost every business owner does — or knows they should be doing more of. It's high-visibility, it affects your reputation, and it's the kind of thing that gets put off because writing a good response takes thought.",
            "It's also perfect for AI: there's a clear format, a clear audience (the reviewer and future customers reading along), and a clear goal (professional, warm, on-brand).",
            "You can go from blank page to a send-ready response in under 2 minutes. Every time.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "What makes a great review response",
          icon: '💡',
          title: "Good review responses do three things.",
          body: [
            "<strong>Thank the reviewer</strong> — genuinely, not with a boilerplate opener.",
            "<strong>Acknowledge the specific experience</strong> — show you actually read what they wrote.",
            "<strong>Reinforce your business identity</strong> — say something true and specific about what you offer and who you are.",
          ],
          highlight: "Most business owners know this in theory. The problem is doing it consistently. AI makes consistent easy.",
        },
        {
          type: 'concept',
          eyebrow: "The formula that works",
          icon: '📝',
          title: "Here's what to give AI to get a great response.",
          body: [
            "To get a response worth sending, give AI three things:",
            "<strong>The review text</strong> — paste it in verbatim.",
            "<strong>Your business name and type</strong> — so it knows the context.",
            "<strong>Your tone preference</strong> — warm and personal, professional and brief, etc.",
          ],
          highlight: "That's the entire setup. You'll have a draft in 10 seconds that you edit for 2 minutes.",
        },
        {
          type: 'concept',
          eyebrow: "A real example",
          icon: '💬',
          title: "Here's what a prompt and a result look like.",
          body: [
            "Here's a real prompt you could use right now:",
          ],
          highlight: '"My business is [your business name], a [type of business]. A customer left this review: [paste the review]. Please write a warm, professional response that thanks them specifically for what they mentioned, reinforces what makes us different, and feels like it came from the owner — not corporate. Keep it under 100 words."',
        },
        {
          type: 'concept',
          eyebrow: "What to do with the draft",
          icon: '✏️',
          title: "Your 2-minute edit makes it yours.",
          body: [
            "Read the draft. You'll find it's usually 80–90% ready. Your job is the last mile.",
            "Does it sound like you? Adjust any word or phrase that feels off.",
            "Is there a specific detail — a customer's name, something memorable about their visit — that only you would know? Add it.",
            "Is the length right for your platform? Trim if needed.",
            "That's the whole process. Two minutes. A response that reinforces your reputation. Out the door.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Respond to a real review — right now.',
          body: [
            "Open <strong>chatgpt.com</strong>. Use an actual review from your Google, Yelp, or Facebook page — positive, neutral, or critical.",
          ],
          prompt:
            "My business is [business name], a [type of business, e.g. 'landscaping company', 'dog grooming salon', 'accounting firm']. A customer left this review: [paste the full review text]. Please write a professional, warm response that specifically acknowledges what they mentioned, reinforces what makes my business different, and sounds like it came from the owner — not from a template. Keep it under 100 words.",
          body2:
            "After you read the draft, try this follow-up: 'Make the opening less formal — start with something other than \"Thank you for your review.\"' Notice how fast it adjusts.",
          setupGuide: true,
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: 'You just used AI on your actual business.',
          body: [
            "That wasn't an exercise. That was a real response to a real customer — and it took minutes instead of the 15 or 20 most owners spend dreading and then writing these.",
            "In the final lesson of this module, we zoom out and talk about what this really changes — not just for your time, but for what you can now do as a business owner.",
          ],
          summaryList: [
            'Review responses are the perfect first win — high-visibility, consistent format, real impact',
            'Give AI the review, your business context, and a tone preference — you get a real draft in seconds',
            'Your 2-minute edit is what makes it genuinely yours and ready to post',
            "Every task in this course works the same way: you direct it, AI drafts it, you finish it",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 5 — What You Can Now Do Alone
    // ─────────────────────────────────────────
    {
      id: 4,
      title: 'What You Can Now Do Alone',
      meta: '9 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for Your Business · Lesson 5',
          icon: '🚀',
          title: 'What You Can Now Do Alone',
          body: [
            "By the end of this lesson, you'll understand the full picture — not just what AI saves you, but what it enables. The things you've been putting off because you didn't have the bandwidth.",
          ],
          sub: "This is the bigger shift.",
        },
        {
          type: 'concept',
          eyebrow: "The real opportunity",
          icon: '🔓',
          title: "AI doesn't just save time. It unlocks things you couldn't do before.",
          body: [
            "Most business owners frame AI as a time-saver. That's true and it's valuable. But there's a second, bigger opportunity: the things you've wanted to do but kept deprioritizing because you didn't have the bandwidth.",
            "A consistent email newsletter. A real social media presence. Professional proposals that close deals. Job postings that attract good candidates. A staff handbook. A customer FAQ. Regular blog posts.",
            "All of those were on a list somewhere. AI makes them actually possible.",
          ],
          highlight: "You already knew what your business needed. AI gives you the capacity to do it.",
        },
        {
          type: 'concept',
          eyebrow: "The marketing you've been putting off",
          icon: '📣',
          title: "Consistent marketing is now something one person can actually maintain.",
          body: [
            "Small businesses that market consistently outperform those that market in bursts. That's not new information — the problem has always been bandwidth.",
            "With AI, you can draft a month's worth of social posts in 30 minutes. An email newsletter goes from a 2-hour project to a 20-minute one. Blog posts that would have required a freelancer take a single morning.",
            "You don't need a marketing team or an agency. You need to know how to direct AI — which is exactly what this course teaches.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "The reputation work",
          icon: '⭐',
          title: "Your online presence is your storefront — and AI makes maintaining it easy.",
          body: [
            "For most small businesses, reviews and online content are where new customers decide whether to call you or a competitor. The businesses with consistent, professional responses to every review look more trustworthy — even with the same star rating.",
            "AI makes it realistic to respond to every review, maintain a professional website voice, and keep your business information current — consistently, not just when you have time.",
            "That consistency compounds. A year from now, you'll have a reputation that took no extra headcount to build.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "The operational lift",
          icon: '⚙️',
          title: "The back-office work that keeps slipping gets done.",
          body: [
            "Every business owner has a list of things that are important but never urgent enough. Update the employee handbook. Write a real onboarding document. Build a proper quote template. Create a customer FAQ for the website.",
            "These things matter. They make your business run better, look more professional, and reduce the constant question-answering that eats your day.",
            "With AI, the first draft of any of these takes minutes. You can tackle the whole list in a single afternoon.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "The competitive picture",
          icon: '🏁',
          title: "What this looks like 12 months from now.",
          body: ["Here's the before and after — not dramatic, but real:"],
          beforeAfter: {
            before: {
              label: 'Before this course',
              items: [
                'Marketing happens inconsistently or not at all',
                'Review responses are sporadic',
                'Proposals and admin docs are cobbled together',
                'Important back-office work keeps getting pushed',
                "You're doing everything and still behind",
              ],
            },
            after: {
              label: '12 months from now',
              items: [
                'Consistent marketing you maintain in under an hour a week',
                'Every review responded to, professionally, within 24 hours',
                'Polished proposals that help you close more deals',
                'A real operations backbone — documents, templates, systems',
                'More time for the work only you can do',
              ],
            },
          },
        },
        {
          type: 'concept',
          eyebrow: "The road ahead",
          icon: '🗺️',
          title: "Here's what the next five modules build.",
          body: ["Each module tackles one of the biggest time drains in your business:"],
          list: {
            items: [
              'Module 2: Customer Communications, Done Right — emails, inquiries, and follow-ups at scale',
              'Module 3: Marketing Without a Marketing Team — social, email, and content that actually gets done',
              'Module 4: Run Your Operations Smarter — proposals, admin, hiring docs, and SOPs',
              'Module 5: Make Smarter Business Decisions — research, competitive intel, and planning',
              'Module 6: Build Your AI-Powered Business — reusable workflows and staying ahead as things evolve',
            ],
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: "Name the thing you've been putting off.",
          body: [
            "Open ChatGPT and use this prompt. Be honest about what's been sitting on your list.",
          ],
          prompt:
            "I run a [type of business] and there's a marketing or operational task I've been putting off because I didn't have time: [describe the task — e.g., 'writing a regular email newsletter', 'creating a real onboarding document for new employees', 'building a proposal template I can reuse']. Can you show me exactly how we'd use AI to tackle this — what I'd tell you, what you'd produce, and how long it would realistically take?",
          body2:
            "That's the task we're going to knock out in one of the modules ahead. Screenshot this conversation — it's your roadmap.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 1 Complete',
          icon: '🎓',
          title: "You're building a different kind of business.",
          body: [
            "One where the overhead doesn't eat the owner. Where the marketing gets done. Where the back-office is professional. Where you have the capacity to grow because you're not spending 15 hours a week on tasks AI can handle.",
            "You're not just saving time. You're building leverage.",
          ],
          summaryList: [
            "AI saves time AND unlocks the things you've been putting off — marketing, operations, reputation",
            'Consistent marketing, professional reputation management, and clean operations are all achievable solo',
            'The gap between AI-fluent and AI-avoidant business owners will widen significantly over the next 12–18 months',
            'Five modules ahead — each one tackles a specific, high-value area of your business',
          ],
          gradBlock: {
            icon: '🏪',
            title: 'Your Business Just Got a Powerful New Tool',
            body: "You understand why this moment matters for small business owners, what AI can and can't do, where your time is going, and exactly how to get your first real win. The rest of this course makes all of it specific to the way you run your business.",
            name: 'Module 1 Complete',
          },
        },
      ],
    },
  ],

  quiz: [
    {
      q: "According to this module, roughly what percentage of small business owners are using AI tools regularly?",
      options: [
        "About 5%",
        "Fewer than 20%",
        "Around 50%",
        "More than 70%",
      ],
      correct: 1,
      feedback:
        "Research shows fewer than 20% of small business owners use AI regularly. Most have heard of tools like ChatGPT but haven't built them into their workflow — which means early adopters have a real competitive advantage right now.",
    },
    {
      q: "What is the most useful way to think about modern AI tools as a business owner?",
      options: [
        "A robot that can run your business automatically",
        "A search engine that finds information faster",
        "A capable assistant who has read everything and needs clear direction",
        "Software that replaces the need for employees",
      ],
      correct: 2,
      feedback:
        "The most useful mental model is a very capable assistant who has read an enormous amount and responds in seconds — but who needs clear, specific direction to produce great results. Vague asks get vague results. Specific asks get specific, useful output.",
    },
    {
      q: "What is the recommended 'first win' for business owners new to AI?",
      options: [
        "Replacing your website content",
        "Automating your entire customer service process",
        "Writing responses to customer reviews",
        "Creating a full social media strategy",
      ],
      correct: 2,
      feedback:
        "Review responses are the ideal first win: they have a clear format, a clear audience, high visibility, and real impact on your reputation. You can go from blank page to a send-ready response in under 2 minutes — and the results are immediately useful.",
    },
    {
      q: "How many hours per year does saving just 90 minutes per day add up to?",
      options: [
        "About 180 hours",
        "About 270 hours",
        "About 360 hours",
        "About 500 hours",
      ],
      correct: 2,
      feedback:
        "90 minutes per day × 5 days = 7.5 hours per week × 48 working weeks ≈ 360 hours per year. That's nine full work weeks returned to you — time that can go toward growth, strategy, or simply not working nights and weekends.",
    },
    {
      q: "What is the most effective approach when AI gives you a response that isn't quite right?",
      options: [
        "Start a completely new conversation and try again",
        "Accept it as good enough — AI has limitations",
        "Tell it specifically what to change and refine in the same conversation",
        "Use a different AI tool instead",
      ],
      correct: 2,
      feedback:
        "The back-and-forth is where the real value is. When a response isn't right, tell AI specifically what to change: 'Make it shorter,' 'More personal,' 'This sounds too corporate.' Two or three exchanges usually gets you exactly what you need. Never settle for the first response.",
    },
  ],
}

export default c3module1
