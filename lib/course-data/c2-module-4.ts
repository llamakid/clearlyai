import type { CourseData } from './types'

const c2module4: CourseData = {
  moduleId: 10,
  title: 'Reports in Minutes, Not Hours',
  subtitle: 'AI at Work · Module 4',
  lessons: [
    // ─────────────────────────────────────────
    // Lesson 1 — Why Reports Take So Long
    // ─────────────────────────────────────────
    {
      id: 0,
      title: 'Why Reports Take So Long',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI at Work · Lesson 1',
          icon: '📊',
          title: 'Why Reports Take So Long',
          body: [
            "By the end of this lesson, you'll understand exactly why written reports drain so much time — and see why AI is uniquely positioned to solve the specific problems that make them hard.",
          ],
          sub: "The frustrating part isn't the thinking. It's everything around it.",
        },
        {
          type: 'concept',
          eyebrow: 'The knowledge gap',
          icon: '🧠',
          title: "You already know what to say. The problem is writing it.",
          body: [
            "Here's the thing about most professional reports: you know the content. You lived the project. You have the data. You understand what happened and what it means.",
            "The challenge isn't the knowledge — it's the translation. Taking what you know and turning it into a structured, readable, polished document that communicates clearly to someone who wasn't there.",
            "That translation is exactly what AI is built to do.",
          ],
          highlight: "The bottleneck isn't expertise. It's the blank page — and AI eliminates it.",
        },
        {
          type: 'concept',
          eyebrow: 'The blank page problem',
          icon: '📄',
          title: "Starting from nothing is the hardest part.",
          body: [
            "Studies on writing productivity consistently find the same thing: the most difficult moment is the start. Not the middle, not the end — the first sentence.",
            "When you sit down to write a report, you're not just writing. You're simultaneously deciding structure, choosing what to include, figuring out how to open, and worrying about how it will land.",
            "That's an enormous cognitive load for something that's essentially documentation. AI takes the start off your plate entirely.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'The perfectionism trap',
          icon: '🪤',
          title: "When you write and edit at the same time, both suffer.",
          body: [
            "Most professionals try to write reports in one pass — composing and editing simultaneously. You type a sentence, reread it, change a word, reread it again, move on to the next sentence.",
            "This is the slowest possible way to write. It also produces worse output, because you're constantly interrupting your train of thought to evaluate what you just wrote.",
            "AI breaks the cycle. It produces a complete draft. You shift from creator to editor — a much faster, much clearer cognitive mode.",
          ],
          highlight: "Editing is faster than writing. AI gives you something to edit every time.",
        },
        {
          type: 'concept',
          eyebrow: 'The audience problem',
          icon: '👥',
          title: "Different audiences need different versions of the same information.",
          body: [
            "Your project update for your immediate team reads differently than the one that goes to the executive team. The technical detail that's essential for one audience is noise for the other.",
            "Traditionally, writing for multiple audiences means writing multiple drafts — a significant time investment on top of an already full day.",
            "AI can rewrite the same content for different audiences in under a minute. You write it once; AI adapts it.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'What this module covers',
          icon: '🗺️',
          title: "Four lessons. A complete reporting system.",
          body: ["Here's what you'll build over the next four lessons:"],
          list: {
            items: [
              'Lesson 2: Your Input Doesn\'t Have to Be Pretty — rough notes in, polished output out',
              'Lesson 3: Structure Is Everything — the right format for any report type',
              'Lesson 4: Making It Sound Like You — editing AI drafts for voice and audience',
              'Lesson 5: Your Report Template Library — reusable structures for your most common reports',
            ],
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Identify your report tax.',
          body: [
            "Open <strong>chatgpt.com</strong> and run this quick audit to see where your reporting time actually goes.",
          ],
          prompt:
            "I want to understand how much time I spend on written reports and documents. I work as a [job title] and the written reports I produce regularly include: [list them — e.g., 'weekly status updates to my manager', 'monthly client summaries', 'project close-out reports']. On average, each one takes me about [X hours/minutes]. Based on this, what's my total annual reporting overhead — and which type of report would give me the biggest time savings if I could use AI to draft it?",
          body2:
            "Keep the answer in mind. By the end of this module, that number will look very different.",
          setupGuide: true,
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: "The problem is the blank page, not the knowledge.",
          body: [
            "You already know what your reports need to say. The drain is the translation: from knowledge to structured, polished prose. AI handles that translation — you bring the expertise.",
            "In the next lesson, you'll learn that your input doesn't need to be clean or organized for AI to produce something useful. Rough notes, bullet points, voice transcript — all of it works.",
          ],
          summaryList: [
            "The bottleneck in report writing isn't expertise — it's translating knowledge into prose",
            "The blank page is the hardest part; AI eliminates it by producing a complete first draft",
            "Writing and editing simultaneously is the slowest way to work — AI breaks that cycle",
            "Different audiences need different versions; AI rewrites for each one in under a minute",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 2 — Your Input Doesn't Have to Be Pretty
    // ─────────────────────────────────────────
    {
      id: 1,
      title: "Your Input Doesn't Have to Be Pretty",
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI at Work · Lesson 2',
          icon: '✏️',
          title: "Your Input Doesn't Have to Be Pretty",
          body: [
            "By the end of this lesson, you'll know how to turn almost any rough input — bullet points, scattered notes, voice transcripts, or half-finished thoughts — into a polished first draft with AI.",
          ],
          sub: "The mess is fine. That's what AI is for.",
        },
        {
          type: 'concept',
          eyebrow: 'The myth of clean input',
          icon: '🚫',
          title: "You don't need organized notes before you can write a great report.",
          body: [
            "Most people assume they need to organize their thoughts before they can use AI effectively — that they should sort their notes, outline their structure, clean up their bullet points first.",
            "That assumption is exactly backwards. Organizing messy input is what AI is exceptionally good at. The mess is the starting point, not a problem to solve before starting.",
            "Give AI the raw material. It handles the structure, the prose, and the polish.",
          ],
          highlight: "Don't organize before you prompt. Prompt first — AI does the organizing.",
        },
        {
          type: 'concept',
          eyebrow: 'What counts as usable input',
          icon: '📥',
          title: "Almost anything you have is enough to start.",
          body: [
            "Here's a non-exhaustive list of what AI can work with to produce a useful report draft:",
          ],
          list: {
            items: [
              'Bullet points jotted during a project — even if partial or out of order',
              'Rough notes from your notebook or a doc, typed in quickly',
              'A transcript from a voice memo you recorded on your phone',
              'An email thread summarizing what happened on a project',
              'A previous version of a similar report as a structural reference',
              'A verbal description you type in plain English: "here\'s what happened..."',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: 'The dump-and-direct method',
          icon: '🗑️',
          title: "Step one: dump. Step two: direct. That's the whole method.",
          body: [
            "<strong>Dump:</strong> Paste everything you have into ChatGPT, unfiltered. Notes, numbers, observations, context — whatever you have. Don't edit before pasting.",
            "<strong>Direct:</strong> Tell AI what you want it to produce. The report type, the audience, the length, the tone.",
            "That's it. The draft appears in seconds. The result will be better organized and better written than most first drafts produced by the traditional approach — and it took you two minutes instead of an hour.",
          ],
          highlight: "Dump everything. Direct clearly. Get a draft. Edit for 5 minutes. Done.",
        },
        {
          type: 'concept',
          eyebrow: 'The direction matters',
          icon: '🎯',
          title: "Tell AI who this is for and how long it should be.",
          body: [
            "The most important context you can give AI when drafting a report: the audience and the length.",
            "<strong>Audience:</strong> 'This is for my manager' reads very differently than 'This is for the executive team' or 'This is for a client.' Each one changes the level of detail, the assumed knowledge, and the appropriate tone.",
            "<strong>Length:</strong> 'Keep it to one page' or 'This should be about 300 words' gives AI the scope. Without it, you'll get something longer than you need.",
          ],
          highlight: '"Write a [report type] for [audience]. Use my notes below. Target length: [X words / one page / 5 bullet points]. Tone: [professional / direct / executive summary style]."',
        },
        {
          type: 'concept',
          eyebrow: 'When your notes are really rough',
          icon: '🗒️',
          title: "Even the messiest input produces something useful.",
          body: [
            "What if your notes are truly chaotic — timestamps, half-sentences, things crossed out, ideas in the wrong order?",
            "It still works. Paste what you have and add one line at the start: 'These are rough, unorganized notes. Please help me turn them into a polished report.'",
            "AI will restructure, fill in logical transitions, and produce readable prose from the fragments. You'll still need to review carefully — but you'll be editing, not starting from scratch.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Turn rough notes into a polished draft.',
          body: [
            "Find some rough notes from a recent project, meeting, or piece of work — the messier the better. Open <strong>chatgpt.com</strong> and use this prompt:",
          ],
          prompt:
            "I have rough notes from [describe: a project, a client situation, a piece of work]. I need to turn them into a polished [report type — e.g., status update, project summary, client update]. The audience is [who will read this]. Please take my notes below, organize them, and write a clear, professional draft. Target length: [X words or 'one concise page']. Tone: [professional / direct / warm and informative].\n\nHere are my notes:\n[paste your rough notes — unedited]",
          body2:
            "Compare what AI produces to what your starting material looked like. That gap — from rough notes to polished report — is the time you just saved.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: "Messy input is fine. That's what AI is for.",
          body: [
            "You don't need to organize before you prompt. Dump your raw material, direct AI clearly on the audience and length, and you have a first draft in minutes. The editing is the easy part.",
            "In the next lesson, you'll learn how to choose the right structure for different report types — because structure is what determines whether a report actually gets read and acted on.",
          ],
          summaryList: [
            "Clean, organized input is not required — AI organizes the mess for you",
            "Almost any input works: bullet points, rough notes, voice transcripts, email threads",
            "The dump-and-direct method: paste everything, direct clearly on audience and length",
            "Audience and length are the two most important pieces of context to give AI",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 3 — Structure Is Everything
    // ─────────────────────────────────────────
    {
      id: 2,
      title: 'Structure Is Everything',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI at Work · Lesson 3',
          icon: '🏗️',
          title: 'Structure Is Everything',
          body: [
            "By the end of this lesson, you'll know which structure fits which report type — and how to use AI to build the right structure for every document you produce.",
          ],
          sub: "Content gets you read. Structure gets you understood.",
        },
        {
          type: 'concept',
          eyebrow: 'Why structure matters more than prose',
          icon: '👁️',
          title: "Readers skim. Structure determines what they take in.",
          body: [
            "In a professional context, nobody reads a report the way they read a novel — from the first word to the last. They scan for what's relevant, jump to the section that answers their question, and skim the rest.",
            "If your structure doesn't make key information easy to find, that information doesn't land — regardless of how well it's written.",
            "The right structure is the difference between a report that gets read and a report that gets archived.",
          ],
          highlight: "Good structure is a courtesy to your reader. AI knows the structures that work for each report type.",
        },
        {
          type: 'concept',
          eyebrow: 'Status updates',
          icon: '📈',
          title: "The status update: what happened, where things stand, what's next.",
          body: [
            "Status updates are the most common professional report — and the most commonly written poorly. Too long, too vague, or missing the one thing the reader actually wants to know: are we on track?",
            "The structure that works every time:",
          ],
          list: {
            items: [
              '<strong>Current status:</strong> One sentence — on track, at risk, delayed, complete',
              '<strong>What happened this period:</strong> 3–5 bullet points, progress only',
              '<strong>What\'s next:</strong> 2–3 bullet points, the immediate next steps',
              '<strong>Blockers (if any):</strong> What\'s in the way and what you need',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: 'Executive summaries',
          icon: '👔',
          title: "The executive summary: answer first, detail second.",
          body: [
            "Senior leaders don't read reports in order. They read the summary, decide if they need more, and move on.",
            "Executive summary structure: bottom line up front. Lead with the conclusion or recommendation — not the background. Then supporting evidence in order of importance. Then a clear ask or next step.",
            "If your executive summary buries the point, the point doesn't land.",
          ],
          highlight: '"Write an executive summary that leads with the conclusion. Put the most important finding or recommendation in the first sentence. Keep it to 150 words."',
        },
        {
          type: 'concept',
          eyebrow: 'Project updates and close-outs',
          icon: '🏁',
          title: "Project reports: what was done, what was learned, what comes next.",
          body: [
            "Project update and close-out reports need to do two things: document what happened clearly enough for someone not on the project, and extract anything worth carrying forward.",
            "The structure that covers both:",
          ],
          list: {
            items: [
              '<strong>Project summary:</strong> What it was, the goal, the outcome — 2–3 sentences',
              '<strong>What was accomplished:</strong> Key deliverables and milestones, factual',
              '<strong>What didn\'t go as planned:</strong> Honest, specific — not a blame list',
              '<strong>Lessons learned:</strong> What you\'d do differently and what worked well',
              '<strong>Next steps or handoff:</strong> What happens after this report',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: 'Asking AI for the right structure',
          icon: '💡',
          title: "Let AI recommend the structure — then fill it with your content.",
          body: [
            "You don't have to know the perfect structure in advance. You can ask AI to recommend one.",
            "Tell it the type of document, the audience, and the purpose. Ask it to suggest a structure before writing the draft. Review it, adjust if needed, then ask it to write the report using that structure.",
            "This two-step approach — structure first, content second — consistently produces better reports than asking for a full draft cold.",
          ],
          highlight: '"Before writing this report, suggest the best structure for a [report type] going to [audience]. The main goal is to [communicate/decide/update]. Then I\'ll confirm and you can write it."',
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Get the right structure for a report you need to write.',
          body: [
            "Think of a report you need to write — or one you write regularly. Open <strong>chatgpt.com</strong> and use this two-step approach:",
          ],
          prompt:
            "Step 1 — Get the structure:\n\"I need to write a [report type] for [audience]. The purpose is to [what you want the reader to do or understand]. Before writing it, please suggest the best structure — section headings and a one-sentence description of what goes in each section.\"\n\nStep 2 — Write the report:\n\"That structure looks good. Now please write the full report using those sections. Here's my content: [paste your notes or bullet points]\"",
          body2:
            "The two-step approach produces better results than a single prompt because you confirm the structure fits your situation before AI writes the content around it.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: "Structure determines whether your report gets read and acted on.",
          body: [
            "The right structure for a status update, an executive summary, and a project close-out are all different — and each one is something AI knows well. Ask for a structure recommendation before the draft and you'll get consistently better results.",
            "In the next lesson, you'll learn how to take an AI draft and make it genuinely sound like you — matching your voice, your organization's tone, and your audience's expectations.",
          ],
          summaryList: [
            "Readers skim — structure determines what they take in, not prose quality",
            "Status updates: current status first, then progress, next steps, and blockers",
            "Executive summaries: conclusion and recommendation first, evidence second",
            "Two-step approach: confirm structure before writing — consistently better results",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 4 — Making It Sound Like You
    // ─────────────────────────────────────────
    {
      id: 3,
      title: 'Making It Sound Like You',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI at Work · Lesson 4',
          icon: '🎨',
          title: 'Making It Sound Like You',
          body: [
            "By the end of this lesson, you'll know how to take an AI draft and refine it so it sounds like you — matching your voice, your organization's standards, and your reader's expectations.",
          ],
          sub: "AI writes a strong draft. You make it yours.",
        },
        {
          type: 'concept',
          eyebrow: 'Why AI drafts need editing',
          icon: '🔍',
          title: "AI is a strong first-drafter. It's not a perfect finisher.",
          body: [
            "A well-prompted AI draft is genuinely useful — it's structured, complete, and grammatically sound. But it often has telltale signs that it didn't come from the person who lived the work.",
            "It may be slightly too formal or slightly too generic. It might not carry the emphasis you'd put on certain points. It won't know the specific internal language your organization uses.",
            "The edit is where those things get fixed. It takes 5 minutes, not 30 — and the result is something that reads like it came from you.",
          ],
          highlight: "Your job after the AI draft isn't to rewrite — it's to make 3–5 targeted adjustments.",
        },
        {
          type: 'concept',
          eyebrow: 'The voice check',
          icon: '🎤',
          title: "Read it aloud. If it doesn't sound like something you'd say, change it.",
          body: [
            "The fastest way to catch AI-sounding language is to read the draft out loud. If you pause on a phrase because it's stiffer than you'd naturally speak, flag it.",
            "Common things to look for: overly formal openings ('I am writing to inform you...'), generic filler phrases ('It is important to note that...'), or slightly awkward word choices that are technically correct but not how you'd say it.",
            "Each one takes 10 seconds to fix. Together, they're what separates a draft that sounds like AI from one that sounds like you.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'The specificity edit',
          icon: '🎯',
          title: "Add the details only you could know.",
          body: [
            "AI writes in generalities by default, because generalities are what it has. It doesn't know your project's specific history, the nuance of your client relationship, or the exact context that makes a particular point land.",
            "Your most valuable edit is adding specificity: real names (where appropriate), actual numbers, the precise context that makes a statement meaningful rather than generic.",
            "One specific sentence — a real date, a real outcome, a real person — changes a report from something that could have been written by anyone to something that clearly came from you.",
          ],
          highlight: "Generic report: 'The project made significant progress.' Your version: 'We completed the client onboarding three days ahead of schedule — the first time in four quarters.'",
        },
        {
          type: 'concept',
          eyebrow: 'Matching your organization',
          icon: '🏢',
          title: "Every organization has its own language. AI doesn't know yours yet.",
          body: [
            "Internal reports have organizational conventions: the terms your company uses for certain processes, the way your leadership prefers updates structured, the level of formality that's normal for your context.",
            "You can teach AI your organization's style by giving it an example. Paste a previous report you've written that was well-received and say: 'Match the tone, structure, and level of formality of this example.'",
            "After a few uses, you'll know exactly how to prompt for your context — and the editing time drops further.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Writing for different audiences from one draft',
          icon: '🔄',
          title: "One set of notes. Multiple versions. Seconds per version.",
          body: [
            "Now that you have a base draft, creating versions for different audiences is trivial.",
            "Ask AI: 'Rewrite this for my executive team — lead with the business impact, cut the technical detail, keep it to one paragraph.'",
            "Or: 'Here's the exec version. Now write the detailed version for my implementation team — add more process context and be specific about the technical steps.'",
            "Same source material. Appropriate version for each reader. No redundant writing.",
          ],
          highlight: "One draft becomes a library. Every audience gets exactly what they need.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Refine an AI draft until it sounds like you.',
          body: [
            "Take a draft you produced in an earlier exercise (or generate a new one from any notes you have). Open <strong>chatgpt.com</strong> and run this refinement process:",
          ],
          prompt:
            "Here is a draft report I need to refine. Please make the following adjustments:\n1. Make the tone match this style: [paste 2–3 sentences from something you've written that sounds like you]\n2. Make it less formal in these spots: [quote the phrases that sound stiff]\n3. Lead with this key point more strongly: [what you want to emphasize most]\n4. Remove any filler phrases or generic statements\n\nHere is the current draft:\n[paste the draft]",
          body2:
            "After this refinement, read it aloud one more time. Add any specific details only you could know — a real number, a real name, a specific context. That's your final draft.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: "Five targeted edits make any AI draft genuinely yours.",
          body: [
            "Voice check, specificity edit, organizational tone, and audience adaptation — these are the moves that transform a competent AI draft into something that reads like it came from someone who lived the work.",
            "In the final lesson, you'll build a report template library so that every report type you produce regularly has a ready-to-go prompt — cutting the time from 'I need to write a report' to 'draft ready to edit' down to under a minute.",
          ],
          summaryList: [
            "Read AI drafts aloud — if you'd never say it that way, change it",
            "The specificity edit: add real numbers, names, and context only you could know",
            "Teach AI your organization's style by pasting an example and asking it to match",
            "One source draft can be adapted for multiple audiences in seconds each",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 5 — Your Report Template Library
    // ─────────────────────────────────────────
    {
      id: 4,
      title: 'Your Report Template Library',
      meta: '9 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI at Work · Lesson 5',
          icon: '📚',
          title: 'Your Report Template Library',
          body: [
            "By the end of this lesson, you'll have a set of reusable AI prompts for the reports you write most often — so every future report starts with a ready-made structure and a strong first draft in under two minutes.",
          ],
          sub: "Build it once. Use it for years.",
        },
        {
          type: 'concept',
          eyebrow: 'The repeating pattern',
          icon: '🔁',
          title: "Most professionals write the same 4–6 report types over and over.",
          body: [
            "Think about the written reports and documents you produce in a typical month. Chances are the list is shorter than you'd expect: a weekly status update, a client summary, a project update, maybe a monthly review.",
            "The structure and tone of each one barely changes week to week. What changes is the specific content.",
            "That pattern is exactly what templates are built for — and AI report templates are far more powerful than simple text templates, because they adapt to your content automatically.",
          ],
          highlight: "You have recurring reports. Recurring reports deserve recurring systems.",
        },
        {
          type: 'concept',
          eyebrow: 'What an AI report template is',
          icon: '🔧',
          title: "A template is a prompt with structure baked in and brackets for your content.",
          body: [
            "An AI report template isn't a pre-written document you update manually. It's a prompt that tells AI the type of report, the audience, the structure, the tone, and the length — with brackets where you drop in the current details.",
            "Every time you use it, you fill in the brackets and get a polished draft that already matches your organization's standards.",
            "The template gets smarter over time too: every time you refine a draft, you can save those refinements back into the prompt.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'The weekly status update template',
          icon: '📅',
          title: "The most common report type — and the fastest to template.",
          body: [
            "Here's what a complete weekly status update AI template looks like:",
          ],
          highlight: '"Write a weekly status update for [audience: my manager / the team / the client]. Status: [on track / at risk / delayed]. This week\'s progress: [bullet points of what was done]. Next week\'s plan: [bullet points of what\'s coming]. Blockers (if any): [what\'s in the way]. Tone: professional and direct. Length: under 200 words."',
        },
        {
          type: 'concept',
          eyebrow: 'The client summary template',
          icon: '🤝',
          title: "For any client-facing communication that needs to look polished.",
          body: [
            "Client summaries require a specific combination: professional enough to build confidence, specific enough to show progress, and warm enough to maintain the relationship.",
            "Here's the template structure:",
          ],
          highlight: '"Write a client update email / summary for [client type]. Cover: what we\'ve accomplished since last contact [bullet points], current status [one sentence], what\'s coming next [2–3 points], and any decisions or information we need from them. Tone: professional, warm, and confident. Keep it under 250 words."',
        },
        {
          type: 'concept',
          eyebrow: 'The project close-out template',
          icon: '🏁',
          title: "The report that rarely gets done well — and now doesn't have to take long.",
          body: [
            "Project close-out reports are chronically neglected because they happen when everyone is exhausted and ready to move on. They're also genuinely valuable: they capture what was learned before memory fades.",
            "Here's the template:",
          ],
          highlight: '"Write a project close-out report for [project type / audience]. Include: project summary [2–3 sentences], what was accomplished [bullet points of key deliverables], what didn\'t go as planned [honest, specific], lessons learned [what you\'d do differently + what worked well], and next steps or handoff. Tone: factual and constructive."',
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Build your personal report template library.',
          body: [
            "Open <strong>chatgpt.com</strong> and a blank note or doc side by side. Use this prompt to generate templates for your top three report types:",
          ],
          prompt:
            "I want to build a personal AI report template library. Here are the three types of written reports I produce most regularly:\n1. [Report type — e.g., 'weekly status update to my manager']\n2. [Report type — e.g., 'monthly client progress summary']\n3. [Report type — e.g., 'project close-out for internal stakeholders']\n\nFor each one, please create a reusable AI prompt template I can use every time. Include:\n- The report structure (sections to include)\n- Audience and tone guidance\n- [Brackets] for the specific details I fill in each time\n- Target length\n\nMake each template ready to use immediately.",
          body2:
            "Save these templates somewhere one click away — a pinned note, a doc in your work folder, a saved ChatGPT prompt. Add to the library every time you find yourself writing the same type of report twice.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 4 Complete',
          icon: '🎓',
          title: "Reports go from hours to minutes — and stay that way.",
          body: [
            "You have a complete AI reporting system: rough notes become polished drafts, the right structure for every report type is at your fingertips, your voice is preserved in the edit, and a template library makes every recurring report faster than the last.",
            "The next module builds on everything you've learned about AI at work to tackle the other major time drain: repetitive tasks. You'll build workflows and systems that handle them almost automatically.",
          ],
          summaryList: [
            'Most professionals write the same 4–6 report types repeatedly — templates pay off every week',
            'A template is a ready-to-go AI prompt with your structure, tone, and brackets for variable content',
            'Weekly status, client summaries, and project close-outs each have a reliable template pattern',
            'Save templates one click away — friction is the enemy of habits that stick',
          ],
          gradBlock: {
            icon: '📊',
            title: 'Reports Are No Longer a Time Drain',
            body: "You have a complete AI reporting system — from rough notes to polished output, with the right structure for every report type and a template library that improves every time you use it.",
            name: 'Module 4 Complete',
          },
        },
      ],
    },
  ],

  quiz: [
    {
      q: "According to this module, what is the primary bottleneck in writing professional reports?",
      options: [
        "Lack of knowledge about the subject matter",
        "Poor grammar and writing skills",
        "Translating knowledge into structured, polished prose — not the knowledge itself",
        "Not having enough time to research the topic",
      ],
      correct: 2,
      feedback:
        "Most professionals know what they need to say — the bottleneck is translation: turning that knowledge into structured, readable prose. That translation is exactly what AI handles, eliminating the blank page and compressing hours into minutes.",
    },
    {
      q: "When giving AI your notes to draft a report, what level of organization is required?",
      options: [
        "Notes must be in a clean, logical outline before prompting",
        "Notes should be organized by section to match the desired report structure",
        "Almost any rough input works — bullet points, fragments, or unedited notes",
        "Notes must be written in complete sentences for best results",
      ],
      correct: 2,
      feedback:
        "Organizing messy input is one of AI's core strengths. You don't need to organize before you prompt — the dump-and-direct method works with bullet points, rough fragments, voice transcripts, or anything else you have. Clean input is not a prerequisite.",
    },
    {
      q: "What is the recommended two-step approach for producing well-structured reports with AI?",
      options: [
        "Write a full draft first, then ask AI to restructure it",
        "Ask AI to suggest a structure first, confirm it, then ask it to write the report",
        "Prompt for a draft, then ask for a longer version with more detail",
        "Write the first half yourself, then ask AI to complete it",
      ],
      correct: 1,
      feedback:
        "Asking for a structure recommendation before the full draft consistently produces better results. You confirm the structure fits your situation and audience, then AI writes the content around it. This prevents mismatched structure that requires heavy revision.",
    },
    {
      q: "For an executive summary, what should come first?",
      options: [
        "Background and context, so the reader understands the situation",
        "A detailed breakdown of methodology or process",
        "The conclusion or recommendation — bottom line up front",
        "A table of contents so executives can navigate to what they need",
      ],
      correct: 2,
      feedback:
        "Senior leaders don't read reports in order — they read the summary first and decide if they need more. Executive summaries should lead with the conclusion or recommendation, then supporting evidence in order of importance. Burying the point means the point doesn't land.",
    },
    {
      q: "What is the most effective way to make an AI-drafted report sound like it came from you?",
      options: [
        "Rewrite the entire draft from scratch in your own words",
        "Ask AI to try again with a more casual tone",
        "Read it aloud, then add real specifics — numbers, names, context only you would know",
        "Run it through a grammar checker to clean up any errors",
      ],
      correct: 2,
      feedback:
        "The voice check (reading aloud) catches generic or stiff language instantly. The specificity edit — adding real numbers, names, and context only you could provide — is what transforms a competent draft into something that reads like it came from someone who lived the work.",
    },
  ],
}

export default c2module4
