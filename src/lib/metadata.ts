import { Metadata } from 'next'

export function createMetadata({
  title,
  description,
  path = '',
  images = [],
}: {
  title: string
  description: string
  path?: string
  images?: string[]
}): Metadata {
  const url = `https://www.smartdivorcequestions.com${path}`
  
  return {
    title,
    description,
    metadataBase: new URL('https://www.smartdivorcequestions.com'),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Smart Divorce Questions',
      locale: 'en_US',
      type: 'website',
      images: images.length > 0 ? images : [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: images.length > 0 ? images : ['/og-image.jpg'],
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
  }
}

export function createJsonLd(data: any) {
  return {
    __html: JSON.stringify(data),
  }
}