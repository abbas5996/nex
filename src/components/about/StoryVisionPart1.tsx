"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { animate, stagger } from "animejs";
import {
  Cpu,
  BrainCircuit,
  Globe,
  Zap,
  ArrowRight,
  GitBranch,
  Sparkles,
  Code2,
  Layers,
  SlidersHorizontal,
  Activity,
  Server,
  Network
} from "lucide-react";

const TIMELINE_MILESTONES = [
  {
    id: "genesis",
    year: "2018",
    era: "The Genesis",
    tagline: "Custom Software & Modern Systems",
    colorHex: "#F4A049",
    keyword: "Custom Software Development Company",
    description:
      "NexBridge was founded to solve legacy software problems. We upgraded slow, fragile systems into clean, modern software — slashing deployment times from months to days and eliminating downtime across customer-facing platforms.",
    pills: ["Custom Software", "Modern Architecture", "Fast Deployment", "API Integration"],
    metric: { value: "12x", label: "Faster Deploy Cycles" },
    schemaType: "FoundingEvent",
  },
  {
    id: "ai-renaissance",
    year: "2021",
    era: "The AI Renaissance",
    tagline: "Enterprise AI & Smart Automation",
    colorHex: "#F4A049",
    keyword: "AI Development Agency",
    description:
      "We began building practical, production-ready AI systems for high-growth businesses and enterprise clients — integrating accurate AI search, automated workflows, and smart assistants directly into company software.",
    pills: ["AI Development Agency", "Accurate AI Search", "Workflow Automation", "Smart Assistants"],
    metric: { value: "94%", label: "Task Automation Rate" },
    schemaType: "MilestoneEvent",
  },
  {
    id: "hyper-scale",
    year: "2024",
    era: "Hyper-Scale Era",
    tagline: "Global Cloud Hosting & 99.99% Uptime",
    colorHex: "#DCDCDC",
    keyword: "Cloud Migration Services",
    description:
      "Serving clients worldwide, NexBridge builds cloud platforms engineered for 99.99% uptime and ultra-fast response times under 50ms — even with millions of daily active users.",
    pills: ["Cloud Migration Services", "Enterprise SaaS Development", "Zero Downtime", "24/7 Monitoring"],
    metric: { value: "99.99%", label: "Guaranteed SLA Uptime" },
    schemaType: "MilestoneEvent",
  },
];

const HERO_STATS = [
  { value: "150+", label: "Projects Shipped" },
  { value: "6", label: "Global Regions" },
  { value: "<50ms", label: "Fast Response Time" },
  { value: "60+", label: "Enterprise Clients" },
];

const KEYWORD_BADGES = [
  "Custom Software Development Company",
  "AI Development Agency",
  "Enterprise SaaS Development",
  "Custom Mobile App Development",
  "Cloud Migration Services",
  "AI Integration Consultants",
];

const H1_PARTS = [
  { text: "Custom", cls: "text-white" },
  { text: "Software", cls: "text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] to-[#DCDCDC]" },
  { text: "&", cls: "text-[#7E4010]" },
  { text: "Enterprise", cls: "text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] via-[#F4A049] to-[#7E4010] drop-shadow-[0_0_18px_rgba(244,160,73,0.5)]" },
  { text: "AI", cls: "text-transparent bg-clip-text bg-gradient-to-r from-[#DCDCDC] to-[#F4A049]" },
  { text: "Solutions", cls: "text-white" },
  { text: "Built", cls: "text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] to-[#7E4010]" },
  { text: "for Scale", cls: "text-transparent bg-clip-text bg-gradient-to-br from-white via-[#DCDCDC] to-[#F4A049]" },
];

