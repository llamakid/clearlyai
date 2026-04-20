import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section style={{
          background: 'var(--bg)',
          padding: '88px 32px 80px',
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
              <Link href="/pricing" className="btn btn-primary" style={{ fontSize: 15, padding: '15px 32px', boxShadow: '0 4px 16px rgba(61,122,138,0.25)' }}>
                Get started — $97
              </Link>
              <Link href="/blog" className="btn btn-ghost" style={{ fontSize: 15, padding: '15px 32px' }}>
                Read the blog
              </Link>
            </div>

            <p style={{ marginTop: 20, fontSize: 13, color: 'var(--ink-lt)' }}>
              6 modules · Go at your own pace · Instant access
            </p>
          </div>
        </section>

        {/* ── Pain section ── */}
        <section style={{
          padding: '80px 32px',
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

            <ul style={{
              listStyle: 'none',
              padding: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
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
        <section style={{ padding: '80px 32px', background: 'var(--bg)' }}>
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

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 24,
            }}>
              {[
                {
                  num: '01',
                  title: 'Start with the Free Starter Kit',
                  body: 'Download your free guide: 10 things you can do with AI today. Written in plain English, ready to use in the next 30 minutes.',
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

        {/* ── Course overview ── */}
        <section style={{ padding: '80px 32px', background: 'var(--ink)' }}>
          <div style={{ maxWidth: 1120, margin: '0 auto' }}>
            <div style={{ marginBottom: 48 }}>
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
                Six modules. <em style={{ color: 'var(--accent-lt)', fontStyle: 'italic' }}>A completely different relationship with AI.</em>
              </h2>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, maxWidth: 540 }}>
                Each module is a focused set of short lessons built around what you can actually do — not how the technology works.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 16,
            }}>
              {[
                { num: 'Module 01', title: 'AI 101: What It Is & Why It Matters', desc: 'Understand what AI actually is, in plain terms. Feel confident in any conversation about it.' },
                { num: 'Module 02', title: 'ChatGPT & Your Work: Getting Things Done', desc: 'Draft emails, summarize documents, brainstorm ideas, and do research in minutes — not hours.' },
                { num: 'Module 03', title: 'Think Smarter: AI for Research, Planning & Decisions', desc: 'Automate repetitive tasks, build your own templates, and reclaim five or more hours every week.' },
                { num: 'Module 04', title: 'Creating Content with AI: Your Voice, Amplified', desc: 'Write social posts, create proposals, respond to reviews, and plan campaigns — without a marketing team.' },
                { num: 'Module 05', title: 'AI Tools Beyond ChatGPT: Image, Audio & More', desc: 'Explore image generators, voice tools, and specialized AI. Know what to trust and what to question.' },
                { num: 'Module 06', title: 'Your AI Life — Staying Current and Going Further', desc: 'Choose the right tools for your needs, build your daily workflow, and keep growing as AI evolves.' },
              ].map(({ num, title, desc }) => (
                <div key={num} style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 20,
                  padding: '28px 24px',
                }}>
                  <div style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                    textTransform: 'uppercase', color: 'var(--accent-lt)', marginBottom: 10,
                  }}>
                    {num}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-dm-serif), Georgia, serif',
                    fontSize: 18, fontWeight: 400,
                    color: 'white', marginBottom: 10, lineHeight: 1.3,
                  }}>
                    {title}
                  </div>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 44 }}>
              <Link href="/pricing" className="btn btn-primary" style={{ fontSize: 16, padding: '16px 40px' }}>
                Get full access — $97
              </Link>
            </div>
          </div>
        </section>

        {/* ── Who it's for ── */}
        <section style={{ padding: '80px 32px', background: 'var(--bg)' }}>
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

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 20,
            }}>
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

        {/* ── Common questions ── */}
        <section style={{
          padding: '80px 32px',
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

        {/* ── CTA strip ── */}
        <section style={{
          background: 'var(--accent)',
          padding: '64px 32px',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'var(--font-dm-serif), Georgia, serif',
              fontSize: 36,
              color: 'white',
              marginBottom: 16,
            }}>
              Ready to stop wondering<br />and start using?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 17, marginBottom: 32 }}>
              Join the people who went from "I don&apos;t get AI" to "I use it every day."
            </p>
            <Link href="/pricing" style={{
              display: 'inline-block',
              background: 'white',
              color: 'var(--accent-dk)',
              fontWeight: 700,
              fontSize: 16,
              padding: '16px 40px',
              borderRadius: 10,
              textDecoration: 'none',
            }}>
              Get started today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
