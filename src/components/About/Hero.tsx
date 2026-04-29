// components/about/Hero.tsx

import { Check, CheckCircle } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="text-center py-20 px-6">
      <div className="max-w-5xl mx-auto">

         <div className="flex items-center justify-center gap-3 text-sm text-gray-400 mb-6 mt-8 sm:mt-0">
  
  <div className="flex items-center gap-2 bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50] px-3 py-1 rounded-full text-xs font-bold">
    
    <div className="flex items-center justify-center w-5 h-5 bg-[#0B6B50] rounded-full"> <Check size={14} strokeWidth={4.5} className="text-white"/></div>
           Official Meta WhatsApp Business Platform
        </div>
</div>

        <h1 className="text-4xl sm:text-6xl font-bold mt-6 leading-tight font-['Bricolage_Grotesque']">
          Building the Future of <br />
          <span className="text-[#0B6B50]">WhatsApp Business</span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
          We started AyuChat with one conviction — every Indian business deserves
          the power of direct, personal communication at scale.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[#0B6B50] text-white px-6 py-3 rounded-lg hover:bg-green-800 transition">
            Start for Free →
          </button>
          <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
            Meet Our Team →
          </button>
        </div>

        <div className="mt-8 text-sm text-gray-500 flex flex-wrap justify-center gap-6">
          <span className="flex items-center gap-2">
            <CheckCircle size={16} className="text-[#0B6B50]" /> Founded 2026 · Gwalior, India</span>
          <span className="flex items-center gap-2">
            <CheckCircle size={16} className="text-[#0B6B50]" /> 1,000+ businesses trust us</span>
          <span className="flex items-center gap-2">
            <CheckCircle size={16} className="text-[#0B6B50]" /> By Agnistoka Technology</span>
        </div>

      </div>
    </section>
  );
};

export default Hero;