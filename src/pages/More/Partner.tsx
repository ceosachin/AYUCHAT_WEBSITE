import Hero from "@/components/More/Partner/Hero";
import EarningsCalculator from "@/components/More/Partner/EarningsCalculator";
import CommissionTiers from "@/components/More/Partner/CommissionTiers";
import WhoShouldApply from "@/components/More/Partner/WhoShouldApply";
import HowItWorks from "@/components/More/Partner/HowItWorks";
import ApplicationForm from "@/components/More/Partner/ApplicationForm";
import FAQ from "@/components/More/Partner/FAQ";
import CTASection from "@/components/CTASection";

const PartnerProgram = () => {
  return (
    <div>
      <Hero />
      <EarningsCalculator />
      <CommissionTiers />
      <WhoShouldApply />
      <HowItWorks />
      <ApplicationForm />
      <FAQ />
      <CTASection />
    </div>
  );
};

export default PartnerProgram;