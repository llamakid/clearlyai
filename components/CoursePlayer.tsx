'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import type { CourseData, Slide } from '@/lib/course-data/types'

// ─── Types ────────────────────────────────────────────────────────────────────
interface CourseState {
  completed: Record<number, boolean>
  quizDone: boolean
  feedbackDone: boolean
}

type View = 'slide' | 'quiz' | 'feedback'

// ─── Slide Components ─────────────────────────────────────────────────────────

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

function SlideContent({ slide }: { slide: Slide }) {
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

// ─── Quiz Component ───────────────────────────────────────────────────────────

function QuizView({
  quiz,
  onComplete,
}: {
  quiz: CourseData['quiz']
  onComplete: () => void
}) {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [submitted, setSubmitted] = useState(false)

  const allAnswered = Object.keys(answers).length === quiz.length

  const selectAnswer = (qi: number, oi: number) => {
    if (submitted) return
    setAnswers(a => ({ ...a, [qi]: oi }))
  }

  const submit = () => {
    if (!allAnswered) return
    setSubmitted(true)
  }

  const score = submitted ? quiz.filter((q, i) => answers[i] === q.correct).length : 0

  const letters = ['A', 'B', 'C', 'D']

  const resultMsg = () => {
    if (score === 5) return { label: 'Perfect score!', msg: 'You nailed it. Every concept from Module 1 is crystal clear. You are absolutely ready for Module 2.' }
    if (score >= 4) return { label: 'Great work!', msg: "You've got a strong handle on the fundamentals. Review the one you missed — then you're ready to move on." }
    if (score >= 3) return { label: 'Good start.', msg: "Solid foundation. A couple of things to revisit — the lessons will be there when you need them. You're doing great." }
    return { label: 'No worries — review and retry!', msg: "Some things to revisit. Head back to the lessons and try again. It takes a few passes for new ideas to stick, and that's completely normal." }
  }

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '40px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: 640 }}>
        <div style={{ marginBottom: 36 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 10 }}>
            Module 1 · Knowledge Check
          </div>
          <h2 style={{ fontFamily: 'var(--font-dm-serif), Georgia, serif', fontSize: 36, color: 'var(--ink)', marginBottom: 8 }}>Quick Quiz</h2>
          <p style={{ fontSize: 16, color: 'var(--ink-mid)', lineHeight: 1.6 }}>5 questions. No pressure. This is just to help you see what clicked — and what to review. Take your time.</p>
        </div>

        {quiz.map((q, qi) => {
          const chosen = answers[qi]
          const isRight = submitted && chosen === q.correct
          return (
            <div key={qi} style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 16, padding: 24, marginBottom: 20 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 10 }}>
                Question {qi + 1} of {quiz.length}
              </div>
              <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--ink)', marginBottom: 18, lineHeight: 1.4 }}>{q.q}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {q.options.map((opt, oi) => {
                  let bg = 'transparent', border = '1.5px solid var(--border-md)'
                  if (!submitted && chosen === oi) { bg = 'var(--accent-lt)'; border = '1.5px solid var(--accent)' }
                  if (submitted && oi === q.correct) { bg = '#f0fbf5'; border = '1.5px solid #2a7a52' }
                  if (submitted && oi === chosen && oi !== q.correct) { bg = '#fdf4f4'; border = '1.5px solid #c0392b' }

                  let letterBg = 'var(--bg)'
                  let letterColor = 'var(--ink-mid)'
                  if (!submitted && chosen === oi) { letterBg = 'var(--accent)'; letterColor = 'white' }
                  if (submitted && oi === q.correct) { letterBg = '#2a7a52'; letterColor = 'white' }
                  if (submitted && oi === chosen && oi !== q.correct) { letterBg = '#c0392b'; letterColor = 'white' }

                  return (
                    <div
                      key={oi}
                      onClick={() => selectAnswer(qi, oi)}
                      style={{
                        display: 'flex', alignItems: 'flex-start', gap: 12,
                        padding: '12px 16px', borderRadius: 10, border, background: bg,
                        cursor: submitted ? 'default' : 'pointer', transition: 'all 0.15s',
                      }}
                    >
                      <div style={{
                        width: 26, height: 26, borderRadius: '50%', background: letterBg,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 12, fontWeight: 700, color: letterColor, flexShrink: 0, transition: 'all 0.15s',
                      }}>
                        {letters[oi]}
                      </div>
                      <div style={{ fontSize: 15, color: 'var(--ink)', lineHeight: 1.4, paddingTop: 2 }}>{opt}</div>
                    </div>
                  )
                })}
              </div>
              {submitted && (
                <div style={{
                  marginTop: 12, padding: '10px 14px', borderRadius: 8, fontSize: 14, lineHeight: 1.5,
                  background: isRight ? '#f0fbf5' : '#fdf4f4',
                  color: isRight ? '#1a6b40' : '#9e3030',
                }}>
                  {isRight ? '✓ ' : '✗ '}{q.feedback}
                </div>
              )}
            </div>
          )
        })}

        {!submitted && (
          <button
            onClick={submit}
            disabled={!allAnswered}
            style={{
              width: '100%', padding: 16, background: 'var(--accent)', color: 'white',
              border: 'none', borderRadius: 12, fontSize: 16, fontWeight: 700,
              cursor: allAnswered ? 'pointer' : 'not-allowed', fontFamily: 'inherit',
              marginTop: 8, marginBottom: 40, transition: 'background 0.15s',
              opacity: allAnswered ? 1 : 0.5,
            }}
          >
            Submit Quiz
          </button>
        )}

        {submitted && (
          <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 20, padding: 36, textAlign: 'center', marginTop: 24 }}>
            <div style={{ fontFamily: 'var(--font-dm-serif), Georgia, serif', fontSize: 56, color: 'var(--accent)', marginBottom: 8 }}>{score}/5</div>
            <div style={{ fontSize: 18, fontWeight: 600, color: 'var(--ink)', marginBottom: 12 }}>{resultMsg().label}</div>
            <p style={{ fontSize: 15, color: 'var(--ink-mid)', lineHeight: 1.65, marginBottom: 24 }}>{resultMsg().msg}</p>
            <button
              onClick={onComplete}
              style={{
                background: 'var(--accent)', color: 'white', border: 'none', borderRadius: 12,
                padding: '14px 32px', fontSize: 16, fontWeight: 700, cursor: 'pointer',
                fontFamily: 'inherit', transition: 'background 0.15s',
              }}
            >
              Leave Feedback &amp; Share Your Experience →
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Feedback Component ───────────────────────────────────────────────────────

