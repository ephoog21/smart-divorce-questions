'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navigation = [
    { href: '/what-to-ask-your-divorce-lawyer', label: 'Lawyer Questions' },
    { href: '/divorce-laws', label: 'State Laws' },
    { href: '/child-custody-schedules', label: 'Custody' },
    { href: '/dividing-assets-in-divorce', label: 'Assets' },
    { href: '/faq', label: 'FAQ' },
  ]
  
  const findLawyerLink = { href: '/find-lawyer', label: 'Find Lawyers' }

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-stone-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="relative w-64 h-16 sm:w-80 sm:h-16 lg:w-96 lg:h-16">
              <Image
                src="/logo-horizontal.png"
                alt="Smart Divorce Questions Logo"
                fill
                className="object-contain object-left group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
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
            
            {/* Find Lawyers button with special styling */}
            <Link 
              href={findLawyerLink.href}
              className="ml-4 px-5 py-2.5 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-full hover:from-teal-700 hover:to-teal-800 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {findLawyerLink.label}
            </Link>
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
              
              {/* Find Lawyers button for mobile */}
              <Link 
                href={findLawyerLink.href}
                className="mx-2 px-5 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white text-center font-semibold rounded-full hover:from-teal-700 hover:to-teal-800 transition-all duration-300 shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {findLawyerLink.label}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}