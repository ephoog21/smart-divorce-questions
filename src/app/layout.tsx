import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'], 
  display: 'swap',
  preload: true,
  variable: '--font-inter'
})

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
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}