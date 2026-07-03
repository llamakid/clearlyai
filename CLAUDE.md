# Clearly, AI — Claude Briefing File
> This file is read automatically at the start of each session.

## What We're Building
**Clearly, AI** — a plain-English AI school for non-technical adults. Three audiences: working professionals (35–54), small business owners (38–58), and curious learners (55–75). The brand promise is confidence, not complexity.

- **Founder:** Nate (nate.guy@reusser.com)
- **Tagline:** Learn it. Use it. Own it.
- **Domain:** learnaiclearly.com

---

## Brand — Do Not Change Without Asking

| Element | Decision |
|---|---|
| **Colors** | "Clear Sky" palette. Primary bg: `#f5f3ee`. Accent teal: `#3d7a8a`. Dark: `#1c2b35`. CSS vars: `--bg`, `--accent`, `--ink`, `--ink-mid`, `--accent-lt`, `--accent-dk` |
| **Heading font** | DM Serif Display (Google Fonts) — loaded via `app/layout.tsx` |
| **Body font** | Inter (Google Fonts) |
| **Tone** | Warm, plain English, specific, never jargon |
| **Shape** | Rounded corners (12–36px), generous spacing, soft shadows |

---

## Tech Stack

| Layer | Tool |
|---|---|
| **Framework** | Next.js 16.2 (App Router, TypeScript) |
| **Auth + DB** | Supabase (`@supabase/ssr` + `@supabase/supabase-js`) |
| **Payments** | Stripe (subscription + lifetime checkout, webhook) |
| **Email** | Resend (`lib/resend.ts` — lazy-init singleton) |
| **Hosting** | Vercel (not Netlify) |
| **Blog** | MDX files in `content/blog/` via `next-mdx-remote` |
| **Analytics** | Vercel Analytics + Speed Insights (both in `app/layout.tsx`) |
| **Validation** | Zod v4 |

---

## Project Structure

