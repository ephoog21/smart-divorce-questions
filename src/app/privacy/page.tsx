import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Smart Divorce Questions',
  description: 'Privacy policy for Smart Divorce Questions. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <p className="text-gray-600 mb-6">Effective Date: September 5, 2025</p>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
          <p className="mb-4">We collect information you provide directly to us, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name, email address, and phone number when you submit forms</li>
            <li>Location data when you use our lawyer search feature</li>
            <li>Information submitted through our lawyer application form</li>
            <li>Usage data and analytics through cookies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and improve our services</li>
            <li>Connect you with divorce lawyers in your area</li>
            <li>Send confirmation emails for form submissions</li>
            <li>Analyze website usage to enhance user experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Information Sharing</h2>
          <p className="mb-4">We do not sell, trade, or rent your personal information. We may share your information with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service providers who assist in our operations</li>
            <li>Legal authorities when required by law</li>
            <li>Lawyers when you explicitly request contact</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Data Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Cookies and Tracking</h2>
          <p className="mb-4">
            We use cookies and similar tracking technologies to track activity on our website and hold certain information. This includes Google Analytics, Google AdSense, and Ahrefs analytics for website optimization.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Third-Party Services</h2>
          <p className="mb-4">Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites. Third-party services we use include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Google Maps for lawyer search functionality</li>
            <li>Google Analytics for website analytics</li>
            <li>Google AdSense for advertising</li>
            <li>Vercel for website hosting</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Lodge a complaint with a supervisory authority</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Children's Privacy</h2>
          <p className="mb-4">
            Our services are not directed to individuals under 18. We do not knowingly collect personal information from children under 18.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">9. Changes to This Policy</h2>
          <p className="mb-4">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the effective date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">10. Contact Us</h2>
          <p className="mb-4">If you have any questions about this privacy policy, please contact us at:</p>
          <ul className="list-none space-y-2">
            <li>Email: support@smartdivorcequestions.com</li>
            <li>Website: www.smartdivorcequestions.com</li>
          </ul>
        </section>
      </div>
    </div>
  );
}