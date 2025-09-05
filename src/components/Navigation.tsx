'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navigation = [
    { href: '/what-to-ask-your-divorce-lawyer', label: 'Lawyer Questions' },
    { href: '/child-custody-schedules', label: 'Custody' },
    { href: '/dividing-assets-in-divorce', label: 'Assets' },
    { href: '/faq', label: 'FAQ' },
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-stone-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          <Link 
            href="/" 
            className="font-serif text-2xl font-bold text-navy-900 hover:text-teal-600 transition-colors duration-300"
          >
            Smart Divorce Questions
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map(({ href, label }) => (
              <Link 
                key={href}
                href={href} 
                className="relative text-slate-700 hover:text-teal-600 transition-all duration-300 font-medium py-2 group"
              >
                {label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button 
              type="button" 
              onClick={toggleMenu}
              className="text-slate-700 hover:text-teal-600 transition-colors p-2"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone-200">
            <div className="flex flex-col space-y-3">
              {navigation.map(({ href, label }) => (
                <Link 
                  key={href}
                  href={href} 
                  className="text-slate-700 hover:text-teal-600 transition-colors font-medium py-2 px-2 rounded-lg hover:bg-stone-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}