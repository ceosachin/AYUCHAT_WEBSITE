import { CalendarCheck, ShoppingCart, Home, GraduationCap } from "lucide-react";

export default function UseCases() {
  const data = [
    {
      icon: <CalendarCheck size={28} />,
      title: "Welcome Sequence",
      desc: "New contact added → immediate welcome message → 24h follow-up → 3-day product offer. Fully automated.",
      highlight: "↑ 60% faster lead engagement",
    },
    {
      icon: <ShoppingCart size={28} />,
      title: "Appointment Reminders",
      desc: "Appointment booked → reminder 24h before → reminder 2h before → post-visit feedback request.",
      highlight: "↑ 55% reduction in no-shows",
    },
    {
      icon: <Home size={28} />,
      title: "Abandoned Cart Recovery",
      desc: "Cart abandoned → 30-min reminder → 24-hour coupon offer → 3-day final reminder with urgency.",
      highlight: "↑ 28% cart recovery rate",
    },
    {
      icon: <GraduationCap size={28} />,
      title: "Re-engagement Campaign",
      desc: "No activity in 30 days → re-engagement message → 7-day reminder → 14-day final offer or unsubscribe.",
      highlight: "↑ 35% of inactive leads reactivated",
    },
  ];

  return (
    <section className="bg-[#f5f7f6] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Badge */}
        <span className="bg-[#E6F4EF] border border-[#0B6B50]/20 text-green-700 px-4 py-1 rounded-full text-xs font-semibold  inline-block">
          USE CASES
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
          How Businesses Use This <br />
          <span className="text-green-800">
            Feature to Grow
          </span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6 mt-14 text-left">

          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-50 text-[#0B6B50]  mb-4">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                {item.desc}
              </p>

              {/* Highlight */}
              <p className="text-green-700 text-sm mt-4 font-medium">
                {item.highlight}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}