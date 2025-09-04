import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { createMetadata } from '@/lib/metadata'

export const metadata: Metadata = createMetadata({
  title: 'Dividing Assets in Divorce | Smart Divorce Questions',
  description: 'Understand how property, debts, retirement accounts, and businesses are divided in divorce.',
  path: '/dividing-assets-in-divorce',
})

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How are retirement accounts divided in divorce?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Retirement accounts accumulated during marriage are typically divided through a Qualified Domestic Relations Order (QDRO), which allows penalty-free transfer of funds between spouses."
      }
    },
    {
      "@type": "Question",
      "name": "Do I lose my house in divorce?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily. Options include one spouse buying out the other, selling and splitting proceeds, or continuing to co-own the property. The decision depends on finances and state laws."
      }
    },
    {
      "@type": "Question",
      "name": "What happens to joint debt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Joint debt is typically divided between spouses, but creditors can still hold both parties responsible. It's important to close joint accounts and refinance loans when possible."
      }
    }
  ]
}

export default function DividingAssetsInDivorce() {
  return (
    <>
      <JsonLd data={faqData} />
      <div className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Dividing Assets in Divorce
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-12 leading-relaxed">
                In divorce, dividing assets depends on state law. Community property states split marital property equally, while equitable distribution states divide property fairly, though not always equally. Assets to consider:
              </p>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Community Property vs. Equitable Distribution</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Community Property States</h3>
                    <p className="text-blue-800 mb-4">50/50 split of marital property</p>
                    <div className="text-sm text-blue-700">
                      <p className="font-semibold mb-2">States:</p>
                      <ul className="space-y-1">
                        <li>• Arizona</li>
                        <li>• California</li>
                        <li>• Idaho</li>
                        <li>• Louisiana</li>
                        <li>• Nevada</li>
                        <li>• New Mexico</li>
                        <li>• Texas</li>
                        <li>• Washington</li>
                        <li>• Wisconsin</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-900 mb-4">Equitable Distribution</h3>
                    <p className="text-green-800 mb-4">Fair, but not necessarily equal split</p>
                    <div className="text-sm text-green-700">
                      <p className="font-semibold mb-2">Factors considered:</p>
                      <ul className="space-y-1">
                        <li>• Length of marriage</li>
                        <li>• Income and earning capacity</li>
                        <li>• Age and health</li>
                        <li>• Child custody</li>
                        <li>• Contributions to marriage</li>
                        <li>• Future financial needs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Major Assets to Divide</h2>
                
                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-red-600 mb-4">Family Home</h3>
                    <p className="text-gray-700 mb-4">Often the largest marital asset</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-red-50 p-4 rounded">
                        <h4 className="font-semibold mb-2">Sell and Split</h4>
                        <p className="text-sm text-gray-700">Clean break, split proceeds</p>
                      </div>
                      <div className="bg-red-50 p-4 rounded">
                        <h4 className="font-semibold mb-2">Buyout</h4>
                        <p className="text-sm text-gray-700">One spouse keeps, pays other half of equity</p>
                      </div>
                      <div className="bg-red-50 p-4 rounded">
                        <h4 className="font-semibold mb-2">Co-ownership</h4>
                        <p className="text-sm text-gray-700">Continue owning together (rare)</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-blue-600 mb-4">Retirement Accounts</h3>
                    <p className="text-gray-700 mb-4">401(k)s, IRAs, pensions accumulated during marriage</p>
                    <div className="bg-blue-50 p-4 rounded">
                      <h4 className="font-semibold mb-2">QDRO Required</h4>
                      <p className="text-sm text-gray-700">Qualified Domestic Relations Order allows penalty-free transfer between spouses</p>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-green-600 mb-4">Business Assets</h3>
                    <p className="text-gray-700 mb-4">Businesses started or grown during marriage</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded">
                        <h4 className="font-semibold mb-2">Valuation Required</h4>
                        <p className="text-sm text-gray-700">Professional appraisal needed</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded">
                        <h4 className="font-semibold mb-2">Options</h4>
                        <p className="text-sm text-gray-700">Sell, buyout, or co-own</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-purple-600 mb-4">Debt Division</h3>
                    <p className="text-gray-700 mb-4">Joint debts and credit cards</p>
                    <div className="bg-purple-50 p-4 rounded">
                      <h4 className="font-semibold mb-2 text-red-600">Important:</h4>
                      <p className="text-sm text-gray-700">Creditors can still hold both spouses responsible regardless of divorce agreement</p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="bg-gray-100 p-8 rounded-lg mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tips for Asset Division</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Create complete inventory of all assets and debts</li>
                  <li>Get professional appraisals for valuable items</li>
                  <li>Consider tax implications of asset transfers</li>
                  <li>Close joint accounts as soon as possible</li>
                  <li>Update beneficiaries on all accounts</li>
                  <li>Keep detailed records of all transactions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}