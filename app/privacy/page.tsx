import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy & Security Policy — Clearly, AI',
  description: "Clearly, AI's privacy and security policy. We don't sell your information — ever. Plain English, no legalese.",
}

const s = {
  eyebrow: {
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    color: 'var(--accent)',
    marginBottom: 12,
  } as React.CSSProperties,
  title: {
    fontFamily: 'var(--font-dm-serif), Georgia, serif',
    fontSize: 'clamp(32px, 5vw, 48px)',
    lineHeight: 1.15,
    color: 'var(--ink)',
    marginBottom: 16,
  } as React.CSSProperties,
  meta: {
    fontSize: 14,
    color: 'var(--ink-light)',
    marginBottom: 48,
    paddingBottom: 48,
    borderBottom: '1px solid var(--border)',
  } as React.CSSProperties,
  promiseBox: {
    background: 'var(--accent-xl)',
    border: '1px solid var(--accent-lt)',
    borderRadius: 20,
    padding: '28px 32px',
    marginBottom: 56,
  } as React.CSSProperties,
  section: {
    marginBottom: 48,
  } as React.CSSProperties,
  h2: {
    fontFamily: 'var(--font-dm-serif), Georgia, serif',
    fontSize: 26,
    color: 'var(--ink)',
    marginBottom: 16,
  } as React.CSSProperties,
  p: {
    fontSize: 16,
    color: 'var(--ink-mid)',
    marginBottom: 14,
    lineHeight: 1.7,
  } as React.CSSProperties,
  divider: {
    border: 'none',
    borderTop: '1px solid var(--border)',
    margin: '48px 0',
  } as React.CSSProperties,
  contactBox: {
    background: 'var(--bg-dark)',
    borderRadius: 20,
    padding: '36px 40px',
    marginTop: 56,
    textAlign: 'center' as const,
  } as React.CSSProperties,
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '80vh' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '64px 32px 96px' }}>

          <div style={s.eyebrow}>Legal</div>
          <h1 style={s.title}>Privacy &amp; Security Policy</h1>
          <p style={s.meta}>Effective date: April 5, 2026 &nbsp;·&nbsp; Applies to learnaiclearly.com</p>

          {/* The Promise */}
          <div style={s.promiseBox}>
            <p style={{ fontSize: 17, fontWeight: 500, color: 'var(--ink)', lineHeight: 1.6, margin: 0 }}>
              The short version: <strong style={{ color: 'var(--accent)' }}>we do not sell your information.</strong> We don&apos;t rent it, trade it, or share it with advertisers. What you give us stays with us — and we only ask for what we actually need.
            </p>
          </div>

          {/* 1. Who We Are */}
          <div style={s.section}>
            <h2 style={s.h2}>1. Who We Are</h2>
            <p style={s.p}>Clearly, AI is an online school that teaches plain-English AI skills to working professionals, small business owners, and curious learners. We&apos;re operated by Nate Guy and can be reached at <a href="mailto:itsnateguy@gmail.com" style={{ color: 'var(--accent)' }}>itsnateguy@gmail.com</a>.</p>
            <p style={{ ...s.p, marginBottom: 0 }}>When this policy says &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our,&rdquo; it means Clearly, AI. When it says &ldquo;you,&rdquo; it means you — someone visiting or using our site at learnaiclearly.com.</p>
          </div>

          <hr style={s.divider} />

          {/* 2. What We Collect */}
          <div style={s.section}>
            <h2 style={s.h2}>2. What We Collect</h2>
            <p style={s.p}>We only collect information you give us directly. Right now, that means:</p>
            <ul style={{ margin: '12px 0 14px', paddingLeft: 20, color: 'var(--ink-mid)', fontSize: 16 }}>
              <li style={{ marginBottom: 8 }}><strong>Your email address</strong> — when you sign up for the free Starter Kit or request course updates. That&apos;s it. No name required unless you choose to share one.</li>
              <li><strong>Feedback form responses</strong> — when you submit a feedback form inside one of our course modules. These go through Netlify Forms and may include your name, email, and whatever you write in the form.</li>
            </ul>
            <p style={{ ...s.p, marginBottom: 0 }}>We do not currently use any analytics tools, ad trackers, or third-party pixel tracking. We don&apos;t drop cookies for marketing purposes.</p>
          </div>

          {/* 3. Coming Soon */}
          <div style={s.section}>
            <h2 style={s.h2}>3. What We&apos;ll Collect in the Future</h2>
            <p style={s.p}>As Clearly, AI grows, we plan to add two things — and we want to be upfront about them now:</p>
            <ul style={{ margin: '12px 0 14px', paddingLeft: 20, color: 'var(--ink-mid)', fontSize: 16 }}>
              <li style={{ marginBottom: 8 }}><strong>Payments via Stripe</strong> — when we launch paid courses, billing is handled entirely by Stripe. We never see or store your full card number. Stripe has its own privacy policy, which you can review at stripe.com.</li>
              <li><strong>User accounts</strong> — when we add logins, we&apos;ll store your email address and course progress. We&apos;ll update this policy before that goes live.</li>
            </ul>
            <p style={{ ...s.p, marginBottom: 0 }}>We&apos;ll notify you by email if anything meaningful changes about how we handle your data.</p>
          </div>

          <hr style={s.divider} />

          {/* 4. How We Use It */}
          <div style={s.section}>
            <h2 style={s.h2}>4. How We Use Your Information</h2>
            <p style={s.p}>We use the information we collect to:</p>
            <ul style={{ margin: '12px 0 14px', paddingLeft: 20, color: 'var(--ink-mid)', fontSize: 16 }}>
              <li style={{ marginBottom: 8 }}>Send you the free Starter Kit or course materials you asked for</li>
              <li style={{ marginBottom: 8 }}>Occasionally send you updates about new content (you can unsubscribe any time)</li>
              <li style={{ marginBottom: 8 }}>Read your feedback so we can improve the course</li>
              <li>Respond to your questions or requests</li>
            </ul>
            <p style={{ ...s.p, marginBottom: 0 }}>We do not use your information to build ad profiles, train AI models, or make automated decisions about you.</p>
          </div>

          {/* 5. What We Don't Do */}
          <div style={s.section}>
            <h2 style={s.h2}>5. What We Don&apos;t Do — Ever</h2>
            <ul style={{ margin: '12px 0', paddingLeft: 20, color: 'var(--ink-mid)', fontSize: 16 }}>
              <li style={{ marginBottom: 8 }}>We do not sell your information to anyone.</li>
              <li style={{ marginBottom: 8 }}>We do not share your email with other companies for their marketing.</li>
              <li style={{ marginBottom: 8 }}>We do not use your personal data to train AI systems.</li>
              <li>We do not send spam. Every email we send will have an unsubscribe link.</li>
            </ul>
          </div>

          <hr style={s.divider} />

          {/* 6. How We Store It */}
          <div style={s.section}>
            <h2 style={s.h2}>6. How We Store and Protect Your Data</h2>
            <p style={s.p}>Our site is hosted on Netlify, which uses HTTPS encryption for all traffic. Form submissions are also stored through Netlify&apos;s secure infrastructure.</p>
            <p style={s.p}>We keep your data only as long as it&apos;s useful — for example, your email address stays on our list until you unsubscribe, at which point we remove it. Feedback form submissions may be retained for product improvement purposes but are not shared publicly.</p>
            <p style={{ ...s.p, marginBottom: 0 }}>No system is perfectly secure, but we take reasonable precautions and will notify you promptly if a breach ever affects your data.</p>
          </div>

          {/* 7. Your Rights */}
          <div style={s.section}>
            <h2 style={s.h2}>7. Your Rights</h2>
            <p style={s.p}>No matter where you live, you have the right to know what we have on you and to ask us to delete it. Here&apos;s a plain-English summary of those rights:</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 20, marginBottom: 20 }}>
              {[
                { title: 'Access', desc: 'Ask us what information we have about you.' },
                { title: 'Deletion', desc: "Ask us to delete your data. We'll do it, no questions asked." },
                { title: 'Correction', desc: 'Ask us to fix any incorrect information we have.' },
                { title: 'Opt Out', desc: 'Unsubscribe from emails at any time via the link in any email we send.' },
              ].map(({ title, desc }) => (
                <div key={title} style={{
                  background: 'var(--bg-alt)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  padding: '20px 22px',
                }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', marginBottom: 6 }}>{title}</div>
                  <div style={{ fontSize: 14, color: 'var(--ink-light)', lineHeight: 1.5 }}>{desc}</div>
                </div>
              ))}
            </div>

            <p style={{ ...s.p, marginBottom: 0 }}>To exercise any of these rights, just email us at <a href="mailto:itsnateguy@gmail.com" style={{ color: 'var(--accent)' }}>itsnateguy@gmail.com</a>. We&apos;ll respond within 30 days.</p>
          </div>

          {/* 8. GDPR */}
          <div style={s.section}>
            <h2 style={s.h2}>8. For Users in the European Union (GDPR)</h2>
            <p style={s.p}>If you&apos;re in the EU, you have rights under the General Data Protection Regulation (GDPR). Our legal basis for processing your data is <strong>consent</strong> — you gave us your email address voluntarily. You can withdraw that consent at any time.</p>
            <p style={{ ...s.p, marginBottom: 0 }}>You also have the right to lodge a complaint with your local data protection authority if you believe we&apos;ve handled your data incorrectly.</p>
          </div>

          {/* 9. CCPA */}
          <div style={s.section}>
            <h2 style={s.h2}>9. For California Residents (CCPA)</h2>
            <p style={s.p}>Under the California Consumer Privacy Act (CCPA), you have the right to:</p>
            <ul style={{ margin: '12px 0 14px', paddingLeft: 20, color: 'var(--ink-mid)', fontSize: 16 }}>
              <li style={{ marginBottom: 8 }}>Know what personal information we&apos;ve collected about you</li>
              <li style={{ marginBottom: 8 }}>Request that we delete your personal information</li>
              <li>Opt out of the sale of your personal information</li>
            </ul>
            <p style={{ ...s.p, marginBottom: 0 }}>We do not sell personal information — full stop. To exercise your rights, email <a href="mailto:itsnateguy@gmail.com" style={{ color: 'var(--accent)' }}>itsnateguy@gmail.com</a>.</p>
          </div>

          <hr style={s.divider} />

          {/* 10. Children */}
          <div style={s.section}>
            <h2 style={s.h2}>10. Children&apos;s Privacy</h2>
            <p style={{ ...s.p, marginBottom: 0 }}>Clearly, AI is designed for adults. We don&apos;t knowingly collect information from anyone under 13. If you believe a child has submitted their information to us, please contact us and we&apos;ll delete it right away.</p>
          </div>

          {/* 11. Changes */}
          <div style={s.section}>
            <h2 style={s.h2}>11. Changes to This Policy</h2>
            <p style={{ ...s.p, marginBottom: 0 }}>We&apos;ll update this page if anything meaningful changes. If you&apos;re on our email list, we&apos;ll send you a heads-up before any significant changes take effect. The date at the top of this page always reflects when it was last updated.</p>
          </div>

          {/* Contact */}
          <div style={s.contactBox}>
            <h2 style={{ fontFamily: 'var(--font-dm-serif), Georgia, serif', fontSize: 26, color: 'white', marginBottom: 10 }}>Questions? Just ask.</h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', marginBottom: 20 }}>We&apos;re a small operation and we actually read our email. If something here is confusing or you want to know more about how we handle your data, reach out.</p>
            <a href="mailto:itsnateguy@gmail.com" style={{
              display: 'inline-block',
              background: 'var(--accent)',
              color: 'white',
              fontWeight: 600,
              fontSize: 15,
              padding: '12px 28px',
              borderRadius: 999,
              textDecoration: 'none',
            }}>itsnateguy@gmail.com</a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