```
app/
  page.tsx                              Landing page (static — no server auth fetch)
  layout.tsx                            Root layout (fonts, CSS vars, analytics)
  globals.css                           Global styles + CSS custom properties
  icon.tsx / apple-icon.tsx             Favicon + Apple touch icon (generated)
  opengraph-image.tsx                   OG image (generated)
  curriculum/page.tsx                   Public curriculum overview page (all courses)
  for/[persona]/page.tsx                Persona landing pages (SSG): /for/professionals,
                                        /for/business-owners, /for/curious-learners — targeted
                                        front doors for outreach/social/SEO. Course paths pull
                                        from COURSES_META. Homepage "Who It's For" cards link here.
  faq/page.tsx                          Public FAQ page
  (auth)/login/page.tsx                 Login form
  (auth)/signup/page.tsx                Signup form
  verify-required/page.tsx              Post-signup "check your email" gate
  (protected)/layout.tsx                Auth gate (checks Supabase session server-side)
  (protected)/dashboard/page.tsx        Course dashboard — shows course cards
  (protected)/courses/[courseSlug]/     Course overview page (hero + module grid)
  (protected)/course/[moduleId]/        Individual module player
  api/auth/callback/route.ts            Supabase email confirmation callback
  api/auth/signup/route.ts              Handles signup + sends confirmation email
  api/auth/signout/route.ts             Signs user out and clears session
  api/auth/verify-email/route.ts        Verifies email token from confirmation link
  api/auth/resend-verification/route.ts Resends confirmation email on request
  api/stripe/checkout/route.ts          Creates Stripe Checkout session
  api/stripe/portal/route.ts            Creates Stripe Customer Portal session (manage subscription)
  api/stripe/webhook/route.ts           Receives payment → writes to purchases table
  api/subscribe/route.ts                Homepage email capture → subscribers table (stores `source`:
                                        'newsletter' | 'starter-kit' | 'free-course')
  api/cron/drip/route.ts                Daily email drip — audience is confirmed auth users ∪ subscribers,
                                        deduped, minus unsubscribed + purchasers. Sends next due nurture
                                        step per person. Invoked by Vercel Cron (vercel.json), auth via
                                        CRON_SECRET bearer.
  api/unsubscribe/route.ts              One-click unsubscribe (GET, HMAC token) → upserts subscribers row
                                        with unsubscribed=true (subscribers doubles as the opt-out list
                                        for auth users too)
  api/feedback/route.ts                 End-of-module feedback → feedback table + Resend notify
  api/download/starter-kit/route.ts     Serves the downloadable starter kit PDF/file
  blog/page.tsx                         Blog index
  blog/[slug]/page.tsx                  MDX blog post
  pricing/page.tsx                      Pricing page
  pricing/CheckoutButton.tsx            Client component for Stripe redirect (uses startTransition)
  privacy/page.tsx / terms/page.tsx     Legal pages

components/
  Navbar.tsx                            Auth-aware nav — accepts optional `initialUser` prop to
                                        skip client-side Supabase auth fetch (pass from server
                                        components that already have the user)
  Footer.tsx                            Site-wide footer
  EmailSignup.tsx                       Email capture form — lazy-loaded on home page via dynamic()
  EmailVerificationBanner.tsx           Banner shown to unverified users prompting email confirmation
  ManageSubscriptionButton.tsx          Client component — POSTs to /api/stripe/portal for sub management
  CoursePlayer.tsx                      Main course player (lessons + slides + nav).
                                        Accepts `userId` + `initialProgress` props from server.
                                        Reads initial position from DB; writes back on lesson completion.
                                        Uses startTransition for lesson-done updates + useMemo sidebar.
  course/SlideContent.tsx               Renders individual slide content
  course/QuizView.tsx                   Quiz slide type
  course/FeedbackView.tsx               End-of-module feedback form (POSTs to /api/feedback)

lib/
  supabase/client.ts                    Browser Supabase client
  supabase/server.ts                    Server Supabase client (async, cookie-based)
  stripe.ts                             Stripe client (lazy init)
  resend.ts                             Resend client (lazy init) + fromAddress() helper
  blog.ts                               Reads MDX posts from content/blog/
  api-error.ts                          Standard API error helper
  email-drip.ts                         Nurture drip sequence content (4 steps) + unsubscribe HMAC tokens
  schemas.ts                            Zod schemas
  course-data/courses.ts                Course-level metadata for all courses — SINGLE SOURCE OF
                                        TRUTH for the dashboard and course overview pages.
                                        Add new courses here; UI picks them up automatically.
  course-data/types.ts                  Shared TypeScript types (CourseData, Lesson, Slide, etc.)
  course-data/starter.ts                Free starter course (module 0 — not gated, not in DB)
  course-data/module-1.ts through 6.ts  Course 1 "AI Foundations" content (moduleIds 1–6)
  course-data/c2-module-1.ts through 6.ts  Course 2 "AI at Work" content (moduleIds 7–12)
  course-data/c3-module-1.ts through 6.ts  Course 3 "AI for Your Business" content (moduleIds 13–18)
  course-data/c4-module-1.ts through 6.ts  Course 4 "AI for a Richer Retirement" content (moduleIds 19–24)
  course-data/c5-module-1.ts through 6.ts  Course 5 "Better Prompts, Better Results" content (moduleIds 25–30)
  course-data/c6-module-1.ts through 6.ts  Course 6 "AI for Career Growth" content (moduleIds 31–36)
  course-data/c7-module-1.ts through 6.ts  Course 7 "Getting Started with Claude" content (moduleIds 37–42)
  course-data/c8-module-1.ts through 6.ts  Course 8 "Claude for Real Work" content (moduleIds 43–48)
                                        — Courses 7 & 8 are the first two of a 3-course provider-specific
                                        Claude path (beginner→intermediate→advanced). Course 8 covers
                                        Projects, connectors, Skills, and Cowork. The Advanced course
                                        ("Claude, Mastered" — deeper Cowork + Claude Code) is not yet built.

content/blog/
  *.mdx                                 Blog posts — add new ones here (26+ posts live)

middleware.ts                           Protects /dashboard, /courses/*, /course/* behind auth
supabase-schema.sql                     Full schema — run in Supabase SQL Editor
.env.local.example                      Template for required environment variables
SETUP.md                                Step-by-step setup guide (Supabase, Stripe, Vercel)
```

---

## Course Architecture

