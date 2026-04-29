// components/about/WhyAyuChat.tsx

import {
  Share2,
  Sliders,
  ShieldCheck,
  CircleCheck,
} from "lucide-react";

type Card = {
  title: string;
  desc: string;
  tag: string;
  icon: React.ReactNode;
  bg: string;
};

const cards: Card[] = [
  {
    title: "Automation-First Architecture",
    desc: "Every feature in AyuChat was designed with automation in mind. Campaigns trigger automations, chatbots feed the CRM, inbox events launch flows — the platform is built as a connected system, not a collection of disconnected tools. Your WhatsApp communication runs itself while you focus on business.",
    tag: "Core Philosophy",
    icon: <Share2 size={18} />,
    bg: "bg-green-100 text-[#0B6B50]",
  },
  {
    title: "Built for Bharat, Not Silicon Valley",
    desc: "AyuChat was designed for Indian businesses — regional language support, India-specific pricing, integration with Razorpay, understanding of GST-based billing, and customer support that speaks your language. We know that a hospital in Gwalior and a retailer in Dabra have different needs than a startup in San Francisco, and our product reflects that.",
    tag: "India-Native",
    icon: <Sliders size={18} />,
    bg: "bg-blue-100 text-blue-600",
  },
  {
    title: "Enterprise-Grade Infrastructure",
    desc: "AES-256-GCM encrypted API tokens. HMAC-SHA256 webhook verification. RBAC permissions. Multi-tenant data isolation at the database level. Full audit trails. Rate limiting and IP auto-blocking. Two-factor authentication. We built infrastructure that large enterprises demand, available from the ₹999/month Starter plan.",
    tag: "Enterprise-Ready",
    icon: <ShieldCheck size={18} />,
    bg: "bg-purple-100 text-purple-600",
  },
  {
    title: "Setup in 2 Minutes, Not 2 Days",
    desc: "Most enterprise WhatsApp platforms require a developer, a consultant, and two weeks of setup. AyuChat's guided onboarding connects your WhatsApp Business number via Meta Embedded Signup, creates your first template, imports your contacts, and launches your first campaign in under 10 minutes — for anyone, regardless of technical background.",
    tag: "Zero-Setup",
    icon: <CircleCheck size={18} />,
    bg: "bg-yellow-100 text-yellow-600",
  },
];

const WhyAyuChat: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-[#f6f8f7]">
      <div className="max-w-6xl mx-auto text-center">

        {/* Badge */}
        <span className="bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50] px-4 py-1 rounded-full text-xs font-semibold">
          WHY AYUCHAT
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-bold mt-4 font-['Bricolage_Grotesque'] leading-tight">
          Built Different.{" "}
          <span className="text-[#0B6B50]">Built for India.</span>
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We didn't build another tool. We built a complete communication
          operating system for WhatsApp, with principles that set us apart
          from every global alternative.
        </p>

        {/* Grid Container */}
        <div className="mt-12 border border-gray-200 rounded-2xl overflow-hidden bg-white">
          <div className="grid md:grid-cols-2">

            {cards.map((card, i) => (
              <div
                key={i}
                className={`
                  relative p-8 text-left
                  border-gray-200
                  transition-all duration-300
                  hover:shadow-sm
                  group
                  ${i % 2 === 0 ? "md:border-r" : ""}
                  ${i < 2 ? "md:border-b" : ""}
                `}
              >
                {/* Top Hover Border */}
                <div className="absolute top-0 left-0 h-[2px] w-0 bg-[#0B6B50] transition-all duration-300 group-hover:w-full" />

                {/* Icon */}
                <div
                  className='w-12 h-12 flex items-center justify-center rounded-xl bg-green-50 text-[#0B6B50]'
                >
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mt-4 font-['Bricolage_Grotesque']">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mt-3 leading-relaxed text-sm">
                  {card.desc}
                </p>

                {/* Tag */}
                <span className="inline-block mt-4 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                  {card.tag}
                </span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyAyuChat;