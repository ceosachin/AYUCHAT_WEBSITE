export function StatsStrip() {
  return (
    <div className="w-full border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4">

        {/* Item */}
        <StatItem value="96.2%" label="Average Delivery Rate" />
        <StatItem value="71%" label="Average Message Read Rate" />
        <StatItem value="500K+" label="Messages Sent Daily" />
        <StatItem value="15x" label="Average Campaign ROI" />

      </div>
    </div>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="py-6 sm:py-8 md:py-10 text-center border-b md:border-b-0 md:border-r border-gray-200 last:border-r-0">

      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#166b4e]">
        {value}
      </p>

      <p className="text-gray-600 mt-2 text-xs sm:text-sm max-w-[140px] sm:max-w-none mx-auto">
        {label}
      </p>

    </div>
  );
}