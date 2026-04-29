import { Mail } from "lucide-react";
import React from "react";

const InboxHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-3 scale-[0.9] sm:scale-95">

      {/* Icon */}
      <div className="w-16 h-16 rounded-xl bg-orange-600/30 flex items-center justify-center ">
        <Mail className="text-white" size={20} />
      </div>

      {/* Inbox Box */}
      <div className="bg-orange-900/40 border border-orange-400/30 rounded-lg px-3 py-2 w-[200px] sm:w-[220px] text-white text-xs shadow-[0_10px_30px_rgba(0,0,0,0.3)]">

        <div className="flex justify-between mb-2">
          <span className="text-orange-200">Live Inbox</span>
          <span className="text-orange-300 text-[10px]">8 New</span>
        </div>

        <div className="space-y-2">
          <div className="flex gap-2 items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            <div className="flex-1 h-[3px] bg-white/20 rounded" />
          </div>
          <div className="flex gap-2 items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            <div className="flex-1 h-[3px] bg-white/20 rounded" />
          </div>
          <div className="flex gap-2 items-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full" />
            <div className="flex-1 h-[3px] bg-white/20 rounded" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default InboxHeader;