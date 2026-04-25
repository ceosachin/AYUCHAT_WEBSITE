import { ArrowRight } from "lucide-react";

export default function SystemStatus() {
  return (
    <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex justify-between items-center">
      
      {/* LEFT */}
      <div className="flex items-start gap-3">
       
        <div className="relative mt-1">
          <span className="absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75 animate-ping mt-1"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-600"></span>
        </div>

        {/* TEXT */}
        <div>
          <p className="font-semibold text-green-800">
            All Systems Operational
          </p>
          <p className="text-xs text-gray-600">
            Platform, API, and webhooks are all running normally. Last checked 3 minutes ago.
          </p>
        </div>

      </div>

      {/* RIGHT */}
      <button className="flex items-center gap-1 text-green-700 font-medium text-sm hover:gap-2 transition-all">
        View Status Page <ArrowRight size={16} />
      </button>
    </div>
  );
}