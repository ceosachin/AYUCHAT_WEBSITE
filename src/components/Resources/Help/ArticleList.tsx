import {
  Clock,
  MessageSquare,
  FileText,
  Mail,
  Star,
  AlertCircle,
  Home,
  Zap,
  Code,
  Layers,
} from "lucide-react";

/* ================= TYPES ================= */

type Article = {
  title: string;
  tag: string;
  time: string;
  icon: React.ReactNode;
  color: string;
  date?: string;
  extra?: string;
};

type Section = {
  title: string;
  count: number;
  showDate?: boolean;
  articles: Article[];
};

/* ================= DATA ================= */

const sections: Section[] = [
  {
    title: "Getting Started",
    count: 12,
    showDate: true,
    articles: [
      {
        title:
          "How to create your AyuChat account and connect your WhatsApp Business number",
        tag: "Getting Started",
        time: "8 min read",
        date: "Updated May 1",
        icon: <Clock size={18} />,
        color: "bg-green-100 text-green-700",
      },
      {
        title:
          "Connecting your WhatsApp Business Account via Meta Embedded Signup",
        tag: "Setup",
        time: "5 min read",
        date: "Updated Apr 28",
        icon: <MessageSquare size={18} />,
        color: "bg-blue-100 text-blue-700",
      },
      {
        title:
          "How to create and submit your first WhatsApp message template for Meta approval",
        tag: "Templates",
        time: "6 min read",
        date: "Updated Apr 25",
        icon: <FileText size={18} />,
        color: "bg-yellow-100 text-yellow-700",
      },
      {
        title:
          "Inviting team members and setting up roles and permissions in AyuChat",
        tag: "Team",
        time: "4 min read",
        date: "Updated Apr 20",
        icon: <Mail size={18} />,
        color: "bg-green-100 text-green-700",
      },
      {
        title:
          "Understanding the AyuChat onboarding checklist and completing your workspace setup",
        tag: "Onboarding",
        time: "3 min read",
        date: "Updated Apr 18",
        icon: <Star size={18} />,
        color: "bg-purple-100 text-purple-700",
      },
    ],
  },

  {
    title: "Campaigns & Templates",
    count: 18,
    articles: [
      {
        title:
          "How to run your first bulk WhatsApp campaign: step-by-step guide",
        tag: "Campaigns",
        time: "10 min",
        icon: <MessageSquare size={18} />,
        color: "bg-green-100 text-green-700",
      },
      {
        title:
          "My WhatsApp template was rejected by Meta - how to fix it and resubmit",
        tag: "Troubleshoot",
        time: "7 min",
        extra: "Most viewed",
        icon: <AlertCircle size={18} />,
        color: "bg-red-100 text-red-600",
      },
      {
        title: "Understanding Meta's messaging tier limits",
        tag: "Limits",
        time: "5 min",
        icon: <Home size={18} />,
        color: "bg-yellow-100 text-yellow-700",
      },
      {
        title: "How to schedule campaigns and choose best send time",
        tag: "Scheduling",
        time: "4 min",
        icon: <Star size={18} />,
        color: "bg-blue-100 text-blue-700",
      },
      {
        title: "My campaign messages are not being delivered",
        tag: "Troubleshoot",
        time: "8 min",
        icon: <Mail size={18} />,
        color: "bg-green-100 text-green-700",
      },
    ],
  },

  {
    title: "Chatbot Builder",
    count: 14,
    articles: [
      {
        title:
          "How to build your first WhatsApp chatbot using drag-and-drop builder",
        tag: "Chatbot",
        time: "12 min",
        icon: <Layers size={18} />,
        color: "bg-purple-100 text-purple-700",
      },
      {
        title: "Setting up keyword triggers for your chatbot",
        tag: "Triggers",
        time: "6 min",
        icon: <Code size={18} />,
        color: "bg-blue-100 text-blue-700",
      },
      {
        title:
          "How to collect user inputs and save them to contact fields",
        tag: "Variables",
        time: "5 min",
        icon: <Zap size={18} />,
        color: "bg-green-100 text-green-700",
      },
    ],
  },
];

/* ================= COMPONENT ================= */

export default function ArticleList() {
  return (
    <div className="space-y-10">

      {sections.map((section, idx) => (
        <div key={idx}>

          {/* HEADER */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl md:text-2xl font-semibold font-['Bricolage_Grotesque']">
              {section.title}
            </h2>

            <button className="text-[#0B6B50] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
              View all {section.count} →
            </button>
          </div>

          {/* LIST */}
          <div className="divide-y divide-gray-300">
            {section.articles.map((item, i) => (
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
                  <p className="font-semibold text-gray-900 leading-snug font-['Bricolage_Grotesque']">
                    {item.title}
                  </p>

                  {/* META */}
                  <div className="flex items-center gap-3 mt-2 text-xs text-gray-500 flex-wrap">

                    <span className={`px-2 py-1 rounded-full text-[11px] font-medium ${item.color}`}>
                      {item.tag}
                    </span>

                    <span>{item.time}</span>

                    {/* FIXED DATE */}
                    {section.showDate && item.date && (
                      <span>{item.date}</span>
                    )}

                    {/* FIXED EXTRA */}
                    {item.extra && (
                      <span className="text-gray-400">{item.extra}</span>
                    )}

                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      ))}

    </div>
  );
}