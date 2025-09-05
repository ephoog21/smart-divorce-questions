import Link from 'next/link'

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Smart Divorce Questions",
  "url": "https://smartdivorcequestions.com",
  "logo": "https://smartdivorcequestions.com/logo.png",
  "description": "Expert divorce guidance and essential questions to ask your lawyer about custody, finances, and legal processes.",
  "sameAs": [
    "https://www.facebook.com/smartdivorcequestions",
    "https://twitter.com/smartdivorceq"
  ],
  "publisher": {
    "@type": "Organization",
    "name": "Smart Divorce Questions"
  }
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What questions should I ask during a divorce consultation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Essential divorce consultation questions include asking about custody schedules, property division, spousal support calculations, legal fees, and timeline expectations. Our comprehensive guide covers 50+ important questions to ask your divorce lawyer."
      }
    },
    {
      "@type": "Question", 
      "name": "How much does a divorce lawyer consultation cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Divorce lawyer consultations typically cost $200-$500 per hour, with many attorneys offering free initial consultations. Total divorce costs range from $1,000-$5,000 for uncontested cases to $15,000+ for contested divorces."
      }
    },
    {
      "@type": "Question",
      "name": "What divorce questions should I ask about child custody?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Key child custody questions include asking about realistic custody schedules, how custody decisions are made, factors courts consider, and how to modify custody arrangements. Different schedules work better for different age groups."
      }
    }
  ]
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-800 via-navy-700 to-teal-800 text-white py-16 px-6 sm:px-12 md:py-28" itemScope itemType="https://schema.org/WebPage">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight drop-shadow-sm" itemProp="name">
            Essential Divorce Questions to Ask Your Lawyer
          </h1>
          <p className="text-xl sm:text-2xl text-slate-100 max-w-4xl mx-auto leading-relaxed mb-10 drop-shadow-sm" itemProp="description">
            Navigate your divorce with confidence using our expert guide to the most important questions to ask during your lawyer consultation. Get clear answers about child custody, finances, property division, and legal costs — with practical insights for every stage of the divorce process.
          </p>
          <Link 
            href="/what-to-ask-your-divorce-lawyer"
            className="inline-block bg-teal-500 hover:bg-teal-400 text-navy-900 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
            itemProp="mainEntity"
          >
            View Essential Divorce Questions →
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 sm:px-12" itemScope itemType="https://schema.org/ItemList">
        <div className="container mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center text-navy-900 mb-6" itemProp="name">
            Expert Divorce Guidance & Essential Questions to Ask Your Lawyer
          </h2>
          <p className="text-lg text-navy-700 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            Get expert answers to the most important divorce questions. Our comprehensive guides help you prepare for lawyer consultations, understand your options, and navigate custody, finances, and legal processes with confidence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/what-to-ask-your-divorce-lawyer" className="group" itemProp="itemListElement" itemScope itemType="https://schema.org/Article">
              <article className="bg-gradient-to-br from-white to-teal-50/50 border border-teal-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full hover:border-teal-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-600 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Consultation Questions">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-navy-900 mb-3 group-hover:text-teal-600 transition-colors" itemProp="headline">
                    Essential Questions to Ask Your Divorce Lawyer
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed" itemProp="description">
                  50+ critical divorce consultation questions about custody schedules, property division, spousal support, legal fees, and timelines. Prepare for your first lawyer meeting with confidence.
                </p>
                <meta itemProp="url" content="/what-to-ask-your-divorce-lawyer" />
              </article>
            </Link>

            <Link href="/how-much-does-divorce-lawyer-cost" className="group" itemProp="itemListElement" itemScope itemType="https://schema.org/Article">
              <article className="bg-gradient-to-br from-white to-navy-50/50 border border-navy-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full hover:border-navy-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-navy-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-navy-700 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Divorce Costs">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-navy-900 mb-3 group-hover:text-teal-600 transition-colors" itemProp="headline">
                    Divorce Lawyer Costs & Legal Fees Explained
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed" itemProp="description">
                  Complete breakdown of divorce attorney fees, court costs, mediation expenses, and hidden costs. Learn what factors increase divorce costs and how to budget for your legal expenses.
                </p>
                <meta itemProp="url" content="/how-much-does-divorce-lawyer-cost" />
              </article>
            </Link>

            <Link href="/child-custody-schedules" className="group" itemProp="itemListElement" itemScope itemType="https://schema.org/Article">
              <article className="bg-gradient-to-br from-white to-teal-50/50 border border-teal-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full hover:border-teal-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-600 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Child Custody Schedules">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-navy-900 mb-3 group-hover:text-teal-600 transition-colors" itemProp="headline">
                    Child Custody Schedules & Co-Parenting Plans
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed" itemProp="description">
                  Detailed guide to custody schedules including 2-2-3, alternating weeks, and 50/50 arrangements. Find the best co-parenting plan for different ages and family situations.
                </p>
                <meta itemProp="url" content="/child-custody-schedules" />
              </article>
            </Link>

            <Link href="/dividing-assets-in-divorce" className="group" itemProp="itemListElement" itemScope itemType="https://schema.org/Article">
              <article className="bg-gradient-to-br from-white to-navy-50/50 border border-navy-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full hover:border-navy-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-navy-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-navy-700 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Property Division">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-navy-900 mb-3 group-hover:text-teal-600 transition-colors" itemProp="headline">
                    Property Division & Asset Splitting in Divorce
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed" itemProp="description">
                  Comprehensive guide to dividing marital property, retirement accounts, business assets, and debt in divorce. Learn about equitable distribution vs. community property laws.
                </p>
                <meta itemProp="url" content="/dividing-assets-in-divorce" />
              </article>
            </Link>

            <Link href="/no-fault-divorce-explained" className="group" itemProp="itemListElement" itemScope itemType="https://schema.org/Article">
              <article className="bg-gradient-to-br from-white to-teal-50/50 border border-teal-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full hover:border-teal-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-600 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="No-Fault Divorce">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-navy-900 mb-3 group-hover:text-teal-600 transition-colors" itemProp="headline">
                    No-Fault Divorce Laws & Requirements
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed" itemProp="description">
                  Complete guide to no-fault divorce laws, residency requirements, separation periods, and grounds for divorce. Understand how no-fault filing affects your case.
                </p>
                <meta itemProp="url" content="/no-fault-divorce-explained" />
              </article>
            </Link>

            <Link href="/divorce-without-a-lawyer" className="group" itemProp="itemListElement" itemScope itemType="https://schema.org/Article">
              <article className="bg-gradient-to-br from-white to-navy-50/50 border border-navy-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full hover:border-navy-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-navy-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-navy-700 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Self-Representation">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-navy-900 mb-3 group-hover:text-teal-600 transition-colors" itemProp="headline">
                    DIY Divorce Guide & Pro Se Representation
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed" itemProp="description">
                  Step-by-step guide to self-representation in divorce including required forms, court procedures, and when you need legal help. Learn the pros and cons of DIY divorce.
                </p>
                <meta itemProp="url" content="/divorce-without-a-lawyer" />
              </article>
            </Link>
          </div>

          {/* SEO Content Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="bg-white border border-stone-200 rounded-xl p-8 shadow-sm">
              <h2 className="font-serif text-3xl font-bold text-navy-900 mb-6">
                Your Complete Guide to Divorce Questions & Legal Consultation
              </h2>
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="mb-6">
                  Preparing for your <strong>divorce lawyer consultation</strong> is crucial for getting the guidance you need. Our expert-compiled list of <strong>essential divorce questions</strong> helps you understand your rights, options, and what to expect throughout the divorce process.
                </p>
                
                <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">
                  Most Important Divorce Questions to Ask Your Attorney
                </h3>
                <ul className="space-y-2 mb-6">
                  <li>• How will child custody and visitation schedules work in my situation?</li>
                  <li>• What are the expected legal fees and total divorce costs?</li>
                  <li>• How will our property, assets, and debts be divided?</li>
                  <li>• What is the realistic timeline for completing my divorce?</li>
                  <li>• Am I eligible for spousal support or alimony payments?</li>
                </ul>

                <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">
                  Free Divorce Consultation Questions Checklist
                </h3>
                <p className="mb-4">
                  Many divorce attorneys offer free consultations, making it the perfect opportunity to ask detailed questions about your specific situation. Use our comprehensive checklist to maximize your consultation time and get the information you need to make informed decisions about your divorce.
                </p>
                
                <p className="text-sm text-slate-600 italic">
                  Last updated: January 2025 | All information reviewed by family law experts
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link 
              href="/faq" 
              className="inline-block bg-navy-600 hover:bg-navy-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Browse All Divorce Questions & Answers →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}