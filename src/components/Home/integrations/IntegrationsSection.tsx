import React from "react";
import { integrations } from "./data";

const IntegrationsSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Tag */}
        <span className="inline-block px-3 py-1 text-[10px] sm:text-xs font-semibold bg-blue-100 text-[#0B6B50] rounded-full">
          INTEGRATIONS
        </span>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 sm:mt-6 font-['Bricolage_Grotesque']">
          Works With the Tools{" "}
          <span className="text-[#0B6B50]">
            You Already Use
          </span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 mt-8 sm:mt-12">

          {integrations.map((item, i) => (
            <div
              key={i}
              className="transition hover:shadow-md hover:border-[#0B6B50] border border-gray-100 rounded-xl bg-white p-4 sm:p-5 flex flex-col items-center justify-center"
            >

              {/* Logo */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-10 h-10 sm:w-9 sm:h-9 object-contain"
                />
              </div>

              {/* Name */}
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-700 font-medium text-center">
                {item.name}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default IntegrationsSection;