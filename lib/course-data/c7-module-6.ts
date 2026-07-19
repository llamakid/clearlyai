import type { CourseData } from './types'

const c7module6: CourseData = {
  moduleId: 42,
  title: 'Your Claude Habit',
  subtitle: 'Module 6',
  lessons: [
    {
      id: 0,
      title: 'Searching the Web With Claude',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 6 · Lesson 1',
          icon: '🌐',
          title: "Claude can look things up online — when you ask it to.",
          body: [
            "Back in Module 1 you learned that Claude isn't automatically up to the minute. Its built-in knowledge was learned up to a certain point, so on its own it won't know today's headlines or this week's prices.",
            "But there's a simple fix: Claude can search the web in real time when you ask. In this lesson you'll learn how to ask for current information — and how to get the source links so you can check it for yourself.",
          ],
          sub: "Old knowledge by default. Fresh answers the moment you ask it to search.",
        },
        {
          type: 'concept',
          eyebrow: 'The thing to remember',
          icon: '🕒',
          title: "By default, Claude answers from what it already learned — not from today.",
          body: [
            "When you ask Claude a question, it usually answers from the patterns and information it learned during training. That's perfect for explaining concepts, drafting, and reasoning — none of which change day to day.",
            "But for anything that <em>does</em> change — the news, prices, schedules, the latest version of a product — that built-in knowledge can be out of date. The good news is you don't have to guess whether it's current. You just tell Claude to go check.",
          ],
          highlight: "If your question depends on what's happening now, ask Claude to search the web for it.",
        },
        {
          type: 'concept',
          eyebrow: 'How to ask',
          icon: '🔎',
          title: "Just say the words: “search the web.”",
          body: [
            "You don't need a special button or setting. Add a short instruction to your message — “search the web,” “look this up online,” or “use current information” — and Claude will go out, find recent pages, and fold what it finds into its answer.",
            "For example: “Search the web and tell me the current visiting hours for the Springfield Public Library.” Claude does the looking; you get a fresh, written answer back instead of a list of links to dig through yourself.",
          ],
          highlight: "“Search the web for…” turns Claude from a knowledgeable friend into one who just looked it up.",
        },
        {
          type: 'concept',
          eyebrow: 'See where it came from',
          icon: '🔗',
          title: "Ask for the sources, and you can check the answer yourself.",
          body: [
            "When Claude searches the web, it can show you links to the pages it used — its sources. This is your verify habit made easy: you can click through and confirm the answer came from somewhere you trust.",
            "Just add “and include the source links” to your request. It's especially worth doing for anything you'll act on — a price you'll pay, a date you'll plan around, a recommendation you'll follow.",
          ],
          list: {
            items: [
              "<strong>Ask it to search</strong> — “search the web,” “look this up,” “use current info”",
              "<strong>Ask for sources</strong> — “include the links you used”",
              "<strong>Click through</strong> — open a source to confirm the important parts",
              "<strong>Note the date</strong> — ask “how recent is this?” when timing matters",
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'When searching helps — and when it doesn’t',
          title: "Search for what changes. Skip it for what doesn’t.",
          body: ["A quick gut-check for when to add “search the web” to your message:"],
          bad: {
            label: '💭 No search needed',
            text: 'Explaining a concept, drafting an email, brainstorming, summarizing text you pasted in, planning your own day — none of this depends on today’s information.',
          },
          good: {
            label: '🌐 Ask it to search',
            text: 'Recent news, current prices or availability, this season’s best options, a company’s latest hours, anything where “as of today” actually matters.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: "Ask a question only a web search could answer.",
          body: [
            "Pick something genuinely current — a recent event, a price, the latest recommendation in an area you care about. Then ask Claude to look it up online and show you where it found the answer.",
          ],
          prompt: "Search the web and tell me [your current question — e.g. the latest reviews of a product, recent news on a topic, current prices for something]. Summarize what you find in plain English, and include the source links so I can check them myself.",
          body2: "When the answer comes back, click one of the source links. You've just done the full loop — fresh information from Claude, confirmed by you. That's exactly how a confident user works.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: "You can get up-to-the-minute answers from Claude now.",
          body: [
            "Claude's built-in knowledge isn't current — but a simple “search the web” instruction sends it out to find fresh information, and asking for source links lets you verify it.",
            "Next lesson: a clear, practical rule for when to trust Claude outright and when to slow down and double-check.",
          ],
          summaryList: [
            "By default, Claude answers from what it already learned — not today's news",
            'Add “search the web” to get current, real-time information',
            'Ask for source links so you can confirm the answer yourself',
            'Search for what changes (news, prices, hours); skip it for drafting and explaining',
          ],
        },
      ],
    },
    {
      id: 1,
      title: 'When to Trust Claude — and When to Double-Check',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 6 · Lesson 2',
          icon: '⚖️',
          title: "The most valuable habit in this whole course: knowing what to verify.",
          body: [
            "You met this idea back in Module 1 — Claude can be confidently wrong. Now we'll turn it into a simple, automatic instinct you carry into every conversation.",
            "The goal isn't to be nervous around Claude. It's the opposite: when you know exactly what to check, you can trust everything else completely and use Claude with total confidence.",
          ],
          sub: "Verify the few things that matter, and you can relax about everything else.",
        },
        {
          type: 'concept',
          eyebrow: 'Trust it freely here',
          icon: '🟢',
          title: "For words, ideas, and your own material — just go.",
          body: [
            "When Claude is drafting an email, brainstorming options, explaining a concept, or working with text <em>you</em> gave it, there's nothing to fact-check. You can read the result and use your own judgment, the same way you would with a helpful colleague's first draft.",
            "These are the things Claude is genuinely best at. You don't need to verify whether an email sounds warm enough — you can just feel it. Trust your own eyes here and move fast.",
          ],
          highlight: "Drafting, brainstorming, explaining, summarizing your text — no fact-checking required.",
        },
        {
          type: 'concept',
          eyebrow: 'Slow down here',
          icon: '🔴',
          title: "For facts, numbers, names, and dates — double-check.",
          body: [
            "Anything Claude presents as a fact about the outside world deserves a second look: a date, a statistic, a person's name, a quote, a price, a phone number. Claude can state these in the same calm, confident tone whether they're right or invented.",
            "The rule of thumb: <strong>if you'd act on it or pass it along as true, verify it first.</strong> A quick web search (which you now know how to ask Claude for) or a trusted source takes seconds and saves you from a confident-sounding mistake.",
          ],
          highlight: "If you'd act on it or repeat it as fact — facts, numbers, names, dates — check it first.",
        },
        {
          type: 'concept',
          eyebrow: 'High-stakes means extra care',
          icon: '🛑',
          title: "The higher the stakes, the more you verify.",
          body: [
            "Some answers carry real consequences — anything touching your money, your health, your legal situation, or a decision that's hard to undo. For these, Claude is a great <em>starting point</em> for understanding your options, but never your final word.",
            "Use it to get oriented, to learn the right questions to ask, and to prepare for a conversation with a real professional. Then take the important stuff to a doctor, an accountant, or a lawyer.",
          ],
          list: {
            items: [
              "<strong>Money</strong> — taxes, investments, big purchases: confirm with a professional",
              "<strong>Health</strong> — symptoms, medications, treatment: confirm with a clinician",
              "<strong>Legal</strong> — contracts, rights, disputes: confirm with a lawyer",
              "<strong>Hard to undo</strong> — anything you can't easily take back: verify before acting",
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'The same answer, two responses',
          title: "Same calm tone — but only one half needs checking.",
          bad: {
            label: '🔴 Verify this part',
            text: '“The museum opened in 1924 and tickets are $18.” — A date and a price. Both are facts about the world. Check them before you rely on them.',
          },
          good: {
            label: '🟢 Trust this part',
            text: '“Here’s a friendly two-line message asking whether they offer a senior discount.” — A draft for you to read and use. Nothing to fact-check; just see if you like it.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: "Make Claude flag its own facts for you.",
          body: [
            "You can hand the verify step partly back to Claude. Ask it to point out exactly which parts of its answer you should double-check — it's surprisingly good at this, and it builds the habit for you.",
          ],
          prompt: "Answer this for me: [your question]. Then, at the end, give me a short list titled “Worth double-checking” of any facts, numbers, names, or dates in your answer that I should verify from a reliable source before I rely on them.",
          body2: "Read its “Worth double-checking” list, then verify one item with a quick web search. Do this a few times and the instinct becomes automatic — you'll spot the checkable bits without even asking.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: "You know exactly when to trust and when to check.",
          body: [
            "Trust Claude freely for drafting, brainstorming, explaining, and working with your own text. Double-check facts, numbers, names, and dates — and bring anything high-stakes to a real professional.",
            "Next lesson: a few simple habits to keep yourself safe and smart while you use Claude.",
          ],
          summaryList: [
            'Trust it freely: drafting, brainstorming, explaining, summarizing your own text',
            'Double-check facts, numbers, names, dates, and quotes',
            "If you'd act on it or repeat it as true, verify it first",
            'High-stakes money, health, or legal questions: confirm with a professional',
            'Ask Claude to flag what’s worth double-checking',
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Staying Safe and Smart',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 6 · Lesson 3',
          icon: '🛡️',
          title: "A few simple habits keep you safe — no fear required.",
          body: [
            "Using Claude is safe and ordinary, like using email or a search engine. But a handful of sensible habits make sure you stay in control and never get caught out.",
            "This isn't about being scared of AI. It's about being smart with it — the same common sense you already use online, applied to a new tool.",
          ],
          sub: "Healthy habits, not worry. You're in charge of what Claude sees and how you use it.",
        },
        {
          type: 'concept',
          eyebrow: 'Habit one',
          icon: '🔒',
          title: "Keep sensitive personal details out of your chats.",
          body: [
            "There's no need to type things like your full Social Security number, bank account or card numbers, passwords, or other people's private information into a conversation. Claude doesn't need them to be helpful.",
            "If you want help with, say, a bank letter, you can describe the situation or remove the account numbers first. Treat a chat the way you'd treat writing on a notepad you might leave on a desk: share what's useful, hold back what's truly private.",
          ],
          highlight: "When in doubt, leave it out. Claude can help just as well without your most private details.",
        },
        {
          type: 'concept',
          eyebrow: 'Habit two',
          icon: '🧐',
          title: "Be extra skeptical of anything you'd act on financially, legally, or medically.",
          body: [
            "This is the verify habit from the last lesson, aimed at the things that matter most. Claude is wonderful for understanding your options and preparing your questions — but it is not your doctor, accountant, or attorney.",
            "Before you spend money, sign something, take a medication, or make a legal move based on what Claude said, run it by a qualified human. Use Claude to walk in informed, not to replace the professional.",
          ],
          highlight: "Claude helps you prepare for the expert — it doesn't replace the expert.",
        },
        {
          type: 'concept',
          eyebrow: 'Habit three',
          icon: '⚠️',
          title: "Remember that Claude can be wrong — even when it sounds sure.",
          body: [
            "You've heard this throughout the course because it's the single most important thing to keep in mind. Claude can state something incorrect in the same confident, friendly tone it uses for everything else.",
            "That doesn't make it untrustworthy — it makes it a tool you stay alert with. Keep your own judgment switched on, and you get all the benefit with none of the surprises.",
          ],
          list: {
            items: [
              "<strong>Guard your private info</strong> — no account numbers, passwords, or SSNs",
              "<strong>Verify high-stakes advice</strong> — money, health, and legal go to a pro",
              "<strong>Stay skeptical of confident claims</strong> — confidence isn't proof",
              "<strong>Keep your judgment on</strong> — you're the final decision-maker, always",
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'Two ways to use the same tool',
          title: "Same Claude — one habit keeps you safe, the other gets you burned.",
          bad: {
            label: '❌ Risky habit',
            text: 'Pasting in your full account number, taking medical or legal advice as final, and acting on a confident answer without ever checking it.',
          },
          good: {
            label: '✅ Smart habit',
            text: 'Describing the situation without private numbers, using Claude to prepare for a professional, and verifying anything important before you act.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: "Practice getting help without oversharing.",
          body: [
            "Try the safe version of a real task. Notice that you can get full, useful help while keeping your private details to yourself — just describe the situation instead of pasting the sensitive parts.",
          ],
          prompt: "I got a confusing letter from my bank about a fee. I'm not going to share account numbers — here's the gist: [describe the situation in your own words, no private details]. Explain in plain English what it likely means and what questions I should ask when I call them.",
          body2: "See how complete the help is even without any private information? That's the model for every chat: share the situation, hold back what's truly yours, and stay the one in charge.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: "You know how to use Claude safely and confidently.",
          body: [
            "Keep your most private details out of chats, treat high-stakes advice as a starting point for a real professional, and remember that a confident tone isn't proof. None of this is about fear — it's about staying in control.",
            "Next lesson: how to turn Claude from something you tried into something you actually use, every day.",
          ],
          summaryList: [
            'Keep sensitive personal info — account numbers, passwords, SSNs — out of chats',
            'Take financial, legal, and medical advice to a qualified professional',
            'Stay skeptical of confident claims — confidence isn’t correctness',
            'Keep your own judgment on; you’re always the final decision-maker',
            "It's healthy habits, not fear — you stay in control",
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Building Claude Into Your Day',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 6 · Lesson 4',
          icon: '📅',
          title: "The real magic isn't one great session — it's the habit.",
          body: [
            "You've learned what Claude can do. The people who get the most from it aren't the ones who use it for an hour once a month — they're the ones who reach for it for small things, often.",
            "This lesson is about making Claude a natural part of your day, so using it stops being a decision and becomes a reflex.",
          ],
          sub: "Small and consistent beats big and occasional. Every time.",
        },
        {
          type: 'concept',
          eyebrow: 'Make it one click away',
          icon: '⭐',
          title: "Bookmark claude.ai so it's always right there.",
          body: [
            "The biggest reason people don't use a helpful tool is friction — having to remember where it lives and type the address. Remove that friction once and you remove it forever.",
            "Bookmark claude.ai in your browser, or pin it as a tab. On your phone, add the app to your home screen. When Claude is one tap away, you'll actually use it for the little things — and the little things are where it shines.",
          ],
          highlight: "One bookmark today means a hundred small wins over the months ahead.",
        },
        {
          type: 'concept',
          eyebrow: 'Pick your regulars',
          icon: '🔁',
          title: "Choose two or three recurring tasks to always bring to Claude.",
          body: [
            "Habits form around triggers. Pick a few tasks you do regularly and decide, right now, that those go to Claude every time. Maybe it's drafting your weekly update, or planning the week's dinners, or explaining anything confusing that lands in your inbox.",
            "Don't try to use Claude for everything at once. Two or three reliable habits will do more for you than a vague intention to “use AI more.” Once those feel automatic, you'll naturally add others.",
          ],
          highlight: "Pick 2–3 recurring tasks and make Claude the default for them. That's how the habit sticks.",
        },
        {
          type: 'concept',
          eyebrow: 'Keep what works',
          icon: '📝',
          title: "Save the prompts that worked so you never start from scratch.",
          body: [
            "When you find a message that gets you a great result, keep it. Drop it in a note on your phone, a document, or even a dedicated chat. Next time, you paste it in, swap a detail or two, and you're done.",
            "Over a few weeks you'll build your own little collection of go-to prompts — your personal toolkit. It makes every repeat task faster and removes the “what do I even type?” hesitation before it starts.",
          ],
          list: {
            items: [
              "<strong>Bookmark it</strong> — claude.ai one click away, app on your home screen",
              "<strong>Pick your regulars</strong> — 2–3 recurring tasks that always go to Claude",
              "<strong>Save your best prompts</strong> — keep a note of what worked",
              "<strong>Reuse and tweak</strong> — paste an old prompt, change a detail, go",
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'Two ways to use Claude',
          title: "Which of these actually builds a lasting habit?",
          bad: {
            label: '🐢 Occasional big session',
            text: 'You forget Claude exists for weeks, then sit down for one marathon session, feel rusty, and drift away again. The skill never sticks.',
          },
          good: {
            label: '🐇 Small and consistent',
            text: 'You reach for Claude for a quick email here, a question there, a plan on the weekend. It stays sharp, feels effortless, and becomes second nature.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: "Set up your habit in five minutes.",
          body: [
            "Do two quick things right now. First, bookmark claude.ai (and add the app to your phone if you'd like). Second, ask Claude to help you pick your recurring tasks using the prompt below.",
          ],
          prompt: "Here's a quick picture of my typical week: [a few sentences about your work, home life, and the small tasks you do regularly]. Suggest 3 recurring tasks I could bring to you every time to build a useful daily habit, and give me a ready-to-use starter prompt for each one.",
          body2: "Save the three starter prompts it gives you in a note titled “My Claude prompts.” That note is the seed of your personal toolkit — and your habit officially starts today.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: "You've turned Claude from a tool into a habit.",
          body: [
            "Bookmark it so it's always close, pick a few recurring tasks that always go to Claude, and keep a note of prompts that work. Small, consistent use is what makes the skill stick.",
            "Last lesson: a look at how far you've come, where the Clearly, AI path goes next, and a final challenge to lock it all in.",
          ],
          summaryList: [
            'Bookmark claude.ai and add the app to your phone — remove the friction',
            'Pick 2–3 recurring tasks that always go to Claude',
            'Save the prompts that work in a “My Claude prompts” note',
            'Small, consistent use beats occasional big sessions every time',
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Where to Go From Here',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 6 · Lesson 5',
          icon: '🎓',
          title: "Take a moment — you've done something real.",
          body: [
            "You started this course maybe a little unsure about AI, and you're finishing it able to hold a genuine conversation with Claude, steer it, verify it, and weave it into your day. That's a real, hard-won skill.",
            "This final lesson celebrates how far you've come, shows you where the path goes next, and leaves you with one challenge to make it all stick.",
          ],
          sub: "You set out to get comfortable with Claude. Look — you did it.",
        },
        {
          type: 'concept',
          eyebrow: 'Look how far you’ve come',
          icon: '🏆',
          title: "You're not a beginner anymore.",
          body: [
            "Six modules ago, Claude was a name you'd heard. Now you know what it is, how to talk to it, how to steer its tone and length, how to give it your own material to work with, when to search the web, and when to trust it versus check it.",
            "That's a complete, working foundation — the same toolkit confident everyday users rely on. Everything from here is just adding range to a skill you already own.",
          ],
          highlight: "You've built a real foundation. Claude is now a tool you genuinely know how to use.",
        },
        {
          type: 'concept',
          eyebrow: 'The path continues',
          icon: '🛤️',
          title: "The Clearly, AI Claude path keeps going when you're ready.",
          body: [
            "This course is the on-ramp. Two more courses are coming soon to take you further. The <strong>intermediate course</strong> goes deeper into everyday work with Claude — and introduces <strong>Claude Cowork</strong>, a desktop assistant that can carry out multi-step tasks for you, not just answer in a chat.",
            "After that, an <strong>advanced course</strong> opens up even more, including an introduction to <strong>Claude Code</strong> — a powerful way to put Claude to work on bigger projects. No need to rush there; this foundation serves you beautifully on its own.",
          ],
          list: {
            items: [
              "<strong>You are here</strong> — Getting Started with Claude (the foundation)",
              "<strong>Coming soon: Intermediate</strong> — deeper everyday work plus Claude Cowork, a desktop assistant for multi-step tasks",
              "<strong>Coming soon: Advanced</strong> — going further, including an introduction to Claude Code",
              "<strong>No rush</strong> — this foundation is genuinely useful all on its own",
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Explore the rest of the school',
          icon: '🧭',
          title: "There's a whole library of Clearly, AI courses waiting for you.",
          body: [
            "While you wait for the next Claude course, the rest of the Clearly, AI school is open to you — courses on using AI at work, in a small business, in retirement, and on writing better prompts. They all build on the same plain-English approach you've come to trust here.",
            "Your free account unlocks all of them. Browse the dashboard, pick whatever fits your life right now, and keep the momentum going.",
          ],
          highlight: "Your account unlocks every Clearly, AI course — explore whatever fits your life.",
        },
        {
          type: 'compare',
          eyebrow: 'Where you started, where you are',
          title: "Look at the distance you've traveled.",
          bad: {
            label: '📅 Module 1, day one',
            text: 'Curious but unsure. Heard of Claude, maybe nervous to type the wrong thing, not certain what it was for or whether to trust it.',
          },
          good: {
            label: '✅ Right now',
            text: 'Confident and capable. You converse, steer, give Claude your own material, search the web, verify what matters, and use it as a daily habit.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Your Final Challenge',
          icon: '🎯',
          title: "Use Claude every day for one week.",
          body: [
            "Knowledge fades; habits last. Your challenge is simple: open Claude once a day, every day, for the next seven days — even for something tiny. By day seven it won't feel like a task. It'll feel like reaching for a tool you've always had.",
          ],
          prompt: "I just finished a beginner course on using you, and my challenge is to use you every day for a week. Based on a typical week for me — [a sentence or two about your days] — give me a different small, genuinely useful task to try with you on each of the next 7 days.",
          body2: "Save that 7-day list and work through it one day at a time. When you reach day seven, the habit is yours for good — and you'll be ready for whatever comes next on the Clearly, AI path. Congratulations on finishing the course.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Course Complete',
          icon: '🎉',
          title: "You've finished Getting Started with Claude.",
          body: [
            "You can talk to Claude, steer it, give it your own material, search the web, know when to trust and when to verify, and you've built it into your day. That's the whole foundation — and it's genuinely yours now.",
            "When you're ready for more, the intermediate and advanced Claude courses are coming soon, and the rest of the Clearly, AI school is open to you today. For now: take the seven-day challenge, and enjoy your new skill.",
          ],
          summaryList: [
            "You've gone from curious beginner to confident everyday user",
            'The path continues with intermediate (Claude Cowork) and advanced (Claude Code) courses — coming soon',
            'Your account unlocks every other Clearly, AI course right now',
            'Take the 7-day challenge: use Claude once a day for a week',
            'Learn it. Use it. Own it. — you did all three',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: "You want to know the current opening hours for a local museum. What's the best way to ask Claude?",
      options: [
        'Just ask — Claude always knows the latest information automatically',
        'Tell Claude to search the web, and ask it to include the source links',
        "Don't ask Claude at all — it can never find current information",
        'Ask, then assume the first hours it gives you are definitely right',
      ],
      correct: 1,
      feedback:
        "By default Claude's knowledge isn't up to the minute, but it can search the web in real time when you ask. Add “search the web” to your message, and ask for the source links so you can click through and confirm the current hours yourself.",
    },
    {
      q: 'Which of these is the smartest, safest habit when using Claude?',
      options: [
        'Paste in your full bank account number so Claude has all the details',
        'Take Claude’s medical and legal answers as final, since it sounds confident',
        'Keep private details out of chats and verify high-stakes advice with a professional',
        'Believe everything Claude says as long as the tone is friendly',
      ],
      correct: 2,
      feedback:
        "Stay in control: keep sensitive personal details like account numbers out of your chats, and treat anything financial, legal, or medical as a starting point to confirm with a qualified professional. Claude can be confidently wrong, so your judgment stays the final word.",
    },
    {
      q: 'What’s the most reliable way to build a lasting Claude habit?',
      options: [
        'Use it for one long marathon session every few weeks',
        'Bookmark claude.ai, pick 2–3 recurring tasks for it, and use it in small ways often',
        'Only use Claude for the single biggest task you can find',
        'Wait until you’ve memorized every feature before using it again',
      ],
      correct: 1,
      feedback:
        "Small and consistent beats big and occasional. Bookmark claude.ai so it's one click away, choose two or three recurring tasks that always go to Claude, and save the prompts that work. Frequent little wins are what make the skill stick.",
    },
  ],
}

export default c7module6
