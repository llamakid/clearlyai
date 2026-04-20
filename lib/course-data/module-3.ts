import type { CourseData } from './types'

const module3: CourseData = {
  moduleId: 3,
  title: 'Think Smarter: AI for Research, Planning & Decisions',
  subtitle: 'Think Smarter',
  nextModuleId: 4,
  lessons: [
    {
      id: 0,
      title: 'AI as Your Research Partner',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 3 · Lesson 1',
          icon: '🔍',
          title: "AI doesn't just answer questions — it helps you ask better ones.",
          body: [
            "You've learned how to prompt. Now let's put that skill to work on something most professionals do every single day: figuring things out.",
            'Research. Background. Context. Understanding. AI can dramatically speed up how you gather and make sense of information.',
          ],
          sub: 'This lesson is about using AI to think, not just to write.',
        },
        {
          type: 'concept',
          eyebrow: 'The shift',
          icon: '🧭',
          title: 'AI research is a conversation, not a search.',
          body: [
            "When you Google something, you type a few words and pick through links. With AI, you have an actual conversation — you describe what you're trying to figure out, and it responds to <em>your situation</em>.",
            "That difference is huge. Google gives you what people have written. AI gives you answers synthesized for your specific question.",
          ],
          highlight: 'The key upgrade: you can keep going. Follow up. Dig deeper. Ask "why" and "what does that mean for me specifically."',
        },
        {
          type: 'concept',
          eyebrow: 'How to start',
          icon: '💬',
          title: 'Start broad, then go narrow.',
          body: [
            "The most effective AI research follows a simple pattern: start with a broad question to get oriented, then ask follow-up questions to go deeper on what matters most to you.",
            "Think of it like talking to a knowledgeable friend. You wouldn't ask a single question and walk away — you'd have a back-and-forth.",
          ],
          list: {
            items: [
              '<strong>First message:</strong> "Give me an overview of [topic] in plain English"',
              '<strong>Follow-up:</strong> "Which part of that is most relevant for someone in [your situation]?"',
              '<strong>Dig deeper:</strong> "Can you explain [specific term] in more detail?"',
              '<strong>Apply it:</strong> "How would this work in practice for [your specific context]?"',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'The most important rule',
          icon: '⚠️',
          title: 'AI research requires verification.',
          body: [
            'AI is excellent at explaining concepts, giving you frameworks, and helping you understand the shape of a topic. It is <strong>not</strong> reliable for specific facts, statistics, dates, names, or citations.',
            "Treat AI research like talking to a smart colleague who sometimes misremembers details. Their big-picture understanding is valuable. Their specific claims need checking.",
          ],
          highlight: 'Use AI to understand the landscape. Use primary sources to confirm the details. This combination is extremely powerful.',
        },
        {
          type: 'concept',
          eyebrow: 'A powerful technique',
          icon: '🎓',
          title: 'Ask it to teach you — not just tell you.',
          body: [
            'There\'s a big difference between "What is X?" and "Teach me about X like I\'m encountering it for the first time."',
            "The second framing invites a more thorough, better-structured explanation. Even more powerful: ask it to give you an analogy.",
          ],
          list: {
            items: [
              '"Explain this like I\'m smart but have no background in this field"',
              '"Give me an analogy that makes this click for someone who works in [your field]"',
              '"What are the 3 most important things to understand about this topic?"',
              '"What questions should I be asking about this that I haven\'t thought to ask yet?"',
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'Research in practice',
          title: 'Shallow vs. deep research — same tool, different approach.',
          body: ["Here's how the same research task looks with and without the follow-up habit:"],
          bad: {
            label: '❌ Shallow — one message',
            text: '"What is HIPAA?" → Gets a definition. Doesn\'t apply it. Moves on.',
          },
          good: {
            label: '✅ Deep — conversation',
            text: '"What is HIPAA?" → "How does this apply to a dental practice specifically?" → "What are the most common violations small practices make?" → "Give me a plain-English checklist I can share with my team."',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: "Research something you've been meaning to understand.",
          body: [
            "Think of a topic that's relevant to your work — something you've been meaning to understand better, an industry trend, a regulation, a concept a colleague mentioned. Open ChatGPT and start the conversation.",
          ],
          prompt: "I want to understand [topic] better. I work in [your field/role]. Can you give me a plain-English overview — the key concepts, why it matters for someone in my position, and the 3 most important things I should know? Then I'll ask follow-up questions.",
          body2: "After you get the first response, ask at least one follow-up question. Notice how much richer the second response is.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: "You've upgraded from searching to understanding.",
          body: [
            "The difference between AI research and Google search is the conversation. Keep going. Ask follow-ups. Dig into what matters for your specific situation.",
            'Next lesson: how to use AI to break down projects and plan anything.',
          ],
          summaryList: [
            'Start broad, then ask follow-up questions to go deeper',
            'Ask AI to teach you, not just tell you — and ask for analogies',
            'Verify specific facts, stats, and citations from primary sources',
            'The follow-up question is where real understanding happens',
          ],
        },
      ],
    },
    {
      id: 1,
      title: 'Breaking Down Any Project',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 3 · Lesson 2',
          icon: '🗂️',
          title: "AI doesn't just do tasks — it helps you plan them.",
          body: [
            "One of the most underused AI skills is project planning. Whether you're launching something new, organizing an event, or tackling a complex problem at work — AI can help you go from \"I don't know where to start\" to a clear action plan in minutes.",
          ],
          sub: 'No more staring at a blank to-do list.',
        },
        {
          type: 'concept',
          eyebrow: 'The core move',
          icon: '🧩',
          title: 'Describe the goal. Ask it to break it down.',
          body: [
            "The simplest and most powerful planning prompt is: describe what you're trying to accomplish, and ask AI to break it into steps.",
            "You don't need to know how to do it first. That's the point. Describe the outcome you want and let AI map the path.",
          ],
          highlight: '"I need to accomplish X by Y date. I\'ve never done this before. What are all the steps involved, and what should I tackle first?"',
        },
        {
          type: 'concept',
          eyebrow: 'What it can plan',
          icon: '📋',
          title: 'Almost anything with a goal and a deadline.',
          body: ["This works across every kind of project — not just work tasks."],
          list: {
            items: [
              'Planning a product launch or new service offering',
              'Organizing a team event, conference, or training session',
              "Creating a content calendar for your business's social media",
              'Preparing for a difficult conversation or negotiation',
              'Onboarding a new employee — building the checklist from scratch',
              'Planning a personal project like a home renovation or a trip',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'The planning conversation',
          icon: '🗣️',
          title: 'Treat it like a project kickoff meeting.',
          body: [
            "When you start a project planning conversation, give AI the same context you'd give a smart new colleague joining the project:",
            '<strong>The goal:</strong> What does success look like?<br><strong>The constraints:</strong> Timeline, budget, team size, resources.<br><strong>The unknown:</strong> What are you most unsure about?',
            "Then ask it to help you build the plan — and keep refining from there.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Beyond the task list',
          icon: '🔭',
          title: "Ask it to spot what you're missing.",
          body: [
            "One of the most valuable planning moves: after AI gives you a plan, ask it what you might be forgetting.",
            "It's surprisingly good at surfacing risks, dependencies, and steps that people commonly overlook — especially in domains where it has seen many similar projects.",
          ],
          list: {
            items: [
              '"What steps do people commonly forget when doing this?"',
              '"What could go wrong with this plan that I should prepare for?"',
              '"Is there anything in this timeline that looks unrealistic?"',
              '"What questions should I have answered before I start?"',
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'Planning in practice',
          title: 'The same project — with and without AI planning.',
          bad: {
            label: '⏱️ Without AI planning',
            text: 'Spend an hour writing a rough outline. Miss 4 key steps. Discover them mid-project when they cause delays. Scramble.',
          },
          good: {
            label: '✅ With AI planning',
            text: 'Spend 15 minutes in a planning conversation. Get a detailed step-by-step plan. Ask "what am I missing?" Catch 3 things before they become problems.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Plan something real — a project, event, or goal.',
          body: [
            'Think of something coming up that you need to plan — a project at work, an event, a new initiative. Open ChatGPT and walk through it together.',
          ],
          prompt: "I need to plan [describe the project or goal]. The deadline is [timeframe]. My constraints are [any limits — budget, team size, tools available]. I'm [most worried about / most unsure about] [specific concern]. Can you break this down into clear phases and action steps, and flag anything I should be thinking about that I might have missed?",
          body2: 'Once you have a plan, ask: "What could go wrong here that I should prepare for?" That follow-up alone is worth the whole lesson.',
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: 'You can walk into any project with a plan now.',
          body: [
            "AI doesn't just help you execute tasks — it helps you think through what the tasks should be. That's a different level of leverage.",
            "Next up: using AI to think through decisions — including the ones where you're genuinely unsure what to do.",
          ],
          summaryList: [
            'Describe the goal and deadline — AI maps the steps',
            "Give it the same context you'd give a smart new colleague",
            'Always ask "what am I missing?" — it catches what you\'d overlook',
            'Ask about risks and common failure points before you start',
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Thinking Through Decisions',
      meta: '9 slides · ~7 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 3 · Lesson 3',
          icon: '⚖️',
          title: 'A thinking partner — available any time you need one.',
          body: [
            "Some of the most valuable conversations happen when you're genuinely stuck — weighing a decision, navigating a tricky situation, or trying to see a problem from all sides.",
            "AI is an unusually good thinking partner for this. It doesn't have an agenda. It won't judge you. And it can hold a complex situation in mind and help you work through it.",
          ],
          sub: 'This lesson is about using AI to think better — not just work faster.',
        },
        {
          type: 'concept',
          eyebrow: 'Why it works',
          icon: '🧠',
          title: "AI has no stake in the outcome — and that's valuable.",
          body: [
            "When you ask a colleague or friend for advice, they bring their own interests, experiences, and biases. Sometimes that's great. Sometimes it muddies the water.",
            "AI gives you a neutral sounding board. It will lay out considerations, challenge your assumptions, and present multiple perspectives — without advocating for one because it benefits them.",
          ],
          highlight: "It's not replacing human judgment. It's giving you better raw material to apply your own judgment to.",
        },
        {
          type: 'concept',
          eyebrow: 'The most useful setup',
          icon: '🎯',
          title: 'Give it the full picture before you ask for input.',
          body: [
            'The more context you share, the more useful the thinking help. Before asking for advice or analysis, lay out:',
            "<strong>The situation:</strong> What's actually happening?<br><strong>The options:</strong> What choices are you weighing?<br><strong>Your constraints:</strong> What can't change?<br><strong>What matters most:</strong> What are you trying to optimize for?",
          ],
          highlight: 'Then ask: "Help me think through this. What am I not seeing?"',
        },
        {
          type: 'concept',
          eyebrow: 'Technique 1',
          icon: '📊',
          title: 'Pros and cons — done properly.',
          body: [
            "Most people do pros and cons in their head, which means they accidentally weight the factors they already care about. AI can generate a more complete list.",
            "Ask it to list pros and cons for each option you're considering. Then ask it to weight the ones that matter most for your specific situation.",
          ],
          list: {
            items: [
              '"List the pros and cons of each option for someone in my situation"',
              '"Which considerations are most important given that I care about [your priority]?"',
              '"Are there any downsides I might be underestimating?"',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Technique 2',
          icon: '😈',
          title: "Devil's advocate — ask it to push back.",
          body: [
            "If you're leaning toward a decision, one of the most useful things you can do is ask AI to argue against it.",
            "This surfaces the weaknesses in your thinking before you commit — which is exactly what a good advisor does.",
          ],
          list: {
            items: [
              '"I\'m leaning toward Option A. Make the strongest possible case against it."',
              '"What would a skeptic say about this plan?"',
              '"What\'s the most likely way this decision could go wrong?"',
              '"What would you need to see to change your recommendation?"',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Technique 3',
          icon: '🔭',
          title: "Blind spot check — what aren't you thinking about?",
          body: [
            "We all have blind spots. We overweight our own experience and underweight what we haven't personally seen. AI has seen an enormous range of situations.",
            "After laying out a decision, ask it directly: what am I not considering?",
          ],
          list: {
            items: [
              '"What factors do people commonly overlook when making this kind of decision?"',
              '"Is there a perspective I haven\'t considered that I should?"',
              '"If this decision goes badly, what\'s the most likely reason?"',
              '"What would a very cautious person say about this? A very optimistic one?"',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'An important boundary',
          icon: '⚠️',
          title: 'AI helps you think — you make the call.',
          body: [
            "AI can help you organize your thinking, surface considerations you'd missed, and stress-test your reasoning. It cannot make the decision for you — and you shouldn't want it to.",
            "The final judgment always belongs to you. It knows the information you've given it. You know everything else: the people involved, the culture, your gut, your values.",
          ],
          highlight: 'Use it to think more clearly, not to outsource the thinking entirely.',
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: "Work through a real decision you're sitting on.",
          body: [
            "Think of a decision you're genuinely weighing — at work or in life. Give ChatGPT the full picture and ask it to help you think through it. Then use at least one of the techniques: pros/cons, devil's advocate, or blind spot check.",
          ],
          prompt: "I'm trying to decide between [Option A] and [Option B]. Here's the situation: [describe context]. My main constraints are [list them]. What I care most about is [your priority]. Can you help me think through this — lay out the key considerations for each option, then make the strongest case against the option I'm leaning toward, which is [your lean]?",
          body2: 'Whatever it says, push back on one point. Ask: "Is that really true in my situation?" — and see how the conversation develops.',
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: "You have a thinking partner who's always available.",
          body: [
            "Pros and cons. Devil's advocate. Blind spot check. These three techniques alone can meaningfully improve the quality of your decisions — especially on the ones that keep you up at night.",
            'Next lesson: how to work with large amounts of information — summarizing, comparing, and synthesizing.',
          ],
          summaryList: [
            'Give AI the full picture before asking for input',
            'Pros and cons: get the complete list, then weight by your priorities',
            "Devil's advocate: ask it to argue against your current lean",
            "Blind spot check: ask what you're not considering",
            'AI clarifies your thinking — you still make the call',
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Working with Large Amounts of Information',
      meta: '9 slides · ~7 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 3 · Lesson 4',
          icon: '📚',
          title: "AI reads fast. You don't have to.",
          body: [
            "One of AI's most underappreciated superpowers is its ability to process large amounts of text quickly — and pull out exactly what you need.",
            "This lesson goes deeper than Module 2's intro to summarizing. We're talking about comparing documents, synthesizing from multiple sources, and extracting specific information from dense material.",
          ],
          sub: "Stop reading every word. Start reading the right words.",
        },
        {
          type: 'concept',
          eyebrow: 'The basics, extended',
          icon: '📋',
          title: 'Paste it in. Tell it what you need.',
          body: [
            "The core move is simple: paste in the content, then be very specific about what you want extracted.",
            'The more precise your extraction request, the more useful the output. "Summarize this" is OK. "Pull out every deadline, every person responsible, and every open question from this document" is much better.',
          ],
          list: {
            items: [
              '"List every action item and who\'s responsible for each"',
              '"What are the key risks mentioned in this document?"',
              '"Pull out all the numbers and what they refer to"',
              '"What decisions still need to be made, based on this?"',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Working with emails',
          icon: '📧',
          title: 'Long email threads — untangled in seconds.',
          body: [
            "Email threads are one of the most common sources of information overload. When a thread has 20+ replies and you need to catch up fast, AI can save you.",
            "Copy the entire thread, paste it in, and ask for what you actually need.",
          ],
          list: {
            items: [
              '"Summarize this email thread. What was decided, and what\'s still open?"',
              '"What do I need to know and do, based on this thread?"',
              '"Who said what? Give me the key positions of each person."',
              '"Has anything in this thread contradicted something said earlier?"',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Working with reports',
          icon: '📄',
          title: 'Dense reports — the key points, nothing more.',
          body: [
            "Long reports, policy documents, industry papers, financial statements — anything dense and text-heavy can be processed this way.",
            "Paste in as much as will fit (ChatGPT's free tier handles roughly 10–15 pages of text). Then ask for exactly what you need.",
          ],
          list: {
            items: [
              '"What are the 5 most important findings in this report?"',
              '"What does this report recommend I do?"',
              '"Is there anything in here that contradicts what I\'d expect?"',
              '"Write a 3-sentence executive summary of this document."',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Comparing documents',
          icon: '⚖️',
          title: 'Two versions, two sources, two proposals — AI spots the differences.',
          body: [
            "Paste in two documents — or describe them — and ask AI to compare them. This is especially useful for contracts, proposals, policy versions, or job descriptions.",
          ],
          list: {
            items: [
              '"Here are two vendor proposals. What are the key differences?"',
              '"Compare these two job descriptions and tell me which role is a better fit for my background."',
              '"Here\'s the old policy and the new one. What actually changed?"',
              '"Which of these two options aligns better with my stated priorities?"',
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'Information overload vs. clarity',
          title: 'The same Monday morning — before and after.',
          bad: {
            label: '😩 Without AI',
            text: "60 unread emails, a 40-page report to review, and two vendor proposals to compare. Spend 3 hours just getting oriented. Still not sure what to prioritize.",
          },
          good: {
            label: '✅ With AI',
            text: "Paste each thing in. Ask targeted questions. In 45 minutes, you have summaries, a clear action list, a comparison of the proposals, and a 5-bullet brief on the report. You know what matters.",
          },
        },
        {
          type: 'concept',
          eyebrow: 'One important limit',
          icon: '⚠️',
          title: 'AI can only work with what you paste in.',
          body: [
            "ChatGPT cannot browse the internet or read files directly from your computer (unless you use specific upload features). You have to paste the text in.",
            "For very long documents, paste in the most important sections first and tell it what the full document is about. You can add more sections in follow-up messages.",
          ],
          highlight: "For the paid version of ChatGPT (or Claude), you can upload PDFs and documents directly. Worth knowing for when you're ready to upgrade.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: "Paste in something you've been meaning to read.",
          body: [
            "Find something at work you've been meaning to read but haven't — an email thread, a report section, a policy document. Paste it into ChatGPT and ask for exactly what you need from it.",
          ],
          prompt: "Here is [document type — email thread / report section / policy]. I need to [your goal — get up to speed / find the action items / compare to another document / understand the key points]. Please [specific extraction request]:\n\n[Paste your content here]",
          body2: 'Ask one follow-up question after the first response. "What should I do with this information?" is always a good one.',
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: 'Information overload just got a lot more manageable.',
          body: [
            "You don't have to read everything. You have to understand what matters — and AI can help you get there faster than reading every word ever could.",
            "One more lesson to go: putting all of this together into real workflows you'll actually use.",
          ],
          summaryList: [
            'Paste in content and ask precise extraction questions',
            'Email threads: ask what was decided and what\'s still open',
            'Reports: ask for the 5 most important findings or a 3-sentence summary',
            'Comparing docs: AI spots differences faster than you can scan',
            "You can only work with what you paste in — but that's still a lot",
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Putting It All Together',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 3 · Lesson 5',
          icon: '🔗',
          title: 'Research. Plan. Decide. Understand. All in one conversation.',
          body: [
            "The skills from this module aren't separate tools — they work together. A single conversation can move from \"understand this topic\" to \"help me plan this project\" to \"help me decide between these options\" without starting over.",
            'This lesson shows you what that looks like in practice.',
          ],
          sub: "You're not just using AI. You're thinking with it.",
        },
        {
          type: 'concept',
          eyebrow: 'The flow',
          icon: '🌊',
          title: 'One conversation can hold a whole work session.',
          body: [
            "Here's a real example of what a 20-minute AI work session looks like when you combine the skills from this module:",
            '<strong>Step 1:</strong> "I\'m thinking about launching a new service. Help me understand the market." → Research<br><strong>Step 2:</strong> "Now help me plan the launch." → Planning<br><strong>Step 3:</strong> "I\'m torn between two pricing models. Help me decide." → Decision support',
            "The AI holds all the context from the conversation — you don't have to re-explain anything.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Real workflows',
          icon: '⚙️',
          title: 'Three workflows worth building into your week.',
          body: ["These are real patterns that working professionals use regularly once they've built the habit:"],
          list: {
            items: [
              "<strong>Monday morning briefing:</strong> Paste in your notes, emails, or agenda and ask AI to help you prioritize the week and flag what needs a decision",
              "<strong>Before any big meeting:</strong> Describe the meeting, paste in relevant docs, and ask AI to help you prepare — key points, likely questions, your position on open items",
              "<strong>After any complex conversation:</strong> Paste in your notes and ask AI to extract action items, open questions, and key commitments made",
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'The memory trick',
          icon: '🧠',
          title: 'Start complex conversations with a "situation brief."',
          body: [
            "For any substantial AI conversation, it helps to open with a quick situation brief — a paragraph that tells it who you are, what you're working on, and what you need from this conversation.",
            'This front-loads the context so every response is tailored from the start.',
          ],
          highlight: '"I\'m a [role] working on [project]. Here\'s the situation: [2-3 sentences]. In this conversation, I need help with: [research / planning / deciding / understanding a document]. Let\'s start with..."',
        },
        {
          type: 'concept',
          eyebrow: 'Staying sharp',
          icon: '📈',
          title: 'Your skills will compound — if you keep using them.',
          body: [
            "Every AI conversation you have makes the next one easier. You learn what prompts work. You build your library. You develop an instinct for when to ask AI first.",
            "People who get the most out of AI aren't the most technical — they're the most curious. They try things. They iterate. They ask \"what else can this do?\"",
          ],
          highlight: "The best time to use AI was the first day it existed. The second best time is right now. Keep going.",
        },
        {
          type: 'compare',
          eyebrow: 'Before and after Module 3',
          title: "What's changed in how you work.",
          bad: {
            label: '📅 Before Module 3',
            text: 'Spend hours reading to understand a topic. Plan projects by memory. Make decisions alone with no structured way to challenge your own thinking.',
          },
          good: {
            label: '✅ After Module 3',
            text: 'Understand any topic in a conversation. Plan projects with AI as co-planner. Think through decisions with a neutral sounding board. Process large docs in minutes.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Run a full thinking session — start to finish.',
          body: [
            "Pick something real and meaningful from your work right now — a project to plan, a decision to make, a topic to understand. Open ChatGPT and run a full session using at least two of the skills from this module.",
          ],
          prompt: "I'm a [your role]. Here's what I'm working on: [describe the situation in 2-3 sentences]. In this conversation, I need help with two things: first, [research / plan / decide / understand a document], and then [second goal]. Let's start with the first one. Here's the relevant context: [paste notes, document section, or describe the situation].",
          body2: "Stay in the conversation for at least 3 exchanges. Notice how the responses get more useful the more context you've shared.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 3 Complete',
          icon: '🎉',
          title: "You're thinking with AI now — not just using it.",
          body: [
            "You've completed Module 3. You can now use AI to research anything, plan any project, work through decisions, and cut through information overload — all in a single conversation.",
            'Module 4 goes into content creation: writing, social media, video scripts, and building a voice that sounds like you — with AI\'s help.',
          ],
          summaryList: [
            'Research: start broad, follow up, verify the specifics',
            'Planning: describe the goal, ask for steps, then ask what you\'re missing',
            "Decisions: pros/cons, devil's advocate, blind spot check",
            'Large documents: paste in, ask precise extraction questions',
            "One conversation can do all of this — you're thinking with AI now",
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'You want to use AI to research a complex topic. What\'s the most effective approach?',
      options: [
        'Ask one very detailed question and accept the answer',
        'Start with a broad overview, then ask follow-up questions to go deeper on what matters for your situation',
        'Only use AI for topics you already understand well',
        'Ask it to list everything it knows about the topic at once',
      ],
      correct: 1,
      feedback: "The conversational approach is everything. Start broad to get oriented, then drill down on what's most relevant to you. The follow-up questions are where real understanding happens.",
    },
    {
      q: "You're planning a project with AI's help and it gives you a solid step-by-step plan. What should you do next?",
      options: [
        'Execute the plan exactly as written — AI plans are highly reliable',
        'Ask what could go wrong and what steps people commonly forget',
        'Start over with a more detailed prompt',
        'Share it with your team immediately — no changes needed',
      ],
      correct: 1,
      feedback: "Always ask what you might be missing. AI is good at spotting risks, overlooked dependencies, and common failure points — especially after you've already laid out the plan. This one follow-up question is often the most valuable part of the conversation.",
    },
    {
      q: "You're leaning toward Option A in a big decision. Which AI technique is most useful right now?",
      options: [
        'Ask AI which option it recommends',
        'Ask AI to confirm your reasoning is sound',
        'Ask AI to make the strongest possible case against Option A',
        "Skip AI — decisions should be made on instinct",
      ],
      correct: 2,
      feedback: "Devil's advocate is the move when you've already got a lean. You're not looking for validation — you're looking for the holes in your thinking before you commit. Ask it to argue against your current position and take the pushback seriously.",
    },
    {
      q: 'You paste a 30-message email thread into ChatGPT. What\'s the best question to ask?',
      options: [
        '"Summarize this."',
        '"What was decided in this thread, what\'s still open, and what do I need to do?"',
        '"Is this a good email chain?"',
        '"Rewrite all of these emails more professionally."',
      ],
      correct: 1,
      feedback: 'Precise extraction questions get precise, useful answers. "Summarize this" gives you a paragraph. "What was decided, what\'s still open, what do I need to do?" gives you an action-ready briefing. Specificity is always worth it.',
    },
    {
      q: "When using AI for research, what's the most important rule?",
      options: [
        "Always use AI instead of primary sources — it's faster",
        'Only ask about topics that are at least 5 years old',
        'Use AI to understand the landscape, then verify specific facts from primary sources',
        'Trust AI for statistics and data — it\'s more accurate than most websites',
      ],
      correct: 2,
      feedback: 'AI is excellent for conceptual understanding, frameworks, and getting oriented on a topic. It is not reliable for specific facts, statistics, or citations — those need to be verified. The combination of AI for understanding and primary sources for verification is extremely powerful.',
    },
  ],
}

export default module3
