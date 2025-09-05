import { Metadata } from 'next';
import LawyerMapSearch from '@/components/LawyerMapSearch';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Find Divorce Lawyers Near Me | Smart Divorce Questions',
  description: 'Find experienced divorce lawyers in your area. Compare ratings, read reviews, and get free consultations from top-rated divorce attorneys near you.',
  path: '/find-lawyer',
});

export default function FindLawyerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Divorce Lawyers Near You
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Search for experienced divorce attorneys in your area. 
            Compare ratings, reviews, and find the right legal representation for your situation.
          </p>
        </div>

        {/* Featured Badge for Sponsored Lawyers */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                <span className="font-medium">Featured lawyers</span> are highlighted with badges. 
                These are sponsored listings from verified law firms offering special consultations.
              </p>
            </div>
          </div>
        </div>

        {/* Map Component */}
        <LawyerMapSearch />

        {/* SEO Content */}
        <div className="mt-12 prose max-w-4xl mx-auto">
          <h2>How to Choose the Right Divorce Lawyer</h2>
          <p>
            Finding the right divorce lawyer is crucial for navigating this challenging time. 
            Consider these factors when making your choice:
          </p>
          <ul>
            <li><strong>Experience:</strong> Look for lawyers who specialize in family law and have handled cases similar to yours.</li>
            <li><strong>Reviews:</strong> Read client reviews and ratings to understand their track record.</li>
            <li><strong>Communication:</strong> Choose a lawyer who communicates clearly and responds promptly.</li>
            <li><strong>Fees:</strong> Understand their fee structure and get estimates for your case.</li>
            <li><strong>Comfort Level:</strong> You should feel comfortable discussing personal matters with your lawyer.</li>
          </ul>

          <h2>What to Expect During Your First Consultation</h2>
          <p>
            Most divorce lawyers offer an initial consultation, either free or for a nominal fee. 
            During this meeting, you can expect to:
          </p>
          <ul>
            <li>Discuss your situation and goals</li>
            <li>Learn about the divorce process in your state</li>
            <li>Get an estimate of timeline and costs</li>
            <li>Ask questions about the lawyer's experience and approach</li>
          </ul>

          <h2>Common Types of Divorce Cases</h2>
          <ul>
            <li><strong>Uncontested Divorce:</strong> Both parties agree on all terms</li>
            <li><strong>Contested Divorce:</strong> Disagreements require court intervention</li>
            <li><strong>Collaborative Divorce:</strong> Working together with lawyers to reach agreement</li>
            <li><strong>Mediated Divorce:</strong> Using a neutral third party to facilitate agreement</li>
            <li><strong>High-Asset Divorce:</strong> Complex cases involving significant assets</li>
          </ul>
        </div>

        {/* Call to Action for Lawyers */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Are You a Divorce Lawyer?</h2>
          <p className="text-lg mb-6">
            Get featured in our directory and reach clients actively searching for legal representation.
          </p>
          <a 
            href="/lawyers/join" 
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Learn About Sponsored Listings
          </a>
        </div>
      </div>
    </div>
  );
}