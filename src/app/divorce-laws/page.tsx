import { Metadata } from 'next';
import Link from 'next/link';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Divorce Laws by State | Complete US Guide 2025',
  description: 'Comprehensive guide to divorce laws in all 50 US states. Compare residency requirements, property division rules, custody laws, and filing procedures.',
  path: '/divorce-laws',
});

const states = [
  { name: 'Alabama', slug: 'alabama', abbr: 'AL' },
  { name: 'Alaska', slug: 'alaska', abbr: 'AK' },
  { name: 'Arizona', slug: 'arizona', abbr: 'AZ' },
  { name: 'Arkansas', slug: 'arkansas', abbr: 'AR' },
  { name: 'California', slug: 'california', abbr: 'CA' },
  { name: 'Colorado', slug: 'colorado', abbr: 'CO' },
  { name: 'Connecticut', slug: 'connecticut', abbr: 'CT' },
  { name: 'Delaware', slug: 'delaware', abbr: 'DE' },
  { name: 'Florida', slug: 'florida', abbr: 'FL' },
  { name: 'Georgia', slug: 'georgia', abbr: 'GA' },
  { name: 'Hawaii', slug: 'hawaii', abbr: 'HI' },
  { name: 'Idaho', slug: 'idaho', abbr: 'ID' },
  { name: 'Illinois', slug: 'illinois', abbr: 'IL' },
  { name: 'Indiana', slug: 'indiana', abbr: 'IN' },
  { name: 'Iowa', slug: 'iowa', abbr: 'IA' },
  { name: 'Kansas', slug: 'kansas', abbr: 'KS' },
  { name: 'Kentucky', slug: 'kentucky', abbr: 'KY' },
  { name: 'Louisiana', slug: 'louisiana', abbr: 'LA' },
  { name: 'Maine', slug: 'maine', abbr: 'ME' },
  { name: 'Maryland', slug: 'maryland', abbr: 'MD' },
  { name: 'Massachusetts', slug: 'massachusetts', abbr: 'MA' },
  { name: 'Michigan', slug: 'michigan', abbr: 'MI' },
  { name: 'Minnesota', slug: 'minnesota', abbr: 'MN' },
  { name: 'Mississippi', slug: 'mississippi', abbr: 'MS' },
  { name: 'Missouri', slug: 'missouri', abbr: 'MO' },
  { name: 'Montana', slug: 'montana', abbr: 'MT' },
  { name: 'Nebraska', slug: 'nebraska', abbr: 'NE' },
  { name: 'Nevada', slug: 'nevada', abbr: 'NV' },
  { name: 'New Hampshire', slug: 'new-hampshire', abbr: 'NH' },
  { name: 'New Jersey', slug: 'new-jersey', abbr: 'NJ' },
  { name: 'New Mexico', slug: 'new-mexico', abbr: 'NM' },
  { name: 'New York', slug: 'new-york', abbr: 'NY' },
  { name: 'North Carolina', slug: 'north-carolina', abbr: 'NC' },
  { name: 'North Dakota', slug: 'north-dakota', abbr: 'ND' },
  { name: 'Ohio', slug: 'ohio', abbr: 'OH' },
  { name: 'Oklahoma', slug: 'oklahoma', abbr: 'OK' },
  { name: 'Oregon', slug: 'oregon', abbr: 'OR' },
  { name: 'Pennsylvania', slug: 'pennsylvania', abbr: 'PA' },
  { name: 'Rhode Island', slug: 'rhode-island', abbr: 'RI' },
  { name: 'South Carolina', slug: 'south-carolina', abbr: 'SC' },
  { name: 'South Dakota', slug: 'south-dakota', abbr: 'SD' },
  { name: 'Tennessee', slug: 'tennessee', abbr: 'TN' },
  { name: 'Texas', slug: 'texas', abbr: 'TX' },
  { name: 'Utah', slug: 'utah', abbr: 'UT' },
  { name: 'Vermont', slug: 'vermont', abbr: 'VT' },
  { name: 'Virginia', slug: 'virginia', abbr: 'VA' },
  { name: 'Washington', slug: 'washington', abbr: 'WA' },
  { name: 'West Virginia', slug: 'west-virginia', abbr: 'WV' },
  { name: 'Wisconsin', slug: 'wisconsin', abbr: 'WI' },
  { name: 'Wyoming', slug: 'wyoming', abbr: 'WY' },
];

const popularStates = ['california', 'texas', 'florida', 'new-york', 'pennsylvania', 'illinois'];

export default function DivorceLawsDirectory() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Divorce Laws by State
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Navigate divorce laws across all 50 states. Understanding your state's specific requirements, 
            procedures, and timelines is crucial for a smoother divorce process.
          </p>
        </div>

        {/* Popular States */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-navy-900 mb-6 text-center">
            Most Searched States
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {states.filter(state => popularStates.includes(state.slug)).map((state) => (
              <Link
                key={state.slug}
                href={`/divorce-laws/${state.slug}`}
                className="bg-teal-600 hover:bg-teal-700 text-white text-center py-3 px-4 rounded-lg transition-all duration-200 font-semibold"
              >
                {state.name}
              </Link>
            ))}
          </div>
        </div>

        {/* All States Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-navy-900 mb-6 text-center">
            Select Your State
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {states.map((state) => (
              <Link
                key={state.slug}
                href={`/divorce-laws/${state.slug}`}
                className="bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-teal-500 rounded-lg p-4 transition-all duration-200 text-center group"
              >
                <div className="text-3xl font-bold text-gray-300 group-hover:text-teal-500 mb-2">
                  {state.abbr}
                </div>
                <div className="text-sm font-medium text-gray-700 group-hover:text-teal-700">
                  {state.name}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* SEO Content */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              Understanding State-Specific Divorce Laws
            </h2>
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
                Divorce laws vary significantly from state to state in the United States. 
                Each state has its own requirements for residency, grounds for divorce, 
                property division, child custody, and spousal support.
              </p>
              
              <h3 className="text-xl font-semibold text-navy-900 mb-3 mt-6">
                Key Differences Between States
              </h3>
              <ul className="space-y-2 mb-6">
                <li><strong>Residency Requirements:</strong> Range from 6 weeks (Nevada) to 1 year (several states)</li>
                <li><strong>Property Division:</strong> Community property vs. equitable distribution states</li>
                <li><strong>Waiting Periods:</strong> Some states require separation periods before filing</li>
                <li><strong>No-Fault vs. Fault:</strong> Availability and requirements for no-fault divorce</li>
                <li><strong>Alimony Laws:</strong> Duration and calculation methods vary widely</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy-900 mb-3 mt-6">
                Community Property States
              </h3>
              <p className="mb-4">
                Nine states follow community property laws: Arizona, California, Idaho, Louisiana, 
                Nevada, New Mexico, Texas, Washington, and Wisconsin. In these states, 
                most property acquired during marriage is split 50/50.
              </p>

              <h3 className="text-xl font-semibold text-navy-900 mb-3 mt-6">
                Equitable Distribution States
              </h3>
              <p className="mb-4">
                The remaining 41 states follow equitable distribution, where property is divided 
                fairly but not necessarily equally, based on factors like income, contributions, 
                and future needs.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
                <p className="text-sm">
                  <strong>Note:</strong> This information is for educational purposes only. 
                  Always consult with a qualified family law attorney in your state for 
                  advice specific to your situation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-4">
            Need help understanding your state's divorce laws?
          </p>
          <Link
            href="/find-lawyer"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200"
          >
            Find a Divorce Lawyer Near You
          </Link>
        </div>
      </div>
    </div>
  );
}