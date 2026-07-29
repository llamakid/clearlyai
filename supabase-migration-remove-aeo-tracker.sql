-- Run this in the Supabase SQL Editor once the standalone AEO / AI Visibility
-- Tracker product is live and you're ready to drop the tables from Clearly, AI.
-- This is destructive — it deletes any tracked sites and score history.

drop table if exists visibility_snapshots;
drop table if exists tracked_sites;

-- Optional cleanup: if no other tool uses the 'audit' key in tool_usage /
-- anon_tool_usage, you can also delete those rows (the tables themselves are
-- still used by the Write and Explain tools, so don't drop the tables):
-- delete from tool_usage where tool = 'audit';
-- delete from anon_tool_usage where tool = 'audit';
