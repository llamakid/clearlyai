import type { CourseData } from './types'

const c4module2: CourseData = {
  moduleId: 20,
  title: 'Your Health, Your Questions',
  subtitle: 'AI for a Richer Retirement · Module 2',
  nextModuleId: 21,
  lessons: [
    // ─────────────────────────────────────────
    // Lesson 0 — AI as Your Research Partner
    // ─────────────────────────────────────────
    {
      id: 0,
      title: 'AI as Your Research Partner',
      meta: '7 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for a Richer Retirement · Lesson 1',
          icon: '🔬',
          title: 'AI as Your Research Partner',
          body: [
            "By the end of this lesson, you'll know exactly how to use AI to research your health — as a partner who helps you understand and prepare, never as a substitute for your doctor.",
          ],
          sub: "Let's start with what this tool is — and what it isn't.",
        },
        {
          type: 'concept',
          eyebrow: 'The honest truth',
          icon: '🩺',
          title: "Managing your health gets more complex with age. That's not a complaint — it's just real.",
          body: [
            "More conditions. More specialists. More medications. More decisions. And doctor appointments that seem to get shorter even as your questions get longer.",
            "You're expected to track it all, understand it all, and make good decisions — often with limited time and a lot of medical jargon standing in the way.",
            "AI doesn't fix that system. But it gives you something powerful: a patient, knowledgeable research partner available any time you need it.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'What AI is — and is not',
          icon: '⚖️',
          title: "AI is a research partner. Your doctor is your doctor.",
          body: [
            "This is the most important thing in this entire module, so let's say it clearly: AI tools like ChatGPT are not doctors, do not know your medical history, and cannot diagnose you.",
            "What they can do is remarkable: explain what a medical term means in plain English, help you understand what a test result typically indicates, and help you generate smart questions to ask your doctor.",
            "Think of it like having a knowledgeable friend who's read every medical textbook — they can explain things clearly, but they'd tell you to call your doctor for anything real.",
          ],
          highlight: "AI helps you walk into every appointment more informed and more prepared. That's the goal.",
        },
        {
          type: 'concept',
          eyebrow: 'Why this matters for you',
          icon: '💪',
          title: "Informed patients get better care. That's backed by research.",
          body: [
            "Studies consistently show that patients who ask more questions, understand their conditions better, and engage actively with their care team have better health outcomes.",
            "That's not because doctors are better with those patients — it's because <em>you</em> catch things, advocate for yourself, follow through on treatment, and notice when something feels wrong.",
            "AI helps you become that patient. Not by replacing your doctor's expertise, but by helping you show up ready to use it.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'The right mindset',
          icon: '🧭',
          title: "Use AI to understand. Use your doctor to decide.",
          body: [
            "Here's a simple rule that will keep you safe and well-served: use AI to understand, and use your doctor to decide.",
            "AI is for: understanding medical terms, learning what questions to ask, making sense of what was already said, and organizing your thoughts before an appointment.",
            "Your doctor is for: diagnosing, interpreting your specific test results, recommending treatment, and adjusting medications.",
          ],
          list: {
            items: [
              "AI: 'What does eGFR mean and why is it measured?'",
              "AI: 'What questions should I ask about a new blood pressure medication?'",
              "Doctor: 'My eGFR came back at 58 — what does that mean for me?'",
              "Doctor: 'Should I change my blood pressure medication?'",
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: 'One thing to always remember',
          icon: '⚠️',
          title: "AI can be wrong. Always verify with your care team.",
          body: [
            "AI tools are genuinely impressive, and they're also imperfect. They can state something confidently that turns out to be outdated or incomplete. Medical information changes, and AI isn't always current.",
            "This isn't a reason to avoid using them — it's a reason to use them as a starting point, not a final word. Bring what you learn to your doctor. Ask them to confirm or clarify.",
            "That conversation — 'I read that this medication can interact with grapefruit — is that something I should worry about?' — is exactly the kind of thing a well-prepared patient does.",
          ],
          highlight: "AI gets you better questions. Your doctor gives you the answers that matter for your situation.",
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Ask AI to explain something you heard at your last appointment.',
          body: [
            "Think of one medical term, test name, or diagnosis that's come up in your health care that you didn't fully understand. Open <strong>chatgpt.com</strong> and type this:",
          ],
          prompt:
            "I recently heard the term [medical term or test name] mentioned by my doctor. Can you explain what it means in plain, everyday English — no jargon? Also, what are two or three good questions I could ask my doctor to better understand what it means for me personally?",
          body2:
            "Notice how it explains without overwhelming you, and how it ends with questions you can actually bring to your next appointment. That's the research partner in action.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: "You know how to use AI responsibly for your health.",
          summaryList: [
            'AI is a research partner — knowledgeable, patient, available anytime',
            'It explains, clarifies, and prepares you — your doctor diagnoses and decides',
            'Informed patients consistently get better care',
            'Always bring what you learn to your care team to verify',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 1 — Understanding What Your Doctor Said
    // ─────────────────────────────────────────
    {
      id: 1,
      title: 'Understanding What Your Doctor Said',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for a Richer Retirement · Lesson 2',
          icon: '📋',
          title: 'Understanding What Your Doctor Said',
          body: [
            "By the end of this lesson, you'll know how to use AI to decode medical language, understand test results, and make sense of a diagnosis — in plain English, on your own schedule.",
          ],
          sub: "You deserve to understand what's happening with your own health.",
        },
        {
          type: 'concept',
          eyebrow: 'The problem with medical language',
          icon: '🔤',
          title: "Doctors aren't trying to confuse you. But the language often does.",
          body: [
            "Medical terminology developed over centuries as a precise shorthand for clinicians. It's efficient — for them. For patients, it can feel like a foreign language delivered quickly, in a stressful moment, with no replay button.",
            "You leave the office nodding, then get home and realize you're not sure what any of it actually meant. You might search online and find frightening articles that have nothing to do with your situation.",
            "AI gives you a better option: a calm, patient explainer that speaks your language.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Decoding the language',
          icon: '📖',
          title: "You can ask AI to translate anything your doctor said.",
          body: [
            "After any appointment, you can type out what you heard — even if you're not sure you heard it right — and ask AI to explain it in plain English.",
            "You don't need to spell it correctly. You don't need to have the right term. You can describe it the way you remember it and AI will figure out what you mean.",
          ],
          highlight: '"My doctor mentioned something about my kidneys filtering at 62 percent — what does that mean and should I be worried?"',
        },
        {
          type: 'concept',
          eyebrow: 'Test results',
          icon: '📊',
          title: "Understanding what a lab result actually means.",
          body: [
            "Lab reports are full of numbers, abbreviations, and reference ranges that feel meaningless without context. AI can help you understand what each value typically measures and what high or low numbers generally indicate.",
            "Important: AI explains what values typically mean in general. Only your doctor can tell you what your specific numbers mean for your health, your history, and your other conditions.",
            "But understanding the basics puts you in a far better position to have that conversation.",
          ],
          list: {
            items: [
              "Ask: 'My HbA1c came back at 6.8 — can you explain what that measures and what that number generally means?'",
              "Ask: 'My LDL cholesterol is 142 — is that typically considered high?'",
              "Ask: 'What's the difference between HDL and LDL cholesterol in plain English?'",
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: 'Understanding a diagnosis',
          icon: '🩻',
          title: "A diagnosis can feel overwhelming. Understanding it helps.",
          body: [
            "When a doctor gives you a new diagnosis, the word itself can carry so much weight that it's hard to hear anything that comes after. Hypertension. Type 2 diabetes. Atrial fibrillation. These words can feel large and frightening.",
            "AI can help you step back and understand what a condition actually is, how it's generally managed, what questions doctors typically recommend patients ask, and what to expect as a next step.",
            "Understanding doesn't take the condition away. But it replaces fear with information — and information gives you something to work with.",
          ],
          highlight: "Knowledge is the antidote to the anxiety that comes from not understanding.",
        },
        {
          type: 'compare',
          eyebrow: 'A better approach',
          icon: '💬',
          title: "How you ask AI makes a real difference.",
          bad: {
            label: 'Vague search',
            text: 'I googled "atrial fibrillation" and got terrifying articles about stroke and heart failure that had nothing to do with my situation.',
          },
          good: {
            label: 'Focused AI prompt',
            text: "I was just diagnosed with atrial fibrillation. Can you explain in plain English what it is, how it's typically managed in older adults, and what questions I should ask my cardiologist at my next appointment?",
          },
        },
        {
          type: 'concept',
          eyebrow: 'After the appointment',
          icon: '🏡',
          title: "The questions you thought of on the drive home.",
          body: [
            "Everyone has that experience: you leave the doctor's office, get in the car, and suddenly think of three things you wished you'd asked. With AI, you can still get clarity on those questions — right then, on your phone.",
            "You won't get your doctor's specific answer, but you can understand the topic well enough to send a message through the patient portal, or bring it up at your next visit.",
            "Nothing has to slip through the cracks anymore.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: "Decode something from your own health history.",
          body: [
            "Think of a recent diagnosis, test result, or medical term you've received. Open <strong>chatgpt.com</strong> and try this:",
          ],
          prompt:
            "I was recently told I have [condition or test result], or my [test name] came back showing [value or result]. Can you explain in plain, everyday language: (1) what this is or what it measures, (2) what this result generally means, and (3) what are the three most important questions I should bring to my next doctor's appointment about this?",
          body2:
            "Save or screenshot the questions it gives you. Those are exactly what you'll bring to your next appointment — and your doctor will appreciate how prepared you are.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: "You can understand your own health information.",
          summaryList: [
            'AI can translate medical language into plain English, patiently and clearly',
            'You can ask about test results, diagnoses, and anything your doctor said',
            'AI explains general meaning — your doctor interprets what it means for you',
            'The questions you thought of on the drive home can still get answered',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 2 — Preparing for Appointments
    // ─────────────────────────────────────────
    {
      id: 2,
      title: 'Preparing for Appointments',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for a Richer Retirement · Lesson 3',
          icon: '📝',
          title: 'Preparing for Appointments',
          body: [
            "By the end of this lesson, you'll know how to use AI to walk into every doctor's appointment fully prepared — with the right questions, organized symptoms, and a plan for making the most of every minute.",
          ],
          sub: "A 15-minute appointment can change your care — if you make it count.",
        },
        {
          type: 'concept',
          eyebrow: 'The appointment problem',
          icon: '⏱️',
          title: "You have 15 minutes. You have a lot to cover. Let's fix that.",
          body: [
            "The average doctor's appointment for an established patient runs about 15 minutes. In that time, you're expected to describe what's been happening, answer questions, understand new information, and ask what you need to ask.",
            "It's a lot. And most people walk out realizing they forgot to mention something important, or didn't ask what they most wanted to know.",
            "Preparation is the answer — and AI makes preparation fast.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Step one',
          icon: '📋',
          title: "Organize your symptoms before you walk in.",
          body: [
            "One of the most useful things you can do before any appointment is give AI a description of what you've been experiencing and ask it to help you organize that information clearly.",
            "Doctors need to know: what the symptom is, when it started, what makes it better or worse, how often it happens, and how much it affects your daily life.",
            "If you describe your symptoms in conversational language, AI can help you organize them into the kind of clear summary that helps your doctor understand quickly — leaving more time for the conversation you actually need.",
          ],
          highlight: "A clear description of your symptoms is one of the most valuable things you can bring to an appointment.",
        },
        {
          type: 'concept',
          eyebrow: 'Step two',
          icon: '❓',
          title: "Generate the questions you didn't know to ask.",
          body: [
            "Here's something most people don't realize: there are standard questions that informed patients ask about almost every type of appointment, condition, or test — and AI knows them.",
            "If you tell AI what your appointment is for, it can generate a list of questions you might not have thought of: about side effects, alternatives, what to watch for, follow-up timing, and lifestyle factors.",
            "You can pick the ones that matter to you. You don't have to ask all of them. But having them means you don't leave empty-handed.",
          ],
          list: {
            items: [
              "'What questions should I ask at a follow-up appointment for high blood pressure?'",
              "'I'm seeing a cardiologist for the first time about an irregular heartbeat — what should I ask?'",
              "'My mother has a routine colonoscopy coming up — what questions should she prepare?'",
            ],
          },
        },
        {
          type: 'compare',
          eyebrow: 'See the difference',
          icon: '💬',
          title: "A weak question versus a strong one — the same topic.",
          bad: {
            label: 'Vague question',
            text: "Is my blood pressure okay?",
          },
          good: {
            label: 'Prepared question',
            text: "My blood pressure has been running around 148 over 90 at home. At what point does that become concerning enough to adjust my medication, and is there anything I should be tracking between now and my next appointment?",
          },
        },
        {
          type: 'concept',
          eyebrow: 'The priority list',
          icon: '🎯',
          title: "Go in knowing your top three — and say them first.",
          body: [
            "Here's a practical strategy many patients don't know: at the start of an appointment, before your doctor starts asking their questions, briefly say the three things you most want to address today.",
            "'I want to make sure we cover my knee pain, the fatigue I've been having, and I have a question about my cholesterol medication.' Then your doctor can plan the time accordingly.",
            "AI can help you decide which of your concerns are most urgent to raise, and how to phrase that opening so it's clear and easy to respond to.",
          ],
          highlight: "Starting with your priorities makes it far less likely that your most important concern gets pushed to 'next time.'",
        },
        {
          type: 'concept',
          eyebrow: 'After the appointment',
          icon: '✍️',
          title: "Write down what you heard — then ask AI to fill in the gaps.",
          body: [
            "Right after an appointment, while it's fresh, jot down the key things your doctor said. It doesn't have to be perfect. Then bring those notes to AI.",
            "Ask it to explain any terms you didn't understand, expand on anything you want to know more about, or help you figure out what questions to send through the patient portal.",
            "That follow-up step — done in 10 minutes at home — can make a 15-minute appointment feel like it lasted an hour.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: "Prepare for your next appointment — right now.",
          body: [
            "Think of an upcoming appointment, or one you have regularly. Open <strong>chatgpt.com</strong> and try this prompt:",
          ],
          prompt:
            "I have an upcoming appointment with my [type of doctor — e.g., primary care doctor, cardiologist, orthopedist]. The main reason I'm going is [brief description — e.g., 'a routine checkup' or 'to follow up on my blood pressure' or 'because I've been having lower back pain for three weeks']. Can you help me: (1) organize the key symptoms or concerns I should describe, (2) give me a list of 5–7 good questions to ask, and (3) suggest what information to bring with me?",
          body2:
            "Print or save the questions it gives you. Bring the list to your appointment. Your doctor will see immediately that you came prepared — and the conversation will be better for it.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: "Every appointment can be a good appointment.",
          summaryList: [
            'AI can organize your symptoms into a clear, helpful description for your doctor',
            'It generates questions you might not have thought of — pick the ones that matter to you',
            'State your top three priorities at the start of the visit',
            'A 10-minute AI prep session can make a 15-minute appointment feel like much more',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 3 — Medications and What to Ask
    // ─────────────────────────────────────────
    {
      id: 3,
      title: 'Medications and What to Ask',
      meta: '7 slides · ~5 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for a Richer Retirement · Lesson 4',
          icon: '💊',
          title: 'Medications and What to Ask',
          body: [
            "By the end of this lesson, you'll know how to use AI to understand your prescriptions, learn about potential interactions, and generate smart questions for your pharmacist and doctor.",
          ],
          sub: "Medications deserve your attention — and you deserve clear answers about them.",
        },
        {
          type: 'concept',
          eyebrow: 'The medication reality',
          icon: '📦',
          title: "Many adults take multiple medications. Keeping track is a real job.",
          body: [
            "The average American over 65 takes four or more prescription medications, and many take seven or more when you include over-the-counter drugs, vitamins, and supplements.",
            "Each one comes with instructions, side effects, timing requirements, and potential interactions. Your pharmacist is an expert resource, but conversations at the pharmacy counter are often rushed.",
            "AI can help you go deeper — understanding what each medication does, what to watch for, and what to ask — so that when you do talk to your pharmacist, you're asking the right questions.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Understanding your prescription',
          icon: '📄',
          title: "Ask AI to explain what a medication is and why it's prescribed.",
          body: [
            "When you're handed a new prescription, you might be told the name and when to take it — and that's often where the explanation ends. AI can fill in everything else.",
            "Ask it what the medication is for, how it works in general terms, what the most common side effects are, what to watch out for, and whether there's anything you should avoid while taking it.",
            "That's not replacing your doctor's advice — it's understanding the medication well enough to follow it safely and notice if something feels off.",
          ],
          highlight: "Understanding why you're taking a medication makes you far more likely to take it consistently — which is a real health outcome.",
        },
        {
          type: 'concept',
          eyebrow: 'Interactions matter',
          icon: '🔗',
          title: "Medication interactions are common — and often overlooked.",
          body: [
            "When you're seeing multiple specialists, each one may prescribe a medication without full visibility into everything else you're taking. Drug interactions can be serious, and they're more common than most people realize.",
            "AI can help you understand whether two medications are generally known to interact, whether a supplement like fish oil or vitamin D might affect a prescription, or whether a food like grapefruit is relevant for a medication you take.",
            "This isn't a substitute for a pharmacist review — it's what helps you ask for one. 'I read that this medication may interact with grapefruit — can you tell me if that applies to my dosage?'",
          ],
          list: {
            items: [
              "'I take metformin and just started lisinopril — are there any known interactions I should know about?'",
              "'Does fish oil affect blood thinners like warfarin?'",
              "'Is there anything I should avoid eating while taking this medication?'",
            ],
          },
        },
        {
          type: 'concept',
          eyebrow: 'Side effects',
          icon: '🌡️',
          title: "Knowing what to watch for helps you catch problems early.",
          body: [
            "Side effects are listed on every medication — but the list is often so long and the language so clinical that it's hard to know what to actually pay attention to.",
            "Ask AI to explain, in plain language, which side effects of a medication are common and mild versus which ones are rare but serious and worth calling your doctor about.",
            "That distinction — 'mild and expected' versus 'call your doctor' — is genuinely useful and often not communicated clearly at the pharmacy.",
          ],
          highlight: "Knowing what's normal versus what's a warning sign keeps you calm when common side effects appear — and alert when something serious might be happening.",
        },
        {
          type: 'concept',
          eyebrow: 'Your pharmacist is an expert',
          icon: '🏥',
          title: "AI prepares you to use your pharmacist more effectively.",
          body: [
            "Pharmacists are one of the most underutilized health resources available to you — they're accessible, knowledgeable, and specifically trained in medications in a way that differs even from most doctors.",
            "Most pharmacies also offer medication therapy management consultations, where a pharmacist reviews all your medications together. This is often free and covered by Medicare.",
            "Use AI to understand and prepare, then bring your questions to your pharmacist for the personalized guidance that AI can't provide.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: "Learn more about one medication you're currently taking.",
          body: [
            "Pick one medication you take regularly — prescription or over-the-counter. Open <strong>chatgpt.com</strong> and try this:",
          ],
          prompt:
            "I take [medication name] for [condition if you know it]. Can you explain in plain English: (1) what this medication does and how it generally works, (2) what the most common side effects are and which ones would be serious enough to call my doctor about, (3) whether there are any foods, drinks, or other common medications I should ask my pharmacist about, and (4) two or three questions I should ask my pharmacist the next time I pick it up?",
          body2:
            "Keep a note of what you learn and the questions it generates. The next time you pick up that prescription, take 2 minutes to ask your pharmacist the questions. You'll be surprised how much you didn't know.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: "You're now a more informed medication manager.",
          summaryList: [
            'AI can explain what any medication does, what to watch for, and what to avoid',
            'Understanding side effects helps you know what is normal versus what is concerning',
            'Potential interactions are worth asking your pharmacist about — AI can tell you what to ask',
            'Your pharmacist is an expert resource — AI helps you use that conversation well',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Lesson 4 — Your Health, Your Advocate
    // ─────────────────────────────────────────
    {
      id: 4,
      title: 'Your Health, Your Advocate',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'AI for a Richer Retirement · Lesson 5',
          icon: '🛡️',
          title: 'Your Health, Your Advocate',
          body: [
            "By the end of this lesson, you'll know how to track your health over time, share information clearly with family caregivers, and advocate for yourself in a medical system that rewards the people who speak up.",
          ],
          sub: "The most important person on your care team is you.",
        },
        {
          type: 'concept',
          eyebrow: 'The long game',
          icon: '📅',
          title: "Your health story unfolds over time. Tracking it matters.",
          body: [
            "Health isn't a single data point — it's a pattern. A blood pressure that fluctuates over six months tells a different story than a single reading at the office. A symptom that comes and goes may be connected to something in your routine.",
            "Doctors can only see what's in front of them during the appointment. You have access to the full picture — if you track it.",
            "AI can help you organize and summarize your health observations in a way that's useful to bring to your care team.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Tracking made simple',
          icon: '📊',
          title: "You don't need a fancy app. You need a simple habit.",
          body: [
            "A health log doesn't have to be complicated. A weekly note — even a few sentences about how you felt, what changed, any new symptoms — gives you something incredibly valuable: a record.",
            "AI can help you turn that rough log into a clear summary to share with your doctor. You describe what's been happening over the past month; AI organizes it into a coherent, readable update.",
            "That summary, printed or read aloud, can save 5 minutes of back-and-forth at the start of an appointment — and help your doctor see patterns they'd otherwise miss.",
          ],
          highlight: "A three-month health log, clearly summarized, is one of the most useful things you can bring to a specialist.",
        },
        {
          type: 'concept',
          eyebrow: 'Family caregivers',
          icon: '👨‍👩‍👧',
          title: "Keeping family members in the loop — without losing your privacy.",
          body: [
            "If you have a spouse, adult child, or other family member involved in your care, keeping them informed can be genuinely helpful. But retelling medical appointments is tiring — and details get lost.",
            "AI can help you write a brief, clear summary of an appointment or health update that you can share with family members. You control what's included. You decide what to share.",
            "This keeps your support system informed without requiring you to re-explain everything multiple times.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Being your own advocate',
          icon: '🗣️',
          title: "Speaking up for yourself is a skill. AI helps you practice it.",
          body: [
            "Self-advocacy in healthcare means asking for what you need, pushing back when something doesn't feel right, and making sure your concerns are heard — not dismissed or rushed past.",
            "It can feel uncomfortable, especially if you're used to deferring to authority or don't want to seem difficult. But the medical system genuinely works better for patients who advocate for themselves.",
            "AI can help you think through how to raise a concern, how to ask for a second opinion, or how to follow up when you feel like something was missed.",
          ],
          highlight: "You are not being difficult when you ask for clarity. You are being a responsible patient.",
        },
        {
          type: 'concept',
          eyebrow: 'When something feels wrong',
          icon: '🔔',
          title: "Trust your instincts — and prepare how to voice them.",
          body: [
            "You know your body. If a treatment doesn't seem to be working, a medication is making you feel worse, or a concern keeps being brushed aside, you have every right to raise it again — more clearly, more specifically.",
            "AI can help you find the language to express that. 'I've raised my fatigue at the last two appointments and I'd like to discuss it more thoroughly this time. Can you help me describe it in a way that makes the pattern clearer?'",
            "You don't need to be aggressive. You need to be clear, specific, and persistent.",
          ],
        },
        {
          type: 'concept',
          eyebrow: 'Second opinions',
          icon: '🔄',
          title: "Asking for a second opinion is normal — and often wise.",
          body: [
            "For any significant diagnosis or treatment recommendation, a second opinion is not an insult to your doctor. It is standard, responsible, and widely practiced. Good doctors expect it.",
            "AI can help you think through whether a second opinion is appropriate, how to request one respectfully, and what to ask the second doctor that might be different from the first.",
            "You deserve to feel confident in a major health decision. A second perspective often either confirms you're on the right path or opens a new option worth considering.",
          ],
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: "Build your health summary.",
          body: [
            "Think about the last two to three months of your health. Open <strong>chatgpt.com</strong> and describe it, then ask for help organizing it:",
          ],
          prompt:
            "I want to create a brief health summary to share with my doctor and one family member who helps with my care. Here's what's been happening over the past few months: [describe any symptoms, changes, new diagnoses, medication changes, or concerns — even in rough notes]. Can you help me organize this into a clear, one-page summary that includes: (1) current conditions and medications, (2) recent changes or new symptoms, (3) questions I still want answered, and (4) a note about what I most want to focus on at my next visit?",
          body2:
            "Save this summary. Update it every month or two. Over time, you'll have a health record that tells your story clearly — and that makes every conversation with your care team more productive.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 2 Complete',
          icon: '🎓',
          title: "You are your own best health advocate.",
          summaryList: [
            'Tracking your health over time reveals patterns your doctor can\'t see in a single visit',
            'AI can turn your rough notes into a clear health summary to share with your care team',
            'Keeping family caregivers informed is easier when AI helps you write the update',
            'Self-advocacy — asking clearly and persistently — is what the medical system rewards',
            'A second opinion is always appropriate for major decisions, and good doctors respect it',
          ],
          gradBlock: {
            icon: '🛡️',
            title: 'You Understand Your Health More Deeply Now',
            body: "You know how to use AI as a research partner, decode medical language, prepare for appointments, understand your medications, and advocate for yourself. That knowledge compounds every time you use it.",
            name: 'Module 2 Complete',
          },
        },
      ],
    },
  ],

  quiz: [
    {
      q: "What is the most accurate description of how AI should be used for your health?",
      options: [
        "As a diagnostic tool that can tell you what condition you have based on your symptoms",
        "As a research partner that helps you understand and prepare — while your doctor diagnoses and decides",
        "As a replacement for doctor visits when the question seems minor",
        "As a way to verify whether your doctor's advice is correct",
      ],
      correct: 1,
      feedback:
        "AI is a powerful research and preparation tool — it can explain medical language, help you generate questions, and help you understand your conditions. But diagnosing, interpreting your specific results, and making treatment decisions are your doctor's job. AI helps you prepare to use that expertise well.",
    },
    {
      q: "Before a doctor's appointment, what is one of the most valuable things you can bring?",
      options: [
        "A printed list of everything you read online about your symptoms",
        "A clear, organized description of your symptoms and a prioritized list of questions",
        "A request to extend the appointment to 45 minutes",
        "Evidence that your doctor made a mistake at the last visit",
      ],
      correct: 1,
      feedback:
        "A clear symptom description and a prioritized list of questions are the two most effective things you can bring to any appointment. AI can help you prepare both in just a few minutes — and your doctor will immediately see that you're an engaged, prepared patient.",
    },
    {
      q: "When learning about a medication using AI, what should you always do with what you find out?",
      options: [
        "Use the information to decide whether to keep taking the medication or stop",
        "Share it with family members so they can confirm it's correct",
        "Bring it to your pharmacist or doctor to verify and discuss what it means for your situation",
        "Trust it fully if the AI explanation seems confident and detailed",
      ],
      correct: 2,
      feedback:
        "AI gives you a starting point — a general explanation to help you understand and ask better questions. Your pharmacist and doctor provide the personalized guidance that applies to your specific health, history, and other medications. Always bring what you learn back to your care team.",
    },
  ],
}

export default c4module2
