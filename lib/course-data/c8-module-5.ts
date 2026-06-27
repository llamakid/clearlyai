import type { CourseData } from './types'

const c8module5: CourseData = {
  moduleId: 47,
  title: 'Meet Cowork',
  subtitle: 'Module 5',
  nextModuleId: 48,
  lessons: [
    {
      id: 0,
      title: 'Beyond Chat: What Cowork Actually Is',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 5 · Lesson 1',
          icon: '🤖',
          title: "Up to now, Claude has answered you. Cowork actually does the work.",
          body: [
            "Everything you've learned so far happens in a chat: you ask, Claude replies, and <em>you</em> take it from there — you copy the draft, you tidy the file, you do the next step. That's powerful, but it still leaves the doing to you.",
            "Cowork changes that. Instead of handing you an answer, it can carry out a whole multi-step task on your computer and your files, then hand you back a finished result. This is the most advanced thing in the course — and the good news is it was built for regular people, not coders.",
          ],
          sub: "Chat tells you how to do something. Cowork goes and does it.",
        },
        {
          type: 'concept',
          eyebrow: 'The big shift',
          icon: '🔀',
          title: 'From a helpful answer to a finished deliverable.',
          body: [
            "Picture the difference. In a chat, you might ask, “How should I organize these files?” and Claude explains a sensible system — and then you spend twenty minutes actually moving things around. With Cowork, you say, “Organize this folder,” and it does the moving for you.",
            "That's the shift: you describe the <em>outcome</em> you want, and Cowork handles the steps to get there. You go from a chat partner who advises you to an assistant who completes the job.",
          ],
          highlight: "You stop asking 'how do I do this?' and start saying 'please do this.'",
        },
        {
          type: 'concept',
          eyebrow: 'Who it\'s for',
          icon: '👥',
          title: "It's built for knowledge workers — not programmers.",
          body: [
            "If you've heard about AI “agents” doing work on a computer and assumed it was only for software developers, set that worry aside. Cowork is designed for the kind of work most of us actually do: researching, analyzing, organizing, writing, tidying spreadsheets, pulling things together.",
            "Think of the everyday jobs that eat your time — a messy folder, a pile of notes that needs to become a document, a spreadsheet that needs cleaning up. Those are exactly the tasks Cowork was made to take off your plate.",
          ],
          highlight: "Researchers, analysts, operations, finance, admin — this is for office work, not coding.",
        },
        {
          type: 'concept',
          eyebrow: 'What it can take on',
          icon: '📋',
          title: 'The kind of work you can hand off.',
          body: [
            "Cowork shines on tasks that have several steps and would normally mean a lot of clicking and copying on your part. You give it the goal; it works through the steps. Here are the kinds of jobs people delegate:",
          ],
          list: {
            items: [
              '<strong>Organizing files</strong> — sorting, renaming, and grouping the contents of a folder',
              '<strong>Turning rough material into a document</strong> — your notes into a clean draft',
              '<strong>Tidying a spreadsheet</strong> — cleaning up, formatting, and summarizing data',
              '<strong>Pulling research together</strong> — gathering and organizing information into one place',
              '<strong>Multi-step chores</strong> — anything that\'s a sequence of small steps you\'d rather not do by hand',
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'Chat vs. Cowork',
          title: 'The same goal, handled two different ways.',
          bad: {
            label: '💬 In a chat',
            text: '"How do I turn these meeting notes into a polished summary?" → Claude explains a good approach, and then you spend the next half hour writing it yourself.',
          },
          good: {
            label: '🤖 With Cowork',
            text: '"Turn the notes in this folder into a polished summary document." → Cowork reads your notes, writes the summary, and saves the finished document for you to review.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Find the tasks in your week worth handing off.',
          body: [
            "Before you ever open Cowork, it helps to know what you'd want it to do. Use a normal Claude chat to think it through — paste the prompt below and let Claude help you spot good first candidates.",
          ],
          prompt: "I'm about to start using Claude's Cowork assistant, which can carry out multi-step tasks on my computer and files instead of just answering in chat. Here's what a typical week of my work looks like: [describe a few recurring chores — e.g. organizing downloads, turning notes into documents, cleaning up spreadsheets]. Which of these would be good, low-risk first tasks to hand off, and why? List your top three.",
          body2: "You're not doing the tasks yet — you're scouting them. Keep Claude's shortlist handy; you'll pick one to actually delegate by the end of this module.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: "You understand the leap from chatting to delegating.",
          body: [
            "Chat gives you answers; Cowork does the work. You describe the outcome you want, and it carries out the steps on your computer and files — then hands you a finished result. And it was built for everyday knowledge workers, not coders.",
            "Next lesson: getting Cowork set up. It's a one-time bit of setup, and we'll walk through it gently.",
          ],
          summaryList: [
            'Chat answers your questions; Cowork completes whole tasks',
            'You describe the outcome and it handles the steps',
            'It works on your computer and your files, returning a finished result',
            'It\'s built for non-technical knowledge workers, not programmers',
            'Good first tasks: organizing files, drafting from notes, tidying spreadsheets',
          ],
        },
      ],
    },
    {
      id: 1,
      title: 'Getting Cowork Set Up',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 5 · Lesson 2',
          icon: '⚙️',
          title: "Let's get Cowork ready — it's a one-time setup, and then it's just there.",
          body: [
            "Setting up Cowork can sound intimidating, but it's really just three calm steps: get the right app, give it a little permission to help you, and point it at the folders you want it to work with. You do this once.",
            "We'll keep this plain and reassuring. You won't break anything, and nothing happens to your files until you actually ask for it. Take it one step at a time.",
          ],
          sub: "Set it up once, and Cowork is ready whenever you need it.",
        },
        {
          type: 'concept',
          eyebrow: 'Step one',
          icon: '🖥️',
          title: 'Cowork lives in the Claude desktop app.',
          body: [
            "Cowork isn't in the website — it's part of the Claude <em>desktop app</em>, the version you download and install on your computer. It's available for both Mac and Windows, so whichever you use, you're covered.",
            "If you don't already have the desktop app, you'll download and install it the same way you install any program. Once it's open and you're signed in, you're in the right place to find Cowork.",
          ],
          highlight: "Website = chat. Desktop app = where Cowork lives. You'll want the desktop app installed.",
        },
        {
          type: 'concept',
          eyebrow: 'A quick, honest note',
          icon: '💳',
          title: 'Cowork is part of Claude\'s paid plans.',
          body: [
            "Like a few of the more powerful features in this course, Cowork is part of Claude's paid plans. That makes sense — it's doing real, hands-on work for you, not just chatting.",
            "If you're on a free plan today, that's fine. Read through these lessons so you understand what Cowork can do, and you can decide later whether it's worth a paid plan for the way <em>you</em> work. There's no rush.",
          ],
          highlight: "It's a paid feature. Learn what it does first, then decide if it's worth it for you.",
        },
        {
          type: 'concept',
          eyebrow: 'Steps two and three',
          icon: '🔐',
          title: 'You give it permission, then point it at your folders.',
          body: [
            "The first time you use Cowork, it may ask for some system permissions — on a Mac especially. This is normal and expected: you're giving it permission to act on your behalf, the same way you'd let any helpful app do its job. You can manage these in the desktop app's settings.",
            "Then comes the part that keeps you in control: you connect Cowork to specific folders. It can only work inside the folders you choose. So you decide exactly where it's allowed to look and act — and everything else on your computer stays off-limits.",
          ],
          highlight: "Permissions let it help; connected folders set the boundaries. You choose both.",
        },
        {
          type: 'compare',
          eyebrow: 'A worry vs. the reality',
          title: 'What setup actually feels like.',
          bad: {
            label: '😟 The worry',
            text: '"Granting permissions means it can do anything to my whole computer, and I won\'t know what\'s happening."',
          },
          good: {
            label: '😌 The reality',
            text: 'Permissions just let it help on your behalf — and it can only touch the specific folders you connect. You stay in control of where it works and what it does.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Get the app and plan your setup.',
          body: [
            "Let's get you ready. The hands-on part happens in the app, but you can let Claude talk you through it first. Use the prompt below in a normal chat to get a calm, step-by-step plan tailored to your computer.",
          ],
          prompt: "I want to set up Claude's Cowork assistant for the first time. I'm using [a Mac / a Windows PC] and I'm not very technical. Walk me through getting ready in plain English: making sure I have the Claude desktop app, what to expect when it asks for permissions, and how to connect it to a folder. Keep it calm and step-by-step, and tell me what's normal so I don't worry.",
          body2: "Now do the hands-on part: open (or install) the Claude desktop app, sign in, and find Cowork in it. If it asks for permissions, grant them. Then connect one folder — pick a low-stakes one for now. That's your setup done.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: "Cowork is installed, permitted, and pointed at a folder.",
          body: [
            "You've done the one-time setup: the desktop app is in place, you've granted the permissions it needs to help you, and you've connected a first folder so it has a safe place to work.",
            "Next lesson: your very first delegated task. We'll start small and low-stakes, so your first experience is an easy win.",
          ],
          summaryList: [
            'Cowork lives in the Claude desktop app (Mac and Windows)',
            'It\'s part of Claude\'s paid plans',
            'On first use it may ask for system permissions so it can help you',
            'You connect it to specific folders — it can only work where you let it',
            'Setup is a one-time thing; after that, Cowork is just ready',
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Your First Delegated Task',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 5 · Lesson 3',
          icon: '🪄',
          title: "Time to hand Cowork its first real job — something small and safe.",
          body: [
            "The best way to build confidence with Cowork is to give it an easy first task and watch it succeed. We're not going to start with anything precious or complicated. We're going to pick something small, low-stakes, and genuinely useful.",
            "In this lesson you'll learn the simple knack of delegating well: pick the right first job, describe the <em>outcome</em> you want, and then let it work.",
          ],
          sub: "Start small. A quick early win is worth more than an ambitious flop.",
        },
        {
          type: 'concept',
          eyebrow: 'Pick the right job',
          icon: '🎯',
          title: 'Choose something small and low-stakes.',
          body: [
            "A great first task has two qualities: it's small enough to finish quickly, and low-stakes enough that you wouldn't mind if you had to tweak the result. Think “organize my downloads folder,” not “restructure my entire business archive.”",
            "Good starters include tidying a folder of files, turning a page of rough notes into a clean draft, or cleaning up a small spreadsheet. Each one is a contained job with a clear finish line — perfect for learning how Cowork behaves.",
          ],
          highlight: "Your first task should be one you'd shrug off if it needed a second pass.",
        },
        {
          type: 'concept',
          eyebrow: 'Describe the outcome',
          icon: '🏁',
          title: 'Tell it what “done” looks like — not how to do it.',
          body: [
            "Here's the mindset shift. In a chat you give step-by-step instructions. With Cowork, you describe the <em>result</em> you want and let it figure out the steps. “Sort these files into folders by type and rename them clearly” describes a finished state — and Cowork works out how to get there.",
            "It helps to be specific about the outcome. “Organize this folder” is okay; “Group these files into folders by month, and give each file a clear, consistent name” paints a much clearer picture of success.",
          ],
          highlight: "Say what 'finished' looks like. Let Cowork own the steps in between.",
        },
        {
          type: 'concept',
          eyebrow: 'Then let it work',
          icon: '⏳',
          title: 'Hand it off and let it run.',
          body: [
            "Once you've described the outcome, your job is mostly to let it work. Cowork will go step by step through the task you gave it. You don't need to hover over every action or supply the next instruction — that's the whole point of delegating.",
            "You'll still see what it's doing as it goes (that's the next lesson), and you'll review the result at the end. But for your first task, simply notice how it feels to hand something off and let it run to completion.",
          ],
          highlight: "Delegating means stepping back. Describe the goal, then let Cowork carry it out.",
        },
        {
          type: 'compare',
          eyebrow: 'How you ask matters',
          title: 'Two ways to describe the same first task.',
          bad: {
            label: '❌ Vague and step-by-step',
            text: '"Open the folder, look at each file, then maybe make some folders, then drag things around…" → micro-managing the steps instead of naming the result.',
          },
          good: {
            label: '✅ A clear outcome',
            text: '"In my Downloads folder, group the files into subfolders by type — documents, images, spreadsheets — and rename each one clearly." → a finished state Cowork can work toward on its own.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Delegate your first small task.',
          body: [
            "Pick the smallest, safest job from your shortlist. The instruction below is the kind of clear, outcome-focused goal you'd give Cowork in the desktop app. Adapt it to your real folder and task.",
          ],
          prompt: "Here's the folder I've connected. Please organize it for me: group the files into clearly named subfolders by type, give each file a clear and consistent name, and don't delete anything. When you're done, give me a short summary of what you changed.",
          body2: "In the Cowork desktop app, give it this goal for the low-stakes folder you connected last lesson, then step back and let it run. When it finishes, open the folder and see the result. That's your first delegated task — done.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: "You've handed Cowork its first real task.",
          body: [
            "You picked something small and low-stakes, described the outcome you wanted rather than the steps, and let Cowork carry it out. That's the core loop of delegating — and you just did it for real.",
            "Next lesson: what it looks like to watch Claude work, and the simple controls that keep you firmly in charge the whole time.",
          ],
          summaryList: [
            'Pick a first task that\'s small and low-stakes',
            'Describe the outcome — what "done" looks like — not the steps',
            'Be specific about the finished result you want',
            'Hand it off and let it run to completion',
            'A quick early win builds your confidence for bigger tasks',
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Watching Claude Work',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 5 · Lesson 4',
          icon: '👀',
          title: "You're never in the dark — and you're always the one in charge.",
          body: [
            "Handing a task to Cowork doesn't mean closing your eyes and hoping. The opposite: you can watch what it's doing, it keeps you informed as it goes, and nothing important happens without your say-so.",
            "This lesson is all about staying in control. Once you see how the guardrails work, delegating stops feeling risky and starts feeling like having a careful, trustworthy assistant.",
          ],
          sub: "Cowork works for you, out in the open, inside boundaries you set.",
        },
        {
          type: 'concept',
          eyebrow: 'Guardrail one',
          icon: '📁',
          title: 'It can only touch the folders you connect.',
          body: [
            "This is the most reassuring fact about Cowork: it can only read, edit, and create files inside the folders you've connected to it. The rest of your computer — every other folder, file, and program — is simply out of reach.",
            "So the boundary is yours to set. Connect one small folder and that's the entire world Cowork can act in. Want to give it more room later? You connect another folder when <em>you</em> decide to.",
          ],
          highlight: "No connected folder, no access. You draw the lines around where it can work.",
        },
        {
          type: 'concept',
          eyebrow: 'Guardrail two',
          icon: '📣',
          title: 'It keeps you informed as it goes.',
          body: [
            "Cowork doesn't disappear and come back hours later with a mystery result. As it works through a task, it keeps you in the loop about what it's doing, so you can follow along and understand the steps it's taking.",
            "That visibility is what makes it trustworthy. You're not guessing what happened — you can see the work unfold, which means you learn to trust it the same way you'd trust a colleague whose process you can observe.",
          ],
          highlight: "You can watch the work happen — no black box, no surprises.",
        },
        {
          type: 'concept',
          eyebrow: 'Guardrail three',
          icon: '✋',
          title: 'You review and approve the work.',
          body: [
            "Cowork is your assistant, not your replacement, so the final say stays with you. You review what it produced and decide whether it's right. If something's off, you tell it what to fix, just like you would with any draft.",
            "The simplest safety habit of all: start with low-stakes folders and low-stakes tasks. As your trust grows from seeing good results, you can hand off bigger and more important work — at your own pace.",
          ],
          highlight: "You're the editor and the approver. Start low-stakes and build trust from there.",
        },
        {
          type: 'compare',
          eyebrow: 'The fear vs. how it really works',
          title: 'Is letting Claude work on my files safe?',
          bad: {
            label: '😬 The fear',
            text: '"It might go rummaging through my whole computer and change things I never see, with no way to stop it."',
          },
          good: {
            label: '🛡️ How it works',
            text: 'It only acts in folders you connect, it keeps you informed as it works, and you review and approve the result. You set the boundaries and you have the final say.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Run a task and pay attention to the controls.',
          body: [
            "This time, the goal is to <em>notice the guardrails</em> in action. Give Cowork another small job and watch how it keeps you informed and waits for your review. The instruction below is the kind of goal you'd give it in the app.",
          ],
          prompt: "Please review the documents in this connected folder and create one short summary file that lists what each document is about. Keep me posted on what you're doing as you go, and don't change the original files. When you're finished, show me the summary so I can approve it.",
          body2: "In the Cowork desktop app, run this on a low-stakes folder and deliberately watch: notice how it stays inside that one folder, how it keeps you informed, and how it leaves the final review to you. Seeing the guardrails work is what builds your confidence.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: "You know exactly how Cowork keeps you in control.",
          body: [
            "Cowork only works in the folders you connect, it keeps you informed as it goes, and you review and approve the result. Start low-stakes, watch it work, and your trust grows naturally from there.",
            "Last lesson: putting it all together with a confidence-building challenge — delegating one real, small task from start to finish.",
          ],
          summaryList: [
            'Cowork can only touch the folders you connect to it',
            'It keeps you informed as it works — no black box',
            'You review and approve the final result',
            'Start with low-stakes folders and tasks, then build up',
            'The boundaries and the final say are always yours',
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Your First Real Handoff',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 5 · Lesson 5',
          icon: '🤝',
          title: "Let's put it all together: one real task, delegated end to end.",
          body: [
            "You've learned what Cowork is, set it up, run a practice task, and seen how it keeps you in control. Now it's time for the real thing — a single, genuine task from your own work, handed off from start to finish.",
            "This is the confidence-building moment the whole module has been leading to. It's small on purpose. The win isn't the size of the task — it's the feeling of trusting an assistant to complete real work for you.",
          ],
          sub: "One real handoff teaches you more than ten explanations.",
        },
        {
          type: 'concept',
          eyebrow: 'The recipe',
          icon: '🧾',
          title: 'Everything you\'ve learned, in one short routine.',
          body: [
            "A clean handoff follows the same simple rhythm every time: connect the right folder, describe the outcome you want, let Cowork work while it keeps you posted, then review and approve the result. That's the whole loop.",
            "You already know each step. This lesson is just about running them together, confidently, on something that actually matters to you — even if only a little.",
          ],
          highlight: "Connect → describe the outcome → let it work → review and approve.",
        },
        {
          type: 'concept',
          eyebrow: 'Pick wisely',
          icon: '🥇',
          title: 'Choose a real task — but keep it small.',
          body: [
            "For your first real handoff, pick something from your actual work that you genuinely want done, but that won't cause a headache if it needs a tweak. The sweet spot is real enough to be satisfying, small enough to be safe.",
            "Maybe it's turning this week's messy notes into a tidy document, or cleaning up a small working spreadsheet, or organizing a project folder that's gotten out of hand. Something you'd actually feel good having finished.",
          ],
          highlight: "Real enough to matter, small enough to be low-stakes. That's the perfect first handoff.",
        },
        {
          type: 'concept',
          eyebrow: 'What you\'ll come away with',
          icon: '💪',
          title: 'After this, Cowork stops being theoretical.',
          body: [
            "The first time you watch Cowork finish a real task you actually needed done, something clicks. It stops being a feature you read about and becomes a tool you reach for. That's the goal of this challenge.",
            "And remember the safety net is always there: connected folders only, kept informed as it works, your review at the end. You can be bold <em>because</em> the guardrails have your back.",
          ],
          highlight: "One successful real handoff turns Cowork from an idea into a habit.",
        },
        {
          type: 'compare',
          eyebrow: 'Before and after this module',
          title: 'How your relationship with Claude just changed.',
          bad: {
            label: '📅 Before Module 5',
            text: 'Claude advised you, and you did all the actual work — the moving, tidying, drafting, and cleaning up by hand.',
          },
          good: {
            label: '✅ After Module 5',
            text: 'You delegate whole multi-step tasks to Cowork, watch it work inside the folders you choose, and review a finished result. Claude does, not just advises.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Your Module Challenge',
          icon: '🏆',
          title: 'Delegate one real, small task — start to finish.',
          body: [
            "Here it is: the real handoff. Pick a genuine task from your work, connect the folder it lives in, and give Cowork a clear goal. The instruction below is a template for the kind of outcome you'd describe in the desktop app — make it your own.",
          ],
          prompt: "I've connected the folder for this task. Here's what I'd like you to do: [describe the real outcome you want — e.g. turn the notes in here into one polished summary document / clean up and format this spreadsheet and add a summary row / organize this project folder into clearly named subfolders]. Please keep me informed as you work, don't delete anything without telling me, and show me the result so I can review and approve it.",
          body2: "In the Cowork desktop app, run this on your real (but low-stakes) folder. Let it work, watch it keep you posted, and review the finished result. When you approve something Cowork actually completed for you, you've crossed the line from chatting to delegating — congratulations.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 5 Complete',
          icon: '🎉',
          title: "You've delegated real work to Claude — and it delivered.",
          body: [
            "You understand the shift from chat to Cowork, you've got it set up, and you've handed off a real task from start to finish — all while staying firmly in control. That's the most advanced skill in this course, and you've done it.",
            "From here, Cowork is just another tool in your kit: when a task is a multi-step chore you'd rather not do by hand, you can hand it off and get back a finished result. Use it whenever it earns its keep.",
          ],
          summaryList: [
            'A clean handoff: connect, describe the outcome, let it work, review',
            'Pick a real but small first task — satisfying yet low-stakes',
            'The guardrails let you be bold: connected folders, kept informed, your review',
            'One successful real handoff turns Cowork into a habit',
            'You\'ve crossed from chatting with Claude to delegating to it',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'What is the core difference between using Claude in a chat and using Cowork?',
      options: [
        'Cowork gives longer answers than the chat does',
        'Chat answers your questions, while Cowork actually carries out multi-step tasks on your files',
        'Cowork is only for writing code, while chat is for everything else',
        'Chat works offline and Cowork needs the internet',
      ],
      correct: 1,
      feedback:
        "That's the big shift. In a chat, Claude answers and you do the work. With Cowork, you describe the outcome you want and it carries out the steps on your computer and files, handing you back a finished result. And it's built for everyday knowledge workers, not coders.",
    },
    {
      q: 'What keeps you in control of where Cowork can act on your computer?',
      options: [
        'It can access everything but politely asks before each action',
        'It can only read, edit, and create files in the folders you connect to it',
        'It only works on files you have open at that moment',
        'You have to turn it off when you\'re not using it or it keeps running',
      ],
      correct: 1,
      feedback:
        "Cowork can only touch the folders you connect. The rest of your computer is out of reach. That's why the safe habit is to start with low-stakes folders — you decide exactly where it's allowed to work, and you can connect more later.",
    },
    {
      q: 'What makes a good first task to hand off to Cowork?',
      options: [
        'Your single most important and complicated project',
        'A task that\'s small and low-stakes, where you\'d be fine if it needed a tweak',
        'Anything involving writing computer code',
        'A task you have never done yourself and don\'t understand',
      ],
      correct: 1,
      feedback:
        "Start small and low-stakes — organizing a folder, drafting from notes, tidying a small spreadsheet. Describe the outcome you want rather than the steps, then let it work. A quick early win builds the confidence you need to hand off bigger tasks later.",
    },
  ],
}

export default c8module5
