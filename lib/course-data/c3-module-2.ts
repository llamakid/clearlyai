import type { CourseData } from './types'

const c3module2: CourseData = {
  moduleId: 14,
  title: 'Customer Communications, Done Right',
  subtitle: 'AI for Your Business · Module 2',
  lessons: [
    // ─────────────────────────────────────────
    // Lesson 1 — The Communication Trap
    // ─────────────────────────────────────────
    {
      id: 0,
      title: 'The Communication Trap',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for Your Business · Lesson 1',
          icon: '📬',
          title: 'The Communication Trap',
          body: [
            "By the end of this lesson, you'll understand exactly why customer communication feels like it never ends — and how AI shifts you from reactive to in control.",
          ],
          sub: "Let's name the problem before we fix it.",
        },
        {
          type: 'concept',
          eyebrow: 'The daily reality',
          icon: '🔁',
          title: "You're answering the same questions. Every day.",
          body: [
            "Every small business owner knows this pattern. The same inquiries, over and over. What are your hours? How does pricing work? How do I book? What's your process? Can you do [specific thing]?",
            "Each one feels like it needs a real, personal response. And it does — customers notice when you're on autopilot. But writing thoughtful, professional replies from scratch, all day, is exhausting.",
            "The result: responses get slower. Quality gets inconsistent. Some messages don't get answered at all.",
          ],
          highlight: "Slow, inconsistent communication costs you customers. Most of them just quietly go somewhere else.",
        },
        {
          type: 'concept',
          eyebrow: 'The hidden cost',
          icon: '⏰',
          title: "Customer communication isn't just time. It's your most interrupted time.",
          body: [
            "Email and messages aren't just time-consuming — they're interruptive. Every time you stop what you're doing to respond to an inquiry, you're breaking focus. And focus, for a business owner, is your most valuable resource.",
            "Studies show it takes an average of 23 minutes to fully return to a task after an interruption. A day with 10 message interruptions isn't just 10 replies — it's hours of lost productive time.",
            "AI doesn't eliminate the human judgment in your responses. It eliminates the blank-page friction that makes every reply start from zero.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'The reactive trap',
          icon: '🎯',
          title: "Reactive communication keeps you stuck. Proactive communication builds trust.",
          body: [
            "When you're always reacting — waiting for questions, scrambling to respond — you're constantly behind. Communication feels like a burden instead of an asset.",
            "Businesses that communicate proactively are different. They answer questions before they're asked (FAQs, clear website copy, auto-responses). They follow up before customers have to chase. They're consistent and professional every time.",
            "That's not a staffing advantage. It's a systems advantage. And AI gives you the system.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'What changes with AI',
          icon: '🔄',
          title: "AI handles the drafting. You handle the judgment and the send.",
          body: [
            "Here's the shift: instead of writing from scratch, you give AI the situation and it gives you a strong first draft. You spend 90 seconds editing instead of 10 minutes writing.",
            "Multiply that across 10 customer messages a day, five days a week, and you've reclaimed hours — while your response quality actually goes up because you're editing instead of grinding through blank pages.",
            "You're not removing yourself from the communication. You're removing the part that doesn't require you.",
          ],
          highlight: "Your voice, your judgment, your relationships — all intact. Just dramatically less friction.",
        },
        {
          type: 'concept',
          eyebrow: "What this module covers",
          icon: '🗺️',
          title: "Five lessons. A complete customer communication system.",
          body: ["By the end of this module you'll have:"],
          list: {
            items: [
              'A reliable method for drafting any customer email in under 2 minutes',
              'A proven formula for responding to reviews — positive, mixed, and negative',
              'A customer FAQ you can publish on your website and use in replies',
              'A library of reusable templates for your most common communications',
              'A system that keeps communication fast and consistent without burning you out',
            ],
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Map your most common customer messages.',
          body: [
            "Open <strong>chatgpt.com</strong> and do this quick exercise before we build anything.",
          ],
          prompt:
            "I run a [type of business]. I want to build a smarter system for customer communication. Based on my business type, what are the 8–10 most common customer questions or messages I probably receive regularly — and for each one, what would an ideal response look like in terms of length, tone, and what it should cover?",
          body2:
            "Save what it gives you. This is the foundation for the templates and FAQ we're going to build over the next four lessons.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: "You've named the problem. Now we fix it.",
          body: [
            "Reactive communication is a trap — and most small business owners are stuck in it. The way out isn't hiring a communications team. It's having a system.",
            "In the next lesson, we build that system starting with the most common thing: drafting customer emails that sound exactly like you.",
          ],
          summaryList: [
            'Answering the same questions repeatedly is one of the biggest hidden time drains for small business owners',
            'Slow or inconsistent responses cost you customers — most just move on without saying why',
            "AI removes the blank-page friction so every reply starts from a strong draft, not zero",
            'This module builds a complete customer communication system — templates, FAQs, and a repeatable workflow',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 2 — Email That Sounds Like You
    // ─────────────────────────────────────────
    {
      id: 1,
      title: 'Email That Sounds Like You',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for Your Business · Lesson 2',
          icon: '✉️',
          title: 'Email That Sounds Like You',
          body: [
            "By the end of this lesson, you'll have a reliable method for drafting any customer email — inquiry responses, follow-ups, difficult conversations — in under 2 minutes. And they'll sound like you, not a chatbot.",
          ],
          sub: 'The blank page problem goes away permanently.',
        },
        {
          type: 'concept',
          eyebrow: "The setup that works",
          icon: '🎯',
          title: "Give AI three things. Get a draft worth sending.",
          body: [
            "Every great customer email prompt gives AI the same three things:",
            "<strong>Who you're writing to</strong> — their situation, your relationship, the right tone (new lead, existing customer, frustrated client, etc.).",
            "<strong>What the email needs to accomplish</strong> — answer a question, follow up on a proposal, handle a complaint, confirm a booking.",
            "<strong>Your business identity</strong> — your business name, type, and any specific details that should be in the reply.",
          ],
          highlight: "Three pieces of context. A draft in 10 seconds. Two minutes of editing. Email out the door.",
        },
        {
          type: 'concept',
          eyebrow: 'The most common emails',
          icon: '📋',
          title: "There are really only six types of customer emails — and AI handles all of them.",
          body: ["Most customer communication falls into one of these categories:"],
          list: {
            items: [
              '<strong>New inquiry response</strong> — answering "How does this work? What does it cost?"',
              '<strong>Proposal or quote follow-up</strong> — checking in after you sent something',
              '<strong>Booking confirmation</strong> — confirming the details of an appointment or order',
              '<strong>Difficult conversation</strong> — handling a complaint, delay, or mistake professionally',
              '<strong>Thank you / check-in</strong> — following up after service to build the relationship',
              '<strong>Re-engagement</strong> — reaching out to a past customer you haven\'t heard from',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: 'A real example',
          icon: '💡',
          title: "Here's what a great prompt looks like for a new inquiry.",
          body: [
            "Situation: A potential customer emailed asking about your pricing and availability. You want to respond warmly, give them the information they need, and invite them to take the next step.",
          ],
          highlight: '"I run [business name], a [type of business]. A potential customer emailed asking about my pricing and availability. I want to respond warmly, answer their questions, and invite them to book a call or visit. My pricing is [brief details]. My availability is [brief details]. Please draft a professional, friendly response that feels personal — not like a form letter. Under 150 words."',
        },
        {
          type: 'concept',
          eyebrow: 'The hardest one: complaints',
          icon: '😤',
          title: "Difficult emails are where AI earns its keep most.",
          body: [
            "Complaints and difficult conversations are the emails most owners procrastinate on. You sit with it, worry about the tone, draft and delete, finally send something — and it still doesn't feel right.",
            "AI drafts these in seconds. Give it the situation honestly — what happened, what the customer said, what outcome you want — and it will give you a calm, professional, empathetic draft that defuses rather than escalates.",
            "Your job is to make sure it's accurate and sounds like you. The emotional labor of the blank page is gone.",
          ],
          highlight: "Responding to complaints quickly and professionally is one of the highest-ROI things a small business owner can do. AI makes it easy to actually do it.",
        },
        {
          type: 'concept',
          eyebrow: 'Making it sound like you',
          icon: '✏️',
          title: "The 2-minute edit is what makes it genuinely yours.",
          body: [
            "Read the draft. Ask yourself: does this sound like something I'd actually say? Does any word or phrase feel stiff or unnatural?",
            "Change those words. Add one specific detail only you would know — a customer's name, something memorable about their situation, a reference to a previous conversation.",
            "Cut anything generic. Keep anything that's genuinely good.",
            "That's the whole edit. Two minutes. A response that sounds personal because it is personal — you shaped every word that stayed.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Draft a real customer email — your choice of type.',
          body: [
            "Open <strong>chatgpt.com</strong> and pick the email type that's most useful to you right now.",
          ],
          prompt:
            "I run [business name], a [type of business]. I need to write a [type of email: new inquiry response / follow-up on a proposal / response to a complaint / thank-you after service]. Here's the situation: [describe what happened or what you need to say]. Please draft a professional, warm email that sounds like it came from the business owner — not a template. Keep it under [word count: 100–150 words is usually right].",
          body2:
            "After the first draft, try: 'Make the opening more personal — start with something other than \"Thank you for reaching out.\"' Watch how much better the second version is.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: "Any customer email, in under 2 minutes.",
          body: [
            "That's the new baseline. Not some emails — any email. Inquiry, follow-up, complaint, thank-you. All of them start from a strong draft now.",
            "In the next lesson, we tackle the high-visibility ones: reviews. Including the negative ones that most owners dread.",
          ],
          summaryList: [
            'Give AI who you\'re writing to, what the email needs to accomplish, and your business context — you get a real draft instantly',
            'All customer emails fall into six types — and AI handles every one of them well',
            'Difficult emails (complaints, hard conversations) are where AI saves the most stress and time',
            "The 2-minute edit is what makes a draft genuinely yours — change what's off, add what only you know",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 3 — Handling Reviews, Including the Hard Ones
    // ─────────────────────────────────────────
    {
      id: 2,
      title: 'Handling Reviews, Including the Hard Ones',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for Your Business · Lesson 3',
          icon: '⭐',
          title: 'Handling Reviews, Including the Hard Ones',
          body: [
            "By the end of this lesson, you'll be able to respond to any review — positive, mixed, or negative — professionally and quickly. No more agonizing over how to handle a bad one.",
          ],
          sub: "Your review responses are your public reputation. Let's make them count.",
        },
        {
          type: 'concept',
          eyebrow: 'Why reviews matter more than you think',
          icon: '👀',
          title: "Your review responses are read by every future customer who looks you up.",
          body: [
            "When someone Googles your business, they don't just read your reviews — they read how you respond. A thoughtful response to a complaint tells a future customer more about your business than the complaint itself.",
            "Businesses that respond to all reviews consistently are rated more trustworthy, even with similar star ratings as competitors who don't respond.",
            "Most small business owners know this and still don't do it consistently — because it takes time and emotional energy they don't always have. AI removes both barriers.",
          ],
          highlight: "A professional response to a bad review can turn a liability into a demonstration of your character.",
        },
        {
          type: 'concept',
          eyebrow: 'Positive reviews',
          icon: '😊',
          title: "Positive reviews deserve more than 'Thanks so much!'",
          body: [
            "It's tempting to dash off a quick thank-you to a positive review. That's better than nothing — but it's a missed opportunity.",
            "A strong positive review response does three things: thanks the specific thing they mentioned (shows you read it), reinforces what makes your business different, and invites the relationship to continue.",
            "This takes 90 seconds with AI. A customer who left a great review and got a genuine, thoughtful response back is far more likely to return and refer others.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Negative reviews',
          icon: '😠',
          title: "The formula for negative reviews that actually works.",
          body: [
            "A bad review stings. The instinct is to defend yourself — and that almost always makes things worse publicly.",
            "The formula that works every time:",
            "<strong>1. Acknowledge</strong> — show you heard their experience without getting defensive.",
            "<strong>2. Apologize for the impact</strong> — not necessarily for wrongdoing, but for their experience.",
            "<strong>3. Take it offline</strong> — invite them to contact you directly to make it right.",
          ],
          highlight: "Never argue with a reviewer in public. Prospective customers are watching — and how you handle criticism tells them everything.",
        },
        {
          type: 'concept',
          eyebrow: 'Mixed reviews',
          icon: '🤔',
          title: "Mixed reviews are the trickiest — and the most important to get right.",
          body: [
            "A 3-star review that praises part of the experience and criticizes another is actually your most valuable piece of public feedback. Future customers read these closely.",
            "The right response: genuinely thank them for the specific praise, acknowledge the specific concern without being dismissive, and say something concrete about how you address it.",
            "Avoid the trap of responding only to the criticism. You want future customers to see you taking both the positive and the constructive seriously.",
          ],
        },
        {
          type: 'compare',
          eyebrow: 'See the difference',
          icon: '🔍',
          title: "Weak vs. strong negative review response.",
          bad: {
            label: 'Weak response',
            text: "We're sorry you feel that way. We work hard to serve all our customers and believe we provide excellent service. We hope you'll give us another chance.",
          },
          good: {
            label: 'Strong response',
            text: "Thank you for taking the time to share this — I'm genuinely sorry your experience didn't reflect what we work hard to provide. I'd love to make this right. Please reach out to me directly at [contact info] and I'll personally take care of it.",
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Respond to your hardest review.',
          body: [
            "Find a review you've been avoiding — a negative or mixed one — and use this prompt to respond to it today.",
          ],
          prompt:
            "My business is [business name], a [type of business]. A customer left this review: [paste the full review]. I want to respond professionally and thoughtfully. Please write a response that: acknowledges their specific experience without being defensive, expresses genuine concern for the impact they had, and invites them to contact me directly to make it right. Keep it under 100 words and make it sound like it came from the owner.",
          body2:
            "If it's a positive or mixed review instead, tell AI that and it will adjust accordingly. The goal today: respond to every review you have waiting. It takes minutes.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: "Every review gets a response. Fast, professional, on-brand.",
          body: [
            "That's the new standard. Not just when you have time — every review, within 24 hours. It's now realistic because it takes minutes, not hours.",
            "In the next lesson, we get proactive. You're going to build a customer FAQ that answers questions before they're even asked.",
          ],
          summaryList: [
            'Review responses are read by future customers — they reveal your character as much as your rating',
            'Positive reviews deserve specific, genuine responses — not just a quick thank-you',
            'Negative review formula: acknowledge, apologize for the impact, take it offline',
            'Never argue publicly — professional, empathetic responses turn liabilities into demonstrations of quality',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 4 — Build Your Customer FAQ
    // ─────────────────────────────────────────
    {
      id: 3,
      title: 'Build Your Customer FAQ',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for Your Business · Lesson 4',
          icon: '❓',
          title: 'Build Your Customer FAQ',
          body: [
            "By the end of this lesson, you'll have a real customer FAQ — one you can publish on your website, paste into auto-replies, and use to stop answering the same questions from scratch every day.",
          ],
          sub: 'Answer it once. Use it forever.',
        },
        {
          type: 'concept',
          eyebrow: 'The question you answer every day',
          icon: '🔁',
          title: "The questions you answer repeatedly are costing you hours every week.",
          body: [
            "Think about the last 20 customer messages you received. How many of them were asking something you've answered dozens of times before?",
            "Every time you write a fresh response to 'What are your hours?' or 'How does pricing work?' or 'Do you offer [service]?' — you're spending cognitive energy on something that already has a good answer somewhere in your head.",
            "A well-built FAQ captures those answers once. Then you (or your website, or your auto-reply) can deliver them instantly, every time.",
          ],
          highlight: "A FAQ isn't just a webpage. It's a customer service system that works while you're busy with everything else.",
        },
        {
          type: 'concept',
          eyebrow: 'Where FAQs earn their keep',
          icon: '📍',
          title: "A good FAQ works in four places at once.",
          body: ["Once you have it, you can use it everywhere:"],
          list: {
            items: [
              '<strong>Your website</strong> — answers questions before customers even contact you, improving conversion',
              '<strong>Email auto-replies</strong> — when you\'re unavailable, the FAQ link handles the basics',
              '<strong>Social media bio or pinned post</strong> — redirects common DMs to a real answer',
              '<strong>Your own reference</strong> — copy-paste answers when the same question comes in again',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: 'Building it with AI',
          icon: '🔨',
          title: "AI can draft your entire FAQ in one conversation.",
          body: [
            "The process is simple. You tell AI your business type and the questions you get asked most often — even in rough, imperfect form. It drafts clear, professional answers. You edit for accuracy and voice.",
            "If you're not sure what questions to include, AI can suggest them based on your business type — then you confirm which ones actually apply to you.",
            "A complete 10-question FAQ, written from scratch, takes most business owners two to three hours. With AI, it takes under 30 minutes.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'What makes a FAQ great',
          icon: '⭐',
          title: "The difference between a FAQ that helps and one that frustrates.",
          body: [
            "Most FAQs fail because they're written from the business's perspective, not the customer's. They answer the questions the business wants to address, not the ones customers actually ask.",
            "<strong>Use their exact language.</strong> If customers ask 'How much does it cost?' — use that phrasing, not 'What are your pricing tiers?'",
            "<strong>Answer the follow-up too.</strong> After 'What are your hours?' customers often wonder 'Do I need an appointment?' Answer both in one entry.",
            "<strong>Keep it scannable.</strong> Short paragraphs. Clear headers. Customers are looking for one answer, not reading a document.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'The auto-reply opportunity',
          icon: '⚡',
          title: "Set up an auto-reply that actually helps — not just 'We'll get back to you.'",
          body: [
            "Most email auto-replies are a dead end. They confirm receipt and say nothing useful.",
            "A smarter auto-reply links to your FAQ, tells the customer exactly when to expect a real response, and gives them one immediate action they can take (book online, see your hours, check your pricing page).",
            "AI can draft this auto-reply in 30 seconds. You update it in your email or booking system once, and it works for you indefinitely.",
          ],
          highlight: "A helpful auto-reply isn't just polite — it answers questions immediately and reduces the follow-up messages you have to handle.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Build your FAQ right now.',
          body: [
            "Open <strong>chatgpt.com</strong> and use this prompt. This will produce a real, usable FAQ — not a placeholder.",
          ],
          prompt:
            "I run [business name], a [type of business]. Here are the questions I get asked most often by customers: [list 5–10 questions, even in rough form — e.g., 'how much does it cost', 'do I need an appointment', 'what areas do you serve', 'how do I cancel or reschedule']. Please write a clear, professional FAQ that answers each question in plain English. Use the customer's natural phrasing for each question. Keep each answer to 2–4 sentences. Make it feel warm and approachable — not corporate.",
          body2:
            "Once you have the draft, reply with: 'Add one more question I probably missed for a business like mine.' Then edit the whole thing for accuracy and your voice. Publish it on your website this week.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: "You just built something that works for you indefinitely.",
          body: [
            "A good FAQ isn't a task you complete — it's a system you install. Every question it answers is a response you'll never have to write from scratch again.",
            "In the final lesson, we bring everything together into a complete, repeatable communication system you can maintain in minutes a day.",
          ],
          summaryList: [
            'Questions you answer repeatedly should be answered once in a FAQ — then reused everywhere',
            'A FAQ earns its keep on your website, in auto-replies, in social bios, and as your own quick reference',
            'Write it from the customer\'s perspective — their exact phrasing, not business jargon',
            'AI drafts a full 10-question FAQ in one conversation — you edit for accuracy and voice',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 5 — Your Customer Communication System
    // ─────────────────────────────────────────
    {
      id: 4,
      title: 'Your Customer Communication System',
      meta: '9 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for Your Business · Lesson 5',
          icon: '⚙️',
          title: 'Your Customer Communication System',
          body: [
            "By the end of this lesson, you'll have a complete, reusable communication system — templates for your most common messages, a clear workflow, and a setup that keeps customer communication fast and consistent without burning you out.",
          ],
          sub: "The difference between doing it once and having a system.",
        },
        {
          type: 'concept',
          eyebrow: 'The gap most owners miss',
          icon: '🔍',
          title: "Using AI once is valuable. Having a system is transformative.",
          body: [
            "You've now used AI to draft emails, respond to reviews, and build a FAQ. Each one of those was faster and better than starting from scratch.",
            "But there's a level above that: building a communication system so that future messages — the same types, every week — take even less time because the prompts, templates, and structure are already there.",
            "Think of it like a recipe file. The first time you make a dish you figure it out as you go. The fifth time, you have a recipe card and it takes half the time.",
          ],
          highlight: "Your goal by the end of this lesson: a communication library you can pull from every single day.",
        },
        {
          type: 'concept',
          eyebrow: 'What goes in your library',
          icon: '📚',
          title: "Build a template for every type of message you send more than twice a month.",
          body: [
            "Start by listing every type of customer message you send regularly. Not the unique ones — the recurring patterns.",
            "New inquiry response. Proposal follow-up. Booking confirmation. Appointment reminder. Post-service check-in. Review request. Complaint acknowledgment.",
            "For each one, you're going to save a working AI prompt — one that's already been tested and produces a solid draft for your specific business. When the message type comes up again, you use the prompt, fill in the specifics, and you're done in 60 seconds.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'The prompt template format',
          icon: '📝',
          title: "A reusable prompt has blanks, not full details.",
          body: [
            "A saved prompt looks like this — with brackets for the parts that change each time:",
          ],
          highlight: '"I run [business name], a [business type]. I need to [email type] for [customer name or situation]. Key details: [specific details for this message]. Please draft a professional, warm email under 150 words that sounds like the owner wrote it."',
        },
        {
          type: 'concept',
          eyebrow: 'The review response habit',
          icon: '⭐',
          title: "Block 10 minutes every week. Respond to everything that came in.",
          body: [
            "The owners who have a strong review presence online aren't spending hours on it. They've made it a small, regular habit.",
            "Ten minutes, once a week. Pull up your Google, Yelp, or Facebook reviews. Paste each one into your saved review-response prompt. Edit. Copy. Post. Done.",
            "Ten minutes a week is 8 hours a year. That's it. For a review presence that makes your business look consistently engaged, professional, and trustworthy to every future customer who looks you up.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'What this looks like in six months',
          icon: '📈',
          title: "Consistent communication compounds in a way that's hard to overstate.",
          body: ["Here's the before and after — not dramatic in any single week, but cumulative over time:"],
          beforeAfter: {
            before: {
              label: 'Before this system',
              items: [
                'Every customer email starts from a blank page',
                'Reviews pile up unanswered for weeks',
                'Complaints get delayed responses or none',
                'Your website has no FAQ — customers email instead',
                "Communication quality depends on how much energy you have that day",
              ],
            },
            after: {
              label: 'With your system in place',
              items: [
                'Any email drafted in under 2 minutes from a saved prompt',
                'Every review responded to within 24 hours',
                'Complaints handled calmly and quickly — and publicly',
                'FAQ on your website handles the common questions automatically',
                'Communication is consistent regardless of how your day is going',
              ],
            },
          },
        },
        {
          type: 'concept',
          eyebrow: "Where to save your system",
          icon: '💾',
          title: "Keep it somewhere you'll actually use it.",
          body: [
            "The best system is the one you actually use. Pick one place to keep your saved prompts and templates:",
            "<strong>A Google Doc or Notion page</strong> called 'Customer Communication Templates' — paste your saved prompts there, organized by type.",
            "<strong>A folder in your email drafts</strong> — save each template as a draft you can copy from quickly.",
            "<strong>A pinned note on your phone</strong> — for review responses you want to handle on the go.",
            "The format matters less than the habit of going there first before you start writing from scratch.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Build your first communication template library.',
          body: [
            "Open <strong>chatgpt.com</strong> and use this prompt to generate a starter template library for your specific business.",
          ],
          prompt:
            "I run [business name], a [type of business]. I want to build a reusable customer communication template library. Please create 5 ready-to-use AI prompt templates for the following message types: (1) new customer inquiry response, (2) follow-up after sending a proposal or quote, (3) post-service thank-you and check-in, (4) response to a customer complaint, (5) request for a customer review after service. Each template should have clear [brackets] for the parts that change each time, and should produce a professional, warm response that sounds like the owner when used.",
          body2:
            "Copy this entire output into a Google Doc, Notion page, or Notes app and title it 'Customer Communication Templates.' This is your library — add to it whenever you build a new prompt that works well.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 2 Complete',
          icon: '🎓',
          title: "You have a customer communication system. Use it every day.",
          body: [
            "Not every message is unique. Most are the same six types, over and over. Now you have a system that handles all of them — fast, consistently, in your voice.",
            "Your customers get better, faster responses. You spend less time and energy. That combination is rare — and it's now yours.",
          ],
          summaryList: [
            'Build a saved prompt for every message type you send more than twice a month',
            '10 minutes per week for review responses is all it takes to maintain a strong online reputation',
            'A FAQ on your website, saved templates in a doc, and a weekly review habit — that\'s the whole system',
            'Consistent communication is a competitive advantage. Most small businesses don\'t have it.',
          ],
          gradBlock: {
            icon: '📬',
            title: 'Your Customer Communication System Is Live',
            body: "You can now draft any customer email in under 2 minutes, respond to any review professionally, and handle the most common questions without writing from scratch. That's a permanent upgrade to how your business communicates.",
            name: 'Module 2 Complete',
          },
        },
      ],
    },
  ],

  quiz: [
    {
      q: "What is the most important thing to give AI when drafting a customer email?",
      options: [
        "A very long, detailed description of your entire business history",
        "Who you're writing to, what the email needs to accomplish, and your business context",
        "The exact words you want it to use",
        "A list of things you don't want it to say",
      ],
      correct: 1,
      feedback:
        "Three pieces of context produce a great draft: who you're writing to (their situation and the right tone), what the email needs to accomplish, and your business context. That's it — AI handles the rest, and you edit for accuracy and voice.",
    },
    {
      q: "What is the recommended formula for responding to a negative review?",
      options: [
        "Explain your side of the story in detail so future customers know what really happened",
        "Ignore it — responding draws more attention to the negative feedback",
        "Acknowledge their experience, apologize for the impact, and invite them to contact you directly",
        "Offer a refund publicly to show you take complaints seriously",
      ],
      correct: 2,
      feedback:
        "The formula that works: acknowledge their experience without defensiveness, apologize for the impact (not necessarily for wrongdoing), and take it offline by inviting direct contact. Never argue publicly — prospective customers are watching and how you handle criticism tells them everything.",
    },
    {
      q: "Where should a customer FAQ be used once it's built?",
      options: [
        "Only on your website — it's too formal to use in other places",
        "Only in email replies — it's too casual for a website",
        "On your website, in auto-replies, in social bios, and as your own quick reference",
        "Only share it when a customer specifically asks for it",
      ],
      correct: 2,
      feedback:
        "A good FAQ earns its keep everywhere: on your website (answers questions before contact), in email auto-replies (delivers instant help when you're unavailable), in social media bios or pinned posts (redirects common DMs), and as your own copy-paste reference for recurring questions.",
    },
    {
      q: "What is a 'reusable prompt template' and why is it valuable?",
      options: [
        "A pre-written email you send to every customer without customizing",
        "A saved AI prompt with brackets for the details that change each time — so recurring message types take 60 seconds instead of starting from scratch",
        "A script you read aloud when talking to customers",
        "A form customers fill out on your website",
      ],
      correct: 1,
      feedback:
        "A reusable prompt template is a saved AI prompt with [brackets] for the parts that change — customer name, specific situation, key details. When the same type of message comes up again, you use the template, fill in the brackets, and have a strong draft in under a minute.",
    },
    {
      q: "How much time per week does it realistically take to maintain a strong review response habit?",
      options: [
        "Several hours — review responses need to be carefully written each time",
        "About 30 minutes, three times per week",
        "About 10 minutes, once per week",
        "At least an hour every day",
      ],
      correct: 2,
      feedback:
        "Ten minutes, once a week is genuinely enough. Pull up your reviews, paste each one into your saved review-response prompt, edit, copy, and post. That's 8 hours a year for a review presence that makes your business look consistently engaged and trustworthy to every future customer.",
    },
  ],
}

export default c3module2
