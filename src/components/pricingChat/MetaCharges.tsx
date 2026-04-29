function MetaCharges() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">

      {/* TAG */}
      <span className="bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50] px-3 sm:px-4 py-1 rounded-full text-[10px] sm:text-xs font-semibold inline-block">
        META'S PER-MESSAGE CHARGES
      </span>

      {/* HEADING */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 font-bricolage leading-tight">
        What Meta Charges{" "}
        <span className="text-[#0B6B50]">Separately</span>
      </h2>

      {/* DESC */}
      <p className="text-gray-500 mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base leading-relaxed">
        These are Meta's charges — not AyuChat's. They're billed by Meta
        directly to your Meta Business Manager. AyuChat does not mark these up.
      </p>

      {/* CARDS */}
      <div className="mt-8 sm:mt-10 bg-[#031c1a] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">

        <ChargeCard
          title="MARKETING"
          price="₹0.25"
          tag="Promotional campaigns"
          color="text-yellow-400"
        />
        <ChargeCard
          title="UTILITY"
          price="₹0.20"
          tag="Reminders, receipts"
          color="text-green-400"
        />
        <ChargeCard
          title="AUTHENTICATION"
          price="₹0.19"
          tag="OTP, login codes"
          color="text-blue-400"
        />
        <ChargeCard
          title="SERVICE WINDOW"
          price="FREE"
          tag="Customer replies"
          color="text-green-300"
        />

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
    <div className="py-4 sm:py-6">

      {/* TITLE */}
      <p className="text-gray-400 text-[10px] sm:text-xs tracking-wide">
        {title}
      </p>

      {/* PRICE */}
      <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold mt-1 sm:mt-2 ${color}`}>
        {price}
      </h3>

      {/* SUBTEXT */}
      <p className="text-gray-400 text-[10px] sm:text-xs mt-1">
        per message sent
      </p>

      {/* TAG */}
      <span className="inline-block mt-2 sm:mt-3 text-[10px] sm:text-xs bg-gray-800 text-white px-2 sm:px-3 py-1 rounded-full">
        {tag}
      </span>

    </div>
  );
}

export default MetaCharges;