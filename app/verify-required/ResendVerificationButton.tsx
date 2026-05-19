'use client'

import { useState } from 'react'

export default function ResendVerificationButton() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const resend = async () => {
    setStatus('sending')
    try {
      const res = await fetch('/api/auth/resend-verification', { method: 'POST' })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <p style={{ fontSize: 15, fontWeight: 600, color: '#059669' }}>
        ✓ Sent! Check your inbox.
      </p>
    )
  }

  return (
    <>
      <button
        onClick={resend}
        disabled={status === 'sending'}
        className="btn btn-primary"
        style={{ width: '100%' }}
      >
        {status === 'sending' ? 'Sending…' : 'Resend verification email'}
      </button>
      {status === 'error' && (
        <p style={{ marginTop: 12, fontSize: 13, color: '#dc2626' }}>
          Something went wrong. Please try again.
        </p>
      )}
    </>
  )
}
