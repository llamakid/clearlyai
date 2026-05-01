# Clearly, AI — Architecture & Decision Log

This file documents *why* key decisions were made — not what the code does, but the reasoning behind it.
Read this before adding new features or changing existing patterns.

---

## Stack Decisions

### Why Supabase (not Prisma + separate auth)
Supabase gives us auth + database + RLS in a single service with a first-class SSR client (`@supabase/ssr`). No separate ORM layer, no separate session management, no separate admin API. Row-level security means we never accidentally expose one user's data to another — enforced at the DB level, not application code.

### Why Next.js App Router (not Pages Router)
Server components let us check auth and query Supabase before the page renders, with no client-side flash. Route groups (`(auth)/`, `(protected)/`) give us a clean file structure with shared layouts and middleware without affecting URLs.

### Why MDX for the blog (not a CMS)
The blog is low-volume. MDX files in `content/blog/` work with git, need no admin UI, and render instantly. Adding a post is a file create — no dashboard login required.

### Why Stripe Checkout (hosted page, not custom form)
PCI compliance out of the box. Stripe handles the card form, 3DS, and receipts. We just create a session and redirect. No card data ever touches our server.

---

## Data & State Decisions

### Why course content is static JS objects (not DB-backed)
Course slides are fixed, curated content — not user-generated. Storing them in `lib/course-data/` means:
- Zero DB queries per slide render (instant)
- Content is version-controlled alongside code
- No CMS admin panel needed for content changes

Tradeoff: updating content requires a code deploy. Acceptable at this stage.

### Why localStorage for progress (not the Supabase `course_progress` table)
**Known gap.** The `course_progress` table exists in the schema and is ready, but `CoursePlayer` currently writes progress to `localStorage` only. This was the simplest approach for beta — no login required to resume, no sync complexity.

**Future:** wire `persistState()` in `CoursePlayer.tsx` to also upsert `course_progress` via a server action or API route. The schema is already correct.

### Why the feedback form doesn't POST data anywhere (yet)
**Known gap.** `FeedbackView` calls `setSubmitted(true)` on submit without sending data. The HTML modules used Netlify Forms. The Next.js version needs a proper endpoint wired up (Resend is already installed as a dependency — use it to email feedback to `nate.guy@reusser.com` or POST to a Supabase table).

---

## Auth & Security Decisions

### Why `SUPABASE_SERVICE_ROLE_KEY` is used in the webhook
The Stripe webhook runs server-to-server — there's no authenticated user session. The service role key bypasses RLS so the webhook can write to `purchases`. It is **only** used in `app/api/stripe/webhook/route.ts` and never exposed to the client.

### Why `SKIP_AUTH=true` exists
Dev convenience for working on protected routes without buying access. The check only runs when `process.env.NODE_ENV !== 'production'`, so the flag has zero effect in production.

### Access control flow
```
Request → middleware.ts (session refresh + route guard)
  → no session → redirect /login?redirectTo=...
  → session → (protected)/layout.tsx (purchase check)
    → no purchase row → redirect /pricing
    → purchase row → page renders
```

---

## Brand & Design Decisions

### Clear Sky color palette (CSS variables in `globals.css`)

| Variable | Hex | Usage |
|---|---|---|
| `--bg` | `#f5f3ee` | Page background (warm off-white) |
| `--bg-alt` | `#fdfcfa` | Cards, sidebar backgrounds |
| `--ink` | `#1c2b35` | Primary text, headings |
| `--ink-mid` | `#4a5e6a` | Body text, secondary labels |
| `--ink-lt` | `#7a919d` | Captions, metadata |
| `--accent` | `#3d7a8a` | Primary teal (buttons, links, highlights) |
| `--accent-dk` | `#2d6070` | Hover states |
| `--accent-lt` | `#ddeef3` | Selected/active backgrounds |
| `--accent-xl` | `#eef6f9` | Very light teal tints |
| `--border` | `rgba(28,43,53,0.10)` | Subtle dividers |
| `--border-md` | `rgba(28,43,53,0.15)` | Form inputs, card borders |
| `--r` | `16px` | Default border radius |
| `--shadow` | `0 4px 20px rgba(28,43,53,0.09)` | Card hover shadow |
| `--shadow-sm` | `0 2px 8px rgba(28,43,53,0.07)` | Default card shadow |

### Why inline CSS-in-JS (not Tailwind)
All styles reference CSS variables (`var(--accent)`, `var(--ink)`, etc.) so the brand palette is enforced at the variable level. Tailwind would require mapping every brand token to a custom config. The current approach works fine at this project size.

### Fonts
- **DM Serif Display** — headings, course title, brand moments (`var(--font-dm-serif)`)
- **Inter** — all body text, UI labels (`var(--font-inter)`)
- Both loaded via `next/font/google` in `app/layout.tsx`

---

## Pricing & Business

- **Course price:** $97 one-time (configured as a Stripe product/price)
- **Target audiences:** Working professionals (35–54), small business owners (38–58), curious learners (55–75)
- **Beta phase:** No LMS, no email automation, no payments for beta testers — share module URLs directly
- **Post-beta additions:** testimonials, real user stats, email sequences (Resend is already installed)

---

## Known Issues / Future Work

| Issue | Location | Notes |
|---|---|---|
| Quiz label hardcoded "Module 1" | `components/course/QuizView.tsx:14` | Should use `moduleId` prop |
| Feedback form doesn't send data | `components/course/FeedbackView.tsx` | `handleSubmit` sets local state only |
| Progress not synced to DB | `components/CoursePlayer.tsx` → `persistState()` | localStorage only; `course_progress` table is ready |
| `resend` package installed but unused | `package.json` | Earmarked for transactional email post-beta |
| `CONTEXT.md` referenced but missing | `CLAUDE.md` | This file — now exists |
