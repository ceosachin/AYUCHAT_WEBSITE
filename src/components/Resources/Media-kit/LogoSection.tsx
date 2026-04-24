import { Zap } from "lucide-react";

export default function LogoSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

      {/* TAG */}
      <span className="text-[10px] sm:text-xs font-bold bg-blue-100 text-[#0B6B50] px-3 py-1 rounded-full">
        LOGO ASSETS
      </span>

      {/* TITLE */}
      <h2 className="text-2xl sm:text-3xl font-bold mt-4">
        Official AyuChat Logos
      </h2>

      {/* DESC */}
      <p className="text-gray-600 mt-2 max-w-xl text-sm sm:text-base">
        Use these logos in all publications, articles, and partner materials.
        Do not modify colors, proportions, or typefaces.
      </p>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">

        {/* DARK */}
        <div className="border hover:border-green-600 rounded-2xl overflow-hidden bg-white 
                        hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] 
                        transition-all duration-300">

          <div className="bg-[#021b14] h-32 sm:h-36 flex items-center justify-center">
            <div className="flex items-center gap-3">

              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#10A87F] flex items-center justify-center text-white shadow-md">
                <Zap size={18} />
              </div>

              <span className="text-white text-lg sm:text-xl font-semibold">
                Ayu<span className="text-[#10A87F]">Chat</span>
              </span>
            </div>
          </div>

          <div className="p-4 sm:p-5">
            <p className="font-semibold text-sm sm:text-base">Primary Logo — Dark</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              For dark backgrounds and brand primary usage
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
              <button className="px-3 py-1 text-sm border rounded-md hover:bg-gray-100">SVG</button>
              <button className="px-3 py-1 text-sm border rounded-md hover:bg-gray-100">PNG</button>
              <button className="px-3 py-1 text-sm rounded-md bg-[#0B6B50] hover:bg-[#09543f] text-white">
                Download All
              </button>
            </div>
          </div>
        </div>

        {/* LIGHT */}
        <div className="border hover:border-green-600 rounded-2xl overflow-hidden bg-white 
                        hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] 
                        transition-all duration-300">

          <div className="bg-[#f8faf9] h-32 sm:h-36 flex items-center justify-center border-b">
            <div className="flex items-center gap-3">

              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0B6B50] flex items-center justify-center text-white shadow-sm">
                <Zap size={18} />
              </div>

              <span className="text-lg sm:text-xl font-semibold text-gray-900">
                Ayu<span className="text-[#0B6B50]">Chat</span>
              </span>
            </div>
          </div>

          <div className="p-4 sm:p-5">
            <p className="font-semibold text-sm sm:text-base">Primary Logo — Light</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              For white and light backgrounds
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
              <button className="px-3 py-1 text-sm border rounded-md hover:bg-gray-100">SVG</button>
              <button className="px-3 py-1 text-sm border rounded-md hover:bg-gray-100">PNG</button>
              <button className="px-3 py-1 text-sm rounded-md bg-[#0B6B50] hover:bg-[#09543f] text-white">
                Download All
              </button>
            </div>
          </div>
        </div>

        {/* ICON */}
        <div className="border hover:border-green-600 rounded-2xl overflow-hidden bg-white 
                        hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] 
                        transition-all duration-300">

          <div className="bg-[#eaf4f1] h-32 sm:h-36 flex items-center justify-center border-b gap-3 sm:gap-4">

            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0B6B50] rounded-2xl flex items-center justify-center text-white shadow">
              <Zap size={20} />
            </div>

            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-xl flex items-center justify-center text-white">
              <Zap size={18} />
            </div>

            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#10A87F] rounded-lg flex items-center justify-center text-white">
              <Zap size={16} />
            </div>

          </div>

          <div className="p-4 sm:p-5">
            <p className="font-semibold text-sm sm:text-base">Icon / App Icon</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              All sizes: 32px, 48px, 72px, 512px
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
              <button className="px-3 py-1 text-sm border rounded-md hover:bg-gray-100">ICO</button>
              <button className="px-3 py-1 text-sm border rounded-md hover:bg-gray-100">PNG</button>
              <button className="px-3 py-1 text-sm rounded-md bg-[#0B6B50] hover:bg-[#09543f] text-white">
                All Sizes
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}