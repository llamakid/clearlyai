-- ──────────────────────────────────────────────────────────
-- Clearly, AI — Supabase Database Schema
-- Run this in: Supabase dashboard → SQL Editor → New query
-- ──────────────────────────────────────────────────────────

-- purchases: created by the Stripe webhook when payment succeeds.
-- Supports one-time (forever) and recurring (monthly/yearly) plans.
create table if not exists purchases (
  id                      uuid primary key default gen_random_uuid(),
  user_id                 uuid not null references auth.users(id) on delete cascade,
  stripe_session_id       text unique,
  stripe_customer_id      text,
  stripe_subscription_id  text unique,
  plan_type               text not null default 'forever'
                            check (plan_type in ('monthly', 'yearly', 'forever')),
  subscription_status     text,  -- 'active', 'past_due', 'canceled', etc. null for forever
  amount_paid             integer,     -- in cents (e.g. 4900 = $49.00)
  currency                text default 'usd',
  purchased_at            timestamptz not null default now()
);

-- course_progress: tracks which slide the user is on per module
create table if not exists course_progress (
  id              uuid primary key default gen_random_uuid(),
  user_id         uuid not null references auth.users(id) on delete cascade,
  module_id       integer not null check (module_id >= 0),
  current_lesson  integer not null default 0,
  current_slide   integer not null default 0,
  completed       boolean not null default false,
  updated_at      timestamptz not null default now(),
  unique (user_id, module_id)
);

-- ── Row-Level Security ─────────────────────────────────────
-- Users can only read/write their own rows. Period.

alter table purchases enable row level security;
alter table course_progress enable row level security;

-- purchases: users can only see their own purchase record
create policy "users can read own purchases"
  on purchases for select
  using (auth.uid() = user_id);

-- purchases: the service role (webhook) bypasses RLS entirely — no policy needed.
-- Do NOT add insert/update policies here; with check (true) would allow any
-- authenticated user to write purchase rows via the anon key.

-- course_progress: users can read their own progress
create policy "users can read own progress"
  on course_progress for select
  using (auth.uid() = user_id);

-- course_progress: users can upsert their own progress
create policy "users can upsert own progress"
  on course_progress for insert
  with check (auth.uid() = user_id);

create policy "users can update own progress"
  on course_progress for update
  using (auth.uid() = user_id);

-- subscribers: homepage email opt-in (no auth required)
create table if not exists subscribers (
  id            uuid primary key default gen_random_uuid(),
  email         text not null unique,
  first_name    text,  -- optional; forms never require it
  source        text,  -- 'starter-kit', 'free-course', 'newsletter', or null (legacy)
  unsubscribed  boolean not null default false,
  subscribed_at timestamptz not null default now()
);

alter table subscribers enable row level security;

-- Nobody can read subscribers via client — export via Supabase dashboard or service role
create policy "no public read on subscribers"
  on subscribers for select
  using (false);

-- Anyone can insert (the homepage form uses service role key via API route)
create policy "service role can insert subscribers"
  on subscribers for insert
  with check (true);

-- feedback: end-of-module survey responses
create table if not exists feedback (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid references auth.users(id) on delete set null,
  module_id     integer not null check (module_id between 0 and 6),
  stars         integer check (stars between 1 and 5),
  recommend     text check (recommend in ('yes', 'maybe', 'no')),
  helpful       text,
  confusing     text,
  change        text,
  testimonial   text,
  name          text,
  email         text,
  submitted_at  timestamptz not null default now()
);

alter table feedback enable row level security;

-- Only the service role (API route) can insert feedback
create policy "service role can insert feedback"
  on feedback for insert
  with check (true);

-- Nobody can read feedback via client — review in Supabase dashboard
create policy "no public read on feedback"
  on feedback for select
  using (false);

-- ── Indexes ────────────────────────────────────────────────
create index if not exists purchases_user_id_idx on purchases(user_id);
create index if not exists purchases_subscription_id_idx on purchases(stripe_subscription_id);
create index if not exists progress_user_module_idx on course_progress(user_id, module_id);
create index if not exists feedback_module_id_idx on feedback(module_id);
create index if not exists feedback_submitted_at_idx on feedback(submitted_at desc);

-- ── email_sends: drip email delivery log ───────────────────
-- One row per drip email delivered; the daily cron (/api/cron/drip)
-- uses it to find each subscriber's position in the sequence. The
-- unique constraint makes every step at-most-once per subscriber.
create table if not exists email_sends (
  id        uuid primary key default gen_random_uuid(),
  email     text not null,
  sequence  text not null,
  step      integer not null,
  sent_at   timestamptz not null default now(),
  unique (email, sequence, step)
);

alter table email_sends enable row level security;

-- Service role only — no client access
create policy "no public access on email_sends"
  on email_sends for all
  using (false);

create index if not exists email_sends_email_idx on email_sends(email);

-- ── anon_tool_usage: daily AI tool usage for logged-out visitors ──
-- Keyed by a SHA-256 hash of the visitor's IP (never the raw IP).
-- Written only via the service role from the tool API routes.
create table if not exists anon_tool_usage (
  ip_hash text not null,
  tool    text not null,
  date    date not null,
  count   integer not null default 0,
  primary key (ip_hash, tool, date)
);

alter table anon_tool_usage enable row level security;

-- No client access at all — service role bypasses RLS
create policy "no public access on anon_tool_usage"
  on anon_tool_usage for all
  using (false);

-- ── AI Visibility Tracker: recurring AEO audit, a perk of any paid plan ──
-- tracked_sites: which URL each subscriber wants monitored (MVP: one per user)
create table if not exists tracked_sites (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  url         text not null,
  created_at  timestamptz not null default now(),
  unique (user_id, url)
);

alter table tracked_sites enable row level security;

create policy "users can read own tracked sites"
  on tracked_sites for select
  using (auth.uid() = user_id);

create policy "users can insert own tracked sites"
  on tracked_sites for insert
  with check (auth.uid() = user_id);

create policy "users can delete own tracked sites"
  on tracked_sites for delete
  using (auth.uid() = user_id);

-- visibility_snapshots: one row per crawl (initial + weekly cron), keeps score
-- history for the trend view. Service-role only — read via the tracker page
-- after confirming the requesting user owns the parent tracked_site.
create table if not exists visibility_snapshots (
  id               uuid primary key default gen_random_uuid(),
  tracked_site_id  uuid not null references tracked_sites(id) on delete cascade,
  score            integer not null,
  max_score        integer not null default 100,
  report           jsonb not null,
  crawled_at       timestamptz not null default now()
);

alter table visibility_snapshots enable row level security;

create policy "no public access on visibility_snapshots"
  on visibility_snapshots for all
  using (false);

create index if not exists visibility_snapshots_site_idx on visibility_snapshots(tracked_site_id, crawled_at desc);
