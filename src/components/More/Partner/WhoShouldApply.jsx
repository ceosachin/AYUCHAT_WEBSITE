"use client";

import { Building2, Briefcase, Users, Laptop } from "lucide-react";

const partners = [
  {
    icon: Building2,
    title: "Digital Marketing Agencies",
    desc: "Offer WhatsApp marketing as a new service. Bill clients directly and earn passive commissions.",
  },
  {
    icon: Briefcase,
    title: "Business Consultants",
    desc: "Recommend AyuChat to your existing client base. Earn recurring income with zero extra work.",
  },
  {
    icon: Users,
    title: "Social Media Influencers",
    desc: "Share your unique link with your audience. Earn commission every month for the lifetime of each customer.",
  },
  {
    icon: Laptop,
    title: "Developers & Freelancers",
    desc: "Build custom solutions on top of AyuChat and earn commissions on every client you onboard.",
  },
];

export default function WhoShouldApply() {
  return (
    <section className="bg-[#f4f8f6] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Top Badge */}
        <div className="inline-block px-4 py-1 mb-6 text-sm font-medium text-green-700 bg-green-100 rounded-full">
          WHO SHOULD APPLY
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Perfect for{" "}
          <span className="text-green-700">Every Kind</span> of Partner
        </h2>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {partners.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition"
              >
                {/* Icon */}
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-xl bg-green-100">
                  <Icon className="w-7 h-7 text-green-700" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}