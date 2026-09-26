import React from "react";
import HeroSection from "@/components/home/HeroSection";
import HandTouchAnimation from "@/components/home/HandTouchAnimation";
import StorySection from "@/components/home/StorySection";
import PipelineSection from "@/components/home/PipelineSection";
import TechStackGrid from "@/components/home/TechStackGrid";
import FAQSection from "@/components/home/FAQSection";
import ConsultationBanner from "@/components/home/ConsultationBanner";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#1A1A1A]">
      <HeroSection />
      <HandTouchAnimation />
      <StorySection />
      <PipelineSection />
      <TechStackGrid />
      <FAQSection />
      <ConsultationBanner />
    </div>
  );
}
