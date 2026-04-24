import { Check } from "lucide-react";

export default function Hero() {
  return (
    <section className="text-black min-h-screen flex items-center justify-center px-4 sm:px-6">
      
      {/* CONTAINER */}
      <div className="w-full max-w-4xl mx-auto text-center">

        {/* BADGE */}
        <div className="mb-4 sm:mb-6">
          <span className="inline-block bg-green-500/20 text-green-700 px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium">
            💰 Earn up to ₹90,000/month in recurring commissions
          </span>
        </div>

        {/* HEADING */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight break-words">
          Turn Your Network <br />
          into{" "}
          <span className="text-[#0B6B50]">
            Monthly Income.
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-500 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Refer businesses to AyuChat and earn up to 30% recurring
          commission on every customer you bring — every month, for as
          long as they stay. No selling required. Just share what works.
        </p>

        {/* BUTTONS */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">

          <button className="w-full sm:w-auto bg-[#0B6B50] hover:bg-[#09543f] text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition">
            Become a Partner — Free →
          </button>

          <button className="w-full sm:w-auto border border-gray-300 hover:border-green-600 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition">
            Calculate My Earnings
          </button>

        </div>

        {/* FEATURES */}
        <div className="mt-6 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-400">

          {[
            "Up to 30% recurring",
            "No experience needed",
            "Monthly payouts",
            "Real-time tracking dashboard",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <Check size={16} className="text-green-700" />
              <span className="whitespace-nowrap">{item}</span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}