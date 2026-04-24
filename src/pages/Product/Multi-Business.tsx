import Hero from "@/components/Product/Multi-Business/Hero";
import { StatsStrip } from "@/components/Product/Multi-Business/StatsStrip";
import MultiFeatures from "@/components/Product/Multi-Business/MultiFeature";
import FAQ from "@/components/Product/Multi-Business/FAQ";
import CTASection from "@/components/CTASection";
import UseCases from "@/components/Product/Multi-Business/UseCases";




const MultiBusiness = () => {
  return (
    <div className=" min-h-screen">

      <Hero/>
        <StatsStrip/>
        
       <MultiFeatures/>
       <UseCases/>
       <FAQ/>
       <CTASection/>

    </div>
  );
};

export default  MultiBusiness;