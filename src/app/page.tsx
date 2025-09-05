import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-cream-50 text-navy-900 py-12 px-6 sm:px-12 md:py-24">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-navy-900 leading-tight">
            Smart Divorce Questions
          </h1>
          <p className="text-xl sm:text-2xl text-navy-700 max-w-4xl mx-auto leading-relaxed mb-10">
            Divorce is complicated. Getting answers shouldn't be. Your trusted guide for navigating custody, finances, property division, and the legal process — with practical insights and the questions you should ask your divorce lawyer.
          </p>
          <Link 
            href="/what-to-ask-your-divorce-lawyer"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 sm:px-12">
        <div className="container mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center text-navy-900 mb-16">
            Essential Divorce Resources
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/what-to-ask-your-divorce-lawyer" className="group">
              <article className="bg-white border border-stone-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-navy-900 mb-3 group-hover:text-teal-600 transition-colors">
                    What to Ask Your Divorce Lawyer
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Essential questions to ask during your first consultation to understand your options and plan for the future.
                </p>
              </article>
            </Link>

            <Link href="/how-much-does-divorce-lawyer-cost" className="group">
              <article className="bg-white border border-stone-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-navy-900 mb-3 group-hover:text-teal-600 transition-colors">
                    How Much Does Divorce Cost?
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Understand lawyer fees, court costs, and factors that affect the total price of your divorce.
                </p>
              </article>
            </Link>

            <Link href="/child-custody-schedules" className="group">
              <article className="bg-white border border-stone-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-navy-900 mb-3 group-hover:text-teal-600 transition-colors">
                    Child Custody Schedules
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Learn about 2-2-3, week-on/week-off, and other custody arrangements that work for different families.
                </p>
              </article>
            </Link>

            <Link href="/dividing-assets-in-divorce" className="group">
              <article className="bg-white border border-stone-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-navy-900 mb-3 group-hover:text-teal-600 transition-colors">
                    Dividing Assets in Divorce
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Understand how property, retirement accounts, and debt are divided in your state.
                </p>
              </article>
            </Link>

            <Link href="/no-fault-divorce-explained" className="group">
              <article className="bg-white border border-stone-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-navy-900 mb-3 group-hover:text-teal-600 transition-colors">
                    No-Fault Divorce
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Learn how no-fault divorce works and what it means for your case.
                </p>
              </article>
            </Link>

            <Link href="/divorce-without-a-lawyer" className="group">
              <article className="bg-white border border-stone-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-navy-900 mb-3 group-hover:text-teal-600 transition-colors">
                    Divorce Without a Lawyer
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Understand when you can represent yourself and the risks involved.
                </p>
              </article>
            </Link>
          </div>

          <div className="text-center mt-16">
            <Link 
              href="/faq" 
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              View All FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}