import { PhoneIcon } from "lucide-react";
import React from "react";

const FeatureHighlight: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 border-b hover:bg-[#F8FAF9] transition">

      {/* LEFT */}
      <div className="p-6 sm:p-8 lg:p-10">
        <div className="w-12 h-12 bg-blue-100 rounded-xl mb-5 flex items-center justify-center">
          <PhoneIcon size={20} />
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold mb-3">
          Bulk WhatsApp Campaigns
        </h3>

        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
          Send personalized WhatsApp messages to thousands of contacts in one click.
          Segment your audience, schedule campaigns, track delivery and read rates —
          all with Meta's official API. No spam filters, no blocks.
        </p>

        <span className="inline-block mt-5 px-3 py-1 text-xs bg-blue-100 text-[#0B6B50] rounded-full">
          Most Used Feature
        </span>
      </div>

      {/* RIGHT */}
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="bg-[#F3F7F5] border border-[#D6E2DE] rounded-xl p-4 sm:p-6">

          <p className="text-xs font-semibold text-gray-500 mb-5 tracking-wide">
            CAMPAIGN DELIVERY FUNNEL
          </p>

          {[
            { label: "Audience", value: "1,200", width: "100%", color: "bg-[#BFD4CC]" },
            { label: "Sent", value: "1,044", width: "85%", color: "bg-[#1FA97A]" },
            { label: "Delivered", value: "1,005", width: "80%", color: "bg-[#0F7A5C]" },
            { label: "Read", value: "717", width: "60%", color: "bg-[#3B82F6]" },
            { label: "Replied", value: "87", width: "20%", color: "bg-[#7C3AED]" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 mb-4">

              <span className="w-20 text-xs text-gray-600">
                {item.label}
              </span>

              <div className="flex-1 h-2 bg-[#DDE7E4] rounded-full">
                <div
                  className={`h-2 rounded-full ${item.color}`}
                  style={{ width: item.width }}
                />
              </div>

              <span className="w-14 text-xs font-medium text-right text-gray-800">
                {item.value}
              </span>
            </div>
          ))}

          {/* Bottom Cards */}
          <div className="grid grid-cols-3 gap-3 mt-6">

            <StatMini value="₹261" label="Meta Cost" />
            <StatMini value="15x" label="ROI" />
            <StatMini value="87" label="Replies" />

          </div>

        </div>
      </div>
    </div>
  );
};

export default FeatureHighlight;

type StatMiniProps = {
  value: string;
  label: string;
};

const StatMini: React.FC<StatMiniProps> = ({ value, label }) => (
  <div className="bg-white border border-gray-100 rounded-lg text-center px-2 py-3 shadow-sm">
    <p className="text-sm sm:text-base font-bold text-[#0F7A5C]">{value}</p>
    <p className="text-[10px] sm:text-xs text-gray-500">{label}</p>
  </div>
);