### Five courses, one subscription
Access is gated by the `purchases` table — a single purchase unlocks **all** courses. Do not build per-course gating.

### Course numbering
| Course | Name | Module IDs | Slug |
|---|---|---|---|
| Course 1 | AI Foundations | 1–6 | `ai-foundations` |
| Course 2 | AI at Work | 7–12 | `ai-at-work` |
| Course 3 | AI for Your Business | 13–18 | `ai-for-your-business` |
| Course 4 | AI for a Richer Retirement | 19–24 | `ai-richer-retirement` |
| Course 5 | Better Prompts, Better Results | 25–30 | `better-prompts` |
| Course 6 | AI for Career Growth | 31–36 | `ai-career-growth` |
| Course 7 | Getting Started with Claude | 37–42 | `getting-started-with-claude` |
| Course 8 | Claude for Real Work | 43–48 | `claude-for-real-work` |

Module 0 is the free starter course — progress is tracked in `course_progress` like all other modules (schema constraint: `module_id >= 0`).

### Adding a new course
1. Add course metadata to `lib/course-data/courses.ts` (dashboard + course pages pick it up automatically)
2. Create content files in `lib/course-data/` (e.g. `c9-module-1.ts`) with the next available moduleId block (next block starts at 49)
3. Add each module to the `COURSES` map in `app/(protected)/course/[moduleId]/page.tsx`

### Adding a new module to an existing course
1. Create the content file with the next moduleId
2. Add it to `COURSES` in the course page
3. Update `available: false → true` in `lib/course-data/courses.ts` when ready to publish
4. No DB migration needed (constraint is `module_id >= 0`)

### Course progress
Progress is stored in `course_progress` (Supabase) and mirrored to `localStorage`.
- **On page load:** server fetches the progress row and passes it to `CoursePlayer` as `initialProgress` — no client-side DB fetch on mount.
- **On lesson completion:** `CoursePlayer` upserts `{ current_lesson, current_slide, completed }` to the DB (fire-and-forget).
- **Module 0 (starter):** localStorage only — not written to DB.

### Navigation flow
```
/dashboard → course cards
  → click course → /courses/[courseSlug] — hero + module grid
    → click module → /course/[moduleId] — full-screen player
      → "← Course Home" sidebar button → back to /courses/[courseSlug]
      → "Clearly, AI" top-bar logo → back to /dashboard
```

The `courseSlug` is derived server-side in the module page by looking up the moduleId in `COURSES_META` and passed to `CoursePlayer` as a prop.

---

## Database Schema (Supabase)

All tables have RLS enabled:

| Table | Purpose |
|---|---|
| `purchases` | Created by Stripe webhook on successful payment. Grants access to all courses. |
| `course_progress` | Tracks `current_lesson`, `current_slide`, `completed` per user per module. `module_id >= 1`. |
| `subscribers` | Email addresses from the homepage opt-in form, `/starter-kit` lead magnet, and end-of-free-course capture. Columns `source` + `unsubscribed` drive the drip. `first_name` is optional (nullable) — capture forms + signup collect it but never require it; drip and confirmation emails greet by name when present, fall back gracefully when absent. Auth users' names live in `user_metadata.first_name`, not this table. |
| `email_sends` | Drip delivery log — one row per (email, sequence, step), unique-constrained so each step sends at most once. Service-role only. |
| `feedback` | End-of-module survey responses. Service-role insert only. |
| `tool_usage` | Daily AI tool usage per logged-in user (rate limit: 5/tool/day). |
| `anon_tool_usage` | Daily AI tool usage for logged-out visitors, keyed by IP hash (rate limit: 2/tool/day). Service-role only. |
| `downloads` | Logs starter-kit PDF downloads. |

---

## Access Control Flow

```
User visits /dashboard, /courses/*, or /course/*
  → middleware checks Supabase session
  → no session → redirect /login
  → session OK → page renders

Individual module pages (/course/[moduleId]):
  → server checks purchases table
  → no purchase → redirect /pricing
  → purchase found → module loads
  (Module 0 is fully public — served by app/course/0/page.tsx, exempted in
  proxy.ts, viewable without an account; anonymous progress lives in localStorage)
```

