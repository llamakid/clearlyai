import type { CourseData } from './types'

const c5module1: CourseData = {
  moduleId: 25,
  title: "Why Your Prompts Aren't Working",
  subtitle: 'Module 1',
  nextModuleId: 26,
  lessons: [
    {
      id: 0,
      title: 'The Most Important Skill in AI',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 1 · Lesson 1',
          icon: '🎯',
          title: 'The gap between mediocre and great AI results is how you asked.',
          body: [
            "Millions of people use AI every day and walk away frustrated. The tool feels slow, generic, or just plain wrong — and they assume the technology isn't good enough yet.",
            "But the people getting extraordinary results from the same tools aren't smarter or more technical. They've learned one skill: how to ask well. That skill is what this entire course is about.",
          ],
          sub: 'Prompting is the most valuable thing you can learn about AI right now.',
        },
        {
          type: 'concept',
          eyebrow: 'The core problem',
          icon: '🔎',
          title: 'Most people use AI like a search engine.',
          body: [
            "They type a few words — \"email for client\" or \"help with presentation\" — and get a generic response that isn't quite right. Then they either accept the mediocre output or give up on the tool entirely.",
            "The problem isn't the AI. Search engines are built to handle fragments. AI is built to respond to <em>conversations</em>. When you treat it like Google, you get Google-quality results from a tool that's capable of so much more.",
          ],
          highlight: 'Typing fragments into AI is like giving a contractor a vague gesture and expecting a finished room.',
        },
        {
          type: 'concept',
          eyebrow: 'The real model',
          icon: '💬',
          title: 'A prompt is a conversation starter, not a search query.',
          body: [
            "AI is designed to respond to how you engage, not just what words you type. When you give it context, explain your situation, and describe what you actually need — it responds with something genuinely useful.",
            "Think of it less like a search bar and more like the opening line of a conversation with a knowledgeable colleague. The more clearly you communicate, the better the collaboration.",
          ],
          highlight: 'The quality of the conversation is mostly determined by whoever starts it.',
        },
        {
          type: 'concept',
          eyebrow: 'The chef analogy',
          icon: '👨‍🍳',
          title: "The tool is only as good as your instructions.",
          body: [
            "Imagine walking into a five-star restaurant kitchen and telling the chef: \"Make me something.\" You can't be surprised if you don't love the dish. The chef has all the skill in the world — but you gave them nothing to work with.",
            "AI is the same. When the output disappoints you, the honest question to ask is: <em>What did I actually give it?</em> In most cases, the answer is \"not much.\" The fix isn't a better AI — it's a better prompt.",
          ],
          highlight: "You can't complain about the meal when you didn't place an order.",
        },
        {
          type: 'compare',
          eyebrow: 'Same task, completely different results',
          title: 'What changes when you actually describe what you want.',
          body: ['Here\'s the same request — written two ways:'],
          bad: {
            label: '❌ Vague',
            text: '"Help me write an email."',
          },
          good: {
            label: '✅ Specific',
            text: '"Write a 3-sentence follow-up email to a client named Sarah who attended our product demo last Tuesday but hasn\'t responded. The tone should be friendly but professional — not pushy. End with a clear next step."',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Rewrite a vague prompt you\'ve already tried.',
          body: [
            "Think of a time you used AI and got a response that felt generic or off-target. What did you actually type? Now rewrite that prompt with more context, a specific outcome, and the tone or format you actually wanted.",
          ],
          prompt: "I have a prompt I've tried before that didn't give me what I needed. The original prompt was: [paste your original prompt here]. What I actually needed was: [describe the specific outcome you wanted — the topic, who it's for, the tone, the length, any key details]. Can you help me rewrite it into a stronger, more specific prompt — and then run the improved version?",
          body2: "Compare the two responses side by side. The difference you see is exactly what this course teaches you to create — on purpose, every time.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: "You've identified the real reason AI disappoints — and it's fixable.",
          body: [
            "Most AI frustration comes from treating a conversation partner like a search engine. Now that you see the gap, you can start closing it.",
            'Next lesson: what a truly great AI response actually looks like — and how to recognize when you\'ve nailed it.',
          ],
          summaryList: [
            'Most people use AI like a search engine — and get search-engine-quality results',
            'AI is designed for conversation, not keyword fragments',
            'The output quality reflects the input quality — almost every time',
            'Better prompts are a learnable skill, not a technical one',
          ],
        },
      ],
    },
    {
      id: 1,
      title: "What 'Good' Actually Looks Like",
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 1 · Lesson 2',
          icon: '🔍',
          title: 'Before you can write great prompts, you need to recognize a great response.',
          body: [
            "Most people can sense when an AI response is bad — it's too generic, too long, or totally off-topic. But fewer people can pinpoint exactly <em>why</em> it's bad or what a great response actually looks like.",
            "In this lesson, we reverse-engineer what makes a response genuinely useful — so you always know what you're aiming for.",
          ],
          sub: 'You can\'t improve what you can\'t define.',
        },
        {
          type: 'concept',
          eyebrow: 'The four signs',
          icon: '✅',
          title: 'A great AI response is specific, usable, the right length, and the right tone.',
          body: [
            "These four qualities separate a response you'll actually use from one you'll read once and close. <strong>Specific:</strong> it addresses your exact situation, not a generic version of it. <strong>Usable:</strong> you can copy, send, or act on it immediately — minimal editing required.",
            "<strong>Right length:</strong> it gives you what you need — not three paragraphs when you wanted a sentence, and not one sentence when you needed a full plan. <strong>Right tone:</strong> it sounds like it was written for your audience, not a general one.",
          ],
          highlight: 'If a response fails any of these four tests, the fix is almost always in the prompt.',
        },
        {
          type: 'concept',
          eyebrow: 'The feedback loop',
          icon: '🔁',
          title: 'The response you get reflects the question you asked.',
          body: [
            "When a response is too generic, it's almost always because the prompt was too generic. When it's the wrong tone, it's because tone wasn't mentioned. When it's the wrong length, length wasn't specified.",
            "This is actually great news. It means you're in control. Every quality problem in the output has a corresponding fix in the input — and that's something you can learn to do deliberately.",
          ],
          highlight: 'Most output problems are input problems in disguise.',
        },
        {
          type: 'concept',
          eyebrow: 'The intention factor',
          icon: '🧭',
          title: "Great results don't require perfect prompts — just intentional ones.",
          body: [
            "You don't need to write a 200-word prompt every time. You need to be <em>intentional</em> — to pause for ten seconds and ask yourself: What do I actually need here? Who is this for? What should it sound like?",
            "That ten-second habit changes everything. Intentional prompts — even short ones — consistently outperform long, vague ones. It's the thought behind the words that matters most.",
          ],
          highlight: "A thoughtful 15-word prompt beats a rambling 100-word one almost every time.",
        },
        {
          type: 'compare',
          eyebrow: 'LinkedIn post — before and after',
          title: 'Generic request vs. specific request — same platform, completely different output.',
          bad: {
            label: '❌ Generic request',
            text: '"Write a LinkedIn post about my business."',
          },
          good: {
            label: '✅ Specific request',
            text: '"Write a short LinkedIn post (3–4 sentences) for a marketing consultant who helps small retail businesses grow online. The post should share one actionable tip about using customer reviews to drive sales. Warm, conversational tone — like advice from a trusted colleague, not a sales pitch."',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: "Get a response you'd actually use — on something relevant to you.",
          body: [
            "Think of something you need to write, explain, or create this week. Use the four quality markers — specific, usable, right length, right tone — as your checklist when you write the prompt. Then rate the response against all four.",
          ],
          prompt: "Write a [type of content — email / post / message / summary] for [describe the specific situation: who it's for, what it's about, what outcome you want]. The tone should be [professional / warm / direct / conversational]. Length: [one paragraph / 3 bullet points / under 100 words / etc.]. Key thing to include: [one specific detail that makes this yours].",
          body2: "After you get the response, run it through the four-question check: Is it specific? Is it usable? Is the length right? Is the tone right? If any answer is \"no,\" tweak one thing in the prompt and try again.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: "You now know what you're aiming for — every time.",
          body: [
            "The four markers — specific, usable, right length, right tone — are your rubric for every AI response you get from this point forward.",
            "Next lesson: the blank page problem. What to do when you open the AI chat and have no idea where to start.",
          ],
          summaryList: [
            'Great responses are specific, usable, the right length, and the right tone',
            'Output quality problems almost always trace back to the prompt',
            'Intentional prompts — even short ones — beat long vague ones',
            'Rate every response against the four markers; fix what\'s off in the prompt',
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'The Blank Page Problem',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 1 · Lesson 3',
          icon: '📝',
          title: "Staring at an empty AI chat box is its own kind of writer's block.",
          body: [
            "You open the chat. The cursor blinks. You know you want help with something — but you're not sure how to start. So you either type something vague and get a mediocre answer, or you close the tab entirely.",
            "This is the blank page problem, and it's one of the most common reasons people underuse AI. This lesson fixes it with three starter phrases that unlock the conversation every single time.",
          ],
          sub: "You don't need the perfect prompt. You need a first one.",
        },
        {
          type: 'concept',
          eyebrow: 'Why it happens',
          icon: '🧱',
          title: "The blank page problem is real — and it's not a you problem.",
          body: [
            "Most people were never taught how to start a conversation with AI. They were shown what AI <em>can</em> do — write, summarize, translate — but not the simple mechanics of <em>how</em> to start. So they freeze.",
            "The blank page problem compounds because there's a hidden pressure to ask the \"right\" thing. But AI doesn't require perfection. It just needs a direction. Once you start, the conversation finds its shape.",
          ],
          highlight: "The worst prompt is the one you never send. Even a rough start gets you somewhere.",
        },
        {
          type: 'concept',
          eyebrow: 'The most important mindset shift',
          icon: '🔄',
          title: "You don't need to get it right on the first try.",
          body: [
            "Prompting is iterative by design. Your first message starts the conversation — it's not supposed to be the final, perfect ask. You'll read the first response, adjust, and get something better on the second or third exchange.",
            "This is how every skilled AI user actually works. They don't write long, perfect prompts from scratch. They start, read, refine. The back-and-forth is the skill — not a workaround for bad prompts.",
          ],
          highlight: "Think of your first message as a rough draft, not a finished request.",
        },
        {
          type: 'concept',
          eyebrow: 'Three phrases that always work',
          icon: '🗝️',
          title: 'Three starter phrases that unlock any AI conversation.',
          body: [
            "These three phrases work for almost any situation. They give AI enough direction to respond usefully — and they buy you time to clarify as you go.",
          ],
          list: {
            items: [
              '<strong>"Help me think through..."</strong> — use this when you\'re not sure what you want yet. It invites AI into the reasoning process, not just the output.',
              '<strong>"I\'m trying to..."</strong> — use this when you have a goal but aren\'t sure how to get there. It frames your intent and lets AI help you plan.',
              '<strong>"Can you help me..."</strong> — use this for any direct task. It\'s polite, clear, and signals collaboration rather than command.',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Putting them to work',
          icon: '⚡',
          title: "Add two sentences after the opener and you're already ahead.",
          body: [
            "None of these phrases work in isolation — they're conversation starters, not magic words. What makes them powerful is what comes next: a sentence about your situation, and a sentence about what you actually need.",
            "\"Help me think through...\" + what the problem is + what you\'re most unsure about = a strong prompt. That\'s it. Three sentences. No overthinking required.",
          ],
          list: {
            items: [
              '"Help me think through how to structure a difficult conversation with a team member who keeps missing deadlines. I\'m not sure whether to lead with the impact or ask about what\'s getting in their way."',
              '"I\'m trying to write a short bio for my website. I\'ve been in HR consulting for 12 years and I want it to feel approachable, not corporate."',
              '"Can you help me plan an agenda for a 45-minute team kickoff meeting for a new project? The team has 6 people and we haven\'t all worked together before."',
            ],
            negative: false,
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Use one of the three starter phrases on something real.',
          body: [
            "Pick something you actually need help with this week — a task, a decision, a conversation, or something you need to write. Use one of the three starter phrases to open the conversation, add two sentences of context, and send it.",
          ],
          prompt: "Help me think through [describe the situation or challenge in 2 sentences]. I'm most unsure about [the specific part you need help with]. Can you start by asking me any questions that would help you give better advice — then we'll go from there.",
          body2: "After the response, notice what you want to follow up on. That second message is the real conversation starting. Keep going — the best AI sessions usually start a little rough and get sharper fast.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: "The blank page never has to stop you again.",
          body: [
            "Three phrases. Two sentences of context. Send it. That's the whole formula for getting past the blank page — every time.",
            'Next lesson: the prompt length myth — and why a sharp 10-word prompt often beats a rambling 100-word one.',
          ],
          summaryList: [
            'The blank page problem is common — and it\'s not a sign you\'re doing it wrong',
            'You don\'t need a perfect first prompt — just a starting direction',
            '"Help me think through," "I\'m trying to," and "Can you help me" always work',
            'Add two sentences of context after the opener to make any prompt strong',
            'Iterate: read the response, refine, and keep going',
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Short vs. Long: What Actually Matters',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 1 · Lesson 4',
          icon: '⚖️',
          title: "Longer prompts aren't better prompts. Specific prompts are.",
          body: [
            "There's a common misconception that the key to better AI results is writing more — more context, more instructions, more detail. So people write paragraph after paragraph and still get mediocre responses.",
            "The truth is simpler and more useful: length isn't the issue. Specificity is. A crisp, clear 12-word prompt regularly outperforms a long, wandering 150-word one.",
          ],
          sub: 'More words ≠ better results. The right words = better results.',
        },
        {
          type: 'concept',
          eyebrow: 'The real variable',
          icon: '🎯',
          title: "Length isn't the issue — specificity is.",
          body: [
            "A long prompt full of vague language gives AI a lot of words to work with — but not much to <em>understand</em>. A short prompt with clear, specific language gives AI exactly what it needs to deliver a useful response.",
            "Specificity means: naming the exact task, describing the real situation, identifying who it's for, and clarifying what the output should look like. You can do all of that in two or three sentences.",
          ],
          highlight: 'A 10-word specific prompt beats a 100-word vague one. Every time.',
        },
        {
          type: 'concept',
          eyebrow: 'Words to cut',
          icon: '✂️',
          title: 'The 5 words that weaken every prompt.',
          body: [
            "These five words are a reliable sign that a prompt is underbaked. When you catch yourself using them, stop and replace them with something concrete.",
          ],
          list: {
            items: [
              '<strong>"Something"</strong> — as in "write me something about marketing." What kind of something? For who? In what format?',
              '<strong>"A bit"</strong> — as in "make it a bit more professional." How professional? What does that look like here?',
              '<strong>"Maybe"</strong> — as in "maybe include some tips." Either include them or don\'t. If they matter, ask for them.',
              '<strong>"General"</strong> — as in "give me some general advice." AI advice is only useful when it\'s specific to your situation.',
              '<strong>"Stuff"</strong> — as in "help me with the marketing stuff." The word "stuff" signals you haven\'t defined what you actually need.',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'When to add more',
          icon: '📋',
          title: 'When to add more context — and when to keep it tight.',
          body: [
            "More context is worth adding when the task requires AI to match a specific audience, tone, or situation it can\'t infer on its own. Telling it you\'re writing for \"small business owners over 50 with no tech background\" is different from \"business owners\" — that context shapes everything.",
            "Keep it short when the task is clear and the stakes are low. \"Give me 5 subject lines for a Black Friday email sale. Punchy, under 8 words each\" needs nothing more. Precision beats length.",
          ],
          highlight: "Add context when the situation is specific to you. Cut everything that's just filler.",
        },
        {
          type: 'compare',
          eyebrow: 'Same goal, different prompt quality',
          title: 'Long and rambling vs. short and specific — same task.',
          bad: {
            label: '❌ Long but vague',
            text: '"I need to write something for my business. It\'s kind of a marketing thing I guess, maybe for email or social media, something that talks about what we do and why people should work with us. It should probably be professional but also friendly, and I want it to be effective. Can you help me write something like that that I could use?"',
          },
          good: {
            label: '✅ Short and specific',
            text: '"Write a 3-sentence email teaser for a bookkeeping firm targeting small restaurant owners. The hook: we help restaurants stop losing money on food costs. Tone: direct and confident, like a trusted advisor."',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: "Write a prompt that's specific without being long.",
          body: [
            "Think of something you need to create or communicate this week. Write a prompt that's under 40 words but contains: the exact task, who it's for, and how it should sound. No filler. No \"something.\" No \"a bit.\"",
          ],
          prompt: "Write [exact content type: an email subject line / a 2-sentence intro / a 3-bullet summary / a social post] for [specific audience: freelance designers / dental office managers / parents of high schoolers]. Topic: [one sentence]. Tone: [one word or phrase]. Length: [specific: under 50 words / 3 lines / one paragraph].",
          body2: "Count the words in your prompt. If it's under 40 and the output is good, you've found your new baseline. Specific is almost always shorter than vague.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: "Trim the filler. Keep the specifics. Watch the results improve.",
          body: [
            "The most effective prompts are deliberate, not long. Every word should earn its place — telling AI something about the task, the audience, or the output you need.",
            "Last lesson in this module: putting everything together with a challenge that gives you your first real win.",
          ],
          summaryList: [
            'Specificity is the variable that drives output quality — not length',
            'Watch for "something," "a bit," "maybe," "general," and "stuff" — replace them',
            'Add context when your situation is unique; cut everything that\'s filler',
            'A good prompt under 40 words beats a rambling one every time',
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Your First Win Today',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 1 · Lesson 5',
          icon: '🏆',
          title: "Everything you've learned only matters if you use it.",
          body: [
            "This last lesson is about putting the module to work — not hypothetically, but on a real task today. You now know the difference between vague and specific, you have three starter phrases, and you know what a great response looks like.",
            "Now we make it stick with practice. Not contrived exercises — real tasks that matter to you.",
          ],
          sub: "The best way to get better at prompting is to do it.",
        },
        {
          type: 'concept',
          eyebrow: 'What you\'ve learned',
          icon: '📚',
          title: 'A quick recap before you apply it.',
          body: [
            "You've covered a lot in four lessons. AI works best as a conversation, not a search. Great responses are specific, usable, right-length, and right-tone. The blank page problem is solved with three starter phrases. And length isn't the goal — specificity is.",
            "Every one of these ideas is practical. None of them require you to be technical. They're habits of communication — and communication is something you already know how to do.",
          ],
          highlight: 'You already know how to have a good conversation. AI just needs you to treat it like one.',
        },
        {
          type: 'concept',
          eyebrow: 'The most common mistake after learning',
          icon: '⚠️',
          title: "The biggest mistake: giving up after one response.",
          body: [
            "Most people who try a new AI technique send one message, get an imperfect response, and decide the technique doesn't work. But prompting is iterative. The first response is a draft, not a final answer.",
            "The habit that separates confident AI users from frustrated ones is simple: they always send a second message. \"Make it shorter.\" \"Change the tone.\" \"Add a specific example about X.\" One follow-up almost always gets you to something great.",
          ],
          highlight: "Don't grade the first response — improve it. The follow-up is where the magic happens.",
        },
        {
          type: 'concept',
          eyebrow: 'Your week-one challenge',
          icon: '📅',
          title: 'Three real tasks to try before the next module.',
          body: [
            "Pick three real things you need to get done in the next week — not practice exercises, but actual work tasks. Try AI on each one, using what you've learned in this module. Notice what works and what you want to refine.",
          ],
          list: {
            items: [
              '<strong>Task 1 — Something you write regularly:</strong> an email, a message, a report summary, a social post. Use the specific-prompt approach and see how much time you save.',
              '<strong>Task 2 — Something you\'ve been putting off:</strong> a difficult message, a plan you haven\'t started, a conversation you\'ve been dreading. Use "Help me think through..." to get unstuck.',
              '<strong>Task 3 — Something where you want options:</strong> a subject line, a name, a tagline, a decision. Ask for 5 options, pick one, and ask AI to refine it.',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'The payoff mindset',
          icon: '💡',
          title: 'Expect imperfection. Reward yourself for trying.',
          body: [
            "Not every prompt will land on the first try. That's completely normal — even for experienced AI users. The goal this week isn't perfection. It's reps. Each attempt builds instinct, and instinct is what eventually makes prompting feel effortless.",
            "One week of consistent use will teach you more than ten more lessons ever could. The skill lives in the doing.",
          ],
          highlight: "Progress over perfection. Every prompt you write — good or bad — is making you better.",
        },
        {
          type: 'compare',
          eyebrow: 'Module 1 — before and after',
          title: "What's changed in how you approach AI.",
          bad: {
            label: '📅 Before Module 1',
            text: 'Open the AI chat, type a few vague words, get a generic response, feel disappointed. Repeat or give up.',
          },
          good: {
            label: '✅ After Module 1',
            text: 'Open the AI chat with a specific task and a clear prompt. Get a useful response. Refine it with one follow-up. Use the result.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Write your professional bio — fully prompted.',
          body: [
            "A short professional bio is something almost everyone needs and almost nobody has written as well as they could. Use this prompt as-is, filling in your own details. This is the exercise — and the result is something you can actually use.",
          ],
          prompt: "Write a short professional bio for me. Here are the details:\n- My name: [your name]\n- My current role: [your title or what you do]\n- Years of experience: [number] years\n- Key thing I'm known for or best at: [one specific thing]\n- Who I typically work with or help: [your clients, customers, or audience]\n- One personal detail (optional): [hobby, location, family, etc.]\n\nWrite it in third person, 3–4 sentences, warm and professional. Not stiff or corporate — like something a colleague who respects your work would say about you.",
          body2: "Read what comes back. If anything feels off — too formal, too generic, missing something — tell it exactly what to change and ask it to revise. You'll have a final version within two exchanges.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 1 Complete',
          icon: '🎉',
          title: "You've built the foundation. Now use it.",
          body: [
            "Module 1 is done. You understand why prompts fail, what great results look like, how to get started when the page is blank, and how specificity — not length — drives quality.",
            "Module 2 is where it gets even more powerful: you'll learn a four-part formula that turns any idea into a consistently strong prompt — no guesswork required.",
          ],
          summaryList: [
            'AI works best as a conversation — treat it like one',
            'Great responses are specific, usable, the right length, and the right tone',
            '"Help me think through," "I\'m trying to," and "Can you help me" always unlock the blank page',
            'Specificity drives quality — cut the filler words',
            'Always send a follow-up — the best results happen on the second or third exchange',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'Why do most people get disappointing results from AI?',
      options: [
        'The AI technology is still too new and unreliable',
        'They use AI like a search engine — typing fragments instead of having a conversation',
        'They ask questions that are too complex for AI to handle',
        'AI only works well for technical tasks, not everyday ones',
      ],
      correct: 1,
      feedback:
        "The gap between mediocre and great AI results is almost always in how you asked. Typing fragments gets search-engine-quality results from a tool capable of much more. When you treat AI as a conversation — with context, a real situation, and a clear ask — the results improve immediately.",
    },
    {
      q: "You're staring at the AI chat box and don't know how to start. What's the best approach?",
      options: [
        "Wait until you've thought of the perfect prompt before typing anything",
        'Use one of the three starter phrases ("Help me think through...", "I\'m trying to...", "Can you help me...") and add two sentences of context',
        'Type the most detailed prompt you can think of, even if it takes 10 minutes to write',
        'Use a template from the internet to make sure you do it right',
      ],
      correct: 1,
      feedback:
        "The blank page problem is solved by starting, not perfecting. Three phrases — \"Help me think through,\" \"I\'m trying to,\" and \"Can you help me\" — always unlock a conversation. Add two sentences of context and you already have a strong prompt. The first message doesn\'t need to be perfect; it just needs to be sent.",
    },
    {
      q: "You've written a long prompt but the AI response is still generic. What's most likely the problem?",
      options: [
        "The prompt was too long — AI works better with short prompts",
        "The prompt was vague, not specific — length wasn't the real issue",
        'You need to use more formal language for AI to understand you',
        "AI can't handle complex requests",
      ],
      correct: 1,
      feedback:
        "Length is not the variable that drives AI output quality — specificity is. A long vague prompt gives AI many words but little to understand. The fix is replacing vague language (\"something,\" \"a bit,\" \"general\") with specific details: the exact task, the audience, the tone, and the format you want.",
    },
  ],
}

export default c5module1
