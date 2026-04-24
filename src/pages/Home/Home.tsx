import ComparisonTable from "@/components/Home/comparison/ComparisonTable";
import Stats from "@/components/Home/count/Stats";
import CTASection from "@/components/CTASection";
import DashboardPreview from "@/components/Home/dashboardPreview/DashboardPreview";
import LogoStrip from "@/components/Home/dashboardPreview/LogoStrip";
import FAQSection from "@/components/Home/FAQSection";
import FeaturesSection from "@/components/Home/features/FeaturesSection";
import Hero from "@/components/Home/hero/Hero";
import IndustriesSection from "@/components/Home/industries/IndustriesSection";
import IntegrationsSection from "@/components/Home/integrations/IntegrationsSection";
import PricingSection from "@/components/Home/pricing/PricingSection";
import TestimonialsSection from "@/components/Home/testimonials/TestimonialsSection";
import WhyWhatsapp from "@/components/Home/whatsapp/WhyWhatsapp";
import HowItWorks from "@/components/Home/works/HowItWorks";

const Home = () => {
  return (
    <>
      <Hero />

<div className="relative">
  <DashboardPreview />

  {/* Pull up LogoStrip (NO absolute) */}
  <div className="-mt-16 relative z-10">
    <LogoStrip />
  </div>
</div>

{/* Add spacing so Stats is safe */}
<div className="pt-10">
  <Stats />
</div>

<WhyWhatsapp/>
 <FeaturesSection/>
 <HowItWorks/>
 <IndustriesSection/>
 <ComparisonTable/>
 <PricingSection/>
 <TestimonialsSection/>
 <IntegrationsSection/>
 <FAQSection/>
 <CTASection/>
    </>
  );
};

export default Home;