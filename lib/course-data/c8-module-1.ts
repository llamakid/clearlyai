import type { CourseData } from './types'

const c8module1: CourseData = {
  moduleId: 43,
  title: 'Sharper Conversations',
  subtitle: 'Module 1',
  nextModuleId: 44,
  lessons: [
    {
      id: 0,
      title: 'Leveling Up: From Chats to a System',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 1 · Lesson 1',
          icon: '🚀',
          title: "You know how to talk to Claude. Now let's make it work for you.",
          body: [
            "If you've finished the beginner course — or you already chat with Claude comfortably — you've got the foundation. This course is about the next leap: turning Claude from a helpful chat into a real part of how you work.",
            "That shift has a name: going from <em>asking questions</em> to <em>building a system</em>. By the end of this course you'll have Claude set up to know you, connected to your tools, and even doing whole tasks on its own. This first module starts with the conversation itself.",
          ],
          sub: "The goal of this course: stop starting from scratch every time.",
        },
        {
          type: 'concept',
          eyebrow: 'The big idea of this level',
          icon: '🧱',
          title: 'Power users stop repeating themselves.',
          body: [
            "Here's what separates a casual user from a confident one. The casual user re-explains who they are, what they do, and how they like things — every single conversation. The confident user sets that up <em>once</em> and lets Claude carry it forward automatically.",
            "Everything in this module is a way to stop repeating yourself: telling Claude about you once, giving it a consistent role, and keeping your work organized so you can always pick up where you left off.",
          ],
          highlight: "If you find yourself typing the same background again and again, that's a signal there's a setup step you're missing.",
        },
        {
          type: 'concept',
          eyebrow: 'A quick, honest note',
          icon: '💳',
          title: 'Some of what we cover here is part of Claude\'s paid plans.',
          body: [
            "The beginner course lived entirely on the free plan. At this level, a few of the more powerful features — bigger Projects, connecting your tools, and the Cowork assistant later in the course — are part of Claude's paid plans (often called Pro or Max).",
            "You don't need to upgrade today. The conversation skills in this module work on any plan. We'll be clear about which features need a paid plan as they come up, so you can decide what's worth it for the way <em>you</em> work.",
          ],
          highlight: "We'll flag paid-only features as we go. You're never left guessing what costs extra.",
        },
        {
          type: 'concept',
          eyebrow: 'Set it once',
          icon: '⚙️',
          title: 'Custom instructions tell Claude who you are — for every conversation.',
          body: [
            "In your Claude settings there's a place to tell Claude about yourself and how you'd like it to respond. People sometimes call these your custom instructions or preferences. Whatever's there gets applied automatically to your chats, so you don't re-type it.",
            "Think about what you'd otherwise explain over and over: your job, who your audience usually is, whether you prefer short answers or detailed ones, your tone. Put that there once, and every reply starts from a smarter place.",
          ],
          list: {
            items: [
              "<strong>Who you are</strong> — your role, your field, what you spend your days doing",
              "<strong>Who you're usually writing for</strong> — clients, a team, customers, the public",
              "<strong>How you like answers</strong> — concise or thorough, formal or warm, bullet points or prose",
              "<strong>Anything to always avoid</strong> — jargon, emojis, hype, whatever grates on you",
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'The difference custom instructions make',
          title: 'The same request, with and without a setup step.',
          bad: {
            label: '❌ Nothing set up',
            text: '"Write a project update." → A generic update Claude guesses at, in a tone that may not be yours, for an audience it had to invent.',
          },
          good: {
            label: '✅ Custom instructions in place',
            text: '"Write a project update." → A concise update in your voice, aimed at your team, skipping the jargon you told it to avoid — because Claude already knows all of that about you.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Have Claude draft your own custom instructions.',
          body: [
            "Not sure what to put in your settings? Let Claude help you write it. Paste the prompt below, answer its questions, and copy the result into your Claude settings (look for profile, preferences, or custom instructions).",
          ],
          prompt: "I want to set up custom instructions so you respond the way I prefer in every conversation. Ask me 5 quick questions about my role, who I usually write for, the tone I like, the response length I prefer, and anything I want you to always avoid. Then turn my answers into a tidy set of custom instructions I can paste into my settings.",
          body2: "Once you've saved them, start a brand-new chat and ask for something simple. Notice how much closer the first reply already is to what you wanted.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: "You've made the mental shift from chatting to building a system.",
          body: [
            "Power users stop repeating themselves. Custom instructions are the first and easiest way to do that — tell Claude who you are once, and every conversation starts smarter.",
            "Next lesson: giving Claude a consistent role and style, so its output sounds the way you need it to without you asking each time.",
          ],
          summaryList: [
            'This course turns Claude from a chat into part of your workflow',
            'The theme of this module: stop repeating yourself',
            'Some features here need a paid plan — we\'ll flag them clearly',
            'Custom instructions tell Claude who you are, for every conversation',
          ],
        },
      ],
    },
    {
      id: 1,
      title: 'Give Claude a Role and a Style',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 1 · Lesson 2',
          icon: '🎭',
          title: "You can hand Claude a job description — and it'll play the part.",
          body: [
            "One of the most powerful moves at this level is also one of the simplest: tell Claude <em>who</em> to be while it helps you. “Act as a careful editor.” “Be a skeptical financial analyst.” “You're a friendly customer-service rep.” It immediately shapes the whole response.",
            "In this lesson you'll learn to assign roles and lock in a consistent style, so Claude's output matches the job you actually need done.",
          ],
          sub: "A role is the fastest way to change the quality and flavor of an answer.",
        },
        {
          type: 'concept',
          eyebrow: 'Why roles work so well',
          icon: '🧭',
          title: 'A role gives Claude a point of view.',
          body: [
            "When you say “act as an experienced hiring manager reviewing my résumé,” you're not just adding flavor — you're telling Claude which knowledge to draw on, what to prioritize, and what tone to take. The same question gets a sharper, more relevant answer.",
            "Roles also unlock honesty you might not get otherwise. “Be a tough but fair critic of this plan” gives you the pushback a plain request often softens away.",
          ],
          highlight: "“Act as a [specific kind of expert]” is one of the highest-value phrases you can learn.",
        },
        {
          type: 'concept',
          eyebrow: 'Make the role specific',
          icon: '🔬',
          title: 'The more specific the role, the better the help.',
          body: [
            "“Act as a writer” is okay. “Act as a plain-language editor who helps non-native English speakers sound clear and professional” is far better. Specificity tells Claude exactly whose shoes to stand in.",
            "Stack a little context on top — who the work is for, what you're trying to achieve — and you've turned a generic assistant into something close to a specialist for your exact task.",
          ],
          list: {
            items: [
              '<strong>Vague:</strong> "Help me with this email."',
              '<strong>Better:</strong> "Act as a diplomatic communications coach. Help me reply to this tense email from a client without sounding defensive."',
              '<strong>Vague:</strong> "Look at my budget."',
              '<strong>Better:</strong> "Act as a cautious small-business bookkeeper. Review this budget and flag the three riskiest assumptions."',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Locking in a consistent voice',
          icon: '🎚️',
          title: 'For a voice you reuse, save it — don\'t retype it.',
          body: [
            "If there's a tone you need again and again — your brand voice, your newsletter style, the way you write to your team — describe it once and keep it somewhere reusable. Your custom instructions from the last lesson are perfect for this, and Claude also offers saved writing styles you can pick from.",
            "The point is the same throughout this module: anything you'd otherwise repeat, set up once. A consistent voice shouldn't cost you a paragraph of instructions every single time.",
          ],
          highlight: "Describe your voice once, reuse it forever. Consistency without the copy-paste.",
        },
        {
          type: 'compare',
          eyebrow: 'No role vs. a sharp role',
          title: 'Watch a role change the entire response.',
          bad: {
            label: '❌ No role',
            text: '"Is this a good idea: opening a second location for my café?" → A balanced, somewhat generic list of pros and cons.',
          },
          good: {
            label: '✅ Specific role',
            text: '"Act as a seasoned restaurant consultant who has seen many second locations fail. Pressure-test my plan to open a second café and tell me what I\'m underestimating." → Pointed, experienced, genuinely useful pushback.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Assign Claude the exact expert you wish you could call.',
          body: [
            "Pick a real task or decision you're sitting on. Think about who you'd love to get advice from — then make Claude play that role. Use the prompt below.",
          ],
          prompt: "Act as a [specific kind of expert — e.g. a veteran negotiation coach / a meticulous proofreader / a no-nonsense product manager]. I need help with [your real task]. Here's the situation: [a sentence or two of context]. Give me your honest, expert take — including anything I might be getting wrong.",
          body2: "Try the same request with two different roles and compare. You'll feel how much the role — not just the words — shapes what you get back.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: "You can put Claude in exactly the right role for any task.",
          body: [
            "A specific role gives Claude a point of view, the right knowledge to draw on, and the honesty to push back. And a voice you reuse should be saved once, not retyped.",
            "Next lesson: keeping all of this organized, so your growing pile of conversations stays easy to navigate.",
          ],
          summaryList: [
            '"Act as a [specific expert]" sharpens almost any answer',
            'The more specific the role, the more useful the help',
            'Roles unlock honest pushback you won\'t always get otherwise',
            'Save voices and styles you reuse instead of retyping them',
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Organize Your Work So You Can Find It',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 1 · Lesson 3',
          icon: '🗂️',
          title: 'Once Claude is genuinely useful, your conversations start piling up.',
          body: [
            "It's a good problem to have: you're using Claude for real work, and now your sidebar is a long list of chats. The difference between a power user and an overwhelmed one is a little organization.",
            "This short lesson covers the handful of habits that keep your Claude workspace tidy — so the great conversation you had last Tuesday is something you can actually find again.",
          ],
          sub: "A tidy workspace means your past work keeps paying off.",
        },
        {
          type: 'concept',
          eyebrow: 'Habit one',
          icon: '🧵',
          title: 'Keep one conversation per topic — and let it run long.',
          body: [
            "Within a single chat, Claude remembers everything you've said, so a long-running conversation about one project gets <em>smarter</em> the more you use it. Resist the urge to start fresh for every little question on the same topic.",
            "Start a new chat when you genuinely switch topics — not mid-project. Think one notebook per subject: your Q3 planning lives in one thread, your travel research in another.",
          ],
          highlight: "Same topic? Stay in the thread. New topic? New chat. That one rule prevents most of the mess.",
        },
        {
          type: 'concept',
          eyebrow: 'Habit two',
          icon: '🏷️',
          title: 'Rename your chats so the sidebar reads like a table of contents.',
          body: [
            "Claude auto-titles conversations, but those titles aren't always memorable. Rename the ones you'll return to: “Client proposal — Henderson,” “2026 budget rework,” “Italy trip planning.” Future-you will be grateful.",
            "You can also reopen any past conversation from the sidebar and keep going — your history isn't a graveyard, it's a library you can pull from.",
          ],
          highlight: "A renamed chat takes five seconds and saves you minutes of scrolling later.",
        },
        {
          type: 'concept',
          eyebrow: 'Habit three',
          icon: '🔭',
          title: "When organizing isn't enough, that's your cue for Projects.",
          body: [
            "If you keep returning to the same big area of work — a long project, a client, an ongoing responsibility — separate chats start to feel scattered no matter how well you name them. That's exactly the problem Projects solve.",
            "A Project is a dedicated workspace that holds related conversations, files, and instructions together. We'll build your first one in the very next module. For now, just notice which parts of your work feel like they deserve their own home.",
          ],
          highlight: "Lots of related chats on one big thing? That's a Project waiting to happen.",
        },
        {
          type: 'compare',
          eyebrow: 'Scattered vs. organized',
          title: 'Two ways to keep three weeks of work.',
          bad: {
            label: '❌ Scattered',
            text: 'A dozen chats named "New chat," "Untitled," and "help me write…", no idea which one had the good draft, re-explaining context every time.',
          },
          good: {
            label: '✅ Organized',
            text: 'A handful of clearly named, topic-specific threads you reopen and build on — each one already full of the context Claude needs.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Spend three minutes tidying your sidebar.',
          body: [
            "This one's hands-on inside Claude, not a prompt. Open your conversation list and do a quick pass: rename your three most useful recent chats with clear titles, and note which topic has so many chats it should probably become a Project.",
          ],
          prompt: "Here are the topics I keep coming back to with you: [list a few areas of your work or life you use Claude for]. Based on these, which ones would benefit most from being set up as a dedicated Project, and why? Keep it to your top two or three recommendations.",
          body2: "Hold onto Claude's answer — those are the Projects you'll build in Module 2. You've just scoped your own workspace.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: 'Your Claude workspace is tidy and easy to navigate.',
          body: [
            "One conversation per topic, clear names on the chats you'll revisit, and an eye for which big areas of work deserve a Project of their own. Small habits, big payoff.",
            "Next lesson: a quick look at how all these conversation skills add up — and the baseline you should expect from yourself going forward.",
          ],
          summaryList: [
            'Keep one conversation per topic and let it run long',
            'Rename important chats so the sidebar reads like a contents page',
            'Reopen past conversations to build on their context',
            'A topic with many related chats is a sign you need a Project',
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Thinking in Workflows, Not One-Offs',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 1 · Lesson 4',
          icon: '🔁',
          title: 'The real unlock is doing the same valuable thing again and again.',
          body: [
            "Beginners use Claude for one-off tasks: a single email, a quick summary. Power users notice when a task <em>repeats</em> — and turn it into a workflow they can run any time, in seconds.",
            "This lesson teaches you to spot your repeatable tasks and capture them, so your best prompts become reusable tools instead of things you reinvent each week.",
          ],
          sub: "Anything you do more than twice is a candidate for a reusable workflow.",
        },
        {
          type: 'concept',
          eyebrow: 'Spot the pattern',
          icon: '🔍',
          title: 'Your repeating tasks are hiding in plain sight.',
          body: [
            "Look at a typical week. The weekly update you write. The way you triage your inbox every Monday. Turning meeting notes into action items. Drafting the same kind of proposal. These repeat — which means each one can become a saved, reusable prompt.",
            "The test is simple: if you've asked Claude for something similar more than twice, stop rewriting the request. Capture it once and reuse it.",
          ],
          highlight: "Don't rewrite your good prompts. Save them and run them again.",
        },
        {
          type: 'concept',
          eyebrow: 'Build a reusable prompt',
          icon: '🧩',
          title: 'A good reusable prompt has blanks you fill in.',
          body: [
            "The trick to a reusable prompt is leaving placeholders for the parts that change. A weekly-update prompt might be: “Turn these rough notes into my standard team update. Notes: [paste]. Keep it to three sections: Done, In Progress, Blocked.” Everything but the notes stays the same every week.",
            "Keep a simple document — even just a note on your phone — of the prompts that work. That little library is one of the most valuable things you'll build in this course.",
          ],
          highlight: "Reusable prompt = your proven instructions + a blank for whatever changes.",
        },
        {
          type: 'concept',
          eyebrow: 'Where this is heading',
          icon: '🪜',
          title: 'Reusable prompts are the first rung of a much bigger ladder.',
          body: [
            "What you're learning here scales up dramatically as the course goes on. A saved prompt becomes a Project that holds your context. Connectors let Claude pull in the real data a workflow needs. Skills package whole document routines. And Cowork can run multi-step workflows for you.",
            "It all starts with the mindset you're building right now: notice what repeats, and capture it. Everything else in this course is a more powerful way to do exactly that.",
          ],
          highlight: "Master 'notice it, capture it' now — the rest of the course just adds horsepower.",
        },
        {
          type: 'compare',
          eyebrow: 'One-off vs. workflow',
          title: 'Two ways to handle a task you do every week.',
          bad: {
            label: '❌ One-off, every time',
            text: 'Each Monday you open a blank chat, think about how to phrase the request, and rebuild your weekly update prompt from memory.',
          },
          good: {
            label: '✅ A saved workflow',
            text: 'You paste your one proven prompt, drop in this week\'s notes, and have your update in under a minute — identical quality, every time.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Turn one repeating task into a reusable prompt.',
          body: [
            "Pick something you do regularly. Have Claude help you build the reusable version — with placeholders for the parts that change — so you can run it forever after.",
          ],
          prompt: "I regularly need to [describe the repeating task — e.g. write a weekly status update / summarize customer feedback / draft replies to common inquiries]. Help me build one reusable prompt I can use every time. Include clear placeholders in brackets for the parts that change, and explain how to use it. Then run it once with this example: [paste a real example].",
          body2: "Save the finished prompt somewhere you'll find it — a note, a doc, a pinned chat. You've just built the first tool in your personal Claude toolkit.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: 'You think in workflows now, not one-off requests.',
          body: [
            "You can spot the tasks that repeat, capture them as reusable prompts with fill-in-the-blank placeholders, and keep a growing library of your best ones. That mindset is the engine behind everything still to come.",
            "Last lesson in this module: pulling it all together into a power-user baseline you'll carry through the rest of the course.",
          ],
          summaryList: [
            'Anything you do more than twice can become a reusable workflow',
            'Build prompts with placeholders for the parts that change',
            'Keep a simple library of the prompts that work',
            'This mindset scales up into Projects, connectors, Skills, and Cowork',
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Your Power-User Baseline',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 1 · Lesson 5',
          icon: '🏆',
          title: "Let's lock in the habits that make everything else in this course click.",
          body: [
            "You've covered the four foundations of working with Claude at a higher level: custom instructions, roles and styles, an organized workspace, and a workflow mindset. This lesson turns them into a baseline you'll actually live by.",
            "It's short and practical. By the end you'll have a setup that pays off in every module to come.",
          ],
          sub: "Get the baseline right and the advanced features feel effortless.",
        },
        {
          type: 'concept',
          eyebrow: 'A quick recap',
          icon: '📚',
          title: 'Everything in this module, in four lines.',
          body: [
            "Set your custom instructions once so Claude knows who you are. Give Claude a specific role when you want sharper, expert help. Keep your conversations organized so past work stays useful. And notice what repeats so you can turn it into a reusable workflow.",
            "Together, those four moves are the difference between using Claude and <em>operating</em> Claude. They're the habits the rest of this course builds on.",
          ],
          highlight: "Custom instructions + roles + organization + workflows = your power-user baseline.",
        },
        {
          type: 'concept',
          eyebrow: 'The mistake to avoid',
          icon: '⚠️',
          title: "Don't skip the setup because it isn't the 'real' work.",
          body: [
            "It's tempting to blow past custom instructions and jump straight to asking questions. But ten minutes of setup quietly improves every single conversation you'll have afterward. It's the highest-return time you can spend.",
            "Treat the setup as part of the work, not a detour from it. The people who get the most from Claude are the ones who invested a little up front.",
          ],
          highlight: "Ten minutes of setup improves thousands of future replies. Don't skip it.",
        },
        {
          type: 'concept',
          eyebrow: 'Your checklist',
          icon: '✅',
          title: 'Five things to have in place before Module 2.',
          body: [
            "Here's the concrete baseline. None of it takes long, and all of it compounds:",
          ],
          list: {
            items: [
              '<strong>Custom instructions saved</strong> — who you are, your audience, your preferred tone and length',
              '<strong>One go-to role</strong> you know works for your most common kind of task',
              '<strong>A tidy sidebar</strong> — your key chats renamed and easy to find',
              '<strong>One reusable prompt</strong> saved somewhere you\'ll actually look',
              '<strong>A shortlist of "Project-worthy" topics</strong> ready for the next module',
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'Before and after this module',
          title: 'How your Claude habit has changed.',
          bad: {
            label: '📅 Before Module 1',
            text: 'Every chat started cold. You re-explained yourself, retyped your best prompts, and lost track of good conversations.',
          },
          good: {
            label: '✅ After Module 1',
            text: 'Claude knows who you are, you assign it the right role on demand, your workspace is organized, and your best prompts are saved and reusable.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Have Claude audit your setup and hand you a plan.',
          body: [
            "Finish the module by letting Claude check your baseline and tell you exactly what to do next. Answer honestly — the gaps it finds are your five-minute to-do list.",
          ],
          prompt: "I'm setting up a power-user baseline for working with you. Here's where I'm at: custom instructions — [done / not yet], a go-to role — [yes, it's ___ / not yet], organized sidebar — [yes / no], a saved reusable prompt — [yes / no]. Based on the gaps, give me a short, prioritized checklist to get fully set up, and suggest two or three Projects I should create next.",
          body2: "Knock out whatever's missing. When all five baseline items are in place, you're ready for Module 2 — where we build your first Project.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 1 Complete',
          icon: '🎉',
          title: "Your foundation for real work with Claude is set.",
          body: [
            "You've stopped repeating yourself, you steer Claude with roles and styles, your workspace is organized, and you think in reusable workflows. That's the operating baseline of someone who gets serious value from Claude.",
            "Module 2 takes the biggest leap yet: Projects — dedicated workspaces that give Claude lasting context, so it knows your work as well as you do.",
          ],
          summaryList: [
            'Custom instructions, roles, organization, and workflows are your baseline',
            'Setup is the work — ten minutes up front improves everything after',
            'Run the five-item checklist before moving on',
            'You\'re ready to build your first Project in Module 2',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'What single mindset best describes working with Claude at this intermediate level?',
      options: [
        'Write the longest, most detailed prompt possible every single time',
        'Stop repeating yourself — set things up once so Claude carries them forward',
        'Start a brand-new conversation for every question to keep things clean',
        'Only use Claude for tasks you could not do yourself',
      ],
      correct: 1,
      feedback:
        "The theme of this whole module is: stop repeating yourself. Custom instructions, saved roles and styles, organized threads, and reusable prompts all exist so you set something up once and let Claude carry it forward — instead of rebuilding context from scratch every conversation.",
    },
    {
      q: 'You want sharper, more expert help on a specific task. What is the highest-value move?',
      options: [
        'Add the words "please" and "thank you" to your prompt',
        'Tell Claude to act as a specific kind of expert relevant to your task',
        'Ask the same question several times until the answer improves',
        'Switch to a different AI tool',
      ],
      correct: 1,
      feedback:
        "Assigning a specific role — \"act as a seasoned restaurant consultant,\" \"act as a plain-language editor\" — gives Claude a point of view, the right knowledge to draw on, and the willingness to push back honestly. The more specific the role, the more useful the help.",
    },
    {
      q: 'You keep returning to the same big area of work and your related chats feel scattered. What does that signal?',
      options: [
        'You should delete the old chats and start over each time',
        'You\'ve hit Claude\'s limits and should use it less for that topic',
        'That area of work is a strong candidate to become a Project',
        'You need to write longer custom instructions',
      ],
      correct: 2,
      feedback:
        "When many related conversations pile up around one ongoing area of work, that's exactly the problem Projects solve. A Project is a dedicated workspace that holds related chats, files, and instructions together — which is what you'll build in the next module.",
    },
  ],
}

export default c8module1
