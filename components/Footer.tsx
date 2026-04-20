import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      background: '#1c2b35',
      color: 'rgba(255,255,255,0.55)',
      padding: '48px 32px',
      marginTop: 'auto',
    }}>
      <div style={{
        maxWidth: 1120,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16,
      }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-dm-serif), Georgia, serif',
            fontSize: 20,
            color: 'white',
            marginBottom: 6,
          }}>
            Clearly,&nbsp;<span style={{ color: '#ddeef3' }}>AI</span>
          </div>
          <div style={{ fontSize: 13 }}>Learn it. Use it. Own it.</div>
        </div>

        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <Link href="/blog" style={footerLink}>Blog</Link>
          <Link href="/pricing" style={footerLink}>Pricing</Link>
          <Link href="/login" style={footerLink}>Log In</Link>
          <Link href="/privacy" style={footerLink}>Privacy</Link>
          <Link href="/terms" style={footerLink}>Terms</Link>
          <a href="mailto:nate@learnaiclearly.com" style={footerLink}>Contact</a>
        </div>

        <div style={{ fontSize: 12 }}>
          © {new Date().getFullYear()} Clearly, AI · learnaiclearly.com
        </div>
      </div>
    </footer>
  )
}

const footerLink: React.CSSProperties = {
  color: 'rgba(255,255,255,0.55)',
  fontSize: 14,
  textDecoration: 'none',
}
