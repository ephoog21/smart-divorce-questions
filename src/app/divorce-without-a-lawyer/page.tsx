import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { createMetadata } from '@/lib/metadata'

export const metadata: Metadata = createMetadata({
  title: 'Divorce Without a Lawyer | Smart Divorce Questions',
  description: 'Explore when you can represent yourself in divorce, pros and cons, and resources for self-help divorce forms.',
  path: '/divorce-without-a-lawyer',
})

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Divorce Without a Lawyer",
  "description": "Explore when you can represent yourself in divorce, pros and cons, and resources for self-help divorce forms.",
  "author": {
    "@type": "Organization",
    "name": "Smart Divorce Questions"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Smart Divorce Questions"
  }
}

export default function DivorceWithoutALawyer() {
  return (
    <>
      <JsonLd data={structuredData} />
      <div className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Divorce Without a Lawyer
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-12 leading-relaxed">
                Some couples can complete divorce without hiring a lawyer, especially in uncontested cases with no children or major assets. This is often called "pro se divorce." While cheaper, risks include mistakes in filing, missed deadlines, or agreements that harm your rights. Many states provide self-help forms and online filing systems.
              </p>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">When Pro Se Divorce Makes Sense</h2>
                
                <div className="bg-green-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-green-900 mb-4">Ideal Scenarios for Self-Representation</h3>
                  <ul className="space-y-3 text-green-800">
                    <li className="flex items-start">
                      <span className="text-green-600 font-semibold mr-2">✓</span>
                      <span><strong>Uncontested divorce:</strong> Both spouses agree on all major issues</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-semibold mr-2">✓</span>
                      <span><strong>No minor children:</strong> No custody or child support issues</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-semibold mr-2">✓</span>
                      <span><strong>Few assets:</strong> Limited property, savings, or retirement accounts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-semibold mr-2">✓</span>
                      <span><strong>Short marriage:</strong> Married less than 5 years with minimal shared finances</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-semibold mr-2">✓</span>
                      <span><strong>No spousal support:</strong> Neither party seeking alimony</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-semibold mr-2">✓</span>
                      <span><strong>Minimal debt:</strong> Few shared credit cards or loans</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibent text-gray-900 mb-6">Pros and Cons</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-green-600 mb-4">Advantages</h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <div>
                          <strong>Cost Savings:</strong> Save thousands in attorney fees
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <div>
                          <strong>Control:</strong> You make all decisions about your case
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <div>
                          <strong>Privacy:</strong> Handle personal matters privately
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <div>
                          <strong>Faster Process:</strong> No waiting for attorney schedules
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <div>
                          <strong>Flexibility:</strong> Work at your own pace
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border border-red-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-red-600 mb-4">Risks</h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <div>
                          <strong>Filing Mistakes:</strong> Errors can delay or derail your case
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <div>
                          <strong>Missed Deadlines:</strong> Court deadlines are strictly enforced
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <div>
                          <strong>Unfair Agreements:</strong> May unknowingly agree to harmful terms
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <div>
                          <strong>Hidden Assets:</strong> May miss important financial information
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <div>
                          <strong>Complex Laws:</strong> Difficulty understanding legal requirements
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Step-by-Step Process</h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Step 1: Research Your State's Requirements</h3>
                    <ul className="text-blue-800 space-y-1 text-sm">
                      <li>• Check residency requirements (usually 6 months to 1 year)</li>
                      <li>• Learn about mandatory waiting periods</li>
                      <li>• Understand your state's property division laws</li>
                      <li>• Review required forms and documents</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">Step 2: Gather Required Documents</h3>
                    <ul className="text-purple-800 space-y-1 text-sm">
                      <li>• Marriage certificate</li>
                      <li>• Birth certificates for children</li>
                      <li>• Financial records (bank statements, tax returns)</li>
                      <li>• Property deeds and titles</li>
                      <li>• Debt statements and credit reports</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-orange-900 mb-3">Step 3: Complete and File Forms</h3>
                    <ul className="text-orange-800 space-y-1 text-sm">
                      <li>• Petition for dissolution of marriage</li>
                      <li>• Financial affidavit or disclosure</li>
                      <li>• Settlement agreement (if uncontested)</li>
                      <li>• Pay filing fees (usually $200-$400)</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">Step 4: Serve Your Spouse</h3>
                    <ul className="text-green-800 space-y-1 text-sm">
                      <li>• Have spouse sign acknowledgment of service, or</li>
                      <li>• Hire a process server or sheriff</li>
                      <li>• File proof of service with the court</li>
                      <li>• Wait for response period to expire</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 5: Finalize the Divorce</h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Attend court hearing if required</li>
                      <li>• Present final paperwork to judge</li>
                      <li>• Receive signed divorce decree</li>
                      <li>• Update records and accounts</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Resources and Tools</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">State Court Websites</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 text-sm mb-3">
                        Most state court systems provide:
                      </p>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Self-help divorce forms</li>
                        <li>• Step-by-step instructions</li>
                        <li>• Filing fee information</li>
                        <li>• Local court rules</li>
                        <li>• Online filing portals</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Online Services</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 text-sm mb-3">
                        Document preparation services offer:
                      </p>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Form completion assistance</li>
                        <li>• Document review services</li>
                        <li>• Filing instructions</li>
                        <li>• Customer support</li>
                        <li>• Money-back guarantees</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">When to Consult a Lawyer</h2>
                
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <p className="text-yellow-800 mb-4">
                    Even in simple cases, consider getting legal advice if:
                  </p>
                  <ul className="space-y-2 text-yellow-700">
                    <li>• You're unsure about your rights</li>
                    <li>• Your spouse has hired an attorney</li>
                    <li>• You discover hidden assets or income</li>
                    <li>• Your spouse becomes uncooperative</li>
                    <li>• You have concerns about child custody</li>
                    <li>• The paperwork becomes overwhelming</li>
                    <li>• You're offered an agreement that seems unfair</li>
                  </ul>
                </div>
              </section>

              <div className="bg-gray-100 p-8 rounded-lg mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tips for Success</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Take your time to understand all forms and requirements</li>
                  <li>Make copies of everything you file</li>
                  <li>Keep detailed records of all court communications</li>
                  <li>Attend all court hearings and be punctual</li>
                  <li>Dress professionally for court appearances</li>
                  <li>Consider consulting an attorney for a one-time review</li>
                  <li>Use court self-help resources and workshops</li>
                  <li>Stay organized with a filing system</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}