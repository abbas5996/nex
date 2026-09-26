"use client";

import React from "react";
import { Sparkles, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";

export default function ConsultationBanner() {
  return (
    <section
      className="py-20 bg-[#1A1A1A] relative overflow-hidden"
      id="consultation-cta"
      itemScope
      itemType="https://schema.org/Service"
    >
      <meta itemProp="provider" content="NexBridge Tech Consulting" />
      <meta itemProp="areaServed" content="Worldwide" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-r from-[#2B2B2B] via-[#333333] to-[#2B2B2B] border border-[#7E4010]/40 shadow-[0_20px_50px_rgba(244,160,73,0.15)] overflow-hidden">
          {/* Neon Border Glow */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F4A049] via-[#DCDCDC] to-[#7E4010]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#7E4010]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#F4A049]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Content */}
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#242424] border border-[#F4A049]/40 text-xs font-mono text-[#F4A049] mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#F4A049]" />
                <span>Free Technical Discovery Call • 100% Confidential &amp; NDA Protected</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight" itemProp="name">
                Schedule Your Free{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] via-[#DCDCDC] to-[#7E4010]">
                  Technical Discovery Call
                </span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#DCDCDC]/90 leading-relaxed" itemProp="description">
                Talk directly with our senior engineers and AI architects. In 30 minutes, we will review your goals, recommend the right technology stack, and give you a clear, honest plan — with no sales pressure and no obligation.
              </p>

              {/* Perks Row */}
              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-[#DCDCDC]/75">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#F4A049]" />
                  <span>30-Min Technical Discovery</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F4A049]" />
                  <span>NDA Protected &amp; Confidential</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#DCDCDC]" />
                  <span>Actionable Engineering Advice</span>
                </span>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="flex flex-col items-center gap-4 shrink-0 w-full sm:w-auto">
              <GlowButton href="/book-consultation" variant="primary" size="lg" icon className="w-full sm:w-auto">
                Schedule Your Free Technical Discovery Call
              </GlowButton>
              <span className="text-[11px] font-mono text-[#DCDCDC]/60">
                Talk to a senior engineer — not a salesperson
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
