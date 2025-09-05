import { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Advice Disclaimer | Smart Divorce Questions',
  description: 'Disclaimer regarding the informational content and advice provided on Smart Divorce Questions. Understand the nature and limitations of our educational resources.',
  path: '/advice-disclaimer',
});

export default function AdviceDisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Advice Disclaimer</h1>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
        <h2 className="text-xl font-bold text-yellow-800 mb-2">EDUCATIONAL PURPOSES ONLY</h2>
        <p className="text-yellow-700">
          All content on Smart Divorce Questions is provided for educational and informational purposes only. 
          The information presented should not be considered professional advice or a substitute for consultation 
          with qualified professionals.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Nature of Information Provided</h2>
          <p className="mb-4">
            Smart Divorce Questions provides general information about divorce processes, procedures, and 
            considerations. This includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>General questions to consider during divorce proceedings</li>
            <li>Overview of state divorce laws and procedures</li>
            <li>Common divorce-related topics and terminology</li>
            <li>General financial and custody considerations</li>
            <li>Resources and tools for divorce planning</li>
          </ul>
          <p className="mb-4 font-semibold">
            This information is intended to help you understand common issues and prepare for discussions 
            with qualified professionals, not to replace professional guidance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Not Professional Advice</h2>
          <p className="mb-4">
            <strong>THE CONTENT ON THIS WEBSITE DOES NOT CONSTITUTE:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Legal Advice:</strong> We are not attorneys and cannot provide legal counsel</li>
            <li><strong>Financial Advice:</strong> We are not financial advisors and cannot provide investment or tax advice</li>
            <li><strong>Medical or Mental Health Advice:</strong> We are not healthcare providers</li>
            <li><strong>Professional Counseling:</strong> We do not provide therapeutic or counseling services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Individual Circumstances Vary</h2>
          <p className="mb-4">
            Every divorce situation is unique. Factors that can significantly affect your situation include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Your specific state and local laws</li>
            <li>The complexity of your financial situation</li>
            <li>Whether children are involved</li>
            <li>The length of your marriage</li>
            <li>Individual health and employment circumstances</li>
            <li>Specific agreements or contracts you may have</li>
          </ul>
          <p className="mb-4">
            The general information we provide may not apply to your specific circumstances. Always consult 
            with appropriate professionals who can evaluate your individual situation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Accuracy and Completeness</h2>
          <p className="mb-4">
            While we strive to provide accurate and helpful information:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>We cannot guarantee the accuracy, completeness, or timeliness of all information</li>
            <li>Laws and regulations change frequently and vary by jurisdiction</li>
            <li>Information may become outdated between updates</li>
            <li>General information cannot address all possible scenarios or exceptions</li>
            <li>Unintentional errors or omissions may occur</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Your Responsibility</h2>
          <p className="mb-4">
            By using this website, you acknowledge that:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>You are responsible for verifying all information with qualified professionals</li>
            <li>You will not rely solely on this website for making important decisions</li>
            <li>You understand that general information is not a substitute for professional advice</li>
            <li>You will seek appropriate professional help for your specific situation</li>
            <li>You assume all risks associated with using the information provided</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Recommended Actions</h2>
          <p className="mb-4">
            We strongly recommend that you:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Consult with a qualified divorce attorney</strong> in your jurisdiction for legal advice</li>
            <li><strong>Work with a certified financial planner</strong> for financial planning and tax implications</li>
            <li><strong>Seek counseling or therapy</strong> for emotional support during this difficult time</li>
            <li><strong>Verify all information</strong> with current, authoritative sources</li>
            <li><strong>Document everything</strong> and maintain proper records</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Questions and Checklists</h2>
          <p className="mb-4">
            The questions and checklists provided on our website are:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>General starting points for your consideration</li>
            <li>Not exhaustive or complete for every situation</li>
            <li>Not substitutes for professional consultation</li>
            <li>Meant to help you prepare for meetings with professionals</li>
            <li>Subject to modification based on your specific circumstances</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">State Law Information</h2>
          <p className="mb-4">
            Information about state-specific divorce laws:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Is provided as a general overview only</li>
            <li>May not reflect the most recent changes in law</li>
            <li>Cannot cover all exceptions and special circumstances</li>
            <li>Should be verified with current state statutes and regulations</li>
            <li>Must be interpreted by a qualified attorney in that jurisdiction</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Financial Information</h2>
          <p className="mb-4">
            Any financial information, calculations, or tools provided:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Are for illustrative purposes only</li>
            <li>Should not be relied upon for financial decisions</li>
            <li>May not reflect your actual financial situation</li>
            <li>Do not consider all relevant factors or tax implications</li>
            <li>Should be reviewed by qualified financial professionals</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">No Guarantee of Outcomes</h2>
          <p className="mb-4 font-semibold">
            WE DO NOT GUARANTEE ANY PARTICULAR OUTCOME OR RESULT FROM USING THE INFORMATION ON THIS WEBSITE.
          </p>
          <p className="mb-4">
            Divorce outcomes depend on numerous factors beyond the scope of general information, including 
            but not limited to judge discretion, negotiation skills, specific evidence, and changing circumstances.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">External Resources</h2>
          <p className="mb-4">
            References to external resources, books, or websites:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Are provided for informational purposes only</li>
            <li>Do not constitute endorsements</li>
            <li>May contain information we cannot verify</li>
            <li>Should be evaluated independently</li>
            <li>May have their own disclaimers and terms of use</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
          <p className="mb-4 font-semibold">
            BY USING THIS WEBSITE, YOU AGREE THAT SMART DIVORCE QUESTIONS SHALL NOT BE LIABLE FOR 
            ANY DAMAGES, LOSSES, OR CONSEQUENCES ARISING FROM YOUR USE OF OR RELIANCE ON THE 
            INFORMATION PROVIDED.
          </p>
          <p className="mb-4">
            This includes but is not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Financial losses</li>
            <li>Legal consequences</li>
            <li>Emotional distress</li>
            <li>Missed opportunities</li>
            <li>Incorrect decisions</li>
            <li>Any other direct or indirect damages</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Updates and Changes</h2>
          <p className="mb-4">
            We reserve the right to update, modify, or remove content at any time without notice. 
            It is your responsibility to check for updates and verify information currency.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-4">
            If you have questions about this disclaimer or the nature of our content, please contact us at:
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
            By continuing to use this website, you acknowledge that you have read, understood, and agree 
            to this Advice Disclaimer.
          </p>
        </section>
      </div>
    </div>
  );
}