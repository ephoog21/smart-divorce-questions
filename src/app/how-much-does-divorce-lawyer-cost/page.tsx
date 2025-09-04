import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { createMetadata } from '@/lib/metadata'

export const metadata: Metadata = createMetadata({
  title: 'How Much Is a Divorce Lawyer? | Smart Divorce Questions',
  description: 'Learn the average cost of divorce lawyers, how fees are structured, and what factors affect the final price.',
  path: '/how-much-does-divorce-lawyer-cost',
})

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much is a divorce lawyer per hour?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most divorce lawyers charge hourly rates between $200 and $500 per hour, depending on their experience, location, and the complexity of your case."
      }
    },
    {
      "@type": "Question",
      "name": "Can I negotiate divorce lawyer fees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, many lawyers are open to negotiating payment plans, reduced rates for uncontested cases, or flat fees for specific services. Always ask about options during your consultation."
      }
    },
    {
      "@type": "Question",
      "name": "Do I have to pay my spouse's attorney fees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In some cases, courts may order one spouse to pay the other's attorney fees, especially if there's a significant income disparity or if one spouse acted in bad faith during the proceedings."
      }
    }
  ]
}

export default function HowMuchDoesDivorceLawyerCost() {
  return (
    <>
      <JsonLd data={faqData} />
      <div className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              How Much Does a Divorce Lawyer Cost?
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-12 leading-relaxed">
                The cost of a divorce lawyer varies widely depending on your state, case complexity, and whether your case is contested. Most divorce lawyers charge hourly rates between $200 and $500. Flat-fee uncontested divorces may range from $1,000–$5,000, while contested divorces can exceed $15,000 in legal fees.
              </p>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Fee Structures</h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Hourly Rate</h3>
                    <p className="text-blue-800 text-2xl font-bold mb-2">$200-$500/hr</p>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Pay for time spent</li>
                      <li>• Includes calls, emails, court time</li>
                      <li>• Requires retainer upfront</li>
                      <li>• Best for complex cases</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-900 mb-4">Flat Fee</h3>
                    <p className="text-green-800 text-2xl font-bold mb-2">$1,000-$5,000</p>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Fixed price upfront</li>
                      <li>• Uncontested divorces only</li>
                      <li>• Limited scope of work</li>
                      <li>• Predictable costs</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-purple-900 mb-4">Mediation</h3>
                    <p className="text-purple-800 text-2xl font-bold mb-2">$100-$300/hr</p>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• Split between spouses</li>
                      <li>• Neutral third party</li>
                      <li>• Cooperative approach</li>
                      <li>• Often least expensive</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Questions to Ask About Fees</h2>
                <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-yellow-600 font-semibold mr-2">•</span>
                      <span>"Do you charge hourly or flat fee?"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 font-semibold mr-2">•</span>
                      <span>"What's included in your retainer?"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 font-semibold mr-2">•</span>
                      <span>"Are there extra costs for court filings, experts, or mediation?"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 font-semibold mr-2">•</span>
                      <span>"How often will you bill me, and what detail will I receive?"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 font-semibold mr-2">•</span>
                      <span>"Do you offer payment plans?"</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">What Affects the Cost?</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-red-600 mb-3">Increases Cost</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Contested custody battles</li>
                      <li>• Complex asset division</li>
                      <li>• Business valuations needed</li>
                      <li>• Spouse hiding assets</li>
                      <li>• Multiple court hearings</li>
                      <li>• Expert witnesses required</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-green-600 mb-3">Reduces Cost</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Uncontested divorce</li>
                      <li>• Both spouses cooperate</li>
                      <li>• Simple asset division</li>
                      <li>• No minor children</li>
                      <li>• Mediation successful</li>
                      <li>• Organized financial records</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Additional Costs to Consider</h2>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Typical Cost</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">When Needed</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Court Filing Fees</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">$100-$400</td>
                        <td className="px-6 py-4 text-sm text-gray-600">All divorces</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Business Valuation</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">$5,000-$15,000</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Business owners</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Home Appraisal</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">$300-$600</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Property division</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Forensic Accountant</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">$300-$500/hr</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Hidden assets suspected</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Child Custody Evaluation</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">$2,000-$8,000</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Contested custody</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <div className="bg-gray-100 p-8 rounded-lg mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ways to Control Costs</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Organize all financial documents before meeting with your lawyer</li>
                  <li>Try to reach agreements on simple issues outside of court</li>
                  <li>Consider mediation before filing for divorce</li>
                  <li>Ask for detailed billing statements to track expenses</li>
                  <li>Handle routine tasks yourself when possible</li>
                  <li>Set clear boundaries on what requires lawyer involvement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}