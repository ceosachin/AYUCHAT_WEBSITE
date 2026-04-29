// components/about/Story.tsx

import { Star, Plus, Circle, ArrowUp } from "lucide-react";

type StoryItem = {
  year: string;
  title: string;
  description: string;
  tag?: string;
  icon: React.ReactNode;
};

const storyData: StoryItem[] = [
  {
    year: "2025 - THE IDEA",
    title: "Watching Businesses Struggle",
    description:
      "Sachin, founder of Agnistoka Technology in Gwalior, was managing social media for local hospitals and retailers. Every business had the same problem — customer follow-ups were manual, no one was using WhatsApp properly, and every marketing agency charged a fortune for basic automation. The idea for AyuChat was born: build an affordable, powerful WhatsApp platform designed specifically for Indian businesses.",
    tag: "The Problem Was Clear",
    icon: <Star size={14} />,
  },
  {
    year: "EARLY 2026 - BUILDING",
    title: "Built from First Principles",
    description:
      "The Agnistoka team - Hardik (software developer), Shreyansh and Shri Hari (IoT/hardware), and Sachin (product) — spent months building AyuChat from scratch. Tech stack: React JS + TailwindCSS, Laravel, MySQL, and Meta's official WhatsApp Cloud API v21.0. No shortcuts. Multi-tenant architecture from day one, with enterprise-grade security built in at every layer. The goal was not to build a toy — it was to build infrastructure.",
    tag: "First Build Complete",
    icon: <Plus size={16} />,
  },
  {
    year: "2026 - FIRST CUSTOMERS",
    title: "Devraj Hospital Goes Live",
    description:
      "AyuChat's first pilot customer was Devraj Hospital in Gwalior - a 120-bed multispecialty hospital that needed to automate OPD appointment reminders and patient communication. Within 30 days of going live, OPD bookings increased by 40% and the hospital's communication team saved 3 hours per day. Gupta Sanitary in Dabra joined next, running a WhatsApp campaign to 800 customers that generated 120 inquiries and 43 conversions with 15x ROI.",
    tag: "Product-Market Fit Proven",
    icon: <Circle size={10} fill="currentColor" />,
  },
  {
    year: "2026 - PRESENT - SCALING",
    title: "Growing Across India",
    description:
      "AyuChat now serves 1,000+ businesses across healthcare, e-commerce, real estate, automotive, and education sectors throughout India. We've processed over 14 million messages, maintained a 96.2% delivery rate, and built a platform that rivals global tools at India-first pricing. The mission remains the same: give every Indian business the communication infrastructure that was previously only available to large enterprises.",
    tag: "1,000+ Businesses & Growing",
    icon: <ArrowUp size={14} />,
  },
];

const Story: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50] px-4 py-1 rounded-full text-xs font-semibold font">
            OUR STORY
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold mt-4 font-['Bricolage_Grotesque'] leading-tight">
            From Idea to{" "}
            <span className="text-[#0B6B50]">1,000 Businesses</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            AyuChat didn't start in a Silicon Valley garage. It started with a real
            problem — watching small Indian businesses struggle to follow up with
            customers, answer queries, and send updates manually, one message at a time.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[18px] top-6 bottom-95 w-[1.5px] bg-[#0B6B50]/80 sm:top-8 sm:bottom-36" />

          <div className="space-y-14">
            {storyData.map((item, index) => (
              <div key={index} className="relative pl-12">

                {/* ICON */}
                <div className="absolute left-0 top-1 flex items-center justify-center">
                  <div className="w-9 h-9 bg-[#0B6B50] text-white rounded-full flex items-center justify-center border-4 border-[#eaf5f1] shadow">
                    {item.icon}
                  </div>
                </div>

                {/* CONTENT */}
                <p className="text-xs font-bold text-[#0B6B50] tracking-wide">
                  {item.year}
                </p>

                <h3 className="text-xl sm:text-2xl font-bold mt-1 font-['Bricolage_Grotesque']">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">
                  {item.description}
                </p>

                {item.tag && (
                  <span className="inline-block mt-4 bg-[#E6F4EF] text-[#0B6B50] px-3 py-1 rounded-full text-xs font-medium">
                    {item.tag}
                  </span>
                )}

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Story;