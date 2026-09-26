"use client";

import React from "react";
import Link from "next/link";
import { PROCESS_STEPS, ProcessStep } from "@/data/processData";
import { Compass, Cpu, ShieldCheck, Rocket, ArrowRight, Sparkles, Check } from "lucide-react";

function ProcessIcon({ name }: { name: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    Compass: <Compass className="w-5 h-5 text-[#F4A049]" />,
    Cpu: <Cpu className="w-5 h-5 text-[#F4A049]" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#DCDCDC]" />,
    Rocket: <Rocket className="w-5 h-5 text-[#7E4010]" />,
  };
  return iconMap[name] || <Sparkles className="w-5 h-5 text-[#F4A049]" />;
}

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-[#1A1A1A] relative overflow-hidden" id="process">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#F4A049]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#333333] border border-[#F4A049]/40 text-xs font-mono text-[#F4A049] mb-4">
            <Rocket className="w-3.5 h-3.5 text-[#F4A049]" />
            <span>AGILE ARCHITECTURAL LIFECYCLE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Our 4-Stage{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] via-[#DCDCDC] to-[#7E4010]">
              Engineering Protocol
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#DCDCDC]/80">
            From technical discovery to zero-downtime multi-cloud deployment, here is how we guarantee velocity and bulletproof reliability.
          </p>
        </div>

        {/* 4-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step: ProcessStep) => (
            <div
              key={step.number}
              className="relative p-6 rounded-2xl bg-gradient-to-b from-[#333333]/80 to-[#222222]/90 border border-[#DCDCDC]/15 hover:border-[#F4A049]/60 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(244,160,73,0.25)] flex flex-col justify-between group"
            >
              {/* Step Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] to-[#7E4010]">
                    {step.number}
                  </span>
                  <div className="p-2 rounded-xl bg-[#282828] border border-[#7E4010]/30 group-hover:scale-110 transition-transform">
                    <ProcessIcon name={step.iconName} />
                  </div>
                </div>

                <span className="inline-block text-[11px] font-mono text-[#F4A049] font-semibold mb-1">
                  {step.tagline}
                </span>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#F4A049] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-[#DCDCDC]/75 leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-1.5 mb-6 pt-3 border-t border-[#DCDCDC]/10">
                  <span className="text-[10px] font-mono uppercase text-[#DCDCDC]/60 font-bold block mb-1">
                    Key Outputs:
                  </span>
                  {step.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-[#DCDCDC]/90">
                      <Check className="w-3 h-3 text-[#F4A049] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Duration Badge */}
              <div className="pt-3 border-t border-[#333333] flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#DCDCDC]/60">Timeline:</span>
                <span className="text-[#DCDCDC] bg-[#242424] px-2 py-0.5 rounded border border-[#DCDCDC]/20">
                  {step.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Full Process Page */}
        <div className="mt-12 text-center">
          <Link
            href="/process"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#333333] border border-[#DCDCDC]/25 hover:border-[#F4A049] text-sm font-semibold text-white hover:text-[#F4A049] shadow-lg transition-all group"
          >
            <span>Explore Detailed 4-Stage Process Architecture</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
