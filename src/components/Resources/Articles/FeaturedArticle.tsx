import { ArrowRight } from "lucide-react";

const FeaturedArticle = () => {
  return (
    <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">

      {/* TOP GREEN HERO */}
      <div className="relative h-[200px] sm:h-[240px] md:h-[260px] rounded-t-2xl overflow-hidden flex items-center justify-center">

        {/* BACKGROUND SPLIT */}
        <div className="absolute inset-0 flex">
          <div className="flex-1 bg-[#147A5A]" />
          <div className="flex-[3] bg-[#0F6B50]" />
          <div className="flex-1 bg-[#1FA37A]" />
        </div>

        {/* GRID LINES */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full grid grid-rows-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border-t border-white/20" />
            ))}
          </div>
        </div>

        {/* LABEL */}
        <span className="absolute top-3 left-3 sm:top-4 sm:left-4 text-[10px] sm:text-xs bg-white/20 text-white px-2 sm:px-3 py-1 rounded-full backdrop-blur">
          Featured Guide
        </span>

        {/* CENTER */}
        <div className="relative flex items-center gap-4 sm:gap-6 md:gap-10 z-10">

          {/* PHONE + STATS */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-3 sm:p-4 md:p-6 flex items-center gap-3 sm:gap-4 shadow-lg">

            <div className="w-14 h-24 sm:w-16 sm:h-28 md:w-20 md:h-36 bg-white/80 rounded-xl flex items-center justify-center">
              <div className="w-10 h-20 sm:w-12 sm:h-24 md:w-14 md:h-28 bg-gray-200 rounded-lg flex flex-col gap-1 sm:gap-2 p-1 sm:p-2">
                <div className="h-2 sm:h-3 bg-gray-300 rounded"></div>
                <div className="h-2 sm:h-3 bg-green-300 rounded"></div>
                <div className="h-2 sm:h-3 bg-gray-300 rounded"></div>
              </div>
            </div>

            <div className="flex flex-col gap-1 sm:gap-2">
              <div className="bg-white rounded-lg px-2 py-1 text-xs sm:text-sm font-semibold">
                96.2% <br />
                <span className="text-[9px] sm:text-[10px] text-gray-500">Delivery</span>
              </div>

              <div className="bg-white rounded-lg px-2 py-1 text-xs sm:text-sm font-semibold text-blue-600">
                71.4% <br />
                <span className="text-[9px] sm:text-[10px] text-gray-500">Read Rate</span>
              </div>

              <div className="bg-white rounded-lg px-2 py-1 text-xs sm:text-sm font-semibold text-green-600">
                ₹2.4L <br />
                <span className="text-[9px] sm:text-[10px] text-gray-500">Revenue</span>
              </div>
            </div>
          </div>

          {/* BARS */}
          <div className="hidden sm:flex items-end gap-2 sm:gap-3 opacity-40">
            {[60, 80, 70, 90, 110].map((h, i) => (
              <div
                key={i}
                className="w-2 sm:w-3 md:w-4 bg-white rounded"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>

        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4 sm:p-5 md:p-6">

        <span className="text-[10px] sm:text-xs bg-[#E6F2EE] text-[#0B6B50] font-semibold px-2 sm:px-3 py-1 rounded-full">
          Campaigns
        </span>

        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mt-3 leading-snug">
          The Complete Guide to WhatsApp Bulk Campaigns: Strategy,
          Templates, and ROI in 2026
        </h2>

        <p className="text-gray-600 mt-3 text-xs sm:text-sm">
          Everything you need to know about running high-converting WhatsApp campaigns - from audience segmentation and template creation to Meta approval, scheduling, and measuring ROI.
        </p>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-4 text-xs sm:text-sm text-gray-500">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#E6F2EE] flex items-center justify-center text-green-700 font-semibold">
            AK
          </div>

          <span className="font-medium text-gray-700">Arjun Kumar</span>
          <span>•</span>
          <span>May 2, 2026</span>
          <span>•</span>
          <span>12 min read</span>
        </div>

        {/* ✅ FIXED BUTTON */}
        <button className="mt-5 bg-[#0B6B50] hover:bg-green-700 text-white text-xs sm:text-sm px-3 py-2 rounded-md flex items-center gap-2 transition">
          Read Full Guide
          <ArrowRight size={14} />
        </button>

      </div>
    </div>
  );
};

export default FeaturedArticle;