Payment flow:
```
/pricing → click "Get Access"
  → if not logged in → /signup → back to /pricing
  → POST /api/stripe/checkout → Stripe hosted checkout
  → payment succeeds → Stripe webhook → POST /api/stripe/webhook
  → webhook writes row to purchases table
  → user redirected to /dashboard?welcome=1
```

Feedback flow:
```
End of each module → FeedbackView renders
  → user fills out form → POST /api/feedback
  → row saved to feedback table
  → Resend notification sent to nate.guy@reusser.com (fire-and-forget)
  → thank-you screen shown
```

---

## Environment Variables Required

See `.env.local.example` for the full list. Summary:

| Variable | Source |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase → Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase → Settings → API (server-only) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe → Developers → API Keys |
| `STRIPE_SECRET_KEY` | Stripe → Developers → API Keys |
| `STRIPE_WEBHOOK_SECRET` | Stripe → Developers → Webhooks |
| `STRIPE_PRICE_ID_MONTHLY` | Stripe → Products → Monthly price ID ($15/mo) |
| `STRIPE_PRICE_ID_YEARLY` | Stripe → Products → Yearly price ID ($120/yr) |
| `STRIPE_PRICE_ID_FOREVER` | Stripe → Products → Founder/lifetime price ID ($299 one-time) |
| `NEXT_PUBLIC_SITE_URL` | `https://learnaiclearly.com` in production |
| `RESEND_API_KEY` | resend.com → API Keys |
| `RESEND_FROM_EMAIL` | `nate@learnaiclearly.com` |
| `ANTHROPIC_API_KEY` | console.anthropic.com → API Keys (powers AI Tools) |
| `CRON_SECRET` | Any long random string — Vercel sends it as Bearer auth to `/api/cron/drip` |

---

## Current Status

### Infrastructure (all done)
- ✅ Business plan written
- ✅ Brand system locked (Clear Sky + DM Serif + Inter)
- ✅ Next.js app scaffolded with full stack (auth, payments, blog, course player)
- ✅ All 8 courses fully built — 48 modules, 240 lessons total
  - Course 1: AI Foundations (moduleIds 1–6)
  - Course 2: AI at Work (moduleIds 7–12)
  - Course 3: AI for Your Business (moduleIds 13–18)
  - Course 4: AI for a Richer Retirement (moduleIds 19–24)
  - Course 5: Better Prompts, Better Results (moduleIds 25–30)
  - Course 6: AI for Career Growth (moduleIds 31–36)
  - Course 7: Getting Started with Claude (moduleIds 37–42) — Claude Beginner
  - Course 8: Claude for Real Work (moduleIds 43–48) — Claude Intermediate
