'use client'

import { useState } from 'react'

export default function EmailVerificationBanner({ email }: { email: string }) {
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

  return (
    <div style={{
      background: '#fffbeb',
      border: '1px solid #f59e0b',
      borderRadius: 12,
      padding: '14px 20px',
      marginBottom: 28,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontSize: 20 }}>✉️</span>
        <div>
          <p style={{ fontWeight: 600, fontSize: 14, color: '#92400e', marginBottom: 2 }}>
            Please verify your email address
          </p>
          <p style={{ fontSize: 13, color: '#b45309' }}>
            We sent a link to <strong>{email}</strong>. Check your inbox (and spam folder).
          </p>
        </div>
      </div>

      {status === 'sent' ? (
        <span style={{ fontSize: 13, fontWeight: 600, color: '#059669' }}>Sent! Check your inbox.</span>
      ) : status === 'error' ? (
        <span style={{ fontSize: 13, color: '#dc2626' }}>Something went wrong — try again.</span>
      ) : (
        <button
          onClick={resend}
          disabled={status === 'sending'}
          style={{
            background: 'none',
            border: '1px solid #f59e0b',
            borderRadius: 8,
            padding: '6px 14px',
            fontSize: 13,
            fontWeight: 600,
            color: '#92400e',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          {status === 'sending' ? 'Sending…' : 'Resend link'}
        </button>
      )}
    </div>
  )
}
