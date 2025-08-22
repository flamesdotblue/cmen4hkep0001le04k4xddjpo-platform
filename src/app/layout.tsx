import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Tesla's Robocop Factory",
  description: 'An ultra-dark, neon-laced portal into the future of autonomous manufacturing.',
  icons: { icon: '/favicon.ico' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="body-bg antialiased min-h-screen">
        <div className="fixed inset-0 grid-overlay opacity-60" />
        {children}
      </body>
    </html>
  )
}
