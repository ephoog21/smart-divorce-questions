import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import FAQAccordion from '@/components/FAQAccordion'
import { createMetadata } from '@/lib/metadata'

export const metadata: Metadata = createMetadata({
  title: 'Divorce FAQ | Smart Divorce Questions',
  description: 'Get comprehensive answers to frequently asked divorce questions about custody arrangements, finances, legal timelines, and attorney costs.',
  path: '/faq',
})

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does divorce take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uncontested divorces typically take 2-6 months, while contested divorces can take 1-2 years or more depending on complexity and court schedules."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a lawyer to file for divorce?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You're not required to have a lawyer, but it's recommended for complex cases involving children, significant assets, or disputes. Simple uncontested divorces may be handled pro se."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between legal and physical custody?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Legal custody refers to decision-making authority for the child's education, healthcare, and welfare. Physical custody refers to where the child lives and spends time."
      }
    },
    {
      "@type": "Question",
      "name": "Who pays attorney fees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generally, each spouse pays their own attorney fees. However, courts may order one spouse to pay the other's fees in cases of significant income disparity or bad faith conduct."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if we can't agree on property division?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If spouses can't agree, the court will divide property according to state law - either community property (50/50 split) or equitable distribution (fair but not necessarily equal)."
      }
    }
  ]
}

export default function FAQ() {
  const faqs = [
    {
      category: "Timeline & Process",
      questions: [
        {
          q: "How long does divorce take?",
          a: "Uncontested divorces typically take 2-6 months, while contested divorces can take 1-2 years or more depending on complexity and court schedules. Most states have mandatory waiting periods ranging from 30 days to 6 months."
        },
        {
          q: "What are the basic steps in a divorce?",
          a: "The process typically involves: 1) Filing a petition, 2) Serving your spouse, 3) Financial disclosure, 4) Negotiating agreements or going to trial, 5) Finalizing the decree. Each state has specific requirements and timelines."
        },
        {
          q: "Can I get divorced if my spouse doesn't want to?",
          a: "Yes, divorce doesn't require both parties' agreement. If your spouse doesn't respond to divorce papers or contest the divorce, you may be able to get a default judgment."
        }
      ]
    },
    {
      category: "Legal Representation",
      questions: [
        {
          q: "Do I need a lawyer to file for divorce?",
          a: "You're not required to have a lawyer, but it's recommended for complex cases involving children, significant assets, or disputes. Simple uncontested divorces may be handled pro se (representing yourself)."
        },
        {
          q: "Who pays attorney fees?",
          a: "Generally, each spouse pays their own attorney fees. However, courts may order one spouse to pay the other's fees in cases of significant income disparity or bad faith conduct."
        },
        {
          q: "How much do divorce lawyers cost?",
          a: "Hourly rates typically range from $200-$500. Total costs vary widely: uncontested divorces may cost $1,000-$5,000, while contested cases can exceed $15,000 per spouse."
        }
      ]
    },
    {
      category: "Child Custody",
      questions: [
        {
          q: "What's the difference between legal and physical custody?",
          a: "Legal custody refers to decision-making authority for the child's education, healthcare, and welfare. Physical custody refers to where the child lives and spends time."
        },
        {
          q: "What factors do courts consider for custody?",
          a: "Courts focus on the child's best interests, considering factors like: parent-child relationships, each parent's ability to provide care, child's preferences (if age-appropriate), stability of home environments, and any history of abuse."
        },
        {
          q: "Can custody arrangements be changed later?",
          a: "Yes, custody can be modified if there's a significant change in circumstances affecting the child's best interests. This requires court approval and usually involves showing the change is substantial and ongoing."
        }
      ]
    },
    {
      category: "Property & Finances",
      questions: [
        {
          q: "What happens if we can't agree on property division?",
          a: "If spouses can't agree, the court will divide property according to state law - either community property (50/50 split) or equitable distribution (fair but not necessarily equal)."
        },
        {
          q: "Is property acquired before marriage divided?",
          a: "Generally no. Property owned before marriage is typically considered separate property. However, if it was commingled with marital property or increased in value during marriage, it may become subject to division."
        },
        {
          q: "How is spousal support determined?",
          a: "Courts consider factors like: length of marriage, income disparity, earning capacity, age and health, contributions to the marriage, and standard of living. Some states use formulas while others give judges discretion."
        }
      ]
    },
    {
      category: "Special Situations",
      questions: [
        {
          q: "What if my spouse is hiding assets?",
          a: "Asset hiding is illegal and courts take it seriously. You can request financial discovery, hire a forensic accountant, and the court may impose penalties on the hiding spouse including awarding you a larger share of assets."
        },
        {
          q: "Can I get divorced if we're separated but not legally?",
          a: "Yes, legal separation isn't required for divorce in most states. However, the date of separation may be important for determining which assets and debts are marital vs. separate property."
        },
        {
          q: "What happens to joint debt in divorce?",
          a: "Joint debt is typically divided between spouses in the divorce decree. However, creditors can still hold both parties responsible regardless of the court order. It's best to pay off or transfer joint debts when possible."
        }
      ]
    }
  ]

  return (
    <>
      <JsonLd data={faqData} />
      <div className="bg-cream-50 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              Divorce FAQ
            </h1>
            
            <p className="text-xl text-navy-700 mb-12 leading-relaxed">
              Get answers to the most common questions about divorce, from the legal process to custody and finances.
            </p>

            <FAQAccordion categories={faqs} />

            <div className="mt-16 bg-teal-50 border border-teal-200 p-8 rounded-lg">
              <h2 className="font-serif text-2xl font-semibold text-teal-900 mb-4">
                Need More Specific Advice?
              </h2>
              <p className="text-teal-800 mb-6">
                Every divorce is different. While this FAQ covers common questions, your situation may have unique factors that require personalized legal advice.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-teal-600 font-semibold mr-2">•</span>
                  <span className="text-teal-700">Consult with a family law attorney in your state</span>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-600 font-semibold mr-2">•</span>
                  <span className="text-teal-700">Consider mediation for collaborative solutions</span>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-600 font-semibold mr-2">•</span>
                  <span className="text-teal-700">Keep detailed records of all important documents</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}