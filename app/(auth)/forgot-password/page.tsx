'use client'

import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const supabase = createClient()
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${SITE_URL}/update-password`,
    })

    if (error) {
      setError('Something went wrong. Please try again.')
      setLoading(false)
      return
    }

    setSubmitted(true)
    setLoading(false)
  }

  return (
    <main style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    }}>
      <div style={{ width: '100%', maxWidth: 440 }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <Link href="/" style={{
            fontFamily: 'var(--font-dm-serif), Georgia, serif',
            fontSize: 26,
            color: 'var(--ink)',
            textDecoration: 'none',
          }}>
            Clearly,&nbsp;<span style={{ color: 'var(--accent)' }}>AI</span>
          </Link>
          <h1 style={{
            fontFamily: 'var(--font-dm-serif), Georgia, serif',
            fontSize: 28,
            marginTop: 20,
            marginBottom: 8,
          }}>
            Reset your password
          </h1>
          <p style={{ fontSize: 15, color: 'var(--ink-mid)' }}>
            Enter your email and we&apos;ll send you a reset link.
          </p>
        </div>

        <div className="card" style={{ padding: 36 }}>
          {submitted ? (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✉️</div>
              <h2 style={{ fontFamily: 'var(--font-dm-serif), Georgia, serif', fontSize: 22, marginBottom: 12 }}>
                Check your inbox
              </h2>
              <p style={{ fontSize: 15, color: 'var(--ink-mid)', lineHeight: 1.6, marginBottom: 24 }}>
                If <strong>{email}</strong> has an account, we&apos;ve sent a password reset link. It may take a minute or two to arrive.
              </p>
              <Link href="/login" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: 15 }}>
                Back to sign in
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                />
              </div>

              {error && <p className="error-text">{error}</p>}

              <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%' }}>
                {loading ? 'Sending…' : 'Send reset link'}
              </button>

              <p style={{ textAlign: 'center', fontSize: 14, color: 'var(--ink-mid)' }}>
                Remember it?{' '}
                <Link href="/login" style={{ color: 'var(--accent)', fontWeight: 600 }}>
                  Sign in
                </Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
