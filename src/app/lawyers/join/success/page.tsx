import Link from 'next/link';
import Script from 'next/script';

export default function JoinSuccessPage() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Application Submitted Successfully!
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Thank you for your interest in joining our lawyer directory. 
          We've sent you a confirmation email with the next steps.
        </p>

        {/* What's Next */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 text-left">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">What Happens Next?</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mt-0.5">
                <span className="text-teal-600 font-semibold text-sm">1</span>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800">Application Review</h3>
                <p className="text-gray-600">Our team will review your application within 24-48 hours.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mt-0.5">
                <span className="text-teal-600 font-semibold text-sm">2</span>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800">Verification</h3>
                <p className="text-gray-600">We'll verify your bar registration and credentials.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mt-0.5">
                <span className="text-teal-600 font-semibold text-sm">3</span>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800">Approval Email</h3>
                <p className="text-gray-600">You'll receive an email with payment instructions and account setup details.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mt-0.5">
                <span className="text-teal-600 font-semibold text-sm">4</span>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800">Go Live!</h3>
                <p className="text-gray-600">Once payment is processed, your listing will be activated immediately.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Special Offer */}
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-300 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-center mb-2">
            <svg className="w-6 h-6 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-800">Limited Time Offer</h3>
          </div>
          <p className="text-gray-700">
            As an early adopter, you qualify for <strong>50% off your first month</strong>! 
            This offer will be automatically applied to your account.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-300 shadow-md"
          >
            Return to Home
          </Link>
          
          <Link 
            href="/find-lawyer"
            className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300"
          >
            View Lawyer Directory
          </Link>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-sm text-gray-500">
          <p>Questions? Contact us at</p>
          <a href="mailto:support@smartdivorcequestions.com" className="text-teal-600 hover:text-teal-700">
            support@smartdivorcequestions.com
          </a>
        </div>
      </div>
    </div>
    
    {/* Google Conversion Tracking - Submit lead form */}
    <Script
      id="google-conversion-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          if (typeof gtag !== 'undefined') {
            gtag('event', 'conversion', {
              'send_to': 'AW-17424929826/PBbgCJOC3v0aEKKo7fRA'
            });
          }
        `,
      }}
    />
    </>
  );
}