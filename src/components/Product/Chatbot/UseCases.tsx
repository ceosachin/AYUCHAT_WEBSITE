import { CalendarCheck, ShoppingCart, Home, GraduationCap } from "lucide-react";

export default function UseCases() {
  const data = [
    {
      icon: <CalendarCheck size={28} />,
      title: "OPD Appointment Booking",
      desc: "Patients type 'Book' → select doctor → pick date → confirm booking — fully automated, no staff needed.",
      highlight: "Devraj Hospital: 200 bookings/day via bot",
    },
    {
      icon: <ShoppingCart size={28} />,
      title: "Product Inquiry & Catalogue",
      desc: "Customers browse your catalogue, ask about pricing and availability, and place orders — all inside WhatsApp.",
      highlight: "↑ 40% online orders via chatbot",
    },
    {
      icon: <Home size={28} />,
      title: "Lead Qualification",
      desc: "New leads answer qualification questions — budget, timeline, location — and are automatically scored and assigned.",
      highlight: "↑ 3x qualified leads per week",
    },
    {
      icon: <GraduationCap size={28} />,
      title: "Admission Enquiries",
      desc: "Students and parents get course details, eligibility, fee structure, and scholarship info instantly at any hour.",
      highlight: "↑ 70% faster admissions response",
    },
  ];

  return (
    <section className="bg-[#f5f7f6] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Badge */}
        <span className="bg-blue-100 text-green-700 px-4 py-1 rounded-full text-xs font-semibold  inline-block">
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
              <div className="mb-4 text-gray-700">
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