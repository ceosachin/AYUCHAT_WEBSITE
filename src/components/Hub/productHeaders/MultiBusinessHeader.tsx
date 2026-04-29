import { LayoutGrid } from "lucide-react";
import React from "react";

const MultiBusinessHeader: React.FC = () => {
  return (
    <div className="w-full px-4 pt-6 pb-8 flex flex-col gap-5">

      {/* TOP ROW */}
      <div className="flex flex-wrap items-center justify-between gap-3">

        {/* LEFT */}
        <div className="flex items-center gap-3 flex-wrap">

          {/* ICON */}
          <div className="w-14 h-14 rounded-xl bg-green-700/30 flex items-center justify-center shrink-0 sm:mt-8">
            <LayoutGrid className="text-white" size={20} />
          </div>

          {/* USER INFO */}
          <div className="flex flex-col leading-tight">
            <span className="text-white text-sm font-semibold">
              sachin@agnistoka.com
            </span>
            <span className="text-green-300 text-xs bg-green-500/10 px-2 py-0.5 rounded-full w-fit">
              Pro Account · 4 Workspaces
            </span>
          </div>
        </div>

        {/* RIGHT BADGE */}
        <span className="text-green-300 text-xs border border-green-400/30 px-3 py-1 rounded-full whitespace-nowrap">
          Enterprise Feature
        </span>
      </div>

      {/* WORKSPACES ROW */}
      <div className="flex flex-wrap gap-2">

        {/* CHIP */}
        <div className="px-3 py-2 rounded-lg border border-green-500/20 bg-green-500/10 text-green-300 text-xs">
          <p className="font-semibold text-sm leading-none">Devraj Hospital</p>
          <span className="text-[10px] text-green-400/80">
            Healthcare · Active
          </span>
        </div>

        <div className="px-3 py-2 rounded-lg border border-yellow-500/20 bg-yellow-500/10 text-yellow-300 text-xs">
          <p className="font-semibold text-sm leading-none">Gupta Sanitary</p>
          <span className="text-[10px] text-yellow-400/80">
            Retail · Growth
          </span>
        </div>

        <div className="px-3 py-2 rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-300 text-xs">
          <p className="font-semibold text-sm leading-none">Nikunj Motors</p>
          <span className="text-[10px] text-blue-400/80">
            Auto · Starter
          </span>
        </div>

        <div className="px-3 py-2 rounded-lg border border-purple-500/20 bg-purple-500/10 text-purple-300 text-xs">
          <p className="font-semibold text-sm leading-none">Fashion Kapoor</p>
          <span className="text-[10px] text-purple-400/80">
            Retail · Growth
          </span>
        </div>

      </div>
    </div>
  );
};

export default MultiBusinessHeader;