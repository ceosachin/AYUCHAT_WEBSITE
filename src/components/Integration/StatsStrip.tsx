export function StatsStrip() {
  return (
    <div className="w-full border-t border-b border-gray-300">

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 font-['Bricolage_Grotesque']">

        {/* 1 */}
        <div className="py-6 sm:py-10 text-center border-b md:border-b-0 md:border-r border-gray-300">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#166b4e]">
            96.2%
          </p>
          <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm">
            Average Delivery Rate
          </p>
        </div>

        {/* 2 */}
        <div className="py-6 sm:py-10 text-center border-b md:border-b-0 md:border-r border-gray-300">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#166b4e]">
            71%
          </p>
          <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm">
            Average Message Read Rate
          </p>
        </div>

        {/* 3 */}
        <div className="py-6 sm:py-10 text-center border-r md:border-r border-gray-300">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#166b4e]">
            500K+
          </p>
          <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm">
            Messages Sent Daily
          </p>
        </div>

        {/* 4 */}
        <div className="py-6 sm:py-10 text-center">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#166b4e]">
            15x
          </p>
          <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm">
            Average Campaign ROI
          </p>
        </div>

      </div>
    </div>
  );
}