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
| **Framework** | Next.js 16 (App Router, TypeScript) |
| **Auth + DB** | Supabase |
| **Payments** | Stripe (one-time checkout, webhook) |
| **Email** | Resend |
| **Hosting** | Vercel (not Netlify) |
| **Blog** | MDX files in `content/blog/` |

---

## Project Structure

```
app/
  page.tsx                          Landing page
  layout.tsx                        Root layout (fonts, CSS vars)
  globals.css                       Global styles + CSS custom properties
  (auth)/login/page.tsx             Login form
  (auth)/signup/page.tsx            Signup form
  (protected)/layout.tsx            Auth + purchase gate (server-side)
  (protected)/dashboard/page.tsx    Course dashboard
  (protected)/course/[moduleId]/    Individual module player
  api/auth/callback/route.ts        Supabase email confirmation callback
  api/stripe/checkout/route.ts      Creates Stripe Checkout session
  api/stripe/webhook/route.ts       Receives payment → writes to purchases table
  api/subscribe/route.ts            Homepage email capture → subscribers table
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
  course/FeedbackView.tsx           End-of-module feedback form

lib/
  supabase/client.ts                Browser Supabase client
  supabase/server.ts                Server Supabase client
  stripe.ts                         Stripe client (lazy init)
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
  *.mdx                             Blog posts — add new ones here

middleware.ts                       Protects /dashboard and /course/* behind auth
supabase-schema.sql                 Run once in Supabase SQL Editor to create tables
.env.local.example                  Template for required environment variables
SETUP.md                            Step-by-step setup guide (Supabase, Stripe, Vercel)
```

---

## Database Schema (Supabase)

Three tables — all with RLS enabled:

| Table | Purpose |
|---|---|
| `purchases` | Created by Stripe webhook on successful payment. Grants course access. |
| `course_progress` | Tracks `current_lesson` + `current_slide` per user per module. |
| `subscribers` | Email addresses from the homepage opt-in form. |

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
| `STRIPE_PRICE_ID` | Stripe → Products → Price ID |
| `NEXT_PUBLIC_SITE_URL` | `https://learnaiclearly.com` in production |
| `RESEND_API_KEY` | resend.com → API Keys |
| `RESEND_FROM_EMAIL` | `nate@learnaiclearly.com` |

---

## Current Status

- ✅ Business plan written
- ✅ Brand system locked (Clear Sky + DM Serif + Inter)
- ✅ Next.js app scaffolded with full stack (auth, payments, blog, course player)
- ✅ All 6 course modules built (`lib/course-data/module-1.ts` through `module-6.ts`)
- ✅ Supabase schema written (`supabase-schema.sql`)
- ✅ Stripe checkout + webhook wired up
- ✅ Email capture wired up (homepage → `/api/subscribe` → Supabase `subscribers` table)
- ✅ Blog wired up with 6 starter posts (MDX)
- ✅ Domain purchased: learnaiclearly.com
- ⏳ Supabase project not yet created / schema not yet run
- ⏳ Stripe product + price not yet created
- ⏳ Resend account not yet set up
- ⏳ `.env.local` not fully populated
- ⏳ Not yet deployed to Vercel
- ⏳ Domain not yet connected to Vercel
- ⏳ Beta testers not yet recruited

---

## Immediate Priorities (pick up here)

1. **Fill in `.env.local`** — Supabase, Stripe, Resend keys (see SETUP.md for exact steps)
2. **Run `supabase-schema.sql`** — in Supabase SQL Editor to create tables
3. **Create Stripe product** — "Clearly, AI Course" at $97 one-time, copy the Price ID
4. **Deploy to Vercel** — `vercel` CLI or import from GitHub; add all env vars in Vercel dashboard
5. **Connect domain** — Vercel → Settings → Domains → add `learnaiclearly.com`
6. **Recruit 10–15 beta testers** — share `/dashboard` URL directly after manually granting access, or have them go through the Stripe flow

---

## Working Notes for Claude

- Always use the Clear Sky palette and DM Serif + Inter for anything visual
- This is a **Next.js App Router** project — use server components by default, `'use client'` only when needed
- Course content lives in `lib/course-data/` as TypeScript — not in the HTML files from the old static prototype
- When writing lesson content: jargon-free, second person ("you"), specific outcomes, one idea per slide
- Nate's preferred working style: build things, then iterate based on feedback
- Do not use Netlify or Netlify Forms — this app runs on Vercel with its own API routes
- The old static HTML files (`index.html`, `module-1.html`, etc.) no longer exist — the Next.js app replaced them
- Blog posts are MDX files in `content/blog/` — adding a new file there is all it takes to publish
