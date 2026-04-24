import { Check } from "lucide-react";
import React from "react";

interface Props {
  title: string;
  desc: string;
  points: string[];
  icon: React.ElementType;
}

const StepContent: React.FC<Props> = ({
  title,
  desc,
  points,
  icon: Icon,
}) => {
  return (
    <div className="shadow-sm border border-gray-100 rounded-xl bg-white">
      <div className="p-5 sm:p-6 lg:p-8">

        {/* Icon */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F3F7F5] rounded-xl flex items-center justify-center mb-4">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#0B6B50]" />
        </div>

        <h3 className="text-lg sm:text-xl font-semibold">
          {title}
        </h3>

        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          {desc}
        </p>

        {/* Points */}
        <div className="mt-5 space-y-3">
          {points.map((point, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-[#F6F9F8] border border-gray-200 rounded-lg p-2 sm:p-3"
            >
              <span className="w-5 h-5 sm:w-6 sm:h-6 bg-[#0B6B50] text-white flex items-center justify-center rounded-md">
                <Check size={12} />
              </span>
              <span className="text-xs sm:text-sm">
                {point}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default StepContent;