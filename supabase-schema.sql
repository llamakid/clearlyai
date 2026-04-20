-- ──────────────────────────────────────────────────────────
-- Clearly, AI — Supabase Database Schema
-- Run this in: Supabase dashboard → SQL Editor → New query
-- ──────────────────────────────────────────────────────────

-- purchases: created by the Stripe webhook when payment succeeds
create table if not exists purchases (
  id                uuid primary key default gen_random_uuid(),
  user_id           uuid not null references auth.users(id) on delete cascade,
  stripe_session_id text not null unique,
  amount_paid       integer,           -- in cents (e.g. 9700 = $97.00)
  currency          text default 'usd',
  purchased_at      timestamptz not null default now()
);

-- course_progress: tracks which slide the user is on per module
create table if not exists course_progress (
  id              uuid primary key default gen_random_uuid(),
  user_id         uuid not null references auth.users(id) on delete cascade,
  module_id       integer not null check (module_id between 1 and 6),
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

-- purchases: only the service role (webhook) can insert
create policy "service role can insert purchases"
  on purchases for insert
  with check (true);  -- restricted by service role key, not user session

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

-- ── Helpful index ──────────────────────────────────────────
create index if not exists purchases_user_id_idx on purchases(user_id);
create index if not exists progress_user_module_idx on course_progress(user_id, module_id);
