'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { useEffect, useState } from 'react'
import type { User } from '@supabase/supabase-js'

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({ data }) => setUser(data.user))

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => listener.subscription.unsubscribe()
  }, [])

  const handleSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <nav style={{
      background: 'rgba(253,252,250,0.92)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(28,43,53,0.1)',
      padding: '0 32px',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{
        maxWidth: 1120,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 64,
      }}>
        <Link href="/" style={{
          fontFamily: 'var(--font-dm-serif), Georgia, serif',
          fontSize: 22,
          color: 'var(--ink)',
          textDecoration: 'none',
          letterSpacing: '-0.01em',
        }}>
          Clearly,&nbsp;<span style={{ color: 'var(--accent)' }}>AI</span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Link href="/blog" style={navLink}>Blog</Link>

          {user ? (
            <>
              <Link href="/dashboard" style={navLink}>My Courses</Link>
              <button onClick={handleSignOut} style={ghostBtn}>Sign Out</button>
            </>
          ) : (
            <>
              <Link href="/login" style={navLink}>Log In</Link>
              <Link href="/pricing" style={accentBtn}>Get Started</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

const navLink: React.CSSProperties = {
  color: 'var(--ink-mid)',
  fontSize: 14,
  fontWeight: 500,
  padding: '8px 14px',
  borderRadius: 8,
  textDecoration: 'none',
}

const ghostBtn: React.CSSProperties = {
  color: 'var(--ink-mid)',
  fontSize: 14,
  fontWeight: 500,
  padding: '8px 14px',
  borderRadius: 8,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'inherit',
}

const accentBtn: React.CSSProperties = {
  background: 'var(--accent)',
  color: 'white',
  fontSize: 14,
  fontWeight: 600,
  padding: '9px 20px',
  borderRadius: 999,
  textDecoration: 'none',
  marginLeft: 4,
}
