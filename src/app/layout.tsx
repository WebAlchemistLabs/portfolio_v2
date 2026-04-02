import type { Metadata } from 'next'
import { DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500'],
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Marlon Haynes',
  description: 'Full-stack developer building high-performance web apps and digital products. Available for frontend, UI/UX, and full-stack roles in Canada.',
  keywords: ['frontend developer', 'React', 'Next.js', 'Canada', 'UI/UX', 'WebAlchemistLabs'],
  openGraph: {
    title: 'Marlon Haynes',
    description: 'Building high-performance web apps and digital products.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}