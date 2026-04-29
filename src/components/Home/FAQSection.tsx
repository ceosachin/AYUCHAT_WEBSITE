import React, { useState } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question:
      "How is AyuChat different from regular WhatsApp or WhatsApp Business?",
    answer:
      "Regular WhatsApp limits you to manual, one-on-one messaging. AyuChat is built on Meta's official WhatsApp Business API...",
  },
  {
    question: "Will my messages be marked as spam?",
    answer:
      "No, AyuChat uses official WhatsApp Business APIs ensuring compliance.",
  },
  {
    question: "What are Meta's per-message charges?",
    answer:
      "Meta charges per conversation category. These charges are separate.",
  },
  {
    question: "How many messages can I send per day?",
    answer:
      "It depends on your WhatsApp Business API tier.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel anytime.",
  },
  {
    question: "Do I need technical knowledge to set up AyuChat?",
    answer: "No, it's beginner-friendly.",
  },
];

const FAQSection: React.FC = () => {
  const [active, setActive] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-[#F5F7F6] py-12 px-4">
      <div className="max-w-3xl mx-auto">

        <div className="text-center">
          <span className="px-3 py-2 text-xs font-semibold bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50] rounded-full">
            FAQ
          </span>

          <h2 className="text-3xl font-bold mt-4 font-['Bricolage_Grotesque']">
            Frequently Asked <span className="text-[#0B6B50]">Questions</span>
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl px-5"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center py-4 font-semibold text-left font-['Bricolage_Grotesque']"
              >
                {faq.question}

                <div
                  className={`w-7 h-7 flex items-center justify-center rounded-full ${
                    active === index
                      ? "bg-[#0B6B50] text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {active === index ? (
                    <X size={16} />
                  ) : (
                    <Plus size={16} />
                  )}
                </div>
              </button>

              {/* Answer */}
              {active === index && (
                <div className="text-gray-600 pb-4 text-sm">
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