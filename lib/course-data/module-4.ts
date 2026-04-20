import type { CourseData } from './types'

const module4: CourseData = {
  moduleId: 4,
  title: 'Creating Content with AI: Your Voice, Amplified',
  subtitle: 'Creating Content with AI',
  nextModuleId: 5,
  lessons: [
    {
      id: 0,
      title: 'Writing That Sounds Like You',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 4 · Lesson 1',
          icon: '✍️',
          title: 'AI can write. But can it write like <em>you?</em>',
          body: [
            "The biggest concern people have about AI-generated content is that it sounds generic — corporate, bland, and clearly not human. That concern is valid. But it's also completely solvable.",
            'This lesson teaches you how to give AI your voice, so what it produces sounds like you — not like a press release.',
          ],
          sub: "Your voice is an asset. Let's teach AI to use it.",
        },
        {
          type: 'concept',
          eyebrow: 'Why AI sounds generic',
          icon: '🤖',
          title: 'AI defaults to the average — unless you tell it otherwise.',
          body: [
            "When you give AI a vague prompt, it produces the most statistically average version of whatever you asked for. Average email. Average LinkedIn post. Average tone.",
            "The fix isn't a better AI — it's more specific instructions. When you tell it your voice, your style, and your audience, it stops averaging and starts writing for you.",
          ],
          highlight: 'Generic output is a prompt problem, not an AI problem.',
        },
        {
          type: 'concept',
          eyebrow: 'The style brief',
          icon: '📝',
          title: 'The fastest way to teach AI your voice: show it examples.',
          body: [
            'Paste two or three examples of writing you\'ve done that you\'re proud of — emails, posts, reports, anything. Then say: <strong>"This is how I write. Match this voice and style for everything I ask you in this conversation."</strong>',
            "AI is remarkably good at picking up patterns from examples. It will notice your sentence length, your vocabulary, your level of formality, your use of humor — and mirror it.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Describing your voice',
          icon: '🎙️',
          title: "If you don't have examples, describe it instead.",
          body: [
            "Don't have old writing to paste in? Describe your voice explicitly. This is your style brief — a short paragraph you can reuse at the start of any content session.",
          ],
          list: {
            items: [
              '<strong>Tone:</strong> Warm and direct. Casual but professional. Dry humor when appropriate.',
              '<strong>Sentences:</strong> Short. Never more than 2 clauses. No jargon.',
              '<strong>Personality:</strong> Confident but not boastful. Honest about complexity.',
              "<strong>What I avoid:</strong> Corporate buzzwords, passive voice, filler phrases like 'In today\\'s fast-paced world...'",
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'Voice in practice',
          title: 'Same request. Generic vs. on-brand.',
          bad: {
            label: '❌ No style guidance',
            text: 'Leveraging cutting-edge artificial intelligence solutions, our organization is positioned to drive transformative outcomes for stakeholders across the value chain.',
          },
          good: {
            label: '✅ With your style brief',
            text: "We use AI to do more with less — which means better results for our clients and less time wasted on tasks that used to take hours.",
          },
        },
        {
          type: 'concept',
          eyebrow: "Editing AI's output",
          icon: '✂️',
          title: 'Think of AI writing as a first draft, not a final one.',
          body: [
            "Even with a perfect style brief, you'll want to make small edits. A word that isn't quite you. A sentence that's a little too long. That's normal and expected.",
            "The goal isn't to use it word-for-word — it's to get 80% of the way there in seconds so you're editing, not creating from nothing.",
          ],
          highlight: 'Rewriting is faster than writing. Always has been. AI just makes the first draft available instantly.',
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Create your personal style brief.',
          body: [
            "Open ChatGPT. Either paste in 2–3 examples of your own writing, or write a short description of your voice using the categories above. Then ask it to write something you actually need — a short email, a social post, a paragraph for your website.",
          ],
          prompt: "Here is how I write — please match this voice and style for everything in this conversation:\n\n[Paste 2-3 examples of your own writing here, OR write: \"My tone is [describe]. My sentences are [short/medium/long]. I avoid [list things]. My audience is [who reads your writing].\"]\n\nNow write: [your actual request].",
          body2: "Compare what it gives you to what you'd normally write. Notice what it gets right and what needs a small tweak. That gap gets smaller every time you use it.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: 'You can now produce writing that sounds like you — fast.',
          body: [
            "A style brief. Examples of your voice. A willingness to edit. That's all it takes to go from generic AI output to content you'd actually put your name on.",
            "Next: putting that voice to work on your most common professional writing tasks.",
          ],
          summaryList: [
            "AI defaults to generic — your style brief fixes that",
            "Paste examples of your writing and say 'match this voice'",
            "Or describe your voice: tone, sentence style, what you avoid",
            "AI writing is a first draft — edit the last 20%, don't rewrite all of it",
          ],
        },
      ],
    },
    {
      id: 1,
      title: 'Email & Professional Writing',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 4 · Lesson 2',
          icon: '📧',
          title: 'The writing that takes the most time — done faster.',
          body: [
            "Email. Proposals. Reports. Meeting recaps. Performance reviews. These are the writing tasks that eat up the most time for working professionals — and they're exactly what AI is best at.",
            "This lesson covers how to handle each one efficiently, without sacrificing quality.",
          ],
          sub: 'This is where most people save the most time.',
        },
        {
          type: 'concept',
          eyebrow: 'The email formula',
          icon: '✉️',
          title: 'Any email in 3 inputs: situation, goal, tone.',
          body: [
            "For almost any professional email, you only need three things to give AI:",
            "<strong>Situation:</strong> What's the context? (Who, what happened, what's the relationship?)<br><strong>Goal:</strong> What do you want this email to accomplish?<br><strong>Tone:</strong> How should it feel? (Firm, warm, apologetic, direct?)",
            "That's it. Give AI those three things and you'll have a solid draft in seconds.",
          ],
          highlight: "Stop staring at blank emails. Describe the situation, the goal, and the tone. AI handles the words.",
        },
        {
          type: 'concept',
          eyebrow: 'Tricky emails',
          icon: '😬',
          title: "The emails you've been dreading? Those too.",
          body: [
            "Difficult conversations are where AI really earns its keep. Giving critical feedback. Saying no to a request. Following up after someone went silent. Handling an upset customer.",
            "Describe the situation and tell AI what you want to accomplish without damaging the relationship. It'll give you a draft that's firm but fair — and you can adjust the temperature from there.",
          ],
          list: {
            items: [
              '"Write a polite but firm message to a contractor who missed a deadline — second time"',
              '"I need to decline a speaking invitation without burning the bridge — they\'re a valued contact"',
              '"A customer is upset about a billing error. Write an apology that takes responsibility without admitting fault"',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Proposals & reports',
          icon: '📄',
          title: 'Structure first. Fill in second.',
          body: [
            "For longer documents like proposals or reports, the most efficient approach is to build the structure first, then fill each section.",
            "<strong>Step 1:</strong> Ask AI to create an outline for your specific document.<br><strong>Step 2:</strong> Review and adjust the structure — add your own sections, remove irrelevant ones.<br><strong>Step 3:</strong> Fill in each section with AI's help, one at a time.",
            "This way you maintain full control of the shape while AI handles the heavy lifting of the content.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Meeting recaps',
          icon: '📋',
          title: 'Notes in. Clean recap out.',
          body: [
            "If you take any kind of notes during meetings — even rough bullet points — AI can turn them into a clean, professional recap in seconds.",
            "Paste your raw notes, tell AI who the audience is, and ask for a formatted summary with decisions made, action items, and next steps.",
          ],
          list: {
            items: [
              '"Here are my rough notes from today\'s project meeting. Turn them into a clean recap email for the whole team. Include: what was decided, who owns what, and deadlines."',
              '"Format this as: Summary (2 sentences), Key Decisions (bullets), Action Items with owners, Next Meeting date."',
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'Before and after',
          title: 'Rough notes → polished recap in 45 seconds.',
          bad: {
            label: '📝 Your raw notes',
            text: 'discussed Q3 budget — over by 12k — sarah owns fixing that — new vendor (Apex) approved — mike to send contract by fri — next call aug 14',
          },
          good: {
            label: '✅ AI-formatted recap',
            text: "Team — quick recap from today's call. Q3 budget is running $12K over; Sarah is working on a revised plan. The Apex vendor was approved — Mike will send the contract by Friday. Our next call is August 14th. Thanks everyone.",
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: "Draft the email you've been putting off.",
          body: [
            "Think of an email sitting in your mental \"I should write that\" pile. It could be a difficult follow-up, a proposal, a simple-but-tedious update. Open ChatGPT and draft it now.",
          ],
          prompt: "I need to write [type of email/document]. Here's the situation: [describe it in 2-4 sentences]. My goal with this message is to [what you want to happen]. The tone should be [professional/warm/direct/apologetic/firm]. The recipient is [describe who they are and your relationship]. Please write a draft of about [X] words.",
          body2: "Once you have the draft, ask for one adjustment — tighten it, change the opening, soften one line. Then see if it's close enough to send with minor edits.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: 'Every professional writing task just got faster.',
          body: [
            "Situation + goal + tone. Outline first, fill second. Rough notes in, clean recap out. These three patterns cover 90% of professional writing.",
            "Next lesson: creating content for social media — where your voice needs to hook people in the first two lines.",
          ],
          summaryList: [
            "Any email: situation + goal + tone gives AI what it needs",
            "Difficult emails: describe the situation and the relationship you want to preserve",
            "Proposals and reports: build the outline first, fill sections second",
            "Meeting recaps: paste raw notes, get a formatted summary back",
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Social Media Content',
      meta: '9 slides · ~7 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 4 · Lesson 3',
          icon: '📱',
          title: 'Consistent social media presence — without the burnout.',
          body: [
            "The hardest part of social media isn't knowing what to say. It's showing up consistently. Coming up with something worth posting three times a week, week after week, without burning out.",
            "AI doesn't solve the \"what to talk about\" problem — that still takes your experience and perspective. But it makes everything else dramatically easier.",
          ],
          sub: "Your ideas. AI's help with the words.",
        },
        {
          type: 'concept',
          eyebrow: 'The key distinction',
          icon: '💡',
          title: 'AI helps with craft, not with ideas.',
          body: [
            "The most engaging social content comes from your specific experiences, opinions, and observations — things only you have. AI can't invent those.",
            "What AI can do is help you structure those ideas clearly, write them in a way that hooks the reader, adapt them for different platforms, and generate multiple versions to choose from.",
            "You bring the insight. AI helps you say it better.",
          ],
          highlight: 'Start with your idea — even a rough one. Then let AI help you find the best way to express it.',
        },
        {
          type: 'concept',
          eyebrow: 'The hook',
          icon: '🎣',
          title: 'The first line is everything.',
          body: [
            "On every social platform, the first 1–2 lines determine whether someone stops scrolling or keeps going. This is called the hook.",
            "AI is very good at generating multiple hook options for the same idea. Give it your main point and ask for 5 hook options — then pick the one that feels most like you.",
          ],
          list: {
            items: [
              '"Give me 5 different opening lines for a post about [your topic]. Mix up the styles: a question, a bold statement, a surprising stat, a short story opener, and a counterintuitive take."',
              'Then: "Use hook #3 and write out the full post."',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Platform by platform',
          icon: '📊',
          title: 'Different platforms, different rules.',
          body: ["Each platform has a different culture, audience expectation, and optimal format. Here's a quick reference:"],
          platformGrid: [
            { name: '💼 LinkedIn', detail: 'Professional tone. Longer posts perform well (150–300 words). Story + lesson format. No more than 3 hashtags.' },
            { name: '📘 Facebook', detail: 'Conversational. Shorter (80–150 words). Questions and community feel. Works well with personal stories.' },
            { name: '📸 Instagram', detail: "Hook in first 2 lines (before 'more'). Caption supports the visual. Up to 5 relevant hashtags." },
            { name: '🐦 X / Twitter', detail: 'Under 280 characters for a single tweet, or a thread. Bold takes, short sentences, strong opinions.' },
          ],
        },
        {
          type: 'concept',
          eyebrow: 'LinkedIn specifically',
          icon: '💼',
          title: 'LinkedIn posts that actually get engagement.',
          body: ["LinkedIn is the platform most working professionals care about most. The format that consistently performs well is simple:"],
          list: {
            items: [
              '<strong>Hook:</strong> 1–2 lines that stop the scroll — a story opener, a bold claim, or a surprising observation',
              '<strong>Body:</strong> Your actual point — a lesson, insight, or story — in short paragraphs (2–3 sentences each)',
              '<strong>Takeaway:</strong> One clear, practical thing the reader can do or think differently about',
              '<strong>CTA (optional):</strong> A question that invites comments or a direction to a resource',
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'LinkedIn in practice',
          title: 'The same idea — posted two different ways.',
          bad: {
            label: '❌ No hook, no structure',
            text: 'AI is a great tool for small businesses. There are many ways to use it to save time and improve productivity. I have been using it for a few months and it has been helpful.',
          },
          good: {
            label: '✅ Hook + structure + takeaway',
            text: "I saved 6 hours last week using one ChatGPT habit.\n\nEvery Monday I paste my rough weekly notes into ChatGPT and ask it to organize my priorities.\n\nI used to spend 45 minutes doing this manually. Now it takes 8.\n\nThe prompt I use: [link]",
          },
        },
        {
          type: 'concept',
          eyebrow: 'Batch content creation',
          icon: '📦',
          title: "Create a week's worth of posts in one session.",
          body: [
            "One of the biggest time-savers: instead of thinking of what to post each day, sit down once a week and batch-create 3–5 posts.",
            "Give AI a few topics or themes you care about, tell it your audience and voice, and ask for a week's worth of posts. Review, edit for your voice, schedule them.",
          ],
          highlight: "30 minutes of batching > 5 minutes of daily scrambling. You'll post more consistently and stress less about it.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Write a LinkedIn post about something you know well.',
          body: [
            "Think of one insight, lesson, or observation from your work this week — something small is fine. Open ChatGPT and turn it into a LinkedIn post using the hook + body + takeaway structure.",
          ],
          prompt: "I want to write a LinkedIn post. Here's my main idea: [describe your insight or lesson in 1-3 sentences]. My audience is [who follows you — industry, role, etc.]. My voice is [describe briefly or say 'professional but warm and direct'].\n\nPlease write the post using this structure: a strong hook (1-2 lines), a short body (3-4 paragraphs, 2-3 sentences each), and a clear takeaway. Keep the total under 250 words.",
          body2: "If the first version doesn't feel quite like you, try: \"Make the opening more direct\" or \"Less corporate — more like how I'd say this to a colleague.\"",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: 'Consistent, quality social content — without the daily grind.',
          body: [
            "Your ideas + AI's help with craft and structure = social content you can actually keep up with. The hook is the key. Batching is the habit.",
            "Next lesson: creating scripts for video and spoken content — one of the fastest-growing ways professionals are building an audience.",
          ],
          summaryList: [
            "AI helps with craft, not ideas — bring the insight, let AI find the words",
            "The hook (first 1-2 lines) determines whether anyone reads the rest",
            "Ask for 5 hook options and pick the one that sounds most like you",
            "LinkedIn: hook + body + takeaway is the structure that works",
            "Batch a week's posts in one 30-minute session",
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Video Scripts & Spoken Content',
      meta: '9 slides · ~7 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 4 · Lesson 4',
          icon: '🎬',
          title: "Video is everywhere. You don't have to wing it.",
          body: [
            "More professionals are using video than ever — YouTube, LinkedIn video, Instagram Reels, TikTok, internal presentations, webinars. And one of the biggest barriers is not knowing what to say.",
            "AI can't be on camera for you. But it can make sure you always know exactly what to say — and how to open in a way that keeps people watching.",
          ],
          sub: 'From blank page to script outline in minutes.',
        },
        {
          type: 'concept',
          eyebrow: 'The video hook',
          icon: '🎣',
          title: 'The first 3 seconds decide everything.',
          body: [
            "On any video platform, viewers decide whether to keep watching within the first 3 seconds. That first moment — what you say and how you say it — is called the hook.",
            "A strong video hook does one of three things: states a surprising result, asks a question the viewer desperately wants answered, or makes a bold promise.",
          ],
          list: {
            items: [
              '<strong>Result:</strong> "I went from 3 clients to 27 in 90 days — here\'s what changed."',
              '<strong>Question:</strong> "Why do most people use ChatGPT completely wrong?"',
              '<strong>Promise:</strong> "In the next 4 minutes, I\'ll show you how to cut your email time in half."',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'YouTube structure',
          icon: '▶️',
          title: 'The structure that works for educational YouTube videos.',
          body: ["For a 5–10 minute educational video, this structure works consistently:"],
          scriptStructure: [
            { time: '0–15s', label: 'Hook', desc: 'State the result, problem, or promise. Make them need to keep watching.' },
            { time: '15–45s', label: 'Setup', desc: "Who you are, why you're qualified to talk about this, what they'll get." },
            { time: '45s–4m', label: 'Content', desc: '3–5 main points. One idea per section. Short, clear, with examples.' },
            { time: '4–5m', label: 'Recap', desc: 'Summarize the key takeaways in 30 seconds. Reinforce the main point.' },
            { time: '5m+', label: 'CTA', desc: 'One clear next step: subscribe, comment, download something, watch another video.' },
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Short-form video',
          icon: '📱',
          title: '60–90 second scripts for Reels, TikTok, and LinkedIn video.',
          body: ["Short-form video has its own rhythm — faster, punchier, no setup. The structure is tighter:"],
          list: {
            items: [
              '<strong>0–5s Hook:</strong> Bold statement or question. No intro, no "hey guys."',
              '<strong>5–20s Problem:</strong> The pain point. Why this matters to them.',
              '<strong>20–50s Solution:</strong> Your main point, clearly and quickly.',
              '<strong>50–70s Proof:</strong> One specific example or result.',
              '<strong>70–90s CTA:</strong> One action. Follow for more, try this today, comment below.',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Presentation outlines',
          icon: '🖥️',
          title: 'Slides and presentations — structured in minutes.',
          body: [
            "AI is equally useful for live presentations and webinars. Give it your topic, your audience, your time slot, and your goal — and ask for a structured outline with talking points for each slide.",
            "Then you can build the actual slides from the outline, using AI to help write the speaker notes for each section.",
          ],
          list: {
            items: [
              '"Create an outline for a 20-minute presentation on [topic] for [audience]. I want them to leave knowing [key takeaway]. Include slide titles and 2-3 bullet talking points per slide."',
              '"Now write the speaker notes for the introduction slide — conversational, about 90 seconds of speaking time."',
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'Script quality',
          title: 'Improvised vs. scripted opening — same topic.',
          bad: {
            label: '🎙️ Improvised (no script)',
            text: "Hey everyone, so today I wanted to talk about... um... AI and kind of how it fits into, like, your daily work routine and stuff. So I've been using it a lot and I think it's really interesting...",
          },
          good: {
            label: '✅ AI-scripted opening',
            text: "Last Tuesday I saved 2 hours before lunch — and I want to show you exactly how. Three ChatGPT habits. That's it. Let's go.",
          },
        },
        {
          type: 'concept',
          eyebrow: 'Writing for how you speak',
          icon: '🗣️',
          title: 'Scripts should sound like talking — not reading.',
          body: [
            "The biggest mistake in AI-generated video scripts: they sound written, not spoken. Stiff sentences. Long clauses. Words nobody actually says out loud.",
            "Tell AI to write the script the way you speak — and give it your style brief from Lesson 1. Then read it out loud before you record. If a sentence makes you stumble, simplify it.",
          ],
          highlight: 'After generating a script, ask: "Rewrite this to sound more natural and conversational — like I\'m talking to one person, not presenting to a crowd."',
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: "Script the first 60 seconds of a video you've been meaning to make.",
          body: [
            "Think of a topic you could talk about from real experience — something you know well and that your audience would find useful. Open ChatGPT and script just the hook and setup — the first 60 seconds.",
          ],
          prompt: "Help me script the first 60 seconds of a video on this topic: [your topic]. My audience is [who watches — their role, level, concerns]. The hook should [state a surprising result / ask a question they can't ignore / make a clear promise]. After the hook, write a brief setup that explains what they'll get from watching. Keep the language conversational — write it like I'm talking to one person, not presenting. My voice is [brief description or say 'direct and warm, no fluff'].",
          body2: "Read it out loud. Change any sentence that doesn't feel natural to say. That friction tells you exactly what to fix.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: "You'll never be at a loss for what to say on camera.",
          body: [
            "Hook. Structure. Spoken tone. Those three things turn a nervous \"I don't know where to start\" into a confident, watchable video — every time.",
            "One lesson left: how to build a content system so all of this output doesn't become its own full-time job.",
          ],
          summaryList: [
            "The first 3 seconds decide whether people keep watching — nail the hook",
            "YouTube: hook → setup → content → recap → CTA",
            "Short-form: hook → problem → solution → proof → CTA (in 90 seconds)",
            "Ask AI to write for how you speak, not how you write",
            "Read every script out loud — stumbling tells you what to fix",
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Building a Content System',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 4 · Lesson 5',
          icon: '⚙️',
          title: 'Create once. Use everywhere.',
          body: [
            "The most exhausting part of content isn't writing one good piece — it's finding something new to say every single day. The professionals who show up consistently have a system.",
            "This lesson teaches you how to build one — so one piece of content becomes five, and one hour of effort feeds a whole week.",
          ],
          sub: 'Work smarter, not more.',
        },
        {
          type: 'concept',
          eyebrow: 'The core idea',
          icon: '🔄',
          title: 'Repurposing: one idea, many formats.',
          body: [
            "Repurposing means taking one piece of content and adapting it into multiple formats for different platforms. It's not copying — it's translating.",
            "A single insight can become: a LinkedIn post, a short-form video script, an email newsletter, an Instagram caption, a Twitter/X thread, a FAQ on your website — all from the same core idea.",
          ],
          highlight: "Most people think they need more ideas. What they actually need is to get more out of the ideas they already have.",
        },
        {
          type: 'concept',
          eyebrow: 'The repurposing prompt',
          icon: '♻️',
          title: 'One prompt to turn any content into five more.',
          body: ["Once you have one solid piece of content — a blog post, a video script, an email — paste it into ChatGPT and use this approach:"],
          list: {
            items: [
              '<strong>LinkedIn post:</strong> "Turn this into a 200-word LinkedIn post with a strong hook"',
              '<strong>Short-form video:</strong> "Turn this into a 60-second video script"',
              '<strong>Email newsletter:</strong> "Turn this into a short, conversational email for my subscribers"',
              '<strong>Twitter thread:</strong> "Turn this into a 5-tweet thread — one key point per tweet"',
              '<strong>Instagram caption:</strong> "Write an Instagram caption based on this — hook in the first line"',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'The content calendar',
          icon: '📅',
          title: 'Plan your content month — in one sitting.',
          body: [
            "A content calendar sounds corporate, but it just means knowing what you're going to say before the day arrives. AI makes building one fast.",
            "Give it your themes, your platforms, how often you want to post, and who your audience is. Ask it to generate a month of content topics — not the full posts, just the ideas.",
            "Then you batch-write the actual posts once or twice a week.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Finding your content pillars',
          icon: '🏛️',
          title: 'Three to five topics you can talk about endlessly.',
          body: [
            "The most sustainable content comes from a small set of recurring themes — called content pillars. These are the 3–5 topics where your expertise, experience, and audience interest overlap.",
            "AI can help you identify yours. Describe your work, your audience, and what you want to be known for — and ask it to suggest your content pillars.",
          ],
          list: {
            items: [
              'What do people ask you for advice about most?',
              'What mistakes do you see people in your field making repeatedly?',
              'What has taken you years to learn that others could benefit from?',
              'What trends in your industry do you have a strong opinion on?',
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'With vs. without a system',
          title: 'Same time investment. Very different output.',
          bad: {
            label: '😰 No system — 5 hours/week',
            text: "Monday: stare at blank page for 20 min, write one post. Wednesday: scramble for topic, write another. Friday: skip it — nothing came to mind. Result: 2 inconsistent posts.",
          },
          good: {
            label: '✅ With a system — 90 min/week',
            text: "Sunday: 30 min batch session creates 5 posts using repurposing. Schedule them across platforms. Result: consistent presence on 3 platforms, 5 pieces of content, 90 minutes total.",
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: "Repurpose something you've already created.",
          body: [
            "Find a piece of content you've already made — a LinkedIn post, an email you're proud of, a presentation slide, or even just a paragraph of notes about something you know well.",
            "Paste it into ChatGPT and ask it to turn it into two different formats for two different platforms.",
          ],
          prompt: "Here is a piece of content I created: [paste your post, email, notes, etc.]\n\nMy voice is [brief description — or say 'professional but conversational, no corporate jargon'].\nMy audience is [describe them].\n\nPlease turn this into:\n1. A 60-second video script with a strong hook\n2. A short email newsletter (150 words) with the same core message\n\nKeep my voice consistent across both formats.",
          body2: "One piece of content, two new formats, five minutes. That's the system.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 4 Complete',
          icon: '🎉',
          title: "You're a content creator now — a strategic one.",
          body: [
            "You've completed Module 4. You can write in your own voice, handle every kind of professional writing efficiently, create social media content that hooks people, script video confidently, and build a system that multiplies everything you create.",
            "Module 5 introduces AI tools beyond ChatGPT — image generation, transcription, specialized tools that make this even more powerful.",
          ],
          summaryList: [
            "Repurposing: one piece of content becomes five with one prompt",
            "Content pillars: 3–5 topics you own — find them with AI's help",
            "Batch content once or twice a week — stop the daily scramble",
            "A content calendar takes one sitting to build, one month to benefit from",
            "One idea + AI + a system = consistent presence without burnout",
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: "What's the fastest way to get AI to write in your voice instead of sounding generic?",
      options: [
        'Use longer, more detailed prompts',
        "Paste examples of your own writing and say 'match this voice and style'",
        'Ask it to be more creative and original',
        'Tell it to write formally and professionally',
      ],
      correct: 1,
      feedback: "Examples are the gold standard. Paste 2-3 pieces of writing you're proud of and ask AI to match that voice. It picks up your sentence length, vocabulary, and tone remarkably well. A written style brief works too — but examples are faster and more accurate.",
    },
    {
      q: 'Which of these is the strongest opening for a social media post?',
      options: [
        '"I want to share some thoughts about AI and productivity today."',
        '"Artificial intelligence is transforming the modern workplace in many ways."',
        '"I cut my email time in half using one ChatGPT habit. Here\'s the exact prompt."',
        '"Here are some tips for using AI more effectively at work."',
      ],
      correct: 2,
      feedback: "Specific result + immediate promise + payoff ('here's the exact prompt') is the hook formula that stops the scroll. The others are soft openers that give readers no reason to keep reading. Hooks should create urgency or curiosity in the first 10 words.",
    },
    {
      q: "What does 'repurposing content' mean?",
      options: [
        'Deleting old posts and replacing them with new ones',
        'Posting exactly the same content on every platform simultaneously',
        'Taking one piece of content and adapting it into multiple formats for different platforms',
        'Hiring someone to manage your content creation',
      ],
      correct: 2,
      feedback: "Repurposing is translating, not copying. One LinkedIn post becomes a video script, an email newsletter, a Twitter thread, and an Instagram caption — all from the same core idea. It's the most efficient way to build a consistent content presence without burning out.",
    },
    {
      q: "You've asked AI to write a video script and it sounds stiff and formal. What's the best fix?",
      options: [
        'Start a new conversation and try a completely different approach',
        'Accept it — video scripts are supposed to sound formal',
        "Ask it to 'rewrite this to sound natural and conversational — like I'm talking to one person, not presenting'",
        'Switch to a different AI tool that specializes in video',
      ],
      correct: 2,
      feedback: "A simple follow-up instruction fixes this almost every time. 'Sound conversational, like I'm talking to one person' is the key phrase. Then read it out loud — any sentence you stumble on should be simplified. The stumble tells you exactly what to rewrite.",
    },
    {
      q: "For a longer document like a proposal or report, what's the most efficient way to use AI?",
      options: [
        'Ask AI to write the entire document in one message',
        'Write the whole thing yourself first, then ask AI to proofread it',
        "Build the outline first, review and adjust it, then fill each section with AI's help",
        'Copy a template from the internet and ask AI to personalize it',
      ],
      correct: 2,
      feedback: "Outline first, content second. This keeps you in control of the structure while letting AI handle the heavy lifting of filling each section. It also makes long documents feel manageable — you're just doing one section at a time, not staring at a blank 10-page document.",
    },
  ],
}

export default module4
