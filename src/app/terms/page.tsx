import { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Terms of Service | Smart Divorce Questions',
  description: 'Terms of service for Smart Divorce Questions. Read our terms and conditions for using our website and services.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <p className="text-gray-600 mb-6">Effective Date: September 5, 2025</p>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using Smart Divorce Questions ("the Website"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Description of Services</h2>
          <p className="mb-4">
            Smart Divorce Questions provides educational information about divorce, a directory of divorce lawyers, and tools to connect individuals with legal professionals. We are not a law firm and do not provide legal advice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Disclaimer of Legal Advice</h2>
          <p className="mb-4 font-semibold">
            THE INFORMATION PROVIDED ON THIS WEBSITE IS FOR GENERAL INFORMATIONAL PURPOSES ONLY AND DOES NOT CONSTITUTE LEGAL ADVICE.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>No attorney-client relationship is formed by using this website</li>
            <li>Information may not apply to your specific situation</li>
            <li>Laws vary by state and change frequently</li>
            <li>Always consult with a qualified attorney for legal advice</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Lawyer Directory</h2>
          <p className="mb-4">Our lawyer directory includes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Listings from public sources and direct submissions</li>
            <li>Sponsored and non-sponsored listings</li>
            <li>No endorsement or recommendation implied</li>
            <li>Users must independently verify lawyer credentials</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. User Conduct</h2>
          <p className="mb-4">You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the website for any unlawful purpose</li>
            <li>Submit false or misleading information</li>
            <li>Interfere with the website's operation</li>
            <li>Attempt to gain unauthorized access</li>
            <li>Scrape or harvest data without permission</li>
            <li>Violate any applicable laws or regulations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Intellectual Property</h2>
          <p className="mb-4">
            All content on this website, including text, graphics, logos, and software, is the property of Smart Divorce Questions or its content suppliers and is protected by copyright laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Privacy</h2>
          <p className="mb-4">
            Your use of our website is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Third-Party Links and Services</h2>
          <p className="mb-4">
            Our website may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of any third-party sites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">9. Disclaimers and Limitations of Liability</h2>
          <p className="mb-4 font-semibold">
            THE WEBSITE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.
          </p>
          <p className="mb-4">
            To the fullest extent permitted by law, Smart Divorce Questions disclaims all warranties and shall not be liable for any damages arising from your use of the website, including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Errors or omissions in content</li>
            <li>Personal injury or property damage</li>
            <li>Unauthorized access to our servers</li>
            <li>Interruption of transmission</li>
            <li>Any loss or damage of any kind</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">10. Indemnification</h2>
          <p className="mb-4">
            You agree to indemnify and hold harmless Smart Divorce Questions, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising from your use of the website or violation of these terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">11. Lawyer Listing Terms</h2>
          <p className="mb-4">For lawyers applying to our directory:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You must provide accurate and current information</li>
            <li>You must maintain active bar membership</li>
            <li>Sponsored listings are subject to payment terms</li>
            <li>We reserve the right to remove listings at our discretion</li>
            <li>Listing fees are non-refundable</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">12. Modifications to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the website constitutes acceptance of the modified terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">13. Termination</h2>
          <p className="mb-4">
            We reserve the right to terminate or suspend your access to the website at any time, without notice, for any reason, including violation of these terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">14. Governing Law</h2>
          <p className="mb-4">
            These terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">15. Severability</h2>
          <p className="mb-4">
            If any provision of these terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">16. Contact Information</h2>
          <p className="mb-4">For questions about these Terms of Service, please contact us at:</p>
          <ul className="list-none space-y-2">
            <li>Email: support@smartdivorcequestions.com</li>
            <li>Website: www.smartdivorcequestions.com</li>
          </ul>
        </section>
      </div>
    </div>
  );
}