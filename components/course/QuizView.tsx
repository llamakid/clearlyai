'use client'

import { useState } from 'react'
import type { CourseData } from '@/lib/course-data/types'

export default function QuizView({
  quiz,
  moduleId,
  onComplete,
}: {
  quiz: CourseData['quiz']
  moduleId: number
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
            Module {moduleId} · Knowledge Check
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
