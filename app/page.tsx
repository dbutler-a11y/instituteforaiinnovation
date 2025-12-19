import { MarketingHeader } from "@/components/marketing/layout/MarketingHeader";
import { MarketingFooter } from "@/components/marketing/layout/MarketingFooter";
import { HeroSection } from "@/components/marketing/sections/HeroSection";
import { ProgramOverviewSection } from "@/components/marketing/sections/ProgramOverviewSection";
import { CurriculumSection } from "@/components/marketing/sections/CurriculumSection";
import { AIToolsSection } from "@/components/marketing/sections/AIToolsSection";
import { BrandVoiceSection } from "@/components/marketing/sections/BrandVoiceSection";
import { InvestmentSection } from "@/components/marketing/sections/InvestmentSection";
import LocationsSection from "@/components/marketing/sections/LocationsSection";
import FAQSection from "@/components/marketing/sections/FAQSection";
import PartnersSection from "@/components/marketing/sections/PartnersSection";
import FinalCTASection from "@/components/marketing/sections/FinalCTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <MarketingHeader />

      <main>
        {/* Hero - "Launch Your AI Career in 24 Hours" */}
        <HeroSection />

        {/* Program Overview - What you'll gain, who it's for */}
        <ProgramOverviewSection />

        {/* Curriculum - 7-module accordion */}
        <CurriculumSection />

        {/* AI Tools Suite - 25+ tools grid */}
        <AIToolsSection />

        {/* BrandVoice Partnership - Guaranteed interview pathway */}
        <BrandVoiceSection />

        {/* Investment & Costs - $8,000 breakdown */}
        <InvestmentSection />

        {/* Locations & Delivery - Online + Houston */}
        <LocationsSection />

        {/* FAQ - 10 questions accordion */}
        <FAQSection />

        {/* Partners/Investors - B2B messaging */}
        <PartnersSection />

        {/* Final CTA - Enrollment form section */}
        <FinalCTASection />
      </main>

      <MarketingFooter />
    </div>
  );
}
