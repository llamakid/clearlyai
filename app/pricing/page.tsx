import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CheckoutButton from './CheckoutButton'

const plans = [
  {
    id: 'monthly' as const,
    label: 'Monthly',
    price: '$15',
    period: '/mo',
    subNote: null,
    badge: null,
    description: 'Start learning with no long-term commitment.',
    features: [
      'All current modules + lessons',
      'New courses as they launch',
      'Go at your own pace, any device',
      'Progress saved automatically',
    ],
    buttonLabel: 'Start monthly — $15/mo',
    highlight: false,
  },
  {
    id: 'yearly' as const,
    label: 'Yearly',
    price: '$120',
    period: '/yr',
    subNote: '$10/mo · billed once a year',
    badge: 'Best Value',
    description: 'The best value for committed learners — one payment, full access all year.',
    features: [
      'Everything in Monthly',
      'Save 33% vs. monthly billing',
      'New courses as they launch',
      'Go at your own pace, any device',
    ],
    buttonLabel: 'Start yearly — $120/yr',
    highlight: true,
  },
  {
    id: 'forever' as const,
    label: 'Forever',
    price: '$299',
    period: ' one-time',
    subNote: 'Founding rate — price goes up after we open to everyone',
    badge: 'Founding Member',
    description: 'Become a Founding Member and get lifetime access to everything we build — every course, every lesson, every update. The library keeps growing. Your price never changes.',
    features: [
      'Everything in Yearly',
      'Founding Member pricing — locked in forever',
      'All future courses included',
      'Never think about it again',
    ],
    buttonLabel: 'Claim founding member access — $299',
    highlight: false,
  },
]

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '72px 32px' }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>

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
              Pick your plan.
            </h1>
            <p style={{ fontSize: 17, color: 'var(--ink-mid)', maxWidth: 480, margin: '0 auto' }}>
              All plans include every current module and every new course we add. Cancel or change anytime.
            </p>
          </div>

          {/* Pricing cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
            alignItems: 'start',
            marginBottom: 64,
          }}>
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="card"
                style={{
                  padding: plan.highlight ? '40px 32px' : '32px 28px',
                  position: 'relative',
                  overflow: 'hidden',
                  ...(plan.highlight && {
                    boxShadow: '0 8px 32px rgba(61,122,138,0.14)',
                  }),
                }}
              >
                {plan.highlight && (
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: 4,
                    background: 'var(--accent)',
                  }} />
                )}

                {plan.badge ? (
                  <div style={{
                    display: 'inline-block',
                    background: 'var(--accent-xl)',
                    color: 'var(--accent-dk)',
                    fontSize: 11, fontWeight: 700,
                    letterSpacing: '0.07em', textTransform: 'uppercase',
                    padding: '4px 12px', borderRadius: 999,
                    marginBottom: 16,
                  }}>
                    {plan.badge}
                  </div>
                ) : (
                  <div style={{ height: 28, marginBottom: 16 }} />
                )}

                <div style={{
                  fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
                  textTransform: 'uppercase', color: 'var(--ink-mid)', marginBottom: 8,
                }}>
                  {plan.label}
                </div>

                <div style={{ marginBottom: plan.subNote ? 4 : 20 }}>
                  <span style={{
                    fontFamily: 'var(--font-dm-serif), Georgia, serif',
                    fontSize: plan.highlight ? 52 : 44,
                    color: 'var(--ink)',
                    lineHeight: 1,
                  }}>
                    {plan.price}
                  </span>
                  <span style={{ fontSize: 15, color: 'var(--ink-lt)', marginLeft: 4 }}>
                    {plan.period}
                  </span>
                </div>

                {plan.subNote && (
                  <div style={{
                    fontSize: 13, color: 'var(--ink-lt)', marginBottom: 16,
                  }}>
                    {plan.subNote}
                  </div>
                )}

                <p style={{
                  fontSize: 14, color: 'var(--ink-mid)',
                  lineHeight: 1.55, marginBottom: 24,
                }}>
                  {plan.description}
                </p>

                <ul style={{
                  listStyle: 'none', padding: 0, marginBottom: 28,
                  display: 'flex', flexDirection: 'column', gap: 10,
                }}>
                  {plan.features.map((item) => (
                    <li key={item} style={{
                      display: 'flex', alignItems: 'flex-start',
                      gap: 10, fontSize: 14, color: 'var(--ink-mid)',
                    }}>
                      <span style={{
                        color: 'var(--accent)', fontWeight: 700,
                        flexShrink: 0, marginTop: 1,
                      }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <CheckoutButton planType={plan.id} label={plan.buttonLabel} />

                <p style={{
                  marginTop: 12, fontSize: 12,
                  color: 'var(--ink-lt)', textAlign: 'center',
                }}>
                  Secure checkout via Stripe
                </p>
              </div>
            ))}
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
                  q: 'What\'s the difference between the plans?',
                  a: 'All plans give you the same access — every current module and every new course we add. Monthly and yearly renew automatically; Forever is a single payment with no renewals.',
                },
                {
                  q: 'Can I switch plans later?',
                  a: 'Yes. You can upgrade, downgrade, or cancel anytime from your account settings. If you upgrade to Forever, your remaining subscription period is credited.',
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
