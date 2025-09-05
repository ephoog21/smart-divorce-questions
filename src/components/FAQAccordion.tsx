'use client'

import { useState } from 'react'

interface FAQItem {
  q: string
  a: string
}

interface FAQCategory {
  category: string
  questions: FAQItem[]
}

interface FAQAccordionProps {
  categories: FAQCategory[]
}

function AccordionItem({ question, answer, isOpen, toggle }: {
  question: string
  answer: string
  isOpen: boolean
  toggle: () => void
}) {
  return (
    <div className="border border-stone-200 rounded-lg overflow-hidden">
      <button
        onClick={toggle}
        className="w-full px-6 py-4 text-left bg-white hover:bg-stone-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-inset"
        aria-expanded={isOpen}
        role="button"
      >
        <div className="flex justify-between items-center">
          <h3 className="font-serif text-lg font-semibold text-navy-900 pr-4">
            {question}
          </h3>
          <svg
            className={`w-5 h-5 text-teal-600 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2">
          <p className="text-slate-700 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  )
}

function CategorySection({ category, questions }: { category: string; questions: FAQItem[] }) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="mb-12">
      <h2 className="font-serif text-3xl font-bold text-navy-900 mb-8 border-b-2 border-teal-600 pb-3">
        {category}
      </h2>
      
      <div className="space-y-4">
        {questions.map((faq, index) => (
          <AccordionItem
            key={index}
            question={faq.q}
            answer={faq.a}
            isOpen={openItems.includes(index)}
            toggle={() => toggleItem(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default function FAQAccordion({ categories }: FAQAccordionProps) {
  return (
    <div className="space-y-12">
      {categories.map((category, categoryIndex) => (
        <CategorySection
          key={categoryIndex}
          category={category.category}
          questions={category.questions}
        />
      ))}
    </div>
  )
}