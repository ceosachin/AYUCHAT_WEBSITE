import { Copy, Check } from "lucide-react";
import { useState } from "react";

export function CompanyFacts() {
  const [copied, setCopied] = useState(false);

  const stats = [
    { value: "1,000+", label: "Active Businesses" },
    { value: "500K+", label: "Messages Delivered Daily" },
    { value: "96.2%", label: "Average Delivery Rate" },
    { value: "2026", label: "Founded · Gwalior, India" },
  ];

  const bioText = `AyuChat is India's leading WhatsApp Business API platform, enabling businesses to run bulk campaigns, build AI chatbots, manage live customer conversations, and automate marketing workflows. Built by Agnistoka Technology and headquartered in Gwalior, Madhya Pradesh, AyuChat serves over 1,000 businesses across India.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(bioText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16 lg:mt-20">

      {/* Tag */}
      <p className="text-[10px] sm:text-xs bg-blue-100 text-[#0B6B50] px-3 sm:px-4 py-1 rounded-full inline-block mb-4 font-semibold tracking-wide">
        COMPANY FACTS
      </p>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        AyuChat by the Numbers
      </h2>

      {/* Subtext */}
      <p className="text-gray-500 text-sm sm:text-base mb-8 sm:mb-10">
        Updated statistics for press and editorial use. Last updated: May 2026.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 text-center"
          >
            <p className="text-2xl sm:text-3xl font-bold text-[#0B6B50]">
              {item.value}
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="bg-[#F9FBFA] border border-gray-200 rounded-xl p-4 sm:p-6">

        <p className="text-[10px] sm:text-xs font-semibold text-gray-500 tracking-wider mb-3">
          COMPANY DESCRIPTION — SHORT (50 WORDS)
        </p>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
          {bioText}
        </p>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg text-[#0B6B50] hover:bg-gray-100 transition"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? "Copied!" : "Copy Bio"}
        </button>

      </div>
    </div>
  );
}