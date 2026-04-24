import React from "react";

export default function Hero() {
  return (
    <div className="bg-[#031B16] text-white min-h-screen px-4 sm:px-6 py-8 sm:py-10">

      {/* Breadcrumb + Badge */}
      <div className="max-w-6xl mx-auto text-xs sm:text-sm text-gray-400 flex flex-wrap items-center gap-2">
        <span className="text-green-400">Home</span>
        <span>›</span>
        <span>More</span>
        <span>›</span>
        <span>Startup Program</span>

        <span className="sm:ml-4 bg-[#0E2E26] text-green-400 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs border border-green-800">
          ⭐ Limited spots available — 50 startups per cohort
        </span>
      </div>

      {/* HERO CONTENT */}
      <div className="max-w-4xl mx-auto text-center mt-8 sm:mt-10">

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          Built Your Startup?
        </h1>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-green-400 mt-2">
          Grow it on WhatsApp.
        </h1>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-2">
          For Free.
        </h1>

        <p className="text-gray-400 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed px-2">
          AyuChat's Startup Program gives early-stage companies 6
          months of full platform access — free. No gimmicks. Just
          everything you need to acquire and retain customers via
          WhatsApp from day one.
        </p>

        {/* BUTTONS */}
        <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 flex-wrap">
          <button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-black font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition">
            Apply Now — It's Free →
          </button>

          <button className="w-full sm:w-auto border border-gray-600 hover:border-gray-400 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition">
            See What's Included
          </button>
        </div>

        {/* FEATURES */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-6 sm:mt-8 text-gray-400 text-xs sm:text-sm">
          {[
            "6 months completely free",
            "Full Growth plan features",
            "Dedicated onboarding call",
            "No credit card ever",
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="text-green-400">✔</span> {item}
            </span>
          ))}
        </div>
      </div>

      {/* DASHBOARD */}
      <div className="max-w-6xl mx-auto mt-10 sm:mt-16 relative">

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-green-500/10 blur-3xl rounded-3xl"></div>

        <div className="relative bg-[#0A2A22] border border-[#123C33] rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.5)] overflow-hidden">

          {/* TOP BAR */}
          <div className="relative flex items-center px-3 sm:px-4 py-3 border-b border-[#123C33]">

            {/* dots */}
            <div className="flex gap-2 z-10">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>

            {/* centered title */}
            <div className="absolute left-1/2 -translate-x-1/2 text-gray-400 text-[10px] sm:text-sm">
              AyuChat · Startup Dashboard
            </div>

            {/* badge */}
            <div className="ml-auto">
              <span className="bg-green-500 text-black text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full">
                STARTUP
              </span>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 text-center border-b border-[#123C33]">
            {[
              { title: "Free Credits", value: "₹4,200", sub: "of ₹6,000" },
              { title: "Campaigns", value: "2,840", sub: "+12%" },
              { title: "Delivery Rate", value: "97.1%", sub: "Avg 88%" },
              { title: "Days Left", value: "142", sub: "of 180 days" },
            ].map((item, i) => (
              <div
                key={i}
                className={`
                  p-4 sm:p-6 border-[#123C33]
                  ${i % 2 === 0 ? "border-r md:border-r" : ""}
                  ${i < 2 ? "border-b md:border-b-0" : ""}
                  md:border-r last:md:border-none
                `}
              >
                <p className="text-gray-400 text-[10px] sm:text-sm">
                  {item.title}
                </p>

                <h3 className="text-lg sm:text-2xl font-bold mt-1 sm:mt-2 text-green-400">
                  {item.value}
                </h3>

                <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>

          {/* BOTTOM */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6">

            {/* CHART */}
            <div className="md:col-span-2 bg-[#0F3A30] rounded-xl p-4 sm:p-6">
              <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                CAMPAIGN PERFORMANCE
              </p>

              <div className="flex items-end gap-2 sm:gap-3 h-24 sm:h-32">
                {[40, 60, 80, 70, 90, 95].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="bg-gradient-to-t from-green-600 to-green-400 w-4 sm:w-8 rounded-md transition-all duration-700 hover:scale-105"
                  />
                ))}
              </div>
            </div>

            {/* PERKS */}
            <div className="bg-[#0F3A30] rounded-xl p-4 sm:p-6">
              <p className="text-green-400 text-xs sm:text-sm mb-3 sm:mb-4">
                STARTUP PERKS
              </p>

              <ul className="space-y-2 text-gray-300 text-xs sm:text-sm">
                <li>✔ Chatbot builder</li>
                <li>✔ Automation flows</li>
                <li>✔ 10,000 contacts</li>
                <li>✔ API access</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* FLOAT BUTTON */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.4)] cursor-pointer hover:scale-110 hover:bg-green-600 transition">
          💬
        </div>
      </div>
    </div>
  );
}