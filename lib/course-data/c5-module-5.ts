import type { CourseData } from './types'

const c5module5: CourseData = {
  moduleId: 29,
  title: 'Prompts for Real Life',
  subtitle: 'Module 5',
  nextModuleId: 30,
  lessons: [
    {
      id: 0,
      title: 'Email and Communication',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 5 · Lesson 1',
          icon: '✉️',
          title: 'Email is where AI saves most people the most time — fast.',
          body: [
            "If you only ever used AI for one thing, email would be a surprisingly strong choice. Most professionals spend hours every week drafting, replying, and following up — and most of that time is spent staring at a blank screen, not thinking.",
            "AI doesn't replace your judgment about what to say. It removes the friction of getting the words out. Once you try it on a real email, you'll wonder why you waited.",
          ],
          sub: 'This lesson is about turning your rough thoughts into polished communication — fast.',
        },
        {
          type: 'concept',
          eyebrow: 'Three places AI shines',
          icon: '📬',
          title: 'Drafting, replying, and following up.',
          body: [
            "There are three kinds of emails where AI earns its keep immediately. <strong>Drafting from scratch</strong> — when you know what you want to say but can't find the right words. <strong>Replying to a difficult message</strong> — when someone has said something frustrating or complicated and you need to respond professionally. <strong>Following up</strong> — those small but important messages that keep falling off your to-do list.",
            "Each of these situations has a slightly different prompt structure, but they all share the same core: tell AI the context, your relationship with the person, and the outcome you want.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'The key ingredients',
          icon: '🧪',
          title: 'Give AI the situation, the relationship, and the outcome.',
          body: [
            "Vague email prompts produce vague emails. The difference between a useful draft and a generic one almost always comes down to three things: the situation (what happened), the relationship (who is this person to you), and the outcome (what do you want this email to accomplish).",
            "When you include all three, AI can write a draft that actually sounds like it belongs in your inbox — not a form letter. The more specific you are about these three ingredients, the less editing you'll need to do afterward.",
          ],
          highlight: '"Write a [type] email to [who — their role and your relationship]. The situation is [what happened]. The outcome I want is [what you need to happen next]."',
        },
        {
          type: 'concept',
          eyebrow: 'Voice matching',
          icon: '🎤',
          title: 'Make it sound like you — not like a press release.',
          body: [
            "One of the most common frustrations with AI-written emails is that they sound overly formal, stiff, or obviously AI-generated. The fix is simple: tell it your tone, or paste in a sample of your own writing.",
            'Try adding phrases like "Write it in a friendly but professional tone — like I\'m talking to a colleague, not sending a company announcement" or "Here\'s an email I wrote last week — match this style." Tone instructions are free and they make a dramatic difference.',
          ],
          highlight: '"Match the tone of this sample: [paste a short email you wrote]. Keep my voice — don\'t make it sound formal or AI-generated."',
        },
        {
          type: 'compare',
          eyebrow: 'Email prompts compared',
          title: 'Same goal — completely different results.',
          body: ["Here's how a follow-up email prompt looks with and without the right ingredients:"],
          bad: {
            label: '❌ Vague prompt',
            text: '"Write a follow-up email after a meeting." → Gets a generic "Just following up on our recent meeting" template that sounds like it was written by a robot in 2007.',
          },
          good: {
            label: '✅ Specific prompt',
            text: '"Write a follow-up email to Marcus, our potential vendor. We met yesterday to discuss a software contract. He seemed interested but mentioned budget concerns. I want to acknowledge his concern, briefly restate the value, and suggest a 30-minute call next week to discuss options. Friendly and professional tone."',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Use the email prompt template on a real email.',
          body: [
            "Think of an email you need to send — a follow-up, a difficult reply, a request, a thank-you. Fill in the template below and paste it directly into ChatGPT or your AI tool of choice.",
          ],
          prompt: "Write a [type of email: follow-up / request / apology / thank-you / introduction] email to [who they are and your relationship with them] about [the topic or situation]. The tone should be [friendly and professional / warm / direct / formal]. The key point I need to make is [your main message or ask]. Keep it under [short / medium length — roughly 150 words / 3 short paragraphs].",
          body2: "After you get the draft, read it out loud. If any sentence sounds like something you'd never actually say, tell AI: \"Rewrite the third paragraph — it sounds too formal. Make it sound more like how I'd say it in conversation.\"",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: 'Your inbox just got a lot less daunting.',
          body: [
            "The habit to build: next time you're about to write an email from scratch, open AI first. Give it the situation, the relationship, and the outcome. Edit the draft down to your voice. Send it.",
            'Next lesson: using AI to cut through information overload with summarizing and research.',
          ],
          summaryList: [
            'Give AI three things: the situation, your relationship with the recipient, and the outcome you want',
            'AI shines at drafting from scratch, replying to difficult messages, and following up',
            'Add tone instructions — "friendly but professional" or "match this sample" — to get emails that sound like you',
            'The more specific your prompt, the less editing you do afterward',
          ],
        },
      ],
    },
    {
      id: 1,
      title: 'Summarizing and Research',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 5 · Lesson 2',
          icon: '📋',
          title: "Information overload is one of the most solvable problems AI addresses.",
          body: [
            "Most professionals don't lack information — they have too much of it. Long reports, dense articles, lengthy contracts, meeting notes that stretch for pages. The bottleneck isn't access to information. It's having time to absorb it.",
            "AI can read a 40-page report and tell you the five things that matter to you — in about 30 seconds. This lesson is about making that a daily habit.",
          ],
          sub: 'Stop reading everything. Start understanding what matters.',
        },
        {
          type: 'concept',
          eyebrow: 'The core move',
          icon: '📄',
          title: 'Paste it in. Tell AI what you need out of it.',
          body: [
            "AI can summarize almost anything you paste into it — articles, reports, meeting notes, contracts, long email threads, policy documents. The technique is simple: copy the text, paste it into the chat, and then be specific about what you want.",
            "\"Summarize this\" is a fine starting point, but it produces a generic summary. \"Give me the three most important takeaways for someone who manages a small team\" produces something genuinely useful. Specificity is the difference between a summary you'll read and one you'll scroll past.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'The summarizing prompt',
          icon: '🔍',
          title: 'Give AI your context — not just the document.',
          body: [
            "The most useful summaries aren't just shorter versions of the original — they're filtered through your specific needs. When you paste in a document, tell AI who you are and what you're going to do with this information.",
            "\"Here's the Q3 industry report. Give me a 3-bullet summary of the key points that are most relevant to a small business owner selling professional services\" is dramatically more useful than asking for a generic summary. You're not asking AI to read less — you're asking it to read for you.",
          ],
          highlight: '"Here\'s [document]. Give me a [3-bullet / one-paragraph / one-page] summary of the key points. I\'m a [your role/context] and I need this for [your purpose]."',
        },
        {
          type: 'concept',
          eyebrow: 'Research that goes deeper',
          icon: '🧭',
          title: 'Ask AI to explain, then keep going.',
          body: [
            "For research (not just summarizing a document you already have), AI works best as a conversation. Start by asking it to explain a topic in plain English, then follow up with targeted questions to go deeper.",
            "Two follow-ups that work in almost every research conversation: \"What are the most important things I should know about this that a non-expert typically misses?\" and \"What are the most common mistakes people make when dealing with this topic?\" These two questions consistently produce the most valuable parts of any research conversation.",
          ],
          list: {
            items: [
              '"Explain [topic] in plain English — I have no background in this area"',
              '"What are the most important things I should know about this?"',
              '"What are the common mistakes people make when dealing with this?"',
              '"How does this apply specifically to someone in [your situation]?"',
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'Summarizing compared',
          title: 'The same document — two completely different asks.',
          body: ["Here's how a summary request changes depending on whether you give AI your context:"],
          bad: {
            label: '❌ Generic request',
            text: '"Summarize this article." → Gets a paragraph that rephrases the introduction. Technically accurate. Completely generic. You still don\'t know what to do with the information.',
          },
          good: {
            label: '✅ Targeted request',
            text: '"Here\'s an article about new data privacy regulations. I\'m a small business owner who collects customer emails. Tell me: does this affect me, what do I need to do differently, and what\'s the deadline?" → Gets a practical, action-oriented answer in under a minute.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Summarize something you\'ve been meaning to read.',
          body: [
            "Find a document, article, or report you've been putting off — something relevant to your work that you know you should read but haven't gotten to. Copy the text and use the template below.",
          ],
          prompt: "Here is [a report / an article / a set of meeting notes / a contract section] I need to understand. Summarize the 3 most important takeaways for someone who [your context — e.g., 'manages a small marketing team' / 'runs a solo consulting business' / 'is evaluating whether to adopt this policy']. Use plain English. If there's anything I should act on, flag that separately.\n\n[Paste your document or article text here]",
          body2: "After the summary, ask one follow-up: \"Based on this, what should I do next?\" or \"Is there anything in here that should concern me that I might overlook?\" You'll almost always get something useful.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: "You don't have to read everything anymore — just the right things.",
          body: [
            "Paste in content. Give AI your context. Ask for the specific extraction you need. Follow up with \"what should I do with this?\" — and you've just done what used to take an hour in about five minutes.",
            'Next lesson: using AI as a brainstorming and decision-making partner.',
          ],
          summaryList: [
            'Paste in any text and ask for a targeted summary — not just "summarize this"',
            'Give AI your role and purpose so it filters the summary for your needs',
            'Research: explain → what should I know → common mistakes → how does this apply to me',
            'Ask "what should I do with this information?" as a follow-up to any summary',
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Brainstorming and Decisions',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 5 · Lesson 3',
          icon: '💡',
          title: "AI is one of the best thinking partners you'll ever have — if you use it right.",
          body: [
            "Most people think of AI as a writing tool or a search engine. But one of its most powerful uses is as a thinking partner — someone to bounce ideas off of, challenge your assumptions, and generate options you wouldn't have thought of on your own.",
            "This lesson is about two closely related skills: brainstorming (generating options) and decision-making (narrowing them down). Both get dramatically better when you have AI in your corner.",
          ],
          sub: "This isn't about outsourcing your thinking. It's about doing it better.",
        },
        {
          type: 'concept',
          eyebrow: 'Generating options',
          icon: '🔢',
          title: 'Give it constraints. Ask for 10. Pick from the best.',
          body: [
            "The most common brainstorming mistake is asking AI for \"some ideas\" and accepting the first three it generates. Instead, ask for 10 — and give it specific constraints. The number forces AI to go beyond the obvious. The constraints keep it relevant.",
            "After you get 10 ideas, ask it to rank the top three based on your priorities, or ask it to combine the best elements of different ideas into something stronger. You're not looking for one magic answer — you're building a menu of real options to choose from.",
          ],
          highlight: '"Give me 10 [specific idea type] for [goal]. Constraints: [your limits — budget / time / audience / resources]. Be specific and practical, not generic."',
        },
        {
          type: 'concept',
          eyebrow: 'Decision support',
          icon: '⚖️',
          title: 'Pros and cons, done properly.',
          body: [
            "When you're weighing a real decision, AI can generate a more complete pros-and-cons list than you'd produce alone — because it doesn't have your blind spots. Tell it the options, your context, and what you care most about. Then ask it to weight the considerations that matter most for your situation.",
            "After the pros-and-cons analysis, ask AI to play devil's advocate on the option you're leaning toward. This one move — asking it to argue against your preferred choice — consistently surfaces the weaknesses in your thinking before they become costly mistakes.",
          ],
          list: {
            items: [
              '"List the pros and cons of each option given that I care most about [your priority]"',
              '"I\'m leaning toward Option A. Make the strongest case against it."',
              '"What are the most likely ways this decision could go wrong?"',
              '"What would a very cautious person say about this choice?"',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'The most underused prompt',
          icon: '😈',
          title: '"Act as a skeptic" — and mean it.',
          body: [
            "One of the highest-value things you can ask AI to do is play a skeptic. Tell it your plan, your idea, or your decision — and ask it to push back hard. Not gently. Not politely. Hard.",
            "\"I'm going to share a plan. Your job is to be a sharp, experienced skeptic who finds every potential problem, weak assumption, and overlooked risk. Don't reassure me. Challenge me.\" This kind of prompt produces feedback that most advisors — who are trying to be nice — won't give you.",
          ],
          highlight: '"Here\'s my plan: [describe it]. Act as an experienced skeptic. What\'s wrong with it? What assumptions am I making that might not be true? Where is this most likely to fail?"',
        },
        {
          type: 'compare',
          eyebrow: 'Brainstorming compared',
          title: 'The same ask — different levels of useful.',
          body: ["Here's how a brainstorming request changes when you add constraints and specificity:"],
          bad: {
            label: '❌ Vague ask',
            text: '"Give me some ideas for growing my business." → Gets five generic suggestions you\'ve already considered: "post on social media," "network with others," "build your email list." Not useful.',
          },
          good: {
            label: '✅ Specific ask',
            text: '"Give me 10 specific ideas for getting new clients for my bookkeeping business. I\'m targeting small restaurants. My budget is under $200/month. I\'m already doing word-of-mouth and have a basic website. I\'m looking for ideas I haven\'t tried yet — practical, low-cost, and specific to this niche."',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Run a real brainstorm or stress-test a real decision.',
          body: [
            "Pick something you're genuinely trying to figure out — a goal you're stuck on, a decision you're weighing, a problem at work that needs fresh ideas. Use the prompt below.",
          ],
          prompt: "I'm trying to [describe your goal — e.g., 'get more clients,' 'improve my team's communication,' 'decide whether to expand my service offerings']. Give me 10 specific ideas I may not have considered. I already know about [options you've already thought of]. I'm looking for ideas that are [creative / practical / low-cost / quick wins — pick what fits]. My constraints are [budget / time / team size / other limits].",
          body2: "After you get the list, pick the two or three most interesting ideas and ask: \"For each of these, what would be the first concrete step I should take?\" Specificity is where good ideas turn into real action.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: 'You have a thinking partner who never gets tired of your ideas.',
          body: [
            "The brainstorming habit: ask for 10, give constraints, ask it to rank the top three. The decision habit: pros and cons, devil's advocate, skeptic check. Both of these are more powerful than most of the formal planning processes professionals spend hours on.",
            'Next lesson: using AI to write, rewrite, and polish anything you create.',
          ],
          summaryList: [
            'Ask for 10 ideas with specific constraints — it forces better options than "some ideas"',
            'For decisions: get a full pros-and-cons list weighted by your specific priorities',
            'Always ask AI to argue against the option you\'re leaning toward',
            '"Act as a skeptic" is one of the most valuable prompts you can learn',
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Writing and Editing',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 5 · Lesson 4',
          icon: '✍️',
          title: 'Writing is the skill AI amplifies most.',
          body: [
            "Whether you love writing or dread it, AI changes the game. It can help you go from a blank page to a solid first draft in minutes. It can take a clunky paragraph and make it clear. It can tighten a long document down to what actually needs to be said.",
            "This lesson is about three modes: writing from scratch, rewriting what you've drafted, and editing what already exists. Each mode has a different prompt approach — and knowing which one to use is half the skill.",
          ],
          sub: 'Your ideas are still yours. AI just helps you express them better.',
        },
        {
          type: 'concept',
          eyebrow: 'Three modes',
          icon: '🔄',
          title: 'Write, rewrite, or edit — pick your mode.',
          body: [
            "<strong>Writing from scratch</strong> — you have an idea, a goal, or a topic and need words on the page. Give AI the context, the audience, and the format you want, and let it generate a first draft you can shape.",
            "<strong>Rewriting what you've drafted</strong> — you have something down but know it's not quite right. Paste your draft and ask AI to improve it in a specific way. <strong>Editing what exists</strong> — you have finished (or near-finished) text and want it tightened, clarified, or polished. Each mode is different, and each has a different kind of prompt.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Editing mode',
          icon: '✂️',
          title: 'Targeted editing gets targeted results.',
          body: [
            "The most useful editing prompts are specific about what needs to change. \"Edit this\" leaves too much open. \"Make this shorter and clearer\" is better. \"Cut this by 30%, remove any jargon, and make the conclusion stronger\" is better still.",
            "Common editing instructions that work well: <em>Make this shorter</em>. <em>Make this clearer</em>. <em>Make this more professional</em>. <em>Make this sound more conversational</em>. <em>Strengthen the opening line</em>. <em>Cut anything that's repetitive</em>. You can combine multiple instructions in one prompt.",
          ],
          list: {
            items: [
              '"Make this shorter — cut anything that\'s repetitive or could be implied"',
              '"Make this clearer — replace any jargon with plain English"',
              '"Make this more engaging — start with the most interesting or important point"',
              '"Make this more professional — adjust the tone for a formal business context"',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Voice preservation',
          icon: '🗣️',
          title: 'Make it sound like you — not like AI rewrote it.',
          body: [
            "The most common complaint about AI-edited writing is that it loses your voice — it comes out overly polished, formal, or generic. The fix is explicit: tell AI what to preserve as well as what to change.",
            "\"Rewrite this but keep my voice and style — don't make it sound like AI\" is a good starting instruction. Even better: paste in a short sample of your own writing and say \"match this tone.\" If a rewrite loses your personality, you can always say \"this is too formal — make it sound more like I'm speaking directly to the person.\"",
          ],
          highlight: '"Rewrite this to be [shorter / clearer / more engaging]. Keep my voice — don\'t make it sound overly formal or AI-generated. Here\'s a sample of my writing style to reference: [paste a short example]."',
        },
        {
          type: 'compare',
          eyebrow: 'Editing compared',
          title: 'Same request — very different results.',
          body: ["Here's what happens when you give AI a vague edit request vs. a specific one:"],
          bad: {
            label: '❌ Vague edit request',
            text: '"Edit this for me." → AI makes minor surface changes — fixes a comma, changes a word or two. The document is essentially the same. You\'re not sure if it\'s better.',
          },
          good: {
            label: '✅ Targeted edit request',
            text: '"Take this 400-word bio and cut it to 150 words. Keep the key credentials and the personal touch at the end. Remove anything that sounds generic. Make the opening sentence grab attention immediately."',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Edit something real — a bio, an email, a proposal, anything.',
          body: [
            "Find a piece of writing you've produced recently — a professional bio, a proposal, an email, a social media post, a report introduction. Paste it into AI with the editing prompt below.",
          ],
          prompt: "Here is a [type of text — bio / email / proposal section / social post / report intro] I wrote. Improve it by: [1. making it shorter — cut by about 30% / 2. making it clearer — replace any jargon / 3. making it more engaging — start with the strongest point]. Keep my voice — don't make it sound overly formal or like AI rewrote it. Here's the text:\n\n[Paste your writing here]",
          body2: "Read the edited version and mark any sentences that don't sound like you. Then tell AI: \"Rewrite these specific sentences in a more natural, conversational tone\" — and paste them in. Two rounds of editing almost always lands you somewhere you're happy with.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: "You'll never stare at a blank page the same way again.",
          body: [
            "Write → paste → tell AI exactly what to improve → edit the output to add your voice back in. That loop takes about 10 minutes for most writing tasks that used to take an hour.",
            'Last lesson of the module: using AI for planning and organizing anything.',
          ],
          summaryList: [
            'Know your mode: writing from scratch, rewriting a draft, or editing finished text',
            'Targeted editing prompts ("shorter," "clearer," "more engaging") get targeted results',
            'Preserve your voice explicitly — tell AI what not to change, not just what to change',
            'Two rounds of editing is almost always enough — first pass improves it, second pass makes it yours',
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Planning and Organizing',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 5 · Lesson 5',
          icon: '🗂️',
          title: "AI turns 'I don't know where to start' into a clear action plan — fast.",
          body: [
            "Planning is one of the highest-leverage things AI can help you with. Not because it makes the plan for you — but because it turns a vague goal into a concrete, ordered list of steps before you've had time to get overwhelmed.",
            "This is the module's final lesson, and it brings together everything you've practiced. Writing, summarizing, brainstorming, and now organizing — these skills work together in a single conversation.",
          ],
          sub: 'The blank to-do list is optional. The plan is not.',
        },
        {
          type: 'concept',
          eyebrow: 'Starting any plan',
          icon: '🚀',
          title: 'Describe the goal. Ask AI to break it down.',
          body: [
            "The simplest and most powerful planning prompt is also the most approachable: describe what you're trying to accomplish, and ask AI to break it into steps. You don't need to know how to do it first. You just need to know what you want at the end.",
            "What surprises most people is how thorough AI's breakdown can be — it often includes steps they'd forgotten or never considered. That's exactly the value: not just organizing what you already know, but surfacing what you haven't thought of yet.",
          ],
          highlight: '"Help me plan [describe the goal]. I\'m starting from [current state]. Break it into clear phases and action steps."',
        },
        {
          type: 'concept',
          eyebrow: 'Common planning prompts',
          icon: '📋',
          title: 'Almost anything with a goal and a deadline can be planned this way.',
          body: [
            "Planning prompts work across a wide range of real-life situations — not just work projects. Any goal that has a starting point, a destination, and some steps in between is fair game.",
          ],
          list: {
            items: [
              'Project timelines: "Give me a week-by-week plan for launching [X] in 60 days"',
              'Checklists: "Create a complete checklist for [event / onboarding / process]"',
              'Agendas: "Draft a 60-minute agenda for a meeting about [topic] with [audience]"',
              'Shopping or supply lists: "Give me everything I\'ll need for [project or event]"',
              'Travel itineraries: "Plan a 4-day trip to [destination] focused on [priorities]"',
              'Personal goals: "Help me build a 30-day plan for [learning / habit / project]"',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'A powerful planning move',
          icon: '⏪',
          title: 'Work backwards from the deadline.',
          body: [
            "One of the most effective planning techniques — and one AI executes extremely well — is working backwards from your deadline. Instead of asking \"what do I do first?\", you ask \"if I need to be done by [date], what has to happen the week before? The month before? Right now?\"",
            "This approach naturally surfaces dependencies (things that can't start until something else is done) and realistic time estimates. It's the difference between a plan that's theoretically possible and one you can actually execute.",
          ],
          highlight: '"I need to [achieve goal] by [specific date]. Create a step-by-step plan working backwards from the deadline. Flag any steps that typically take longer than people expect."',
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Plan something real — a project, a goal, or an event.',
          body: [
            "Think of something coming up that you've been meaning to plan but haven't gotten around to — a project at work, a personal goal, an event you're organizing. Use the prompt below.",
          ],
          prompt: "I need to [accomplish goal — be specific] by [timeframe or specific date]. I'm starting from [describe your current state — what you have, what's already done, what's missing]. Create a step-by-step action plan with specific tasks and realistic timelines. Work backwards from the deadline where helpful. Flag any steps that are likely to take longer than I expect, and note anything I might forget that's commonly overlooked.",
          body2: "After you get the plan, ask: \"What could go wrong with this plan that I should prepare for in advance?\" This single follow-up consistently surfaces risks that would otherwise show up as surprises mid-project.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 5 Complete',
          icon: '🎉',
          title: "You can handle almost any real-life task with AI now.",
          body: [
            "You've completed Module 5. You now have a working prompt for every major category of everyday tasks: email and communication, summarizing and research, brainstorming and decisions, writing and editing, and planning and organizing.",
            "Module 6 is about locking in these skills permanently — building your personal prompt library so you never start from scratch again.",
          ],
          summaryList: [
            'Email: give AI the situation, the relationship, and the outcome you want',
            'Summarizing: give AI your context so summaries are filtered for your needs',
            'Brainstorming: ask for 10 ideas with constraints — always use the skeptic check for decisions',
            'Writing and editing: be specific about what to change, explicit about what to preserve',
            'Planning: describe the goal, ask for a backwards-from-deadline plan, then ask what could go wrong',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'You need AI to write an email to a potential client following up after a meeting. What should your prompt include?',
      options: [
        'Just the recipient\'s name and the word "follow-up"',
        'The type of email, who the recipient is, the situation, the outcome you want, and the tone',
        'The full text of the previous email chain so AI can figure out the context',
        'A request to "write a professional email" — AI will handle the rest',
      ],
      correct: 1,
      feedback: "The three ingredients that make AI-written emails actually useful are: the situation (what happened), the relationship (who is this person to you), and the outcome (what do you need this email to accomplish). Add a tone instruction and you'll almost always get a draft worth using.",
    },
    {
      q: "You paste a long industry report into AI and ask it to summarize. What's the best way to phrase that request?",
      options: [
        '"Summarize this."',
        '"Give me a 3-bullet summary of the most important points for a small business owner evaluating whether to change her pricing strategy."',
        '"Tell me everything in this report."',
        '"What does this report say about AI?"',
      ],
      correct: 1,
      feedback: "Targeted summaries are dramatically more useful than generic ones. When you tell AI who you are and what you're going to use the summary for, it filters the document through your specific lens — not just the document's main argument. The more context you give, the more relevant the output.",
    },
    {
      q: "You're stuck on a plan and want AI to help you brainstorm. Which approach will give you the most useful results?",
      options: [
        '"Give me some ideas for growing my business."',
        '"Give me 10 specific ideas for attracting new clients to my accounting practice. I\'m targeting law firms. Budget: under $300/month. I\'ve already tried referrals and LinkedIn."',
        '"What should I do to grow?"',
        '"List every possible business strategy that exists."',
      ],
      correct: 1,
      feedback: "Asking for 10 ideas with specific constraints forces AI past the generic answers and into genuinely useful territory. The constraints (audience, budget, what you've already tried) are what make the difference — they tell AI exactly what space to explore.",
    },
  ],
}

export default c5module5
