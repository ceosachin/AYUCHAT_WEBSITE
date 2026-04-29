import { Share2 } from "lucide-react";
import React from "react";

const AutomationHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-3 scale-[0.9] sm:scale-95">

      {/* Icon */}
      <div className="w-16 h-16 rounded-xl bg-purple-700/30 flex items-center justify-center sm:mt-7">
        <Share2 className="text-white" strokeWidth={2} size={20} />
      </div>

      {/* Automation Box */}
      <div className="bg-purple-900/40 border border-purple-400/30 rounded-lg px-3 py-2 w-[200px] sm:w-[220px] text-white text-xs shadow-[0_10px_30px_rgba(0,0,0,0.3)]">

        <p className="text-purple-200 mb-1 text-xs">
          Automation Active — 24 contacts
        </p>

        <div className="space-y-1.5">

          <div className="bg-purple-500/40 px-2 py-1.5 rounded text-[10px]">
            TRIGGER → New Contact
          </div>

          <div className="bg-green-500/40 px-2 py-1.5 rounded text-[10px]">
            ACTION → Send Welcome
          </div>

          <div className="bg-yellow-500/40 px-2 py-1.5 rounded text-[10px]">
            DELAY → 24 hours
          </div>

          <div className="bg-purple-600/40 px-2 py-1.5 rounded text-[10px]">
            IF replied → Tag VIP
          </div>

        </div>

      </div>
    </div>
  );
};

export default AutomationHeader;