import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import ResendVerificationButton from './ResendVerificationButton'

export default async function VerifyRequiredPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  // If they've already verified, send them to dashboard
  if (user.app_metadata?.email_verified !== false) redirect('/dashboard')

  return (
    <main style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    }}>
      <div style={{ width: '100%', maxWidth: 480, textAlign: 'center' }}>
        <Link href="/" style={{
          fontFamily: 'var(--font-dm-serif), Georgia, serif',
          fontSize: 26,
          color: 'var(--ink)',
          textDecoration: 'none',
          display: 'block',
          marginBottom: 40,
        }}>
          Clearly,&nbsp;<span style={{ color: 'var(--accent)' }}>AI</span>
        </Link>

        <div className="card" style={{ padding: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 20 }}>✉️</div>
          <h1 style={{
            fontFamily: 'var(--font-dm-serif), Georgia, serif',
            fontSize: 26,
            marginBottom: 12,
          }}>
            Verify your email to continue
          </h1>
          <p style={{ fontSize: 15, color: 'var(--ink-mid)', lineHeight: 1.6, marginBottom: 28 }}>
            We need to confirm <strong>{user.email}</strong> before you can access your courses.
            Check your inbox for the verification link we sent when you signed up.
          </p>

          <ResendVerificationButton />

          <p style={{ marginTop: 24, fontSize: 13, color: 'var(--ink-lt)' }}>
            Wrong account?{' '}
            <Link href="/api/auth/signout" style={{ color: 'var(--accent)', fontWeight: 600 }}>
              Sign out
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
