export function StatsStrip() {
  return (
    <div className="w-full  border-t border-gray-300">

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">

        {/* 1 */}
        <div className="py-10 text-center border-r border-gray-300">
          <p className="text-4xl font-bold text-[#166b4e]">24/7</p>
          <p className="text-gray-600 mt-2 text-sm">
            Bot Always Online
          </p>
        </div>

        {/* 2 */}
        <div className="py-10 text-center border-r border-gray-300">
          <p className="text-4xl font-bold text-[#166b4e]">200+</p>
          <p className="text-gray-600 mt-2 text-sm">
            Queries Handled Daily
          </p>
        </div>

        {/* 3 */}
        <div className="py-10 text-center border-r border-gray-300">
          <p className="text-4xl font-bold text-[#166b4e]">Zero</p>
          <p className="text-gray-600 mt-2 text-sm">
            Code Required
          </p>
        </div>

        {/* 4 */}
        <div className="py-10 text-center">
          <p className="text-4xl font-bold text-[#166b4e]">3 min</p>
          <p className="text-gray-600 mt-2 text-sm">
            Average Build Time
          </p>
        </div>

      </div>
    </div>
  );
}