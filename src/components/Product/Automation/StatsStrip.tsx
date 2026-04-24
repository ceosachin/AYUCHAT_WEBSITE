export function StatsStrip() {
  return (
    <div className="w-full  border-t border-gray-300">

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">

        {/* 1 */}
        <div className="py-10 text-center border-r border-gray-300">
          <p className="text-4xl font-bold text-[#166b4e]">8+</p>
          <p className="text-gray-600 mt-2 text-sm">
            Trigger Types Available 
          </p>
        </div>

        {/* 2 */}
        <div className="py-10 text-center border-r border-gray-300">
          <p className="text-4xl font-bold text-[#166b4e]">Unlimited</p>
          <p className="text-gray-600 mt-2 text-sm">
            Active Automation Flows
          </p>
        </div>

        {/* 3 */}
        <div className="py-10 text-center border-r border-gray-300">
          <p className="text-4xl font-bold text-[#166b4e]">Zero</p>
          <p className="text-gray-600 mt-2 text-sm">
            Code or Developers
          </p>
        </div>

        {/* 4 */}
        <div className="py-10 text-center">
          <p className="text-4xl font-bold text-[#166b4e]">100%</p>
          <p className="text-gray-600 mt-2 text-sm">
            Runs Automatically
          </p>
        </div>

      </div>
    </div>
  );
}