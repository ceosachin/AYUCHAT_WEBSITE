import { Download } from "lucide-react";

export function PressContact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-16 sm:mt-20 lg:mt-24 mb-16 sm:mb-20 lg:mb-24">

      {/* Tag */}
      <p className="text-[10px] sm:text-xs bg-[#E6F4EF] text-[#0B6B50] px-3 sm:px-4 py-1 rounded-full inline-block mb-4 font-medium tracking-wide">
        PRESS CONTACT
      </p>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        Talk to Our Team
      </h2>

      {/* Subtitle */}
      <p className="text-gray-500 text-sm sm:text-base mb-8 sm:mb-10 max-w-2xl">
        For press inquiries, partnership features, or interview requests, reach out to us directly. We typically respond within 24 hours.
      </p>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">

        {/* Sachin Card */}
        <div className="bg-[#F9FBFA] border rounded-xl">
          <div className="p-4 sm:p-6 flex items-start gap-3 sm:gap-4">

            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-green-100 text-[#0B6B50] font-semibold text-sm sm:text-base">
              SK
            </div>

            <div>
              <p className="font-semibold text-gray-900 text-sm sm:text-base">
                Sachin — Founder & CEO
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mb-1">
                Press, partnerships, investor inquiries
              </p>
              <p className="text-xs sm:text-sm text-[#0B6B50] font-medium break-all">
                sachin@agnistoka.com
              </p>
            </div>

          </div>
        </div>

        {/* PR Card */}
        <div className="bg-[#F9FBFA] border rounded-xl">
          <div className="p-4 sm:p-6 flex items-start gap-3 sm:gap-4">

            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold text-sm sm:text-base">
              PR
            </div>

            <div>
              <p className="font-semibold text-gray-900 text-sm sm:text-base">
                PR & Communications Team
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mb-1">
                Editorial features, product announcements
              </p>
              <p className="text-xs sm:text-sm text-[#0B6B50] font-medium break-all">
                press@ayuchat.in
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom CTA Box */}
      <div className="bg-[#F9FBFA] border rounded-xl">
        <div className="p-4 sm:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>
            <p className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
              Need everything at once?
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Download the complete media kit including all logos, screenshots, and company assets.
            </p>
          </div>

          {/* Button */}
          <button className="bg-[#0B6B50] hover:bg-[#09543f] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl flex items-center justify-center gap-2 w-full md:w-auto transition">
            <Download size={18} />
            Download Full Brand Kit
          </button>

        </div>
      </div>

    </div>
  );
}