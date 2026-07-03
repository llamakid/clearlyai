import { createHmac, timingSafeEqual } from 'crypto'

// ── Nurture drip sequence ──────────────────────────────────
// One sequence for all subscribers (starter-kit downloads, newsletter,
// free-course completions). Steps are spaced by days-since-previous-step,
// not days-since-signup, so older subscribers get the full sequence too
// (one email at a time) instead of a day-one pile-up.

export interface DripStep {
  step: number
  daysAfterPrev: number // 0 for step 1 (sent on first eligible run)
  subject: string
  html: (opts: { siteUrl: string; unsubUrl: string }) => string
}

function wrap(body: string, unsubUrl: string): string {
  return `
    <div style="font-family:Inter,Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;color:#1c2b35;">
      ${body}
      <p style="font-size:14px;color:#666;line-height:1.6;margin-top:28px;">
        — Nate<br />
        <span style="color:#999;">Founder, Clearly, AI</span>
      </p>
      <hr style="border:none;border-top:1px solid #e5e2da;margin:28px 0 16px;" />
      <p style="font-size:12px;color:#999;line-height:1.5;">
        You're getting this because you created an account or signed up at learnaiclearly.com.
        <a href="${unsubUrl}" style="color:#999;">Unsubscribe</a> any time — no hard feelings.
      </p>
    </div>
  `
}

const h1 = (text: string) =>
  `<h1 style="font-family:'DM Serif Display',Georgia,serif;color:#3d7a8a;font-size:26px;margin-bottom:8px;">${text}</h1>`

const p = (text: string) =>
  `<p style="font-size:16px;line-height:1.65;">${text}</p>`

const btn = (href: string, label: string) =>
  `<p style="margin:24px 0;">
    <a href="${href}" style="background:#3d7a8a;color:#ffffff;text-decoration:none;padding:13px 28px;border-radius:10px;font-size:15px;font-weight:700;display:inline-block;">${label}</a>
  </p>`

const promptBox = (text: string) =>
  `<div style="background:#f5f3ee;border:1px solid #e5e2da;border-radius:12px;padding:16px 20px;font-size:14px;line-height:1.6;color:#1c2b35;margin:20px 0;">${text}</div>`

export const NURTURE_SEQUENCE: DripStep[] = [
  {
    step: 1,
    daysAfterPrev: 0,
    subject: 'Your first 10 minutes with AI (free course inside)',
    html: ({ siteUrl, unsubUrl }) =>
      wrap(
        `
        ${h1('Ten things you can do with AI today.')}
        ${p(`Hi — Nate here, from Clearly, AI. You signed up on the site a while back — maybe for the starter kit, maybe an account — so I wanted to point you to the single most useful thing we have: the free course.`)}
        ${p(`It's called <strong>"10 Things You Can Do With AI Today."</strong> Two short lessons, ten practical tasks — each with a prompt you can copy and use immediately. No account needed, no credit card, about 10 minutes.`)}
        ${btn(`${siteUrl}/course/0`, 'Start the free course')}
        ${p(`Most people tell me one of the ten sticks with them the same day. I'd love to hear which one it is for you — just hit reply.`)}
      `,
        unsubUrl
      ),
  },
  {
    step: 2,
    daysAfterPrev: 3,
    subject: 'Try this: paste any confusing document into AI',
    html: ({ siteUrl, unsubUrl }) =>
      wrap(
        `
        ${h1('The trick everyone wishes they knew sooner.')}
        ${p(`Of everything I teach, this is the one people email me about: AI is remarkably good at translating confusing documents into plain English. Insurance letters, contract clauses, medical reports, HOA rules.`)}
        ${p(`Copy this prompt, paste in your confusing paragraph, and see for yourself:`)}
        ${promptBox(`Here's a paragraph from a document I received: [paste the text]. What does this actually mean in plain English? What should I know or watch out for?`)}
        ${p(`Don't want to deal with prompts at all? We built a free tool that does it for you — paste the text, get the plain-English version:`)}
        ${btn(`${siteUrl}/tools/explain`, 'Try "Explain This To Me" free')}
        ${p(`(For anything legal or medical, use it to understand — then confirm with a professional.)`)}
      `,
        unsubUrl
      ),
  },
  {
    step: 3,
    daysAfterPrev: 4,
    subject: 'What the full Clearly, AI curriculum actually covers',
    html: ({ siteUrl, unsubUrl }) =>
      wrap(
        `
        ${h1('Eight courses. Zero jargon.')}
        ${p(`A few people have asked what's beyond the free course, so here's the honest tour. Clearly, AI has eight full courses — 240 short lessons — all in plain English, all self-paced:`)}
        ${p(`
          🧠 <strong>AI Foundations</strong> — start from zero, build real confidence<br />
          ⚡ <strong>AI at Work</strong> — emails, reports, meetings, in half the time<br />
          🏪 <strong>AI for Your Business</strong> — marketing, reviews, proposals<br />
          🎯 <strong>Better Prompts, Better Results</strong> — get dramatically better answers<br />
          🌅 <strong>AI for a Richer Retirement</strong> — travel, health, hobbies, money<br />
          🚀 <strong>AI for Career Growth</strong> — resumes, interviews, staying relevant<br />
          💬 <strong>Two Claude courses</strong> — master one tool, beginner to advanced
        `)}
        ${p(`One subscription unlocks everything, including every course we add later. Lessons run 8–12 minutes, and every one ends with something you can use the same day.`)}
        ${btn(`${siteUrl}/curriculum`, 'Browse the full curriculum')}
      `,
        unsubUrl
      ),
  },
  {
    step: 4,
    daysAfterPrev: 5,
    subject: 'A quick note from me (and a question)',
    html: ({ siteUrl, unsubUrl }) =>
      wrap(
        `
        ${h1('Can I ask you something?')}
        ${p(`I built Clearly, AI for people who keep hearing about AI and want a straight answer — not hype, not jargon, just "here's what to do."`)}
        ${p(`So here's my question, and I read every reply: <strong>what's the one thing you wish AI could take off your plate?</strong> An email you dread writing, a task that eats your week, a document you can't decipher. Hit reply and tell me — I'll point you to the exact lesson or prompt that handles it, free, no strings.`)}
        ${p(`And if you're ready to go all in: the whole school is $15/month, $120/year, or $299 once for lifetime access. Cancel any time, no contracts.`)}
        ${btn(`${siteUrl}/pricing`, 'See the plans')}
        ${p(`Either way — thanks for being here. It genuinely means a lot.`)}
      `,
        unsubUrl
      ),
  },
]

// ── Unsubscribe tokens ─────────────────────────────────────
// HMAC of the email keeps unsubscribe links unguessable without
// storing per-subscriber tokens. Keyed off the service role key —
// server-only and stable.

function secret(): string {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!key) throw new Error('SUPABASE_SERVICE_ROLE_KEY is not set')
  return key
}

export function unsubscribeToken(email: string): string {
  return createHmac('sha256', secret())
    .update(`unsubscribe:${email.trim().toLowerCase()}`)
    .digest('hex')
    .slice(0, 32)
}

export function verifyUnsubscribeToken(email: string, token: string): boolean {
  const expected = Buffer.from(unsubscribeToken(email))
  const given = Buffer.from(token)
  return expected.length === given.length && timingSafeEqual(expected, given)
}

export function unsubscribeUrl(email: string): string {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://learnaiclearly.com'
  return `${siteUrl}/api/unsubscribe?email=${encodeURIComponent(email)}&token=${unsubscribeToken(email)}`
}
