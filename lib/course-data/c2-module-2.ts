import type { CourseData } from './types'

const c2module2: CourseData = {
  moduleId: 8,
  title: 'Tame Your Inbox',
  subtitle: 'AI at Work · Module 2',
  lessons: [
    // ─────────────────────────────────────────
    // Lesson 1 — The Email Trap
    // ─────────────────────────────────────────
    {
      id: 0,
      title: 'The Email Trap',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI at Work · Lesson 1',
          icon: '📧',
          title: 'The Email Trap',
          body: [
            "By the end of this lesson, you'll understand exactly why email takes so long — and see the mental shift that changes everything about how you handle it.",
          ],
          sub: "Let's start by naming the real problem.",
        },
        {
          type: 'concept',
          eyebrow: "The number that explains your day",
          icon: '⏱️',
          title: "You're spending 2–3 hours a day on email. Most of it is writing.",
          body: [
            "Research on knowledge workers is consistent: the average professional spends 2–3 hours per day on email. Not just reading — but writing. Drafting replies, choosing the right words, second-guessing tone.",
            "That's roughly 600–900 hours a year spent at a keyboard, translating your thoughts into polished sentences.",
            "AI can handle most of that translation instantly. Your job becomes reviewing and sending.",
          ],
          highlight: "You don't have an inbox problem. You have a drafting problem — and AI solves that.",
        },
        {
          type: 'concept',
          eyebrow: "Why email is so draining",
          icon: '🧠',
          title: "The real cost isn't time. It's mental energy.",
          body: [
            "Every work email you write carries invisible cognitive load. What's the right tone? Is this too blunt? Will this land the wrong way? Should I say more or less?",
            "You're not just writing sentences — you're managing relationships, representing your organization, and trying to predict how words will be received.",
            "That's exhausting. And it's not a good use of the expertise you've spent years building.",
          ],
          highlight: "AI doesn't get tired. It doesn't second-guess tone. It gives you a draft and you decide if it's right.",
        },
        {
          type: 'concept',
          eyebrow: "The old approach vs. the new one",
          icon: '🔄',
          title: "You used to write emails. Now you edit them.",
          body: [
            "Here's the shift that makes everything else in this module work:",
            "Before: You open an email, think about what to say, stare at a blank box, write a draft, re-read it twice, change some things, and send it. 15–20 minutes.",
            "After: You tell AI what you need in a few words, get a first draft in 10 seconds, make a 2-minute edit, and send it. Done.",
          ],
          beforeAfter: {
            before: {
              label: 'Before AI',
              items: [
                'Stare at a blank reply box',
                'Write, delete, rewrite',
                'Worry about tone for 5 minutes',
                'Re-read it twice before sending',
                '15–20 minutes per email',
              ],
            },
            after: {
              label: 'After AI',
              items: [
                'Describe what you need in plain English',
                'Get a strong draft in 10 seconds',
                'Do a 2-minute edit',
                'Send with confidence',
                '3–5 minutes per email',
              ],
            },
          },
        },
        {
          type: 'concept',
          eyebrow: "The one rule that matters",
          icon: '✅',
          title: "You always read it before you send it.",
          body: [
            "AI drafts are a starting point, not a finished product. The rule is simple: you always read what AI produces before anything goes out under your name.",
            "This isn't about distrust — it's about ownership. The email represents you. A quick review ensures it's accurate, sounds like you, and says exactly what you mean.",
            "With that one habit in place, the speed gains are completely safe.",
          ],
          highlight: "AI writes the draft. You own the send.",
        },
        {
          type: 'concept',
          eyebrow: "What this module covers",
          icon: '🗺️',
          title: "Five lessons. A complete email system.",
          body: ["Here's exactly what you'll build over the next four lessons:"],
          list: {
            items: [
              'Lesson 2: The prompt formula that gets you great drafts every time',
              'Lesson 3: Handling difficult and high-stakes emails with AI',
              'Lesson 4: Summarizing threads and taming an overflowing inbox',
              'Lesson 5: Your personal email template library — built once, used forever',
            ],
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Your email audit.',
          body: [
            "Open <strong>chatgpt.com</strong> and run this quick audit. Be specific — the more detail you give, the more useful the result.",
          ],
          prompt:
            "I want to understand my email habits. I work as a [job title] and I'd estimate I spend about [X hours] a day on email. The kinds of emails that take me the longest are [describe: e.g., 'responding to client requests', 'writing status updates', 'handling complaints']. What are the 3 types of emails in my situation that AI could help me draft fastest — and what information should I give it to get the best results?",
          body2:
            "Note the three types it identifies. Those are where you'll get the biggest immediate wins in this module.",
          setupGuide: true,
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: "The problem is drafting. The solution is already here.",
          body: [
            "The time you spend on email isn't wasted thinking — it's mostly spent on the mechanical part of translating your thoughts into polished sentences. AI does that in seconds.",
            "In the next lesson, you'll learn the exact prompt formula that gets you great email drafts every single time.",
          ],
          summaryList: [
            'Professionals spend 2–3 hours daily on email — mostly writing, not thinking',
            'The mental energy cost is just as significant as the time cost',
            'The shift: from writing emails to editing AI drafts',
            'One rule keeps it safe: always read before you send',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 2 — The Prompt Formula That Works
    // ─────────────────────────────────────────
    {
      id: 1,
      title: 'The Prompt Formula That Works',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI at Work · Lesson 2',
          icon: '🔑',
          title: 'The Prompt Formula That Works',
          body: [
            "By the end of this lesson, you'll have a simple, reusable formula for prompting AI to draft almost any work email — and you'll have used it on a real one.",
          ],
          sub: 'The right setup is everything.',
        },
        {
          type: 'concept',
          eyebrow: "Why most people get bad drafts",
          icon: '🚫',
          title: "Vague in, vague out.",
          body: [
            "Here's what most people type into AI when they want an email draft: <em>\"Write me an email to my client about the project.\"</em>",
            "And then they're disappointed when what comes back is generic, stiff, and doesn't sound like them.",
            "The problem isn't the AI. It's the prompt. AI can only work with the context you give it. The less you give, the more it has to guess — and guesses are generic.",
          ],
          highlight: "Specific prompts get specific, useful results. Generic prompts get generic, useless ones.",
        },
        {
          type: 'concept',
          eyebrow: "The formula",
          icon: '📐',
          title: "Four ingredients. Every time.",
          body: [
            "Every great AI email prompt has four ingredients. You don't need all four for every email — but the more you include, the better the draft.",
          ],
          list: {
            items: [
              '<strong>Who you\'re writing to</strong> — their role and your relationship (client, manager, vendor, colleague)',
              '<strong>What you need to communicate</strong> — the core message, even as rough bullet points',
              '<strong>The tone you need</strong> — professional, warm, firm, apologetic, concise',
              '<strong>Any constraints</strong> — length, what to avoid saying, what must be included',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: "Seeing it in action",
          icon: '💡',
          title: "From rough idea to ready-to-send draft.",
          body: [
            "Situation: A vendor has missed a delivery deadline and you need to push back — firmly but professionally — without burning the relationship.",
            "Here's what a strong prompt looks like:",
          ],
          highlight: '"I need to email a vendor who missed a delivery deadline by 3 days with no advance notice. I want to be firm about the impact this caused and ask for a concrete plan to prevent it happening again — but I want to stay professional and keep the relationship intact. Please draft a direct but respectful email. Keep it under 150 words."',
        },
        {
          type: 'concept',
          eyebrow: "The refinement step",
          icon: '✏️',
          title: "Your first draft is a starting point, not a final answer.",
          body: [
            "Even with a great prompt, the first draft might be slightly off. That's completely normal — and fixing it takes about 10 seconds.",
            "If the tone is too formal: <em>\"Make this a bit warmer and less formal.\"</em>",
            "If it's too long: <em>\"Cut this down to 3 sentences.\"</em>",
            "If it missed the point: <em>\"The main message I need to communicate is [X]. Rewrite it focusing on that.\"</em>",
          ],
          highlight: "You're having a conversation with AI, not filling out a form. Adjust until it's right.",
        },
        {
          type: 'concept',
          eyebrow: "Make it sound like you",
          icon: '🎯',
          title: "Add one detail only you would know.",
          body: [
            "Here's the finishing touch that turns a generic draft into something that sounds genuinely like you:",
            "Add one specific detail that only you could include. A reference to your history with this person. The actual project name. A shared inside context.",
            "AI gives you the structure and polish. You add the personal signal that shows it came from a real human who knows the recipient.",
          ],
          highlight: "One specific detail — a name, a date, a shared reference — completely changes how the email lands.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Draft a real email using the formula.',
          body: [
            "Open <strong>chatgpt.com</strong> and pick an actual email sitting in your drafts or one you need to write today. Use this template:",
          ],
          prompt:
            "I need to write a work email. Here's the context:\n- Who I'm writing to: [their role and our relationship]\n- What I need to communicate: [the core message — rough notes are fine]\n- Tone needed: [professional / warm / firm / apologetic / neutral]\n- Any constraints: [length, things to include or avoid]\n\nPlease draft a clear, well-structured email for me.",
          body2:
            "After you get the draft, try one refinement: 'Make the opening line stronger' or 'Cut 30 words.' Notice how fast it adjusts. That's the system.",
          setupGuide: true,
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: "You have the formula. Use it every time.",
          body: [
            "Four ingredients — who, what, tone, constraints — and you get a draft worth editing every time. The more specific you are, the faster you get to something you can send.",
            "In the next lesson, we tackle the hard ones: difficult situations, pushback, bad news, and high-stakes emails that usually take the longest.",
          ],
          summaryList: [
            "Vague prompts produce vague drafts — specific context produces useful ones",
            'Four ingredients: who, what, tone, and constraints',
            'The back-and-forth refinement takes 10 seconds and makes it right',
            'One personal detail makes any AI draft sound like it came from you',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 3 — Handling the Hard Ones
    // ─────────────────────────────────────────
    {
      id: 2,
      title: 'Handling the Hard Ones',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI at Work · Lesson 3',
          icon: '🎯',
          title: 'Handling the Hard Ones',
          body: [
            "By the end of this lesson, you'll know how to use AI for the emails that usually take the longest: difficult conversations, pushback, bad news, and situations where every word matters.",
          ],
          sub: "These are the emails that drain you most. Let's fix that.",
        },
        {
          type: 'concept',
          eyebrow: "Why difficult emails take so long",
          icon: '😤',
          title: "The harder the email, the longer it sits in drafts.",
          body: [
            "You already know this feeling. An email arrives that requires a careful response. You open a draft, type a few words, close it. Re-open it later. Type more. Think about it in the shower.",
            "Difficult emails are hard not because you don't know what to say — it's because you're carrying all the emotional weight of the situation while also trying to write well.",
            "AI doesn't carry that weight. You give it the facts and the outcome you need, and it handles the prose.",
          ],
          highlight: "Separating 'what to say' from 'how to write it' is the entire unlock for difficult emails.",
        },
        {
          type: 'concept',
          eyebrow: "Delivering bad news",
          icon: '💔',
          title: "How to tell someone something they don't want to hear.",
          body: [
            "Whether it's a missed deadline, a budget cut, a declined request, or a performance issue — emails that deliver bad news are the ones people dread most.",
            "AI is particularly good here because it has read thousands of well-crafted difficult conversations. It knows how to be clear without being harsh, direct without being cold.",
            "Your prompt: describe the situation, who receives it, the outcome, and the tone (empathetic, professional, straightforward). Tell it any constraints — what you cannot say, what must be clear.",
          ],
          highlight: '"Draft an email delivering bad news that is clear, empathetic, and direct — and leaves no room for misinterpretation."',
        },
        {
          type: 'concept',
          eyebrow: "Handling pushback",
          icon: '🛡️',
          title: "Responding when someone is unhappy — without making it worse.",
          body: [
            "A client is frustrated. A stakeholder is pushing back on a decision. A colleague sent a passive-aggressive message. These situations demand a response that holds your position without escalating.",
            "Tell AI: the situation, what the other person said or implied, your position, and the tone you need. Ask for a response that is firm but not defensive, acknowledges their concern without conceding your point.",
            "AI excels at finding the language that keeps the relationship intact while maintaining your stance.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "Saying no gracefully",
          icon: '🙅',
          title: "Declining without damaging relationships.",
          body: [
            "Saying no is one of the most common professional challenges — and one of the most consistently awkward emails to write.",
            "AI handles it well because the pattern is predictable: acknowledge the request, explain briefly without over-apologizing, decline clearly, and (when appropriate) offer an alternative.",
            "Tell it what you're declining, your relationship with the requester, and whether you want to soften it or keep it brief. It finds the exact right balance.",
          ],
          highlight: '"Draft a polite, clear decline. Acknowledge the request, decline without excessive explanation, and keep the relationship warm."',
        },
        {
          type: 'concept',
          eyebrow: "Chasing without nagging",
          icon: '📌',
          title: "Following up without sounding desperate or annoying.",
          body: [
            "You sent something 10 days ago. No response. You need one. The challenge: following up in a way that feels professional, not pestering.",
            "This is one of AI's most consistent strengths. Tell it: what you sent originally, how long ago, the relationship, and the level of urgency. It will draft a follow-up that is firm enough to get a response without putting the other person on the defensive.",
            "The right follow-up email gets replies that ghosting and nagging don't.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Handle one email you\'ve been avoiding.',
          body: [
            "Go to your drafts folder or your mental list of emails you've been putting off. Pick one. Open <strong>chatgpt.com</strong> and use this prompt:",
          ],
          prompt:
            "I need help drafting a difficult work email. Here's the situation:\n- The email is going to: [their role and our relationship]\n- The situation is: [describe what happened or what needs to be communicated]\n- The outcome I need: [what I want them to think, feel, or do after reading it]\n- Tone: [empathetic / firm / professional / direct / apologetic]\n- Anything to avoid: [e.g., 'don't sound defensive', 'don't over-apologize']\n\nPlease draft this email.",
          body2:
            "If the first draft doesn't quite hit the mark, tell it specifically what's off: 'More direct in the second paragraph' or 'Warmer opening.' It will get there.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: "The emails you dread are now the easiest ones.",
          body: [
            "Difficult emails are hard because writing and emotional management happen at the same time. AI separates those two things — you give it the facts and the outcome, and it handles the prose.",
            "In the next lesson, we tackle a different challenge: an inbox that's already overflowing. AI can read and summarize entire email threads in seconds.",
          ],
          summaryList: [
            "Difficult emails take long because writing and emotional weight happen simultaneously",
            'Bad news, pushback, declining, and follow-ups all have reliable AI patterns',
            'Tell AI the situation, outcome, and tone — let it handle the phrasing',
            "One specific refinement gets you from 'close' to 'perfect' in 10 seconds",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 4 — From Overflowing to Under Control
    // ─────────────────────────────────────────
    {
      id: 3,
      title: 'From Overflowing to Under Control',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI at Work · Lesson 4',
          icon: '📥',
          title: 'From Overflowing to Under Control',
          body: [
            "By the end of this lesson, you'll know how to use AI to cut through a backlogged or overwhelming inbox — summarizing threads, triaging priorities, and catching up in minutes instead of hours.",
          ],
          sub: "This is the lesson for Monday mornings.",
        },
        {
          type: 'concept',
          eyebrow: "The inbox anxiety cycle",
          icon: '😰',
          title: "The longer you wait, the harder it gets to start.",
          body: [
            "Everyone knows this feeling: you've been out for a day, or the week got away from you, and now you're staring at 80 unread emails.",
            "The problem isn't reading them. It's the cognitive overhead of figuring out what matters, what needs a response, and in what order.",
            "AI can do that initial triage for you — fast.",
          ],
          highlight: "You don't need to read everything first. You need to know what matters first.",
        },
        {
          type: 'concept',
          eyebrow: "Summarizing email threads",
          icon: '📋',
          title: "Get the gist of a long thread in 10 seconds.",
          body: [
            "Long email threads are one of the biggest inbox time-sinks. You scroll back to find context, reread replies that went sideways, try to understand where things stand.",
            "The AI move: copy the thread into ChatGPT and ask it to summarize. You get the key decisions, outstanding questions, and current status — in a few bullet points.",
            "This works for any thread: internal project updates, client conversations, vendor negotiations. Anything with more than 3–4 exchanges.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "The summary prompt",
          icon: '💡',
          title: "How to ask AI to read a thread for you.",
          body: [
            "Here's the prompt pattern that works reliably for email thread summaries:",
          ],
          highlight: '"Here is an email thread. Please summarize: (1) what the conversation is about, (2) the current status or where things stand, (3) any outstanding questions or action items, and (4) what I need to do, if anything. [Paste thread below]"',
        },
        {
          type: 'concept',
          eyebrow: "Triaging a backlog",
          icon: '🗂️',
          title: "Sort an overwhelming inbox into what matters.",
          body: [
            "If you've got a full backlog, you can paste the subject lines and senders of your unread emails into ChatGPT and ask it to help you prioritize.",
            "Describe your role, what kinds of emails are typically urgent for you, and ask it to sort them into: respond today, respond this week, and read-only.",
            "It won't know your full context — but it surfaces patterns and flags what looks time-sensitive. That triage alone can save 20–30 minutes of mental overhead.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "Catching up after time away",
          icon: '✈️',
          title: "Back from vacation or a full day of meetings? This helps.",
          body: [
            "Before you start writing responses to a backlog, run this quick exercise: paste the 5–10 most important-looking email subjects and senders into ChatGPT.",
            "Ask: 'I've been out for [X days]. Based on these subject lines, what should I address first and what's a reasonable order to work through them?'",
            "It gives you a prioritized starting point instead of decision fatigue. You still make the calls — you're just not making them from scratch.",
          ],
          highlight: "Starting with a plan beats starting with a scroll.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Summarize a thread in your inbox right now.',
          body: [
            "Find an email thread with 4+ replies that you need to catch up on. Copy the full thread text. Open <strong>chatgpt.com</strong> and paste this:",
          ],
          prompt:
            "Here is an email thread from my work inbox. Please summarize:\n1. What this conversation is about\n2. Where things currently stand\n3. Any outstanding decisions or action items\n4. What (if anything) I need to do next\n\n[Paste the full email thread here]",
          body2:
            "Compare the summary to how long it would have taken you to read and process the thread manually. That time difference — across every thread in your inbox — is the win.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: "An overflowing inbox is now a manageable list.",
          body: [
            "You don't have to read everything first. AI can read it for you and surface what matters. Threads get summarized. Backlogs get triaged. Monday mornings get easier.",
            "In the final lesson, we build something permanent: your personal email template library — the prompts and structures you'll reuse every single week.",
          ],
          summaryList: [
            "Long email threads can be summarized by AI in seconds — paste, ask, read",
            'The four-part summary prompt covers status, decisions, actions, and next steps',
            'Backlogs can be triaged by pasting subject lines and asking for priorities',
            "Starting with a prioritized plan beats scrolling from the top every time",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 5 — Your Email Template Library
    // ─────────────────────────────────────────
    {
      id: 4,
      title: 'Your Email Template Library',
      meta: '9 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI at Work · Lesson 5',
          icon: '📚',
          title: 'Your Email Template Library',
          body: [
            "By the end of this lesson, you'll have a set of reusable AI prompts for the emails you write most often — a personal library you'll use every week for years.",
          ],
          sub: "Build it once. Use it forever.",
        },
        {
          type: 'concept',
          eyebrow: "The compounding win",
          icon: '📈',
          title: "The real power is building habits, not just shortcuts.",
          body: [
            "Every technique in this module has been useful on its own. But the biggest gains come from systematizing it — having a small library of ready-to-go AI prompts for the emails you write over and over.",
            "Instead of thinking about how to prompt AI every time, you reach for a template you've already refined. The result: great drafts, faster, every single time.",
            "Most professionals have 5–8 email types they write regularly. A template for each one pays off every week.",
          ],
          highlight: "One hour building your library saves you time every day for the rest of your career.",
        },
        {
          type: 'concept',
          eyebrow: "The most valuable templates",
          icon: '🏆',
          title: "Start with your highest-frequency emails.",
          body: [
            "Here are the email types that show up in almost every professional's week — and pay off most when templated:",
          ],
          list: {
            items: [
              'Client or stakeholder updates on a project or deliverable',
              'Follow-up emails after meetings (with action items)',
              'Requests for information, approval, or a decision',
              'Responses to complaints or frustrated messages',
              'Internal check-ins and status updates to your manager or team',
              'Thank-you and acknowledgment emails that still need to feel personal',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: "What makes a great template",
          icon: '🔧',
          title: "A template is a prompt that fills in the blanks.",
          body: [
            "An email template isn't a canned response you copy and paste. It's a prompt with placeholders — the consistent structure, and brackets where you fill in the specific situation.",
            "The template handles: who the email is going to, the tone, what to include and avoid. You fill in: the specific situation, the details, any personal context.",
            "This means you get the consistency and speed of a template with the specificity and personal touch of a custom email every time.",
          ],
          highlight: "Template = consistent structure + variable details. AI fills in the prose.",
        },
        {
          type: 'concept',
          eyebrow: "A real template example",
          icon: '💡',
          title: "The project update template — one you'll use every week.",
          body: [
            "Here's a real template for a recurring email type: the project status update to a client or stakeholder.",
          ],
          highlight: '"Write a concise project status update email to [client name or stakeholder role]. Project: [project name]. This week\'s progress: [bullet points of what was done]. Current status: [on track / slight delay / needs decision]. Next steps: [what\'s happening next]. Tone: professional and confident. Keep it under 200 words."',
        },
        {
          type: 'concept',
          eyebrow: "Where to store your templates",
          icon: '🗂️',
          title: "Keep them somewhere you'll actually use them.",
          body: [
            "Your templates are only useful if they're one click away. A few options that work well:",
            "A simple text file or note on your computer. A pinned note in Apple Notes, Notion, or Google Keep. A saved document in your email drafts labeled 'AI Prompts.'",
            "What doesn't work: buried in a folder you'll forget about. The easier they are to access, the more consistently you'll use them.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Build your first three templates.',
          body: [
            "Open <strong>chatgpt.com</strong> and a blank document or note app side by side. Use this prompt to create templates for your three most common email types:",
          ],
          prompt:
            "I want to build a personal email template library using AI. Here are my three most common work email types:\n1. [Describe first email type, e.g., 'weekly update to my manager']\n2. [Describe second email type, e.g., 'following up with a client after a meeting']\n3. [Describe third email type, e.g., 'responding to a complaint from a customer']\n\nFor each one, please create a reusable AI prompt template with [brackets] for the specific details I'd fill in each time. Include the tone guidance and any key things to always include or avoid.",
          body2:
            "Copy the three templates into your notes app. You now have the start of an email system. Add to it every time you find yourself writing the same type of email twice.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 2 Complete',
          icon: '🎓',
          title: "Your inbox is no longer the boss.",
          body: [
            "You now have a complete AI email system: a prompt formula for any email, approaches for difficult situations, a way to triage and summarize an overflowing inbox, and a personal template library to build on.",
            "The next module takes everything you've learned about AI communication and applies it to the other big time drain: meetings.",
          ],
          summaryList: [
            'Build templates for your 5–8 most frequent email types — pays off every week',
            'A template is a prompt with placeholders — structure stays consistent, details change',
            'Store your templates somewhere one click away or you won\'t use them',
            'Every email type you template saves you time for the rest of your career',
          ],
          gradBlock: {
            icon: '📧',
            title: 'Your Inbox Is Under Control',
            body: "You have a complete AI email system: the prompt formula, a playbook for difficult emails, a way to handle any backlog, and a template library that grows with you. Email will never take as long as it used to.",
            name: 'Module 2 Complete',
          },
        },
      ],
    },
  ],

  quiz: [
    {
      q: "According to this module, what is the primary reason email takes so long for most professionals?",
      options: [
        "Reading and processing incoming messages",
        "Waiting for responses to arrive",
        "The drafting and writing process itself",
        "Managing attachments and files",
      ],
      correct: 2,
      feedback:
        "Research shows professionals spend 2–3 hours daily on email — and the biggest drain is drafting and writing, not reading. AI solves this directly by producing first drafts in seconds, shifting your role from writer to editor.",
    },
    {
      q: "What are the four ingredients in a strong AI email prompt?",
      options: [
        "Subject line, greeting, body, and signature",
        "Who you're writing to, what to communicate, the tone needed, and any constraints",
        "The recipient's name, their company, your company, and the deadline",
        "Purpose, background, action required, and closing",
      ],
      correct: 1,
      feedback:
        "The four ingredients — who, what, tone, and constraints — give AI the context it needs to produce a specific, useful draft instead of a generic one. The more of these you include, the better the result.",
    },
    {
      q: "When handling a difficult email (bad news, pushback, declining a request), what is the key unlock AI provides?",
      options: [
        "It automates sending so you don't have to think about it",
        "It separates the writing from the emotional weight of the situation",
        "It guarantees the recipient will respond positively",
        "It writes the email in a different person's voice so it doesn't come from you",
      ],
      correct: 1,
      feedback:
        "Difficult emails are draining because writing and managing emotional weight happen simultaneously. AI handles the prose — you provide the facts and the outcome you need, and it finds the right language. You still review and own the send.",
    },
    {
      q: "What is the best way to use AI to catch up on a long email thread?",
      options: [
        "Ask AI to reply to all messages in the thread automatically",
        "Copy the thread and ask AI for a summary covering status, decisions, and next steps",
        "Delete the thread and ask the sender to start over",
        "Forward it to a colleague and ask them to summarize it",
      ],
      correct: 1,
      feedback:
        "Pasting a thread and asking for a structured summary — what it's about, current status, outstanding decisions, and what you need to do — gets you caught up in seconds. This works for any thread with 3+ replies.",
    },
    {
      q: "What makes a personal email template library valuable over time?",
      options: [
        "It means you never have to write original emails again",
        "It stores your email history so you can search it later",
        "It gives you ready-to-use prompts for recurring email types, so great drafts take seconds not minutes",
        "It automatically sends replies without you reviewing them",
      ],
      correct: 2,
      feedback:
        "Templates are reusable AI prompts — consistent structure with brackets for variable details. Instead of thinking about how to prompt AI each time, you reach for something pre-refined. One hour building the library saves you time every week for years.",
    },
  ],
}

export default c2module2
