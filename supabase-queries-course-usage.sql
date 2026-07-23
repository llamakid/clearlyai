-- ─────────────────────────────────────────────────────────────
-- Course-usage readout — paste into the Supabase SQL Editor.
-- (2026-07-22) Now that everything is free, these show which courses
-- people actually use, so you can see what users want/like.
--
-- Data source: course_progress. One row per (user, module). A row is
-- written when a signed-in user completes a lesson, and it stores their
-- furthest position + whether they finished the module. So:
--   • "users_active"  = signed-in people who engaged with that course/module
--   • "completed"     = finished the whole module
-- Course 0 (free starter) is included for signed-in takers; anonymous
-- (logged-out) starter takers are NOT captured — they have no user id.
--
-- Run any query block below on its own.
-- ─────────────────────────────────────────────────────────────

-- Shared map: module_id -> course label. Covers every module (0–48),
-- so courses with zero usage still show up (that's useful signal too).
-- This CTE is repeated in each query block so you can run blocks alone.


-- ═══ QUERY 1 — Per-course summary (start here) ═══════════════
with course_map as (
  select gs.module_id,
    case
      when gs.module_id = 0                    then '0 · Free Starter'
      when gs.module_id between 1  and 6        then '1 · AI Foundations'
      when gs.module_id between 7  and 12       then '2 · AI at Work'
      when gs.module_id between 13 and 18       then '3 · AI for Your Business'
      when gs.module_id between 19 and 24       then '4 · AI for a Richer Retirement'
      when gs.module_id between 25 and 30       then '5 · Better Prompts, Better Results'
      when gs.module_id between 31 and 36       then '6 · AI for Career Growth'
      when gs.module_id between 37 and 42       then '7 · Getting Started with Claude'
      when gs.module_id between 43 and 48       then '8 · Claude for Real Work'
      else 'Unknown'
    end as course
  from generate_series(0, 48) as gs(module_id)
),
courses as (select distinct course from course_map)
select
  c.course,
  count(distinct cp.user_id)                       as users_active,
  count(cp.id)                                     as module_engagements,
  count(cp.id) filter (where cp.completed)         as modules_completed,
  max(cp.updated_at)                               as last_activity
from courses c
left join course_map cm  on cm.course = c.course
left join course_progress cp on cp.module_id = cm.module_id
group by c.course
order by users_active desc, last_activity desc nulls last;


-- ═══ QUERY 2 — Per-module detail (where people drop off) ═════
with course_map as (
  select gs.module_id,
    case
      when gs.module_id = 0                    then '0 · Free Starter'
      when gs.module_id between 1  and 6        then '1 · AI Foundations'
      when gs.module_id between 7  and 12       then '2 · AI at Work'
      when gs.module_id between 13 and 18       then '3 · AI for Your Business'
      when gs.module_id between 19 and 24       then '4 · AI for a Richer Retirement'
      when gs.module_id between 25 and 30       then '5 · Better Prompts, Better Results'
      when gs.module_id between 31 and 36       then '6 · AI for Career Growth'
      when gs.module_id between 37 and 42       then '7 · Getting Started with Claude'
      when gs.module_id between 43 and 48       then '8 · Claude for Real Work'
      else 'Unknown'
    end as course
  from generate_series(0, 48) as gs(module_id)
)
select
  cm.course,
  cp.module_id,
  count(distinct cp.user_id)                       as users_active,
  count(cp.id) filter (where cp.completed)         as completed,
  max(cp.updated_at)                               as last_activity
from course_progress cp
join course_map cm on cm.module_id = cp.module_id
group by cm.course, cp.module_id
order by cp.module_id;


-- ═══ QUERY 3 — Recent activity (last 30 days) ═══════════════
with course_map as (
  select gs.module_id,
    case
      when gs.module_id = 0                    then '0 · Free Starter'
      when gs.module_id between 1  and 6        then '1 · AI Foundations'
      when gs.module_id between 7  and 12       then '2 · AI at Work'
      when gs.module_id between 13 and 18       then '3 · AI for Your Business'
      when gs.module_id between 19 and 24       then '4 · AI for a Richer Retirement'
      when gs.module_id between 25 and 30       then '5 · Better Prompts, Better Results'
      when gs.module_id between 31 and 36       then '6 · AI for Career Growth'
      when gs.module_id between 37 and 42       then '7 · Getting Started with Claude'
      when gs.module_id between 43 and 48       then '8 · Claude for Real Work'
      else 'Unknown'
    end as course
  from generate_series(0, 48) as gs(module_id)
)
select
  cm.course,
  cp.module_id,
  cp.user_id,
  cp.current_lesson,
  cp.completed,
  cp.updated_at
from course_progress cp
join course_map cm on cm.module_id = cp.module_id
where cp.updated_at >= now() - interval '30 days'
order by cp.updated_at desc;
