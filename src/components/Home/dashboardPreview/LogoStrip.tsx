const logos = [
  {
    label: "Facebook Ads",
    img: "https://cdn.simpleicons.org/facebook/1877F2",
  },
  {
    label: "Shopify",
    img: "https://cdn.simpleicons.org/shopify/7AB55C",
  },
  {
    label: "Zoho CRM",
    img: "https://cdn.simpleicons.org/zoho/C8202F",
  },
  {
    label: "Razorpay",
    img: "https://cdn.simpleicons.org/razorpay/0C2451",
  },
  {
    label: "Google Sheets",
    img: "https://cdn.simpleicons.org/googlesheets/34A853",
  },
  {
    label: "Gmail",
    img: "https://cdn.simpleicons.org/gmail/EA4335",
  },
  {
    label: "WooCommerce",
    img: "https://cdn.simpleicons.org/woocommerce/96588A",
  },
];

const LogoStrip: React.FC = () => {
  return (
    <section className="bg-gray-100 shadow-t py-10 sm:py-12 px-4">
      
      {/* Heading */}
      <p className="text-center text-[10px] sm:text-xs tracking-widest text-gray-500 mb-6 sm:mb-10 font-semibold">
        BUSINESSES THAT RUN ON AYUCHAT
      </p>

      {/* Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 sm:gap-8 max-w-6xl mx-auto">
        
        {logos.map((item, i) => (
          <div
            key={i}
            className="hover:shadow-md transition rounded-xl border border-gray-200 bg-white p-3 flex flex-col items-center justify-center gap-2"
          >
            {/* Logo */}
            <img
              src={item.img}
              alt={item.label}
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />

            {/* Label */}
            <span className="text-[12px] sm:text-sm text-gray-600 text-center font-medium">
              {item.label}
            </span>
          </div>
        ))}

      </div>
    </section>
  );
};

export default LogoStrip;