import React, { useState } from "react";

/* ================= MAIN ================= */

const ApiSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("send");
  const [copied, setCopied] = useState(false);

  const codeMap: any = {
    send: `// Send a WhatsApp template message

fetch("https://api.ayuchat.in/v1/messages", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    to: "+919876543210",
    type: "template",
    template: {
      name: "order_confirmation",
      variables: {
        "1": "Ramesh Gupta",
        "2": "#10482",
        "3": "₹2,840"
      }
    }
  })
});

// Response:
// { message_id: "msg_7x9ab", status: "sent" }`,

    contact: `// Add or update a contact

fetch("https://api.ayuchat.in/v1/contacts", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY"
  },
  body: JSON.stringify({
    phone: "+919876543210",
    name: "Ramesh Gupta",
    tags: ["lead", "facebook-ad"],
    custom_fields: {
      city: "Gwalior",
      source: "shopify"
    }
  })
});

// Response:
// { contact_id: "c_abc123", created: true }`,

    webhook: `// Webhook payload you will receive

{
  "event": "message.delivered",
  "timestamp": "2026-05-01T10:34:22Z",
  "data": {
    "message_id": "msg_7x9ab",
    "to": "+919876543210",
    "status": "delivered",
    "read_at": "2026-05-01T10:34:31Z"
  }
}

// HMAC-SHA256 signature in X-AyuChat-Signature header`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeMap[activeTab]);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#F5F7F6] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <span className="bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50] px-4 py-1 rounded-full text-xs font-semibold">
            REST API & WEBHOOKS
          </span>

          <h2 className="text-5xl font-bold mt-4 text-[#1C1C1C] leading-tight font-['Bricolage_Grotesque']">
            Build Any Custom <br />
            <span className="text-[#0B6B50]">Integration You Need</span>
          </h2>

          <p className="text-gray-600 mt-6 max-w-lg">
            AyuChat's REST API gives you complete programmatic access to every
            platform feature. Send messages, manage contacts, trigger flows, and
            receive real-time events via webhooks.
          </p>

          <div className="mt-8 space-y-4">

            <FeatureCard
              icon="</>"
              title="Complete REST API"
              desc="Messages, contacts, campaigns, chatbots, analytics — everything accessible via API"
              bg="bg-green-100 text-[#0B6B50]"
            />

            <FeatureCard
              icon="⬡"
              title="Real-Time Webhooks"
              desc="Delivery events, incoming messages, flow completions — pushed to your HTTPS endpoint instantly"
              bg="bg-blue-100 text-blue-600"
            />

            <FeatureCard
              icon="🔒"
              title="Scoped API Keys"
              desc="Read-only, send-only, or full-access keys with SHA-256 storage and one-time display"
              bg="bg-purple-100 text-purple-600"
            />

          </div>

          <div className="mt-8 flex gap-4">
            <button className="bg-[#0B6B50] text-white px-6 py-3 rounded-xl font-medium">
              View Full API Docs →
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-xl font-medium bg-white">
              Download Postman Collection
            </button>
          </div>
        </div>

        {/* RIGHT CODE PANEL */}
        <div className="bg-[#02130F] text-white rounded-2xl shadow-2xl overflow-hidden">

          {/* Tabs */}
          <div className="flex bg-[#0A1F1A] p-2 gap-2">
            <Tab
              label="Send Message"
              active={activeTab === "send"}
              onClick={() => setActiveTab("send")}
            />
            <Tab
              label="Add Contact"
              active={activeTab === "contact"}
              onClick={() => setActiveTab("contact")}
            />
            <Tab
              label="Webhook"
              active={activeTab === "webhook"}
              onClick={() => setActiveTab("webhook")}
            />
          </div>

          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4 text-sm text-gray-400 border-b border-gray-800">
            <span>POST · /API/V1/{activeTab.toUpperCase()}</span>

            <button
              onClick={handleCopy}
              className="text-green-400 hover:text-green-300"
            >
              {copied ? "Copied ✓" : "Copy →"}
            </button>
          </div>

          {/* Code */}
          <div className="p-6 font-mono text-sm text-green-300 whitespace-pre-wrap leading-relaxed">
            {codeMap[activeTab]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiSection;

/* ================= FEATURE CARD ================= */

const FeatureCard = ({
  icon,
  title,
  desc,
  bg,
}: any) => {
  return (
    <div className="flex items-start gap-4 border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
      <div className={`w-10 h-10 flex items-center justify-center rounded-lg ${bg}`}>
        {icon}
      </div>

      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-500 mt-1">{desc}</p>
      </div>
    </div>
  );
};

/* ================= TAB ================= */

const Tab = ({
  label,
  active,
  onClick,
}: any) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
        active
          ? "bg-[#1E2D28] text-white"
          : "text-gray-400 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
};