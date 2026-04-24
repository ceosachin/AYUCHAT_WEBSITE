import { useState } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    q: "How is AyuChat different from other bulk WhatsApp senders?",
    a: "AyuChat uses Meta's official WhatsApp Cloud API — meaning your messages go through the same infrastructure as any normal WhatsApp message. Unofficial tools violate policies and risk bans. With AyuChat, you get higher delivery, safety, and compliance.",
  },
  {
    q: "Will my customers be annoyed by bulk messages?",
    a: "No. Messages are sent only to opted-in users and are highly personalized, making them relevant and useful.",
  },
  {
    q: "How many messages can I send per day?",
    a: "Message limits depend on your WhatsApp Business tier, but AyuChat automatically manages sending within limits.",
  },
  {
    q: "What is the cost per message?",
    a: "Meta charges per conversation. Pricing varies by country and message category.",
  },
  {
    q: "Can I send images, videos, and documents?",
    a: "Yes. You can send multimedia messages including images, videos, documents, and buttons.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-[#f5f7f6] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-3 py-1 text-xs sm:text-sm font-semibold bg-green-100 text-green-700 rounded-full">
            FAQ
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 sm:mt-6">
            Bulk Campaign{" "}
            <span className="text-green-700">
              Questions Answered
            </span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">

          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl px-4 sm:px-6 py-4"
            >
              {/* Question */}
              <div
                onClick={() => toggle(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                  {item.q}
                </h3>

                <div
                  className={`w-7 h-7 flex items-center justify-center rounded-full ${
                    active === index
                      ? "bg-green-700 text-white"
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
                <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
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