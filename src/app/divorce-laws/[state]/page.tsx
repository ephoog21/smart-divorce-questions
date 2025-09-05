import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import JsonLd from '@/components/JsonLd'
import { createMetadata } from '@/lib/metadata'
import { getStateBySlug, formatStateName, getAllStatesSlugs } from '@/lib/states'

interface StatePageProps {
  params: Promise<{ state: string }>
}

export async function generateStaticParams() {
  // Generate paths for all US states
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

  return usStates.map((state) => ({
    state: state,
  }))
}

export async function generateMetadata({ params }: StatePageProps): Promise<Metadata> {
  const { state } = await params
  const stateName = formatStateName(state)
  
  return createMetadata({
    title: `Divorce Laws in ${stateName} | Smart Divorce Questions`,
    description: `Complete guide to ${stateName} divorce laws including custody arrangements, property division rules, residency requirements, and typical attorney fees.`,
    path: `/divorce-laws/${state}`,
  })
}

export default async function StatePage({ params }: StatePageProps) {
  const { state } = await params
  const stateData = getStateBySlug(state)
  const stateName = formatStateName(state)

  // For states not in our detailed data, show generic info
  const defaultStateInfo = {
    residencyRequirement: 'Varies',
    waitingPeriod: 'Varies',
    propertyDivision: 'Varies by state',
    averageCost: '$15,000-$20,000',
    averageTime: '6-12 months',
    grounds: ['Consult local attorney'],
    specificInfo: {
      courts: 'Check local court system',
      uniqueLaws: 'Consult with a local family law attorney',
      custody: 'Best interests of the child standard (typical)'
    }
  }

  const info = stateData || defaultStateInfo

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `Divorce Laws in ${stateName}`,
    "description": `Complete guide to ${stateName} divorce laws including custody arrangements, property division rules, residency requirements, and typical attorney fees.`,
    "author": {
      "@type": "Organization",
      "name": "Smart Divorce Questions"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Smart Divorce Questions"
    },
    "about": {
      "@type": "Place",
      "name": stateName
    }
  }

  return (
    <>
      <JsonLd data={structuredData} />
      <div className="bg-cream-50 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              Divorce Laws in {stateName}
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-navy-700 mb-12 leading-relaxed">
                Understanding {stateName}'s specific divorce laws, court procedures, and requirements can help you navigate the process more effectively. Here's what you need to know about getting divorced in {stateName}.
              </p>

              <section className="mb-12">
                <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">Key Requirements</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white border border-stone-200 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">Basic Requirements</h3>
                    <div className="space-y-3 text-slate-700">
                      <div>
                        <span className="font-semibold">Residency Requirement:</span>
                        <br />
                        <span>{info.residencyRequirement}</span>
                      </div>
                      <div>
                        <span className="font-semibold">Waiting Period:</span>
                        <br />
                        <span>{info.waitingPeriod}</span>
                      </div>
                      <div>
                        <span className="font-semibold">Property Division:</span>
                        <br />
                        <span>{info.propertyDivision}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-stone-200 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">Cost & Timeline</h3>
                    <div className="space-y-3 text-slate-700">
                      <div>
                        <span className="font-semibold">Average Cost:</span>
                        <br />
                        <span>{info.averageCost}</span>
                      </div>
                      <div>
                        <span className="font-semibold">Average Timeline:</span>
                        <br />
                        <span>{info.averageTime}</span>
                      </div>
                      <div>
                        <span className="font-semibold">Grounds for Divorce:</span>
                        <br />
                        <span>{info.grounds.join(', ')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">Court System</h2>
                
                <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-teal-900 mb-3">Which Courts Handle Divorce</h3>
                  <p className="text-slate-700 mb-4">
                    {info.specificInfo.courts}
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">Property Division</h2>
                
                <div className="bg-white border border-stone-200 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">{info.propertyDivision}</h3>
                  {info.propertyDivision === 'Community Property' ? (
                    <div className="text-slate-700">
                      <p className="mb-3">
                        {stateName} is a community property state, which means:
                      </p>
                      <ul className="space-y-2">
                        <li>• Marital property is typically divided 50/50</li>
                        <li>• Separate property (owned before marriage) remains with original owner</li>
                        <li>• Debts acquired during marriage are shared equally</li>
                        <li>• Property acquired during marriage is presumed community property</li>
                      </ul>
                    </div>
                  ) : info.propertyDivision === 'Equitable Distribution' ? (
                    <div className="text-slate-700">
                      <p className="mb-3">
                        {stateName} follows equitable distribution, which means:
                      </p>
                      <ul className="space-y-2">
                        <li>• Property is divided fairly, but not necessarily equally</li>
                        <li>• Courts consider factors like length of marriage and income</li>
                        <li>• Separate property typically remains with original owner</li>
                        <li>• Marital property includes assets acquired during marriage</li>
                      </ul>
                    </div>
                  ) : (
                    <div className="text-slate-700">
                      <p>
                        Property division laws vary. Consult with a local family law attorney to understand how assets and debts are divided in {stateName}.
                      </p>
                    </div>
                  )}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">Child Custody</h2>
                
                <div className="bg-white border border-stone-200 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">Custody Standards</h3>
                  <p className="text-slate-700 mb-4">
                    {info.specificInfo.custody}
                  </p>
                  <div className="text-slate-600">
                    <p className="mb-2">Common factors courts consider:</p>
                    <ul className="space-y-1">
                      <li>• Child's physical, emotional, and developmental needs</li>
                      <li>• Each parent's ability to provide care</li>
                      <li>• Child's relationship with each parent</li>
                      <li>• Stability of each parent's home environment</li>
                      <li>• Child's preference (if age-appropriate)</li>
                      <li>• Any history of domestic violence or abuse</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">Important {stateName} Information</h2>
                
                <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-teal-900 mb-4">State-Specific Details</h3>
                  <p className="text-slate-700">
                    {info.specificInfo.uniqueLaws}
                  </p>
                </div>
              </section>

              <div className="bg-white border border-stone-200 p-8 rounded-lg shadow-sm mt-12">
                <h3 className="font-serif text-2xl font-semibold text-navy-900 mb-4">Next Steps</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Consult with a family law attorney licensed in {stateName}</li>
                  <li>Gather all necessary financial documents</li>
                  <li>Understand your county's specific court procedures</li>
                  <li>Consider mediation or collaborative divorce options</li>
                  <li>Research local support groups and resources</li>
                  <li>Plan for the emotional and financial aspects of divorce</li>
                </ul>
                
                <div className="mt-6 p-4 bg-teal-50 border border-teal-200 rounded-lg">
                  <p className="text-sm text-teal-800">
                    <strong>Disclaimer:</strong> This information is general in nature and should not be considered legal advice. Divorce laws change frequently, and each situation is unique. Always consult with a qualified attorney licensed in {stateName} for advice specific to your circumstances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}