// Libs
import type { Metadata } from 'next'

// Styles
import './globals.css'

// Providers
import Providers from './providers'

export const metadata: Metadata = {
  title: '%s | Food POS',
  description: 'Simple app for food management'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
