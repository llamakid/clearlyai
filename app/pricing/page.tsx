import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CheckoutButton from './CheckoutButton'

export const metadata: Metadata = {
  title: 'Pricing — Clearly, AI',
  description: 'Flexible plans starting at $15/mo. Monthly, yearly, or lifetime access to every AI course. No tech background needed. Cancel anytime.',
  openGraph: {
    title: 'Pricing — Clearly, AI',
    description: 'Flexible plans starting at $15/mo. Monthly, yearly, or lifetime access to every AI course. Cancel anytime.',
    url: 'https://learnaiclearly.com/pricing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing — Clearly, AI',
    description: 'Flexible plans starting at $15/mo. Monthly, yearly, or lifetime access to every AI course. Cancel anytime.',
  },
  alternates: {
    canonical: 'https://learnaiclearly.com/pricing',
  },
}

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
    buttonLabel: 'Get started, $15/mo',
    highlight: false,
  },
  {
    id: 'yearly' as const,
    label: 'Yearly',
    price: '$120',
    period: '/yr',
    subNote: '$10/mo · billed once a year',
    badge: 'Best Value',
    description: 'The best value for people who are serious about this. One payment, full access all year.',
    features: [
      'Everything in Monthly',
      'Save 33% vs. monthly billing',
      'New courses as they launch',
      'Go at your own pace, any device',
    ],
    buttonLabel: 'Get started, $120/yr',
    highlight: true,
  },
  {
    id: 'forever' as const,
    label: 'Forever',
    price: '$299',
    period: ' one-time',
    subNote: null,
    badge: 'Lifetime',
    description: 'Pay once and get lifetime access to everything we build. Every course, every lesson, every update. The library keeps growing and your price never changes.',
    features: [
      'Everything in Yearly',
      'One payment, locked in forever',
      'All future courses included',
      'Never think about it again',
    ],
    buttonLabel: 'Get lifetime access, $299',
    highlight: false,
  },
]

const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Clearly, AI Courses',
  description: 'All courses included in one subscription. No tech background needed.',
  url: 'https://learnaiclearly.com/pricing',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Course',
        name: 'AI Foundations',
        description: 'A plain-English introduction to artificial intelligence for everyday people. Learn what AI is, how to use ChatGPT, write effective prompts, and apply AI to writing, research, and planning.',
        provider: { '@type': 'Organization', name: 'Clearly, AI', url: 'https://learnaiclearly.com' },
        url: 'https://learnaiclearly.com/courses/ai-foundations',
        educationalLevel: 'Beginner',
        timeRequired: 'PT3H',
        numberOfCredits: 6,
        offers: { '@type': 'Offer', price: '15.00', priceCurrency: 'USD', priceValidUntil: '2026-12-31', availability: 'https://schema.org/InStock' },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Course',
        name: 'AI at Work',
        description: 'Practical AI skills for working professionals who want to reclaim time and become indispensable. Covers email, meetings, reports, and reusable workflows.',
        provider: { '@type': 'Organization', name: 'Clearly, AI', url: 'https://learnaiclearly.com' },
        url: 'https://learnaiclearly.com/courses/ai-at-work',
        educationalLevel: 'Intermediate',
        timeRequired: 'PT3H',
        numberOfCredits: 6,
        offers: { '@type': 'Offer', price: '15.00', priceCurrency: 'USD', priceValidUntil: '2026-12-31', availability: 'https://schema.org/InStock' },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Course',
        name: 'AI for Your Business',
        description: 'For small business owners who wear every hat. Covers customer communications, marketing content, proposals, operations, and research. No tech team needed.',
        provider: { '@type': 'Organization', name: 'Clearly, AI', url: 'https://learnaiclearly.com' },
        url: 'https://learnaiclearly.com/courses/ai-for-your-business',
        educationalLevel: 'Intermediate',
        timeRequired: 'PT3H',
        numberOfCredits: 6,
        offers: { '@type': 'Offer', price: '15.00', priceCurrency: 'USD', priceValidUntil: '2026-12-31', availability: 'https://schema.org/InStock' },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Course',
        name: 'AI for a Richer Retirement',
        description: 'For people who finally have time for what matters. Covers health questions, family connection, travel planning, creative projects, and staying safe online.',
        provider: { '@type': 'Organization', name: 'Clearly, AI', url: 'https://learnaiclearly.com' },
        url: 'https://learnaiclearly.com/courses/ai-richer-retirement',
        educationalLevel: 'Beginner',
        timeRequired: 'PT3H',
        numberOfCredits: 6,
        offers: { '@type': 'Offer', price: '15.00', priceCurrency: 'USD', priceValidUntil: '2026-12-31', availability: 'https://schema.org/InStock' },
      },
    },
  ],
}

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
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

          {/* Free tier */}
          <div className="card" style={{
            padding: '28px 32px',
            marginBottom: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 24,
            borderLeft: '4px solid var(--accent)',
          }}>
            <div style={{ flex: '1 1 200px' }}>
              <div style={{
                display: 'inline-block',
                background: 'var(--accent-lt)',
                color: 'var(--accent-dk)',
                fontSize: 11, fontWeight: 700,
                letterSpacing: '0.07em', textTransform: 'uppercase',
                padding: '4px 12px', borderRadius: 999,
                marginBottom: 10,
              }}>
                Free
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4 }}>
                <span style={{
                  fontFamily: 'var(--font-dm-serif), Georgia, serif',
                  fontSize: 40, color: 'var(--ink)', lineHeight: 1,
                }}>$0</span>
                <span style={{ fontSize: 14, color: 'var(--ink-lt)' }}>forever</span>
              </div>
              <p style={{ fontSize: 14, color: 'var(--ink-mid)', lineHeight: 1.5 }}>
                Start with the free AI starter course. No account required, no credit card, no catch.
              </p>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8, flex: '1 1 200px' }}>
              {[
                '10 practical AI tasks with ready-to-use prompts',
                '2 short lessons, plain English',
                'Downloadable AI Starter Kit PDF',
              ].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 14, color: 'var(--ink-mid)' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div style={{ flex: '0 0 auto', textAlign: 'center' }}>
              <a href="/signup" className="btn btn-ghost" style={{ fontSize: 15, padding: '13px 28px', display: 'block', whiteSpace: 'nowrap' }}>
                Start the free course →
              </a>
              <p style={{ marginTop: 8, fontSize: 12, color: 'var(--ink-lt)' }}>No credit card needed</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', margin: '8px 0 24px' }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-lt)' }}>
              Or unlock everything with a plan
            </span>
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
                  a: 'All plans give you the same access to every current module and every new course we add. Monthly and yearly renew automatically. Forever is a single payment with no renewals.',
                },
                {
                  q: 'Can I switch plans later?',
                  a: 'Yes. You can upgrade, downgrade, or cancel anytime from your account settings. If you upgrade to Forever, your remaining subscription period is credited.',
                },
                {
                  q: 'How long does the course take?',
                  a: 'About 4 to 6 hours total across 6 modules. Most people do one module per week. There\'s no deadline. Go at the pace that works for you.',
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
