import type { CourseData } from './types'

const c7module5: CourseData = {
  moduleId: 41,
  title: 'Things Claude Can Build & Remember',
  subtitle: 'Module 5',
  nextModuleId: 42,
  lessons: [
    {
      id: 0,
      title: 'Meet Artifacts: Things You Can Keep',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 5 · Lesson 1',
          icon: '📄',
          title: 'Sometimes Claude makes something you want to keep — not just read.',
          body: [
            "So far, everything Claude has given you has lived inside the chat — useful, but it scrolls away as the conversation grows. This module is about two features that change that: things Claude can <strong>build</strong> for you, and things it can <strong>remember</strong> about you.",
            "We'll start with the building part. When you ask Claude to create something substantial — a document, a checklist, a table, even a simple webpage — it can open that thing in its own panel beside the chat. Anthropic calls these <strong>Artifacts</strong>.",
          ],
          sub: "An Artifact is just Claude's word for something it made that's worth keeping.",
        },
        {
          type: 'concept',
          eyebrow: 'The plain-English version',
          icon: '🪟',
          title: 'An Artifact is a side panel that holds the thing Claude built.',
          body: [
            "Picture your normal chat on the left. When you ask Claude to make something meaty — say, a full packing list or a one-page plan — a second panel can open on the right with that item laid out cleanly on its own. That panel is the Artifact.",
            "It's separate from the back-and-forth of the conversation, so it doesn't get buried as you keep talking. It sits there, neatly, ready for you to read, copy, tweak, or save. Think of it as the finished product, displayed on its own little workbench.",
          ],
          highlight: "The chat is the conversation. The Artifact is the thing you walk away with.",
        },
        {
          type: 'concept',
          eyebrow: 'When one appears',
          icon: '✨',
          title: "You don't summon Artifacts — Claude opens one when it makes sense.",
          body: [
            "You don't need a special command. When you ask for something that's clearly a standalone item — a document, a list of more than a few things, a table, a template, a bit of a webpage — Claude often decides on its own that it belongs in an Artifact panel rather than crammed into the chat.",
            "If it doesn't open one and you wish it had, you can simply ask: “Can you put that in an Artifact I can keep?” Claude understands plain requests like that. You're never stuck guessing at the right button.",
          ],
          highlight: "Ask for something substantial and Claude usually opens an Artifact — or just ask it to.",
        },
        {
          type: 'concept',
          eyebrow: 'What you can do with one',
          icon: '🧰',
          title: "An Artifact is yours to view, copy, edit, and save.",
          body: [
            "Once an Artifact is open, you're not just looking at it. You have a handful of simple actions, and they're exactly the ones you'd want:",
          ],
          list: {
            items: [
              "<strong>Read it</strong> — see the finished thing laid out clearly, on its own",
              "<strong>Copy it</strong> — lift the text out and paste it into an email, a doc, anywhere",
              "<strong>Edit it</strong> — ask Claude to change it, and the panel updates in place",
              "<strong>Download or save it</strong> — keep a copy outside the chat so it's never lost",
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'In the chat vs. in an Artifact',
          title: "Same content, very different to actually use.",
          body: ["The difference shows up the moment you want to do something with what Claude made:"],
          bad: {
            label: '💬 Buried in the chat',
            text: "A long checklist typed into the conversation. It works — until you ask three more questions and have to scroll up through everything to find it again.",
          },
          good: {
            label: '📄 In an Artifact',
            text: "The same checklist in its own panel, sitting still while you keep chatting. One click to copy it, easy to ask Claude to edit it, and simple to save for later.",
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Ask for something substantial and watch an Artifact appear.',
          body: [
            "The fastest way to understand Artifacts is to trigger one. Open claude.ai, start a new chat, and ask for something clearly worth keeping — a real list, not a one-line answer. Paste the prompt below.",
          ],
          prompt: "Make me a clean, organized weekly grocery checklist for two people who cook dinner at home most nights. Group it by section — produce, dairy, pantry, and so on — so I can use it at the store.",
          body2: "Watch for a panel to open beside the chat with the list laid out on its own. That's an Artifact. Try copying it, then ask Claude to “add a snacks section” and notice the panel update in place — you don't get a whole new list, just the change.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: "You know what an Artifact is and where to find it.",
          body: [
            "An Artifact is Claude's way of handing you something worth keeping — a document, list, table, or webpage — in its own panel beside the chat, instead of letting it scroll away. You can read, copy, edit, and save it.",
            "Next lesson: actually building something useful with one, start to finish, and getting it out of Claude and into your day.",
          ],
          summaryList: [
            'An Artifact is a side panel holding something substantial Claude built',
            "It keeps your result from getting buried as the chat grows",
            'Claude opens one automatically — or you can just ask it to',
            'You can view, copy, edit, and download or save an Artifact',
          ],
        },
      ],
    },
    {
      id: 1,
      title: 'Building Something Useful With Artifacts',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 5 · Lesson 2',
          icon: '🏗️',
          title: "Let's build something you'd actually use — and refine it until it's right.",
          body: [
            "Knowing what an Artifact is matters far less than making one that earns its keep. In this lesson you'll go through the full loop: ask Claude to build something real, shape it with a few follow-ups, then get it out into your world.",
            "None of this is technical. You'll talk to Claude exactly the way you have all course long — the only new part is that the result lives in a panel you can keep.",
          ],
          sub: "The skill isn't making an Artifact. It's making one good enough to reuse.",
        },
        {
          type: 'concept',
          eyebrow: 'Good things to ask for',
          icon: '💡',
          title: 'Artifacts shine for anything you want laid out and reusable.',
          body: [
            "The best Artifact requests are for things that have structure and that you'd want to keep around. A few that work beautifully for everyday life:",
          ],
          list: {
            items: [
              "<strong>A packing checklist</strong> — for a trip, tailored to where you're going and how long",
              "<strong>A simple meal plan</strong> — a week of dinners with a matching shopping list",
              "<strong>A one-page summary</strong> — boil a long document or topic down to a single sheet",
              "<strong>A basic webpage</strong> — a simple page for an event, a bio, or a list of links",
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'How you build it',
          icon: '🗣️',
          title: "You describe what you want — Claude does the laying-out.",
          body: [
            "You don't design or format anything yourself. You describe the thing in plain words — what it's for, what should be in it, how you'd like it organized — and Claude builds it into the Artifact panel for you.",
            "The same task + context + shape habit from earlier in the course works perfectly here. “Make a packing list (task) for a 5-day beach trip in October (context), grouped by category with a few reminders at the top (shape).” That's a complete, strong request.",
          ],
          highlight: "Describe the outcome in plain English. Claude handles the structure and the look.",
        },
        {
          type: 'concept',
          eyebrow: 'The part that makes it great',
          icon: '🔧',
          title: 'Refine it with follow-ups — the Artifact updates in place.',
          body: [
            "The first version is rarely the keeper, and that's fine. Just tell Claude what to change: “add a section for toiletries,” “make it shorter,” “put the most important items at the top,” “add checkboxes.” The Artifact updates right there in the panel.",
            "You're not starting over each time — you're shaping one living document. Two or three small follow-ups usually turns a decent first draft into something you're genuinely glad to have.",
          ],
          highlight: "Don't rebuild — refine. Each follow-up edits the Artifact you already have.",
        },
        {
          type: 'compare',
          eyebrow: 'Two ways to fix a draft',
          title: 'Starting over vs. refining in place.',
          bad: {
            label: '❌ Starting over',
            text: '"That\'s not quite right, make me a whole new packing list." You lose the good parts and have to re-explain everything from scratch.',
          },
          good: {
            label: '✅ Refining',
            text: '"Good start — now add a toiletries section, move medications to the top, and cut the beach toys." Claude keeps what worked and changes only what you asked.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Build a real Artifact and refine it twice.',
          body: [
            "Pick one of the four ideas from earlier that you'd actually use, then make it real. Use the prompt below as your starting point — swap in your own details — and let an Artifact open.",
          ],
          prompt: "Build me a simple weekly meal plan as something I can keep. Here's my situation: two adults, we want easy dinners under 30 minutes, no shellfish, and we'd like a matching shopping list at the bottom. Lay it out clearly, Monday through Sunday.",
          body2: "Once it appears, send two follow-ups to shape it — try “make Wednesday vegetarian” and “group the shopping list by store section.” Watch the Artifact update each time, then copy or download the final version so you've got it for the week.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: "You can build an Artifact and shape it into something you'll reuse.",
          body: [
            "You describe what you want in plain English, Claude lays it out in the panel, and you refine it with small follow-ups until it's right — then copy or download it to use in your day. That's the whole loop.",
            "Next lesson: the second half of this module — how Claude can remember useful things about you so you stop repeating yourself.",
          ],
          summaryList: [
            'Artifacts shine for checklists, plans, summaries, and simple pages',
            'Describe the outcome — Claude handles structure and formatting',
            'Refine with small follow-ups; the Artifact updates in place',
            "Don't start over — keep what works and change only what you ask",
            'Copy or download the final version to use it outside the chat',
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'How Claude Remembers You (Memory)',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 5 · Lesson 3',
          icon: '🧠',
          title: "Wouldn't it be nice to not explain yourself every single time?",
          body: [
            "By default, each new chat with Claude starts fresh — it doesn't carry over what you told it yesterday. That's often fine, but it means re-explaining the same background again and again: your name, your work, the project you're always tinkering with.",
            "Claude has a feature that fixes this. It can <strong>remember</strong> useful details about you across conversations, so help gets more personal over time and you stop repeating yourself.",
          ],
          sub: "Memory is Claude getting to know you a little — with your permission.",
        },
        {
          type: 'concept',
          eyebrow: 'The plain-English version',
          icon: '📌',
          title: 'Memory lets Claude carry a few useful facts from chat to chat.',
          body: [
            "Normally what you say in one conversation stays in that conversation. Memory is the exception: it's a small, lasting set of notes about you that Claude can draw on in <em>future</em> chats, even brand-new ones.",
            "So if Claude knows you run a small bakery, you don't have to say so every time you ask for help with a customer email — it already has that context. The point is simple: less repeating yourself, more help that fits your actual life.",
          ],
          highlight: "Memory is the handful of facts Claude keeps about you between conversations.",
        },
        {
          type: 'concept',
          eyebrow: 'What it can hold',
          icon: '🗒️',
          title: 'The useful stuff is the background you keep having to repeat.',
          body: [
            "Memory is most valuable for the steady facts that shape a lot of your requests — the things you'd otherwise type out at the start of every chat. For example:",
          ],
          list: {
            items: [
              "<strong>Who you are</strong> — your name, your role, your line of work",
              "<strong>Your preferences</strong> — how you like things written, your tone, your defaults",
              "<strong>Ongoing projects</strong> — the book, the business, the trip you keep coming back to",
              "<strong>Recurring needs</strong> — “I'm not technical, explain things simply” is worth remembering",
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'How to feed it',
          icon: '💬',
          title: "You can just tell Claude what's worth remembering.",
          body: [
            "You don't fill out a form. You talk. Say “Please remember that I prefer short, plain-English replies,” or “Remember that I run a two-person landscaping business,” and Claude can hold onto that for next time.",
            "It's that conversational. When something about you is going to matter again and again, you simply mention that you'd like it remembered — and from then on, Claude can factor it in without you saying it twice.",
          ],
          highlight: "“Please remember that…” is all it takes to give Claude a lasting fact about you.",
        },
        {
          type: 'compare',
          eyebrow: 'Without Memory vs. with it',
          title: 'The same request, with and without context Claude already holds.',
          bad: {
            label: '🔁 Without Memory',
            text: "Every chat starts cold. You retype “I'm not technical, I run a small flower shop, keep it simple” before you can even ask your real question — over and over.",
          },
          good: {
            label: '🧠 With Memory',
            text: "Claude already knows all of that. You jump straight to “Help me write a thank-you note to a loyal customer,” and the reply already fits your shop and your plain-English preference.",
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Teach Claude one true thing about you.',
          body: [
            "Give Claude a single, genuinely useful fact to remember — something that'll shape lots of future chats. Pick something true about your work, your style, or how you like replies. Use the prompt below.",
          ],
          prompt: "Please remember this about me for future conversations: [one real fact — for example, your name and what you do, or that you prefer short replies in plain English with no jargon].",
          body2: "Then, in a brand-new chat, ask Claude a normal question and see whether it factors in what you told it. If your account doesn't have Memory turned on yet, that's fine — the next lesson covers where to find and manage it in your settings.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: 'You know how Claude can get to know you over time.',
          body: [
            "Memory lets Claude carry a few useful facts about you from one conversation to the next, so help gets more personal and you stop re-explaining your background. You feed it just by telling Claude what's worth remembering.",
            "Next lesson: staying in control of it — how to see, edit, and delete what Claude remembers, and deciding what's actually worth keeping.",
          ],
          summaryList: [
            "Memory carries useful facts about you across conversations",
            'It saves you from re-explaining your background every chat',
            'Best for steady facts: who you are, your preferences, ongoing projects',
            "Just say “Please remember that…” to give Claude a lasting fact",
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Managing What Claude Knows',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 5 · Lesson 4',
          icon: '🎛️',
          title: "Memory only helps if you're the one in charge of it.",
          body: [
            "A feature that quietly remembers things about you should never feel like it's out of your hands. The good news: it isn't. You can see exactly what Claude remembers, change it, and delete anything you don't want it holding.",
            "This lesson is about that control — where to find it, how to use it, and how to decide what's genuinely worth remembering versus what's better left out.",
          ],
          sub: "You decide what Claude keeps. Nothing about Memory is locked away from you.",
        },
        {
          type: 'concept',
          eyebrow: 'Where it lives',
          icon: '⚙️',
          title: 'What Claude remembers is visible and editable in your settings.',
          body: [
            "Memory isn't a black box. In your account settings, there's a place where you can look at the facts Claude has saved about you, all in one list. You can read through them whenever you like.",
            "Because settings menus change over time, we won't send you to an exact button — just know it lives in your settings, and a quick look there (or asking Claude “where do I manage what you remember?”) will get you to it.",
          ],
          highlight: "Everything Claude remembers about you is laid out in your settings — nothing hidden.",
        },
        {
          type: 'concept',
          eyebrow: 'What you can do there',
          icon: '✏️',
          title: "You can view, edit, and delete any memory — anytime.",
          body: [
            "You're fully in control of the list. The actions are exactly what you'd hope for, and you never need a reason:",
          ],
          list: {
            items: [
              "<strong>View</strong> — see the full list of what Claude has remembered about you",
              "<strong>Edit</strong> — fix or update a fact that's changed or wasn't quite right",
              "<strong>Delete</strong> — remove any single item you'd rather Claude forget",
              "<strong>Clear it out</strong> — wipe what's stored if you want a clean slate",
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Worth remembering — or not',
          icon: '🤔',
          title: 'Keep the steady stuff. Leave out the private and the fleeting.',
          body: [
            "A good rule: have Claude remember things that are <em>stable and useful across many chats</em> — your role, your preferences, an ongoing project. Skip anything that's a one-off (“I'm leaving for the airport in an hour”) or genuinely sensitive that you'd rather not have stored.",
            "Sensitive personal details — passwords, financial account numbers, health specifics, anything you'd be uneasy seeing saved — are better left out of Memory entirely. When in doubt, leave it out; you can always mention it in the moment instead.",
          ],
          highlight: "Remember the steady and useful. Leave out the fleeting and the sensitive.",
        },
        {
          type: 'compare',
          eyebrow: 'Two kinds of facts',
          title: 'A quick gut-check for what belongs in Memory.',
          bad: {
            label: '🔴 Better left out',
            text: "One-off details (“running late today”), and anything sensitive — account numbers, passwords, private health or financial specifics you wouldn't want stored.",
          },
          good: {
            label: '🟢 Worth remembering',
            text: "Your name and work, how you like replies written, the project you keep returning to, standing preferences like “explain things simply, I'm not technical.”",
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Open your Memory settings and tidy the list.',
          body: [
            "Go look at what Claude is holding. Find the Memory area in your settings (or ask Claude where it is), and read through the list. If anything's wrong, outdated, or too personal, edit or delete it.",
          ],
          prompt: "Where in my settings do I view and manage what you remember about me? And can you tell me right now what facts you currently have saved about me?",
          body2: "Read what comes back, then open your settings and act on it: correct anything out of date, delete anything you'd rather it not keep, and confirm the useful facts are right. Five minutes here keeps Memory working for you instead of drifting.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: "You're fully in control of what Claude remembers.",
          body: [
            "What Claude knows about you lives in your settings, where you can view, edit, and delete any of it whenever you like. Keep the steady, useful facts; leave out the fleeting and the sensitive. Nothing is locked away from you.",
            "Last lesson in this module: putting Artifacts and Memory together into a personal setup — and a week-one challenge to make it stick.",
          ],
          summaryList: [
            "What Claude remembers is visible and editable in your settings",
            'You can view, edit, delete, or clear out any memory anytime',
            'Remember steady, useful facts; skip one-offs and sensitive details',
            'When in doubt, leave it out — you can mention it in the moment instead',
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Make Claude Work the Way You Do',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 5 · Lesson 5',
          icon: '🪄',
          title: "Put it together: Claude that builds for you and knows you.",
          body: [
            "On their own, Artifacts and Memory are handy. Together, they turn Claude from a clever stranger into something that feels set up just for you — it remembers your context and hands you things you can keep and reuse.",
            "This last lesson is about combining the two into a small personal setup, plus a simple week-one challenge to lock the habit in. Short on theory, long on doing.",
          ],
          sub: "A few minutes of setup makes every future chat faster and more personal.",
        },
        {
          type: 'concept',
          eyebrow: 'Why they pair so well',
          icon: '🤝',
          title: 'Memory gives Claude the context; Artifacts give you the keepsake.',
          body: [
            "Picture it working together. Claude already remembers that you run a small catering business and like warm, plain-English writing. You ask for a reusable client-inquiry checklist — it builds the Artifact already shaped to your business, no re-explaining.",
            "Memory removes the setup work at the start of every chat. Artifacts make sure the good results don't vanish into the conversation. One handles the input; the other handles the output. Both pull in the same direction: less friction, more you.",
          ],
          highlight: "Memory feeds Claude your context; Artifacts hand you something to keep. Together, that's a personal setup.",
        },
        {
          type: 'concept',
          eyebrow: 'A simple way to think about it',
          icon: '🧩',
          title: 'Set up the facts once; build the tools as you need them.',
          body: [
            "There are two moves, and they happen on different schedules. Memory is mostly a <strong>one-time setup</strong> — you tell Claude a few standing facts about you and they keep paying off quietly forever after.",
            "Artifacts are an <strong>as-you-go</strong> thing — you build one whenever a task calls for something you'll reuse, and you grow a little collection of them over time. You don't have to do it all today; you just start.",
          ],
          highlight: "Memory is set-it-once. Artifacts you build as the need comes up.",
        },
        {
          type: 'concept',
          eyebrow: 'Your week-one challenge',
          icon: '📋',
          title: "Here's the whole challenge, in three small steps.",
          body: [
            "Don't overthink it. Three short actions this week will turn everything in this module from “I read about it” into “I use it”:",
          ],
          list: {
            items: [
              "<strong>Set two memory facts</strong> — e.g. who you are/what you do, and how you like replies written",
              "<strong>Build one reusable Artifact</strong> — a checklist, plan, or summary you'll genuinely use again",
              "<strong>Test it in a fresh chat</strong> — start new, ask something, and feel Claude already fitting you",
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'Before and after this module',
          title: "What's changed in how Claude works for you.",
          bad: {
            label: '📅 Before Module 5',
            text: "Every chat started cold — you re-explained yourself each time, and any good list or plan Claude made scrolled away and got lost in the conversation.",
          },
          good: {
            label: '✅ After Module 5',
            text: "Claude remembers your context, so replies fit you from the first message. The useful things it builds live in Artifacts you keep, copy, and reuse.",
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Do the whole challenge in one sitting.',
          body: [
            "You can knock out all three steps right now in about ten minutes. Start by setting up your memory and building your first reusable Artifact with the prompt below — then check it in a brand-new chat.",
          ],
          prompt: "Two things. First, please remember this about me for the future: [your name and what you do, plus how you like replies — e.g. short and in plain English]. Second, build me a reusable [checklist / plan / one-page summary] for [a task you do regularly], laid out as an Artifact I can keep and reuse.",
          body2: "Refine the Artifact until you'd actually reuse it, then save or copy it. Finally, open a fresh chat, ask a normal question, and notice Claude already fitting your context. That's a personal setup — and the habit that makes the next 30 modules pay off.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 5 Complete',
          icon: '🎉',
          title: "Claude now builds for you — and knows you.",
          body: [
            "You understand Artifacts and how to build and refine something worth keeping, you understand Memory and how to control it, and you've combined them into a setup that fits your life. That's Claude working the way you do.",
            "From here, every chat starts warmer and ends with more to show for it. Keep building Artifacts as needs arise, and tidy your Memory now and then so it always reflects the real you.",
          ],
          summaryList: [
            'Memory gives Claude your context; Artifacts give you keepsakes',
            'Set memory facts once; build Artifacts as needs come up',
            "Week-one challenge: set two memory facts, build one reusable Artifact, test it fresh",
            'You stay in control — view, edit, and delete memories anytime',
            "You've turned Claude into a setup that fits how you actually work",
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'What is an Artifact in Claude?',
      options: [
        'A secret command you type to unlock advanced features',
        'A side panel that holds something substantial Claude built, so you can keep, copy, and edit it',
        'A paid add-on you have to buy before Claude will make anything',
        'A folder on your computer where chats are automatically saved',
      ],
      correct: 1,
      feedback:
        "An Artifact is the panel that opens beside the chat when you ask Claude to build something meaty — a document, list, table, or simple webpage. It keeps the result from scrolling away, and you can read, copy, edit, and save it. No command or purchase required.",
    },
    {
      q: "Your first version of an Artifact is close but not quite right. What's the best move?",
      options: [
        'Ask Claude to make a whole new one from scratch',
        'Give up — Artifacts can\'t be changed once they\'re made',
        'Tell Claude what to change, and it updates the Artifact in place',
        'Copy it out and fix everything yourself by hand',
      ],
      correct: 2,
      feedback:
        "You refine an Artifact with small follow-ups — “add a section,” “make it shorter,” “move this to the top.” Claude keeps what worked and changes only what you asked, updating the panel in place. You almost never need to start over.",
    },
    {
      q: 'Which is the best fit for Claude to save in Memory?',
      options: [
        'Your bank account number, so Claude has it handy',
        "That you're leaving for the airport in an hour",
        'That you run a small bakery and prefer short, plain-English replies',
        'A long document you only need help with once today',
      ],
      correct: 2,
      feedback:
        "Memory is for steady, useful facts that shape many future chats — who you are, what you do, how you like replies written. Leave out one-off details and anything sensitive like account numbers. When in doubt, leave it out and just mention it in the moment.",
    },
  ],
}

export default c7module5
