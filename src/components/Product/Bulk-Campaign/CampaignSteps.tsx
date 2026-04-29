import { useEffect, useState } from "react";
import {
  Rocket,
  ClipboardList,
  FileText,
  Target,
  BarChart3,
} from "lucide-react";

export default function CampaignSteps() {
  const [active, setActive] = useState<number>(1);
  const [pause, setPause] = useState(false);

  const steps = [
    {
      id: 1,
      title: "Connect Your WhatsApp Number",
      desc: "Connect your WhatsApp Business number via Meta Embedded Signup. Takes 2 minutes, no developer needed.",
      right: {
        icon: <Rocket size={28} />,
        title: "Setup Complete",
        desc: "Your WhatsApp Business number is verified. You're ready to start sending.",
      },
    },
    {
      id: 2,
      title: "Import Your Contacts",
      desc: "Upload CSV or import from Facebook Ads. Numbers validated automatically.",
      right: {
        icon: <ClipboardList size={28} />,
        title: "Contacts Imported",
        desc: "5,241 contacts uploaded. 12 duplicates merged automatically.",
      },
    },
    {
      id: 3,
      title: "Create & Submit a Template",
      desc: "Write your message and submit to Meta. Most templates approved in 1–4 hours.",
      right: {
        icon: <FileText size={28} />,
        title: "Template Approved",
        desc: 'Your template "opd_appointment_reminder" is approved and ready.',
      },
    },
    {
      id: 4,
      title: "Select Audience & Schedule",
      desc: "Filter contacts and schedule sending time with smart pacing.",
      right: {
        icon: <Target size={28} />,
        title: "Audience Built",
        desc: "1,200 contacts selected — filtered by city and activity.",
      },
    },
    {
      id: 5,
      title: "Track Results in Real Time",
      desc: "Monitor delivery, read rates, and replies live.",
      right: {
        icon: <BarChart3 size={28} />,
        title: "Campaign Live",
        desc: "96.2% delivered. 71.4% read. Revenue ₹2.4L.",
      },
    },
  ];

  const current = steps.find((s) => s.id === active) || steps[0];

  useEffect(() => {
    if (pause) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev === steps.length ? 1 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [pause, steps.length]);

  return (
    <section
      className="bg-[#f5f7f6] py-12 sm:py-16 lg:py-20 px-4 sm:px-6"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="bg-[#E6F4EF] border border-[#0B6B50]/20 text-green-700 px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium">
            STEP-BY-STEP
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 sm:mt-6">
            How to Launch a Campaign <br />
            <span className="text-[#0B6B50] ">
              in Under 10 Minutes
            </span>
          </h2>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">

          {/* LEFT */}
          <div className="space-y-3 sm:space-y-5">
            {steps.map((step) => (
              <div
                key={step.id}
                onClick={() => setActive(step.id)}
                className={`cursor-pointer flex gap-3 sm:gap-4 items-start p-3 sm:p-4 rounded-xl transition ${
                  active === step.id
                    ? "bg-white shadow-md border border-gray-200"
                    : "hover:bg-white/60"
                }`}
              >
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg text-xs sm:text-sm font-bold ${
                    active === step.id
                      ? "bg-[#0B6B50] text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step.id}
                </div>

                <div>
                  <h3
                    className={`text-sm sm:text-base font-semibold ${
                      active === step.id
                        ? "text-[#0B6B50]"
                        : "text-gray-900"
                    }`}
                  >
                    {step.title}
                  </h3>

                  {active === step.id && (
                    <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2 max-w-md">
                      {step.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT (Converted Card) */}
          <div className="min-h-[220px] sm:min-h-[260px] shadow-md border border-gray-200 bg-white rounded-xl">
            <div className="p-5 sm:p-8">

              <div className="mb-3 sm:mb-4 text-green-700">
                {current.right.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-bold">
                {current.right.title}
              </h3>

              <p className="text-gray-600 mt-2 sm:mt-3 text-sm">
                {current.right.desc}
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}