import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { createMetadata } from '@/lib/metadata'

export const metadata: Metadata = createMetadata({
  title: 'Child Custody Schedules Explained | Smart Divorce Questions',
  description: 'Learn how custody schedules like 2-2-3, 2-2-5-5, and week-on/week-off work, with examples for toddlers, school-age kids, and teens.',
  path: '/child-custody-schedules',
})

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best custody schedule for toddlers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For toddlers, shorter separations work best. The 2-2-3 schedule or alternating every 2-3 days helps maintain strong bonds with both parents while accounting for young children's need for routine."
      }
    },
    {
      "@type": "Question",
      "name": "What is the 2-2-3 schedule?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 2-2-3 schedule alternates every 2 days, then 3 days with the other parent. For example: Parent A gets Monday-Tuesday, Parent B gets Wednesday-Thursday, Parent A gets Friday-Sunday, then it flips the next week."
      }
    },
    {
      "@type": "Question",
      "name": "What custody schedules work for teenagers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Teenagers often adapt well to week-on/week-off schedules or longer blocks like 2-2-5-5, as they can better handle longer separations and maintain friendships and activities."
      }
    }
  ]
}

export default function ChildCustodySchedules() {
  return (
    <>
      <JsonLd data={faqData} />
      <div className="bg-cream-50 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              Child Custody Schedules Explained
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-navy-700 mb-12 leading-relaxed">
                One of the hardest parts of divorce is creating a custody schedule that works for parents and children. These are the most common custody arrangements:
              </p>

              <section className="mb-12">
                <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">Popular Custody Schedules</h2>
                
                <div className="space-y-8">
                  <div className="bg-white border border-stone-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-2xl font-semibold text-blue-600 mb-4">2-2-3 Schedule</h3>
                    <p className="text-slate-700 mb-4">
                      <strong>How it works:</strong> Alternating every 2 days, then 3 days with the other parent.
                    </p>
                    
                    <div className="bg-teal-50 border border-teal-200 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold mb-2">Example Week:</h4>
                      <div className="grid grid-cols-7 gap-1 text-sm">
                        <div className="text-center font-semibold">Mon</div>
                        <div className="text-center font-semibold">Tue</div>
                        <div className="text-center font-semibold">Wed</div>
                        <div className="text-center font-semibold">Thu</div>
                        <div className="text-center font-semibold">Fri</div>
                        <div className="text-center font-semibold">Sat</div>
                        <div className="text-center font-semibold">Sun</div>
                        <div className="text-center bg-teal-200 p-2 rounded">Parent A</div>
                        <div className="text-center bg-teal-200 p-2 rounded">Parent A</div>
                        <div className="text-center bg-navy-200 p-2 rounded">Parent B</div>
                        <div className="text-center bg-navy-200 p-2 rounded">Parent B</div>
                        <div className="text-center bg-teal-200 p-2 rounded">Parent A</div>
                        <div className="text-center bg-teal-200 p-2 rounded">Parent A</div>
                        <div className="text-center bg-teal-200 p-2 rounded">Parent A</div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-green-600 font-semibold mb-2">Best For:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Toddlers and young children</li>
                          <li>• Parents living close together</li>
                          <li>• Flexible work schedules</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-red-600 font-semibold mb-2">Challenges:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Frequent transitions</li>
                          <li>• Complex scheduling</li>
                          <li>• School logistics</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-stone-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-2xl font-semibold text-green-600 mb-4">2-2-5-5 Schedule</h3>
                    <p className="text-gray-700 mb-4">
                      <strong>How it works:</strong> Consistent weekday blocks with alternating weekends.
                    </p>
                    
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold mb-2">Week 1 & 2 Pattern:</h4>
                      <div className="space-y-2">
                        <div className="text-sm">
                          <span className="font-semibold">Week 1:</span> Parent A (Mon-Tue), Parent B (Wed-Thu), Parent A (Fri-Tue)
                        </div>
                        <div className="text-sm">
                          <span className="font-semibold">Week 2:</span> Parent B (Wed-Thu), Parent A (Fri-Sun), Parent B (Mon-Fri)
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-green-600 font-semibold mb-2">Best For:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• School-age children</li>
                          <li>• Consistent school pickup</li>
                          <li>• Longer weekend time</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-red-600 font-semibold mb-2">Challenges:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Unequal weekend time</li>
                          <li>• Complex pattern to remember</li>
                          <li>• Requires coordination</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-stone-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-2xl font-semibold text-purple-600 mb-4">Week-On / Week-Off</h3>
                    <p className="text-gray-700 mb-4">
                      <strong>How it works:</strong> Children alternate full weeks with each parent.
                    </p>
                    
                    <div className="bg-purple-50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold mb-2">Simple Pattern:</h4>
                      <div className="text-sm">
                        One full week with Parent A, then one full week with Parent B, repeating throughout the year.
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-green-600 font-semibold mb-2">Best For:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Teenagers</li>
                          <li>• Parents living far apart</li>
                          <li>• Busy family schedules</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-red-600 font-semibold mb-2">Challenges:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Long separation periods</li>
                          <li>• Missed activities/events</li>
                          <li>• Younger kids may struggle</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-stone-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-2xl font-semibold text-orange-600 mb-4">3-4-4-3 Schedule</h3>
                    <p className="text-gray-700 mb-4">
                      <strong>How it works:</strong> Predictable weekly rhythm with longer blocks of time.
                    </p>
                    
                    <div className="bg-orange-50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold mb-2">Pattern:</h4>
                      <div className="text-sm">
                        Parent A: 3 days, then 4 days off / Parent B: 4 days, then 3 days off (alternates each week)
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-green-600 font-semibold mb-2">Best For:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Elementary school kids</li>
                          <li>• Predictable routine</li>
                          <li>• Less frequent exchanges</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-red-600 font-semibold mb-2">Challenges:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Unequal time periods</li>
                          <li>• Weekend distribution</li>
                          <li>• School week splits</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Age-Based Considerations</h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-yellow-800 mb-4">Toddlers (0-3)</h3>
                    <ul className="text-sm text-yellow-700 space-y-2">
                      <li>• Shorter separations (2-3 days max)</li>
                      <li>• More frequent exchanges</li>
                      <li>• Consistent routines important</li>
                      <li>• Consider nap schedules</li>
                      <li>• Gradual overnights</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">School Age (4-12)</h3>
                    <ul className="text-sm text-blue-700 space-y-2">
                      <li>• Longer blocks work better</li>
                      <li>• Consider school schedules</li>
                      <li>• Account for activities</li>
                      <li>• Homework consistency</li>
                      <li>• Friend time important</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">Teens (13+)</h3>
                    <ul className="text-sm text-green-700 space-y-2">
                      <li>• Longer blocks preferred</li>
                      <li>• Consider their input</li>
                      <li>• Work/activity schedules</li>
                      <li>• Driving logistics</li>
                      <li>• Peer relationships</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Holiday Schedules</h2>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    Most custody agreements include special provisions for holidays and school breaks:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Common Holiday Splits:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Thanksgiving with one parent, Christmas with other</li>
                        <li>• Split Christmas Eve/Christmas Day</li>
                        <li>• Alternate major holidays each year</li>
                        <li>• Birthday time with each parent</li>
                        <li>• Mother's/Father's Day with respective parent</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Summer Break Options:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Split summer in half</li>
                        <li>• Longer blocks (2-4 weeks each)</li>
                        <li>• Maintain regular schedule</li>
                        <li>• Account for camps/activities</li>
                        <li>• Travel time provisions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <div className="bg-gray-100 p-8 rounded-lg mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tips for Success</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Use shared calendars and scheduling apps</li>
                  <li>Build in flexibility for special events</li>
                  <li>Keep transitions calm and positive</li>
                  <li>Pack everything the night before</li>
                  <li>Consider the children's preferences as they get older</li>
                  <li>Review and adjust schedules as needed</li>
                  <li>Communicate changes in advance</li>
                </ul>
              </div>

              <div className="mt-16 pt-8 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  <strong>Disclaimer:</strong> This information is for educational purposes only and does not constitute legal advice. 
                  Every situation is unique. Please consult with a qualified attorney for advice specific to your circumstances. 
                  See our <a href="/legal-disclaimer" className="underline hover:text-gray-700">Legal Disclaimer</a> and 
                  <a href="/advice-disclaimer" className="underline hover:text-gray-700 ml-1">Advice Disclaimer</a> for more information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}