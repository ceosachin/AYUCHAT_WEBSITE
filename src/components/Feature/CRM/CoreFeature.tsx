import { Users, Code, Clock, BarChart3, AlertTriangle, Package } from "lucide-react";

export default function  CoreFeatures() {
  const features = [
    {
      icon: <Users size={22} />,
      title: "Advanced Audience Segmentation",
      desc: "Build campaign audiences using any combination of contact fields — tags, custom attributes, city, last purchase date, campaign history, or opt-in source. Send the right message to the right people every time.",
    },
    {
      icon: <Code size={22} />,
      title: "Dynamic Personalization Variables",
      desc: "Map template variables to any contact field. Every recipient gets a message that includes their name, appointment date, order number, city, or any custom field — automatically populated without manual effort.",
    },
    {
      icon: <Clock size={22} />,
      title: "Smart Rate-Paced Scheduling",
      desc: "Schedule campaigns for any time, any day. AyuChat automatically batches your messages to stay within Meta's daily tier limits — preventing quality rating drops while maximizing speed of delivery.",
    },
    {
      icon: <BarChart3 size={22} />,
      title: "Real-Time Per-Message Analytics",
      desc: "Track the delivery status of every individual message — sent, delivered, read, replied, or failed. Filter by status, export the full report as CSV, and understand exactly how each contact engaged with your campaign.",
    },
    {
      icon: <AlertTriangle size={22} />,
      title: "Quality Rating Protection Alerts",
      desc: "AyuChat monitors your WhatsApp Business Account quality rating in real time. Receive automatic alerts when your rating starts dropping — before Meta restricts or flags your number.",
    },
    {
      icon: <Package size={22} />,
      title: "Multi-Media Message Support",
      desc: "Send text, images, documents, videos, audio, and interactive buttons within your WhatsApp campaigns. Attach product catalogues, appointment cards, payment links, or promotional flyers — all within the same campaign.",
    },
  ];

  return (
    <section className="bg-[#f5f7f6] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-block bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50]  px-4 py-1 rounded-full text-xs font-medium mb-6">
          CAMPAIGN FEATURES
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-['Bricolage_Grotesque']">
          Everything You Need to <br />
          <span className="text-[#0B6B50]">
            Run High-Converting Campaigns
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
          AyuChat's campaign engine is built on Meta's official WhatsApp Cloud API v21.0 — 
          giving you the deliverability, speed, and compliance that bulk messaging demands.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-14 text-left">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition"
            >
              {/* Icon */}
              <div className='w-12 h-12 flex items-center justify-center rounded-xl mb-4 bg-[#E6F4EF] text-[#0B6B50]'>
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 font-['Bricolage_Grotesque']">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}