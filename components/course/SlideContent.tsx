'use client'

import { useState } from 'react'
import type { Slide } from '@/lib/course-data/types'

function SlideHighlight({ text }: { text: string }) {
  return (
    <div style={{
      background: 'var(--accent-xl)',
      borderLeft: '4px solid var(--accent)',
      borderRadius: '0 12px 12px 0',
      padding: '16px 20px',
      margin: '20px 0',
      fontSize: 16,
      color: 'var(--ink)',
      lineHeight: 1.65,
      fontFamily: 'var(--font-dm-serif), Georgia, serif',
      fontStyle: 'italic',
    }}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  )
}

function SlideList({ items, negative }: { items: string[]; negative?: boolean }) {
  return (
    <ul style={{ listStyle: 'none', margin: '16px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 16, color: 'var(--ink-mid)', lineHeight: 1.5 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 22, height: 22, borderRadius: '50%', flexShrink: 0, marginTop: 1,
            background: negative ? '#fae8e8' : 'var(--accent-lt)',
            color: negative ? '#9e3030' : 'var(--accent-dk)',
            fontSize: 11, fontWeight: 700,
          }}>
            {negative ? '✗' : '✓'}
          </span>
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
  )
}

function PromptBox({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }
  return (
    <div style={{ margin: '20px 0' }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>
        📋 The Prompt — Copy &amp; Paste This:
      </div>
      <div style={{
        background: '#1c2b35', color: '#e8f4f7',
        borderRadius: 12, padding: '20px 24px',
        fontFamily: "'Courier New', monospace", fontSize: 14, lineHeight: 1.7,
      }}>
        {text}
      </div>
      <button
        onClick={handleCopy}
        style={{
          marginTop: 10, display: 'inline-flex', alignItems: 'center', gap: 6,
          background: copied ? '#2a7a52' : 'var(--accent)', color: 'white',
          border: 'none', borderRadius: 8, padding: '8px 16px',
          fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
          transition: 'background 0.15s',
        }}
      >
        {copied ? '✓ Copied!' : '📋 Copy Prompt'}
      </button>
    </div>
  )
}

function TemplateBlock({ text }: { text: string }) {
  const parts = text.split(/(\[FILL IN:[^\]]+\])/)
  return (
    <div style={{
      background: 'white', border: '1px solid var(--border-md)', borderRadius: 12,
      padding: '20px 24px', margin: '16px 0', fontSize: 15, lineHeight: 1.8,
      color: 'var(--ink)', fontFamily: "'Courier New', monospace",
    }}>
      {parts.map((part, i) =>
        part.startsWith('[FILL IN:') ? (
          <span key={i} style={{
            background: 'var(--accent-lt)', color: 'var(--accent-dk)',
            padding: '2px 8px', borderRadius: 5, fontStyle: 'italic',
            fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600,
          }}>{part}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </div>
  )
}

function SetupGuide() {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ marginTop: 20, border: '1.5px solid var(--border-md)', borderRadius: 14, overflow: 'hidden' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '14px 18px', cursor: 'pointer',
          background: open ? 'var(--accent-xl)' : 'var(--bg)',
          color: open ? 'var(--accent-dk)' : 'var(--ink-mid)',
          fontSize: 14, fontWeight: 600, border: 'none', width: '100%',
          fontFamily: 'inherit', textAlign: 'left', transition: 'background 0.15s',
        }}
      >
        <span>🆕 &nbsp;First time? Here&apos;s how to create your free ChatGPT account</span>
        <span style={{ fontSize: 12, color: 'var(--accent)', transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none', flexShrink: 0, marginLeft: 8 }}>▼</span>
      </button>
      {open && (
        <div style={{ padding: 20, borderTop: '1px solid var(--border)', background: 'var(--bg-alt)' }}>
          <ol style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 16 }}>
            {[
              <>Go to <strong><a href="https://chatgpt.com" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>chatgpt.com</a></strong> in your browser. You&apos;ll see a simple homepage with a text box.</>,
              <>Click the <strong>&ldquo;Sign up&rdquo;</strong> button (top right corner of the page).</>,
              <><strong>Choose how to sign up.</strong> The easiest option is &ldquo;Continue with Google&rdquo; — it uses your existing Google account and skips the password step entirely. Or enter any email address and create a password.</>,
              <>If you used an email address, <strong>check your inbox</strong> for a verification email from OpenAI. Click the link inside it.</>,
              <>You&apos;re in. You&apos;ll land on the ChatGPT homepage. <strong>Click the text box at the bottom</strong> and start typing your message.</>,
            ].map((step, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <span style={{
                  width: 28, height: 28, borderRadius: '50%', background: 'var(--accent)', color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 1,
                }}>{i + 1}</span>
                <span style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink)' }}>{step}</span>
              </li>
            ))}
          </ol>
          <div style={{ background: 'var(--accent-lt)', borderRadius: 10, padding: '12px 16px', fontSize: 13, color: 'var(--accent-dk)', lineHeight: 1.5 }}>
            💙 <strong>The free account is completely free — no credit card required.</strong> OpenAI will offer you a paid plan, but you can ignore that for now. The free version is all you need for this course.
          </div>
        </div>
      )}
    </div>
  )
}

