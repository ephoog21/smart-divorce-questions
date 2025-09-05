import { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Legal Disclaimer | Smart Divorce Questions',
  description: 'Important legal disclaimer and limitation of liability for Smart Divorce Questions. Understand the terms of using our informational resources.',
  path: '/legal-disclaimer',
});

export default function LegalDisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Legal Disclaimer</h1>
      
      <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
        <h2 className="text-xl font-bold text-red-800 mb-2">IMPORTANT NOTICE</h2>
        <p className="text-red-700">
          The information provided on Smart Divorce Questions is for general informational and educational purposes only. 
          It is not intended as legal advice and should not be relied upon as such.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">No Attorney-Client Relationship</h2>
          <p className="mb-4">
            <strong>THE USE OF THIS WEBSITE DOES NOT CREATE AN ATTORNEY-CLIENT RELATIONSHIP.</strong> 
            Smart Divorce Questions is not a law firm and does not provide legal services. No attorney-client 
            relationship or privilege is created by your use of this website, by downloading information from 
            this website, or by corresponding with us through this website or email.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Not Legal Advice</h2>
          <p className="mb-4">
            The information, materials, and content available on this website are for informational purposes only 
            and are not intended to be and should not be considered or used as a substitute for legal advice, 
            professional judgment, or the services of a qualified attorney.
          </p>
          <p className="mb-4">
            Legal information is not the same as legal advice. Legal advice is the application of law to an 
            individual's specific circumstances. We do not provide legal advice. Only a licensed attorney in your 
            jurisdiction can provide legal advice specific to your situation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Accuracy and Currency of Information</h2>
          <p className="mb-4">
            While we strive to provide accurate and up-to-date information, we make no representations or warranties 
            of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability 
            of the information contained on this website.
          </p>
          <p className="mb-4">
            Laws change frequently and vary significantly by jurisdiction. Information that was accurate when published 
            may become outdated. State-specific information may contain generalizations that do not apply to all situations. 
            We do not undertake to update information as laws change.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">State-Specific Information Disclaimer</h2>
          <p className="mb-4">
            Information about state divorce laws is provided for general reference only. This information:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>May not reflect recent changes in the law</li>
            <li>May not apply to your specific circumstances</li>
            <li>Should not be relied upon without verification from current legal sources</li>
            <li>Does not cover all aspects of divorce law in any state</li>
            <li>May contain inadvertent errors or omissions</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">No Warranties or Guarantees</h2>
          <p className="mb-4">
            THE INFORMATION ON THIS WEBSITE IS PROVIDED "AS IS" WITHOUT ANY WARRANTIES OF ANY KIND, 
            EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>The implied warranties of merchantability and fitness for a particular purpose</li>
            <li>Any warranties regarding the accuracy, completeness, or usefulness of information</li>
            <li>Any warranties that the information will meet your requirements</li>
            <li>Any warranties regarding results obtained from use of the information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
          <p className="mb-4 font-semibold">
            TO THE FULLEST EXTENT PERMITTED BY LAW, SMART DIVORCE QUESTIONS, ITS OWNERS, OPERATORS, EMPLOYEES, 
            AGENTS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, 
            OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THIS WEBSITE OR THE INFORMATION CONTAINED HEREIN.
          </p>
          <p className="mb-4">
            This includes, but is not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Any errors or omissions in content</li>
            <li>Any decisions made or actions taken based on the information provided</li>
            <li>Loss of data or profits</li>
            <li>Business interruption</li>
            <li>Personal injury or property damage</li>
            <li>Any unauthorized access to or use of our servers</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">User Responsibility</h2>
          <p className="mb-4">
            By using this website, you acknowledge and agree that:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>You are solely responsible for any decisions or actions you take based on the information on this website</li>
            <li>You will seek appropriate legal counsel before making any legal decisions</li>
            <li>You will verify all information with appropriate legal sources</li>
            <li>You understand that general information cannot replace personalized legal advice</li>
            <li>You will not rely solely on this website for legal guidance</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Third-Party Links and Resources</h2>
          <p className="mb-4">
            This website may contain links to third-party websites or resources. We provide these links for convenience 
            only and are not responsible for the content, accuracy, or opinions expressed on such websites. The inclusion 
            of any link does not imply endorsement by Smart Divorce Questions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Lawyer Directory Disclaimer</h2>
          <p className="mb-4">
            Any lawyers or law firms listed in our directory are independent professionals. We do not endorse, recommend, 
            or guarantee the quality of services provided by any listed professional. We are not responsible for any 
            interactions, services, or outcomes resulting from contact with listed professionals.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
          <p className="mb-4">
            You agree to indemnify, defend, and hold harmless Smart Divorce Questions, its owners, operators, employees, 
            agents, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, 
            and expenses arising from your use of this website or your violation of these terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Jurisdiction and Applicable Law</h2>
          <p className="mb-4">
            These disclaimers shall be governed by and construed in accordance with the laws of the United States, 
            without giving effect to any principles of conflicts of law. You agree that any action at law or in equity 
            arising out of or relating to these terms shall be filed only in the federal or state courts of the United States.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-4">
            If you have any questions about this legal disclaimer, please contact us at:
          </p>
          <p className="mb-4">
            Email: support@smartdivorcequestions.com<br />
            Website: www.smartdivorcequestions.com
          </p>
        </section>

        <section className="border-t pt-6 mt-8">
          <p className="text-sm text-gray-600">
            <strong>Last Updated:</strong> September 5, 2025
          </p>
          <p className="text-sm text-gray-600 mt-2">
            We reserve the right to update or modify this legal disclaimer at any time without prior notice. 
            Your continued use of this website following any changes constitutes acceptance of those changes.
          </p>
        </section>
      </div>
    </div>
  );
}