import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Use — Clearly, AI',
  description: "Clearly, AI's terms of use. Plain English, no legalese. Covers access, content ownership, payments, and your rights as a learner.",
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
  introBox: {
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
  note: {
    background: 'var(--bg-alt)',
    borderLeft: '3px solid var(--accent)',
    borderRadius: '0 12px 12px 0',
    padding: '16px 20px',
    margin: '16px 0',
    fontSize: 15,
    color: 'var(--ink-mid)',
  } as React.CSSProperties,
  contactBox: {
    background: 'var(--bg-dark)',
    borderRadius: 20,
    padding: '36px 40px',
    marginTop: 56,
    textAlign: 'center' as const,
  } as React.CSSProperties,
}

const liStyle: React.CSSProperties = { marginBottom: 8 }
const ulStyle: React.CSSProperties = { margin: '12px 0 14px', paddingLeft: 20, color: 'var(--ink-mid)', fontSize: 16 }

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '80vh' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '64px 32px 96px' }}>

          <div style={s.eyebrow}>Legal</div>
          <h1 style={s.title}>Terms of Use</h1>
          <p style={s.meta}>Effective date: April 5, 2026 &nbsp;·&nbsp; Applies to learnaiclearly.com</p>

          <div style={s.introBox}>
            <p style={{ fontSize: 16, fontWeight: 500, color: 'var(--ink)', lineHeight: 1.65, margin: 0 }}>
              By using Clearly, AI — whether that&apos;s reading a lesson, downloading the Starter Kit, or filling out a feedback form — you&apos;re agreeing to these terms. We&apos;ve written them in plain English so you actually know what you&apos;re agreeing to.
            </p>
          </div>

          {/* 1. Who We Are */}
          <div style={s.section}>
            <h2 style={s.h2}>1. Who We Are</h2>
            <p style={s.p}>Clearly, AI is an online school that teaches plain-English AI skills to working professionals, small business owners, and curious learners. We&apos;re operated by Nate Guy. You can reach us at <a href="mailto:itsnateguy@gmail.com" style={{ color: 'var(--accent)' }}>itsnateguy@gmail.com</a>.</p>
            <p style={{ ...s.p, marginBottom: 0 }}>When these terms say &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our,&rdquo; they mean Clearly, AI. &ldquo;You&rdquo; means anyone accessing or using our site or course materials.</p>
          </div>

          <hr style={s.divider} />

          {/* 2. What We Offer */}
          <div style={s.section}>
            <h2 style={s.h2}>2. What We Offer</h2>
            <p style={s.p}>Clearly, AI provides educational content about artificial intelligence — including course modules, a free Starter Kit, and related materials — through our website at learnaiclearly.com.</p>
            <p style={{ ...s.p, marginBottom: 0 }}>We&apos;re currently in beta. That means some things are still being built, and access is free while we gather feedback. Paid access and user accounts are coming in the future — we&apos;ll update these terms and let you know before that happens.</p>
          </div>

          {/* 3. Your Access */}
          <div style={s.section}>
            <h2 style={s.h2}>3. Your Access</h2>
            <p style={s.p}>You&apos;re welcome to use our course materials for your own personal learning. In exchange, we ask that you:</p>
            <ul style={ulStyle}>
              <li style={liStyle}>Don&apos;t copy, redistribute, or resell our course content without written permission</li>
              <li style={liStyle}>Don&apos;t use our site or content to train AI models</li>
              <li style={liStyle}>Don&apos;t attempt to gain unauthorized access to any part of our site</li>
              <li>Don&apos;t use our site in any way that&apos;s deceptive, harmful, or illegal</li>
            </ul>
            <p style={{ ...s.p, marginBottom: 0 }}>We reserve the right to revoke access if these conditions aren&apos;t met.</p>
          </div>

          <hr style={s.divider} />

          {/* 4. Content Ownership */}
          <div style={s.section}>
            <h2 style={s.h2}>4. Content Ownership</h2>
            <p style={s.p}>Everything on this site — the lessons, writing, design, graphics, and course structure — is owned by Clearly, AI and protected by copyright. &ldquo;Clearly, AI&rdquo; and &ldquo;Learn it. Use it. Own it.&rdquo; are our brand identifiers.</p>
            <p style={{ ...s.p, marginBottom: 0 }}>You&apos;re free to apply what you learn. You may not reproduce our materials in whole or share them commercially without our permission. If you&apos;d like to use something for educational or non-commercial purposes, just ask — we&apos;re pretty reasonable.</p>
          </div>

          {/* 5. Free Content */}
          <div style={s.section}>
            <h2 style={s.h2}>5. Free Content (Starter Kit)</h2>
            <p style={{ ...s.p, marginBottom: 0 }}>The Clearly, AI Starter Kit is free to download and use for your own learning. You&apos;re welcome to share the download link with others. Please don&apos;t repackage or redistribute it as your own work.</p>
          </div>

          <hr style={s.divider} />

          {/* 6. Payments */}
          <div style={s.section}>
            <h2 style={s.h2}>6. Payments (Coming Soon)</h2>
            <p style={s.p}>We&apos;re currently in free beta. When we launch paid courses, here&apos;s how we&apos;ll handle it:</p>
            <ul style={ulStyle}>
              <li style={liStyle}>Payments will be processed by <strong>Stripe</strong>, a secure third-party payment provider. We never store your credit card information.</li>
              <li style={liStyle}>We&apos;ll clearly display the price before you&apos;re charged.</li>
              <li>We&apos;ll have a refund policy in place — we&apos;ll outline it in full when paid access launches.</li>
            </ul>
            <div style={s.note}>We&apos;ll update these terms and notify you by email before any paid features go live.</div>
          </div>

          {/* 7. User Accounts */}
          <div style={s.section}>
            <h2 style={s.h2}>7. User Accounts (Coming Soon)</h2>
            <p style={s.p}>When we add logins, you&apos;ll be responsible for keeping your account credentials secure. You agree not to share your account or let others access it. If you think your account has been compromised, contact us right away.</p>
            <p style={{ ...s.p, marginBottom: 0 }}>We&apos;ll update these terms when accounts launch.</p>
          </div>

          <hr style={s.divider} />

          {/* 8. Third-Party Tools */}
          <div style={s.section}>
            <h2 style={s.h2}>8. Third-Party Tools</h2>
            <p style={s.p}>Our site is hosted on <strong>Netlify</strong> and our forms use <strong>Netlify Forms</strong>. When we add payments, we&apos;ll use <strong>Stripe</strong>. Each of these services has its own terms and privacy policies that apply to their portion of our site.</p>
            <p style={{ ...s.p, marginBottom: 0 }}>Our courses teach you how to use tools like ChatGPT, but we&apos;re not affiliated with or endorsed by OpenAI, Google, Microsoft, or any other AI company we mention. Mentions are for educational purposes only.</p>
          </div>

          {/* 9. Disclaimers */}
          <div style={s.section}>
            <h2 style={s.h2}>9. Disclaimers</h2>
            <p style={s.p}>Our courses are educational. We do our best to keep content accurate and up to date, but AI tools change fast — something we describe today may work differently by the time you read it. Always verify important decisions with current sources.</p>
            <p style={{ ...s.p, marginBottom: 0 }}>Clearly, AI is provided &ldquo;as is.&rdquo; We don&apos;t guarantee that the site will be available 100% of the time or that it will be free of errors. We&apos;re not liable for any losses or damages resulting from your use of our content or any AI tools you use based on what you learn here.</p>
          </div>

          {/* 10. Limitation of Liability */}
          <div style={s.section}>
            <h2 style={s.h2}>10. Limitation of Liability</h2>
            <p style={s.p}>To the fullest extent permitted by law, Clearly, AI and its operator will not be liable for any indirect, incidental, or consequential damages arising from your use of the site or course materials — including things like lost profits, data loss, or decisions made based on course content.</p>
            <p style={{ ...s.p, marginBottom: 0 }}>Our total liability to you for any claim is limited to the amount you paid us, if anything. During the free beta, that means zero.</p>
          </div>

          <hr style={s.divider} />

          {/* 11. Changes */}
          <div style={s.section}>
            <h2 style={s.h2}>11. Changes to These Terms</h2>
            <p style={s.p}>We&apos;ll update these terms when something meaningful changes — like when we launch paid access or user accounts. If you&apos;re on our email list, we&apos;ll send you a heads-up. The effective date at the top of this page will always reflect the last update.</p>
            <p style={{ ...s.p, marginBottom: 0 }}>Continuing to use the site after changes go into effect means you accept the updated terms.</p>
          </div>

          {/* 12. Governing Law */}
          <div style={s.section}>
            <h2 style={s.h2}>12. Governing Law</h2>
            <p style={{ ...s.p, marginBottom: 0 }}>These terms are governed by the laws of the United States. Any disputes will be resolved in good faith first — just reach out to us. If that doesn&apos;t work, disputes will be handled in a court of competent jurisdiction.</p>
          </div>

          {/* Contact */}
          <div style={s.contactBox}>
            <h2 style={{ fontFamily: 'var(--font-dm-serif), Georgia, serif', fontSize: 26, color: 'white', marginBottom: 10 }}>Questions about these terms?</h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', marginBottom: 20 }}>We wrote these in plain English on purpose. If something&apos;s still unclear, just ask — we&apos;re happy to explain.</p>
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
