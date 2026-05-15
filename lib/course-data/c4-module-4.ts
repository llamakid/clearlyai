import type { CourseData } from './types'

const c4module4: CourseData = {
  moduleId: 22,
  title: "Travel Like You've Always Wanted",
  subtitle: 'AI for a Richer Retirement · Module 4',
  nextModuleId: 23,
  lessons: [
    // ─────────────────────────────────────────
    // Lesson 0 — Planning Trips Without the Overwhelm
    // ─────────────────────────────────────────
    {
      id: 0,
      title: 'Planning Trips Without the Overwhelm',
      meta: '7 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for a Richer Retirement · Lesson 1',
          icon: '✈️',
          title: 'Planning Trips Without the Overwhelm',
          body: [
            "By the end of this lesson, you'll know how to use AI as a personal travel planning partner — one that helps you turn a vague idea into a real, ready-to-go itinerary without spending hours on travel websites.",
          ],
          sub: "Let's make trip planning feel exciting again, not exhausting.",
        },
        {
          type: 'concept',
          eyebrow: 'Why planning feels harder than it used to',
          icon: '😩',
          title: "Too many options. Not enough time to sort through them.",
          body: [
            "Travel planning has gotten overwhelming. There are hundreds of booking sites, thousands of TripAdvisor reviews, endless blog posts with contradictory advice, and no clear way to know what's actually right for you.",
            "You can spend three hours researching a destination and feel less certain than when you started. That's not a you problem — that's a too-much-information problem.",
            "AI cuts through all of that. Instead of reading everything, you have a conversation.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'What AI does differently',
          icon: '🗺️',
          title: 'Think of it as your personal travel consultant — on call 24/7.',
          body: [
            "A good travel consultant listens to what you actually want — not just 'somewhere warm,' but your pace, your interests, your budget, your concerns. Then they make specific recommendations.",
            "AI works the same way, but it's available at 10pm when you're browsing from your armchair, and it never pressures you into anything.",
            "The more you tell it about yourself, the better its suggestions get. You're not searching for information — you're having a conversation about your trip.",
          ],
          highlight: "The difference between a confusing search and a great AI conversation is giving it context about you.",
        },
        {
          type: 'concept',
          eyebrow: 'Building an itinerary',
          icon: '📅',
          title: "From 'We want to see Italy' to a day-by-day plan in minutes.",
          body: [
            "Tell AI where you're thinking of going, how many days you have, and what kind of trip you enjoy. It will draft a day-by-day itinerary — towns to visit, how long to stay in each place, what to prioritize.",
            "Don't love something? Tell it. 'We'd rather spend three days in one place than rush between five cities.' It adjusts instantly.",
            "No more agonizing over decisions for weeks. You get a solid starting plan and refine from there.",
          ],
          list: {
            items: [
              'Day-by-day itineraries tailored to your travel pace',
              'Recommendations for where to stay and for how long',
              'What to prioritize if your time is limited',
              'Alternative plans if you want a slower or faster trip',
            ],
          },
        },
        {
          type: 'compare',
          eyebrow: 'Vague vs. specific — the difference is striking',
          icon: '🔍',
          title: 'How you ask shapes what you get.',
          bad: {
            label: 'Too vague',
            text: '"What should I do in Portugal?"',
          },
          good: {
            label: 'Specific and useful',
            text: '"My husband and I are planning 10 days in Portugal in October. We\'re both in our late 60s and prefer a relaxed pace — we like history, good food, and scenic views, but we\'re not big hikers. We\'re flying into Lisbon. Can you suggest a day-by-day itinerary that isn\'t rushed?"',
          },
        },
        {
          type: 'concept',
          eyebrow: 'Research made easy',
          icon: '🔎',
          title: "Ask anything you'd ask a well-traveled friend.",
          body: [
            "Is this the right time of year to visit? What's the weather like? How much should I budget per day? Do I need a visa? Is this destination easy to get around without a car?",
            "These are exactly the kinds of questions AI answers well — drawing from its training on travel guides, articles, and destination information from around the world.",
            "Think of every question as fair game. There's no such thing as a silly travel question, and AI won't make you feel like you should already know.",
          ],
          highlight: "Always double-check visa requirements and entry rules on official government websites — these change and AI's information may not be current.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Plan your next adventure — or daydream about one.',
          body: [
            "Open <strong>chatgpt.com</strong> and paste this in. Fill in the brackets with your real details (or a trip you've been thinking about).",
          ],
          prompt:
            "I'm planning a trip and I'd love your help building an itinerary. Here are the details: Destination: [country or region you're considering]. Length of trip: [number of days]. Travel style: [relaxed/moderate/active]. Interests: [history, food, nature, art, beaches, etc.]. Any concerns or limitations: [mobility, pace, health considerations, travel anxiety, etc.]. Can you draft a day-by-day itinerary that fits this profile, and flag anything I should know before booking?",
          body2:
            "Read what it gives you. Then try asking: 'Can you suggest a slower version of this itinerary?' or 'What would you cut if we only had 7 days instead of 10?' Notice how quickly it adapts.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: "Trip planning just became something to look forward to.",
          body: [
            "You don't have to wade through hundreds of websites anymore. One honest conversation with AI gets you a real plan — tailored to you, adjustable on the fly.",
            "In the next lesson, we go deeper: finding the local experiences and hidden gems that make a trip truly memorable.",
          ],
          summaryList: [
            'AI works as a personal travel consultant — specific questions get specific, useful answers',
            'The more context you give (pace, interests, concerns), the better the itinerary',
            'You can refine anything instantly — just tell it what to adjust',
            'Always verify visa and entry requirements on official government sites',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 1 — Finding Experiences Worth Having
    // ─────────────────────────────────────────
    {
      id: 1,
      title: 'Finding Experiences Worth Having',
      meta: '7 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for a Richer Retirement · Lesson 2',
          icon: '🌟',
          title: 'Finding Experiences Worth Having',
          body: [
            "By the end of this lesson, you'll know how to use AI to discover the experiences that actually make a trip memorable — not just the tourist spots, but the local gems, the perfect guided tours, and the things that match what you love.",
          ],
          sub: "The best travel moments are rarely on page one of a Google search.",
        },
        {
          type: 'concept',
          eyebrow: 'Beyond the obvious',
          icon: '🗝️',
          title: "Every destination has two layers — the tourist trail and the real thing.",
          body: [
            "Most travelers see the first layer: the famous landmarks, the crowded restaurants on TripAdvisor's top ten, the things everyone photographs. Those are fine — some of them are famous for a reason.",
            "But the trips people talk about for years usually involve the second layer: the neighborhood market that locals actually shop at, the small museum that tells the real story, the family-run restaurant with no English menu.",
            "AI can help you find both — and know which is which.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Getting specific with your interests',
          icon: '🎨',
          title: "Tell AI what you love and it'll find things you'd never have found yourself.",
          body: [
            "AI can match destination experiences to your specific interests in a way that generic travel sites can't. You're not searching a database — you're describing yourself to someone who knows a lot about everywhere.",
          ],
          list: {
            items: [
              '"We love WWII history — what\'s worth seeing near Normandy that most tourists miss?"',
              '"I\'m a birdwatcher — what\'s the best region of Costa Rica for birding in March?"',
              '"We enjoy cooking classes and local food markets — where in Tuscany should we look?"',
              '"My wife loves architecture and I love local breweries — what city in Germany suits us both?"',
            ],
          },
          highlight: "The more specific you are about what you love, the more surprising and satisfying the recommendations.",
        },
        {
          type: 'concept',
          eyebrow: 'Finding the right guided tour',
          icon: '🧭',
          title: "AI helps you ask better questions before you book.",
          body: [
            "Guided tours range from excellent to deeply disappointing — and the difference is usually in the details. Is it a small group or a bus of 50? Does the guide speak clearly and slowly? Is the pace comfortable?",
            "Use AI to help you know what to look for and what questions to ask tour operators before you book. It can also describe what a typical tour of a specific site includes, so you know what you're signing up for.",
            "This is especially helpful if you're booking independently — AI can tell you whether a guided experience is worth it or whether you'd do just as well on your own.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Practical discovery',
          icon: '🍽️',
          title: "Restaurants, markets, neighborhoods — AI narrows the list.",
          body: [
            "Instead of scrolling through 300 TripAdvisor listings, describe exactly what you want and let AI give you a shortlist.",
            "Tell it the neighborhood you're staying in, the kind of food you enjoy, whether you want something casual or special, and any dietary needs. It will suggest options worth looking up — then you can verify the details on actual booking sites.",
          ],
          highlight: "Use AI to narrow your options, then verify current hours, prices, and reservations on the restaurant or booking site directly. Things change.",
        },
        {
          type: 'concept',
          eyebrow: 'Day trips and side adventures',
          icon: '🚆',
          title: "Don't stay in your home base the whole time.",
          body: [
            "Some of the best travel memories come from day trips — a short train ride to a smaller town, a half-day excursion to something off the main route.",
            "AI is excellent at suggesting day trips from wherever you're based. Tell it where you're staying, how much time you have, and what you're in the mood for. It will give you real options with a sense of how long they take to get to.",
            "This is particularly useful when you want to avoid tourist crowds — smaller towns near major destinations are often far more rewarding and far less exhausting.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: "Discover something you'd never have found on your own.",
          body: [
            "Open <strong>chatgpt.com</strong> and use this prompt. Make it as specific as you like — the more personal, the better.",
          ],
          prompt:
            "I'm visiting [city or region] and I want to find experiences that go beyond the standard tourist highlights. My interests include [list 2–3 specific interests: e.g., local history, traditional crafts, good wine, quiet gardens, live music, coastal walks]. I prefer a relaxed pace and would rather have one meaningful experience than rush through five. Can you suggest 4–5 experiences or places in this area that match what I love, including at least one that most visitors overlook?",
          body2:
            "Try following up with: 'What's the best time of day to visit each of these?' or 'Which of these would you skip if we only have one free afternoon?' The conversation gets richer as you go.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: "Now you know how to find the good stuff.",
          body: [
            "The experiences that become your favorite travel stories aren't found by scrolling — they're found by knowing how to ask. AI helps you ask better.",
            "In the next lesson, we talk about something practical but important: traveling smarter at this stage of life — pace, comfort, and planning for what actually matters to you now.",
          ],
          summaryList: [
            'Be specific about your interests — AI finds experiences that match, not just what\'s popular',
            'Use AI to discover local gems, smaller towns, and day trips worth taking',
            'Ask AI what questions to ask before booking guided tours',
            'Always verify current hours, reservations, and prices on the actual venue\'s website',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 2 — Traveling Smarter at This Stage of Life
    // ─────────────────────────────────────────
    {
      id: 2,
      title: 'Traveling Smarter at This Stage of Life',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for a Richer Retirement · Lesson 3',
          icon: '🧳',
          title: 'Traveling Smarter at This Stage of Life',
          body: [
            "By the end of this lesson, you'll know how to use AI to plan travel that works for your body, your pace, and your priorities — so you come home rested and glad you went, not worn out and wondering why you bothered.",
          ],
          sub: "Traveling well now means planning differently than you did at 35.",
        },
        {
          type: 'concept',
          eyebrow: 'A different kind of trip',
          icon: '🌅',
          title: "The best trips at this stage aren't faster. They're richer.",
          body: [
            "When you were younger, you might have packed ten cities into two weeks and called it a vacation. That style of travel is exhausting at any age — and it misses the point.",
            "Retirement travel has a gift most younger travelers don't have: time. You can stay somewhere long enough to actually feel it. To go back to the same café twice. To take the slow train because the view is worth it.",
            "AI can help you plan for that — building in the breathing room that turns a good trip into a great one.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Accessibility and mobility',
          icon: '♿',
          title: "Ask AI to plan around your actual mobility needs — without embarrassment.",
          body: [
            "Cobblestone streets, long walking tours, multi-floor museums without elevators — these details matter enormously and are rarely front-and-center in travel guides.",
            "AI lets you ask directly, without awkwardness: How walkable is this city for someone with a bad knee? Are there accessible room options at hotels in this area? Which museums in Rome have elevators and flat floors?",
            "You deserve to know before you arrive, not after you've been walking for 20 minutes and realized the old town is entirely uphill.",
          ],
          highlight: "Always confirm accessibility specifics directly with the hotel or venue — AI gives you the right questions to ask, not a guarantee.",
        },
        {
          type: 'concept',
          eyebrow: 'Pacing your days',
          icon: '⏳',
          title: "Build rest into the plan — not as an afterthought.",
          body: [
            "One of the most useful things you can do when planning with AI: tell it you want afternoon rest time built in. Or that you don't want to be out past 8pm. Or that you prefer mornings and want afternoons free.",
            "Most travel itineraries are written as if rest is a sign of weakness. It isn't. It's how you stay healthy, enjoy what you see, and come home feeling like the trip was a gift rather than an ordeal.",
            "AI will honor these preferences when you name them explicitly.",
          ],
          list: {
            items: [
              '"Please build in 2 hours of rest after lunch each day"',
              '"We prefer not to have more than one major activity per day"',
              '"No early-morning starts — nothing before 9am"',
              '"We\'d like one full rest day in the middle of the trip"',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: 'Packing thoughtfully',
          icon: '👜',
          title: "AI is a surprisingly good packing advisor.",
          body: [
            "Tell AI your destination, the time of year, how long you'll be gone, and any specific activities or dress codes you'll encounter. It will give you a tailored packing list that doesn't assume you're 30 and carrying a backpack.",
            "It can also help you think through things you might not remember to pack: the right adapter for European outlets, comfortable walking shoes that also work for a nice dinner, medications to carry in your carry-on rather than checked luggage.",
          ],
          highlight: "Medications in checked luggage can be lost. AI will remind you to carry all essential medications and keep a written list of them in your wallet.",
        },
        {
          type: 'concept',
          eyebrow: 'Health and medical planning',
          icon: '🏥',
          title: "Plan ahead for your health — calmly, not fearfully.",
          body: [
            "AI can help you think through practical health preparation: what vaccinations or health recommendations apply to your destination, how to find English-speaking doctors if needed, whether your destination has good medical facilities in case something comes up.",
            "This isn't about expecting the worst — it's about the calm confidence that comes from knowing you've thought it through. People who prepare well worry less, not more.",
          ],
          list: {
            items: [
              'Ask your doctor about destination-specific health recommendations before you go',
              'Carry a written list of your medications and dosages',
              'Know your travel insurance policy number and the 24-hour emergency line',
              'Research the nearest hospital or clinic to where you\'re staying',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Travel insurance',
          icon: '🛡️',
          title: "At this stage, travel insurance isn't optional. AI can explain your options.",
          body: [
            "Medical costs abroad can be significant, and trip cancellation due to a health issue is more common than most travelers plan for. Travel insurance that includes medical evacuation coverage is genuinely important.",
            "Ask AI to explain the difference between trip cancellation coverage and medical evacuation coverage — it'll explain in plain English what each one does. Then use an independent comparison site to shop for a real policy.",
            "The peace of mind is worth every dollar.",
          ],
          highlight: "Always read the policy's pre-existing condition clauses carefully. AI can help you understand what questions to ask the insurer before buying.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Build a travel plan that actually fits you.',
          body: [
            "Open <strong>chatgpt.com</strong> and paste this prompt. Fill in your real details — be honest about what you need. That's what makes it useful.",
          ],
          prompt:
            "I'm planning a trip to [destination] for [number of days]. I want you to help me plan it in a way that works for me specifically. Here's what matters to me: Pace: [e.g., relaxed — no more than one major thing per day]. Rest: [e.g., I need a rest break after lunch and prefer not to walk more than 2 miles in a day]. Mobility: [e.g., I have a bad left knee so steps and cobblestones are hard]. Health: [e.g., I take daily medication and need to stay near a pharmacy]. Can you suggest an itinerary and flag any accessibility or health considerations I should know about for this destination?",
          body2:
            "Follow up with: 'What's the terrain like in the areas you recommended?' or 'Are there easy transport options between these places so I don't have to walk far?' Every answer makes the plan more real.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: "Smart planning is what makes great trips possible.",
          body: [
            "Traveling well now isn't about doing less — it's about planning more honestly. When you build a trip around how you actually feel and move, you enjoy it far more.",
            "In the next lesson, we cover the part no one wants to think about but everyone needs: what happens when things don't go as planned.",
          ],
          summaryList: [
            'Tell AI your real mobility and pacing needs — it plans around them without judgment',
            'Build in rest time explicitly — it makes the whole trip better',
            'Carry all medications in your carry-on with a written list',
            'Travel insurance with medical evacuation coverage is essential at this stage',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 3 — When Things Don't Go as Planned
    // ─────────────────────────────────────────
    {
      id: 3,
      title: "When Things Don't Go as Planned",
      meta: '7 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for a Richer Retirement · Lesson 4',
          icon: '🆘',
          title: "When Things Don't Go as Planned",
          body: [
            "By the end of this lesson, you'll know how to use AI to navigate the stressful moments that sometimes happen when you travel — delays, cancellations, language barriers, and unexpected situations — calmly and competently.",
          ],
          sub: "Things go sideways sometimes. Here's how to handle them.",
        },
        {
          type: 'concept',
          eyebrow: 'Disruptions are part of travel',
          icon: '⛈️',
          title: "Every traveler encounters problems. Prepared travelers recover faster.",
          body: [
            "A missed connection. A hotel that can't find your reservation. A stomach bug. A flight cancelled due to weather. A pharmacy where no one speaks English.",
            "These things happen to everyone. The difference between a disaster and an inconvenience is almost entirely how prepared you are — and how calmly you can think through your options.",
            "AI is a remarkable tool for exactly these moments. It helps you think clearly when you're stressed, and gives you specific language to use when you're not sure what to say.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Flight delays and cancellations',
          icon: '🛫',
          title: "Know your rights before the gate agent says 'nothing we can do.'",
          body: [
            "When a flight is cancelled or significantly delayed, airlines owe you more than most gate agents will volunteer. The rules differ by country and airline — AI can explain what compensation or rebooking rights typically apply in your situation.",
            "Use AI in the moment: 'My flight from Paris to New York was just cancelled. What are my rights as a passenger on a US airline, and what should I ask for at the customer service desk?'",
            "Come prepared, ask clearly, and you'll often get far more than you would by waiting passively.",
          ],
          highlight: "Document everything — take photos of departure boards, get names of agents, keep all receipts for expenses during the delay.",
        },
        {
          type: 'concept',
          eyebrow: 'Language barriers',
          icon: '🗣️',
          title: "AI can translate, explain, and even speak for you.",
          body: [
            "In a country where you don't speak the language, a small communication gap can feel enormous. AI tools like ChatGPT can translate text instantly — paste in a menu, a sign, a form, or a bill and ask what it says.",
            "You can also ask AI to write a message in the local language for you. 'I need to tell the pharmacist I have a penicillin allergy and I need something for a stomach infection — please write this in Italian.' Then show it on your phone.",
            "Google Translate's camera feature is also invaluable for reading menus and signs in real time — point your phone camera and it translates what you see.",
          ],
          list: {
            items: [
              'Copy and paste text you can\'t read — ask AI to translate it',
              'Ask AI to write a message for you to show in the local language',
              'Use Google Translate\'s camera mode for menus, signs, and forms',
              'Learn 5 emergency phrases in the local language before you go',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: 'Medical situations abroad',
          icon: '🏥',
          title: "How AI helps when you need medical care far from home.",
          body: [
            "If you or your travel companion has a medical issue abroad, your first call should be to your travel insurance's 24-hour emergency line — they can direct you to approved providers and handle the paperwork.",
            "But AI can help in parallel: help you describe your symptoms clearly in English so you can explain them to a doctor, help you understand what a foreign prescription says, or tell you what a medication's generic name is so a local pharmacy can find it.",
            "Staying calm and clear is the most important thing you can do — and having an AI to think alongside you makes both easier.",
          ],
          highlight: "Call your travel insurance emergency line first. Keep that number saved in your phone before you leave home.",
        },
        {
          type: 'concept',
          eyebrow: 'Lost or stolen belongings',
          icon: '👜',
          title: "AI walks you through what to do, step by step.",
          body: [
            "Lost passport. Stolen wallet. Missing luggage. These are disorienting situations, especially abroad. AI can give you a clear, calm checklist of exactly what to do next — who to call, where to go, what information you'll need.",
            "For example: 'My passport was stolen in Barcelona. What are the exact steps I need to take and what do I need to contact the US Embassy?'",
            "You'll get a clear sequence of actions instead of a panicked search through websites while upset.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Practice before you need it.',
          body: [
            "Open <strong>chatgpt.com</strong> and try this exercise. Think of a trip you've taken or plan to take and use it as the context.",
          ],
          prompt:
            "I'm traveling in [country or region] and I need help with an unexpected situation. Here's what happened: [describe the scenario — e.g., 'my flight was cancelled and I've been rebooked on a flight 18 hours later,' or 'I need to explain to a pharmacist in Italy that I need something for high blood pressure but my medication was lost,' or 'our hotel says they have no record of our reservation']. What should I do right now, step by step? Who do I contact, what do I say, and what information do I need to have ready?",
          body2:
            "Try a few different scenarios — a medical one, a travel disruption, and a language barrier. Notice how specific and practical the guidance is. This is the kind of help that makes a real difference in the moment.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: "Prepared travelers recover fast. Now you're prepared.",
          body: [
            "You can't prevent every travel problem. But with AI in your pocket, you're never alone in figuring out what to do next. That calm, practical support is worth a lot when you're stressed in an unfamiliar place.",
            "In the final lesson, we turn to something much more joyful: capturing your travels and sharing them with the people who matter most.",
          ],
          summaryList: [
            'Use AI in the moment — ask exactly what your rights are and what steps to take',
            'AI can translate text and write messages for you in any language',
            'Save your travel insurance emergency number in your phone before you leave',
            'Describe your situation clearly to AI and it will give you a step-by-step response',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 4 — Capturing and Sharing Your Travels
    // ─────────────────────────────────────────
    {
      id: 4,
      title: 'Capturing and Sharing Your Travels',
      meta: '7 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for a Richer Retirement · Lesson 5',
          icon: '📸',
          title: 'Capturing and Sharing Your Travels',
          body: [
            "By the end of this lesson, you'll know how to use AI to write trip journals, create meaningful photo captions, share your travels with family in a way they'll love, and preserve your memories so they last.",
          ],
          sub: "The trip is the experience. What you write down is what you keep.",
        },
        {
          type: 'concept',
          eyebrow: 'Why it matters to capture it',
          icon: '📖',
          title: "Memories fade. Stories don't.",
          body: [
            "You've probably had the experience of looking at a photo years later and remembering almost nothing about the moment — the photo is there but the story behind it is gone.",
            "The fix isn't a better camera. It's a few words written down while the memory is still fresh. And AI makes that easier than you might think.",
            "You don't have to be a writer. You just have to remember what happened and let AI help you shape it into something worth reading.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Writing a trip journal',
          icon: '✍️',
          title: "You describe the day. AI helps you write it beautifully.",
          body: [
            "Sit down at the end of a travel day — even 10 minutes is enough — and type your rough notes into ChatGPT. The little details you'd tell a friend: what surprised you, what made you laugh, what the food tasted like, how the light looked.",
            "Then ask AI to turn those notes into a journal entry. Tell it the tone you want — personal and warm, or descriptive and vivid — and it will give you something worth reading to your grandchildren someday.",
          ],
          list: {
            items: [
              '"Turn these rough notes into a one-page journal entry, warm and personal in tone"',
              '"Write this like I\'m telling a story to someone who\'s never been to this place"',
              '"Include the funny moment with the waiter — make it come alive"',
              '"Keep my voice — I want it to sound like me, just more polished"',
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: 'Photo captions that mean something',
          icon: '🖼️',
          title: "A caption is the difference between a photo and a memory.",
          body: [
            "Photos on their own are beautiful. Photos with the right words attached become stories that your family will read and re-read for decades.",
            "AI helps you write captions that capture not just what's in the photo but what it felt like to be there. Describe the photo, tell AI what was happening and why it mattered, and ask for a caption. Then edit it until it sounds exactly like you.",
            "Even a sentence or two is enough to transform a digital image into something personal and lasting.",
          ],
          highlight: "The photo says where you were. The caption says why it mattered. Both together are what make a memory.",
        },
        {
          type: 'concept',
          eyebrow: 'Sharing with family',
          icon: '👨‍👩‍👧‍👦',
          title: "Keep the people you love in the journey with you.",
          body: [
            "Sharing your travels doesn't have to mean a hundred photos in a group chat that everyone scrolls past. With a little help from AI, you can create something people actually read and love.",
            "Ask AI to help you write a travel update email — the kind a thoughtful friend would send, with the best stories and one or two photos described in words. Or write a short 'postcard-style' update for the family.",
            "If you're tech-comfortable, you can also use AI to help you organize photos into a simple digital album with captions — something grandchildren can look at with you someday.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Preserving memories for the long term',
          icon: '📦',
          title: "Your travels deserve to outlast the photos.",
          body: [
            "The journals, captions, and stories you write now are exactly the kind of thing families treasure for generations. Your grandchildren won't remember the resort — but they will remember the story about getting lost in the market and ending up at that tiny restaurant where nobody spoke English.",
            "AI can help you compile a trip into something lasting: a short memoir of a special journey, a collection of stories from years of travel, or a letter to your family about a trip that changed how you see the world.",
            "You've seen remarkable things. Write them down — even imperfectly — while you still can.",
          ],
          highlight: "Even a rough, honest draft is infinitely more valuable than a perfect story never written.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Turn a travel memory into a story worth keeping.',
          body: [
            "Open <strong>chatgpt.com</strong> and use this prompt. Pick a trip you've already taken — even one from years ago.",
          ],
          prompt:
            "I want to write a short travel journal entry about a trip I took. Here are my rough notes about one memorable day or moment: [describe what happened in your own words — where you were, what you saw, who you were with, one or two specific details that stand out]. Please turn these notes into a 2–3 paragraph journal entry that's warm, personal, and specific. Write it in first person, and make it sound like a real person telling a real story — not a travel brochure.",
          body2:
            "When you read it, edit anything that doesn't sound like you. Add the detail only you would know. Then try a second prompt: 'Write a one-sentence photo caption for the best moment in this story.' What you end up with is the beginning of something worth keeping.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 4 Complete',
          icon: '🎓',
          title: "You've earned these trips. Now make them last.",
          body: [
            "You have everything you need to plan travel that's rich, thoughtful, and designed for who you actually are — not who you were at 35.",
            "AI is your planning partner, your travel companion in the hard moments, and the assistant that helps you turn what you experienced into something your family will treasure.",
          ],
          summaryList: [
            'Write rough notes after each day — AI turns them into journal entries worth reading',
            'Photo captions with the story behind the image become lasting family memories',
            'Share travel updates as short, warm stories — not just photo dumps',
            'Your travels are worth documenting — start with one memory, right now',
          ],
          gradBlock: {
            icon: '✈️',
            title: "The World Is Still Yours",
            body: "You know how to plan a trip without the overwhelm, find experiences worth having, travel in a way that works for your body, handle the unexpected with calm, and preserve what you experience for the people you love. That's everything.",
            name: 'Module 4 Complete',
          },
        },
      ],
    },
  ],

  quiz: [
    {
      q: "What is the most effective way to get useful travel planning help from AI?",
      options: [
        "Ask broad questions like 'What should I do in France?'",
        "Give AI specific details about your interests, pace, and any mobility or health needs",
        "Only use AI for translating foreign languages",
        "Use AI only after you've already booked everything",
      ],
      correct: 1,
      feedback:
        "The more specific context you give AI — your interests, travel pace, mobility needs, and budget — the more tailored and genuinely useful the recommendations become. Broad questions get broad answers.",
    },
    {
      q: "When traveling abroad and facing a medical situation, what should your first step be?",
      options: [
        "Search the internet for the nearest hospital",
        "Ask a local for directions to a pharmacy",
        "Call your travel insurance emergency line — they can direct you to approved providers",
        "Wait until you return home to address the issue",
      ],
      correct: 2,
      feedback:
        "Your travel insurance emergency line is your most important resource in a medical situation abroad. They can direct you to approved doctors and facilities, handle paperwork, and help coordinate care. Save that number in your phone before you leave home.",
    },
    {
      q: "What's the best way to use AI to preserve your travel memories?",
      options: [
        "Ask AI to write a generic travel essay about the destination",
        "Give AI your rough notes from the day and ask it to turn them into a personal journal entry",
        "Have AI book a photo printing service for you",
        "AI can't help with writing — it's only useful for planning",
      ],
      correct: 1,
      feedback:
        "Your rough notes — even just a few sentences about what happened and what stood out — give AI exactly what it needs to write a warm, personal journal entry in your voice. The story becomes something your family will treasure for years.",
    },
  ],
}

export default c4module4
