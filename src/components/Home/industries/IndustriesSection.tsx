import React from "react";
import { industries } from "./data";

const IndustriesSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#F5F7F6]">
      <div className="max-w-7xl mx-auto text-center">

        {/* Tag */}
        <span className="inline-block px-3 py-2 text-[10px] sm:text-xs bg-[#E6F4EF] text-[#0B6B50] rounded-full font-semibold tracking-wide">
          BUILT FOR EVERY INDUSTRY
        </span>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 sm:mt-6 text-[#1C1C1C] font-['Bricolage_Grotesque']">
          One Platform.{" "}
          <span className="text-[#0B6B50]">Every Business.</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 lg:mt-14">

          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="text-left transition hover:shadow-md border border-gray-100 hover:border-gray-200 rounded-xl bg-white"
              >
                <div className="p-5 sm:p-6">

                  {/* Icon */}
                  <div className="mb-4 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-[#E6F4EF] text-[#0B6B50]">
                    <Icon size={20} className="sm:w-6 sm:h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-base sm:text-lg text-gray-900 font-['Bricolage_Grotesque']">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    {item.desc}
                  </p>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;