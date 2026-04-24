import React from "react";

const WhyWhatsapp: React.FC = () => {
  return (
    <section className="bg-[#F5F7F6] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Tag */}
        <span className="inline-block px-3 py-1 text-[10px] sm:text-xs font-semibold bg-blue-100 text-[#0B6B50] rounded-full mb-4 sm:mb-6">
          WHY WHATSAPP?
        </span>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          The Channel Your{" "}
          <span className="text-[#0B6B50]">Customers Already Use</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base">
          Email gets ignored. SMS feels outdated. WhatsApp is where real
          conversations happen — and where your business needs to be.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
          
          <StatCard
            value="98%"
            title="Open Rate"
            desc="vs 21% for email campaigns"
          />

          <StatCard
            value="3B+"
            title="Active Users"
            desc="Your audience is already there"
          />

          <StatCard
            value="45–80%"
            title="Click-Through Rate"
            desc="vs 2–5% via email"
          />

          <StatCard
            value="5 min"
            title="Avg Response Time"
            desc="Faster than any other channel"
          />

        </div>
      </div>
    </section>
  );
};

export default WhyWhatsapp;


/* ✅ Reusable Card */
type StatCardProps = {
  value: string;
  title: string;
  desc: string;
};

const StatCard: React.FC<StatCardProps> = ({ value, title, desc }) => (
  <div className="text-center hover:shadow-md transition bg-white border border-gray-100 rounded-xl py-6 sm:py-8">
    <h3 className="text-2xl sm:text-3xl font-bold text-[#0B6B50]">
      {value}
    </h3>
    <p className="font-medium mt-2 text-sm sm:text-base">
      {title}
    </p>
    <p className="text-gray-500 text-xs sm:text-sm mt-1">
      {desc}
    </p>
  </div>
);