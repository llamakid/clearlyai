import type { CourseData } from './types'

const c4module5: CourseData = {
  moduleId: 23,
  title: 'Your Stories, Your Projects',
  subtitle: 'AI for a Richer Retirement · Module 5',
  nextModuleId: 24,
  lessons: [
    // ─────────────────────────────────────────
    // Lesson 1 — The Memoir You've Been Meaning to Write
    // ─────────────────────────────────────────
    {
      id: 0,
      title: "The Memoir You've Been Meaning to Write",
      meta: '7 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for a Richer Retirement · Lesson 1',
          icon: '📖',
          title: "The Memoir You've Been Meaning to Write",
          body: [
            "By the end of this lesson, you'll know how to use AI to unlock your memories, give your stories some shape, and finally get that memoir — or family history, or collection of letters — out of your head and onto the page.",
          ],
          sub: "Your stories are worth telling. AI helps you find the words.",
        },
        {
          type: 'concept',
          eyebrow: 'Why so many memoirs never get written',
          icon: '⏳',
          title: "You've been meaning to write it for years. Here's why it keeps not happening.",
          body: [
            "It's not laziness. It's not even a lack of stories. The people who say 'I should write my memoir someday' usually have more material than they could fit into three books.",
            "What stops most people is the same thing: they sit down, stare at a blank page, and don't know where to begin. Do you start at the beginning of your life? A single moment? A theme? The scope feels overwhelming, and the blank page offers no help.",
            "AI changes that equation completely. Instead of staring at a blank page, you have a conversation. You answer questions. You tell stories. And slowly, the material appears — organized, shaped, ready to work with.",
          ],
          highlight: "AI doesn't write your memoir. It draws it out of you — one question, one memory at a time.",
        },
        {
          type: 'concept',
          eyebrow: 'What AI actually does',
          icon: '🤝',
          title: "Think of AI as a very patient, very curious interviewer.",
          body: [
            "The best memoirs are built through interviews. A skilled interviewer asks questions you wouldn't think to ask yourself, listens closely, and follows threads that lead somewhere interesting.",
            "AI can play that role. You can describe a decade of your life and ask it what questions it would want answered. You can describe a single memory and ask it to help you see what else is there. You can paste in a rough paragraph you wrote and ask it to help you shape it.",
            "Your voice stays your voice. AI doesn't replace it — it helps you find it. The words on the page are yours. The memories are yours. AI just helps you get them out.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'How to structure a memoir',
          icon: '🗂️',
          title: "A memoir doesn't have to start at birth and end at retirement. Most of the best ones don't.",
          body: [
            "Chronological is one structure — but it often produces the least interesting result. Other approaches work better for most personal histories:",
          ],
          list: {
            items: [
              '<strong>Thematic:</strong> organize by the big themes of your life — work, love, family, loss, adventure — each chapter exploring one thread',
              '<strong>Decade by decade:</strong> a chapter for each ten years, capturing the person you were and what shaped you',
              '<strong>Key moments:</strong> a handful of pivotal scenes, each one fully explored, that together tell the story of a life',
              '<strong>Letters to grandchildren:</strong> informal, warm, personal — stories you want them to know, written to them directly',
              '<strong>A single era:</strong> one period of your life told in full — your childhood, your working years, raising your family',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: 'Prompts that unlock memories',
          icon: '🗝️',
          title: "The right question opens a door you'd forgotten was there.",
          body: [
            "Memory is strange — it doesn't respond well to 'tell me everything.' It responds to specific sensory questions. 'What did the kitchen smell like when you were eight?' 'What was the first thing you bought with your own money?' 'Who was the most interesting person you worked with, and why?'",
            "AI is excellent at generating these kinds of questions. You can tell it a decade of your life in a few sentences and ask it to give you twenty questions designed to unlock the memories from that period. Then you answer them — in writing, into a voice recorder, or just talking to yourself on a walk.",
            "The answers become your material. The questions are just the key.",
          ],
          highlight: "You don't need writing talent. You need your memories. AI helps you find and organize them — you provide the life.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '✍️',
          title: 'Get your first chapter started — today.',
          body: [
            "Open <strong>chatgpt.com</strong> and try this prompt. Pick one era or theme from your life to start with.",
          ],
          prompt:
            "I want to start writing a personal memoir. The era or chapter I want to begin with is [e.g., 'my childhood in the 1950s', 'my years working in the steel mill', 'raising four kids in suburban Ohio', 'my first marriage and what I learned from it']. Please do two things: (1) Give me 15 specific, sensory questions designed to unlock my memories from that period — questions that will pull out details I might not think to include on my own. (2) Suggest two or three possible structures I could use to organize this chapter, given what I've told you.",
          body2:
            "Answer as many of those questions as you like — in the chat, in a separate document, or even spoken aloud into your phone's voice memo app. Don't edit yourself. Just answer. That raw material is your first draft.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: "Your memoir starts with the next question you answer.",
          body: [
            "You don't have to write the whole thing. You don't have to know how it ends, or even how it starts. You just have to answer one question — then another.",
            "In the next lesson, we look at a related project that many people find just as meaningful: tracing your family history and making sure future generations know where they came from.",
          ],
          summaryList: [
            "Blank pages are paralyzing — AI gives you questions to answer instead, which is far easier than writing from nothing",
            "Your voice and your memories are the memoir — AI draws them out and helps you organize them, not replace them",
            "Memoir structure options: thematic, decade-by-decade, key moments, letters to grandchildren, or a single era told in full",
            "Sensory questions ('What did the kitchen smell like?') unlock richer memories than broad ones ('Tell me about your childhood')",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 2 — Genealogy and Family History
    // ─────────────────────────────────────────
    {
      id: 1,
      title: 'Genealogy and Family History',
      meta: '7 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for a Richer Retirement · Lesson 2',
          icon: '🌳',
          title: 'Genealogy and Family History',
          body: [
            "By the end of this lesson, you'll know how to use AI alongside tools like Ancestry.com to research your family tree, make sense of what you find, and write up your family's history in a way that means something to the people who come after you.",
          ],
          sub: "Every family has a story. AI helps you find it — and tell it.",
        },
        {
          type: 'concept',
          eyebrow: 'Why family history matters',
          icon: '❤️',
          title: "The stories your grandchildren will treasure most are the ones you're the only one who can tell.",
          body: [
            "There's a saying among genealogists: when an old person dies, a library burns. The names, the dates, the official records — those can often be found. What can't be found, once the people are gone, are the stories.",
            "Why did your grandfather leave his home country? What was your grandmother like as a young woman? What did your parents sacrifice that they never talked about? What was it like to grow up in a world without television, or without the internet, or during a war?",
            "Family history isn't just names on a chart. It's context. It's character. It's the thread that connects your grandchildren to people they'll never meet — people who shaped them in ways they don't yet know.",
          ],
          highlight: "The official records preserve the facts. Only you can preserve the meaning.",
        },
        {
          type: 'concept',
          eyebrow: 'How AI works alongside Ancestry.com',
          icon: '🔍',
          title: "Tools like Ancestry.com find the records. AI helps you make sense of them.",
          body: [
            "Ancestry.com, FamilySearch, and similar tools are remarkable — they surface census records, ship manifests, military records, and birth certificates that would have taken professional researchers months to find a generation ago.",
            "But raw records aren't a story. A census form shows that your great-grandfather lived in a two-room apartment with seven other people in 1910. AI helps you answer what that actually meant — what was that neighborhood like, what was happening in that city that year, what were the economic conditions that brought immigrants there, what was daily life like in a household that size?",
            "AI takes the facts from the records and adds the context that turns them into a human story.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Organizing what you find',
          icon: '🗂️',
          title: "Family history research can become overwhelming fast. AI helps you organize it.",
          body: [
            "It starts innocently — you look up one great-grandparent and find a ship manifest. That leads to census records. That leads to three other relatives you didn't know about. Suddenly you have dozens of names, dates, and documents with no clear structure.",
            "AI is excellent at helping you build that structure. You can paste in a list of names and dates and relationships and ask it to help you create a family tree narrative, identify gaps in your knowledge, and suggest what to research next.",
            "You can also ask it to help you create something tangible: a family history document organized by generation, a 'who we are' booklet for a family reunion, or a simple timeline from your oldest known ancestor to today.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Interviewing living relatives',
          icon: '🎙️',
          title: "Your living relatives are primary sources. AI helps you interview them well.",
          body: [
            "The most valuable family history material isn't in archives. It's in the memories of elderly relatives who are still living — and who may not be with you much longer.",
            "If you have a parent, aunt, uncle, or older sibling who holds family stories, a recorded conversation with them is irreplaceable. AI can help you prepare the best possible questions for that conversation — questions designed to unlock specific memories, fill known gaps in your family history, and draw out the stories that might not come up otherwise.",
            "After the conversation, AI can help you organize and write up what you learned into a family history entry that preserves the information permanently.",
          ],
          highlight: "The relatives who hold your family's stories are living archives. AI helps you interview them before those archives close.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Start your family history research with a focused AI conversation.',
          body: [
            "Open <strong>chatgpt.com</strong> and use this prompt. It works whether you're just starting or already have research to organize.",
          ],
          prompt:
            "I'm working on my family history and need help with two things. First, here's what I know about my family background: [describe what you know — your grandparents' names and where they came from, any immigration history, major family events, what part of the country or world your family is from]. Based on this, please: (1) suggest 10 specific questions I should research or ask living relatives to fill in the gaps, and (2) explain what historical context would be helpful to understand — what was happening in that region or country or era that would have shaped my family's story. Then, based on what I've told you, help me draft a one-paragraph 'family origin story' I can use as the opening to a written family history.",
          body2:
            "If you have specific records — dates, places, occupations from old documents — paste them in. The more detail you give, the richer the context AI can provide.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: "You're now the family historian — and you have a research partner.",
          body: [
            "Family history research used to require professional genealogists, expensive subscriptions, and weeks of work. Now you can make meaningful progress in an afternoon — and keep building it over time.",
            "In the next lesson, we turn to something equally personal: your hobbies and creative projects, and how AI can make them richer, more interesting, and more productive.",
          ],
          summaryList: [
            "Facts from records become stories with context — AI explains what the records actually meant for the people living through them",
            "AI helps organize raw family history research into structured narratives, timelines, and booklets",
            "Living relatives are primary sources — prepare for those conversations with AI-generated questions while there's still time",
            "The goal isn't a complete academic family tree — it's a human story that future generations can connect to",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 3 — Hobbies and Creative Projects
    // ─────────────────────────────────────────
    {
      id: 2,
      title: 'Hobbies and Creative Projects',
      meta: '7 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for a Richer Retirement · Lesson 3',
          icon: '🎨',
          title: 'Hobbies and Creative Projects',
          body: [
            "By the end of this lesson, you'll see how AI can enhance whatever you love to do — gardening, woodworking, knitting, painting, cooking, or anything else — by acting as an informed, always-available creative advisor and problem-solver.",
          ],
          sub: "Your hobby just got a very well-read assistant.",
        },
        {
          type: 'concept',
          eyebrow: 'AI knows an enormous amount about almost everything',
          icon: '📚',
          title: "Whatever your hobby is, AI has absorbed more information about it than any single expert you could call.",
          body: [
            "Gardening books, woodworking forums, knitting pattern libraries, painting technique manuals, cooking archives from around the world — AI has read essentially all of it, synthesized it, and can discuss it in plain conversational English.",
            "That doesn't make AI smarter than an experienced gardener or woodworker. But it makes it an unusually rich resource for the kinds of questions that come up in the middle of a project: why are my tomato leaves turning yellow, what joint should I use here, how do I fix a dropped stitch, why isn't this glaze behaving the way it should?",
            "Instead of stopping to look something up in a book or waiting for a response on an online forum, you can get a thoughtful answer in seconds — and then ask follow-up questions.",
          ],
          highlight: "AI is like having a knowledgeable friend who has read every book on your hobby and is always available to talk it through.",
        },
        {
          type: 'concept',
          eyebrow: 'Gardening',
          icon: '🌿',
          title: "From plant selection to pest problems to seasonal planning — AI is an excellent garden advisor.",
          body: [
            "Tell AI your hardiness zone, your soil type, how much sun your beds get, and what you've tried before. Then ask it anything: what should I plant next to my roses, why did my basil bolt so early, what cover crop will fix my clay soil, how do I design a perennial border that blooms from April through October?",
            "AI can also help you plan a new garden layout, suggest companion planting combinations, create a seasonal maintenance calendar, and troubleshoot problems you're seeing right now — with the specificity of a master gardener rather than the generic advice of a package insert.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Woodworking, knitting, and crafts',
          icon: '🪵',
          title: "Design help, pattern advice, and problem-solving for any hands-on craft.",
          body: [
            "Woodworkers can describe a project and ask AI to recommend joinery methods, wood species for a specific use, finishing techniques, or how to correct a mistake mid-project. AI can also help you estimate materials or walk you through an unfamiliar technique step by step.",
            "Knitters and crocheters can describe a project and ask AI to suggest stitch patterns, calculate yarn requirements, modify an existing pattern for a different size, or troubleshoot why a piece isn't lying flat.",
            "For any craft — quilting, pottery, leatherwork, jewelry-making — AI can discuss technique, suggest designs, explain historical traditions, and help you find your next challenge.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Cooking and recipes',
          icon: '🍳',
          title: "AI is an exceptional cooking companion — creative, flexible, and endlessly patient.",
          body: [
            "Tell AI what ingredients you have and ask it what to make. Tell it a dish you love and ask it to explain the technique behind it. Ask it to create a variation on a family recipe that accommodates a dietary restriction. Ask it to teach you the classic French mother sauces, or explain why bread dough needs to rest, or suggest a wine pairing for what you're serving.",
            "You can also ask AI to help you write up a family recipe properly — with precise measurements, clear instructions, and the history behind it — so it can be passed down in a form people can actually use.",
          ],
          highlight: "Describe what's in your refrigerator and ask AI what you can make for dinner. It will give you three options with full recipes — a genuinely useful everyday trick.",
        },
        {
          type: 'compare',
          eyebrow: 'The difference AI makes',
          icon: '🔄',
          title: "From waiting for an answer to having a conversation.",
          bad: {
            label: 'Without AI',
            text: "You hit a problem mid-project, flip through books, search online forums, post a question and wait a day for a response, then get generic advice that doesn't quite fit your specific situation.",
          },
          good: {
            label: 'With AI',
            text: "You describe your specific situation — the wood species, the joint angle, the finish you've already applied — and get a specific answer in seconds. Then you ask a follow-up. Then another. The whole conversation takes three minutes.",
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Bring your hobby to AI — see what it knows.',
          body: [
            "Open <strong>chatgpt.com</strong> and pick a project or question from your current hobby. Use this prompt as a starting point.",
          ],
          prompt:
            "I'm an experienced [hobby: e.g., 'home gardener', 'woodworker', 'knitter', 'watercolor painter', 'home cook']. Here's my current project or question: [describe it specifically — e.g., 'I'm building a small side table from oak and I'm not sure whether to use mortise-and-tenon or pocket screws for the leg joints', or 'I'm knitting a sweater for my granddaughter and the pattern calls for size 6 needles but I seem to be knitting too loose', or 'I want to plan a shade garden under my maple tree that blooms in spring and summer']. Please give me specific, practical advice — and ask me any clarifying questions that would help you give me a better answer.",
          body2:
            "Notice that last instruction: ask AI to ask you questions. It often surfaces the details that lead to the most useful advice. Go back and forth a few times — this is a conversation, not a search engine.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: "Your hobby just got deeper, richer, and more fun.",
          body: [
            "Whatever you love to make or grow or build or create, AI can enrich it — not by replacing your skill and judgment, but by adding an endlessly knowledgeable conversation partner who is never too busy to help.",
            "In the next lesson, we look at something even broader: how AI makes learning anything new easier, more fun, and more available than it has ever been before.",
          ],
          summaryList: [
            "AI has absorbed enormous knowledge about virtually every hobby and craft — and can discuss it in plain, conversational language",
            "Use AI for mid-project troubleshooting, design decisions, technique explanations, and finding your next challenge",
            "Cooking with AI: tell it what you have, ask what to make, ask it to explain techniques, or help you write up family recipes properly",
            "AI is a conversation, not a search engine — ask follow-up questions and ask it to ask you questions back",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 4 — Learning Something New Every Day
    // ─────────────────────────────────────────
    {
      id: 3,
      title: 'Learning Something New Every Day',
      meta: '7 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for a Richer Retirement · Lesson 4',
          icon: '🎓',
          title: 'Learning Something New Every Day',
          body: [
            "By the end of this lesson, you'll see how AI can be a patient, infinitely available teacher for anything you've ever wanted to learn — a language, a period of history, a musical instrument, a new cuisine, or anything else that's been on your list.",
          ],
          sub: "Retirement is when you finally have time to be curious. AI is the best learning companion ever built.",
        },
        {
          type: 'concept',
          eyebrow: 'The gift of time',
          icon: '⏰',
          title: "For most of your working life, curiosity ran into a wall: not enough time.",
          body: [
            "You heard an interesting story about ancient Rome and wanted to learn more — but there was a meeting. You heard a piece of music you loved and wondered what instrument that was — but there was dinner to make. You always meant to learn a little Spanish, or French, or Italian — but the days stayed full.",
            "Retirement is when that wall comes down. You have the time. What many retirees find, though, is that they're not sure where to start, or they feel awkward learning in a classroom setting at this stage of life.",
            "AI removes both barriers. It meets you exactly where you are, moves at your pace, and never makes you feel embarrassed about what you don't know. It is the most patient teacher that has ever existed.",
          ],
          highlight: "AI doesn't know what age you are, and it doesn't care. It simply answers whatever you ask, for as long as you want to keep asking.",
        },
        {
          type: 'concept',
          eyebrow: 'Learning a language',
          icon: '🗣️',
          title: "You can have a basic conversation in almost any language in a matter of weeks — with AI as your tutor.",
          body: [
            "Tell AI which language you want to learn and why — 'I'm traveling to Italy in the spring' or 'my grandchildren speak Spanish at home and I want to understand them.' It will build a learning path matched to your goal.",
            "You can practice vocabulary, learn grammar in the context of real sentences rather than rules, work through common travel phrases, or ask it to conduct a simple practice conversation with you — gently correcting your mistakes as you go.",
            "This is nothing like high school language class. You learn what you need, when you need it, at a pace you control. No tests. No embarrassment. Just progress.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'History, science, music, and more',
          icon: '🏛️',
          title: "Any subject you've ever been curious about is now available for a deep, personal conversation.",
          body: [
            "Interested in the American Civil War? Ask AI to explain a specific battle, a specific general, the economic causes, the experience of ordinary soldiers, or how historians have reinterpreted the era over time — and ask follow-up questions as long as you like.",
            "Curious about how vaccines work, or why the sky is blue, or how a symphony is structured? AI explains these things in plain language, adjusts to how deep you want to go, and never makes you feel like the question was silly.",
            "Interested in birds? Jazz? Architecture? The history of your city? Ancient mythology? Chess? You name it — AI will be a better teacher for that subject than most textbooks, because it talks back.",
          ],
          highlight: "There are no dumb questions in a conversation with AI. Every question is an invitation for a real answer — and a follow-up conversation.",
        },
        {
          type: 'concept',
          eyebrow: 'The technique that works best',
          icon: '💡',
          title: "Don't just read the answer. Ask questions about the answer.",
          body: [
            "The most effective way to learn with AI is to treat it like a real conversation with a knowledgeable friend. Ask a question — then react to the answer. 'That's interesting, I didn't know that. Why did that happen?' 'Wait, can you explain that part about X in a different way?' 'How does that connect to what you said earlier about Y?'",
            "This back-and-forth is how deep understanding forms. It's very different from reading a book or watching a video, where the material is fixed and you're a passive recipient. With AI, you direct the learning — toward the parts that interest you, at the pace that works for you.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Building a daily learning habit',
          icon: '📅',
          title: "Twenty minutes a day, consistently, changes what you know over a year.",
          body: [
            "You don't need to block out an afternoon. Twenty minutes with AI over morning coffee — asking questions about something you're curious about — adds up to over 120 hours of learning in a year. That's enough to build a real working knowledge of almost any subject.",
            "Some people give themselves a 'daily topic' — one question to explore each morning. Others follow a thread: they learned about the Renaissance last week, so this week they're learning about the artists who defined it. Others just follow their curiosity wherever it leads.",
            "There's no wrong way. The only requirement is curiosity — and you already have that.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Start learning something you\'ve always wanted to know.',
          body: [
            "Open <strong>chatgpt.com</strong> and pick one topic you've been genuinely curious about — something you've always meant to learn more about but never made time for.",
          ],
          prompt:
            "I've always been curious about [topic — e.g., 'the history of the Roman Empire', 'how to speak basic Italian', 'how jazz developed in New Orleans', 'why the stock market works the way it does', 'the basics of how the human immune system functions']. I'm not looking for a textbook — I want to actually understand it in a way that sticks. Can you start me off with the most important things to understand about this topic, and then tell me what you'd teach me next if I want to go deeper? Explain it like you're talking to a curious, intelligent person who's just never had time to learn this before.",
          body2:
            "After reading the answer, react to it. Ask a follow-up question about whatever surprised you or interested you most. Notice how the conversation deepens when you engage with what you're learning.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: "You're a lifelong learner. You always have been. Now you have the right tool.",
          body: [
            "The curiosity that carried you through a career, through raising a family, through a full life — it doesn't retire. And now it has the most capable learning companion ever built, available any time you have a question.",
            "In the final lesson of this module, we look at something that ties all of it together: sharing what you know with the people and communities around you.",
          ],
          summaryList: [
            "AI is the most patient teacher ever built — it meets you where you are, moves at your pace, and never makes you feel embarrassed",
            "Languages, history, science, music, cooking, chess — any subject is available for a real, conversational deep dive",
            "Don't just read the answer — ask questions about the answer. That back-and-forth is how understanding forms",
            "Twenty minutes a day adds up to 120+ hours of learning in a year — enough to genuinely know a subject",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 5 — Sharing What You Know
    // ─────────────────────────────────────────
    {
      id: 4,
      title: 'Sharing What You Know',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for a Richer Retirement · Lesson 5',
          icon: '🌟',
          title: 'Sharing What You Know',
          body: [
            "By the end of this lesson, you'll have concrete ways to share your experience and wisdom with the people around you — through writing, mentoring, guides, and community — and you'll know how AI can help you do it in ways that actually reach people.",
          ],
          sub: "You've spent a lifetime building knowledge. This is how you pass it forward.",
        },
        {
          type: 'concept',
          eyebrow: 'What you know that others don\'t',
          icon: '💎',
          title: "You have knowledge that took decades to build. That knowledge is genuinely rare.",
          body: [
            "There's a paradox in our culture: we've built an extraordinary archive of information on the internet — but much of the most valuable knowledge that exists isn't written down anywhere. It lives in people.",
            "It lives in the retired nurse who knows how to talk to frightened patients. In the former teacher who learned which approaches reach struggling students and which make things worse. In the grandmother who successfully raised four children and is now watching her daughter make the same avoidable mistakes she made. In the retired contractor who knows which shortcuts are acceptable and which ones will cause problems in twenty years.",
            "This is expertise that cannot be Googled. It can only be shared by someone who has it.",
          ],
          highlight: "You've spent a lifetime making mistakes, recovering from them, and figuring out what actually works. That is exactly the knowledge the next generation needs most.",
        },
        {
          type: 'concept',
          eyebrow: 'Writing a how-to guide',
          icon: '📋',
          title: "Putting what you know in writing makes it available to far more people than you can reach in person.",
          body: [
            "Think about the things you know how to do well — not theoretically, but practically, from years of doing. How to negotiate a salary. How to manage a difficult employee. How to comfort someone who's grieving. How to plan a vegetable garden in your climate. How to cook a Thanksgiving dinner for twenty people without losing your mind.",
            "Any one of those could be a guide that genuinely helps people. Not a polished book — a simple, honest document. 'Here's what I know about this, and here's what I wish someone had told me.'",
            "AI can help you draft it, organize it, tighten the language, and turn something rough into something readable — without losing your voice or your perspective.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Mentoring and advising',
          icon: '🤝',
          title: "The most direct form of knowledge transfer: spending time with someone who wants what you know.",
          body: [
            "Mentoring doesn't require an official program or a formal relationship. It can be as simple as making yourself available to a younger person in your field or community who would benefit from your perspective.",
            "AI can help you prepare for those conversations — helping you think through what you know that's most valuable to share, how to structure a conversation, and how to ask the kinds of questions that help a mentee think rather than just giving them your answers.",
            "It can also help you capture what you've shared — turning the notes from a mentoring conversation into a resource the mentee can reference later, or a piece of writing you can share more broadly.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Writing letters to grandchildren',
          icon: '✉️',
          title: "A letter they'll read at 30 — when they need it most.",
          body: [
            "There's a tradition, older than the internet, of older generations writing letters to younger ones — letters meant to be read not now, but later, when the reader is old enough to understand them.",
            "A letter to a grandchild at 30. A letter to be opened on their wedding day. A letter to be read if you're no longer there when they face a hard decision.",
            "These letters don't require beautiful prose. They require honesty, love, and the willingness to share what you've actually learned — not the sanitized version, but the real one. AI can help you find the right words for things that are hard to say, and make sure the letter says what you actually mean.",
          ],
          highlight: "A letter written to a grandchild today may be the most meaningful thing you leave them. AI helps you write it while you have the time and the clarity.",
        },
        {
          type: 'concept',
          eyebrow: 'Community and legacy',
          icon: '🏘️',
          title: "Sharing doesn't have to be personal. It can be for a community — or for history.",
          body: [
            "Local historical societies, community organizations, churches, schools, and libraries are often hungry for people willing to share their experience and perspective. A talk at the library about what your town was like fifty years ago. A written history of a local organization you were part of. A collection of recipes from a community cookbook.",
            "AI can help you prepare presentations, write up local histories, contribute to community archives, and put your knowledge into a form that organizations can actually use.",
            "Legacy isn't about fame. It's about the specific, irreplaceable things you know being available to the people who come after you — in whatever form reaches them.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Write the guide only you can write.',
          body: [
            "Open <strong>chatgpt.com</strong> and think of one thing you know how to do — or navigate — that you wish someone had explained to you at the right time.",
          ],
          prompt:
            "I want to write a practical guide based on something I know well from years of experience. The topic is: [e.g., 'how to manage a team of people who don't always get along', 'how to plan and cook a large holiday meal without stress', 'how to talk to a doctor and actually get answers', 'how to handle a difficult neighbor without making it worse', 'what I wish someone had told me about retirement in the first year']. Please help me: (1) organize the most important things I should cover — based on what you know about this topic and what people most commonly struggle with, (2) suggest a simple structure for a 2–4 page guide, and (3) draft a short opening paragraph in a warm, direct, first-person voice — as if I'm talking to a friend who needs this information.",
          body2:
            "After the draft, read it and tell AI what sounds right and what doesn't sound like you. It will adjust. Two or three rounds of that conversation and you'll have something genuinely worth sharing.",
        },
        {
          type: 'concept',
          eyebrow: 'The module in full',
          icon: '🗺️',
          title: "Five lessons. Five ways to make your retirement richer.",
          body: ["Here's what you've built in this module:"],
          list: {
            items: [
              '<strong>Memoir writing:</strong> AI draws out your memories with questions and helps you shape them into stories worth reading',
              '<strong>Family history:</strong> AI adds context to records, helps you organize what you find, and prepares you to interview living relatives',
              '<strong>Hobbies and projects:</strong> AI is a knowledgeable advisor for any craft — troubleshooting, design help, and creative suggestions',
              '<strong>Lifelong learning:</strong> AI is a patient, endlessly available teacher for any subject, at any pace',
              '<strong>Sharing what you know:</strong> AI helps you put your knowledge and experience into forms that can reach and help other people',
            ],
          },
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 5 Complete',
          icon: '🎓',
          title: "This is what retirement is for.",
          body: [
            "The stories. The projects. The things you've always meant to do. The knowledge that deserves to be passed forward. All of it is more available to you now than at any previous point in history — because you have a tool that makes it easier to start, easier to continue, and easier to share.",
            "You've spent a lifetime accumulating experience, perspective, and wisdom. This module was about putting all of it to work.",
          ],
          summaryList: [
            "You have knowledge that took decades to build and that cannot be found anywhere else — that makes it genuinely worth sharing",
            "Writing guides, letters, and local histories puts your experience in a form that outlasts you and reaches more people",
            "AI helps you find the words for things that are hard to say — without replacing your voice or your perspective",
            "Legacy isn't about fame — it's about what you know being available to the people who come after you",
          ],
          gradBlock: {
            icon: '🌟',
            title: 'Your Stories Matter. Your Projects Are Worth Starting.',
            body: "You've always had the stories, the skills, the knowledge, and the curiosity. Now you have a tool that helps you do something with all of it. Write the memoir. Research the family tree. Deepen the hobby. Learn the language. Share what you know. Retirement isn't the end of a productive life — it's when the most personal and meaningful work finally gets the time it deserves.",
            name: 'Module 5 Complete',
          },
        },
      ],
    },
  ],

  quiz: [
    {
      q: "What is the best way to use AI when starting a memoir or personal history project?",
      options: [
        "Ask AI to write your memoir for you based on a summary of your life",
        "Use AI to answer specific sensory questions about your memories, which become your raw material",
        "Have AI choose the structure of your memoir and then fill it in",
        "Ask AI to find information about the era you grew up in and use that as your memoir",
      ],
      correct: 1,
      feedback:
        "The most effective approach is to use AI as an interviewer — it asks specific, sensory questions ('What did the kitchen smell like when you were eight?') and you answer them. Your answers become the raw material for your memoir. AI draws the memories out of you; your voice and your memories are the memoir itself. AI never writes it for you — it helps you find what's already there.",
    },
    {
      q: "When researching family history, what is the most valuable thing AI adds that tools like Ancestry.com don't provide on their own?",
      options: [
        "Access to more historical records and databases",
        "The ability to automatically build a family tree from your information",
        "Context that turns raw records into human stories — explaining what those facts actually meant for the people living them",
        "Connections to other family historians who may share your ancestry",
      ],
      correct: 2,
      feedback:
        "Ancestry.com and similar tools are excellent at finding records — census data, ship manifests, military records. What they don't provide is context. AI can explain what it actually meant to live in a two-room apartment with seven people in 1910, what was happening in the neighborhood, what conditions drove immigration, and what daily life was like. Context is what transforms a fact into a story — and a story is what future generations will actually connect to.",
    },
    {
      q: "Which approach makes the best use of AI as a learning tool?",
      options: [
        "Reading AI's answers carefully and moving on to the next topic once you understand them",
        "Asking AI to give you a complete overview of a subject all at once so you can absorb it efficiently",
        "Asking questions about the answer you just received — reacting, following threads, and going deeper into what interests you most",
        "Using AI to generate a study schedule and following it strictly",
      ],
      correct: 2,
      feedback:
        "AI is a conversation, not a textbook. The most effective learning happens when you engage with the answers you receive — asking follow-up questions about what surprised you, asking for a different explanation of something that wasn't clear, following the thread that interests you most. This back-and-forth is how deep understanding forms. Twenty minutes of real conversation produces far more lasting knowledge than an hour of passively reading long answers.",
    },
  ],
}

export default c4module5
