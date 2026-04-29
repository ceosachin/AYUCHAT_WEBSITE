import React from "react";

/* ================= TYPES ================= */

type RowProps = {
  title: string;
  starter: string;
  growth: string;
  scale: string;
  boldGrowth?: boolean;
};

type SectionRowProps = {
  title: string;
};

/* ================= MAIN ================= */

const PlanComparison: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-16">

      {/* Badge */}
      <div className="flex justify-center mb-4">
        <span className="bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50] px-3 sm:px-4 py-1 rounded-full text-[10px] sm:text-xs font-semibold tracking-wide">
          FULL COMPARISON
        </span>
      </div>

      {/* Heading */}
      <h2 className="font-['Bricolage_Grotesque'] text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#1C1C1C] leading-tight">
        Compare All <span className="text-[#0B6B50]">Plan Features</span>
      </h2>

      {/* TABLE WRAPPER (IMPORTANT) */}
      <div className="mt-8 sm:mt-10 border border-gray-200 rounded-2xl overflow-hidden">
        
        {/* SCROLL FIX */}
        <div className="overflow-x-auto">
          <table className="min-w-[600px] w-full text-xs sm:text-sm">

            {/* Header */}
            <thead>
              <tr className="bg-[#F7F9F8] text-gray-600">
                <th className="p-3 sm:p-4 text-left font-semibold">
                  Feature
                </th>

                <th className="p-3 sm:p-4 text-center font-semibold">
                  Starter
                </th>

                <th className="p-3 sm:p-4 text-center font-semibold bg-[#DCEBE6] text-[#0B6B50]">
                  Growth
                </th>

                <th className="p-3 sm:p-4 text-center font-semibold">
                  Scale
                </th>
              </tr>
            </thead>

            <tbody>

              <SectionRow title="MESSAGING & CAMPAIGNS" />

              <Row title="Contacts" starter="2,000" growth="10,000" scale="Unlimited" boldGrowth />
              <Row title="Campaigns per month" starter="5" growth="∞" scale="∞" />
              <Row title="Bulk message sending" starter="✓" growth="✓" scale="✓" />
              <Row title="Campaign scheduling" starter="✓" growth="✓" scale="✓" />
              <Row title="WABA numbers" starter="1" growth="3" scale="Unlimited" boldGrowth />

              <SectionRow title="AUTOMATION & CHATBOTS" />

              <Row title="Chatbot builder (drag-drop)" starter="—" growth="✓" scale="✓" />
              <Row title="Automation flow builder" starter="—" growth="✓" scale="✓" />
              <Row title="Active automations" starter="—" growth="Unlimited" scale="Unlimited" />
              <Row title="Keyword triggers" starter="—" growth="✓" scale="✓" />

              <SectionRow title="CRM & CONTACT MANAGEMENT" />

              <Row title="Custom contact fields" starter="5 fields" growth="Unlimited" scale="Unlimited" />
              <Row title="CSV import & export" starter="✓" growth="✓" scale="✓" />
              <Row title="Audience segmentation" starter="Basic" growth="Advanced" scale="Advanced" />
              <Row title="WhatsApp opt-in forms" starter="—" growth="✓" scale="✓" />

              <SectionRow title="TEAM & ACCESS" />

              <Row title="Team members" starter="2" growth="5" scale="Unlimited" />
              <Row title="Role-based permissions" starter="Basic" growth="Full RBAC" scale="Full RBAC" />
              <Row title="Multi-workspace management" starter="✓" growth="✓" scale="✓" />
              <Row title="Sub-account management" starter="—" growth="—" scale="✓" />

              <SectionRow title="ADVANCED & ENTERPRISE" />

              <Row title="REST API access" starter="—" growth="✓" scale="✓" />
              <Row title="Webhooks" starter="—" growth="✓" scale="✓" />
              <Row title="White-label + custom domain" starter="—" growth="—" scale="✓" />
              <Row title="Dedicated onboarding manager" starter="—" growth="—" scale="✓" />
              <Row title="Priority SLA support" starter="—" growth="—" scale="✓" />

              {/* Price Row */}
              <tr className="bg-[#F7F9F8]  font-semibold">
                <td className="p-3 sm:p-4 text-gray-900">
                  Monthly Price
                </td>

                <td className="text-center text-sm sm:text-base">
                  ₹999
                </td>

                <td className="text-center text-[#0B6B50] text-lg sm:text-xl font-bold bg-[#E6F4EF]">
                  ₹2,999
                </td>

                <td className="text-center text-sm sm:text-base">
                  ₹6,999
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlanComparison;

/* ================= SUB COMPONENTS ================= */

const Row: React.FC<RowProps> = ({ title, starter, growth, scale, boldGrowth }) => {
  return (
    <tr className="border-t border-gray-200">
      <td className="p-3 sm:p-4 text-gray-800 whitespace-nowrap">
        {title}
      </td>

      <td className="text-center text-gray-700">
        {starter}
      </td>

      <td
        className={`text-center bg-[#F1F7F4] ${
          boldGrowth ? "font-bold text-black" : "text-gray-900"
        }`}
      >
        {growth}
      </td>

      <td className="text-center text-gray-700">
        {scale}
      </td>
    </tr>
  );
};

const SectionRow: React.FC<SectionRowProps> = ({ title }) => {
  return (
    <tr className="bg-[#EEF3F1] text-[10px] sm:text-xs font-semibold text-gray-600">
      <td className="p-2 sm:p-3 uppercase tracking-wide" colSpan={4}>
        {title}
      </td>
    </tr>
  );
};