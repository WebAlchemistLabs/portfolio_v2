import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Marlon Haynes — Frontend Developer',
  description:
    'Full-stack developer specializing in React, Next.js, and modern web applications. Available for frontend, UI/UX, and full-stack roles.',
  keywords: ['frontend developer', 'React', 'Next.js', 'Toronto', 'Canada'],
  openGraph: {
    title: 'Marlon Haynes — Frontend Developer',
    description: 'Building modern web applications with React and Next.js.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} dark`}>
      <body className="font-body bg-bg text-text antialiased">
        {children}
      </body>
    </html>
  )
}