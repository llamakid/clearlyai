'use client'

import { useState } from 'react'

/**
 * In-prose email capture used mid-article in blog posts. Light card styled for
 * the post body (not the dark newsletter block). Subscribes via /api/subscribe
 * with a distinct `source` so blog conversions are measurable, and delivers the
 * real AI Starter Kit (source 'blog-tools' triggers the kit email server-side).
 */
export default function InlineLeadMagnet({
  source = 'blog-tools',
  heading = 'Want these prompts in one place?',
  blurb = 'Get the free AI Starter Kit — a plain-English set of copy-and-use prompts like the ones above. No jargon, no cost.',
  button = 'Send me the free kit',
}: {
  source?: string
  heading?: string
  blurb?: string
  button?: string
}) {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName: firstName.trim() || undefined, source }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div style={{
      margin: '40px 0',
      background: 'var(--accent-xl)',
      border: '1px solid var(--accent-lt)',
      borderRadius: 16,
      padding: '28px 26px',
    }}>
      {status === 'success' ? (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>✓</div>
          <p style={{
            fontWeight: 700, fontSize: 18, color: 'var(--ink)', marginBottom: 6,
            fontFamily: 'var(--font-dm-serif), Georgia, serif',
          }}>
            Check your inbox — the kit is on its way.
          </p>
          <p style={{ fontSize: 14, color: 'var(--ink-mid)', margin: 0 }}>
            Didn&apos;t get it in a minute?{' '}
            <a href="/api/download/starter-kit" style={{ color: 'var(--accent)', fontWeight: 600 }}>
              Download it directly.
            </a>
          </p>
        </div>
      ) : (
        <>
          <p style={{
            fontWeight: 700, fontSize: 19, color: 'var(--ink)', marginBottom: 6,
            fontFamily: 'var(--font-dm-serif), Georgia, serif',
          }}>
            {heading}
          </p>
          <p style={{ fontSize: 15, color: 'var(--ink-mid)', lineHeight: 1.55, marginBottom: 18 }}>
            {blurb}
          </p>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <input
                type="text"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                placeholder="First name (optional)"
                autoComplete="given-name"
                style={{
                  flex: '1 1 140px', minWidth: 0,
                  padding: '12px 16px', borderRadius: 10,
                  border: '1px solid var(--border)', background: 'white',
                  fontSize: 15, fontFamily: 'inherit', color: 'var(--ink)', outline: 'none',
                }}
              />
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                autoComplete="email"
                style={{
                  flex: '2 1 200px', minWidth: 0,
                  padding: '12px 16px', borderRadius: 10,
                  border: '1px solid var(--border)', background: 'white',
                  fontSize: 15, fontFamily: 'inherit', color: 'var(--ink)', outline: 'none',
                }}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                  flex: '1 1 100%',
                  background: 'var(--accent)', color: 'white',
                  border: 'none', borderRadius: 10,
                  padding: '13px 24px', fontSize: 15, fontWeight: 700,
                  cursor: status === 'loading' ? 'wait' : 'pointer',
                  fontFamily: 'inherit', transition: 'opacity 0.15s',
                  opacity: status === 'loading' ? 0.7 : 1,
                }}
              >
                {status === 'loading' ? 'Sending…' : button}
              </button>
            </div>
          </form>
          {status === 'error' && (
            <p style={{ fontSize: 13, color: '#b4402f', marginTop: 10, marginBottom: 0 }}>
              Something went wrong — please try again.
            </p>
          )}
          <p style={{ fontSize: 12, color: 'var(--ink-lt)', marginTop: 12, marginBottom: 0 }}>
            One email with your kit. Unsubscribe anytime.
          </p>
        </>
      )}
    </div>
  )
}
