import type { CourseData } from './types'

const c8module2: CourseData = {
  moduleId: 44,
  title: 'Projects: Your Persistent Workspace',
  subtitle: 'Module 2',
  nextModuleId: 45,
  lessons: [
    {
      id: 0,
      title: 'What a Project Is (and Why It Changes Everything)',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 2 · Lesson 1',
          icon: '📁',
          title: "Imagine a workspace where Claude already knows the whole story.",
          body: [
            "Up to now, every conversation with Claude has started more or less cold. You bring it up to speed, it helps, and when you close the chat that context fades. The next time, you explain it all again.",
            "A <strong>Project</strong> ends that cycle. It's a dedicated workspace that keeps related conversations, files, and instructions together — so every chat you start inside it already knows the context. This module is about building those workspaces and making them part of how you work.",
          ],
          sub: "A Project is the difference between a helper who forgets you and one who knows your work.",
        },
        {
          type: 'concept',
          eyebrow: 'The core idea',
          icon: '🏠',
          title: 'A Project is a home for one area of your work.',
          body: [
            "Think of a Project as a folder with a brain. Inside it live all your conversations about one thing — a client, a side business, your job search, your book. It also holds reference files you've added and a set of instructions about how Claude should behave for that work.",
            "Everything inside a Project shares that context. Start a new chat there and Claude already has the background, the materials, and the ground rules. You don't rebuild any of it.",
          ],
          highlight: "One Project = one area of work, with all its context kept in one place.",
        },
        {
          type: 'concept',
          eyebrow: 'Why it changes everything',
          icon: '🔗',
          title: 'Context that lasts is what turns Claude into a real assistant.',
          body: [
            "In Module 1 you learned to stop repeating yourself within a single conversation. A Project takes that a giant step further: it stops you repeating yourself <em>across</em> conversations, for as long as the work lasts.",
            "That's the leap. A one-off chat is a smart stranger you brief each time. A Project is a colleague who already knows the client, has read the files, and remembers how you like things done.",
          ],
          highlight: "Lasting context is the line between a chatbot and an assistant who knows your work.",
        },
        {
          type: 'concept',
          eyebrow: "What's inside a Project",
          icon: '🧰',
          title: 'Three things live together inside every Project.',
          body: [
            "A Project bundles three kinds of context, and they all work together. You'll set up each one over the next few lessons:",
          ],
          list: {
            items: [
              "<strong>Conversations</strong> — every chat you start inside the Project, kept together instead of scattered across your sidebar",
              "<strong>Knowledge</strong> — files and reference material you add, so Claude can draw on your documents, notes, and examples",
              "<strong>Instructions</strong> — a standing brief telling Claude its role, your goals, and how to behave for this work",
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'Scattered chats vs. a Project',
          title: 'Two ways to handle three months of work with one client.',
          bad: {
            label: '❌ Scattered one-off chats',
            text: 'A dozen separate conversations. Each one starts with you pasting the client background again, re-uploading the brief, and reminding Claude of your tone. Half of them you can\'t find later.',
          },
          good: {
            label: '✅ One Project',
            text: 'A single workspace that already holds the client background, the brief, and your tone. Every new chat starts ready to work. Everything you\'ve done lives in one place.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Name the part of your work that deserves its own home.',
          body: [
            "Before you build anything, get clear on what a Project would do for you. Pick one area of your work or life that you keep coming back to Claude for, and use the prompt below to pressure-test whether it's Project-worthy.",
          ],
          prompt: "I'm learning about Projects in Claude — dedicated workspaces that keep related conversations, files, and instructions together for one area of work. Here's an area I come back to a lot: [describe it in a sentence or two]. Explain how setting this up as a Project would actually help me, what context I'd want it to hold, and whether it's a good fit. Be honest if it's too small to bother.",
          body2: "Hold onto what Claude says. If the area earns a yes, that's the Project you'll build in the next lesson.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: "You understand what a Project is and why it's the big leap.",
          body: [
            "A Project is a dedicated workspace that keeps conversations, knowledge, and instructions together for one area of work — giving Claude lasting context instead of a cold start every time.",
            "Next lesson: the practical steps to create your first one, name it, and give it a clear purpose.",
          ],
          summaryList: [
            'A Project is a dedicated workspace for one area of your work',
            'It keeps related conversations, files, and instructions together',
            'Every chat you start inside it already knows the context',
            'It stops you repeating yourself across conversations, not just within one',
            'Projects turn Claude from a smart stranger into a colleague who knows your work',
          ],
        },
      ],
    },
    {
      id: 1,
      title: 'Creating Your First Project',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 2 · Lesson 2',
          icon: '🛠️',
          title: "Let's build a real one — for actual work you do.",
          body: [
            "Creating a Project is quick. The part that matters isn't the clicking — it's choosing the right area of work and giving Claude a clear sense of its job. Do that well and the Project pays you back every time you open it.",
            "In this lesson you'll set up your first Project: name it, give it a purpose, and write the instructions that tell Claude how to behave inside it.",
          ],
          sub: "A good Project starts with a clear name and an even clearer purpose.",
        },
        {
          type: 'concept',
          eyebrow: 'Step one',
          icon: '➕',
          title: 'Find Projects in Claude and create a new one.',
          body: [
            "Projects live alongside your conversations in Claude, on the web at claude.ai. You'll find an area for them in the sidebar; there's a button to create a new one. (Projects are part of Claude's paid plans — we'll be honest about that, and they're worth it if this is real, recurring work.)",
            "Don't overthink this step. Creating the Project is just opening the empty room. The next steps — naming it and briefing it — are what give it value.",
          ],
          highlight: "Creating a Project is the easy part. Naming and briefing it is where the value is.",
        },
        {
          type: 'concept',
          eyebrow: 'Step two',
          icon: '🏷️',
          title: 'Give it a clear, specific name.',
          body: [
            "Name the Project after the actual thing it's for: “Henderson Account,” “Etsy Shop,” “2026 Job Search,” “Newsletter.” A specific name means you'll always know which workspace to open, and it keeps your Projects from blurring together as you add more.",
            "Resist vague names like “Work stuff” or “Misc.” A Project earns its keep by being about <em>one</em> clearly defined thing — the name is your first chance to lock that in.",
          ],
          highlight: "Name it after the one real thing it's for. Specific beats tidy-sounding.",
        },
        {
          type: 'concept',
          eyebrow: 'Step three — the most important one',
          icon: '📝',
          title: 'Write instructions that tell Claude its standing job.',
          body: [
            "Every Project has a place for instructions — a standing brief that applies to every conversation inside it. This is where you set the role, the goals, and the rules once, so you never repeat them. Think of it as the custom instructions from Module 1, but focused on this one area of work.",
            "Good Project instructions answer a few simple questions for Claude:",
          ],
          list: {
            items: [
              "<strong>What is this Project for?</strong> — the area of work and what you're trying to achieve",
              "<strong>Who should Claude be?</strong> — the role or expertise to bring to this work",
              "<strong>Who's the audience?</strong> — who the output is usually for",
              "<strong>How should it sound and behave?</strong> — tone, length, and anything to always do or avoid",
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'Thin setup vs. a real brief',
          title: 'Two versions of the same new Project.',
          bad: {
            label: '❌ Named, but empty',
            text: '"Newsletter" — no instructions. Every chat inside it still starts with you explaining what the newsletter is, who reads it, and how it should sound. The Project is just a folder.',
          },
          good: {
            label: '✅ Named and briefed',
            text: '"Newsletter" with instructions: a friendly weekly note to 800 small-business owners, warm and practical, no hype, 400 words. Now every chat starts already knowing all of that.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Have Claude draft your Project instructions for you.',
          body: [
            "Don't write the brief from a blank page. Pick the area you settled on last lesson, and let Claude interview you and assemble the instructions. Paste the result into your new Project's instructions field.",
          ],
          prompt: "I'm setting up a Claude Project for this area of my work: [describe it]. Help me write the Project instructions — the standing brief that will apply to every conversation inside it. Ask me 4 or 5 quick questions about the goal, the role you should play, who the output is for, and the tone and rules I want. Then turn my answers into clean Project instructions I can paste in.",
          body2: "Create the Project, name it specifically, and paste in the instructions you just built. That's a real, working Project — and you're about to make it even smarter.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: 'You have a real Project, named and briefed.',
          body: [
            "You created a Project, gave it a specific name, and wrote standing instructions so every conversation inside it knows the role, the audience, and the rules. The folder now has a brain.",
            "Next lesson: feeding it knowledge — the files and examples that let Claude draw on your material and even write in your voice.",
          ],
          summaryList: [
            'Projects live in Claude on the web and are part of its paid plans',
            'Name a Project specifically, after the one real thing it\'s for',
            'Project instructions are a standing brief applied to every chat inside',
            'Good instructions set the purpose, role, audience, and tone once',
            'Let Claude interview you to draft the instructions, then paste them in',
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Feeding It Knowledge',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 2 · Lesson 3',
          icon: '📚',
          title: "Now give Claude the material it needs to actually know your work.",
          body: [
            "Instructions tell Claude how to behave. Knowledge tells it what to behave <em>about</em>. When you add files and reference material to a Project, Claude can draw on them in every conversation — your documents, your notes, examples of your own writing.",
            "This is the step that makes a Project feel uncanny: Claude stops giving generic answers and starts giving answers grounded in <em>your</em> material, in <em>your</em> voice.",
          ],
          sub: "Add the right material once, and every chat in the Project can draw on it.",
        },
        {
          type: 'concept',
          eyebrow: 'How knowledge works',
          icon: '🧠',
          title: 'Files you add become reference material Claude can pull from.',
          body: [
            "A Project has a place to add knowledge — files and text you want Claude to be able to reference. Once something's in there, you don't have to paste it into each chat. Claude can look at it whenever it's relevant to what you're working on.",
            "So instead of re-uploading the client brief or re-explaining your style guide every time, you add it once. The Project remembers; you don't have to.",
          ],
          highlight: "Add it to the Project's knowledge once — Claude can reference it in every chat after.",
        },
        {
          type: 'concept',
          eyebrow: 'The voice trick',
          icon: '🪞',
          title: 'Give Claude examples of your work and it can write like you.',
          body: [
            "Here's one of the most useful things you can add: examples of your own writing. Drop in a few past newsletters, emails, or posts you're proud of, and Claude can study how you actually sound — then match it.",
            "It works because Claude learns from examples better than from descriptions. “Write in a warm, plain tone” is fine. Three real samples of your warm, plain tone is far better. Show, don't just tell.",
          ],
          highlight: "Examples beat descriptions. A few real samples teach Claude your voice better than any adjective.",
        },
        {
          type: 'concept',
          eyebrow: 'What to add — and what to skip',
          icon: '⚖️',
          title: 'Add what Claude should rely on. Leave out the noise.',
          body: [
            "Knowledge is most useful when it's focused. Add the material that's genuinely relevant and stable — the things you'd want Claude to treat as a reliable reference. Skip the random, the outdated, and the duplicates, which only muddy the picture.",
          ],
          list: {
            items: [
              "<strong>Worth adding:</strong> brand or style guides, key documents, strong examples of your work, reference facts you'll reuse, project briefs",
              "<strong>Worth adding:</strong> templates, glossaries, or anything you currently re-paste into chats",
              "<strong>Skip:</strong> outdated drafts, one-time files you won't need again, anything sensitive you'd rather not store",
              "<strong>Skip:</strong> huge piles of loosely related stuff — focused beats exhaustive",
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'Empty vs. fed',
          title: 'Asking the same Project to draft a post.',
          bad: {
            label: '❌ No knowledge added',
            text: '"Draft a LinkedIn post about our new service." → A competent but generic post that could belong to any company, in a voice that isn\'t quite yours.',
          },
          good: {
            label: '✅ Fed with your material',
            text: 'Same request, but the Project holds your service one-pager and five of your past posts. → A post grounded in the real details, in your actual voice, ready with light edits.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Add a few files, then test the voice.',
          body: [
            "Open the Project you built last lesson and add two or three pieces of knowledge — a key document and a couple of examples of your own writing. Then run the prompt below to see whether Claude picked up your voice and your facts.",
          ],
          prompt: "You now have access to the files I've added to this Project, including some examples of my own writing. First, in two or three lines, tell me what you understand about my voice and style from those examples. Then draft a short [piece you actually need — e.g. email / post / paragraph] about [topic], matching that voice and using the real details from the files.",
          body2: "Compare the result to something you wrote yourself. If it's close, your knowledge is working. If not, add a couple more strong examples and try again.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: "Your Project knows your material and your voice.",
          body: [
            "You added focused knowledge — key documents and real examples of your work — so Claude can ground its answers in your material and write the way you actually write. That's the difference between generic and genuinely yours.",
            "Next lesson: living inside the Project day to day, where all this setup quietly pays off in every chat.",
          ],
          summaryList: [
            'Files you add to a Project become reference material Claude can pull from',
            'Examples of your writing teach Claude your voice — show, don\'t just tell',
            'Add focused, relevant, stable material; skip noise, duplicates, and outdated drafts',
            'Don\'t store anything sensitive you\'d rather not keep in the Project',
            'Test the result against your own work and add more examples if needed',
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Working Inside a Project Day to Day',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 2 · Lesson 4',
          icon: '🔄',
          title: "Here's where all that setup quietly starts paying you back.",
          body: [
            "You've built a Project, briefed it, and fed it knowledge. Now comes the easy part — and the whole point. Working inside a Project is just like a normal chat, except Claude already knows the context before you type a word.",
            "This lesson is about the daily rhythm: how to use your Project for recurring work, and how it saves you from ever re-explaining yourself again.",
          ],
          sub: "Inside a Project, every conversation starts where the last one left off.",
        },
        {
          type: 'concept',
          eyebrow: 'The daily move',
          icon: '💬',
          title: 'Start your chat inside the Project, not outside it.',
          body: [
            "The one habit that matters: when the work belongs to a Project, start the conversation <em>inside</em> that Project. Open the Project, start a new chat there, and you're instantly working with all its context — the instructions, the files, the voice.",
            "A chat started inside your “Newsletter” Project already knows it's writing your newsletter, for your readers, in your tone, using your past issues. You just say what you need this week.",
          ],
          highlight: "Belongs to a Project? Start the chat there. That single habit unlocks everything you set up.",
        },
        {
          type: 'concept',
          eyebrow: 'No more re-explaining',
          icon: '⏩',
          title: 'You skip the briefing every single time.',
          body: [
            "Outside a Project, the first few lines of every chat are setup: who you are, what this is, how it should sound. Inside a Project, all of that is already handled. You jump straight to the actual request.",
            "Multiply that by every conversation you have about this work, and the time saved is real — but the bigger win is consistency. The output stays on-voice and on-brief whether it's Monday or three months from now.",
          ],
          highlight: "The Project carries the briefing. You bring only what's new today.",
        },
        {
          type: 'concept',
          eyebrow: 'Built for recurring work',
          icon: '🗓️',
          title: 'Projects shine on the things you do over and over.',
          body: [
            "Remember the reusable workflows from Module 1? A Project is where they come alive. The weekly update, the customer reply, the monthly report — run each one as a fresh chat inside the relevant Project, and it arrives already knowing the format and the context.",
            "Many people keep one long-running chat per recurring task inside a Project, and others start a fresh chat each time. Either works. The Project is the constant — the shared context that every one of those chats inherits.",
          ],
          highlight: "Recurring work + a Project = the same quality, every time, with almost no setup.",
        },
        {
          type: 'compare',
          eyebrow: 'Outside vs. inside the Project',
          title: 'Writing this week\'s client update, two ways.',
          bad: {
            label: '❌ A normal chat',
            text: '"Here\'s my client — they do X, the tone is Y, the format is Z, here\'s the brief again… now write this week\'s update." Five minutes of re-briefing before you even start.',
          },
          good: {
            label: '✅ Inside the Project',
            text: '"Here\'s what happened this week: [notes]. Draft the update." Done. The client, the tone, the format, and the brief were already there.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Run a real task inside your Project — with no briefing.',
          body: [
            "Open the Project you built and start a fresh chat inside it. Now do something real, and deliberately give Claude <em>only</em> what's new — no background, no reminders about tone or audience. See how far the Project's context carries you.",
          ],
          prompt: "Using everything you already know from this Project, [do a real task — e.g. draft this week's update / reply to this customer message / outline this month's report]. Here's the only new information: [paste just the new details]. Don't ask me to re-explain the background — work from the Project's context and tell me if anything's genuinely missing.",
          body2: "Notice what you didn't have to type. That gap — between what you said and what Claude already knew — is the Project doing its job.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: "You know the daily rhythm of working inside a Project.",
          body: [
            "Start your chats inside the Project, bring only what's new, and let the shared context handle the rest. For recurring work, that means the same quality every time with almost no setup.",
            "Last lesson: deciding which Projects are actually worth building — and a week-one challenge to put it all into practice.",
          ],
          summaryList: [
            'When work belongs to a Project, start the conversation inside it',
            'Every chat inside inherits the instructions, files, and voice automatically',
            'You skip the briefing every time and bring only what\'s new',
            'Projects make recurring work consistent and fast',
            'The context you didn\'t have to type is the Project earning its keep',
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Projects That Earn Their Keep',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 2 · Lesson 5',
          icon: '🏆',
          title: "Let's make sure the Projects you build are the ones worth having.",
          body: [
            "Projects are powerful, but more isn't better. A handful of well-chosen Projects beats a sprawl of half-used ones. This final lesson is about judgment: which parts of your work truly deserve their own workspace, and how to start strong.",
            "By the end you'll have a clear rule for what's Project-worthy and a concrete challenge to build two real ones this week.",
          ],
          sub: "A few Projects you actually use beat a dozen you forgot you made.",
        },
        {
          type: 'concept',
          eyebrow: 'The test',
          icon: '🎯',
          title: 'A Project earns its keep when work is recurring and context-heavy.',
          body: [
            "Two questions decide whether something deserves a Project. First: do you come back to this work <em>repeatedly</em>? Second: does it carry a lot of <em>context</em> — files, background, a particular voice — that you'd otherwise re-explain?",
            "Two yeses means build it. A one-time task with no reusable context is just a normal chat — no Project needed. The Projects worth having sit at the crossroads of recurring and context-heavy.",
          ],
          highlight: "Recurring + context-heavy = build a Project. Otherwise, a normal chat is fine.",
        },
        {
          type: 'concept',
          eyebrow: 'Good candidates',
          icon: '💡',
          title: 'The work that almost always deserves a Project.',
          body: [
            "If you're not sure where to start, these are the patterns that pay off most reliably across the three kinds of work people bring to Claude:",
          ],
          list: {
            items: [
              "<strong>A specific client or account</strong> — recurring work with its own brief, history, and tone",
              "<strong>A side business or product</strong> — your shop, your service, your brand voice in one place",
              "<strong>An ongoing responsibility</strong> — the newsletter, the reports, the content you produce on a schedule",
              "<strong>A big personal project</strong> — the job search, the book, the move, the home renovation",
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Keep them healthy',
          icon: '🌱',
          title: 'A Project gets better the more you tend it.',
          body: [
            "Projects aren't set-and-forget. As your work shifts, update the instructions. As you produce great examples, add them to the knowledge. A Project you maintain a little keeps getting sharper; one you ignore slowly drifts out of date.",
            "It's a small habit: when something in a chat works really well, ask yourself whether it belongs in the Project's instructions or knowledge so every future chat benefits.",
          ],
          highlight: "When something works, fold it back into the Project — and every future chat inherits it.",
        },
        {
          type: 'compare',
          eyebrow: 'Over-built vs. well-chosen',
          title: 'Two ways to use Projects.',
          bad: {
            label: '❌ A Project for everything',
            text: 'Twenty Projects, most created on a whim and never reopened, with thin instructions and no knowledge. You can\'t remember what half of them were for.',
          },
          good: {
            label: '✅ A few that earn their keep',
            text: 'Three or four Projects for your real, recurring, context-heavy work — each well-briefed, fed with your material, and opened constantly.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Your Week-One Challenge',
          icon: '🎯',
          title: 'Build two real Projects this week.',
          body: [
            "Here's the challenge that locks this module in: stand up two genuinely useful Projects in the next seven days. Use the prompt to pick the right two, then build each one the way you learned — name, instructions, knowledge.",
          ],
          prompt: "Help me choose the two best Projects to build this week. Here's the work I do and keep coming back to you for: [list a few areas — clients, side projects, recurring tasks, big personal projects]. For each, judge how recurring it is and how much context it carries. Then recommend the two strongest candidates, and for each one, give me a starting set of Project instructions and a list of files or examples I should add.",
          body2: "Build both this week. Give each a specific name, paste in the instructions Claude drafted, add two or three pieces of knowledge, and then actually use them. That's the whole module, working for real.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 2 Complete',
          icon: '🎉',
          title: "You can build Projects that genuinely earn their keep.",
          body: [
            "You know what a Project is, how to create and brief one, how to feed it knowledge so Claude works in your voice, how to live inside it day to day, and how to choose the few that are truly worth building. That's a persistent workspace where Claude knows your work as well as you do.",
            "Next module takes the leap outward: connecting Claude to the tools you already use, so it can reach your real data — not just the files you've added.",
          ],
          summaryList: [
            'Build a Project when work is both recurring and context-heavy',
            'Clients, side businesses, ongoing responsibilities, and big personal projects are prime candidates',
            'Keep Projects healthy by updating instructions and adding new examples',
            'A few well-chosen Projects beat a sprawl of half-used ones',
            'Your challenge: build and use two real Projects this week',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'What best describes what a Project is in Claude?',
      options: [
        'A single very long conversation you never close',
        'A dedicated workspace that keeps related conversations, files, and instructions together for one area of work',
        'A way to download all your past chats as a file',
        'A separate AI tool you buy on top of Claude',
      ],
      correct: 1,
      feedback:
        "A Project is a dedicated workspace for one area of your work. It bundles three things — your conversations, the knowledge (files) you add, and standing instructions — so every chat you start inside it already shares that context. That's what gives Claude lasting context instead of a cold start each time.",
    },
    {
      q: 'You want a Project to write in your voice. What is the most effective thing to add to its knowledge?',
      options: [
        'A long written description of how you like to sound',
        'A few real examples of your own past writing',
        'A list of words you never use',
        'The instructions copied from someone else\'s Project',
      ],
      correct: 1,
      feedback:
        "Examples beat descriptions. Adding a few real samples of your own writing teaches Claude your voice far better than any adjective. Claude learns from examples better than from descriptions — so show it how you sound rather than only telling it.",
    },
    {
      q: 'How do you decide whether a piece of work deserves its own Project?',
      options: [
        'Build a Project for every task so nothing is left out',
        'Only build a Project for work you\'ll do exactly once',
        'Build one when the work is both recurring and context-heavy',
        'Build one only if you have the paid plan and want to use it up',
      ],
      correct: 2,
      feedback:
        "The test is two questions: do you come back to this work repeatedly, and does it carry a lot of context you'd otherwise re-explain? Two yeses means build it. A few well-chosen Projects for recurring, context-heavy work beat a sprawl of half-used ones.",
    },
  ],
}

export default c8module2
