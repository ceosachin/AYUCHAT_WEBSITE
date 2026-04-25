import {
  Building2,
  Hospital,
  Store,
  Briefcase,
} from "lucide-react";
import React from "react";

export default function UseCases() {
  const useCases = [
    {
      icon: Building2,
      title: "Digital Marketing Agencies",
      desc: "Manage 10, 20, 50 client businesses from one dashboard. Each client sees only their own data — you see everything.",
      highlight: "Used by agencies managing 20+ clients",
    },
    {
      icon: Hospital,
      title: "Hospital Groups",
      desc: "One account for multiple hospital branches — each with its own team, WhatsApp number, campaigns, and patient data.",
      highlight: "↑ 70% admin efficiency for hospital groups",
    },
    {
      icon: Store,
      title: "Multi-Brand Retailers",
      desc: "Run WhatsApp marketing for your clothing brand, your home furnishings brand, and your food brand — all separately, all from one login.",
      highlight: "↑ 3x faster campaign management",
    },
    {
      icon: Briefcase,
      title: "Enterprise Franchises",
      desc: "Each franchise location gets its own workspace with local team members and local WhatsApp number — managed by headquarters.",
      highlight: "Used by franchise businesses with 15+ locations",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-[#f6f8f7]">
      <div className="max-w-7xl mx-auto text-center">

        {/* Badge */}
        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 text-xs sm:text-sm rounded-full font-medium">
          USE CASES
        </span>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 sm:mt-6 leading-tight">
          How Businesses Use This <br />
          <span className="text-green-600">Feature to Grow</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 text-left">
          {useCases.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

type CardProps = {
  icon: React.ElementType;
  title: string;
  desc: string;
  highlight: string;
};

function Card({ icon: Icon, title, desc, highlight }: CardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 hover:shadow-md hover:border-green-500 transition duration-200">

      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-green-700 mb-4">
        <Icon size={22} />
      </div>

      {/* Title */}
      <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
        {desc}
      </p>

      {/* Highlight */}
      <p className="text-green-600 text-xs sm:text-sm font-medium mt-4">
        {highlight}
      </p>
    </div>
  );
}