- ✅ Claude provider-specific track launched (2026-06-26) — Beginner (C7) + Intermediate (C8, incl. Cowork) live; Advanced "Claude, Mastered" (deeper Cowork + Claude Code) still to build (moduleIds 49–54)
- ✅ Dashboard redesigned — audience tracks + a "Go Deeper: Master a Tool" provider track (`PROVIDER_SERIES`) showing the Claude path beginner→intermediate→advanced
- ✅ Dashboard — course cards link to course overview pages
- ✅ Course overview pages live at `/courses/[courseSlug]` (hero + module grid)
- ✅ Public curriculum page at `/curriculum` (all courses visible without login — auto-renders from `COURSES_META`)
- ✅ FAQ page at `/faq`
- ✅ Course progress wired to Supabase DB (reads on load, writes on lesson completion)
- ✅ Supabase project created, schema run, auth verified
- ✅ Email verification flow — confirm on signup, `verify-required` gate, resend endpoint, banner for unverified users
- ✅ Stripe products created — 3 prices (monthly $15, yearly $120, forever $299)
- ✅ Stripe checkout + webhook wired up (subscriptions + one-time payment handled)
- ✅ Stripe Customer Portal wired up (`/api/stripe/portal` → `ManageSubscriptionButton`)
- ✅ Resend account set up, domain verified, email confirmation re-enabled in Supabase
- ✅ Email capture wired up (homepage → `/api/subscribe` → `subscribers` table)
- ✅ Feedback forms wired up (end of each module → `/api/feedback` → `feedback` table + Resend notify)
- ✅ Downloadable starter kit (`/api/download/starter-kit`)
- ✅ Blog live with 26+ posts (MDX in `content/blog/`)
- ✅ Favicon, OG image, Apple icon generated
- ✅ Domain purchased and connected: learnaiclearly.com
- ✅ Deployed to Vercel, all env vars set
- ✅ Vercel Analytics + Speed Insights installed
- ✅ Smoke test completed — full signup → checkout → dashboard → course → module → feedback flow verified
- ✅ AI Tools built and live — Write (`/tools/write`) and Explain (`/tools/explain`) wired to Claude Haiku with copy/refinement actions.
- ✅ AEO audit tool (2026-07-03) — "AI Search Checkup" at `/tools/audit`, ported from the standalone Desktop/AEO repo. Engine lives in `lib/aeo/` (fetch+cheerio crawler — NOT Playwright, which can't run on Vercel; four analyzers: technical, structured data, content, semantic; scoring). API at `/api/tools/audit` (SSRF guard blocks private hosts, `maxDuration=60`, same rate-limit pattern as other tools with tool key `'audit'`: anon 2/day, logged-in 5/day). Anonymous finishers see a "Start the free course" CTA under the report. Logged-out visitors get 2 free uses/tool/day (cookie + `anon_tool_usage` IP-hash table via `lib/anon-tool-usage.ts`); logged-in users get 5/tool/day (`tool_usage` table). Homepage hero primary CTA is "Try a Free AI Tool" → `/tools`.
- ✅ Starter kit PDF email-gated — `/starter-kit` landing page captures email → subscribes (`source: 'starter-kit'`) → triggers download + sends email with download link

### SEO / Discovery
- ✅ **Site is live** at learnaiclearly.com
- ✅ Google Search Console verified
- ✅ Bing Webmaster Tools verified
- ⏳ Perplexity — submit once GSC and Bing show solid indexing progress

### Growth
- ⏳ First paid users not yet acquired (as of 2026-07-02: 17 free users, 38 starter-kit downloads, 1 free-course completion, 0 paid)
- ✅ Email drip system built (2026-07-02) — 4-step nurture sequence in `lib/email-drip.ts`, daily Vercel Cron → `/api/cron/drip`, gap-based scheduling (works for old + new subscribers), one-click unsubscribe. **To activate:** run `supabase-migration-email-drip.sql` in Supabase SQL Editor, set `CRON_SECRET` in Vercel, redeploy.
- ✅ End-of-free-course conversion screen rebuilt (2026-07-02) — value bullets + pricing CTA + email capture for anonymous finishers (`source: 'free-course'`)
- ✅ Outreach drafts written — `marketing/first-outreach.md` (personal user emails, LinkedIn/Facebook posts, library workshop pitch, weekly rhythm)
- ✅ Weekly marketing workflow (2026-07-02) — `/weekly-marketing` skill mines course lessons into a weekly content package saved as `marketing/week-NN.md` (week-01 done). Dogfood for a possible future subscriber-facing marketing tool — do not productize until the manual loop has run 4–6 weeks and produced signups.
- ⏳ Nate to send the personal emails to the 17 existing users + start the weekly posting rhythm
- ⏳ Course loading performance — module pages have noticeable load time; investigate the Supabase query waterfall (purchases check + progress fetch are sequential), bundle size from importing all 48 course data files, and whether React Suspense / streaming can help

---

## Immediate Priorities (pick up here)

1. **Create social posts** — write LinkedIn, Facebook, and Instagram posts to promote the courses and free tools; target the three audiences
2. **Get first paid users** — direct outreach, social posts, LinkedIn, community posts targeting the three audiences (working professionals 35–54, small business owners 38–58, curious learners 55–75)
3. **Build email list** — promote the free starter course and downloadable starter kit as lead magnets; drive signups to the subscriber list
4. **Content marketing** — keep publishing blog posts (MDX in `content/blog/`); target long-tail search terms non-technical adults use when looking up AI
5. **Finish the Claude Advanced course** — "Claude, Mastered" (deeper Cowork + hands-on Claude Code), moduleId block 49–54; add to `courses.ts`, register in the course page `COURSES` map, flip its `PROVIDER_SERIES` card from `comingSoon` to a `slug`
6. **Build provider-specific courses for other tools** — mirroring the Claude provider track; add each to `PROVIDER_SERIES` on the dashboard:
   - **OpenAI (ChatGPT)** course
   - **Codex** course (OpenAI's coding agent CLI)
   - **Gemini** course
   - **Antigravity CLI** course (Google's agentic CLI)
7. **Submit to Perplexity** — once GSC and Bing show solid indexing progress
8. **Improve course loading performance** — Supabase query waterfall (purchases check + progress fetch are sequential), bundle size from 48 course files, React Suspense / streaming

---

## Working Notes for Claude

- Always use the Clear Sky palette and DM Serif + Inter for anything visual
- This is a **Next.js App Router** project — use server components by default, `'use client'` only when needed
- Course content lives in `lib/course-data/` as TypeScript — not HTML files
- When writing lesson content: jargon-free, second person ("you"), specific outcomes, one idea per slide
- Nate's preferred working style: build things, then iterate based on feedback
- Do not use Netlify — this app runs on Vercel with its own API routes
- Blog posts are MDX files in `content/blog/` — adding a new file is all it takes to publish
- Stripe has separate test and live mode price IDs — not interchangeable. Always confirm the mode before debugging Stripe errors.
- Pricing is 3 tiers: Monthly ($15/mo), Yearly ($120/yr), Forever ($299 one-time). Plan IDs: `monthly`, `yearly`, `forever`.
- The server Supabase client (`lib/supabase/server.ts`) exports `createClient` — import it as `createClient`. Do not import `createServerClient` from that path.
- API routes that need the logged-in user's ID should use the server client + `auth.getUser()`, then fall back gracefully if unauthenticated.
- Resend notification emails to Nate should always be fire-and-forget — never let a failed notification block a user response.
- **Navbar** accepts an optional `initialUser` prop — always pass it from server components that already have the user (dashboard, course pages, home page if needed). Skips the client-side Supabase auth fetch.
- **Home page** (`app/page.tsx`) must stay a non-async server component so it stays `○` (Static) and is served from Vercel's CDN edge. Do not add `supabase.auth.getUser()` to it.
- **CoursePlayer** uses `startTransition` for lesson-completion state updates and `useMemo` for the sidebar — keep these optimizations in place when editing that component.
- **CoursePlayer** accepts a `courseSlug` prop (passed from the server page) — the "← Course Home" sidebar button links to `/courses/[courseSlug]`. The top-bar logo links to `/dashboard`.
- `lib/course-data/courses.ts` is the single source of truth for course-level metadata — dashboard, curriculum page, and course overview pages all read from it. Always update this file when adding or publishing a new module.
- Module 0 (starter course) is served by the public `app/course/0/page.tsx` route — no auth required, exempted in `proxy.ts`. The protected `app/(protected)/course/[moduleId]/page.tsx` handles modules 1+ only. "Start the Free Course" CTAs link to `/course/0` directly, not `/signup`. The DB constraint is `module_id >= 0`.
- There are now 8 courses (48 modules, moduleIds 1–48). Next available moduleId block starts at 49.
- Courses 7 & 8 are **provider-specific** courses (about Claude itself). The dashboard groups them under a separate "Go Deeper: Master a Tool" provider track (see `PROVIDER_SERIES` in the dashboard page), distinct from the audience-based tracks. Course 7 (Beginner) and Course 8 (Intermediate, `claude-for-real-work`) are live; the Advanced course ("Claude, Mastered" — deeper Cowork + a hands-on intro to Claude Code) is still shown as a "Coming soon" card and is not yet built. When building it: use moduleId block 49+, add to `courses.ts`, register in the course page `COURSES` map, and flip its `PROVIDER_SERIES` card from `comingSoon` to a `slug`.
- **ManageSubscriptionButton** is a client component that POSTs to `/api/stripe/portal` — only render it for users who have an active subscription.
- **EmailVerificationBanner** shows for signed-in users who haven't confirmed their email yet. Don't remove it from layouts that render for unverified users.
