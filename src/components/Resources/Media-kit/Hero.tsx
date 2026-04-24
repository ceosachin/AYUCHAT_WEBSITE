import { Download, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="bg-[#157a63] text-white py-16 sm:py-20 text-center px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Tag */}
        <p className="text-sm text-white/70 mb-4">
          <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
            PRESS & BRAND RESOURCES
          </span>
        </p>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 max-w-3xl leading-snug">
          AyuChat <span className="text-[#10A87F]">Media Kit</span>
        </h1>

        {/* Description */}
        <p className="max-w-xl text-white/80 mb-8 text-sm sm:text-base">
          Official brand assets, logos, color guidelines, product screenshots, and company facts.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto">

          {/* Download Button */}
          <button className="bg-[#10A87F] hover:bg-green-600 text-white flex items-center justify-center gap-2 px-5 py-3 rounded-lg w-full sm:w-auto transition">
            <Download size={16} />
            Download Complete Brand Kit
          </button>

          {/* Outline Button */}
          <button className="border border-white/20 text-white bg-white/10 flex items-center justify-center gap-2 px-5 py-3 rounded-lg w-full sm:w-auto hover:bg-white/20 transition">
            Press Contact
            <ArrowRight size={16} />
          </button>

        </div>
      </div>
    </div>
  );
}