export default function TypographySection() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* TAG */}
        <span className="text-[10px] sm:text-xs font-semibold bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50] px-3 py-1 rounded-full">
          TYPOGRAPHY
        </span>

        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 font-['Bricolage_Grotesque']">
          Brand Typefaces
        </h2>

        {/* DESC */}
        <p className="text-gray-600 mt-3 max-w-2xl text-sm sm:text-base">
          AyuChat uses Bricolage Grotesque for display headings and Inter for body text.
          Both are available free from Google Fonts.
        </p>

        {/* DARK CARD */}
        <div className="mt-8 sm:mt-10 bg-gradient-to-br from-[#031d17] via-[#062f26] to-[#02110d] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-white">

          {/* DISPLAY */}
          <p className="text-[10px] sm:text-xs text-gray-200 tracking-widest uppercase">
            Display — Bricolage Grotesque
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3 leading-tight font-['Bricolage_Grotesque']">
            Send Smarter.
          </h1>

          <p className="text-xs sm:text-sm text-gray-200 mt-3 leading-relaxed">
            Weight: 800 (ExtraBold) &nbsp;&nbsp; Letter-spacing: -2px &nbsp;&nbsp; Used for: H1, H2, hero text
          </p>

          <div className="border-t border-white/30 my-6 sm:my-8"></div>

          {/* HEADING */}
          <p className="text-[10px] sm:text-xs text-gray-200 tracking-widest uppercase">
            Heading — Bricolage Grotesque
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-3 font-['Bricolage_Grotesque']">
            Platform Features & Tools
          </h2>

          <p className="text-xs sm:text-sm text-gray-200 mt-3 leading-relaxed">
            Weight: 700 (Bold) &nbsp;&nbsp; Letter-spacing: -1px &nbsp;&nbsp; Used for: H3, card headings
          </p>

          <div className="border-t border-white/30 my-6 sm:my-8"></div>

          {/* BODY */}
          <p className="text-[10px] sm:text-xs text-gray-200 tracking-widest uppercase">
            Body — Inter
          </p>

          <p className="text-gray-200 mt-3 leading-relaxed max-w-3xl text-sm sm:text-base">
            AyuChat is the all-in-one WhatsApp Business API platform built for growing businesses.
            Automate campaigns, deploy chatbots, and close more deals - directly on WhatsApp.
          </p>

          <p className="text-xs sm:text-sm text-gray-200 mt-3">
            Weight: 400 (Regular) &nbsp;&nbsp; Line-height: 1.65 &nbsp;&nbsp; Used for: Body copy, descriptions
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
          
          <button className="w-full sm:w-auto border border-gray-300 hover:bg-gray-100 px-5 py-2.5 rounded-md text-sm font-medium transition">
            Download Bricolage Grotesque →
          </button>

          <button className="w-full sm:w-auto border border-gray-300 hover:bg-gray-100 px-5 py-2.5 rounded-md text-sm font-medium transition">
            Download Inter →
          </button>

        </div>

      </div>
    </div>
  );
}