# Clearly, AI — Claude Briefing File
> This file is read automatically at the start of each session. Full detail is in CONTEXT.md.

## What We're Building
**Clearly, AI** — a plain-English AI school for non-technical adults. Three audiences: working professionals (35–54), small business owners (38–58), and curious learners (55–75). The brand promise is confidence, not complexity.

- **Founder:** Nate (nate.guy@reusser.com)
- **Tagline:** Learn it. Use it. Own it.
- **Full context file:** `CONTEXT.md` in this folder

---

## Brand — Do Not Change Without Asking

| Element | Decision |
|---|---|
| **Colors** | "Clear Sky" palette. Primary bg: `#f5f3ee`. Accent teal: `#3d7a8a`. Dark: `#1c2b35`. Full palette in CONTEXT.md |
| **Heading font** | DM Serif Display (Google Fonts) |
| **Body font** | Inter (Google Fonts) |
| **Tone** | Warm, plain English, specific, never jargon |
| **Shape** | Rounded corners (12–36px), generous spacing, soft shadows |

---

## Files in This Folder

| File | What It Is |
|---|---|
| `index.html` | Production landing page — trust bar, testimonials, and pricing removed for beta. Pain section is a 2×2 card grid. No "Pricing" nav link. |
| `starter-kit.html` | Free Starter Kit — web/preview version. 10 things you can do with AI today, with Try This prompts for each. Full brand styling. |
| `Clearly_AI_Starter_Kit.pdf` | Free Starter Kit — downloadable PDF (generated from starter-kit.html via weasyprint). This is what the landing page CTAs should point to. |
| `module-1.html` | Module 1 — 5 lessons, 42 slides, quiz, Netlify feedback form |
| `module-2.html` | Module 2 — ChatGPT & Work: Getting Things Done |
| `module-3.html` | Module 3 — Think Smarter: Research, Planning & Decisions |
| `module-4.html` | Module 4 — Creating Content with AI: Your Voice, Amplified |
| `module-5.html` | Module 5 — AI Tools Beyond ChatGPT: Image, Audio & Specialized AI |
| `module-6.html` | Module 6 — Your AI Life: Staying Current and Going Further (capstone + graduation) |
| `brand-explorer.html` | Interactive brand explorer (font + color picker) — used to make brand decisions, keep for reference |
| `content-templates.html` | Social, email, video, headline, and ad copy swipe file |
| `Clearly_AI_Business_Plan.docx` | Full business plan + GTM strategy |
| `Clearly_AI_Brand_Guidelines.docx` | Brand guidelines — colors, type, voice, usage rules |
| `CONTEXT.md` | Full session history and decision log |
| `CLAUDE.md` | This file |

---

## Current Status

- ✅ Business plan written
- ✅ Brand system locked (Clear Sky + DM Serif + Inter)
- ✅ Landing page built (`index.html`) — beta-ready (no fake stats, no pricing, no testimonials)
- ✅ Brand guidelines doc written
- ✅ Content templates swipe file built
- ✅ All 6 modules built and complete (module-1.html through module-6.html)
- ✅ Feedback form wired up with Netlify Forms (all 6 modules)
- ✅ Domain purchased: learnaiclearly.com
- ✅ Free Starter Kit created — PDF + HTML web version
- ⏳ Wire landing page CTAs to the actual Starter Kit PDF download
- ⏳ Deploy to Netlify (drag folder to netlify.com/drop, connect learnaiclearly.com)
- ⏳ Recruit 10–15 beta testers across all 3 personas
- ⏳ No LMS, email tool, or payments set up yet (not needed until post-beta)

---

## Immediate Priorities (pick up here)

1. ~~Wire up the feedback form in `module-1.html` using Netlify Forms~~ ✅
2. ~~Purchase domain~~ ✅ learnaiclearly.com
3. ~~Build all 6 modules~~ ✅ — Course is complete
4. ~~Create the Free Starter Kit~~ ✅ — PDF + HTML both built
5. **Wire landing page CTAs** — Update `index.html` hero and bottom CTA buttons to trigger a download of `Clearly_AI_Starter_Kit.pdf` (or link to `starter-kit.html`)
6. **Deploy to Netlify** — Drag the "Clearly, AI" folder to netlify.com/drop → get a URL → connect learnaiclearly.com
7. **Recruit 10–15 beta testers** — Across all 3 personas (professional, business owner, curious newcomer). Manual outreach, share module URLs directly. No LMS/payments needed yet.

---

## Working Notes for Claude

- Always use the Clear Sky palette and DM Serif + Inter when building anything visual
- New HTML files go in this workspace folder
- Do not rebuild things that already exist — check the file list above first
- The course format is **slide-style** (one concept per screen with prev/next nav) — maintain this for all future modules
- `module-1.html` uses localStorage for progress saving — keep this pattern
- When writing lesson content: jargon-free, second person ("you"), specific outcomes, one idea per slide
- Nate's preferred working style: build things, then iterate based on feedback
- The landing page (`index.html`) is intentionally stripped of social proof for beta — add testimonials/stats back once real data exists from beta testers
- The Starter Kit PDF was generated using weasyprint (`pip install weasyprint --break-system-packages`). Re-run the Python script if the HTML source is updated.
