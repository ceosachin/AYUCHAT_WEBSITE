import {
  Settings,
  Users,
  GitBranch,
  Package,
  BarChart3,
} from "lucide-react";

export const features = [
  {
    title: "No-Code Chatbot Builder",
    desc: "Build intelligent WhatsApp chatbots with a drag-and-drop canvas. Handle FAQs, collect leads, book appointments - 24 hours a day, 7 days a week, with zero code.",
    color: "bg-blue-100",
    icon: Settings,
  },
  {
    title: "Multi-Agent Live Inbox",
    desc: "Your entire team manages WhatsApp conversations from one shared inbox. Assign chats, add notes, filter by status - with real-time WebSocket updates across all agents.",
    color: "bg-yellow-100",
    icon: Users,
  },
  {
    title: "Automation Flow Builder",
    desc: "Design complex customer journeys with a visual node editor. Set triggers, add conditions, send delayed messages - all without writing a single line of code.",
    color: "bg-purple-100",
    icon: GitBranch,
  },
  {
    title: "Contact CRM",
    desc: "Manage your entire customer database inside AyuChat. Add custom fields, segment by tags, import via CSV, and build targeted audiences for every campaign.",
    color: "bg-red-100",
    icon: Package,
  },
  {
    title: "Real-Time Analytics",
    desc: "Track every message - sent, delivered, read, replied, failed. Monitor campaign ROI, quality ratings, and Meta API usage from one unified dashboard with live updates.",
    color: "bg-green-100",
    icon: BarChart3,
    badge: "New: Per-message tracking",
  },
];