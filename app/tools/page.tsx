import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = { title: 'AI Tools — Clearly, AI' }

const TOOLS = [
  {
    href: '/tools/write',
    icon: '✍️',
    title: 'Write This For Me',
    desc: 'Turn your ideas into polished writing — no blank page, no second-guessing. Emails, social posts, text messages.',
    tags: ['Email', 'Social post', 'Text message'],
    cta: 'Start writing →',
  },
  {
    href: '/tools/explain',
    icon: '🔍',
    title: 'Explain This To Me',
    desc: 'Paste anything confusing — an email, a contract, a news story. Get a clear, plain-English breakdown.',
    tags: ['Confusing emails', 'Legal text', 'Technical jargon'],
    cta: 'Explain something →',
  },
]

export default function ToolsPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '60px 32px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>

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
              Free with any account
            </div>
            <h1 style={{ fontFamily: 'var(--font-h)', fontSize: 40, marginBottom: 14, lineHeight: 1.15 }}>
              Put AI to work —<br />no prompts needed
            </h1>
            <p style={{ fontSize: 17, color: 'var(--ink-mid)', maxWidth: 460, margin: '0 auto', lineHeight: 1.6 }}>
              Two simple tools. Real results. Just tell us what you need.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 16,
          }}>
            {TOOLS.map(tool => (
              <Link key={tool.href} href={tool.href} style={{ textDecoration: 'none' }}>
                <div className="card card-hover" style={{
                  padding: '32px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}>
                  <span style={{ fontSize: 36, lineHeight: 1 }}>{tool.icon}</span>
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
              </Link>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
