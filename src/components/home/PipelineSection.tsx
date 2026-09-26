"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { animate, stagger } from "animejs";
import {
  Compass, Cpu, ShieldCheck, Rocket, ArrowRight,
  CheckCircle2, Zap,
} from "lucide-react";

interface PipelineNode {
  id: string; number: string; title: string; tagline: string;
  description: string; duration: string; liveOutput: string;
  deliverables: string[]; color: string; accentHex: string;
  icon: React.ReactNode;
}

const NODES: PipelineNode[] = [
  {
    id: "node-1", number: "01", title: "Discovery & System Architecture", tagline: "Planning & Architecture",
    description: "We map your business goals, choose the right technology stack, and design a solid AI and database structure before a single line of code is written.",
    duration: "Sprint 0 (1-2 Wks)", liveOutput: "System Blueprint",
    deliverables: ["Project Roadmap", "Cloud Infrastructure Plan", "Security Checklist", "Sprint Backlog"],
    color: "from-[#F4A049] to-[#7E4010]", accentHex: "#F4A049",
    icon: <Compass className="w-5 h-5 text-[#F4A049]" />,
  },
  {
    id: "node-2", number: "02", title: "Rapid Working Prototype", tagline: "Interactive Design & Testing",
    description: "We build a clickable, testable prototype within days so you can see real features, gather feedback, and validate your product before full development.",
    duration: "Weeks 2 - 4", liveOutput: "Working MVP",
    deliverables: ["Clickable Demo", "AI Accuracy Report", "Modern UI Design", "API Specifications"],
    color: "from-[#F4A049] to-[#DCDCDC]", accentHex: "#DCDCDC",
    icon: <Cpu className="w-5 h-5 text-[#DCDCDC]" />,
  },
  {
    id: "node-3", number: "03", title: "Enterprise Software Build", tagline: "Clean Code & Bank-Grade Security",
    description: "Full-scale custom software development using TypeScript, Python, and Go — with automated testing and enterprise-grade data security built in from the start.",
    duration: "Weeks 4 - 10", liveOutput: "Production Release",
    deliverables: ["Clean Codebase", "Automated Test Suite", "Security & Compliance Audit", "Multi-Region Cloud Deploy"],
    color: "from-[#7E4010] to-[#F4A049]", accentHex: "#F4A049",
    icon: <ShieldCheck className="w-5 h-5 text-[#F4A049]" />,
  },
  {
    id: "node-4", number: "04", title: "Zero-Downtime Launch & Support", tagline: "Safe Deployment & 24/7 Monitoring",
    description: "We launch your platform with zero downtime, set up automated backups, and provide round-the-clock performance monitoring so your business never stops.",
    duration: "Continuous / 24/7", liveOutput: "Live Platform",
    deliverables: ["Zero-Downtime Launch", "24/7 Performance Monitoring", "Automated Backups", "Global CDN Hosting"],
    color: "from-[#F4A049] to-[#7E4010]", accentHex: "#7E4010",
    icon: <Rocket className="w-5 h-5 text-[#F4A049]" />,
  },
];

