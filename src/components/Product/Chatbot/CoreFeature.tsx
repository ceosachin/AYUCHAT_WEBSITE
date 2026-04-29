import { Users, Code, Clock, BarChart3, AlertTriangle, Package } from "lucide-react";

export default function CoreFeatures() {
  const features = [
    {
      icon: <Users size={22} />,
      title: "Visual Canvas Builder",
      desc: "Design chatbot flows on an infinite drag-and-drop canvas. Connect nodes with arrows, add conditions, create branches - the interface makes even complex flows feel simple.",
    },
    {
      icon: <Code size={22} />,
      title: "Keyword Triggers",
      desc: "Set any word or phrase to activate a specific chatbot flow. 'Book', 'price', 'help' - configure multiple keywords per bot and route customers to exactly the right conversation path.",
    },
    {
      icon: <Clock size={22} />,
      title: "WhatsApp Button Menus",
      desc: "Use WhatsApp's native button and list message formats to guide customers through structured menus. Tap-to-respond beats free-text input for 3x higher completion rates.",
    },
    {
      icon: <BarChart3 size={22} />,
      title: "Collect & Save Inputs",
      desc: "Ask questions and automatically save answers to contact fields — name, phone, appointment date, product interest. Every answer captured, stored, ready for campaigns.",
    },
    {
      icon: <AlertTriangle size={22} />,
      title: "Smart Fallback Handling",
      desc: "When the bot doesn't understand a message, it gracefully offers alternatives, restarts the flow, or hands off to a live agent  keeping the customer engaged instead of abandoning.",
    },
    {
      icon: <Package size={22} />,
      title: "Live WhatsApp Preview",
      desc: "See exactly how your chatbot looks on an actual WhatsApp phone screen as you build. Test the full conversation flow before publishing - what you see is exactly what customers experience.",
    },
  ];

  return (
    <section className="bg-[#f5f7f6] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-block bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50] px-4 py-1 rounded-full text-xs font-medium mb-6">
          CORE FEATURES
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Every Capability You Need <br />
          <span className="text-[#0B6B50]">
            in One Place
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
          Built on Meta's official WhatsApp Business API v21.0 - with enterprise-grade security, 96.2% delivery rates, and a platform designed for businesses of every size.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-14 text-left">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition"
            >
              {/* Icon */}
              <div className='bg-[#E6F4EF] text-[#0B6B50] w-12 h-12 flex items-center justify-center rounded-xl mb-4 '>
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900">
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