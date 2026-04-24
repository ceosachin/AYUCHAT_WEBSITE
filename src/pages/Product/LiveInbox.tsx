import { StatsStrip } from "@/components/Product/LiveInbox/StatsStrip";
import UseCases from "@/components/Product/LiveInbox/UseCases";
import FAQ from "@/components/Product/LiveInbox/FAQ";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Product/LiveInbox/Hero";
import LiveFeatures from "@/components/Product/LiveInbox/LiveFeature";





const LiveInbox = () => {
  return (
    <div className=" min-h-screen">

      <Hero/>
        <StatsStrip/>
        <LiveFeatures/>
       <UseCases/>
       <FAQ/>
       <CTASection/>

    </div>
  );
};

export default  LiveInbox;