import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  category: string;
  desc: string;
  author: string;
  date: string;
  time: string;
  variant: "chatbot" | "comparison" | "pricing" | "caseStudy" | "automation" | "crm";
};

const ArticleCard = ({
  title,
  category,
  desc,
  author,
  date,
  time,
  variant,
}: Props) => {
  return (
    <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.4,
    ease: [0.34, 1.56, 0.64, 1], // 🔥 pop/bounce effect
  }}
  whileHover={{
    scale: 1.04,
    boxShadow: "0px 12px 30px rgba(0,0,0,0.1)",
  }}
  className="bg-white rounded-2xl border hover:border-[#0B6B50]/90 overflow-hidden"
>

      {/* ================= TOP SECTION ================= */}
      <div className="h-[150px] flex items-center justify-center relative overflow-hidden">

  {/* ================= CHATBOT ================= */}
  {variant === "chatbot" && (
    <div className="w-full h-full bg-[#EAF2FF] flex items-center justify-center relative">

      <div className="absolute right-[98px] top-[30px] bottom-[30px] border-r border-dashed border-blue-300"></div>

      <div className="absolute right-20 top-5 w-9 h-9 bg-blue-200 rounded-full flex items-center justify-center text-[10px] text-blue-700">
        AI
      </div>

      <div className="absolute right-20 bottom-5 w-9 h-9 bg-green-200 rounded-full flex items-center justify-center text-[10px] text-green-700">
        CRM
      </div>

      <div className="bg-white rounded-xl shadow-md w-[160px] border">
        <div className="bg-blue-600 flex items-center  gap-1 text-white text-[11px] px-3 py-2 rounded-tl-xl rounded-tr-xl text-center">
          <div className="w-4 h-4 bg-blue-300 rounded-full" />
          Devraj Hospital Bot
        </div>
        <div className="p-2 text-[9px] space-y-2">
          <div className="bg-blue-50 px-2 py-1 rounded w-fit">
            Book appointment?
          </div>
          <div className="bg-green-100 px-2 py-1 ml-auto rounded text-green-700 w-fit">
            Yes, for tomorrow
          </div>
        </div>
      </div>
    </div>
  )}

  {/* ================= COMPARISON ================= */}
  {variant === "comparison" && (
    <div className="w-full h-full bg-gradient-to-r from-[#FFF3E0] via-[#FFE0B2] to-[#FFD08A] flex items-center justify-center gap-3">

      <div className="bg-white rounded-xl border border-orange-300 px-3 py-2 text-center w-[110px]">
        <p className="text-[11px] text-orange-600 font-semibold">Email</p>
        <div className="w-full h-[4px] bg-orange-200 my-1 rounded" />
        <p className="text-xl font-bold text-orange-500">21%</p>
        <p className="text-[10px] text-gray-400">Open Rate</p>
      </div>

      <div className="flex items-center gap-1">
        <div className="w-6 border-t border-dashed border-orange-400"></div>
        <ArrowRight className="text-orange-500 w-4 h-4" />
      </div>

      <div className="bg-[#0B6B50] text-white rounded-xl px-3 py-2 text-center w-[120px]">
        <p className="text-[11px]">WhatsApp</p>
        <div className="w-full h-[3px] bg-white/30 my-1 rounded" />
        <p className="text-xl font-bold">98%</p>
        <p className="text-[10px]">Open Rate</p>
        <p className="text-[10px] text-green-200 mt-1">4.7x Better</p>
      </div>
    </div>
  )}

  {/* ================= PRICING ================= */}
  {variant === "pricing" && (
    <div className="w-full h-full bg-[#EDE9FE] flex items-center justify-center">

      <div className="bg-white rounded-xl shadow-md w-[240px]  border overflow-hidden">

        <div className="bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white text-[11px] font-semibold text-center py-2">
          Meta API Pricing - April 2026
        </div>

        <div className="flex justify-around py-2 text-xs text-center">
          <div>
            <p className="bg-blue-100 text-blue-600 px-2 py-1 text-[10px] font-semibold rounded">₹0.25</p>
            <p className="text-gray-500 mt-1 text-[10px]">Marketing</p>
          </div>
          <div>
            <p className="bg-green-100 text-green-600 px-2 py-1 text-[10px] font-semibold rounded">₹0.20</p>
            <p className="text-gray-500 mt-1 text-[10px]">Utility</p>
          </div>
          <div>
            <p className="bg-orange-100 text-orange-500 px-2 py-1 text-[10px] font-semibold rounded">₹0.19</p>
            <p className="text-gray-500 mt-1 text-[10px]">Auth</p>
          </div>
        </div>

        <p className="text-[9px] text-center text-purple-600 pb-2">
          Utility in 24hr window = FREE
        </p>
      </div>
    </div>
  )}

  {/* ================= CASE STUDY ================= */}
  {variant === "caseStudy" && (
    <div className="w-full h-full bg-[#DFF5EC] flex items-center justify-center gap-4">

      <div className="bg-white rounded-xl border border-green-200 px-2 py-1 text-center w-[110px]">
        <p className="text-green-700 font-bold text-sm">+40%</p>
        <p className="text-[10px] text-gray-500">Appointments</p>

        <div className="w-full h-1 bg-green-200 rounded my-2" />
        <div className="w-[60%] h-1 bg-green-500 rounded mx-auto" />

        <p className="text-[9px] text-gray-400 mt-2">Before: 12/day</p>
        <p className="text-[9px] text-green-600">After: 17/day</p>
      </div>

      <div className="bg-white rounded-xl border border-green-200 px-4 py-3 w-[140px]">
        <p className="text-[11px] font-medium text-gray-700 mb-2 ">
          Devraj Hospital
        </p>

        <div className="flex items-end gap-2 h-[60px]">
          <div className="w-3 h-[20%] bg-green-200 rounded" />
          <div className="w-3 h-[35%] bg-green-300 rounded" />
          <div className="w-3 h-[55%] bg-green-400 rounded" />
          <div className="w-3 h-[75%] bg-green-500 rounded" />
          <div className="w-3 h-[90%] bg-green-700 rounded" />
        </div>

        <div className="flex justify-between text-[9px] text-gray-400 mt-2">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span className="text-green-700 font-semibold">May</span>
        </div>
      </div>
    </div>
  )}
  {variant === "automation" && (
  <div className="w-full h-full bg-[#FDECF3] flex items-center justify-center relative">

    <div className="flex items-center ">

      {/* NEW CONTACT */}
      <div className="w-16 h-16 border-2 border-pink-200 bg-white rounded-full flex items-center justify-center text-center text-pink-500 text-[11px] font-medium">
        New<br />Contact
      </div>

      {/* ARROW 1 */}
      <div className="flex items-center">
        <div className="w-8 border-t-2 border-dashed border-pink-300"></div>
        <div className="w-0 h-0 border-l-[6px] border-l-pink-300 border-y-[4px] border-y-transparent"></div>
      </div>

      {/* WELCOME BOX */}
      <div className="px-2 py-1 border-2 border-pink-200 rounded-xl text-center gap-3 flex flex-col bg-white ">
        <p className="text-pink-500 text-[12px] font-semibold">Welcome</p>
        <p className="text-[10px] text-gray-400">Send msg</p>
      </div>

      {/* RIGHT SIDE (BRANCH) */}
      <div className="flex flex-col gap-3 relative ml-10">

  {/* TOP ANGLED DASH */}
  <svg className="absolute -left-10 top-2" width="50" height="30">
    <line
      x1="0"
      y1="25"
      x2="50"
      y2="0"
      stroke="#F9A8D4"
      strokeWidth="2"
      strokeDasharray="4,4"
    />
  </svg>

  {/* REPLIED */}
  <div className="bg-[#0B6B50] text-white px-4 py-2 rounded-lg text-[11px] font-medium shadow-sm">
    Replied ✓
  </div>

  {/* BOTTOM ANGLED DASH */}
  <svg className="absolute -left-10 bottom-2" width="50" height="30">
    <line
      x1="0"
      y1="0"
      x2="50"
      y2="25"
      stroke="#F9A8D4"
      strokeWidth="2"
      strokeDasharray="4,4"
    />
  </svg>

  {/* FOLLOW UP */}
  <div className="px-3 py-2 border-2 border-pink-200 rounded-lg text-[10px] text-pink-500 bg-white">
    No reply → Follow up
  </div>

</div>
      

    </div>
  </div>
)}
{variant === "crm" && (
  <div className="w-full h-full bg-[#E8F7F1] flex items-center justify-center">

    <div className="bg-white rounded-xl border border-green-200 overflow-hidden w-[200px] text-[10px]">

      {/* HEADER */}
      <div className="bg-[#0B6B50] text-white flex justify-between px-3 py-1 text-[9px]">
        <span>Name</span>
        <span>Status</span>
        <span>Last Contact</span>
      </div>

      {/* ROWS */}
      <div className="px-3 py-2 space-y-2">

        <div className="flex justify-between items-center">
          <span>Ramesh Gupta</span>
          <span className="bg-green-100 text-green-600 px-2 rounded text-[8px]">Active</span>
          <span className="text-gray-400">2h ago</span>
        </div>

        <div className="flex justify-between items-center">
          <span>Sunita Verma</span>
          <span className="bg-yellow-100 text-yellow-600 px-2 rounded text-[8px]">Pending</span>
          <span className="text-gray-400">Yesterday</span>
        </div>

        <div className="flex justify-between items-center">
          <span>Priya Kapoor</span>
          <span className="bg-green-100 text-green-600 px-2 rounded text-[8px]">Active</span>
          <span className="text-gray-400">May 1</span>
        </div>

      </div>
    </div>
  </div>
)}

</div>

      {/* ================= CONTENT ================= */}
      <div className="p-5">

        {/* Category */}
        <span
          className={`text-xs px-3 py-1 rounded-full font-medium ${
            category === "Chatbot & AI"
              ? "bg-blue-100 text-blue-600"
              : "bg-orange-100 text-orange-600"
          }`}
        >
          {category}
        </span>

        {/* Title */}
        <h3 className="font-semibold text-lgz mt-3 leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
          {desc}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
          <span>{author}</span>
          <span>•</span>
          <span>{date}</span>
          <span>•</span>
          <span>{time}</span>
        </div>

      </div>
    </motion.div>
  );
};

export default ArticleCard;