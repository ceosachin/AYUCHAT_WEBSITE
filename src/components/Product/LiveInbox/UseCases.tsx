import {
  Building2,
  Hospital,
  Store,
  Briefcase,
} from "lucide-react";

export default function UseCases() {
  return (
    <section className="py-24 px-6 bg-[#f6f8f7]">
      <div className="max-w-7xl mx-auto text-center">

        {/* Badge */}
        <span className="inline-block bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50] px-4 py-1 rounded-full text-sm font-medium">
          USE CASES
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
          How Businesses Use This <br />
          <span className="text-[#0B6B50]">Feature to Grow</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-left">

          <Card
            icon={Building2}
            title="Digital Marketing Agencies"
            desc="Manage 10, 20, 50 client businesses from one dashboard. Each client sees only their own data — you see everything."
            highlight="Used by agencies managing 20+ clients"
          />

          <Card
            icon={Hospital}
            title="Hospital Groups"
            desc="One account for multiple hospital branches — each with its own team, WhatsApp number, campaigns, and patient data."
            highlight="↑ 70% admin efficiency for hospital groups"
          />

          <Card
            icon={Store}
            title="Multi-Brand Retailers"
            desc="Run WhatsApp marketing for your clothing brand, your home furnishings brand, and your food brand — all separately, all from one login."
            highlight="↑ 3x faster campaign management"
          />

          <Card
            icon={Briefcase}
            title="Enterprise Franchises"
            desc="Each franchise location gets its own workspace with local team members and local WhatsApp number — managed by headquarters."
            highlight="Used by franchise businesses with 15+ locations"
          />

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
    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">

      {/* Icon */}
      <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-green-50 text-[#0B6B50]">
        <Icon size={22} />
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg mb-2 text-gray-900">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {desc}
      </p>

      {/* Highlight */}
      <p className="text-[#0B6B50] text-sm font-medium mt-4">
        {highlight}
      </p>
    </div>
  );
}