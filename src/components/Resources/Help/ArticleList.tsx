import {
  Clock,
  MessageSquare,
  FileText,
  Mail,
  Star,
} from "lucide-react";

const articles = [
  {
    title: "How to create your AyuChat account and connect your WhatsApp Business number",
    tag: "Getting Started",
    time: "8 min read",
    date: "Updated May 1",
    icon: <Clock size={18} />,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Connecting your WhatsApp Business Account via Meta Embedded Signup",
    tag: "Setup",
    time: "5 min read",
    date: "Updated Apr 28",
    icon: <MessageSquare size={18} />,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "How to create and submit your first WhatsApp message template for Meta approval",
    tag: "Templates",
    time: "6 min read",
    date: "Updated Apr 25",
    icon: <FileText size={18} />,
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Inviting team members and setting up roles and permissions in AyuChat",
    tag: "Team",
    time: "4 min read",
    date: "Updated Apr 20",
    icon: <Mail size={18} />,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Understanding the AyuChat onboarding checklist and completing your workspace setup",
    tag: "Onboarding",
    time: "3 min read",
    date: "Updated Apr 18",
    icon: <Star size={18} />,
    color: "bg-purple-100 text-purple-700",
  },
];

export default function ArticleList() {
  return (
    <div >
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-semibold">
          Getting Started
        </h2>

        <button className="text-[#0B6B50] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
          View all 12 →
        </button>
      </div>

      {/* LIST */}
      <div className="divide-y">
        {articles.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-4 py-5 cursor-pointer hover:bg-gray-50 transition rounded-lg px-2"
          >
            
            {/* ICON */}
            <div className={`w-10 h-10 flex items-center justify-center rounded-lg ${item.color}`}>
              {item.icon}
            </div>

            {/* CONTENT */}
            <div className="flex-1">
              <p className="font-medium text-gray-900 leading-snug">
                {item.title}
              </p>

              {/* META */}
              <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                
                {/* TAG */}
                <span className={`px-2 py-1 rounded-full text-[11px] font-medium ${item.color}`}>
                  {item.tag}
                </span>

                <span>{item.time}</span>
                <span>{item.date}</span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}