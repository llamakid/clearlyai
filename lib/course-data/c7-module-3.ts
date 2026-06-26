import type { CourseData } from './types'

const c7module3: CourseData = {
  moduleId: 39,
  title: 'Everyday Wins',
  subtitle: 'Module 3',
  nextModuleId: 40,
  lessons: [
    {
      id: 0,
      title: 'Writing Anything, Faster',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 3 · Lesson 1',
          icon: '✍️',
          title: 'The blank page is over.',
          body: [
            "Of everything Claude does, writing is where most people feel the difference fastest. Emails, text messages, letters, social posts, notes — anything made of words, Claude can draft for you in seconds.",
            "Here's the key shift: you stop being the person who has to produce the words from nothing, and become the person who steers and refines. That's a much easier, faster job — and the result still sounds like you.",
          ],
          sub: "You don't have to be a good writer to get good writing. You just have to know what you want to say.",
        },
        {
          type: 'concept',
          eyebrow: 'The core move',
          icon: '🪄',
          title: 'Let Claude draft. You refine.',
          body: [
            "Staring at an empty screen is the hardest part of writing. Claude removes it entirely. You describe what you need, it produces a complete first draft, and now you're reacting to real words instead of inventing them.",
            "Reacting is easy. You read the draft and think “too formal,” or “too long,” or “it missed the main point” — and you just say so. Each note you give pulls the writing closer to what you meant. That's the whole rhythm: draft, react, refine.",
          ],
          highlight: "A first draft you can fix beats a blank page you can't start. Let Claude give you something to push against.",
        },
        {
          type: 'concept',
          eyebrow: 'Feed it your bullet points',
          icon: '📝',
          title: 'You bring the points. Claude brings the polish.',
          body: [
            "You almost always know <em>what</em> you want to say — you just don't want to wrestle with how to phrase it. So don't. Jot down your points as rough bullets, hand them to Claude, and ask it to shape them into a finished message.",
            "“Tell the contractor: the kitchen quote is too high, I still want to work with him, can we trim the budget, available to talk Thursday.” Four scrappy fragments in — one warm, clear, well-structured email out. You did the thinking; Claude did the typing.",
          ],
          highlight: "Rough bullets are a perfect starting point. Claude turns your scattered points into smooth sentences.",
        },
        {
          type: 'concept',
          eyebrow: 'Keeping it in your voice',
          icon: '🎙️',
          title: 'Tell Claude how you sound, and it will sound like you.',
          body: [
            "A common worry: “Won't it sound like a robot wrote it?” Only if you let it. Claude can match almost any voice once you describe it — or once you show it a sample of your own writing.",
            "Tell it the tone you use: “casual and a little funny,” “warm but professional,” “short and to the point — I don't do flowery.” Even better, paste in an email you wrote yourself and say “match this voice.” From then on, the drafts read like you on a good day.",
          ],
          list: {
            items: [
              "<strong>Name your tone</strong> — “friendly,” “direct,” “warm,” “no-nonsense”",
              "<strong>Show a sample</strong> — paste something you wrote and say “sound like this”",
              "<strong>Set a length</strong> — “keep it to three short sentences”",
              "<strong>Flag your no-gos</strong> — “nothing cheesy,” “no exclamation points,” “skip the corporate buzzwords”",
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'Two ways to ask for the same email',
          title: 'A little direction changes everything.',
          body: ["Both ask for an email. Only one gets you something you'd actually send:"],
          bad: {
            label: '❌ Bare request',
            text: '"Write an email to my landlord about the broken heater."',
          },
          good: {
            label: '✅ With direction',
            text: '"Write a short, polite-but-firm email to my landlord. The heater\'s been broken for five days, I\'ve called twice with no callback, and I need it fixed this week. Friendly tone, but make the urgency clear. Three or four sentences."',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Turn your bullet points into a finished message.',
          body: [
            "Think of one message you've been putting off — an email, a text, a note. Don't write it. Just list the points you'd want to make, then hand them to Claude with the prompt below.",
          ],
          prompt: "Turn these rough points into a finished [email / text message]. Here's the situation and the points I want to make: [list your bullet points — don't worry about wording]. Tone: [friendly / professional / warm / direct]. Keep it to about [length]. Make it sound natural, not stiff.",
          body2: "Read the draft. Not quite right? Tell Claude exactly what to change — “warmer,” “shorter,” “add a line about the deadline.” One or two notes and you'll have something you're happy to send.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: 'Writing just got a lot faster.',
          body: [
            "You now have the most-used skill in the toolkit: hand Claude your points, let it draft, and refine it into your own voice. The blank page stops being your problem.",
            "Next lesson: the flip side of writing — making sense of long things other people wrote, fast.",
          ],
          summaryList: [
            'Let Claude draft so you never start from a blank page',
            'Bring rough bullet points — Claude shapes them into finished writing',
            'Tell Claude your tone, or paste a sample, to keep it in your voice',
            'Refine with quick notes: shorter, warmer, add this, cut that',
          ],
        },
      ],
    },
    {
      id: 1,
      title: 'Making Sense of Long Things',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 3 · Lesson 2',
          icon: '📚',
          title: 'Long, dense, and confusing — handled.',
          body: [
            "We're all buried in text we don't have time to read: long email chains, dense articles, terms-and-conditions, a report someone forwarded “for your thoughts.” Claude is exceptional at cutting through it.",
            "Paste a wall of text into the message box, ask for it in plain English, and seconds later you've got the gist — the key points, the part that matters to you, or just the one thing you actually need to do.",
          ],
          sub: "You don't have to read every word. You have to know what the words mean for you.",
        },
        {
          type: 'concept',
          eyebrow: 'The simplest summarizer there is',
          icon: '📋',
          title: 'Paste it in. Ask for a plain summary.',
          body: [
            "The move is almost too easy: copy the long thing — an email, an article, a document — and paste it straight into Claude's message box. Then add a simple instruction like “Summarize this in plain English.”",
            "You'll get back a few clear sentences capturing what the whole thing was actually about. No skimming, no slogging through paragraphs of throat-clearing to find the one useful line. (We'll cover uploading actual files in a later module — for now, pasting the text in works beautifully.)",
          ],
          highlight: "Copy the long thing, paste it into Claude, and ask for a plain-English summary. That's the entire technique.",
        },
        {
          type: 'concept',
          eyebrow: 'Ask for the shape you need',
          icon: '🎚️',
          title: 'A summary isn\'t one-size-fits-all — ask for the version you want.',
          body: [
            "“Summarize this” is just the start. You can ask for exactly the shape that's useful in the moment, and Claude will reshape the same text however you like.",
            "Want it scannable? “Give me the five key points as a bullet list.” In a hurry? “Explain it like I'm busy — just tell me what matters.” Need the bottom line? “What's the one thing I actually need to know here?” Same text, different lens, whatever fits your minute.",
          ],
          list: {
            items: [
              '<strong>The gist</strong> — “Summarize this in three sentences”',
              '<strong>The key points</strong> — “Give me the main points as a bullet list”',
              '<strong>The busy version</strong> — “Explain it like I\'m busy — just what matters”',
              '<strong>The bottom line</strong> — “What\'s the one thing I need to know?”',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'The most useful ask of all',
          icon: '✔️',
          title: 'Ask for the action items, not just the summary.',
          body: [
            "Often you don't really need to <em>understand</em> the long thing — you need to know what it's asking <em>you</em> to do. Claude can pull that out directly. “Read this and tell me what I need to do, and by when.”",
            "Buried in a four-paragraph email might be a single request: reply with your availability by Friday. Claude surfaces it instantly. Try it on a long thread and ask “What are the action items for me here?” — you'll wonder how you ever read these things the old way.",
          ],
          highlight: "“What do I actually need to do?” turns a wall of text into a short to-do list.",
        },
        {
          type: 'compare',
          eyebrow: 'Two ways to handle the forwarded report',
          title: 'Reading every word vs. asking the right question.',
          bad: {
            label: '🐌 The old way',
            text: 'Open the 12-paragraph report, read top to bottom, lose the thread halfway, re-read, and still feel unsure what you were supposed to take from it.',
          },
          good: {
            label: '⚡ With Claude',
            text: 'Paste it in: “Summarize this in five bullet points, then list anything that needs a decision or response from me.” Twenty seconds later you know the whole thing and what to do next.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Summarize something long that\'s sitting in your inbox.',
          body: [
            "Find a long email, article, or document you've been avoiding. Copy the whole text, paste it into Claude, and use the prompt below. Watch a chore turn into a thirty-second task.",
          ],
          prompt: "Here's a long [email / article / document]. First, give me a plain-English summary in 3–5 bullet points. Then tell me if there's anything I need to respond to or do, and by when. Here it is:\n\n[paste the full text here]",
          body2: "Try a follow-up too: “Now explain the second point in more detail” or “Draft a quick reply for me.” Summarizing and writing work beautifully together in the same conversation.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: 'Long things no longer slow you down.',
          body: [
            "You can paste any wall of text into Claude and get back exactly the version you need — the gist, the key points, the busy summary, or just your action items. Reading everything is optional now.",
            "Next lesson: pointing that same power at your own life — planning trips, events, projects, and the week ahead.",
          ],
          summaryList: [
            'Paste long text right into the message box and ask for a plain summary',
            'Ask for the shape you need: bullets, the gist, or “explain it like I\'m busy”',
            'Ask “what do I need to do?” to pull out the action items',
            'Combine it with writing — summarize, then draft a reply in the same chat',
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Planning and Organizing Your Life',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 3 · Lesson 3',
          icon: '🗓️',
          title: 'Big, overwhelming things — broken into doable steps.',
          body: [
            "Trips, events, home projects, a packed week, a to-do list that's gotten out of hand — the hard part is rarely the doing. It's the figuring out where to even start, and what you're forgetting.",
            "Claude is a natural at this. It takes a big, fuzzy goal and breaks it into a clear, ordered list of steps — and it'll even ask you the questions you didn't know to ask yourself.",
          ],
          sub: "You don't have to hold the whole plan in your head. You just have to describe the goal.",
        },
        {
          type: 'concept',
          eyebrow: 'Turn a goal into steps',
          icon: '🪜',
          title: 'Ask Claude to break a big goal into a sequence of steps.',
          body: [
            "Say what you're trying to do and ask for the steps. “I want to plan a long weekend in Chicago — break it into a step-by-step plan.” Claude turns the vague mountain into a numbered path: dates, budget, where to stay, what to book, what to pack.",
            "Suddenly the thing that felt overwhelming is just a list, and you're working down it one item at a time. Anything big — a move, a party, a kitchen reno, learning a new skill — responds to the same simple request: “Break this into steps for me.”",
          ],
          highlight: "“Break this into steps” is the prompt that makes any big project feel manageable.",
        },
        {
          type: 'concept',
          eyebrow: 'The secret ingredient',
          icon: '❓',
          title: 'Let Claude ask you what it needs to know.',
          body: [
            "A great plan depends on your specifics — your dates, your budget, who's coming, what you care about. Instead of dumping all that up front, hand the work to Claude: “Before you make the plan, ask me whatever you need to know.”",
            "Now Claude interviews <em>you</em>. “What are your dates? What's your budget? Traveling with kids? More into food or museums?” You answer in a sentence each, and the plan that comes back is built around your actual life — not a generic checklist.",
          ],
          highlight: "Ask Claude to interview you first. A few good questions turn a generic plan into your plan.",
        },
        {
          type: 'concept',
          eyebrow: 'Everyday organizing',
          icon: '✅',
          title: 'It\'s not just big projects — it\'s your ordinary week.',
          body: [
            "The same skill quietly fixes everyday chaos. Dump your messy mental list into Claude and ask it to organize it — by priority, by day, by how long each thing takes.",
            "“Here's everything on my plate this week: [the dump]. Help me sort it into a realistic daily schedule, hardest things first, with the must-dos flagged.” You hand over a jumble; you get back a calm, ordered plan you can actually follow.",
          ],
          list: {
            items: [
              "<strong>Trips & events</strong> — “Plan a step-by-step itinerary for…”",
              "<strong>Projects</strong> — “Break this project into phases with what to do first”",
              "<strong>Weekly schedule</strong> — “Sort these tasks into a realistic week”",
              "<strong>To-do lists</strong> — “Organize this list by priority and flag the must-dos”",
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'Planning a family reunion',
          title: 'A one-line wish vs. a plan that builds itself around you.',
          bad: {
            label: '❌ Too thin',
            text: '"Help me plan a family reunion."',
          },
          good: {
            label: '✅ Built for you',
            text: '"I want to plan a family reunion. Before you make a plan, ask me everything you need to know — group size, budget, location, time of year, what matters most. Then give me a step-by-step plan with a rough timeline."',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Pick one thing you\'ve been putting off and let Claude plan it.',
          body: [
            "Choose something real you've been meaning to tackle — a trip, an event, a project, or just a chaotic week. Use the prompt below and let Claude do the organizing for you.",
          ],
          prompt: "I want to plan [your goal — e.g. a weekend trip, a birthday party, a home project, this week]. Before you build the plan, ask me any questions you need to make it fit my situation. Then give me a clear, step-by-step plan with a rough order and timeline.",
          body2: "Answer Claude's questions in a sentence each, then watch your plan take shape. Don't like an order or a step? Just say “move the budget step earlier” or “add a packing list” — keep nudging until the plan fits.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: 'Overwhelming is now just a list.',
          body: [
            "You can hand Claude any big, fuzzy goal — or a chaotic week — and get back a clear, ordered plan built around your real specifics, because you let Claude ask you what it needed first.",
            "Next lesson: using Claude to think out loud — brainstorming options and talking through decisions.",
          ],
          summaryList: [
            'Ask Claude to break a big goal into a clear sequence of steps',
            'Tell it to ask you questions first, so the plan fits your real life',
            'Use it for the everyday too — sort a messy week into a realistic schedule',
            'Nudge the plan: reorder steps, add a list, adjust the timeline',
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Thinking Out Loud: Brainstorming & Decisions',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 3 · Lesson 4',
          icon: '💡',
          title: 'A thinking partner who never runs out of ideas.',
          body: [
            "Sometimes you don't need something written or summarized — you need to <em>think</em>. You're stuck for ideas, weighing a choice, or going back and forth in your own head with no one to bounce it off.",
            "That's where Claude shines as a partner. It'll generate a flood of options when you're dry, lay out the pros and cons of a decision, and even argue the other side so you don't miss anything.",
          ],
          sub: "Two heads are better than one — and Claude is always free and never tired.",
        },
        {
          type: 'concept',
          eyebrow: 'Never start from zero',
          icon: '🌱',
          title: 'Ask for options — lots of them — when you\'re stuck.',
          body: [
            "When your own well runs dry, Claude is a fountain. Need a name for a new dog, a pet project, a small business? A gift idea for someone tricky? A theme for a party? Ask for a bunch at once: “Give me 15 ideas.”",
            "You won't love all of them — that's the point. A long list gives you something to react to. One idea sparks another, you tell Claude “more like number 7,” and you've gone from blank to spoiled for choice in under a minute.",
          ],
          highlight: "Ask for many options, not one. A long list to react to beats a single idea to judge.",
        },
        {
          type: 'concept',
          eyebrow: 'Weigh it out',
          icon: '⚖️',
          title: 'Lay a decision out as clear pros and cons.',
          body: [
            "Facing a choice and going in circles? Describe it and ask Claude to lay out the trade-offs. “I'm deciding whether to buy a used car or keep leasing — give me the pros and cons of each, given that I drive a lot and hate surprise repair bills.”",
            "Seeing it written out side by side does something your spinning thoughts can't: it makes the trade-offs concrete. Claude isn't deciding for you — it's organizing the considerations so <em>you</em> can decide with a clear head.",
          ],
          highlight: "Claude doesn't make the choice for you — it lays out the trade-offs so you can see them clearly.",
        },
        {
          type: 'concept',
          eyebrow: 'The move most people miss',
          icon: '🥷',
          title: 'Ask for the devil\'s-advocate view.',
          body: [
            "When you're leaning toward a decision, it's natural to only see the reasons you're right. Claude can be the friend who gently pushes back: “I'm leaning toward X — argue the other side and tell me what I might be overlooking.”",
            "This isn't about talking you out of it. It's pressure-testing. If your choice survives the strongest counter-argument, you'll move forward with real confidence. If it doesn't, far better to learn that now than later.",
          ],
          list: {
            items: [
              "<strong>Generate options</strong> — “Give me 15 ideas for…”",
              "<strong>Weigh the trade-offs</strong> — “List the pros and cons of each”",
              "<strong>Talk it through</strong> — “Help me reason through this decision”",
              "<strong>Stress-test it</strong> — “Argue the other side; what am I missing?”",
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'Choosing a vacation spot',
          title: 'A passive question vs. a real thinking session.',
          bad: {
            label: '❌ Hands it off',
            text: '"Where should I go on vacation?"',
          },
          good: {
            label: '✅ Thinks with you',
            text: '"Help me decide between a beach trip and a national-park trip this fall. I want relaxation but I get bored easily, and I\'m on a tight budget. Lay out the pros and cons of each, then argue for the one you think fits me best."',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Talk through a real decision or brainstorm a real list.',
          body: [
            "Pick something you're actually mulling over — a choice you're stuck on, or something you need ideas for. Use the prompt below and treat Claude like a sharp friend across the table.",
          ],
          prompt: "I'm trying to decide [your decision], or I need ideas for [your brainstorm]. Here's my situation: [a sentence or two of context]. Give me [the options / the pros and cons of each], then play devil's advocate and tell me what I might be overlooking.",
          body2: "Keep the conversation going — “tell me more about that downside,” “give me 10 more ideas,” “okay, talk me into the first option.” The best thinking happens in the back-and-forth, not the first reply.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: 'You\'ve got a thinking partner on call.',
          body: [
            "Claude can flood you with options when you're stuck, lay any decision out as clear pros and cons, and argue the other side so you decide with confidence. You never have to think alone again.",
            "Last lesson: pulling all of this together into a small set of go-to prompts and a week-one challenge.",
          ],
          summaryList: [
            'Ask for many options, not one, when you\'re stuck for ideas',
            'Have Claude lay a decision out as clear pros and cons',
            'Ask it to play devil\'s advocate to stress-test your thinking',
            'The real value is in the back-and-forth, not the first reply',
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Your Everyday Toolkit',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 3 · Lesson 5',
          icon: '🧰',
          title: 'Let\'s turn these skills into a habit you\'ll actually keep.',
          body: [
            "You've now got four everyday powers: writing faster, making sense of long things, planning the overwhelming, and thinking out loud. The only thing left is to make reaching for them automatic.",
            "This lesson hands you a small set of go-to prompts you'll reuse for years, plus a simple challenge to lock the habit in this week. No new theory — just the on-ramp to using Claude for real.",
          ],
          sub: "A skill you use once is a trick. A skill you reach for by reflex is a tool.",
        },
        {
          type: 'concept',
          eyebrow: 'The four you\'ll reach for most',
          icon: '⭐',
          title: 'Keep a handful of go-to prompts in your back pocket.',
          body: [
            "You don't need a hundred clever prompts. You need four reliable ones that cover most of everyday life. Memorize the <em>shape</em> of these — not the exact words — and you're set.",
            "Each one maps to a lesson you just finished. Tweak them with your own details every time, but the bones stay the same. These are the ones that'll earn their keep.",
          ],
          list: {
            items: [
              "<strong>Write</strong> — “Turn these points into a [message] in a [tone] voice: …”",
              "<strong>Summarize</strong> — “Summarize this in plain English and list anything I need to do: …”",
              "<strong>Plan</strong> — “Break this goal into steps; ask me what you need to know first.”",
              "<strong>Decide</strong> — “Give me the pros and cons, then argue the other side.”",
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'The habit that changes everything',
          icon: '🔁',
          title: 'Build the reflex: reach for Claude first.',
          body: [
            "The people who get the most from Claude aren't the most technical — they're the ones who simply <em>think to use it</em>. The whole game is catching yourself mid-task and going, “wait, Claude could help with this.”",
            "Next time you sigh at an email, squint at a long document, or feel a project pile up — pause and open Claude before you push through alone. Do that a dozen times and it stops being a decision. It becomes the first thing you reach for.",
          ],
          highlight: "The skill isn't fancy prompting. It's remembering to open Claude in the moment you're stuck.",
        },
        {
          type: 'concept',
          eyebrow: 'Spot the moments',
          icon: '👀',
          title: 'Learn to notice the “Claude could do this” moments.',
          body: [
            "It helps to know what those moments feel like. They're the small frictions you've trained yourself to just power through — the avoided email, the unread report, the trip you keep meaning to plan.",
            "From now on, treat that little flicker of resistance as a signal. Dread, confusion, overwhelm, or “ugh, I'll deal with it later” — every one of those is Claude tapping you on the shoulder. The friction is the cue.",
          ],
          highlight: "Dread, confusion, and “I'll deal with it later” are your cues. The friction is the invitation.",
        },
        {
          type: 'compare',
          eyebrow: 'Two versions of your week',
          title: 'The same to-do list, with and without the habit.',
          bad: {
            label: '😮‍💨 Without the reflex',
            text: 'The hard email sits unanswered for days. The report goes unread. The trip stays unplanned. Each one quietly drains a little energy every time you remember it.',
          },
          good: {
            label: '😌 With the reflex',
            text: 'You hit a sticky task, open Claude, knock out a draft or a plan in two minutes, and move on. The friction dissolves before it can pile up. Your week feels lighter.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Your Week-One Challenge',
          icon: '🎯',
          title: 'Use Claude for three real tasks this week.',
          body: [
            "Here's the challenge that locks the habit in: this week, use Claude for three genuinely real tasks — one writing, one understanding, one planning or deciding. Real ones from your actual life, not practice. Use the prompt below to set yourself up.",
          ],
          prompt: "I'm taking on a week-one challenge to use you for three real tasks. Help me pick them. Ask me a few questions about my week — what's on my plate, what I'm avoiding, what's coming up — then suggest one writing task, one thing to understand, and one thing to plan or decide that you could genuinely help me with.",
          body2: "Do all three this week. By the end, reaching for Claude won't feel like a lesson anymore — it'll feel like the obvious move. That's the moment the habit becomes yours.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 3 Complete',
          icon: '🎉',
          title: 'You\'ve got a real, everyday toolkit now.',
          body: [
            "You can write faster, make sense of long things, plan the overwhelming, and think out loud with a partner — and you've got four go-to prompts plus a challenge to make it stick. This is where Claude stops being a novelty and starts being useful every day.",
            "Keep reaching for it. The next module builds on this foundation, but the habit you start this week is what makes everything else pay off.",
          ],
          summaryList: [
            'Keep four go-to prompt shapes: write, summarize, plan, decide',
            'Build the reflex to reach for Claude first when you\'re stuck',
            'Treat friction — dread, confusion, overwhelm — as your cue to open Claude',
            'Take the week-one challenge: three real tasks across writing, understanding, and planning',
            'Used by reflex, Claude stops being a trick and becomes a daily tool',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'What\'s the fastest way to get a useful first draft of an email from Claude?',
      options: [
        'Write the whole email yourself first, then ask Claude to check it',
        'Give Claude your rough bullet points and ask it to shape them into a finished message',
        'Type only the subject line and let Claude guess the rest',
        'Ask Claude for a generic email template you fill in later',
      ],
      correct: 1,
      feedback:
        "You almost always know what you want to say — you just don't want to wrestle with the wording. Hand Claude your rough bullet points and let it draft. You bring the points; Claude brings the polish. Then you refine it into your own voice with a quick note or two.",
    },
    {
      q: 'You have a long, dense article you don\'t have time to read. What\'s the simplest move?',
      options: [
        'Read it carefully top to bottom so you don\'t miss anything',
        'Paste the full text into Claude and ask for a plain-English summary or the key points',
        'Ask Claude what the article says without giving it the text',
        'Wait until a later module that covers uploading files',
      ],
      correct: 1,
      feedback:
        "Just copy the long text, paste it straight into Claude's message box, and ask for a plain summary, the key points, or the action items. Same text, whatever shape you need. (Uploading files comes later — but pasting text in works great right now.)",
    },
    {
      q: 'You\'ve described a big goal and want a plan that actually fits your situation. What should you ask Claude to do?',
      options: [
        'Make the full plan immediately with no questions',
        'Give you a generic checklist that works for everyone',
        'Ask you the questions it needs first, then break the goal into steps',
        'Only suggest the very first step and stop there',
      ],
      correct: 2,
      feedback:
        "A great plan depends on your specifics. Tell Claude to interview you first — “ask me whatever you need to know” — then break the goal into steps. A few good questions turn a generic checklist into a plan built around your actual life.",
    },
  ],
}

export default c7module3
