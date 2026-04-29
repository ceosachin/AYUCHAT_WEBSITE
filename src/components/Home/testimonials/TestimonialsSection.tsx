import React from "react";
import { testimonials } from "./data";
import { Star } from "lucide-react";

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-[#F5F7F6] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Tag */}
        <span className="inline-block px-3 py-1 text-[10px] sm:text-xs font-semibold bg-blue-100 text-[#0B6B50] rounded-full">
          CUSTOMER STORIES
        </span>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 sm:mt-6 font-['Bricolage_Grotesque']">
          Businesses Growing with{" "}
          <span className="text-[#0B6B50]">AyuChat</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">

          {testimonials.map((item, i) => (
            <div
              key={i}
              className="text-left transition hover:shadow-md border border-gray-100 rounded-xl bg-white p-5 sm:p-6"
            >

              {/* Stars */}
              <div className="flex gap-1 text-yellow-500">
                {Array(5)
                  .fill(0)
                  .map((_, idx) => (
                    <Star
                      key={idx}
                      size={14}
                      className="sm:w-4 sm:h-4"
                      fill="currentColor"
                    />
                  ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mt-4 leading-relaxed text-sm sm:text-base">
                {item.text}
              </p>

              {/* User */}
              <div className="flex items-center gap-3 mt-5 sm:mt-6">

                {/* Avatar */}
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold ${item.color}`}
                >
                  {item.initials}
                </div>

                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">
                    {item.name}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-500">
                    {item.role}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;