import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 ">

      {/* Badge */}
      <div className="flex justify-center mb-4 sm:mb-6">
        <span className="px-3 py-2 bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50]  rounded-full text-[10px] sm:text-xs font-semibold">
          KNOWLEDGE BASE
        </span>
      </div>

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="font-['Bricolage_Grotesque'] text-2xl sm:text-3xl md:text-6xl font-extrabold leading-tight text-gray-900">
  Grow Your Business with{" "}
  <span className="text-[#0B6B50] block mt-2">
    Expert WhatsApp
    <br className="hidden sm:block" />
    Strategies
  </span>
</h1>

        <p className="text-gray-600 font-sans-serif mt-4 sm:mt-6 text-sm sm:text-base md:text-lg">
          In-depth guides, proven tactics, and real case studies to help
          you master WhatsApp marketing and drive measurable results.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-lg mx-auto mt-6 sm:mt-10">
        <div className="flex items-center bg-white border border-[#B8D4CA] rounded-2xl shadow-md px-3 sm:px-4 py-2 sm:py-3">
          <input
            type="text"
            placeholder="Search articles, guides, tutorials..."
            className="w-full outline-none text-sm sm:text-base bg-transparent"
          />

          <button className="bg-[#0B6B50] hover:bg-green-700 ml-2 p-2 rounded-lg text-white transition active:scale-95">
            <Search size={18} />
          </button>

        </div>
      </div>

    </section>
  );
};

export default Hero;