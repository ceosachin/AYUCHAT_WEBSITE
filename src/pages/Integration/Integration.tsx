import CTASection from "@/components/CTASection";
import Hero from "@/components/Integration/Hero";
import { StatsStrip } from "@/components/Integration/StatsStrip";
import IntegrationsGrid from "@/components/Integration/IntegrationsGrid";
import HowItWorks from "@/components/Integration/HowItWorks";
import ApiSection from "@/components/Integration/ApiSection";

const Integration = () => {
  return (
    <div className=" min-h-screen">
       <Hero/>
       <StatsStrip/>
       <IntegrationsGrid/>
       <HowItWorks/>
       <ApiSection/>
      <CTASection/> 

    </div>
  );
};

export default  Integration ;