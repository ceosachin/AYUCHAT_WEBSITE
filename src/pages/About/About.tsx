
import Hero from "@/components/About/Hero";
import Mission from "@/components/About/Mission";
import Numbers from "@/components/About/Numbers";
import Stats from "@/components/About/Stats";
import Story from "@/components/About/Story";
import Testimonials from "@/components/About/Testimonials";
import Values from "@/components/About/Values";
import WhyAyuChat from "@/components/About/WhyAyuChat";
import CTASection from "@/components/CTASection";

const About = () => {
  return (
    <main className="bg-[#f6f8f7] text-gray-900">
      <Hero />
      <Stats />
      <Mission />
      <Story />
      <WhyAyuChat />
      <Numbers />
      <Values />
      <Testimonials />
      <CTASection/>
    </main>
  );
};

export default About;