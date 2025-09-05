import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.smartdivorcequestions.com'
  
  const staticPages = [
    '',
    '/what-to-ask-your-divorce-lawyer',
    '/how-much-does-divorce-lawyer-cost',
    '/child-custody-schedules',
    '/dividing-assets-in-divorce',
    '/no-fault-divorce-explained',
    '/divorce-without-a-lawyer',
    '/divorce-laws',
    '/faq',
    '/privacy',
    '/terms',
    '/legal-disclaimer',
    '/advice-disclaimer',
    '/find-lawyer',
    '/lawyers/join',
  ]

  const usStates = [
    'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 
    'connecticut', 'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 
    'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 
    'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota', 
    'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 
    'new-hampshire', 'new-jersey', 'new-mexico', 'new-york', 
    'north-carolina', 'north-dakota', 'ohio', 'oklahoma', 'oregon', 
    'pennsylvania', 'rhode-island', 'south-carolina', 'south-dakota', 
    'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 
    'west-virginia', 'wisconsin', 'wyoming'
  ]

  const staticSitemapEntries = staticPages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : 0.8,
  }))

  const stateSitemapEntries = usStates.map(state => ({
    url: `${baseUrl}/divorce-laws/${state}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticSitemapEntries, ...stateSitemapEntries]
}