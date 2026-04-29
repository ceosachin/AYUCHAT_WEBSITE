import { useState } from "react";

const tabs = [
  "All Articles",
  "Campaigns",
  "Chatbot & AI",
  "Automation",
  "Strategy",
  "Meta API",
  "CRM & Contacts",
  "Case Studies",
];

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 flex gap-2 sm:gap-3 flex-wrap justify-center sm:justify-start">

      {tabs.map((tab, i) => (
        <button
          key={i}
          onClick={() => setActiveTab(i)}
          className={`
            rounded-full 
            text-xs sm:text-sm 
            px-3 py-1.5 sm:px-4 sm:py-2 
            font-semibold 
            transition
            ${
              activeTab === i
                ? "bg-[#0B6B50] text-white"
                : "border border-gray-300 text-gray-600 hover:border-[#0B6B50]"
            }
          `}
        >
          {tab}
        </button>
      ))}

    </div>
  );
};

export default CategoryTabs;