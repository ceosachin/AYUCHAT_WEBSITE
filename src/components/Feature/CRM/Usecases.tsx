export default function UseCases() {
  return (
    <section className="py-24 px-6 bg-[#f6f8f7]">
      <div className="max-w-7xl mx-auto text-center">

        {/* Badge */}
        <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
          USE CASES
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
          How Businesses Use This <br />
          <span className="text-green-600">Feature to Grow</span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6 mt-16 text-left">

          <Card
            icon="🏢"
            title="Digital Marketing Agencies"
            desc="Manage 10, 20, 50 client businesses from one dashboard. Each client sees only their own data — you see everything."
            highlight="Used by agencies managing 20+ clients"
          />

          <Card
            icon="🏥"
            title="Hospital Groups"
            desc="One account for multiple hospital branches — each with its own team, WhatsApp number, campaigns, and patient data."
            highlight="↑ 70% admin efficiency for hospital groups"
          />

          <Card
            icon="🏪"
            title="Multi-Brand Retailers"
            desc="Run WhatsApp marketing for your clothing brand, your home furnishings brand, and your food brand — all separately, all from one login."
            highlight="↑ 3x faster campaign management"
          />

          <Card
            icon="💼"
            title="Enterprise Franchises"
            desc="Each franchise location gets its own workspace with local team members and local WhatsApp number — managed by headquarters."
            highlight="Used by franchise businesses with 15+ locations"
          />

        </div>
      </div>
    </section>
  );
}
// 👇 MUST be in same file OR imported
type CardProps = {
  icon: string;
  title: string;
  desc: string;
  highlight: string;
};

function Card({ icon, title, desc, highlight }: CardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">
      <div className="text-3xl mb-4">{icon}</div>

      <h3 className="font-semibold text-lg mb-2 text-gray-900">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {desc}
      </p>

      <p className="text-green-600 text-sm font-medium mt-4">
        {highlight}
      </p>
    </div>
  );
}