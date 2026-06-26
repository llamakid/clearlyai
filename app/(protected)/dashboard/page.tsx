import { createClient } from '@/lib/supabase/server'
import { COURSES_META, CourseMeta } from '@/lib/course-data/courses'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ManageSubscriptionButton from '@/components/ManageSubscriptionButton'
import EmailVerificationBanner from '@/components/EmailVerificationBanner'
import Link from 'next/link'

const TRACKS = [
  {
    label: 'Start Here',
    description: 'New to AI? The free starter gets you going in minutes. Then build your foundation.',
    slugs: ['ai-foundations', 'better-prompts'],
    includeStarter: true,
  },
  {
    label: 'For Professionals',
    description: 'Reclaim time, look sharper, and get ahead at work.',
    slugs: ['ai-at-work', 'ai-career-growth'],
  },
  {
    label: 'For Small Business Owners',
    description: 'More output. Lower overhead. No tech team needed.',
    slugs: ['ai-for-your-business'],
  },
  {
    label: 'For Retirement & Beyond',
    description: 'More time. More connection. More confidence.',
    slugs: ['ai-richer-retirement'],
  },
]

// Provider-specific deep-dive paths — a start-to-finish progression through one
// AI tool, beginner to advanced. Distinct from the audience tracks above.
const PROVIDER_SERIES = {
  label: 'Go Deeper: Master a Tool',
  description: 'A complete, start-to-finish path through one AI tool — beginner to advanced. First up: Claude.',
  provider: 'Claude',
  levels: [
    {
      level: 'Beginner',
      title: 'Getting Started with Claude',
      subtitle: "Anthropic's Claude, from zero. Chat with confidence.",
      slug: 'getting-started-with-claude',
    },
    {
      level: 'Intermediate',
      title: 'Claude for Real Work',
      subtitle: 'Projects, connectors, and your first taste of Cowork.',
      comingSoon: true,
    },
    {
      level: 'Advanced',
      title: 'Claude, Mastered',
      subtitle: 'Advanced Cowork — plus a hands-on intro to Claude Code.',
      comingSoon: true,
    },
  ],
}

