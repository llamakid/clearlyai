import Link from 'next/link'

/**
 * In-prose call-to-action card used mid-article in blog posts where an email
 * capture doesn't fit the reader's intent (concept/explainer posts). Points at
 * a free next step — the starter course by default, or any internal href.
 */
export default function InlineCTA({
  href = '/course/0',
  heading = 'Want to actually get good at this?',
  blurb = 'The free starter course walks you through 10 things you can do with AI today — each with a prompt you can copy and use. No account needed to start.',
  button = 'Start the free course →',
}: {
  href?: string
  heading?: string
  blurb?: string
  button?: string
}) {
  return (
    <div style={{
      margin: '40px 0',
      background: 'var(--accent-xl)',
      border: '1px solid var(--accent-lt)',
      borderRadius: 16,
      padding: '28px 26px',
    }}>
      <p style={{
        fontWeight: 700, fontSize: 19, color: 'var(--ink)', marginBottom: 6,
        fontFamily: 'var(--font-dm-serif), Georgia, serif',
      }}>
        {heading}
      </p>
      <p style={{ fontSize: 15, color: 'var(--ink-mid)', lineHeight: 1.55, marginBottom: 18 }}>
        {blurb}
      </p>
      <Link href={href} className="btn btn-primary" style={{ display: 'inline-block' }}>
        {button}
      </Link>
    </div>
  )
}
