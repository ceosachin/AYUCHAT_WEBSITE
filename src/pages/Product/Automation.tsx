import CTASection from "@/components/CTASection";
import Hero from "@/components/Product/Automation/Hero";
import CoreFeatures from "@/components/Product/Automation/CoreFeature";
import UseCases from "@/components/Product/Automation/UseCase";
import CommonFAQ from "@/components/Product/Automation/CommonFAQ";
import { StatsStrip } from "@/components/Product/Automation/StatsStrip";





const Automation = () => {
  return (
    <div className=" min-h-screen">
        <Hero/>
        <StatsStrip/>
        <CoreFeatures/>
        <UseCases/>
        <CommonFAQ/>
        
        <CTASection/>
    </div>
  );
};

export default  Automation ;