import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'

const EmailSignup = dynamic(() => import('@/components/EmailSignup'))

export const metadata: Metadata = {
  title: 'Clearly, AI — AI School for Non-Technical Adults',
  description: 'A plain-English AI school for working professionals, small business owners, and curious learners. No jargon, no tech background needed. Start the free course today.',
  openGraph: {
    title: 'Clearly, AI — AI School for Non-Technical Adults',
    description: 'A plain-English AI school for working professionals, small business owners, and curious learners. No jargon, no tech background needed.',
    url: 'https://learnaiclearly.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clearly, AI — AI School for Non-Technical Adults',
    description: 'A plain-English AI school for working professionals, small business owners, and curious learners. No jargon, no tech background needed.',
  },
  alternates: {
    canonical: 'https://learnaiclearly.com',
  },
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="section-pad" style={{
          background: 'var(--bg)',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'var(--accent-lt)',
              borderRadius: 999,
              padding: '6px 18px',
              fontSize: 12,
              fontWeight: 700,
              color: 'var(--accent-dk)',
              marginBottom: 28,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, display: 'inline-block' }} />
              Plain English . Real Results · Zero Jargon · No Tech Background Needed
            </div>

            <h1 style={{
              fontFamily: 'var(--font-dm-serif), Georgia, serif',
              fontSize: 'clamp(40px, 6vw, 64px)',
              color: 'var(--ink)',
              lineHeight: 1.1,
              marginBottom: 24,
              letterSpacing: '-0.02em',
            }}>
              AI makes sense<br />
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>when someone explains it clearly.</em>
            </h1>

            <p style={{
              fontSize: 18,
              color: 'var(--ink-mid)',
              lineHeight: 1.7,
              marginBottom: 40,
              maxWidth: 580,
              margin: '0 auto 40px',
            }}>
              Clearly, AI is a friendly school for everyday people who want to use artificial intelligence confidently — no tech background required. Practical lessons that make your work and life genuinely easier.
            </p>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/signup" className="btn btn-primary" style={{ fontSize: 15, padding: '15px 32px', boxShadow: '0 4px 16px rgba(61,122,138,0.25)' }}>
                Start the Free Course
              </a>
              <a href="/pricing" className="btn btn-ghost" style={{ fontSize: 15, padding: '15px 32px' }}>
                See Plans — from $15/mo
              </a>
            </div>

            <p style={{ marginTop: 20, fontSize: 13, color: 'var(--ink-lt)' }}>
              Free course · No credit card required ·{' '}
              <a href="/api/download/starter-kit" style={{ color: 'var(--ink-lt)', textDecoration: 'underline' }}>
                Download the PDF instead
              </a>
            </p>
          </div>
        </section>

        {/* ── Pain section ── */}
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
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
              }}>
                Everyone&apos;s talking about AI.<br />
                <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>You just don&apos;t know where to start.</em>
              </h2>
            </div>

            <ul className="grid-2" style={{
              listStyle: 'none',
              padding: 0,
              gap: 24,
            }}>
              {[
                { icon: '😤', title: 'You feel like everyone else already gets it.', body: "Colleagues mention AI tools in meetings. You nod along and Google it later." },
                { icon: '🤯', title: 'Every tutorial assumes you\'re a developer.', body: 'The guides online are full of terms like "prompts," "models," and "tokens" — with no explanation.' },
                { icon: '⏳', title: "You're drowning in repetitive work.", body: "Emails, reports, social posts, proposals — tasks that eat hours every single week." },
                { icon: '😟', title: "You worry about being left behind.", body: "AI is changing everything. You want to keep up — but you don't know where to start." },
              ].map(({ icon, title, body }) => (
                <li key={title} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 16,
                  background: 'var(--white)',
                  borderRadius: 20,
                  padding: '28px 24px',
                  border: '1px solid var(--border)',
                }}>
                  <div style={{
                    width: 40, height: 40, flexShrink: 0,
                    borderRadius: 12,
                    background: 'var(--accent-lt)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18,
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
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="section-pad" style={{ background: 'var(--bg)' }}>
          <div style={{ maxWidth: 1120, margin: '0 auto' }}>
            <div style={{ marginBottom: 48 }}>
              <div style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12,
              }}>
                How It Works
              </div>
              <h2 style={{
                fontFamily: 'var(--font-dm-serif), Georgia, serif',
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16,
              }}>
                Simple steps. <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Real progress.</em>
              </h2>
              <p style={{ fontSize: 17, color: 'var(--ink-mid)', lineHeight: 1.65, maxWidth: 540 }}>
                We designed every part of Clearly, AI to build your confidence from day one — not overwhelm you.
              </p>
            </div>

            <div className="grid-3" style={{ gap: 24 }}>
              {[
                {
                  num: '01',
                  title: 'Start with the Free Course',
                  body: 'Start with "10 Things You Can Do With AI Today" — two short lessons, ten practical tasks, each with a ready-to-use prompt. No credit card needed.',
                },
                {
                  num: '02',
                  title: 'Follow the Curriculum at Your Own Pace',
                  body: 'Short lessons, each focused on one practical skill. No homework, no pressure. Just learn when it works for you.',
                },
                {
                  num: '03',
                  title: 'Apply It to Your Real Life — This Week',
                  body: "Every lesson ends with something you can actually use today. You'll feel the difference in hours, not months.",
                },
              ].map(({ num, title, body }) => (
                <div key={num} style={{
                  background: 'var(--white)',
                  borderRadius: 20,
                  padding: '32px 28px',
                  border: '1px solid var(--border)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-dm-serif), Georgia, serif',
                    fontSize: 48,
                    color: 'var(--accent-lt)',
                    lineHeight: 1,
                    marginBottom: 16,
                  }}>
                    {num}
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, color: 'var(--ink)' }}>
                    {title}
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--ink-mid)' }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Curriculum teaser ── */}
        <section id="curriculum" className="section-pad" style={{ background: 'var(--ink)' }}>
          <div style={{ maxWidth: 1120, margin: '0 auto' }}>
            <div style={{ marginBottom: 40 }}>
              <div style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--accent-lt)', marginBottom: 12,
              }}>
                The Curriculum
              </div>
              <h2 style={{
                fontFamily: 'var(--font-dm-serif), Georgia, serif',
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16,
                color: 'white',
              }}>
                All courses. <em style={{ color: 'var(--accent-lt)', fontStyle: 'italic' }}>One subscription.</em>
              </h2>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, maxWidth: 540 }}>
                Every course is built for non-technical adults — plain English, practical skills, real results. Pick your starting point or take them all.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 44 }}>
              {[
                { icon: '🧠', title: 'AI Foundations', tag: 'Beginner' },
                { icon: '⚡', title: 'AI at Work', tag: 'Professional' },
                { icon: '🏪', title: 'AI for Your Business', tag: 'Small Business' },
                { icon: '🎯', title: 'Better Prompts, Better Results', tag: 'Universal' },
                { icon: '🌅', title: 'AI for a Richer Retirement', tag: 'Retirement' },
                { icon: '🚀', title: 'AI for Career Growth', tag: 'Professional' },
              ].map(({ icon, title, tag }) => (
                <div key={title} style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 12,
                  padding: '12px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}>
                  <span style={{ fontSize: 18 }}>{icon}</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'white', lineHeight: 1.2 }}>{title}</div>
                    <div style={{ fontSize: 10, color: 'var(--accent-lt)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 2 }}>{tag}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="/signup" className="btn btn-primary" style={{ fontSize: 16, padding: '16px 40px' }}>
                Start the Free Course
              </a>
              <a href="/curriculum" style={{
                fontSize: 15, fontWeight: 600,
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                See all courses →
              </a>
            </div>
          </div>
        </section>

        {/* ── Who it's for ── */}
        <section className="section-pad" style={{ background: 'var(--bg)' }}>
          <div style={{ maxWidth: 1120, margin: '0 auto' }}>
            <div style={{ marginBottom: 48 }}>
              <div style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12,
              }}>
                Who It&apos;s For
              </div>
              <h2 style={{
                fontFamily: 'var(--font-dm-serif), Georgia, serif',
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16,
              }}>
                You don&apos;t need to be <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>a tech person.</em>
              </h2>
              <p style={{ fontSize: 17, color: 'var(--ink-mid)', lineHeight: 1.65, maxWidth: 540 }}>
                Clearly, AI was built for three kinds of people. You might be all three.
              </p>
            </div>

            <div className="grid-3" style={{ gap: 20 }}>
              {[
                {
                  emoji: '💼',
                  tag: 'The Professional',
                  title: 'You want to work smarter and stay relevant.',
                  desc: "You're great at your job. Younger colleagues are already using AI and you want to keep up — without spending a month learning something new. We get you there in hours.",
                  pain: '"I just need someone to show me the practical stuff, not the theory."',
                },
                {
                  emoji: '🏪',
                  tag: 'The Business Owner',
                  title: 'You need AI to do the work of three people.',
                  desc: "You're running lean. Writing content, handling reviews, creating proposals, managing social media — AI can handle a huge chunk of that. We'll show you exactly how.",
                  pain: '"I don\'t have time to figure this out on my own. Just show me what works."',
                },
                {
                  emoji: '🌱',
                  tag: 'The Curious Learner',
                  title: "You want to understand what everyone's talking about.",
                  desc: "You've heard about AI on the news, in conversations, everywhere. You're ready to understand it — and use it. We start at the very beginning and never make you feel silly for asking.",
                  pain: '"I just don\'t want to feel left out. Or break anything."',
                },
              ].map(({ emoji, tag, title, desc, pain }) => (
                <div key={tag} style={{
                  background: 'var(--white)',
                  borderRadius: 20,
                  padding: '32px 28px',
                  border: '1px solid var(--border)',
                }}>
                  <div style={{ fontSize: 36, marginBottom: 16 }}>{emoji}</div>
                  <div style={{
                    display: 'inline-block',
                    background: 'var(--accent-lt)',
                    color: 'var(--accent-dk)',
                    fontSize: 11, fontWeight: 700,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    padding: '4px 12px', borderRadius: 999,
                    marginBottom: 14,
                  }}>
                    {tag}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-dm-serif), Georgia, serif',
                    fontSize: 20, lineHeight: 1.25, marginBottom: 12, color: 'var(--ink)',
                  }}>
                    {title}
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--ink-mid)' }}>
                    {desc}
                  </p>
                  <p style={{
                    marginTop: 16, paddingTop: 16,
                    borderTop: '1px solid var(--border)',
                    fontSize: 13, color: 'var(--ink-mid)', fontStyle: 'italic',
                  }}>
                    {pain}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing CTA ── */}
        <section className="section-pad" style={{
          background: 'var(--ink)',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--accent-lt)', marginBottom: 12,
            }}>
              Simple Pricing
            </div>
            <h2 style={{
              fontFamily: 'var(--font-dm-serif), Georgia, serif',
              fontSize: 'clamp(28px, 4vw, 44px)',
              color: 'white',
              lineHeight: 1.15,
              marginBottom: 32,
              letterSpacing: '-0.02em',
            }}>
              Everything included.<br />
              <em style={{ color: 'var(--accent-lt)', fontStyle: 'italic' }}>Pick the plan that fits.</em>
            </h2>

            <div className="grid-3" style={{
              gap: 16,
              maxWidth: 560,
              margin: '0 auto 36px',
            }}>
              {[
                { label: 'Monthly', price: '$15', period: '/mo', note: null, highlight: false },
                { label: 'Yearly', price: '$120', period: '/yr', note: 'Best Value', highlight: true },
                { label: 'Forever', price: '$299', period: ' one-time', note: null, highlight: false },
              ].map(({ label, price, period, note, highlight }) => (
                <div key={label} style={{
                  background: highlight ? 'rgba(61,122,138,0.3)' : 'rgba(255,255,255,0.05)',
                  border: `1px solid ${highlight ? 'rgba(61,122,138,0.8)' : 'rgba(255,255,255,0.08)'}`,
                  borderRadius: 16,
                  padding: '20px 16px',
                }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: highlight ? 'var(--accent-lt)' : 'rgba(255,255,255,0.4)', marginBottom: 8 }}>
                    {note ?? label}
                  </div>
                  <div>
                    <span style={{
                      fontFamily: 'var(--font-dm-serif), Georgia, serif',
                      fontSize: 32, color: 'white', lineHeight: 1,
                    }}>{price}</span>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginLeft: 3 }}>{period}</span>
                  </div>
                  {note && (
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{label}</div>
                  )}
                </div>
              ))}
            </div>

            <ul style={{
              listStyle: 'none', padding: 0, marginBottom: 36,
              display: 'inline-flex', flexDirection: 'column', gap: 10, textAlign: 'left',
            }}>
              {[
                'All courses — every module included',
                'New courses as they launch',
                'Go at your own pace, on any device',
              ].map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, color: 'rgba(255,255,255,0.8)' }}>
                  <span style={{ color: 'var(--accent-lt)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div>
              <a href="/pricing" className="btn btn-primary" style={{ fontSize: 16, padding: '16px 44px', boxShadow: '0 4px 20px rgba(61,122,138,0.4)' }}>
                See All Plans →
              </a>
            </div>
            <p style={{ marginTop: 16, fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
              Secure checkout via Stripe.
            </p>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="section-pad" style={{ background: 'var(--bg)' }}>
          <div style={{ maxWidth: 1120, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12,
              }}>
                What Students Say
              </div>
              <h2 style={{
                fontFamily: 'var(--font-dm-serif), Georgia, serif',
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                letterSpacing: '-0.02em', lineHeight: 1.2,
              }}>
                Real people. Real results.
              </h2>
            </div>

            <div className="grid-3" style={{ gap: 24 }}>
              {[
                {
                  quote: "I've tried YouTube videos, online articles, everything — nothing clicked until this. By the third module I was actually using AI at work and saving real time every week.",
                  name: 'Sandra M.',
                  role: 'Office Manager, 52',
                },
                {
                  quote: "I kept hearing 'you need to learn AI' but had no idea where to start. This was the first thing I found that didn't make me feel dumb. It's genuinely written for regular people.",
                  name: 'David K.',
                  role: 'Small Business Owner, 47',
                },
                {
                  quote: "My grandkids kept telling me to try it. I finally did — through this course — and now I'm the one sending them tips. I never expected to feel this confident with technology.",
                  name: 'Carol T.',
                  role: 'Retired Teacher, 67',
                },
              ].map(({ quote, name, role }) => (
                <div key={name} style={{
                  background: 'white',
                  border: '1px solid var(--border)',
                  borderRadius: 20,
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 24,
                  boxShadow: '0 2px 12px rgba(28,43,53,0.06)',
                }}>
                  <div style={{
                    color: 'var(--accent)',
                    fontSize: 32,
                    lineHeight: 1,
                    fontFamily: 'Georgia, serif',
                  }}>"</div>
                  <p style={{
                    fontSize: 16,
                    lineHeight: 1.65,
                    color: 'var(--ink)',
                    flex: 1,
                    marginTop: -16,
                  }}>
                    {quote}
                  </p>
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20 }}>
                    <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--ink)' }}>{name}</div>
                    <div style={{ fontSize: 13, color: 'var(--ink-mid)', marginTop: 2 }}>{role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Common questions ── */}
        <section className="section-pad" style={{
          background: 'var(--bg-alt)',
          borderTop: '1px solid var(--border)',
        }}>
          <div style={{ maxWidth: 1120, margin: '0 auto' }}>
            <div style={{ marginBottom: 40 }}>
              <div style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12,
              }}>
                Common Questions
              </div>
              <h2 style={{
                fontFamily: 'var(--font-dm-serif), Georgia, serif',
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                letterSpacing: '-0.02em', lineHeight: 1.2,
              }}>
                Anything else on your mind?
              </h2>
            </div>

            <div style={{ maxWidth: 680, display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                {
                  q: 'Do I need any technical background to start?',
                  a: 'Absolutely not. Clearly, AI was built for people who have zero technical background. We start at the very beginning and assume nothing. If you can send an email, you can do this.',
                },
                {
                  q: 'How much time does it take each week?',
                  a: 'Each lesson is 8–12 minutes long. Most members spend 20–30 minutes a week and still see meaningful results. You can go faster if you want — there\'s no schedule you have to follow.',
                },
                {
                  q: "What if I fall behind or can't keep up?",
                  a: "There is no falling behind. Everything is self-paced and available on-demand whenever you're ready. You'll never lose access to lessons you've already unlocked.",
                },
                {
                  q: 'Can I cancel any time?',
                  a: "Yes — no contracts, no cancellation fees, no runaround. Cancel any time directly from your account. We'd rather earn your trust than lock you in.",
                },
                {
                  q: "I'm 60+. Is this really for me?",
                  a: "Yes, truly. Some of our most enthusiastic students are in their 60s and 70s. We pace things gently, use real-life examples, and never rush you. You'll be surprised how quickly it clicks.",
                },
              ].map(({ q, a }) => (
                <div key={q} style={{
                  borderBottom: '1px solid var(--border)',
                  padding: '24px 0',
                }}>
                  <p style={{ fontWeight: 600, fontSize: 16, marginBottom: 10, color: 'var(--ink)' }}>
                    {q}
                  </p>
                  <p style={{ fontSize: 15, color: 'var(--ink-mid)', lineHeight: 1.6 }}>
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Email signup ── */}
        <section className="section-pad" style={{
          background: 'var(--accent)',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: 580, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'var(--font-dm-serif), Georgia, serif',
              fontSize: 36,
              color: 'white',
              marginBottom: 14,
              lineHeight: 1.2,
            }}>
              Get practical AI tips<br />in your inbox.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 17, marginBottom: 32, lineHeight: 1.65 }}>
              Short, plain-English ideas you can actually use — plus updates on the course when it opens.
            </p>
            <EmailSignup />
            <p style={{ marginTop: 16, fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
              No spam, ever. Unsubscribe any time.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
