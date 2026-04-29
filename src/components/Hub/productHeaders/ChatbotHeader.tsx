import { LayoutGrid } from "lucide-react";
import React from "react";

const ChatbotHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-3 scale-[0.9] sm:scale-95">

      {/* Icon */}
      <div className="w-16 h-15 rounded-xl bg-blue-700/30 flex items-center justify-center sm:mt-11 ">
        <LayoutGrid className="text-white" strokeWidth={2} size={20} />
      </div>

      {/* Flow Box */}
      <div className="bg-blue-900/40 border border-blue-400/30 rounded-lg px-3 py-2 w-[200px] sm:w-[220px] text-white text-xs shadow-[0_10px_30px_rgba(0,0,0,0.3)]">

        <p className="text-blue-200 mb-1 text-xs">Flow Builder</p>

        <div className="space-y-1.5">

          <div className="bg-blue-600/40 px-2 py-1.5 rounded text-[10px]">
            Keyword: "book"
          </div>

          <div className="text-center text-blue-300 text-[10px]">|</div>

          <div className="bg-green-600/40 px-2 py-1.5 rounded text-[10px]">
            Send Menu → Select Option
          </div>

          <div className="text-center text-blue-300 text-[10px]">|</div>

          <div className="bg-blue-500/40 px-2 py-1.5 rounded text-[10px]">
            Collect Name → Confirm
          </div>

        </div>

      </div>
    </div>
  );
};

export default ChatbotHeader;