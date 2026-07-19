import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getCourseBySlug } from '@/lib/course-data/courses'

// Persona landing pages — the targeted front doors for outreach, social
// posts, and SEO. Static (SSG): no auth fetch, served from the CDN edge.

interface PersonaPage {
  slug: string
  emoji: string
  label: string
  metaTitle: string
  metaDescription: string
  headline: string
  headlineEm: string
  subhead: string
  pains: { icon: string; title: string; body: string }[]
  courseSlugs: string[]
  pathIntro: string
  tools: { href: string; icon: string; title: string; desc: string }[]
  faqs: { q: string; a: string }[]
  quote: string
}

const PERSONAS: PersonaPage[] = [
  {
    slug: 'professionals',
    emoji: '💼',
    label: 'For Working Professionals',
    metaTitle: 'AI for Working Professionals — Clearly, AI',
    metaDescription:
      'Plain-English AI courses for busy professionals. Clear your inbox faster, write reports in minutes, and stay relevant — no tech background needed.',
    headline: 'Work smarter this week —',
    headlineEm: 'not someday.',
    subhead:
      "You're good at your job. But the emails, reports, and meetings eat your week — and colleagues who use AI are getting hours back. This path gets you up to speed in plain English, a few minutes at a time.",
    pains: [
      { icon: '📥', title: 'Your inbox runs your day.', body: 'Drafting, replying, and summarizing email eats hours that should go to real work.' },
      { icon: '📝', title: 'Reports take all afternoon.', body: 'Turning rough notes into polished output is slow, repetitive, and always due yesterday.' },
      { icon: '😤', title: 'Everyone else seems to get it.', body: 'AI comes up in meetings. You nod along and quietly look it up later.' },
    ],
    courseSlugs: ['ai-at-work', 'better-prompts', 'ai-career-growth', 'getting-started-with-claude'],
    pathIntro:
      'Start with the free 10-minute course, then follow this order. Each course is ~3 hours of short lessons you can fit around a full-time job.',
    tools: [
      { href: '/tools/write', icon: '✍️', title: 'Write This For Me', desc: 'Follow-up emails, LinkedIn posts, status updates — drafted in seconds, in your tone.' },
      { href: '/tools/explain', icon: '🔍', title: 'Explain This To Me', desc: 'Paste a dense report, policy, or technical email and get the plain-English version.' },
    ],
    faqs: [
      {
        q: "I barely have time for lunch. How am I supposed to fit in a course?",
        a: 'Every lesson runs 8–12 minutes and ends with something you can use the same day. Most professionals do one lesson with their morning coffee. There\'s no schedule and no falling behind.',
      },
      {
        q: 'Will this actually help me at work, or is it theory?',
        a: 'No theory. The first module has you clearing real email faster in week one. Everything is built around the tasks that eat your week: inbox, meetings, reports, and repetitive busywork.',
      },
      {
        q: 'Do I need my company to approve anything?',
        a: 'No. Everything works with free AI accounts you set up yourself in two minutes. We also cover what\'s safe to paste into AI tools and what isn\'t — so you stay on the right side of company policy.',
      },
    ],
    quote: '"I just need someone to show me the practical stuff, not the theory."',
  },
  {
    slug: 'business-owners',
    emoji: '🏪',
    label: 'For Small Business Owners',
    metaTitle: 'AI for Small Business Owners — Clearly, AI',
    metaDescription:
      'Plain-English AI courses for small business owners. Handle marketing, customer emails, and proposals in a fraction of the time — no tech team needed.',
    headline: 'Do the work of three people —',
    headlineEm: 'without hiring them.',
    subhead:
      "You're the marketer, the customer service desk, and the admin department. AI can take a real chunk of that off your plate — and this path shows you exactly how, in plain English, with zero tech background.",
    pains: [
      { icon: '🎩', title: 'You wear every hat.', body: 'Marketing, reviews, proposals, invoices — it all lands on you, usually after hours.' },
      { icon: '📅', title: 'Marketing never gets done.', body: 'The social posts and newsletters that grow your business always lose to urgent work.' },
      { icon: '🏢', title: 'Big competitors have whole teams.', body: 'They have marketing departments. You have Sunday nights. AI levels that field.' },
    ],
    courseSlugs: ['ai-for-your-business', 'better-prompts', 'ai-at-work', 'claude-for-real-work'],
    pathIntro:
      'Start with the free 10-minute course, then follow this order. The first course alone covers customer emails, marketing content, and proposals.',
    tools: [
      { href: '/tools/write', icon: '✍️', title: 'Write This For Me', desc: 'Review responses, social posts, customer emails — written in your voice, in seconds.' },
      { href: '/tools/explain', icon: '🔍', title: 'Explain This To Me', desc: 'Contracts, vendor agreements, insurance letters — decoded into plain English.' },
    ],
    faqs: [
      {
        q: "I don't have time to learn a new system. How fast is this?",
        a: 'The free course takes 10 minutes and gives you ten things you can use today. The full business course is short lessons you can do between customers — and every one saves you more time than it takes.',
      },
      {
        q: 'Will AI content sound like a robot wrote it?',
        a: 'Not if you do it right — and "doing it right" is exactly what we teach. You\'ll learn how to give AI your voice so review responses and posts sound like you on your best day.',
      },
      {
        q: 'Is this going to require expensive software?',
        a: 'No. Everything in the courses works with free AI accounts. And the courses themselves are free too — all you need is a free Clearly, AI account.',
      },
    ],
    quote: '"I don\'t have time to figure this out on my own. Just show me what works."',
  },
  {
    slug: 'curious-learners',
    emoji: '🌱',
    label: 'For Curious Learners',
    metaTitle: 'AI for Beginners & Lifelong Learners — Clearly, AI',
    metaDescription:
      'A gentle, plain-English introduction to AI for curious adults. Understand what everyone is talking about and use AI in daily life — at your own pace, no tech background needed.',
    headline: 'Finally understand AI —',
    headlineEm: 'at your own pace.',
    subhead:
      "You keep hearing about AI on the news and from your family. You're curious, maybe a little skeptical, and tired of explanations written for 25-year-olds. We start at the very beginning, go gently, and nobody will make you feel silly for asking.",
    pains: [
      { icon: '📰', title: "It's everywhere, and it's confusing.", body: 'Every headline says AI is changing everything — but nobody explains what it actually is.' },
      { icon: '🤷', title: 'Tutorials talk down to you.', body: '"Even grandma can do it!" No thanks. You want a real explanation, not a pat on the head.' },
      { icon: '🔒', title: "You don't want to break anything.", body: 'Or get scammed. We cover exactly what\'s safe, what\'s private, and what to watch for.' },
    ],
    courseSlugs: ['ai-foundations', 'ai-richer-retirement', 'getting-started-with-claude'],
    pathIntro:
      'Start with the free 10-minute course, then follow this order. Go as slowly as you like — everything is self-paced and nothing expires.',
    tools: [
      { href: '/tools/explain', icon: '🔍', title: 'Explain This To Me', desc: 'Medical letters, insurance policies, legal fine print — explained in plain English.' },
      { href: '/tools/write', icon: '✍️', title: 'Write This For Me', desc: 'Thank-you notes, tricky emails, family newsletters — drafted for you to polish.' },
    ],
    faqs: [
      {
        q: "I'm 60+. Is this really for me?",
        a: "Yes, truly. Some of our most enthusiastic students are in their 60s and 70s. We pace things gently, use real-life examples — doctor visits, travel, family — and never rush you.",
      },
      {
        q: 'Do I need to install anything or buy a new computer?',
        a: 'No. If your computer or tablet can open a website, you\'re ready. We walk you through setting up a free AI account, click by click.',
      },
      {
        q: 'Is AI safe to use? I worry about scams.',
        a: 'A fair worry — and we take it seriously. The courses include exactly what\'s safe to share, what to keep private, and how to spot AI-powered scams before they spot you.',
      },
    ],
    quote: '"I just don\'t want to feel left out. Or break anything."',
  },
]

