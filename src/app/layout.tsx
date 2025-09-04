import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Smart Divorce Questions | Your Guide to Navigating Divorce',
  description: 'Get clear answers to common divorce questions — from custody schedules and finances to dividing property and hiring a lawyer.',
  metadataBase: new URL('https://smartdivorcequestions.com'),
  openGraph: {
    title: 'Smart Divorce Questions | Your Guide to Navigating Divorce',
    description: 'Get clear answers to common divorce questions — from custody schedules and finances to dividing property and hiring a lawyer.',
    url: 'https://smartdivorcequestions.com',
    siteName: 'Smart Divorce Questions',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://smartdivorcequestions.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}