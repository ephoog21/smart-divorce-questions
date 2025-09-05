'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Law Firm Information
  firmName: string;
  barNumber: string;
  yearsExperience: string;
  website: string;
  
  // Location Information
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  
  // Practice Details
  practiceAreas: string[];
  clientTypes: string[];
  consultationType: string;
  
  // Sponsorship Interest
  sponsorshipTier: string;
  monthlyBudget: string;
  comments: string;
}

export default function LawyerJoinPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    firmName: '',
    barNumber: '',
    yearsExperience: '',
    website: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    practiceAreas: [],
    clientTypes: [],
    consultationType: 'paid',
    sponsorshipTier: 'basic',
    monthlyBudget: '',
    comments: ''
  });

  const states = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];

  const practiceAreaOptions = [
    'Contested Divorce',
    'Uncontested Divorce',
    'Child Custody',
    'Child Support',
    'Alimony/Spousal Support',
    'Property Division',
    'High-Asset Divorce',
    'Collaborative Divorce',
    'Mediation',
    'Domestic Violence',
    'Prenuptial Agreements',
    'Post-Divorce Modifications'
  ];

  const clientTypeOptions = [
    'Individuals',
    'High Net Worth Individuals',
    'Business Owners',
    'Military Personnel',
    'Same-Sex Couples',
    'Parents',
    'Senior Citizens'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (category: 'practiceAreas' | 'clientTypes', value: string) => {
    setFormData(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/lawyers/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Redirect to success page
        router.push('/lawyers/join/success');
      } else {
        alert('There was an error submitting your application. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Lawyer Directory
          </h1>
          <p className="text-xl text-gray-600">
            Get featured in front of thousands of potential clients searching for divorce lawyers
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-gray-200">
            <h3 className="text-lg font-semibold mb-2">Basic</h3>
            <p className="text-3xl font-bold text-gray-900 mb-4">$99<span className="text-lg font-normal">/mo</span></p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✓ Highlighted listing</li>
              <li>✓ Contact info visible</li>
              <li>✓ Basic badge</li>
              <li>✓ Up to 3 photos</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-6 rounded-lg shadow-lg border-2 border-teal-600 text-white transform scale-105">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Premium</h3>
              <span className="bg-yellow-400 text-teal-900 text-xs px-2 py-1 rounded">POPULAR</span>
            </div>
            <p className="text-3xl font-bold mb-4">$299<span className="text-lg font-normal">/mo</span></p>
            <ul className="text-sm space-y-2">
              <li>✓ Priority placement</li>
              <li>✓ Custom description</li>
              <li>✓ Premium badge</li>
              <li>✓ Up to 10 photos</li>
              <li>✓ Direct contact button</li>
              <li>✓ Monthly analytics</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-gray-200">
            <h3 className="text-lg font-semibold mb-2">Featured</h3>
            <p className="text-3xl font-bold text-gray-900 mb-4">$599<span className="text-lg font-normal">/mo</span></p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✓ Top placement always</li>
              <li>✓ Full customization</li>
              <li>✓ Featured badge</li>
              <li>✓ Unlimited photos</li>
              <li>✓ Video introduction</li>
              <li>✓ Weekly analytics</li>
              <li>✓ Priority support</li>
            </ul>
          </div>
        </div>

        {/* Application Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-6">Application Form</h2>
          
          {/* Personal Information */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
            </div>
          </div>

          {/* Law Firm Information */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Law Firm Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Firm Name *
                </label>
                <input
                  type="text"
                  name="firmName"
                  required
                  value={formData.firmName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bar Number *
                </label>
                <input
                  type="text"
                  name="barNumber"
                  required
                  value={formData.barNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience *
                </label>
                <input
                  type="number"
                  name="yearsExperience"
                  required
                  min="0"
                  value={formData.yearsExperience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="https://example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
            </div>
          </div>

          {/* Location Information */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Office Location</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Street Address *
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  required
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State *
                </label>
                <select
                  name="state"
                  required
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="">Select State</option>
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ZIP Code *
                </label>
                <input
                  type="text"
                  name="zipCode"
                  required
                  pattern="[0-9]{5}"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Practice Areas</h3>
            <p className="text-sm text-gray-600 mb-4">Select all that apply</p>
            <div className="grid md:grid-cols-3 gap-3">
              {practiceAreaOptions.map(area => (
                <label key={area} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.practiceAreas.includes(area)}
                    onChange={() => handleCheckboxChange('practiceAreas', area)}
                    className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  />
                  <span className="text-sm text-gray-700">{area}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Client Types */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Client Types You Serve</h3>
            <div className="grid md:grid-cols-3 gap-3">
              {clientTypeOptions.map(type => (
                <label key={type} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.clientTypes.includes(type)}
                    onChange={() => handleCheckboxChange('clientTypes', type)}
                    className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  />
                  <span className="text-sm text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Consultation Type */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Initial Consultation</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="consultationType"
                  value="free"
                  checked={formData.consultationType === 'free'}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-teal-600 border-gray-300 focus:ring-teal-500"
                />
                <span className="text-gray-700">Free Consultation</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="consultationType"
                  value="paid"
                  checked={formData.consultationType === 'paid'}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-teal-600 border-gray-300 focus:ring-teal-500"
                />
                <span className="text-gray-700">Paid Consultation</span>
              </label>
            </div>
          </div>

          {/* Sponsorship Interest */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Sponsorship Level Interest</h3>
            <select
              name="sponsorshipTier"
              value={formData.sponsorshipTier}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="basic">Basic - $99/month</option>
              <option value="premium">Premium - $299/month</option>
              <option value="featured">Featured - $599/month</option>
              <option value="undecided">I'm not sure yet</option>
            </select>
          </div>

          {/* Additional Comments */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Additional Information</h3>
            <textarea
              name="comments"
              rows={4}
              value={formData.comments}
              onChange={handleInputChange}
              placeholder="Tell us more about your practice, specializations, or any questions you have..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-800 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-300 shadow-lg"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}