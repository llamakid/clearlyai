import { createClient } from '@/lib/supabase/server'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const MODULES = [
  { id: 1, title: 'AI 101: What It Is & Why It Matters', desc: 'Understand what AI actually is, in plain terms. Feel confident in any conversation about it.', lessons: 5 },
  { id: 2, title: 'ChatGPT & Your Work: Getting Things Done', desc: 'Draft emails, summarize documents, brainstorm ideas, and do research in minutes — not hours.', lessons: 5 },
  { id: 3, title: 'Think Smarter: AI for Research, Planning & Decisions', desc: 'Automate repetitive tasks, build your own templates, and reclaim five or more hours every week.', lessons: 5 },
  { id: 4, title: 'Creating Content with AI: Your Voice, Amplified', desc: 'Write social posts, create proposals, respond to reviews, and plan campaigns — without a marketing team.', lessons: 5 },
  { id: 5, title: 'AI Tools Beyond ChatGPT: Image, Audio & More', desc: 'Explore image generators, voice tools, and specialized AI. Know what to trust and what to question.', lessons: 5 },
  { id: 6, title: 'Your AI Life — Staying Current and Going Further', desc: 'Choose the right tools for your needs, build your daily workflow, and keep growing as AI evolves.', lessons: 5 },
]

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ welcome?: string }>
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const params = await searchParams
  const showWelcome = params.welcome === '1'

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

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '52px 32px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>

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
                <p style={{ fontSize: 14, color: 'var(--ink-mid)' }}>Start with Module 1 — it&apos;s on us. No credit card needed.</p>
              </div>
            </div>
          )}

          <div style={{ marginBottom: 40 }}>
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

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 20,
          }}>
            {MODULES.map((mod) => {
              const isLocked = mod.id !== 1 && !hasPurchase
              const card = (
                <div className={`card${isLocked ? '' : ' card-hover'}`} style={{
                  padding: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  height: '100%',
                  opacity: isLocked ? 0.6 : 1,
                  cursor: isLocked ? 'default' : 'pointer',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span style={{
                      fontFamily: 'var(--font-dm-serif), Georgia, serif',
                      fontSize: 32,
                      color: 'var(--accent-lt)',
                      lineHeight: 1,
                    }}>
                      0{mod.id}
                    </span>
                    {isLocked && (
                      <span style={{ fontSize: 18, color: 'var(--ink-lt)' }}>🔒</span>
                    )}
                  </div>

                  <div>
                    <h2 style={{
                      fontFamily: 'var(--font-dm-serif), Georgia, serif',
                      fontSize: 20,
                      marginBottom: 8,
                      color: 'var(--ink)',
                    }}>
                      {mod.title}
                    </h2>
                    <p style={{ fontSize: 14, color: 'var(--ink-mid)', lineHeight: 1.6 }}>
                      {mod.desc}
                    </p>
                  </div>

                  <div style={{
                    marginTop: 'auto',
                    paddingTop: 14,
                    borderTop: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                    <span style={{ fontSize: 13, color: 'var(--ink-lt)' }}>
                      {mod.lessons} lessons
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: isLocked ? 'var(--ink-lt)' : 'var(--accent)' }}>
                      {isLocked ? 'Locked' : 'Start →'}
                    </span>
                  </div>
                </div>
              )

              return isLocked ? (
                <div key={mod.id}>{card}</div>
              ) : (
                <Link key={mod.id} href={`/course/${mod.id}`} style={{ textDecoration: 'none' }}>
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
                  fontSize: 22,
                  color: '#fff',
                  marginBottom: 6,
                }}>
                  Ready for the full course?
                </p>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', maxWidth: 420 }}>
                  Module 1 is free. Unlock all 6 modules — including hands-on prompts, real-world tools, and your personal AI workflow.
                </p>
              </div>
              <Link
                href="/pricing"
                style={{
                  background: '#fff',
                  color: 'var(--accent)',
                  fontWeight: 700,
                  fontSize: 15,
                  padding: '14px 28px',
                  borderRadius: 12,
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
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
