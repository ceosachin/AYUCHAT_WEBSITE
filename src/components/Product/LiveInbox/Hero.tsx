export default function Hero() {
  return (
    <section className="relative bg-[#031c1a] text-white py-24 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT SIDE */}
        <div>

          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-green-900/40 text-green-400 px-4 py-1 rounded-full text-sm mb-6">
            ✅ Real-Time Multi-Agent Inbox
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Your Entire Team. <br />
            One WhatsApp <br />
            <span className="text-green-400">Inbox.</span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 mt-6 max-w-lg">
            Every customer conversation, managed by your whole team in real time.
            AyuChat's shared inbox keeps all agents synchronized — assign chats,
            add notes, track response times, and never miss a conversation again.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8 flex-wrap">
            <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-xl transition">
              Start Free — 14 Days →
            </button>

            <button className="border border-gray-600 hover:border-gray-400 px-6 py-3 rounded-xl transition">
              See Live Demo →
            </button>
          </div>

          {/* Footer */}
          <div className="flex gap-6 mt-6 text-gray-400 text-sm flex-wrap">
            <span>✔ Official Meta Partner</span>
            <span>✔ 1,000+ businesses trust us</span>
            <span>✔ No credit card required</span>
          </div>

        </div>

        {/* RIGHT SIDE DASHBOARD */}
        <div className="relative">

          {/* Glow */}
          <div className="absolute inset-0 bg-green-500/10 blur-3xl rounded-3xl"></div>

          <div className="relative bg-[#0b2a27]/80 backdrop-blur-lg border border-gray-700 rounded-3xl p-6 shadow-xl">

            <p className="text-gray-400 text-sm mb-4">
              LIVE REAL-TIME MULTI-AGENT INBOX DASHBOARD
            </p>

            <div className="space-y-4">

              {/* Cards */}
              <div className="flex justify-between bg-[#143a35] p-4 rounded-xl">
                <span className="text-gray-300">Active Today</span>
                <span className="text-green-400 font-semibold">Real-Time</span>
              </div>

              <div className="flex justify-between bg-[#143a35] p-4 rounded-xl">
                <span className="text-gray-300">Performance</span>
                <span className="text-green-400 font-semibold">Unlimited</span>
              </div>

              {/* Progress */}
              <Progress label="Success Rate" value="96.2%" />
              <Progress label="Satisfaction" value="98%" text="4.9/5" />

            </div>

            {/* Bottom Feature Box */}
            <div className="mt-6 border border-green-500/30 bg-green-900/20 p-4 rounded-xl">
              <p className="text-green-400 text-sm mb-1">FEATURE ACTIVE</p>
              <p className="text-gray-300 text-sm">
                Real-Time Multi-Agent Inbox — running for 1,000+ businesses across India
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
function Progress({ label = "", value = "0%", text = "" }) {
  const width = value.includes("%") ? value : "0%";

  return (
    <div className="bg-[#143a35] p-4 rounded-xl">
      <div className="flex justify-between text-sm text-gray-300 mb-2">
        <span>{label}</span>
        <span className="text-green-400">{text || value}</span>
      </div>

      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-400 rounded-full transition-all duration-700 ease-out"
          style={{ width }}
        ></div>
      </div>
    </div>
  );
}