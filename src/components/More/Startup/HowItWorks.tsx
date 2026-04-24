import { Check } from "lucide-react";

const steps = [
  {
    title: "Apply in 3 minutes",
    desc: "Tell us about your startup and how you plan to use WhatsApp",
  },
  {
    title: "Get approved within 24 hours",
    desc: "Our team reviews every application and responds by email",
  },
  {
    title: "Onboarding call + WABA setup",
    desc: "We help you connect your WhatsApp number and send your first campaign",
  },
  {
    title: "180 days to build and grow",
    desc: "Full platform access with priority support throughout the program",
  },
  {
    title: "Graduate with 40% startup discount",
    desc: "Alumni get permanent 40% off all plans for the lifetime of their account",
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-[#F7FAF9] py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>

          {/* Badge */}
          <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            HOW IT WORKS
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            180 Days to{" "}
            <span className="text-green-600">Prove Your Growth</span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 mt-4">
            Apply once, get approved in 24 hours, and start sending your first
            WhatsApp campaign the same day. At the end of 6 months, continue
            with our startup-friendly pricing.
          </p>

          {/* Steps */}
          <div className="mt-8 space-y-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white border border-[#E6F0EC] rounded-xl p-4"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-lg">
                  <Check className="text-green-600 w-5 h-5" />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE (Dashboard UI) */}
        <div className="bg-[#061F19] rounded-2xl p-6 border border-[#123C33] shadow-lg">

          {/* Top Bar */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-gray-400 text-sm ml-2">
              Startup Growth Dashboard
            </span>
          </div>

          {/* Metrics */}
          <div className="space-y-4">

            <Card title="Revenue via WhatsApp" value="₹3.8L" />
            <Card title="Contacts Acquired" value="8,420" />
            <Card title="Chatbot Conversations" value="12,840" />

            {/* Progress Bars */}
            <Progress title="Campaign Delivery Rate" value="96.8%" width="96%" />
            <Progress title="Message Read Rate" value="72.1%" width="72%" />
            <Progress title="Bot Completion Rate" value="68.4%" width="68%" />

          </div>

          {/* Footer */}
          <div className="mt-6 bg-[#0C2E26] border border-[#145C4A] rounded-xl p-4 text-sm text-green-400">
            <span className="font-semibold">PROGRAM STATUS</span>
            <p className="text-gray-300 mt-1">
              Day 142 of 180 · On track for graduation · Priority support active
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}


/* Small Components */

function Card({ title, value }) {
  return (
    <div className="flex justify-between items-center bg-[#0C2E26] px-4 py-3 rounded-lg">
      <span className="text-gray-400 text-sm">{title}</span>
      <span className="text-green-400 font-semibold">{value}</span>
    </div>
  );
}

function Progress({ title, value, width }) {
  return (
    <div className="bg-[#0C2E26] px-4 py-3 rounded-lg">
      <div className="flex justify-between text-sm text-gray-400 mb-2">
        <span>{title}</span>
        <span className="text-green-400">{value}</span>
      </div>
      <div className="w-full h-2 bg-[#123C33] rounded-full">
        <div
          className="h-2 bg-green-400 rounded-full"
          style={{ width: width }}
        ></div>
      </div>
    </div>
  );
}