function FeedbackView({ moduleId, nextModuleId }: { moduleId: number; nextModuleId?: number }) {
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

// ─── Main CoursePlayer ────────────────────────────────────────────────────────

export default function CoursePlayer({ course }: { course: CourseData }) {
  const storageKey = `clearlyai_m${course.moduleId}`

  const [courseState, setCourseState] = useState<CourseState>({ completed: {}, quizDone: false, feedbackDone: false })
  const [curLesson, setCurLesson] = useState(0)
  const [curSlide, setCurSlide] = useState(0)
  const [view, setView] = useState<View>('slide')

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || '{}')
      if (saved.completed || saved.quizDone || saved.feedbackDone) {
        setCourseState({ completed: saved.completed || {}, quizDone: !!saved.quizDone, feedbackDone: !!saved.feedbackDone })
        const doneKeys = Object.keys(saved.completed || {}).map(Number)
        if (doneKeys.length > 0) {
          const furthest = Math.min(Math.max(...doneKeys) + 1, course.lessons.length - 1)
          setCurLesson(furthest)
        }
      }
    } catch { }
  }, [storageKey, course.lessons.length])

  const persistState = useCallback((patch: Partial<CourseState>) => {
    try {
      const current = JSON.parse(localStorage.getItem(storageKey) || '{}')
      localStorage.setItem(storageKey, JSON.stringify({ ...current, ...patch }))
    } catch { }
  }, [storageKey])

  const lesson = course.lessons[curLesson]
  const slide = lesson.slides[curSlide]
  const isLastSlide = curSlide === lesson.slides.length - 1
  const isLastLesson = curLesson === course.lessons.length - 1
  const allLessonsDone = course.lessons.every((_, i) => courseState.completed[i])

  // Progress
  const totalSlides = course.lessons.reduce((a, l) => a + l.slides.length, 0)
  const doneSlides = course.lessons.reduce((a, l, i) => a + (courseState.completed[i] ? l.slides.length : 0), 0)
  const pct = courseState.quizDone ? 100 : Math.round(((doneSlides + curSlide) / totalSlides) * 100)

  const markLessonDone = () => {
    const newCompleted = { ...courseState.completed, [curLesson]: true }
    setCourseState(s => ({ ...s, completed: newCompleted }))
    persistState({ completed: newCompleted })
  }

  const goLesson = (idx: number) => {
    setCurLesson(idx); setCurSlide(0); setView('slide')
  }

  const prevSlide = () => {
    if (curSlide > 0) { setCurSlide(s => s - 1) }
    else if (curLesson > 0) {
      const prev = course.lessons[curLesson - 1]
      setCurLesson(l => l - 1)
      setCurSlide(prev.slides.length - 1)
    }
  }

  const nextSlide = () => {
    if (curSlide < lesson.slides.length - 1) { setCurSlide(s => s + 1) }
  }

  const handleNextBtn = () => {
    if (isLastSlide && isLastLesson) { markLessonDone(); setView('quiz') }
    else if (isLastSlide) { markLessonDone(); goLesson(curLesson + 1) }
    else { nextSlide() }
  }

  const handleQuizComplete = () => {
    setCourseState(s => ({ ...s, quizDone: true }))
    persistState({ quizDone: true })
    setView('feedback')
  }

  const nextBtnLabel = isLastSlide && isLastLesson
    ? 'Finish Lesson & Take Quiz →'
    : isLastSlide
      ? 'Complete Lesson →'
      : 'Next →'

  // ── Sidebar ──
  const Sidebar = (
    <aside style={{
      width: 300, background: 'var(--bg-alt)', borderRight: '1px solid var(--border)',
      display: 'flex', flexDirection: 'column', flexShrink: 0, overflowY: 'auto',
    }}>
      <Link href="/dashboard" style={{
        display: 'flex', alignItems: 'center', gap: 6, padding: '10px 20px',
        fontSize: 12, fontWeight: 600, color: 'var(--ink-lt)', textDecoration: 'none',
        borderBottom: '1px solid var(--border)', transition: 'color 0.15s',
      }}>
        ← Course Home
      </Link>
      <div style={{ padding: '20px 20px 12px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 4 }}>Module {course.moduleId}</div>
        <div style={{ fontFamily: 'var(--font-dm-serif), Georgia, serif', fontSize: 16, color: 'var(--ink)', lineHeight: 1.3 }}>{course.title}</div>
      </div>
      <div style={{ padding: '12px 0', flex: 1 }}>
        {course.lessons.map((l, i) => {
          const done = courseState.completed[i]
          const active = i === curLesson && view === 'slide'
          return (
            <div
              key={l.id}
              onClick={() => goLesson(i)}
              style={{
                cursor: 'pointer', borderLeft: `3px solid ${active ? 'var(--accent)' : 'transparent'}`,
                transition: 'all 0.15s',
              }}
            >
              <div style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px',
                background: active ? 'var(--accent-xl)' : 'transparent', transition: 'background 0.15s',
              }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 700, transition: 'all 0.2s',
                  background: done || active ? 'var(--accent)' : 'var(--border)',
                  color: done || active ? 'white' : 'var(--ink-mid)',
                }}>
                  {done ? '✓' : i + 1}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: active ? 'var(--accent-dk)' : 'var(--ink)', lineHeight: 1.3 }}>{l.title}</div>
                  <div style={{ fontSize: 11, color: 'var(--ink-lt)', marginTop: 2 }}>{l.meta}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {allLessonsDone && (
        <button
          onClick={() => setView('quiz')}
          style={{
            margin: '12px 16px', padding: 12, borderRadius: 'var(--r)',
            background: 'var(--accent)', color: 'white', border: 'none',
            fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
            transition: 'background 0.15s', textAlign: 'center',
          }}
        >
          Take the Module {course.moduleId} Quiz →
        </button>
      )}
      {course.nextModuleId && (
        <Link
          href={`/course/${course.nextModuleId}`}
          style={{
            display: 'block', margin: '0 16px 16px', padding: 12, borderRadius: 'var(--r)',
            textAlign: 'center', fontSize: 13, fontWeight: 700, textDecoration: 'none',
            transition: 'all 0.2s',
            background: courseState.quizDone ? 'var(--accent)' : 'rgba(61,122,138,0.2)',
            color: courseState.quizDone ? 'white' : 'rgba(255,255,255,0.35)',
            pointerEvents: courseState.quizDone ? 'auto' : 'none',
          }}
        >
          Next: Module {course.nextModuleId} →
        </Link>
      )}
    </aside>
  )

  return (
    <div style={{ height: '100dvh', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'var(--bg)' }}>
      {/* Top Bar */}
      <div style={{
        height: 56, background: '#1c2b35', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '0 24px', flexShrink: 0, zIndex: 20,
      }}>
        <Link href="/dashboard" style={{ fontFamily: 'var(--font-dm-serif), Georgia, serif', fontSize: 18, color: 'white', textDecoration: 'none' }}>
          Clearly,&nbsp;<span style={{ color: '#ddeef3' }}>AI</span>
        </Link>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>
          Module {course.moduleId} · {course.subtitle}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', fontWeight: 600, whiteSpace: 'nowrap' }}>{pct}% complete</div>
          <div style={{ width: 140, height: 4, background: 'rgba(255,255,255,0.12)', borderRadius: 99, overflow: 'hidden' }}>
            <div style={{ height: '100%', background: '#ddeef3', borderRadius: 99, width: `${pct}%`, transition: 'width 0.4s ease' }} />
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {Sidebar}

        {/* Main */}
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
          {view === 'slide' && (
            <>
              {/* Slide Area */}
              <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40 }}>
                <div style={{ width: '100%', maxWidth: 680, animation: 'slideIn 0.3s ease' }}>
                  <SlideContent slide={slide} />
                </div>
              </div>

              {/* Nav Bar */}
              <div style={{
                height: 72, background: 'var(--bg-alt)', borderTop: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '0 40px', flexShrink: 0,
              }}>
                <button
                  onClick={prevSlide}
                  disabled={curLesson === 0 && curSlide === 0}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    background: 'transparent', border: '1.5px solid var(--border-md)',
                    borderRadius: 10, padding: '10px 20px', fontSize: 14, fontWeight: 600,
                    color: 'var(--ink-mid)', cursor: 'pointer', fontFamily: 'inherit',
                    transition: 'all 0.15s', opacity: (curLesson === 0 && curSlide === 0) ? 0.3 : 1,
                  }}
                >
                  ← Back
                </button>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-mid)' }}>
                    Lesson {curLesson + 1} · Slide {curSlide + 1} of {lesson.slides.length}
                  </div>
                  <div style={{ display: 'flex', gap: 5 }}>
                    {lesson.slides.map((_, i) => (
                      <div key={i} style={{
                        width: 7, height: 7, borderRadius: '50%', transition: 'all 0.2s',
                        background: i === curSlide ? 'var(--accent)' : i < curSlide ? 'var(--accent-lt)' : 'var(--border-md)',
                        transform: i === curSlide ? 'scale(1.3)' : 'none',
                      }} />
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleNextBtn}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    background: 'var(--accent)', border: '1.5px solid var(--accent)',
                    borderRadius: 10, padding: '10px 20px', fontSize: 14, fontWeight: 600,
                    color: 'white', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s',
                  }}
                >
                  {nextBtnLabel}
                </button>
              </div>
            </>
          )}

          {view === 'quiz' && (
            <QuizView quiz={course.quiz} onComplete={handleQuizComplete} />
          )}

          {view === 'feedback' && (
            <FeedbackView moduleId={course.moduleId} nextModuleId={course.nextModuleId} />
          )}
        </main>
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
