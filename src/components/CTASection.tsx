import React from "react";

const CTASection: React.FC = () => {
  return (
    <section id="cta" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        <div className="relative overflow-hidden bg-[#1F6F54] text-center rounded-xl">

          <div className="px-5 sm:px-8 py-12 sm:py-16">

            {/* Background circles */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 sm:w-72 sm:h-72 bg-white/10 rounded-full"></div>
            <div className="absolute -top-20 -right-20 w-64 h-64 sm:w-80 sm:h-80 bg-white/10 rounded-full"></div>

            {/* Tag */}
            <div className="mb-6">
              <span className="px-3 py-1 text-[10px] sm:text-xs font-semibold rounded-full bg-white/10 text-white border border-white/20">
                14-DAY FREE TRIAL - NO CREDIT CARD
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
              Start Sending Smarter <br />
              <span className="block mt-2">
                WhatsApp Campaigns Today
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-white/80 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base">
              Join 1,000+ businesses already using AyuChat to grow revenue via WhatsApp.
              Setup takes less than 2 minutes.
            </p>

            {/* Input + Button */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              
              <input
                type="email"
                placeholder="Enter your work email"
                className="w-full sm:w-80 px-4 py-2 rounded-lg bg-white text-gray-700 outline-none"
              />

              <button className="w-full sm:w-auto px-5 py-2 rounded-lg bg-black text-white hover:bg-gray-900 transition">
                Get Started Free
              </button>

            </div>

            {/* Footer text */}
            <p className="text-white/80 text-xs sm:text-sm mt-4">
              <span className="font-semibold text-white">
                Free for 14 days
              </span>{" "}
              - then from ₹999/month -{" "}
              <span className="font-semibold cursor-pointer">
                Cancel anytime
              </span>
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTASection;