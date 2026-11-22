import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ variable: '--font-space-grotesk', subsets: ['latin'] })
const jetbrainsMono = JetBrains_Mono({ variable: '--font-jetbrains-mono', subsets: ['latin'] })

const TITLE = 'Rob Royson, Software Developer'
const DESCRIPTION =
  'Software developer in Charleston, SC. Ten years across startups and enterprise: agentic AI systems, web and iOS apps, backend services, and CI/CD.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: TITLE }],
  },
  twitter: { card: 'summary_large_image' },
}

export const viewport: Viewport = {
  themeColor: '#0b0d11',
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className='font-sans text-[17px] leading-relaxed antialiased'>
        <a href='#main' className='skip'>
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
