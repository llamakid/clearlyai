import type { Metadata } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'
import './globals.css'

const dmSerif = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Clearly, AI — Learn it. Use it. Own it.',
  description:
    'A plain-English AI school for non-technical adults. No jargon. No tech background needed. Real results.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://learnaiclearly.com'
  ),
  openGraph: {
    title: 'Clearly, AI — Learn it. Use it. Own it.',
    description: 'A plain-English AI school for non-technical adults.',
    url: 'https://learnaiclearly.com',
    siteName: 'Clearly, AI',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
