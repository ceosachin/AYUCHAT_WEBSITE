// components/about/Mission.tsx

import { Check } from "lucide-react";

const Mission: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-[#f6f8f7]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <span className="bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50] px-4 py-1 rounded-full text-xs font-semibold">
            OUR MISSION
          </span>

          {/* Heading with left border */}
          <div className="mt-6 pl-4 border-l-4 border-[#0B6B50]">
            <h2 className="text-2xl sm:text-4xl font-bold leading-tight font-['Bricolage_Grotesque']">
              "Empowering every Indian business to grow faster through automation and smarter WhatsApp communication."
            </h2>
          </div>

          {/* Paragraphs */}
          <p className="mt-6 text-gray-600 leading-relaxed">
            India has over 63 million small and medium businesses. The majority still
            rely on phone calls, manual follow-ups, and scattered spreadsheets to
            manage customer communication. We believe that's a problem worth solving -
            and WhatsApp, with its 500 million Indian users, is the best channel to
            solve it on.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            AyuChat was built to be the operating system for WhatsApp business
            communication. Not just a tool to send bulk messages, but a complete
            platform where businesses can acquire leads, nurture them with chatbots,
            close sales via the inbox, and retain customers with automation - all from
            one dashboard.
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-3 mt-6">
            {[
              "Automation-first",
              "Built for India",
              "Meta Official Partner",
              "Enterprise-grade security",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm"
              >
                <Check size={14} className="text-[#0B6B50]" strokeWidth={3.5} />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT DASHBOARD */}
        <div className="bg-[#071c16] rounded-3xl p-6 sm:p-8 text-green-400 shadow-2xl">

          {/* Top bar */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 bg-red-400 rounded-full" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 bg-green-400 rounded-full" />
            <p className="ml-3 text-sm text-gray-400">
              AyuChat · Impact Dashboard
            </p>
          </div>

          {/* Cards */}
          <div className="space-y-4">

            {/* Row */}
            <DashboardRow label="Businesses Empowered" value="1,000+" />

            <DashboardRow label="Messages This Month" value="14.2M" />

            <DashboardRow label="Revenue Generated via WA" value="₹8.4Cr" />

            {/* Progress bars */}
            <ProgressRow label="Avg. Campaign Open Rate" value="71.4%" percent={71} />

            <ProgressRow label="Customer Satisfaction" value="98%" percent={98} />

            <ProgressRow label="Delivery Success Rate" value="96.2%" percent={96} />

            {/* Footer */}
            <div className="mt-4 border border-green-700/40 rounded-xl p-4 text-sm text-gray-300">
              <p className="text-green-400 font-semibold text-xs mb-1">
                MISSION PROGRESS
              </p>
              1,000 of 1,000,000 businesses empowered · 0.1% done · Just getting started.
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Mission;

/* Small reusable components */

const DashboardRow = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <div className="flex justify-between items-center bg-[#0c2a22] px-4 py-4 rounded-xl">
    <span className="text-gray-400 text-sm">{label}</span>
    <span className="text-green-400 font-semibold">{value}</span>
  </div>
);

const ProgressRow = ({
  label,
  value,
  percent,
}: {
  label: string;
  value: string;
  percent: number;
}) => (
  <div className="bg-[#0c2a22] px-4 py-4 rounded-xl">
    <div className="flex justify-between text-sm text-gray-400 mb-2">
      <span>{label}</span>
      <span className="text-green-400">{value}</span>
    </div>

    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
      <div
        className="h-full bg-green-500 rounded-full"
        style={{ width: `${percent}%` }}
      />
    </div>
  </div>
);