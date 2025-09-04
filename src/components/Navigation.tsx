import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Smart Divorce Questions
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/what-to-ask-your-divorce-lawyer" className="text-gray-700 hover:text-blue-600 transition-colors">
              Lawyer Questions
            </Link>
            <Link href="/child-custody-schedules" className="text-gray-700 hover:text-blue-600 transition-colors">
              Custody
            </Link>
            <Link href="/dividing-assets-in-divorce" className="text-gray-700 hover:text-blue-600 transition-colors">
              Assets
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-blue-600 transition-colors">
              FAQ
            </Link>
          </div>

          <div className="md:hidden">
            <button type="button" className="text-gray-700 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}