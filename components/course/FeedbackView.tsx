'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function FeedbackView({ moduleId, nextModuleId }: { moduleId: number; nextModuleId?: number }) {
  const [stars, setStars] = useState(0)
  const [recommend, setRecommend] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ helpful: '', confusing: '', change: '', testimonial: '', name: '', email: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div style={{ flex: 1, overflowY: 'auto', padding: '40px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: 620, textAlign: 'center', padding: '48px 24px' }}>
          <div style={{ fontSize: 56, marginBottom: 20 }}>{nextModuleId ? '🙏' : '🎓'}</div>
          <h2 style={{ fontFamily: 'var(--font-dm-serif), Georgia, serif', fontSize: 32, color: 'var(--ink)', marginBottom: 12 }}>
            {nextModuleId ? 'Thank you so much.' : 'You did it. Thank you.'}
          </h2>
          <p style={{ fontSize: 16, color: 'var(--ink-mid)', lineHeight: 1.65, marginBottom: 28 }}>
            {nextModuleId ? (
              <>Your feedback is genuinely valuable — it shapes every lesson, every module, and every experience we build for the people who come after you.<br /><br />You&apos;ve completed Module {moduleId}. You&apos;re not just learning about AI anymore. You&apos;re using it.<br /><br /><strong>Welcome to Clearly, AI.</strong></>
            ) : (
              <>Six modules. All the way through. You&apos;re the person we built this for, and your feedback will help us build it better for everyone who comes after you.<br /><br />Go use AI. You know how.<br /><br /><strong>Welcome to Clearly, AI.</strong></>
            )}
          </p>
          {nextModuleId ? (
            <Link href={`/course/${nextModuleId}`} style={{
              display: 'inline-block', padding: '14px 32px',
              background: 'var(--accent)', color: 'white', borderRadius: 12,
              fontSize: 15, fontWeight: 700, textDecoration: 'none',
            }}>
              Continue to Module {nextModuleId} →
            </Link>
          ) : (
            <Link href="/dashboard" style={{
              display: 'inline-block', padding: '14px 32px',
              background: 'var(--accent)', color: 'white', borderRadius: 12,
              fontSize: 15, fontWeight: 700, textDecoration: 'none',
            }}>
              ← Back to Course Home
            </Link>
          )}
        </div>
      </div>
    )
  }

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '40px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: 620 }}>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'var(--font-dm-serif), Georgia, serif', fontSize: 36, color: 'var(--ink)', marginBottom: 8 }}>How&apos;d it go?</h2>
          <p style={{ fontSize: 16, color: 'var(--ink-mid)', lineHeight: 1.6 }}>Your honest feedback directly shapes what Clearly, AI becomes. This takes about 3 minutes and means the world to us.</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Stars */}
          <div style={{ marginBottom: 28 }}>
            <label style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', marginBottom: 10, display: 'block' }}>
              1. How would you rate Module {moduleId} overall?
            </label>
            <div style={{ display: 'flex', gap: 8 }}>
              {[1, 2, 3, 4, 5].map(i => (
                <button
                  key={i} type="button" onClick={() => setStars(i)}
                  style={{
                    fontSize: 28, cursor: 'pointer', border: 'none', background: 'none', padding: 2,
                    filter: i <= stars ? 'grayscale(0)' : 'grayscale(1)',
                    transform: i <= stars ? 'scale(1.1)' : 'none',
                    transition: 'filter 0.1s, transform 0.1s',
                  }}
                >⭐</button>
              ))}
            </div>
          </div>

          {[
            { key: 'helpful', label: '2. What was most useful or helpful?', placeholder: "The part about hallucination was something I'd never heard explained clearly before..." },
            { key: 'confusing', label: '3. Was anything confusing or unclear?', placeholder: "I wasn't sure what to do when the AI gave me a bad answer..." },
            { key: 'change', label: '4. What would you change or add?', placeholder: "I'd love more specific examples for my kind of job..." },
          ].map(({ key, label, placeholder }) => (
            <div key={key} style={{ marginBottom: 28 }}>
              <label style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', marginBottom: 10, display: 'block' }}>{label}</label>
              <textarea
                value={form[key as keyof typeof form]}
                onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                placeholder={placeholder}
                style={{
                  width: '100%', padding: '14px 16px', border: '1.5px solid var(--border-md)',
                  borderRadius: 12, fontSize: 15, fontFamily: 'inherit', color: 'var(--ink)',
                  lineHeight: 1.6, background: 'white', resize: 'vertical', outline: 'none',
                  minHeight: 90,
                }}
              />
            </div>
          ))}

          {/* Recommend */}
          <div style={{ marginBottom: 28 }}>
            <label style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', marginBottom: 10, display: 'block' }}>
              5. Would you recommend Clearly, AI to someone you know?
            </label>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {[{ val: 'yes', label: 'Yes, definitely' }, { val: 'maybe', label: 'Probably' }, { val: 'no', label: 'Not yet' }].map(({ val, label }) => (
                <button
                  key={val} type="button" onClick={() => setRecommend(val)}
                  style={{
                    padding: '8px 18px', borderRadius: 999, fontSize: 14, fontWeight: 600,
                    cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s',
                    background: recommend === val ? 'var(--accent)' : 'transparent',
                    color: recommend === val ? 'white' : 'var(--ink-mid)',
                    border: recommend === val ? '1.5px solid var(--accent)' : '1.5px solid var(--border-md)',
                  }}
                >{label}</button>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div style={{ marginBottom: 28 }}>
            <label style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', marginBottom: 10, display: 'block' }}>
              6. Would you be willing to share a short testimonial? (Optional)
            </label>
            <textarea
              value={form.testimonial}
              onChange={e => setForm(f => ({ ...f, testimonial: e.target.value }))}
              placeholder="After just one module, I finally feel like I understand what everyone's been talking about..."
              style={{
                width: '100%', padding: '14px 16px', border: '1.5px solid var(--border-md)',
                borderRadius: 12, fontSize: 15, fontFamily: 'inherit', color: 'var(--ink)',
                lineHeight: 1.6, background: 'white', resize: 'vertical', outline: 'none', minHeight: 90,
              }}
            />
          </div>

          {/* Name & Email */}
          <div style={{ marginBottom: 28 }}>
            <label style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', marginBottom: 10, display: 'block' }}>
              7. Your name &amp; email — so we can follow up (optional)
            </label>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <input
                value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="Your name" style={{ flex: 1, minWidth: 200, padding: '12px 16px', border: '1.5px solid var(--border-md)', borderRadius: 10, fontSize: 15, fontFamily: 'inherit', color: 'var(--ink)', background: 'white', outline: 'none' }}
              />
              <input
                type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="your@email.com" style={{ flex: 1, minWidth: 200, padding: '12px 16px', border: '1.5px solid var(--border-md)', borderRadius: 10, fontSize: 15, fontFamily: 'inherit', color: 'var(--ink)', background: 'white', outline: 'none' }}
              />
            </div>
          </div>

          <button type="submit" style={{
            width: '100%', padding: 16, background: 'var(--accent)', color: 'white',
            border: 'none', borderRadius: 12, fontSize: 16, fontWeight: 700,
            cursor: 'pointer', fontFamily: 'inherit', marginBottom: 40, transition: 'background 0.15s',
          }}>
            Submit My Feedback →
          </button>
        </form>
      </div>
    </div>
  )
}
