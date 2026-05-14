import type { CourseData } from './types'

const c2module3: CourseData = {
  moduleId: 9,
  title: "Meetings That Don't Drain You",
  subtitle: 'AI at Work · Module 3',
  lessons: [
    // ─────────────────────────────────────────
    // Lesson 1 — Why Meetings Cost More Than You Think
    // ─────────────────────────────────────────
    {
      id: 0,
      title: 'Why Meetings Cost More Than You Think',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI at Work · Lesson 1',
          icon: '📅',
          title: 'Why Meetings Cost More Than You Think',
          body: [
            "By the end of this lesson, you'll understand the full cost of meetings — not just the hours on your calendar, but the hidden tax around them — and see exactly where AI makes the biggest difference.",
          ],
          sub: "Let's start with what a meeting actually costs.",
        },
        {
          type: 'concept',
          eyebrow: 'The number on the calendar is wrong',
          icon: '⏱️',
          title: "A one-hour meeting is never one hour.",
          body: [
            "Look at a meeting on your calendar and you see 60 minutes. But that's not the real number.",
            "Before: finding the agenda (if there is one), pulling up background docs, remembering where things stood from last time. After: writing up your notes, sending the follow-up, logging action items, chasing the people who didn't get assigned tasks.",
            "A 60-minute meeting routinely costs 90–120 minutes of your actual day.",
          ],
          highlight: "The meeting is just the middle third. The prep and follow-up are the hidden cost — and that's exactly where AI wins.",
        },
        {
          type: 'concept',
          eyebrow: 'The cognitive tax',
          icon: '🧠',
          title: "Meetings break your focus in ways that take time to recover from.",
          body: [
            "Research on knowledge worker productivity consistently shows that deep, focused work — the kind that produces your best output — requires roughly 20–30 minutes to reach full concentration.",
            "A single meeting in the middle of your morning breaks that focus completely. It takes another 20–30 minutes to get back. Two meetings back-to-back can cost an entire morning of real work.",
            "The problem isn't the meeting itself. It's the context-switching on both sides of it.",
          ],
          highlight: "The best meetings are efficient. The worst ones are ones you could have skipped — but weren't sure until they were over.",
        },
        {
          type: 'concept',
          eyebrow: 'The three failure modes',
          icon: '⚠️',
          title: "Most meeting pain comes from three predictable problems.",
          body: [
            "After sitting through thousands of professional meetings, the patterns are clear:",
          ],
          list: {
            items: [
              '<strong>No prep:</strong> People arrive without context, spend the first 15 minutes getting everyone up to speed, and run out of time',
              '<strong>No capture:</strong> Decisions get made in the room but nobody writes them down — a week later, nobody agrees on what was decided',
              '<strong>No follow-up:</strong> Action items are stated but not documented — they evaporate by the next meeting',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: 'Where AI changes everything',
          icon: '⚡',
          title: "AI handles the three things that make meetings work.",
          body: [
            "Here's the good news: each of those three failure modes has a direct AI solution, and none of them are complicated.",
          ],
          beforeAfter: {
            before: {
              label: 'Without AI',
              items: [
                '20 min building an agenda from scratch',
                'Scrambling to remember context before the call',
                'Frantically taking notes while trying to listen',
                'Spending 30 min on a follow-up email after',
                'Action items lost or forgotten by Friday',
              ],
            },
            after: {
              label: 'With AI',
              items: [
                'Agenda drafted in 3 minutes',
                'Context summary ready before you join',
                'Rough notes turned into clean output in 2 min',
                'Follow-up email drafted while you close your laptop',
                'Every action item documented and attributed',
              ],
            },
          },
        },
        {
          type: 'concept',
          eyebrow: "What this module covers",
          icon: '🗺️',
          title: "Four lessons. A complete meeting system.",
          body: ["Here's what you'll build over the next four lessons:"],
          list: {
            items: [
              'Lesson 2: Prep in Minutes — agendas, background context, and talking points fast',
              'Lesson 3: Capture Everything — note-taking strategies so nothing falls through',
              "Lesson 4: Notes to Action — turning rough captures into clean summaries and task lists",
              'Lesson 5: The Follow-Up — the email that actually drives accountability',
            ],
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Map your meeting tax.',
          body: [
            "Open <strong>chatgpt.com</strong> and run this quick audit to see what your meetings are actually costing you.",
          ],
          prompt:
            "I want to understand the real cost of meetings in my week. I work as a [job title] and I have approximately [X] meetings per week, averaging about [Y] minutes each. The meetings that drain me most are [describe: e.g., 'weekly team standups', 'client calls I have to prep for', 'internal reviews that run long']. Based on this, what's my realistic total meeting tax per week — including prep and follow-up — and where should I focus first to get time back?",
          body2:
            "The number it gives you is the ceiling on what this module can save you. Keep it in mind as you work through the next four lessons.",
          setupGuide: true,
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: "The meeting is just the middle. The edges are where the time goes.",
          body: [
            "Prep, context-switching, and follow-up are the hidden cost — and they're all addressable. The three failure modes (no prep, no capture, no follow-up) have direct AI solutions you'll build in the next four lessons.",
            "In the next lesson, you'll prep for any meeting in minutes instead of starting from scratch every time.",
          ],
          summaryList: [
            "A 60-minute meeting costs 90–120 minutes once prep and follow-up are counted",
            'Meetings break focus on both sides — the cost is more than the block on your calendar',
            'No prep, no capture, and no follow-up are the three failure modes AI directly fixes',
            'Each failure mode has a simple AI solution — you\'ll build all three this module',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 2 — Prep in Minutes, Not Hours
    // ─────────────────────────────────────────
    {
      id: 1,
      title: 'Prep in Minutes, Not Hours',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI at Work · Lesson 2',
          icon: '📋',
          title: 'Prep in Minutes, Not Hours',
          body: [
            "By the end of this lesson, you'll be able to walk into any meeting with a sharp agenda, the right context, and your key talking points — prepared in 5 minutes or less.",
          ],
          sub: "Good prep is the single highest-leverage meeting habit. AI makes it frictionless.",
        },
        {
          type: 'concept',
          eyebrow: 'Why most people skip prep',
          icon: '🚫',
          title: "Prep doesn't happen because it takes too long — not because people don't care.",
          body: [
            "Ask any professional and they'll tell you: they know they should prep for meetings. They just don't have time.",
            "Building an agenda from scratch is 20 minutes. Pulling together background context is another 15. Writing talking points is another 10. By the time you'd be done prepping, the meeting is about to start.",
            "So most people show up and wing it. The meeting runs long. Decisions get deferred. Everyone leaves to schedule another meeting.",
          ],
          highlight: "AI doesn't eliminate prep — it compresses it. What used to take 45 minutes takes 5.",
        },
        {
          type: 'concept',
          eyebrow: 'Starting with the agenda',
          icon: '📄',
          title: "A clear agenda is the single biggest predictor of a useful meeting.",
          body: [
            "Meetings without agendas meander. Attendees aren't sure what they're there to decide or contribute. The conversation jumps between topics. The meeting ends without clear outcomes.",
            "An agenda does three things: it tells people what to prepare, keeps the conversation on track, and makes it obvious when the meeting could be an email instead.",
            "AI can draft an agenda in 30 seconds. You provide the context; it provides the structure.",
          ],
          highlight: '"Draft a focused 45-minute agenda for a meeting about [topic]. The goal of this meeting is to [decision/outcome]. Attendees include [roles]. Include time estimates for each section."',
        },
        {
          type: 'concept',
          eyebrow: 'Getting context fast',
          icon: '🔍',
          title: "Walk in knowing what you need to know — without rereading everything.",
          body: [
            "For any meeting with history — a client relationship, an ongoing project, a recurring review — you often need to get back up to speed before you can contribute meaningfully.",
            "Instead of rereading a chain of emails or scrolling through old notes, paste that content into ChatGPT and ask for a summary: where things stand, what's been decided, what's still open.",
            "In 30 seconds you have the context you'd spend 15 minutes reconstructing manually.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Your talking points',
          icon: '🎯',
          title: "Know what you want to say before you have to say it.",
          body: [
            "Walking into a meeting without clear talking points means you end up saying less than you intended, agreeing to things you'd have pushed back on with more time, or leaving with points unmade.",
            "Tell AI: your role in this meeting, what you need to communicate or advocate for, and any concerns you want to raise. Ask it for 3–5 sharp talking points.",
            "You don't have to use all of them — but having them in front of you means you don't leave the room wishing you'd said something.",
          ],
          highlight: '"I\'m going into a meeting about [topic] as [your role]. My goal is to [what you want to achieve]. Give me 4 clear talking points I can use to make my case."',
        },
        {
          type: 'concept',
          eyebrow: 'The 5-minute prep routine',
          icon: '⏱️',
          title: "Do this before every significant meeting.",
          body: [
            "Here's the prep routine that takes under 5 minutes and transforms how you show up:",
          ],
          list: {
            items: [
              '<strong>1 min:</strong> Tell AI the meeting topic, goal, and attendees — get a draft agenda',
              '<strong>2 min:</strong> Paste any relevant background (email thread, notes) — get a context summary',
              '<strong>1 min:</strong> Tell AI your role and objective — get your key talking points',
              '<strong>1 min:</strong> Review and tweak — add anything only you would know',
            ],
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Prep for your next meeting right now.',
          body: [
            "Look at your calendar and find a meeting coming up in the next few days. Open <strong>chatgpt.com</strong> and use this prompt:",
          ],
          prompt:
            "I have a meeting coming up and I want to prepare properly. Here's the context:\n- Meeting topic: [what the meeting is about]\n- Goal of the meeting: [what needs to be decided or accomplished]\n- My role: [am I running it, presenting, contributing, reviewing?]\n- Attendees: [who will be there — roles, not names]\n- Duration: [how long]\n\nPlease give me: (1) a draft agenda with time estimates, (2) the 3 most important things I should know or have ready, and (3) 3 talking points I should make.",
          body2:
            "Save what it gives you somewhere accessible — a note, a doc, your email. That's your prep done. Notice how much faster that was than doing it the old way.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: "You can prep for any meeting in 5 minutes. Use it every time.",
          body: [
            "A sharp agenda, the right context, and your talking points — all of it in under 5 minutes. The only reason not to prep is that it used to take too long. That excuse is gone.",
            "In the next lesson, you'll learn how to capture what matters during the meeting itself — so nothing falls through and you never have to reconstruct what was decided.",
          ],
          summaryList: [
            'Most prep gets skipped because it took too long — AI compresses 45 minutes to 5',
            'A clear agenda is the highest-leverage meeting habit; AI drafts one in 30 seconds',
            'Paste any background content and ask for a context summary instead of rereading',
            'Prepare 3–5 talking points before every significant meeting — you\'ll use them',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 3 — Capture Everything Without Missing Anything
    // ─────────────────────────────────────────
    {
      id: 2,
      title: 'Capture Everything Without Missing Anything',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI at Work · Lesson 3',
          icon: '📝',
          title: 'Capture Everything Without Missing Anything',
          body: [
            "By the end of this lesson, you'll have a reliable system for capturing what matters in any meeting — so you can stay present in the conversation while never losing a decision, action item, or key point.",
          ],
          sub: "The meeting notes problem has a simple fix.",
        },
        {
          type: 'concept',
          eyebrow: "The impossible task",
          icon: '😵',
          title: "You can't fully listen and fully write at the same time.",
          body: [
            "Here's the fundamental problem with traditional meeting notes: the act of transcribing what someone is saying pulls you out of the conversation just long enough to miss the next thing they say.",
            "You end up with notes that are either detailed but incomplete, or high-level but missing crucial specifics. Either way, you're doing two things poorly instead of one thing well.",
            "The solution is to separate listening from documenting — and AI makes that split possible.",
          ],
          highlight: "Your job in the meeting is to think. AI's job is to turn your rough captures into clean, complete notes.",
        },
        {
          type: 'concept',
          eyebrow: 'The rough capture method',
          icon: '✏️',
          title: "Don't try to write clean notes in real time. Write fragments.",
          body: [
            "The approach that works: during the meeting, jot down fragments. Short phrases. Names and numbers. Decisions as they happen. Action items with owners. Anything that feels important.",
            "Don't worry about complete sentences, logical order, or clear formatting. You're not writing notes — you're leaving yourself breadcrumbs.",
            "After the meeting (even 2 minutes after), paste those fragments into ChatGPT. That's when they become real notes.",
          ],
          highlight: "Fragments in → polished notes out. The cleanup takes 2 minutes, not 20.",
        },
        {
          type: 'concept',
          eyebrow: 'What to always capture',
          icon: '🎯',
          title: "These four things are worth capturing in every meeting.",
          body: [
            "You don't need to write down everything. Focus on what matters most:",
          ],
          list: {
            items: [
              "<strong>Decisions:</strong> What was actually decided? Not discussed — decided. Write it down the moment it's clear.",
              "<strong>Action items:</strong> Who is doing what, by when? Every task needs an owner and a deadline.",
              "<strong>Open questions:</strong> What didn't get resolved? What needs a follow-up conversation or more information?",
              "<strong>Key numbers or facts:</strong> Any specific figures, dates, names, or references that came up and will matter later.",
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: 'Using AI transcription tools',
          icon: '🎙️',
          title: "Some meetings can be transcribed automatically — and it's simpler than you think.",
          body: [
            "If your meetings are on Zoom, Teams, or Google Meet, you may already have access to automatic transcription. Many organizations have it enabled by default.",
            "Even a rough, imperfect transcript is valuable — paste it into ChatGPT and ask it to extract decisions, action items, and key discussion points.",
            "If you can't record the meeting, the rough capture method works just as well. Both paths lead to the same place: clean, structured notes in under 5 minutes after the meeting ends.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "Capturing for others, not just yourself",
          icon: '👥',
          title: "Good notes serve the whole team, not just your memory.",
          body: [
            "Here's a mindset shift that changes how you take notes: write for the person who wasn't in the room.",
            "Could someone who missed this meeting read your notes and understand what was decided, what happens next, and why? If yes, they're good notes. If no, they're a personal aide-mémoire.",
            "AI helps you hit that bar consistently — because it structures your fragments with a reader in mind, not just your own memory.",
          ],
          highlight: "Notes that work for the room are private. Notes that work for absentees are valuable.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Turn rough notes from a recent meeting into clean output.',
          body: [
            "Think of a meeting you attended in the last week or two. Open <strong>chatgpt.com</strong> and paste whatever notes you took — even if they're fragments, bullet points, or messy shorthand. Then use this prompt:",
          ],
          prompt:
            "Here are my rough notes from a recent meeting. Please turn them into clean, structured meeting notes that include:\n1. Meeting summary (2–3 sentences)\n2. Key decisions made\n3. Action items (with owner if mentioned)\n4. Open questions or unresolved items\n5. Anything that needs a follow-up\n\nHere are my notes:\n[paste your rough notes]",
          body2:
            "If the output is close but not quite right — add a line like 'Make the decisions section more concise' or 'I forgot to mention: [X] was also decided.' It'll update instantly.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: "Stop trying to write clean notes live. Capture fragments and let AI finish.",
          body: [
            "The rough capture method lets you stay fully present in the meeting while never losing what matters. After the meeting, 2 minutes with AI gives you cleaner notes than 20 minutes of manual write-up ever would.",
            "In the next lesson, you'll take those clean notes one step further: turning them into action items lists and official summaries that hold people accountable.",
          ],
          summaryList: [
            "Writing clean notes in real time splits your attention — capture fragments instead",
            "Capture four things in every meeting: decisions, action items, open questions, key facts",
            "Rough fragments + AI = clean, structured notes in 2 minutes after the meeting",
            "Write notes for someone who wasn't in the room — that's the standard worth hitting",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 4 — From Notes to Action in Minutes
    // ─────────────────────────────────────────
    {
      id: 3,
      title: 'From Notes to Action in Minutes',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI at Work · Lesson 4',
          icon: '✅',
          title: 'From Notes to Action in Minutes',
          body: [
            "By the end of this lesson, you'll know how to turn raw meeting notes — no matter how rough — into a clean summary, a structured action item list, and a document that actually holds people accountable.",
          ],
          sub: "Notes are only useful if they lead to action.",
        },
        {
          type: 'concept',
          eyebrow: 'The gap between notes and outcomes',
          icon: '🕳️',
          title: "Most meeting notes never get used. Here's why.",
          body: [
            "You took the notes. They live in a notebook, a doc, or a chat thread somewhere. But did anything change because of them?",
            "The gap between meeting notes and actual outcomes is enormous — and it's usually not because people are disorganized. It's because converting notes into actionable tasks and clear documentation is another chunk of work that happens after an already long day.",
            "AI closes that gap. Rough notes in, action-ready output out.",
          ],
          highlight: "The meeting happened. The notes exist. AI does the conversion in 60 seconds.",
        },
        {
          type: 'concept',
          eyebrow: 'The meeting summary',
          icon: '📋',
          title: "A good summary is 3–5 sentences that anyone could act on.",
          body: [
            "A meeting summary isn't a transcript recap. It's a compressed, useful document: what was discussed, what was decided, and what happens next.",
            "Done well, it gives anyone — whether they were in the room or not — everything they need to understand where things stand.",
            "Done poorly, it's a wall of text nobody reads. AI writes the former by default when you give it clear instructions.",
          ],
          highlight: '"Summarize this meeting in 4–5 sentences. Cover: the main topic, the key decisions made, and the most important next steps."',
        },
        {
          type: 'concept',
          eyebrow: 'The action item list',
          icon: '📌',
          title: "Action items without owners and deadlines aren't action items.",
          body: [
            "Here's the formula for an action item that actually gets done: <strong>[Person] will [do what] by [when].</strong>",
            "Three elements. All required. Missing any one of them — especially the owner — and the item evaporates by Friday.",
            "Ask AI to extract action items from your notes in this exact format. If your notes didn't capture the owner or deadline clearly, AI will flag it as unknown — which is a signal to follow up, not to guess.",
          ],
          highlight: '"Extract all action items from these notes. Format each as: [Owner] will [action] by [deadline]. If the owner or deadline wasn\'t specified, mark it as \'TBD — needs confirmation.\'"',
        },
        {
          type: 'concept',
          eyebrow: 'Decisions on record',
          icon: '📜',
          title: "Document decisions separately from tasks — they serve different purposes.",
          body: [
            "Action items are about what happens next. Decisions are about what was agreed — and they're just as important to document, because people misremember or reinterpret decisions over time.",
            "A decisions log — even a simple list of two or three sentences — prevents the frustrating situation where a meeting reconvenes to discuss something that was already decided.",
            "Ask AI to extract decisions as a separate list from your notes: concrete statements of what was agreed, not discussion summaries.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'The open questions list',
          icon: '❓',
          title: "Unresolved items are just as important to track as resolved ones.",
          body: [
            "Every meeting has things that didn't get resolved. Maybe there wasn't enough information. Maybe a key person wasn't in the room. Maybe you ran out of time.",
            "Documenting open questions explicitly — rather than letting them get buried in meeting notes — keeps them alive. They become agenda items for the next meeting, not things that get quietly forgotten.",
            "Ask AI to extract them: 'List anything that was raised but not resolved, or that needs more information or a follow-up decision.'",
          ],
          highlight: "Open questions that get documented get answered. Open questions that don't get documented disappear.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Turn meeting notes into a complete action package.',
          body: [
            "Grab your notes from a recent meeting — rough fragments, bullet points, anything. Open <strong>chatgpt.com</strong> and use this prompt to turn them into something useful:",
          ],
          prompt:
            "Here are my notes from a recent meeting. Please create a complete meeting output package with four sections:\n\n1. SUMMARY: 3–5 sentences covering topic, key decisions, and next steps\n2. DECISIONS: A numbered list of what was actually decided (concrete statements, not discussion)\n3. ACTION ITEMS: Each formatted as '[Owner] will [action] by [deadline]' — mark any missing info as TBD\n4. OPEN QUESTIONS: Items that were raised but not resolved\n\nHere are my notes:\n[paste your notes]",
          body2:
            "The output you get is something you could send to your team right now. In the next lesson, you'll learn how to use it as the foundation for your follow-up email.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: "Raw notes become accountable outcomes in under 2 minutes.",
          body: [
            "A summary, action items with owners, decisions on record, and open questions tracked — all from rough fragments, in the time it takes to make a coffee.",
            "In the final lesson, you'll take this output and turn it into the follow-up email that ensures everything you just captured actually gets done.",
          ],
          summaryList: [
            'Raw notes become useful only when converted into summaries, tasks, and decisions',
            'Action items need three elements: owner, action, and deadline — missing any one and they disappear',
            'Document decisions separately from tasks — people misremember what was agreed',
            'Open questions explicitly tracked become agenda items; questions buried disappear',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 5 — The Follow-Up That Gets Things Done
    // ─────────────────────────────────────────
    {
      id: 4,
      title: "The Follow-Up That Gets Things Done",
      meta: '9 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI at Work · Lesson 5',
          icon: '📤',
          title: "The Follow-Up That Gets Things Done",
          body: [
            "By the end of this lesson, you'll have a complete, AI-powered meeting workflow — from prep to follow-up — and you'll know how to write the follow-up email that actually drives accountability and closes the loop.",
          ],
          sub: "The follow-up is where the meeting becomes real.",
        },
        {
          type: 'concept',
          eyebrow: 'Why follow-up emails matter more than you think',
          icon: '📧',
          title: "The meeting was a conversation. The follow-up email is the official record.",
          body: [
            "People leave meetings with slightly different versions of what was decided. Someone remembers a commitment that someone else doesn't. An action item gets attributed to the wrong person.",
            "A well-written follow-up email sent within an hour of the meeting is the single most effective way to prevent all of that. It creates a shared record that everyone saw and didn't object to.",
            "It also signals that you're the person in the room who makes things happen — not just someone who attends meetings.",
          ],
          highlight: "A follow-up email sent fast is worth ten reminder messages sent later.",
        },
        {
          type: 'concept',
          eyebrow: "What to include",
          icon: '📋',
          title: "A great follow-up email has four parts — and fits in one screen.",
          body: [
            "The best follow-up emails are short enough to be read immediately. Here's the structure:",
          ],
          list: {
            items: [
              "<strong>One-sentence summary:</strong> What was the meeting about and what was the outcome?",
              "<strong>Decisions made:</strong> A brief numbered list — clean, concrete statements",
              "<strong>Action items:</strong> Who does what by when — named, specific, dated",
              "<strong>Next steps or next meeting:</strong> What happens after this, and when",
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: "The follow-up prompt",
          icon: '💡',
          title: "From the notes you already have to a send-ready email in 30 seconds.",
          body: [
            "You already did the hard work in the last lesson — you have a summary, decisions, and action items. The follow-up email is just those elements packaged for an email audience.",
            "Here's the prompt pattern that works reliably:",
          ],
          highlight: '"Using these meeting notes, write a brief follow-up email to send to all attendees. Include: a one-sentence summary of what we covered, the key decisions we made, action items (with owner and deadline), and next steps. Keep it concise — under 200 words. Tone: professional and clear."',
        },
        {
          type: 'concept',
          eyebrow: "Timing matters",
          icon: '⏰',
          title: "Send it within an hour. Every hour you wait, it gets harder.",
          body: [
            "The ideal follow-up email lands in everyone's inbox before they've moved fully on to the next thing. That means within 60 minutes of the meeting ending.",
            "Waiting until later that afternoon means you're writing it during another context — slower, less accurate, more likely to get postponed to tomorrow.",
            "With AI, there's no reason to wait. You have your notes. The email takes 2 minutes. Send it.",
          ],
          highlight: "Speed and accuracy together are what make a follow-up email useful — not polish. Fast and correct beats polished and late.",
        },
        {
          type: 'concept',
          eyebrow: "Your complete meeting workflow",
          icon: '🔄',
          title: "Put it all together — the full system.",
          body: ["Here's the end-to-end workflow you now have:"],
          list: {
            items: [
              '<strong>5 min before:</strong> Use AI to draft agenda, get context, prepare talking points',
              '<strong>During:</strong> Capture fragments — decisions, actions, questions, key facts',
              '<strong>2 min after:</strong> Paste fragments into AI, get clean notes and action package',
              '<strong>5 min after:</strong> Use AI to draft follow-up email from the notes',
              '<strong>Total AI overhead:</strong> ~12 minutes. Meeting impact: dramatically better',
            ],
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Draft a follow-up email from your meeting notes.',
          body: [
            "Use the meeting notes you already have (from the exercise in Lesson 4, or any recent meeting). Open <strong>chatgpt.com</strong> and paste this prompt:",
          ],
          prompt:
            "I need to write a follow-up email to send to everyone who attended a meeting. Here are the cleaned-up notes:\n[paste your summary, decisions, and action items]\n\nPlease write a brief, professional follow-up email that:\n- Opens with a one-sentence summary of what was covered\n- Lists the key decisions (numbered)\n- Lists action items clearly with owners and deadlines\n- Closes with next steps or the next meeting date\n- Stays under 200 words\n- Tone: professional, clear, and collegial",
          body2:
            "The email you get should be ready to send with minimal editing. If the tone needs adjusting ('a bit warmer' or 'more direct'), tell it — one follow-up message gets it right.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 3 Complete',
          icon: '🎓',
          title: "Meetings are no longer a drain. They're a system.",
          body: [
            "You now have a complete AI-powered meeting workflow. Prep in 5 minutes. Capture what matters without losing the conversation. Clean notes in 2 minutes after. Follow-up email sent before everyone's moved on.",
            "The next module takes the same discipline to your written output — turning rough notes and bullet points into polished reports and documents in minutes, not hours.",
          ],
          summaryList: [
            'A follow-up email within 60 minutes creates the official record and drives accountability',
            'Four parts: one-sentence summary, decisions, action items, next steps — fits one screen',
            'Your AI meeting system: 5 min prep + fragment capture + 2 min cleanup + 5 min follow-up',
            'Fast and accurate beats polished and late — send it while the meeting is still fresh',
          ],
          gradBlock: {
            icon: '📅',
            title: "Meetings Are Under Control",
            body: "You have a complete AI meeting system — from sharp prep to clean follow-ups that drive accountability. Every meeting you run from here is better prepared, better documented, and more likely to lead to action.",
            name: 'Module 3 Complete',
          },
        },
      ],
    },
  ],

  quiz: [
    {
      q: "According to this module, what is the 'real cost' of a one-hour meeting?",
      options: [
        "Exactly 60 minutes — the block on the calendar",
        "45 minutes on average due to late starts",
        "90–120 minutes once prep and follow-up are included",
        "2–3 hours if it includes a lot of discussion",
      ],
      correct: 2,
      feedback:
        "The meeting itself is just the middle third. Prep (agenda, context, talking points) and follow-up (notes cleanup, action items, follow-up email) routinely add 30–60 minutes on each side. AI compresses both ends dramatically.",
    },
    {
      q: "What is the recommended approach to taking notes during a meeting?",
      options: [
        "Write complete sentences for every point so nothing is missed",
        "Record the meeting and transcribe it word for word afterward",
        "Capture rough fragments — decisions, actions, questions — and let AI structure them after",
        "Assign one person to take notes so everyone else can focus",
      ],
      correct: 2,
      feedback:
        "Writing clean notes in real time splits your attention between listening and transcribing — you do both poorly. Capturing rough fragments keeps you present in the conversation. After the meeting, AI turns those fragments into structured, polished notes in under 2 minutes.",
    },
    {
      q: "When documenting action items, what three elements must every action item include to be effective?",
      options: [
        "Topic, discussion summary, and meeting date",
        "Owner, action, and deadline",
        "Priority level, department, and project name",
        "Who requested it, who approved it, and who will review it",
      ],
      correct: 1,
      feedback:
        "An action item without an owner, a clear action, or a deadline is likely to evaporate. All three elements are required. If your notes don't capture any of them, AI will mark it as TBD — a prompt to follow up and confirm, not to guess.",
    },
    {
      q: "Why should decisions be documented separately from action items?",
      options: [
        "Decisions are more important and deserve their own section in every report",
        "Action items are for individuals; decisions are for the group",
        "People misremember or reinterpret what was agreed — a decisions record prevents that",
        "It makes the meeting notes longer and more thorough",
      ],
      correct: 2,
      feedback:
        "Over time, people recall decisions differently — especially as context changes. A clear decisions log prevents meetings from relitigating what was already resolved and creates accountability to what was actually agreed.",
    },
    {
      q: "When is the ideal time to send a meeting follow-up email?",
      options: [
        "At the end of the workday, once you've had time to reflect",
        "Within an hour of the meeting ending",
        "The following morning when you're fresh",
        "Only when someone specifically asks for notes",
      ],
      correct: 1,
      feedback:
        "Sending within 60 minutes of the meeting creates the official record while everyone's memory is fresh and before they've fully moved on. With AI, drafting the email takes 2–3 minutes — there's no reason to wait.",
    },
  ],
}

export default c2module3
