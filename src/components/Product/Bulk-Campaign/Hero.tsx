import { Check } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#031d17] via-[#062f26] to-[#02110d] text-white flex items-center justify-center sm:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden">

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SECTION */}
        <div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-6 mt-8 sm:mt-0">
            {/* <span>Home &gt; Bulk Campaigns</span> */}
            <span className="flex items-center gap-2 border border-emerald-900/90 bg-green-900/40 text-green-400 px-3 py-2 rounded-full text-xs font-bold">
              <div className="rounded-full w-6 h-6  bg-green-400 items-center justify-center flex"> <Check size={16} strokeWidth={4.5} className="text-black"/></div>
               Official Meta WhatsApp Business API
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Send WhatsApp <br />
            Campaigns to <br />
            <span className="text-green-400">Thousands.</span> <br />
            Instantly.
          </h1>

          {/* Description */}
          <p className="text-gray-400 mt-6 max-w-lg leading-relaxed">
            AyuChat's bulk campaign engine delivers personalized WhatsApp messages
            to your entire contact list with 96.2% delivery rates — all through Meta's
            official API. No spam. No blocks. Just results.
          </p>

          {/* Buttons */}
         <div className="flex flex-col sm:flex-row gap-4 mt-8">
  
  <button className="bg-green-500 text-black hover:bg-green-600 px-6 py-3 rounded-lg font-semibold shadow-lg transition">
    Start Sending Free →
  </button>

  <button className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition">
    See Live Demo →
  </button>

</div>
          {/* Features Row */}
<div className="flex flex-wrap items-center gap-6 mt-6 text-gray-400 text-sm">

  <div className="flex items-center gap-2">
    <span className="text-emerald-500"><Check size={16} strokeWidth={4.5}/></span>
    <span>96.2% average delivery rate</span>
  </div>

  <div className="flex items-center gap-2">
    <span className="text-emerald-500"><Check size={16} strokeWidth={4.5}/></span>
    <span>71% average read rate</span>
  </div>

  <div className="flex items-center gap-2">
    <span className="text-emerald-500"><Check size={16} strokeWidth={4.5}/></span>
    <span>14-day free trial</span>
  </div>

</div>
        </div>

        {/* RIGHT SECTION */}
        <div className="relative ">

          {/* Main Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_0_60px_rgba(0,255,150,0.08)]">

            {/* Top Header */}
            <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-4">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <p className="text-gray-400 text-xs ml-3 ">
                AyuChat · Campaigns Dashboard
              </p>
            </div>

            {/* Top Stats */}
            <div className="grid grid-cols-3 gap-4 mb-3">
              <div className="bg-white/5 p-4 rounded-xl text-center">
                <p className="text-green-400 text-xl font-semibold">48,210</p>
                <p className="text-gray-400 text-xs mt-1">Sent Today</p>
              </div>

              <div className="bg-white/5 p-4 rounded-xl text-center">
                <p className="text-green-400 text-xl font-semibold">96.2%</p>
                <p className="text-gray-400 text-xs mt-1">Delivery</p>
              </div>

              <div className="bg-white/5 p-4 rounded-xl text-center">
                <p className="text-yellow-400 text-xl font-semibold">15x</p>
                <p className="text-gray-400 text-xs mt-1">Avg ROI</p>
              </div>
            </div>

            {/* Campaign List */}
<div className="space-y-2 text-xs sm:text-sm w-full">

  {/* 1 */}
  <div className="bg-white/5 rounded-xl p-3 border border-white/5 w-full min-w-0">
    <div className="flex justify-between text-gray-300 mb-2">
      <span className="text-xs">OPD Reminder — May</span>
      <span className="text-green-400 text-xs">1,155 / 1,200</span>
    </div>
    <div className="h-2 bg-white/10 rounded-full">
      <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-green-400 to-emerald-500"></div>
    </div>
  </div>

  {/* 2 */}
  <div className="bg-white/5 rounded-xl p-3 border border-white/5 w-full min-w-0">
    <div className="flex justify-between text-gray-300 mb-2">
      <span className="text-xs">Granite Sale Campaign</span>
      <span className="text-green-400 text-xs">100%</span>
    </div>
    <div className="h-2 bg-white/10 rounded-full">
      <div className="h-2 w-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500"></div>
    </div>
  </div>

  {/* 3 */}
  <div className="bg-white/5 rounded-xl p-3 border border-white/5 w-full min-w-0">
    <div className="flex justify-between text-gray-300 mb-2">
      <span className="text-xs">Festival Offer — Retail</span>
      <span className="text-yellow-400 text-xs">Sending...</span>
    </div>
    <div className="h-2 bg-white/10 rounded-full">
      <div className="h-2 w-[70%] rounded-full bg-gradient-to-r from-yellow-400 to-amber-500"></div>
    </div>
  </div>

  {/* 4 ACTIVE */}
  <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex justify-between items-center w-full min-w-0">
    <div className="flex items-center gap-3">
      <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">
        Active
      </span>
      <span className="text-gray-300 text-xs">Knee Surgery Drive</span>
    </div>
    <span className="text-green-400 text-xs">87% read</span>
  </div>

  {/* 5 REVENUE */}
  <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex justify-between items-center w-full min-w-0">
    <span className="text-gray-300 text-xs">Insurance Renewal Blast</span>
    <span className="text-green-400 text-xs mr-9">₹2.4L</span>
  </div>

  {/* 6 QUEUED */}
  <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex justify-between items-center">
    <div className="flex items-center gap-3">
      <span className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded-full">
        Queued
      </span>
      <span className="text-gray-300 text-xs">Real Estate Site Visit</span>
    </div>
    <span className="text-green-400 text-xs mr-9">2,400</span>
  </div>

</div>
          </div>

          {/* Floating ROI Card */}
          <div className="hidden sm:block absolute bottom-12 -left-10 bg-white/10 backdrop-blur-lg border border-white/10 p-4 rounded-xl shadow-lg">
            <p className="text-gray-400 text-xs">Campaign ROI</p>
            <p className="text-lg font-bold text-white">₹2.4L</p>
            <p className="text-green-400 text-xs">on ₹261 Meta cost</p>
          </div>

          {/* Floating Open Rate */}
          <div className="hidden sm:block absolute bottom-10 -right-6 bg-white/10 backdrop-blur-lg border border-white/10 p-4 rounded-xl shadow-lg text-center">
            <p className="text-gray-400 text-xs">Open Rate</p>
            <p className="text-xl font-bold text-white">71.4%</p>
            <p className="text-green-400 text-xs">vs Email: 21%</p>
          </div>

        </div>
      </div>
      
    </div>
    
  );
}