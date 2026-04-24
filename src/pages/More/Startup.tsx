import Hero from "@/components/More/Startup/Hero";
import { StatsStrip } from "@/components/More/Startup/StatsStrip";
import FeaturesSection from "@/components/More/Startup/FeaturesSection";
import Eligibility from "@/components/More/Startup/Eligibility";
import { ApplySteps } from "@/components/More/Startup/ApplySteps";
import HowItWorks from "@/components/More/Startup/HowItWorks";
import StartupStories from "@/components/More/Startup/StartupStories";
import FAQSection from "@/components/More/Startup/FAQSection";
import CTASection from "@/components/More/Startup/CTASection";

const StartupProgram = () => {
  return (
    <div className=" min-h-screen">
        <Hero/>
        <StatsStrip/>
        <FeaturesSection/>
        <HowItWorks/>
        <Eligibility/>
        <StartupStories/>
        <FAQSection/>
        <CTASection/>
        <ApplySteps/>

    </div>
  );
};

export default  StartupProgram ;