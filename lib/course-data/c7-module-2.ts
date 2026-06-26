import type { CourseData } from './types'

const c7module2: CourseData = {
  moduleId: 38,
  title: 'Your First Real Conversations',
  subtitle: 'Module 2',
  nextModuleId: 39,
  lessons: [
    {
      id: 0,
      title: 'Talking to Claude Like a Person',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 2 · Lesson 1',
          icon: '🗣️',
          title: "There's no secret language — just talk to Claude like a person.",
          body: [
            "If you've been hunting for the “right” way to phrase things, you can let that go. Claude understands plain, everyday language. You don't need keywords, commands, or special tricks — you need to describe what you want the way you'd describe it to a thoughtful friend.",
            "In this lesson you'll learn how to set Claude up to help you well: describe your situation naturally, hand it a role to play, and give it enough about your world that its answers actually fit your life.",
          ],
          sub: "The better Claude understands your situation, the better its help will be.",
        },
        {
          type: 'concept',
          eyebrow: 'The first thing to unlearn',
          icon: '🧹',
          title: "You don't need special phrasing — describe it naturally.",
          body: [
            "People often stiffen up and try to write like a robot: “generate email professional tone client.” You don't have to. “I need to email a client to push our meeting back a week — can you write that for me?” works far better, because it sounds like a real request from a real person.",
            "Claude was built to understand the way you already talk. Type the way you'd say it out loud, and you'll get warmer, more accurate help right away.",
          ],
          highlight: "Write to Claude the way you'd speak to a helpful person. That's the whole technique.",
        },
        {
          type: 'concept',
          eyebrow: 'The move that changes everything',
          icon: '🎭',
          title: 'Give Claude a role to play.',
          body: [
            "One short instruction quietly upgrades almost every reply: tell Claude <em>who</em> to be. “Act as a friendly editor and tighten this paragraph.” “You're a patient tutor — explain this like I'm new to it.” “Be a careful financial planner and walk me through the trade-offs.”",
            "Naming a role tells Claude the tone, the expertise, and the priorities to bring. It's the difference between a generic answer and one that feels like it came from exactly the right person for the job.",
          ],
          highlight: "“Act as a ___” is the single fastest way to shape the kind of help you get.",
        },
        {
          type: 'concept',
          eyebrow: 'Why context is your superpower',
          icon: '🔑',
          title: 'The more Claude knows about your situation, the better it helps.',
          body: [
            "Claude doesn't know anything about your life unless you tell it. So tell it. Who is this for? What's the situation? What matters to you here? A sentence or two of context turns a generic reply into one that genuinely fits.",
            "Here's the kind of context that pays off every time:",
          ],
          list: {
            items: [
              "<strong>Who it's for</strong> — your boss, a customer, your sister, a stranger",
              "<strong>The situation</strong> — what's happened, what's at stake, the backstory",
              "<strong>What you want to avoid</strong> — sounding pushy, too formal, too long",
              "<strong>Any must-haves</strong> — a date, a name, a detail that has to be in there",
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'Same request, two setups',
          title: 'Watch how a role and a little context change the result.',
          body: ["Both ask for the same thing. Only one gives Claude what it needs:"],
          bad: {
            label: '❌ Bare',
            text: '"Write a complaint email about a late delivery."',
          },
          good: {
            label: '✅ Set up well',
            text: '"Act as a calm, firm customer. Write an email about a package that arrived a week late and damaged. I\'m not angry, I just want a refund. Keep it short and polite but clear that I expect them to fix it."',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Give Claude a role and a real situation.',
          body: [
            "Pick a small task you actually have. Then use the prompt below — notice it does three things: names a role, describes the situation naturally, and says what you want. Fill in your own details and send it.",
          ],
          prompt: "Act as a [role — e.g. friendly editor / patient tutor / practical planner]. Here's my situation: [describe it naturally, like you're telling a friend — who it's for, what's going on]. I'd like you to [what you want]. Ask me a question if anything's unclear.",
          body2: "Read the reply and notice how much more “you” it sounds once Claude knows the role and the situation. That setup is the foundation everything else in this module builds on.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: 'You can set Claude up to actually fit your life.',
          body: [
            "You talk to Claude in plain language, you hand it a role when you want a certain kind of help, and you give it the context it can't know on its own. That combination quietly improves almost everything you'll ever ask.",
            "Next lesson: the real secret to great results — what you do with the <em>first</em> reply.",
          ],
          summaryList: [
            "You don't need special phrasing — describe things naturally",
            'Give Claude a role: “Act as a friendly editor”',
            'Context is your superpower — Claude only knows what you share',
            'Who it\'s for, the situation, must-haves, what to avoid',
          ],
        },
      ],
    },
    {
      id: 1,
      title: 'The Follow-Up Is the Secret',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 2 · Lesson 2',
          icon: '🔁',
          title: "The first reply is a draft, not a verdict.",
          body: [
            "Here's the habit that separates people who love Claude from people who shrug at it: the great ones never stop at the first response. They reply, nudge, and shape it until it's right.",
            "In this lesson you'll learn how to refine — the small, plain-English follow-ups that turn an okay answer into exactly what you wanted. This is the most valuable skill in the whole course.",
          ],
          sub: "You're not grading Claude's first try. You're starting a conversation.",
        },
        {
          type: 'concept',
          eyebrow: 'Change your expectation',
          icon: '📝',
          title: 'Treat the first reply like a rough draft you get to improve.',
          body: [
            "When a reply comes back, your job isn't to judge whether it's perfect — it almost never is on the first pass, and that's completely normal. Your job is to react to it: what's good, what's off, what you'd change.",
            "Claude fully expects this. Each response is a starting point you shape, not a final answer carved in stone. Once you internalize that, the pressure to write a “perfect prompt” disappears entirely.",
          ],
          highlight: "Nobody writes the perfect request. You write a decent one, then refine the reply.",
        },
        {
          type: 'concept',
          eyebrow: 'How to refine',
          icon: '🪄',
          title: 'Refining is just telling Claude what to change — in plain words.',
          body: [
            "You don't need to re-explain everything. Short, direct follow-ups do the job. The most useful ones are simple:",
          ],
          list: {
            items: [
              '<strong>“Make it shorter.”</strong> — or longer, tighter, more detailed',
              '<strong>“Make it warmer.”</strong> — or more formal, funnier, more direct',
              '<strong>“Add a line about the deadline.”</strong> — drop something, add something',
              '<strong>“Give me three options.”</strong> — see a few directions, then pick',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Why follow-ups work so well',
          icon: '🧠',
          title: 'Claude remembers everything earlier in the same conversation.',
          body: [
            "This is the part that makes refining so powerful: within a single chat, Claude remembers everything you've already said and everything it's already written. So when you reply “shorter,” it knows exactly what you mean — no need to paste the whole thing back in.",
            "That means you can build gradually. Draft, then “warmer,” then “add a sentence about the refund,” then “now give me a punchier subject line.” Each step stands on everything before it.",
          ],
          highlight: "One chat = one memory. Keep building in the same thread and Claude keeps up.",
        },
        {
          type: 'compare',
          eyebrow: 'Two ways to handle a so-so reply',
          title: "The difference between frustration and a great result.",
          bad: {
            label: '❌ Starting over',
            text: 'You read the reply, decide it\'s “not quite right,” close the chat, and try to write a whole new perfect prompt from scratch. Slow, and you lose everything Claude already understood.',
          },
          good: {
            label: '✅ Following up',
            text: '"This is close. Make it about half as long, a little warmer, and add one line thanking them for their patience." One sentence, and Claude reshapes it instantly using all the context it already has.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Take one reply through three follow-ups.',
          body: [
            "Ask Claude to draft anything small — a message, a paragraph, a plan. Then, instead of stopping, send three follow-ups in a row using the pattern below. Watch how it builds on itself each time.",
          ],
          prompt: "Draft a short message [to whoever, about whatever]. (Then, after the reply:) Make it warmer. (Then:) Shorter — about half this length. (Then:) Give me two other versions with different opening lines.",
          body2: "Notice you never had to repeat the original request. Claude carried it through all three follow-ups. That ability to keep building in one conversation is the heart of using Claude well.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: "You've learned the single most valuable habit.",
          body: [
            "The first reply is a draft. You shape it with short, plain follow-ups — shorter, warmer, add this, three options — and because Claude remembers the whole conversation, every nudge builds on the last.",
            "Next lesson: what to do on the rarer days when a reply really misses — and why the fix is almost always one more message.",
          ],
          summaryList: [
            'The first reply is a draft, not a verdict',
            'Refine with plain words: shorter, warmer, add X, give me options',
            'Claude remembers everything earlier in the same chat',
            'Build gradually — each follow-up stands on the last',
            "You never have to repeat your original request mid-conversation",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Getting Unstuck When the Answer Isn't Right",
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 2 · Lesson 3',
          icon: '🧭',
          title: "When a reply misses, the fix is almost always one more message.",
          body: [
            "Sometimes Claude hands you something that's just wrong — off-base, generic, or missing the point entirely. That's not a dead end, and it's definitely not a reason to give up. It's a moment to redirect.",
            "This lesson gives you four reliable moves for getting unstuck. Keep them in your back pocket and you'll rarely walk away from Claude empty-handed.",
          ],
          sub: "A miss isn't failure — it's just the conversation needing a nudge.",
        },
        {
          type: 'concept',
          eyebrow: 'Move one',
          icon: '🎯',
          title: 'Tell Claude specifically what\'s wrong.',
          body: [
            "Vague disappointment doesn't help: “I don't like it” leaves Claude guessing. Name the problem instead. “This is too formal.” “You missed that it's for a child.” “This assumes I want to sell — I actually want to keep it.” “The second paragraph is off.”",
            "The more precisely you say what's wrong, the more precisely Claude can fix it. You're not being rude — you're being useful. Claude takes correction gracefully and adjusts.",
          ],
          highlight: "Say exactly what missed. Specific feedback gets a specific fix.",
        },
        {
          type: 'concept',
          eyebrow: 'Move two',
          icon: '🔀',
          title: 'Ask it to try a completely different approach.',
          body: [
            "If a reply is in the wrong ballpark entirely, don't keep tweaking it — ask for a fresh angle. “Try a totally different approach.” “That's too businesslike; what if it were playful instead?” “Forget that version — start from scratch and surprise me.”",
            "This gives Claude permission to abandon the path it was on. Often the second, very different attempt is the one that clicks, because you've shown it where <em>not</em> to go.",
          ],
          highlight: "Wrong direction? Don't tweak — ask for a different approach entirely.",
        },
        {
          type: 'concept',
          eyebrow: 'Moves three and four',
          icon: '🆘',
          title: "Hand the problem back, or start fresh.",
          body: [
            "If you can't put your finger on what's wrong, flip it: <strong>ask Claude to ask you questions.</strong> “This isn't landing — what do you need to know from me to get it right?” It'll often surface the missing piece in one question.",
            "And if a conversation has wandered so far that it's tangled, there's no shame in <strong>starting a New chat</strong> with a cleaner setup. A fresh thread with what you learned is sometimes the fastest path back on track.",
          ],
          highlight: "Stuck? Make Claude ask the questions. Tangled? Start a fresh chat.",
        },
        {
          type: 'compare',
          eyebrow: 'Two responses to a bad reply',
          title: 'What confident users do differently.',
          bad: {
            label: '😤 Give up',
            text: '"This is wrong." → close the tab, decide Claude “doesn\'t get it,” and go do the task the hard way. The miss becomes the end of the story.',
          },
          good: {
            label: '🧭 Redirect',
            text: '"That\'s too generic and it missed that this is for my elderly father. Try a warmer, simpler version — and ask me anything you need to get it right." One message, back on track.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Practice getting unstuck on purpose.',
          body: [
            "Ask Claude for something, and if (or when) a reply isn't quite right, use the prompt below to redirect instead of restarting. The goal is to feel how quickly a single honest message turns things around.",
          ],
          prompt: "That's not quite right — here's specifically what's off: [name the problem]. Please try a different approach, and if you need anything from me to nail it, ask me a question first.",
          body2: "See how one clear, specific message does the work? Almost every “Claude got it wrong” moment is solved by the very next thing you type — not by giving up.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: "You'll never be stuck with Claude again.",
          body: [
            "When a reply misses, you have four moves: say exactly what's wrong, ask for a different approach, have Claude ask <em>you</em> questions, or start a fresh chat. The fix is almost always one more message — not giving up.",
            "Next lesson: taking deliberate control of <em>how</em> Claude answers — its tone, its length, and its format.",
          ],
          summaryList: [
            "Tell Claude specifically what's wrong, not just “I don't like it”",
            'Ask for a completely different approach when it\'s off-track',
            'Stuck? Have Claude ask you questions to find the missing piece',
            'Tangled conversation? Start a fresh chat',
            'The fix is almost always one more message',
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Steering Tone and Length',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 2 · Lesson 4',
          icon: '🎚️',
          title: 'You get to decide how Claude answers — not just what it answers.',
          body: [
            "Two replies can contain the same information and feel completely different — one warm and chatty, one crisp and professional; one a wall of text, one three tidy bullets. You're in charge of that.",
            "In this lesson you'll learn to steer three dials: <strong>tone</strong> (the voice), <strong>length</strong> (how much), and <strong>format</strong> (the shape). Master these and Claude's answers start arriving exactly how you like them.",
          ],
          sub: "Same facts, your choice of voice, size, and shape.",
        },
        {
          type: 'concept',
          eyebrow: 'Dial one — tone',
          icon: '🎤',
          title: 'Tell Claude the voice you want.',
          body: [
            "Claude can sound however you need it to — you just have to say so. “Make it formal and professional.” “Keep it warm and friendly.” “Make it funny.” “Be blunt and direct, skip the throat-clearing.” One phrase sets the whole mood.",
            "If you're not sure, name a feeling instead: “I want this to sound confident but not arrogant,” or “gentle, because she's having a hard week.” Claude is genuinely good at hitting an emotional target when you describe it.",
          ],
          highlight: "Formal, warm, funny, direct — just name the voice and Claude matches it.",
        },
        {
          type: 'concept',
          eyebrow: 'Dial two — length',
          icon: '📏',
          title: 'Say how much you actually want.',
          body: [
            "Left on its own, Claude often gives a generous, thorough answer. If that's more than you need, just say so. “One sentence.” “Two short paragraphs, max.” “A quick bullet list, nothing fancy.” “Just the bottom line.”",
            "And it works the other way too: “Go deeper.” “Give me the full version with examples.” You're not stuck with whatever length shows up first — you set the size.",
          ],
          highlight: "“One line” or “go deep” — you control the length with a single instruction.",
        },
        {
          type: 'concept',
          eyebrow: 'Dial three — format',
          icon: '📐',
          title: 'Ask for the exact shape you need.',
          body: [
            "Information lands differently depending on its shape, and you can request any shape you like. Claude can give you the same content as plain paragraphs, a bulleted list, numbered steps, a comparison table, an email, a script, or a checklist.",
            "And here's the trick most people miss: <strong>you can ask for the same thing in several formats.</strong> “Give me this as a quick summary, then a detailed version, then a three-bullet recap.” Same idea, three shapes, one message.",
          ],
          list: {
            items: [
              '<strong>Bullets</strong> — for scannable points and quick lists',
              '<strong>A table</strong> — for comparing options side by side',
              '<strong>Numbered steps</strong> — for anything you do in order',
              '<strong>An email or message</strong> — ready to copy, paste, and send',
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'Same answer, two presentations',
          title: 'How much the shape and voice matter.',
          bad: {
            label: '😐 Unsteered',
            text: 'You ask “tell me about choosing a laptop” and get five dense paragraphs in a neutral, encyclopedic tone. All correct — but a slog to use.',
          },
          good: {
            label: '✅ Steered',
            text: '"In a friendly, plain tone, give me a 3-row table comparing budget, mid-range, and premium laptops — columns for price, who it\'s for, and one downside. Then one sentence telling me which you\'d pick for casual home use."',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Order an answer to spec — tone, length, and format.',
          body: [
            "Pick any question you're curious about and dial in all three settings at once using the prompt below. Then ask for the same content in a second format to feel how flexible it is.",
          ],
          prompt: "Answer this in a [tone — e.g. warm and plain] voice, kept to [length — e.g. about 4 bullet points], formatted as [format — e.g. a bulleted list]: [your question]. Then give me the same thing again as a one-sentence summary.",
          body2: "You just got the exact answer you ordered, in two shapes, from one message. That control is always available — every dial, every time.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: 'You can shape every answer to fit the moment.',
          body: [
            "Three dials put you in charge: tone for the voice, length for how much, format for the shape. And because you can request several formats at once, one message can hand you the same idea three useful ways.",
            "Last lesson: pulling all of this into easy daily habits — plus a week-one challenge to lock it in.",
          ],
          summaryList: [
            'Tone — name the voice: formal, warm, funny, direct',
            'Length — say how much: one line, two paragraphs, go deep',
            'Format — ask for the shape: bullets, table, steps, an email',
            'You can ask for the same content in several formats at once',
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Building Conversation Habits',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 2 · Lesson 5',
          icon: '🌱',
          title: "Let's turn everything into a few habits that stick.",
          body: [
            "You've learned how to set Claude up, how to refine, how to get unstuck, and how to steer tone and length. Now the goal is simple: make these feel automatic, so good conversations just happen.",
            "This lesson pulls it all together into a handful of habits — and ends with a one-week challenge built from three real tasks from your actual life.",
          ],
          sub: "Skills become confidence when they turn into habits you don't think about.",
        },
        {
          type: 'concept',
          eyebrow: 'Habit one',
          icon: '💭',
          title: 'Think out loud — you don\'t have to arrive with the answer.',
          body: [
            "The best Claude conversations often start messy. “I'm trying to figure out how to handle a tricky coworker and I'm not even sure what I want to say.” That's a perfect opening. You don't need a polished question — you need to start talking.",
            "Treat Claude like a patient colleague you can think in front of. Half-formed thoughts are welcome. The conversation will find its shape as you go.",
          ],
          highlight: "You don't need the perfect question. You need to start the conversation.",
        },
        {
          type: 'concept',
          eyebrow: 'Habit two',
          icon: '🔁',
          title: 'Iterate by default — never stop at the first reply.',
          body: [
            "By now this should feel familiar: the first response is a draft. Build the reflex of replying with one small nudge — shorter, warmer, a different angle, three options — every single time.",
            "This one habit accounts for most of the gap between people who get mediocre results and people who get great ones. It costs you one sentence and pays off enormously.",
          ],
          highlight: "Make the follow-up automatic. One nudge, every time, is the whole game.",
        },
        {
          type: 'concept',
          eyebrow: 'Habits three and four',
          icon: '🗂️',
          title: 'Keep one chat per topic — and save the good results.',
          body: [
            "Start a New chat for each separate topic so Claude's memory stays focused and your sidebar stays tidy. When you come back to the same project later, reopen that same conversation — Claude picks up right where you left off.",
            "And when Claude produces something you'll want again — a great email template, a useful explanation, a plan — copy it somewhere you'll find it, or just leave it in its own labeled chat. Future you will be grateful.",
          ],
          list: {
            items: [
              '<strong>One chat per topic</strong> — keeps Claude\'s memory focused and useful',
              '<strong>Reopen, don\'t restart</strong> — return to the same chat to continue a project',
              '<strong>Save the wins</strong> — copy great results somewhere you\'ll find them again',
              '<strong>Label loosely</strong> — a clear first message makes a chat easy to spot later',
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'Where you started vs. now',
          title: "How your conversations have changed.",
          bad: {
            label: '📅 Before Module 2',
            text: 'You typed a request, took whatever came back, and either used it or gave up. The first reply was the whole conversation.',
          },
          good: {
            label: '✅ After Module 2',
            text: 'You set Claude up with a role and context, refine every reply, redirect when it misses, and steer the tone and format. Conversations build toward results you actually love.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Your Week-One Challenge',
          icon: '🎯',
          title: 'Do three real tasks with Claude this week.',
          body: [
            "Don't invent practice tasks — use real ones. Over the next seven days, run three genuine things through Claude, one from each category, and use everything from this module: a role, context, follow-ups, and steering.",
          ],
          prompt: "This week I'll bring Claude three real tasks:\n1. WRITE — something I need to send (an email, a message, a note).\n2. UNDERSTAND — something confusing (a document, a topic, a decision).\n3. PLAN — something to organize (a trip, an event, a project).\nFor each, I'll give Claude a role and context, then refine at least twice before I'm done.",
          body2: "Paste this into a New chat as your own commitment, then knock out one task today. By the end of the week, talking to Claude won't feel like a skill anymore — it'll just feel normal.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 2 Complete',
          icon: '🎉',
          title: "You can hold real, productive conversations with Claude.",
          body: [
            "You set Claude up well, treat its first reply as a draft, refine with plain-English follow-ups, get unstuck when it misses, and steer tone, length, and format. Wrapped in a few simple habits, that's everything you need to get real value every day.",
            "Next module goes further still — but you're already a genuinely capable Claude user. The habits you just built are the ones that last.",
          ],
          summaryList: [
            'Think out loud — start the conversation, even half-formed',
            'Iterate by default — never stop at the first reply',
            'Keep one chat per topic; reopen to continue a project',
            'Save the results worth keeping',
            'Your week-one challenge: three real tasks — write, understand, plan',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'What\'s the most reliable way to get help that actually fits your situation?',
      options: [
        'Use special keyword commands so Claude understands you',
        'Keep your message as short and vague as possible',
        'Describe your situation naturally and, when useful, give Claude a role to play',
        'Write everything in a very formal, robotic tone',
      ],
      correct: 2,
      feedback:
        "There's no secret phrasing — talk to Claude like you'd talk to a thoughtful person. Describe your situation naturally, and give it a role when you want a certain kind of help (“Act as a friendly editor”). The more context Claude has about your situation, the better its answer fits.",
    },
    {
      q: "Claude's first reply is close but a bit too long and too formal. What's the best move?",
      options: [
        'Close the chat and write a brand-new perfect prompt from scratch',
        'Reply with a short follow-up like “make it shorter and warmer” — Claude remembers the rest',
        'Accept it as-is, since the first reply is the final answer',
        'Re-paste your entire original request along with the whole reply',
      ],
      correct: 1,
      feedback:
        "The first reply is a draft, not a verdict. Because Claude remembers everything earlier in the same conversation, you don't need to start over or repeat yourself — a short follow-up like “shorter and warmer” is all it takes. Refining the reply is the most valuable habit there is.",
    },
    {
      q: "A reply completely misses the point. Which of these is NOT a good way to get unstuck?",
      options: [
        "Tell Claude specifically what's wrong and ask it to try a different approach",
        'Ask Claude to ask you questions to find the missing piece',
        'Start a fresh chat with a cleaner setup if things got tangled',
        'Give up and decide Claude just “doesn\'t get it”',
      ],
      correct: 3,
      feedback:
        "Giving up is the one move that never helps. When a reply misses, the fix is almost always one more message: say exactly what's wrong, ask for a different approach, have Claude ask you questions, or start fresh. You're never actually stuck.",
    },
  ],
}

export default c7module2