function CourseCard({ course, isLocked }: { course: CourseMeta; isLocked: boolean }) {
  const availableCount = course.modules.filter((m) => m.available).length

  return (
    <div
      className={`card${!isLocked ? ' card-hover' : ''}`}
      style={{
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        opacity: isLocked ? 0.72 : 1,
        cursor: isLocked ? 'default' : 'pointer',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
        <span style={{ fontSize: 28, lineHeight: 1 }}>{course.icon}</span>
        <span style={{
          fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
          textTransform: 'uppercase', color: 'var(--accent-dk)',
          background: 'var(--accent-lt)', padding: '2px 8px', borderRadius: 6,
        }}>
          {course.tag}
        </span>
        {isLocked && (
          <span style={{ marginLeft: 'auto', fontSize: 14, color: 'var(--ink-lt)' }}>🔒</span>
        )}
      </div>

      <h3 style={{
        fontFamily: 'var(--font-h)',
        fontSize: 18,
        marginBottom: 6,
        color: 'var(--ink)',
        lineHeight: 1.25,
      }}>
        {course.title}
      </h3>
      <p style={{ fontSize: 13, color: 'var(--ink-mid)', lineHeight: 1.55, marginBottom: 18 }}>
        {course.subtitle}
      </p>

      <div style={{
        marginTop: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,
      }}>
        <span style={{ fontSize: 12, color: 'var(--ink-lt)' }}>
          {availableCount < course.modules.length
            ? `${availableCount} of ${course.modules.length} modules`
            : `${course.modules.length} modules · ${course.estimatedTime}`}
        </span>
        <span style={{
          fontSize: 13, fontWeight: 600,
          color: isLocked ? 'var(--ink-lt)' : 'var(--accent)',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}>
          {isLocked ? 'Locked' : 'Explore →'}
        </span>
      </div>
    </div>
  )
}

function ProviderLevelCard({
  level,
  index,
  total,
  hasPurchase,
}: {
  level: (typeof PROVIDER_SERIES.levels)[number]
  index: number
  total: number
  hasPurchase: boolean
}) {
  const comingSoon = 'comingSoon' in level && level.comingSoon
  const locked = !comingSoon && !hasPurchase
  const interactive = !comingSoon && hasPurchase

  return (
    <div
      className={`card${interactive ? ' card-hover' : ''}`}
      style={{
        padding: '22px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        opacity: comingSoon ? 0.62 : locked ? 0.78 : 1,
        cursor: interactive ? 'pointer' : 'default',
        boxSizing: 'border-box',
        borderColor: comingSoon ? 'var(--border)' : 'var(--accent-lt)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
        <span style={{
          fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
          textTransform: 'uppercase', color: 'var(--accent-dk)',
          background: 'var(--accent-lt)', padding: '2px 8px', borderRadius: 6,
        }}>
          {level.level}
        </span>
        <span style={{ fontSize: 11, color: 'var(--ink-lt)', fontWeight: 600 }}>
          Part {index + 1} of {total}
        </span>
        {comingSoon && <span style={{ marginLeft: 'auto', fontSize: 14 }}>🔜</span>}
        {locked && <span style={{ marginLeft: 'auto', fontSize: 14, color: 'var(--ink-lt)' }}>🔒</span>}
      </div>

      <h3 style={{
        fontFamily: 'var(--font-h)',
        fontSize: 17,
        marginBottom: 6,
        color: 'var(--ink)',
        lineHeight: 1.25,
      }}>
        {level.title}
      </h3>
      <p style={{ fontSize: 13, color: 'var(--ink-mid)', lineHeight: 1.55, marginBottom: 18 }}>
        {level.subtitle}
      </p>

      <div style={{ marginTop: 'auto' }}>
        <span style={{
          fontSize: 13, fontWeight: 600,
          color: comingSoon || locked ? 'var(--ink-lt)' : 'var(--accent)',
          whiteSpace: 'nowrap',
        }}>
          {comingSoon ? 'Coming soon' : locked ? 'Locked' : 'Explore →'}
        </span>
      </div>
    </div>
  )
}

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ welcome?: string; verified?: string; verify_error?: string }>
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const params = await searchParams
  const showWelcome = params.welcome === '1'
  const justVerified = params.verified === '1'
  const verifyError = params.verify_error === '1'
  const needsVerification = user!.app_metadata?.email_verified === false

  const { data: purchases } = await supabase
    .from('purchases')
    .select('plan_type, subscription_status')
    .eq('user_id', user!.id)

  const hasPurchase = purchases?.some(
    (p) =>
      p.plan_type === 'forever' ||
      p.subscription_status === 'active' ||
      p.subscription_status === 'past_due'
  ) ?? false

  const hasActiveSubscription = purchases?.some(
    (p) =>
      p.plan_type !== 'forever' &&
      (p.subscription_status === 'active' || p.subscription_status === 'past_due')
  ) ?? false

  const coursesBySlug = Object.fromEntries(COURSES_META.map((c) => [c.slug, c]))

  return (
    <>
      <Navbar initialUser={user} />
      <main style={{ minHeight: '80vh', padding: '52px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>

          {needsVerification && !justVerified && (
            <EmailVerificationBanner email={user!.email!} />
          )}

          {justVerified && (
            <div style={{
              background: '#f0fdf4',
              border: '1px solid #86efac',
              borderRadius: 12,
              padding: '14px 20px',
              marginBottom: 28,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}>
              <span style={{ fontSize: 20 }}>✓</span>
              <p style={{ fontWeight: 600, fontSize: 14, color: '#166534' }}>
                Email verified! You&apos;re all set.
              </p>
            </div>
          )}

          {verifyError && (
            <div style={{
              background: '#fff7ed',
              border: '1px solid #fb923c',
              borderRadius: 12,
              padding: '14px 20px',
              marginBottom: 28,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}>
              <span style={{ fontSize: 20 }}>⚠️</span>
              <p style={{ fontSize: 14, color: '#9a3412' }}>
                That verification link was invalid or already used.{' '}
                <span style={{ fontWeight: 600 }}>Check your inbox for a newer link, or use the resend button below.</span>
              </p>
            </div>
          )}

          {showWelcome && (
            <div style={{
              background: 'var(--accent-xl)',
              border: '1px solid var(--accent-lt)',
              borderRadius: 16,
              padding: '20px 24px',
              marginBottom: 32,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
            }}>
              <span style={{ fontSize: 28 }}>🎉</span>
              <div>
                <p style={{ fontWeight: 700, marginBottom: 4, fontSize: 15 }}>You&apos;re in! Welcome to Clearly, AI.</p>
                <p style={{ fontSize: 14, color: 'var(--ink-mid)' }}>Start with the free starter course below. No credit card needed.</p>
              </div>
            </div>
          )}

          <div style={{ marginBottom: 44, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-h)', fontSize: 32, marginBottom: 8 }}>
                Your courses
              </h1>
              <p style={{ fontSize: 15, color: 'var(--ink-mid)' }}>
                Welcome back{user?.email ? `, ${user.email.split('@')[0]}` : ''}. Pick up where you left off.
              </p>
            </div>
            {hasActiveSubscription && <ManageSubscriptionButton />}
          </div>

          {/* Audience tracks */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 44 }}>
            {TRACKS.map((track) => {
              const trackCourses = track.slugs
                .map((s) => coursesBySlug[s])
                .filter(Boolean) as CourseMeta[]

              return (
                <section key={track.label}>
                  <div style={{
                    marginBottom: 20,
                    paddingBottom: 14,
                    borderBottom: '1px solid var(--border)',
                  }}>
                    <h2 style={{
                      fontFamily: 'var(--font-h)',
                      fontSize: 21,
                      marginBottom: 4,
                      color: 'var(--ink)',
                    }}>
                      {track.label}
                    </h2>
                    <p style={{ fontSize: 14, color: 'var(--ink-mid)' }}>{track.description}</p>
                  </div>

                  {/* Starter card — full width, only in Start Here */}
                  {track.includeStarter && (
                    <Link href="/course/0" style={{ textDecoration: 'none', display: 'block', marginBottom: 16 }}>
                      <div className="card card-hover" style={{
                        padding: '20px 24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 20,
                        flexWrap: 'wrap',
                        borderColor: 'var(--accent-lt)',
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                          <span style={{ fontSize: 28, lineHeight: 1 }}>🚀</span>
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                              <span style={{
                                fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
                                textTransform: 'uppercase', color: 'var(--accent)',
                                background: 'var(--accent-xl)', padding: '2px 8px', borderRadius: 6,
                              }}>Free</span>
                              <span style={{ fontSize: 12, color: 'var(--ink-lt)' }}>2 lessons · ~17 min</span>
                            </div>
                            <h3 style={{
                              fontFamily: 'var(--font-h)',
                              fontSize: 17, marginBottom: 2, color: 'var(--ink)',
                            }}>
                              10 Things You Can Do With AI Today
                            </h3>
                            <p style={{ fontSize: 13, color: 'var(--ink-mid)' }}>
                              No tech skills required. 10 practical things to try right now, each with a ready-to-use prompt.
                            </p>
                          </div>
                        </div>
                        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--accent)', whiteSpace: 'nowrap' }}>
                          Start free →
                        </span>
                      </div>
                    </Link>
                  )}

                  {/* Course grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 16,
                    alignItems: 'stretch',
                  }}>
                    {trackCourses.map((course) =>
                      !hasPurchase ? (
                        <div key={course.slug} style={{ display: 'flex', flexDirection: 'column' }}>
                          <CourseCard course={course} isLocked={true} />
                        </div>
                      ) : (
                        <Link
                          key={course.slug}
                          href={`/courses/${course.slug}`}
                          style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}
                        >
                          <CourseCard course={course} isLocked={false} />
                        </Link>
                      )
                    )}
                  </div>
                </section>
              )
            })}

            {/* Provider deep-dive series — distinct visual treatment */}
            <section>
              <div style={{
                marginBottom: 20,
                paddingBottom: 14,
                borderBottom: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                flexWrap: 'wrap',
              }}>
                <span style={{ fontSize: 22, lineHeight: 1 }}>🎓</span>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <h2 style={{
                      fontFamily: 'var(--font-h)',
                      fontSize: 21,
                      color: 'var(--ink)',
                    }}>
                      {PROVIDER_SERIES.label}
                    </h2>
                    <span style={{
                      fontSize: 10, fontWeight: 700, letterSpacing: '0.06em',
                      textTransform: 'uppercase', color: '#fff',
                      background: 'var(--accent)', padding: '2px 8px', borderRadius: 6,
                    }}>
                      New
                    </span>
                  </div>
                  <p style={{ fontSize: 14, color: 'var(--ink-mid)', marginTop: 4 }}>
                    {PROVIDER_SERIES.description}
                  </p>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: 16,
                alignItems: 'stretch',
              }}>
                {PROVIDER_SERIES.levels.map((level, i) => {
                  const card = (
                    <ProviderLevelCard
                      level={level}
                      index={i}
                      total={PROVIDER_SERIES.levels.length}
                      hasPurchase={hasPurchase}
                    />
                  )
                  const isLink = !('comingSoon' in level && level.comingSoon) && hasPurchase && 'slug' in level
                  return isLink ? (
                    <Link
                      key={level.title}
                      href={`/courses/${(level as { slug: string }).slug}`}
                      style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}
                    >
                      {card}
                    </Link>
                  ) : (
                    <div key={level.title} style={{ display: 'flex', flexDirection: 'column' }}>
                      {card}
                    </div>
                  )
                })}
              </div>
            </section>
          </div>

          {!hasPurchase && (
            <div style={{
              marginTop: 56,
              background: 'var(--accent)',
              borderRadius: 20,
              padding: '32px 36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 24,
              flexWrap: 'wrap',
            }}>
              <div>
                <p style={{
                  fontFamily: 'var(--font-h)',
                  fontSize: 22, color: '#fff', marginBottom: 6,
                }}>
                  Ready to unlock everything?
                </p>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', maxWidth: 420 }}>
                  Get full access to all courses, plus every new course as it launches.
                </p>
              </div>
              <Link href="/pricing" style={{
                background: '#fff', color: 'var(--accent)',
                fontWeight: 700, fontSize: 15,
                padding: '14px 28px', borderRadius: 12,
                textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0,
              }}>
                See plans →
              </Link>
            </div>
          )}

        </div>
      </main>
      <Footer />
    </>
  )
}
