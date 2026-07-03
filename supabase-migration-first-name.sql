-- Migration: add optional first_name to subscribers
-- Run this in the Supabase SQL Editor.

alter table subscribers add column if not exists first_name text;
