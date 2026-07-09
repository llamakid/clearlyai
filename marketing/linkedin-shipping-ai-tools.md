# LinkedIn Post — "Shipping an AI Feature to Real Users"

**Goal:** Thought-leadership positioning (AI Implementation Engineer angle) + soft traffic to /tools.
**Drafted:** 2026-07-06. Sequel to the AEO post — practitioner/build-in-public angle, no em dashes.
**Saved topic for later:** AEO deep-dive ("what I learned building an AI search audit engine").

---

**The AI part of my product took about a day to build.**

It's everything around the AI that nobody warns you about.

I run Clearly, AI, an online school that teaches non-technical adults how to use AI. A while back I added free AI-powered tools to the site: one that writes emails and posts for you, one that explains confusing things in plain English. Anyone can try them, no account needed.

Getting Claude to write a good email? Easy. That was the day.

Here's what the real work turned out to be:

**1. Picking the cheapest model that does the job, not the best one.**
Everyone wants to use the most powerful model. But drafting a short email doesn't need a frontier model. It needs a fast, inexpensive one. I used a small model, and each use costs a fraction of a cent. That single decision is the reason I can afford to give the tools away for free. Model selection is a budgeting decision disguised as a technical one.

**2. Deciding how much free is free.**
Free tools attract two kinds of people: future customers and people who will happily burn your API budget all day. Logged-out visitors get 2 uses per tool per day, free accounts get 5. And it's enforced two ways at once: a cookie (fast, but clearable) and a hashed IP address (survives the cookie being cleared, without storing anyone's actual IP). Neither is perfect alone. Together they're good enough, and "good enough" is the actual goal.

**3. Making sure the AI part can fail without taking the product down.**
If my usage-tracking database hiccups, should a visitor see an error? No. The tool should just work and skip the logging. Every non-essential step in the flow is allowed to fail silently. Deciding what's allowed to break is a design decision most demos never have to make.

**4. Constraining the AI so non-technical people trust it.**
My users aren't prompt engineers. If they ask for an email and get three paragraphs of "Certainly! Here's a draft…" first, they lose confidence. So the AI is instructed: return only the email, subject line on the first line, no explanations. Boring, precise instructions. That's the difference between a demo and something a stranger will actually use.

None of this is glamorous. All of it is the job.

The gap between "I got the AI to do a thing" and "strangers can rely on this every day" is where AI actually becomes useful. It's also the part I find most interesting to build.

(The tools are free to try at learnaiclearly.com/tools, no account needed.)
