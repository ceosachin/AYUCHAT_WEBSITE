export function StatsStrip() {
  return (
    <div className="w-full border-t border-gray-300">

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">

        {/* 1 */}
        <div className="py-6 sm:py-10 text-center border-b border-r md:border-b-0 border-gray-300 font-['Bricolage_Grotesque']">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#166b4e]">
            8+
          </p>
          <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm">
            Trigger Types Available
          </p>
        </div>

        {/* 2 */}
        <div className="py-6 sm:py-10 text-center border-b md:border-b-0 md:border-r border-gray-300 font-['Bricolage_Grotesque']">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#166b4e]">
            Unlimited
          </p>
          <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm">
            Active Automation Flows
          </p>
        </div>

        {/* 3 */}
        <div className="py-6 sm:py-10 text-center border-r border-gray-300 font-['Bricolage_Grotesque']">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#166b4e]">
            Zero
          </p>
          <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm">
            Code or Developers
          </p>
        </div>

        {/* 4 */}
        <div className="py-6 sm:py-10 text-center font-['Bricolage_Grotesque']">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#166b4e]">
            100%
          </p>
          <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm">
            Runs Automatically
          </p>
        </div>

      </div>
    </div>
  );
}