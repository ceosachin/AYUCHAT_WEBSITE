const StatsBanner: React.FC = () => {
  return (
    <section className="px-6 py-10">

      <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden px-8 py-10 md:px-12 md:py-12">

        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#021a14] via-[#052e25] to-[#021a14]" />
        
        {/* Soft Glow Effect */}
        <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-green-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-green-400/10 blur-[120px] rounded-full" />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between gap-10 items-start md:items-center">

          {/* Left Content */}
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-['Bricolage_Grotesque']">
              One Platform. Six Powerful Products.
            </h2>

            <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              AyuChat replaces five different tools - your bulk sender, chatbot platform,
              automation software, CRM, and inbox - into one unified WhatsApp operating system.
              Click any product below to explore it in depth.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 text-left sm:text-center w-full md:w-auto">

            {[
              { value: "500K+", label: "Daily Messages" },
              { value: "96.2%", label: "Delivery Rate" },
              { value: "1,000+", label: "Businesses" },
              { value: "15x", label: "Avg Campaign ROI" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-2xl sm:text-3xl font-bold text-green-400 font-['Bricolage_Grotesque']">
                  {item.value}
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>

    </section>
  );
};

export default StatsBanner;