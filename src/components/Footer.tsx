import Link from 'next/link'
import NewsletterSignup from './NewsletterSignup'

export default function Footer() {
  const quickLinks = [
    { href: '/what-to-ask-your-divorce-lawyer', label: 'Lawyer Questions' },
    { href: '/child-custody-schedules', label: 'Custody Schedules' },
    { href: '/dividing-assets-in-divorce', label: 'Dividing Assets' },
    { href: '/faq', label: 'FAQ' },
  ]

  const resources = [
    { href: '/how-much-does-divorce-lawyer-cost', label: 'Lawyer Costs' },
    { href: '/no-fault-divorce-explained', label: 'No-Fault Divorce' },
    { href: '/divorce-without-a-lawyer', label: 'DIY Divorce' },
  ]

  return (
    <footer className="bg-navy-900 text-white mt-20">
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4 text-white">
              Smart Divorce Questions
            </h3>
            <p className="text-slate-300 text-base leading-relaxed mb-6 max-w-md">
              Your trusted guide for navigating divorce with practical insights and expert advice. Get the information you need to make informed decisions about your future.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-medium">Expert Guidance</p>
                <p className="text-slate-400 text-sm">Professional insights you can trust</p>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link 
                    href={href} 
                    className="text-slate-300 hover:text-teal-400 transition-colors duration-300 text-sm font-medium"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">Resources</h4>
            <ul className="space-y-3">
              {resources.map(({ href, label }) => (
                <li key={href}>
                  <Link 
                    href={href} 
                    className="text-slate-300 hover:text-teal-400 transition-colors duration-300 text-sm font-medium"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-slate-700 mt-12 pt-12">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="font-serif text-xl font-semibold mb-4 text-white">Stay Informed</h4>
            <p className="text-slate-300 mb-8">
              Get helpful divorce tips, legal updates, and expert insights delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterSignup />
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-sm mb-4">
            &copy; 2024 Smart Divorce Questions. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <Link href="/privacy" className="text-slate-400 hover:text-teal-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-600">|</span>
            <Link href="/terms" className="text-slate-400 hover:text-teal-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}