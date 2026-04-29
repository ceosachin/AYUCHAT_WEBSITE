import { Check } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#031c1a] text-white py-16 sm:py-20 pt-1 pb-24 px-4 sm:px-6 overflow-hidden">

      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div>
<div className="flex items-center gap-3 text-sm text-gray-400 mb-6 mt-8 sm:mt-0">
  
  <span className="flex items-center gap-2 border border-emerald-900/90 bg-green-900/40 text-green-400 px-3 py-2 rounded-full text-xs font-bold">
    
    <div className="flex items-center justify-center w-6 h-6 bg-green-400 rounded-full">
    <Check size={14} strokeWidth={3} className="text-black" />
  </div>

  Enterprise Multi-Workspace Architecture
</span>
</div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            One Login. <br />
            Unlimited <br />
            <span className="text-green-400">Businesses.</span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 mt-4 sm:mt-6 max-w-lg text-sm sm:text-base">
            AyuChat's multi-workspace architecture lets you manage every business, brand, or client from a single account. Each workspace is completely isolated — switch between them in one click.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto">
            
            {/* Primary Button */}
            <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-xl w-full sm:w-auto transition">
              Start Free — 14 Days →
            </button>

            {/* Outline Button */}
            <button className="border border-gray-600 text-white bg-white/10 px-6 py-3 rounded-xl w-full sm:w-auto hover:bg-white/20 transition">
              See Live Demo →
            </button>

          </div>

          {/* Footer Points */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-5 sm:mt-6 text-gray-400 text-xs sm:text-sm">
            <span className="flex gap-2 items-center">
              <Check size={18}/> Official Meta Partner
            </span>
            <span className="flex gap-2 items-center">
              <Check size={18}/> 1,000+ businesses trust us
            </span>
            <span className="flex gap-2 items-center">
              <Check size={18}/> No credit card required
            </span>
          </div>

        </div>

        {/* RIGHT DASHBOARD CARD */}
        <div className="relative">

          {/* Glow */}
          <div className="absolute inset-0 bg-green-500/10 blur-3xl rounded-3xl"></div>

          {/* Card */}
          <div className="relative bg-[#0b2a27]/80 backdrop-blur-lg border border-gray-700 rounded-3xl shadow-xl p-4 sm:p-6">

            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
              LIVE ENTERPRISE MULTI-WORKSPACE ARCHITECTURE DASHBOARD
            </p>

            <div className="space-y-3 sm:space-y-4">

              <div className="flex justify-between bg-[#143a35] p-3 sm:p-4 rounded-xl text-sm sm:text-base">
                <span className="text-gray-300">Active Today</span>
                <span className="text-green-400 font-semibold">Unlimited</span>
              </div>

              <div className="flex justify-between bg-[#143a35] p-3 sm:p-4 rounded-xl text-sm sm:text-base">
                <span className="text-gray-300">Performance</span>
                <span className="text-green-400 font-semibold">100%</span>
              </div>

              {/* Progress Bars */}
              <Progress label="Success Rate" value="96.2%" />
              <Progress label="Satisfaction" value="98%" text="4.9/5" />

            </div>

            {/* Bottom Card */}
            <div className="mt-4 sm:mt-6 border border-green-500/30 bg-green-900/20 p-3 sm:p-4 rounded-xl">
              <p className="text-green-400 text-xs sm:text-sm mb-1">
                FEATURE ACTIVE
              </p>
              <p className="text-gray-300 text-xs sm:text-sm">
                Enterprise Multi-Workspace Architecture — running for 1,000+ businesses across India
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

function Progress({ label = "", value = "0%", text = "" }) {
  const width = value.includes("%") ? value : "0%";

  return (
    <div className="bg-[#143a35] p-3 sm:p-4 rounded-xl">
      <div className="flex justify-between text-xs sm:text-sm text-gray-300 mb-2">
        <span>{label}</span>
        <span className="text-green-400">{text || value}</span>
      </div>

      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-400 rounded-full transition-all duration-700 ease-out"
          style={{ width }}
        ></div>
      </div>
    </div>
  );
}