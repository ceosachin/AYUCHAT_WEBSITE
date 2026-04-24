import { useState } from "react";

export default function EarningsCalculator() {
  const [clients, setClients] = useState(5);
  const [plan, setPlan] = useState(2999);
  const [commission, setCommission] = useState(20);

  const monthlyNew = Math.round((clients * plan * commission) / 100);
  const totalClients = clients * 6;
  const recurring = Math.round((totalClients * plan * commission) / 100);
  const annual = recurring * 6;

  return (
    <section className="py-24 px-6 bg-[#f7f7f7]">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold">
          Calculate Your{" "}
          <span className="text-green-800">Monthly Commission</span>
        </h2>

        <p className="text-gray-500 mt-4">
          Move the sliders to see your estimated earnings
        </p>

        {/* Card */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden">

          {/* Header */}
          <div className="bg-green-900 text-white px-6 py-4 flex justify-between items-center">
            <h3 className="font-semibold">
              AyuChat Partner Earnings Estimator
            </h3>
            <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">
              LIVE ESTIMATE
            </span>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8 p-8">

            {/* LEFT SIDE */}
            <div className="space-y-8">

              {/* Clients */}
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  Clients per month
                </p>
                <p className="text-xl font-bold text-green-700">
                  {clients} clients
                </p>

                <input
                  type="range"
                  min="1"
                  max="20"
                  value={clients}
                  onChange={(e) => setClients(e.target.value)}
                  className="w-full accent-green-600"
                />
              </div>

              {/* Plan */}
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  Average plan value
                </p>
                <p className="text-xl font-bold text-green-700">
                  ₹{plan} / mo
                </p>

                <input
                  type="range"
                  min="999"
                  max="10000"
                  step="500"
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                  className="w-full accent-green-600"
                />
              </div>

              {/* Tier */}
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  Your partner tier
                </p>
                <p className="text-xl font-bold text-green-700">
                  {commission === 15
                    ? "Bronze"
                    : commission === 20
                    ? "Silver"
                    : "Gold"}{" "}
                  — {commission}%
                </p>

                <input
                  type="range"
                  min="15"
                  max="30"
                  step="5"
                  value={commission}
                  onChange={(e) => setCommission(e.target.value)}
                  className="w-full accent-green-600"
                />
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="bg-gray-100 rounded-xl p-6 space-y-6">

              <div className="flex justify-between">
                <span className="text-gray-600">
                  Monthly from new clients
                </span>
                <span className="font-semibold">₹{monthlyNew}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">
                  Total clients after 6 months
                </span>
                <span className="font-semibold">{totalClients}</span>
              </div>

              <div className="flex justify-between text-green-600 font-semibold text-lg">
                <span>Monthly recurring (6mo)</span>
                <span>₹{recurring}</span>
              </div>

              <div className="flex justify-between text-green-900 font-bold text-xl">
                <span>Annual total earnings</span>
                <span>₹{annual}</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}