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
  page.tsx                          Landing page
  layout.tsx                        Root layout (fonts, CSS vars, analytics)
  globals.css                       Global styles + CSS custom properties
  icon.tsx                          Favicon (generated)
  apple-icon.tsx                    Apple touch icon (generated)
  opengraph-image.tsx               OG image (generated)
  (auth)/login/page.tsx             Login form
  (auth)/signup/page.tsx            Signup form
  (protected)/layout.tsx            Auth + purchase gate (server-side)
  (protected)/dashboard/page.tsx    Course dashboard
  (protected)/course/[moduleId]/    Individual module player
  api/auth/callback/route.ts        Supabase email confirmation callback
  api/stripe/checkout/route.ts      Creates Stripe Checkout session
  api/stripe/webhook/route.ts       Receives payment → writes to purchases table
  api/subscribe/route.ts            Homepage email capture → subscribers table
  api/feedback/route.ts             End-of-module feedback → feedback table + Resend notify
  blog/page.tsx                     Blog index
  blog/[slug]/page.tsx              MDX blog post
  pricing/page.tsx                  Pricing page
  pricing/CheckoutButton.tsx        Client component for Stripe redirect
  privacy/page.tsx                  Privacy policy
  terms/page.tsx                    Terms of service

components/
  Navbar.tsx                        Site-wide nav (auth-aware)
  Footer.tsx                        Site-wide footer
  EmailSignup.tsx                   Email capture form (calls /api/subscribe)
  CoursePlayer.tsx                  Main course player (lessons + slides + nav)
  course/SlideContent.tsx           Renders individual slide content
  course/QuizView.tsx               Quiz slide type
  course/FeedbackView.tsx           End-of-module feedback form (POSTs to /api/feedback)

lib/
  supabase/client.ts                Browser Supabase client
  supabase/server.ts                Server Supabase client (async, cookie-based)
  stripe.ts                         Stripe client (lazy init)
  resend.ts                         Resend client (lazy init) + fromAddress() helper
  blog.ts                           Reads MDX posts from content/blog/
  api-error.ts                      Standard API error helper
  schemas.ts                        Zod schemas
  course-data/module-1.ts           Course content — Module 1
  course-data/module-2.ts           Course content — Module 2
  course-data/module-3.ts           Course content — Module 3
  course-data/module-4.ts           Course content — Module 4
  course-data/module-5.ts           Course content — Module 5
  course-data/module-6.ts           Course content — Module 6
  course-data/types.ts              Shared types for course data

content/blog/
  *.mdx                             Blog posts — add new ones here (8 posts live)

middleware.ts                       Protects /dashboard and /course/* behind auth
supabase-schema.sql                 Full schema — run in Supabase SQL Editor
.env.local.example                  Template for required environment variables
SETUP.md                            Step-by-step setup guide (Supabase, Stripe, Vercel)
```

---

## Database Schema (Supabase)

Four tables — all with RLS enabled:

| Table | Purpose |
|---|---|
| `purchases` | Created by Stripe webhook on successful payment. Grants course access. |
| `course_progress` | Tracks `current_lesson` + `current_slide` per user per module. |
| `subscribers` | Email addresses from the homepage opt-in form. |
| `feedback` | End-of-module survey responses (stars, text answers, optional testimonial). Service-role insert only — review in Supabase dashboard. |

---

## Access Control Flow

```
User visits /dashboard or /course/[id]
  → middleware checks Supabase session
  → no session → redirect /login
  → session exists → (protected)/layout.tsx queries purchases table
  → no purchase → redirect /pricing
  → purchase found → page renders
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
  → row saved to feedback table (with user_id if logged in)
  → Resend notification email sent to nate.guy@reusser.com
  → thank-you screen shown (never blocks on email failure)
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

---

## Current Status

- ✅ Business plan written
- ✅ Brand system locked (Clear Sky + DM Serif + Inter)
- ✅ Next.js app scaffolded with full stack (auth, payments, blog, course player)
- ✅ All 6 course modules built (`lib/course-data/module-1.ts` through `module-6.ts`)
- ✅ Supabase project created, schema run, auth verified
- ✅ Stripe products created — 3 prices (monthly $15, yearly $120, forever $299)
- ✅ Stripe checkout + webhook wired up (subscriptions + one-time payment handled)
- ✅ Resend account set up, domain verified, email confirmation re-enabled in Supabase
- ✅ Email capture wired up (homepage → `/api/subscribe` → Supabase `subscribers` table)
- ✅ Feedback forms wired up (end of each module → `/api/feedback` → Supabase `feedback` table + Resend notify)
- ✅ Blog wired up with 8 posts (MDX in `content/blog/`)
- ✅ Favicon, OG image, Apple icon all generated
- ✅ Domain purchased: learnaiclearly.com
- ✅ Deployed to Vercel, all env vars set
- ✅ Vercel Analytics + Speed Insights installed
- ⏳ Smoke test not yet fully completed (Stripe test mode price IDs needed)
- ⏳ Domain connection to Vercel not yet confirmed
- ⏳ `feedback` table needs to be created in Supabase (run the new block in `supabase-schema.sql`)
- ⏳ Beta testers not yet recruited

---

## Immediate Priorities (pick up here)

1. **Run the feedback table migration** — In Supabase SQL Editor, run the `feedback` table block from `supabase-schema.sql` (section: `-- feedback: end-of-module survey responses`)
2. **Complete smoke test** — Switch Stripe to Test mode, create test price IDs, add to Vercel env vars temporarily, run the full signup → checkout → dashboard → module → feedback flow; verify rows in Supabase and notification email arrives
3. **Confirm domain is connected** — Vercel → Settings → Domains should show `learnaiclearly.com` as active with no DNS warnings
4. **Recruit 10–15 beta testers** — have them go through the live Stripe flow (or manually grant access in Supabase `purchases` table)

---

## Working Notes for Claude

- Always use the Clear Sky palette and DM Serif + Inter for anything visual
- This is a **Next.js App Router** project — use server components by default, `'use client'` only when needed
- Course content lives in `lib/course-data/` as TypeScript — not in any HTML files
- When writing lesson content: jargon-free, second person ("you"), specific outcomes, one idea per slide
- Nate's preferred working style: build things, then iterate based on feedback
- Do not use Netlify or Netlify Forms — this app runs on Vercel with its own API routes
- Blog posts are MDX files in `content/blog/` — adding a new file there is all it takes to publish
- Stripe has separate test and live mode price IDs — they are not interchangeable. Test keys (`sk_test_`) only work with test prices; live keys (`sk_live_`) only work with live prices. Always confirm the mode before debugging Stripe errors.
- Pricing is 3 tiers: Monthly ($15/mo, recurring), Yearly ($120/yr, recurring), Forever ($299 one-time, founder pricing). Plan IDs in code: `monthly`, `yearly`, `forever`.
- The server Supabase client (`lib/supabase/server.ts`) exports `createClient` — import it as `createClient` or alias it. Do not import `createServerClient` from that path.
- API routes that need the logged-in user's ID should use the server client + `auth.getUser()`, then fall back gracefully if unauthenticated.
- Resend notification emails to Nate should always be fire-and-forget (`.catch(console.error)`) — never let a failed notification block a user response.
