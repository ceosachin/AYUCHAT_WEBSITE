import React, { useState } from "react";

/* ================= TYPES ================= */

type Integration = {
  iconBg: string;
  icon: string;
  title: string;
  category: string; // for filter
  tag: string;
  status: string;
  statusColor: string;
  description: string;
  points: string[];
  label: string;
  connected?: boolean;
};

/* ================= DATA ================= */

const data: Integration[] = [
  {
    iconBg: "bg-blue-500",
    icon: "f",
    title: "Facebook Ads",
    category: "Marketing",
    tag: "MARKETING · LEAD GEN",
    status: "Live — Connected",
    statusColor: "text-green-600",
    description:
      "Sync Facebook Lead Ads directly into AyuChat. Every new lead automatically gets a WhatsApp welcome message, triggering your qualification flow instantly.",
    points: [
      "New lead → WhatsApp welcome message",
      "Auto-sync lead data to CRM contacts",
      "Trigger qualification chatbot flow",
    ],
    label: "Most Used",
    connected: true,
  },
  {
    iconBg: "bg-green-500",
    icon: "S",
    title: "Shopify",
    category: "E-commerce",
    tag: "E-COMMERCE · RETAIL",
    status: "Live — Available",
    statusColor: "text-green-600",
    description:
      "Automate the entire Shopify customer journey via WhatsApp.",
    points: [
      "Order placed → Confirmation + tracking",
      "Abandoned cart → Recovery campaign",
      "Order delivered → Review request",
    ],
    label: "E-commerce",
  },
  {
    iconBg: "bg-red-500",
    icon: "Z",
    title: "Zoho CRM",
    category: "CRM",
    tag: "CRM · SALES",
    status: "Available",
    statusColor: "text-green-600",
    description:
      "Two-way sync between AyuChat contacts and Zoho CRM leads.",
    points: [
      "Bidirectional contact sync",
      "Trigger WA from Zoho workflows",
    ],
    label: "CRM",
  },
  {
    iconBg: "bg-[#0F2B50]",
    icon: "R",
    title: "Razorpay",
    category: "Payments",
    tag: "PAYMENTS · FINTECH",
    status: "Available",
    statusColor: "text-green-600",
    description:
      "Send Razorpay payment links directly in WhatsApp.",
    points: [
      "Send payment link in WhatsApp",
      "Auto-confirm on payment",
    ],
    label: "Payments",
  },
  {
    iconBg: "bg-green-600",
    icon: "G",
    title: "Google Sheets",
    category: "Productivity",
    tag: "PRODUCTIVITY · DATA",
    status: "Available",
    statusColor: "text-green-600",
    description:
      "Use Google Sheets as your contact source.",
    points: [
      "New row → Add contact + trigger message",
      "Export conversation data to Sheets",
    ],
    label: "Productivity",
  },
  {
    iconBg: "bg-purple-500",
    icon: "W",
    title: "WooCommerce",
    category: "E-commerce",
    tag: "E-COMMERCE · WORDPRESS",
    status: "Available",
    statusColor: "text-green-600",
    description:
      "Connect WooCommerce and automate notifications.",
    points: [
      "Order events → WhatsApp notifications",
      "Cart abandonment recovery flow",
    ],
    label: "E-commerce",
  },
  {
    iconBg: "bg-red-500",
    icon: "G",
    title: "Gmail",
    category: "Productivity",
    tag: "PRODUCTIVITY · EMAIL",
    status: "Available",
    statusColor: "text-green-600",
    description:
      "Send automatic WhatsApp follow-ups from email.",
    points: [
      "Unanswered email → WA follow-up",
      "New email lead → WA nurture",
    ],
    label: "Email",
  },
  {
    iconBg: "bg-orange-400",
    icon: "H",
    title: "HubSpot CRM",
    category: "CRM",
    tag: "CRM · MARKETING",
    status: "Coming Soon",
    statusColor: "text-orange-500",
    description:
      "Sync HubSpot deals and contacts.",
    points: [
      "Deal stage change → WA notification",
      "Contact lifecycle → Automated flows",
    ],
    label: "CRM",
  },
];

/* ================= MAIN ================= */

const Integrations: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = data.filter((item) => {
    const matchCategory =
      filter === "All" || item.category === filter;

    const matchSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* SEARCH + FILTER */}
      <div className="flex flex-wrap gap-4 justify-between mb-8">

        <input
          placeholder="Search integrations..."
          className="border rounded-xl px-4 py-2 w-72"
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex gap-3 flex-wrap">
          {["All","E-commerce","CRM","Payments","Marketing","Productivity"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm ${
                filter === f
                  ? "bg-[#0B6B50] text-white"
                  : "bg-gray-100"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">

        {filtered.map((item, i) => (
          <Card key={i} item={item} />
        ))}

      </div>
    </div>
  );
};

export default Integrations;

/* ================= CARD ================= */

const Card = ({ item }: { item: Integration }) => {
  return (
    <div className="border border-[#CFE5DC] rounded-2xl p-6 bg-[#F7FBF9] shadow-sm hover:shadow-md transition">

      <div className="flex gap-4">
        <div className={`w-12 h-12 ${item.iconBg} text-white rounded-xl flex items-center justify-center`}>
          {item.icon}
        </div>

        <div>
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-xs text-gray-500">{item.tag}</p>
          <p className={`text-xs ${item.statusColor}`}>
            ● {item.status}
          </p>
        </div>
      </div>

      <hr className="my-4" />

      <p className="text-sm text-gray-600">{item.description}</p>

      <ul className="mt-4 text-sm space-y-1">
        {item.points.map((p, i) => (
          <li key={i}>✔ {p}</li>
        ))}
      </ul>

      <div className="flex justify-between mt-6">
        <span className="text-xs bg-green-100 px-3 py-1 rounded-full">
          {item.label}
        </span>

        <button className="bg-green-100 px-4 py-2 rounded-lg text-sm">
          {item.connected ? "Connected ✓" : "Connect →"}
        </button>
      </div>
    </div>
  );
};