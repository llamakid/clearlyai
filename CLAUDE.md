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
  curriculum/page.tsx                   Public curriculum overview page (all 5 courses)
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
  api/subscribe/route.ts                Homepage email capture → subscribers table
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

Module 0 is the free starter course — progress is tracked in `course_progress` like all other modules (schema constraint: `module_id >= 0`).

### Adding a new course
1. Add course metadata to `lib/course-data/courses.ts` (dashboard + course pages pick it up automatically)
2. Create content files in `lib/course-data/` (e.g. `c6-module-1.ts`) with the next available moduleId block (next block starts at 31)
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

Four tables — all with RLS enabled:

| Table | Purpose |
|---|---|
| `purchases` | Created by Stripe webhook on successful payment. Grants access to all courses. |
| `course_progress` | Tracks `current_lesson`, `current_slide`, `completed` per user per module. `module_id >= 1`. |
| `subscribers` | Email addresses from the homepage opt-in form. |
| `feedback` | End-of-module survey responses. Service-role insert only. |

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
  (Module 0 is exempt — free for all signed-in users)
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

---

## Current Status

### Infrastructure (all done)
- ✅ Business plan written
- ✅ Brand system locked (Clear Sky + DM Serif + Inter)
- ✅ Next.js app scaffolded with full stack (auth, payments, blog, course player)
- ✅ All 5 courses fully built — 30 modules, 150 lessons total
  - Course 1: AI Foundations (moduleIds 1–6)
  - Course 2: AI at Work (moduleIds 7–12)
  - Course 3: AI for Your Business (moduleIds 13–18)
  - Course 4: AI for a Richer Retirement (moduleIds 19–24)
  - Course 5: Better Prompts, Better Results (moduleIds 25–30)
- ✅ Dashboard — course cards link to course overview pages
- ✅ Course overview pages live at `/courses/[courseSlug]` (hero + module grid)
- ✅ Public curriculum page at `/curriculum` (all 5 courses visible without login)
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
- ✅ AI Tools built and live — Write (`/tools/write`) and Explain (`/tools/explain`) wired to Claude Haiku with auth gate, rate limiting (`tool_usage` table), and copy/refinement actions

### SEO / Discovery
- ✅ **Site is live** at learnaiclearly.com
- ✅ Google Search Console verified
- ✅ Bing Webmaster Tools verified
- ⏳ Perplexity — submit once GSC and Bing show solid indexing progress

### Growth
- ⏳ First paid users not yet acquired
- ⏳ Email list not yet actively marketed to
- ⏳ Course loading performance — module pages have noticeable load time; investigate the Supabase query waterfall (purchases check + progress fetch are sequential), bundle size from importing all 30 course data files, and whether React Suspense / streaming can help

---

## Immediate Priorities (pick up here)

1. **Get first paid users** — direct outreach, social posts, LinkedIn, community posts targeting the three audiences (working professionals 35–54, small business owners 38–58, curious learners 55–75)
2. **Build email list** — promote the free starter course and downloadable starter kit as lead magnets; drive signups to the subscriber list
3. **Content marketing** — keep publishing blog posts (MDX in `content/blog/`); target long-tail search terms non-technical adults use when looking up AI
4. **Submit to Perplexity** — once GSC and Bing show solid indexing progress
5. **Improve course loading performance** — Supabase query waterfall (purchases check + progress fetch are sequential), bundle size from 30 course files, React Suspense / streaming

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
- Course progress fetch in `app/(protected)/course/[moduleId]/page.tsx` runs for all modules including module 0 (starter). The DB constraint is `module_id >= 0`.
- There are now 5 courses (30 modules, moduleIds 1–30). Next available moduleId block starts at 31.
- **ManageSubscriptionButton** is a client component that POSTs to `/api/stripe/portal` — only render it for users who have an active subscription.
- **EmailVerificationBanner** shows for signed-in users who haven't confirmed their email yet. Don't remove it from layouts that render for unverified users.
