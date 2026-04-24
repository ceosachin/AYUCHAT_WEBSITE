import { MessageCircle, Mail, Clock, Zap } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="space-y-6 ">

      {/* 🔹 CONTACT SUPPORT */}
      <div className="border border-gray-200 rounded-2xl p-6 bg-gray-50 ml-10 max-w-[400px]">
        <h3 className="font-semibold mb-5">
          Contact Support
        </h3>

        <div className="space-y-5">

          {/* WhatsApp */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-green-100 text-green-700 rounded-lg flex items-center justify-center">
              <MessageCircle size={15} />
            </div>
            <div>
              <p className="font-medium text-sm">WhatsApp Support</p>
              <p className="text-xs text-gray-500">
                Fastest response · Avg 20 min
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
              <Mail size={15} />
            </div>
            <div>
              <p className="font-medium text-sm">Email Support</p>
              <p className="text-xs text-gray-500">
                support@ayuchat.in · 2–4 hours
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-green-100 text-green-700 rounded-lg flex items-center justify-center">
              <Clock size={15} />
            </div>
            <div>
              <p className="font-medium text-sm">Support Hours</p>
              <p className="text-xs text-gray-500">
                Mon–Sat · 10AM to 7PM IST
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 🔹 MOST VIEWED ARTICLES */}
      <div className="border border-gray-200 rounded-2xl p-6 bg-gray-50 ml-10 max-w-[400px] ">
        <h3 className="font-semibold text-lg mb-5">
          Most Viewed Articles
        </h3>

        <div className="space-y-4">

          {[
            {
              title: "Template rejected - how to fix and resubmit",
              tag: "Templates",
              time: "7 min",
            },
            {
              title: "Connecting your WhatsApp Business account",
              tag: "Getting Started",
              time: "5 min",
            },
            {
              title: "Understanding Meta's per-message pricing",
              tag: "Billing",
              time: "4 min",
            },
            {
              title: "Quality rating dropped - what to do",
              tag: "Troubleshoot",
              time: "5 min",
            },
            {
              title: "Managing multiple businesses in one account",
              tag: "Account",
              time: "3 min",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex gap-4 border-b border-gray-200 last:border-none pb-4 cursor-pointer hover:bg-gray-50 px-2 py-2 rounded-lg transition"
            >
              
              {/* NUMBER */}
              <span className="text-sm font-semibold text-gray-300">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* CONTENT */}
              <div>
                <p className="font-medium text-gray-900 leading-snug text-sm">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {item.tag} · {item.time}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* 🔹 CTA CARD */}
      <div className="bg-[#0B6B50] text-white rounded-2xl p-6 relative overflow-hidden ml-10 max-w-[400px]">
        
        {/* ICON */}
        <Zap className="text-orange-300 mb-4" />

        <h3 className="text-lg font-semibold mb-2">
          New to AyuChat?
        </h3>

        <p className="text-[13px] text-white/80 mb-5 leading-relaxed">
          Start with our complete beginner guide. You'll be sending your first campaign in under 10 minutes.
        </p>

        <button className="w-full border bg-white/10 text-sm border-white/30 rounded-lg py-3 font-semibold hover:bg-white hover:text-[#0B6B50] transition">
          Read Getting Started Guide →
        </button>
      </div>

    </div>
  );
}