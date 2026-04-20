# Clearly, AI — App Setup Guide

## What This Is

A Next.js web app that turns the Clearly, AI HTML course into a real paid product.
Auth: Supabase · Payments: Stripe · Hosting: Vercel

---

## Step 1 — Install & run locally

```bash
npm install
cp .env.local.example .env.local
# Fill in .env.local with real values (see steps below)
npm run dev
# → http://localhost:3000
```

---

## Step 2 — Set up Supabase

1. Go to [supabase.com](https://supabase.com) → New project
2. Once created: **Settings → API** → copy:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon / public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY` (keep secret — server only)
3. **SQL Editor → New query** → paste the contents of `supabase-schema.sql` → Run
4. **Authentication → Email** — enable "Confirm email" (on by default)

---

## Step 3 — Set up Stripe

1. Go to [dashboard.stripe.com](https://dashboard.stripe.com)
2. **Developers → API Keys** → copy:
   - Publishable key → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - Secret key → `STRIPE_SECRET_KEY`
3. Create a product:
   - **Products → Add product** → "Clearly, AI Course"
   - Price: $97.00, one-time
   - Copy the **Price ID** (starts with `price_`) → `STRIPE_PRICE_ID`
4. Set up the webhook (for local dev):
   ```bash
   # Install Stripe CLI: https://stripe.com/docs/stripe-cli
   stripe listen --forward-to localhost:3000/api/stripe/webhook
   # Copy the webhook signing secret → STRIPE_WEBHOOK_SECRET
   ```
5. For production webhook:
   - Stripe Dashboard → **Developers → Webhooks → Add endpoint**
   - URL: `https://yourdomain.com/api/stripe/webhook`
   - Event: `checkout.session.completed`
   - Copy the signing secret → `STRIPE_WEBHOOK_SECRET`

---

## Step 4 — Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
   (or: `npm i -g vercel && vercel` from this folder)
2. Add all environment variables from `.env.local.example` in **Settings → Environment Variables**
3. Deploy → get your URL
4. Connect `learnaiclearly.com`:
   - Vercel → Project → **Settings → Domains** → Add domain
   - Follow DNS instructions (add CNAME record at your registrar)

---

## File Map

```
app/
  page.tsx                    Landing page
  (auth)/login/page.tsx       Login form
  (auth)/signup/page.tsx      Signup form
  (protected)/layout.tsx      Auth + purchase gate (server-side)
  (protected)/dashboard/      Course dashboard
  (protected)/course/[id]/    Individual course page
  blog/page.tsx               Blog index
  blog/[slug]/page.tsx        Blog post (MDX)
  api/stripe/checkout/        Creates Stripe Checkout session
  api/stripe/webhook/         Receives payment confirmation → grants access
  api/auth/callback/          Handles Supabase email confirmation

lib/
  supabase/client.ts          Browser Supabase client
  supabase/server.ts          Server Supabase client
  stripe.ts                   Stripe client (lazy)
  blog.ts                     Reads MDX blog posts from /content/blog

components/
  Navbar.tsx                  Site-wide nav (auth-aware)
  Footer.tsx                  Site-wide footer

content/blog/
  *.mdx                       Blog posts — add new ones here

middleware.ts                 Route protection (runs on every request)
supabase-schema.sql           Run once in Supabase SQL editor
```

---

## Adding a Blog Post

Create a new file in `content/blog/your-post-slug.mdx`:

```mdx
---
title: "Your Post Title"
date: "2026-04-15"
excerpt: "One sentence summary shown on the blog index."
tag: "Beginner"
readTime: "6 min read"
---

Your post content here. Standard markdown works.

## Section heading

Paragraph text...
```

That's it — it appears automatically on `/blog`.

---

## How Access Control Works

```
User visits /dashboard or /course/[id]
  → middleware checks Supabase session
  → no session → redirect /login
  → session found → (protected)/layout.tsx runs
  → queries purchases table for user_id
  → no purchase found → redirect /pricing
  → purchase found → page renders
```

Payment flow:
```
User clicks "Get access" on /pricing
  → if not logged in: → /signup → then back to /pricing
  → POST /api/stripe/checkout → Stripe Checkout session created
  → user pays on Stripe's hosted page
  → Stripe sends webhook to /api/stripe/webhook
  → webhook writes row to purchases table
  → user redirected to /dashboard?welcome=1
```
