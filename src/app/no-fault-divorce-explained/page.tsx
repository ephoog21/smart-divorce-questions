import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { createMetadata } from '@/lib/metadata'

export const metadata: Metadata = createMetadata({
  title: 'No-Fault Divorce Explained | Smart Divorce Questions',
  description: 'Learn how no-fault divorce works, what states allow it, and how it affects custody and property division.',
  path: '/no-fault-divorce-explained',
})

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "No-Fault Divorce Explained",
  "description": "Learn how no-fault divorce works, what states allow it, and how it affects custody and property division.",
  "author": {
    "@type": "Organization",
    "name": "Smart Divorce Questions"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Smart Divorce Questions"
  }
}

export default function NoFaultDivorceExplained() {
  return (
    <>
      <JsonLd data={structuredData} />
      <div className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              No-Fault Divorce Explained
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-12 leading-relaxed">
                No-fault divorce means you don't have to prove wrongdoing. Instead, couples cite 'irreconcilable differences' or 'irretrievable breakdown.' Every state allows no-fault divorce, though procedures differ. Some states also allow fault-based divorce, which may impact property division or spousal support.
              </p>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">What Is No-Fault Divorce?</h2>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Key Principles</h3>
                  <ul className="space-y-3 text-blue-800">
                    <li className="flex items-start">
                      <span className="text-blue-600 font-semibold mr-2">•</span>
                      <span>No need to prove spouse did something wrong</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-semibold mr-2">•</span>
                      <span>Marriage is "irretrievably broken" or has "irreconcilable differences"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-semibold mr-2">•</span>
                      <span>Focus on ending marriage, not assigning blame</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-semibold mr-2">•</span>
                      <span>Often faster and less expensive than fault-based divorce</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">No-Fault vs. Fault-Based Divorce</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-green-600 mb-4">No-Fault Divorce</h3>
                    <div className="space-y-3 text-sm text-gray-700">
                      <div>
                        <h4 className="font-semibold text-green-600">Common Grounds:</h4>
                        <ul className="mt-1 space-y-1">
                          <li>• Irreconcilable differences</li>
                          <li>• Irretrievable breakdown</li>
                          <li>• Incompatibility</li>
                          <li>• Living separate and apart</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-600">Benefits:</h4>
                        <ul className="mt-1 space-y-1">
                          <li>• Faster process</li>
                          <li>• Less expensive</li>
                          <li>• More private</li>
                          <li>• Less emotional trauma</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-red-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-red-600 mb-4">Fault-Based Divorce</h3>
                    <div className="space-y-3 text-sm text-gray-700">
                      <div>
                        <h4 className="font-semibold text-red-600">Common Grounds:</h4>
                        <ul className="mt-1 space-y-1">
                          <li>• Adultery</li>
                          <li>• Cruelty/abuse</li>
                          <li>• Abandonment</li>
                          <li>• Imprisonment</li>
                          <li>• Substance abuse</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-600">Drawbacks:</h4>
                        <ul className="mt-1 space-y-1">
                          <li>• Must prove allegations</li>
                          <li>• Longer court process</li>
                          <li>• Higher legal fees</li>
                          <li>• More contentious</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">State Variations</h2>
                
                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">No-Fault Only States</h3>
                    <p className="text-green-700 mb-3">These states only allow no-fault divorce:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-green-700">
                      <div>California</div>
                      <div>Colorado</div>
                      <div>Florida</div>
                      <div>Hawaii</div>
                      <div>Indiana</div>
                      <div>Iowa</div>
                      <div>Kansas</div>
                      <div>Kentucky</div>
                      <div>Michigan</div>
                      <div>Minnesota</div>
                      <div>Missouri</div>
                      <div>Montana</div>
                      <div>Nebraska</div>
                      <div>Nevada</div>
                      <div>Oregon</div>
                      <div>Washington</div>
                      <div>Wisconsin</div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-yellow-800 mb-4">Both Options Available</h3>
                    <p className="text-yellow-700 mb-3">These states allow both no-fault and fault-based divorce:</p>
                    <p className="text-sm text-yellow-700">
                      All other states allow couples to choose between no-fault and fault-based grounds, though no-fault is more commonly used.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Impact on Divorce Outcomes</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Property Division</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 text-sm">
                        In most no-fault divorces, marital misconduct doesn't affect property division. However, some states may consider fault when dividing assets, especially if misconduct involved wasting marital assets.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Spousal Support</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 text-sm">
                        While no-fault grounds don't typically affect alimony, some states may consider marital misconduct when determining spousal support amounts and duration.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Child Custody</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 text-sm">
                        Child custody decisions focus on the best interests of the child, regardless of whether the divorce is fault-based or no-fault. However, fault involving children (like abuse) will impact custody.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Timeline</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 text-sm">
                        No-fault divorces generally proceed faster because there's no need to prove wrongdoing in court, reducing both time and legal expenses.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="bg-gray-100 p-8 rounded-lg mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Choosing No-Fault Divorce</h3>
                <p className="text-gray-700 mb-4">
                  For most couples, no-fault divorce is the better choice because it:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Reduces conflict and emotional stress</li>
                  <li>Protects children from hearing details about marital problems</li>
                  <li>Saves time and money on legal proceedings</li>
                  <li>Allows couples to focus on practical matters like custody and finances</li>
                  <li>Provides more privacy than fault-based proceedings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}