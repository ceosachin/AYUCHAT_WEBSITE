import { Check } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative py-28 px-6 text-center overflow-hidden">

      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-white to-white -z-10" />
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-200 opacity-30 blur-[120px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50] px-4 py-1.5 rounded-full text-sm font-medium">
          <span className="w-5 h-5 flex items-center justify-center bg-[#0B5B50] text-white rounded-full text-xs">
            <Check size={14} strokeWidth={3.5} />
          </span>
          Official Meta WhatsApp Business Partner
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-[40px] font-['Bricolage_Grotesque'] sm:text-[56px] font-extrabold leading-tight tracking-tight text-gray-900">
          Everything You Need to <br />
          <span className="text-[#0B6B50]">Scale on WhatsApp</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Marketing, automation, CRM, chatbots, and live customer engagement —
          6 powerful products, one unified WhatsApp platform designed for growing Indian businesses.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-[#0B5B50] hover:bg-green-800 text-white px-8 py-3 rounded-xl font-medium shadow-md transition">
            Start for Free - No Card Required →
          </button>

          <button className="border border-gray-300 hover:border-gray-400 px-8 py-3 rounded-xl font-medium bg-white transition">
            Watch Platform Demo →
          </button>
        </div>

        {/* Features Row */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm text-gray-600">
          {[
            "6 core products in one platform",
            "96.2% delivery rate guaranteed",
            "Setup in under 2 minutes",
            "1,000+ businesses trust us",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-[#0B5B50]"><Check size={18} strokeWidth={3.5}/></span>
              <span>{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;