"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";
import { animate } from "animejs";
import {
  Compass, Cpu, Code2, ShieldCheck, Rocket, BrainCircuit,
  CheckCircle2, Sparkles, Zap, Layers, Activity,
  Lock, Terminal, SlidersHorizontal, Check, RefreshCw, ChevronRight,
  ShieldAlert, HardDrive, FileCheck2, Server
} from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";

interface PipelineStage {
  number: string;
  id: string;
  shortLabel: string;
  icon: React.ReactNode;
  title: string;
  tagline: string;
  desc: string;
  deliverables: string[];
  duration: string;
  liveOutput: string;
  status: "Automated" | "Active Gate" | "Continuous";
  metric: string;
  terminalLogs: string[];
}

const PIPELINE_STAGES: PipelineStage[] = [
  {
    number: "01",
    id: "discovery",
    shortLabel: "01 Planning",
    icon: <Compass className="w-6 h-6 text-[#F4A049]" />,
    title: "Discovery & Solution Blueprinting",
    tagline: "Clear Roadmaps & Technical Architecture",
    desc: "We analyze your business goals, choose the right technology stack, evaluate AI models, and design an exact software blueprint before building anything.",
    deliverables: [
      "Custom Software Architecture Plan",
      "AI Accuracy & Speed Assessment",
      "System Data Flow Diagram",
      "Security & Data Privacy Audit"
    ],
    duration: "Sprint 0 (1–2 Weeks)",
    liveOutput: "Approved Project Roadmap",
    status: "Active Gate",
    metric: "100% Feasibility Verified",
    terminalLogs: [
      "[DISCOVERY] Reviewing business needs and data boundaries...",
      "[AI-CORE] Comparing model costs and response speeds...",
      "[CACHE] Fast in-memory cache configured for real-time queries.",
      "[BLUEPRINT] Project roadmap approved with zero technical blockers."
    ]
  },
  {
    number: "02",
    id: "prototyping",
    shortLabel: "02 Prototype",
    icon: <Cpu className="w-6 h-6 text-[#DCDCDC]" />,
    title: "Interactive Prototype & UX Testing",
    tagline: "Clickable Demos & User Feedback",
    desc: "We quickly build a clickable, full-fidelity prototype so you and your team can test real features and review UI designs before full development begins.",
    deliverables: [
      "Clickable Interactive Prototype",
      "AI Response Benchmarks & Cost Estimates",
      "Consistent Design System",
      "API & Database Integration Specs"
    ],
    duration: "Weeks 2–4",
    liveOutput: "Working Alpha Demo",
    status: "Active Gate",
    metric: "Fast Response (< 200ms)",
    terminalLogs: [
      "[PROTOTYPE] Deploying live preview link for stakeholder testing...",
      "[DESIGN] Modern responsive UI components verified across devices...",
      "[SPEED] Testing real-world user load: Response time @ 184ms.",
      "[FEEDBACK] Stakeholder feedback incorporated. Demo approved."
    ]
  },
  {
    number: "03",
    id: "engineering",
    shortLabel: "03 Build",
    icon: <Code2 className="w-6 h-6 text-[#F4A049]" />,
    title: "Custom Software Engineering",
    tagline: "Clean, Modern Multi-Language Code",
    desc: "Our senior developers build your web and mobile applications using modern frameworks (Next.js, Python, TypeScript, Go). We include automated test suites and weekly live demo builds.",
    deliverables: [
      "Clean, Modular Codebase",
      "Automated Testing Suite (≥85% coverage)",
      "Secure API Connections",
      "Fast Global CDN & Cloud Setup"
    ],
    duration: "Weeks 4–10",
    liveOutput: "Working Release Candidate",
    status: "Automated",
    metric: "Zero Critical Bugs Guarantee",
    terminalLogs: [
      "[BUILD] Fast build completed cleanly across all application services.",
      "[TESTS] Running automated unit and integration tests...",
      "[QUALITY] Test coverage target reached: 94.2% verified.",
      "[INTEGRATION] API connections verified without breaking changes."
    ]
  },
  {
    number: "04",
    id: "security",
    shortLabel: "04 Security QA",
    icon: <ShieldCheck className="w-6 h-6 text-[#DCDCDC]" />,
    title: "Security Testing & Quality Assurance",
    tagline: "Bank-Grade Security & Penetration Testing",
    desc: "Before launching, your software goes through deep security testing: vulnerability scans, simulated attacks, data privacy compliance, and cross-browser accessibility checks.",
    deliverables: [
      "Comprehensive Security Audit Report",
      "Heavy Traffic & Stress Test Results",
      "Accessible Design Validation (WCAG 2.1)",
      "Data Access Controls & Privacy Policies"
    ],
    duration: "Weeks 8–10 (Parallel)",
    liveOutput: "Passed Security Certification",
    status: "Active Gate",
    metric: "100% Security Verified",
    terminalLogs: [
      "[SECURITY] Running automated vulnerability and penetration scans...",
      "[DATA-SHIELD] Checking data privacy and access control permissions...",
      "[COMPLIANCE] Verification complete: 0 high-risk vulnerabilities found.",
      "[AUDIT] Encryption keys verified: AES-256-GCM data protection active."
    ]
  },
  {
    number: "05",
    id: "deployment",
    shortLabel: "05 Launch",
    icon: <Rocket className="w-6 h-6 text-[#F4A049]" />,
    title: "Zero-Downtime Production Launch",
    tagline: "Smooth Global Cloud Deployment",
    desc: "We deploy your software to secure cloud hosting (AWS, Google Cloud, Azure) with zero downtime. Automated backups and fast global edge servers keep your app fast everywhere.",
    deliverables: [
      "Live Production Cloud Hosting",
      "Automated Safe Deployment System",
      "24/7 Live Monitoring Dashboard",
      "Instant Backup & Recovery Playbook"
    ],
    duration: "Weeks 10–12",
    liveOutput: "Live Platform Launch",
    status: "Automated",
    metric: "99.99% Uptime Guarantee",
    terminalLogs: [
      "[DEPLOY] Synchronizing cloud servers across global hosting regions...",
      "[DATABASE] Safe database updates completed with zero downtime.",
      "[TRAFFIC] Live traffic switched smoothly to new version.",
      "[MONITOR] Global servers healthy. 99.99% uptime active."
    ]
  },
  {
    number: "06",
    id: "autonomous-growth",
    shortLabel: "06 Auto-Scale",
    icon: <BrainCircuit className="w-6 h-6 text-[#F4A049]" />,
    title: "Ongoing Monitoring & Auto-Scaling",
    tagline: "Continuous Optimization & 24/7 Support",
    desc: "After launch, our automated systems monitor server health, auto-scale cloud capacity during high traffic spikes, optimize cloud hosting bills, and keep AI search models accurate.",
    deliverables: [
      "Continuous Performance Monitoring",
      "Automated Cloud Cost Optimizer",
      "Auto-Scaling Server Capacity",
      "Quarterly Technical Review & Upgrades"
    ],
    duration: "Continuous / 24/7",
    liveOutput: "Continuous Optimization",
    status: "Continuous",
    metric: "24/7 Self-Optimizing",
    terminalLogs: [
      "[MONITOR] Monitoring user traffic and AI response quality...",
      "[AUTOSCALE] Traffic spike detected: Automatically scaled server nodes.",
      "[COST-SAVER] Cloud optimizer saved 38% on hosting compute bills.",
      "[STATUS] All systems running smoothly. 24/7 monitoring active."
    ]
  },
];

