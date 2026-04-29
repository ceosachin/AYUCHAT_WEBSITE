import {
  Users,
  Code,
  Clock,
  BarChart3,
  AlertTriangle,
  Package,
} from "lucide-react";

export default function MultiFeatures() {
  const features = [
    {
      icon: Users,
      title: "Advanced Audience Segmentation",
      desc: "Build campaign audiences using any combination of contact fields — tags, custom attributes, city, last purchase date, campaign history, or opt-in source.",
     },
    {
      icon: Code,
      title: "Dynamic Personalization Variables",
      desc: "Map template variables to any contact field. Every recipient gets a personalized message automatically.",
    },
    {
      icon: Clock,
      title: "Smart Rate-Paced Scheduling",
      desc: "Schedule campaigns while staying within Meta’s limits automatically for better delivery.",
    },
    {
      icon: BarChart3,
      title: "Real-Time Per-Message Analytics",
      desc: "Track delivery, reads, replies, and failures with exportable reports.",
    },
    {
      icon: AlertTriangle,
      title: "Quality Rating Protection Alerts",
      desc: "Get alerts before your WhatsApp quality rating drops or gets restricted.",
    },
    {
      icon: Package,
      title: "Multi-Media Message Support",
      desc: "Send images, videos, documents, and interactive messages in campaigns.",
    },
  ];

  return (
    <section className="bg-[#f5f7f6] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Badge */}
        <span className="inline-block px-3 py-2 text-xs font-semibold bg-[#E6F4EF] border border-[#0B6B50]/20 text-green-700 rounded-full mb-4 sm:mb-6">
          CAMPAIGN FEATURES
        </span>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Everything You Need to <br />
          <span className="text-[#0B6B50]">
            Run High-Converting Campaigns
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base">
          AyuChat's campaign engine is built on Meta's official WhatsApp Cloud API — 
          giving you deliverability, speed, and compliance.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 text-left">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 transition hover:shadow-md "
              >
                {/* Icon */}
                <div
                  className={'w-10 h-10 sm:w-12 bg-[#E6F4EF] text-[#0B6B50]  sm:h-12 flex items-center justify-center rounded-xl mb-4'}
                >
                  <Icon size={18} />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}