export default function PipelineSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<number>(0);
  const [illuminatedNodes, setIlluminatedNodes] = useState<number[]>([0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate("#pipeline-wire-path", { strokeDashoffset: [1200, 0], duration: 2500, ease: "inOutQuad" });
            animate("#laser-bead", { cx: [50, 1150], duration: 2500, ease: "inOutQuad", loop: true });
            animate(".pipe-node-wrapper", {
              opacity: [0, 1], translateY: [40, 0],
              delay: stagger(300, { start: 300 }), duration: 800, ease: "outExpo",
            });
            animate(".live-badge-pop", {
              scale: [0.7, 1], opacity: [0, 1],
              delay: stagger(350, { start: 600 }), duration: 600, ease: "outBack",
            });
            const timers = [
              setTimeout(() => setIlluminatedNodes([0]), 400),
              setTimeout(() => setIlluminatedNodes([0, 1]), 1000),
              setTimeout(() => setIlluminatedNodes([0, 1, 2]), 1700),
              setTimeout(() => setIlluminatedNodes([0, 1, 2, 3]), 2400),
            ];
            return () => timers.forEach(clearTimeout);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleNodeClick = (index: number) => {
    setActiveNode(index);
    animate(`#node-box-${index}`, { scale: [0.97, 1.02, 1], duration: 400, ease: "outElastic(1, .8)" });
  };

  return (
    <section
      ref={sectionRef}
      id="pipeline"
      className="relative py-16 sm:py-24 lg:py-28 bg-[#181818] overflow-hidden border-t border-[#7E4010]/30"
      aria-label="Custom Software Development Process — 4 Steps from Idea to Launch"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      <meta itemProp="name" content="NexBridge 4-Step Custom Software Development Process" />
      <meta itemProp="description" content="NexBridge's proven 4-step software development process: Discovery, Prototype, Build, and Launch — delivering production-ready custom software and AI systems." />
      {/* Background */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[200px] sm:h-[280px] lg:h-[350px] bg-gradient-to-r from-[#F4A049]/15 via-[#7E4010]/15 to-[#DCDCDC]/10 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#333333] border border-[#F4A049]/40 text-[10px] sm:text-xs font-mono text-[#DCDCDC] mb-4 shadow-[0_0_15px_rgba(244,160,73,0.2)]">
            <Zap className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#F4A049]" />
            <span className="text-white font-semibold">PROVEN DEVELOPMENT PROCESS</span>
            <span className="text-[#F4A049]">•</span>
            <span className="text-[#DCDCDC]/75 hidden sm:inline">From Concept to Launch</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Our 4-Step{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] via-[#DCDCDC] to-[#7E4010]">
              Development Process
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#DCDCDC]/80 px-4 sm:px-0">
            A clear, predictable roadmap from initial planning to live release. Click any milestone to inspect real deliverables, timelines, and launch guarantees.
          </p>
        </div>

        {/* DESKTOP ANIMATED GRAPHIC NODE PIPELINE */}
        <div className="relative hidden lg:block mb-16">
          <div className="absolute top-[68px] left-0 right-0 h-16 pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 1200 80" fill="none">
              <defs>
                <linearGradient id="wire-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F4A049" />
                  <stop offset="35%" stopColor="#DCDCDC" />
                  <stop offset="70%" stopColor="#7E4010" />
                  <stop offset="100%" stopColor="#F4A049" />
                </linearGradient>
                <filter id="wire-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="glow" />
                  <feMerge><feMergeNode in="glow" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <path d="M 50 40 L 1150 40" stroke="#333333" strokeWidth="4" strokeLinecap="round" />
              <path id="pipeline-wire-path" d="M 50 40 L 1150 40" stroke="url(#wire-gradient)" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="1200" strokeDashoffset="1200" filter="url(#wire-glow)" />
              <circle id="laser-bead" cx="50" cy="40" r="6" fill="#FFFFFF" filter="url(#wire-glow)" />
            </svg>
          </div>
          <div className="grid grid-cols-4 gap-6 relative z-10">
            {NODES.map((node, index) => {
              const isIlluminated = illuminatedNodes.includes(index);
              const isSelected = activeNode === index;
              return (
                <div
                  key={node.id}
                  id={`node-box-${index}`}
                  onClick={() => handleNodeClick(index)}
                  className="pipe-node-wrapper cursor-pointer flex flex-col items-center transition-all duration-300 group"
                  itemScope
                  itemType="https://schema.org/HowToStep"
                  itemProp="step"
                >
                  <div className="relative mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? "bg-[#333333] border-2 border-[#F4A049] shadow-[0_0_30px_rgba(244,160,73,0.6)] scale-110"
                        : isIlluminated
                          ? "bg-[#282828] border border-[#7E4010]/50 group-hover:border-[#F4A049]/60 shadow-lg"
                          : "bg-[#181818] border border-[#333333] opacity-60"
                    }`}>
                      {node.icon}
                    </div>
                    <span className={`absolute -top-2 -right-2 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold transition-all ${
                      isSelected ? "bg-gradient-to-r " + node.color + " text-white shadow-md" : "bg-[#333333] text-[#DCDCDC]/60"
                    }`}>
                      {node.number}
                    </span>
                    {isIlluminated && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: node.accentHex }} />
                    )}
                  </div>
                  <div className={`live-badge-pop mb-4 px-3 py-1 rounded-full text-[11px] font-mono font-semibold flex items-center gap-1.5 transition-all duration-300 ${
                    isSelected ? "bg-[#F4A049] text-white shadow-[0_0_20px_rgba(244,160,73,0.5)] scale-105" : "bg-[#333333] border border-[#DCDCDC]/20 text-[#DCDCDC]"
                  }`}>
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: node.accentHex }} />
                    <span>{node.liveOutput}</span>
                  </div>
                  <div className={`w-full p-5 rounded-2xl transition-all duration-300 border ${
                    isSelected
                      ? "bg-gradient-to-b from-[#333333] to-[#242424] border-[#F4A049]/60 shadow-[0_15px_35px_rgba(0,0,0,0.7)]"
                      : "bg-[#242424]/70 border-[#DCDCDC]/15 hover:border-[#F4A049]/50 hover:bg-[#282828]"
                  }`}>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#F4A049] block mb-1" itemProp="position">{node.number} — {node.tagline}</span>
                    <h3 className="text-base font-bold text-white mb-2 leading-snug" itemProp="name">{node.title}</h3>
                    <p className="text-xs text-[#DCDCDC]/75 leading-relaxed line-clamp-3 mb-4" itemProp="text">{node.description}</p>
                    <div className="space-y-1 pt-3 border-t border-[#DCDCDC]/10">
                      {node.deliverables.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[11px] text-[#DCDCDC]/85">
                          <CheckCircle2 className="w-3 h-3 text-[#F4A049] shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-2 border-t border-[#333333] flex items-center justify-between text-[10px] font-mono text-[#DCDCDC]/60">
                      <span>Timeline:</span>
                      <span className="text-[#DCDCDC]">{node.duration}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE / TABLET RESPONSIVE VERTICAL CIRCUIT */}
        <div className="lg:hidden relative space-y-4 sm:space-y-6 mb-12 sm:mb-16 pl-5 sm:pl-6 border-l-2 border-[#7E4010]/40">
          {NODES.map((node, index) => {
            const isSelected = activeNode === index;
            return (
              <div
                key={node.id}
                onClick={() => handleNodeClick(index)}
                className={`relative p-4 sm:p-5 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isSelected ? "bg-[#333333] border-[#F4A049] shadow-lg shadow-[#F4A049]/20" : "bg-[#242424] border-[#DCDCDC]/15"
                }`}
                itemScope
                itemType="https://schema.org/HowToStep"
                itemProp="step"
              >
                <div
                  className="absolute -left-[28px] sm:-left-[31px] top-5 sm:top-6 w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full border-2 border-[#181818] flex items-center justify-center"
                  style={{ backgroundColor: node.accentHex }}
                >
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white" />
                </div>

                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-[#282828] border border-[#333333] shrink-0">
                      {node.icon}
                    </div>
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-[#DCDCDC]/75">
                      STAGE {node.number}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono bg-[#333333] text-[#DCDCDC] border border-[#DCDCDC]/20 shrink-0 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: node.accentHex }} />
                    {node.liveOutput}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white mb-1">{node.title}</h3>
                <p className="text-[11px] sm:text-xs text-[#DCDCDC]/75 mb-3 leading-relaxed">{node.description}</p>

                <div className="grid grid-cols-2 gap-1 sm:gap-1.5 pt-2 border-t border-[#333333] text-[10px] sm:text-[11px] text-[#DCDCDC]/85">
                  {node.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1">
                      <CheckCircle2 className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-[#F4A049] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-2 pt-2 border-t border-[#333333] flex items-center justify-between text-[10px] font-mono text-[#DCDCDC]/60">
                  <span>Timeline:</span>
                  <span className="text-[#DCDCDC]">{node.duration}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Deep Milestone Inspector Box */}
        <div className="p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#242424] via-[#333333] to-[#242424] border border-[#7E4010]/40 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl sm:rounded-2xl bg-[#282828] border border-[#7E4010]/30 flex items-center justify-center shrink-0">
              {NODES[activeNode].icon}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] sm:text-xs font-mono text-[#F4A049]">Active Stage Inspection</span>
                <span className="text-[#DCDCDC]/40">•</span>
                <span className="text-[10px] sm:text-xs font-mono text-[#DCDCDC]/75">{NODES[activeNode].duration}</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Stage {NODES[activeNode].number}: {NODES[activeNode].title}
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 shrink-0 w-full md:w-auto">
            <Link
              href="/process"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#F4A049] to-[#7E4010] text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(244,160,73,0.4)] hover:shadow-[0_0_30px_rgba(244,160,73,0.6)] hover:scale-105 transition-all duration-300"
            >
              <span>Explore Complete Process</span>
              <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
