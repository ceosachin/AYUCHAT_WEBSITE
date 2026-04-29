import {
  MessageSquare,
  Bot,
  Share2,
  Users,
  Gift,
  Code,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Bulk WhatsApp Campaigns",
    desc: "Send personalized campaigns to your entire contact list. Segment audiences, schedule campaigns, and track every delivery in real time.",
    tag: "Unlimited campaigns",
    color: "bg-green-100 text-green-700",
    iconBg: "bg-green-100",
  },
  {
    icon: Bot,
    title: "AI Chatbot Builder",
    desc: "Build drag-and-drop WhatsApp chatbots. Handle leads, FAQs, and bookings 24/7 without writing a single line of code.",
    tag: "Unlimited bots",
    color: "bg-blue-100 text-blue-700",
    iconBg: "bg-blue-100",
  },
  {
    icon: Share2,
    title: "Automation Flows",
    desc: "Design complete customer journeys - from welcome sequences to re-engagement campaigns. Set triggers and let it run automatically.",
    tag: "Visual flow builder",
    color: "bg-purple-100 text-purple-700",
    iconBg: "bg-purple-100",
  },
  {
    icon: Users,
    title: "Multi-Agent Inbox",
    desc: "Your whole team manages customer conversations together. Assign, tag, filter - with real-time sync across all agents.",
    tag: "Up to 5 agents",
    color: "bg-yellow-100 text-yellow-700",
    iconBg: "bg-yellow-100",
  },
  {
    icon: Gift,
    title: "Contact CRM",
    desc: "Manage 10,000 contacts with custom fields, tags, and smart segmentation. Import via CSV, build audiences, and target the right people every time.",
    tag: "10,000 contacts",
    color: "bg-pink-100 text-pink-700",
    iconBg: "bg-pink-100",
  },
  {
    icon: Code,
    title: "API Access & Webhooks",
    desc: "Connect AyuChat to your own systems. Full REST API, real-time webhooks, and integrations with Shopify, Zoho, Facebook Ads, and more.",
    tag: "Full API included",
    color: "bg-green-100 text-green-700",
    iconBg: "bg-green-100",
  },
];

export default function FeaturesSection() {
  return (
    <div className="bg-[#F7FAF9] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top Label */}
        <div className="inline-block bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B05] px-4 py-1 rounded-full text-xs font-medium mb-4">
          WHAT YOU GET
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-['Bricolage_Grotesque']">
          Everything in Our{" "}
          <span className="text-[#0B6B05]">Growth Plan - Free</span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 mt-4 max-w-2xl">
          No stripped-down version. No feature limits. The full Growth plan,
          yours for 6 months, to prove what WhatsApp marketing can do for your
          startup.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition"
              >
                {/* Icon */}
                <div
                  className='w-12 h-12 flex items-center justify-center rounded-xl bg-[#E6F4EF] text-[#0B6B50]'
                >
                  <Icon className="w-5 h-5 text-gray-700" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mt-4 font-['Bricolage_Grotesque']">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {item.desc}
                </p>

                {/* Tag */}
                <div
                  className={`inline-block mt-4 px-3 py-1 text-xs rounded-full font-medium ${item.color}`}
                >
                  {item.tag}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}