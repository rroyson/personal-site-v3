import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const TITLE = 'Rob Royson, Software Developer'
const DESCRIPTION =
  'Ten years shipping software from startups to enterprise. Backend and CI/CD (Java, Node, Docker, Kubernetes, GitHub Actions, AWS), full-stack web (React, Next.js, TypeScript), and AI-integrated products (OpenAI, Claude, MCP).'

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
  themeColor: '#0d1117',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className='antialiased'>
        <a href='#main' className='skip'>
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
