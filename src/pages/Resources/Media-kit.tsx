import  ColorPalette  from "@/components/Resources/Media-kit/ColorPalette";
import { CompanyFacts } from "@/components/Resources/Media-kit/CompanyFacts";
import { Guidelines } from "@/components/Resources/Media-kit/Guidelines";
import Hero from "@/components/Resources/Media-kit/Hero";
import  LogoSection  from "@/components/Resources/Media-kit/LogoSection";
import { PressContact } from "@/components/Resources/Media-kit/PressContact";
import  Screenshots  from "@/components/Resources/Media-kit/Screenshots";
import  Typography  from "@/components/Resources/Media-kit/Typography";

export default function MediaKitPage() {
  return (
    <>
  
      <Hero />
      <LogoSection />
      <ColorPalette />
      <Typography />
      <Screenshots />
      <CompanyFacts />
      <Guidelines />
      <PressContact />
      
    </>
  );
}