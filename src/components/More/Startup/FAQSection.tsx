import { useState } from "react";
import { Plus, X } from "lucide-react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is the Startup Program completely free?",
      answer:
        "Yes - completely free. No credit card required, no hidden charges, no 'free trial' that auto-charges. You get 6 months (180 days) of full Growth plan access at no cost. Meta's per-message charges still apply when you send campaigns, but the AyuChat platform itself is free.",
    },
    {
      question: "What happens after 6 months?",
      answer:
        "After 6 months, you can continue using the platform with startup-friendly pricing plans.",
    },
    {
      question: "How long does the approval process take?",
      answer: "Applications are typically reviewed within 24 hours.",
    },
    {
      question: "Can we apply as a pre-launch startup?",
      answer:
        "Yes, as long as you are actively building a product or preparing for launch.",
    },
    {
      question: "Do Meta's per-message charges still apply?",
      answer:
        "Yes, Meta's WhatsApp messaging charges apply based on usage.",
    },
  ];

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">

        {/* Badge */}
        <div className="text-center">
          <div className="inline-block bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50] px-4 py-1 rounded-full text-xs font-medium mb-4">
            FAQ
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-bricolage">
            Common <span className="text-[#0B6B50]">Questions</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="mt-10 sm:mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={index} className="border-b border-gray-200 pb-4">

                {/* Question */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <h3 className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full transition ${
                      isOpen
                        ? "bg-[#0B6B50] text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {isOpen ? <X size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {/* Answer */}
                {isOpen && (
                  <p className="text-gray-600 text-sm mt-4 leading-relaxed pr-6">
                    {faq.answer}
                  </p>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}