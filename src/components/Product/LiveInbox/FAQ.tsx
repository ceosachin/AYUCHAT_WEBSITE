import { useState } from "react";
import { Plus, X } from "lucide-react";

export default function FAQ() {
  const [active, setActive] = useState(0);

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

  const toggle = (index: number) => {
  setActive(active === index ? -1 : index);
};

  return (
    <section className="bg-[#f5f7f6] py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Top */}
        <div className="text-center mb-12">
          <span className="bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50] px-4 py-1 rounded-full text-xs font-medium">
            FAQ
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Bulk Campaign{" "}
            <span className="text-[#0B6B50]">
              Questions Answered
            </span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">

          {faqs.map((item, index) => (
            <div
              key={index}
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

                <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#0B6B50] text-white">
  {active === index ? (
    <X className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={3.5}/>
  ) : (
    <Plus className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={3.5}/>
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