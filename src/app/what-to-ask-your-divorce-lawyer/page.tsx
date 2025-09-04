import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { createMetadata } from '@/lib/metadata'

export const metadata: Metadata = createMetadata({
  title: 'What to Ask Your Divorce Lawyer | Smart Divorce Questions',
  description: 'Prepare for your first divorce lawyer consultation with key questions on custody, finances, property division, and timelines.',
  path: '/what-to-ask-your-divorce-lawyer',
})

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What custody schedules are realistic in my state?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Custody schedules vary by state and depend on factors like children's ages, parents' work schedules, and proximity. Common arrangements include 2-2-3, week-on/week-off, and alternating weekends."
      }
    },
    {
      "@type": "Question", 
      "name": "How does joint custody usually work for children under 5?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For young children, courts often prefer more frequent exchanges with shorter periods away from each parent, such as 2-2-3 schedules or alternating every few days."
      }
    },
    {
      "@type": "Question",
      "name": "How is spousal support calculated in my state?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "Spousal support calculations vary by state. Some use formulas based on income differences and marriage length, while others give judges discretion based on factors like earning capacity and standard of living."
      }
    },
    {
      "@type": "Question",
      "name": "How long will my divorce likely take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uncontested divorces can take 2-6 months, while contested cases may take 1-2 years or longer depending on complexity and court schedules."
      }
    }
  ]
}

export default function WhatToAskYourDivorceLawyer() {
  return (
    <>
      <JsonLd data={faqData} />
      <div className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              What to Ask Your Divorce Lawyer
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-12 leading-relaxed">
                Meeting with a divorce lawyer can be overwhelming. Asking the right questions helps you understand your options and plan for the future. Here are essential topics to cover in your first consultation.
              </p>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Custody and Parenting Time</h2>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-blue-600 font-semibold mr-2">Q:</span>
                      <span>"What custody schedules are realistic in my state?"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-semibold mr-2">Q:</span>
                      <span>"How does joint custody usually work for children under 5? For teenagers?"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-semibold mr-2">Q:</span>
                      <span>"How are holidays typically divided?"</span>
                    </li>
                  </ul>
                </div>
                <p className="text-gray-700">
                  Understanding custody arrangements early helps you prepare for negotiations and set realistic expectations for your parenting schedule.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Finances</h2>
                <div className="bg-green-50 p-6 rounded-lg mb-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-green-600 font-semibold mr-2">Q:</span>
                      <span>"How is spousal support calculated here?"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-semibold mr-2">Q:</span>
                      <span>"What happens with joint debt and credit cards?"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-semibold mr-2">Q:</span>
                      <span>"How will retirement accounts be handled?"</span>
                    </li>
                  </ul>
                </div>
                <p className="text-gray-700">
                  Financial questions are crucial because they affect your long-term security and ability to support yourself and your children.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Property Division</h2>
                <div className="bg-purple-50 p-6 rounded-lg mb-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-purple-600 font-semibold mr-2">Q:</span>
                      <span>"Is my state a community property or equitable distribution state?"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 font-semibold mr-2">Q:</span>
                      <span>"How will the house and mortgage be divided?"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 font-semibold mr-2">Q:</span>
                      <span>"What happens to business assets?"</span>
                    </li>
                  </ul>
                </div>
                <p className="text-gray-700">
                  Property division rules vary significantly by state, so understanding your state's approach is essential for planning.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Process and Timeline</h2>
                <div className="bg-orange-50 p-6 rounded-lg mb-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-orange-600 font-semibold mr-2">Q:</span>
                      <span>"How long will my divorce likely take?"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 font-semibold mr-2">Q:</span>
                      <span>"What documents should I bring to the first hearing?"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 font-semibold mr-2">Q:</span>
                      <span>"What happens if my spouse and I can't agree?"</span>
                    </li>
                  </ul>
                </div>
                <p className="text-gray-700">
                  Understanding the timeline and process helps you prepare mentally and financially for what lies ahead.
                </p>
              </section>

              <div className="bg-gray-100 p-8 rounded-lg mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Before Your Consultation</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Gather financial documents (tax returns, bank statements, pay stubs)</li>
                  <li>Make a list of all assets and debts</li>
                  <li>Write down your main concerns and priorities</li>
                  <li>Prepare questions about the lawyer's experience and fees</li>
                  <li>Bring a notebook to take notes during the meeting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}