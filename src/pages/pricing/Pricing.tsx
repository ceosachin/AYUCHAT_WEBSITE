import MetaCharges from "@/components/pricingChat/MetaCharges"
import PlanComparison from "@/components/pricingChat/PlanComparison"
import AddOns from "@/components/pricingChat/AddOns";
import PricingFAQ from "@/components/pricingChat/PricingFAQ";
import PricingSection from "@/components/pricingChat/PricingSection";

const Pricing = () => {
  return (
    <div className=" min-h-screen">
      <PricingSection/>
      <MetaCharges />
      <PlanComparison />
       <AddOns />
      <PricingFAQ />

    </div>
  );
};

export default  Pricing ;