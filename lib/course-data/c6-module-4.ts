import type { CourseData } from './types'

const c6module4: CourseData = {
  moduleId: 34,
  title: 'Negotiate Like You\'ve Done Your Homework',
  subtitle: 'AI for Career Growth · Module 4',
  lessons: [
    {
      id: 0,
      title: 'Why Most People Leave Money on the Table',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 4 · Lesson 1',
          icon: '💼',
          title: 'Fewer than 40% of professionals negotiate their salary. The rest leave money behind.',
          body: [
            "Research consistently shows that most professionals accept the first offer they receive — without countering, without researching market rates, without asking for anything. Not because they don\'t want more, but because they don\'t know what to say or fear it\'ll backfire.",
            "The cost of that silence is staggering. Over a 10-year career, failing to negotiate even one offer or one raise can cost $50,000 to $500,000 in lost earnings — because every future raise is calculated as a percentage of a base that started too low.",
          ],
          sub: 'This module is about removing the two barriers AI can help with: not knowing your market value and not knowing what to say.',
        },
        {
          type: 'concept',
          eyebrow: 'Why people don\'t negotiate',
          icon: '🚫',
          title: 'Three barriers — and which ones AI can actually remove.',
          body: [
            "The reasons people avoid negotiating are remarkably consistent: fear of seeming greedy or damaging the relationship, not knowing their market value, and not knowing the actual words to say. These are three very different problems with very different solutions.",
            "AI can\'t remove the fear entirely — but it can eliminate the second and third barriers completely. When you know your market value and you\'ve already rehearsed the conversation, the fear shrinks considerably. You\'re not winging it. You\'re prepared.",
          ],
          list: {
            items: [
              '<strong>Fear of seeming greedy:</strong> Partially addressed by having data — "this is what the market pays" is a fact, not a demand',
              '<strong>Not knowing market value:</strong> Fully solvable with AI-assisted research (next lesson)',
              '<strong>Not knowing what to say:</strong> Fully solvable with AI-scripted and rehearsed conversations (Lesson 3)',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'The math',
          icon: '📊',
          title: 'One uncountered offer can cost more than you think.',
          body: [
            "Here\'s a concrete example. You receive a job offer for $85,000 and accept it. If you had countered and gotten $92,000, you\'d have earned $7,000 more in year one. But your next raise is calculated as a percentage of $92,000, not $85,000. And the next one. And the one after that.",
            "Over 10 years, even modest compounding on a $7,000 negotiation gap can represent $60,000–$100,000 in additional lifetime earnings — from a single conversation that lasted less than five minutes.",
          ],
          highlight: 'Negotiating once — well — has benefits that compound for the rest of your career.',
        },
        {
          type: 'concept',
          eyebrow: 'The cultural barrier',
          icon: '🌍',
          title: 'Negotiation isn\'t confrontation. It\'s expected.',
          body: [
            "Many professionals — especially those earlier in their careers, or those from cultural backgrounds where negotiation feels presumptuous — treat accepting the first offer as the polite thing to do. Employers know this and count on it.",
            "In most professional contexts, hiring managers and HR professionals expect negotiation. It doesn\'t damage relationships. It demonstrates that you know your value and can advocate for yourself — both qualities that are useful in an employee. The offer is almost never rescinded because someone asks for more.",
          ],
          highlight: 'The discomfort of asking is temporary. The cost of not asking is permanent.',
        },
        {
          type: 'concept',
          eyebrow: 'The negotiation gap',
          title: 'Before and after approaching compensation with preparation.',
          body: ['Here\'s what changes when you walk into a compensation conversation with research and a script:'],
          beforeAfter: {
            before: {
              label: 'Without preparation',
              items: [
                'Accept offer without countering — don\'t know if it\'s fair',
                'Uncomfortable with silence — fill it by agreeing',
                'No idea what the market rate is for your role',
                'Avoid the topic when raise season comes',
                'Career earnings trajectory starts from whatever they offered',
              ],
            },
            after: {
              label: 'With AI-assisted preparation',
              items: [
                'Counter every offer as a baseline — it\'s expected and harmless',
                'Know exactly what you\'re worth and why — data removes the guesswork',
                'Script ready for every scenario before the conversation starts',
                'Comfortable, data-backed conversation — not a confrontation',
                'Compound earnings advantage that grows with every future raise',
              ],
            },
          },
        },
        {
          type: 'concept',
          eyebrow: 'What this module covers',
          icon: '🗺️',
          title: 'Five lessons that take you from anxious to prepared.',
          body: [
            "This module is structured as a complete negotiation toolkit. By the end, you\'ll have researched your market value, scripted your opening statement, practiced handling pushback, and understood the full picture of total compensation.",
            "You don\'t need to become a negotiation expert. You need to be prepared enough that the conversation feels like a professional discussion — not an emotional plea or an improvised performance.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Get a baseline read on whether you\'re being paid fairly.',
          body: [
            "Before you can negotiate effectively, you need to know where you stand. Use AI to get a quick market check on your current role — not a definitive answer, but a starting point for the deeper research in Lesson 2.",
          ],
          prompt: "I want to understand whether I'm currently paid fairly for my role and experience. My current role is [title], I have [X years] of experience, I work in [industry] in [city or region], and my current salary is approximately [$X]. Can you tell me the realistic market range for someone with my profile, what factors would put me at the top vs. bottom of that range, and whether I should be having a salary conversation?",
          body2: "Don\'t treat AI\'s response as the final word — it\'s a starting point. In the next lesson, you\'ll triangulate across real data sources to build a number you can defend in a conversation.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: 'Not negotiating is a financial decision. It just feels like avoiding conflict.',
          body: [
            "The discomfort of negotiating is a one-time cost. The cost of not negotiating compounds over your entire career. AI removes two of the three barriers — now you have no excuse not to do the research and learn the script.",
            "Next lesson: how to build a market value case that\'s specific, defensible, and grounded in real data.",
          ],
          summaryList: [
            'Fewer than 40% of professionals negotiate — the rest start from a base that compounds low',
            'AI removes the two biggest barriers: not knowing market value and not knowing what to say',
            'Negotiating is expected — it doesn\'t damage relationships or risk the offer',
            'One uncountered offer can cost $50K–$500K over a career through lost compounding',
          ],
        },
      ],
    },
    {
      id: 1,
      title: 'Research Your Market Value Like a Pro',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 4 · Lesson 2',
          icon: '🔍',
          title: 'A number you can\'t defend is just a wish. A researched number is a position.',
          body: [
            "\"I was hoping for more\" is not a negotiation. \"My research across three data sources shows that professionals with my experience level in this market earn $X–$Y, and I\'m targeting $X based on my [specific skill or accomplishment]\" is a negotiation.",
            "The difference between those two conversations is about 30 minutes of research. This lesson shows you exactly how to do it — and how AI helps you synthesize the data into a clear, defensible number.",
          ],
          sub: 'By the end of this lesson, you\'ll know your number and be able to explain it.',
        },
        {
          type: 'concept',
          eyebrow: 'What data sources actually matter',
          icon: '📚',
          title: 'Six sources worth checking — not all are equal.',
          body: [
            "Salary data varies widely by source, so triangulating across at least two or three gives you a more accurate picture than relying on any single one. Some sources are better for certain industries and roles — knowing which to prioritize saves time.",
          ],
          list: {
            items: [
              'Glassdoor.com — self-reported salaries with recent data; useful for company-specific ranges',
              'LinkedIn Salary — filtered by title, location, and industry; easy to use and current',
              'Levels.fyi — especially strong for tech roles; shows total compensation, not just base',
              'Payscale.com — detailed skills-based compensation data; good for showing what specific skills add',
              'Bureau of Labor Statistics (bls.gov) — occupational wage data; authoritative but may lag real market',
              'Industry association salary surveys — often the most accurate for specialized or niche roles',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'The three factors',
          icon: '🔺',
          title: 'Role, industry, and geography determine 90% of your market rate.',
          body: [
            "Three variables account for the vast majority of salary variation: the specific role and level you hold (title matters, but level within that title matters more), the industry you work in (the same role pays 30–50% more at a tech company than a nonprofit), and your geography (in-person roles in San Francisco pay differently than remote roles or positions in mid-size cities).",
            "When you research, make sure you\'re comparing the right combination of all three — not just title alone. A \"Marketing Manager\" at a 10-person startup and a \"Marketing Manager\" at a Fortune 500 company are not comparable data points.",
          ],
          highlight: 'Always filter your salary research by role + industry + geography. Filtering by title alone produces misleading numbers.',
        },
        {
          type: 'concept',
          eyebrow: 'What puts you at the top of the range',
          icon: '⬆️',
          title: 'Specific skills, certifications, and measurable outcomes justify the top of the band.',
          body: [
            "Every salary range has a floor and a ceiling. Understanding which end you belong at — and being able to articulate why — is the difference between landing at the midpoint and landing at the top.",
            "The factors that consistently justify the top of a salary range: specialized technical skills that are scarce and in demand, specific certifications relevant to the role, measurable outcomes from previous roles (revenue driven, costs cut, teams scaled), management or leadership experience at increasing scope, and niche industry expertise that\'s hard to find or replace.",
          ],
          list: {
            items: [
              'Specialized skills or certifications that are in demand and scarce',
              'Measurable outcomes: revenue driven, costs reduced, teams built, projects delivered',
              'Management scope: size of team, budget responsibility, cross-functional leadership',
              'Industry expertise that\'s rare or hard to develop from scratch',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Synthesizing data with AI',
          icon: '🧩',
          title: 'AI helps you turn scattered numbers into a single defensible position.',
          body: [
            "After you\'ve gathered data from two or three sources, AI can help you interpret what it means for your specific situation — accounting for your particular combination of role, industry, geography, and experience level.",
            "More importantly, AI can help you articulate why your target number is reasonable. \"I\'m targeting $X\" is a position. \"I\'m targeting $X because my research across three sources shows the market range for my profile is $Y–$Z, and my [specific experience or accomplishment] positions me toward the top of that range\" is a case.",
          ],
          highlight: 'The goal isn\'t a vague range. It\'s one specific number you can name clearly and defend with evidence.',
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Build a market value case you can actually use in a negotiation.',
          body: [
            "Use AI to help you synthesize your research into a specific, defensible number. Supply your role details and your strongest differentiators — AI will help you frame them into language that works in a real conversation.",
          ],
          prompt: "Help me build a market value case for a negotiation. My role is [title], I have [X years] of experience, with [1–2 key skills or specializations]. I work in [industry] in [city/region]. Based on typical market data for this profile: 1) What salary range should I be targeting? 2) What specific accomplishments or skills would justify the top of that range? 3) What language would I use to present this number as reasonable and researched, not just aspirational?",
          body2: "After you get the response, cross-check the range against at least one real source (Glassdoor or LinkedIn Salary). If the numbers are aligned, you have your anchor. If they diverge, ask AI: \"How would I account for this discrepancy in my conversation?\"",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: 'You now have a number — and a reason for it.',
          body: [
            "Thirty minutes of research, two or three sources, one specific target number, and one clear reason why. That\'s the entirety of the market value research phase. You\'re no longer guessing — you\'re positioned.",
            'Next lesson: the actual words. How to open the negotiation, what to say, and how to structure the whole conversation.',
          ],
          summaryList: [
            'Three factors determine your market value: role/level, industry, and geography — filter for all three',
            'Best sources: Glassdoor, LinkedIn Salary, Levels.fyi (tech), Payscale, BLS, industry surveys',
            'Know what puts you at the top of the range: specific skills, certifications, measurable outcomes',
            'AI synthesizes your data into a defensible number with language you can use in a real conversation',
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'The Negotiation Script',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 4 · Lesson 3',
          icon: '📋',
          title: 'Most negotiation advice tells you what to do. This lesson gives you the exact words.',
          body: [
            "Knowing you should negotiate isn\'t the same as knowing what to say. The moment you start speaking is when most people freeze, over-explain, or immediately undercut their own position before the other person has said a word.",
            "This lesson is about having the script before the conversation starts — so the words come out calmly, confidently, and in the right order, regardless of what you\'re feeling inside.",
          ],
          sub: 'The structure is always the same. The words are yours to customize.',
        },
        {
          type: 'concept',
          eyebrow: 'The universal structure',
          icon: '🏗️',
          title: 'Four beats — every negotiation conversation follows the same arc.',
          body: [
            "Whether you\'re negotiating a new job offer, asking for a raise, or discussing a promotion, the structure of an effective salary conversation is the same every time. Master the structure and the specific situation becomes much easier to navigate.",
          ],
          list: {
            items: [
              '<strong>1. Anchor with appreciation:</strong> Briefly acknowledge the offer or the conversation — without sounding desperate or immediately undermining yourself',
              '<strong>2. Present your case:</strong> Your data (market research) + your value (specific accomplishments) — in that order',
              '<strong>3. State your number:</strong> One specific number, clearly and without apology — not a range',
              '<strong>4. Be quiet:</strong> After you state the number, stop talking — do not fill the silence',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Why state one number — not a range',
          icon: '🎯',
          title: '"I\'m looking for $95,000–$110,000" means you just offered to take $95,000.',
          body: [
            "Giving a range in a negotiation feels safer — it seems less confrontational, less demanding. But in practice, the other party hears the bottom of your range as your number. They will offer you exactly $95,000 and consider it done.",
            "State one number. The top of the range you researched. Clearly and without softening language. \"My target is $105,000\" is a position. \"Somewhere in the range of $95,000 to $110,000\" is an invitation to offer you the minimum.",
          ],
          highlight: 'State one specific number — the top of your researched range. Not a range. Not "around $X." One number.',
        },
        {
          type: 'concept',
          eyebrow: 'The three scenarios',
          icon: '🔀',
          title: 'New offer, raise, or promotion — same structure, different opening.',
          body: [
            "The four-beat structure works in all three scenarios. The opening — the \"anchor with appreciation\" beat — is what changes slightly depending on the situation:",
          ],
          list: {
            items: [
              '<strong>New offer:</strong> "Thank you — I\'m genuinely excited about this role. I\'d like to discuss the compensation."',
              '<strong>Raise request:</strong> "I\'d love to find some time to talk about my compensation. Based on my impact this year and what I\'ve learned about the market, I have some thoughts I\'d like to share."',
              '<strong>Promotion with comp:</strong> "I appreciate the recognition — and I want to make sure the comp reflects the expanded scope I\'ll be taking on."',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'The most important beat',
          icon: '🤫',
          title: 'After you say your number — stop talking.',
          body: [
            "The most powerful thing you can do after naming your number is to stop speaking and wait. This is also the hardest thing. Silence feels like failure. The urge to explain, soften, or immediately walk back your number is intense.",
            "Resist it. The pause is doing work. The other person is thinking. If you fill it, you give away your position before they\'ve even responded. Experienced negotiators know this — they wait, and they win the pause.",
          ],
          highlight: '"My target is $105,000." Then: silence. Wait for them to respond. Do not speak first.',
        },
        {
          type: 'concept',
          eyebrow: 'AI as a rehearsal partner',
          icon: '🎭',
          title: 'Practice the conversation before you\'re in it.',
          body: [
            "The best use of AI in negotiation preparation isn\'t just writing the script — it\'s rehearsing against pushback. Ask AI to play the role of the hiring manager or your boss. Have it give you realistic objections. Practice responding without backing down immediately.",
            "A rehearsed negotiation feels completely different from an improvised one. Your voice stays steady, your pacing is calm, and you don\'t accidentally apologize for wanting to be paid fairly.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Write your opening statement and rehearse the whole conversation.',
          body: [
            "Give AI your specific situation — the type of negotiation, your target number, and your two or three strongest talking points. Ask it to write your opening statement and then simulate the conversation by playing the other side.",
          ],
          prompt: "I want to practice a salary negotiation. Here's my situation: [describe — new offer, raise request, or promotion conversation]. My target is [$ amount or % increase]. Here are my strongest talking points: [list 2–3 accomplishments or data points]. Can you: 1) Write me an opening statement for this conversation, 2) Play the role of my manager or HR and give me pushback, and 3) Help me respond to that pushback without backing down too fast?",
          body2: "Run through the conversation at least twice — once to get familiar with your opening, and once to practice the silence after you state your number. If you can get comfortable with the pause in a practice session, you\'ll hold it in the real one.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: 'You have an opening statement. You\'ve practiced what comes next.',
          body: [
            "The script isn\'t about memorizing lines — it\'s about knowing the structure well enough that nothing surprises you. Appreciate, present data, name the number, be quiet. That\'s the whole arc.",
            "Next lesson: what to do when they push back — and they will.",
          ],
          summaryList: [
            'Four-beat structure: appreciation → data and value → one specific number → silence',
            'State one number — not a range — the top of your researched market data',
            'The pause after naming your number is doing work — don\'t fill it',
            'AI can play the other side so you rehearse the conversation before you\'re in it',
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Counter-Offers and Handling Pushback',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 4 · Lesson 4',
          icon: '🔄',
          title: '"That\'s the best we can do." Most people fold here. You don\'t have to.',
          body: [
            "Pushback is not a rejection. It\'s a negotiating move — and it\'s expected. When an employer says \"that\'s at the top of our range\" or \"budget is frozen right now,\" they\'re not necessarily telling you the truth about their ceiling. They\'re testing whether you\'ll accept.",
            "The professionals who get the best outcomes have pre-planned responses to the most common objections. They don\'t improvise. They don\'t panic. They respond calmly because they knew this was coming.",
          ],
          sub: 'This lesson is about having a plan for every response before they give it.',
        },
        {
          type: 'concept',
          eyebrow: 'The most common pushbacks',
          icon: '📋',
          title: 'Five objections you\'ll hear — and the principle behind responding to each.',
          body: [
            "Most salary pushback falls into a small number of predictable categories. Knowing what they are — and having a general response approach for each — means you\'re never caught off-guard.",
          ],
          list: {
            items: [
              '"That\'s the top of our range" — ask what would change that range, or shift to non-salary comp',
              '"Budget is frozen right now" — ask for a specific timeline and a commitment to revisit',
              '"We really like you, but we can\'t go higher" — separate the two statements; revisit the first before accepting the second',
              '"That\'s above what we budgeted for this role" — the budget was set before they knew your profile; it can be adjusted',
              '"We need to stay internally equitable" — ask what the path looks like to reach your target level',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'The principle',
          icon: '⚓',
          title: 'Acknowledge without agreeing. Reframe toward what\'s possible.',
          body: [
            "The structure of an effective response to pushback has two parts: acknowledge what they said (without accepting it as final), and then redirect toward a path forward. You\'re not arguing. You\'re keeping the conversation open.",
            "\"I understand budget constraints are real — can we talk about timing for a review?\" acknowledges the constraint and opens a door. \"Okay\" closes the door. The goal is never to win an argument. It\'s to keep negotiating.",
          ],
          highlight: 'Acknowledge + redirect. Never simply agree. Never argue. Keep the conversation moving forward.',
        },
        {
          type: 'concept',
          eyebrow: 'Know your walk-away number',
          icon: '🚪',
          title: 'Before the conversation, decide: what\'s the minimum you\'ll accept?',
          body: [
            "Effective negotiators set their walk-away number before the conversation starts — not during it. In the moment, emotions interfere with clear thinking. If you haven\'t decided in advance what your minimum is, you\'re likely to accept less than you should when pressure is applied.",
            "Your walk-away number isn\'t public information. You never say it. But knowing it gives you clarity in the conversation: offers above it are worth considering; offers below it mean you either push for non-salary options or seriously consider whether this is the right opportunity.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'When comp is truly fixed',
          icon: '🔄',
          title: 'If salary is fixed, there\'s still more to negotiate.',
          body: [
            "Sometimes the budget constraint is real and the salary ceiling is genuinely immovable. That doesn\'t mean the conversation is over. Total compensation extends well beyond base salary — and several of these alternatives can be worth more than a cash increase.",
          ],
          list: {
            items: [
              '<strong>Remote or flexible work:</strong> Can be worth $10,000+ annually in commute and childcare savings',
              '<strong>Title upgrade:</strong> Affects future earning power and career positioning',
              '<strong>Signing bonus:</strong> One-time, often outside the ongoing comp budget',
              '<strong>Performance bonus or equity:</strong> Upside tied to outcomes you expect to drive',
              '<strong>Professional development budget:</strong> Certifications, conferences, courses',
              '<strong>Extra vacation days:</strong> Real money when you calculate your daily rate',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Ask for a review timeline',
          icon: '📅',
          title: 'If they can\'t give you the number now, get a specific date to revisit it.',
          body: [
            "When a salary request is genuinely delayed — budget cycles, new hire policies, existing team equity — the right response is to accept the constraint gracefully and ask for a specific date to revisit it. Not \"when things improve.\" A specific month or quarter.",
            "\"I understand. Can we agree to revisit this in six months — specifically in October? I\'d like to have a formal conversation then about where I am relative to our agreed target.\" This turns a delay into a commitment — one you can hold them to.",
          ],
          highlight: 'A specific review date is a concession you should always request when immediate comp isn\'t possible.',
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Script your response to the pushback you\'re most likely to hear.',
          body: [
            "Think about the specific objection you\'re most likely to encounter — or paste in an objection you\'ve already received. Ask AI to help you craft a response that acknowledges, reframes, and keeps the conversation open.",
          ],
          prompt: "I'm in a negotiation and just heard this response: '[paste the exact pushback you received or anticipate — e.g., That's the best we can do, or Budget is frozen right now].' My target was [$ or outcome]. Help me craft a response that: 1) acknowledges what they said without agreeing, 2) reframes toward what we can both agree on, and 3) keeps the conversation open rather than closed.",
          body2: "Practice this response out loud three times. Notice how different it feels from your initial instinct to either push back aggressively or immediately capitulate. The goal is calm, factual, and forward-looking.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: 'Pushback is part of the process — now you have a response for it.',
          body: [
            "The professionals who get the best outcomes don\'t fold on first resistance. They have a calm, pre-planned response to every common objection. They know their walk-away number. And they know how to pivot to non-salary comp when the base is genuinely fixed.",
            'Last lesson: thinking about compensation as a complete picture — not just base salary.',
          ],
          summaryList: [
            'Pushback is expected — it\'s a negotiating move, not a final answer',
            'Acknowledge without agreeing, then redirect toward a path forward',
            'Know your walk-away number in advance — decide it before the conversation, not during',
            'When salary is fixed: negotiate remote work, title, signing bonus, development budget, or a review date',
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Beyond Salary — The Total Picture',
      meta: '9 slides · ~7 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 4 · Lesson 5',
          icon: '🔭',
          title: 'Salary is one number in a much bigger equation.',
          body: [
            "For professionals in their 30s, 40s, and 50s, total compensation means something different than it did at 22. The dollar amount on a paycheck matters — but so does the flexibility to work remotely, the title that shapes your next career move, the equity that could matter in three years, and the retirement match you\'re leaving on the table.",
            "This lesson is about seeing the full picture, knowing how to value each component, and incorporating everything into a negotiation strategy that maximizes your actual take-home situation — not just the headline number.",
          ],
          sub: 'The most sophisticated negotiators don\'t just maximize salary. They maximize total value.',
        },
        {
          type: 'concept',
          eyebrow: 'Total compensation components',
          icon: '📊',
          title: 'Eight elements worth understanding — and potentially negotiating.',
          body: [
            "Base salary gets all the attention. But for mid-career professionals, these other components can be equal to or greater than a modest salary difference — especially when you factor in taxes, lifestyle, and long-term positioning.",
          ],
          list: {
            items: [
              '<strong>Base salary:</strong> The anchor — affects all future raises and retirement contributions',
              '<strong>Annual bonus:</strong> Performance-based upside; clarify the realistic range, not just the maximum',
              '<strong>Equity (stock/options):</strong> Potentially significant; understand vesting schedule and current value',
              '<strong>Remote/flexible work:</strong> Translate to dollars: commute costs, childcare, time',
              '<strong>Retirement matching:</strong> Immediate 50–100% return on contributed dollars — never leave this on the table',
              '<strong>Professional development budget:</strong> Certifications, conferences, coaching — direct career value',
              '<strong>Title:</strong> Affects future earning power and how you\'re perceived at your next transition',
              '<strong>Vacation and PTO:</strong> Calculate your daily rate — extra days have real cash value',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Remote work math',
          icon: '🏠',
          title: 'Remote work is often worth $10,000–$20,000 per year in real dollars.',
          body: [
            "Remote work doesn\'t show up in your paycheck — but it absolutely shows up in your finances. Commuting costs (transit, gas, parking, wear on a vehicle) commonly run $3,000–$8,000 per year. Childcare or eldercare flexibility can be worth far more.",
            "A job that offers full remote work versus one that requires four days in the office isn\'t just a lifestyle difference — it\'s a compensation difference. When comparing offers, add this to the total compensation equation before making a decision based on base salary alone.",
          ],
          highlight: 'Remote flexibility has a dollar value. Calculate it before comparing two offers on salary alone.',
        },
        {
          type: 'concept',
          eyebrow: 'The equity question',
          icon: '📈',
          title: 'Equity requires three questions to evaluate properly.',
          body: [
            "Equity — stock options, RSUs, profit sharing — can be enormously valuable or practically worthless depending on the company, stage, and structure. Don\'t accept \"we offer equity\" as a compensation statement without understanding what you\'re actually getting.",
          ],
          list: {
            items: [
              '<strong>What type?</strong> RSUs (real shares), stock options (right to buy at a price), phantom equity — each works differently',
              '<strong>What\'s the vesting schedule?</strong> Most common: 4 years with 1-year cliff — you get nothing if you leave in year one',
              '<strong>What\'s the current value?</strong> Public company: look it up. Private company: ask for the most recent 409A valuation',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Retirement matching',
          icon: '🏦',
          title: 'An unmatched 401(k) is money you\'re choosing not to take.',
          body: [
            "If an employer offers 3% 401(k) matching and you don\'t contribute enough to capture it, you\'re declining free money at a 100% return rate. This is one of the most common and most expensive oversights in total compensation.",
            "When evaluating an offer, always ask: what\'s the match, what\'s the vesting schedule for the match, and what do I need to contribute to capture the full match? Then calculate what that match is worth annually and add it to your total compensation number.",
          ],
          highlight: 'Always maximize employer 401(k) match before negotiating anything else. It\'s an immediate 50–100% return.',
        },
        {
          type: 'concept',
          eyebrow: 'The long game',
          icon: '⏳',
          title: 'Negotiating well at each transition compounds into dramatically higher lifetime earnings.',
          body: [
            "Every negotiation is not just about the next job. It\'s about the base you carry into the one after that, and the one after that. Professionals who consistently negotiate — not aggressively, just consistently — build an earnings trajectory that their non-negotiating peers never catch up to.",
            "At 45, the professional who has negotiated at every transition often earns 30–50% more than an equally qualified peer who accepted every first offer. The gap doesn\'t close. It widens — because every raise and every new offer is a percentage of a different starting number.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'AI-assisted total comp comparison',
          icon: '🧮',
          title: 'AI can help you compare two offers across every dimension.',
          body: [
            "When you\'re choosing between two offers — or evaluating whether to take a raise or look externally — AI can help you build a true apples-to-apples comparison across all compensation components. Salary, bonus, equity, benefits, flexibility, title, retirement match, and development budget.",
            "Describe both offers fully — including the non-salary elements — and ask AI to calculate the total compensation value of each, flag which elements are most important given your situation, and identify what you should push to improve before deciding.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Build a complete compensation picture for your current role or a pending offer.',
          body: [
            "Describe your current role\'s total compensation — or an offer you\'re evaluating — across every dimension. Ask AI to calculate total value, identify gaps, and suggest which elements are most worth negotiating given your priorities.",
          ],
          prompt: "I want to evaluate my total compensation picture. Here's what I know about my current [role / pending offer]: Base salary: [$X]. Bonus: [describe — guaranteed, performance-based, typical range]. Equity: [describe or 'none']. Retirement matching: [describe]. Remote/flexible work: [describe]. Professional development budget: [$X or 'none']. Title: [describe]. Vacation days: [number]. Here's what matters most to me right now: [list 2–3 priorities — e.g., flexibility, savings, career positioning]. Tell me: 1) What is the total compensation value? 2) What am I leaving on the table? 3) What should I negotiate or change first?",
          body2: "After you get the analysis, ask: \"If I could only negotiate one thing here that would have the biggest long-term impact, what should it be?\" The answer is usually either base salary (because it compounds) or retirement matching (because the return is immediate). Act on that first.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 4 Complete',
          icon: '🎉',
          title: 'Negotiation is a professional skill. You\'ve now prepared for it like one.',
          body: [
            "You know your market value, you have a script, you\'re ready for pushback, and you see the full compensation picture. Negotiation isn\'t an awkward conversation anymore — it\'s a professional skill you\'ve done the preparation for.",
            "The professionals who build the most financial security don\'t do it by being the most talented. They do it by consistently advocating for themselves at every transition — and now you have the tools to do exactly that.",
          ],
          summaryList: [
            'Total compensation extends far beyond base: bonus, equity, remote work, retirement match, title, PTO',
            'Remote work and retirement matching often represent $10,000–$20,000+ in annual real value',
            'Equity requires three questions: what type, what vesting schedule, and what\'s the current value',
            'Negotiating well at every transition compounds into dramatically higher lifetime earnings',
          ],
          gradBlock: {
            icon: '💰',
            title: 'You Negotiate from Strength Now',
            body: "You know your market value, you have a script, and you're prepared for pushback. Negotiation isn't an awkward conversation anymore — it's a professional skill you've prepared for.",
            name: 'Module 4 Complete',
          },
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'What percentage of professionals typically negotiate their salary offers?',
      options: [
        'About 75% — most professionals negotiate at least once',
        'About 60% — the majority negotiate, but many don\'t push hard',
        'Fewer than 40% — most accept the first offer',
        'About 50% — it\'s roughly split',
      ],
      correct: 2,
      feedback: "Research consistently shows fewer than 40% of professionals negotiate. The majority accept the first offer — not because they\'re satisfied, but because they don\'t know their market value or don\'t know what to say. AI can remove both of those barriers.",
    },
    {
      q: 'What is the correct order of steps in a salary negotiation?',
      options: [
        'State your number immediately to anchor the conversation',
        'Appreciate → present your case with data → state your number → be quiet and wait',
        'Ask them for their range first before sharing your target',
        'Present your case, apologize for asking, then state a range rather than a specific number',
      ],
      correct: 1,
      feedback: 'The four-beat structure works in every negotiation scenario: anchor with appreciation (briefly), present your case with market data and your specific value, state one specific number (not a range), then stop talking. The pause after naming your number is doing work — let it.',
    },
    {
      q: "When an employer says \"that's the best we can do,\" what should you do?",
      options: [
        'Accept gracefully — pushing further damages the relationship',
        'Immediately counter with a higher number to reset the anchor',
        "Don't accept immediately — explore non-salary compensation and ask for a specific review timeline",
        'Ask for 24 hours to think, then send an email accepting the offer',
      ],
      correct: 2,
      feedback: '"That\'s the best we can do" is a negotiating move — not necessarily a final answer. The right response is to acknowledge the constraint without immediately agreeing, then explore non-salary elements (remote work, title, development budget, signing bonus) and ask for a specific date to revisit base salary.',
    },
    {
      q: 'What are three reliable sources for salary market research?',
      options: [
        'Your gut instinct, your friend\'s salary, and what you made at your last job',
        'The job posting salary range, your manager\'s estimate, and the company\'s public filings',
        'Glassdoor, LinkedIn Salary, and industry-specific surveys',
        'The Bureau of Labor Statistics alone — it\'s the most authoritative source',
      ],
      correct: 2,
      feedback: 'Glassdoor, LinkedIn Salary, and industry-specific surveys are three of the most reliable and current sources for compensation data. Triangulating across two or three sources — filtered by role, industry, and geography — gives you a defensible number rather than a single data point that could be an outlier.',
    },
    {
      q: 'Why does negotiating well early in your career have such a large long-term impact?',
      options: [
        'Because early-career salaries are lower and easier to negotiate up significantly',
        'Because employers respect employees who negotiate and give them preferential treatment',
        'Each raise is calculated as a percentage of your current salary — a higher base compounds forward into every future raise',
        'Because negotiating early establishes your reputation as someone who knows their worth',
      ],
      correct: 2,
      feedback: 'The compounding effect is the most important reason to negotiate at every opportunity. Each raise is a percentage of your current base — so a $7,000 negotiation win in year one becomes a $7,000 higher baseline for every raise after that. Over 10 years, that single negotiation can represent $60,000–$100,000 in cumulative additional earnings.',
    },
  ],
}

export default c6module4
