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
                <p style={{ fontSize: 14, color: 'var(--ink-mid)' }}>Start with Module 1 whenever you&apos;re ready. There&apos;s no rush — go at your own pace.</p>
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
            {MODULES.map((mod) => (
              <Link
                key={mod.id}
                href={`/course/${mod.id}`}
                style={{ textDecoration: 'none' }}
              >
                <div className="card card-hover" style={{
                  padding: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  height: '100%',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-dm-serif), Georgia, serif',
                    fontSize: 32,
                    color: 'var(--accent-lt)',
                    lineHeight: 1,
                  }}>
                    0{mod.id}
                  </span>

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
                    <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--accent)' }}>
                      Start →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