export default function StoryVisionPart1() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Interactive Architecture Philosophy Toggle State
  const [archMode, setArchMode] = useState<"traditional" | "swarm">("swarm");

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      animate(".sv-badge", { opacity: [0, 1], translateY: [20, 0], duration: 700, delay: 100, ease: "outExpo" });
      animate(".sv-h1-word", { opacity: [0, 1], translateY: [30, 0], delay: stagger(50, { start: 200 }), duration: 700, ease: "outExpo" });
      animate(".sv-sub", { opacity: [0, 1], translateY: [20, 0], duration: 700, delay: 600, ease: "outExpo" });
      animate(".sv-stat", { opacity: [0, 1], translateY: [16, 0], delay: stagger(70, { start: 800 }), duration: 500, ease: "outExpo" });
      animate(".sv-kw-badge", { opacity: [0, 1], scale: [0.88, 1], delay: stagger(40, { start: 1000 }), duration: 450, ease: "outBack" });
    } catch {}
  }, []);

  useEffect(() => {
    const line = document.getElementById("sv-progress-line");
    if (!line || typeof window === "undefined") return;
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (-rect.top + window.innerHeight * 0.3) / (rect.height * 0.7)));
      line.style.height = progress * 100 + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="story-vision"
      className="relative overflow-x-hidden bg-[#333333]"
      aria-labelledby="sv-h1"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, rgba(244,160,73,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(244,160,73,0.045) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#F4A049]/8 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#7E4010]/12 blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="animate-scanline absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F4A049]/25 to-transparent" />
      </div>

      <header className="relative z-10 pt-28 sm:pt-36 pb-20 sm:pb-28" itemProp="description">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="sv-badge opacity-0 inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 sm:mb-10"
            style={{ background: "rgba(51,51,51,0.90)", border: "1px solid rgba(244,160,73,0.55)", boxShadow: "0 0 24px rgba(244,160,73,0.20), inset 0 0 12px rgba(244,160,73,0.06)", backdropFilter: "blur(16px)" }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F4A049] opacity-70" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F4A049]" />
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#F4A049]" />
            <span className="text-[10px] sm:text-xs font-mono text-[#DCDCDC]">Our Origin &amp; Mission</span>
            <span className="w-px h-3.5 bg-[#7E4010]/60" />
            <span className="text-[10px] sm:text-xs font-mono font-bold text-[#F4A049]">Tier-1 Technology Partners</span>
          </div>

          <h1 id="sv-h1" className="text-[2rem] sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.12] flex flex-wrap gap-x-[0.25em] gap-y-2 mb-7 sm:mb-9 max-w-5xl" itemProp="name">
            {H1_PARTS.map(({ text, cls }, i) => (
              <span key={i} className={"sv-h1-word inline-block opacity-0 " + cls}>{text}</span>
            ))}
          </h1>

          <p className="sv-sub opacity-0 text-base sm:text-lg lg:text-xl text-[#DCDCDC]/85 max-w-3xl leading-relaxed mb-10 sm:mb-12" itemProp="abstract">
            NexBridge was founded on a simple conviction: businesses deserve high-performing, reliable software without bureaucratic delays. As a premier custom software development company and AI development agency, we combine modern web development, mobile apps, and secure AI automation into{" "}
            <strong className="text-[#F4A049] font-semibold" itemProp="knowsAbout">scalable digital growth engines</strong>{" "}
            that help your business outpace the competition.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pt-6 border-t border-[#7E4010]/30 max-w-2xl mb-10 sm:mb-14">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="sv-stat opacity-0 flex flex-col items-center sm:items-start gap-1">
                <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] to-[#DCDCDC]">{stat.value}</span>
                <span className="text-[10px] sm:text-xs text-[#DCDCDC]/60 font-medium tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-2.5" aria-label="Key capability areas">
            {KEYWORD_BADGES.map((kw, i) => (
              <span key={kw} className="sv-kw-badge opacity-0 inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono px-3 py-1.5 rounded-full"
                style={{ background: i % 2 === 0 ? "rgba(244,160,73,0.09)" : "rgba(126,64,16,0.12)", border: "1px solid rgba(220,220,220,0.12)", color: "#DCDCDC" }}
                itemProp="knowsAbout"
              >
                <Code2 className="w-2.5 h-2.5 text-[#F4A049] shrink-0" />{kw}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* ── INTERACTIVE ARCHITECTURE PHILOSOPHY TOGGLE ── */}
      <section className="relative z-10 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#282828] border border-[#F4A049]/40 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#DCDCDC]/15">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#F4A049] uppercase tracking-wider mb-1">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Architecture Comparison Simulator</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Old Legacy Systems vs Modern AI-Accelerated Software
              </h2>
            </div>

            {/* Toggle Switch */}
            <div className="flex items-center p-1 rounded-xl bg-[#333333] border border-[#DCDCDC]/20">
              <button
                type="button"
                onClick={() => setArchMode("traditional")}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  archMode === "traditional"
                    ? "bg-[#282828] text-white shadow-md border border-[#DCDCDC]/20"
                    : "text-[#DCDCDC]/60 hover:text-white"
                }`}
              >
                Legacy Monolith
              </button>
              <button
                type="button"
                onClick={() => setArchMode("swarm")}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  archMode === "swarm"
                    ? "bg-[#F4A049] text-black shadow-[0_0_15px_rgba(244,160,73,0.5)]"
                    : "text-[#DCDCDC]/60 hover:text-white"
                }`}
              >
                Modern Architecture
              </button>
            </div>
          </div>

          {/* Real-time comparison metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            <div className="p-4 rounded-xl bg-[#333333] border border-[#DCDCDC]/10">
              <div className="text-[10px] font-mono text-[#DCDCDC]/60 uppercase">Average Response Speed</div>
              <div className={`text-xl font-mono font-extrabold mt-1 ${archMode === "swarm" ? "text-[#F4A049]" : "text-[#DCDCDC]"}`}>
                {archMode === "swarm" ? "< 120ms (Ultra-Fast)" : "1,450ms (Slow & Laggy)"}
              </div>
              <div className="w-full bg-[#242424] h-1.5 rounded-full mt-3 overflow-hidden">
                <div
                  className="bg-[#F4A049] h-full transition-all duration-500"
                  style={{ width: archMode === "swarm" ? "20%" : "85%" }}
                />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#333333] border border-[#DCDCDC]/10">
              <div className="text-[10px] font-mono text-[#DCDCDC]/60 uppercase">Feature Update Frequency</div>
              <div className="text-xl font-mono font-extrabold text-white mt-1">
                {archMode === "swarm" ? "Instant (Zero Downtime)" : "Monthly Maintenance"}
              </div>
              <div className="text-[11px] font-mono text-[#DCDCDC]/65 mt-2">
                {archMode === "swarm" ? "Deploy anytime seamlessly" : "System downtime required"}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#333333] border border-[#DCDCDC]/10">
              <div className="text-[10px] font-mono text-[#DCDCDC]/60 uppercase">Customer Data Ownership</div>
              <div className={`text-xl font-mono font-extrabold mt-1 ${archMode === "swarm" ? "text-emerald-400" : "text-amber-400"}`}>
                {archMode === "swarm" ? "100% Private & Protected" : "Shared Vendor Cloud"}
              </div>
              <div className="text-[11px] font-mono text-[#DCDCDC]/65 mt-2">
                {archMode === "swarm" ? "Complete IP ownership" : "Third-party lock-in risk"}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#333333] border border-[#DCDCDC]/10">
              <div className="text-[10px] font-mono text-[#DCDCDC]/60 uppercase">Cloud Hosting Cost Savings</div>
              <div className="text-xl font-mono font-extrabold text-[#F4A049] mt-1">
                {archMode === "swarm" ? "Up to 60% Savings" : "High Overhead Costs"}
              </div>
              <div className="text-[11px] font-mono text-[#DCDCDC]/65 mt-2">
                {archMode === "swarm" ? "Smart automated autoscaling" : "Overprovisioned server bills"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ORIGIN STORY TIMELINE ── */}
      <section className="relative z-10 pb-24 sm:pb-32" aria-label="NexBridge Origin Story Timeline" itemScope itemType="https://schema.org/ItemList">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5" style={{ background: "rgba(51,51,51,0.85)", border: "1px solid rgba(126,64,16,0.45)", backdropFilter: "blur(12px)" }}>
              <Zap className="w-3.5 h-3.5 text-[#F4A049]" />
              <span className="text-[10px] sm:text-xs font-mono text-[#DCDCDC]/80 tracking-widest uppercase">Origin Story</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight" itemProp="name">
              From{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #F4A049 0%, #DCDCDC 50%, #7E4010 100%)" }}>Legacy Chaos</span>
              {" "}to{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #7E4010 0%, #F4A049 60%, #DCDCDC 100%)" }}>AI-Native Dominance</span>
            </h2>
            <p className="text-sm sm:text-base text-[#DCDCDC]/65 max-w-2xl mx-auto leading-relaxed">
              Three inflection points that shaped NexBridge into a globally recognised{" "}
              <strong className="text-[#F4A049] font-medium">Next-Gen Tech Consulting Firm</strong>.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-[5.5rem] top-5 bottom-5 w-px bg-[#DCDCDC]/10 rounded-full overflow-hidden">
              <div id="sv-progress-line" className="w-full rounded-full" style={{ height: "0%", background: "linear-gradient(to bottom, #F4A049, #7E4010)", transition: "none" }} />
            </div>
            <div className="block lg:hidden absolute left-4 top-0 bottom-0 w-px opacity-30" style={{ background: "linear-gradient(to bottom, #F4A049, #7E4010, transparent)" }} />

            <div className="flex flex-col gap-12 sm:gap-16 pl-10 lg:pl-0">
              {TIMELINE_MILESTONES.map((m, i) => (
                <TimelineCard key={m.id} milestone={m} index={i} isActive={activeIndex === i} onActivate={() => setActiveIndex(i)} isLast={i === TIMELINE_MILESTONES.length - 1} />
              ))}
            </div>
          </div>

          <div className="mt-14 sm:mt-20 rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 relative overflow-hidden"
            style={{ background: "rgba(51,51,51,0.70)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", border: "1px solid rgba(244,160,73,0.25)", boxShadow: "0 20px 60px -20px rgba(244,160,73,0.20), inset 0 1px 0 rgba(220,220,220,0.08)" }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, #F4A049, transparent 70%)" }} />
              <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full opacity-15 blur-3xl" style={{ background: "radial-gradient(circle, #7E4010, transparent 70%)" }} />
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl" style={{ background: "rgba(244,160,73,0.15)", border: "1px solid rgba(244,160,73,0.30)", color: "#F4A049" }}>
                    {activeIndex === 0 ? <GitBranch className="w-5 h-5" /> : activeIndex === 1 ? <BrainCircuit className="w-5 h-5" /> : <Globe className="w-5 h-5" />}
                  </div>
                  <div>
                    <p className="text-[10px] font-mono tracking-widest uppercase" style={{ color: TIMELINE_MILESTONES[activeIndex].colorHex }}>
                      {TIMELINE_MILESTONES[activeIndex].year} · {TIMELINE_MILESTONES[activeIndex].era}
                    </p>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white">{TIMELINE_MILESTONES[activeIndex].tagline}</h3>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-[#DCDCDC]/80 leading-relaxed mb-6">{TIMELINE_MILESTONES[activeIndex].description}</p>
                <div className="flex flex-wrap gap-2">
                  {TIMELINE_MILESTONES[activeIndex].pills.map((pill) => (
                    <span key={pill} className="text-[10px] sm:text-xs font-mono px-2.5 py-1 rounded-full" style={{ background: "rgba(244,160,73,0.10)", border: "1px solid rgba(244,160,73,0.28)", color: "#F4A049" }}>{pill}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-[10px] font-mono text-[#DCDCDC]/50 tracking-widest uppercase mb-1">Navigate Eras</p>
                {TIMELINE_MILESTONES.map((m, i) => (
                  <button key={m.id} onClick={() => setActiveIndex(i)} className="w-full text-left px-4 py-3 rounded-xl transition-all duration-250 cursor-pointer"
                    style={{ background: activeIndex === i ? "rgba(244,160,73,0.14)" : "rgba(220,220,220,0.04)", border: activeIndex === i ? "1px solid rgba(244,160,73,0.45)" : "1px solid rgba(220,220,220,0.08)" }}
                    aria-pressed={activeIndex === i}
                  >
                    <span className="text-[10px] font-mono tracking-widest block mb-0.5" style={{ color: activeIndex === i ? "#F4A049" : "rgba(220,220,220,0.40)" }}>{m.year}</span>
                    <span className="text-xs font-bold" style={{ color: activeIndex === i ? "#FFFFFF" : "rgba(220,220,220,0.60)" }}>{m.era}</span>
                  </button>
                ))}
                <Link href="/services" className="mt-2 w-full group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white transition-all duration-300 hover:scale-[1.02]"
                  style={{ background: "linear-gradient(135deg, #F4A049, #7E4010)", boxShadow: "0 0 24px rgba(244,160,73,0.35)" }}
                >
                  <Layers className="w-3.5 h-3.5" /><span>Explore Our Services</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(244,160,73,0.50), transparent)" }} />
          </div>
        </div>
      </section>
    </section>
  );
}

function TimelineCard({ milestone, index, isActive, onActivate, isLast }: {
  milestone: typeof TIMELINE_MILESTONES[0];
  index: number;
  isActive: boolean;
  onActivate: () => void;
  isLast: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !fired.current) {
        fired.current = true;
        animate(el, { opacity: [0, 1], translateX: [index % 2 === 0 ? -48 : 48, 0], duration: 750, delay: index * 150, ease: "outExpo" });
        animate(el.querySelectorAll(".pill-tag"), { opacity: [0, 1], translateY: [10, 0], delay: stagger(60, { start: index * 150 + 300 }), duration: 400, ease: "outExpo" });
      }
    }, { threshold: 0.25 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  const ICONS = [<GitBranch key="gb" className="w-5 h-5" />, <BrainCircuit key="bc" className="w-5 h-5" />, <Globe key="gl" className="w-5 h-5" />];

  return (
    <div ref={cardRef} className="relative flex flex-col lg:flex-row items-start gap-0 lg:gap-8 opacity-0">
      <div className="hidden lg:flex flex-col items-center w-24 shrink-0 pt-1">
        <span className="text-xs font-mono font-bold tracking-widest" style={{ color: milestone.colorHex }}>{milestone.year}</span>
        <div className="mt-3 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 shrink-0"
          style={{ borderColor: isActive ? milestone.colorHex : "rgba(220,220,220,0.25)", backgroundColor: isActive ? milestone.colorHex + "22" : "rgba(51,51,51,0.6)", boxShadow: isActive ? "0 0 20px " + milestone.colorHex + "55" : "none", color: milestone.colorHex }}
        >{ICONS[index]}</div>
        {!isLast && <div className="mt-3 w-px flex-1 min-h-[120px]" style={{ background: "linear-gradient(to bottom, #F4A049, #7E4010, rgba(126,64,16,0.1))" }} />}
      </div>

      <div className="flex lg:hidden items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-full flex items-center justify-center border-2 shrink-0" style={{ borderColor: milestone.colorHex, backgroundColor: milestone.colorHex + "22", boxShadow: "0 0 16px " + milestone.colorHex + "44", color: milestone.colorHex }}>{ICONS[index]}</div>
        <span className="text-xs font-mono font-bold tracking-widest" style={{ color: milestone.colorHex }}>{milestone.year}</span>
        <span className="text-[10px] font-mono text-[#DCDCDC]/50 uppercase tracking-wider">{milestone.era}</span>
      </div>

      <article className="flex-1 w-full group cursor-pointer" aria-label={"Timeline milestone: " + milestone.era} onClick={onActivate} onMouseEnter={onActivate}>
        <div className="relative rounded-2xl p-6 sm:p-7 lg:p-8 transition-all duration-300"
          style={{ background: isActive ? "rgba(51,51,51,0.90)" : "rgba(51,51,51,0.55)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: isActive ? "1px solid rgba(244,160,73,0.50)" : "1px solid rgba(220,220,220,0.10)", boxShadow: isActive ? "0 12px 40px -12px rgba(244,160,73,0.30), 0 0 0 1px rgba(126,64,16,0.20)" : "0 4px 20px -8px rgba(0,0,0,0.4)", transform: isActive ? "translateY(-2px)" : "translateY(0)" }}
        >
          <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl rounded-tr-2xl opacity-30" style={{ background: "radial-gradient(circle at top right, " + milestone.colorHex + "40, transparent 70%)" }} />
          <div className="hidden lg:flex items-center gap-3 mb-4">
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border" style={{ color: milestone.colorHex, borderColor: milestone.colorHex + "50", background: milestone.colorHex + "12" }}>{milestone.era}</span>
            <span className="text-[10px] font-mono text-[#DCDCDC]/40 tracking-wider">{milestone.keyword}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1 leading-tight">{milestone.tagline}</h3>
          <p className="text-sm sm:text-base text-[#DCDCDC]/80 leading-relaxed mb-5">{milestone.description}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {milestone.pills.map((pill) => (
              <span key={pill} className="pill-tag text-[10px] sm:text-xs font-mono px-2.5 py-1 rounded-full opacity-0" style={{ background: "rgba(244,160,73,0.10)", border: "1px solid rgba(244,160,73,0.25)", color: "#DCDCDC" }}>{pill}</span>
            ))}
          </div>
          <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl" style={{ background: "rgba(244,160,73,0.08)", border: "1px solid rgba(244,160,73,0.20)" }}>
            <span className="text-2xl sm:text-3xl font-extrabold font-mono" style={{ background: "linear-gradient(135deg, #F4A049, #DCDCDC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{milestone.metric.value}</span>
            <span className="text-[10px] sm:text-xs text-[#DCDCDC]/70 font-medium leading-tight max-w-[80px]">{milestone.metric.label}</span>
          </div>
          <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, " + milestone.colorHex + "80, transparent)" }} />
          </div>
        </div>
      </article>
    </div>
  );
}
