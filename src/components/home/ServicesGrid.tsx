"use client";

import React from "react";
import Link from "next/link";
import { SERVICES_DATA, ServiceItem } from "@/data/servicesData";
import {
  BrainCircuit,
  Boxes,
  CloudCog,
  Layers,
  Smartphone,
  DatabaseZap,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";

function ServiceIcon({ name }: { name: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    BrainCircuit: <BrainCircuit className="w-6 h-6 text-[#F4A049]" />,
    Boxes: <Boxes className="w-6 h-6 text-[#F4A049]" />,
    CloudCog: <CloudCog className="w-6 h-6 text-[#DCDCDC]" />,
    Layers: <Layers className="w-6 h-6 text-[#7E4010]" />,
    Smartphone: <Smartphone className="w-6 h-6 text-[#F4A049]" />,
    DatabaseZap: <DatabaseZap className="w-6 h-6 text-[#DCDCDC]" />,
  };
  return iconMap[name] || <BrainCircuit className="w-6 h-6 text-[#F4A049]" />;
}

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-[#181818] relative overflow-hidden border-t border-[#7E4010]/30" id="services">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#F4A049]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#7E4010]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#333333] border border-[#F4A049]/40 text-xs font-mono text-[#F4A049] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#F4A049]" />
              <span>CORE ARCHITECTURAL DISCIPLINES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-2xl">
              Engineered for Scale,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] via-[#DCDCDC] to-[#7E4010]">
                Power &amp; AI Dominance
              </span>
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold font-mono text-[#F4A049] hover:text-[#DCDCDC] transition-colors group"
          >
            <span>VIEW COMPLETE SERVICES DIRECTORY</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 6 Core Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="group relative rounded-3xl p-8 bg-gradient-to-b from-[#333333]/90 to-[#222222]/95 border border-[#DCDCDC]/15 hover:border-[#F4A049]/60 transition-all duration-300 hover:shadow-[0_15px_40px_-10px_rgba(244,160,73,0.25)] hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-[#282828] border border-[#7E4010]/40 group-hover:scale-110 group-hover:border-[#F4A049]/60 transition-all duration-300 shadow-md">
                    <ServiceIcon name={service.iconName} />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#F4A049]/10 text-[#F4A049] border border-[#F4A049]/30">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#F4A049] transition-colors mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-[#DCDCDC]/80 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-8">
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#DCDCDC]/85">
                      <CheckCircle className="w-3.5 h-3.5 text-[#F4A049] shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="pt-4 border-t border-[#DCDCDC]/10">
                <Link
                  href={service.slug}
                  className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-[#F4A049] transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 text-[#F4A049] group-hover:text-white transition-all group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