export const dynamicParams = false

export function generateStaticParams() {
  return PERSONAS.map(p => ({ persona: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ persona: string }> }): Promise<Metadata> {
  const { persona } = await params
  const page = PERSONAS.find(p => p.slug === persona)
  if (!page) return {}
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://learnaiclearly.com/for/${page.slug}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://learnaiclearly.com/for/${page.slug}`,
    },
  }
}

export default async function PersonaPage({ params }: { params: Promise<{ persona: string }> }) {
  const { persona } = await params
  const page = PERSONAS.find(p => p.slug === persona)
  if (!page) notFound()

  const courses = page.courseSlugs
    .map(getCourseBySlug)
    .filter((c): c is NonNullable<ReturnType<typeof getCourseBySlug>> => !!c)

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="section-pad" style={{ background: 'var(--bg)', textAlign: 'center' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'var(--accent-lt)', borderRadius: 999, padding: '6px 18px',
              fontSize: 12, fontWeight: 700, color: 'var(--accent-dk)',
              marginBottom: 28, letterSpacing: '0.08em', textTransform: 'uppercase',
            }}>
              <span style={{ fontSize: 14 }}>{page.emoji}</span>
              {page.label}
            </div>

            <h1 style={{
              fontFamily: 'var(--font-dm-serif), Georgia, serif',
              fontSize: 'clamp(38px, 5.5vw, 58px)',
              color: 'var(--ink)', lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.02em',
            }}>
              {page.headline}<br />
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>{page.headlineEm}</em>
            </h1>

            <p style={{
              fontSize: 18, color: 'var(--ink-mid)', lineHeight: 1.7,
              maxWidth: 600, margin: '0 auto 40px',
            }}>
              {page.subhead}
            </p>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/course/0" className="btn btn-primary" style={{ fontSize: 15, padding: '15px 32px', boxShadow: '0 4px 16px rgba(61,122,138,0.25)' }}>
                Start the Free Course
              </a>
              <a href="/tools" className="btn btn-ghost" style={{ fontSize: 15, padding: '15px 32px' }}>
                Try a Free AI Tool
              </a>
            </div>
            <p style={{ marginTop: 20, fontSize: 13, color: 'var(--ink-lt)' }}>
              No account needed to start · No credit card required
            </p>
          </div>
        </section>

        {/* ── Pains ── */}
        <section className="section-pad" style={{
          background: 'var(--bg-alt)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}>
          <div style={{ maxWidth: 1120, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 48px' }}>
              <div style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12,
              }}>
                Sound Familiar?
              </div>
              <h2 style={{
                fontFamily: 'var(--font-dm-serif), Georgia, serif',
                fontSize: 'clamp(28px, 3.5vw, 42px)', letterSpacing: '-0.02em', lineHeight: 1.2,
              }}>
                {page.quote.replace(/"/g, '')}
              </h2>
            </div>

            <div className="grid-3" style={{ gap: 24 }}>
              {page.pains.map(({ icon, title, body }) => (
                <div key={title} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 16,
                  background: 'var(--white)', borderRadius: 20, padding: '28px 24px',
                  border: '1px solid var(--border)',
                }}>
                  <div style={{
                    width: 40, height: 40, flexShrink: 0, borderRadius: 12,
                    background: 'var(--accent-lt)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', fontSize: 18,
                  }}>
                    {icon}
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontWeight: 600, fontSize: 15, marginBottom: 4, color: 'var(--ink)' }}>
                      {title}
                    </strong>
                    <span style={{ fontSize: 14, color: 'var(--ink-mid)', lineHeight: 1.55 }}>
                      {body}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Your path ── */}
        <section className="section-pad" style={{ background: 'var(--bg)' }}>
          <div style={{ maxWidth: 880, margin: '0 auto' }}>
            <div style={{ marginBottom: 40 }}>
              <div style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12,
              }}>
                Your Path
              </div>
              <h2 style={{
                fontFamily: 'var(--font-dm-serif), Georgia, serif',
                fontSize: 'clamp(28px, 3.5vw, 42px)', letterSpacing: '-0.02em',
                lineHeight: 1.2, marginBottom: 16,
              }}>
                Courses in the order <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>that makes sense for you.</em>
              </h2>
              <p style={{ fontSize: 17, color: 'var(--ink-mid)', lineHeight: 1.65, maxWidth: 560 }}>
                {page.pathIntro}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {courses.map((course, i) => (
                <div key={course.slug} className="card" style={{
                  padding: '26px 28px', display: 'flex', alignItems: 'flex-start',
                  gap: 20, flexWrap: 'wrap',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-dm-serif), Georgia, serif',
                    fontSize: 40, color: 'var(--accent-lt)', lineHeight: 1, flexShrink: 0, width: 48,
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{ flex: 1, minWidth: 240 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 22 }}>{course.icon}</span>
                      <span style={{
                        fontFamily: 'var(--font-dm-serif), Georgia, serif',
                        fontSize: 20, color: 'var(--ink)',
                      }}>
                        {course.title}
                      </span>
                      <span style={{
                        fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                        background: 'var(--accent-lt)', color: 'var(--accent-dk)',
                        padding: '3px 10px', borderRadius: 999,
                      }}>
                        {course.tag}
                      </span>
                    </div>
                    <p style={{ fontSize: 14, color: 'var(--ink-mid)', lineHeight: 1.6, marginBottom: 8 }}>
                      {course.subtitle} {course.description.split('. ')[0]}.
                    </p>
                    <span style={{ fontSize: 13, color: 'var(--ink-lt)' }}>
                      {course.totalLessons} lessons · {course.estimatedTime}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ marginTop: 20, fontSize: 14, color: 'var(--ink-mid)' }}>
              One free account unlocks all eight courses — this path and every other.{' '}
              <Link href="/curriculum" style={{ color: 'var(--accent)', fontWeight: 600 }}>See the full curriculum →</Link>
            </p>
          </div>
        </section>

        {/* ── Tools ── */}
        <section className="section-pad" style={{
          background: 'var(--bg-alt)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}>
          <div style={{ maxWidth: 880, margin: '0 auto' }}>
            <div style={{ marginBottom: 40 }}>
              <div style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12,
              }}>
                Free Tools
              </div>
              <h2 style={{
                fontFamily: 'var(--font-dm-serif), Georgia, serif',
                fontSize: 'clamp(28px, 3.5vw, 42px)', letterSpacing: '-0.02em',
                lineHeight: 1.2, marginBottom: 16,
              }}>
                Too busy for a course today? <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Use these right now.</em>
              </h2>
            </div>

            <div className="grid-2" style={{ gap: 20 }}>
              {page.tools.map(tool => (
                <a key={tool.href} href={tool.href} style={{ textDecoration: 'none' }}>
                  <div className="card card-hover" style={{
                    padding: '28px 26px', height: '100%',
                    display: 'flex', flexDirection: 'column', gap: 12,
                  }}>
                    <span style={{ fontSize: 32, lineHeight: 1 }}>{tool.icon}</span>
                    <div style={{ fontFamily: 'var(--font-dm-serif), Georgia, serif', fontSize: 21, color: 'var(--ink)', lineHeight: 1.2 }}>
                      {tool.title}
                    </div>
                    <p style={{ fontSize: 14, color: 'var(--ink-mid)', lineHeight: 1.6, flexGrow: 1 }}>
                      {tool.desc}
                    </p>
                    <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--accent)' }}>
                      Try it free →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section-pad" style={{ background: 'var(--bg)' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <div style={{ marginBottom: 36 }}>
              <div style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12,
              }}>
                Fair Questions
              </div>
              <h2 style={{
                fontFamily: 'var(--font-dm-serif), Georgia, serif',
                fontSize: 'clamp(26px, 3vw, 36px)', letterSpacing: '-0.02em', lineHeight: 1.2,
              }}>
                What you&apos;re probably wondering.
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {page.faqs.map(({ q, a }) => (
                <div key={q} style={{ borderBottom: '1px solid var(--border)', padding: '22px 0' }}>
                  <p style={{ fontWeight: 600, fontSize: 16, marginBottom: 10, color: 'var(--ink)' }}>{q}</p>
                  <p style={{ fontSize: 15, color: 'var(--ink-mid)', lineHeight: 1.6 }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="section-pad" style={{ background: 'var(--ink)', textAlign: 'center' }}>
          <div style={{ maxWidth: 620, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'var(--font-dm-serif), Georgia, serif',
              fontSize: 'clamp(28px, 4vw, 42px)', color: 'white',
              lineHeight: 1.15, marginBottom: 16, letterSpacing: '-0.02em',
            }}>
              Start free. <em style={{ color: 'var(--accent-lt)', fontStyle: 'italic' }}>Ten minutes from now, you&apos;ll get it.</em>
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, marginBottom: 32 }}>
              The free course covers ten things you can do with AI today — no account, no credit card. And the full path above? Also free — just create an account.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="/course/0" className="btn btn-primary" style={{ fontSize: 16, padding: '16px 40px' }}>
                Start the Free Course
              </a>
              <a href="/signup" style={{
                fontSize: 15, fontWeight: 600, color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
              }}>
                Create a free account →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
