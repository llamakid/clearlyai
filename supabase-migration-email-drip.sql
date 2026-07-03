-- ──────────────────────────────────────────────────────────
-- Migration: email drip system (July 2026)
-- Run once in: Supabase dashboard → SQL Editor → New query
-- (Also merged into supabase-schema.sql for fresh installs.)
-- ──────────────────────────────────────────────────────────

-- Track where each subscriber came from + opt-out state
alter table subscribers add column if not exists source text;
alter table subscribers add column if not exists unsubscribed boolean not null default false;

-- email_sends: one row per drip email delivered, so the daily cron
-- knows each subscriber's position in the sequence. The unique
-- constraint makes every step at-most-once per subscriber.
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
