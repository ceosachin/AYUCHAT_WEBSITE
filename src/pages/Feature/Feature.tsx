import CTASection from "@/components/CTASection";
import CoreFeatures from "@/components/Feature/CRM/CoreFeature";
import FAQ from "@/components/Feature/CRM/FAQ";
import Hero from "@/components/Feature/CRM/Hero";
import { StatsStrip } from "@/components/Feature/CRM/StatsStrip";
import UseCases from "@/components/Feature/CRM/Usecases";

const Feature = () => {
  return (
    <div className=" min-h-screen">
      <Hero/>
      <StatsStrip/>
      <CoreFeatures/>
      <UseCases/>
      <FAQ/>
      <CTASection/>

    </div>
  );
};

export default  Feature ;