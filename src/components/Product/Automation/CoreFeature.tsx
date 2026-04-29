import { Users, Code, Clock, BarChart3, AlertTriangle, Package } from "lucide-react";

export default function CoreFeatures() {
  const features = [
    {
      icon: <Users size={22} />,
      title: "Visual Node Flow Editor",
      desc: "Design automation workflows on a drag-and-drop canvas with four node types: Triggers (what starts the flow), Actions (what happens), Logic (conditions and branches), and End points. Build complex multi-step journeys visually.",
      bg: "bg-green-100 text-green-700",
    },
    {
      icon: <Code size={22} />,
      title: "8+ Trigger Types",
      desc: "Start automations from: new contact added, specific keyword received, button tapped, tag applied to contact, form submitted, payment received, webhook event fired, or scheduled time/date. Every business event can start a flow.",
      bg: "bg-gray-200 text-gray-700",
    },
    {
      icon: <Clock size={22} />,
      title: "Conditional If/Else Branching",
      desc: "Add logic nodes that check contact properties and route the flow differently based on the answer. Did they reply? Are they tagged as VIP? Is their city Gwalior? Branch the journey accordingly.",
      bg: "bg-yellow-100 text-yellow-700",
    },
    {
      icon: <BarChart3 size={22} />,
      title: "Time Delay Nodes",
      desc: "Insert wait periods anywhere in a flow — hours, days, or specific times. Send a welcome message immediately, then follow up 24 hours later, then 3 days later. Time your communication perfectly.",
      bg: "bg-purple-100 text-purple-700",
    },
    {
      icon: <AlertTriangle size={22} />,
      title: "Webhook & API Action Nodes",
      desc: "Trigger external API calls mid-flow. Sync data to your CRM, update an order status, trigger a Shopify fulfillment, or fire a Zapier webhook — all inside the automation canvas.",
      bg: "bg-red-100 text-red-700",
    },
    {
      icon: <Package size={22} />,
      title: "Flow Testing & Dry Run",
      desc: "Before activating any automation, run it in test mode. Simulate the exact execution path, check all conditions and branches, and verify every message content — without sending real messages to real contacts.",
      bg: "bg-teal-100 text-teal-700",
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
              className="bg-white border border-gray-200  rounded-2xl p-6 hover:shadow-md transition"
            >
              {/* Icon */}
              <div className='bg-[#E6F4EF] text-[#0B6B50] w-12 h-12 flex items-center justify-center rounded-xl mb-4'>
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