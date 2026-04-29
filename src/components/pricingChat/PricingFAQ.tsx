import React, { useState } from "react";

/* ================= DATA ================= */

const faqData = [
  {
    question: "Do I need a credit card for the free trial?",
    answer:
      "No credit card required for the 14-day free trial. You get full access to the Growth plan features during the trial. Your card is only needed when you choose to upgrade to a paid plan at the end of the trial.",
  },
  {
    question: "Can I switch plans at any time?",
    answer:
      "Yes. You can upgrade or downgrade at any time from your account settings. Upgrades are effective immediately and prorated. Downgrades take effect at the start of your next billing cycle. There are no penalties for switching plans.",
  },
  {
    question: "How does the yearly discount work?",
    answer:
      "Paying annually saves you 20% compared to month-to-month billing. Starter becomes ₹799/mo, Growth becomes ₹2,399/mo, and Scale becomes ₹5,599/mo. Annual plans are billed upfront for the full year and are non-refundable after the first 30 days.",
  },
  {
    question: "Are Meta's per-message charges included?",
    answer:
      "No — Meta charges separately. Marketing messages cost ₹0.25 each, Utility ₹0.20, and Authentication ₹0.19. These are billed by Meta directly to the payment method in your Meta Business Manager. AyuChat shows you an estimate of these charges in your campaign analytics so there are no surprises.",
  },
  {
    question: "What happens if I cancel?",
    answer:
      "You can cancel at any time with no cancellation fees. Your account stays active until the end of your current billing period. All your data (contacts, campaigns, templates) remains accessible for 30 days after cancellation, giving you time to export everything you need.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Yes. Monthly plans can be refunded within 7 days of payment if you're not satisfied. Annual plans can be refunded within 30 days of purchase. After these windows, charges are non-refundable. Please contact support@ayuchat.in to request a refund.",
  },
];

/* ================= MAIN ================= */

const PricingFAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">

      {/* Badge */}
      <div className="flex justify-center mb-4">
        <span className="bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50] px-4 py-1 rounded-full text-xs font-semibold tracking-wide">
          PRICING FAQ
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-5xl font-bold text-center text-[#1C1C1C] font-['Bricolage_Grotesque']">
        Pricing <span className="text-[#0B6B50]">Questions Answered</span>
      </h2>

      {/* FAQ */}
      <div className="mt-12 divide-y divide-gray-200">

        {faqData.map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={index}
              className="py-6 cursor-pointer"
              onClick={() => toggle(index)}
            >
              {/* Question */}
              <div className="flex justify-between items-center">
                <h4
                  className={`text-lg font-medium font-['Bricolage_Grotesque'] ${
                    isOpen ? "text-[#0B6B50]" : "text-[#1C1C1C]"
                  }`}
                >
                  {item.question}
                </h4>

                {/* Icon */}
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full font-bold  border transition ${
                    isOpen
                      ? "bg-[#0B6B50] text-white border-[#0B6B50] "
                      : "text-[#0B6B50] border-gray-300"
                  }`}
                >
                  {isOpen ? "×" : "+"}
                </div>
              </div>

              {/* Answer */}
              {isOpen && (
                <p className="mt-4 text-gray-600 leading-relaxed text-[15px] max-w-3xl">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default PricingFAQ;