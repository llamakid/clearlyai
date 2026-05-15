import type { CourseData } from './types'

const c3module3: CourseData = {
  moduleId: 15,
  title: 'Marketing Without a Marketing Team',
  subtitle: 'AI for Your Business · Module 3',
  lessons: [
    // ─────────────────────────────────────────
    // Lesson 1 — Why Your Marketing Keeps Falling Behind
    // ─────────────────────────────────────────
    {
      id: 0,
      title: 'Why Your Marketing Keeps Falling Behind',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for Your Business · Lesson 1',
          icon: '📣',
          title: 'Why Your Marketing Keeps Falling Behind',
          body: [
            "By the end of this lesson, you'll understand exactly why consistent marketing has been out of reach — and why AI changes the equation completely for small business owners.",
          ],
          sub: "It's not a discipline problem. It's a bandwidth problem.",
        },
        {
          type: 'concept',
          eyebrow: 'The pattern every owner recognizes',
          icon: '🔁',
          title: "You know you need to market. You just never have time to do it.",
          body: [
            "You've told yourself you'll start posting consistently on social media. You've thought about sending a monthly newsletter. You've meant to update your website copy and keep your Google Business profile fresh.",
            "And then Monday arrives, and there's a customer to call, a job to finish, an invoice to send, a problem to solve. Marketing moves to tomorrow. Then next week. Then next month.",
            "This isn't a character flaw. It's a resource problem. Marketing is important but rarely urgent — and urgent always wins.",
          ],
          highlight: "The businesses that market consistently aren't more disciplined than you. They have more hands — or a better system.",
        },
        {
          type: 'concept',
          eyebrow: 'Why inconsistency hurts more than nothing',
          icon: '📉',
          title: "Sporadic marketing is actually worse than no marketing at all.",
          body: [
            "When a potential customer discovers your business and checks your social media, they're looking for signals of trust. A profile with posts from 8 months ago tells them the business might not be active.",
            "When someone gets on your email list and hears from you twice a year, they forget who you are. When you do email them, they unsubscribe.",
            "Inconsistency signals to customers that you're disorganized — even if that's the last thing that's true about how you run your actual business.",
          ],
          highlight: "Consistency builds trust. Trust drives sales. AI makes consistency achievable.",
        },
        {
          type: 'concept',
          eyebrow: 'The agency trap',
          icon: '💸',
          title: "Hiring marketing help is expensive — and often disappointing.",
          body: [
            "Many small business owners have tried hiring a social media manager, a marketing agency, or a freelancer. The results are mixed.",
            "Agencies charge $1,500–$5,000 a month for work you could have done yourself with the right tools. Freelancers require briefings, revisions, and management. And nobody knows your business and your voice like you do.",
            "The content that comes back is often generic — technically fine, but it doesn't sound like you. And customers can tell the difference.",
          ],
          highlight: "AI gives you agency-quality output in your own voice, at a fraction of the cost, in a fraction of the time.",
        },
        {
          type: 'concept',
          eyebrow: "What this module builds",
          icon: '🗺️',
          title: "By the end of this module, you'll have a real marketing system.",
          body: ["Five lessons. Everything you need to market your business consistently:"],
          list: {
            items: [
              'Social media content: a month of posts created in one sitting',
              'Email marketing: newsletters and campaigns drafted in 20 minutes',
              'Website and Google content: copy that brings customers to you',
              'A repeatable weekly routine that takes under an hour to maintain',
              'A content calendar so you\'re always ahead, never scrambling',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: 'The shift',
          icon: '🔄',
          title: "From reactive to intentional. From occasional to consistent.",
          body: [
            "Right now, your marketing probably happens when you have a spare moment — which means it's irregular and rushed.",
            "With AI, the model flips. You batch your content creation into one focused session per week or month. AI drafts. You edit and approve. You schedule. Done.",
            "The session takes 30–60 minutes. The content works for you all month. You stop thinking about marketing every day because it's already handled.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Define your marketing starting point.',
          body: [
            "Open <strong>chatgpt.com</strong> and answer these questions for your business. This sets the foundation for everything we build in this module.",
          ],
          prompt:
            "I run [business name], a [type of business] in [city or region]. I want to build a consistent marketing presence. Here's my current situation: [describe honestly — e.g., 'I post on Instagram occasionally but nothing consistent', 'I have an email list of about 200 people but haven't emailed them in months', 'My Google Business profile is set up but I never post updates']. What are the 3 highest-impact marketing activities I should focus on first for a business like mine — and what would a realistic weekly time commitment look like for each?",
          body2:
            "Save what it tells you. These three priorities are what we're building in the lessons ahead.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: "The bandwidth problem has a solution.",
          body: [
            "You've been right that marketing takes time. What's changed is how much time — and where that time goes. AI handles the creation. You handle the decisions.",
            "In the next lesson, we start with the highest-visibility piece: social media content you can create a month at a time.",
          ],
          summaryList: [
            "Inconsistent marketing isn't a discipline problem — it's a resource problem that AI directly solves",
            "Sporadic marketing signals distrust to potential customers browsing your profile",
            "Agencies are expensive and generic — AI produces content in your voice at a fraction of the cost",
            "The new model: one focused session per week or month, AI drafts, you approve and schedule",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 2 — Social Media Content That Actually Gets Done
    // ─────────────────────────────────────────
    {
      id: 1,
      title: 'Social Media Content That Actually Gets Done',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for Your Business · Lesson 2',
          icon: '📱',
          title: 'Social Media Content That Actually Gets Done',
          body: [
            "By the end of this lesson, you'll be able to create a week — or an entire month — of social media content in a single sitting. No more staring at a blank caption box wondering what to post.",
          ],
          sub: 'Batch it. Schedule it. Move on.',
        },
        {
          type: 'concept',
          eyebrow: 'The content types that work',
          icon: '🗂️',
          title: "For small businesses, four types of content do most of the work.",
          body: ["You don't need to be everywhere or post everything. These four cover what actually builds trust and drives business:"],
          list: {
            items: [
              '<strong>Educational</strong> — tips, how-tos, and answers to common questions. Builds authority.',
              '<strong>Behind the scenes</strong> — your process, your team, your workspace. Builds trust and personality.',
              '<strong>Social proof</strong> — customer stories, reviews, before/after results. Converts browsers into buyers.',
              '<strong>Promotional</strong> — offers, announcements, seasonal campaigns. Drives immediate action.',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: 'The ratio that works',
          icon: '⚖️',
          title: "More value, less selling — and AI makes value posts easy.",
          body: [
            "A rough rule that works for most small businesses: for every promotional post, publish three to four value posts (educational, behind-the-scenes, or social proof).",
            "This feels counterintuitive — you want sales, not tips. But audiences follow accounts that give them something useful. When you do promote, they're primed to listen because you've already earned their attention.",
            "The good news: educational and behind-the-scenes posts are the easiest for AI to help you create, because it knows your industry and you know your own process.",
          ],
          highlight: "Teach 80% of the time. Sell 20% of the time. That ratio builds a following that actually buys.",
        },
        {
          type: 'concept',
          eyebrow: 'The batching method',
          icon: '📦',
          title: "Create a month of posts in one focused session.",
          body: [
            "Posting daily is not the goal. Consistency is. For most small businesses, three to five posts per week is plenty — and you can create all of them in one 45-minute session.",
            "Here's the process: sit down once a week or once a month, give AI your business context and the content type mix you want, and ask for a batch of posts. Edit them in one pass. Schedule them. Done.",
            "You go from thinking about social media every day to handling it once and forgetting about it. That mental overhead is worth as much as the time itself.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'The prompt formula',
          icon: '📝',
          title: "One prompt structure works for almost any batch of social content.",
          body: [
            "Give AI: your business name and type, your platform (Facebook, Instagram, LinkedIn — tone differs), the number of posts you want, and the content type mix.",
          ],
          highlight: '"I run [business name], a [type of business]. Please write [number] social media posts for [platform]. I want: [X] educational posts about [topic area], [X] behind-the-scenes posts, and [X] social proof posts. Keep the tone [warm and conversational / professional / friendly and local]. Each post should be [short: under 100 words / medium: 100–150 words]. Include a call to action on the promotional ones."',
        },
        {
          type: 'concept',
          eyebrow: 'Platform differences',
          icon: '📲',
          title: "The same content, adapted for where your customers actually are.",
          body: [
            "<strong>Facebook</strong> — conversational, community-focused, slightly longer posts work well. Great for local businesses with older demographics.",
            "<strong>Instagram</strong> — shorter captions, visual-forward, strong opening line matters most. Best for businesses with visual products or services.",
            "<strong>LinkedIn</strong> — professional, insight-driven, longer and more personal stories perform well. Ideal if you serve other businesses.",
            "You don't need to be on all three. Pick one or two where your customers spend their time and do those well.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: "Create two weeks of social content right now.",
          body: [
            "Open <strong>chatgpt.com</strong> and generate a real batch of posts for your business. Edit them. Schedule them this week.",
          ],
          prompt:
            "I run [business name], a [type of business] in [location]. Please write 10 social media posts for [your primary platform: Facebook / Instagram / LinkedIn]. I want: 4 educational posts sharing useful tips about [your area of expertise], 3 behind-the-scenes posts about [your process, your team, or your workspace], 2 social proof posts I can customize with a real customer story, and 1 promotional post about [a current offer or seasonal message]. Keep the tone [warm and local / professional / friendly and approachable]. Under 120 words each.",
          body2:
            "After the batch comes back, pick the 2–3 you like best and reply: 'Rewrite posts 2, 5, and 8 to be shorter and punchier — under 80 words each.' Then copy the whole batch into a doc and schedule them out.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: "Two weeks of content. One session. Done.",
          body: [
            "That's the new model. Not daily scrambling — one focused session that handles everything for the next two weeks or month.",
            "In the next lesson, we move to email marketing — the highest-ROI channel for small businesses, and the one most owners use least.",
          ],
          summaryList: [
            'Four content types do most of the work: educational, behind-the-scenes, social proof, and promotional',
            'The 80/20 rule: three to four value posts for every promotional one — audiences that get value actually buy',
            'Batch your content creation into one session per week or month — schedule it all at once',
            'Pick one or two platforms where your customers are and do those well instead of spreading thin',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 3 — Email Marketing That Builds Your Business
    // ─────────────────────────────────────────
    {
      id: 2,
      title: 'Email Marketing That Builds Your Business',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for Your Business · Lesson 3',
          icon: '📧',
          title: 'Email Marketing That Builds Your Business',
          body: [
            "By the end of this lesson, you'll be able to draft a full email newsletter in under 20 minutes — and understand why your email list is the most valuable marketing asset your business has.",
          ],
          sub: "The channel most small businesses underuse is their best one.",
        },
        {
          type: 'concept',
          eyebrow: 'Why email beats social',
          icon: '🏆',
          title: "Email has a higher ROI than any other marketing channel. By a lot.",
          body: [
            "Social media is rented land. Algorithms decide who sees your posts. A platform change or account issue can cut your reach overnight. You don't own your audience there.",
            "Email is different. You own that list. When you send a newsletter, it lands in your customer's inbox — no algorithm deciding whether they see it.",
            "The numbers back this up: email marketing returns an average of $36 for every $1 spent, consistently outperforming social media, paid ads, and SEO. For small businesses with an existing customer base, it's the single highest-ROI marketing activity available.",
          ],
          highlight: "Your email list is the only marketing asset you truly own. Building it and using it consistently is one of the best investments you can make.",
        },
        {
          type: 'concept',
          eyebrow: 'Why most small business emails fail',
          icon: '❌',
          title: "The two mistakes that make people unsubscribe.",
          body: [
            "<strong>Emailing too infrequently.</strong> If you only email when you're selling something, customers don't know who you are when your message arrives. They unsubscribe. Send value regularly so your name is familiar.",
            "<strong>Making every email a sales pitch.</strong> If every email asks for something, people stop opening. Mix in useful content, stories, and updates — then your promotional emails land with warm, engaged readers.",
            "The goal isn't to send more emails. It's to send emails people actually look forward to getting.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'The structure that works',
          icon: '📋',
          title: "A simple newsletter format that keeps customers engaged.",
          body: ["This structure works for almost any small business and takes AI under a minute to draft:"],
          list: {
            items: [
              '<strong>Subject line</strong> — specific and intriguing, not "Monthly Newsletter" (AI is great at generating 5 options)',
              '<strong>Opening</strong> — a personal sentence or two, like you\'re writing to a friend',
              '<strong>Main value</strong> — one tip, story, update, or behind-the-scenes piece (not three things, one)',
              '<strong>Business update</strong> — a brief mention of what\'s new, seasonal, or worth knowing',
              '<strong>Single call to action</strong> — one thing you want them to do: book, reply, visit, refer',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: 'The 20-minute newsletter',
          icon: '⏱️',
          title: "Here's exactly how to draft a real newsletter in 20 minutes.",
          body: [
            "<strong>Minutes 1–3:</strong> Jot down the one useful thing you want to share this month — a tip, a story, a seasonal reminder. Rough notes are fine.",
            "<strong>Minutes 3–8:</strong> Paste your notes into ChatGPT with the newsletter prompt. Get the full draft back.",
            "<strong>Minutes 8–15:</strong> Edit for accuracy and your voice. Make the opening sound like you. Add one personal detail.",
            "<strong>Minutes 15–20:</strong> Write or refine the subject line (ask AI for five options). Copy into your email tool. Schedule or send.",
          ],
          highlight: "Twenty minutes. A newsletter your customers will actually read. Once a month is enough to stay top of mind.",
        },
        {
          type: 'concept',
          eyebrow: 'Subject lines matter most',
          icon: '📬',
          title: "Your subject line determines whether any of the rest matters.",
          body: [
            "On average, 47% of email recipients decide whether to open based on the subject line alone. A great newsletter with a weak subject line goes unread.",
            "The subject lines that work: specific over vague ('3 things to know before hiring a contractor' beats 'Our monthly update'), curiosity-driven ('The mistake most homeowners make in winter'), and personal ('I had an interesting conversation this week...').",
            "Ask AI for five subject line options every time you draft a newsletter. Pick the one that feels truest to your voice.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Draft a real newsletter — right now.',
          body: [
            "Open <strong>chatgpt.com</strong> and use this prompt. Think of one genuinely useful tip or story from your business this month.",
          ],
          prompt:
            "I run [business name], a [type of business]. I want to send a monthly email newsletter to my customers. Here's the main thing I want to share this month: [describe the tip, story, update, or seasonal message — rough notes are fine]. Please draft a full newsletter with: a warm, personal opening (2 sentences, sounds like the owner), the main content (150–200 words, useful and specific), a brief business update (1–2 sentences about what's new or seasonal), and a single clear call to action. Also give me 5 subject line options. Tone: [warm and conversational / professional / friendly and local].",
          body2:
            "When you get the draft, read the opening out loud. If it doesn't sound like you, reply: 'Rewrite the opening — make it feel more like I'm writing to a friend, not a subscriber.' Then pick your favorite subject line and send it.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: "Email once a month. Customers stay warm all year.",
          body: [
            "You don't need a big list or a sophisticated tool. You need a consistent message, delivered regularly, to the people who've already said they want to hear from you.",
            "In the next lesson, we tackle the content that brings new customers to you — website copy, blog posts, and Google Business updates.",
          ],
          summaryList: [
            'Email marketing returns an average of $36 per $1 spent — the highest ROI channel available to small businesses',
            'You own your email list; social media reach is rented and algorithm-dependent',
            'Simple structure: personal opening, one main value piece, business update, single call to action',
            'Subject lines determine open rates — always ask AI for five options and choose the most specific one',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 4 — Content That Brings Customers to You
    // ─────────────────────────────────────────
    {
      id: 3,
      title: 'Content That Brings Customers to You',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for Your Business · Lesson 4',
          icon: '🔍',
          title: 'Content That Brings Customers to You',
          body: [
            "By the end of this lesson, you'll know how to use AI to create website copy, blog posts, and Google Business updates that help new customers find you and trust you before they ever make contact.",
          ],
          sub: 'The marketing that works while you sleep.',
        },
        {
          type: 'concept',
          eyebrow: 'The difference between outbound and inbound',
          icon: '🎯',
          title: "Some marketing reaches out. Some marketing pulls people in.",
          body: [
            "Social media and email are outbound — you push your message to an audience. That's valuable, but it requires you to keep showing up.",
            "Inbound content is different. A blog post answering a question your customers search for, a well-written service page, a Google Business profile with fresh posts — these work passively. They bring people in, on their own timeline, because they were already looking.",
            "Most small businesses neglect inbound content because it takes time to write. AI makes it realistic for a one-person operation.",
          ],
          highlight: "Inbound content is the closest thing to a marketing employee who works 24 hours a day without being paid.",
        },
        {
          type: 'concept',
          eyebrow: 'Google Business — the most underused tool',
          icon: '📍',
          title: "Your Google Business profile is free, high-impact, and almost nobody uses it fully.",
          body: [
            "When someone searches for your type of business in your area, your Google Business profile is often the first thing they see. More than your website. More than your social media.",
            "Yet most small businesses set theirs up once and never touch it again. Google rewards profiles that are active — new posts, updated photos, answered questions, and recent reviews all improve your local search ranking.",
            "A Google Business post takes 3 minutes with AI. One per week is enough to stay active and ahead of competitors who aren't posting at all.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Blog posts that work',
          icon: '✍️',
          title: "A blog post that answers a real question can bring customers in for years.",
          body: [
            "You don't need to blog constantly. One well-written post per month, answering a question your customers actually search for, is genuinely valuable.",
            "Think about the questions you answer in person all the time. 'How do I know when I need [your service]?' 'What should I look for when hiring a [type of business]?' 'What does [your process] actually look like?'",
            "Those questions are what people Google. A post that answers them well, written in plain language, gets found — and it builds trust before a customer ever contacts you.",
          ],
          highlight: "Every blog post you publish is a permanent ambassador for your business, working quietly in search results long after you wrote it.",
        },
        {
          type: 'concept',
          eyebrow: 'Website copy',
          icon: '💻',
          title: "Your website copy is your best salesperson — or your biggest missed opportunity.",
          body: [
            "Most small business websites describe what the business does. The ones that convert well describe what the customer gets — the outcome, not just the service.",
            "Compare: 'We offer professional landscaping services' vs. 'Your yard, exactly how you want it — without the weekend work.' Same service. Very different conversion rate.",
            "AI is excellent at rewriting service descriptions, home page copy, and about pages from the customer's perspective. Give it your existing copy and ask it to rewrite it around the customer's outcome.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Create a Google Business post and a blog topic list.',
          body: [
            "Open <strong>chatgpt.com</strong> and do both parts of this exercise. It takes under 10 minutes total.",
          ],
          prompt:
            "Part 1 — Google Business post: I run [business name], a [type of business] in [location]. Please write a Google Business post announcing [a current offer, a seasonal tip, or a recent project]. Keep it under 150 words, include a call to action, and make it sound genuine — not like an ad.\n\nPart 2 — Blog topic list: Based on my business type, what are 10 blog post topics that my potential customers are likely searching for right now? For each one, suggest the specific question they'd type into Google.",
          body2:
            "Post the Google Business update today — it takes 2 minutes in your Google Business dashboard. Save the blog topic list. Pick one topic and we'll turn it into a full post in the next exercise.",
        },
        {
          type: 'concept',
          eyebrow: 'Putting it together',
          icon: '🔗',
          title: "The inbound content stack for a small business.",
          body: ["You don't need all of this immediately. Build it piece by piece:"],
          list: {
            items: [
              '<strong>Google Business</strong> — one new post per week (3 minutes with AI). Immediate impact on local search.',
              '<strong>Website copy</strong> — rewrite your home and services pages once. Ongoing benefit.',
              '<strong>Blog posts</strong> — one post per month. Compounds over time as search traffic builds.',
              '<strong>FAQ page</strong> — already built in Module 2. Reduces customer support volume and improves SEO.',
            ],
          },
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: "Inbound content is marketing that works while you're not.",
          body: [
            "A Google Business post this week, a blog post this month, and website copy that sells your outcomes instead of your services — those three things alone can meaningfully change how many new customers find you.",
            "In the final lesson, we bring everything together into a sustainable weekly rhythm so you never fall behind on marketing again.",
          ],
          summaryList: [
            'Inbound content (website, blog, Google) works passively — bringing in customers who are already searching',
            'Google Business is the most underused free tool for local businesses — one post per week makes a real difference',
            "Blog posts that answer real customer questions get found in search and build trust for years after they're written",
            'Rewrite your website copy around customer outcomes, not service descriptions — that\'s the difference between browsing and buying',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 5 — Your Marketing Rhythm
    // ─────────────────────────────────────────
    {
      id: 4,
      title: 'Your Marketing Rhythm',
      meta: '9 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for Your Business · Lesson 5',
          icon: '🗓️',
          title: 'Your Marketing Rhythm',
          body: [
            "By the end of this lesson, you'll have a realistic weekly and monthly marketing routine — one that keeps your business visible, consistent, and growing without taking over your schedule.",
          ],
          sub: "Sustainable beats ambitious. Every time.",
        },
        {
          type: 'concept',
          eyebrow: 'The trap of big plans',
          icon: '⚠️',
          title: "The marketing plan you won't stick to is worse than a simple one you will.",
          body: [
            "Most small business owners have, at some point, built a marketing plan. A full content calendar. A schedule for every platform. A plan for email, social, blog, and ads.",
            "And then life happened, and the plan fell apart after two weeks.",
            "The problem isn't ambition — it's that ambitious plans require perfect conditions. A sustainable routine works on good weeks and bad weeks, busy seasons and slow ones. Small and consistent beats big and abandoned.",
          ],
          highlight: "Aim for a routine you can maintain at 70% capacity. That's what actually compounds.",
        },
        {
          type: 'concept',
          eyebrow: 'The weekly routine',
          icon: '📅',
          title: "A realistic marketing week for a small business owner.",
          body: ["This takes under 60 minutes total — broken into small chunks across the week:"],
          list: {
            items: [
              '<strong>Monday (10 min)</strong> — Post one social media update (from your batch or a quick one-off)',
              '<strong>Wednesday (10 min)</strong> — Post one Google Business update or respond to a recent review',
              '<strong>Friday (10 min)</strong> — Post one more social update; check and reply to any comments or DMs',
              '<strong>Monthly (45–60 min)</strong> — Batch-create next month\'s social content + draft the newsletter',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: 'The monthly session',
          icon: '📦',
          title: "One focused session per month handles most of your marketing.",
          body: [
            "Block 60 minutes on your calendar once a month — the same day each month so it becomes a habit. Here's how to spend those 60 minutes:",
            "<strong>Minutes 1–20:</strong> Create a batch of 8–12 social posts for the next 3–4 weeks. Edit and schedule them.",
            "<strong>Minutes 20–40:</strong> Draft your monthly newsletter. Edit. Queue it to send.",
            "<strong>Minutes 40–60:</strong> Write one Google Business post or blog post. Publish the Google post immediately.",
            "That's it. Your marketing is handled for the month. Everything else during the month is maintenance — 10 minutes here and there.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'The content calendar',
          icon: '📋',
          title: "A simple content calendar keeps you from making decisions on the fly.",
          body: [
            "The biggest time drain in marketing isn't creation — it's deciding what to create. Every day you sit down to post and ask 'what should I say today?' is decision fatigue draining your energy.",
            "A simple content calendar eliminates that. It doesn't have to be sophisticated: a Google Sheet or even a notes app with your post ideas and dates is enough.",
            "After your monthly session, you know exactly what goes out and when. The day-of task is just copying from your doc and posting. That's 2 minutes, not 20.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Seasonal and event-based content',
          icon: '🗓️',
          title: "Plan your promotional content a month ahead.",
          body: [
            "The businesses that look effortlessly timely — posting perfectly timed holiday content, seasonal offers, and local event tie-ins — aren't more creative. They planned ahead.",
            "At the start of each month, ask AI: 'What seasonal events, holidays, or trends in [month] are relevant to a [type of business]?' Use the answer to anchor one or two posts that month to something timely.",
            "This makes your content feel current and relevant without you having to monitor the calendar daily.",
          ],
          highlight: "Looking timely is a planning problem, not a creativity problem. One AI prompt per month solves it.",
        },
        {
          type: 'concept',
          eyebrow: 'The before and after',
          icon: '📈',
          title: "What your marketing looks like 90 days from now.",
          body: ["Small and consistent, sustained over 90 days, adds up to something real:"],
          beforeAfter: {
            before: {
              label: 'Before this system',
              items: [
                'Marketing happens when you have a spare moment — rarely',
                'Social media profile last posted 6 weeks ago',
                'Email list untouched for months',
                "Google Business profile stale",
                "You feel behind on marketing constantly",
              ],
            },
            after: {
              label: '90 days with your new routine',
              items: [
                'Marketing handled in one 60-min session per month',
                'Consistent social presence — 3–4 posts per week',
                'Monthly newsletter going to your full list',
                'Google Business active with weekly updates',
                'Marketing is done — not always on your mind',
              ],
            },
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Build your one-month content calendar.',
          body: [
            "Open <strong>chatgpt.com</strong> and generate a real content calendar for next month. This is your plan — not a placeholder.",
          ],
          prompt:
            "I run [business name], a [type of business] in [location]. I want to create a simple content calendar for [month]. Please give me: (1) 10–12 social media post ideas with the suggested post type (educational / behind-the-scenes / social proof / promotional) and a one-sentence description of each, (2) one newsletter topic with a suggested subject line and three bullet points of content to include, and (3) two Google Business post ideas tied to something seasonal or relevant in [month]. Format it so I can copy it into a simple calendar.",
          body2:
            "Copy this into a Google Doc or Notion page titled '[Month] Marketing Calendar.' Block 60 minutes on your calendar this week to turn the ideas into actual drafted content using everything you've learned in this module.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 3 Complete',
          icon: '🎓',
          title: "You now have a marketing system — not a marketing task.",
          body: [
            "The difference between a business that markets consistently and one that doesn't isn't budget, creativity, or discipline. It's having a system that removes the friction and the decisions.",
            "You have that system now. One session a month. AI handles the drafting. You handle the decisions. Your business stays visible, consistent, and growing.",
          ],
          summaryList: [
            'Aim for a routine you can maintain at 70% capacity — consistent beats ambitious every time',
            'One 60-minute session per month handles your social content, newsletter, and Google presence',
            'A simple content calendar eliminates daily decision fatigue — you always know what goes out next',
            'Ninety days of consistent marketing changes how customers find and perceive your business',
          ],
          gradBlock: {
            icon: '📣',
            title: 'Your Marketing System Is Built',
            body: "Social media, email, inbound content, and a sustainable weekly routine — you now have everything you need to market your business consistently, in your own voice, without an agency or a marketing team. Run it for 90 days and watch what compounds.",
            name: 'Module 3 Complete',
          },
        },
      ],
    },
  ],

  quiz: [
    {
      q: "Why is inconsistent social media marketing potentially worse than no social media presence at all?",
      options: [
        "Social media algorithms penalize accounts that post irregularly",
        "A profile with posts from months ago signals to potential customers that the business may not be active or reliable",
        "Inconsistent posting always leads to negative comments",
        "It's not — any presence is better than none",
      ],
      correct: 1,
      feedback:
        "When a potential customer checks your social profile and sees the last post was months ago, it raises doubt about whether your business is still operating or worth contacting. Inconsistency signals disorganization — even if your actual business is the opposite. Consistency builds trust.",
    },
    {
      q: "What content ratio works best for small business social media accounts?",
      options: [
        "Mostly promotional — you're there to sell",
        "Equal mix of promotional and educational",
        "Three to four value posts (educational, behind-the-scenes, social proof) for every promotional post",
        "Only behind-the-scenes content — customers don't like being sold to",
      ],
      correct: 2,
      feedback:
        "The 80/20 approach works: three to four value posts for every promotional one. Audiences follow accounts that give them something useful. When you do promote, they're already warm and paying attention because you've earned their trust with consistent value.",
    },
    {
      q: "Why does email marketing outperform social media for small businesses?",
      options: [
        "Email is cheaper than running social media accounts",
        "You own your email list — social reach is algorithm-dependent and can disappear overnight",
        "More people check email than social media every day",
        "Email allows longer messages than social media",
      ],
      correct: 1,
      feedback:
        "The core advantage is ownership. Your email list belongs to you — a platform algorithm change, account issue, or policy update can't take it away. When you send an email, it lands directly in your customer's inbox. Social media reach is rented; your email list is owned.",
    },
    {
      q: "What type of website copy converts better for small businesses?",
      options: [
        "Detailed descriptions of every service and its specifications",
        "Copy focused on what the customer gets — the outcome — rather than what the business does",
        "Longer copy with more information is always better",
        "The business's history and credentials",
      ],
      correct: 1,
      feedback:
        "Outcome-focused copy outperforms feature-focused copy consistently. Compare: 'We offer professional landscaping services' vs. 'Your yard, exactly how you want it — without the weekend work.' Same service; the second sells the result the customer actually wants. AI is excellent at rewriting service descriptions from the customer's perspective.",
    },
    {
      q: "What is the most realistic monthly time commitment for maintaining a complete small business marketing system?",
      options: [
        "20–30 minutes total — AI handles everything",
        "2–3 hours every day",
        "One 60-minute session per month plus about 30 minutes of weekly maintenance",
        "At least 10 hours per week to compete with larger businesses",
      ],
      correct: 2,
      feedback:
        "One focused 60-minute session per month handles your social media batch, newsletter, and Google Business content. The weekly maintenance (posting, responding to comments, Google updates) adds about 30 minutes per week. That's the full system — sustainable enough to maintain even in busy seasons.",
    },
  ],
}

export default c3module3
