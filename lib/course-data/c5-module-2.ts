import type { CourseData } from './types'

const c5module2: CourseData = {
  moduleId: 26,
  title: 'The Four Building Blocks of a Great Prompt',
  subtitle: 'Module 2',
  nextModuleId: 27,
  lessons: [
    {
      id: 0,
      title: 'The Formula That Changes Everything',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 2 · Lesson 1',
          icon: '🧱',
          title: 'Stop guessing. Start building.',
          body: [
            "In Module 1, you learned why prompts fail. Now you\'re going to learn a four-part formula that makes strong prompts almost automatic — no matter what you\'re trying to do.",
            "The formula is: <strong>Role, Task, Context, Format.</strong> Each part does a specific job. Together, they give AI everything it needs to deliver a response you\'ll actually use.",
          ],
          sub: 'One formula. Every situation. Consistent results.',
        },
        {
          type: 'concept',
          eyebrow: 'Why a formula works',
          icon: '⚙️',
          title: "A formula removes guesswork and builds muscle memory.",
          body: [
            "Trying to write a good prompt from scratch every time is mentally exhausting. You have to remember what details matter, in what order, and for what kind of task. That cognitive load is why most people default to vague prompts — it's just easier.",
            "A formula solves this. When you know the four parts, prompt-writing becomes a fill-in-the-blanks process. You stop asking \"what should I include?\" and start asking \"what goes in each slot?\" That shift alone makes every prompt faster and better.",
          ],
          highlight: "Good systems produce consistent results. This formula is your system.",
        },
        {
          type: 'concept',
          eyebrow: 'A quick preview',
          icon: '🗺️',
          title: 'Meet the four parts — Role, Task, Context, Format.',
          body: [
            "Each part of the formula handles a different dimension of your request. Think of them as four questions you answer before you type:",
          ],
          list: {
            items: [
              '<strong>Role:</strong> Who should AI be in this response? (Expert? Teacher? Editor? Devil\'s advocate?)',
              '<strong>Task:</strong> What exactly do you want it to do? (Write? Summarize? List? Explain? Rewrite?)',
              '<strong>Context:</strong> What does AI need to know about your situation? (Who you are, who it\'s for, what\'s at stake)',
              '<strong>Format:</strong> How should the output be delivered? (Bullet list? Email? Table? Paragraph? Under 100 words?)',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'An important note',
          icon: '💡',
          title: "You don't always need all four — but knowing them makes every prompt better.",
          body: [
            "For a simple task — \"Give me 5 names for a pet grooming business\" — you don\'t need a role or a format. The task and a little context are enough. Forcing all four parts into every prompt just adds noise.",
            "The formula's real value is as a checklist. Before you send a prompt, quickly run through the four parts and ask: <em>Would any of these make this better?</em> Often, one or two additions transform the response. The habit of asking is what matters.",
          ],
          highlight: "Use the formula as a lens, not a mandatory checklist.",
        },
        {
          type: 'concept',
          eyebrow: 'The formula in action',
          icon: '✍️',
          title: 'What a full four-part prompt looks like.',
          body: [
            "Here\'s the formula applied to a real task — preparing for a job interview:",
            "<strong>Role:</strong> \"Act as an experienced career coach\" <br><strong>Task:</strong> \"Help me prepare strong answers to common interview questions\" <br><strong>Context:</strong> \"I\'m interviewing for a project manager role at a mid-size marketing agency. I have 8 years of experience but I\'m moving from nonprofit to corporate.\" <br><strong>Format:</strong> \"Give me 3 practice questions with a suggested answer structure for each — not scripted answers, just the key points to hit.\"",
            "Every part earns its place. Nothing is filler.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: "Write a four-part prompt for something you need this week.",
          body: [
            "Use the formula to write a complete prompt for a real task. Fill in all four parts — even if you end up cutting one before you send. The practice of building all four is where the skill lives.",
          ],
          prompt: "Act as [a specific role — an experienced editor / a small business marketing consultant / a plain-English financial advisor]. I need you to [exact task — write / summarize / create / review / explain]. Here\'s the context: [2–3 sentences about your situation, who it\'s for, and what matters most]. Please deliver this as [format — a bullet list / a short email / a numbered checklist / a 3-paragraph summary / under 150 words].",
          body2: "After you get the response, check it against the four markers from Module 1: specific, usable, right length, right tone. If anything\'s off, identify which part of the formula needs adjusting — and fix just that part.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: "You have a framework. Now let's go deep on each part.",
          body: [
            "The four-part formula — Role, Task, Context, Format — is the backbone of every strong prompt. Over the next four lessons, you\'ll go deep on each one: what it does, when to use it, and what it looks like in practice.",
            "Next up: Role — the one addition that immediately changes the quality of any response.",
          ],
          summaryList: [
            'The four-part formula: Role, Task, Context, Format',
            'Each part handles a different dimension of your request',
            'You don\'t always need all four — use them as a checklist, not a mandate',
            'The formula replaces guesswork with a reliable system',
          ],
        },
      ],
    },
    {
      id: 1,
      title: 'Role — Tell It Who It\'s Being',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 2 · Lesson 2',
          icon: '🎭',
          title: 'One sentence changes who answers your question.',
          body: [
            "Adding a role to your prompt — \"Act as an experienced marketing consultant\" or \"You\'re a friendly writing coach\" — instantly changes how AI responds. It shifts the tone, the expertise level, the framing, and what the response prioritizes.",
            "Role-setting is one of the simplest and most powerful techniques in the formula. It takes five words and makes a noticeable difference almost every time.",
          ],
          sub: "Tell it who it's being — and it will be that.",
        },
        {
          type: 'concept',
          eyebrow: 'What role-setting does',
          icon: '🔧',
          title: 'Role puts AI in a frame that shapes the entire response.',
          body: [
            "When you assign a role, you\'re not just adding a title. You\'re signaling a set of assumptions: what expertise to draw on, what level of detail is appropriate, what tone fits, and what the person asking this question probably needs.",
            "\"Explain this to me\" gets one kind of response. \"Act as a patient high school teacher and explain this to me\" gets something noticeably different — clearer language, better examples, more structured. Same question, different frame.",
          ],
          highlight: "A role is a shortcut for a whole set of communication and expertise assumptions.",
        },
        {
          type: 'concept',
          eyebrow: 'Roles that work',
          icon: '🎯',
          title: 'Good roles to use — and what each one unlocks.',
          body: [
            "The best roles are specific enough to create a frame, but not so narrow they become unrealistic. These are the roles that consistently improve responses:",
          ],
          list: {
            items: [
              '<strong>Expert consultant:</strong> "Act as an experienced HR consultant." → Gets precise, professional advice calibrated to real-world constraints.',
              '<strong>Friendly teacher:</strong> "Act as a patient teacher explaining this to someone who\'s new to the topic." → Gets clearer language, better analogies, no jargon.',
              '<strong>Experienced editor:</strong> "Act as a direct, honest editor." → Gets feedback that\'s specific, useful, and not just encouraging.',
              '<strong>Devil\'s advocate:</strong> "Act as a skeptic and challenge my reasoning." → Gets the pushback you need before you commit to a plan.',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Roles to avoid',
          icon: '⚠️',
          title: "Vague, unrealistic, or unnecessary roles that add noise.",
          body: [
            "Not all roles improve a response. These patterns tend to make things worse, not better:",
          ],
          list: {
            items: [
              '<strong>Too vague:</strong> "Act as an expert" — expert in what? Give it a domain. "Act as an expert" is no different from asking normally.',
              '<strong>Unrealistic:</strong> "Act as Elon Musk" or "Act as my deceased mentor" — these push AI into speculation and reduce reliability.',
              '<strong>Unnecessary:</strong> Simple, clear tasks don\'t need a role. "Give me 5 synonyms for \'happy\'" doesn\'t benefit from "Act as a linguist." Just ask.',
            ],
            negative: true,
          },
        },
        {
          type: 'compare',
          eyebrow: 'Same question — with and without a role',
          title: "How a role changes everything — even when the request is identical.",
          bad: {
            label: '❌ Without a role',
            text: '"I have an idea for a side business selling handmade candles online. What do you think?"',
          },
          good: {
            label: '✅ With a role',
            text: '"Act as a candid small business advisor who doesn\'t sugarcoat. I have an idea for a side business selling handmade candles online. What are the real challenges I should know about before I start — and what would separate someone who makes money from someone who just has an expensive hobby?"',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Use a role to improve a response on something you\'re working on.',
          body: [
            "Take something real from your work this week — a plan, a piece of writing, a decision, an idea — and use a role to shape how AI engages with it. Pick a role that would genuinely be useful: an editor, a skeptic, a consultant in your field.",
          ],
          prompt: "Act as an experienced [choose a role: business strategist / plain-English writing coach / operations consultant / marketing advisor for small businesses]. I\'m going to share [a plan / a draft / an idea / a decision I\'m weighing] and I want your honest, specific feedback. Don\'t just tell me it sounds good — tell me what\'s strong, what\'s weak, and what you\'d change first.\n\nHere it is: [paste your content or describe your situation in 3–5 sentences].",
          body2: "Read the response with the role in mind. Would you have gotten that level of specificity and directness without it? If something still feels off, try a different role — \"honest advisor\" vs. \"supportive coach\" will give you noticeably different flavors.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: "Five words — 'Act as a [role]' — change who answers your question.",
          body: [
            "Role is the most immediately noticeable part of the formula. Once you start using it consistently, you\'ll find it hard to go back to roleless prompts — the difference is that clear.",
            "Next up: Task — the most important part of the formula, and the one most people get wrong.",
          ],
          summaryList: [
            'Role-setting shifts tone, expertise, framing, and priority all at once',
            'Good roles: expert consultant, friendly teacher, experienced editor, devil\'s advocate',
            'Bad roles: too vague, unrealistic, or unnecessary for simple tasks',
            '"Act as a [specific, relevant role]" is five words that change everything',
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Task — Say Exactly What You Want',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 2 · Lesson 3',
          icon: '✅',
          title: "The task is the most important sentence in your prompt.",
          body: [
            "Of the four building blocks, Task is the one that matters most. Everything else — role, context, format — exists to support it. But if the task itself is unclear, nothing else can save the response.",
            "Most people think they\'re being clear about the task when they\'re actually being vague. This lesson shows you how to close that gap.",
          ],
          sub: 'Be explicit. Say what you want. Get what you asked for.',
        },
        {
          type: 'concept',
          eyebrow: 'The core rule',
          icon: '📌',
          title: 'Be explicit. Use a clear action verb.',
          body: [
            "The task should always open with an action verb that tells AI exactly what operation to perform. Write. Summarize. List. Explain. Rewrite. Review. Compare. Draft. Translate. Critique.",
            "Vague openers like \"help me with\" or \"do something about\" don\'t define the operation — they just gesture at it. When AI doesn\'t know the exact action, it guesses. And its guess and your expectation rarely match.",
          ],
          highlight: 'Start your task with an action verb. Full stop.',
        },
        {
          type: 'concept',
          eyebrow: 'Action verbs in practice',
          icon: '⚡',
          title: "\"Write me 5 subject lines\" beats \"give me some email ideas.\"",
          body: [
            "The difference between a clear task and a vague one is specificity of action. Compare these pairs and notice what changes:",
          ],
          list: {
            items: [
              '❌ "Help me with my bio" → ✅ "Write a 3-sentence professional bio in third person"',
              '❌ "Do something with this email" → ✅ "Rewrite this email to be more concise and direct — under 100 words"',
              '❌ "Give me some ideas" → ✅ "List 7 blog post title ideas on [topic], each under 10 words"',
              '❌ "Tell me about this topic" → ✅ "Explain [topic] in plain English — no jargon — in 4 bullet points"',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Quantity matters',
          icon: '🔢',
          title: "Include the output quantity — it signals you know what you want.",
          body: [
            "Telling AI how many of something you want is one of the simplest ways to improve the task. \"Give me subject lines\" will get you a variable number of variable quality. \"Give me 5 subject lines\" focuses the response.",
            "Quantity applies to more than counts — it also means scope. \"A 200-word summary\" is more useful than \"a summary.\" \"A 5-point checklist\" is more useful than \"a checklist.\" The more specific the output target, the more accurate the response.",
          ],
          highlight: "Name the number: 3 options, a 150-word draft, a 5-step checklist. It works every time.",
        },
        {
          type: 'compare',
          eyebrow: 'Vague vs. clear task',
          title: 'Same report. Completely different output direction.',
          bad: {
            label: '❌ Vague task',
            text: '"Can you help me with this quarterly report? I need it to be better."',
          },
          good: {
            label: '✅ Clear task',
            text: '"Rewrite the executive summary of this quarterly report. Make it more direct — cut any jargon, lead with the top 2 results, and end with one clear recommendation. Target length: 3 short paragraphs. [Paste report content here]"',
          },
        },
        {
          type: 'concept',
          eyebrow: 'The compound task',
          icon: '🔗',
          title: "Asking for two things at once — and how to do it right.",
          body: [
            "Sometimes you need AI to do more than one thing — write something <em>and</em> give you options, or explain something <em>and</em> tell you what to do with the information. That\'s fine, as long as you\'re explicit about both tasks.",
            "The pattern: state task one, then say \"also\" or \"then\" and state task two. Keep each task specific. \"Write a 2-paragraph summary of this document, and then list the 3 most important action items\" is clear and achievable in one prompt.",
          ],
          highlight: "Two tasks in one prompt is fine. Vague tasks in one prompt multiplies the problem.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: "Write a precise task prompt — with a verb, a quantity, and a scope.",
          body: [
            "Think of something you need to produce or understand this week. Write a task-only prompt (no role, no format — just the task) using a clear action verb, a specific quantity, and a defined scope. Keep it under 30 words.",
          ],
          prompt: "Write [number] [content type] about [specific topic], each [length/constraint]. The audience is [who they are in one phrase]. Angle: [one sentence on the specific take or perspective you want].",
          body2: "Check your prompt: Does it open with an action verb? Does it include a quantity? Does it define a scope or constraint? If all three are yes, send it. If one is missing, add it in under 10 words. Then compare this response to a vague version — the gap will be obvious.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: "The task is your most important sentence. Make it count.",
          body: [
            "Action verb. Specific quantity. Defined scope. Those three elements make any task prompt strong — and they take seconds to add.",
            "Next up: Context — what to share about your situation, why it matters, and how much is too much.",
          ],
          summaryList: [
            'Open the task with a clear action verb: write, summarize, list, explain, rewrite',
            'Include quantity: 5 options, 200 words, a 4-point checklist',
            'Vague tasks waste the role and context you added — the task must be explicit',
            'Two tasks in one prompt is fine if both are specific',
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Context — Give It Your Situation',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 2 · Lesson 4',
          icon: '🗂️',
          title: "AI doesn't know who you are — unless you tell it.",
          body: [
            "When you ask AI for help writing a client email, it doesn\'t know what industry you\'re in, who the client is, what your relationship is like, or what you\'re actually trying to accomplish. So it defaults to something generic.",
            "Context is the building block that turns a generic response into a tailored one. It\'s the background information that shapes everything AI says — and most people skip it entirely.",
          ],
          sub: "The more AI knows about your situation, the more useful it becomes.",
        },
        {
          type: 'concept',
          eyebrow: 'What context includes',
          icon: '📋',
          title: 'Context = who you are + what you\'re trying to do + who it\'s for.',
          body: [
            "Context doesn\'t mean life history. It means the specific information that would change what a good response looks like. Three categories cover most situations:",
            "<strong>Who you are:</strong> Your role, your industry, your relationship to the situation. <br><strong>What you\'re trying to do:</strong> Your actual goal, not just the task. What does success look like? <br><strong>Who it\'s for:</strong> Your audience — their background, what they know, what they care about.",
          ],
          highlight: "Context is what separates advice written for anyone from advice written for you.",
        },
        {
          type: 'concept',
          eyebrow: 'The two most powerful context sentences',
          icon: '💬',
          title: "Two sentences that change every response you get.",
          body: [
            "You don\'t need a paragraph of background. These two sentence types — your role and your goal — are the ones that consistently make the biggest difference in output quality.",
          ],
          list: {
            items: [
              '<strong>Your role sentence:</strong> "I\'m a [job title or role] at a [type of organization] and I work with [your clients or audience]." This one sentence calibrates expertise level, industry assumptions, and vocabulary.',
              '<strong>Your goal sentence:</strong> "My goal with this is to [specific outcome] — not just [generic outcome]." This prevents AI from optimizing for the wrong thing. Writing an email "to reschedule a meeting" is different from writing one "to reschedule a meeting with a client who\'s already frustrated by a previous delay."',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'What not to include',
          icon: '✂️',
          title: "You don't need to share everything. Just what changes the answer.",
          body: [
            "The goal of context isn\'t to tell AI your whole story — it\'s to share the specific details that would change what a good response looks like. If a detail wouldn\'t affect the response, it doesn\'t need to be in the prompt.",
            "Ask yourself: <em>If I hired a consultant for an hour, what would they need to know to actually help me?</em> That\'s your context. Leave out the history that doesn\'t change the advice.",
          ],
          highlight: "Share what changes the answer. Cut everything else.",
        },
        {
          type: 'compare',
          eyebrow: 'No context vs. rich context',
          title: 'The same business email — completely different results.',
          bad: {
            label: '❌ No context',
            text: '"Write an email checking in with a client."',
          },
          good: {
            label: '✅ Rich context',
            text: '"Write a short check-in email to a client who signed up for our bookkeeping software 30 days ago but hasn\'t logged in since the first week. I\'m the customer success manager. My goal is to re-engage them without sounding like a sales push — I genuinely want to know if they ran into something confusing. Warm, human tone. Under 100 words."',
          },
        },
        {
          type: 'concept',
          eyebrow: 'Context for sensitive situations',
          icon: '🤝',
          title: "The more sensitive the situation, the more context matters.",
          body: [
            "For routine tasks — a subject line, a list of ideas — minimal context is fine. But for anything involving a real relationship, a difficult conversation, a consequential decision, or a specific audience: context is everything.",
            "Think of a difficult conversation you\'re preparing for. Without context, AI gives you a generic script. With context — the history, the stakes, the person, the dynamic — it gives you something you could actually use. The difference is night and day.",
          ],
          highlight: "High-stakes situations demand high-context prompts. Don\'t shortchange the setup.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Add your situation to a prompt you\'d normally keep generic.',
          body: [
            "Think of a message or piece of writing you need to produce for a specific person or audience. Write the prompt twice: once without context (just the task), and once with your two context sentences added. Compare the two responses.",
          ],
          prompt: "I need to [exact task]. Here\'s the context: I\'m a [your role] at [type of organization/company]. I\'m writing this for [describe the recipient or audience — their background, what they know, what they care about]. My goal isn\'t just to [generic outcome] — it\'s specifically to [real, specific outcome you want]. Tone: [warm / professional / direct / informal]. Length: [under 150 words / 3 short paragraphs / etc.].",
          body2: "After you get the response, ask: \"Does this sound like it was written for my specific situation — or could it have been written for anyone?\" If it still feels generic, identify which context detail is missing and add just that.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: "Context is what turns general advice into yours.",
          body: [
            "Two sentences — who you are and what you\'re really trying to do — transform what AI gives you. Not because AI gets smarter, but because you\'ve given it something real to work with.",
            "Last building block: Format — how to tell AI exactly how you want the output delivered, so you get something you can use without reformatting.",
          ],
          summaryList: [
            'Context = who you are + what you\'re trying to do + who it\'s for',
            'Two sentences: your role sentence and your goal sentence',
            'Only include context that would change what a good response looks like',
            'High-stakes situations need high-context prompts — don\'t shortchange the setup',
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Format — Tell It How to Deliver',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 2 · Lesson 5',
          icon: '📐',
          title: "The content might be right. The format might make it useless.",
          body: [
            "Imagine asking AI to help you prepare for a presentation and getting back three dense paragraphs when you needed a bullet list you could actually read from. The information is there. But the format makes it unusable.",
            "Format is the building block that controls how AI delivers its response — and it\'s the one most people forget to specify. This lesson fixes that.",
          ],
          sub: "Specify the format and get something you can actually use.",
        },
        {
          type: 'concept',
          eyebrow: 'Format options',
          icon: '📋',
          title: 'What you can ask for — and when to use each.',
          body: [
            "Format isn\'t just about visual style. It\'s about matching the output to how you\'re going to use it. Here are the most useful formats to know:",
          ],
          list: {
            items: [
              '<strong>Bullet list:</strong> quick scanning, brainstorming, checklists, pros/cons',
              '<strong>Numbered steps:</strong> processes, tutorials, how-tos where order matters',
              '<strong>Table:</strong> comparisons, feature lists, side-by-side options',
              '<strong>Short paragraphs:</strong> narrative explanations, summaries, context-setting',
              '<strong>Email:</strong> when you want a ready-to-send message with subject line, greeting, and close',
              '<strong>Script or dialogue:</strong> presentations, talking points, practice conversations',
              '<strong>Q&A:</strong> FAQs, interview prep, anticipated objections with answers',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'The default problem',
          icon: '⚠️',
          title: "AI defaults to paragraphs. That's often not what you need.",
          body: [
            "Left to its own devices, AI almost always produces flowing paragraphs — that\'s its natural output mode. Paragraphs are fine for some things. For most of the things people actually use AI for at work — checklists, step-by-step guides, comparison summaries, talking points — paragraphs are the wrong format.",
            "You can\'t scan paragraphs quickly. You can\'t read from them in a meeting. You can\'t hand them to someone who needs to act fast. Telling AI the format costs you five words and saves you several minutes of reformatting.",
          ],
          highlight: "If you don\'t specify the format, you\'ll spend time fixing it after the fact.",
        },
        {
          type: 'concept',
          eyebrow: 'Length control',
          icon: '📏',
          title: "Tell it how long — and mean it.",
          body: [
            "AI will write as much as you let it. Without a length constraint, longer is its default. For a lot of everyday tasks — a check-in email, a meeting recap, a social media post — shorter is almost always better.",
            "Length instructions that work: \"in under 100 words,\" \"3 short paragraphs,\" \"a one-page outline,\" \"no more than 5 bullet points,\" \"fit it on a single slide.\" Specific length guidance consistently produces better output than vague requests for something \"brief\" or \"concise.\"",
          ],
          highlight: "\"Under 100 words\" is more useful than \"keep it short.\" Specific always beats vague.",
        },
        {
          type: 'compare',
          eyebrow: 'No format vs. specified format',
          title: 'A how-to guide — useless vs. immediately actionable.',
          bad: {
            label: '❌ No format specified',
            text: '"Explain how to set up a new employee\'s first week."',
          },
          good: {
            label: '✅ Format specified',
            text: '"Create a first-week onboarding checklist for a new office manager. Format: numbered steps grouped into 3 sections — Day 1, Days 2–3, and Week 1 wrap-up. Each step should be one action sentence. Keep the total list under 20 items."',
          },
        },
        {
          type: 'concept',
          eyebrow: 'Format as clarity',
          icon: '💡',
          title: "Specifying format isn't about aesthetics — it's about usability.",
          body: [
            "When you specify a format, you\'re not just asking AI to arrange text differently. You\'re forcing it to think about how the information will be used, not just what the information is. A checklist\'s structure forces it to be action-oriented. A table structure forces it to be comparative. A script structure forces it to be spoken.",
            "The format instruction changes the thinking behind the response, not just the appearance of it.",
          ],
          highlight: "Format shapes how AI thinks about your request — not just how it delivers the answer.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: "Specify the format — and get something you can use immediately.",
          body: [
            "Take a task you\'ve been putting off because the output you imagined felt like too much work to produce. Use the full four-part formula and add an explicit format instruction. You should be able to copy and use the result with minimal editing.",
          ],
          prompt: "Act as [a specific role — an experienced operations manager / a plain-English business writer / a direct and concise editor]. I need you to [exact task with action verb and quantity]. Context: [2 sentences — who you are, who this is for, what the goal is]. Format: [specific format — numbered steps / bullet points under 3 headings / a ready-to-send email / a table with 3 columns: Action, Owner, Deadline]. Length: [specific constraint].",
          body2: "After you get the result, ask yourself: could I use this right now, without reformatting? If yes — that\'s the standard to maintain. If not, identify which format detail to add or sharpen and try once more.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 2 Complete',
          icon: '🎉',
          title: "You have the full formula. Now use it on everything.",
          body: [
            "Module 2 is done. You now have the complete four-part formula: Role, Task, Context, Format. Each part does a specific job — and together they give AI everything it needs to produce a response you can actually use.",
            "Module 3 takes this further: advanced techniques for refining responses, getting multiple options, and building prompts for complex, multi-step tasks.",
          ],
          summaryList: [
            'AI defaults to paragraphs — specify the format to get what you actually need',
            'Format options: bullet list, numbered steps, table, email, script, Q&A',
            'Length control: "under 100 words" beats "keep it short" every time',
            'Format shapes how AI thinks about your request, not just how it looks',
            'The complete formula: Role + Task + Context + Format = a response you can use',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'What is the purpose of the Role building block in the four-part formula?',
      options: [
        "It tells AI what output format to use",
        "It tells AI who it's being — which shapes the tone, expertise level, and framing of the entire response",
        "It describes your personal background and work history",
        "It sets the word count limit for the response",
      ],
      correct: 1,
      feedback:
        "Role puts AI in a frame that shapes everything — what expertise to draw on, what tone is appropriate, and what the person asking this question probably needs. Five words like \"Act as an experienced editor\" immediately change the quality and angle of the response. It\'s the fastest upgrade in the formula.",
    },
    {
      q: 'You need a response you can use as a checklist at a team meeting. What building block handles this?',
      options: [
        'Role — assign AI the role of a meeting facilitator',
        'Task — ask it to "create a checklist"',
        'Format — specify the output as a numbered checklist with one action per line',
        'Context — explain that you\'re holding a team meeting',
      ],
      correct: 2,
      feedback:
        "Format is the building block that controls how AI delivers its response. Specifying \"numbered checklist, one action per line\" ensures you get something scannable and usable — not three paragraphs of prose you\'d have to reformat. Format shapes the thinking behind the response, not just its appearance.",
    },
    {
      q: "What's the most important element of a strong Task prompt?",
      options: [
        'A clear action verb that tells AI exactly what operation to perform',
        'A description of your personal background and experience',
        'A polite request that begins with "please"',
        'A detailed explanation of why you need the output',
      ],
      correct: 0,
      feedback:
        "The task should always open with a clear action verb: write, summarize, list, explain, rewrite, review, compare. Vague openers like \"help me with\" don\'t define the operation — they gesture at it. When AI doesn\'t know the exact action, it guesses. Adding a quantity and scope on top of the action verb makes the task complete.",
    },
  ],
}

export default c5module2
