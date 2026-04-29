import { Search } from "lucide-react";

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-[#031d17] via-[#062f26] to-[#02110d] text-white py-14 sm:py-20 px-4 sm:px-6 text-center">

      {/* TAG */}
      <div className="mb-4 flex justify-center">
        <span className="bg-white/20  border border-green-400/20 text-green-400 px-3 py-1 rounded-full text-xs sm:text-xs font-semibold">
          DOCUMENTATION & SUPPORT
        </span>
      </div>

      {/* HEADING */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight text-green-400 font-['Bricolage_Grotesque']">
        How Can We Help You?
      </h1>

      {/* DESCRIPTION */}
      <p className="max-w-2xl mx-auto mb-6 sm:mb-8 opacity-80 text-sm sm:text-base">
        Search our documentation, guides, and tutorials. Find answers to any AyuChat question in seconds.
      </p>

      {/* SEARCH */}
      <div className="max-w-xl mx-auto bg-white rounded-xl flex items-center p-2 shadow-md">
        
        <input
          className="flex-1 px-3 sm:px-4 py-2 text-gray-700 outline-none text-sm sm:text-base"
          placeholder="Search for guides, tutorials..."
        />

        <button className="bg-[#0B6B50] text-white p-2 sm:p-3 rounded-lg">
          <Search size={18} />
        </button>

      </div>

      {/* TAGS */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6">
        {[
          "Connect WhatsApp",
          "Template rejected",
          "Quality rating",
          "Campaign failed",
          "Chatbot setup",
        ].map((t) => (
          <span
            key={t}
            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 rounded-full text-xs sm:text-sm"
          >
            {t}
          </span>
        ))}
      </div>

      {/* BILLING */}
      <div className="flex justify-center mt-3">
        <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 rounded-full text-xs sm:text-sm">
          Billing
        </span>
      </div>

    </div>
  );
}