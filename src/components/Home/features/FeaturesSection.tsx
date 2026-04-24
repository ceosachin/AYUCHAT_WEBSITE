import React from "react";
import FeatureHighlight from "./FeatureHighlight";
import FeatureGrid from "./FeatureGrid";

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Tag */}
        <span className="inline-block px-3 py-1 text-[10px] sm:text-xs font-semibold bg-blue-100 text-[#0B6B50] rounded-full">
          PLATFORM FEATURES
        </span>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 leading-tight">
          Everything You Need <br />
          <span className="text-[#0B6B50]">in One Place</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-3 sm:mt-4 max-w-xl text-sm sm:text-base">
          Stop paying for five different tools. AyuChat replaces your bulk
          messaging, chatbot, CRM, and analytics — all under one roof.
        </p>

        {/* Highlight + Grid */}
        <div className="mt-8 sm:mt-12 overflow-hidden shadow-sm border border-gray-100 rounded-xl bg-white">
          <div className="p-0">
            <FeatureHighlight />
            <FeatureGrid />
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;