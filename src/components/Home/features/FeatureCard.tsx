import React from "react";

interface Props {
  title: string;
  desc: string;
  color: string;
  icon: React.ElementType;
  badge?: string;
}

const FeatureCard: React.FC<Props> = ({
  title,
  desc,
  color,
  icon: Icon,
  badge,
}) => {
  return (
    <div className="p-6 sm:p-8 bg-white border border-gray-100  hover:bg-[#F8FAF9] transition shadow-sm">
      
      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-lg ${color} mb-4 flex items-center justify-center text-[#0B6B50]`}
      >
        <Icon size={20} strokeWidth={1.8} />
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 mt-2 text-sm leading-relaxed">
        {desc}
      </p>

      {/* Badge */}
      {badge && (
        <span className="inline-block mt-4 px-3 py-1 text-xs font-medium bg-blue-100 text-[#0B6B50] rounded-full">
          {badge}
        </span>
      )}
    </div>
  );
};

export default FeatureCard;