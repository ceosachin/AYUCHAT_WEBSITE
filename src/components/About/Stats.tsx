// components/about/Stats.tsx

type Stat = {
  title: string;
  label: string;
};

const stats: Stat[] = [
  { title: "1,000+", label: "Active Businesses" },
  { title: "500K+", label: "Messages Daily" },
  { title: "96.2%", label: "Delivery Rate" },
  { title: "4.9/5", label: "Customer Rating" },
];

const Stats: React.FC = () => {
  return (
    <section className="px-6 pb-16">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-2xl font-bold text-[#0B6B50] font-['Bricolage_Grotesque']">{item.title}</h3>
            <p className="text-gray-500 mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;