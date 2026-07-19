import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ — Clearly, AI',
  description: 'Common questions about Clearly, AI: free courses, accounts, and what to expect. No tech background needed to get started.',
  openGraph: {
    title: 'FAQ — Clearly, AI',
    description: 'Common questions about Clearly, AI: free courses, accounts, and what to expect.',
    url: 'https://learnaiclearly.com/faq',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ — Clearly, AI',
    description: 'Common questions about Clearly, AI: free courses, accounts, and what to expect.',
  },
  alternates: {
    canonical: 'https://learnaiclearly.com/faq',
  },
}

const sections = [
  {
    heading: 'Is this right for me?',
    items: [
      {
        q: 'Do I need a tech background?',
        a: 'Not at all. This course was built specifically for people who have no technical background. If you can send an email or use a smartphone, you have everything you need to get started.',
      },
      {
        q: 'I\'m not a "computer person." Will I be lost?',
        a: 'No. We avoid jargon on purpose. Every concept is explained in plain English with real-life examples, not code or theory. We start at the very beginning and assume nothing.',
      },
      {
        q: 'I\'m retired / not working. Is AI still useful for me?',
        a: 'Absolutely. You\'ll learn how to use AI to write letters, plan trips, research health questions, draft emails, find information faster, and a lot more. All things that make everyday life a bit easier.',
      },
      {
        q: 'I\'ve tried to learn tech things before and given up. How is this different?',
        a: 'Most tech courses assume you already know things. We don\'t. Lessons are short (5 to 10 minutes each), written in plain language, and build on each other one step at a time. You set the pace. No timer, no pressure, no failing.',
      },
    ],
  },
  {
    heading: 'About the course',
    items: [
      {
        q: 'What will I actually be able to do after this?',
        a: 'By the end of Course 1, you\'ll understand what AI is, how to have a useful conversation with it, how to ask good questions, and how to apply it to real tasks in your daily life. Course 2 goes deeper into work, writing, research, and more.',
      },
      {
        q: 'How long does it take?',
        a: 'Each course is about 4 to 6 hours total, split across 6 modules. Most people do one module per sitting, around 45 to 60 minutes. There\'s no schedule to keep. Pause whenever you want and pick back up where you left off.',
      },
      {
        q: 'What if I don\'t understand something?',
        a: 'You can replay any lesson as many times as you want. If something still isn\'t clicking, email us at nate@learnaiclearly.com. We\'re a small team and we actually respond.',
      },
      {
        q: 'What devices can I use?',
        a: 'Any device with a web browser: laptop, desktop, tablet, or phone. Nothing to download or install. Your progress saves automatically so you can switch devices anytime.',
      },
      {
        q: 'Will the content get outdated?',
        a: 'AI does move fast, and we update the course regularly to keep up. Every update and every new course we add is included, free — you\'ll never pay to access new material.',
      },
    ],
  },
  {
    heading: 'Pricing & access',
    items: [
      {
        q: 'How much does it cost?',
        a: 'Nothing. Every course, every lesson, and every tool on Clearly, AI is free. All you need is a free account so your progress is saved.',
      },
      {
        q: 'Seriously — what\'s the catch?',
        a: 'There isn\'t one. Clearly, AI is a one-person project, and the goal right now is simple: help as many people as possible get genuinely comfortable with AI. You create a free account, and you\'ll occasionally get a practical AI tip by email (one-click unsubscribe, any time).',
      },
      {
        q: 'Will it stay free?',
        a: 'The courses, yes — that\'s the plan. If paid extras ever get added (advanced tools, hands-on help for businesses), they\'ll be additions, not a paywall on lessons you already have.',
      },
      {
        q: 'Do I need a credit card to sign up?',
        a: 'No. Signing up takes an email address (or one click with Google) and nothing else.',
      },
    ],
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: sections.flatMap((section) =>
    section.items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    }))
  ),
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '72px 32px 96px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12,
            }}>
              FAQ
            </div>
            <h1 style={{
              fontFamily: 'var(--font-dm-serif), Georgia, serif',
              fontSize: 'clamp(32px, 5vw, 48px)',
              marginBottom: 16,
            }}>
              Questions & answers.
            </h1>
            <p style={{ fontSize: 17, color: 'var(--ink-mid)', maxWidth: 480, margin: '0 auto', lineHeight: 1.6 }}>
              Thinking about joining? Here are the questions we hear most often.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 style={{
                  fontFamily: 'var(--font-dm-serif), Georgia, serif',
                  fontSize: 22,
                  marginBottom: 20,
                  color: 'var(--ink)',
                  paddingBottom: 12,
                  borderBottom: '1px solid var(--accent-lt)',
                }}>
                  {section.heading}
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {section.items.map(({ q, a }) => (
                    <div key={q} className="card" style={{ padding: '22px 26px' }}>
                      <p style={{ fontWeight: 600, marginBottom: 8, fontSize: 15, color: 'var(--ink)' }}>{q}</p>
                      <p style={{ fontSize: 14, color: 'var(--ink-mid)', lineHeight: 1.65, margin: 0 }}>{a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 72, textAlign: 'center',
            padding: '40px 32px',
            background: 'var(--accent)',
            borderRadius: 20,
          }}>
            <h2 style={{
              fontFamily: 'var(--font-dm-serif), Georgia, serif',
              fontSize: 26, color: 'white', marginBottom: 10,
            }}>
              Still have a question?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, marginBottom: 24, lineHeight: 1.6 }}>
              Email us and you'll hear back from a real person, usually within a day.
            </p>
            <a
              href="mailto:nate@learnaiclearly.com"
              style={{
                display: 'inline-block',
                background: 'white',
                color: 'var(--accent)',
                fontWeight: 700,
                fontSize: 15,
                padding: '13px 28px',
                borderRadius: 12,
                textDecoration: 'none',
              }}
            >
              nate@learnaiclearly.com
            </a>
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link
              href="/signup"
              style={{
                color: 'var(--accent)',
                fontWeight: 600,
                fontSize: 15,
                textDecoration: 'none',
              }}
            >
              Ready to get started? Create your free account →
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
