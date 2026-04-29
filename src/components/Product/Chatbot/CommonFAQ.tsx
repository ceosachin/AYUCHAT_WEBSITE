import { useState } from "react";
import { Plus, X } from "lucide-react";

export default function CommonFAQ() {
  // allow null instead of -1 (cleaner)
  const [active, setActive] = useState<number | null>(0);

  const faqs = [
    {
      q: "How long does it take to build a WhatsApp chatbot?",
      a: "Most businesses have their first working chatbot live in under 30 minutes using AyuChat's visual builder. The canvas is drag-and-drop — no technical knowledge needed.",
    },
    {
      q: "Can the chatbot collect payments?",
      a: "Yes, chatbots can integrate payment links and collect payments directly within WhatsApp conversations.",
    },
    {
      q: "What happens when the chatbot can't answer?",
      a: "The chatbot can automatically transfer the conversation to a human agent or provide fallback responses.",
    },
    {
      q: "Can I build multiple chatbots for different purposes?",
      a: "Yes, you can create multiple bots for different workflows like support, sales, bookings, etc.",
    },
  ];

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Top */}
        <div className="text-center mb-12">
          <span className="bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50] px-4 py-2 rounded-full text-xs font-semibold inline-block">
            FAQ
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Common{" "}
            <span className="text-[#0B6B50]">
              Questions Answered
            </span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">

          {faqs.map((item, index) => (
            <div
              key={item.q}
              className="border-b border-gray-300 pb-4"
            >
              {/* Question */}
              <div
                onClick={() => toggle(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="font-semibold text-gray-900">
                  {item.q}
                </h3>

                <div
                  className={`w-7 h-7 flex items-center justify-center rounded-full transition ${
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
              </div>

              {/* Answer */}
              {active === index && (
                <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                  {item.a}
                </p>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}