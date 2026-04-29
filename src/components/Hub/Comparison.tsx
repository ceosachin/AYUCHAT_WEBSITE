import React from "react";

const Check = () => (
  <span className="text-[#0B6B50] font-semibold text-lg">✓</span>
);

const Dash = () => (
  <span className="text-gray-300 text-lg">—</span>
);

const SectionRow = ({ title }: { title: string }) => (
  <tr className="bg-gray-50">
    <td
      colSpan={4}
      className="px-6 py-3 text-xs font-semibold tracking-wider text-gray-500 uppercase font-['Bricolage_Grotesque']"
    >
      {title}
    </td>
  </tr>
);

const Comparison: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 bg-[#f6f8f7]">

      {/* TOP CONTENT */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-block bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50] px-4 py-1 rounded-full text-xs font-medium">
          AYUCHAT VS COMPETITORS
        </span>

        <h2 className="text-3xl sm:text-4xl font-bold mt-4 font-['Bricolage_Grotesque']">
          Why Businesses Choose{" "}
          <span className="text-[#0B6B50]">AyuChat</span>
        </h2>

        <p className="text-gray-600 mt-4 text-sm sm:text-base">
          Compared to other WhatsApp business platforms in the Indian market —
          features, pricing, and capabilities.
        </p>
      </div>

      {/* TABLE */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-gray-300 overflow-x-auto">

        <table className="w-full min-w-[700px] text-sm">

          {/* HEADER */}
          <thead>
            <tr className="text-gray-600 border-b border-gray-300">
              <th className="px-6 py-4 text-left font-medium">Feature</th>

              {/* Highlighted Column */}
              <th className="px-6 py-4 text-center font-semibold bg-green-50 text-[#0B6B50]">
                AyuChat
              </th>

              <th className="px-6 py-4 text-center font-medium">
                AiSensy
              </th>

              <th className="px-6 py-4 text-center font-medium">
                Interakt
              </th>
            </tr>
          </thead>

          <tbody className="text-gray-700">

            {/* CORE PRODUCTS */}
            <SectionRow title="CORE PRODUCTS" />

            <tr className="border-t border-gray-300">
              <td className="px-6 py-4">Bulk WhatsApp Campaigns</td>
              <td className="text-center bg-gray-100"><Check/></td>
              <td className="text-center "><Check /></td>
              <td className="text-center"><Check /></td>
            </tr>

            <tr className="border-t border-gray-300">
              <td className="px-6 py-4">No-Code Chatbot Builder</td>
              <td className="text-center bg-gray-100"><Check /></td>
              <td className="text-center"><Check /></td>
              <td className="text-center"><Dash /></td>
            </tr>

            <tr className="border-t border-gray-300">
              <td className="px-6 py-4">Automation Flow Builder</td>
              <td className="text-center bg-gray-100"><Check /></td>
              <td className="text-center"><Check /></td>
              <td className="text-center"><Check /></td>
            </tr>

            <tr className="border-t border-gray-300">
              <td className="px-6 py-4">Multi-Agent Live Inbox</td>
              <td className="text-center bg-gray-100"><Check /></td>
              <td className="text-center"><Check /></td>
              <td className="text-center"><Check /></td>
            </tr>

            {/* UNIQUE FEATURES */}
            <SectionRow title="UNIQUE FEATURES" />

            <tr className="border-t border-gray-300">
              <td className="px-6 py-4">
                Multi-Business Management (1 login)
              </td>
              <td className="text-center bg-gray-100"><Check /></td>
              <td className="text-center"><Dash /></td>
              <td className="text-center"><Dash /></td>
            </tr>

            <tr className="border-t border-gray-300">
              <td className="px-6 py-4">Pipeline-Based Contact CRM</td>
              <td className="text-center bg-gray-100"><Check /></td>
              <td className="text-center"><Dash /></td>
              <td className="text-center"><Dash /></td>
            </tr>

            <tr className="border-t border-gray-300">
              <td className="px-6 py-4">Razorpay Payment via WhatsApp</td>
              <td className="text-center bg-gray-100"><Check /></td>
              <td className="text-center"><Dash /></td>
              <td className="text-center"><Dash /></td>
            </tr>

            <tr className="border-t border-gray-300">
              <td className="px-6 py-4">White-Label for Agencies</td>
              <td className="text-center bg-gray-100"><Check /></td>
              <td className="text-center"><Dash /></td>
              <td className="text-center"><Check /></td>
            </tr>

            <tr className="border-t border-gray-300">
              <td className="px-6 py-4">Free Trial — No Credit Card</td>
              <td className="text-center bg-gray-100"><Check /></td>
              <td className="text-center"><Dash /></td>
              <td className="text-center"><Dash /></td>
            </tr>

            {/* PRICING */}
            <SectionRow title="PRICING" />

            <tr className="border-t border-gray-300 font-medium">
              <td className="px-6 py-4">Starting Monthly Price</td>
              <td className="text-center text-green-700 bg-gray-100 font-semibold">
                ₹999/mo
              </td>
              <td className="text-center">₹1,599/mo</td>
              <td className="text-center">₹2,499/mo</td>
            </tr>

          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Comparison;