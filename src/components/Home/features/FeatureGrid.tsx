import React from "react";
import { features } from "./data";
import FeatureCard from "./FeatureCard";

const FeatureGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">

      {features.map((item, index) => (
        <FeatureCard key={index} {...item} />
      ))}

      {/* Optional last box */}
      <div className="hidden sm:block bg-[#DDE7E4]" />

    </div>
  );
};

export default FeatureGrid;