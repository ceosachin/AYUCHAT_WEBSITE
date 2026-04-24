function MetaCharges() {
  return (
    <div className="max-w-6xl mx-auto">

      <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm">
        META'S PER-MESSAGE CHARGES
      </span>

      <h2 className="text-4xl font-bold mt-4">
        What Meta Charges <span className="text-green-600">Separately</span>
      </h2>

      <p className="text-gray-500 mt-4 max-w-2xl">
        These are Meta's charges — not AyuChat's. They're billed by Meta directly.
      </p>

      <div className="mt-10 bg-[#031c1a] rounded-3xl p-8 grid md:grid-cols-4 gap-6 text-center">

        <ChargeCard title="MARKETING" price="₹0.25" tag="Promotional campaigns" color="text-yellow-400" />
        <ChargeCard title="UTILITY" price="₹0.20" tag="Reminders, receipts" color="text-green-400" />
        <ChargeCard title="AUTHENTICATION" price="₹0.19" tag="OTP, login codes" color="text-blue-400" />
        <ChargeCard title="SERVICE WINDOW" price="FREE" tag="Customer replies" color="text-green-300" />

      </div>
    </div>
  );
}

type ChargeCardProps = {
  title: string;
  price: string;
  tag: string;
  color: string;
};

function ChargeCard({ title, price, tag, color }: ChargeCardProps) {
  return (
    <div>
      <p className="text-gray-400 text-xs">{title}</p>
      <h3 className={`text-3xl font-bold mt-2 ${color}`}>{price}</h3>
      <p className="text-gray-400 text-sm">per message sent</p>

      <span className="inline-block mt-3 text-xs bg-gray-800 text-white px-3 py-1 rounded-full">
        {tag}
      </span>
    </div>
  );
}
export default MetaCharges;