const INDUSTRY_COMPLIANCE = {
  fintech: {
    label: "FinTech & Payments",
    standards: ["PCI-DSS Level 1", "SOC-2 Type II", "GLBA Financial Protection", "Bank-Grade Encryption"],
    desc: "Complete cardholder data protection, fraud defense filters, secure payment processing, and audit logs built to banking standards."
  },
  healthcare: {
    label: "Healthcare & Life Sciences",
    standards: ["HIPAA Compliant", "FDA 21 CFR Part 11", "SOC-2 Type II", "GDPR Health Privacy"],
    desc: "Strict patient data privacy, isolated healthcare database silos, doctor/patient role access controls, and full HIPAA compliance."
  },
  enterprise: {
    label: "Enterprise SaaS & B2B",
    standards: ["ISO/IEC 27001", "SOC-2 Type II", "OWASP Security Hardened", "GDPR / CCPA"],
    desc: "Single Sign-On (SSO) login, granular employee permissions, automated vulnerability testing, and guaranteed 99.99% multi-region uptime."
  }
};

const ESTIMATOR_DATA = {
  mvp: {
    label: "Startup MVP / Core Product",
    sprint: "6–10 Weeks Delivery",
    sla: "99.9% Uptime Guarantee",
    arch: "Fast Cloud Web & Mobile Architecture",
    cost: "Cost-Effective Cloud Setup"
  },
  growth: {
    label: "Growth-Stage Scale Platform",
    sprint: "12–16 Weeks Delivery",
    sla: "99.95% Uptime / Sub-250ms Speed",
    arch: "Scalable Cloud & Instant Data Caching",
    cost: "Automated Auto-Scaling Cloud"
  },
  swarm: {
    label: "Enterprise AI & Multi-Region",
    sprint: "16–22 Weeks Delivery",
    sla: "99.99% Mission-Critical Uptime",
    arch: "Dedicated Enterprise Cloud & AI Cluster",
    cost: "High-Capacity Multi-Region Cloud"
  }
};

