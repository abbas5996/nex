"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { animate, stagger } from "animejs";
import {
  BrainCircuit,
  Cpu,
  ShieldCheck,
  Zap,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Activity,
  CheckCircle2,
  Server,
  Network,
  Workflow,
  Boxes,
  Lock,
  FileCheck2,
  Scale,
  Database,
  Check,
  X
} from "lucide-react";

interface BentoItem {
  id: string;
  pillar: string;
  headline: string;
  tagline: string;
  keyword: string;
  description: string;
  techTags: string[];
  metrics: { label: string; val: string };
  gridClass: string;
  icon: React.ElementType;
}

const BENTO_PILLARS: BentoItem[] = [
  {
    id: "autonomous-ai",
    pillar: "Custom AI & Automation",
    headline: "Custom AI & Automated Workflows",
    tagline: "Smart AI Search & Reliable Business Automation",
    keyword: "AI Development Agency",
    description:
      "Automate repetitive tasks and empower your team. We develop custom AI assistants, automated customer workflows, and accurate document search tools that run with bank-grade reliability and zero hallucinated errors.",
    techTags: ["Accurate AI Search", "Workflow Automation", "pgvector", "Smart Assistants", "Guardrails"],
    metrics: { label: "Response Speed", val: "<120ms" },
    gridClass: "lg:col-span-8 lg:row-span-2",
    icon: BrainCircuit,
  },
  {
    id: "sub-ms-concurrency",
    pillar: "High-Speed Web Engineering",
    headline: "High-Speed Web & SaaS Engineering",
    tagline: "Fast, Scalable Platforms Built for Millions of Users",
    keyword: "Web Development Agency",
    description:
      "Engineered for maximum speed and uptime. Our modern backend systems deliver page loads under 250 milliseconds and handle heavy traffic spikes without breaking a sweat.",
    techTags: ["Modern Next.js", "Fast APIs", "Real-Time Streaming", "Global CDN"],
    metrics: { label: "Peak Capacity", val: "10M+ Req/s" },
    gridClass: "lg:col-span-4 lg:row-span-1",
    icon: Zap,
  },
  {
    id: "zero-trust-security",
    pillar: "Bank-Grade Security",
    headline: "Bank-Grade Security & Data Protection",
    tagline: "SOC-2 Compliant Security & Full Privacy Protection",
    keyword: "Enterprise Security & Compliance",
    description:
      "Enterprise-grade protection built into every feature. We safeguard your customer data with end-to-end encryption, automated backups, and compliance with global privacy regulations.",
    techTags: ["End-to-End Encryption", "Access Controls", "Encrypted Vaults", "SOC-2 & GDPR"],
    metrics: { label: "Threat Mitigation", val: "100% Real-Time" },
    gridClass: "lg:col-span-4 lg:row-span-1",
    icon: ShieldCheck,
  },
  {
    id: "turnkey-saas",
    pillar: "Enterprise SaaS Development",
    headline: "Enterprise SaaS Development",
    tagline: "Complete Cloud Software from MVP to Enterprise Scale",
    keyword: "Custom Software Development Company",
    description:
      "From initial launch to millions in revenue. We build secure multi-tenant architectures, automated customer billing, and scalable cloud databases designed for sustained business growth.",
    techTags: ["Multi-Tenant DB", "Automated Billing", "Global Sync", "Scalable Cloud"],
    metrics: { label: "Uptime Commitment", val: "99.99%" },
    gridClass: "lg:col-span-12 lg:row-span-1",
    icon: Boxes,
  },
];

const STRATEGIC_VALUES = [
  {
    id: "val-precision",
    number: "01",
    title: "Clean, Future-Proof Code",
    subtitle: "High Engineering Standards",
    desc: "We don't cut corners. Every line of code is carefully architected, thoroughly tested under heavy traffic loads, and built to scale effortlessly without bugs.",
    icon: Cpu,
    accent: "#F4A049",
    meta: "Custom Software Development Company",
  },
  {
    id: "val-zerodebt",
    number: "02",
    title: "Zero Technical Debt Policy",
    subtitle: "Sustainable, Long-Term Foundations",
    desc: "We build software designed to last. Clean modular code guarantees low ongoing maintenance costs and easy feature additions as your business grows.",
    icon: Server,
    accent: "#7E4010",
    meta: "Cloud Migration Services",
  },
  {
    id: "val-velocity",
    number: "03",
    title: "On-Time Delivery & 99.99% Uptime",
    subtitle: "Predictable Project Timelines",
    desc: "Automated testing and continuous delivery pipelines ensure your project launches on schedule with strict uptime guarantees and zero surprises.",
    icon: Activity,
    accent: "#F4A049",
    meta: "Enterprise SaaS Development",
  },
  {
    id: "val-ethics",
    number: "04",
    title: "Safe, Human-Guided AI Systems",
    subtitle: "Transparent & Controllable Intelligence",
    desc: "Enterprise AI must be transparent and controllable. We include human oversight gates, accuracy verification, and complete audit trails for every automated action.",
    icon: Network,
    accent: "#DCDCDC",
    meta: "AI Development Agency",
  },
];

