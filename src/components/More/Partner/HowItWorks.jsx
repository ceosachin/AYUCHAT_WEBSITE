export default function HowItWorks() {
  const steps = [
    {
      title: "Apply & Get Approved",
      desc: "Fill the form below. Applications are reviewed within 24 hours. No experience needed.",
    },
    {
      title: "Get Your Unique Referral Link",
      desc: "Receive a tracking link with access to your dashboard showing clicks and earnings.",
    },
    {
      title: "Share with Your Network",
      desc: "Share via WhatsApp, email, or social media. AyuChat handles the closing.",
    },
    {
      title: "Earn Every Month",
      desc: "Earn recurring commission every month as long as your clients stay.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>

          {/* Badge */}
          <span className="bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50] px-4 py-1 rounded-full text-xs font-medium">
            HOW IT WORKS
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mt-4 font-['Bricolage_Grotesque']">
            Simple to{" "}
            <span className="text-green-800">Start Earning</span>
          </h2>

          {/* Steps */}
          <div className="mt-10 space-y-8">

            {steps.map((step, i) => (
              <div key={i} className="flex gap-4 items-start">

                {/* Number */}
                <div className="sm:w-10 w-16 h-10 sm:h-10 flex items-center justify-center rounded-xl bg-green-100 text-[#0B6B50] font-bold">
                  {i + 1}
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-semibold text-lg font-['Bricolage_Grotesque']">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {step.desc}
                  </p>

                  {/* Divider */}
                  {i !== steps.length - 1 && (
                    <div className="border-b mt-6 text-gray-300"></div>
                  )}
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* RIGHT SIDE DASHBOARD */}
        <div className="bg-[#0B6B50] text-white rounded-3xl p-6 shadow-xl">

          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <p className="font-semibold font-['Bricolage_Grotesque']">
              Partner Dashboard - Earnings Overview
            </p>
            <span className="bg-green-500 text-black text-xs px-3 py-1 rounded-full">
              SILVER
            </span>
          </div>

          {/* Top Card */}
          <div className="bg-gradient-to-r from-white/10 to-transparent border border-[#0B6B50]/90 rounded-xl p-4 flex justify-between items-center mb-6">
            <div>
              <p className="text-gray-300 text-sm">
                This Month's Commission
              </p>
              <h3 className="text-2xl font-bold text-green-500">
                ₹28,740
              </h3>
            </div>
            <div className="text-right">
              <p className="text-gray-300 text-sm">
                Active Clients
              </p>
              <p className="text-xl font-semibold">24</p>
            </div>
          </div>

          {/* Clients */}
          <div className="space-y-3">
            {[
              { name: "Devraj Hospital", amount: "₹600" },
              { name: "Gupta Sanitary", amount: "₹600" },
              { name: "Tech Solutions Indore", amount: "₹1,400" },
              { name: "MediCare Clinic", amount: "₹200" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-white/10 p-3 rounded-lg"
              >
                <span className="text-sm font-['Bricolage_Grotesque']">{item.name}</span>
                <span className="text-white font-semibold">
                  {item.amount}
                </span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-6 bg-white/10 border border-[#0B6B50]/90 rounded-lg p-3 flex justify-between text-sm">
            <span className="text-gray-300">
              Next payout: June 1, 2026
            </span>
            <span className=" font-semibold">
              ₹28,740 pending
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}