function PipelineStageItem({
  stage,
  index,
  isActive,
  onIntersect
}: {
  stage: PipelineStage;
  index: number;
  isActive: boolean;
  onIntersect: (idx: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect(index);
          if (!triggered.current) {
            triggered.current = true;
            animate(ref.current!, {
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 600,
              ease: "outCubic",
              delay: index * 90,
            });
          }
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [index, onIntersect]);

  return (
    <div
      id={stage.id}
      ref={ref}
      style={{ opacity: 0 }}
      className="relative flex gap-5 sm:gap-8 group scroll-mt-36"
      itemScope
      itemType="https://schema.org/HowToStep"
    >
      <meta itemProp="position" content={String(index + 1)} />
      {/* Circuit Track & Node Marker */}
      <div className="flex flex-col items-center">
        <div
          className={`w-12 sm:w-14 h-12 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
            isActive
              ? "bg-[#333333] border-2 border-[#F4A049] shadow-[0_0_30px_rgba(244,160,73,0.7)] scale-110"
              : "bg-[#282828] border-2 border-[#DCDCDC]/20 group-hover:border-[#F4A049]/60"
          }`}
        >
          {stage.icon}
        </div>
        {index < PIPELINE_STAGES.length - 1 && (
          <div className="w-0.5 flex-1 mt-3 bg-gradient-to-b from-[#F4A049] via-[#7E4010] to-[#F4A049] opacity-40 min-h-[70px]" />
        )}
      </div>

      {/* Stage Card Surface */}
      <div className="flex-1 pb-10 sm:pb-12">
        <div
          className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 ${
            isActive
              ? "bg-gradient-to-br from-[#333333] to-[#282828] border-[#F4A049]/70 shadow-[0_15px_40px_rgba(0,0,0,0.6)] ring-1 ring-[#F4A049]/30"
              : "bg-[#333333] border-[#DCDCDC]/15 hover:border-[#F4A049]/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          }`}
        >
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] via-[#DCDCDC] to-[#7E4010]">
                {stage.number}
              </span>
              <span className="text-xs font-mono font-semibold text-[#DCDCDC]/75 bg-[#282828] border border-[#DCDCDC]/20 px-2.5 py-0.5 rounded-full">
                {stage.duration}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#282828] border border-[#F4A049]/50 text-[#F4A049] shadow-[0_0_10px_rgba(244,160,73,0.2)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4A049] animate-pulse" />
                {stage.liveOutput}
              </span>
            </div>
          </div>

          <div className="text-xs font-mono text-[#F4A049] uppercase tracking-wider mb-1">
            {stage.tagline}
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug" itemProp="name">
            {stage.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#DCDCDC]/80 leading-relaxed mb-5" itemProp="text">
            {stage.desc}
          </p>

          {/* Deliverables Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-[#DCDCDC]/10">
            {stage.deliverables.map((d) => (
              <div key={d} className="flex items-center gap-2 text-xs text-[#DCDCDC] p-1.5 rounded bg-[#282828]/50">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F4A049] shrink-0" />
                <span className="truncate">{d}</span>
              </div>
            ))}
          </div>

          {/* Stage Target Metric */}
          <div className="mt-4 pt-3 border-t border-[#DCDCDC]/10 flex items-center justify-between text-[11px] font-mono text-[#DCDCDC]/70">
            <span>Engineering Metric:</span>
            <span className="text-[#F4A049] font-bold">{stage.metric}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PipelinePage() {
  const [activeStageTab, setActiveStageTab] = useState<number>(0);
  const [activeIndustry, setActiveIndustry] = useState<keyof typeof INDUSTRY_COMPLIANCE>("fintech");
  const [activeScale, setActiveScale] = useState<keyof typeof ESTIMATOR_DATA>("growth");

  const currentStage = PIPELINE_STAGES[activeStageTab];

  const scrollToStage = (id: string, idx: number) => {
    setActiveStageTab(idx);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#333333] text-[#DCDCDC]">
      {/* Structured SEO Micro-data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "NexBridge 6-Stage Engineering Delivery Protocol",
            "description": "Production-grade Agile & Autonomous AI engineering methodology from discovery to hyper-scaling.",
            "step": PIPELINE_STAGES.map((s, idx) => ({
              "@type": "HowToStep",
              "position": idx + 1,
              "name": s.title,
              "text": s.desc
            }))
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-36 pb-16 sm:pb-20 overflow-hidden border-b border-[#7E4010]/30">
        <div className="absolute inset-0 cyber-grid-bg opacity-25 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-gradient-to-r from-[#F4A049]/20 via-[#7E4010]/25 to-[#F4A049]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#333333]/90 border border-[#F4A049]/40 text-xs font-mono text-[#F4A049] mb-6 shadow-[0_0_20px_rgba(244,160,73,0.25)]">
            <Rocket className="w-3.5 h-3.5 text-[#F4A049]" />
            <span className="font-semibold text-[#DCDCDC]">CUSTOM SOFTWARE &amp; AI PIPELINE</span>
            <span className="text-[#F4A049]">•</span>
            <span className="text-[#DCDCDC]/75">Predictable, On-Time Delivery</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1]">
            Our Proven Software &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] via-[#DCDCDC] to-[#7E4010]">
              AI Development
            </span>{" "}
            Process
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#DCDCDC]/90 max-w-3xl mx-auto leading-relaxed">
            A clear, battle-tested 6-step engineering process designed to take your ideas from initial discovery to a fast, secure, scalable digital product.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            {[
              { label: "Delivery Speed", value: "Weekly Live Demos" },
              { label: "Launch Safety", value: "Zero Downtime" },
              { label: "Code Quality", value: "≥ 85% Test Coverage" },
              { label: "Data Protection", value: "Bank-Grade Security" },
            ].map((m, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#282828] border border-[#DCDCDC]/15 shadow-md"
              >
                <div className="text-lg sm:text-xl font-bold font-mono text-[#F4A049]">{m.value}</div>
                <div className="text-[11px] font-mono text-[#DCDCDC]/70 uppercase mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STICKY QUICK-JUMP STAGE FILTER BAR ── */}
      <div className="sticky top-16 z-30 bg-[#333333]/90 backdrop-blur-md border-y border-[#7E4010]/30 shadow-lg py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#DCDCDC]/60 uppercase tracking-widest pl-2">
            <Layers className="w-3.5 h-3.5 text-[#F4A049]" />
            <span>Stages:</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 flex-nowrap w-full sm:w-auto">
            {PIPELINE_STAGES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => scrollToStage(s.id, idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeStageTab === idx
                    ? "bg-[#F4A049] text-black shadow-[0_0_15px_rgba(244,160,73,0.5)] font-bold scale-105"
                    : "bg-[#282828] text-[#DCDCDC]/75 border border-[#DCDCDC]/15 hover:border-[#F4A049]/50 hover:text-white"
                }`}
              >
                {s.shortLabel}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area: Stages + Interactive Live Terminal & Topology Simulator */}
      <section className="py-20 sm:py-24 bg-[#333333] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#282828] border border-[#F4A049]/40 text-xs font-mono text-[#F4A049] mb-4 shadow-[0_0_15px_rgba(244,160,73,0.2)]">
              <Zap className="w-3.5 h-3.5 text-[#F4A049]" />
              <span className="text-white font-semibold">6-STEP DEVELOPMENT ROADMAP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              From{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] via-[#DCDCDC] to-[#7E4010]">
                Initial Discovery to Scalable Launch
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#DCDCDC]/80 max-w-2xl mx-auto">
              Every stage produces working software, automated security checks, and weekly progress demos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Timeline Stages */}
            <div className="lg:col-span-7 space-y-2">
              {PIPELINE_STAGES.map((stage, i) => (
                <PipelineStageItem
                  key={stage.id}
                  stage={stage}
                  index={i}
                  isActive={activeStageTab === i}
                  onIntersect={(idx) => setActiveStageTab(idx)}
                />
              ))}
            </div>

            {/* Right Column: Interactive Live Build Terminal & Topology Simulator */}
            <div className="lg:col-span-5 sticky top-36">
              <div className="p-6 rounded-2xl bg-[#282828] border border-[#F4A049]/40 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-md">
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#DCDCDC]/15 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-xs font-mono text-[#DCDCDC]/75 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-[#F4A049]" />
                      pipeline-daemon :: {currentStage.id}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#333333] text-[#F4A049] border border-[#F4A049]/30">
                    LIVE STREAM
                  </span>
                </div>

                {/* Topology & System Status */}
                <div className="mb-5 p-3.5 rounded-xl bg-[#333333] border border-[#DCDCDC]/10 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#DCDCDC]/70">Active Stage Gate:</span>
                    <span className="text-white font-bold">{currentStage.title}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#DCDCDC]/70">Topology State:</span>
                    <span className="text-[#F4A049] font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F4A049] animate-pulse" />
                      {currentStage.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#DCDCDC]/70">SLA Benchmark:</span>
                    <span className="text-[#DCDCDC] font-bold">{currentStage.metric}</span>
                  </div>
                </div>

                {/* Live Console Output */}
                <div className="bg-[#1e1e1e] p-4 rounded-xl border border-black/50 font-mono text-xs space-y-2 text-[#DCDCDC]/90 min-h-[160px]">
                  <div className="text-[10px] text-[#F4A049]/70 pb-1 border-b border-white/5">
                    // Executing automated CI/CD assertion pipeline
                  </div>
                  {currentStage.terminalLogs.map((log, lIdx) => (
                    <div key={lIdx} className="leading-relaxed flex items-start gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-[#F4A049] shrink-0 mt-0.5" />
                      <span>{log}</span>
                    </div>
                  ))}
                  <div className="pt-2 flex items-center gap-2 text-[#F4A049] text-[11px] animate-pulse">
                    <span>⚡ Daemon listening for telemetry events...</span>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="mt-5 pt-4 border-t border-[#DCDCDC]/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#DCDCDC]/60">
                    Auto-synced with scroll position
                  </span>
                  <GlowButton href="/book-consultation" variant="primary" size="sm" icon>
                    Review Architecture
                  </GlowButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPRINT DURATION & SLA ESTIMATOR ── */}
      <section className="py-20 bg-[#282828] border-t border-[#7E4010]/30 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#333333] border border-[#F4A049]/40 text-xs font-mono text-[#F4A049] mb-4 shadow-[0_0_15px_rgba(244,160,73,0.2)]">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#F4A049]" />
              <span className="text-white font-semibold">PROJECT TIMELINE ESTIMATOR</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              Interactive Sprint Duration &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] via-[#DCDCDC] to-[#7E4010]">
                SLA Calculator
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#DCDCDC]/80">
              Select your enterprise scale tier to project accurate sprint velocities, delivery timeframes, and architectural configurations.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#333333] border border-[#DCDCDC]/15 shadow-2xl">
            {/* Scale Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {(Object.keys(ESTIMATOR_DATA) as Array<keyof typeof ESTIMATOR_DATA>).map((scaleKey) => (
                <button
                  key={scaleKey}
                  onClick={() => setActiveScale(scaleKey)}
                  className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    activeScale === scaleKey
                      ? "bg-[#282828] border-[#F4A049] shadow-[0_0_15px_rgba(244,160,73,0.3)] ring-1 ring-[#F4A049]/40"
                      : "bg-[#282828]/50 border-[#DCDCDC]/15 hover:border-[#F4A049]/40"
                  }`}
                >
                  <div className="text-xs font-mono text-[#F4A049] uppercase tracking-wider mb-1">Scale Tier</div>
                  <div className="text-sm font-bold text-white">{ESTIMATOR_DATA[scaleKey].label}</div>
                </button>
              ))}
            </div>

            {/* Dynamic Results Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-xl bg-[#282828] border border-[#DCDCDC]/10 mb-6">
              <div>
                <div className="text-[11px] font-mono text-[#DCDCDC]/60 uppercase">Estimated Velocity</div>
                <div className="text-base sm:text-lg font-bold font-mono text-[#F4A049] mt-1">
                  {ESTIMATOR_DATA[activeScale].sprint}
                </div>
              </div>
              <div>
                <div className="text-[11px] font-mono text-[#DCDCDC]/60 uppercase">Production SLA</div>
                <div className="text-base sm:text-lg font-bold font-mono text-white mt-1">
                  {ESTIMATOR_DATA[activeScale].sla}
                </div>
              </div>
              <div>
                <div className="text-[11px] font-mono text-[#DCDCDC]/60 uppercase">Architecture Core</div>
                <div className="text-base sm:text-lg font-bold text-[#DCDCDC] mt-1">
                  {ESTIMATOR_DATA[activeScale].arch}
                </div>
              </div>
              <div>
                <div className="text-[11px] font-mono text-[#DCDCDC]/60 uppercase">Cloud Provisioning</div>
                <div className="text-base sm:text-lg font-bold text-[#F4A049] mt-1">
                  {ESTIMATOR_DATA[activeScale].cost}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className="text-xs font-mono text-[#DCDCDC]/70">
                Weekly milestone demo builds backed by contractual delivery guarantees.
              </span>
              <GlowButton href="/book-consultation" variant="primary" size="md" icon>
                Lock In Sprints
              </GlowButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRY COMPLIANCE & SECURITY SELECTOR ── */}
      <section className="py-20 bg-[#333333] border-t border-[#7E4010]/30 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#282828] border border-[#F4A049]/40 text-xs font-mono text-[#F4A049] mb-4 shadow-[0_0_15px_rgba(244,160,73,0.2)]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F4A049]" />
              <span className="text-white font-semibold">BANK-GRADE SECURITY &amp; COMPLIANCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              Every Launch Protected by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] via-[#DCDCDC] to-[#7E4010]">
                Bank-Grade Security
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#DCDCDC]/80">
              Select your industry to explore our built-in security, compliance, and data protection standards.
            </p>
          </div>

          {/* Industry Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {(Object.keys(INDUSTRY_COMPLIANCE) as Array<keyof typeof INDUSTRY_COMPLIANCE>).map((indKey) => (
              <button
                key={indKey}
                onClick={() => setActiveIndustry(indKey)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-mono transition-all duration-200 cursor-pointer ${
                  activeIndustry === indKey
                    ? "bg-[#F4A049] text-black shadow-[0_0_20px_rgba(244,160,73,0.5)] scale-105"
                    : "bg-[#282828] text-[#DCDCDC] border border-[#DCDCDC]/20 hover:border-[#F4A049]/60"
                }`}
              >
                {INDUSTRY_COMPLIANCE[indKey].label}
              </button>
            ))}
          </div>

          {/* Active Industry Deep-Dive Card */}
          <div className="p-8 rounded-2xl bg-[#282828] border border-[#F4A049]/50 shadow-xl mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#DCDCDC]/15">
              <div>
                <span className="text-xs font-mono text-[#F4A049] uppercase tracking-wider">
                  Target Regulatory Posture
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {INDUSTRY_COMPLIANCE[activeIndustry].label} Enforcement
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono text-green-400 font-bold">100% Audit Verified</span>
              </div>
            </div>

            <p className="text-sm text-[#DCDCDC]/90 leading-relaxed mb-6">
              {INDUSTRY_COMPLIANCE[activeIndustry].desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {INDUSTRY_COMPLIANCE[activeIndustry].standards.map((std) => (
                <div
                  key={std}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#333333] border border-[#F4A049]/30 text-xs font-mono text-white font-semibold shadow-sm"
                >
                  <Lock className="w-4 h-4 text-[#F4A049] shrink-0" />
                  <span>{std}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom Section */}
      <section className="py-20 bg-gradient-to-b from-[#333333] to-[#282828] border-t border-[#7E4010]/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex p-3 rounded-2xl bg-[#282828] border border-[#F4A049]/40 mb-6 shadow-[0_0_25px_rgba(244,160,73,0.3)]">
            <Sparkles className="w-6 h-6 text-[#F4A049]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Initiate{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] via-[#DCDCDC] to-[#7E4010]">
              Stage 01 Discovery?
            </span>
          </h2>
          <p className="text-[#DCDCDC]/80 mb-10 text-base sm:text-lg leading-relaxed">
            Reserve a complimentary Discovery & Architecture Session with our lead engineers and AI architects.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <GlowButton href="/book-consultation" variant="primary" size="lg" icon>
              Book Free Consultation
            </GlowButton>
            <Link
              href="/services"
              className="px-6 py-3.5 rounded-xl border border-[#DCDCDC]/20 text-xs font-mono font-bold uppercase tracking-wider text-[#DCDCDC] hover:text-[#F4A049] hover:border-[#F4A049]/50 hover:bg-[#282828] transition-all"
            >
              Explore Services Matrix
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
