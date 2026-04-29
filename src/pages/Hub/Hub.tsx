import CTASection from "@/components/CTASection";
import Comparison from "@/components/Hub/Comparison";
import Hero from "@/components/Hub/Hero";
import Products from "@/components/Hub/Products";
import StatsBanner from "@/components/Hub/StatsBanner";
import Testimonials from "@/components/Hub/Testimonials";
import Workflow from "@/components/Hub/Workflow";


const Hub = () => {
  return (
    <div className="bg-[#f6f8f7]">
      <Hero />
      <StatsBanner />
      <Products />
      <Comparison />
      <Workflow />
      <Testimonials />
      <CTASection/>
    </div>
  );
};

export default Hub;