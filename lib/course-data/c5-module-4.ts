import type { CourseData } from './types'

const c5module4: CourseData = {
  moduleId: 28,
  title: 'The Art of the Follow-Up',
  subtitle: 'Module 4',
  nextModuleId: 29,
  lessons: [
    {
      id: 0,
      title: 'The First Response Is Just a Draft',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 4 · Lesson 1',
          icon: '🔄',
          title: 'The first response isn\'t the answer. It\'s the starting point.',
          body: [
            "Most people treat AI like a vending machine: put in a prompt, take out a result, move on. If the result isn\'t great, they either accept it or give up. Both are mistakes.",
            "The first response is a draft. It\'s AI\'s best guess at what you need, based on what you\'ve told it so far. Your job isn\'t to judge it — it\'s to react to it.",
          ],
          sub: 'The follow-up is where the real skill is.',
        },
        {
          type: 'concept',
          eyebrow: 'The acceptance trap',
          icon: '⚠️',
          title: 'Accepting a mediocre first response is a missed opportunity.',
          body: [
            "When a first response is 70% right, most people either use it as-is or start over with a new prompt. Both miss the point. The right move is to stay in the conversation and improve what\'s already there.",
            "You\'ve already given AI the context. It understands your task. Getting from 70% to 95% usually takes one more message — not a whole new conversation.",
          ],
          highlight: 'The quality gap between first draft and third exchange is enormous. Most people never get there.',
        },
        {
          type: 'concept',
          eyebrow: 'A different mental model',
          icon: '🤝',
          title: 'Think of AI as a writing partner, not a search engine.',
          body: [
            "A search engine gives you a result and you move on. A writing partner gives you a draft and waits for your reaction. You react. They refine. You push back. They adjust.",
            "That back-and-forth is how good work gets made. AI is capable of that dynamic — but only if you engage with it that way.",
          ],
          highlight: 'Your job in an AI conversation: react and direct. Not just receive.',
        },
        {
          type: 'concept',
          eyebrow: 'The pattern',
          icon: '🔁',
          title: '"Every great result came from at least two exchanges."',
          body: [
            "This isn't an exaggeration. Think about any AI output you've actually used and been proud of — chances are it went through at least one round of \"close, but make it more X\" or \"cut that part and focus on Y.\"",
            "The follow-up isn\'t extra work. It\'s the work. Learning to do it well is the skill that separates people who get a lot out of AI from people who don\'t.",
          ],
          list: {
            items: [
              'First exchange: establish the task and context',
              'Second exchange: redirect, refine, or zoom in',
              'Third exchange: final polish or a different angle',
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'One more message',
          title: 'The difference one follow-up makes.',
          bad: {
            label: '❌ Accepting the first response',
            text: 'Ask for a summary of a meeting. Get a 400-word block of text. Too long, too formal. Use it anyway because you\'re busy. Your colleagues skim it and miss the key point.',
          },
          good: {
            label: '✅ One follow-up message',
            text: 'Same summary. Follow up: "Make this shorter — 5 bullet points, plain English, just the decisions and action items." Get something your team will actually read in 30 seconds.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Start a conversation — and commit to at least one follow-up.',
          body: [
            "Think of something you need from AI this week. Write your starting prompt, get the first response, and then — regardless of whether it\'s good — write one follow-up that makes it better or more specific.",
          ],
          prompt: "Starting prompt: [your task — write, explain, plan, or summarize something]. After you get the response, follow up with: \"That\'s a good start. Now [make it shorter / more specific / change the tone / focus on just one part / rewrite the ending]. Here\'s what I\'m actually trying to achieve: [your real goal].\"",
          body2: "Notice that the second response is almost always better. Not because the first was bad — but because you gave AI more to work with.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: 'The first response opens the door. The follow-up walks through it.',
          body: [
            "Reframe how you think about AI conversations: the first message sets the stage, and everything after is where the real work happens. React, redirect, refine.",
            'Next lesson: the specific phrases that make redirecting easy — without starting over.',
          ],
          summaryList: [
            "The first response is a draft — not the final answer",
            'Accepting 70% is a missed opportunity; one follow-up often gets you to 95%',
            'Think of AI as a writing partner: your job is to react and direct',
            'The follow-up isn\'t extra work — it\'s the most valuable part',
          ],
        },
      ],
    },
    {
      id: 1,
      title: 'How to Redirect Without Starting Over',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 4 · Lesson 2',
          icon: '↩️',
          title: 'You don\'t have to throw out the whole response — just point at what\'s wrong.',
          body: [
            "One reason people start over when a response isn\'t right is that they don\'t know how to redirect. They think they need to rewrite their entire prompt from scratch.",
            "You don\'t. Redirecting is fast and conversational. You point at the problem, say what you want instead, and let AI fix it.",
          ],
          sub: 'Redirecting is a skill — and it\'s easier than you think.',
        },
        {
          type: 'concept',
          eyebrow: 'Three ways to redirect',
          icon: '🔀',
          title: '"Make it more X." "Cut Y and focus on Z." "Rewrite this but [change]."',
          body: [
            "These three patterns cover the vast majority of redirects you\'ll ever need. You don\'t need elaborate instructions — just a clear signal about what to adjust and in which direction.",
          ],
          list: {
            items: [
              '<strong>"Make it more [X]"</strong> — more concise / more formal / more specific / more empathetic',
              '<strong>"Cut [Y] and focus on [Z]"</strong> — remove the part you don\'t need, keep what you do',
              '<strong>"Rewrite this but [change]"</strong> — keep the structure, change one thing about it',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Redirect phrases that work',
          icon: '💬',
          title: 'The language of redirecting is casual — not technical.',
          body: [
            "You don\'t need special syntax or formal instructions. Redirect the way you\'d talk to a colleague who handed you a draft that was close but not quite there.",
          ],
          list: {
            items: [
              '"That\'s close, but the tone is too formal — can you make it sound more conversational?"',
              '"Shorter. This needs to be something someone reads in 30 seconds."',
              '"Keep the structure, but change the opening — it sounds stiff."',
              '"This is good but it\'s missing [specific thing]. Add that."',
              '"Too many bullet points. Write it in plain paragraphs."',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'The simple rule',
          icon: '🎯',
          title: 'Point at what\'s wrong. Say what you want instead.',
          body: [
            "That\'s the whole formula. You don\'t have to explain everything. You don\'t have to justify your preferences. You don\'t have to restate all the context.",
            "AI retains everything from earlier in the conversation. A short redirect builds on that foundation. \"Too stiff — make it warmer\" is a complete instruction.",
          ],
          highlight: "You're not restarting — you're steering. Short redirects are usually better than long ones.",
        },
        {
          type: 'compare',
          eyebrow: 'Redirect vs. restart',
          title: 'The slow way and the fast way — same destination.',
          bad: {
            label: '❌ Starting a new conversation',
            text: 'Response feels too long. Close the chat. Open a new one. Rewrite the entire prompt with "make it short" added. Wait for a new response. Still not quite right.',
          },
          good: {
            label: '✅ A quick redirect',
            text: 'Same response. Type: "Too long. Give me the 3 most important points in plain bullet points." 10 seconds. New response. Done.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Use a redirect template in your next conversation.',
          body: [
            "The next time you get an AI response that\'s close but not quite right, use one of these redirect templates instead of starting over. Practice makes it feel natural fast.",
          ],
          prompt: "Choose the redirect that fits:\n\n\"That\'s close. Make it [more concise / more conversational / more specific about X / less formal].\"\n\n\"Good structure. Rewrite it but [change the opening / cut the last section / use plain language throughout].\"\n\n\"Cut [the part you don\'t need] and focus just on [the part that matters]. Keep everything else the same.\"",
          body2: 'Redirecting gets easier every time you do it. After a few tries, it becomes instinct.',
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: 'Redirecting is faster than starting over — and it almost always works better.',
          body: [
            "You don\'t need to rebuild the whole prompt when a response misses the mark. Point at what\'s wrong, say what you want, and let the conversation continue from where it already is.",
            "Next lesson: two powerful follow-up moves — zooming in on what\'s useful and stepping back when you need a wider view.",
          ],
          summaryList: [
            'Three redirect patterns: "Make it more X" / "Cut Y and focus on Z" / "Rewrite this but [change]"',
            'Redirect language is casual — talk to AI like a colleague who gave you a draft',
            'Point at what\'s wrong and say what you want instead — that\'s the whole formula',
            'Short redirects work better than long re-explanations',
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Zoom In, Zoom Out',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 4 · Lesson 3',
          icon: '🔭',
          title: 'Two moves. One gets you more detail. The other gets you a wider view.',
          body: [
            "Not every follow-up is a correction. Sometimes a response is fine — but there\'s one part that\'s gold, and you want more of it. Sometimes the whole response feels off, and you need to step back and look at the bigger picture.",
            "Zoom In and Zoom Out are two follow-up moves that give you exactly that.",
          ],
          sub: 'Learn when to use each one and you\'ll get far more out of every conversation.',
        },
        {
          type: 'concept',
          eyebrow: 'Zoom In',
          icon: '🔬',
          title: '"Tell me more about that one part."',
          body: [
            "When a response contains something useful — a suggestion, an idea, a section — and you want to explore it further, zoom in. AI can go as deep as you want on any piece of its own response.",
            "You don\'t have to re-explain the context. Just point at the part you want expanded.",
          ],
          list: {
            items: [
              '"Tell me more about the third point — how would that work in practice?"',
              '"That suggestion about [X] is interesting. Walk me through it step by step."',
              '"Expand on [specific section]. I want more detail there."',
              '"Give me an example of what that would look like for my situation."',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'Zoom Out',
          icon: '🌐',
          title: '"Step back — am I thinking about this the right way?"',
          body: [
            "When a whole response feels off — not just one part, but the entire direction — the problem might be the framing, not the writing. Zoom out asks AI to step back and give you a wider perspective.",
            "Sometimes you\'re asking the wrong question. Zoom out helps you find the right one.",
          ],
          list: {
            items: [
              '"Step back — am I approaching this the right way?"',
              '"Forget the details for a second. What\'s the most important thing I should be thinking about here?"',
              '"Is there a better way to frame this problem that I\'m not seeing?"',
              '"What are the options I haven\'t considered yet?"',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'When to use each',
          icon: '⚖️',
          title: 'Zoom in when one part is useful. Zoom out when the whole response feels off.',
          body: [
            "The quick heuristic: if the response has something good in it, zoom in. If the response feels like it\'s missing the point entirely, zoom out.",
            "You can also alternate — zoom in to get detail, then zoom out to make sure you haven\'t lost the forest for the trees. The conversation is flexible.",
          ],
          highlight: 'Most people only ever zoom in. Learning to zoom out is a genuine upgrade in how you use AI.',
        },
        {
          type: 'compare',
          eyebrow: 'Zoom in in practice',
          title: 'Skimming vs. digging — what you miss when you stop too early.',
          bad: {
            label: '❌ Stopping at the surface',
            text: 'Get a response with 5 suggestions. Skim all five. Implement the first one that sounds doable. Move on. Never realize suggestion 4 was exactly what you needed — but buried in one sentence.',
          },
          good: {
            label: '✅ Zooming in',
            text: 'Same response. Notice suggestion 4 is interesting but underdeveloped. Follow up: "Tell me more about suggestion 4 — give me a step-by-step example." Get a full, actionable plan on the most relevant idea.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Use the zoom-in move on something useful from a recent conversation.',
          body: [
            "Think of an AI response you\'ve gotten recently where one part stood out but wasn\'t explored fully. Go back to that conversation (or recreate it) and zoom in on the most interesting piece.",
          ],
          prompt: "Looking at your response, the part that\'s most relevant to my situation is [name the specific part]. Can you expand on that specifically? Walk me through it in more detail, give me a concrete example, and tell me how I\'d actually apply it given that I\'m [your role/situation].",
          body2: 'The depth that comes back from a zoom-in prompt is often the most useful thing in the whole conversation.',
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: 'Two moves. Infinite follow-up depth.',
          body: [
            "Zoom In when there\'s a part worth exploring further. Zoom Out when the whole conversation needs a reset. These two moves give you control over the direction and depth of any AI conversation.",
            "Next lesson: when to start a new conversation — knowing when a conversation has gone off track is just as important as knowing how to improve one.",
          ],
          summaryList: [
            'Zoom In: "Tell me more about that one part" — get depth on what matters most',
            'Zoom Out: "Step back — am I thinking about this right?" — get a wider view',
            'Use zoom in when one section is useful; zoom out when the whole response is off',
            'Most people only zoom in — learning to zoom out is a real skill upgrade',
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'When to Start a New Conversation',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 4 · Lesson 4',
          icon: '🔁',
          title: 'Sometimes the best follow-up is a fresh start.',
          body: [
            "You\'ve learned to redirect, zoom in, and zoom out. But there\'s one more follow-up skill: knowing when the conversation itself is the problem — and starting clean.",
            "This isn\'t failure. It\'s good judgment. Knowing when to cut your losses and begin again with a better first prompt is a genuine skill.",
          ],
          sub: 'Starting fresh isn\'t giving up — it\'s knowing the tool.',
        },
        {
          type: 'concept',
          eyebrow: 'How conversations drift',
          icon: '🌊',
          title: 'AI carries context through a conversation — which helps until it doesn\'t.',
          body: [
            "One of AI\'s useful features is memory within a conversation: it knows what you said earlier and builds on it. This is great for going deep on a topic.",
            "But that same memory can work against you. If early messages went in the wrong direction — or if you changed what you need mid-conversation — the earlier context can pull later responses off track.",
          ],
          highlight: 'A conversation that starts crooked tends to stay crooked. Sometimes starting fresh is the fastest fix.',
        },
        {
          type: 'concept',
          eyebrow: 'Signs to start fresh',
          icon: '🚩',
          title: 'Three signals that a conversation has gone off the rails.',
          body: [
            "Watch for these — they\'re the clearest signals that you\'re better off starting over than trying to steer back.",
          ],
          list: {
            items: [
              '<strong>AI keeps repeating itself:</strong> Every response circles back to the same ideas, no matter how you redirect',
              '<strong>It\'s confused by earlier context:</strong> A previous exchange sent it in a wrong direction it can\'t seem to escape',
              '<strong>You\'re on a completely different task:</strong> Your original question and your current need have diverged — the old context is now a liability',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'The fresh start advantage',
          icon: '✨',
          title: '"Starting fresh isn\'t failure — it\'s knowing the tool."',
          body: [
            "When you start a new conversation, you get to apply everything you\'ve learned from the failed one. You know what context to include. You know what to avoid. Your new first prompt is much better than the original.",
            "Think of a derailed conversation as research. You\'ve learned what doesn\'t work — now use that to write a better first message.",
          ],
          highlight: 'A fresh start with a better prompt beats 10 more messages in a broken conversation.',
        },
        {
          type: 'compare',
          eyebrow: 'Stuck vs. starting clean',
          title: 'Forcing a broken conversation vs. starting fresh.',
          bad: {
            label: '❌ Trying to fix a derailed conversation',
            text: '8 messages in, AI is confused about what you actually need. Keep redirecting. Each response gets further from useful. Spend 20 minutes getting nowhere.',
          },
          good: {
            label: '✅ Starting clean',
            text: 'Recognize the conversation is off track at message 4. Close it. Open a new one with a better first prompt that includes the context you\'ve learned it needs. Get a useful response in 2 exchanges.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Write a clean-start prompt that avoids a common failure mode.',
          body: [
            "Think of a task you\'ve tried with AI before where the conversation went off track. Write a new first prompt that front-loads the context that was missing, and explicitly guards against the thing that went wrong.",
          ],
          prompt: "I need help with [the task]. Here\'s the specific context you need to know upfront: [the background that was missing before]. My actual goal is [the real outcome, not just the task]. Please focus only on [specific scope] — I don\'t need [whatever usually derails it]. Start by [the most useful first step].",
          body2: 'Compare this response to what you got last time. The difference is usually significant — because your first prompt is now doing the work that five redirects were trying to do before.',
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: 'Know when to redirect and when to reset.',
          body: [
            "Most conversations can be improved with a redirect, a zoom-in, or a zoom-out. But some conversations have drifted too far. Recognizing that early — and starting fresh with a better first prompt — is a skill in itself.",
            "Last lesson: putting the whole follow-up toolkit together into a repeatable habit.",
          ],
          summaryList: [
            'AI\'s memory within a conversation is helpful — until it isn\'t',
            'Signs to start fresh: repetition, confusion, or a task that has shifted',
            'A derailed conversation is research — use it to write a better first prompt',
            'Starting fresh with a better prompt beats 10 more messages in a broken conversation',
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Your Follow-Up Formula',
      meta: '8 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 4 · Lesson 5',
          icon: '📋',
          title: 'You have a full follow-up toolkit now. Let\'s make it a habit.',
          body: [
            "You\'ve learned to redirect, zoom in, zoom out, and start fresh. Each move is useful on its own. Together, they give you a complete system for getting the most out of any AI conversation.",
            "This lesson pulls it all together into a simple, repeatable formula you can apply every time.",
          ],
          sub: 'The goal: building follow-up into how you work — not as extra effort, but as instinct.',
        },
        {
          type: 'concept',
          eyebrow: 'Your toolkit',
          icon: '🧰',
          title: 'Four moves. Every conversation covered.',
          body: [
            "You now have a follow-up toolkit with four moves. Here\'s a quick reference for when to reach for each one.",
          ],
          list: {
            items: [
              '<strong>Redirect:</strong> "Make it more X" or "Cut Y and focus on Z" — when the response is close but something\'s off',
              '<strong>Zoom In:</strong> "Tell me more about that part" — when one section is worth exploring further',
              '<strong>Zoom Out:</strong> "Step back — am I thinking about this right?" — when the whole thing feels off-track',
              '<strong>Fresh Start:</strong> New conversation with a better first prompt — when the conversation has drifted too far',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'The 3-exchange rule',
          icon: '3️⃣',
          title: 'Before you give up, try 3 exchanges. Most great results come from round 2 or 3.',
          body: [
            "Here\'s a simple commitment to make: before you abandon an AI conversation, try at least 3 exchanges. If the first response isn\'t right, redirect or zoom in. If that\'s still not right, try again.",
            "In most cases, round 2 or 3 is where the genuinely useful result appears. The people who give up after one message are walking away right before it gets good.",
          ],
          highlight: '"Before I give up on this conversation, have I tried 3 exchanges?" — make this a reflex.',
        },
        {
          type: 'concept',
          eyebrow: 'Building the habit',
          icon: '📈',
          title: 'After every AI session, ask yourself one question.',
          body: [
            "Building a habit is easier when you have a reflection trigger. After each AI session, ask yourself: <em>Did I follow up? Could I have gotten more out of that conversation?</em>",
            "Over time, this question rewires your default behavior. You stop treating AI as a one-shot tool and start treating it as a conversation partner — which is what it actually is.",
          ],
          list: {
            items: [
              'Did I accept the first response without trying to improve it?',
              'Was there a part worth zooming in on that I skipped?',
              'Did I start over when a redirect would have been faster?',
              'Did I keep going in a broken conversation when I should have started fresh?',
            ],
            negative: false,
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Run a full 2-step conversation — a starting prompt plus a deliberate follow-up.',
          body: [
            "Choose a real task you need to get done. Write a starting prompt that includes context from Module 3. Then plan your follow-up before you even send the first message — decide whether you\'ll redirect, zoom in, or zoom out based on what you expect.",
          ],
          prompt: "Step 1 — Starting prompt:\n\"I\'m a [your role]. I need to [the task]. My goal is [the real outcome]. The audience is [who it\'s for]. [Any relevant constraints].\"\n\nStep 2 — Follow-up (use the one that fits):\n• Redirect: \"That\'s close. Make it [more X / less Y / shorter / more specific about Z].\"\n• Zoom In: \"The part about [X] is most useful. Can you expand on that with a concrete example?\"\n• Zoom Out: \"Step back — is this the right approach for what I\'m trying to achieve?\"",
          body2: 'Commit to the follow-up even if the first response is pretty good. There\'s almost always something to improve — and the habit matters as much as the result.',
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 4 Complete',
          icon: '🎉',
          title: 'You\'ve finished Module 4. The follow-up is now part of how you work.',
          body: [
            "Redirect. Zoom In. Zoom Out. Fresh Start. The 3-exchange rule. You now have a complete system for turning first drafts into results you\'re actually proud of.",
            "Module 5 takes everything you\'ve learned — context, follow-up, clear goals — and applies it to real-world use cases: writing for work, preparing for hard conversations, and explaining complex things simply.",
          ],
          summaryList: [
            'Your toolkit: redirect, zoom in, zoom out, fresh start',
            'The 3-exchange rule: before you give up, try 3 exchanges',
            'Build the habit: after every session, ask "did I follow up?"',
            'Planning your follow-up before sending the first message makes the whole conversation more intentional',
            'The follow-up is where the real skill lives — you have it now',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'You get a first response that\'s about 70% right — it has the right information but the tone is too formal. What\'s the best next step?',
      options: [
        'Use it as-is — 70% is good enough',
        'Start a brand new conversation with a different prompt',
        'Send a short redirect: "Good content — make the tone more conversational and warm"',
        'Ask AI to explain why it wrote in a formal tone',
      ],
      correct: 2,
      feedback: "A short redirect is almost always faster than starting over. AI still has all the context from your conversation. \"Make the tone more conversational\" is a complete instruction — you don't need to restate anything else.",
    },
    {
      q: 'You\'re deep in a conversation and AI keeps giving you the same ideas in different words, no matter how you redirect. What should you do?',
      options: [
        'Keep redirecting — it will eventually give something new',
        'Accept that AI has nothing more to offer on this topic',
        'Start a new conversation with a better first prompt that includes what you\'ve learned',
        'Ask AI to explain why it keeps repeating itself',
      ],
      correct: 2,
      feedback: "Repetition is a clear signal that the conversation has run its course. A fresh start with a better first prompt — built from what you\'ve learned — will almost always outperform trying to fix a stuck conversation.",
    },
    {
      q: 'A response contains 5 suggestions. One of them — number 3 — is exactly the kind of thing you need, but it\'s only one sentence. What\'s the best follow-up?',
      options: [
        'Use all 5 suggestions since they were all provided',
        '"Tell me more about suggestion 3 — give me a step-by-step example for my situation"',
        'Start over and ask only about the topic of suggestion 3',
        'Ask AI to rank all 5 suggestions by importance',
      ],
      correct: 1,
      feedback: "Zoom in on what\'s useful. AI can go as deep as you want on any part of its own response. You don\'t have to restart — just point at suggestion 3 and ask for more. That one follow-up often produces the most useful thing in the whole conversation.",
    },
  ],
}

export default c5module4
