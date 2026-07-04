'use client'

export const dynamic = 'force-dynamic'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import GoogleSignInButton from '@/components/GoogleSignInButton'

export default function SignupPage() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      setLoading(false)
      return
    }

    // Server-side signup: creates account + sends verification email
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, firstName: firstName.trim() || undefined }),
    })

    const json = await res.json()
    if (!res.ok) {
      setError(json.error ?? 'Something went wrong. Please try again.')
      setLoading(false)
      return
    }

    // Account created — sign in immediately and go to dashboard
    const supabase = createClient()
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password })
    if (signInError) {
      setError('Account created but sign-in failed. Please go to the login page.')
      setLoading(false)
      return
    }

    router.push('/dashboard')
    router.refresh()
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
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
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
            Create your account
          </h1>
          <p style={{ fontSize: 14, color: 'var(--ink-lt)' }}>
            Already have one?{' '}
            <Link href="/login" style={{ color: 'var(--accent)', fontWeight: 600 }}>Sign in</Link>
          </p>
        </div>

        <div style={{
          background: 'var(--accent-lt)',
          border: '1px solid var(--accent)',
          borderRadius: 12,
          padding: '16px 20px',
          marginBottom: 20,
        }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--accent-dk)', marginBottom: 8 }}>
            You&apos;re one step from your free starter course:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 5 }}>
            {[
              '10 practical AI tasks with ready-to-use prompts',
              '2 short lessons — no tech background needed',
              'No credit card required, ever',
            ].map(item => (
              <li key={item} style={{ fontSize: 13, color: 'var(--accent-dk)', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="card" style={{ padding: 36 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 20 }}>
            <GoogleSignInButton />
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ flex: 1, height: 1, background: '#d5d2c9' }} />
              <span style={{ fontSize: 13, color: 'var(--ink-mid)' }}>or sign up with email</span>
              <span style={{ flex: 1, height: 1, background: '#d5d2c9' }} />
            </div>
          </div>
          <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="form-group">
              <label htmlFor="firstName">First name <span style={{ fontWeight: 400, color: 'var(--ink-lt)' }}>(optional)</span></label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="What should we call you?"
                autoComplete="given-name"
              />
            </div>

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

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 8 characters"
                required
                autoComplete="new-password"
              />
            </div>

            {error && <p className="error-text">{error}</p>}

            <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%' }}>
              {loading ? 'Creating account…' : 'Create account'}
            </button>

            <p style={{ fontSize: 12, color: 'var(--ink-lt)', textAlign: 'center', lineHeight: 1.5 }}>
              Free to join. No credit card needed now — you&apos;ll only be asked for payment
              if you later choose to unlock all courses.{' '}
              <Link href="/terms" style={{ color: 'var(--ink-lt)' }}>Terms of service.</Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  )
}
