import React, { useState } from "react";

const faqs = [
  {
    question:
      "How is AyuChat different from regular WhatsApp or WhatsApp Business?",
    answer:
      "Regular WhatsApp limits you to manual, one-on-one messaging. AyuChat is built on Meta's official WhatsApp Business API, which means you can send bulk campaigns to thousands of contacts, build automated chatbots, manage a shared team inbox, and track delivery analytics - all with official Meta compliance.",
  },
  {
    question: "Will my messages be marked as spam?",
    answer:
      "No, AyuChat uses official WhatsApp Business APIs ensuring compliance and reducing spam risks when used correctly.",
  },
  {
    question: "What are Meta's per-message charges?",
    answer:
      "Meta charges per conversation category. These charges are separate from AyuChat pricing.",
  },
  {
    question: "How many messages can I send per day?",
    answer:
      "It depends on your WhatsApp Business API tier. Higher tiers allow more messages.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel anytime with no lock-in period.",
  },
  {
    question: "Do I need technical knowledge to set up AyuChat?",
    answer: "No, AyuChat is no-code and beginner-friendly.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F5F7F6] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-[#0B6B50] rounded-full">
            FAQ
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 sm:mt-6">
            Frequently Asked{" "}
            <span className="text-[#0B6B50]">Questions</span>
          </h2>
        </div>

        {/* Custom Accordion */}
        <div className="mt-8 sm:mt-12 space-y-3">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl px-4 sm:px-6"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full text-left py-4 text-sm sm:text-base font-semibold flex justify-between items-center"
              >
                {faq.question}
                <span className="ml-2">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="text-gray-600 text-sm sm:text-base leading-relaxed pb-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQSection;