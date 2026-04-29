import { Check, X } from "lucide-react";

export function Guidelines() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-16 sm:mt-20 lg:mt-24">

      {/* Tag */}
      <p className="text-[10px] sm:text-xs bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50] px-3 sm:px-4 py-1 rounded-full inline-block mb-4 font-semibold tracking-wide">
        USAGE GUIDELINES
      </p>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-['Bricolage_Grotesque']">
        Brand Do&apos;s and Don&apos;ts
      </h2>

      {/* Subtitle */}
      <p className="text-gray-500 text-sm sm:text-base mb-8 sm:mb-10">
        Follow these guidelines to represent AyuChat accurately and consistently.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">

        {/* DO CARD */}
        <div className="border border-green-200 bg-[#EAF7F1] rounded-xl p-4 sm:p-6">

          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-600 text-white p-2 rounded-full">
              <Check size={16} />
            </div>
            <h3 className="font-semibold text-green-800 text-sm sm:text-base font-['Bricolage_Grotesque']">
              Do - Correct Usage
            </h3>
          </div>

          <ul className="text-xs sm:text-sm text-gray-700 space-y-2 sm:space-y-3">
            <li className="flex gap-2">
              <span className="text-green-600">•</span>
              Use the logo in its original green and dark colors
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">•</span>
              Maintain clear space around the logo equal to the height of 'A' in AyuChat
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">•</span>
              Use approved logo files only (SVG or high-res PNG)
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">•</span>
              Refer to the company as "AyuChat" - not "Ayuchat" or "ayu chat"
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">•</span>
              Use the logo on backgrounds that provide sufficient contrast
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">•</span>
              Resize the logo proportionally while maintaining aspect ratio
            </li>
          </ul>

        </div>

        {/* DON'T CARD */}
        <div className="border border-red-200 bg-[#FDECEC] rounded-xl p-4 sm:p-6">

          <div className="flex items-center gap-3 mb-4">
            <div className="bg-red-600 text-white p-2 rounded-full">
              <X size={16} />
            </div>
            <h3 className="font-semibold text-red-800 text-sm sm:text-base font-['Bricolage_Grotesque']">
              Don&apos;t - Incorrect Usage
            </h3>
          </div>

          <ul className="text-xs sm:text-sm text-gray-700 space-y-2 sm:space-y-3">
            <li className="flex gap-2">
              <span className="text-red-600">•</span>
              Do not modify logo colors or use unapproved color combinations
            </li>
            <li className="flex gap-2">
              <span className="text-red-600">•</span>
              Do not stretch, distort, or skew the logo mark or wordmark
            </li>
            <li className="flex gap-2">
              <span className="text-red-600">•</span>
              Do not place the logo on backgrounds with insufficient contrast
            </li>
            <li className="flex gap-2">
              <span className="text-red-600">•</span>
              Do not add drop shadows, outlines, or effects to the logo
            </li>
            <li className="flex gap-2">
              <span className="text-red-600">•</span>
              Do not use outdated logo versions or create your own variations
            </li>
            <li className="flex gap-2">
              <span className="text-red-600">•</span>
              Do not use AyuChat branding to imply official endorsement without written permission
            </li>
          </ul>

        </div>

      </div>
    </div>
  );
}