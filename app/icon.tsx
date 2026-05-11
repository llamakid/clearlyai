import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#3d7a8a',
          borderRadius: '7px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#f5f3ee',
            fontFamily: 'Georgia, serif',
            lineHeight: 1,
          }}
        >
          <span style={{ fontSize: 14, letterSpacing: '-0.5px' }}>C,</span>
          <span style={{ fontSize: 11, letterSpacing: '0.5px' }}>AI</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
