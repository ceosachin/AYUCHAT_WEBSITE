import { Check } from "lucide-react";

export default function CommissionTiers() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Badge */}
        <span className="bg-blue-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
          COMMISSION TIERS
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Earn More as{" "}
          <span className="text-green-800">You Grow</span>
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Three partner tiers with increasing commissions. Move up as you refer more customers.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {/* Bronze */}
          <div className="bg-white border rounded-2xl p-8 text-left shadow-sm hover:shadow-md transition h-full flex flex-col justify-between">

            <div>
              <div className="text-center mb-6">
                <p className="text-xl font-bold">Bronze Partner</p>
                <p className="text-sm text-gray-500">1–10 active referrals</p>

                <p className="text-5xl font-bold text-green-800 mt-4">
                  15%
                </p>

                <p className="text-gray-500 text-sm">
                  recurring commission / month
                </p>

                <button className="mt-4 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  Start here
                </button>
              </div>

              <hr className="my-6" />

              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex gap-2"><Check size={18}/> Unique referral link</li>
                <li className="flex gap-2"><Check size={18}/> Real-time tracking dashboard</li>
                <li className="flex gap-2"><Check size={18}/> Monthly payout</li>
                <li className="flex gap-2"><Check size={18}/> Marketing materials</li>
                <li className="flex gap-2"><Check size={18}/> Partner certification</li>
              </ul>
            </div>

          </div>

          {/* Silver (Highlighted) */}
          <div className="bg-green-900 text-white rounded-2xl p-8 shadow-xl  scale-105 relative flex flex-col justify-between">

            <div>
              <div className="text-center mb-6">
                <p className="text-xl font-bold">Silver Partner</p>
                <p className="text-sm text-gray-300">11–30 active referrals</p>

                <p className="text-5xl font-bold text-green-500 mt-4">
                  20%
                </p>

                <p className="text-gray-300 text-sm">
                  recurring commission / month
                </p>

                <button className="mt-4 bg-green-500 text-black px-4 py-2 rounded-full text-sm font-medium">
                  Most partners here
                </button>
              </div>

              <hr className="border-gray-700 my-6" />

              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex gap-2"><Check size={18}/> Everything in Bronze</li>
                <li className="flex gap-2"><Check size={18}/> Priority support</li>
                <li className="flex gap-2"><Check size={18}/> Co-branded materials</li>
                <li className="flex gap-2"><Check size={18}/> Strategy calls</li>
                <li className="flex gap-2"><Check size={18}/> Featured listing</li>
              </ul>
            </div>

          </div>

          {/* Gold */}
          <div className="bg-white border rounded-2xl p-8 text-left shadow-sm hover:shadow-md transition h-full flex flex-col justify-between">

            <div>
              <div className="text-center mb-6">
                <p className="text-xl font-bold">Gold Partner</p>
                <p className="text-sm text-gray-500">31+ active referrals</p>

                <p className="text-5xl font-bold text-green-600 mt-4">
                  30%
                </p>

                <p className="text-gray-500 text-sm">
                  recurring commission / month
                </p>

                <button className="mt-4 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium">
                  Maximum earnings
                </button>
              </div>

              <hr className="my-6" />

              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex gap-2"><Check size={18}/> Everything in Silver</li>
                <li className="flex gap-2"><Check size={18}/> Sub-account portal</li>
                <li className="flex gap-2"><Check size={18}/> White-label option</li>
                <li className="flex gap-2"><Check size={18}/> Dedicated manager</li>
                <li className="flex gap-2"><Check size={18}/> Custom pricing</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}