export default function SlideContent({ slide }: { slide: Slide }) {
  const titleStyle: React.CSSProperties = {
    fontFamily: 'var(--font-dm-serif), Georgia, serif',
    fontSize: 'clamp(24px, 3.5vw, 36px)',
    color: 'var(--ink)', lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.01em',
  }
  const bodyStyle: React.CSSProperties = {
    fontSize: 17, lineHeight: 1.75, color: 'var(--ink-mid)', marginBottom: 16,
  }

  if (slide.type === 'intro') {
    return (
      <div style={{ textAlign: 'center' }}>
        {slide.eyebrow && <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>{slide.eyebrow}</div>}
        {slide.icon && <div style={{ fontSize: 48, marginBottom: 20 }}>{slide.icon}</div>}
        <h1 style={{ ...titleStyle, fontSize: 'clamp(28px, 4vw, 44px)' }} dangerouslySetInnerHTML={{ __html: slide.title || '' }} />
        {slide.body?.map((p, i) => <p key={i} style={bodyStyle} dangerouslySetInnerHTML={{ __html: p }} />)}
        {slide.sub && <p style={{ marginTop: 20, fontSize: 14, color: 'var(--ink-lt)', fontStyle: 'italic' }}>{slide.sub}</p>}
      </div>
    )
  }

  if (slide.type === 'compare') {
    return (
      <>
        {slide.eyebrow && <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>{slide.eyebrow}</div>}
        {slide.body?.map((p, i) => <p key={i} style={bodyStyle} dangerouslySetInnerHTML={{ __html: p }} />)}
        <h2 style={titleStyle} dangerouslySetInnerHTML={{ __html: slide.title || '' }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '20px 0' }}>
          <div style={{ padding: 18, borderRadius: 12, background: '#fdf4f4', border: '1px solid #f0c8c8', fontSize: 14, lineHeight: 1.6 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9e3030', marginBottom: 8 }}>{slide.bad?.label}</div>
            <div style={{ color: 'var(--ink)' }}>&ldquo;{slide.bad?.text}&rdquo;</div>
          </div>
          <div style={{ padding: 18, borderRadius: 12, background: '#f4fbf7', border: '1px solid #c8e6d4', fontSize: 14, lineHeight: 1.6 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1a6b40', marginBottom: 8 }}>{slide.good?.label}</div>
            <div style={{ color: 'var(--ink)' }}>&ldquo;{slide.good?.text}&rdquo;</div>
          </div>
        </div>
        {slide.highlight && <SlideHighlight text={slide.highlight} />}
      </>
    )
  }

  if (slide.type === 'tool') {
    return (
      <>
        {slide.eyebrow && <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>{slide.eyebrow}</div>}
        <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 16, padding: 24, display: 'flex', gap: 18, alignItems: 'flex-start' }}>
          <div style={{ fontSize: 32, flexShrink: 0 }}>{slide.icon}</div>
          <div>
            <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>
              {slide.toolName} <span style={{ fontSize: 13, fontWeight: 400, color: 'var(--ink-lt)' }}>{slide.toolMaker}</span>
            </div>
            <div style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 600, marginBottom: 8 }}>{slide.toolUrl}</div>
            {slide.body?.map((p, i) => <p key={i} style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-mid)', marginTop: 10 }} dangerouslySetInnerHTML={{ __html: p }} />)}
          </div>
        </div>
      </>
    )
  }

  // concept, takeaway, exercise
  return (
    <>
      {slide.eyebrow && <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>{slide.eyebrow}</div>}
      {slide.icon && slide.type !== 'exercise' && <div style={{ fontSize: 48, marginBottom: 20 }}>{slide.icon}</div>}
      {slide.title && <h2 style={titleStyle} dangerouslySetInnerHTML={{ __html: slide.title }} />}

      {slide.summaryList && (
        <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 16, padding: 24, margin: '16px 0' }}>
          {slide.summaryList.map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: 12,
              padding: '8px 0', fontSize: 15, color: 'var(--ink)',
              borderBottom: i < slide.summaryList!.length - 1 ? '1px solid var(--border)' : 'none',
            }}>
              <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      )}

      {slide.body?.map((p, i) => <p key={i} style={bodyStyle} dangerouslySetInnerHTML={{ __html: p }} />)}
      {slide.list && <SlideList items={slide.list.items} negative={slide.list.negative} />}
      {slide.platformGrid && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '16px 0' }}>
          {slide.platformGrid.map(({ name, detail }) => (
            <div key={name} style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 14, padding: '16px 18px' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>{name}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-mid)', lineHeight: 1.55 }}>{detail}</div>
            </div>
          ))}
        </div>
      )}
      {slide.scriptStructure && (
        <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', margin: '16px 0' }}>
          {slide.scriptStructure.map(({ time, label, desc }, i, arr) => (
            <div key={time} style={{ display: 'flex', alignItems: 'stretch', borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div style={{ background: 'var(--accent-xl)', color: 'var(--accent-dk)', fontSize: 11, fontWeight: 700, padding: '12px 14px', minWidth: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', flexShrink: 0 }}>{time}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', padding: '12px 16px 4px' }}>{label}</div>
                <div style={{ fontSize: 12, color: 'var(--ink-mid)', padding: '0 16px 12px', lineHeight: 1.5 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      {(slide.stackCards || slide.habitCards) && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '16px 0' }}>
          {(slide.stackCards || slide.habitCards)!.map(({ num, name, desc }) => (
            <div key={num} style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 14, padding: '16px 20px', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--accent)', color: 'white', fontSize: 14, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>{num}</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>{name}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-mid)', lineHeight: 1.55 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      {slide.beforeAfter && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '20px 0' }}>
          <div style={{ padding: '18px 20px', borderRadius: 14, background: '#f5f0ea', border: '1px solid #e0d5c5' }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-lt)', marginBottom: 10 }}>{slide.beforeAfter.before.label}</div>
            {slide.beforeAfter.before.items.map((item, i) => (
              <div key={i} style={{ fontSize: 13, color: 'var(--ink-mid)', lineHeight: 1.6, padding: '4px 0', borderBottom: i < slide.beforeAfter!.before.items.length - 1 ? '1px solid rgba(28,43,53,0.07)' : 'none' }}>{item}</div>
            ))}
          </div>
          <div style={{ padding: '18px 20px', borderRadius: 14, background: 'var(--accent-xl)', border: '1px solid var(--accent-lt)' }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-dk)', marginBottom: 10 }}>{slide.beforeAfter.after.label}</div>
            {slide.beforeAfter.after.items.map((item, i) => (
              <div key={i} style={{ fontSize: 13, color: 'var(--ink)', lineHeight: 1.6, padding: '4px 0', borderBottom: i < slide.beforeAfter!.after.items.length - 1 ? '1px solid rgba(28,43,53,0.07)' : 'none' }}>{item}</div>
            ))}
          </div>
        </div>
      )}
      {slide.highlight && <SlideHighlight text={slide.highlight} />}
      {slide.template && slide.templateText && <TemplateBlock text={slide.templateText} />}
      {slide.prompt && <PromptBox text={slide.prompt} />}
      {slide.body2 && <p style={{ ...bodyStyle, marginTop: 16 }} dangerouslySetInnerHTML={{ __html: slide.body2 }} />}
      {slide.setupGuide && <SetupGuide />}
      {slide.gradBlock && (
        <div style={{ background: '#1c2b35', borderRadius: 20, padding: 32, textAlign: 'center', margin: '24px 0' }}>
          <div style={{ fontSize: 52, marginBottom: 16 }}>{slide.gradBlock.icon}</div>
          <div style={{ fontFamily: 'var(--font-dm-serif), Georgia, serif', fontSize: 26, color: 'white', marginBottom: 12, lineHeight: 1.3 }}>{slide.gradBlock.title}</div>
          <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: slide.gradBlock.body.replace(/\n/g, '<br/>') }} />
          <div style={{ fontFamily: 'var(--font-dm-serif), Georgia, serif', fontSize: 20, color: '#ddeef3', fontStyle: 'italic', marginTop: 16 }}>{slide.gradBlock.name}</div>
        </div>
      )}
    </>
  )
}
