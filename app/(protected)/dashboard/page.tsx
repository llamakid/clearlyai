import { createClient } from '@/lib/supabase/server'
import { COURSES_META } from '@/lib/course-data/courses'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ManageSubscriptionButton from '@/components/ManageSubscriptionButton'
import EmailVerificationBanner from '@/components/EmailVerificationBanner'
import Link from 'next/link'

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

  return (
    <>
      <Navbar initialUser={user} />
      <main style={{ minHeight: '80vh', padding: '52px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>

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
                <p style={{ fontSize: 14, color: 'var(--ink-mid)' }}>Start with the free starter course below — no credit card needed.</p>
              </div>
            </div>
          )}

          <div style={{ marginBottom: 40, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <h1 style={{
                fontFamily: 'var(--font-dm-serif), Georgia, serif',
                fontSize: 32,
                marginBottom: 8,
              }}>
                Your courses
              </h1>
              <p style={{ fontSize: 15, color: 'var(--ink-mid)' }}>
                Welcome back{user?.email ? `, ${user.email.split('@')[0]}` : ''}. Pick up where you left off.
              </p>
            </div>
            {hasActiveSubscription && <ManageSubscriptionButton />}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Starter course — free for everyone */}
            <Link href="/course/0" style={{ textDecoration: 'none' }}>
              <div className="card card-hover" style={{
                padding: '28px 32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 24,
                flexWrap: 'wrap',
                borderColor: 'var(--accent-lt)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                  <span style={{ fontSize: 36, lineHeight: 1 }}>🚀</span>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                      <span style={{
                        fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
                        textTransform: 'uppercase', color: 'var(--accent)',
                        background: 'var(--accent-xl)', padding: '2px 8px', borderRadius: 6,
                      }}>Free</span>
                      <span style={{ fontSize: 13, color: 'var(--ink-lt)' }}>2 lessons · ~17 min</span>
                    </div>
                    <h2 style={{
                      fontFamily: 'var(--font-dm-serif), Georgia, serif',
                      fontSize: 20, marginBottom: 4, color: 'var(--ink)',
                    }}>
                      10 Things You Can Do With AI Today
                    </h2>
                    <p style={{ fontSize: 14, color: 'var(--ink-mid)' }}>
                      No tech skills required. 10 practical things to try right now, each with a ready-to-use prompt.
                    </p>
                  </div>
                </div>
                <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--accent)', whiteSpace: 'nowrap' }}>
                  Start free →
                </span>
              </div>
            </Link>

            {/* Course cards */}
            {COURSES_META.map((course) => {
              const availableCount = course.modules.filter((m) => m.available).length
              const isLocked = !hasPurchase

              const card = (
                <div className={`card${!isLocked ? ' card-hover' : ''}`} style={{
                  padding: '28px 32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 24,
                  flexWrap: 'wrap',
                  opacity: isLocked ? 0.75 : 1,
                  cursor: isLocked ? 'default' : 'pointer',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    <span style={{ fontSize: 36, lineHeight: 1 }}>{course.icon}</span>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                        <span style={{
                          fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
                          textTransform: 'uppercase', color: 'var(--accent-dk)',
                          background: 'var(--accent-lt)', padding: '2px 8px', borderRadius: 6,
                        }}>
                          {course.tag}
                        </span>
                        <span style={{ fontSize: 13, color: 'var(--ink-lt)' }}>
                          {course.modules.length} modules · {course.estimatedTime}
                        </span>
                        {isLocked && (
                          <span style={{ fontSize: 13, color: 'var(--ink-lt)' }}>🔒</span>
                        )}
                      </div>
                      <h2 style={{
                        fontFamily: 'var(--font-dm-serif), Georgia, serif',
                        fontSize: 20, marginBottom: 4, color: 'var(--ink)',
                      }}>
                        {course.title}
                      </h2>
                      <p style={{ fontSize: 14, color: 'var(--ink-mid)' }}>
                        {course.subtitle}
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6, flexShrink: 0 }}>
                    {availableCount < course.modules.length && (
                      <span style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 600 }}>
                        {availableCount} of {course.modules.length} available
                      </span>
                    )}
                    <span style={{ fontSize: 14, fontWeight: 600, color: isLocked ? 'var(--ink-lt)' : 'var(--accent)', whiteSpace: 'nowrap' }}>
                      {isLocked ? 'Locked' : 'Explore course →'}
                    </span>
                  </div>
                </div>
              )

              return isLocked ? (
                <div key={course.slug}>{card}</div>
              ) : (
                <Link key={course.slug} href={`/courses/${course.slug}`} style={{ textDecoration: 'none' }}>
                  {card}
                </Link>
              )
            })}

          </div>

          {!hasPurchase && (
            <div style={{
              marginTop: 48,
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
                  fontFamily: 'var(--font-dm-serif), Georgia, serif',
                  fontSize: 22, color: '#fff', marginBottom: 6,
                }}>
                  Ready to unlock everything?
                </p>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', maxWidth: 420 }}>
                  Get full access to both courses — plus every new course as it launches.
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
