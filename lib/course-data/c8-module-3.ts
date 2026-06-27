import type { CourseData } from './types'

const c8module3: CourseData = {
  moduleId: 45,
  title: 'Connect Claude to Your Tools',
  subtitle: 'Module 3',
  nextModuleId: 46,
  lessons: [
    {
      id: 0,
      title: "What 'Connecting' Means",
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 3 · Lesson 1',
          icon: '🔌',
          title: 'Stop copying and pasting. Let Claude reach your tools directly.',
          body: [
            "Up to now, when you wanted Claude to work with something — an email, a calendar invite, a document — you had to copy it and paste it into the chat. That works, but it's slow, and you can only paste so much.",
            "There's a better way: <em>connecting</em>. A connection lets Claude reach into a tool you already use — like your email, your calendar, or your files — and pull in the real information it needs, right inside your conversation. No copying required.",
          ],
          sub: "Connecting is how Claude stops being a separate app and starts working with your actual stuff.",
        },
        {
          type: 'concept',
          eyebrow: 'The plain-English idea',
          icon: '🤝',
          title: 'A connection is permission for Claude to look something up for you.',
          body: [
            "Think of it like giving a trusted assistant a key to one drawer of your filing cabinet. You decide which drawer. Once they have that key, you can simply say “grab the Henderson file” instead of finding it and handing it over yourself.",
            "A connection works the same way. You authorize Claude to reach one specific tool — say, your calendar. From then on, you can ask about your calendar in plain language, and Claude can actually go and look, instead of waiting for you to paste things in.",
          ],
          highlight: "A connection isn't Claude taking over your accounts. It's you handing it one key, for one drawer, on purpose.",
        },
        {
          type: 'concept',
          eyebrow: 'What you can connect',
          icon: '🧰',
          title: 'The tools you already live in — email, calendar, files, and more.',
          body: [
            "The whole point is to meet you where your work already is. Anthropic calls these connections <strong>connectors</strong>, and they link Claude to common everyday tools. Exactly which ones are available depends on your plan and changes over time, so the best source of truth is your own Claude settings.",
            "Here are the kinds of tools connectors commonly cover — the everyday hubs where your real information lives:",
          ],
          list: {
            items: [
              "<strong>Your email</strong> (such as Gmail) — the messages flowing in and out all day",
              "<strong>Your calendar</strong> (such as Google Calendar) — what's coming up and when",
              "<strong>Your files</strong> (such as Google Drive) — documents, spreadsheets, contracts",
              "<strong>Your team chat</strong> (such as Slack) — conversations and updates with colleagues",
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'A quick, honest note on plans',
          icon: '💳',
          title: 'Connecting tools is generally part of Claude\'s paid plans.',
          body: [
            "Connectors are one of the more powerful features, and they're generally part of Claude's paid plans rather than the free tier. You don't need to upgrade just to learn how this works — but to actually connect your own email or calendar, you'll likely need a paid plan.",
            "Availability also shifts over time, and not every tool is supported on every plan. So rather than promise you a specific button or tool, we'll teach the <em>idea</em> — and point you to check your own Claude settings to see what's available to you right now.",
          ],
          highlight: "The skill you're learning is evergreen. The exact list of available connectors will keep changing — always check your own settings.",
        },
        {
          type: 'compare',
          eyebrow: 'The difference connecting makes',
          title: 'The same question, with and without a connection.',
          bad: {
            label: '❌ No connection',
            text: '"What did Maria email me about the budget?" → Claude has no idea — you have to go find the email, copy it, paste it back in, and then ask.',
          },
          good: {
            label: '✅ Email connected',
            text: '"What did Maria email me about the budget?" → Claude looks in your connected email, finds the message, and summarizes it for you — no copying, no switching apps.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Have Claude help you decide what\'s worth connecting.',
          body: [
            "Before you connect anything, it helps to know which tool would save you the most copying and pasting. Paste the prompt below and let Claude help you spot the best candidate for your first connection.",
          ],
          prompt: "I'm learning about connecting you to my everyday tools like email, calendar, and files. Here's how I spend a typical work week: [briefly describe your main tasks and where your information lives]. Based on this, which one tool would save me the most copying and pasting if I connected it to you first, and what kinds of things could I then ask you to do?",
          body2: "Keep Claude's answer in mind — that single tool is the one we'll walk through connecting in the next lesson. You've just picked your starting point.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: 'You understand what connecting actually means.',
          body: [
            "A connection is simply permission for Claude to reach one of the tools you already use and pull in real information, so you stop copying and pasting. It's the bridge between Claude and your actual work.",
            "Next lesson: the practical side — how authorizing a connection works in plain steps, and what becomes possible once a tool is linked.",
          ],
          summaryList: [
            'Connecting lets Claude reach your real tools instead of you pasting everything in',
            'Anthropic calls these connections "connectors"',
            'Common ones cover email, calendar, files, and team chat',
            'Connectors are generally part of Claude\'s paid plans',
            'Available tools change over time — always check your own settings',
          ],
        },
      ],
    },
    {
      id: 1,
      title: 'Connecting Your Email, Calendar, and Files',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 3 · Lesson 2',
          icon: '🔗',
          title: 'Connecting a tool is mostly a one-time, click-to-approve step.',
          body: [
            "If the idea of “connecting” sounds technical, relax — it's far simpler than it sounds. In practice, you're doing something you've done a hundred times: signing in to one of your accounts and clicking “allow.”",
            "In this lesson we'll walk through the shape of that process in plain steps, and then look at what suddenly becomes possible once a tool like your email, calendar, or files is linked up.",
          ],
          sub: "If you've ever clicked \"Sign in with Google,\" you already know how this feels.",
        },
        {
          type: 'concept',
          eyebrow: 'Where it starts',
          icon: '⚙️',
          title: 'Connections live in your Claude settings.',
          body: [
            "You set up connections in your Claude settings, in the area for connectors or connected apps. You'll see a list of the tools available to you, each with a button to connect it. We're keeping it general on purpose — the exact wording and layout change over time, so trust what you see in your own settings over any screenshot.",
            "The key thing to know: <em>you</em> start the process. Nothing gets connected automatically. Claude can't reach into your email or files until you deliberately go in and turn that connection on.",
          ],
          highlight: "Connections are opt-in. Until you switch one on yourself, Claude has no access to that tool.",
        },
        {
          type: 'concept',
          eyebrow: 'The steps, in plain language',
          icon: '🪜',
          title: 'Authorizing a tool: the familiar three-step rhythm.',
          body: [
            "When you click to connect a tool, you'll go through a quick approval flow run by that tool's own maker — Google for Gmail or Drive, for example. It's the same “sign in and allow” dance you've done with countless apps. Here's the shape of it:",
          ],
          list: {
            items: [
              "<strong>1. Choose the tool</strong> — pick the connector you want, like your email or calendar",
              "<strong>2. Sign in to that account</strong> — on the tool's own secure page, not inside Claude",
              "<strong>3. Review and approve</strong> — it shows what access you're granting; you click allow",
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'What opens up',
          icon: '✨',
          title: 'Once connected, Claude can work with the real thing.',
          body: [
            "The moment a tool is connected, your conversations change. Instead of describing what's in your inbox or calendar, you can just ask about it — and Claude can go look. Connect your email and you can ask it to find or summarize messages. Connect your calendar and you can ask what's coming up. Connect your files and you can point Claude at a real document.",
            "You don't have to connect everything at once. Many people start with a single tool, get comfortable, and add others later. One good connection is more than enough to feel the difference.",
          ],
          highlight: "Start with one tool. You can always add more once the first one earns its place in your week.",
        },
        {
          type: 'compare',
          eyebrow: 'The two ways to give Claude your info',
          title: 'Pasting it in vs. connecting it once.',
          bad: {
            label: '❌ Paste it every time',
            text: 'For every question, you open the tool, hunt for the right item, copy it, switch back to Claude, paste it, and only then ask. Repeat for every single request.',
          },
          good: {
            label: '✅ Connect it once',
            text: 'You approve the connection one time. After that, you just ask Claude in plain language and it pulls what it needs directly — no hunting, copying, or app-switching.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Connect one tool — and have Claude confirm it worked.',
          body: [
            "Open your Claude settings, find the connectors area, and connect the one tool you chose in the last lesson. Go through the sign-in-and-allow steps. Then come back to a chat and use the prompt below to make sure the connection is live.",
          ],
          prompt: "I just connected my [name the tool — e.g. calendar / email / files] to you. Can you confirm you can see it? To check, please [pull one simple, harmless thing — e.g. tell me my next calendar event / list the subject lines of my three most recent emails / name a few files you can see]. Keep it short — I just want to confirm the connection is working.",
          body2: "If Claude pulls real information back, you're connected. If it can't, revisit your settings and make sure you finished the approval step — that's the most common thing people miss.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: 'You know how to connect a tool — and what it unlocks.',
          body: [
            "Connecting is a one-time, opt-in step: choose the tool, sign in to that account, and approve the access. From then on, Claude can work with the real thing instead of waiting for you to paste it in.",
            "Next lesson: the fun part — putting a connection to work on the everyday tasks that actually eat your time.",
          ],
          summaryList: [
            'Connections live in your Claude settings, under connectors or connected apps',
            'You always start the process — nothing connects automatically',
            'The flow is the familiar choose, sign in, and approve rhythm',
            'You sign in on the tool\'s own secure page, not inside Claude',
            'Start with one tool and add more once it proves its worth',
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Putting Connections to Work',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 3 · Lesson 3',
          icon: '🛠️',
          title: 'Now for the payoff: real tasks, on your real information.',
          body: [
            "A connection is only as good as what you do with it. The good news is that the most valuable uses are also the simplest — the small, repetitive tasks that quietly drain your day.",
            "In this lesson we'll walk through three everyday wins: triaging your email, prepping for your day from your calendar, and pulling key facts out of a document in your files. Plain requests, real results.",
          ],
          sub: "The best uses aren't fancy — they're the boring tasks you do every single day.",
        },
        {
          type: 'concept',
          eyebrow: 'Win #1 — Email',
          icon: '📧',
          title: '"Summarize my unread emails from this week."',
          body: [
            "Instead of opening your inbox and bracing yourself, you can ask Claude to do a first pass. With your email connected, a request like “summarize my unread emails from this week and tell me which ones actually need a reply” turns a wall of messages into a short, sorted briefing.",
            "You stay in charge of what to do next — Claude is just clearing the fog so you can see what matters. Ask it to flag anything urgent, group messages by topic, or draft quick replies to the easy ones.",
          ],
          highlight: "Let Claude triage the inbox so you spend your attention on the few emails that truly need you.",
        },
        {
          type: 'concept',
          eyebrow: 'Win #2 — Calendar',
          icon: '📅',
          title: '"What\'s on my calendar tomorrow — and help me prep."',
          body: [
            "A connected calendar turns Claude into a thoughtful chief of staff. Ask “what's on my calendar tomorrow and help me prepare” and it can read your day, then help you get ready for each item — questions to ask in a meeting, a quick agenda, or simply a heads-up about a tight gap between two appointments.",
            "It works the other way too. “Find an hour for deep work this week” or “when am I free to meet a client?” lets Claude scan your real schedule instead of you squinting at a grid of boxes.",
          ],
          highlight: "Don't just read your calendar — ask Claude to help you walk into your day already prepared.",
        },
        {
          type: 'concept',
          eyebrow: 'Win #3 — Files',
          icon: '📄',
          title: '"Find the contract in my Drive and pull the key dates."',
          body: [
            "Documents are where details hide. With your files connected, you can say “find the Henderson contract in my Drive and pull out the key dates, payment terms, and any deadlines.” Claude locates the document and lifts out exactly what you asked for — no scrolling through pages of fine print.",
            "This is a quiet superpower for anyone who works with reports, proposals, or spreadsheets. Ask Claude to summarize a long document, compare two versions, or answer a specific question buried somewhere inside it.",
          ],
          highlight: "Stop scrolling through long documents. Tell Claude what you need and let it go find it.",
        },
        {
          type: 'compare',
          eyebrow: 'Vague vs. clear requests',
          title: 'How you phrase the ask changes what you get.',
          bad: {
            label: '❌ Too vague',
            text: '"Look at my emails." → Claude doesn\'t know what you care about, so you get an unfocused dump that\'s no faster than reading them yourself.',
          },
          good: {
            label: '✅ Clear and specific',
            text: '"Summarize my unread emails from this week, group them by topic, and flag the three that need a reply today." → A sorted, useful briefing you can act on in seconds.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Run a real task on the tool you connected.',
          body: [
            "Pick whichever connected tool you set up, and put it to work on something genuinely useful right now. Use the matching version of the prompt below — and notice how it feels to skip all the copying and pasting.",
          ],
          prompt: "Using my connected [email / calendar / files], please help me with a real task:\n\n• If email: summarize my unread emails from this week, group them by topic, and flag the ones that need a reply today.\n• If calendar: tell me what's on my calendar tomorrow and help me prepare for each item.\n• If files: find the [name a real document] in my files and pull out the key dates, terms, and any deadlines.",
          body2: "Whatever Claude gives back, push it one step further — ask it to draft the replies, build the agenda, or put the key dates into a simple list. That second step is where connections really start saving you time.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: 'You can put a connection to work on real, daily tasks.',
          body: [
            "Triaging email, prepping from your calendar, and pulling facts out of your files are three everyday wins you can run with a single plain-language request. The clearer your ask, the more useful the result.",
            "Next lesson: the responsible side of all this — permissions, privacy, and how you stay firmly in control of what Claude can see.",
          ],
          summaryList: [
            'Ask Claude to summarize and triage your unread email',
            'Ask your calendar to brief you and help you prep your day',
            'Ask Claude to find a document and pull the key details',
            'Be specific about what you want — vague requests waste the connection',
            'Push results one step further: draft replies, build agendas, make lists',
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Permissions, Privacy, and Staying in Control',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 3 · Lesson 4',
          icon: '🛡️',
          title: 'Connecting tools is powerful — and you stay in the driver\'s seat.',
          body: [
            "It's smart to pause and ask: “If I connect my email or files, what exactly am I agreeing to?” That instinct is a good one, and this lesson answers it plainly.",
            "The short version: you decide what to connect, you can disconnect any time, and Claude only reaches a tool when you've granted permission. Let's make sure you feel completely confident, not nervous.",
          ],
          sub: "Good judgment isn't about avoiding connections — it's about connecting on your terms.",
        },
        {
          type: 'concept',
          eyebrow: 'You grant it, you can revoke it',
          icon: '🔓',
          title: 'Every connection can be switched off, any time.',
          body: [
            "A connection is never permanent. Whatever you turn on in your settings, you can turn off again with the same few clicks. Disconnect a tool and Claude immediately loses access to it — the door closes.",
            "This is the most reassuring fact in this whole module. You're not making a big, irreversible commitment. You're trying something on, and you can take it off the moment it stops feeling useful or comfortable.",
          ],
          highlight: "Connecting isn't a one-way door. You can disconnect any tool whenever you like, and access ends right away.",
        },
        {
          type: 'concept',
          eyebrow: 'Connect only what you\'re comfortable with',
          icon: '🎚️',
          title: 'You don\'t have to connect everything — pick deliberately.',
          body: [
            "There's no prize for connecting the most tools. Connect the ones where the time savings clearly outweigh any hesitation, and leave the rest alone. Plenty of people happily connect their calendar but not their email, or their files but not their team chat.",
            "Let comfort be your guide. A connection you're uneasy about isn't worth the small convenience. Start with the one tool that feels both useful and low-stakes, and expand only as your confidence grows.",
          ],
          highlight: "More connections isn't the goal. The right connections, ones you're genuinely comfortable with, is.",
        },
        {
          type: 'concept',
          eyebrow: 'Be mindful of sensitive information',
          icon: '🔒',
          title: 'Think twice before pointing Claude at your most sensitive stuff.',
          body: [
            "Some information deserves extra care — medical records, financial account details, passwords, legal matters, anything truly private. Before connecting a tool or asking Claude to dig into a particular document, it's worth a beat of thought about how sensitive the contents are.",
            "This isn't a reason for fear; it's ordinary good hygiene, the same judgment you'd use before forwarding an email or sharing a folder. When in doubt, keep the most sensitive material out of the connection and paste in only the specific, non-sensitive part you need help with.",
          ],
          highlight: "Use the same care you'd use sharing a folder with a new assistant. When unsure, keep the sensitive parts out.",
        },
        {
          type: 'compare',
          eyebrow: 'Two mindsets',
          title: 'Anxious avoidance vs. confident control.',
          bad: {
            label: '❌ "I\'ll never connect anything"',
            text: 'You miss out on real time savings out of vague worry — even though you could connect one low-stakes tool, try it, and disconnect it in seconds if you didn\'t like it.',
          },
          good: {
            label: '✅ "I\'ll connect on my terms"',
            text: 'You connect one tool you\'re comfortable with, keep sensitive material out, enjoy the time savings, and know you can revoke access any moment you choose.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Do a two-minute connection review.',
          body: [
            "Open your Claude settings and look at your connectors. Notice what's connected, confirm you know how to disconnect each one, and decide whether everything currently on still earns its place. Then use the prompt below to think it through clearly.",
          ],
          prompt: "Help me make a sensible plan for connecting my tools to you. Here's my situation: the tools I'm considering are [list them], and the most sensitive information I deal with is [describe it generally — no actual details]. Which tools are good, low-risk candidates to connect, which would you be more cautious about and why, and what simple habits should I follow to keep my private information protected?",
          body2: "Take Claude's answer as a starting point, not a rule. You know your own comfort level best — disconnect anything that doesn't feel right, and keep only the connections that genuinely earn their place.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: 'You can use connections confidently and stay in control.',
          body: [
            "You grant access on purpose and can revoke it any time. You connect only what you're comfortable with, and you keep your most sensitive information out of the picture. That's responsible, confident use — not fearful avoidance.",
            "Last lesson: tying it all together into a simple connected workflow, with a week-one challenge to make it stick.",
          ],
          summaryList: [
            'You authorize every connection, and you can disconnect any time',
            'Revoking access closes the door right away',
            'Connect only the tools you\'re genuinely comfortable with',
            'Be mindful of sensitive data — keep the most private parts out',
            'You stay in control of exactly what Claude can see',
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Your Connected Workflow',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 3 · Lesson 5',
          icon: '🏁',
          title: 'Let\'s turn one connection into a habit you actually use.',
          body: [
            "You now understand what connecting means, how to do it, what it unlocks, and how to stay in control. This final lesson pulls it together into a simple workflow — and gives you a concrete week-one challenge so it doesn't stay theory.",
            "The goal isn't to connect everything or master it all at once. It's to get one connection working in your real week, twice, so the habit forms.",
          ],
          sub: "A connection you use twice this week beats five you set up and forget.",
        },
        {
          type: 'concept',
          eyebrow: 'The whole module, in one picture',
          icon: '🗺️',
          title: 'Connecting follows a clean, repeatable rhythm.',
          body: [
            "Step back and the whole thing is simple. You choose a tool worth connecting, you authorize it once, you ask plain-language questions that use it, and you stay in control of access the entire time. That's the full loop.",
            "Every connection you ever add follows that same rhythm. Once you've done it with one tool, doing it with the next is almost automatic — the skill transfers completely.",
          ],
          highlight: "Choose, authorize, ask, stay in control. That four-beat rhythm works for every tool you'll ever connect.",
        },
        {
          type: 'concept',
          eyebrow: 'Build it into your real routine',
          icon: '🔁',
          title: 'Anchor your connection to a moment you already have.',
          body: [
            "A connection sticks when you attach it to something you already do. If you connected your calendar, make “help me prep for tomorrow” part of your end-of-day wind-down. If you connected email, make “triage my inbox” the first thing you do each morning.",
            "Tying the new habit to an existing one is the trick that makes it last. You're not adding a chore — you're upgrading a routine you already have with a connected version that does the heavy lifting.",
          ],
          highlight: "Attach the new habit to an old one: morning inbox, end-of-day prep, Monday planning.",
        },
        {
          type: 'concept',
          eyebrow: 'A peek behind the curtain',
          icon: '🔧',
          title: 'One bit of jargon you can safely forget.',
          body: [
            "You may occasionally see connectors described with the term <strong>MCP</strong>. It's the behind-the-scenes standard that lets tools plug into AI assistants in a consistent way — and that's genuinely all you need to know about it.",
            "We mention it only so the term doesn't throw you if you bump into it. You never have to learn it, configure it, or think about it. From your seat, it's just “connecting a tool,” and the plain-language rhythm you've learned is all the skill you need.",
          ],
          highlight: "MCP is plumbing. Nice to recognize the word, but you'll never need to touch it yourself.",
        },
        {
          type: 'compare',
          eyebrow: 'Before and after this module',
          title: 'How working with Claude has changed.',
          bad: {
            label: '📅 Before Module 3',
            text: 'Every task meant opening another app, hunting for the right item, copying it, and pasting it into Claude before you could even ask your question.',
          },
          good: {
            label: '✅ After Module 3',
            text: 'One tool is connected, Claude reaches your real information on request, you run daily tasks in seconds, and you control access completely.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Your Week-One Challenge',
          icon: '🎯',
          title: 'Connect one tool and run two real tasks this week.',
          body: [
            "Here's your challenge, and it's deliberately small. By the end of the week: have one tool connected, and have actually used it on two real tasks from your own life or work. That's it — one connection, two uses. Use the prompt below to build your simple plan.",
          ],
          prompt: "I want to build one connected workflow with you this week. The tool I'm connecting is [name it], and a typical week for me looks like [briefly describe your routine]. Give me a tiny week-one plan: two specific, genuinely useful tasks I should run with this connection, and the best existing moment in my routine to anchor each one to so it becomes a habit.",
          body2: "Do the two tasks this week — don't just plan them. Once a single connection has earned its place in your routine, you'll know exactly when it's worth adding the next one.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 3 Complete',
          icon: '🎉',
          title: 'Claude is connected to your real work — on your terms.',
          body: [
            "You've gone from copying and pasting to giving Claude direct, permissioned access to the tools you already use. You can connect a tool, put it to work on daily tasks, and stay in complete control of what it sees.",
            "Best of all, the four-beat rhythm — choose, authorize, ask, stay in control — works for every connection you'll ever add. You're set up to keep building from here.",
          ],
          summaryList: [
            'Connecting follows one rhythm: choose, authorize, ask, stay in control',
            'Anchor a new connection to a routine you already have',
            '"MCP" is the behind-the-scenes plumbing — you never need to learn it',
            'Your challenge: connect one tool and run two real tasks this week',
            'The skill transfers — adding your next connection will feel automatic',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'In plain English, what does it mean to "connect" a tool like your email or calendar to Claude?',
      options: [
        'You give Claude full control of that account to manage on its own',
        'You authorize Claude to reach that tool so it can use real information from it in your chats',
        'You copy everything from that tool into a single Claude conversation',
        'You move all your files and emails over to Claude\'s own servers',
      ],
      correct: 1,
      feedback:
        "A connection is simply permission for Claude to reach one of your tools and pull in real information, right inside your conversation — so you stop copying and pasting. You're handing over one key for one drawer, on purpose, not turning over control of the account.",
    },
    {
      q: 'You connected your email but now feel unsure about it. What can you do?',
      options: [
        'Nothing — once a tool is connected the access is permanent',
        'You must delete your whole Claude account to remove the access',
        'Disconnect it in your settings any time; Claude loses access right away',
        'Wait 30 days for the connection to automatically expire',
      ],
      correct: 2,
      feedback:
        "Connecting is never a one-way door. Whatever you turn on, you can turn off again in your settings with a few clicks, and Claude loses access immediately. That reversibility is exactly why you can experiment with confidence.",
    },
    {
      q: 'Which request best shows how to put a connected tool to work?',
      options: [
        '"Look at my stuff and do something helpful."',
        '"Tell me everything in my account right now."',
        '"Summarize my unread emails from this week and flag the ones that need a reply today."',
        '"Connect to all my tools automatically without asking me."',
      ],
      correct: 2,
      feedback:
        "Clear, specific requests are what make a connection pay off. \"Summarize my unread emails from this week and flag the ones that need a reply today\" tells Claude exactly what you care about, so you get a sorted, actionable briefing instead of an unfocused dump.",
    },
  ],
}

export default c8module3
