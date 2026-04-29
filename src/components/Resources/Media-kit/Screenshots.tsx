export default function ProductScreenshots() {
  return (
    <div className="bg-[#F8FBFA] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* TAG */}
        <span className="text-[10px] sm:text-xs font-semibold bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50] px-3 py-1 rounded-full">
          PRODUCT SCREENSHOTS
        </span>

        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 font-['Bricolage_Grotesque']">
          High-Res Product Images
        </h2>

        {/* DESC */}
        <p className="text-gray-600 mt-3 max-w-2xl text-sm sm:text-base">
          Use these screenshots in articles, blog posts, and reviews.
          Do not crop or alter the product UI.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-10">

          {[
            {
              title: "Dashboard Overview",
              size: "PNG · 2560×1440px · 2MB",
              content: (
                <div className="bg-[#F4F8F6] rounded-xl p-3 sm:px-4 sm:py-10 flex gap-3 sm:gap-4">
                  <div className="w-12 sm:w-16 flex flex-col gap-2">
                    <div className="h-3 bg-[#0B6B50] rounded"></div>
                    <div className="h-2 bg-gray-300 rounded"></div>
                    <div className="h-2 bg-gray-200 rounded"></div>
                    <div className="h-2 bg-gray-200 rounded"></div>
                  </div>

                  <div className="flex-1">
                    <div className="flex gap-2 mb-3 sm:mb-4">
                      <div className="px-2 sm:px-3 py-1 bg-white rounded text-xs sm:text-sm font-semibold shadow-sm">96%</div>
                      <div className="px-2 sm:px-3 py-1 bg-white rounded text-xs sm:text-sm font-semibold shadow-sm">₹2.4L</div>
                      <div className="px-2 sm:px-3 py-1 bg-white rounded text-xs sm:text-sm font-semibold text-blue-600 shadow-sm">1,044</div>
                    </div>

                    <div className="bg-white rounded-lg p-2 sm:p-3 flex items-end gap-1 sm:gap-2 h-20 sm:h-28 shadow-sm">
                      {[6, 10, 16, 20, 24, 18, 26].map((h, i) => (
                        <div key={i} className="w-2 sm:w-3 rounded bg-[#0B6B50]" style={{ height: `${h * 3}px` }} />
                      ))}
                    </div>
                  </div>
                </div>
              ),
            },

            {
              title: "Campaigns Dashboard",
              size: "PNG · 2560×1440px · 1.8MB",
              content: (
                <div className="bg-[#F4F8F6] rounded-xl p-3 sm:p-4 flex gap-3 sm:gap-4">
                  <div className="w-12 sm:w-16 flex flex-col gap-2">
                    <div className="h-3 bg-[#0B6B50] rounded"></div>
                    <div className="h-2 bg-gray-300 rounded"></div>
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="h-5 bg-white rounded w-3/4"></div>

                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-white p-2 sm:p-3 rounded shadow-sm">
                        <div className="h-2 bg-gray-200 rounded w-2/3 mb-2"></div>
                        <div className="flex justify-between items-center">
                          <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                          <div className="w-16 sm:w-24 h-2 bg-gray-200 rounded">
                            <div className="h-2 bg-[#10A87F] rounded w-2/3"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ),
            },

            {
              title: "Chatbot Builder",
              size: "PNG · 2560×1440px · 2.1MB",
              content: (
                <div className="bg-[#F4F8F6] rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                  <div className="flex flex-col items-center gap-2 sm:gap-3">
                    <div className="px-3 py-1 border border-[#10A87F] text-xs sm:text-sm rounded text-[#10A87F]">
                      Keyword Trigger
                    </div>
                    <div className="w-1 h-5 bg-gray-300"></div>
                    <div className="px-3 sm:px-4 py-2 bg-[#0B6B50] text-white rounded text-xs sm:text-sm">
                      Send Menu
                    </div>
                  </div>

                  <div className="bg-[#EDE7E1] rounded p-3 sm:p-4 w-32 sm:w-40">
                    <div className="bg-[#0B6B50] text-white text-[10px] sm:text-xs px-2 py-1 rounded mb-2">
                      Devraj Hospital
                    </div>
                    <div className="bg-white p-2 rounded text-[10px] sm:text-xs mb-2">
                      Hello! How can we help you today?
                    </div>
                    <div className="bg-[#D1EDE4] p-2 rounded text-[10px] sm:text-xs text-center">
                      Book Appointment
                    </div>
                  </div>
                </div>
              ),
            },

            {
              title: "Live Inbox",
              size: "PNG · 2560×1440px · 1.6MB",
              content: (
                <div className="bg-[#F4F8F6] rounded-xl p-3 sm:p-4 sm:py-13 flex gap-3 sm:gap-4">
                  <div className="w-20 sm:w-32 space-y-2 sm:space-y-3">
                    <div className="h-3 sm:h-4 bg-white rounded"></div>
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-gray-300"></div>
                        <div className="h-2 bg-gray-300 rounded w-full"></div>
                      </div>
                    ))}
                  </div>

                  <div className="flex-1 space-y-2 sm:space-y-3">
                    <div className="h-3 sm:h-4 bg-gray-300 rounded w-1/3"></div>
                    <div className="h-6 sm:h-8 bg-gray-200 rounded"></div>
                    <div className="h-5 sm:h-6 bg-[#D1EDE4] rounded w-2/3"></div>
                  </div>
                </div>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-[#E2ECE8] rounded-2xl hover:shadow-lg transition bg-white h-full flex flex-col"
            >
              <div className="p-3 sm:p-4 flex flex-col h-full">
                {item.content}

                <p className="mt-4 font-semibold text-sm sm:text-base">
                  {item.title}
                </p>

                <p className="text-xs sm:text-sm text-gray-500">
                  {item.size}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}