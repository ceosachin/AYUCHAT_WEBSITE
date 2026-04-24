import React from "react";
import { comparisonData } from "./data";
import { Check } from "lucide-react";

const ComparisonTable: React.FC = () => {
  return (
    <section className="bg-[#F5F7F6] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Tag */}
        <span className="inline-block px-3 py-1 text-[10px] sm:text-xs bg-blue-100 text-[#0B6B50] rounded-full font-semibold">
          AYUCHAT VS COMPETITORS
        </span>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mt-3">
          Why Businesses Choose{" "}
          <span className="text-[#0B6B50]">AyuChat</span>
        </h2>

        <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm sm:text-base">
          See how AyuChat compares to other WhatsApp Business platforms
          in the Indian market.
        </p>

        {/* Table Wrapper */}
        <div className="mt-8 sm:mt-12 overflow-hidden border border-gray-100 rounded-xl bg-white">

          {/* Scroll for mobile */}
          <div className="overflow-x-auto">

            <div className="min-w-[600px]">

              {/* Header */}
              <div className="grid grid-cols-4 text-left border-b border-gray-200 bg-white">
                <div className="p-4 sm:p-5 font-medium text-gray-600">
                  Feature
                </div>

                <div className="p-4 sm:p-5 font-semibold text-green-700 bg-[#E8F3EF] text-center">
                  AyuChat
                </div>

                <div className="p-4 sm:p-5 font-medium text-gray-600 text-center">
                  AiSensy
                </div>

                <div className="p-4 sm:p-5 font-medium text-gray-600 text-center">
                  Interakt
                </div>
              </div>

              {/* Rows */}
              {comparisonData.map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-4 border-b border-gray-200 last:border-none bg-white"
                >
                  <div className="p-4 sm:p-5 text-gray-800 text-sm sm:text-base">
                    {item.feature}
                  </div>

                  <div className="p-4 sm:p-5 text-center bg-[#F0F7F4]">
                    {item.ayuchat ? (
                      <Check className="mx-auto text-green-700" size={16} />
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </div>

                  <div className="p-4 sm:p-5 text-center">
                    {item.aisensy ? (
                      <Check className="mx-auto text-green-700" size={16} />
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </div>

                  <div className="p-4 sm:p-5 text-center">
                    {item.interakt ? (
                      <Check className="mx-auto text-green-700" size={16} />
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </div>
                </div>
              ))}

              {/* Pricing Row */}
              <div className="grid grid-cols-4 bg-white">
                <div className="p-4 sm:p-5 font-semibold text-gray-800">
                  Starting Price
                </div>

                <div className="p-4 sm:p-5 text-center bg-[#F0F7F4] font-bold text-green-700">
                  ₹999/mo
                </div>

                <div className="p-4 sm:p-5 text-center text-gray-600">
                  ₹1,599/mo
                </div>

                <div className="p-4 sm:p-5 text-center text-gray-600">
                  ₹2,499/mo
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ComparisonTable;