import { Check } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#031d17] via-[#062f26] to-[#02110d] text-white flex items-center px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT */}
        <div>

          {/* Badge */}
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-6">
            {/* <span>Home &gt; Bulk Campaigns</span> */}
            <span className="flex items-center gap-2 border border-emerald-900/90 bg-green-900/40 text-emerald-500 px-3 py-2 rounded-full text-xs font-bold">
              <div className="rounded-full w-6 h-6  bg-emerald-500 items-center justify-center flex"> <Check size={16} strokeWidth={4.5} className="text-black"/></div>
               Visual Flow Automation Builder
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            WhatsApp <br />
            Automation <br />
            That Work While <br />
            You Sleep <br />
          </h1>

          {/* Description */}
          <p className="text-gray-400 mt-6 max-w-lg leading-relaxed">
            Build trigger-based customer journeys that run completely automatically. From welcome sequences and appointment reminders to re-engagement campaigns - AyuChat handles your entire WhatsApp marketing lifecycle.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-lg font-medium shadow-lg">
              Start Free — 14 Days →
            </button>

            <button className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10">
              See Live Demo →
            </button>
          </div>

          {/* Bottom Points */}
          <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Check size={16} className="text-emerald-400" />
              Official Meta Partner
            </div>

            <div className="flex items-center gap-2">
              <Check size={16} className="text-emerald-400" />
              1,000+ businesses trust us
            </div>

            <div className="flex items-center gap-2">
              <Check size={16} className="text-emerald-400" />
              No credit card required
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_0_60px_rgba(0,255,150,0.08)]">

            {/* Header */}
            <p className="text-xs text-gray-400 mb-4">
              LIVE VISUAL FLOW AUTOMATIION DASHBOARD
            </p>

            {/* Stats */}
            <div className="space-y-4 text-sm">

              <div className="flex justify-between bg-white/5 p-4 rounded-xl">
                <span className="text-gray-400">Active Today</span>
                <span className="text-emerald-400 font-semibold">8+</span>
              </div>

              <div className="flex justify-between bg-white/5 p-4 rounded-xl">
                <span className="text-gray-400">Performance</span>
                <span className="text-emerald-400 font-semibold">Unlimited</span>
              </div>

              {/* Progress */}
              <div className="bg-white/5 p-4 rounded-xl">
                <div className="flex justify-between text-gray-400 mb-2">
                  <span>Success Rate</span>
                  <span className="text-emerald-400">96.2%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full">
                  <div className="h-2 w-[96%] bg-emerald-400 rounded-full"></div>
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-xl">
                <div className="flex justify-between text-gray-400 mb-2">
                  <span>Satisfaction</span>
                  <span className="text-emerald-400">4.9/5</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full">
                  <div className="h-2 w-[90%] bg-emerald-400 rounded-full"></div>
                </div>
              </div>

              {/* Bottom Box */}
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl">
                <p className="text-xs text-emerald-400 mb-1">
                  FEATURE ACTIVE
                </p>
                <p className="text-gray-300 text-sm">
                  Visual Flow Automation Builder — running for 1,000+ businesses across India
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}