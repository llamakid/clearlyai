# Course Idea Backlog

Running list of future courses/modules. Live courses are tracked in `lib/course-data/courses.ts` — this file is for what's *not* built yet. When one gets greenlit, move it into CLAUDE.md's roadmap and start building; delete it from here.

Next available moduleId block: **49**.

---

## Committed (already on the roadmap in CLAUDE.md)

1. **Claude, Mastered** (Advanced) — moduleIds 49–54
   Deeper Cowork workflows + a hands-on intro to Claude Code. Third and final course in the Claude provider track (Beginner → Intermediate → this).

2. **Provider-specific tracks for other tools** — mirrors the Claude track structure (Beginner + Intermediate courses, ~30 lessons each), added to `PROVIDER_SERIES` on the dashboard:
   - **ChatGPT / OpenAI** — likely the highest-demand one; most learners' actual daily tool
   - **Codex** — OpenAI's coding agent CLI (more technical audience — may need its own persona framing)
   - **Gemini** — Google's assistant, ties into Workspace users
   - **Antigravity CLI** — Google's agentic CLI (technical audience, same caveat as Codex)

---

## New ideas (not yet scoped)

### "AI Systems" track — pivot from tool-literacy to outcome-driven workflows
Surfaced in `clearly-ai-weekly-marketing-machine-plan.md`: the strategic bet there is that "learn AI" is a weaker offer than "get a repeatable system that does X." Candidate courses, each teaching one packaged workflow end-to-end rather than general tool skills:

3. **The Weekly Marketing Machine** — plan/write/organize a week of small-business marketing content in under 30 minutes using AI. (This is the flagship idea in the plan doc — closest to build-ready. Could reuse the `/weekly-marketing` skill's internal logic as the course's core workflow.)
4. **AI Customer Support System** — templated responses, tone-matching, triage, escalation rules for small business owners
5. **AI Sales Follow-Up System** — turning leads/inquiries into a consistent follow-up cadence without a CRM
6. **AI Document & Admin Cleanup System** — contracts, SOPs, onboarding docs, filing — for solo operators drowning in paperwork
7. **AI Research System** — a repeatable process for competitive intel, market research, or due diligence without hiring an analyst

### Persona-specific gaps
8. **AI for Nonprofits & Volunteers** — grant writing, donor communication, volunteer coordination (adjacent to small-business but distinct pain points and budget)
9. **AI for Caregivers** — appointment coordination, understanding medical info for a family member, managing a care schedule (distinct from "AI for a Richer Retirement," which is written for the retiree, not the person caring for one)
10. **AI for Job Seekers** — resume tailoring, cover letters, interview prep as a standalone course (currently only a partial module inside "AI for Career Growth" — could be its own front door for a different funnel: people between jobs, not currently employed)
11. **AI for Students / Continuing Education** — plain-English AI literacy for adults going back to school or pursuing certifications later in life

### Comparison / decision-support course
12. **Choosing and Switching AI Tools** — a practical course on evaluating ChatGPT vs. Claude vs. Gemini vs. Copilot for your specific situation, migrating your workflow when you switch, and avoiding vendor lock-in. Distinct from the provider tracks (which teach one tool deeply) — this one is about the *decision*, and could funnel into whichever provider track fits.

---

## How to use this list

- When picking the next course to build, prefer whatever's already committed (Claude Advanced, then the provider tracks) unless there's a strong signal (user requests, outreach feedback) pointing elsewhere.
- The "AI Systems" track is a bigger strategic bet — don't start it until the weekly-marketing skill has run long enough manually to validate demand (per `growth_strategy` memory: don't productize until the manual loop has produced signups).
- New idea? Add it here with one line of reasoning, not a full module breakdown — flesh it out only once it's actually getting built.
