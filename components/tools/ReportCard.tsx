import type { AuditReport, CategoryResult, FindingStatus } from '@/lib/aeo/types'

const card: React.CSSProperties = {
  background: 'white',
  borderRadius: 20,
  border: '1px solid var(--border)',
  boxShadow: 'var(--shadow-sm)',
  padding: '40px',
}

const statusColors: Record<FindingStatus, { bg: string; border: string; text: string }> = {
  good: { bg: '#eef6ef', border: '#cde3d0', text: '#2e6136' },
  warn: { bg: '#fdf6e8', border: '#f0e0bb', text: '#8a6420' },
  bad: { bg: '#fbeeec', border: '#efd0cb', text: '#963f33' },
}

const statusIcon: Record<FindingStatus, string> = { good: '✓', warn: '!', bad: '✕' }

export function scoreColor(pct: number): string {
  if (pct >= 80) return '#2e6136'
  if (pct >= 60) return '#8a6420'
  return '#963f33'
}

// Score header + per-category findings for an AuditReport. Shared by the
// one-shot audit tool and the recurring visibility tracker so both render
// an identical report.
export default function ReportCard({ report }: { report: AuditReport }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{
        ...card,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 24, flexWrap: 'wrap',
      }}>
        <div style={{ minWidth: 200, flex: 1 }}>
          <p style={{
            fontSize: 12, fontWeight: 700, color: 'var(--accent-dk)',
            letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6,
          }}>
            Your AI Search Report
          </p>
          <p style={{ fontSize: 17, fontWeight: 600, color: 'var(--ink)', wordBreak: 'break-all', marginBottom: 4 }}>
            {report.url}
          </p>
          <p style={{ fontSize: 13, color: 'var(--ink-mid)' }}>
            Checked {new Date(report.crawledAt).toLocaleString()}
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: 'var(--font-h)', fontSize: 56, lineHeight: 1,
            color: scoreColor(report.score),
          }}>
            {report.score}
          </div>
          <div style={{ fontSize: 13, color: 'var(--ink-mid)', marginTop: 4 }}>out of 100</div>
          <div style={{
            display: 'inline-block', marginTop: 10,
            border: `1.5px solid ${scoreColor(report.score)}`,
            color: scoreColor(report.score),
            borderRadius: 999, padding: '4px 14px',
            fontSize: 13, fontWeight: 700,
          }}>
            Grade {report.grade}
          </div>
        </div>
      </div>

      {report.categories.map(category => (
        <CategoryCard key={category.key} category={category} />
      ))}
    </div>
  )
}

function CategoryCard({ category }: { category: CategoryResult }) {
  const pct = Math.round((category.score / category.maxScore) * 100)
  return (
    <div style={{ ...card, padding: '28px 32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 12 }}>
        <h3 style={{ fontFamily: 'var(--font-h)', fontSize: 20, color: 'var(--ink)' }}>{category.label}</h3>
        <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink-mid)', whiteSpace: 'nowrap' }}>
          {category.score}/{category.maxScore}
        </span>
      </div>
      <div style={{ height: 8, borderRadius: 999, background: 'var(--bg)', overflow: 'hidden', marginBottom: 18 }}>
        <div style={{ height: '100%', width: `${pct}%`, background: scoreColor(pct), borderRadius: 999 }} />
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, padding: 0, margin: 0 }}>
        {category.findings.map(finding => {
          const c = statusColors[finding.status]
          return (
            <li key={finding.id} style={{
              background: c.bg, border: `1px solid ${c.border}`,
              borderRadius: 12, padding: '12px 16px', fontSize: 14, color: c.text,
              display: 'flex', gap: 10, alignItems: 'flex-start', lineHeight: 1.55,
            }}>
              <span style={{ fontWeight: 700, flexShrink: 0 }}>{statusIcon[finding.status]}</span>
              <div>
                <p style={{ margin: 0 }}>{finding.message}</p>
                {finding.recommendation && (
                  <p style={{ margin: '4px 0 0', fontSize: 13, opacity: 0.85 }}>
                    How to fix it: {finding.recommendation}
                  </p>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
