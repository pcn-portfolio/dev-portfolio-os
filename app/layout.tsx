import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' })
export const metadata: Metadata = { title: 'Dev Portfolio OS', description: 'AI-powered portfolio' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fontSans.variable + ' font-sans min-h-screen bg-background'}>{children}</body>
    </html>
  )
}
