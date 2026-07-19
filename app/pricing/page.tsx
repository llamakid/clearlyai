import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Pricing — Clearly, AI',
  description: 'Every Clearly, AI course is free. 8 courses, 240 plain-English lessons — all you need is a free account. No credit card, no trial, no catch.',
  openGraph: {
    title: 'Pricing — Clearly, AI',
    description: 'Every Clearly, AI course is free. 8 courses, 240 plain-English lessons — all you need is a free account.',
    url: 'https://learnaiclearly.com/pricing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing — Clearly, AI',
    description: 'Every Clearly, AI course is free. 8 courses, 240 plain-English lessons — all you need is a free account.',
  },
  alternates: {
    canonical: 'https://learnaiclearly.com/pricing',
  },
}

const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Clearly, AI Courses',
  description: 'All courses are free with a free account. No tech background needed.',
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
        offers: { '@type': 'Offer', price: '0.00', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
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
        offers: { '@type': 'Offer', price: '0.00', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
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
        offers: { '@type': 'Offer', price: '0.00', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
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
        offers: { '@type': 'Offer', price: '0.00', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
      },
    },
  ],
}

const included = [
  'All 8 courses — 48 modules, 240 short lessons',
  'Every new course we add, the day it launches',
  'Free AI tools — writing help, plain-English explainers, website checkup',
  'Progress saved automatically, any device',
  'Go at your own pace — no deadlines, ever',
]

export default function PricingPage() {
  const supportUrl = process.env.NEXT_PUBLIC_SUPPORT_URL

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '72px 32px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: 48 }}>
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
              It&apos;s free. All of it.
            </h1>
            <p style={{ fontSize: 17, color: 'var(--ink-mid)', maxWidth: 520, margin: '0 auto' }}>
              Every course, every lesson, every tool. No subscription, no trial that expires, no credit card. Just a free account.
            </p>
          </div>

          {/* The one "plan" */}
          <div className="card" style={{
            padding: '36px 36px 32px',
            marginBottom: 20,
            borderLeft: '4px solid var(--accent)',
          }}>
            <div style={{
              display: 'inline-block',
              background: 'var(--accent-lt)',
              color: 'var(--accent-dk)',
              fontSize: 11, fontWeight: 700,
              letterSpacing: '0.07em', textTransform: 'uppercase',
              padding: '4px 12px', borderRadius: 999,
              marginBottom: 14,
            }}>
              Everything included
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 18 }}>
              <span style={{
                fontFamily: 'var(--font-dm-serif), Georgia, serif',
                fontSize: 56, color: 'var(--ink)', lineHeight: 1,
              }}>$0</span>
              <span style={{ fontSize: 15, color: 'var(--ink-lt)' }}>forever</span>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {included.map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, color: 'var(--ink-mid)' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="/signup" className="btn btn-primary" style={{ fontSize: 15, padding: '14px 32px' }}>
                Create your free account →
              </a>
              <a href="/course/0" className="btn btn-ghost" style={{ fontSize: 15, padding: '14px 28px' }}>
                Or try the starter course first
              </a>
            </div>
            <p style={{ marginTop: 12, fontSize: 12, color: 'var(--ink-lt)' }}>
              No credit card. The starter course doesn&apos;t even need an account.
            </p>
          </div>

          {/* Why it's free */}
          <div className="card" style={{ padding: '32px 36px', marginBottom: 20 }}>
            <h2 style={{
              fontFamily: 'var(--font-dm-serif), Georgia, serif',
              fontSize: 24, marginBottom: 14,
            }}>
              Why is it free?
            </h2>
            <div style={{ fontSize: 15, color: 'var(--ink-mid)', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <p>
                Honest answer: I&apos;m Nate, and Clearly, AI is a one-person project. I built these courses because
                most AI education is either hype or jargon, and the people who&apos;d benefit most — busy professionals,
                small business owners, people who didn&apos;t grow up with this stuff — deserve a straight answer.
              </p>
              <p>
                I&apos;d rather have thousands of people actually learning this than a paywall in front of an empty room.
                So the courses are free. Down the road I may offer paid extras — advanced tools, hands-on help for
                businesses — but the learning itself stays free.
              </p>
            </div>
          </div>

          {/* Support / coffee */}
          {supportUrl && (
            <div className="card" style={{
              padding: '28px 36px',
              marginBottom: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 24,
              flexWrap: 'wrap',
              background: 'var(--accent-lt)',
            }}>
              <div style={{ flex: '1 1 320px' }}>
                <p style={{ fontWeight: 700, fontSize: 16, color: 'var(--ink)', marginBottom: 6 }}>
                  ☕ Found it useful? Buy me a coffee.
                </p>
                <p style={{ fontSize: 14, color: 'var(--ink-mid)', lineHeight: 1.6 }}>
                  Totally optional. It keeps the site running and tells me this is worth building. That&apos;s it — no perks, no tiers, no guilt.
                </p>
              </div>
              <a
                href={supportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ fontSize: 15, padding: '13px 28px', whiteSpace: 'nowrap', flexShrink: 0 }}
              >
                Buy me a coffee →
              </a>
            </div>
          )}

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
                  q: 'Seriously — what\'s the catch?',
                  a: 'There isn\'t one. You create a free account so your progress is saved and I can send you the occasional practical AI tip by email (unsubscribe any time, one click). That\'s the whole deal.',
                },
                {
                  q: 'Will it stay free?',
                  a: 'The courses, yes — that\'s the plan and the point. If I ever add paid offerings, they\'ll be extras like advanced tools or hands-on help, not a paywall on lessons you already have.',
                },
                {
                  q: 'Do I need any technical background?',
                  a: 'None at all. The courses are designed specifically for people with no tech background. If you can send an email, you can do this.',
                },
                {
                  q: 'How long do the courses take?',
                  a: 'Each course is about 3 to 4 hours across 6 modules, and lessons run 8–12 minutes. Most people do one module a week. There\'s no deadline — go at the pace that works for you.',
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
