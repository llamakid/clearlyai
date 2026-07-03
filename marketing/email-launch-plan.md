# Email Launch Plan — July 2026

The audience is small (~17 confirmed users + a couple of subscribers), so the
order matters: personal touch first, automation second, newsletter third.
Personal email + automated email from the same "Nate" in the same 24 hours
reads as spam — space them.

## Day 1–2 (Wed–Thu, Jul 2–3) — Personal emails, first half
- Send 8–9 personal emails from your own inbox (`first-outreach.md` §1),
  edited per person. One at a time, no BCC.
- Send the dedicated email to your course completer (§2) — testimonial ask.
- Deploy this branch now (safe: drip won't run until CRON_SECRET is set).

## Day 3–4 (Fri–Sat) — Personal emails, second half
- Send the remaining 8–9 personal emails.
- Reply same-day to anyone who writes back. Keep a running note of what they
  say — verbatim phrases become marketing copy and course/tool decisions.

## Day 5 (Sun–Mon, Jul 6–7) — Activate the drip
- Run `supabase-migration-email-drip.sql` in the Supabase SQL Editor.
- Add `CRON_SECRET` in Vercel env vars, redeploy.
- Test: `curl -H "Authorization: Bearer $CRON_SECRET" https://learnaiclearly.com/api/cron/drip`
  → expect `{"sent": ~15, "failed": 0, "audience": ~17}`.
- Anyone who replied to your personal email is fine to leave in the drip —
  by day 5 the sequence reads as a follow-up, not a double-tap.

## Day 5 onward — Drip runs itself
- Step 1 lands day 5, step 2 ~day 8, step 3 ~day 12, step 4 ~day 17.
- Your only job: answer replies (step 4 explicitly asks a question).
- New signups from posts/tools enter the sequence automatically.

## ~Jul 13–14 — Newsletter #1
- Drip steps 1–2 have landed and spaced out; send Issue #1 (`week-01.md`).
- First send: Resend dashboard broadcast (export subscriber list), or ask
  Claude to build the send endpoint. Weekly cadence after that.

## In parallel, unchanged
- Mon Jul 7: LinkedIn post (`week-01.md`), Thu: Facebook post.
- Following Monday: `/weekly-marketing` for week 2.

## What "working" looks like (check ~Jul 20)
- Personal emails: 4+ replies (a 25% reply rate on 17 warm users is realistic)
- Drip: <2 unsubscribes, any replies at all to step 4
- First testimonial secured from the completer
- Any free-course restarts/completions from the nudges
If replies are zero across the board, the list is colder than we think —
that's a signal to shift all effort to new traffic (posts, workshop pitch),
not to write more emails.
