import { ArrowRight } from "lucide-react";

const popular = [
  {
    title: "The Complete WhatsApp Campaign Guide for 2026",
    category: "Campaigns",
    time: "12 min",
  },
  {
    title: "Meta API Pricing Changes: What You Need to Know",
    category: "Meta API",
    time: "7 min",
  },
  {
    title: "Building a No-Code WhatsApp Chatbot in 30 Minutes",
    category: "Chatbot",
    time: "8 min",
  },
  {
    title: "How to Improve Your WhatsApp Quality Rating",
    category: "Strategy",
    time: "5 min",
  },
  {
    title: "WhatsApp vs Email: A 2026 Channel Comparison",
    category: "Strategy",
    time: "6 min",
  },
];

const topics = [
  "Bulk Campaigns",
  "Chatbot",
  "Templates",
  "Automation",
  "Meta API",
  "Analytics",
  "Healthcare",
  "E-commerce",
  "ROI",
  "Case Study",
  "Quality Rating",
  "Compliance",
];

const Sidebar = () => {
  return (
    <div className="w-full max-w-[340px] sm:max-w-[320px] space-y-6 ">

      {/* ================= MOST POPULAR ================= */}
      <div className="bg-[#F8FAF9] border border-gray-200 rounded-2xl p-6 w-full">
        <h3 className=" font-bold mb-4 font-['Bricolage_Grotesque']">Most Popular</h3>

        {popular.map((item, i) => (
          <div key={i}>
            <div className="flex gap-1 py-2">

              {/* Number */}
              <span className="text-[20px] font-bold text-[#CFE3DA] w-[40px]">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="flex-1">
                <p className="text-[14px] font-semibold text-gray-900 leading-snug hover:text-[#0B6B50] cursor-pointer">
                  {item.title}
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  {item.category} • {item.time}
                </p>
              </div>

            </div>

            {/* Divider */}
            {i !== popular.length - 1 && (
              <div className="border-t border-gray-200"></div>
            )}
          </div>
        ))}
      </div>

      {/* ================= BROWSE TOPIC ================= */}
      <div className="bg-[#F8FAF9] border font-['Bricolage_Grotesque'] border-gray-200 rounded-2xl p-6 w-full">
        <h3 className=" font-bold mb-4">
          Browse by Topic
        </h3>

        <div className="flex flex-wrap gap-3">
          {topics.map((topic, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 cursor-pointer"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* ================= SUBSCRIBE ================= */}
      <div className="bg-[#0B6B50] text-white p-6 rounded-2xl w-full">
        <h3 className="text-lg font-bold leading-snug font-['Bricolage_Grotesque']">
          Get Weekly WhatsApp Marketing Tips
        </h3>

        <p className="text-sm mt-3 text-green-100 leading-relaxed">
          Join 5,000+ marketers getting actionable WhatsApp strategies every Tuesday.
        </p>

        <input
          placeholder="Your email address"
          className="w-full mt-5 px-3 py-2 rounded-lg bg-transparent border border-white placeholder:text-green-200 outline-none"
        />

        <button className="w-full mt-3 bg-white text-[#0B6B50] py-2 rounded-lg font-semibold">
          Subscribe Free
        </button>

        <p className="text-xs text-green-200 mt-3">
          No spam. Unsubscribe anytime.
        </p>
      </div>

      {/* ================= CTA ================= */}
      <div className="bg-[#F8FAF9] border border-gray-200 rounded-2xl p-6 text-center w-full mb-10">
        
        <div className="text-2xl mb-3">⚡</div>

        <h3 className="font-semibold text-lg leading-snug font-['Bricolage_Grotesque']">
          Try AyuChat Free for 14 Days
        </h3>

        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
          Everything you've read about - live in your account in under 2 minutes.
        </p>

        <button className=" mt-5 bg-[#0B6B50] text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 w-full">
          Start for Free <ArrowRight size={16} />
        </button>
      </div>

    </div>
  );
};

export default Sidebar;