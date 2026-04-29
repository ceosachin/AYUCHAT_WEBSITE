// components/Products.tsx

import ProductCard from "./ProductCard";
import CampaignHeader from "./productHeaders/CampaignHeader";
import ChatbotHeader from "./productHeaders/ChatbotHeader";
import AutomationHeader from "./productHeaders/AutomationHeader";
import MultiBusinessHeader from "./productHeaders/MultiBusinessHeader";
import InboxHeader from "./productHeaders/InboxHeader";
import PipelineHeader from "./productHeaders/PipelineHeader";

const products = [
  {
    title: "Bulk WhatsApp Campaigns",
    tag: "MOST USED FEATURE",
    desc: "Send personalized WhatsApp messages to thousands of contacts in one click. Official Meta API - 96.2% delivery rate, 71% read rate, real-time analytics.",
    points: [
      "Audience segmentation & scheduling",
      "Dynamic personalization variables",
      "Per-message delivery tracking",
      "Quality rating protection alerts"
    ],
    footer: "96.2% delivery · 15x ROI",
    color: "#16a34a",
    gradient: "from-[#052e25] to-[#021a14]",
    HeaderComponent: <CampaignHeader />,
    path: "/products/bulk-campaigns"
  },
  {
    title: "AI Chatbot Builder",
    tag: "NO-CODE BUILDER",
    desc: "Build intelligent WhatsApp chatbots with drag-and-drop. Handle FAQs, book appointments, collect leads, and process payments - 24/7 without any code.",
    points: [
      "Visual drag-and-drop canvas",
      "Keyword triggers & button menus",
      "Input collection → CRM save",
      "Live WhatsApp preview"
    ],
    footer: "24/7 automated · Zero code",
    color: "#2563eb",
    gradient: "from-[#1e3a8a] to-[#1e293b]",
    HeaderComponent: <ChatbotHeader />,
    path: "/products/chatbot-builder"
  },
  {
    title: "Automation Flows",
    tag: "VISUAL FLOW BUILDER",
    desc: "Design trigger-based customer journeys that run completely automatically. Welcome sequences, reminders, cart recovery, re-engagement - all on autopilot.",
    points: [
      "8+ trigger types available",
      "If/Else conditional branching",
      "Time delay nodes",
      "Flow testing & dry run mode"
    ],
    footer: "Unlimited flows · 100% automated",
    color: "#7c3aed",
    gradient: "from-[#4c1d95] to-[#2e1065]",
    HeaderComponent: <AutomationHeader />,
    path: "/products/automation"
  },
  {
    title: "Multi-Agent Live Inbox",
    tag: "REAL-TIME SYNC",
    desc: "Your entire team manages all WhatsApp conversations from one shared inbox.",
    points: [
      "Unlimited agents simultaneously",
      "Auto-assignment rules",
      "Internal notes & @mentions",
      "Conversation tags & labels"
    ],
    footer: "Real-time · Zero missed chats",
    color: "#f97316",
    gradient: "from-[#3b1d00] to-[#1a0c00]",
    HeaderComponent: <InboxHeader />,
    path: "/products/liveinbox"
  },
  {
    title: "Multi-Business Management",
    tag: "ENTERPRISE",
    desc: "Manage unlimited businesses from a single AyuChat login.",
    points: [
      "Single login, unlimited workspaces",
      "100% data isolation",
      "Separate team & billing",
      "White-label option"
    ],
    footer: "Unlimited workspaces · 1 login",
    color: "#16a34a",
    gradient: "from-[#052e25] to-[#021a14]",
    HeaderComponent: <MultiBusinessHeader />,
    path: "/products/multi-business",
    fullWidth: true,
  },
  {
    title: "Contact Pipeline CRM",
    tag: "PIPELINE CRM",
    desc: "Manage your WhatsApp contacts like a full CRM.",
    points: [
      "Kanban pipeline board",
      "Custom fields",
      "CSV import",
      "360° contact view"
    ],
    footer: "Full CRM · Pipeline tracking",
    color: "#ec4899",
    gradient: "from-[#4a044e] to-[#2a0134]",
    HeaderComponent: <PipelineHeader />,
    path: "/feature/contact-crm",
    newRow: true,
  }
];

const Products: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

  {products.map((product, i) => (
    <div
      key={i}
      className={`
        ${product.fullWidth ? "lg:col-span-2" : ""}
        ${product.newRow ? "lg:col-start-1" : ""}
      `}
    >
      <ProductCard product={product} />
    </div>
  ))}

</div>
    </section>
  );
};

export default Products;