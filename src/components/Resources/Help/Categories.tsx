import {
  Box,
  MessageSquare,
  LayoutTemplate,
  CreditCard,
  Share2,
  Code,
  Shield,
  MessageCircleMore,
} from "lucide-react";

const categories = [
  {
    title: "Getting Started",
    desc: "Account setup, WABA connection, and your first campaign",
    articles: "12 articles",
    icon: <Box size={22} />,
    bg: "bg-green-100",
  },
  {
    title: "Campaigns",
    desc: "Templates, bulk sending, scheduling, and delivery issues",
    articles: "18 articles",
    icon: <MessageSquare size={22} />,
    bg: "bg-blue-100",
  },
  {
    title: "Chatbot Builder",
    desc: "Flow design, triggers, node configuration, and testing",
    articles: "14 articles",
    icon: <LayoutTemplate size={22} />,
    bg: "bg-purple-100",
  },
  {
    title: "Billing & Plans",
    desc: "Subscriptions, Meta charges, invoices, and upgrades",
    articles: "8 articles",
    icon: <CreditCard size={22} />,
    bg: "bg-yellow-100",
  },
  {
    title: "Automation",
    desc: "Flow triggers, conditions, delays, and webhook actions",
    articles: "10 articles",
    icon: <Share2 size={22} />,
    bg: "bg-pink-100",
  },
  {
    title: "API & Integrations",
    desc: "REST API, webhooks, Shopify, Zoho, and Facebook Ads",
    articles: "16 articles",
    icon: <Code size={22} />,
    bg: "bg-red-100",
  },
  {
    title: "Security & Account",
    desc: "2FA setup, team management, permissions, and passwords",
    articles: "9 articles",
    icon: <Shield size={22} />,
    bg: "bg-teal-100",
  },
  {
    title: "Submit a Ticket",
    desc: "Can't find your answer? Our team responds within 2 hours.",
    articles: "Contact Support",
    icon: <MessageCircleMore size={22} />,
    bg: "bg-green-200",
  },
];

export default function Categories() {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((item, i) => (
        <div
          key={i}
          className={`
            rounded-2xl border border-gray-200 p-6 cursor-pointer
            transition-all duration-300 ease-in-out
            bg-white
            hover:shadow-xl hover:-translate-y-2 hover:border-green-600
            }
          `}
        >
          {/* ICON */}
          <div
            className='w-12 h-12 flex items-center justify-center rounded-xl mb-4 bg-green-50 text-[#0B6B50]'
          >
            {item.icon}
          </div>

          {/* TITLE */}
          <h3 className="font-semibold text-lg mb-2 font-['Bricolage_Grotesque']">
            {item.title}
          </h3>

          {/* DESC */}
          <p className="text-sm text-gray-500 mb-4 leading-relaxed">
            {item.desc}
          </p>

          {/* LINK */}
          <p className="text-sm font-medium text-[#0B6B50] flex items-center gap-1">
            {item.articles} →
          </p>
        </div>
      ))}
    </div>
  );
}