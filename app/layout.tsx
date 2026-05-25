import type { Metadata } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
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
  icons: {
    icon: [{ url: '/icon', type: 'image/png', sizes: '32x32' }],
    shortcut: '/icon',
    apple: [{ url: '/apple-icon', type: 'image/png', sizes: '180x180' }],
  },
  openGraph: {
    title: 'Clearly, AI — Learn it. Use it. Own it.',
    description: 'A plain-English AI school for non-technical adults.',
    url: 'https://learnaiclearly.com',
    siteName: 'Clearly, AI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clearly, AI — Learn it. Use it. Own it.',
    description:
      'A plain-English AI school for non-technical adults. No jargon. No tech background needed. Real results.',
  },
  verification: {
    google: 'dTG5n9ngUufE0PCDAML8uPaRDiXmghHHMxe2bF-ksDs',
    other: {
      'msvalidate.01': '419C4CEB97BA3612379EDA23D9F381F4',
    },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Clearly, AI',
  url: 'https://learnaiclearly.com',
  description: 'A plain-English AI school for non-technical adults. Learn it. Use it. Own it.',
  founder: {
    '@type': 'Person',
    name: 'Nate Guy',
  },
  knowsAbout: ['Artificial Intelligence', 'Machine Learning', 'ChatGPT', 'AI Tools', 'Productivity'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
