import type { CourseData } from './types'

const c4module1: CourseData = {
  moduleId: 19,
  title: 'Your New Digital Assistant',
  subtitle: 'AI for a Richer Retirement · Module 1',
  nextModuleId: 20,
  lessons: [
    // ─────────────────────────────────────────
    // Lesson 1 — What AI Actually Is
    // ─────────────────────────────────────────
    {
      id: 0,
      title: 'What AI Actually Is',
      meta: '7 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for a Richer Retirement · Lesson 1',
          icon: '🌅',
          title: 'What AI Actually Is',
          body: [
            "By the end of this lesson, you'll know exactly what AI is — in plain English — and why it's genuinely useful for your life right now.",
          ],
          sub: "No technical background needed. If you can have a conversation, you can use AI.",
        },
        {
          type: 'concept',
          eyebrow: "Let's start here",
          icon: '📺',
          title: "You've heard the word everywhere. Here's what it actually means.",
          body: [
            "AI — artificial intelligence — is everywhere in the news. It sounds complicated. Sometimes it sounds a little scary.",
            "But the version of AI you're going to use? It's far simpler than the headlines suggest. It's a tool you talk to. You type something, it responds. That's the whole idea.",
            "You've spent decades learning how to learn. This is just one more skill — and it's one of the most useful ones available to you right now.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'The clearest way to think about it',
          icon: '📚',
          title: 'Imagine someone who has read almost everything ever written.',
          body: [
            "Picture a knowledgeable friend who has read millions of books, articles, recipes, travel guides, health summaries, and how-to instructions. Across almost every topic imaginable.",
            "You can ask them anything — in plain, natural language — and they'll give you a thoughtful response in seconds. That's what modern AI is.",
            "It's not a robot. It's not magic. It's a text-based assistant you talk to like you'd talk to a helpful person.",
          ],
          highlight: "You don't need to understand how it works under the hood — any more than you need to understand how your car engine works to drive it.",
        },
        {
          type: 'concept',
          eyebrow: "What it is — and isn't",
          icon: '✅',
          title: "Let's clear up a few things right away.",
          body: [
            "AI is not a robot with a personality. It doesn't have feelings, opinions, or ambitions. It's software — sophisticated software — that understands plain English and gives helpful responses.",
            "It's not spying on you, it's not trying to replace your doctor or your family, and it's not going to do anything without you asking it to.",
          ],
          list: {
            items: [
              'A tool — one you control completely',
              'Available 24 hours a day, completely free to start',
              'Patient — it never gets frustrated, no matter how many times you ask',
              'Private — your conversations are kept between you and the tool',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: 'The things it can help you with',
          icon: '🌟',
          title: "Here's what people your age are actually using AI for.",
          body: [
            "Once you spend a few minutes with it, you'll find AI genuinely useful for everyday things.",
          ],
          list: {
            items: [
              'Writing cards, letters, emails, and messages when the words don\'t come easily',
              'Understanding medical information your doctor mentioned',
              'Planning trips — what to see, where to stay, how to get around',
              'Getting simple explanations of Medicare, Social Security, or financial decisions',
              'Finding recipes based on what you have on hand',
              'Keeping your mind sharp with interesting conversations and learning',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: 'One thing to keep in mind',
          icon: '⚠️',
          title: "AI is helpful — and it occasionally gets things wrong.",
          body: [
            "Like any tool, AI isn't perfect. It can sometimes give you an answer that sounds right but isn't quite accurate — especially for specific facts, dates, or medical and legal advice.",
            "Think of it the way you'd think of a very well-read friend: great for general knowledge and getting started, but not a substitute for your doctor, your financial advisor, or your own good judgment.",
            "You'll always be the one deciding what to do with what it tells you. That stays completely in your hands.",
          ],
          highlight: "AI is a starting point, not a final word. Your judgment and experience always matter more.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: "Here's what you just learned.",
          summaryList: [
            "AI is a text-based assistant you talk to in plain, natural English.",
            "Think of it as a knowledgeable friend who has read almost everything — and responds in seconds.",
            "It's a tool you control: patient, available anytime, and free to start.",
            "It's genuinely helpful for everyday life — and you stay in charge of every decision.",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 2 — Your First Conversation with AI
    // ─────────────────────────────────────────
    {
      id: 1,
      title: 'Your First Conversation with AI',
      meta: '7 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for a Richer Retirement · Lesson 2',
          icon: '💬',
          title: 'Your First Conversation with AI',
          body: [
            "By the end of this lesson, you'll know exactly how to start a conversation with an AI assistant — no special commands, no technical knowledge, just natural language.",
          ],
          sub: "If you can send a text message or write an email, you already have everything you need.",
        },
        {
          type: 'concept',
          eyebrow: 'The most important thing to know',
          icon: '🗣️',
          title: "You talk to AI the same way you'd talk to a helpful person.",
          body: [
            "There are no special commands. No codes to memorize. No right or wrong way to phrase things.",
            "You type what's on your mind — in your own words, at your own pace — and AI responds. That's it.",
            "People often expect it to be like using a complicated computer program. It's not. It's much more like having a conversation.",
          ],
          highlight: "The more naturally you talk to it, the better the results you'll get. Plain English works perfectly.",
        },
        {
          type: 'concept',
          eyebrow: 'What a conversation looks like',
          icon: '📝',
          title: "Here's a real example of how this works.",
          body: [
            "Say you want to write a birthday card message for your granddaughter who just turned 16. You might type:",
            "<em>\"I need to write something heartfelt in a birthday card for my 16-year-old granddaughter. She loves music and is about to start driving. Can you help me write a few sentences?\"</em>",
            "And AI will give you two or three options — warm, personal, ready to write in a card. You pick the one that feels right, change a word or two if you like, and you're done.",
          ],
        },
        {
          type: 'compare',
          eyebrow: 'See the difference',
          icon: '🔄',
          title: 'You can be brief or detailed — both work.',
          bad: {
            label: 'Brief is fine',
            text: "Help me write a birthday message for my granddaughter.",
          },
          good: {
            label: 'More detail gets a better result',
            text: "Help me write a birthday card message for my granddaughter Emma, who just turned 16. She loves playing guitar and is learning to drive. I want it to be warm and a little funny — not too serious.",
          },
        },
        {
          type: 'concept',
          eyebrow: "Something that surprises most people",
          icon: '🔄',
          title: "You can go back and forth — just like a real conversation.",
          body: [
            "If the first response isn't quite what you were looking for, you don't have to start over. Just tell it what you'd like changed.",
            "You can say: <em>\"That's nice, but can you make it a little shorter?\"</em> Or: <em>\"I like the first option — can you make it a bit more personal?\"</em>",
            "AI doesn't get frustrated. It doesn't take offense. It simply keeps helping until you're happy with the result. Most people find this part genuinely surprising — it's a real back-and-forth.",
          ],
          highlight: "The first response is just the beginning. The conversation is how you get to exactly what you want.",
        },
        {
          type: 'concept',
          eyebrow: 'A few things worth knowing',
          icon: '💡',
          title: "Small tips that make your first conversations easier.",
          body: [
            "<strong>Start fresh whenever you want.</strong> Each new chat starts with a clean slate. Your previous conversations don't carry over unless you're in the same chat window.",
            "<strong>You can ask it to explain itself.</strong> If a response uses a word you don't know or an idea that needs more explanation, just say: <em>\"Can you explain that more simply?\"</em>",
            "<strong>There are no wrong questions.</strong> AI won't judge you for not knowing something. Ask anything — that's what it's there for.",
          ],
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: "Here's what you just learned.",
          summaryList: [
            "You talk to AI in plain, natural English — no special commands needed.",
            "More detail in your message gets you a more useful, specific response.",
            "You can go back and forth to refine the answer — just like a real conversation.",
            "There are no wrong questions. AI is patient, and you're always in charge.",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 3 — Getting Genuinely Useful Answers
    // ─────────────────────────────────────────
    {
      id: 2,
      title: 'Getting Genuinely Useful Answers',
      meta: '7 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for a Richer Retirement · Lesson 3',
          icon: '🎯',
          title: 'Getting Genuinely Useful Answers',
          body: [
            "By the end of this lesson, you'll know a simple approach to asking AI questions that gets you specific, practical, genuinely helpful responses every time.",
          ],
          sub: "It's not about using the right words. It's about giving a little context.",
        },
        {
          type: 'concept',
          eyebrow: 'The key insight',
          icon: '💡',
          title: "AI gives you back what you give it.",
          body: [
            "If you ask a broad question, you get a broad answer. If you share a little context about your situation, you get an answer tailored to you.",
            "Think about how this works with people, too. If you called a friend and said <em>\"Any restaurant recommendations?\"</em> — you'd get a generic list. But if you said <em>\"We want somewhere quiet, not too expensive, near the park, good for a birthday dinner\"</em> — suddenly you get genuinely useful suggestions.",
            "AI works exactly the same way. Context is everything.",
          ],
          highlight: "You don't need to be technical. You just need to share a little about what you're actually looking for.",
        },
        {
          type: 'concept',
          eyebrow: 'A simple approach that always works',
          icon: '🧮',
          title: "Three things to include when you want a great answer.",
          body: [
            "<strong>Who you are or your situation</strong> — just a sentence. <em>\"I'm a 68-year-old retired teacher...\"</em>",
            "<strong>What you want</strong> — be specific about the actual task. <em>\"...and I'm trying to understand the difference between Medicare Part A and Part B.\"</em>",
            "<strong>How you'd like it delivered</strong> — <em>\"Can you explain it simply, in plain language, without medical jargon?\"</em>",
            "You don't need all three every time. But adding even one of these makes a real difference.",
          ],
        },
        {
          type: 'compare',
          eyebrow: 'See it in action',
          icon: '📊',
          title: 'The same question — very different results.',
          bad: {
            label: 'Vague',
            text: "Tell me about Medicare.",
          },
          good: {
            label: 'With context',
            text: "I'm turning 65 next year and I'm confused about Medicare. I currently have insurance through my husband's employer. Can you explain in plain English what I need to do, when I need to do it, and whether I should sign up for Medicare now or wait?",
          },
        },
        {
          type: 'concept',
          eyebrow: 'A technique that works every time',
          icon: '🎭',
          title: 'You can ask AI to play a role.',
          body: [
            "One of the most useful things you can do is tell AI to respond as if it were a specific kind of expert — then ask your question.",
            "Try things like:",
            "<em>\"Explain this like you're a patient pharmacist talking to someone who isn't a doctor.\"</em>",
            "<em>\"Respond the way a friendly travel agent would — give me practical suggestions, not a long list of options.\"</em>",
            "This framing helps AI adjust its tone, simplify its language, and focus on what's actually useful to you.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'When the first answer misses',
          icon: '🔄',
          title: "Ask it to try again — or go in a different direction.",
          body: [
            "If an answer isn't quite right, you have several easy options.",
            "<strong>\"Can you simplify that?\"</strong> — if it's using language that's too technical.",
            "<strong>\"That's helpful, but can you focus more on [specific part]?\"</strong> — to narrow in.",
            "<strong>\"Can you give me a real-life example?\"</strong> — if the explanation feels abstract.",
            "Every one of these steers the conversation closer to what you actually need. The back-and-forth is part of the process — not a sign something went wrong.",
          ],
          highlight: "Asking for a clearer explanation is a skill, not a failure. The best AI users do it all the time.",
        },
        {
          type: 'concept',
          eyebrow: 'A few prompts to keep in your back pocket',
          icon: '📋',
          title: "Phrases that make almost any conversation better.",
          body: [
            "These work in almost any situation and will become second nature quickly:",
          ],
          list: {
            items: [
              '"Can you explain that in simpler language?"',
              '"Give me a specific example I can picture."',
              '"What\'s the most important thing to know about this?"',
              '"I\'m not a professional — what does that actually mean for me?"',
              '"What questions should I be asking about this that I haven\'t thought of yet?"',
            ],
          },
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: "Here's what you just learned.",
          summaryList: [
            "Adding context — who you are and what you need — gets you answers tailored to you.",
            "Three helpful pieces: your situation, what you want, and how you'd like it delivered.",
            "Asking AI to take on a role (like a patient pharmacist) sharpens its responses.",
            "If the answer misses, guide it — a simple follow-up gets you much closer.",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 4 — What AI Can and Can't Do
    // ─────────────────────────────────────────
    {
      id: 3,
      title: "What AI Can and Can't Do",
      meta: '7 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for a Richer Retirement · Lesson 4',
          icon: '⚖️',
          title: "What AI Can and Can't Do",
          body: [
            "By the end of this lesson, you'll have an honest, grounded understanding of where AI genuinely helps — and where you should rely on your own judgment and real professionals.",
          ],
          sub: "Knowing the limits is what makes you a confident, careful user.",
        },
        {
          type: 'concept',
          eyebrow: 'Start with the good news',
          icon: '🌟',
          title: "AI is genuinely excellent at a wide range of everyday tasks.",
          body: [
            "The things AI does well are things that come up in real life all the time — and where it can save you time, reduce stress, and make things easier.",
          ],
          list: {
            items: [
              'Writing and editing — letters, emails, cards, messages of any kind',
              'Explaining things in plain language — medical terms, legal language, financial concepts',
              'Planning — trips, events, meals, schedules',
              'Brainstorming — gift ideas, things to do in a new city, options you might not have thought of',
              'Summarizing — long articles, documents, or complicated information into simple key points',
              'Answering general questions — history, how things work, what something means',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: 'The important limits',
          icon: '⚠️',
          title: "Here's where AI isn't the right tool.",
          body: [
            "Knowing what AI can't do isn't a reason to avoid it — it's what makes you a smart, safe user.",
          ],
          list: {
            items: [
              "It can't replace your doctor — always verify medical information with a real physician",
              "It doesn't know your specific legal situation — a real attorney is irreplaceable for legal advice",
              "It can get facts wrong — confidently — especially specific statistics, dates, or names",
              "It doesn't know what happened very recently — its knowledge has a cutoff date",
              "It doesn't know you personally unless you tell it about yourself in the conversation",
            ],
            negative: true,
          },
        },
        {
          type: 'concept',
          eyebrow: 'The thing worth understanding',
          icon: '🎭',
          title: "AI sometimes sounds very sure — even when it's not.",
          body: [
            "This is the most important thing to know: AI will give you an answer in a calm, confident voice even if the answer isn't quite right. It doesn't know what it doesn't know.",
            "This is called a hallucination — when AI states something that sounds completely reasonable but isn't accurate.",
            "It's not trying to mislead you. It's just the nature of how the technology works.",
          ],
          highlight: "For any important decision — health, money, legal matters — AI is a starting point for understanding, not a final answer.",
        },
        {
          type: 'compare',
          eyebrow: 'A helpful way to think about it',
          icon: '🤝',
          title: "AI is like a very well-read friend — not a licensed professional.",
          bad: {
            label: "Don't use AI for",
            text: "Final decisions about medication, legal documents, tax filings, or major financial moves — always confirm these with a real professional who knows your specific situation.",
          },
          good: {
            label: 'AI is great for',
            text: "Understanding what a term means, preparing questions to ask your doctor, getting a first draft of a letter, learning about a topic, comparing options, or getting ideas to research further.",
          },
        },
        {
          type: 'concept',
          eyebrow: 'Protecting yourself',
          icon: '🔒',
          title: "A few things to never share with AI.",
          body: [
            "AI tools are generally safe and private for everyday use. But there are a few things worth keeping to yourself, just as you would with any online tool.",
          ],
          list: {
            items: [
              'Social Security numbers or Medicare ID numbers',
              'Bank account or credit card numbers',
              'Passwords or security questions',
              'Your full home address combined with your daily schedule',
            ],
            negative: true,
          },
        },
        {
          type: 'concept',
          eyebrow: 'The right frame of mind',
          icon: '🌱',
          title: "Curious, careful, and always in charge.",
          body: [
            "The best way to use AI is with the same thoughtful judgment you bring to any tool or piece of advice.",
            "Be curious — explore, ask questions, try things. There's no way to break it.",
            "Be careful — verify anything important, especially health or financial information.",
            "Stay in charge — AI helps you think through things. You make the decisions.",
          ],
          highlight: "You've made good decisions for decades. AI is just another resource in your toolkit — a very useful one, when you know its limits.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: "Here's what you just learned.",
          summaryList: [
            "AI is excellent for writing, explaining, planning, summarizing, and brainstorming.",
            "It's not a substitute for your doctor, lawyer, or financial advisor on important decisions.",
            "It can sound confident even when it's wrong — verify important facts before acting.",
            "For everyday personal safety, never share sensitive numbers or passwords with any online tool.",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 5 — Making It Part of Your Day
    // ─────────────────────────────────────────
    {
      id: 4,
      title: 'Making It Part of Your Day',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for a Richer Retirement · Lesson 5',
          icon: '☀️',
          title: 'Making It Part of Your Day',
          body: [
            "By the end of this lesson, you'll have simple, realistic habits for weaving AI into your daily life — and you'll feel confident making it a natural part of how you do things.",
          ],
          sub: "You don't need to use AI all day. You just need a few good starting points.",
        },
        {
          type: 'concept',
          eyebrow: 'How this really works',
          icon: '🌱',
          title: "Confidence comes from small wins — not big commitments.",
          body: [
            "The people who get the most out of AI didn't sit down one day and decide to change everything at once. They tried it for one small thing. It worked. They tried something else.",
            "Over a few weeks, it just became a natural part of how they do things — like how using a microwave eventually became second nature even if it felt unnecessary at first.",
            "You're not being asked to overhaul anything. You're being asked to try one small thing, see that it helps, and let that be enough for now.",
          ],
          highlight: "One small win today builds into a natural habit by next month. That's all it takes.",
        },
        {
          type: 'concept',
          eyebrow: 'The easiest way to start',
          icon: '📝',
          title: "Reach for AI the next time writing feels hard.",
          body: [
            "Writing is where most people get the most immediate value — and the place where AI reliably saves time and reduces stress.",
            "The next time you're staring at a blank card, a note you need to send, a letter you've been putting off, or an email you're not sure how to word — try AI first.",
            "Describe what you're trying to say in a few sentences. Let it give you a draft. Edit it in your own voice. You'll be done in minutes instead of hours.",
          ],
          list: {
            items: [
              'A sympathy card for a neighbor who lost their spouse',
              'A thank-you note to a doctor who gave exceptional care',
              'A message to a grandchild heading off to college',
              'A letter disputing a billing error with an insurance company',
              'A note to reconnect with an old friend you\'ve been meaning to reach out to',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: 'A few other natural starting points',
          icon: '🗺️',
          title: "Moments in everyday life where AI fits right in.",
          body: [
            "Beyond writing, here are simple situations where reaching for AI becomes second nature quickly.",
          ],
          list: {
            items: [
              'Planning a trip — ask for itinerary ideas, things to know, what to pack for the weather',
              'Understanding something your doctor said — get a plain-English explanation before your next visit',
              'Finding a recipe using ingredients you already have',
              'Getting a simple explanation of something you read in the news',
              'Preparing questions before an important appointment',
              'Brainstorming gift ideas for someone with particular interests',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: 'A simple daily rhythm',
          icon: '🕐',
          title: "You don't need a lot of time. A few minutes is plenty.",
          body: [
            "Some people find it helpful to open AI the same way they open the morning news — just as part of their routine. Others reach for it only when a specific need comes up. Both approaches work well.",
            "If you want a light daily habit to build on, try this: once a day, ask AI something you're curious about — a word you heard, a place you've been reading about, how something works. Not because you need to, but just to stay comfortable with the tool.",
            "Curiosity is the best way to build any new skill. And it's genuinely enjoyable.",
          ],
          highlight: "The goal isn't to use AI more. It's to use it well — so that when you need it, it's already familiar.",
        },
        {
          type: 'concept',
          eyebrow: 'When you get stuck',
          icon: '🤝',
          title: "It's okay not to know what to ask. Start there.",
          body: [
            "Sometimes the hardest part is knowing where to begin. If that happens, just tell AI exactly that.",
            "Type: <em>\"I'm not sure how to ask this, but I'm trying to figure out...\"</em> and then describe the situation in your own words, however messily.",
            "AI is very good at working with incomplete or uncertain questions. It will ask follow-up questions, make helpful suggestions, or clarify what it needs to give you a useful response.",
            "You can also simply say: <em>\"What are some things I could use you for today?\"</em> and see what it suggests.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Your very first AI conversation.',
          body: [
            "Open <strong>chatgpt.com</strong> in a new browser tab. You'll need to create a free account — it takes about 2 minutes. See the setup guide below.",
            "Once you're in, try this first message. It's designed to feel like a real conversation from the very first word.",
          ],
          prompt: "Hello! I'm new to AI and just learning how this works. I'm retired and looking for ways AI could make my life a little easier or more enjoyable. Can you ask me a few questions to learn a bit about me and my interests, and then suggest two or three things I might find genuinely useful?",
          body2: "Take your time reading what comes back. Answer its questions. Let the conversation unfold. You're not being tested — you're just having a conversation. That's really all this is.",
          setupGuide: true,
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 1 Complete',
          icon: '🎓',
          title: "Look how far you've come.",
          body: [
            "You came into this module not knowing quite what AI was. You're leaving with a clear picture of what it is, how to talk to it, how to get the most from it, and how to weave it into your life in a way that feels natural.",
            "The next module builds on exactly this foundation — with specific, practical ways to use AI for the things that matter most in this chapter of your life.",
          ],
          summaryList: [
            "AI is a text-based assistant you talk to in plain English — no technical skill required.",
            "The more context you share, the more useful and personal the responses become.",
            "It works best as a conversation — go back and forth until you have exactly what you need.",
            "It can get things wrong, so verify anything important with a real professional.",
            "Small daily habits build into genuine confidence — start with one thing, let it grow.",
          ],
          gradBlock: {
            icon: '🌅',
            title: 'Your Digital Assistant Is Ready',
            body: "You understand what AI is, how to talk to it, how to get useful answers, where its limits are, and how to make it part of your day. Everything ahead in this course builds on what you've just learned.",
            name: 'Module 1 Complete',
          },
        },
      ],
    },
  ],

  quiz: [
    {
      q: 'What is the best way to get a useful answer from AI?',
      options: [
        'Use short, technical commands',
        'Describe what you need in plain, natural language with a little context about your situation',
        'Only ask yes-or-no questions',
        'Always use very formal language',
      ],
      correct: 1,
      feedback: "AI is designed to understand natural conversation. The more context and detail you give it — who you are, what you need, how you'd like it delivered — the more useful and specific its response will be.",
    },
    {
      q: 'When AI gives you information about a health or financial question, what should you do?',
      options: [
        'Trust it completely — AI has access to the best medical and financial knowledge',
        'Ignore it entirely — AI should never be used for these topics',
        'Use it as a starting point to understand the topic, then confirm with a real professional',
        'Only trust it if the answer is more than three paragraphs long',
      ],
      correct: 2,
      feedback: "AI is excellent at helping you understand medical or financial topics in plain English — and it can even help you prepare good questions for your doctor or advisor. But it can get things wrong, and it doesn't know your full personal situation. A real professional is irreplaceable for important decisions.",
    },
    {
      q: "If AI gives you a response that isn't quite what you were looking for, what should you do?",
      options: [
        'Close the window and decide AI doesn\'t work for you',
        'Start a completely new chat from scratch',
        'Tell it what you\'d like changed and continue the conversation',
        'Try a shorter, more vague question next time',
      ],
      correct: 2,
      feedback: "AI works best as a back-and-forth conversation. If the first response isn't right, just tell it what to adjust — 'Can you make that simpler?' or 'I meant something more like...' — and it will respond accordingly. This is how experienced users get great results every time.",
    },
  ],
}

export default c4module1
