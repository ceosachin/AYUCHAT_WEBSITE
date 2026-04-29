// components/about/Values.tsx

import {
  Target,
  Lock,
  Zap,
  MapPin,
  PencilRuler,
  Handshake,
} from "lucide-react";

type Value = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const values: Value[] = [
  {
    title: "Customer Outcomes First",
    desc: "We measure our success by your revenue, not our feature count. Every product decision starts with one question: does this help our customers get better results?",
    icon: <Target size={20} />,
  },
  {
    title: "Privacy Without Compromise",
    desc: "Your customer data is yours. We encrypt it, isolate it, and never use it to train models or sell to advertisers. Zero exceptions, regardless of business pressure.",
    icon: <Lock size={20} />,
  },
  {
    title: "Speed as a Feature",
    desc: "A campaign should go live in minutes, not days. A template should be approved in hours. We eliminate every unnecessary step between your idea and your customer's inbox.",
    icon: <Zap size={20} />,
  },
  {
    title: "Building for Bharat",
    desc: "We are a Tier-2 Indian startup building for Tier-2 Indian businesses. We understand the markets we serve because we are part of them. That context shapes everything we build.",
    icon: <MapPin size={20} />,
  },
  {
    title: "Simplicity is Sophistication",
    desc: "The most powerful platform should also be the easiest to use. We believe complexity is a failure of design. If it takes a developer to set up, we haven't done our job.",
    icon: <PencilRuler size={20} />,
  },
  {
    title: "Partnership, Not Software",
    desc: "When you join AyuChat, you get a product, a support team, and a growth partner. We succeed when you succeed. That's not a slogan — it's how our business model works.",
    icon: <Handshake size={20} />,
  },
];

const Values: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-[#f6f8f7]">
      <div className="max-w-7xl mx-auto text-center">

        {/* Badge */}
        <span className="bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50] px-4 py-1 rounded-full text-xs font-semibold">
          WHAT WE BELIEVE
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-bold mt-4 font-['Bricolage_Grotesque'] leading-tight">
          Our Core{" "}
          <span className="text-[#0B6B50]">Values</span>
        </h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

          {values.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-6 text-left hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 text-[#0B6B50]">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mt-4 font-['Bricolage_Grotesque']">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Values;