import { Download, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-[#031d17] via-[#062f26] to-[#02110d] text-white py-16 sm:py-20 text-center px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Tag */}
        <p className="text-sm text-green-400 mb-4">
          <span className="bg-white/20 border border-green-400/30 px-3  py-2 rounded-full text-xs font-semibold">
            PRESS & BRAND RESOURCES
          </span>
        </p>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 max-w-3xl leading-snug font-['Bricolage_Grotesque']">
          AyuChat <span className="text-green-400">Media Kit</span>
        </h1>

        {/* Description */}
        <p className="max-w-xl text-white/80 mb-8 text-sm sm:text-base">
          Official brand assets, logos, color guidelines, product screenshots, and company facts.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto">
          <button className="bg-green-400 hover:bg-green-600 text-black font-semibold flex items-center justify-center gap-2 px-5 py-3 rounded-lg w-full sm:w-auto transition">
            <Download size={16} />
            Download Complete Brand Kit
          </button>
          <button className="border border-white/20 text-white bg-white/10 flex items-center justify-center gap-2 px-5 py-3 rounded-lg w-full sm:w-auto hover:bg-white/20 transition">
            Press Contact
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}