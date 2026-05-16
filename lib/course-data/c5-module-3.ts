import type { CourseData } from './types'

const c5module3: CourseData = {
  moduleId: 27,
  title: 'Context Is Everything',
  subtitle: 'Module 3',
  nextModuleId: 28,
  lessons: [
    {
      id: 0,
      title: 'Why Context Transforms Results',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 3 · Lesson 1',
          icon: '🔑',
          title: 'Two people. Same question. Completely different answers.',
          body: [
            'Ask a doctor and a teenager "should I take ibuprofen?" and you get two very different responses — because the doctor brings context about your health, and the teenager doesn\'t.',
            'AI works the same way. It tailors its response to the context it has. Without context, it guesses. With context, it delivers something genuinely useful to <em>you</em>.',
          ],
          sub: 'This module is about giving AI the information it needs to stop guessing.',
        },
        {
          type: 'concept',
          eyebrow: 'Why it matters',
          icon: '🎲',
          title: 'Without context, AI fills in the blanks — often wrong.',
          body: [
            "When you ask a vague question, AI doesn't sit quietly and ask for more information. It makes assumptions and runs with them — imagining a generic person with a generic problem.",
            "Those assumptions might be nothing like your situation. The result feels generic because it <em>is</em> generic — it was written for nobody in particular.",
          ],
          highlight: 'Context turns a generic answer into advice that actually fits your life and work.',
        },
        {
          type: 'concept',
          eyebrow: 'The context equation',
          icon: '➕',
          title: 'Who you are + what you need + who it\'s for = a useful response.',
          body: [
            "These three pieces of context do the most work. Together, they give AI enough to stop guessing and start tailoring.",
            "You don't need all three every time — but knowing they exist means you'll instinctively reach for the right one when a response feels off.",
          ],
          list: {
            items: [
              '<strong>Who you are:</strong> Your role, background, experience level',
              '<strong>What you need:</strong> Your goal, not just your task',
              '<strong>Who it\'s for:</strong> The audience who will read or hear the result',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'The good news',
          icon: '💬',
          title: 'Two sentences of context change everything.',
          body: [
            "You don't need to write a paragraph of background before every prompt. In most cases, a single sentence or two is enough to shift from generic to genuinely useful.",
            '"I\'m a nurse writing this for patients who are anxious about surgery" is two sentences. It changes the vocabulary, the tone, the level of detail — everything.',
          ],
          highlight: 'The goal isn\'t to write more. It\'s to include the right detail.',
        },
        {
          type: 'compare',
          eyebrow: 'Context in practice',
          title: 'Same question. Two very different responses.',
          body: ['Watch what happens when a single sentence of context is added to a difficult question:'],
          bad: {
            label: '❌ Without context',
            text: '"How do I tell someone they\'re being let go?" → Gets a generic HR script with formal language, legal caveats, and bullet points.',
          },
          good: {
            label: '✅ With 2 sentences of context',
            text: '"I\'m a small business owner and I\'m letting go of my first employee — someone I hired personally and genuinely like. How do I have this conversation?" → Gets a warm, honest guide tailored to a difficult personal situation.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Add your own context to a prompt you\'ve used before.',
          body: [
            "Think of a question you\'ve asked AI before where the answer felt too generic. Now add two sentences of context about who you are and what your situation actually is.",
          ],
          prompt: "I'm a [your role or situation]. Here's some background: [1-2 sentences about your specific context]. With that in mind: [your original question]. Please tailor your response to my situation rather than giving general advice.",
          body2: 'Compare this response to what you\'d normally get. Notice how much more specific and actionable it becomes when AI knows who it\'s talking to.',
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: 'Context is the simplest upgrade in prompting.',
          body: [
            "Generic prompts get generic answers. The fix isn't a longer prompt — it's a more specific one. Two sentences about who you are and what you actually need can transform the response.",
            'The next four lessons break down each piece of the context equation so you can use them one at a time.',
          ],
          summaryList: [
            'Without context, AI fills in the blanks with generic assumptions',
            'The context equation: who you are + what you need + who it\'s for',
            'Two sentences of context is usually enough to change everything',
            'A specific prompt is almost always better than a longer one',
          ],
        },
      ],
    },
    {
      id: 1,
      title: 'Tell It Who You Are',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 3 · Lesson 2',
          icon: '👤',
          title: "AI gives better advice when it knows who it's advising.",
          body: [
            "A financial advisor who knows you're 28 and just starting out gives very different guidance than one who thinks you're 55 and near retirement. The question might be the same — the useful answer is completely different.",
            'When you tell AI who you are, you unlock responses that are actually calibrated to your life and situation.',
          ],
          sub: "You're not sharing personal data. You're giving it a frame to work within.",
        },
        {
          type: 'concept',
          eyebrow: 'Your role matters',
          icon: '💼',
          title: '"I\'m a teacher" gets very different advice than "I\'m a contractor."',
          body: [
            "The same question — \"how do I deal with a difficult client?\" — means something completely different depending on whether you\'re a freelance consultant or a classroom teacher managing a parent.",
            "Your role gives AI the professional vocabulary, context, and constraints that make its answer actually applicable to you.",
          ],
          highlight: 'One sentence about your job or role reframes the entire response.',
        },
        {
          type: 'concept',
          eyebrow: 'Your experience level matters',
          icon: '📊',
          title: '"I\'ve never done this before" vs. "I\'ve been doing this for 10 years."',
          body: [
            '"I\'ve never led a meeting before" tells AI to explain basics and reassure you. "I\'ve been running meetings for a decade, but this one has a difficult stakeholder" tells it to skip the basics and get specific.',
            "Without this signal, AI might over-explain things you already know — or skip steps you actually need.",
          ],
          list: {
            items: [
              '"I\'m new to this — please explain from the beginning"',
              '"I have some background in this, but I\'m not an expert"',
              '"I\'ve done this many times and just need a quick framework"',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'What to share',
          icon: '🔒',
          title: 'You\'re giving it a frame — not a biography.',
          body: [
            "You don\'t need to share personal details, private information, or anything you\'re not comfortable with. A sentence or two about your professional role and experience level is all it takes.",
            "Think of it the same way you\'d introduce yourself at the start of a conversation: enough to set the context, nothing more.",
          ],
          highlight: '"I\'m a [role] with [X years/no experience] in [relevant area]" — that\'s the whole format.',
        },
        {
          type: 'compare',
          eyebrow: 'Self-identification in action',
          title: 'Same question — two different people asking it.',
          bad: {
            label: '❌ No self-identification',
            text: '"How do I improve my public speaking?" → Gets a generic list: practice in front of a mirror, join Toastmasters, record yourself.',
          },
          good: {
            label: '✅ One sentence about who you are',
            text: '"I\'m a real estate agent who does client presentations every week. My content is solid but I lose people\'s attention around the 10-minute mark. How do I improve?" → Gets specific advice on pacing, structure, and re-engagement techniques for a professional context.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Introduce yourself — and get tailored advice.',
          body: [
            "Think of a skill you want to improve or a challenge you\'re facing at work. Write a prompt that starts with one sentence introducing who you are and your experience level before asking your question.",
          ],
          prompt: "I'm a [your job title or role] with [your experience level — e.g., 3 years of experience / no background in this area / 15 years in the field]. I'm working on [the challenge or skill]. Can you give me advice that\'s specific to someone in my position — not general tips, but guidance that takes my background into account?",
          body2: 'Notice how the response skips the basics you already know and homes in on what actually applies to you.',
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: 'One sentence about who you are is worth a paragraph of extra detail.',
          body: [
            "Your role, your experience level, and the context of your situation give AI the frame it needs to calibrate. Without it, you get advice for a hypothetical person. With it, you get advice for you.",
            'Next lesson: telling AI what your goal actually is — not just what task you need done.',
          ],
          summaryList: [
            'Your role shapes the vocabulary, tone, and focus of the response',
            'Your experience level determines how much detail and explanation AI provides',
            "You're giving context, not sharing personal data — keep it brief",
            '"I\'m a [role] with [experience]" is all the setup you need',
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Tell It Your Goal',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 3 · Lesson 3',
          icon: '🎯',
          title: 'There\'s a difference between a task and a goal — and it matters.',
          body: [
            '"Write me an email" is a task. "Help me rebuild trust with a client who\'s frustrated with our delays" is a goal. The task tells AI what to produce. The goal tells it what success looks like.',
            "When AI knows your goal, it makes better choices about what to include, what tone to use, and what outcome to aim for — even in the spaces between your instructions.",
          ],
          sub: 'This lesson is about moving from task-thinking to goal-thinking.',
        },
        {
          type: 'concept',
          eyebrow: 'Task vs. goal',
          icon: '🔀',
          title: 'The task is the output. The goal is the outcome.',
          body: [
            '"I need to write an email" describes what you\'re making. "I need to rebuild trust with a frustrated client" describes what you\'re trying to achieve. They\'re not the same thing — and AI responds differently to each.',
            "When you share the goal, AI can make judgment calls: how formal to be, what to emphasize, what to leave out. When you only share the task, it fills those gaps with guesses.",
          ],
          highlight: "Try this: after any task request, ask yourself — <em>what am I actually trying to achieve?</em> That's your goal.",
        },
        {
          type: 'concept',
          eyebrow: 'Short-term vs. long-term goals',
          icon: '📅',
          title: 'Sometimes the goal extends beyond the immediate task.',
          body: [
            '"I need to write talking points for a presentation" is the immediate task. But if your real goal is "I want to be seen as a credible expert in this room so they invite me back," that context completely changes what good talking points look like.',
            "You don't need to explain your entire life plan. But if there\'s a larger purpose driving the task, a sentence about it helps AI understand what you\'re really optimizing for.",
          ],
          list: {
            items: [
              '"The immediate goal is X, but the bigger picture is Y"',
              '"This is part of a longer project where I\'m trying to [outcome]"',
              '"The person reading this will then need to [next step]"',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'The payoff',
          icon: '🏆',
          title: 'The more specific your goal, the more targeted the help.',
          body: [
            '"Help me with my presentation" could mean a hundred things. "Help me structure a 10-minute presentation that convinces skeptical colleagues to try a new workflow" is one very specific thing — and AI can actually aim at it.',
            "Specificity in your goal isn't extra work. It's the work that makes everything else easier.",
          ],
          highlight: "Vague goal = generic response. Specific goal = response that's actually useful.",
        },
        {
          type: 'compare',
          eyebrow: 'Goal-driven prompting in practice',
          title: 'Task-only vs. goal-driven — same situation, different results.',
          bad: {
            label: '❌ Task-only prompt',
            text: '"Write an apology email to a client." → Gets a formal, boilerplate apology with placeholder text. Sounds like it was written by a committee.',
          },
          good: {
            label: '✅ Goal-driven prompt',
            text: '"Write an email to a client who\'s been waiting three weeks longer than promised. My goal isn\'t just to apologize — it\'s to keep their business and show them this won\'t happen again. Warm but professional tone." → Gets a specific, human apology with accountability and a concrete next step.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Write a goal-driven prompt for something you\'re working on.',
          body: [
            "Think of a task you need to get done this week. Before writing the prompt, ask yourself: what\'s the actual outcome I\'m trying to achieve here? Write that into your prompt.",
          ],
          prompt: "I need to [the task — write / create / plan / explain something]. The goal isn\'t just to complete the task — I\'m trying to [the real outcome you want]. The person who will read this is [who they are and their mindset]. Please keep that goal in mind as you write, not just the task itself.",
          body2: 'Ask yourself after you read the response: does this feel like it\'s aimed at my actual goal — or just the surface task? If not, add one more sentence of goal context and try again.',
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: 'Goals give AI something to aim at. Tasks just tell it what to make.',
          body: [
            "Every task has a goal behind it. When you share that goal, AI can make better decisions on your behalf — about tone, emphasis, structure, and what to leave out.",
            'Next lesson: the third piece of the context equation — telling AI who the response is for.',
          ],
          summaryList: [
            'A task is what you\'re making; a goal is what you\'re trying to achieve',
            'Share the goal so AI can make better judgment calls in its response',
            'Sometimes the goal extends beyond the immediate task — say so',
            'Specific goal = response that\'s actually aimed at your situation',
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Tell It Who It\'s For',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 3 · Lesson 4',
          icon: '👥',
          title: 'The same information lands completely differently depending on who\'s reading it.',
          body: [
            "A doctor explaining a diagnosis to a colleague uses different words than they would with a worried patient. A manager giving feedback to a seasoned employee takes a different tone than with someone in their first week.",
            "AI calibrates to the audience you describe — but only if you describe one. Without it, it writes for nobody in particular.",
          ],
          sub: 'Describe your audience and the response will feel written specifically for them.',
        },
        {
          type: 'concept',
          eyebrow: 'Why audience changes everything',
          icon: '🎭',
          title: 'Tone, vocabulary, complexity, and examples all shift with the audience.',
          body: [
            "When you tell AI who will read the output, it automatically adjusts: the vocabulary becomes more or less technical, examples become more or less familiar, and the tone becomes more or less formal.",
            "This isn't a small tweak — describing a different audience can produce a fundamentally different piece of writing from the exact same prompt.",
          ],
          highlight: 'The audience description is one of the highest-leverage pieces of context you can add.',
        },
        {
          type: 'concept',
          eyebrow: 'What to describe',
          icon: '📝',
          title: 'Age, background, relationship, technical level, emotional state.',
          body: [
            "You don\'t need to describe your audience in detail — just the dimensions that actually affect how the writing should land.",
            "Pick the one or two that matter most for your situation.",
          ],
          list: {
            items: [
              '<strong>Age/generation:</strong> "for someone in their 60s who didn\'t grow up with computers"',
              '<strong>Background:</strong> "for a non-technical audience" or "for fellow engineers"',
              '<strong>Relationship:</strong> "for my team" vs. "for a new client" vs. "for my boss"',
              '<strong>Technical level:</strong> "no jargon — explain it like I\'m new to this field"',
              '<strong>Emotional state:</strong> "for someone who\'s anxious about this" or "for a skeptical audience"',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Use this to your advantage',
          icon: '⚡',
          title: 'AI calibrates to the audience you describe — every time.',
          body: [
            "Once you know this, you can use it deliberately. The same content — a health explanation, a policy change, a new process — can be instantly rewritten for different audiences without starting from scratch.",
            '"Rewrite this for a skeptical executive audience." "Now rewrite it for a frontline employee who\'s nervous about changes." Two audiences, two drafts, two minutes.',
          ],
          highlight: 'Audience-switching is one of the most time-saving moves in AI writing.',
        },
        {
          type: 'compare',
          eyebrow: 'Audience in action',
          title: 'Same health information. Two very different audiences.',
          bad: {
            label: '❌ No audience specified',
            text: '"Explain what high blood pressure means." → Gets a clinical, textbook-style explanation with medical terminology. Fine for a nurse. Confusing for a nervous 72-year-old.',
          },
          good: {
            label: '✅ Clear audience described',
            text: '"Explain what high blood pressure means for my elderly mother, who has no medical background and tends to worry. Use plain English and a reassuring tone." → Gets a clear, warm explanation that avoids jargon and acknowledges her concern.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Write something for a specific audience.',
          body: [
            "Think of something you need to explain or write for a real person or group — a message, an explanation, an announcement, a proposal. Describe that audience in your prompt before writing.",
          ],
          prompt: "I need to [write / explain / describe something]. The audience is [describe them: their background, technical level, relationship to you, or emotional state]. Please tailor your response for this specific audience — adjusting vocabulary, tone, and examples to what will actually land for them.",
          body2: 'Try asking for a second version for a different audience. Notice how dramatically the same content changes when the audience changes.',
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: 'When AI knows who it\'s writing for, it writes for them — not for everyone.',
          body: [
            "Audience is one of the fastest upgrades in your prompting. Describe the person on the other end, and AI stops writing generically and starts writing specifically.",
            "Last lesson in this module: the final piece of the context equation — giving AI the guardrails that keep it inside the lines you actually need.",
          ],
          summaryList: [
            'Audience changes tone, vocabulary, complexity, and examples',
            'Describe the dimensions that matter: background, technical level, emotional state, relationship',
            'AI calibrates automatically when you describe the audience',
            'Use audience-switching to quickly create versions for different readers',
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Tell It Your Constraints',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 3 · Lesson 5',
          icon: '⚙️',
          title: 'The guardrails you give AI are a gift — not a limitation.',
          body: [
            "Without constraints, AI has infinite choices: any length, any tone, any format. That sounds like freedom, but it often produces responses that are too long, too formal, or structured in a way that doesn\'t work for your situation.",
            'When you give AI clear constraints — length, tone, things to avoid — you narrow the space to exactly what you need.',
          ],
          sub: 'Constraints are one of the most underused tools in prompting.',
        },
        {
          type: 'concept',
          eyebrow: 'Why constraints improve precision',
          icon: '🎯',
          title: 'A narrow target is easier to hit than a wide open field.',
          body: [
            "Every time AI has to guess your preferences — how long? how formal? what format? — it introduces variance. Sometimes it guesses right. Often it doesn\'t.",
            "Constraints remove those guesses. When you say \"in under 150 words, casual tone, no bullet points,\" AI stops guessing and starts delivering.",
          ],
          highlight: 'Constraints are precision tools. The more specific you are, the less editing you\'ll need to do.',
        },
        {
          type: 'concept',
          eyebrow: 'Common constraints',
          icon: '📋',
          title: 'Length, tone, and things to avoid.',
          body: [
            "These three categories cover most of what you\'ll want to specify. You don\'t need all three every time — pick the ones that matter most for your task.",
          ],
          list: {
            items: [
              '<strong>Length:</strong> "in under 100 words" / "no more than 3 paragraphs" / "a single sentence"',
              '<strong>Tone:</strong> "friendly but professional" / "casual, like a text to a colleague" / "confident, not apologetic"',
              '<strong>Avoidances:</strong> "no bullet points" / "don\'t use jargon" / "avoid anything that sounds like a sales pitch"',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Voice and brand constraints',
          icon: '🎨',
          title: '"Match the tone of this sample" is one of the most powerful constraints you can give.',
          body: [
            'If you have a piece of writing that already sounds like you — or like your brand — you can paste it in and ask AI to match it. This is faster and more accurate than trying to describe tone in words.',
            '"Here\'s a sample of how I write. Match this voice for everything in this conversation." That one instruction can carry through an entire session.',
          ],
          list: {
            items: [
              '"Write in first person, conversational — like a letter to a friend, not a press release"',
              '"Here\'s a sample of our brand voice. Match this style."',
              '"Avoid the word \'leverage\' and any phrase that sounds corporate"',
              '"Write like you\'re talking, not presenting — short sentences, natural rhythm"',
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'Constraints in action',
          title: 'Same request. One with no constraints, one with three.',
          bad: {
            label: '❌ No constraints',
            text: '"Write a social media post about our new service." → Gets a long, formal announcement with hashtags and exclamation marks. Doesn\'t sound like you. Too long for LinkedIn. Unusable.',
          },
          good: {
            label: '✅ Clear constraints',
            text: '"Write a LinkedIn post about our new service. Under 100 words. First-person, casual and direct — no corporate-speak. No hashtags. End with one question to invite comments." → Gets something short, human, and actually postable.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Write a prompt with at least two explicit constraints built in.',
          body: [
            "Think of something you need to write for work or personal use. Include at least two constraints in your prompt — length, tone, things to avoid, or a sample to match. See how much less editing you need to do.",
          ],
          prompt: "Write a [type of content — email / post / message / announcement] about [topic]. Constraints: [length — e.g., under 150 words / no more than 2 paragraphs]. Tone: [e.g., warm and direct / professional but not stiff / conversational]. Avoid: [anything you don't want — jargon / bullet points / a formal salutation / a certain phrase].",
          body2: 'If it\'s still not right after the first response, add one more constraint in a follow-up: "Make it shorter" or "Less formal." Each constraint you add gets it closer.',
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 3 Complete',
          icon: '🎉',
          title: 'You now have the full context framework.',
          body: [
            "Context is the difference between a generic response and one that actually fits your situation. You have four tools now: who you are, your goal, your audience, and your constraints. You don\'t need all four every time — but knowing they exist means you\'ll reach for the right one.",
            'Module 4 builds on this: the art of the follow-up — getting better results not just from your first prompt, but from the conversation that follows.',
          ],
          summaryList: [
            'Constraints remove guesswork and improve precision',
            'Key constraints: length, tone, and things to avoid',
            '"Match the tone of this sample" is one of the most powerful moves you can make',
            'Two or three constraints is usually enough — you don\'t need to overspecify',
            'Full context framework: who you are + your goal + your audience + your constraints',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'You ask AI for advice and the response feels too generic. What\'s the most likely reason?',
      options: [
        "AI doesn't know enough about your topic",
        'You gave it too much information',
        'You didn\'t provide context about who you are or what you\'re trying to achieve',
        'Generic responses are normal and unavoidable',
      ],
      correct: 2,
      feedback: "When AI doesn't know your role, your goal, or your situation, it writes for a hypothetical average person. That's who generic responses are for. Two sentences of context is usually enough to change everything.",
    },
    {
      q: 'What\'s the difference between a task and a goal in prompting?',
      options: [
        "They're the same thing — just different words for what you want AI to do",
        'A task is what you\'re making; a goal is the outcome you\'re actually trying to achieve',
        'Tasks are for short prompts; goals are for long ones',
        'A goal is more important than a task and should always come first',
      ],
      correct: 1,
      feedback: '"Write an email" is a task. "Rebuild trust with a frustrated client" is a goal. When AI knows the goal, it makes better decisions about tone, emphasis, and what to include — not just what format to produce.',
    },
    {
      q: 'You need to explain a new company policy to two different groups: executives and frontline employees. What\'s the most efficient approach?',
      options: [
        'Write two completely separate prompts from scratch',
        'Write one version and send the same thing to both groups',
        "Ask AI to write the first version with a clear audience description, then ask it to rewrite for the second audience",
        'Use AI only for the first group and write the second manually',
      ],
      correct: 2,
      feedback: "Audience-switching is one of the fastest moves in AI writing. Write one version with a clear audience description, then follow up: \"Rewrite this for [different audience].\" Two versions in two minutes — no starting over.",
    },
  ],
}

export default c5module3
