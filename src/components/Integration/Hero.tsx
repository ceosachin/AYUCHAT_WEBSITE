import { ArrowRight } from "lucide-react";
import React from "react";

/* ================= MAIN ================= */

const Hero: React.FC = () => {
  return (
    <div className="bg-[#F5F7F6] py-14 sm:py-28 px-4 sm:px-6 text-center">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h1 className="font-['Bricolage_Grotesque'] text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-[#1C1C1C] leading-tight">
          AyuChat Works With
          <br />
          <span className="text-[#0B6B50]">Every Tool You Use</span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Connect your e-commerce store, CRM, payment gateway, and
          marketing tools to AyuChat. Automate WhatsApp workflows triggered
          by real business events.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-6 sm:mt-8">

  {/* Primary Button */}
  <button className="w-full sm:w-auto bg-[#0B6B50] text-white px-6 sm:px-7 py-3 rounded-xl text-sm sm:text-base font-semibold hover:bg-[#09543d] transition flex items-center justify-center">
    Explore All Integrations
  </button>

  {/* Secondary Button */}
  <button className="w-full sm:w-auto border border-gray-300 text-gray-800 px-6 sm:px-7 py-3 rounded-xl text-sm sm:text-base font-medium hover:bg-gray-100 transition flex items-center justify-center gap-2">
    API Documentation
    <ArrowRight size={16} />
  </button>

</div>

        {/* Icons Row */}
        <div className="flex justify-center items-center gap-2 sm:gap-4 mt-10 sm:mt-16 flex-wrap">

          <FloatingIcon bg="bg-blue-500" text="f" delay="0s" />
          <Arrow />
          <FloatingIcon bg="bg-green-500" text="S" delay="0.4s" />
          <Arrow />
          <FloatingIcon bg="bg-red-500" text="Z" delay="0.8s" />
          <Arrow />

          {/* CENTER */}
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#0B6B50] text-white rounded-xl flex items-center justify-center text-lg sm:text-xl font-bold shadow-lg">
            ⚡
          </div>

          <Arrow />
          <FloatingIcon bg="bg-[#0F2B50]" text="R" delay="0.2s" />
          <Arrow />
          <FloatingIcon bg="bg-green-600" text="G" delay="0.6s" />
          <Arrow />
          <FloatingIcon bg="bg-orange-500" text="W" delay="1s" />

        </div>

      </div>
    </div>
  );
};

export default Hero;

/* ================= FLOATING ICON ================= */

type FloatingIconProps = {
  bg: string;
  text: string;
  delay: string;
};

const FloatingIcon: React.FC<FloatingIconProps> = ({ bg, text, delay }) => {
  return (
    <div
      className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 ${bg} text-white rounded-xl flex items-center justify-center text-sm sm:text-base font-bold shadow-md animate-bubble transform-gpu`}
      style={{ animationDelay: delay }}
    >
      {text}
    </div>
  );
};

/* ================= ARROW ================= */

const Arrow: React.FC = () => {
  return (
    <span className="text-gray-400 text-base sm:text-xl">→</span>
  );
};