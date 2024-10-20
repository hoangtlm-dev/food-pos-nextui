// Libs
import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'

// Styles
import './globals.css'

// Providers
import Providers from './providers'

// Components
import { SideNav } from '@/components'

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
        <Providers>
          <div className="flex h-screen flex-col lg:flex-row">
            <SideNav />
            <main className="flex-grow lg:ml-24">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
