import { CheckCircle, XCircle } from "lucide-react";

export default function Eligibility() {
  return (
    <div className="bg-[#F7FAF9] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
          ELIGIBILITY
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Are You <span className="text-green-600">Eligible?</span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We keep eligibility simple. If you're building a real product for real
          customers, you probably qualify.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12 text-left">

          {/* QUALIFY CARD */}
          <div className="bg-[#E8F3EF] border border-[#CFE7DF] rounded-2xl p-6">

            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="text-green-600 w-6 h-6" />
              <h3 className="text-lg font-semibold text-green-700">
                You qualify if...
              </h3>
            </div>

            <ul className="space-y-3 text-gray-700 text-sm">
              {[
                "Your startup is less than 3 years old",
                "You have fewer than 50 full-time employees",
                "You have raised less than $2M in funding",
                "You have a live product or are in active development",
                "You plan to use WhatsApp as a primary customer communication channel",
                "Your startup is registered as a legal entity (Pvt Ltd, LLP, etc.)",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* NOT QUALIFY CARD */}
          <div className="bg-[#FDECEC] border border-[#F5C2C2] rounded-2xl p-6">

            <div className="flex items-center gap-3 mb-4">
              <XCircle className="text-red-500 w-6 h-6" />
              <h3 className="text-lg font-semibold text-red-600">
                You don't qualify if...
              </h3>
            </div>

            <ul className="space-y-3 text-gray-700 text-sm">
              {[
                "You are a marketing agency or reseller (check our Partner Program instead)",
                "Your startup is a subsidiary of a larger corporation",
                "You have previously participated in the AyuChat Startup Program",
                "Your business violates Meta's WhatsApp Business Policy",
                "You are applying purely to resell access to other businesses",
                "Your primary market is outside India (international program coming soon)",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}