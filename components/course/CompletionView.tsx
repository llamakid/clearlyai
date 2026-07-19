'use client'

import { useState } from 'react'
import Link from 'next/link'

interface CompletionViewProps {
  moduleId: number
  nextModuleId?: number
  courseSlug: string
  userId?: string
  onGiveFeedback: () => void
}

// Inline email capture shown to anonymous finishers of the free course —
// light-background variant (EmailSignup is styled for the dark teal band).
function FreeCourseEmailCapture() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName: firstName.trim() || undefined, source: 'free-course' }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{
        background: 'var(--accent-lt)', borderRadius: 16, padding: '20px 24px',
        fontSize: 15, color: 'var(--accent-dk)', fontWeight: 600,
      }}>
        ✓ Done — check your inbox. All 10 prompts are on their way.
      </div>
    )
  }

  return (
    <div style={{
      background: 'var(--white)', border: '1px solid var(--border)',
      borderRadius: 16, padding: '24px 24px 20px', textAlign: 'left',
    }}>
      <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>
        Want to keep the 10 prompts?
      </p>
      <p style={{ fontSize: 14, color: 'var(--ink-mid)', lineHeight: 1.6, marginBottom: 14 }}>
        Drop your email and we&apos;ll send you a link back to the course, plus one practical AI tip a week. No spam, unsubscribe any time.
      </p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <input
          type="text"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          placeholder="First name (optional)"
          autoComplete="given-name"
          style={{
            flex: '1 1 100%', padding: '11px 16px',
            borderRadius: 10, border: '1.5px solid var(--border-md)',
            fontSize: 14, fontFamily: 'inherit', color: 'var(--ink)',
            outline: 'none', background: 'var(--bg)',
          }}
        />
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="your@email.com"
          style={{
            flex: 1, minWidth: 200, padding: '11px 16px',
            borderRadius: 10, border: '1.5px solid var(--border-md)',
            fontSize: 14, fontFamily: 'inherit', color: 'var(--ink)',
            outline: 'none', background: 'var(--bg)',
          }}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          style={{
            background: 'var(--accent)', color: 'white', border: 'none',
            borderRadius: 10, padding: '11px 20px', fontSize: 14, fontWeight: 700,
            cursor: status === 'loading' ? 'wait' : 'pointer', fontFamily: 'inherit',
            opacity: status === 'loading' ? 0.7 : 1, whiteSpace: 'nowrap',
          }}
        >
          {status === 'loading' ? 'Saving…' : 'Send them to me'}
        </button>
      </form>
      {status === 'error' && (
        <p style={{ fontSize: 13, color: '#b4533a', marginTop: 8 }}>
          Something went wrong — try again.
        </p>
      )}
    </div>
  )
}

export default function CompletionView({ moduleId, nextModuleId, courseSlug, userId, onGiveFeedback }: CompletionViewProps) {
  const isStarter = moduleId === 0

  if (isStarter) {
    return (
      <div style={{ flex: 1, overflowY: 'auto', padding: 40, display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: 620, textAlign: 'center', margin: 'auto' }}>
          <div style={{ fontSize: 56, marginBottom: 20 }}>🚀</div>
          <h2 style={{ fontFamily: 'var(--font-dm-serif), Georgia, serif', fontSize: 32, color: 'var(--ink)', marginBottom: 12 }}>
            You just did something most people haven&apos;t.
          </h2>
          <p style={{ fontSize: 16, color: 'var(--ink-mid)', lineHeight: 1.65, marginBottom: 28 }}>
            Every one of those 10 things works today, with a free AI account. And this was the shortest course
            we have — the full curriculum is where it really pays off, and it&apos;s all free:
          </p>

          <ul style={{
            listStyle: 'none', padding: 0, margin: '0 auto 32px',
            display: 'inline-flex', flexDirection: 'column', gap: 10, textAlign: 'left',
          }}>
            {[
              'Eight full courses — work, business, everyday life',
              '240 short lessons, each one immediately usable',
              'One free account unlocks everything — no credit card',
            ].map(item => (
              <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, color: 'var(--ink)' }}>
                <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                {item}
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, marginBottom: 32 }}>
            <Link href={userId ? '/dashboard' : '/signup'} style={{
              display: 'inline-block', padding: '16px 40px',
              background: 'var(--accent)', color: 'white', borderRadius: 12,
              fontSize: 16, fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(61,122,138,0.3)',
            }}>
              {userId ? 'Explore all eight courses →' : 'Unlock everything free →'}
            </Link>
            <Link href="/curriculum" style={{ fontSize: 14, color: 'var(--accent)', fontWeight: 600 }}>
              Browse all eight courses first
            </Link>
          </div>

          {!userId && <FreeCourseEmailCapture />}

          <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            {!userId && (
              <p style={{ fontSize: 13, color: 'var(--ink-lt)' }}>
                Want to save your progress? <Link href="/signup" style={{ color: 'var(--accent)', fontWeight: 600 }}>Create a free account →</Link>
              </p>
            )}
            <button
              onClick={onGiveFeedback}
              style={{
                background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                fontSize: 14, color: 'var(--ink-lt)', textDecoration: 'underline', padding: 4,
              }}
            >
              Got 2 minutes? Give quick feedback →
            </button>
          </div>
        </div>
      </div>
    )
  }

  let icon = '🎉'
  let title = `Module ${moduleId} complete. Nice work.`
  let body = "You're building real momentum. Keep going while it's fresh."
  let primaryLabel = `Continue to Module ${nextModuleId} →`
  let primaryHref = `/course/${nextModuleId}`

  if (!nextModuleId) {
    icon = '🎓'
    title = 'You did it. Course complete.'
    body = "You've built a real skill you'll use for years. Ready to keep the momentum going with another course?"
    primaryLabel = 'Explore more courses →'
    primaryHref = '/dashboard'
  }

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '100%', maxWidth: 620, textAlign: 'center' }}>
        <div style={{ fontSize: 56, marginBottom: 20 }}>{icon}</div>
        <h2 style={{ fontFamily: 'var(--font-dm-serif), Georgia, serif', fontSize: 32, color: 'var(--ink)', marginBottom: 12 }}>
          {title}
        </h2>
        <p style={{ fontSize: 16, color: 'var(--ink-mid)', lineHeight: 1.65, marginBottom: 32 }}>
          {body}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <Link href={primaryHref} style={{
            display: 'inline-block', padding: '16px 40px',
            background: 'var(--accent)', color: 'white', borderRadius: 12,
            fontSize: 16, fontWeight: 700, textDecoration: 'none',
            boxShadow: '0 4px 16px rgba(61,122,138,0.3)',
          }}>
            {primaryLabel}
          </Link>

          <button
            onClick={onGiveFeedback}
            style={{
              background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit',
              fontSize: 14, color: 'var(--ink-lt)', textDecoration: 'underline', padding: 4,
            }}
          >
            Got 2 minutes? Give quick feedback →
          </button>
        </div>
      </div>
    </div>
  )
}
