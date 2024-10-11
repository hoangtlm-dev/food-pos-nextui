// Libs
import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'

// Styles
import './globals.css'

// Providers
import Providers from './providers'

const barlow = Barlow({ subsets: ['latin'], weight: ['400', '500', '600'] })

export const metadata: Metadata = {
  title: {
    template: '%s - Food POS',
    default: 'Food POS'
  },

  description: 'Simple app for food management'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
