import { Play, ArrowRight } from "lucide-react";

const videos = [
  {
    title: "Complete AyuChat Setup Walkthrough",
    meta: "12:34 · Getting Started",
    gradient: "from-green-600 to-green-400",
  },
  {
    title: "Creating & Submitting WhatsApp Templates",
    meta: "7:21 · Templates",
    gradient: "from-blue-600 to-blue-400",
  },
  {
    title: "Building Your First Chatbot in 15 Minutes",
    meta: "14:58 · Chatbot",
    gradient: "from-purple-600 to-purple-400",
  },
  {
    title: "Running a Bulk Campaign End-to-End",
    meta: "9:45 · Campaigns",
    gradient: "from-orange-500 to-yellow-400",
  },
];

export default function VideoSection() {
  return (
    <div>
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-semibold">
          Video Tutorials
        </h2>

        <button className="flex items-center gap-1 text-[#0B6B50] text-sm font-medium hover:gap-2 transition-all">
          View all videos <ArrowRight size={16} />
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {videos.map((video, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            
            {/* TOP GRADIENT */}
            <div
              className={`h-35 flex items-center justify-center bg-gradient-to-r ${video.gradient}`}
            >
              {/* PLAY BUTTON */}
              <div className="w-14 h-14 bg-white/80 rounded-full flex items-center justify-center">
                <Play className="text-green-700" size={20} />
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-4 bg-gray-50">
              <p className="font-medium text-gray-900 text-sm">
                {video.title}
              </p>
              <p className="text-xs text-gray-500 mt-1 ">
                {video.meta}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}