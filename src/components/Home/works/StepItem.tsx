import React from "react";

interface Props {
  step: number;
  title: string;
  desc: string;
  active: boolean;
  onClick: () => void;
}

const StepItem: React.FC<Props> = ({
  step,
  title,
  desc,
  active,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`p-4 sm:p-5 rounded-xl cursor-pointer transition ${
        active
          ? "bg-white shadow-sm border border-gray-200"
          : "hover:bg-white/60"
      }`}
    >
      <div className="flex items-start gap-3 sm:gap-4">

        {/* Number */}
        <div
          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center font-bold text-sm ${
            active ? "bg-[#0B6B50] text-white" : "bg-gray-200"
          }`}
        >
          {String(step).padStart(2, "0")}
        </div>

        {/* Content */}
        <div>
          <h4
            className={`text-sm sm:text-base font-medium font-['Bricolage_Grotesque'] ${
              active ? "text-[#0B6B50]" : ""
            }`}
          >
            {title}
          </h4>

          {active && (
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              {desc}
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default StepItem;