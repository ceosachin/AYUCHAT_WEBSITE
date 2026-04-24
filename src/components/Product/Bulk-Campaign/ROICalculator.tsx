import { useState } from "react";

export default function ROICalculator() {
  const [contacts, setContacts] = useState(1000);
  const [conversion, setConversion] = useState(5);
  const [orderValue, setOrderValue] = useState(2500);

  // Calculations
  const conversions = Math.round((contacts * conversion) / 100);
  const revenue = conversions * orderValue;
  const cost = Math.round(contacts * 0.25);
  const roi = cost ? Math.round(revenue / cost) : 0;

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Badge */}
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium">
          ROI CALCULATOR
        </span>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 sm:mt-6">
          Calculate Your{" "}
          <span className="text-green-700">Campaign Returns</span>
        </h2>

        {/* Main Card */}
        <div className="mt-8 sm:mt-12 bg-[#031d17] text-white rounded-3xl p-5 sm:p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

          {/* LEFT */}
          <div className="space-y-6 sm:space-y-8 text-left">

            {/* CONTACTS */}
            <div>
              <p className="text-gray-400 text-xs mb-1">
                CONTACTS IN CAMPAIGN
              </p>
              <p className="text-xl sm:text-2xl text-green-400 font-bold">
                {contacts.toLocaleString()}
              </p>

              <input
                type="range"
                min={100}
                max={10000}
                step={100}
                value={contacts}
                onChange={(e) => setContacts(Number(e.target.value))}
                className="w-full mt-3 accent-green-500"
              />
            </div>

            {/* CONVERSION */}
            <div>
              <p className="text-gray-400 text-xs mb-1">
                AVERAGE CONVERSION RATE (%)
              </p>
              <p className="text-xl sm:text-2xl text-green-400 font-bold">
                {conversion}%
              </p>

              <input
                type="range"
                min={1}
                max={20}
                step={1}
                value={conversion}
                onChange={(e) => setConversion(Number(e.target.value))}
                className="w-full mt-3 accent-green-500"
              />
            </div>

            {/* ORDER VALUE */}
            <div>
              <p className="text-gray-400 text-xs mb-1">
                AVERAGE ORDER VALUE (₹)
              </p>
              <p className="text-xl sm:text-2xl text-green-400 font-bold">
                ₹{orderValue.toLocaleString()}
              </p>

              <input
                type="range"
                min={500}
                max={10000}
                step={100}
                value={orderValue}
                onChange={(e) => setOrderValue(Number(e.target.value))}
                className="w-full mt-3 accent-green-500"
              />
            </div>

          </div>

          {/* RIGHT */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 text-left">

            <p className="text-gray-400 text-xs sm:text-sm mb-4">
              ESTIMATED RESULTS
            </p>

            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">

              <div className="flex justify-between border-b border-white/10 pb-2 sm:pb-3">
                <span className="text-gray-400">Meta messaging cost</span>
                <span className="font-semibold text-white">₹{cost}</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-2 sm:pb-3">
                <span className="text-gray-400">Expected conversions</span>
                <span className="font-semibold text-white">{conversions}</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-2 sm:pb-3">
                <span className="text-gray-400">Estimated revenue</span>
                <span className="font-semibold text-green-400">
                  ₹{revenue.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between pt-2">
                <span className="text-gray-400">Campaign ROI</span>
                <span className="text-xl sm:text-2xl font-bold text-green-400">
                  {roi}x
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}