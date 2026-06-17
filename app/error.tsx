'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '72px 32px 96px', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>

          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16,
          }}>
            Something went wrong
          </div>

          <h1 style={{
            fontFamily: 'var(--font-dm-serif), Georgia, serif',
            fontSize: 'clamp(32px, 5vw, 48px)',
            marginBottom: 16,
            lineHeight: 1.2,
          }}>
            That didn&rsquo;t work.
          </h1>

          <p style={{
            fontSize: 17,
            color: 'var(--ink-mid)',
            lineHeight: 1.6,
            maxWidth: 420,
            margin: '0 auto 40px',
          }}>
            Something went wrong on our end. Try refreshing the page — if the problem keeps happening, let us know.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 48 }}>
            <button
              onClick={reset}
              style={{
                display: 'block',
                width: '100%',
                background: 'var(--accent)',
                color: 'white',
                fontWeight: 600,
                fontSize: 15,
                padding: '14px 28px',
                borderRadius: 12,
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Try again
            </button>
            <Link href="/" style={{
              display: 'block',
              background: 'white',
              color: 'var(--ink)',
              fontWeight: 600,
              fontSize: 15,
              padding: '14px 28px',
              borderRadius: 12,
              textDecoration: 'none',
              border: '1px solid var(--border)',
            }}>
              Go to the homepage
            </Link>
          </div>

          <p style={{ fontSize: 14, color: 'var(--ink-lt)' }}>
            Need help?{' '}
            <a href="mailto:nate@learnaiclearly.com" style={{ color: 'var(--accent)', fontWeight: 600 }}>
              Email us
            </a>{' '}
            and we&rsquo;ll sort it out.
          </p>

        </div>
      </main>
      <Footer />
    </>
  )
}
