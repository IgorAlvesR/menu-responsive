import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Menu responsive',
  description: 'Creating a menu responsive',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900">
        <div className="fixed mx-auto w-full">
          <Header />
        </div>
        <div className="py-24 text-white">{children}</div>
      </body>
    </html>
  )
}
