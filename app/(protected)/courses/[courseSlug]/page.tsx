import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { getCourseBySlug } from '@/lib/course-data/courses'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default async function CoursePage({
  params,
}: {
  params: Promise<{ courseSlug: string }>
}) {
  const { courseSlug } = await params
  const course = getCourseBySlug(courseSlug)
  if (!course) notFound()

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const availableCount = course.modules.filter((m) => m.available).length

  return (
    <>
      <Navbar initialUser={user} />

      {/* ── Hero ── */}
      <div style={{ background: 'var(--ink)' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '64px 32px 56px' }}>

          {/* Back link */}
          <Link href="/dashboard" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.45)',
            textDecoration: 'none', marginBottom: 32,
            transition: 'color 0.15s',
          }}>
            ← Back to dashboard
          </Link>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'start' }}>

            {/* Left: title + description */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <span style={{ fontSize: 40, lineHeight: 1 }}>{course.icon}</span>
                <span style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'var(--accent-lt)',
                  background: 'rgba(61,122,138,0.2)', border: '1px solid rgba(61,122,138,0.4)',
                  padding: '4px 12px', borderRadius: 999,
                }}>
                  {course.tag}
                </span>
              </div>

              <h1 style={{
                fontFamily: 'var(--font-dm-serif), Georgia, serif',
                fontSize: 'clamp(32px, 4vw, 52px)',
                color: 'white',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: 12,
              }}>
                {course.title}
              </h1>

              <p style={{
                fontFamily: 'var(--font-dm-serif), Georgia, serif',
                fontSize: 20,
                color: 'var(--accent-lt)',
                fontStyle: 'italic',
                marginBottom: 20,
              }}>
                {course.subtitle}
              </p>

              <p style={{
                fontSize: 16,
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.7,
                maxWidth: 560,
                marginBottom: 28,
              }}>
                {course.description}
              </p>

              {/* Stats row */}
              <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                {[
                  { label: 'Modules', value: `${course.modules.length}` },
                  { label: 'Lessons', value: `${course.totalLessons}` },
                  { label: 'Est. time', value: course.estimatedTime },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div style={{ fontSize: 20, fontWeight: 700, color: 'white' }}>{value}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: What you'll learn */}
            <div style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 16,
              padding: '24px 28px',
              minWidth: 280,
              maxWidth: 340,
              flexShrink: 0,
            }}>
              <p style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--accent-lt)',
                marginBottom: 16,
              }}>
                What you&apos;ll learn
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {course.whatYoullLearn.map((item) => (
                  <li key={item} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--accent-lt)', flexShrink: 0, marginTop: 1 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ── Modules ── */}
      <main style={{ background: 'var(--bg)', minHeight: '40vh', padding: '52px 32px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>

          <div style={{ marginBottom: 28, display: 'flex', alignItems: 'baseline', gap: 12 }}>
            <h2 style={{
              fontFamily: 'var(--font-dm-serif), Georgia, serif',
              fontSize: 26,
              color: 'var(--ink)',
            }}>
              Course modules
            </h2>
            {availableCount < course.modules.length && (
              <span style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600 }}>
                {availableCount} available now · more coming soon
              </span>
            )}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 20,
          }}>
            {course.modules.map((mod) => {
              const isComingSoon = !mod.available
              const isLocked = false
              const isOpen = mod.available
              const numStr = mod.num < 10 ? `0${mod.num}` : `${mod.num}`

              const card = (
                <div className={`card${isOpen ? ' card-hover' : ''}`} style={{
                  padding: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  height: '100%',
                  opacity: isLocked ? 0.6 : 1,
                  cursor: isOpen ? 'pointer' : 'default',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span style={{
                      fontFamily: 'var(--font-dm-serif), Georgia, serif',
                      fontSize: 32, color: 'var(--accent-lt)', lineHeight: 1,
                    }}>
                      {numStr}
                    </span>
                    {isLocked && <span style={{ fontSize: 18, color: 'var(--ink-lt)' }}>🔒</span>}
                    {isComingSoon && (
                      <span style={{
                        fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
                        textTransform: 'uppercase', color: 'var(--ink-lt)',
                        background: 'var(--bg-alt)', border: '1px solid var(--border)',
                        padding: '3px 8px', borderRadius: 6,
                      }}>
                        Soon
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-dm-serif), Georgia, serif',
                      fontSize: 20, marginBottom: 8,
                      color: isComingSoon ? 'var(--ink-mid)' : 'var(--ink)',
                    }}>
                      {mod.title}
                    </h3>
                    <p style={{ fontSize: 14, color: 'var(--ink-mid)', lineHeight: 1.6 }}>
                      {mod.desc}
                    </p>
                  </div>

                  <div style={{
                    marginTop: 'auto', paddingTop: 14,
                    borderTop: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  }}>
                    <span style={{ fontSize: 13, color: 'var(--ink-lt)' }}>
                      {mod.lessons} lessons
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: isOpen ? 'var(--accent)' : 'var(--ink-lt)' }}>
                      {isOpen ? 'Start →' : isLocked ? 'Locked' : 'Coming soon'}
                    </span>
                  </div>
                </div>
              )

              return isOpen ? (
                <Link key={mod.id} href={`/course/${mod.id}`} style={{ textDecoration: 'none' }}>
                  {card}
                </Link>
              ) : (
                <div key={mod.id}>{card}</div>
              )
            })}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
