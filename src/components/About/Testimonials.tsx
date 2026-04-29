// components/about/Testimonials.tsx

import { Star } from "lucide-react";

type Testimonial = {
  text: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  color: string;
};

const testimonials: Testimonial[] = [
  {
    text: `"Before AyuChat, our team was manually calling patients to confirm OPD appointments. We were missing 30% of them. After AyuChat, appointment reminders go out automatically, our no-show rate dropped by half, and OPD bookings went up 40% in the first month. The ROI was immediate and completely obvious."`,
    name: "Dr. Ramesh Gupta",
    role: "Medical Director",
    company: "Devraj Hospital, Gwalior",
    initials: "DR",
    color: "bg-green-100 text-green-700",
  },
  {
    text: `"We sent a campaign to 800 contacts about our granite collection sale. 120 people responded within 48 hours, and 43 became paying customers. Our Meta cost was ₹261. Our revenue from that single campaign was over ₹3.8 lakhs. I showed the numbers to my accountant and he thought I had made an error."`,
    name: "Suresh Gupta",
    role: "Owner",
    company: "Gupta Sanitary, Dabra",
    initials: "SG",
    color: "bg-blue-100 text-blue-700",
  },
  {
    text: `"I was skeptical about WhatsApp marketing — I thought it would feel spammy. AyuChat's chatbot changed my mind completely. Our bot handles 200 customer queries a day without any human intervention. Customers love it because they get instant responses at any time. Our team loves it because they can focus on actual selling."`,
    name: "Priya Kapoor",
    role: "Founder",
    company: "Fashion Boutique, Indore",
    initials: "PK",
    color: "bg-yellow-100 text-yellow-700",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-[#f6f8f7]">
      <div className="max-w-7xl mx-auto text-center">

        {/* Badge */}
        <span className="bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50] px-4 py-1 rounded-full text-xs font-semibold">
          CLIENT FEEDBACK
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-bold mt-4 font-['Bricolage_Grotesque'] leading-tight">
          What Our Customers{" "}
          <span className="text-[#0B6B50]">Say About Us</span>
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Real businesses. Real results. These are the people whose growth <br />
          we measure our success against.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-6 text-left hover:shadow-md transition"
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                {t.text}
              </p>

              {/* User */}
              <div className="flex items-center gap-3 mt-6">

                {/* Avatar */}
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold ${t.color}`}
                >
                  {t.initials}
                </div>

                {/* Info */}
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                  <p className="text-xs text-[#0B6B50] font-medium">
                    {t.company}
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

export default Testimonials;