import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { COURSES_META } from '@/lib/course-data/courses'

export const metadata: Metadata = {
  title: 'Full Curriculum — Clearly, AI',
  description: 'Plain-English AI courses for working professionals, small business owners, and curious learners. One subscription unlocks everything.',
  alternates: { canonical: 'https://learnaiclearly.com/curriculum' },
}

export default function CurriculumPage() {
  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section style={{ background: 'var(--ink)', paddingTop: 96, paddingBottom: 72 }}>
        <div style={{ maxWidth: 780, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--accent-lt)', marginBottom: 16,
          }}>
            The Full Curriculum
          </div>
          <h1 style={{
            fontFamily: 'var(--font-dm-serif), Georgia, serif',
            fontSize: 'clamp(32px, 4.5vw, 52px)',
            letterSpacing: '-0.02em', lineHeight: 1.15,
            color: 'white', marginBottom: 20,
          }}>
            All courses. <em style={{ color: 'var(--accent-lt)', fontStyle: 'italic' }}>One subscription.</em>
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto 36px' }}>
            Every course is built for non-technical adults — plain English, practical skills, real results.
            One subscription unlocks all of it.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/signup" className="btn btn-primary" style={{ fontSize: 15, padding: '14px 32px' }}>
              Start the Free Course
            </a>
            <a href="/pricing" style={{
              fontSize: 15, padding: '14px 32px',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 12, color: 'rgba(255,255,255,0.8)',
              textDecoration: 'none', fontWeight: 600,
            }}>
              See Pricing
            </a>
          </div>
        </div>
      </section>

      {/* ── Free starter ── */}
      <section style={{ background: 'var(--accent)', padding: '48px 24px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 24,
            flexWrap: 'wrap',
          }}>
            <div style={{ fontSize: 48, flexShrink: 0 }}>🚀</div>
            <div style={{ flex: 1, minWidth: 240 }}>
              <div style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 6,
              }}>
                Free · No account required
              </div>
              <div style={{
                fontFamily: 'var(--font-dm-serif), Georgia, serif',
                fontSize: 24, color: 'white', marginBottom: 6, lineHeight: 1.2,
              }}>
                10 Things You Can Do With AI Today
              </div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, margin: 0 }}>
                A quick, no-pressure introduction. Ten practical things you can try right now — each one
                comes with a ready-to-use prompt. No tech background needed.
              </p>
            </div>
            <a href="/course/0" style={{
              fontSize: 14, fontWeight: 700, padding: '12px 28px',
              background: 'white', color: 'var(--accent)',
              borderRadius: 12, textDecoration: 'none', flexShrink: 0,
            }}>
              Start Free →
            </a>
          </div>
        </div>
      </section>

      {/* ── Paid courses ── */}
      <section style={{ background: 'var(--bg)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ marginBottom: 48, textAlign: 'center' }}>
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12,
            }}>
              Full Courses
            </div>
            <h2 style={{
              fontFamily: 'var(--font-dm-serif), Georgia, serif',
              fontSize: 'clamp(26px, 3vw, 38px)',
              letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 12,
            }}>
              Pick your starting point — or take them all.
            </h2>
            <p style={{ fontSize: 16, color: 'var(--ink-mid)', maxWidth: 520, margin: '0 auto' }}>
              Each course is self-contained. Start with whatever fits your life right now.
            </p>
          </div>

          <div className="grid-2" style={{ gap: 24 }}>
            {COURSES_META.map((course) => (
              <div key={course.slug} style={{
                background: 'white',
                border: '1px solid rgba(0,0,0,0.07)',
                borderRadius: 20,
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
              }}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                  <span style={{ fontSize: 32 }}>{course.icon}</span>
                  <span style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
                    textTransform: 'uppercase', color: 'var(--accent)',
                    background: 'rgba(61,122,138,0.1)',
                    padding: '3px 10px', borderRadius: 999,
                  }}>
                    {course.tag}
                  </span>
                </div>

                {/* Title + subtitle */}
                <div style={{
                  fontFamily: 'var(--font-dm-serif), Georgia, serif',
                  fontSize: 22, color: 'var(--ink)', marginBottom: 4, lineHeight: 1.25,
                }}>
                  {course.title}
                </div>
                <div style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600, marginBottom: 14 }}>
                  {course.subtitle}
                </div>

                {/* Description */}
                <p style={{ fontSize: 14, color: 'var(--ink-mid)', lineHeight: 1.65, marginBottom: 20 }}>
                  {course.description}
                </p>

                {/* What you'll learn */}
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24, flex: 1 }}>
                  {course.whatYoullLearn.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: 'var(--ink)' }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Footer meta */}
                <div style={{
                  paddingTop: 20,
                  borderTop: '1px solid rgba(0,0,0,0.06)',
                  fontSize: 11, color: 'var(--ink-mid)',
                  fontWeight: 700, letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}>
                  {course.modules.length} MODULES · {course.estimatedTime} · {course.totalLessons} LESSONS
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'var(--ink)', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-dm-serif), Georgia, serif',
            fontSize: 'clamp(28px, 3.5vw, 40px)',
            color: 'white', marginBottom: 16, lineHeight: 1.2,
          }}>
            One subscription. <em style={{ color: 'var(--accent-lt)', fontStyle: 'italic' }}>All courses.</em>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, marginBottom: 36 }}>
            Start the free course today — no credit card, no commitment. Upgrade when you're ready.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/signup" className="btn btn-primary" style={{ fontSize: 15, padding: '14px 32px' }}>
              Start the Free Course
            </a>
            <a href="/pricing" style={{
              fontSize: 15, padding: '14px 32px',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 12, color: 'rgba(255,255,255,0.8)',
              textDecoration: 'none', fontWeight: 600,
            }}>
              See Pricing
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
