import { ImageResponse } from 'next/og'

export const alt = 'Clearly, AI — Learn it. Use it. Own it.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

async function loadFont(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      'https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap',
      { headers: { 'User-Agent': 'Mozilla/5.0 (compatible)' } }
    ).then(r => r.text())
    const url = css.match(/url\(([^)]+)\)/)?.[1]
    if (!url) return null
    return fetch(url).then(r => r.arrayBuffer())
  } catch {
    return null
  }
}

export default async function Image() {
  const fontData = await loadFont()

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f5f3ee',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            background: '#3d7a8a',
            display: 'flex',
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 18,
            background: '#3d7a8a',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 36,
          }}
        >
          <span
            style={{
              color: '#f5f3ee',
              fontSize: 28,
              fontFamily: 'Georgia, serif',
              lineHeight: 1,
              letterSpacing: '-0.5px',
            }}
          >
            C,
          </span>
          <span
            style={{
              color: '#f5f3ee',
              fontSize: 18,
              fontFamily: 'Georgia, serif',
              lineHeight: 1,
              letterSpacing: '1px',
              marginTop: 2,
            }}
          >
            AI
          </span>
        </div>

        {/* Brand name */}
        <div
          style={{
            fontSize: 80,
            fontFamily: fontData ? 'DM Serif Display' : 'Georgia, serif',
            fontWeight: 400,
            color: '#1c2b35',
            letterSpacing: '-1.5px',
            marginBottom: 20,
            display: 'flex',
          }}
        >
          Clearly, AI
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            fontFamily: 'system-ui, sans-serif',
            fontWeight: 600,
            color: '#3d7a8a',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: 32,
            display: 'flex',
          }}
        >
          Learn it. Use it. Own it.
        </div>

        {/* Divider */}
        <div
          style={{
            width: 60,
            height: 2,
            background: '#3d7a8a',
            opacity: 0.3,
            marginBottom: 32,
            display: 'flex',
          }}
        />

        {/* Description */}
        <div
          style={{
            fontSize: 26,
            fontFamily: 'system-ui, sans-serif',
            fontWeight: 400,
            color: '#4a6475',
            textAlign: 'center',
            maxWidth: 700,
            lineHeight: 1.5,
            display: 'flex',
          }}
        >
          A plain-English AI school for non-technical adults
        </div>

        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: 44,
            fontSize: 20,
            fontFamily: 'system-ui, sans-serif',
            color: '#9dafb8',
            letterSpacing: '0.05em',
            display: 'flex',
          }}
        >
          learnaiclearly.com
        </div>
      </div>
    ),
    {
      ...size,
      ...(fontData
        ? {
            fonts: [
              {
                name: 'DM Serif Display',
                data: fontData,
                style: 'normal' as const,
                weight: 400,
              },
            ],
          }
        : {}),
    }
  )
}
