import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#031A16] via-[#062821] to-[#031A16] text-white px-6 py-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#0B6B50]/20 border border-[#0B6B50]/40 text-[#1FC28B] px-4 py-1 rounded-full text-sm mb-6">
            ✔ Pipeline-Based Contact CRM
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Your WhatsApp
            <br />
            Contacts. Managed
            <br />
            <span className="text-[#1FC28B]">Like a CRM.</span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 mt-6 max-w-xl leading-relaxed">
            AyuChat's built-in contact CRM tracks every lead from first
            touch to closed deal — with pipeline stages, custom fields,
            audience segmentation, and complete conversation history, all
            connected to your WhatsApp campaigns.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">

            <button className="bg-[#1FC28B] text-black font-semibold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#17a877] transition">
              Start Free — 14 Days <ArrowRight size={16} />
            </button>

            <button className="border border-gray-500 px-6 py-3 rounded-lg hover:bg-white/10 transition">
              See Live Demo →
            </button>

          </div>

          {/* Trust Line */}
          <div className="flex flex-wrap gap-6 mt-8 text-sm text-gray-400">
            <span>✔ Official Meta Partner</span>
            <span>✔ 1,000+ businesses trust us</span>
            <span>✔ No credit card required</span>
          </div>

        </div>

        {/* RIGHT CARD */}
        <div className="relative">

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl">

            <p className="text-xs text-gray-400 mb-4">
              LIVE PIPELINE-BASED CONTACT CRM DASHBOARD
            </p>

            {/* Stat Row */}
            <div className="bg-white/5 rounded-lg px-4 py-3 flex justify-between mb-3">
              <span className="text-gray-400">Active Today</span>
              <span className="text-[#1FC28B] font-semibold">Unlimited</span>
            </div>

            <div className="bg-white/5 rounded-lg px-4 py-3 flex justify-between mb-4">
              <span className="text-gray-400">Performance</span>
              <span className="text-[#1FC28B] font-semibold">Pipeline</span>
            </div>

            {/* Progress */}
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-400 mb-1">
                <span>Success Rate</span>
                <span className="text-[#1FC28B]">96.2%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div className="h-2 bg-[#1FC28B] rounded-full w-[96%]" />
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-400 mb-1">
                <span>Satisfaction</span>
                <span className="text-[#1FC28B]">4.9/5</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div className="h-2 bg-[#1FC28B] rounded-full w-[90%]" />
              </div>
            </div>

            {/* Bottom Highlight */}
            <div className="border border-[#1FC28B]/40 bg-[#1FC28B]/10 rounded-lg p-4">
              <p className="text-xs text-[#1FC28B] font-semibold mb-1">
                FEATURE ACTIVE
              </p>
              <p className="text-sm text-gray-300">
                Pipeline-Based Contact CRM — running for 1,000+ businesses across India
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Hero;