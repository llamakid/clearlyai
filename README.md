# Clearly, AI

**Plain-English AI education for non-technical adults.**

> Learn it. Use it. Own it.

Clearly, AI is a subscription-based online school built for working professionals, small business owners, and curious learners who want to understand and apply AI — without the jargon. The platform includes five full courses (30 modules, 150 lessons), free AI tools, a blog, and a downloadable starter kit.

Live at: [learnaiclearly.com](https://learnaiclearly.com)

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 16.2 (App Router, TypeScript) |
| Auth + Database | Supabase (`@supabase/ssr`) |
| Payments | Stripe (subscriptions + one-time checkout, webhooks) |
| Email | Resend |
| Hosting | Vercel |
| Blog | MDX files via `next-mdx-remote` |
| Analytics | Vercel Analytics + Speed Insights |
| Validation | Zod v4 |

---

## Features

### Courses
Five self-paced courses gated behind a single subscription:

| Course | Modules | Audience |
|---|---|---|
| AI Foundations | 1–6 | Everyone |
| AI at Work | 7–12 | Professionals (35–54) |
| AI for Your Business | 13–18 | Small business owners (38–58) |
| AI for a Richer Retirement | 19–24 | Curious learners (55–75) |
| Better Prompts, Better Results | 25–30 | Everyone |

A free starter course (Module 0) is available to any signed-in user with no purchase required.

### AI Tools
Two free tools available to signed-in users:

- **Write This For Me** — Generates emails, social posts, and text messages from a short description
- **Explain This To Me** — Breaks down confusing text (contracts, emails, notices) into plain English

Both tools enforce a daily usage limit (5 uses/day) tracked per user in Supabase.

### Blog
26+ MDX blog posts targeting long-tail search terms for non-technical adults learning AI. Add a new `.mdx` file to `content/blog/` to publish.

### Pricing
Three paid tiers — one subscription unlocks all five courses:
- **Monthly** — $15/mo
- **Yearly** — $120/yr
- **Forever** — $299 one-time (founding member rate)

---

## Project Structure

```
app/
  page.tsx                          Landing page (static, edge-cached)
  layout.tsx                        Root layout — fonts, analytics, CSS vars
  globals.css                       Global styles + CSS custom properties
  curriculum/page.tsx               Public course overview (no login required)
  faq/page.tsx                      Public FAQ
  pricing/page.tsx                  Pricing page + Stripe checkout
  tools/page.tsx                    AI Tools hub
  tools/write/page.tsx              "Write This For Me" tool
  tools/explain/page.tsx            "Explain This To Me" tool
  (auth)/login/page.tsx             Login form
  (auth)/signup/page.tsx            Signup form
  (protected)/dashboard/page.tsx    Course dashboard (auth-gated)
  (protected)/courses/[courseSlug]/ Course overview — hero + module grid
  (protected)/course/[moduleId]/    Full-screen course player
  api/auth/                         Auth routes (callback, signup, signout, verify, resend)
  api/stripe/                       Stripe checkout, portal, webhook
  api/tools/write/route.ts          Write tool API (auth + rate limiting)
  api/tools/explain/route.ts        Explain tool API (auth + rate limiting)
  api/subscribe/route.ts            Homepage email capture
  api/feedback/route.ts             End-of-module feedback form

lib/
  course-data/                      All course content as TypeScript (30 modules)
  course-data/courses.ts            Single source of truth for course metadata
  supabase/client.ts                Browser Supabase client
  supabase/server.ts                Server Supabase client (cookie-based)
  stripe.ts                         Stripe client (lazy init)
  resend.ts                         Resend client + fromAddress() helper

components/
  Navbar.tsx                        Auth-aware nav
  CoursePlayer.tsx                  Full-screen course player (lessons, slides, quiz, feedback)
  EmailSignup.tsx                   Email capture form (lazy-loaded)

content/blog/                       MDX blog posts
```

---

## Database Schema

Five Supabase tables (RLS enabled on all):

| Table | Purpose |
|---|---|
| `purchases` | Created by Stripe webhook — grants access to all courses |
| `course_progress` | Tracks current lesson/slide/completion per user per module |
| `tool_usage` | Tracks daily AI tool usage per user for rate limiting |
| `subscribers` | Homepage email opt-ins |
| `feedback` | End-of-module survey responses |

Full schema: `supabase-schema.sql`

---

## Getting Started

### Prerequisites
- Node.js 18+
- A Supabase project
- A Stripe account (test mode for local dev)
- A Resend account

### Setup

1. **Clone and install**
   ```bash
   git clone <repo-url>
   cd clearlyai
   npm install
   ```

2. **Environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   Fill in all values — see `.env.local.example` for the full list and `SETUP.md` for where to find each value.

3. **Database**
   Run `supabase-schema.sql` in your Supabase project's SQL Editor.

4. **Run locally**
   ```bash
   npm run dev
   ```
   App runs at `http://localhost:3000`.

---

## Environment Variables

| Variable | Source |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase → Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase → Settings → API |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe → Developers → API Keys |
| `STRIPE_SECRET_KEY` | Stripe → Developers → API Keys |
| `STRIPE_WEBHOOK_SECRET` | Stripe → Developers → Webhooks |
| `STRIPE_PRICE_ID_MONTHLY` | Stripe → Products ($15/mo) |
| `STRIPE_PRICE_ID_YEARLY` | Stripe → Products ($120/yr) |
| `STRIPE_PRICE_ID_FOREVER` | Stripe → Products ($299 one-time) |
| `NEXT_PUBLIC_SITE_URL` | `https://learnaiclearly.com` in production |
| `RESEND_API_KEY` | resend.com → API Keys |
| `RESEND_FROM_EMAIL` | Verified sending address |

---

## Deployment

Deployed on Vercel. Push to `main` triggers a production deploy automatically.

- Set all environment variables in the Vercel project dashboard
- Stripe webhook endpoint: `https://learnaiclearly.com/api/stripe/webhook`
- Supabase Auth redirect URL: `https://learnaiclearly.com/api/auth/callback`

For Stripe webhooks in local dev, use the Stripe CLI:
```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

---

## Adding Content

### New blog post
Add a `.mdx` file to `content/blog/` — it publishes automatically.

### New course module
1. Create a content file in `lib/course-data/` with the next available `moduleId` (next block starts at 31)
2. Add the module to the `COURSES` map in `app/(protected)/course/[moduleId]/page.tsx`
3. Update `lib/course-data/courses.ts` to include the new module

### New AI tool
1. Add a page under `app/tools/[tool-name]/`
2. Add an API route at `app/api/tools/[tool-name]/route.ts`
3. Wire in Supabase auth + rate limiting (follow the existing write/explain pattern)
4. Add the tool card to `app/tools/page.tsx`

---

## License

Private — all rights reserved. © Clearly, AI
