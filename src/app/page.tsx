import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Smart Divorce Questions
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Divorce is complicated. Getting answers shouldn't be. Smart Divorce Questions is your trusted guide for navigating custody, finances, property division, and the legal process — with practical insights and the questions you should ask your divorce lawyer.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Link href="/what-to-ask-your-divorce-lawyer" className="group">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                What to Ask Your Divorce Lawyer
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Essential questions to ask during your first consultation to understand your options and plan for the future.
              </p>
            </div>
          </Link>

          <Link href="/how-much-does-divorce-lawyer-cost" className="group">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                How Much Does Divorce Cost?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Understand lawyer fees, court costs, and factors that affect the total price of your divorce.
              </p>
            </div>
          </Link>

          <Link href="/child-custody-schedules" className="group">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                Child Custody Schedules Explained
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Learn about 2-2-3, week-on/week-off, and other custody arrangements that work for different families.
              </p>
            </div>
          </Link>

          <Link href="/dividing-assets-in-divorce" className="group">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                Dividing Assets in Divorce
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Understand how property, retirement accounts, and debt are divided in your state.
              </p>
            </div>
          </Link>

          <Link href="/no-fault-divorce-explained" className="group">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                No-Fault Divorce
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Learn how no-fault divorce works and what it means for your case.
              </p>
            </div>
          </Link>

          <Link href="/divorce-without-a-lawyer" className="group">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                Divorce Without a Lawyer
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Understand when you can represent yourself and the risks involved.
              </p>
            </div>
          </Link>
        </div>

        <div className="text-center mt-16">
          <Link href="/faq" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            View All FAQ
          </Link>
        </div>
      </div>
    </div>
  )
}