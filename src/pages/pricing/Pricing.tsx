import PricingSection from "@/components/Home/pricing/PricingSection";
import MetaCharges from "@/components/pricingChat/MetaCharges"
import PlanComparison from "@/components/pricingChat/PlanComparison"
import AddOns from "@/components/pricingChat/AddOns";
import PricingFAQ from "@/components/pricingChat/PricingFAQ";





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