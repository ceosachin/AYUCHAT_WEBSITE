import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-2 sm:gap-3 mt-8 sm:mt-10 mb-8 sm:mb-10 flex-wrap">

      {/* PREVIOUS */}
      <button className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-200 rounded-md flex items-center justify-center hover:bg-gray-100 transition">
        <ChevronLeft size={16} />
      </button>

      {/* PAGE 1 (ACTIVE) */}
      <button className="w-8 h-8 sm:w-10 sm:h-10 bg-[#0B6B50] hover:bg-green-700 text-white font-medium rounded-md transition">
        1
      </button>

      {/* DOTS */}
      <button className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-200 rounded-md text-gray-500 cursor-default">
        ...
      </button>

      {/* LAST PAGE */}
      <button className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-100 transition">
        12
      </button>

      {/* NEXT */}
      <button className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-200 rounded-md flex items-center justify-center hover:bg-gray-100 transition">
        <ChevronRight size={16} />
      </button>

    </div>
  );
};

export default Pagination;