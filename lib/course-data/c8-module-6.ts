import type { CourseData } from './types'

const c8module6: CourseData = {
  moduleId: 48,
  title: 'Delegating Real Tasks',
  subtitle: 'Module 6',
  lessons: [
    {
      id: 0,
      title: 'Thinking in Tasks, Not Questions',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 6 · Lesson 1',
          icon: '🧠',
          title: 'To get the most from Cowork, you have to change how you ask.',
          body: [
            "In the last module you met Cowork — Claude's desktop assistant that completes whole multi-step tasks using the files in the folders you connect, and hands the finished work back for you to check. It's a different way of working, and it asks for a different way of thinking.",
            "Most people are used to asking Claude a <em>question</em> and getting an answer. Cowork shines when you give it a <em>task</em> instead — a complete outcome with steps involved. This lesson is about making that mental switch.",
          ],
          sub: "Stop asking 'what should I do?' Start saying 'here's what I want done.'",
        },
        {
          type: 'concept',
          eyebrow: 'The core shift',
          icon: '🎯',
          title: 'Describe the finished result, not a single step.',
          body: [
            "A question sounds like: “What's a good way to summarize these files?” A task sounds like: “Read these files and give me one summary report.” The first asks for advice. The second asks for a deliverable — and that's what Cowork is built to produce.",
            "When you describe the outcome you actually want, Cowork can figure out the steps in between: opening files, pulling out what matters, and assembling the result. You're handing over the whole job, not just one question about it.",
          ],
          highlight: "A good Cowork task names the end result — the thing you want sitting on your desk when it's done.",
        },
        {
          type: 'concept',
          eyebrow: 'What makes a great task',
          icon: '🪜',
          title: 'The best tasks are multi-step and a little tedious.',
          body: [
            "Think about the jobs you put off — the ones that aren't hard, just <em>fiddly</em>. Going through a folder of documents one by one. Pulling the same few numbers out of twelve files. Renaming things, sorting things, copying details from here to there.",
            "Those are exactly the tasks Cowork is best at. They have several steps, they're repetitive, and they eat your afternoon. Handing them over is where you feel the value most — because you get the time back.",
          ],
          highlight: "If a task makes you sigh because it's many small steps, it's a perfect candidate to delegate.",
        },
        {
          type: 'concept',
          eyebrow: 'Spot your delegating opportunities',
          icon: '🔍',
          title: 'Your best tasks are hiding in your to-do list.',
          body: [
            "You don't have to invent work for Cowork. Look at the tasks you already dread or postpone — the ones with several steps and real files behind them. Here are the kinds of jobs that fit:",
          ],
          list: {
            items: [
              "<strong>Gather and combine</strong> — pull details from many files into one place",
              "<strong>Summarize a pile</strong> — turn a folder of documents into one short report",
              "<strong>Tidy and organize</strong> — rename, sort, or reformat a batch of files",
              "<strong>Compare across files</strong> — line up numbers or notes from several sources",
              "<strong>Draft from your own material</strong> — build something new using files you already have",
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'A question vs. a task',
          title: 'The same goal, framed two different ways.',
          bad: {
            label: '❌ Framed as a question',
            text: '"How should I go about reviewing all my expense receipts from last month?" → Helpful advice you still have to act on yourself, one receipt at a time.',
          },
          good: {
            label: '✅ Framed as a task',
            text: '"Go through the receipts in my Expenses folder, pull out the date, vendor, and amount from each one, and give me a single list I can hand to my accountant." → A finished deliverable, done for you.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Turn one chore into a task you could delegate.',
          body: [
            "Before you open Cowork, get crisp on what you'd actually hand it. Use the prompt below in a normal Claude chat to take a vague chore and shape it into a clear, delegable task.",
          ],
          prompt: "I want to delegate a real task to Claude's Cowork assistant, but I'm used to asking questions instead of describing finished work. Here's a chore I keep putting off: [describe a multi-step, tedious task involving files you have]. Help me rewrite it as a clear task — name the finished result I want, and list the steps involved. Then tell me what files or folders Cowork would need.",
          body2: "Take the task description Cowork would need and keep it handy. In the next lesson you'll walk one of these all the way through to a finished deliverable.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: 'You think in tasks now, not just questions.',
          body: [
            "The shift is simple but powerful: instead of asking Claude what to do, you describe the finished result you want and let Cowork handle the steps. The best tasks to hand over are the multi-step, tedious ones you'd rather not do yourself.",
            "Next lesson: walking a whole deliverable — many files in, one finished report out — from start to finish.",
          ],
          summaryList: [
            'Cowork works best when you give it a task, not a question',
            'Describe the finished result and let it figure out the steps',
            'The best tasks are multi-step, repetitive, and a bit tedious',
            'Your delegating opportunities are already on your to-do list',
          ],
        },
      ],
    },
    {
      id: 1,
      title: 'Multi-Step Deliverables, Start to Finish',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 6 · Lesson 2',
          icon: '📦',
          title: "Let's hand Cowork a real job and watch it finish the whole thing.",
          body: [
            "Now that you think in tasks, it's time to delegate a complete deliverable — something with several files going in and one finished result coming out. This is where Cowork earns its keep.",
            "We'll use a running example: “Take these twelve files, pull the key numbers, and build me one summary report.” By the end of this lesson you'll know how to describe a job like that clearly enough for Cowork to nail it.",
          ],
          sub: "Many files in, one finished thing out — that's the shape of a great delegation.",
        },
        {
          type: 'concept',
          eyebrow: 'Anatomy of a deliverable',
          icon: '🧩',
          title: 'A clear task has three parts: the inputs, the steps, the output.',
          body: [
            "Every good delegation answers three questions. <em>What does Cowork start with?</em> (the files in the folder you connect). <em>What should it do with them?</em> (the steps — read, pull out, compare, combine). <em>What should land at the end?</em> (the finished output, in the form you want it).",
            "When you spell out all three, you've removed the guesswork. Cowork knows where to begin, what to do, and what 'done' looks like.",
          ],
          highlight: "Inputs + steps + the finished output. Name all three and your task is ready to hand over.",
        },
        {
          type: 'concept',
          eyebrow: 'Describe the end result clearly',
          icon: '📝',
          title: 'Be specific about the form the finished work should take.',
          body: [
            "“Give me a summary” leaves a lot open. “Give me a one-page summary with a short paragraph per file and a table of the key numbers at the top” tells Cowork exactly what to build. The more clearly you picture the finished thing, the more clearly you can describe it.",
            "Think about length, structure, and format. Do you want a document or a list? Sections or a single block? A table? Say so up front — it's much easier than asking for changes after.",
          ],
          highlight: "Picture the finished page in your head, then describe what you see. That's your output spec.",
        },
        {
          type: 'concept',
          eyebrow: 'Let it work, then check',
          icon: '🔎',
          title: 'Cowork does the steps; you do the final review.',
          body: [
            "Once you've given a clear task, Cowork works through it — opening each file, pulling out what you asked for, and assembling the result. It returns finished work for you to look over, not something published behind your back.",
            "Your job at the end is simple but important: read what it produced and make sure it's right before you rely on it. You're the supervisor signing off on the work, which is exactly how it should be.",
          ],
          highlight: "Cowork delivers a draft of the finished job. You stay the one who approves it.",
        },
        {
          type: 'compare',
          eyebrow: 'Vague brief vs. clear brief',
          title: 'Two ways to ask for the same report.',
          bad: {
            label: '❌ Vague brief',
            text: '"Summarize these files for me." → Cowork has to guess what matters, how long it should be, and what shape you want — so the result is hit-or-miss.',
          },
          good: {
            label: '✅ Clear brief',
            text: '"For each of the 12 files in my Reports folder, pull the total revenue and the headcount. Build me one document with a table of those numbers and a two-sentence summary of the overall trend." → A predictable, useful result.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This in Cowork',
          icon: '🎯',
          title: 'Delegate one full deliverable from start to finish.',
          body: [
            "Time to do it for real. Connect a folder that holds a handful of related files, then give Cowork a complete task using the structure below — inputs, steps, and the exact output you want.",
          ],
          prompt: "Here's the task. The files: everything in the folder I've connected. The steps: read each file, then pull out [the specific details you need]. The output I want: [describe the finished result — e.g. one document with a table of the key numbers at the top and a short summary paragraph below]. Work through all the files and build me that finished result.",
          body2: "In Cowork, connect the folder first, paste the task, and let it run. When it hands back the result, read it carefully against the original files — that final review is your part of the job.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: 'You can hand off a whole deliverable, not just a step.',
          body: [
            "A clear delegation names the inputs, the steps, and the finished output — and the more clearly you describe the end result, the better it lands. Cowork does the work; you do the final review.",
            "Next lesson: knowing when a job belongs in Cowork at all, versus when a quick chat is the smarter tool.",
          ],
          summaryList: [
            'A clear task names inputs, steps, and the finished output',
            'Be specific about the form the result should take',
            'Cowork works through the steps and returns finished work',
            'Always review the result against the source files before relying on it',
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Chat vs. Cowork: Choosing the Right Tool',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 6 · Lesson 3',
          icon: '🧭',
          title: 'Two ways to work with Claude — and a simple rule for picking.',
          body: [
            "You now have two ways to put Claude to work: the chat you've used all along, and Cowork for whole multi-step jobs. They're not rivals — they're for different moments, and knowing which to reach for saves you time.",
            "This lesson gives you a clear decision guide so you never have to wonder. The short version: chat <em>answers and drafts</em>; Cowork <em>acts and delivers</em>.",
          ],
          sub: "The right tool for the moment beats the more powerful tool every time.",
        },
        {
          type: 'concept',
          eyebrow: 'When to use chat',
          icon: '💬',
          title: 'Reach for chat when you want a quick answer or a draft.',
          body: [
            "Chat is your fast, flexible workspace. Ask a question, get an answer. Draft an email, then tweak it together. Think out loud about a decision and let Claude push back. It's perfect for anything where you want to go back and forth quickly.",
            "If the job is mostly conversation — one thing at a time, with you steering each step — chat is the right home for it. It's lighter, faster, and exactly enough for most everyday tasks.",
          ],
          highlight: "Quick answers, drafting, thinking out loud — that's chat's home turf.",
        },
        {
          type: 'concept',
          eyebrow: 'When to use Cowork',
          icon: '🛠️',
          title: 'Reach for Cowork when there\'s a whole multi-step job across files.',
          body: [
            "Cowork is for the jobs that are too big or too fiddly to do one message at a time. When the work spans several files, has multiple steps, and ends in a finished deliverable, that's Cowork's territory — it can act on the files in the folders you connect and hand back the completed result.",
            "The tell is usually the files. If doing the task by hand would mean opening a folder and working through item after item, Cowork is the better tool.",
          ],
          highlight: "Multiple steps, multiple files, a finished deliverable at the end — that's a Cowork job.",
        },
        {
          type: 'concept',
          eyebrow: 'A quick decision guide',
          icon: '📋',
          title: 'Three questions tell you which to use.',
          body: [
            "When you're not sure, run through these. If you answer 'yes' to the chat questions, stay in chat. If you answer 'yes' to the Cowork questions, open Cowork:",
          ],
          list: {
            items: [
              "<strong>Chat:</strong> Do I just need an answer, a draft, or to talk something through?",
              "<strong>Chat:</strong> Is this one thing I want to shape back and forth with Claude?",
              "<strong>Cowork:</strong> Does this involve several files I'd otherwise open one by one?",
              "<strong>Cowork:</strong> Is this a multi-step job that ends in a finished deliverable?",
              "<strong>Cowork:</strong> Would I happily walk away while it runs, then check the result?",
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'Same goal, different tool',
          title: 'When chat fits and when Cowork fits.',
          bad: {
            label: '💬 A chat job',
            text: '"Help me write a polite reply to this one client email." → Quick, conversational, one thing you shape together. Stay in chat.',
          },
          good: {
            label: '🛠️ A Cowork job',
            text: '"Go through my whole Client Emails folder, find every one that\'s still waiting on a reply, and draft a response for each." → Many files, many steps, finished work out. Use Cowork.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Sort your real tasks into chat and Cowork.',
          body: [
            "Get the instinct into your bones by sorting your own work. Use the prompt below in a chat with Claude to triage a list of things you do.",
          ],
          prompt: "I'm learning when to use a quick Claude chat versus Cowork, Claude's assistant for whole multi-step jobs across files. Here are tasks I do regularly: [list 5 or 6]. For each one, tell me whether it's better suited to chat or Cowork, and explain why in one sentence. Then point out which of the Cowork tasks would save me the most time.",
          body2: "Keep the Cowork-suited tasks on a short list — those are the ones worth setting up to delegate. You're building your delegation shortlist as you go.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: 'You always know which tool the moment calls for.',
          body: [
            "Chat answers and drafts; Cowork acts and delivers. Use chat for quick, conversational, one-at-a-time work. Use Cowork when there's a whole multi-step job across multiple files that ends in a finished deliverable.",
            "Next lesson: how to keep an agent like Cowork safely on the rails as it works for you.",
          ],
          summaryList: [
            'Chat answers and drafts; Cowork acts and delivers',
            'Use chat for quick answers, drafting, and thinking out loud',
            'Use Cowork for multi-step jobs across multiple files',
            'When unsure, run the quick three-question decision guide',
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Keeping the Agent on the Rails',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 6 · Lesson 4',
          icon: '🛡️',
          title: 'Delegating real work means setting a few sensible guardrails.',
          body: [
            "Cowork can open files, work through steps, and produce finished results — which is exactly why it's worth using a little care in how you set it loose. The good news: keeping it on the rails is mostly common sense, and it quickly becomes second nature.",
            "This lesson covers the handful of guardrails that let you delegate confidently — so you get the time savings without any nasty surprises.",
          ],
          sub: "A few simple habits keep delegation safe, calm, and entirely under your control.",
        },
        {
          type: 'concept',
          eyebrow: 'Guardrail one',
          icon: '📁',
          title: 'Connect only the folders the task actually needs.',
          body: [
            "Cowork can only see the folders you connect it to. So connect the one folder a task needs — not your entire computer. If the job is about your expense receipts, give it the Expenses folder and nothing more.",
            "This keeps Cowork focused on the right files and keeps everything else well out of reach. It's the single easiest guardrail, and it does a lot of the work for you.",
          ],
          highlight: "Give Cowork the smallest folder that gets the job done — never more than it needs.",
        },
        {
          type: 'concept',
          eyebrow: 'Guardrail two',
          icon: '🐣',
          title: 'Start small and low-stakes while you build trust.',
          body: [
            "For your first few tasks, pick jobs where a mistake wouldn't matter much — a summary you'll read anyway, a draft you'll edit, a tidy-up of files you have copies of. You're learning how Cowork works, and low-stakes tasks are a forgiving place to do it.",
            "As you see it handle the small jobs well, you'll naturally trust it with bigger ones. Earned trust beats blind trust every time.",
          ],
          highlight: "First few tasks should be ones where a slip-up costs you nothing. Trust grows from there.",
        },
        {
          type: 'concept',
          eyebrow: 'Guardrails three and four',
          icon: '🎯',
          title: 'Give clear goals and limits — and review before you rely.',
          body: [
            "Be specific about what you want <em>and</em> what you don't. “Draft replies but don't send anything” or “summarize these but don't change the original files” sets clear limits Cowork will respect. Clear goals plus clear limits keep the work inside the lines you've drawn.",
            "And always read the finished result before you act on it. Cowork hands work back for your review on purpose — that final check is where you stay firmly in charge.",
          ],
          highlight: "Say what you want and what to avoid. Then review the result before you rely on it.",
        },
        {
          type: 'compare',
          eyebrow: 'Loose vs. careful delegation',
          title: 'Two ways to hand off the same job.',
          bad: {
            label: '❌ Loose',
            text: 'Connect your whole drive, give a vague goal, jump straight to a high-stakes task with sensitive data, and act on the output without reading it.',
          },
          good: {
            label: '✅ Careful',
            text: 'Connect just the one needed folder, give a clear goal and limits, start with a low-stakes job, keep sensitive info out, and review the result before relying on it.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Write the guardrails into your task itself.',
          body: [
            "The easiest way to stay safe is to bake the limits right into how you ask. Use the prompt below to have Claude help you wrap clear guardrails around a task you plan to delegate.",
          ],
          prompt: "I'm about to delegate this task to Cowork: [describe the task and the files involved]. Help me write it with clear guardrails: state the goal, list what Cowork should NOT do, name the smallest folder it needs, and remind me to review the result. Also flag anything sensitive I should keep out of the connected folder.",
          body2: "Before you run anything, do the simple checks by hand: connect only the folder named, make sure no sensitive files are in it, and plan to read the output. Guardrails take a minute and save you far more.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: 'You can delegate real work without losing control.',
          body: [
            "Connect only the folders a task needs, start with low-stakes jobs, give clear goals and limits, keep sensitive information out, and review the output before you rely on it. None of it is hard — and together it lets you delegate with total confidence.",
            "Last lesson: pulling the whole course together into your personal Cowork playbook, plus a look at what comes next.",
          ],
          summaryList: [
            'Connect only the folders the task actually needs',
            'Start with low-stakes tasks while you build trust',
            'Give clear goals and clear limits in the task itself',
            'Keep sensitive data out of connected folders',
            'Always review the result before you rely on it',
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Your Cowork Playbook + What\'s Next',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 6 · Lesson 5',
          icon: '🏆',
          title: "You've come a long way — let's turn it into a playbook you'll keep using.",
          body: [
            "Over this course you went from sharper conversations to Projects, connected tools, Skills, the Cowork assistant, and now delegating real tasks start to finish. That's a serious set of skills.",
            "This final lesson pulls it all together. You'll build a personal playbook of tasks worth delegating, and get a look at where the Clearly, AI Claude path goes from here.",
          ],
          sub: "Skills fade without a habit. A playbook turns what you learned into what you do.",
        },
        {
          type: 'concept',
          eyebrow: 'The whole course in one breath',
          icon: '📚',
          title: 'Everything you learned, in a single thread.',
          body: [
            "It all builds on one idea: stop repeating yourself and let Claude carry your context and your work forward. Custom instructions and roles sharpened your conversations. Projects gave Claude lasting context. Connectors plugged it into your real tools. Skills packaged your routines. And Cowork took on whole multi-step jobs.",
            "Each module added more horsepower to the same simple move — describe what you need once, then let Claude do more of the work. Delegation is where that move pays off the most.",
          ],
          highlight: "From sharper chats to delegated tasks — it's all the same idea, scaled up step by step.",
        },
        {
          type: 'concept',
          eyebrow: 'Build your playbook',
          icon: '📒',
          title: 'Keep a running list of tasks worth delegating.',
          body: [
            "The most valuable thing you can leave this course with is a short, living list: the tasks <em>you</em> should hand to Cowork. The fiddly, multi-step, file-heavy jobs you do over and over. Write them down — a note on your phone is plenty.",
            "Each time you catch yourself doing one of those tasks by hand, add it to the list. Over a few weeks you'll build a playbook of delegations that quietly give you hours back.",
          ],
          list: {
            items: [
              "<strong>The task</strong> — what finished result you want",
              "<strong>The folder</strong> — which files Cowork needs",
              "<strong>The limits</strong> — anything it should not do",
              "<strong>How often</strong> — so you remember to reuse it",
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Where the path goes next',
          icon: '🚀',
          title: 'Coming soon: "Claude, Mastered" — the advanced course.',
          body: [
            "If this course gave you confidence, there's a deeper level waiting. Our advanced course, <strong>Claude, Mastered</strong>, goes further with Cowork and adds a hands-on introduction to <strong>Claude Code</strong> — a more powerful way to put Claude to work on bigger projects.",
            "Don't let the name scare you: it's built to be accessible, not just for coders. It's the natural next step once delegating real tasks feels comfortable. Keep an eye out — it's coming soon.",
          ],
          highlight: "Claude, Mastered: deeper Cowork plus a friendly first look at Claude Code. Coming soon.",
        },
        {
          type: 'compare',
          eyebrow: 'Before and after this course',
          title: 'How your work with Claude has changed.',
          bad: {
            label: '📅 Before this course',
            text: 'You chatted with Claude one question at a time, re-explaining yourself each session and doing all the multi-step busywork by hand.',
          },
          good: {
            label: '✅ After this course',
            text: 'Claude knows your context, connects to your tools, runs your routines, and takes whole jobs off your plate — while you stay firmly in charge.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Final Challenge',
          icon: '🎯',
          title: 'Build your delegation playbook with Claude\'s help.',
          body: [
            "Finish strong by capturing your playbook now, while everything's fresh. Use the prompt below in a chat to turn your week into a list of delegations worth making.",
          ],
          prompt: "Help me build a personal Cowork delegation playbook. Here's what a typical week of my work looks like: [describe your recurring tasks, especially the fiddly multi-step ones]. Pick the 3–5 tasks best suited to delegate to Cowork. For each, write a short playbook entry: the finished result I want, which folder Cowork would need, any limits to set, and how often I'd run it.",
          body2: "Save the playbook somewhere you'll see it, and pick one entry to actually run in Cowork this week. That first real delegation is how the habit sticks.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Course Complete',
          icon: '🎉',
          title: "You can put Claude to real work — and you know how to keep going.",
          body: [
            "You've gone from chatting with Claude to delegating whole tasks safely and confidently. You have a playbook of delegations worth making and the judgment to know which tool fits each moment. That's genuine command of Claude for real work.",
            "When you're ready for the next level, Claude, Mastered will take you deeper into Cowork and introduce Claude Code — coming soon. For now: pick one task from your playbook and hand it off this week.",
          ],
          summaryList: [
            'The whole course builds on one idea: set it up once, let Claude carry it',
            'Keep a living playbook of tasks worth delegating',
            'Record the task, the folder, the limits, and how often for each',
            '"Claude, Mastered" — advanced Cowork plus Claude Code — is coming soon',
            'Pick one delegation and run it this week to make the habit stick',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'What is the key mindset shift for getting value from Cowork?',
      options: [
        'Ask Claude as many separate questions as possible',
        'Describe a complete outcome with its steps, not a single question',
        'Always connect your entire computer so nothing is missed',
        'Only delegate tasks that are quick and one-step',
      ],
      correct: 1,
      feedback:
        "Cowork shines when you give it a task instead of a question — describe the finished result you want and the steps involved, and let it do the multi-step work. The best tasks to hand over are exactly the fiddly, multi-step, repetitive ones you'd rather not do by hand.",
    },
    {
      q: 'You need a quick, conversational draft of a single email. Which tool fits best?',
      options: [
        'Cowork, because it handles every kind of task',
        'Neither — single emails should always be written by hand',
        'A regular Claude chat, because it is fast and you shape it back and forth',
        'Cowork, but only after connecting all of your folders',
      ],
      correct: 2,
      feedback:
        "Chat answers and drafts; Cowork acts and delivers. A single email you want to shape together is a quick, one-at-a-time, conversational job — that's chat's home turf. Save Cowork for whole multi-step jobs that span several files and end in a finished deliverable.",
    },
    {
      q: 'Which set of habits keeps an agent like Cowork safely on the rails?',
      options: [
        'Connect everything, start with your highest-stakes task, and skip the review',
        'Connect only the needed folder, start low-stakes, set clear limits, and review the result',
        'Give vague goals so Cowork has freedom to decide everything',
        'Put all your sensitive data in the folder so it has full context',
      ],
      correct: 1,
      feedback:
        "Safe delegation comes down to a few sensible guardrails: connect only the folder the task needs, start with low-stakes jobs while you build trust, give clear goals and limits, keep sensitive information out, and always review the finished work before you rely on it.",
    },
  ],
}

export default c8module6
