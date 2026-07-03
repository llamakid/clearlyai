'use client'

import { useState } from 'react'

export default function EmailSignup() {
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
        body: JSON.stringify({ email, firstName: firstName.trim() || undefined }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 36, marginBottom: 12 }}>✓</div>
        <p style={{ color: 'white', fontSize: 17, fontWeight: 600 }}>You&apos;re in. We&apos;ll be in touch.</p>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, marginTop: 6 }}>Check your inbox — we&apos;ll send you something useful soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', gap: 10, maxWidth: 440, margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
        <input
          type="text"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          placeholder="First name (optional)"
          autoComplete="given-name"
          style={{
            flex: '1 1 100%',
            padding: '13px 18px',
            borderRadius: 10, border: 'none',
            fontSize: 15, fontFamily: 'inherit',
            color: 'var(--ink)', outline: 'none',
            background: 'white',
          }}
        />
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="your@email.com"
          style={{
            flex: 1, minWidth: 220,
            padding: '13px 18px',
            borderRadius: 10, border: 'none',
            fontSize: 15, fontFamily: 'inherit',
            color: 'var(--ink)', outline: 'none',
            background: 'white',
          }}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          style={{
            background: 'var(--ink)', color: 'white',
            border: 'none', borderRadius: 10,
            padding: '13px 24px', fontSize: 15, fontWeight: 700,
            cursor: status === 'loading' ? 'wait' : 'pointer',
            fontFamily: 'inherit', transition: 'opacity 0.15s',
            opacity: status === 'loading' ? 0.7 : 1,
            whiteSpace: 'nowrap',
          }}
        >
          {status === 'loading' ? 'Saving...' : 'Keep Me Posted'}
        </button>
      </div>
      {status === 'error' && (
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.8)', fontSize: 13, marginTop: 10 }}>
          Something went wrong — try again.
        </p>
      )}
    </form>
  )
}
