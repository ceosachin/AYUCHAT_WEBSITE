import React, { useState } from "react";
import { pricingPlans } from "./data";
import { Check } from "lucide-react";

const PricingSection: React.FC = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Tag */}
        <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50] rounded-full">
          PRICING
        </span>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-['Bricolage_Grotesque'] font-bold mt-4 sm:mt-6">
          Plans That Scale With <br />
          <span className="text-[#0B6B50]">Your Business</span>
        </h2>

        <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm sm:text-base">
          Start free for 14 days. No credit card required. Upgrade, <br /> downgrade, or cancel anytime. All plans include Meta WhatsApp <br /> API access.
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 flex-wrap">
          <span className="text-gray-600 text-sm">Monthly</span>

          <button
            onClick={() => setYearly(!yearly)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
              yearly ? "bg-[#0B6B50]" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full transform transition ${
                yearly ? "translate-x-6" : ""
              }`}
            />
          </button>

          <span className="text-gray-600 text-sm">Yearly</span>

          <span className="text-xs bg-blue-100 text-[#0B6B50] px-2 py-1 rounded-full">
            Save 20%
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 sm:mt-14">

          {pricingPlans.map((plan, i) => {
            const yearlyPrices = {
              999: 799,
              2999: 2399,
              6999: 5599,
            };

            const price = yearly
              ? yearlyPrices[plan.price as keyof typeof yearlyPrices]
              : plan.price;

            return (
              <div
  key={i}
  className={`relative text-left transition border rounded-2xl p-6 sm:p-8 bg-white ${
    plan.popular
      ? "border-[#0B6B50] shadow-md"
      : "border-gray-200"
  }`}
>

  {/* Most Popular */}
  {plan.popular && (
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0B6B50] text-white text-xs px-4 py-1 rounded-full">
      Most Popular
    </div>
  )}

  {/* Plan Name */}
  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">
    {plan.name}
  </p>

  {/* Price */}
  <h3 className="text-4xl sm:text-5xl font-bold font-['Bricolage_Grotesque'] mt-3 text-[#0F1F1B]">
    ₹{price.toLocaleString()}
  </h3>

  <p className="text-sm text-gray-500 mt-1">
    per month, per workspace
  </p>

  {/* Description */}
  <p className="text-gray-600 mt-4 text-sm leading-relaxed">
    {plan.desc}
  </p>

  {/* CTA Button */}
  <button
    className={`w-full mt-6 py-3 rounded-xl font-semibold transition ${
      plan.popular
        ? "bg-[#0B6B50] text-white hover:bg-[#09543d]"
        : "border border-gray-300 text-gray-900 hover:bg-gray-50"
    }`}
  >
    Start Free Trial
  </button>

  {/* Divider */}
  <div className="my-6 h-px bg-gray-200" />

  {/* Section Title */}
  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
    {plan.popular
      ? "Everything in Starter, plus"
      : "What's included"}
  </p>

  {/* Features */}
  <ul className="space-y-3 text-sm">
    {plan.features.map((f, idx) => (
      <li key={idx} className="flex items-center gap-3">
        <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
          <Check className="w-3 h-3 text-green-700" />
        </span>
        {f}
      </li>
    ))}

    {plan.disabled.map((f, idx) => (
      <li key={idx} className="flex items-center gap-3 text-gray-400">
        <span className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs">
          ✓
        </span>
        {f}
      </li>
    ))}
  </ul>
</div>
            );
          })}

        </div>

        {/* Footer */}
        <p className="text-gray-500 text-xs sm:text-sm mt-8 sm:mt-10">
          All plans include Meta WhatsApp API access. Meta charges per message separately. Cancel anytime.
        </p>

      </div>
    </section>
  );
};

export default PricingSection;