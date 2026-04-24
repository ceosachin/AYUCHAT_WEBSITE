export default function StartupStories() {
  const testimonials = [
    {
      text: `"The startup program was a game-changer for us. We acquired 3,000 leads via WhatsApp chatbot in our first 30 days - all free. By the time our 6 months ended, WhatsApp was our highest-converting channel."`,
      name: "Ankita Singh",
      role: "CEO, MedEasy Health (MedTech Startup)",
      initials: "AS",
      color: "bg-green-100 text-green-700",
    },
    {
      text: `"We were spending ₹40,000/month on SMS campaigns with 12% open rates. AyuChat's startup program let us switch to WhatsApp for free. Our open rates jumped to 78%. The ROI comparison was embarrassing."`,
      name: "Vivek Kumar",
      role: "Founder, ShipSwift Logistics",
      initials: "VK",
      color: "bg-blue-100 text-blue-700",
    },
    {
      text: `"The onboarding call alone was worth it. In 30 minutes, the AyuChat team helped us set up our first automation flow. By week 3, our chatbot was handling 200 customer queries a day with zero human intervention."`,
      name: "Nidhi Kapoor",
      role: "Co-founder, LearnFast EdTech",
      initials: "NK",
      color: "bg-yellow-100 text-yellow-700",
    },
  ];

  return (
    <div className="bg-[#F7FAF9] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
          STARTUP STORIES
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Founders Who{" "}
          <span className="text-green-600">Grew with AyuChat</span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-[#E6F0EC] rounded-2xl p-6 hover:shadow-md transition"
            >
              {/* Stars */}
              <div className="text-yellow-400 text-lg">★★★★★</div>

              {/* Text */}
              <p className="text-gray-700 text-sm mt-4 leading-relaxed">
                {item.text}
              </p>

              {/* User */}
              <div className="flex items-center gap-3 mt-6">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${item.color}`}
                >
                  {item.initials}
                </div>

                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {item.name}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}