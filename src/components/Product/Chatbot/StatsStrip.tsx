export function StatsStrip() {
  return (
    <div className="w-full border-t border-gray-200">

      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4">

        {/* 1 */}
        <div className="py-6 sm:py-8 md:py-10 text-center border-b md:border-b-0 md:border-r border-gray-200">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#166b4e]">
            96.2%
          </p>
          <p className="text-gray-600 mt-2 text-xs sm:text-sm max-w-[140px] mx-auto">
            Average Delivery Rate
          </p>
        </div>

        {/* 2 */}
        <div className="py-6 sm:py-8 md:py-10 text-center border-b md:border-b-0 md:border-r border-gray-200">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#166b4e]">
            71%
          </p>
          <p className="text-gray-600 mt-2 text-xs sm:text-sm max-w-[140px] mx-auto">
            Average Message Read Rate
          </p>
        </div>

        {/* 3 */}
        <div className="py-6 sm:py-8 md:py-10 text-center border-b md:border-b-0 md:border-r border-gray-200">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#166b4e]">
            500K+
          </p>
          <p className="text-gray-600 mt-2 text-xs sm:text-sm max-w-[140px] mx-auto">
            Messages Sent Daily
          </p>
        </div>

        {/* 4 */}
        <div className="py-6 sm:py-8 md:py-10 text-center">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#166b4e]">
            15x
          </p>
          <p className="text-gray-600 mt-2 text-xs sm:text-sm max-w-[140px] mx-auto">
            Average Campaign ROI
          </p>
        </div>

      </div>
    </div>
  );
}