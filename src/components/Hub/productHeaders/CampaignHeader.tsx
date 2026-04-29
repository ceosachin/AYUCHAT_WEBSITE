import { MessageSquare } from "lucide-react";
import React from "react";

const CampaignHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-3 scale-[0.9] sm:scale-95">

      {/* Top Icon */}
      <div className="w-16 h-16 rounded-xl bg-green-700/30 flex items-center justify-center  ">
        <MessageSquare className="text-white" strokeWidth={2} size={20} />
      </div>

      {/* Glass Card */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-3 py-2 w-[200px] sm:w-[220px] text-white text-xs shadow-[0_10px_30px_rgba(0,0,0,0.3)]">

        {/* Header */}
        <div className="flex justify-between items-center mb-1">
          <span className="text-gray-200 text-xs">Campaign Live</span>
          <span className="text-green-400 text-[10px] bg-green-400/20 px-2 py-[2px] rounded-full">
            Active
          </span>
        </div>

        {/* Progress Bar */}
        <div className="h-1.5 bg-white/20 rounded-full overflow-hidden mb-2">
          <div className="h-full w-[92%] bg-green-400 rounded-full" />
        </div>

        {/* Stats */}
        <div className="space-y-1.5">

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
            <div className="flex-1 h-[3px] bg-white/20 rounded" />
            <span className="text-green-400 text-[10px]">96.2%</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
            <div className="flex-1 h-[3px] bg-white/20 rounded" />
            <span className="text-blue-400 text-[10px]">71.4%</span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CampaignHeader;