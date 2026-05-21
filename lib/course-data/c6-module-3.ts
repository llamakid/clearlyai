import type { CourseData } from './types'

const c6module3: CourseData = {
  moduleId: 33,
  title: 'Your Professional Brand',
  subtitle: 'AI for Career Growth · Module 3',
  lessons: [
    {
      id: 0,
      title: 'What Your LinkedIn Actually Says About You',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 3 · Lesson 1',
          icon: '🔍',
          title: 'A recruiter spends 7 seconds on your profile. What do they see?',
          body: [
            "Most LinkedIn profiles are backward-looking job descriptions — a timeline of titles and duties that tells someone what you used to do, not why they should want to work with you now.",
            'Recruiters and decision-makers are scanning for three things: clarity on what you do, evidence that you\'re good at it, and a sense of what you\'d bring to their team. Most profiles answer none of those questions.',
          ],
          sub: 'This lesson is about reading your own profile the way a stranger would — and knowing exactly what to fix.',
        },
        {
          type: 'concept',
          eyebrow: 'The 7-second scan',
          icon: '⏱️',
          title: 'Recruiters don\'t read profiles. They scan them.',
          body: [
            "In practice, a decision-maker landing on your profile will glance at your photo, your headline, and the first two lines of your About section — and then either keep reading or move on. That\'s it. Seven seconds.",
            "If those three elements don\'t clearly communicate what you do and why that\'s valuable, the rest of your carefully written experience section never gets read. The profile isn\'t a resume. It\'s a first impression.",
          ],
          highlight: 'Your headline and the first two lines of your About section are doing almost all the work.',
        },
        {
          type: 'concept',
          eyebrow: 'What they\'re actually looking for',
          icon: '🎯',
          title: 'Three questions every profile needs to answer — fast.',
          body: [
            "Put yourself in the position of someone who\'s never heard of you. They need to know three things before they\'ll spend another 30 seconds on your profile.",
          ],
          list: {
            items: [
              '<strong>What do you do?</strong> Not your job title — your function and area of expertise',
              '<strong>Are you good at it?</strong> Any evidence of outcomes, results, or recognition',
              '<strong>What\'s in it for me?</strong> What value would you bring if we worked together',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'The most common mistakes',
          icon: '⚠️',
          title: 'Five ways LinkedIn profiles quietly hurt you.',
          body: [
            "Most of these mistakes feel perfectly reasonable when you\'re writing your own profile — which is exactly why they\'re so common. The goal here is to see your profile the way someone else does.",
          ],
          list: {
            items: [
              'Headline is just your job title — no differentiation from 10,000 other people with the same title',
              'Summary starts with "I am a results-driven professional" — generic, forgettable, and instantly skipped',
              'Experience section describes duties, not achievements — what you were responsible for, not what you actually did',
              'No evidence of impact — metrics, outcomes, or anything that shows you moved the needle',
              'Profile photo and banner are outdated or missing — a blank photo communicates less than the worst headshot',
            ],
            negative: true,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Read it like a stranger',
          icon: '👁️',
          title: 'The most useful thing you can do right now: pretend you\'ve never met yourself.',
          body: [
            "Open your LinkedIn profile and read your headline and About section as if you just landed there from a search result. You don\'t know this person. You have no context. You\'ve been looking at profiles for an hour and everything is starting to blur together.",
            "Ask yourself honestly: does this profile make me want to keep reading? Does it tell me clearly what this person does and why that\'s valuable? Would I reach out? If the answer to any of those is no, that\'s the gap you\'re going to close over the next two lessons.",
          ],
          highlight: 'If your own profile doesn\'t make you want to keep reading, a recruiter won\'t either.',
        },
        {
          type: 'concept',
          eyebrow: 'The good news',
          icon: '✨',
          title: 'Small changes to two sections make a dramatic difference.',
          body: [
            "You don\'t need to rebuild your entire profile from scratch. The highest-leverage changes live in exactly two places: your headline and your About section. Fix those, and you\'ve addressed 80% of what shapes a first impression.",
            "The good news about using AI here: you don\'t need to be a great writer. You just need to give AI the raw material — what you do, what you\'re proud of, who you want to reach — and it will turn that into something compelling.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Get an honest outside read on your current profile.',
          body: [
            "Paste your headline and About section into AI and ask it to read both with the eyes of a recruiter in your industry. This isn\'t about judgment — it\'s about getting a clear picture of what\'s working and what isn\'t before you rewrite anything.",
          ],
          prompt: "I want you to read my LinkedIn headline and summary with the eyes of a recruiter or senior leader in my industry. Here's my current headline: [paste it]. Here's my current summary: [paste it]. Tell me honestly: what impression does this create? What's missing? What should I change first to make someone want to read further?",
          body2: "Pay attention to the first thing AI identifies as missing or unclear. That\'s almost always the most important thing to fix. In the next lesson, you\'ll use AI to actually rewrite both sections.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: 'Your profile is an asset. Right now, it may not be earning its keep.',
          body: [
            "Seven seconds. Headline, photo, first two lines. If those elements don\'t clearly communicate your value, the rest of your profile doesn\'t matter. Now you know what a recruiter sees — and you know what to fix.",
            'Next lesson: using AI to rewrite your headline and About section so they actually work.',
          ],
          summaryList: [
            'Recruiters spend 7 seconds scanning — headline and opening About lines do all the work',
            'Three questions your profile must answer: what you do, proof you\'re good at it, value you bring',
            'Most common mistakes: generic headline, duty-based experience, no evidence of impact',
            'AI can read your profile like a stranger and tell you exactly what\'s missing',
          ],
        },
      ],
    },
    {
      id: 1,
      title: 'Rewrite Your Headline and About Section',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 3 · Lesson 2',
          icon: '✍️',
          title: 'Your headline is your most valuable career real estate. Most people waste it.',
          body: [
            "On LinkedIn, your headline appears everywhere: in search results, next to every comment you leave, in recruiter inboxes, and at the top of your profile. It\'s the single most-viewed piece of text on your entire professional presence.",
            "And most people fill it with their job title — which tells a stranger nothing about why they\'re worth paying attention to. You can do better than that in one sentence.",
          ],
          sub: 'This lesson gives you the formula — and AI does the writing.',
        },
        {
          type: 'concept',
          eyebrow: 'The headline formula',
          icon: '🔣',
          title: 'What you do + the impact you drive + who you serve.',
          body: [
            "A strong LinkedIn headline combines three elements: it names what you do (not just your title), the outcome or impact you create for others, and optionally, who you serve or work with. You don\'t need all three — but the more you include, the more differentiated you become.",
            "\"Senior Marketing Manager\" tells someone your title. \"Marketing leader helping B2B SaaS companies turn pipeline into revenue\" tells them your title, your focus, and your value in under 12 words. That\'s a headline that stops a scroll.",
          ],
          highlight: 'What you do + outcome you drive + who you serve = a headline that actually differentiates you.',
        },
        {
          type: 'concept',
          eyebrow: 'About section: the real purpose',
          icon: '📝',
          title: 'Not a resume in paragraph form. A first-person case for why you matter.',
          body: [
            "The About section (also called your summary) is not a place to restate your resume in paragraph form. It\'s the only section on LinkedIn where you speak directly, in your own voice, to whoever is reading.",
            "A strong About section tells your professional story, makes a clear case for the value you bring, and ends with a signal about what you\'re looking for or open to. It reads like a person wrote it — because it should.",
          ],
          list: {
            items: [
              '<strong>Paragraph 1:</strong> What you do and why it matters — the value you create, not your job description',
              '<strong>Paragraph 2:</strong> What you\'re proud of — 1–2 specific things you\'ve accomplished, with evidence if you have it',
              '<strong>Paragraph 3:</strong> What you\'re looking for or open to — a clear signal about what comes next',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Common About section mistakes',
          icon: '🚫',
          title: 'What to avoid when you rewrite.',
          body: [
            "The About section is where the most generic LinkedIn writing lives. Here are the patterns to actively avoid:",
          ],
          list: {
            items: [
              'Starting with "I am a results-driven, highly motivated professional" — skip to something real',
              'Third person ("John is a seasoned leader...") — sounds corporate and distant in a first-person section',
              'Listing your job duties — the Experience section already has those',
              'No specific outcomes or numbers — "delivered results" is meaningless; "cut onboarding time by 40%" is not',
              'Ending without a call to action or signal — what are you actually looking for?',
            ],
            negative: true,
          },
        },
        {
          type: 'concept',
          eyebrow: 'The raw material AI needs',
          icon: '🧱',
          title: 'Give AI the ingredients — it assembles the story.',
          body: [
            "You don\'t need to be a great writer to have a great LinkedIn profile. You need to be able to answer four questions about yourself — and then let AI turn those answers into polished copy.",
            "The four things AI needs from you: what you actually do day to day and what outcomes you create, what you\'re proud of (1–2 specific accomplishments), who you work with or want to work with, and what you\'re open to or looking for next. That\'s it. Everything else, AI can handle.",
          ],
          highlight: 'Your job is to give AI the real material. Its job is to make it sound like a professional wrote it.',
        },
        {
          type: 'concept',
          eyebrow: 'The 120-character rule',
          icon: '📏',
          title: 'LinkedIn shows roughly 120 characters before cutting off your headline.',
          body: [
            "On mobile — where most LinkedIn browsing happens — your headline gets truncated after about 120 characters. That means every word counts, and the best version of your value proposition needs to land in that window.",
            "When AI generates headline options for you, the goal is to pick the one that delivers the most punch within those 120 characters. Longer is almost never better. The constraint forces clarity.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Rewrite your headline and About section with AI.',
          body: [
            "Give AI the raw material about your work and what you\'re proud of. It will generate three headline options and a full three-paragraph About section. You\'ll edit — but you won\'t start from a blank page.",
          ],
          prompt: "I want to rewrite my LinkedIn headline and About section. Here's what I do: I'm a [job title] who [describe what you actually do day to day and what outcomes you create]. Here's what I'm proud of: [1-2 specific things you've accomplished]. Here's who I work with or who I want to work with: [describe]. Write me: 1) Three headline options (under 120 characters each) that go beyond just my job title. 2) A 3-paragraph About section that reads naturally, leads with value, and ends with what I'm looking for or open to.",
          body2: "Read each headline out loud. Pick the one that sounds most like something you\'d actually say. Then read the About section and mark any sentence that doesn\'t sound like you — ask AI to rewrite those in a more natural tone.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: 'Two sections updated. Your profile now works for you.',
          body: [
            "A clear, specific headline and a human-sounding About section do more for your professional presence than anything else on LinkedIn. You\'ve now done the work that most people never get around to.",
            "Next lesson: showing up as a voice in your field — thought leadership without the cringe.",
          ],
          summaryList: [
            'Headline formula: what you do + the outcome you drive + who you serve',
            'About section: value you create → specific accomplishment → what you\'re open to',
            'Give AI the raw material — your job isn\'t to write, it\'s to supply the real details',
            'Read every AI draft out loud — edit anything that doesn\'t sound like you',
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Thought Leadership Without the Cringe',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 3 · Lesson 3',
          icon: '💬',
          title: '"Thought leadership" sounds exhausting. The practical version isn\'t.',
          body: [
            "The phrase makes most people cringe — it conjures images of self-promotional posts, vague inspiration, and people announcing how honored they are to be named to lists you\'ve never heard of.",
            "But there\'s a practical version that has nothing to do with personal branding for its own sake: sharing one real observation from your actual work, once a week, in plain language. That\'s it. And it turns out to be quietly powerful over time.",
          ],
          sub: 'This lesson is about the version of thought leadership that doesn\'t make you want to close the app.',
        },
        {
          type: 'concept',
          eyebrow: 'Why it actually matters',
          icon: '📡',
          title: 'Showing up consistently makes you findable when the right opportunity comes along.',
          body: [
            "The goal isn\'t to build a personal brand for its own sake. The goal is to be visible and credible when the right person — a recruiter, a potential client, a decision-maker — is looking. Most professionals are invisible online. The bar for standing out is low.",
            "Consistent, specific posting in your area of expertise means that when someone Googles you or lands on your LinkedIn, there\'s evidence you know what you\'re talking about. That\'s not vanity. That\'s positioning.",
          ],
          highlight: 'You\'re not posting to get likes. You\'re posting so the right people can find evidence you\'re worth talking to.',
        },
        {
          type: 'concept',
          eyebrow: 'What actually works',
          icon: '✅',
          title: 'Five types of posts that consistently perform — and feel real to write.',
          body: [
            "The LinkedIn content that gets genuine engagement comes from real experience, not from trying to sound impressive. Here are the five types that work — and that you already have the material for:",
          ],
          list: {
            items: [
              '<strong>Specific observations from real work:</strong> "Something interesting happened in a client call this week..."',
              '<strong>Lessons learned from mistakes:</strong> "I got this wrong for years before I figured out why"',
              '<strong>Simple frameworks you use:</strong> "Here\'s the three-question checklist I run before every presentation"',
              '<strong>Honest takes on industry trends:</strong> "Everyone is saying X. Here\'s what I actually think"',
              '<strong>Short case studies:</strong> "We tried something new last quarter. Here\'s what happened and what we\'d do differently"',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'What doesn\'t work',
          icon: '🚫',
          title: 'The content that gets ignored — or quietly damages your credibility.',
          body: [
            "Not all LinkedIn content is equal. The types of posts that feel like thought leadership but consistently underperform — or worse, make readers roll their eyes:",
          ],
          list: {
            items: [
              'Motivational quotes that have nothing to do with your actual work',
              'Vague inspiration ("Success doesn\'t happen overnight...") without a specific example',
              'Posts that are about the post itself ("Excited to share some thoughts on...")',
              'Empty validation fishing ("What do you think?") without anything real to react to',
              'Corporate-speak about your company\'s values without a real story attached',
            ],
            negative: true,
          },
        },
        {
          type: 'concept',
          eyebrow: 'The AI shortcut',
          icon: '⚡',
          title: 'You have the observation. AI turns it into a post.',
          body: [
            "The biggest barrier to posting consistently isn\'t ideas — it\'s the friction of turning a thought into a piece of writing. AI removes that friction. You supply the raw observation — something that happened, something you noticed, something you\'ve been thinking about — and AI drafts the post.",
            "The key is giving AI the real, specific observation. A genuine moment from a client meeting is better raw material than a generic topic. The more specific the input, the more real and readable the output.",
          ],
          highlight: 'You\'re not asking AI to make up something to say. You\'re asking it to help you say what you already noticed.',
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Turn a real work observation into a LinkedIn post.',
          body: [
            "Think of something that actually happened or something you noticed in the last week or two at work. It doesn\'t have to be dramatic — a small insight, a conversation that got you thinking, a mistake you watched unfold. Give AI the raw observation and let it draft the post.",
          ],
          prompt: "I want to write a LinkedIn post based on something real from my work this week. Here's what happened or what I observed: [describe it in 2–3 sentences — a client conversation, something that worked, a mistake you made, an industry observation]. Write me a LinkedIn post that: sounds like a real person talking, leads with the most interesting or specific part, is 150–250 words, and ends with a question or observation that invites responses.",
          body2: "Read the draft and ask: does the first sentence make me want to keep reading? If not, tell AI: \"The opening is too generic — start with the most specific or surprising detail instead.\" The opening line is everything on LinkedIn.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: 'One real observation, once a week. That\'s a thought leadership strategy.',
          body: [
            "You don\'t need to be prolific. You don\'t need to have extraordinary insights. You just need to show up consistently with something specific and real. AI removes the writing barrier so the only thing between you and a post is the observation itself.",
            'Next lesson: making sure AI-assisted content actually sounds like you.',
          ],
          summaryList: [
            'Thought leadership isn\'t about personal branding — it\'s about being findable and credible',
            'Best-performing post types: real observations, lessons from mistakes, simple frameworks, honest takes',
            'Avoid: motivational quotes, vague inspiration, corporate-speak without a real story',
            'Give AI the specific observation — it handles the writing; you handle the insight',
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Writing That Sounds Like You',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 3 · Lesson 4',
          icon: '🗣️',
          title: 'AI-assisted writing doesn\'t have to sound like AI wrote it.',
          body: [
            "The biggest fear people have about using AI for professional content is that it won\'t sound like them. Too formal. Too polished. Too corporate. Every sentence correct, and somehow nothing sounds like a real person said it.",
            "This fear is legitimate — but it\'s also solvable. The fix isn\'t to avoid AI. It\'s to train AI on your voice before you ask it to write anything.",
          ],
          sub: 'This lesson is about teaching AI to write the way you actually communicate.',
        },
        {
          type: 'concept',
          eyebrow: 'Why AI defaults to formal',
          icon: '🤖',
          title: 'Without guidance, AI aims for the average of all professional writing — which is bland.',
          body: [
            "AI has been trained on an enormous amount of professional writing — most of which is formal, hedged, and cautious. Without direction, it gravitates toward that average: complete sentences, measured tone, language that offends no one.",
            "The problem is that no one actually writes like that in real life. Your emails have a rhythm. Your Slack messages have personality. Your voice is specific — and that specificity is what makes your writing recognizable and worth reading.",
          ],
          highlight: 'The default is "professional average." Your goal is to break out of that with a few targeted instructions.',
        },
        {
          type: 'concept',
          eyebrow: 'The voice-training method',
          icon: '🎤',
          title: 'Paste three samples of your own writing. Let AI analyze the pattern.',
          body: [
            "The most reliable way to get AI to write in your voice is to show it what your voice sounds like. Paste in three or four samples of writing you\'ve done — emails, texts, Slack messages, anything where you were writing naturally and not performing.",
            "Ask AI to describe your writing style in five words or phrases. That description becomes your reference point. From then on, you can use \"match my voice\" or \"write in the style we discussed\" as a shorthand in any session where you paste the samples at the start.",
          ],
          list: {
            items: [
              'Paste 3–4 samples of your natural writing (emails, messages — not formal reports)',
              'Ask AI to describe your voice in 5 words or phrases',
              'Use that description as a standing instruction in writing sessions',
              '"Write this in the voice you analyzed from my samples" becomes a reliable shortcut',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Voice descriptors that work',
          icon: '🎨',
          title: 'You can also describe your style without samples — if you know what it is.',
          body: [
            "If you have a clear sense of how you communicate, you can give AI voice instructions in plain language without samples. Some descriptors that are specific enough to actually change the output:",
          ],
          list: {
            items: [
              '"Direct and warm — I get to the point but I\'m not abrupt"',
              '"Conversational, not formal — I write how I talk"',
              '"Short sentences. I don\'t use filler phrases or corporate jargon."',
              '"I use contractions. I\'m never stuffy."',
              '"I sometimes start sentences with And or But. That\'s intentional."',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'The edit-back technique',
          icon: '✏️',
          title: 'When the draft doesn\'t sound like you — mark it and fix it.',
          body: [
            "Even with voice training, sometimes a draft comes out slightly off. The fastest fix: read it out loud, mark the sentences that don\'t sound like you, and paste them back to AI with the instruction: \"These specific sentences sound too formal — rewrite them in a more natural, conversational tone.\"",
            "This two-pass approach — AI drafts, you mark what\'s off, AI adjusts — takes about five minutes and almost always lands somewhere you\'re comfortable putting your name on.",
          ],
          highlight: 'Read it out loud. Anything you\'d never actually say is a sentence to flag for revision.',
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Teach AI your voice — and test it immediately.',
          body: [
            "Find three samples of your own natural writing — emails, texts, anything where you were just communicating, not performing. Paste them in, get AI to describe your voice, then immediately test it by having it rewrite a generic draft in your style.",
          ],
          prompt: "I want you to learn my writing voice so you can help me write LinkedIn posts and professional content that sounds genuinely like me. Here are three examples of how I naturally write — these could be emails, texts, or anything casual I've written: [paste 3 short examples]. Based on these, describe my writing voice in 5 words. Then rewrite this draft in my voice: [paste a generic AI-sounding draft or simple description of what you want to say].",
          body2: "Compare the rewritten version to the original draft. Notice specifically what changed — sentence length, word choice, energy. Those changes are what your voice-training is doing. Save those five descriptor words for any future writing session.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: 'AI can write in your voice. You just have to teach it what that sounds like.',
          body: [
            "Your voice is an asset. The best professional content doesn\'t sound like it was generated — it sounds like a specific person with a specific perspective said something worth reading. Training AI on your voice is how you keep that, even with AI assistance.",
            'Last lesson: the system for showing up every week without it feeling like a second job.',
          ],
          summaryList: [
            'Paste 3–4 samples of your natural writing so AI can learn your voice pattern',
            'Ask AI to describe your style in 5 words — use those as a standing prompt',
            'Voice descriptors work too: "direct and warm," "conversational, not formal," "short sentences"',
            'Read every draft out loud — flag anything you\'d never actually say, then ask AI to revise',
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Showing Up Every Week',
      meta: '9 slides · ~7 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 3 · Lesson 5',
          icon: '📅',
          title: 'Consistency beats brilliance — every time.',
          body: [
            "The professionals who build real visibility on LinkedIn aren\'t the ones who occasionally post something exceptional. They\'re the ones who show up every week with something real, specific, and useful — even when it\'s modest.",
            "One post a week is all it takes. Over a year, that\'s 52 touchpoints with your network — 52 reminders that you exist, you think, and you have something worth paying attention to. AI makes that sustainable without consuming your Sunday.",
          ],
          sub: 'This lesson is about building the system, not just the habit.',
        },
        {
          type: 'concept',
          eyebrow: 'The four post types',
          icon: '🔄',
          title: 'Four categories you can rotate through without ever running out of material.',
          body: [
            "Content paralysis — staring at a blank box trying to think of something worth posting — disappears when you have four reliable post categories to choose from. Pick one, fill in the details from your actual week, and you have a post.",
          ],
          list: {
            items: [
              '<strong>Industry observation:</strong> Something you noticed about a trend, a change, or a pattern in your field',
              '<strong>Lesson learned:</strong> Something you got wrong, something that surprised you, or something you\'d do differently now',
              '<strong>Simple how-to:</strong> One process, checklist, or framework you use that others in your field might not know about',
              '<strong>Personal story with a professional lesson:</strong> A real moment from your work that taught you something specific',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Batch drafting',
          icon: '📦',
          title: 'Write four posts at once on Sunday. Post one each week.',
          body: [
            "The most reliable content systems use batch drafting — spending one focused session producing a week\'s worth of content in advance rather than trying to write something new every day or every week.",
            "With AI, this takes about 30–45 minutes. You pick your four post types, supply the raw observations from your week (or the past month), let AI draft all four, do your edits, and schedule them. Then you\'re done for the month.",
          ],
          highlight: 'One batch session per month produces four weeks of consistent, quality posts — without the daily pressure.',
        },
        {
          type: 'concept',
          eyebrow: 'The simple content calendar',
          icon: '🗓️',
          title: 'A four-week rotation you can reuse indefinitely.',
          body: [
            "The simplest version of a LinkedIn content calendar is a four-week rotation. Week 1: industry observation. Week 2: lesson learned. Week 3: simple how-to. Week 4: personal story with professional lesson. Repeat.",
            "This rotation keeps your content varied without requiring you to invent a new format every time. You\'re not reinventing the wheel each month — you\'re filling in the same four reliable templates with new, real material from your actual work.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'The compounding effect',
          icon: '📈',
          title: 'Month 1 has no visible results. Month 6 changes how people see you.',
          body: [
            "Visibility on LinkedIn doesn\'t compound like a viral post — it compounds like a savings account. Each post adds incrementally to how many people see your name, recognize your perspective, and think of you when an opportunity comes up.",
            "At six months of consistent posting, professionals routinely report that recruiters start reaching out, opportunities come inbound instead of requiring cold outreach, and their network starts actively engaging with their content. None of that happens in week one. All of it happens with consistency over time.",
          ],
          highlight: 'The people who benefit most from LinkedIn visibility are the ones who started six months ago. The second best time is now.',
        },
        {
          type: 'concept',
          eyebrow: 'Batch drafting with AI',
          icon: '🤖',
          title: 'How to draft four posts at once in a single session.',
          body: [
            "Use AI to batch-draft your four monthly posts in one sitting. Give it your four topics (one per post type), your voice instructions or samples, and ask it to draft all four at once. You\'ll edit them, but the heavy lifting is done.",
            "The session prompt works like this: supply your four raw observations or topics — one for each post type — along with your voice description or samples from Lesson 4. AI drafts all four. You spend 10–15 minutes editing. Done for the month.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Batch-draft four posts for your next month of LinkedIn content.',
          body: [
            "Think of one real observation or story for each of the four post types. Supply them to AI along with your voice instructions and ask for all four drafts at once. You\'ll have a month of content in one session.",
          ],
          prompt: "I want to batch-draft four LinkedIn posts — one for each of these types. Here's the raw material for each:\n\n1. Industry observation: [describe something you've noticed in your field recently]\n2. Lesson learned: [describe a mistake, surprise, or thing you'd do differently]\n3. Simple how-to: [describe a process, checklist, or framework you use at work]\n4. Personal story with professional lesson: [describe a real moment from your work that taught you something]\n\nMy voice: [paste your voice description from Lesson 4, or describe your style briefly]\n\nFor each post: 150–250 words, leads with the most specific or interesting detail, ends with a question or observation that invites a response. Sound like a real person — not a press release.",
          body2: "After you get all four drafts, read each out loud and mark anything that doesn\'t sound like you. Do your edits. You now have four posts ready to go — one per week for the next month.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 3 Complete',
          icon: '🎉',
          title: 'Your brand is working for you now — even when you\'re not actively looking.',
          body: [
            "You have a sharper profile, a defined voice, and a repeatable system for showing up consistently. None of this requires being a writer or a marketer. It requires showing up with something real, once a week, with AI handling the friction.",
            'Your professional brand is now an active asset — not an afterthought.',
          ],
          summaryList: [
            'One post per week is enough — consistency beats brilliance over time',
            'Four post types to rotate: observation, lesson learned, how-to, personal story',
            'Batch-draft four posts in one session monthly — AI handles the writing, you handle the insight',
            'The compounding effect takes 3–6 months — the professionals who benefit most started early',
          ],
          gradBlock: {
            icon: '✨',
            title: 'Your Brand Is Working for You Now',
            body: "Your LinkedIn profile is sharper, your voice is defined, and you have a repeatable system for showing up consistently. Your professional brand is now an active asset — not an afterthought.",
            name: 'Module 3 Complete',
          },
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'What is the biggest mistake most professionals make on LinkedIn?',
      options: [
        'Posting too infrequently to build any visibility',
        'Using a generic headline and summary that describes the job, not the value they bring',
        'Having too much experience listed in the Experience section',
        'Not connecting with enough people in their industry',
      ],
      correct: 1,
      feedback: 'A generic headline and a summary that reads like a job description are the two highest-impact problems on most LinkedIn profiles. Recruiters make snap judgments in 7 seconds — if your headline is just your job title and your summary starts with "results-driven professional," you\'ve already lost them.',
    },
    {
      q: 'What makes a LinkedIn headline effective?',
      options: [
        'Including your full job title, company name, and years of experience',
        'Being as detailed as possible — the longer the better',
        'It names what you do + the outcome or impact you create, beyond just your job title',
        'Matching the exact phrasing that recruiters use in their job postings',
      ],
      correct: 2,
      feedback: 'A strong headline goes beyond a job title to communicate the value you create. "Marketing Manager" tells someone your title. "Marketing leader helping B2B SaaS companies turn pipeline into revenue" tells them what you do and why it matters — in under 120 characters.',
    },
    {
      q: 'What type of LinkedIn content consistently performs best?',
      options: [
        'Motivational quotes paired with a professional photo',
        'Announcements about your company\'s recent achievements',
        'Specific, real observations from actual work — not generic inspiration or empty motivation',
        'Polls that ask your network to vote on industry topics',
      ],
      correct: 2,
      feedback: 'Specific, real content wins every time. A post that starts "Something happened in a client call this week..." performs dramatically better than generic inspiration or corporate announcements — because it sounds like a real person said something they actually noticed.',
    },
    {
      q: 'How can you ensure AI-assisted content sounds like you?',
      options: [
        'Ask AI to write in "professional tone" every time',
        'Review the content carefully and approve anything that sounds reasonable',
        'Provide your own writing samples so AI can match your voice and style',
        'Only use AI for the first draft and rewrite everything from scratch yourself',
      ],
      correct: 2,
      feedback: 'Giving AI samples of your natural writing — emails, messages, anything where you were communicating, not performing — is how you teach it your voice. Ask it to describe your style in five words. That description becomes a standing instruction for every writing session.',
    },
    {
      q: 'What is the most sustainable LinkedIn publishing cadence for a busy professional?',
      options: [
        'Daily posts — the algorithm rewards high frequency',
        'Monthly posts — quality over quantity',
        'Whenever you have something brilliant to say — inspiration-driven',
        'One post per week — consistency matters more than frequency',
      ],
      correct: 3,
      feedback: 'One post per week is the cadence that builds real visibility without becoming a second job. It\'s sustainable, it keeps you consistently present in your network, and over 6–12 months it compounds into genuine professional presence. Batch drafting four posts per month in one AI-assisted session makes it achievable.',
    },
  ],
}

export default c6module3
