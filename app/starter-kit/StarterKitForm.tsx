'use client'

import { useState } from 'react'

export default function StarterKitForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'starter-kit' }),
      })
      if (res.ok) {
        setStatus('success')
        window.location.href = '/api/download/starter-kit'
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 36, marginBottom: 12 }}>✓</div>
        <p style={{ color: 'var(--ink)', fontSize: 17, fontWeight: 600 }}>
          Your download is starting.
        </p>
        <p style={{ color: 'var(--ink-mid)', fontSize: 14, marginTop: 6 }}>
          We also emailed you a copy so you can find it later. If the download didn&apos;t start,{' '}
          <a href="/api/download/starter-kit" style={{ color: 'var(--accent)', fontWeight: 600 }}>
            click here
          </a>.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', gap: 10, maxWidth: 440, margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="your@email.com"
          style={{
            flex: 1, minWidth: 220,
            padding: '13px 18px',
            borderRadius: 10, border: '1px solid var(--border)',
            fontSize: 15, fontFamily: 'inherit',
            color: 'var(--ink)', outline: 'none',
            background: 'white',
          }}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn btn-primary"
          style={{
            border: 'none', borderRadius: 10,
            padding: '13px 24px', fontSize: 15, fontWeight: 700,
            cursor: status === 'loading' ? 'wait' : 'pointer',
            fontFamily: 'inherit',
            opacity: status === 'loading' ? 0.7 : 1,
            whiteSpace: 'nowrap',
          }}
        >
          {status === 'loading' ? 'Sending...' : 'Send Me the Kit'}
        </button>
      </div>
      <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--ink-lt)', marginTop: 12 }}>
        Free PDF, instant download. We&apos;ll also send you practical AI tips — unsubscribe any time.
      </p>
      {status === 'error' && (
        <p style={{ textAlign: 'center', color: '#b04a3a', fontSize: 13, marginTop: 10 }}>
          Something went wrong — try again.
        </p>
      )}
    </form>
  )
}
