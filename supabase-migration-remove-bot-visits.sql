-- Remove bot-visit tracking (2026-07-22).
-- The bot_visits table logged AI crawlers / search bots hitting the site via
-- proxy.ts. That tracking has been removed from the app, so drop the table.
-- Run once in the Supabase SQL Editor.

drop table if exists bot_visits;
