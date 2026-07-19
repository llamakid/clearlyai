'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { useEffect, useState } from 'react'
import type { User } from '@supabase/supabase-js'

interface NavbarProps {
  initialUser?: User | null
}

export default function Navbar({ initialUser }: NavbarProps = {}) {
  const [user, setUser] = useState<User | null>(initialUser ?? null)
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const supabase = createClient()

    if (initialUser === undefined) {
      supabase.auth.getUser().then(({ data }) => setUser(data.user))
    }

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => listener.subscription.unsubscribe()
    // initialUser is stable from server render — intentionally excluded from deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    setMenuOpen(false)
    router.push('/')
    router.refresh()
  }

  const close = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo" onClick={close}>
          Clearly,&nbsp;<span style={{ color: 'var(--accent)' }}>AI</span>
        </Link>

        <div className="nav-desktop">
          <Link href="/tools" style={navLink}>AI Tools</Link>
          <Link href="/curriculum" style={navLink}>Courses</Link>
          <Link href="/blog" style={navLink}>Blog</Link>
          {user ? (
            <>
              <Link href="/dashboard" style={navLink}>My Courses</Link>
              <button onClick={handleSignOut} style={ghostBtn}>Sign Out</button>
            </>
          ) : (
            <>
              <Link href="/login" style={navLink}>Log In</Link>
              <Link href="/signup" style={accentBtn}>Get Started</Link>
            </>
          )}
        </div>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="nav-mobile-menu">
          <Link href="/tools" className="nav-mobile-link" onClick={close}>AI Tools</Link>
          <Link href="/curriculum" className="nav-mobile-link" onClick={close}>Courses</Link>
          <Link href="/blog" className="nav-mobile-link" onClick={close}>Blog</Link>
          {user ? (
            <>
              <Link href="/dashboard" className="nav-mobile-link" onClick={close}>My Courses</Link>
              <button onClick={handleSignOut} className="nav-mobile-link">Sign Out</button>
            </>
          ) : (
            <>
              <Link href="/login" className="nav-mobile-link" onClick={close}>Log In</Link>
              <Link href="/signup" className="nav-mobile-cta" onClick={close}>Get Started →</Link>
            </>
          )}
        </div>
      )}
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
