import type { CourseData } from './types'

const c3module5: CourseData = {
  moduleId: 17,
  title: 'Make Smarter Business Decisions',
  subtitle: 'AI for Your Business · Module 5',
  lessons: [
    // ─────────────────────────────────────────
    // Lesson 1 — The Information Gap
    // ─────────────────────────────────────────
    {
      id: 0,
      title: 'The Information Gap',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for Your Business · Lesson 1',
          icon: '🧭',
          title: 'The Information Gap',
          body: [
            "By the end of this lesson, you'll understand the gap between the information big businesses use to make decisions and what most small business owners have — and why AI closes that gap.",
          ],
          sub: "Better information leads to better decisions. Better decisions compound.",
        },
        {
          type: 'concept',
          eyebrow: "How most small business decisions get made",
          icon: '🤔',
          title: "Most small business owners make big decisions on limited information.",
          body: [
            "Should I add this new service? Should I raise my prices? Is this market worth entering? Should I hire another person now or wait?",
            "These are significant decisions — the kind that shape the direction and profitability of a business for years. And most small business owners make them based on gut feel, a conversation with a peer, or whatever information happens to be nearby.",
            "That's not a criticism. It's a resource constraint. Proper market research takes time and expertise. Competitive analysis requires tools and access. Financial modeling requires someone who does it professionally.",
          ],
          highlight: "Large businesses have entire departments making these decisions. Small businesses have you — and until now, that was a real disadvantage.",
        },
        {
          type: 'concept',
          eyebrow: "The consultant problem",
          icon: '💸',
          title: "The information that should inform your decisions used to cost thousands.",
          body: [
            "Business consultants charge $150–$500 an hour. Market research reports run $1,000–$5,000. Financial analysts and business advisors are similarly priced.",
            "Most small business owners can't justify that expense for every decision. So they wing it — and sometimes that works, and sometimes it's expensive.",
            "AI doesn't replace the judgment of an experienced advisor. But it does give you access to research, analysis, and structured thinking that was previously out of reach — in minutes and at virtually no cost.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "What AI brings to business decisions",
          icon: '🔍',
          title: "AI is a research partner, an analyst, and a thought partner — all at once.",
          body: [
            "It can research your industry, your competitors, and market trends — pulling together information that would take you hours to find and synthesize.",
            "It can analyze data you give it — financial figures, customer feedback, pricing comparisons — and tell you what it sees.",
            "It can think through decisions with you — playing devil's advocate, stress-testing your reasoning, identifying risks you hadn't considered.",
            "None of this replaces your judgment. It informs it. And informed judgment beats gut feel every time.",
          ],
          highlight: "AI doesn't make the decision. You do — with better information than you've ever had before.",
        },
        {
          type: 'concept',
          eyebrow: "What this module covers",
          icon: '🗺️',
          title: "Five lessons. A complete decision-support system.",
          body: ["By the end of this module you'll know how to use AI for:"],
          list: {
            items: [
              'Competitive intelligence — what your competitors are doing and where your edge is',
              'Market research — industry trends, customer insights, and whether a new idea is worth pursuing',
              'Financial clarity — making sense of your numbers and spotting what they\'re telling you',
              'Scenario planning — thinking through big decisions before committing to them',
              'Annual planning — setting direction for your business with more confidence',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: "The mindset shift",
          icon: '🔄',
          title: "From deciding in the dark to deciding with a flashlight.",
          body: [
            "The goal isn't to eliminate uncertainty — every business decision involves some. The goal is to reduce unnecessary uncertainty. The kind that comes from not knowing things that are knowable.",
            "AI makes a large category of decisions more knowable. Market sizing. Competitor positioning. Pricing benchmarks. Industry trends. Customer motivations. Risk factors.",
            "You'll still make judgment calls — that's what ownership is. But they'll be informed judgment calls. And those compound differently than guesses.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Name the decisions you have on the table.',
          body: [
            "Open <strong>chatgpt.com</strong> and use this prompt. Be honest — this is just for you.",
          ],
          prompt:
            "I run [business name], a [type of business]. I want to use AI to make smarter business decisions. Here are the 2–3 biggest decisions or questions I'm currently sitting on for my business: [describe them — e.g., 'whether to add a new service', 'whether to raise prices', 'whether to hire another person', 'whether to open a second location']. For each one, what information would most help me make a better-informed decision — and where would I realistically find it?",
          body2:
            "Save what it gives you. These are the decisions we'll work through over the next four lessons using the research and analysis tools AI can provide.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: "The information gap is closing.",
          body: [
            "You've identified the decisions you're sitting on. Now we build the research and analysis skills to approach them with more information than you've ever had.",
            "In the next lesson, we start with the most actionable: knowing your competition — what they're doing, where you stand, and where your edge is.",
          ],
          summaryList: [
            "Most small business decisions are made on gut feel and limited data — a resource constraint, not a character flaw",
            "Market research, competitive analysis, and financial modeling used to require expensive professionals",
            "AI provides research, analysis, and structured thinking at virtually no cost — in minutes",
            "The goal isn't to eliminate uncertainty — it's to reduce the unnecessary kind that comes from not knowing what's knowable",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 2 — Know Your Competition
    // ─────────────────────────────────────────
    {
      id: 1,
      title: 'Know Your Competition',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for Your Business · Lesson 2',
          icon: '🔭',
          title: 'Know Your Competition',
          body: [
            "By the end of this lesson, you'll know how to build a clear picture of your competitive landscape — what your competitors are doing, where you're differentiated, and where the gaps in your market are.",
          ],
          sub: "You can't out-position a competitor you don't understand.",
        },
        {
          type: 'concept',
          eyebrow: "Why competitive intelligence matters",
          icon: '🎯',
          title: "Knowing your competition isn't about copying them. It's about positioning against them.",
          body: [
            "The businesses that win in competitive markets aren't always the best at the work. They're the best at communicating why they're the right choice for a specific customer.",
            "That positioning is impossible to develop if you don't know what you're positioning against. What are competitors promising? Where are they falling short? What do their customers complain about? What gap in the market is nobody filling?",
            "Competitive intelligence answers these questions — and AI can build a meaningful picture from publicly available information in minutes.",
          ],
          highlight: "Your competitive advantage isn't what you think is great about your business. It's the gap between what you offer and what your competitors don't.",
        },
        {
          type: 'concept',
          eyebrow: "What you can learn without spending anything",
          icon: '🔍',
          title: "There's more public information about your competitors than you think.",
          body: [
            "Their reviews tell you what customers love and what frustrates them — a direct window into where they're strong and where they're weak.",
            "Their website copy and messaging tells you how they're positioning themselves and what customers they're targeting.",
            "Their social media tells you what they're proud of, what they're promoting, and how they engage with customers.",
            "Their pricing — if visible — tells you where the market is anchored and where there might be room for a premium or value position.",
          ],
          highlight: "Customers tell competitors' weaknesses publicly, in reviews. That's where your differentiation often lives.",
        },
        {
          type: 'concept',
          eyebrow: "The AI approach to competitor research",
          icon: '🤖',
          title: "Describe your competitors. AI synthesizes what it means for your positioning.",
          body: [
            "You don't need to hand AI a competitor's website — you can describe what you know. Their name, their apparent positioning, their price range, their reviews, how they market themselves.",
            "AI then helps you answer the strategic questions: where are they strong, where are they weak, what customers are they missing, and how should you position against them?",
            "For even richer analysis, you can paste in excerpts from competitor reviews or their website copy and ask AI to identify patterns, complaints, and positioning signals.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "Finding the gap",
          icon: '🔓',
          title: "The most valuable insight: what nobody in your market is offering.",
          body: [
            "After you understand what your competitors are doing, the most useful question is: what are their customers wishing someone offered?",
            "Recurring complaints in competitor reviews are gold. 'Hard to get a callback.' 'Pricing was unclear.' 'Great work but the communication was terrible.' 'Wish they offered [X].'",
            "These aren't just complaints — they're market opportunities. If multiple competitors are hearing the same frustration, and you solve for it, that's your positioning. Not a feature advantage — a promise advantage.",
          ],
          highlight: "The gap in your market is often hiding in plain sight, in your competitors' one-star reviews.",
        },
        {
          type: 'concept',
          eyebrow: "Positioning yourself in the gap",
          icon: '📣',
          title: "Differentiation isn't about being better. It's about being clearly different.",
          body: [
            "Saying 'we're the best' doesn't differentiate you — every competitor says that. Differentiation is specific. 'We're the only [type of business] in [area] that does [specific thing] — and our customers never have to chase us for updates.'",
            "That specificity comes from knowing your competition. Without it, you're making general claims. With it, you're making a promise that the market has told you they want and nobody else is making.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Build a competitive analysis for your top competitors.',
          body: [
            "Open <strong>chatgpt.com</strong> and use this two-part prompt. Have 2–3 competitor names ready.",
          ],
          prompt:
            "Part 1 — Competitive landscape: I run [business name], a [type of business] in [location]. My main competitors are [list 2–3 competitors by name or description]. Based on what you know about these types of businesses and what I tell you, help me build a competitive analysis. For each competitor, identify: their likely positioning and target customer, their apparent strengths, their common customer complaints (based on typical review patterns for this type of business), and any gaps they're likely leaving in the market.\n\nPart 2 — My positioning: Based on this analysis, what are 2–3 specific positioning angles I could take that would differentiate [my business name] from these competitors and appeal to the customers they're underserving?",
          body2:
            "If you know specific things about your competitors — their prices, their reviews, anything from their website — add those details to get sharper output. The more specific you are, the more useful the analysis.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: "You now know where your edge is.",
          body: [
            "Competitive intelligence isn't about obsessing over what others are doing. It's about understanding the landscape well enough to position yourself clearly in it.",
            "In the next lesson, we go broader — market research that helps you evaluate new opportunities and understand your customers more deeply.",
          ],
          summaryList: [
            "Positioning is impossible to develop without knowing what you're positioning against",
            "Competitor reviews are a direct window into their weaknesses — and your opportunities",
            "The gap in your market often hides in plain sight: recurring complaints that no competitor is solving",
            "True differentiation is specific — a promise the market wants that nobody else is making",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 3 — Research Without a Research Team
    // ─────────────────────────────────────────
    {
      id: 2,
      title: 'Research Without a Research Team',
      meta: '8 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for Your Business · Lesson 3',
          icon: '🔬',
          title: 'Research Without a Research Team',
          body: [
            "By the end of this lesson, you'll be able to research a new business idea, evaluate a market opportunity, and understand your customers more deeply — all without spending money on consultants or reports.",
          ],
          sub: "Market research used to cost thousands and take weeks. Now it's a conversation.",
        },
        {
          type: 'concept',
          eyebrow: "What market research actually is",
          icon: '🗺️',
          title: "Market research answers three questions every business needs answered.",
          body: [
            "Is there a real market for what I want to offer? How big is it, who are the customers, and is it growing or shrinking?",
            "What do my customers actually care about? Not what I think they care about — what they tell me, and what their behavior shows.",
            "Is this opportunity worth pursuing? What would it take, what are the risks, and what does success look like?",
            "Traditional market research answers these through surveys, focus groups, and analyst reports — time-consuming and expensive. AI lets you explore all three in a single conversation.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "Evaluating a new service or offering",
          icon: '💡',
          title: "Before you invest time and money in something new, pressure-test it first.",
          body: [
            "Most small business owners evaluate new ideas with optimism, not analysis. That's human — you're excited, you see the potential, and you move.",
            "The smarter approach: before you invest, spend 20 minutes asking AI to challenge the idea. Who is the target customer? Are they currently solving this problem some other way? What would make them switch? What would make them not switch? What's the realistic path to first revenue?",
            "This isn't about killing ideas. It's about shaping them. The idea that survives a structured challenge is stronger for it — and you avoid the expensive mistakes that come from optimism alone.",
          ],
          highlight: "Twenty minutes of structured research before you invest saves months of expensive learning the hard way.",
        },
        {
          type: 'concept',
          eyebrow: "Understanding your customers",
          icon: '👥',
          title: "The best businesses understand their customers better than their customers understand themselves.",
          body: [
            "What do your customers actually worry about before hiring someone like you? What are they hoping for? What would make them nervous? What do they tell their friends when they recommend a business like yours?",
            "This customer psychology drives everything — your messaging, your proposal language, your onboarding approach, how you handle concerns.",
            "AI can help you build a detailed customer profile: their motivations, their fears, what signals trust to them, what language they use to describe their problem. It's not perfect — nothing replaces actually talking to customers — but it's a far better starting point than assumptions.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "Pricing research",
          icon: '💰',
          title: "What should you actually charge? Research beats guessing.",
          body: [
            "Pricing is one of the decisions small business owners most frequently get wrong — usually by undercharging. And undercharging isn't just a revenue problem. It signals to customers that you might not be the best option.",
            "Before raising or setting prices, research the benchmarks: what does this type of service typically cost in your region? What does the premium end charge and what justifies it? What do the budget options offer and where do they cut corners?",
            "AI can synthesize pricing benchmarks, frame the conversation for raising prices, and help you build the rationale for a price increase that customers will accept.",
          ],
          highlight: "Most small businesses are underpriced. Research gives you the confidence to charge what your work is actually worth.",
        },
        {
          type: 'concept',
          eyebrow: "Industry trends",
          icon: '📈',
          title: "What's happening in your industry that you should be responding to?",
          body: [
            "Every industry has trends that shape what customers expect, what competitors are doing, and where the opportunities are emerging. Staying current used to mean paying for trade publications or attending expensive conferences.",
            "AI can give you a meaningful summary of trends in your industry — technology shifts, regulation changes, customer expectation shifts, emerging competition — in minutes.",
            "You won't get breaking news, but you'll get a solid strategic picture that helps you ask better questions and make more informed decisions about where to take your business.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Research a real decision you have in front of you.',
          body: [
            "Open <strong>chatgpt.com</strong> and pick one of the decisions you identified in Lesson 1. Use this research prompt on it.",
          ],
          prompt:
            "I run [business name], a [type of business]. I'm considering [describe the decision or opportunity: e.g., 'adding a new service', 'raising prices by 20%', 'targeting a new type of customer', 'opening a second location']. Please help me research this by answering: (1) Who is the target customer for this, and what do they currently do instead? (2) What are the realistic risks and challenges I should anticipate? (3) What would make this succeed vs. fail? (4) What information should I gather before committing to this? (5) Are there any aspects of this opportunity I might be overlooking?",
          body2:
            "After reading the response, reply: 'What questions should I be asking that I haven't thought to ask yet?' That last question often surfaces the most valuable insight.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: "Research is now something you do, not something you hire someone to do.",
          body: [
            "Not a deep research project — a focused 20-minute conversation that gives you the information you actually need to make a better decision.",
            "In the next lesson, we get into the numbers: how to use AI to make sense of your financial data and spot what it's telling you.",
          ],
          summaryList: [
            "Market research answers: is there a market, what do customers care about, and is this worth pursuing",
            "Pressure-test new ideas with AI before investing — 20 minutes of structured challenge shapes better decisions",
            "Customer psychology drives everything — understanding their fears and motivations improves every part of your business",
            "Most small businesses are underpriced — research gives you the confidence to charge what the work is worth",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 4 — Numbers That Tell a Story
    // ─────────────────────────────────────────
    {
      id: 3,
      title: 'Numbers That Tell a Story',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for Your Business · Lesson 4',
          icon: '📊',
          title: 'Numbers That Tell a Story',
          body: [
            "By the end of this lesson, you'll be able to use AI to make sense of your business's financial data — spotting trends, understanding what's working, and planning ahead with more confidence.",
          ],
          sub: "You don't have to love numbers. You just have to know what they're telling you.",
        },
        {
          type: 'concept',
          eyebrow: "The numbers most owners don't look at",
          icon: '👀',
          title: "Most small business owners know their bank balance. Fewer know what their numbers mean.",
          body: [
            "You probably know roughly how much came in this month and roughly what went out. That's survival-level financial awareness — and for many small businesses, it's the only level.",
            "But the numbers you're not looking at are the ones making decisions for you. Which services are most profitable? Are your margins improving or shrinking? Is your revenue growing faster or slower than your costs? Which customers are worth the most over time?",
            "These aren't complicated analyses — but they require sitting down with the data, which most owners don't have time or inclination to do.",
          ],
          highlight: "AI doesn't require you to become an accountant. It reads your data and tells you what it sees.",
        },
        {
          type: 'concept',
          eyebrow: "What you can analyze with AI",
          icon: '🔍',
          title: "Four types of financial analysis that change how you run your business.",
          body: ["Each of these takes 10–15 minutes with AI and gives you information most owners never have:"],
          list: {
            items: [
              '<strong>Revenue trends</strong> — is your business growing? Which months are strong? Which are weak and why?',
              '<strong>Profitability by service</strong> — which offerings make you the most money per hour of your time?',
              '<strong>Cost analysis</strong> — where is your money going, and are there costs that have crept up without justification?',
              '<strong>Customer value</strong> — which customers buy repeatedly, refer others, and pay on time vs. which ones cost more than they\'re worth?',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: "How to work with AI on financial data",
          icon: '🔧',
          title: "Paste in your numbers. Describe your situation. Ask what it means.",
          body: [
            "You don't need a formatted spreadsheet. You can paste in rough numbers, describe your revenue mix, or share what you remember from last year's figures — and AI will work with what you give it.",
            "The more specific the data, the sharper the analysis. But even directional numbers give you useful insights: 'My revenue last year was about $180k, roughly 60% from service A and 40% from service B. Service A takes about twice as long per project. What does this suggest about my time allocation?'",
            "That kind of question — answered in seconds — is the kind of analysis a business advisor would charge hundreds of dollars to do.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "Pricing and margin analysis",
          icon: '💡',
          title: "The question most owners never ask: am I actually making money on this?",
          body: [
            "Revenue is the number most owners track. Profit margin — what's left after all costs — is the number that actually matters.",
            "Many small businesses are busy but not particularly profitable, because they've never done the math on what it actually costs to deliver their service. Labor, materials, overhead, your own time — when you add it all up, some services are far more profitable than others.",
            "AI can help you work through a simple margin calculation: what does it cost to deliver this service, what do you charge, and what's left? Then: is this the best use of your time, or should you be charging more — or offering this less?",
          ],
          highlight: "Busy isn't the same as profitable. Knowing your margins is how you find out the difference.",
        },
        {
          type: 'concept',
          eyebrow: "Looking ahead",
          icon: '📅',
          title: "Simple cash flow planning prevents the surprises that derail small businesses.",
          body: [
            "The most common financial crisis in small business isn't insufficient revenue — it's timing. A slow month after several strong ones. A big expense that arrives before invoices clear. A seasonal dip that wasn't anticipated.",
            "AI can help you build a basic cash flow projection: given your typical revenue pattern and your fixed costs, what does the next 3–6 months look like? Where are the tight spots? What do you need to have in reserve?",
            "This isn't sophisticated financial modeling — it's basic visibility. And basic visibility prevents most of the small business financial surprises that feel like emergencies but were actually predictable.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Analyze your own numbers right now.',
          body: [
            "Open <strong>chatgpt.com</strong> and paste in whatever financial data you have. Rough numbers are fine — this is about insight, not precision.",
          ],
          prompt:
            "I run [business name], a [type of business]. Here are my rough financials for the past [year or period]: Total revenue: [amount]. My main services/products and their approximate revenue split: [describe]. My rough monthly costs (rent, labor, materials, software, etc.): [describe]. Please help me: (1) identify which part of my business appears most profitable based on these numbers, (2) spot any concerning trends or ratios I should be paying attention to, (3) suggest 2–3 questions I should be tracking monthly that I'm probably not tracking right now.",
          body2:
            "If you're not sure of exact numbers, give ranges — 'probably between $X and $Y.' The goal isn't accounting accuracy; it's spotting the story your numbers are telling.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: "Your numbers are telling you something. Now you know how to listen.",
          body: [
            "You don't need to become financially fluent overnight. You need to know what questions to ask — and now you have a tool that answers them in plain English.",
            "In the final lesson, we bring all of this together: using AI as your business advisor for the big decisions, the planning sessions, and the moments when you need to think clearly through something complex.",
          ],
          summaryList: [
            "Revenue is what you track. Margin — what's left after costs — is what actually matters",
            "Four analyses worth doing: revenue trends, profitability by service, cost breakdown, and customer value",
            "Busy isn't the same as profitable — margin analysis often reveals which services deserve more focus and which deserve less",
            "Basic cash flow visibility prevents most small business financial surprises, which are predictable if you look",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 5 — AI as Your Business Advisor
    // ─────────────────────────────────────────
    {
      id: 4,
      title: 'AI as Your Business Advisor',
      meta: '9 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for Your Business · Lesson 5',
          icon: '🤝',
          title: 'AI as Your Business Advisor',
          body: [
            "By the end of this lesson, you'll know how to use AI as a genuine thought partner for your biggest business decisions — pressure-testing ideas, mapping out scenarios, and planning your year with more clarity than you've had before.",
          ],
          sub: "Every business owner needs someone to think with. Now you have one available at any hour.",
        },
        {
          type: 'concept',
          eyebrow: "The loneliness of ownership",
          icon: '🏝️',
          title: "Running a small business is often lonely in a specific way.",
          body: [
            "Employees look to you for answers. Customers expect confidence. Family and friends don't always understand the nuances of the decisions you're facing.",
            "Who do you think out loud with? Where do you take the half-formed idea to test whether it's actually good? Who pushes back on your reasoning before you commit $20,000 to something?",
            "Some owners have a trusted advisor, a mentor, or a peer group. Many don't — or they have one who's not always available when the decision needs to be made.",
            "AI is not a replacement for human relationships. But it is available at 11pm when you're working through something, without judgment, without billing you for the hour.",
          ],
          highlight: "A thought partner who's always available, never gets tired of your questions, and pushes back on your reasoning is genuinely valuable.",
        },
        {
          type: 'concept',
          eyebrow: "How to use AI for big decisions",
          icon: '🧩',
          title: "Give AI the full picture. Ask it to challenge you.",
          body: [
            "The biggest mistake people make when using AI for decisions: they ask leading questions. 'Is this a good idea?' invites agreement. 'What are the reasons this could fail?' invites honesty.",
            "When you're working through a big decision, tell AI everything: the situation, what you're considering, why you're leaning toward it, and what your concerns are. Then ask it to play devil's advocate — to give you the strongest case against what you're planning.",
            "That challenge is what a good advisor does. And hearing the strongest objection before you commit is far better than discovering it after.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "Scenario planning",
          icon: '🔀',
          title: "Map the three paths before you choose one.",
          body: [
            "Scenario planning sounds sophisticated but it's simple: before committing to a decision, map out what happens if things go well, if things go as expected, and if things go poorly.",
            "What does success look like in 12 months if this works? What does the realistic middle case look like? What happens if the main assumption you're making turns out to be wrong?",
            "AI can build this map with you quickly. The goal isn't to predict the future — it's to make sure you've thought through the downside before you're in it.",
          ],
          highlight: "The best decision isn't always the one with the highest upside. It's the one where you can live with the downside if it comes.",
        },
        {
          type: 'concept',
          eyebrow: "Annual planning",
          icon: '🗓️',
          title: "One planning session per year changes how intentionally you run your business.",
          body: [
            "Most small businesses don't have an annual plan. They have goals — vague ones — and a lot of reactive decision-making throughout the year.",
            "An annual planning session with AI doesn't have to be a business school exercise. It's a conversation: here's where my business is, here's where I want it to be in 12 months, here are the 3–4 things that need to happen for that to be true, and here's what I need to do in Q1 to get started.",
            "That conversation, turned into a one-page summary you actually look at, changes the quality of your decisions all year. Everything gets filtered through a clearer sense of direction.",
          ],
        },
        {
          type: 'concept',
          eyebrow: "The right questions to ask",
          icon: '❓',
          title: "The quality of your decisions depends on the quality of your questions.",
          body: [
            "AI gives you what you ask for. Vague questions get vague answers. Specific, challenging questions get useful analysis.",
            "Questions worth asking AI regularly: 'What am I not thinking about here?' 'What would someone who strongly disagrees with this decision say?' 'What would need to be true for this to fail?' 'If I look back on this decision in two years and it was a mistake, what was probably the reason?'",
            "These questions aren't comfortable — they're useful. And a business advisor who only tells you what you want to hear isn't doing their job.",
          ],
          highlight: "The question 'What would need to be true for this to fail?' is one of the most valuable things you can ask before any significant decision.",
        },
        {
          type: 'concept',
          eyebrow: "What this module built",
          icon: '📊',
          title: "From deciding in the dark to deciding with a complete picture.",
          body: ["Here's the information advantage you now have access to:"],
          beforeAfter: {
            before: {
              label: 'Before this module',
              items: [
                'Big decisions made on gut feel and limited data',
                'No clear picture of what competitors are doing or where the gaps are',
                "New opportunities evaluated with optimism, not research",
                'Financial data tracked but not meaningfully analyzed',
                'No structured way to think through the downside of a decision',
              ],
            },
            after: {
              label: 'With your new decision toolkit',
              items: [
                'Any significant decision informed by research and structured analysis',
                'Clear competitive picture — your positioning backed by real insight',
                'New opportunities pressure-tested before investment',
                'Financial numbers interpreted and acted on, not just watched',
                'AI as a thought partner for scenario planning and challenge',
              ],
            },
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Use AI to think through your biggest current decision.',
          body: [
            "Open <strong>chatgpt.com</strong> and bring your most significant current business decision. Use this full advisor prompt — give it the complete picture.",
          ],
          prompt:
            "I need help thinking through an important business decision. Here's the full context: I run [business name], a [type of business]. The decision I'm facing is [describe it clearly]. Here's why I'm leaning toward [option]: [your reasoning]. Here are my concerns: [list them]. Please do three things: (1) Give me the strongest case against what I'm leaning toward — play devil's advocate seriously. (2) Map out three scenarios: what happens if this goes well, if it goes as expected, and if the main assumption I'm making turns out to be wrong. (3) Tell me what information I should gather before making this decision final.",
          body2:
            "After reading the response, ask: 'What question should I be asking that I haven't asked yet?' Then sit with what comes back before you decide.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 5 Complete',
          icon: '🎓',
          title: "You now make decisions differently.",
          body: [
            "Not perfectly — no tool makes decisions perfect. But better. With more information, more challenge to your reasoning, and more visibility into what you don't know.",
            "That's the compounding advantage of better decision-making: not one big win, but consistently fewer expensive mistakes and more well-timed moves.",
          ],
          summaryList: [
            "Tell AI the full picture and ask it to challenge you — leading questions get agreement, honest questions get insight",
            "Scenario planning: map the optimistic, realistic, and downside case before you commit",
            "'What would need to be true for this to fail?' is one of the most valuable questions in business",
            "One annual planning session with AI gives your business a direction — and filters every decision through it all year",
          ],
          gradBlock: {
            icon: '🧭',
            title: 'Your Decision-Making Just Got an Upgrade',
            body: "Competitive intelligence, market research, financial clarity, scenario planning, and a thought partner available any time — you now have a decision-support system that used to be available only to businesses with the budget to buy it. Use it on every significant decision.",
            name: 'Module 5 Complete',
          },
        },
      ],
    },
  ],

  quiz: [
    {
      q: "What is the most valuable place to look for competitive intelligence about your competitors?",
      options: [
        "Their social media follower count",
        "Their website's 'About' page",
        "Their customer reviews — where their weaknesses and your opportunities are often stated publicly",
        "Their job postings",
      ],
      correct: 2,
      feedback:
        "Customer reviews are a direct, public window into a competitor's weaknesses. Recurring complaints in their one-star and two-star reviews are market opportunities — if multiple competitors are hearing the same frustration and you solve for it, that's your competitive positioning.",
    },
    {
      q: "What is the best way to use AI to evaluate a new business idea or opportunity?",
      options: [
        "Ask AI 'Is this a good idea?' and rely on its answer",
        "Skip the research and trust your intuition — AI can't know your market as well as you do",
        "Give AI the full picture and ask it to play devil's advocate — to make the strongest case against the idea",
        "Ask AI to write a business plan for the idea and evaluate the plan",
      ],
      correct: 2,
      feedback:
        "Leading questions ('Is this a good idea?') invite agreement. Honest challenge ('What are the strongest reasons this could fail?') produces useful analysis. Give AI the full context — why you're interested, what your concerns are — and ask it to push back seriously. Ideas that survive that challenge are stronger for it.",
    },
    {
      q: "What is 'profitability by service' and why does it matter?",
      options: [
        "How much revenue each service generates — the more revenue, the more you should focus on it",
        "The profit margin on each offering — what's left after all costs — which reveals which services are actually worth your time",
        "How satisfied customers are with each service you offer",
        "How quickly each service pays its invoice",
      ],
      correct: 1,
      feedback:
        "Revenue and profitability are not the same thing. A service that generates a lot of revenue but requires substantial time, materials, and overhead may be far less profitable than a smaller service with lower costs. Margin analysis — what's left after all costs — is how you find out which services deserve more focus and which you might be better off pricing higher or offering less.",
    },
    {
      q: "What is scenario planning, and what makes it valuable before a major decision?",
      options: [
        "A detailed financial model projecting exactly what will happen if you proceed",
        "A process for mapping the optimistic, realistic, and downside cases so you've thought through the downside before you're in it",
        "A presentation format for showing stakeholders multiple options",
        "A way to avoid making decisions by always waiting for more information",
      ],
      correct: 1,
      feedback:
        "Scenario planning is simply mapping three paths: what happens if things go well, as expected, and poorly. The goal isn't to predict the future — it's to make sure you've considered the downside before committing. The best decision isn't always the one with the highest upside; it's the one where you can live with the downside if it comes.",
    },
    {
      q: "Which question is described as one of the most valuable to ask before any significant business decision?",
      options: [
        "'Will this make me more money than my current approach?'",
        "'What do my competitors do in this situation?'",
        "'What would need to be true for this to fail?'",
        "'How long will this take to implement?'",
      ],
      correct: 2,
      feedback:
        "'What would need to be true for this to fail?' forces you to identify the critical assumptions behind your decision — and then evaluate whether those assumptions are actually solid. It's uncomfortable and that's the point. Discovering a flawed assumption before you commit is far better than discovering it after.",
    },
  ],
}

export default c3module5
