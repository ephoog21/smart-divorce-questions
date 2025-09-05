import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'], 
  display: 'swap',
  preload: true,
  variable: '--font-inter'
})

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-lora'
})

export const metadata: Metadata = {
  title: 'Essential Divorce Questions to Ask Your Lawyer | Smart Divorce Guide 2025',
  description: 'Get expert answers to 50+ divorce questions about custody, finances, property division, and lawyer costs. Free divorce consultation guide with essential questions to ask your attorney.',
  keywords: ['divorce questions', 'what to ask divorce lawyer', 'divorce consultation questions', 'child custody questions', 'divorce lawyer questions', 'divorce process questions', 'divorce guide 2025'],
  authors: [{ name: 'Smart Divorce Questions' }],
  metadataBase: new URL('https://smartdivorcequestions.com'),
  openGraph: {
    title: 'Essential Divorce Questions to Ask Your Lawyer | Smart Divorce Guide 2025',
    description: 'Get expert answers to 50+ divorce questions about custody, finances, property division, and lawyer costs. Free divorce consultation guide with essential questions to ask your attorney.',
    url: 'https://smartdivorcequestions.com',
    siteName: 'Smart Divorce Questions',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo.svg',
        width: 240,
        height: 60,
        alt: 'Smart Divorce Questions - Essential Divorce Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Essential Divorce Questions to Ask Your Lawyer | Smart Divorce Guide 2025',
    description: 'Get expert answers to 50+ divorce questions about custody, finances, property division, and lawyer costs.',
    images: ['/logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://smartdivorcequestions.com',
  },
  verification: {
    google: 'your-google-verification-code',
    other: {
      'google-site-verification': ['your-google-verification-code'],
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <head>
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Google AdSense */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2921065021940727"
          crossOrigin="anonymous"
        />
        
        {/* Ahrefs Analytics */}
        <script 
          src="https://analytics.ahrefs.com/analytics.js" 
          data-key="hTtahZz2HaC7uzJwI1aayA" 
          async
        />
      </head>
      <body className={`${inter.className} bg-stone-50 text-slate-900 antialiased`}>
        {/* Google Analytics - Optimized with Next.js Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M31NMPRCNP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M31NMPRCNP');
          `}
        </Script>
        
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}