const SOVEREIGN_MATRIX = [
  {
    dimension: "Data Sovereignty & Privacy",
    nexbridge: "100% Private Cloud or On-Premise. Your proprietary data is never shared with third parties or used to train external public models.",
    proprietary: "Customer data passes through shared third-party APIs with privacy and leak risks.",
  },
  {
    dimension: "Customization & Full Ownership",
    nexbridge: "You own 100% of your source code, AI models, and intellectual property with zero ongoing vendor licensing.",
    proprietary: "Locked into rigid subscription platforms with arbitrary feature restrictions.",
  },
  {
    dimension: "Predictable Cloud Costs",
    nexbridge: "Transparent, predictable hosting costs optimized for efficiency. No hidden fees or sudden surge pricing.",
    proprietary: "Unpredictable per-user and per-token pricing that skyrockets as your user base grows.",
  },
  {
    dimension: "Freedom from Vendor Lock-In",
    nexbridge: "Zero lock-in. Portable, standard containerized code that can be moved to any cloud provider at any time.",
    proprietary: "Severe lock-in making future migrations painfully expensive.",
  }
];

const AI_ETHICS_GUARDRAILS = [
  {
    icon: <Scale className="w-5 h-5 text-[#F4A049]" />,
    title: "Enterprise Compliance & Privacy",
    badge: "Regulatory Adherence",
    desc: "Full compliance with global data protection laws (GDPR, HIPAA, and EU AI Act) with clear documentation and auditability."
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-[#F4A049]" />,
    title: "Accurate AI Search (Anti-Hallucination)",
    badge: "Accuracy Enforcement",
    desc: "Multi-stage verification ensures AI assistants only answer from your verified business documents, preventing false or misleading answers."
  },
  {
    icon: <Workflow className="w-5 h-5 text-[#F4A049]" />,
    title: "Predictable Business Logic",
    badge: "Consistent Logic",
    desc: "Strict data validation ensures automated workflows always produce clean, reliable data that seamlessly integrates with your existing software."
  },
  {
    icon: <FileCheck2 className="w-5 h-5 text-[#F4A049]" />,
    title: "Complete Activity Logging",
    badge: "Full Transparency",
    desc: "Every automated action and user interaction is recorded securely, giving your management team full visibility and compliance confidence."
  }
];

export default function StoryVisionPart2() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeBento, setActiveBento] = useState<string>("autonomous-ai");

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      animate(".bento-card-anim", {
        opacity: [0, 1],
        translateY: [24, 0],
        delay: stagger(100, { start: 150 }),
        duration: 800,
        ease: "outExpo",
      });

      animate(".value-card-anim", {
        opacity: [0, 1],
        translateY: [20, 0],
        delay: stagger(80, { start: 400 }),
        duration: 750,
        ease: "outExpo",
      });
    } catch {}
  }, []);

  const handleCardMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    try {
      animate(e.currentTarget, {
        scale: 1.015,
        duration: 250,
        ease: "outQuad",
      });
    } catch {}
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    try {
      animate(e.currentTarget, {
        scale: 1,
        duration: 250,
        ease: "outQuad",
      });
    } catch {}
  };

  return (
    <section
      ref={sectionRef}
      id="vision-and-pillars"
      aria-labelledby="vision-matrix-heading"
      className="relative bg-[#333333] text-[#DCDCDC] py-24 sm:py-32 overflow-hidden border-t border-[#DCDCDC]/10"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <meta itemProp="slogan" content="Senior Human Architecture Amplified by Autonomous AI Engineering" />
      {/* Background Gradients & Noise Mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-[#F4A049] blur-[140px]" />
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 rounded-full bg-[#7E4010] blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#DCDCDC_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section 1: Future Vision Bento Matrix Header */}
        <header className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#333333]/80 border border-[#F4A049]/40 text-xs font-mono text-[#F4A049] uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(244,160,73,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-[#F4A049]" />
            <span>Strategic Architecture Matrix</span>
          </div>

          <h2
            id="vision-matrix-heading"
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]"
          >
            Custom AI &amp; Software Solutions{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] via-[#DCDCDC] to-[#7E4010]">
              Built for Scale
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#DCDCDC]/80 leading-relaxed">
            NexBridge builds high-performance business applications by combining custom software development, enterprise AI automation, and bank-grade data security—delivering measurable business outcomes from day one.
          </p>
        </header>

        {/* SECTION 1: KINETIC BENTO MATRIX */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-28">
          {BENTO_PILLARS.map((item) => {
            const Icon = item.icon;
            const isSelected = activeBento === item.id;

            return (
              <article
                key={item.id}
                onMouseEnter={(e) => {
                  setActiveBento(item.id);
                  handleCardMouseEnter(e);
                }}
                onMouseLeave={handleCardMouseLeave}
                className={`bento-card-anim group relative rounded-3xl p-7 sm:p-9 bg-gradient-to-b from-[#333333]/90 to-[#262626]/95 border backdrop-blur-xl transition-all duration-300 flex flex-col justify-between ${item.gridClass} ${
                  isSelected
                    ? "border-[#F4A049] shadow-[0_0_30px_rgba(244,160,73,0.2)]"
                    : "border-[#DCDCDC]/15 hover:border-[#F4A049]/60 hover:shadow-[0_0_20px_rgba(126,64,16,0.3)]"
                }`}
              >
                {/* Glow accent in top corner */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-[#F4A049]/10 via-[#7E4010]/5 to-transparent rounded-tr-3xl pointer-events-none" />

                {/* Top Row: Category Pill & Icon */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono tracking-wide uppercase px-3 py-1 rounded-full bg-[#F4A049]/10 text-[#F4A049] border border-[#F4A049]/30">
                      {item.pillar}
                    </span>
                    <span className="text-[11px] font-mono text-[#DCDCDC]/50 hidden sm:inline-block">
                      [{item.keyword}]
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#333333] border border-[#DCDCDC]/20 text-[#F4A049] group-hover:border-[#F4A049] group-hover:scale-110 transition-all duration-300 shadow-sm shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Center Content: Headings & Narrative */}
                <div className="space-y-3 mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2">
                    {item.headline}
                    <ArrowUpRight className="w-5 h-5 text-[#F4A049] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-[#F4A049] uppercase tracking-wider">
                    {item.tagline}
                  </p>
                  <p className="text-sm sm:text-base text-[#DCDCDC]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Interactive Dynamic Graphic Area for Bento */}
                {item.id === "autonomous-ai" && (
                  <div className="my-4 p-4 rounded-2xl bg-[#1f1f1f]/80 border border-[#DCDCDC]/10 order-2 lg:order-none">
                    <div className="flex items-center justify-between text-xs font-mono text-[#DCDCDC]/60 mb-2">
                      <span className="flex items-center gap-1.5 text-[#F4A049]">
                        <span className="w-2 h-2 rounded-full bg-[#F4A049] animate-ping" />
                        Live AI Task Automation Stream
                      </span>
                      <span>System Status: Active</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono pt-2 border-t border-[#DCDCDC]/10">
                      <div className="p-2 rounded bg-[#333333]/60 border border-[#DCDCDC]/10">
                        <span className="text-[#DCDCDC]/60 block text-[10px]">AI Search Accuracy</span>
                        <span className="text-white font-bold">99.4% Match</span>
                      </div>
                      <div className="p-2 rounded bg-[#333333]/60 border border-[#DCDCDC]/10">
                        <span className="text-[#DCDCDC]/60 block text-[10px]">Task Verification</span>
                        <span className="text-[#F4A049] font-bold">100% Passed</span>
                      </div>
                      <div className="p-2 rounded bg-[#333333]/60 border border-[#DCDCDC]/10">
                        <span className="text-[#DCDCDC]/60 block text-[10px]">Automated Tests</span>
                        <span className="text-white font-bold">0 Errors</span>
                      </div>
                    </div>
                  </div>
                )}

                {item.id === "turnkey-saas" && (
                  <div className="my-3 grid grid-cols-2 sm:grid-cols-4 gap-3 order-2 lg:order-none">
                    {[
                      { label: "Tenant Isolation", val: "Logical & Cryptographic" },
                      { label: "Global Edge Clusters", val: "35+ Points of Presence" },
                      { label: "Database Sharding", val: "Autonomous Auto-Partition" },
                      { label: "SLA Guarantee", val: "99.99% Contractual Uptime" },
                    ].map((stat, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[#262626]/80 border border-[#DCDCDC]/10"
                      >
                        <span className="text-[10px] font-mono text-[#DCDCDC]/60 uppercase block mb-1">
                          {stat.label}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-white">
                          {stat.val}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bottom Row: Tags & Metric Badge */}
                <div className="pt-5 border-t border-[#DCDCDC]/10 flex flex-wrap items-center justify-between gap-4 mt-auto">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {item.techTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-[#333333] text-[#DCDCDC]/80 border border-[#DCDCDC]/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 bg-[#7E4010]/25 border border-[#F4A049]/40 px-3.5 py-1.5 rounded-xl">
                    <span className="text-[11px] font-mono text-[#DCDCDC]/70">
                      {item.metrics.label}:
                    </span>
                    <span className="text-xs font-mono font-bold text-[#F4A049]">
                      {item.metrics.val}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ── SECTION: SOVEREIGN AI VS VENDOR LOCK-IN MATRIX ── */}
        <section aria-labelledby="sovereignty-heading" className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#282828] border border-[#F4A049]/40 text-xs font-mono text-[#F4A049] uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(244,160,73,0.15)]">
              <Lock className="w-3.5 h-3.5" />
              <span>Enterprise Strategic Moat</span>
            </div>
            <h2 id="sovereignty-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Sovereign AI Infrastructure vs{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] to-[#7E4010]">
                Proprietary Vendor Lock-In
              </span>
            </h2>
            <p className="mt-4 text-base text-[#DCDCDC]/80">
              Why leading enterprises partner with NexBridge to own their weights, data, and compute pipelines.
            </p>
          </div>

          <div className="rounded-3xl border border-[#DCDCDC]/15 bg-[#282828] overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#DCDCDC]/15 bg-[#222222] p-4 sm:p-6 text-xs font-mono uppercase tracking-wider">
              <div className="md:col-span-4 text-[#DCDCDC]/60">Strategic Architectural Vector</div>
              <div className="md:col-span-4 text-[#F4A049] font-bold flex items-center gap-1.5 mt-2 md:mt-0">
                <Check className="w-4 h-4 text-[#F4A049]" />
                <span>NexBridge Sovereign AI</span>
              </div>
              <div className="md:col-span-4 text-[#DCDCDC]/40 flex items-center gap-1.5 mt-2 md:mt-0">
                <X className="w-4 h-4 text-red-400" />
                <span>Proprietary Cloud SaaS</span>
              </div>
            </div>

            <div className="divide-y divide-[#DCDCDC]/10 text-xs sm:text-sm">
              {SOVEREIGN_MATRIX.map((row, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 gap-4 items-center hover:bg-[#333333]/50 transition-colors">
                  <div className="md:col-span-4 font-bold text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F4A049]" />
                    <span>{row.dimension}</span>
                  </div>
                  <div className="md:col-span-4 text-[#DCDCDC] leading-relaxed pr-2">
                    {row.nexbridge}
                  </div>
                  <div className="md:col-span-4 text-[#DCDCDC]/60 leading-relaxed">
                    {row.proprietary}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION: AI ETHICS & GOVERNANCE GUARDRAILS GRID ── */}
        <section id="ethics" aria-labelledby="ethics-heading" className="mb-28" itemProp="ethicsPolicy">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#282828] border border-[#F4A049]/40 text-xs font-mono text-[#F4A049] uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(244,160,73,0.15)]">
              <Scale className="w-3.5 h-3.5" />
              <span>EU AI Act & Institutional Trust</span>
            </div>
            <h2 id="ethics-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              AI Ethics &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] to-[#7E4010]">
                Data Protection
              </span>
            </h2>
            <p className="mt-4 text-base text-[#DCDCDC]/80">
              Bank-grade data privacy, accurate AI responses, and full regulatory compliance built into every solution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AI_ETHICS_GUARDRAILS.map((guard, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#282828] border border-[#DCDCDC]/15 hover:border-[#F4A049]/60 hover:shadow-[0_10px_30px_rgba(244,160,73,0.15)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-[#333333] border border-[#F4A049]/30">
                      {guard.icon}
                    </div>
                    <span className="text-[10px] font-mono text-[#F4A049] uppercase px-2.5 py-0.5 rounded-full bg-[#F4A049]/10 border border-[#F4A049]/30">
                      {guard.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{guard.title}</h3>
                  <p className="text-xs sm:text-sm text-[#DCDCDC]/75 leading-relaxed">{guard.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#DCDCDC]/10 flex items-center text-[10px] font-mono text-[#DCDCDC]/50">
                  <span>Verified Standard</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F4A049] ml-auto" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: CORE STRATEGIC PILLARS / COMPANY VALUES */}
        <section aria-labelledby="core-values-heading" className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#333333] border border-[#DCDCDC]/20 text-xs font-mono text-[#DCDCDC] uppercase tracking-wider mb-4">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#F4A049]" />
              <span>Execution Philosophy</span>
            </div>
            <h2
              id="core-values-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
            >
              Four Pillars of Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] to-[#7E4010]">
                Engineering Philosophy
              </span>
            </h2>
            <p className="mt-4 text-base text-[#DCDCDC]/80">
              The foundational tenets that dictate how our teams architect, build, and deploy
              mission-critical systems for global industry leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STRATEGIC_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.id}
                  onMouseEnter={handleCardMouseEnter}
                  onMouseLeave={handleCardMouseLeave}
                  className="value-card-anim group relative p-7 rounded-3xl bg-gradient-to-b from-[#333333] to-[#262626] border border-[#DCDCDC]/15 hover:border-[#F4A049] transition-all duration-300 flex flex-col justify-between hover:shadow-[0_12px_30px_rgba(244,160,73,0.15)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] to-[#7E4010]">
                        {val.number}
                      </span>
                      <div className="p-2.5 rounded-xl bg-[#333333] border border-[#DCDCDC]/20 text-[#F4A049] group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <span className="text-[10px] font-mono text-[#F4A049] uppercase tracking-widest block mb-1">
                      {val.meta}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#F4A049] transition-colors">
                      {val.title}
                    </h3>
                    <h4 className="text-xs font-mono text-[#DCDCDC]/60 mb-4">{val.subtitle}</h4>
                    <p className="text-xs sm:text-sm text-[#DCDCDC]/80 leading-relaxed mb-6">
                      {val.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#DCDCDC]/10 flex items-center text-[11px] font-mono text-[#DCDCDC]/60 group-hover:text-[#F4A049] transition-colors">
                    <span>Verified Compliance</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-auto group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 3: CALL TO ACTION (CTA) BANNER */}
        <section
          aria-labelledby="cta-heading"
          className="relative rounded-3xl p-8 sm:p-14 lg:p-16 bg-gradient-to-r from-[#262626] via-[#333333] to-[#262626] border border-[#F4A049]/40 shadow-[0_0_50px_rgba(244,160,73,0.12)] overflow-hidden"
        >
          {/* Subtle Ambient Radial Light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-b from-[#F4A049]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-t from-[#7E4010]/30 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center lg:text-left order-1">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F4A049]/10 text-[#F4A049] border border-[#F4A049]/30 text-xs font-mono mb-4">
                <Workflow className="w-3.5 h-3.5" />
                <span>Zero-Obligation Architecture Review</span>
              </span>

              <h2
                id="cta-heading"
                className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]"
              >
                Ready to Build Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] via-[#F4A049] to-[#DCDCDC]">
                  Next Software or AI Product?
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-[#DCDCDC]/80 leading-relaxed">
                Connect directly with our senior software engineers and AI consultants to evaluate your project goals, plan your technical architecture, and get a clear roadmap for fast, reliable delivery.
              </p>
            </div>

            {/* CTA Dual Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-4 w-full sm:w-auto shrink-0 order-2">
              <Link
                href="/book-consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-xs sm:text-sm tracking-wide text-white uppercase bg-gradient-to-r from-[#F4A049] to-[#7E4010] hover:brightness-110 shadow-[0_4px_20px_rgba(244,160,73,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>SCHEDULE STRATEGY CONSULTATION →</span>
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-xs sm:text-sm tracking-wide text-[#DCDCDC] uppercase border border-[#DCDCDC]/30 hover:border-[#F4A049] hover:text-[#F4A049] bg-[#333333]/60 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>EXPLORE OUR TECH MATRIX</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
