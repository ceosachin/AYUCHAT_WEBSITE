import React from "react";

const testimonials = [
  {
    text: `"We started with Bulk Campaigns and saw 40% more OPD bookings in 30 days. Then we added the chatbot and automation — now 200 appointments are handled automatically every day without any staff involvement. AyuChat became our patient communication backbone."`,
    name: "Dr. Ramesh Gupta",
    role: "Medical Director, Devraj Hospital",
    uses: "Campaigns + Chatbot + Automation",
    initials: "DR",
    highlight: true
  },
  {
    text: `"As an agency managing 12 clients, the multi-business feature alone is worth the subscription. I manage all of them from one login, each completely isolated. My clients love the results — 15x ROI on campaigns. I love the clean workspace switching."`,
    name: "Ankit Mehta",
    role: "Founder, AM Digital Agency, Indore",
    uses: "Multi-Business + Campaigns + CRM",
    initials: "AM"
  },
  {
    text: `"Our Granite sale campaign generated 120 inquiries and ₹3.8 lakhs in revenue from a ₹261 Meta cost. The CRM pipeline shows us exactly where every lead is. The live inbox means no conversation falls through the cracks. Best marketing decision we've made."`,
    name: "Suresh Gupta",
    role: "Owner, Gupta Sanitary, Dabra",
    uses: "Campaigns + CRM + Inbox",
    initials: "SG"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 bg-[#f6f8f7]">

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="inline-block bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50] px-4 py-1 rounded-full text-xs font-medium">
          REAL RESULTS
        </span>

        <h2 className="text-3xl sm:text-4xl font-bold mt-4 font-['Bricolage_Grotesque']">
          Businesses Growing with{" "}
          <span className="text-[#]">AyuChat</span>
        </h2>
      </div>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {testimonials.map((t, i) => (
          <div
            key={i}
            className='rounded-2xl p-6 border bg-white transition-all hover:shadow-lg hover:border-[#0B6B50] border-gray-200'>
            {/* STARS */}
            <div className="text-yellow-400 text-lg">★★★★★</div>

            {/* TEXT */}
            <p className="mt-4 text-gray-600 text-sm leading-relaxed italic">
              {t.text}
            </p>

            {/* USER */}
            <div className="flex items-center gap-3 mt-6">

              {/* AVATAR */}
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-sm text-gray-700">
                {t.initials}
              </div>

              <div>
                <p className="font-semibold text-gray-900 text-sm">
                  {t.name}
                </p>
                <p className="text-xs text-gray-500">
                  {t.role}
                </p>

                <p className="text-xs text-[#0B6B05] mt-1 font-medium ">
                  Uses: {t.uses}
                </p>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Testimonials;