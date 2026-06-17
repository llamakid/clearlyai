import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '72px 32px 96px', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>

          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16,
          }}>
            404
          </div>

          <h1 style={{
            fontFamily: 'var(--font-dm-serif), Georgia, serif',
            fontSize: 'clamp(32px, 5vw, 48px)',
            marginBottom: 16,
            lineHeight: 1.2,
          }}>
            We can&rsquo;t find that page.
          </h1>

          <p style={{
            fontSize: 17,
            color: 'var(--ink-mid)',
            lineHeight: 1.6,
            marginBottom: 40,
            maxWidth: 420,
            margin: '0 auto 40px',
          }}>
            The page you&rsquo;re looking for may have moved or never existed. Here are a few places to start instead.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 48 }}>
            <Link href="/" style={{
              display: 'block',
              background: 'var(--accent)',
              color: 'white',
              fontWeight: 600,
              fontSize: 15,
              padding: '14px 28px',
              borderRadius: 12,
              textDecoration: 'none',
            }}>
              Go to the homepage
            </Link>
            <Link href="/course/0" style={{
              display: 'block',
              background: 'var(--accent-lt)',
              color: 'var(--accent-dk)',
              fontWeight: 600,
              fontSize: 15,
              padding: '14px 28px',
              borderRadius: 12,
              textDecoration: 'none',
            }}>
              Try the free starter course
            </Link>
            <Link href="/curriculum" style={{
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
              Browse all courses
            </Link>
          </div>

          <p style={{ fontSize: 14, color: 'var(--ink-lt)' }}>
            Still stuck?{' '}
            <a href="mailto:nate@learnaiclearly.com" style={{ color: 'var(--accent)', fontWeight: 600 }}>
              Email us
            </a>{' '}
            and we&rsquo;ll help.
          </p>

        </div>
      </main>
      <Footer />
    </>
  )
}
