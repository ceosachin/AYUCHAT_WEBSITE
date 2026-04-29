import React from "react";
import { MessageSquare, Phone, Users } from "lucide-react";

/* ================= TYPES ================= */

type AddonCardProps = {
  title: string;
  desc: string;
  price: string;
  icon: React.ReactNode;
};

/* ================= MAIN ================= */

const AddOns: React.FC = () => {
  return (
    <div className="bg-[#F6F8F7] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Badge */}
        <span className="bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50] px-4 py-1 rounded-full text-xs font-semibold tracking-wide">
          ADD-ONS
        </span>

        {/* Heading */}
        <h2 className="text-5xl font-bold mt-4 text-[#1C1C1C] leading-tight font-['Bricolage_Grotesque']">
          Customize Your Plan
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-4 max-w-xl leading-relaxed text-lg">
          Need more than what's in your plan? Add extra capacity without
          upgrading your entire subscription.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <AddonCard
            title="Additional Contacts"
            desc="Add 5,000 more contacts to any plan when you need to scale your audience."
            price="₹499 / 5,000 contacts / mo"
            icon={<MessageSquare size={18} />}
          />

          <AddonCard
            title="Additional WABA Number"
            desc="Connect another WhatsApp Business number to your workspace for multiple brands."
            price="₹799 / number / mo"
            icon={<Phone size={18} />}
          />

          <AddonCard
            title="Extra Team Members"
            desc="Add more agents to your live inbox beyond your plan's limit."
            price="₹199 / member / mo"
            icon={<Users size={18} />}
          />

        </div>
      </div>
    </div>
  );
};

export default AddOns;

/* ================= CARD ================= */

const AddonCard: React.FC<AddonCardProps> = ({
  title,
  desc,
  price,
  icon,
}) => {
  return (
    <div className="border border-gray-200 rounded-2xl p-6 bg-white/60 backdrop-blur-sm hover:shadow-md transition">

      {/* Icon */}
      <div className="flex w-10 h-10 rounded-lg bg-[#E6F4EF] flex items-center justify-center text-[#0B6B50] mb-4">
        {icon}
      </div>

      {/* Title */}
      <h3 className="flex font-semibold text-[#1C1C1C] text-base font-['Bricolage_Grotesque']">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
        {desc}
      </p>

      {/* Price */}
      <p className="text-[#0B6B50] font-semibold mt-4">
        {price}
      </p>

    </div>
  );
};