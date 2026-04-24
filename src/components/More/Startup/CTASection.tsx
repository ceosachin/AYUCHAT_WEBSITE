export default function CTASection() {
  return (
    <div className="bg-[#F7FAF9] py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* CTA Card */}
        <div className="relative bg-[#176B52] rounded-3xl px-8 py-16 text-center overflow-hidden">

          {/* Subtle background circle */}
          <div className="absolute right-[-80px] top-[-80px] w-[300px] h-[300px] bg-white/5 rounded-full"></div>

          {/* Icon */}
          <div className="text-3xl mb-4">🚀</div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Apply? Spots are Limited.
          </h2>

          {/* Subtext */}
          <p className="text-green-100 mt-4 text-lg">
            50 startups per cohort. Next cohort starts June 1, 2026.
            Apply now to secure your spot.
          </p>

          {/* Button */}
          <button className="mt-8 bg-green-400 hover:bg-green-500 text-black font-semibold px-8 py-3 rounded-xl transition">
            Apply for Free — 3 Minutes →
          </button>

        </div>
      </div>
    </div>
  );
}