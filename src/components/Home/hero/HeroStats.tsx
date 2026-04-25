import { Check } from "lucide-react";

const HeroStats = () => {
  return (
    <div className="mt-8 flex justify-center gap-6 text-sm text-gray-500">
      <span><Check size={18} strokeWidth={3.5}/> Free Trial</span>
      <span><Check size={18} strokeWidth={3.5}/> No Card</span>
      <span><Check size={18} strokeWidth={3.5}/> Quick Setup</span>
    </div>
  );
};

export default HeroStats;