import type { CourseData } from './types'

const c7module4: CourseData = {
  moduleId: 40,
  title: 'Bring Your Own Stuff',
  subtitle: 'Module 4',
  nextModuleId: 41,
  lessons: [
    {
      id: 0,
      title: 'Uploading Files and Documents',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 4 · Lesson 1',
          icon: '📎',
          title: "So far you've typed everything in. Now let's bring your own stuff to Claude.",
          body: [
            "Up to now, Claude has only known what you've told it in words. But some things are too long to retype — a contract, a report, a spreadsheet, a letter you got in the mail. The good news: you can hand the whole thing to Claude directly.",
            "This module is about <strong>bringing your own materials</strong> — your files, your documents, your photos — and getting real answers about them. It starts with one simple button.",
          ],
          sub: "If you can attach a photo to a text message, you can already do this.",
        },
        {
          type: 'concept',
          eyebrow: 'The one button to find',
          icon: '📎',
          title: 'Look for the attachment button — usually a paperclip — in the message box.',
          body: [
            "At the bottom of the screen, next to where you type, there's an attachment button. On most screens it looks like a <strong>paperclip</strong> or a plus sign. Click it, and your computer or phone opens its usual “choose a file” window.",
            "Pick the file you want, and it attaches right to your message — you'll see it sitting there, ready to send. Then you type your question and send it just like any other message. That's the entire mechanic.",
          ],
          highlight: "Find the paperclip, click it, pick your file. It works the same way as attaching a photo to an email.",
        },
        {
          type: 'concept',
          eyebrow: 'What you can hand over',
          icon: '🗂️',
          title: 'Claude can take a lot of everyday file types.',
          body: [
            "You're not limited to one kind of file. Most of the documents and images that pile up in your life are fair game — and you can usually attach more than one at a time.",
          ],
          list: {
            items: [
              '<strong>PDFs</strong> — contracts, bills, reports, manuals, forms',
              '<strong>Word documents</strong> — letters, drafts, notes',
              '<strong>Text files</strong> — plain notes, exported emails, transcripts',
              '<strong>Spreadsheets</strong> — budgets, lists, simple data tables',
              '<strong>Images</strong> — photos, screenshots, scans (more on those in Lesson 3)',
            ],
            negative: false,
          },
        },
        {
          type: 'concept',
          eyebrow: 'The simple rhythm',
          icon: '🔄',
          title: 'Attach the file, then just ask your question about it.',
          body: [
            "Here's the part people overthink: once a file is attached, you don't need a special command. You talk about it the same way you'd talk about anything else. Attach the PDF, then type “What's the main point of this?” and send.",
            "Claude reads what you attached and answers in plain English. You can keep going from there — ask a follow-up, request a summary, pull out a detail. The file becomes part of your conversation.",
          ],
          highlight: "Attach, then ask. The file is just context for the question you were going to ask anyway.",
        },
        {
          type: 'compare',
          eyebrow: 'Two ways to give Claude a long document',
          title: 'Retyping vs. attaching — one of these is a lot easier.',
          body: ["When the material is more than a sentence or two, attaching wins every time:"],
          bad: {
            label: '❌ The hard way',
            text: "Retype or copy-paste a ten-page report into the message box, paragraph by paragraph, hoping you didn't miss anything or break the formatting.",
          },
          good: {
            label: '✅ The easy way',
            text: "Click the paperclip, pick the file, and let Claude read the whole thing at once. Then ask your question. Faster, complete, and nothing gets lost.",
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Attach one real document and ask Claude what it says.',
          body: [
            "Find a document you actually have lying around — a PDF bill, a letter, a report, a set of notes. Click the attachment button, pick that file, then send the prompt below alongside it.",
          ],
          prompt: "I've attached a document. In a few plain-English sentences, tell me what this is and what the main points are — as if you were explaining it to a friend who hasn't read it.",
          body2: "Notice that you didn't have to retype a single word of the document. You just handed it over and asked. That simple move unlocks everything else in this module.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 1 Complete',
          icon: '✅',
          title: 'You can hand your own files straight to Claude.',
          body: [
            "The attachment button — usually a paperclip — lets you share PDFs, Word docs, text files, spreadsheets, and images. Once a file is attached, you ask about it in plain English, just like any other message.",
            "Next lesson: the practical, everyday questions worth asking once your document is in front of Claude.",
          ],
          summaryList: [
            'The attachment (paperclip) button sits next to the message box',
            'You can attach PDFs, Word docs, text files, spreadsheets, and images',
            'Often you can attach more than one file at a time',
            'After attaching, just ask your question in plain English',
          ],
        },
      ],
    },
    {
      id: 1,
      title: 'Asking Questions About Your Documents',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 4 · Lesson 2',
          icon: '📄',
          title: 'A document Claude can read is a document you never have to slog through alone.',
          body: [
            "Now that you can attach a file, the real magic is in what you ask about it. A long PDF, a dense contract, a wall of meeting notes — Claude can read the whole thing and hand you back exactly the part you need.",
            "This lesson is a tour of the most useful questions to ask. Each one turns a document you'd normally dread into a quick, clear answer.",
          ],
          sub: "You don't have to read every word. You have to ask the right question.",
        },
        {
          type: 'concept',
          eyebrow: 'The everyday workhorse',
          icon: '📝',
          title: "Ask Claude to summarize anything that's too long to read closely.",
          body: [
            "The single most-used move: attach a long document and ask, “Summarize this in plain English.” You'll get the gist in a few sentences instead of slogging through ten pages. You can steer the length too — “in three bullet points,” or “in one short paragraph.”",
            "This works on reports, articles, manuals, terms-and-conditions, long emails — anything where you need the point without the page count. Read the summary first, then dig into the parts that matter.",
          ],
          highlight: "“Summarize this in plain English” is the question you'll reach for most often.",
        },
        {
          type: 'concept',
          eyebrow: 'Finding the needle',
          icon: '🔍',
          title: 'Ask Claude to pull out the specific things you care about.',
          body: [
            "You don't always want a summary — sometimes you want one exact thing. Claude is excellent at hunting through a document for it. “Find the key dates in this contract.” “What's the total I owe and when is it due?” “List every name mentioned in these notes.”",
            "Think of it as asking a sharp assistant to skim the document for you and report back only the part you asked for. It saves the eye-strain of scanning for a single line buried on page seven.",
          ],
          highlight: "Need one detail? Name it. “Find the dates,” “find the total,” “find who's responsible.”",
        },
        {
          type: 'concept',
          eyebrow: 'Turning notes into next steps',
          icon: '✅',
          title: 'Ask Claude to pull the action items out of your notes.',
          body: [
            "Meeting notes, a long email thread, a list of scribbles — they often hide a handful of things you actually need to <em>do</em>. Attach them and ask, “Pull out the action items, who they belong to, and any deadlines.” Claude turns a messy blob into a clean to-do list.",
            "This one's a quiet life-changer for anyone who takes notes faster than they can organize them. The thinking is already on the page; Claude just sorts it into what happens next.",
          ],
          highlight: "“What are the action items here?” turns a wall of notes into a clear list of next steps.",
        },
        {
          type: 'compare',
          eyebrow: 'Two ways to face a dense letter',
          title: 'Struggling through it alone vs. asking for plain English.',
          bad: {
            label: '😣 On your own',
            text: "Read a dense insurance letter or legal notice three times, still unsure what it actually means for you or what you're supposed to do about it.",
          },
          good: {
            label: '🙂 With Claude',
            text: "Attach it and ask, “Explain this in plain English and tell me if there's anything I need to do.” Get a clear answer in seconds — then ask follow-ups until it's fully clear.",
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Take the dread out of one real document.',
          body: [
            "Pick a document that's been nagging at you — a bill, a contract, a confusing letter, a pile of notes. Attach it and use the prompt below, swapping in whatever you most want to know.",
          ],
          prompt: "I've attached a document. First, summarize it in plain English in a few sentences. Then pull out anything I need to act on — key dates, amounts owed, action items, or steps I'm expected to take. If anything is unclear or seems important, point it out.",
          body2: "Read what comes back, then ask a follow-up about any part that's still fuzzy — “What does this clause actually mean?” or “Which of these is most urgent?” You're now reading documents in a fraction of the time.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 2 Complete',
          icon: '✅',
          title: 'You can get answers out of any document, fast.',
          body: [
            "Summarize the long ones, hunt down the specific details, pull action items from your notes, and translate dense letters into plain English. The document does the heavy lifting; you ask the questions.",
            "Next lesson: the same idea, but for images and screenshots — because not everything you want help with is a tidy text file.",
          ],
          summaryList: [
            'Summarize long documents in plain English — and steer the length',
            'Ask Claude to find specific details: dates, totals, names',
            'Pull action items and deadlines out of messy notes',
            'Translate dense or confusing letters into plain English',
            'Always follow up on anything that\'s still unclear',
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Working With Images and Screenshots',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 4 · Lesson 3',
          icon: '🖼️',
          title: 'Claude can look at a picture, not just read words.',
          body: [
            "Some of the most frustrating moments aren't about documents — they're about something on your screen or in a photo. A cryptic error message. A chart you can't make sense of. A handwritten note. A screenshot of an email you need to answer.",
            "You can hand all of these to Claude as images and ask about them. This lesson shows you how to point your camera or your screenshot at a problem and get a clear, helpful answer back.",
          ],
          sub: "If a picture would explain it faster than words, show Claude the picture.",
        },
        {
          type: 'concept',
          eyebrow: 'Same button, different kind of file',
          icon: '📷',
          title: 'You upload an image exactly the way you upload a document.',
          body: [
            "There's nothing new to learn for the mechanics. Click the same attachment button, but this time pick a photo or a screenshot instead of a document. On your phone, you can snap a picture right then; on a computer, you choose an image file you've saved.",
            "Once it's attached, you ask your question in plain English, just like before. Claude looks at the image and responds to what it sees.",
          ],
          highlight: "Same paperclip, same rhythm — you're just attaching a picture instead of a document.",
        },
        {
          type: 'concept',
          eyebrow: 'Make sense of what you see',
          icon: '🧩',
          title: 'Claude can explain confusing things in an image.',
          body: [
            "Stuck on an error message on your computer? Screenshot it, attach it, and ask, “What does this mean and how do I fix it?” Confused by a chart in a report? Attach the image and ask Claude to describe what it's showing and what the takeaway is.",
            "This turns Claude into a patient helper for the visual stuff that usually sends people searching in frustration. You show it the problem instead of trying to describe it in words.",
          ],
          highlight: "Show Claude the error message or the chart and ask what it means — no describing required.",
        },
        {
          type: 'concept',
          eyebrow: 'Read it and reply to it',
          icon: '✍️',
          title: 'Claude can read handwriting and help you respond to a screenshot.',
          body: [
            "Got a handwritten note, a recipe card, or a scribbled list you'd like typed up? Take a photo and ask Claude to read it out. It can usually make out handwriting and turn it into clean text you can use.",
            "Even better: screenshot an email or message you're not sure how to answer, attach it, and ask, “Draft a polite reply to this.” Claude reads the screenshot and writes you a response you can tweak and send.",
          ],
          highlight: "Photograph a handwritten note to type it up, or screenshot a message to draft a reply.",
        },
        {
          type: 'compare',
          eyebrow: 'Describing vs. showing',
          title: 'Why showing the picture beats explaining it.',
          bad: {
            label: '❌ Describing it',
            text: '"There\'s an error on my screen, it\'s got some long code number and the word \'exception\' and I\'m not sure what else..." — slow, and easy to leave out the part that matters.',
          },
          good: {
            label: '✅ Showing it',
            text: 'Take a screenshot, attach it, and ask "What does this error mean and what should I do?" Claude sees the exact message — no detail lost in translation.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Point Claude at something you can see but not solve.',
          body: [
            "Find a real image: snap a photo of a handwritten note, screenshot a confusing message, or grab a chart or error you've been puzzling over. Attach it and use the matching prompt below.",
          ],
          prompt: "I've attached an image. Tell me what it shows in plain English. [Then add one of these:] What does this error message mean and how do I fix it? — OR — Read this handwritten note and type it out for me. — OR — Draft a polite reply to this email.",
          body2: "See how Claude responds to exactly what's in the picture? Anytime words feel clumsy, reach for a photo or screenshot instead — it's often faster and clearer.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 3 Complete',
          icon: '✅',
          title: 'A picture is just another thing you can ask Claude about.',
          body: [
            "Upload a photo or screenshot the same way you upload a document, then ask away. Claude can explain an error message, describe a chart, read handwriting, and help you reply to a screenshot of an email.",
            "Next lesson: an honest, practical look at keeping your information private and safe when you share your own stuff.",
          ],
          summaryList: [
            'Upload images with the same attachment button as documents',
            'Ask Claude to explain an error message or describe a chart',
            'Photograph a handwritten note and have it typed out',
            'Screenshot an email or message and ask for a reply you can tweak',
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Keeping Your Information Private and Safe',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 4 · Lesson 4',
          icon: '🔒',
          title: "Sharing your own stuff is powerful — let's do it wisely.",
          body: [
            "Now that you can hand Claude your documents and photos, it's worth a calm, practical conversation about privacy. Not the scary kind — the sensible kind, the same common sense you already use with email and online forms.",
            "The good news is the most important rule is also the simplest: you're always in control of what you share. This lesson gives you a few clear habits so you can use your own materials with total peace of mind.",
          ],
          sub: "You decide what goes in. That's the foundation of everything here.",
        },
        {
          type: 'concept',
          eyebrow: 'The core principle',
          icon: '🎛️',
          title: 'You control exactly what Claude sees.',
          body: [
            "Claude only knows what you choose to put in the conversation. It isn't rummaging through your computer or peeking at your accounts — it sees the words you type and the files you deliberately attach, and nothing else.",
            "That means privacy is mostly in your hands. Before you attach something, take a half-second to ask: “Does Claude actually need this whole thing to help me?” Often the answer is no — and you can share just the part that matters.",
          ],
          highlight: "Claude sees only what you share. That makes you the one in charge of your privacy.",
        },
        {
          type: 'concept',
          eyebrow: 'The short do-not-paste list',
          icon: '🚫',
          title: "A few things just aren't worth pasting in.",
          body: [
            "Most of what you'll share is perfectly fine. But a small handful of things are best kept out of any online tool — the same items you'd never put in a casual email. Keep this short list in mind:",
          ],
          list: {
            items: [
              '<strong>Passwords and PINs</strong> — never paste these anywhere you don\'t have to',
              '<strong>Full account or card numbers</strong> — bank, credit card, anything financial',
              '<strong>Social Security or government ID numbers</strong> — leave them out',
              "<strong>Other people's sensitive details</strong> — don't share what isn't yours to share",
            ],
            negative: true,
          },
        },
        {
          type: 'concept',
          eyebrow: 'When in doubt, redact',
          icon: '✂️',
          title: 'You can almost always share the useful part and hide the sensitive part.',
          body: [
            "Here's the trick that solves most worries: you rarely need to share the sensitive bits to get the help you want. Cross out an account number before you photograph a bill. Replace a real name with “my neighbor.” Delete the address line from a letter before you ask about its meaning.",
            "Claude can still summarize the contract, explain the letter, or draft the reply with the private details blacked out. When something feels too sensitive, <em>redact first, ask second</em>.",
          ],
          highlight: "Not sure? Black out or remove the sensitive part before you share — then ask your question.",
        },
        {
          type: 'compare',
          eyebrow: 'Two ways to share a bill',
          title: 'Oversharing vs. sharing just enough.',
          bad: {
            label: '❌ More than needed',
            text: "Snap a photo of your full bank statement — account number, balance, every transaction — just to ask what one charge means.",
          },
          good: {
            label: '✅ Just enough',
            text: 'Crop or black out the account number and balance, then ask about the single line you\'re curious about. You get the same answer with none of the exposure.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Build the redaction habit before you ever need it.',
          body: [
            "Take a document you might want to share someday — a bill, a statement, a letter. Practice the safe version: cover or crop the sensitive lines first, then attach it and use the prompt below.",
          ],
          prompt: "I've attached a document with the sensitive details (like account numbers and personal info) removed or covered. Help me with this part: [your real question — e.g. explain this charge / summarize this letter / draft a reply]. If you'd need any private information I left out, just tell me rather than guessing.",
          body2: "Notice you got real help without ever exposing the private parts. Make this your default rhythm: review the settings, redact the sensitive bits, then ask. It becomes second nature fast.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Lesson 4 Complete',
          icon: '✅',
          title: 'You can share your own materials with confidence.',
          body: [
            "You control what Claude sees, you keep passwords and full account and ID numbers out of it, you protect other people's private details, and when in doubt you redact before you share. It's worth a look at your own privacy and data settings, too, so you know how things are handled.",
            "Last lesson: putting all of this together with a real week-one challenge using your own stuff.",
          ],
          summaryList: [
            'You control what you share — Claude only sees what you put in',
            'Never paste passwords, full account/card or Social Security numbers',
            "Don't share other people's sensitive information",
            'Review your own privacy and data settings so you know how things work',
            'When in doubt, redact the sensitive part before you ask',
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Putting Your Own Materials to Work',
      meta: '7 slides · ~6 min',
      slides: [
        {
          type: 'intro',
          eyebrow: 'Module 4 · Lesson 5',
          icon: '🚀',
          title: "Let's turn all of this into real results from your own real stuff.",
          body: [
            "You can attach files, ask sharp questions about documents, work with images and screenshots, and do it all safely. Now we bring it together the only way that actually builds confidence: by using your own materials on tasks you genuinely have.",
            "No more practice with throwaway examples. This lesson is about real documents, real images, and real wins — starting today.",
          ],
          sub: "The skill becomes a habit the moment you use it on something that matters to you.",
        },
        {
          type: 'concept',
          eyebrow: 'The whole module in one breath',
          icon: '📚',
          title: "Here's everything you've learned, in four lines.",
          body: [
            "Use the paperclip to attach your own files. Ask plain-English questions to summarize, find details, and pull action items. Show Claude images and screenshots when a picture is clearer than words. And share wisely — you control what goes in, so redact anything sensitive.",
            "That's a complete toolkit for bringing your own stuff to Claude. Everything from here is just practice on things you actually care about.",
          ],
          highlight: "Attach it, ask about it, show pictures when words fall short, and share only what you need to.",
        },
        {
          type: 'concept',
          eyebrow: 'Combine the moves',
          icon: '🔗',
          title: 'The best results come from stacking these skills together.',
          body: [
            "You don't have to use these one at a time. Attach a contract <em>and</em> a screenshot of the email that came with it, and ask Claude to make sense of both together. Summarize a report, then ask it to draft an email sharing the key points with your team.",
            "One conversation can hold several files and several questions. Lead with the most important thing you want, then keep going — each follow-up sharpens the result.",
          ],
          highlight: "Mix and match — one conversation can hold several files and build toward exactly what you need.",
        },
        {
          type: 'concept',
          eyebrow: 'Your week-one challenge',
          icon: '🎯',
          title: 'Do these three real "bring your own stuff" tasks this week.',
          body: [
            "Confidence comes from reps, not reading. Pick real items from your own life and run all three of these in the next seven days:",
          ],
          list: {
            items: [
              '<strong>A document</strong> — attach a real PDF, letter, or report and ask Claude to summarize it and flag anything you need to act on.',
              '<strong>An image</strong> — screenshot something confusing (an error, a chart, a message) and ask Claude to explain it or help you reply.',
              '<strong>A messy pile</strong> — hand Claude your meeting notes or a long email thread and ask for the action items and deadlines.',
            ],
            negative: false,
          },
        },
        {
          type: 'compare',
          eyebrow: 'Before and after this module',
          title: "What's changed in how you'll use Claude.",
          bad: {
            label: '📅 Before Module 4',
            text: "You only knew how to type things in. Long documents got skimmed or skipped, confusing screenshots got ignored, and you weren't sure what was safe to share.",
          },
          good: {
            label: '✅ After Module 4',
            text: 'You hand Claude your own files and photos, ask the right questions, get summaries and action items in seconds, and share confidently because you know exactly what to keep private.',
          },
        },
        {
          type: 'exercise',
          eyebrow: 'Try This Right Now',
          icon: '🎯',
          title: 'Knock out the first of your three challenge tasks.',
          body: [
            "Don't wait — pick the most useful of the three tasks and do it now with a real file from your life. Use the prompt below, attaching your document or image and removing anything sensitive first.",
          ],
          prompt: "I've attached one of my own files (with any sensitive details removed). Here's what I need: [summarize it and flag what I need to act on / explain what this image shows / pull the action items and deadlines from these notes]. Give me a first version, then ask me one or two questions that would make it more useful.",
          body2: "Answer Claude's questions, refine until it's genuinely useful, then schedule the other two tasks for this week. Three real wins with your own materials — that's how this becomes a habit you keep.",
        },
        {
          type: 'takeaway',
          eyebrow: 'Module 4 Complete',
          icon: '🎉',
          title: "You can bring your own stuff to Claude — and get real results from it.",
          body: [
            "You attach files with the paperclip, ask plain-English questions about documents, work with images and screenshots, and share safely by controlling what goes in. Your own life — your files, your photos, your notes — is now fully in play.",
            "You've built a complete, practical skill set for working with your own materials. From here, every document and screenshot in your day is something Claude can help with.",
          ],
          summaryList: [
            'Attach your own files with the paperclip and ask about them in plain English',
            'Summarize, find details, and pull action items from documents and notes',
            'Upload images and screenshots — explain errors, read notes, draft replies',
            'Stay in control of your privacy: share only what you need, redact the rest',
            'Run the three week-one tasks to turn the skill into a habit',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'How do you share one of your own files with Claude?',
      options: [
        'Email it to Anthropic and wait for a reply',
        'Click the attachment button (usually a paperclip) in the message box and pick the file',
        'You can only type things in — Claude cannot accept files',
        'Install special software to convert the file first',
      ],
      correct: 1,
      feedback:
        "It's as simple as attaching a photo to an email. Click the attachment button — usually a paperclip — next to where you type, choose your PDF, Word doc, spreadsheet, or image, then ask your question in plain English. The file becomes part of your conversation.",
    },
    {
      q: "You have a confusing error message on your screen. What's the easiest way to get help with it?",
      options: [
        'Try to describe the error in words as carefully as you can',
        'Take a screenshot, attach it, and ask Claude what it means and how to fix it',
        'Retype the entire error code into the message box',
        'There\'s no way for Claude to help with something on your screen',
      ],
      correct: 1,
      feedback:
        'Showing beats describing. Screenshot the error, attach it with the paperclip, and ask "What does this mean and how do I fix it?" Claude sees the exact message — nothing gets lost in translation. The same trick works for charts, handwritten notes, and emails you need to reply to.',
    },
    {
      q: "You want help understanding a charge on your bank statement. What's the safest way to share it?",
      options: [
        'Paste your full account number and password so Claude has everything',
        'Crop or black out your account number and balance, then ask about the one charge',
        'Avoid using Claude entirely — financial documents can never be shared',
        'Share the whole statement; privacy settings make it impossible to overshare',
      ],
      correct: 1,
      feedback:
        "You control what Claude sees, so share only what's needed. Redact the sensitive parts — full account numbers, balances, anything you wouldn't put in a casual email — then ask about the single charge you're curious about. Same answer, none of the exposure. When in doubt, redact first and ask second.",
    },
  ],
}

export default c7module4
