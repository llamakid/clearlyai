import type { CourseData } from './types'

const c8module4: CourseData = {
  moduleId: 46,
  title: 'Skills & Document Work',
  subtitle: 'Module 4',
  nextModuleId: 47,
  lessons: [
    {
      id: 0,
      title: 'Meet Skills: Repeatable Workflows',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 4 · Lesson 1',
          icon: '🧰',
          title: 'Claude can do more than chat — it can handle whole routines for you.',
          body: [
            "So far you've used Claude to write, think, and organize. This module is about something more concrete: Claude actually <em>producing the files</em> you work with every day — Word documents, spreadsheets, slide decks, and PDFs.",
            "The thing that makes this possible has a name: <strong>Skills</strong>. In this first lesson you'll learn what a Skill is, why it matters, and how it connects to the workflow mindset you've been building all along.",
          ],
          sub: "By the end of this module, Claude won't just describe a document — it'll make one.",
        },
        {
          type: 'concept',
          eyebrow: 'What a Skill actually is',
          icon: '🎁',
          title: 'A Skill is a packaged, reusable ability Claude can pull out when it needs it.',
          body: [
            "Think of a Skill as a tool in Claude's toolbox that's already set up and ready to go. Instead of you explaining, step by step, how to build a properly formatted Word document, a Skill bundles that whole know-how together so Claude can just <em>do it</em>.",
            "You don't install Skills the way you install an app, and you usually don't have to ask for one by name. When your request calls for it, Claude reaches for the right Skill on its own.",
          ],
          highlight: "A Skill = a ready-made ability for a whole routine, so Claude doesn't reinvent it each time.",
        },
        {
          type: 'concept',
          eyebrow: 'Why this is the same idea you already know',
          icon: '🔁',
          title: "It's the 'notice what repeats, capture it' idea — but built right in.",
          body: [
            "Back in Module 1 you learned to spot tasks that repeat and capture them as reusable prompts. Skills are that exact idea taken one step further: instead of <em>you</em> saving the routine, Anthropic has packaged some of the most common routines and built them straight into Claude.",
            "So the mindset carries over perfectly. You already think in workflows. Skills just mean some of the most useful workflows — especially around documents — come pre-built and ready for you to use.",
          ],
          highlight: "Reusable prompts are routines you capture. Skills are routines Claude already has.",
        },
        {
          type: 'concept',
          eyebrow: 'The built-in Skills that matter most',
          icon: '📑',
          title: 'Claude comes with Skills for the everyday office file types.',
          body: [
            "Anthropic provides built-in Skills for the documents most of us live in. That means Claude can both <em>create</em> and <em>edit</em> these kinds of files — not just talk about them.",
          ],
          list: {
            items: [
              '<strong>Word documents</strong> — write, format, and edit real text documents',
              '<strong>Excel spreadsheets</strong> — organize numbers and data into a working sheet',
              '<strong>PowerPoint presentations</strong> — turn ideas into a slide deck',
              '<strong>PDFs</strong> — read, summarize, and pull information out of them',
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'Talking about a document vs. getting one',
          title: 'The difference a Skill makes.',
          bad: {
            label: '❌ Without document Skills',
            text: '"Help me write a one-page client summary." → Claude gives you text in the chat that you then have to copy, paste into Word, and format yourself.',
          },
          good: {
            label: '✅ With document Skills',
            text: '"Make me a one-page client summary as a Word document." → Claude produces a real, formatted file you can download and send — no copy-paste, no reformatting.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: "See for yourself what Claude can build.",
          body: [
            "Before we go deep on each file type, get a feel for the range. Ask Claude directly what kinds of documents it can produce, using your own work as the example. Paste the prompt below.",
          ],
          prompt: "I want to start using you to create real documents, spreadsheets, and slide decks — not just text in the chat. Here's the kind of work I do: [describe your role and the documents you make often]. Based on that, give me five specific examples of documents, spreadsheets, or presentations you could create or edit for me, and tell me what I'd need to give you for each one.",
          body2: "Keep Claude's list handy. It's a preview of everything you'll learn to do across the rest of this module — and a few of those examples are probably tasks you've been doing by hand for years.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: 'You understand what Skills are and why they matter.',
          body: [
            "Skills are packaged, reusable abilities Claude can use to handle whole routines — and several of the most useful ones, for everyday office files, come built in.",
            "Next lesson: putting the document Skills to work, starting with the file most of us spend our days in — Word documents — plus reading and pulling from PDFs.",
          ],
          summaryList: [
            'A Skill is a ready-made ability Claude uses to handle a whole routine',
            'You usually don\'t install or name a Skill — Claude reaches for it',
            'Skills are the "notice it, capture it" idea built right into Claude',
            'Built-in Skills cover Word, Excel, PowerPoint, and PDFs',
            'Claude can both create and edit these everyday file types',
          ],
        },
      ],
    },
    {
      id: 1,
      title: 'Working With Word and PDF',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 4 · Lesson 2',
          icon: '📄',
          title: 'Turn rough notes into a polished document — and pull sense out of a long PDF.',
          body: [
            "Word documents and PDFs are the bread and butter of office work. One you create; the other usually lands in your inbox and needs to be understood fast. Claude is genuinely good at both.",
            "In this lesson you'll learn to hand Claude messy notes and get back a clean, formatted document — and to drop in a dense PDF and get a clear summary or the exact facts you need.",
          ],
          sub: "Stop building documents from scratch and stop reading PDFs line by line.",
        },
        {
          type: 'concept',
          eyebrow: 'From notes to a real document',
          icon: '✍️',
          title: 'Give Claude your raw thoughts; get back a finished Word document.',
          body: [
            "You don't need to write neatly to get a neat result. Paste in bullet points, half-sentences, a brain dump — and tell Claude what kind of document you want it to become. It handles the structure, the headings, and the formatting.",
            "The clearer you are about the <em>shape</em> you want — a one-page summary, a formal letter, a proposal with sections — the closer the first draft lands to finished.",
          ],
          highlight: "Messy in, polished out. Your job is the thinking; Claude's job is the formatting.",
        },
        {
          type: 'concept',
          eyebrow: 'Filling templates and matching a format',
          icon: '🧩',
          title: 'Have a format you reuse? Claude can fill it in every time.',
          body: [
            "If you produce the same kind of document over and over — a standard report, a recurring update, a client-facing one-pager — describe that format to Claude once, or share an example, and it can fill in the structure with new content whenever you need it.",
            "This is the workflow mindset from Module 1, now applied to whole documents: the format stays the same, only the details change. You bring the new information; Claude drops it into the shape you've already settled on.",
          ],
          highlight: "Reuse the shape, change the details. A template plus Claude is a fill-in-the-blank machine.",
        },
        {
          type: 'concept',
          eyebrow: 'Making sense of PDFs',
          icon: '🔎',
          title: 'A long PDF becomes a quick summary — or a precise answer.',
          body: [
            "Share a PDF and Claude can read the whole thing for you. Ask for a plain-English summary of a forty-page report, or skip straight to the part you care about: “What does this contract say about cancellation?” or “Pull every dollar figure into a list.”",
            "It works for the documents that usually eat your time — contracts, manuals, research, statements, dense reports. You decide whether you want the big picture or one specific detail, and Claude goes and finds it.",
          ],
          highlight: "Don't read the whole PDF. Ask it the question you actually have.",
        },
        {
          type: 'compare',
          eyebrow: 'Vague request vs. a clear one',
          title: 'Tell Claude the shape, not just the topic.',
          bad: {
            label: '❌ Vague',
            text: '"Write up these notes." → Claude guesses at the format, the length, and who it\'s for, and you spend time reshaping it.',
          },
          good: {
            label: '✅ Specific',
            text: '"Turn these notes into a one-page Word document: a short summary up top, three sections with headings, and a clear next-steps list at the end. It\'s for my manager." → A finished document that fits on the first try.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Turn one real pile of notes into a finished document.',
          body: [
            "Find something you actually need to produce — meeting notes that should become a recap, scattered thoughts that should become a proposal. Hand Claude the raw material and tell it the exact shape you want. Use the prompt below.",
          ],
          prompt: "Turn the notes below into a clean, formatted Word document. I want: [describe the shape — e.g. a one-page summary with a heading, three sections, and a next-steps list at the end]. The audience is [who will read it], and the tone should be [formal / friendly / neutral]. Here are my notes: [paste your rough notes].",
          body2: "When you've got the document, try the other direction too: drop in a long PDF you've been meaning to read and ask for a five-bullet summary plus any deadlines or dollar amounts it mentions. Two real tasks, both off your plate.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: 'You can create polished documents and tame long PDFs.',
          body: [
            "Hand Claude rough notes and it returns a formatted document; give it a format to reuse and it fills it in every time; drop in a PDF and it summarizes or pulls out exactly what you need.",
            "Next lesson: the two file types people dread most — spreadsheets and slide decks — and how Claude takes the grind out of both.",
          ],
          summaryList: [
            'Paste messy notes and tell Claude the shape you want back',
            'Reuse a format by describing it once or sharing an example',
            'Ask a PDF the specific question you have instead of reading it all',
            'Claude can summarize, extract facts, or do both from one PDF',
            'The clearer the shape you ask for, the more finished the first draft',
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Spreadsheets and Slides Without the Grind',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 4 · Lesson 3',
          icon: '📊',
          title: 'Two of the most dreaded tasks — made simple.',
          body: [
            "For a lot of people, spreadsheets feel fiddly and slide decks feel like busywork. Both eat hours. Both are exactly the kind of structured, repeatable work Claude is built to help with.",
            "In this lesson you'll learn to have Claude organize data into a working spreadsheet, build something practical like a simple budget, and turn a plain summary into a presentation you can actually stand up and deliver.",
          ],
          sub: "The structure is the slow part. Let Claude do the structure.",
        },
        {
          type: 'concept',
          eyebrow: 'Spreadsheets without the formulas',
          icon: '🧮',
          title: 'Describe what you want to track; Claude builds the sheet.',
          body: [
            "You don't have to know your way around columns, rows, or formulas. Tell Claude in plain English what you want to keep track of — expenses, a project plan, a list of contacts — and it can organize it into a proper Excel spreadsheet.",
            "Already have messy data? Paste it in and ask Claude to clean it up, sort it, or reorganize it into a tidy sheet. The thing you've been avoiding because it felt tedious becomes a one-sentence request.",
          ],
          highlight: "You describe what to track. Claude handles the rows, columns, and tidy structure.",
        },
        {
          type: 'concept',
          eyebrow: 'A real example: a simple budget',
          icon: '💰',
          title: 'Building a basic budget is a great first spreadsheet.',
          body: [
            "Budgets are a perfect starter because they're useful and most people put them off. Give Claude your income and your expenses in plain language and ask for a simple monthly budget. It can lay out categories, total things up, and show you what's left.",
            "From there you can keep refining in conversation — “add a savings line,” “group these as fixed vs. variable,” “show me what happens if I cut dining out in half.” You shape it by talking, not by wrestling with cells.",
          ],
          highlight: "Income in, expenses in, plain English out — a working budget you refine by chatting.",
        },
        {
          type: 'concept',
          eyebrow: 'From a summary to a slide deck',
          icon: '🖼️',
          title: 'A paragraph of ideas becomes a presentation.',
          body: [
            "Slide decks are mostly structure: a title slide, one idea per slide, a tidy ending. That structure is exactly what slows people down — and exactly what Claude is fast at. Hand it a summary, a report, or even rough talking points and ask for a PowerPoint presentation.",
            "Tell it how many slides you're aiming for and who the audience is, and Claude turns your content into a clean, logically ordered deck. You spend your time on the message, not on dragging text boxes around.",
          ],
          highlight: "Bring the message; let Claude build the slides around it.",
        },
        {
          type: 'compare',
          eyebrow: 'By hand vs. with Claude',
          title: 'Two ways to build a deck for Monday\'s meeting.',
          bad: {
            label: '❌ By hand',
            text: 'Open PowerPoint to a blank slide, fight with layouts and fonts, and spend an hour turning your notes into something presentable.',
          },
          good: {
            label: '✅ With Claude',
            text: '"Turn this summary into an eight-slide deck for my team meeting" → a clean, ordered presentation in minutes that you tweak instead of build from scratch.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Build a simple budget — or a quick deck.',
          body: [
            "Pick whichever you'd actually use this week. The prompt below builds a basic monthly budget; if a deck is more useful to you, the second paragraph shows how to flip the same approach to slides.",
          ],
          prompt: "Build me a simple monthly budget as an Excel spreadsheet. My monthly income is [amount or 'roughly $X']. My regular expenses are: [list them in plain language — rent, groceries, subscriptions, etc.]. Lay it out with clear categories, total my expenses, and show me what's left over each month.",
          body2: "Want a deck instead? Try: \"Turn the summary below into a [number]-slide PowerPoint presentation for [audience], one main idea per slide, with a short title slide and a clear closing slide. Here's the summary: [paste].\" Either way, refine it by talking — add a line, regroup it, change the order — until it fits.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: 'Spreadsheets and slides no longer have to be a grind.',
          body: [
            "You can describe what to track and get a working spreadsheet, build a practical budget in plain English, and turn a summary into a presentation — then refine all of it just by chatting.",
            "Next lesson: combining these document Skills with your reusable-prompt habit to turn a task you do every week into a true one-step routine.",
          ],
          summaryList: [
            'Describe what to track and Claude organizes it into a spreadsheet',
            'No formulas needed — you shape the sheet by talking',
            'A simple budget is an ideal, useful first spreadsheet',
            'Hand Claude a summary and get back an ordered slide deck',
            'Set the slide count and audience, then refine in conversation',
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Building a Repeatable Routine',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 4 · Lesson 4',
          icon: '⚙️',
          title: 'The real payoff: a document task that becomes one step.',
          body: [
            "Making one document is handy. Making the <em>same kind</em> of document every week, in seconds, with zero rebuilding — that's where this gets powerful.",
            "In this lesson you'll combine two things you already know: the built-in document Skills from this module and the reusable-prompt mindset from Module 1. Together they turn a recurring document chore into a one-step routine.",
          ],
          sub: "Do it well once, then never rebuild it again.",
        },
        {
          type: 'concept',
          eyebrow: 'Find the document you keep remaking',
          icon: '🔍',
          title: 'Look for the document you produce on a schedule.',
          body: [
            "The weekly status report. The monthly budget update. The recap you send after every client call. The newsletter you format the same way each time. These are the documents worth turning into a routine, because the structure never changes — only the latest details do.",
            "If you've built the same kind of file more than twice, that's your signal. You're not solving a new problem each time; you're repeating yourself. That's exactly what a repeatable routine fixes.",
          ],
          highlight: "Same document, new details, every week? That's a routine waiting to be built.",
        },
        {
          type: 'concept',
          eyebrow: 'Write the routine down once',
          icon: '📝',
          title: 'Capture the whole routine in a single reusable prompt.',
          body: [
            "Build one prompt that does the whole job: it names the file type you want, describes the exact format, and leaves clear blanks for the parts that change. “Turn the notes below into my standard weekly report as a Word document, with these four sections… Notes: [paste].”",
            "Now the routine lives in one place. Each week you grab that prompt, drop in the new details, and Claude produces the finished file. The thinking happened once; the doing takes seconds.",
          ],
          highlight: "One prompt = the file type + the fixed format + a blank for what changes.",
        },
        {
          type: 'concept',
          eyebrow: 'Keep your routines where you\'ll find them',
          icon: '🗄️',
          title: 'Store your document routines so they\'re ready next time.',
          body: [
            "A routine only saves you time if you can find it. Keep your document prompts somewhere reliable — a note, a doc, or a Claude Project dedicated to that recurring work, like you set up earlier in this course.",
            "A Project is an especially good home: it can hold the prompt, the format example, and the related conversations all together. Over time you build a small shelf of these routines, and a big chunk of your routine document work simply takes care of itself.",
          ],
          highlight: "A Project is a natural home for a document routine — prompt, format, and history in one place.",
        },
        {
          type: 'compare',
          eyebrow: 'One-off vs. a routine',
          title: 'Two ways to handle the weekly report.',
          bad: {
            label: '❌ Rebuilt every week',
            text: 'Each week you re-explain the format, re-decide the sections, and reshape the output until it looks right — starting from zero every time.',
          },
          good: {
            label: '✅ A saved routine',
            text: 'You open your saved prompt, paste this week\'s notes, and Claude hands back the finished report in the exact same format — minutes, not an afternoon.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Turn one recurring document into a one-step routine.',
          body: [
            "Pick a document you make on a regular schedule. Have Claude help you build the reusable version — the right file type, your exact format, and blanks for what changes — then run it once to prove it works. Use the prompt below.",
          ],
          prompt: "I regularly create the same kind of document: [describe it — e.g. a weekly status report / a monthly budget update / a post-call client recap]. Help me build one reusable prompt I can use every time that produces it as a [Word document / Excel spreadsheet / PowerPoint deck]. Lock in the format and structure I describe here: [describe the sections or layout you want], and leave clear blanks in brackets for the parts that change each time. Then run it once with this example: [paste a real example].",
          body2: "Save the finished prompt where you'll actually use it — a note or a dedicated Project. You've just turned a recurring chore into something that takes one paste and a few seconds.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: 'You can turn a recurring document into a one-step routine.',
          body: [
            "By combining the document Skills with a reusable prompt, you've made a task you used to rebuild every week into something that runs in seconds — and you know where to keep it so it's always ready.",
            "Last lesson: pulling everything in this module together with a week-one challenge to produce real documents of your own.",
          ],
          summaryList: [
            'The documents you make on a schedule are the ones to turn into routines',
            'Capture the whole routine in one reusable prompt',
            'The prompt names the file type, the format, and the blanks',
            'Store routines somewhere reliable — a Project is ideal',
            'Built once, the routine produces the finished file in seconds',
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Your Document Assistant',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 4 · Lesson 5',
          icon: '🤝',
          title: "Let's pull it together — and put it to work this week.",
          body: [
            "You've met Skills, built Word documents, tamed PDFs, made spreadsheets and slide decks, and turned a recurring task into a routine. Now Claude isn't just a chat — it's a document assistant sitting next to you.",
            "This short lesson ties it all together and hands you a concrete week-one challenge, so these skills move from “things I learned” to “things I actually use.”",
          ],
          sub: "The skill only sticks once you've used it on real work.",
        },
        {
          type: 'concept',
          eyebrow: 'A quick recap',
          icon: '📚',
          title: 'Everything in this module, in four lines.',
          body: [
            "Skills are built-in abilities that let Claude handle whole document routines. Word and PDF work means polished documents in and clear summaries out. Spreadsheets and slides take the grind out of the structured stuff. And a reusable prompt turns any of it into a one-step routine.",
            "Together, those make Claude a genuine document assistant — one that creates, edits, and reuses the files your work runs on.",
          ],
          highlight: "Skills + Word/PDF + spreadsheets/slides + reusable routines = your document assistant.",
        },
        {
          type: 'concept',
          eyebrow: 'How to think about it now',
          icon: '🧠',
          title: 'Before you build a document by hand, ask if Claude should.',
          body: [
            "The habit that makes all of this pay off is a tiny pause. Whenever you're about to open a blank document, spreadsheet, or deck, stop and ask: could I describe this to Claude instead and start from a real draft?",
            "More often than you'd expect, the answer is yes. You stay in charge of the thinking and the final call — Claude just removes the slow, blank-page part of the job.",
          ],
          highlight: "Blank page about to open? Pause and ask whether Claude should draft it first.",
        },
        {
          type: 'concept',
          eyebrow: 'Your week-one challenge',
          icon: '🏁',
          title: 'Produce two real documents with Claude this week.',
          body: [
            "Here's the challenge — keep it real, not practice. Pick two actual things you need anyway, from different file types, and make them with Claude:",
          ],
          list: {
            items: [
              '<strong>One document</strong> — a Word document or a summary pulled from a PDF you\'ve been avoiding',
              '<strong>One data or visual file</strong> — a spreadsheet (a budget or tracker) or a slide deck',
              '<strong>One of them turned into a routine</strong> — if either repeats, capture it as a reusable prompt',
              '<strong>One thing saved</strong> — store your best prompt or file in a Project so it\'s ready next time',
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'Before and after this module',
          title: 'How your document work has changed.',
          bad: {
            label: '📅 Before Module 4',
            text: 'Every document started from a blank page. You formatted by hand, read PDFs line by line, and rebuilt the same files week after week.',
          },
          good: {
            label: '✅ After Module 4',
            text: 'Claude drafts your documents, summarizes your PDFs, builds your spreadsheets and decks, and reruns your routines on demand — you edit and approve instead of building from scratch.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Have Claude plan your week-one challenge with you.',
          body: [
            "Don't leave the challenge vague. Tell Claude what's actually on your plate this week and let it pick the two best document tasks to start with. Use the prompt below.",
          ],
          prompt: "I want to start using you as my document assistant this week. Here's what's on my plate: [list the real tasks, documents, or files you need to deal with]. Pick the two best ones to start with — ideally from different file types (a document or PDF, plus a spreadsheet or slide deck). For each, tell me exactly what to give you and what you'll produce. If either repeats regularly, suggest how to turn it into a reusable routine I can save.",
          body2: "Do those two tasks for real this week. The moment you send a document Claude helped you build, this stops being a course lesson and becomes part of how you work.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 4 Complete',
          icon: '🎉',
          title: 'Claude is now your document assistant.',
          body: [
            "You understand Skills, you can create and edit Word documents, summarize and extract from PDFs, build spreadsheets and slide decks, and turn any of it into a repeatable routine. That's a real assistant — not just a chat.",
            "From here, keep the habit simple: before you open a blank file, ask whether Claude should draft it first. Do your week-one challenge, and you'll feel the difference immediately.",
          ],
          summaryList: [
            'Skills let Claude handle whole document routines for you',
            'Claude creates and edits Word, Excel, and PowerPoint files',
            'Claude summarizes and pulls facts out of PDFs',
            'A reusable prompt turns recurring document work into one step',
            'Do the week-one challenge to make the skills stick',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'What is the best plain-English description of a Skill?',
      options: [
        'A separate app you have to download and install before using Claude',
        'A packaged, reusable ability Claude can use to handle a whole routine',
        'A paid add-on that unlocks longer conversations',
        'A setting that changes the color and layout of the Claude website',
      ],
      correct: 1,
      feedback:
        "A Skill is a ready-made, reusable ability bundled into Claude so it can handle a whole routine without you explaining it step by step. Anthropic provides built-in Skills for everyday office files — Word documents, Excel spreadsheets, PowerPoint presentations, and PDFs — so Claude can create and edit those files for you.",
    },
    {
      q: 'You have a long PDF contract and only need to know what it says about cancellation. What\'s the smartest move?',
      options: [
        'Read the whole contract yourself first, then ask Claude to confirm',
        'Share the PDF and ask Claude your specific question about cancellation',
        'Retype the contract into the chat by hand so Claude can read it',
        'Skip Claude — it can only summarize PDFs, not answer specific questions',
      ],
      correct: 1,
      feedback:
        "Claude can read the whole PDF and answer the exact question you have. You don't need to read it all or summarize it first — just share it and ask, \"What does this say about cancellation?\" Claude can give you the big picture or one precise detail, whichever you need.",
    },
    {
      q: 'You build the same kind of weekly report over and over. How do you turn it into a one-step routine?',
      options: [
        'Start a brand-new chat each week and re-explain the format from scratch',
        'Build one reusable prompt that sets the file type and format with blanks for what changes',
        'Ask Claude to memorize the report so you never have to mention it again',
        'Upgrade to a higher plan so the report builds itself automatically',
      ],
      correct: 1,
      feedback:
        "Combine the document Skills with the reusable-prompt mindset: write one prompt that names the file type, locks in your format, and leaves clear blanks for the details that change each week. Save it somewhere reliable — a note or a Project — and each week you just paste the new details and get the finished file in seconds.",
    },
  ],
}

export default c8module4
