'use client'

import Link from 'next/link'

interface CompletionViewProps {
  moduleId: number
  nextModuleId?: number
  courseSlug: string
  userId?: string
  onGiveFeedback: () => void
}

export default function CompletionView({ moduleId, nextModuleId, courseSlug, userId, onGiveFeedback }: CompletionViewProps) {
  const isStarter = moduleId === 0

  let icon = '🎉'
  let title = `Module ${moduleId} complete. Nice work.`
  let body = "You're building real momentum. Keep going while it's fresh."
  let primaryLabel = `Continue to Module ${nextModuleId} →`
  let primaryHref = `/course/${nextModuleId}`

  if (isStarter) {
    icon = '🚀'
    title = "You just did something most people haven't."
    body = "Every one of those 10 things works today, with a free AI account, in less time than it takes to make coffee. This is just the beginning — the full Clearly, AI curriculum goes deeper, with real workflows, smarter prompts, and a personal AI system that works the way you do."
    primaryLabel = 'See the full curriculum →'
    primaryHref = '/pricing'
  } else if (!nextModuleId) {
    icon = '🎓'
    title = 'You did it. Course complete.'
    body = "You've built a real skill you'll use for years. Ready to keep the momentum going with another course?"
    primaryLabel = 'Explore more courses →'
    primaryHref = '/dashboard'
  }

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '100%', maxWidth: 620, textAlign: 'center' }}>
        <div style={{ fontSize: 56, marginBottom: 20 }}>{icon}</div>
        <h2 style={{ fontFamily: 'var(--font-dm-serif), Georgia, serif', fontSize: 32, color: 'var(--ink)', marginBottom: 12 }}>
          {title}
        </h2>
        <p style={{ fontSize: 16, color: 'var(--ink-mid)', lineHeight: 1.65, marginBottom: 32 }}>
          {body}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <Link href={primaryHref} style={{
            display: 'inline-block', padding: '16px 40px',
            background: 'var(--accent)', color: 'white', borderRadius: 12,
            fontSize: 16, fontWeight: 700, textDecoration: 'none',
            boxShadow: '0 4px 16px rgba(61,122,138,0.3)',
          }}>
            {primaryLabel}
          </Link>

          {!userId && isStarter && (
            <p style={{ fontSize: 13, color: 'var(--ink-lt)' }}>
              Want to save your progress? <Link href="/signup" style={{ color: 'var(--accent)', fontWeight: 600 }}>Create a free account →</Link>
            </p>
          )}

          <button
            onClick={onGiveFeedback}
            style={{
              background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit',
              fontSize: 14, color: 'var(--ink-lt)', textDecoration: 'underline', padding: 4,
            }}
          >
            Got 2 minutes? Give quick feedback →
          </button>
        </div>
      </div>
    </div>
  )
}
