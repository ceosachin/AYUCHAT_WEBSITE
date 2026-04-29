import React from "react";

const steps = [
  {
    title: "Campaign sends a message",
    desc: "A bulk campaign reaches 1,200 contacts. Replies automatically open in the Live Inbox and create contact records in the CRM."
  },
  {
    title: "Chatbot handles the response",
    desc: 'If the contact replies with "book", the chatbot takes over — collects their details, confirms the appointment, and saves the info directly to the CRM.'
  },
  {
    title: "Automation triggers a reminder",
    desc: "24 hours before the appointment, an automation flow sends a reminder. 2 hours before, another reminder goes out — all automatic."
  },
  {
    title: "Inbox handles any human queries",
    desc: "If the customer needs to reschedule, the chatbot hands off to a live agent in the inbox — with the full CRM context visible on screen."
  },
  {
    title: "CRM closes the loop",
    desc: 'After the appointment, the contact is moved to "Completed" in the pipeline. A post-visit feedback automation triggers automatically.'
  }
];

const Workflow: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 bg-[#f6f8f7]">

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="inline-block bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50] px-4 py-1 rounded-full text-xs font-medium">
          HOW IT WORKS TOGETHER
        </span>

        <h2 className="text-3xl sm:text-4xl font-bold mt-4 leading-tight font-['Bricolage_Grotesque']">
          All 6 Products Work <br />
          <span className="text-[#0B6B50]">
            Together as One System
          </span>
        </h2>

        <p className="text-gray-600 mt-4 text-sm sm:text-base">
          Unlike buying 5 separate tools, AyuChat is a connected platform — data
          flows automatically between campaigns, automation, chatbot, inbox, and CRM.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE - STEPS */}
        <div className="space-y-5">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex gap-4 bg-gray-50 border border-gray-300 rounded-2xl p-5 "
            >
              {/* NUMBER */}
              <div className="w-10 h-10 rounded-lg bg-[#0B6B50] text-white flex items-center justify-center font-semibold shrink-0">
                {i + 1}
              </div>

              {/* TEXT */}
              <div>
                <h4 className="font-semibold text-gray-900">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE - FLOW UI */}
        <div className="bg-[#031c17] text-white rounded-3xl p-5 sm:p-6 shadow-xl">

          {/* TOP BAR */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 bg-red-400 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-400 rounded-full"></span>
            <span className="ml-3 text-xs text-gray-400">
              AyuChat Platform Flow
            </span>
          </div>

          {/* FLOW ITEMS */}
          <div className="space-y-4">

            {/* ITEM */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-green-600 flex items-center justify-center text-xs font-bold">
                  C
                </div>
                <div>
                  <p className="text-sm font-semibold">
                    Bulk Campaign Sent
                  </p>
                  <p className="text-xs text-gray-400">
                    1,200 contacts · 96.2% delivered
                  </p>
                </div>
              </div>

              <span className="text-xs bg-green-600/20 text-green-400 px-2 py-1 rounded-full">
                Active
              </span>
            </div>

            {/* ARROW */}
            <div className="text-center text-gray-500">↓</div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-blue-600 flex items-center justify-center text-xs font-bold">
                B
              </div>
              <div>
                <p className="text-sm font-semibold">
                  Chatbot Activated on Reply
                </p>
                <p className="text-xs text-gray-400">
                  Keyword "book" → appointment flow started
                </p>
              </div>
            </div>

            <div className="text-center text-gray-500">↓</div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-pink-600 flex items-center justify-center text-xs font-bold">
                R
              </div>
              <div>
                <p className="text-sm font-semibold">
                  CRM Updated
                </p>
                <p className="text-xs text-gray-400">
                  Contact moved to Qualified → appointment saved
                </p>
              </div>
            </div>

            <div className="text-center text-gray-500">↓</div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-purple-600 flex items-center justify-center text-xs font-bold">
                A
              </div>
              <div>
                <p className="text-sm font-semibold">
                  Automation Flow Triggered
                </p>
                <p className="text-xs text-gray-400">
                  24h + 2h reminder sequences running
                </p>
              </div>
            </div>

            <div className="text-center text-gray-500">↓</div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-orange-500 flex items-center justify-center text-xs font-bold">
                I
              </div>
              <div>
                <p className="text-sm font-semibold">
                  Inbox → Human Handoff
                </p>
                <p className="text-xs text-gray-400">
                  Rescheduling request → assigned to agent
                </p>
              </div>
            </div>

          </div>

          {/* OUTCOME */}
          <div className="mt-6 border border-green-600/30 bg-green-900/20 rounded-xl p-4 grid grid-cols-3 text-center">
            <div>
              <p className="text-lg font-bold text-green-400">87</p>
              <p className="text-xs text-gray-400">Appointments</p>
            </div>
            <div>
              <p className="text-lg font-bold text-green-400">₹2.4L</p>
              <p className="text-xs text-gray-400">Revenue</p>
            </div>
            <div>
              <p className="text-lg font-bold text-green-400">Zero</p>
              <p className="text-xs text-gray-400">Manual Work</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Workflow;