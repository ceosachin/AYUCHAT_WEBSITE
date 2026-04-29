import { Users } from "lucide-react";
import React from "react";

const PipelineHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-3 scale-[0.9] sm:scale-95">

      {/* ICON */}
      <div className="w-16 h-16 rounded-xl bg-pink-700/30 flex items-center justify-center ">
        <Users className="text-white" size={20} />
      </div>

      {/* PIPELINE BOX */}
      <div className="bg-pink-900/40 border border-pink-400/30 rounded-lg px-3 py-2 w-[200px] sm:w-[220px] text-white text-xs shadow-[0_10px_30px_rgba(0,0,0,0.3)]">

        {/* TOP TEXT */}
        <p className="text-pink-200 text-xs mb-2">
          Pipeline · 28 Contacts
        </p>

        {/* STATS */}
        <div className="grid grid-cols-4 gap-1 text-center mb-2">

          <div className="bg-pink-500/40 rounded py-1">
            <p className="text-[10px]">New</p>
            <span className="text-[11px] font-semibold">8</span>
          </div>

          <div className="bg-blue-500/40 rounded py-1">
            <p className="text-[10px]">Talk</p>
            <span className="text-[11px] font-semibold">12</span>
          </div>

          <div className="bg-yellow-500/40 rounded py-1">
            <p className="text-[10px]">Qual</p>
            <span className="text-[11px] font-semibold">5</span>
          </div>

          <div className="bg-green-500/40 rounded py-1">
            <p className="text-[10px]">Won</p>
            <span className="text-[11px] font-semibold">3</span>
          </div>

        </div>

        {/* VALUE */}
        <div className="bg-white/10 rounded px-2 py-1 flex justify-between text-[10px]">
          <span className="text-gray-300">Pipeline Value</span>
          <span className="text-green-400 font-semibold">₹3.2L</span>
        </div>

      </div>
    </div>
  );
};

export default PipelineHeader;