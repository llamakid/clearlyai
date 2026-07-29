import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = { title: 'AI Tools — Clearly, AI' }

const TOOLS = [
  {
    href: '/tools/write',
    icon: '✍️',
    title: 'Write This For Me',
    desc: 'Turn your ideas into polished writing. No blank page, no second-guessing. Emails, social posts, text messages.',
    tags: ['Email', 'Social post', 'Text message'],
    cta: 'Start writing →',
    external: false,
  },
  {
    href: '/tools/explain',
    icon: '🔍',
    title: 'Explain This To Me',
    desc: 'Paste anything confusing: an email, a contract, a news story. Get a plain-English breakdown of what it means.',
    tags: ['Confusing emails', 'Legal text', 'Technical jargon'],
    cta: 'Explain something →',
    external: false,
  },
  // TODO: once the standalone AI Search Checkup / Visibility Tracker product has a
  // domain, add a cross-promo card here with external: true pointing at it.
  {
    href: 'https://chatgpt.com/g/g-6a25ce026df08191ad2ae0fedd361400-clearly-explain-this',
    icon: '🤖',
    title: 'Clearly: Explain This',
    desc: 'Turns confusing information into clear, plain-English explanations — without jargon, assumptions, or judgment. Powered by ChatGPT.',
    tags: ['Documents', 'News stories', 'Tech concepts'],
    cta: 'Try the GPT →',
    external: true,
  },
]

export default function ToolsPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '60px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: 52 }}>
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
              marginBottom: 20,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              Free to try — no account needed
            </div>
            <h1 style={{ fontFamily: 'var(--font-h)', fontSize: 40, marginBottom: 14, lineHeight: 1.15 }}>
              Put AI to work.<br />No prompts needed.
            </h1>
            <p style={{ fontSize: 17, color: 'var(--ink-mid)', maxWidth: 460, margin: '0 auto', lineHeight: 1.6 }}>
              Simple tools. Real results. Just tell us what you need.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 16,
          }}>
            {TOOLS.map(tool => {
              const cardContent = (
                <div className="card card-hover" style={{
                  padding: '32px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                    <span style={{ fontSize: 36, lineHeight: 1 }}>{tool.icon}</span>
                    {tool.external && (
                      <span style={{
                        fontSize: 11, fontWeight: 700,
                        background: '#f0f0f0', color: '#666',
                        padding: '3px 9px', borderRadius: 20,
                        letterSpacing: '0.04em',
                        whiteSpace: 'nowrap',
                      }}>
                        Opens in ChatGPT
                      </span>
                    )}
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 24, color: 'var(--ink)', lineHeight: 1.2 }}>
                    {tool.title}
                  </h2>
                  <p style={{ fontSize: 15, color: 'var(--ink-mid)', lineHeight: 1.65, flexGrow: 1 }}>
                    {tool.desc}
                  </p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {tool.tags.map(tag => (
                      <span key={tag} style={{
                        fontSize: 12, fontWeight: 600,
                        background: 'var(--accent-lt)', color: 'var(--accent-dk)',
                        padding: '3px 10px', borderRadius: 20,
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--accent)', marginTop: 4 }}>
                    {tool.cta}
                  </span>
                </div>
              )

              return tool.external ? (
                <a
                  key={tool.href}
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  {cardContent}
                </a>
              ) : (
                <Link key={tool.href} href={tool.href} style={{ textDecoration: 'none' }}>
                  {cardContent}
                </Link>
              )
            })}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
