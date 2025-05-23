import React from 'react'

import { Plus_Jakarta_Sans } from 'next/font/google'
import type { Metadata } from 'next'

import { Provider } from '@/presentation/providers'
import { SonnerAdapter } from '@/infra/toast'

import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--plus-jakarta-sans',
})

export const metadata: Metadata = {
  title: {
    template: '%s | F3 Finance',
    default: 'F3 Finance',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { toaster } = new SonnerAdapter()

  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} ${plusJakartaSans.variable} antialiased`}
      >
        <Provider>{children}</Provider>

        {toaster()}
      </body>
    </html>
  )
}
