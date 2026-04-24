import CTASection from "@/components/CTASection";
import Hero from "@/components/Product/Chatbot/Hero";
import { StatsStrip } from "@/components/Product/Chatbot/StatsStrip";
import CoreFeatures from "@/components/Product/Chatbot/CoreFeature";
import UseCases from "@/components/Product/Chatbot/UseCases";
import CommonFAQ from "@/components/Product/Chatbot/CommonFAQ";



const Chatbot = () => {
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

export default  Chatbot;