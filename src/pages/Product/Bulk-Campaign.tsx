import Hero from "@/components/Product/Bulk-Campaign/Hero";
import { StatsStrip } from "@/components/Product/Bulk-Campaign/StatsStrip";
import CampaignFeatures from "@/components/Product/Bulk-Campaign/CampaignFeatures";
import CampaignSteps from "@/components/Product/Bulk-Campaign/CampaignSteps";
import ROICalculator from "@/components/Product/Bulk-Campaign/ROICalculator";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/Product/Bulk-Campaign/FAQSection";


const BulkCampaign = () => {
  return (
    <div className=" min-h-screen">
        <Hero/>
        <StatsStrip/>
        <CampaignFeatures/>
        <CampaignSteps/>
        <ROICalculator/>
        <FAQSection/>
        <CTASection/>
    </div>
  );
};

export default BulkCampaign;