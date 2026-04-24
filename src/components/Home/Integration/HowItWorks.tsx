import React, { useState } from "react";

/* ================= TYPES ================= */

type FlowStep = {
  title: string;
  subtitle: string;
};

type Flow = {
  key: string;
  title: string;
  description: string;
  steps: FlowStep[];
  code: {
    header: string;
    blocks: { title: string; content: string }[];
  };
};

/* ================= DATA ================= */

const flows: Flow[] = [
  {
    key: "shopify",
    title: "Shopify Order → WhatsApp Notification",
    description:
      "When a customer places an order on your Shopify store, AyuChat instantly sends a personalized WhatsApp order confirmation with tracking link. No manual work needed.",
    steps: [
      {
        title: "Customer places Shopify order",
        subtitle: "Shopify sends an event to AyuChat instantly",
      },
      {
        title: "AyuChat receives order data",
        subtitle: "Order ID, customer name, items, total, address synced",
      },
      {
        title: "WhatsApp message sent in under 5s",
        subtitle: "Personalized confirmation with items and tracking link",
      },
      {
        title: "Customer replies? Bot handles it",
        subtitle: "Order queries routed to chatbot or live agent",
      },
    ],
    code: {
      header: "Shopify → AyuChat Live Event",
      blocks: [
        {
          title: "SHOPIFY WEBHOOK RECEIVED",
          content: `{
  "event": "order.created",
  "order_id": 10482,
  "customer": "Ramesh Gupta",
  "phone": "+91 98765 43210",
  "total": 2840
}`,
        },
        {
          title: "AYUCHAT PROCESSING",
          content: `{
  "action": "send_template",
  "template": "order_confirmation",
  "to": "+91 98765 43210"
  // Sent in 3.2 seconds
}`,
        },
        {
          title: "WHATSAPP DELIVERED",
          content: `{
  "status": "delivered",
  "read_at": "10:34:22 AM",
  "delivery_rate": "96.2%"
}`,
        },
      ],
    },
  },

  {
    key: "facebook",
    title: "Facebook Lead → WhatsApp Welcome",
    description:
      "Every new Facebook lead ad submission instantly triggers a personalized WhatsApp message, starting your sales qualification flow within seconds.",
    steps: [
      {
        title: "New lead submits Facebook form",
        subtitle: "Automated · No code required",
      },
      {
        title: "Lead synced to AyuChat contacts",
        subtitle: "Automated · No code required",
      },
      {
        title: "Welcome WA message triggered immediately",
        subtitle: "Automated · No code required",
      },
      {
        title: "Chatbot qualifies the lead",
        subtitle: "Automated · No code required",
      },
    ],
    code: {
      header: "Facebook → AyuChat Lead Event",
      blocks: [
        {
          title: "FACEBOOK LEAD RECEIVED",
          content: `{
  "name": "Rahul Sharma",
  "phone": "+91 98765 43210"
}`,
        },
        {
          title: "AYUCHAT PROCESSING",
          content: `{
  "action": "send_template",
  "template": "welcome_message"
}`,
        },
        {
          title: "WHATSAPP SENT",
          content: `{
  "status": "delivered"
}`,
        },
      ],
    },
  },

  {
    key: "razorpay",
    title: "Razorpay Payment → Auto-Confirmation",
    description:
      "Send payment links directly inside WhatsApp conversations. When a customer completes payment, AyuChat automatically sends a receipt and confirmation.",
    steps: [
      {
        title: "Agent sends Razorpay link via WA",
        subtitle: "Automated · No code required",
      },
      {
        title: "Customer pays in the chat",
        subtitle: "Automated · No code required",
      },
      {
        title: "Payment success webhook received",
        subtitle: "Automated · No code required",
      },
      {
        title: "Auto-confirmation message sent",
        subtitle: "Automated · No code required",
      },
    ],
    code: {
      header: "Razorpay → AyuChat Payment Event",
      blocks: [
        {
          title: "PAYMENT SUCCESS",
          content: `{
  "amount": 999,
  "status": "paid"
}`,
        },
        {
          title: "AYUCHAT PROCESSING",
          content: `{
  "action": "send_receipt"
}`,
        },
        {
          title: "CONFIRMATION SENT",
          content: `{
  "status": "delivered"
}`,
        },
      ],
    },
  },
];

/* ================= MAIN ================= */

const HowItWorks: React.FC = () => {
  const [active, setActive] = useState("shopify");

  const current = flows.find((f) => f.key === active)!;

  return (
    <div className="bg-[#F5F7F6] py-20 px-6">

      <div className="max-w-7xl mx-auto text-center">

        <span className="bg-[#E6F4EF] text-[#0B6B50] px-4 py-1 rounded-full text-xs font-semibold">
          HOW INTEGRATIONS WORK
        </span>

        <h2 className="text-5xl font-bold mt-4 text-[#1C1C1C]">
          Connect Once. <span className="text-[#0B6B50]">Automate Forever.</span>
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Pick an integration, authenticate in one click, and AyuChat handles the rest.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          {flows.map((f) => (
            <Tab
              key={f.key}
              label={f.title.split(" → ")[0]}
              active={active === f.key}
              onClick={() => setActive(f.key)}
            />
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto mt-16 grid md:grid-cols-2 gap-10">

        {/* LEFT */}
        <div>
          <h3 className="text-2xl font-bold">{current.title}</h3>
          <p className="text-gray-600 mt-3">{current.description}</p>

          <div className="mt-8 space-y-4">
            {current.steps.map((step, i) => (
              <Step key={i} number={i + 1} title={step.title} desc={step.subtitle} />
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-[#02130F] text-green-400 rounded-2xl p-6 shadow-xl font-mono text-sm">

          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="ml-4 text-gray-400 text-xs">
              {current.code.header}
            </span>
          </div>

          {current.code.blocks.map((block, i) => (
            <div key={i}>
              <CodeBlock title={block.title}>{block.content}</CodeBlock>
              {i !== current.code.blocks.length - 1 && (
                <div className="text-center my-4 text-gray-500">↓</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

/* ================= COMPONENTS ================= */

const Tab = ({ label, active, onClick }: any) => (
  <button
    onClick={onClick}
    className={`px-5 py-2 rounded-full text-sm border ${
      active ? "bg-[#0B6B50] text-white" : "bg-white"
    }`}
  >
    {label}
  </button>
);

const Step = ({ number, title, desc }: any) => (
  <div className="flex items-start gap-4 border rounded-xl p-4 bg-white">
    <div className="w-8 h-8 bg-[#0B6B50] text-white flex items-center justify-center rounded-md">
      {number}
    </div>
    <div>
      <p className="font-semibold">{title}</p>
      <p className="text-gray-500 text-sm">{desc}</p>
    </div>
  </div>
);

const CodeBlock = ({ title, children }: any) => (
  <div className="bg-[#062821] rounded-lg p-4 mb-2">
    <p className="text-xs text-green-300 mb-2">{title}</p>
    <pre className="whitespace-pre-wrap">{children}</pre>
  </div>
);