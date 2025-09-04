import Link from 'next/link'
import NewsletterSignup from './NewsletterSignup'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Smart Divorce Questions</h3>
            <p className="text-gray-400 text-sm">
              Your trusted guide for navigating divorce with practical insights and expert advice.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/what-to-ask-your-divorce-lawyer" className="text-gray-400 hover:text-white transition-colors">
                  Lawyer Questions
                </Link>
              </li>
              <li>
                <Link href="/child-custody-schedules" className="text-gray-400 hover:text-white transition-colors">
                  Custody Schedules
                </Link>
              </li>
              <li>
                <Link href="/dividing-assets-in-divorce" className="text-gray-400 hover:text-white transition-colors">
                  Dividing Assets
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/how-much-does-divorce-lawyer-cost" className="text-gray-400 hover:text-white transition-colors">
                  Lawyer Costs
                </Link>
              </li>
              <li>
                <Link href="/no-fault-divorce-explained" className="text-gray-400 hover:text-white transition-colors">
                  No-Fault Divorce
                </Link>
              </li>
              <li>
                <Link href="/divorce-without-a-lawyer" className="text-gray-400 hover:text-white transition-colors">
                  DIY Divorce
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get helpful divorce tips and updates
            </p>
            <NewsletterSignup />
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Smart Divorce Questions. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            {' | '}
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}