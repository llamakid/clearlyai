import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CheckoutButton from './CheckoutButton'

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '72px 32px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12,
            }}>
              Pricing
            </div>
            <h1 style={{
              fontFamily: 'var(--font-dm-serif), Georgia, serif',
              fontSize: 'clamp(32px, 5vw, 48px)',
              marginBottom: 14,
            }}>
              One price. Everything included.
            </h1>
            <p style={{ fontSize: 17, color: 'var(--ink-mid)', maxWidth: 520, margin: '0 auto' }}>
              No subscription. No upsells. Pay once, access everything — including all future updates.
            </p>
          </div>

          {/* Pricing card */}
          <div style={{
            maxWidth: 520,
            margin: '0 auto 56px',
          }}>
            <div className="card" style={{ padding: '40px 44px', position: 'relative', overflow: 'hidden' }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 4,
                background: 'var(--accent)',
              }} />

              <div style={{
                display: 'inline-block',
                background: 'var(--accent-xl)',
                color: 'var(--accent-dk)',
                fontSize: 12, fontWeight: 700,
                letterSpacing: '0.07em', textTransform: 'uppercase',
                padding: '4px 12px', borderRadius: 999,
                marginBottom: 20,
              }}>
                Full Course Access
              </div>

              <div style={{ marginBottom: 28 }}>
                <span style={{
                  fontFamily: 'var(--font-dm-serif), Georgia, serif',
                  fontSize: 56, color: 'var(--ink)',
                }}>$97</span>
                <span style={{ fontSize: 15, color: 'var(--ink-lt)', marginLeft: 8 }}>one-time</span>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  'All 6 modules — 40+ lessons',
                  'Go at your own pace, on any device',
                  'Hands-on exercises with real prompts',
                  'Progress saved — pick up where you left off',
                  'All future updates included',
                  '30-day money-back guarantee',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, color: 'var(--ink-mid)' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <CheckoutButton />

              <p style={{ marginTop: 16, fontSize: 13, color: 'var(--ink-lt)', textAlign: 'center' }}>
                Secure checkout via Stripe. 30-day refund, no questions asked.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'var(--font-dm-serif), Georgia, serif',
              fontSize: 28, textAlign: 'center', marginBottom: 32,
            }}>
              Questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                {
                  q: 'Do I need any technical background?',
                  a: 'None at all. The course is designed specifically for people who have no tech background. If you can send an email, you can do this.',
                },
                {
                  q: 'How long do I have access?',
                  a: 'Forever. Pay once and it\'s yours — including any new content we add.',
                },
                {
                  q: 'What if I don\'t like it?',
                  a: 'Email us within 30 days for a full refund, no questions asked.',
                },
                {
                  q: 'How long does the course take?',
                  a: 'About 4–6 hours total across 6 modules. Most people do one module per week. There\'s no deadline — go at the pace that works for you.',
                },
              ].map(({ q, a }) => (
                <div key={q} className="card" style={{ padding: '20px 24px' }}>
                  <p style={{ fontWeight: 600, marginBottom: 8, fontSize: 15 }}>{q}</p>
                  <p style={{ fontSize: 14, color: 'var(--ink-mid)', lineHeight: 1.6 }}>{a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
