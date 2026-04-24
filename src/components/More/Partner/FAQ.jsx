import { useState } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      q: "When do I receive my commission payments?",
      a: "Commissions are paid on the 1st of every month via bank transfer (NEFT/RTGS). Minimum payout is ₹1,000. If below, it rolls over.",
    },
    {
      q: "Do I earn commission if a client upgrades their plan?",
      a: "Yes, you earn commissions on upgraded plans as well.",
    },
    {
      q: "How long does a referral attribution last?",
      a: "Referral attribution lasts for the lifetime of the customer.",
    },
    {
      q: "Can I refer businesses I'm already working with?",
      a: "Yes, as long as they are new to the platform.",
    },
    {
      q: "Is there a limit to how much I can earn?",
      a: "No limits. The more you refer, the more you earn.",
    },
  ];

  return (
    <section className="py-24 px-6 ">
      <div className="max-w-4xl mx-auto text-center">

        {/* Badge */}
        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
          FAQ
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Partner Program{" "}
          <span className="text-green-800">Questions</span>
        </h2>

        {/* FAQ List */}
        <div className="mt-12 text-left space-y-4">

          {faqs.map((item, i) => {
            const isOpen = activeIndex === i;

            return (
              <div
                key={i}
                className="border-b pb-4 cursor-pointer"
                onClick={() =>
                  setActiveIndex(isOpen ? null : i)
                }
              >
                {/* Question */}
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">
                    {item.q}
                  </h3>

                  <span
                    className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold transition 
                    ${
                      isOpen
                        ? "bg-green-800 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {isOpen ? "×" : "+"}
                  </span>
                </div>

                {/* Answer */}
                {isOpen && (
                  <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}