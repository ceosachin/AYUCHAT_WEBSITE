import {
  Users,
  Code,
  Clock,
  BarChart3,
  AlertTriangle,
  Package,
} from "lucide-react";

export default function CampaignFeatures() {
  const features = [
    {
      icon: <Users size={20} />,
      title: "Advanced Audience Segmentation",
      desc: "Build campaign audiences using any combination of contact fields — tags, custom attributes, city, last purchase date, campaign history, or opt-in source.",
      bg: "bg-green-100 text-green-700",
    },
    {
      icon: <Code size={20} />,
      title: "Dynamic Personalization Variables",
      desc: "Map template variables to any contact field. Every recipient gets personalized messages automatically.",
      bg: "bg-gray-200 text-gray-700",
    },
    {
      icon: <Clock size={20} />,
      title: "Smart Rate-Paced Scheduling",
      desc: "Schedule campaigns and automatically stay within Meta limits while maximizing delivery speed.",
      bg: "bg-yellow-100 text-yellow-700",
    },
    {
      icon: <BarChart3 size={20} />,
      title: "Real-Time Per-Message Analytics",
      desc: "Track delivery, reads, replies, and export detailed campaign reports.",
      bg: "bg-purple-100 text-purple-700",
    },
    {
      icon: <AlertTriangle size={20} />,
      title: "Quality Rating Protection Alerts",
      desc: "Get alerts before your WhatsApp quality rating drops or gets restricted.",
      bg: "bg-red-100 text-red-700",
    },
    {
      icon: <Package size={20} />,
      title: "Multi-Media Message Support",
      desc: "Send images, videos, docs, audio, buttons, and more in one campaign.",
      bg: "bg-teal-100 text-teal-700",
    },
  ];

  return (
    <section className="bg-[#f5f7f6] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium mb-4 sm:mb-6">
          CAMPAIGN FEATURES
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Everything You Need to <br />
          <span className="text-green-700">
            Run High-Converting Campaigns
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base">
          AyuChat's campaign engine is built on Meta's official WhatsApp Cloud API v21.0 —
          giving you the deliverability, speed, and compliance that bulk messaging demands.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-14 text-left">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-5 sm:p-6 hover:shadow-md hover:border-green-500 transition"
            >
              {/* Icon */}
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl mb-3 sm:mb-4 ${item.bg}`}
              >
                {item.icon}
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
          ))}
        </div>

      </div>
    </section>
  );
}