import CTASection from "@/components/CTASection";
import Hero from "@/components/Home/Integration/Hero";
import { StatsStrip } from "@/components/Home/Integration/StatsStrip";
import IntegrationsGrid from "@/components/Home/Integration/IntegrationsGrid";
import HowItWorks from "@/components/Home/Integration/HowItWorks";
import ApiSection from "@/components/Home/Integration/ApiSection";

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