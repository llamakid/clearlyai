import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StarterKitForm from './StarterKitForm'

export const metadata: Metadata = {
  title: 'Free AI Starter Kit — Clearly, AI',
  description: 'Download the free Clearly, AI Starter Kit — a plain-English PDF with practical AI prompts and tasks you can use today. No tech background needed.',
  alternates: {
    canonical: 'https://learnaiclearly.com/starter-kit',
  },
}

export default function StarterKitPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section-pad" style={{ background: 'var(--bg)', textAlign: 'center' }}>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'var(--accent-lt)',
              borderRadius: 999,
              padding: '6px 18px',
              fontSize: 12,
              fontWeight: 700,
              color: 'var(--accent-dk)',
              marginBottom: 28,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              Free Download
            </div>

            <h1 style={{
              fontFamily: 'var(--font-dm-serif), Georgia, serif',
              fontSize: 'clamp(36px, 5vw, 56px)',
              color: 'var(--ink)',
              lineHeight: 1.1,
              marginBottom: 20,
              letterSpacing: '-0.02em',
            }}>
              The AI Starter Kit,<br />
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>in plain English.</em>
            </h1>

            <p style={{
              fontSize: 18,
              color: 'var(--ink-mid)',
              lineHeight: 1.7,
              maxWidth: 520,
              margin: '0 auto 36px',
            }}>
              A free PDF with practical things you can do with AI today — each with a
              ready-to-use prompt. No jargon, no tech background needed. Tell us where
              to send it and the download starts right away.
            </p>

            <StarterKitForm />
          </div>
        </section>

        <section className="section-pad" style={{
          background: 'var(--bg-alt)',
          borderTop: '1px solid var(--border)',
        }}>
          <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{
              fontFamily: 'var(--font-dm-serif), Georgia, serif',
              fontSize: 'clamp(24px, 3vw, 32px)',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              marginBottom: 14,
            }}>
              What&apos;s inside
            </h2>
            <ul style={{
              listStyle: 'none', padding: 0, margin: '0 auto 32px',
              display: 'inline-flex', flexDirection: 'column', gap: 10, textAlign: 'left',
            }}>
              {[
                'Practical AI tasks you can try in minutes',
                'Copy-and-paste prompts for each one',
                'Plain-English explanations — no terms left undefined',
              ].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, color: 'var(--ink-mid)' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: 15, color: 'var(--ink-mid)', lineHeight: 1.65 }}>
              Want the full experience? The free course{' '}
              <strong>&ldquo;10 Things You Can Do With AI Today&rdquo;</strong> walks through
              everything step by step.{' '}
              <a href="/signup" style={{ color: 'var(--accent)', fontWeight: 600 }}>
                Start it free →
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
