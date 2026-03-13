import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DiStefano Italian Living | Own a Piece of Italy',
  description: 'Private property acquisition and Italian lifestyle advisory for international buyers seeking to own a home in Italy.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased scroll-smooth">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
