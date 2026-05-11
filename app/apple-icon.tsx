import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
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
          background: '#3d7a8a',
          borderRadius: 40,
        }}
      >
        <span
          style={{
            color: '#f5f3ee',
            fontSize: 68,
            fontFamily: 'Georgia, serif',
            lineHeight: 1,
            letterSpacing: '-1px',
          }}
        >
          C,
        </span>
        <span
          style={{
            color: '#f5f3ee',
            fontSize: 42,
            fontFamily: 'Georgia, serif',
            lineHeight: 1,
            letterSpacing: '3px',
            marginTop: 4,
          }}
        >
          AI
        </span>
      </div>
    ),
    { ...size }
  )
}
