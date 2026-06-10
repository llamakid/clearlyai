'use client'

import { useState, useEffect, useCallback, useMemo, startTransition } from 'react'
import Link from 'next/link'
import type { CourseData } from '@/lib/course-data/types'
import SlideContent from '@/components/course/SlideContent'
import QuizView from '@/components/course/QuizView'
import FeedbackView from '@/components/course/FeedbackView'
import { createClient } from '@/lib/supabase/client'

interface CourseState {
  completed: Record<number, boolean>
  quizDone: boolean
  feedbackDone: boolean
}

interface InitialProgress {
  current_lesson: number
  current_slide: number
  completed: boolean
}

type View = 'slide' | 'quiz' | 'feedback'

interface CoursePlayerProps {
  course: CourseData
  courseSlug: string
  userId?: string
  initialProgress?: InitialProgress | null
}

export default function CoursePlayer({ course, courseSlug, userId, initialProgress }: CoursePlayerProps) {
  const storageKey = `clearlyai_m${course.moduleId}`

  const [courseState, setCourseState] = useState<CourseState>({ completed: {}, quizDone: false, feedbackDone: false })
  const [curLesson, setCurLesson] = useState(0)
  const [curSlide, setCurSlide] = useState(0)
  const [view, setView] = useState<View>('slide')

  useEffect(() => {
    if (initialProgress) {
      // Build per-lesson completion map from DB: all lessons before current are done;
      // if module is marked complete, all lessons are done.
      const completedMap: Record<number, boolean> = {}
      if (initialProgress.completed) {
        course.lessons.forEach((_, i) => { completedMap[i] = true })
      } else {
        for (let i = 0; i < initialProgress.current_lesson; i++) {
          completedMap[i] = true
        }
      }
      setCourseState(s => ({ ...s, completed: completedMap }))
      setCurLesson(initialProgress.current_lesson)
      setCurSlide(initialProgress.current_slide)
      // Keep localStorage in sync so offline / tab-switch is instant
      try {
        const existing = JSON.parse(localStorage.getItem(storageKey) || '{}')
        localStorage.setItem(storageKey, JSON.stringify({ ...existing, completed: completedMap }))
      } catch { }
      return
    }

    // No DB record — fall back to localStorage
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // intentionally runs once on mount — initialProgress is stable from server render

  const persistState = useCallback((patch: Partial<CourseState>) => {
    setTimeout(() => {
      try {
        const current = JSON.parse(localStorage.getItem(storageKey) || '{}')
        localStorage.setItem(storageKey, JSON.stringify({ ...current, ...patch }))
      } catch { }
    }, 0)
  }, [storageKey])

  // Upsert progress to DB — fire and forget, never blocks UI.
  // Skipped for unauthenticated users.
  const saveProgressToDB = useCallback((lesson: number, slide: number, moduleCompleted: boolean) => {
    if (!userId) return
    createClient()
      .from('course_progress')
      .upsert(
        {
          user_id: userId,
          module_id: course.moduleId,
          current_lesson: lesson,
          current_slide: slide,
          completed: moduleCompleted,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'user_id,module_id' }
      )
      .then(null, console.error)
  }, [userId, course.moduleId])

  const lesson = course.lessons[curLesson]
  const slide = lesson.slides[curSlide]
  const isLastSlide = curSlide === lesson.slides.length - 1
  const isLastLesson = curLesson === course.lessons.length - 1
  const allLessonsDone = course.lessons.every((_, i) => courseState.completed[i])

  const hasQuiz = (course.quiz?.length ?? 0) > 0

  const totalSlides = course.lessons.reduce((a, l) => a + l.slides.length, 0)
  const doneSlides = course.lessons.reduce((a, l, i) => a + (courseState.completed[i] ? l.slides.length : 0), 0)
  const pct = (hasQuiz ? courseState.quizDone : allLessonsDone) ? 100 : Math.round(((doneSlides + curSlide) / totalSlides) * 100)

  const markLessonDone = () => {
    const newCompleted = { ...courseState.completed, [curLesson]: true }
    const allDone = course.lessons.every((_, i) => newCompleted[i])
    setCourseState(s => ({ ...s, completed: newCompleted }))
    persistState({ completed: newCompleted })
    // Save position after this lesson: next lesson (or stay on last if done)
    const nextLesson = isLastLesson ? curLesson : curLesson + 1
    saveProgressToDB(nextLesson, 0, allDone)
  }

  const goLesson = useCallback((idx: number) => {
    setCurLesson(idx); setCurSlide(0); setView('slide')
  }, [])

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
    if (isLastSlide && isLastLesson) {
      startTransition(() => markLessonDone())
      setView(hasQuiz ? 'quiz' : 'feedback')
    } else if (isLastSlide) {
      startTransition(() => markLessonDone())
      goLesson(curLesson + 1)
    } else {
      nextSlide()
    }
  }

  const handleQuizComplete = () => {
    setCourseState(s => ({ ...s, quizDone: true }))
    persistState({ quizDone: true })
    setView('feedback')
  }

  const nextBtnLabel = isLastSlide && isLastLesson
    ? hasQuiz ? 'Finish Lesson & Take Quiz →' : 'Finish Course →'
    : isLastSlide
      ? 'Complete Lesson →'
      : 'Next →'

  const Sidebar = useMemo(() => (
    <aside style={{
      width: 300, background: 'var(--bg-alt)', borderRight: '1px solid var(--border)',
      display: 'flex', flexDirection: 'column', flexShrink: 0, overflowY: 'auto',
    }}>
      <Link href={courseSlug ? `/courses/${courseSlug}` : userId ? '/dashboard' : '/'} style={{
        display: 'flex', alignItems: 'center', gap: 6, padding: '10px 20px',
        fontSize: 12, fontWeight: 600, color: 'var(--ink-lt)', textDecoration: 'none',
        borderBottom: '1px solid var(--border)', transition: 'color 0.15s',
      }}>
        {courseSlug ? '← Course Home' : userId ? '← Back to Dashboard' : '← Back to Home'}
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
      {allLessonsDone && hasQuiz && (
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
      {!userId && (
        <div style={{
          margin: '12px 16px', padding: '14px 16px', borderRadius: 'var(--r)',
          background: 'var(--accent-lt)', border: '1px solid var(--accent)',
        }}>
          <p style={{ fontSize: 12, color: 'var(--accent-dk)', fontWeight: 500, lineHeight: 1.5, marginBottom: 10 }}>
            You&apos;re previewing the free course. Create a free account to save your progress.
          </p>
          <a href="/signup" style={{
            display: 'block', textAlign: 'center', padding: '8px 12px', borderRadius: 8,
            background: 'var(--accent)', color: 'white', fontSize: 12, fontWeight: 700,
            textDecoration: 'none',
          }}>
            Create free account →
          </a>
        </div>
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
  ), [courseState.completed, courseState.quizDone, curLesson, view, course, courseSlug, allLessonsDone, hasQuiz, goLesson, userId])

  return (
    <div style={{ height: '100dvh', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'var(--bg)' }}>
      {/* Top Bar */}
      <div style={{
        height: 56, background: '#1c2b35', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '0 24px', flexShrink: 0, zIndex: 20,
      }}>
        <Link href={userId ? '/dashboard' : '/'} style={{ fontFamily: 'var(--font-dm-serif), Georgia, serif', fontSize: 18, color: 'white', textDecoration: 'none' }}>
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

        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
          {view === 'slide' && (
            <>
              <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40 }}>
                <div style={{ width: '100%', maxWidth: 680, animation: 'slideIn 0.3s ease' }}>
                  <SlideContent slide={slide} />
                </div>
              </div>

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
            <QuizView quiz={course.quiz ?? []} moduleId={course.moduleId} onComplete={handleQuizComplete} />
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
