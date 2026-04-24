import { useState } from "react";
import { Plus, X } from "lucide-react";

export default function CommonFAQ() {
  const [active, setActive] = useState<number | null>(0);

  const faqs = [
    {
      q: "How is automation different from bulk campaigns?",
      a: "Bulk campaigns are one-time broadcasts you send manually to a selected audience. Automation flows run continuously in the background - triggered individually for each contact when a specific event happens. A campaign sends to 1,000 people at once. An automation sends 1,000 individual personalized sequences over time, one triggered per new contact.",
    },
    {
      q: "Can one contact be in multiple automation flows simultaneously?",
      a: "Yes. A contact can run through multiple active flows at the same time - for example, a welcome sequence AND a product education sequence AND a loyalty program sequence simultaneously. Each flow tracks its own state for each contact independently.",
    },
    {
      q: "What triggers are available?",
      a: "Current trigger types: New contact created, Keyword received, Button/list item tapped, Tag added to contact, Form submitted, Campaign replied, Webhook received, Scheduled (date/time-based). New trigger types are added regularly based on customer feedback.",
    },
    {
      q: "Can I stop or pause an automation for a specific contact?",
      a: "Yes. You can manually remove a contact from any active automation session, or add a condition in the flow that exits them if a certain event happens (like replying, purchasing, or becoming a customer).",
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
          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs font-semibold inline-block">
            FAQ
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Common{" "}
            <span className="text-green-700">
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