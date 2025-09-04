export const states = [
  {
    slug: 'alabama',
    name: 'Alabama',
    residencyRequirement: '6 months',
    waitingPeriod: '30 days',
    propertyDivision: 'Equitable Distribution',
    averageCost: '$15,000',
    averageTime: '6-12 months',
    grounds: ['No-fault', 'Fault-based available'],
    specificInfo: {
      courts: 'Circuit Courts handle divorce cases',
      uniqueLaws: 'Alabama allows both no-fault and fault-based divorce',
      custody: 'Best interests of the child standard'
    }
  },
  {
    slug: 'alaska',
    name: 'Alaska',
    residencyRequirement: 'No requirement if married in Alaska',
    waitingPeriod: '30 days',
    propertyDivision: 'Equitable Distribution',
    averageCost: '$18,000',
    averageTime: '6-12 months',
    grounds: ['No-fault', 'Fault-based available'],
    specificInfo: {
      courts: 'Superior Court handles divorce cases',
      uniqueLaws: 'No residency requirement if married in Alaska',
      custody: 'Best interests of the child standard'
    }
  },
  {
    slug: 'arizona',
    name: 'Arizona',
    residencyRequirement: '90 days',
    waitingPeriod: '60 days',
    propertyDivision: 'Community Property',
    averageCost: '$14,500',
    averageTime: '4-8 months',
    grounds: ['No-fault only'],
    specificInfo: {
      courts: 'Superior Court handles divorce cases',
      uniqueLaws: 'Community property state - 50/50 division of marital assets',
      custody: 'Best interests of the child standard with equal parenting time preference'
    }
  },
  {
    slug: 'california',
    name: 'California',
    residencyRequirement: '6 months',
    waitingPeriod: '6 months',
    propertyDivision: 'Community Property',
    averageCost: '$20,000',
    averageTime: '6-12 months',
    grounds: ['No-fault only'],
    specificInfo: {
      courts: 'Superior Court handles divorce cases',
      uniqueLaws: 'Community property state with mandatory 6-month waiting period',
      custody: 'Best interests of the child with preference for shared custody'
    }
  },
  {
    slug: 'colorado',
    name: 'Colorado',
    residencyRequirement: '91 days',
    waitingPeriod: '91 days',
    propertyDivision: 'Equitable Distribution',
    averageCost: '$16,500',
    averageTime: '6-12 months',
    grounds: ['No-fault only'],
    specificInfo: {
      courts: 'District Court handles divorce cases',
      uniqueLaws: 'No-fault only state with 91-day residency and waiting period',
      custody: 'Best interests of the child standard'
    }
  },
  {
    slug: 'florida',
    name: 'Florida',
    residencyRequirement: '6 months',
    waitingPeriod: '20 days',
    propertyDivision: 'Equitable Distribution',
    averageCost: '$17,000',
    averageTime: '4-8 months',
    grounds: ['No-fault only'],
    specificInfo: {
      courts: 'Circuit Court handles divorce cases',
      uniqueLaws: 'Simplified dissolution available for uncontested cases',
      custody: 'Best interests of the child with shared parental responsibility preference'
    }
  },
  {
    slug: 'new-york',
    name: 'New York',
    residencyRequirement: '2 years (varies by circumstances)',
    waitingPeriod: 'None',
    propertyDivision: 'Equitable Distribution',
    averageCost: '$25,000',
    averageTime: '8-18 months',
    grounds: ['No-fault', 'Fault-based available'],
    specificInfo: {
      courts: 'Supreme Court handles divorce cases',
      uniqueLaws: 'Complex residency requirements with multiple options',
      custody: 'Best interests of the child standard'
    }
  },
  {
    slug: 'texas',
    name: 'Texas',
    residencyRequirement: '6 months',
    waitingPeriod: '60 days',
    propertyDivision: 'Community Property',
    averageCost: '$16,000',
    averageTime: '6-12 months',
    grounds: ['No-fault', 'Fault-based available'],
    specificInfo: {
      courts: 'District Court handles divorce cases',
      uniqueLaws: 'Community property state with fault-based options affecting division',
      custody: 'Best interests of the child standard'
    }
  }
]

export function getStateBySlug(slug: string) {
  return states.find(state => state.slug === slug)
}

export function getAllStatesSlugs() {
  return states.map(state => ({ params: { state: state.slug } }))
}

// Helper function to format state name for display
export function formatStateName(slug: string): string {
  const state = getStateBySlug(slug)
  return state ? state.name : slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
}