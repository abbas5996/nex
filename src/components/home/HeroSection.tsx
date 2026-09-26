"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { animate, stagger } from "animejs";
import { ArrowRight, Zap, Cpu, BrainCircuit, Globe, ShieldCheck, Activity } from "lucide-react";

const WORDS = [
  { text: "Custom", accent: "orange-bronze" },
  { text: "Software", accent: "silver-orange" },
  { text: "&", accent: "plain" },
  { text: "AI", accent: "orange-glow" },
  { text: "Solutions", accent: "orange-bronze" },
  { text: "Built", accent: "plain" },
  { text: "for", accent: "plain" },
  { text: "Scale", accent: "silver-orange" },
];

const METRICS = [
  { value: "99.99%", label: "SLA Uptime" },
  { value: "150+", label: "Projects Delivered" },
  { value: "60+", label: "Enterprise Clients" },
  { value: "<50ms", label: "Latency P99" },
];

const TRUST_BADGES = [
  { icon: <ShieldCheck className="w-3.5 h-3.5 text-[#F4A049]" />, label: "SOC-2 Aligned" },
  { icon: <Globe className="w-3.5 h-3.5 text-[#DCDCDC]" />, label: "Multi-Region Cloud" },
  { icon: <BrainCircuit className="w-3.5 h-3.5 text-[#F4A049]" />, label: "AI-Native Architecture" },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        animate(".hw", {
          opacity: [0, 1],
          translateY: [25, 0],
          delay: stagger(60),
          duration: 700,
          ease: "outExpo",
        });
        animate(".hero-badge", {
          opacity: [0, 1],
          translateY: [15, 0],
          duration: 600,
          ease: "outExpo",
        });
        animate(".hero-sub", {
          opacity: [0, 1],
          translateY: [15, 0],
          duration: 600,
          delay: 200,
          ease: "outExpo",
        });
        animate(".hero-cta", {
          opacity: [0, 1],
          scale: [0.95, 1],
          delay: stagger(80, { start: 400 }),
          duration: 500,
          ease: "outBack",
        });
        animate(".hero-metric", {
          opacity: [0, 1],
          translateX: [-15, 0],
          delay: stagger(60, { start: 600 }),
          duration: 450,
          ease: "outExpo",
        });
        animate(".trust-badge", {
          opacity: [0, 1],
          translateY: [10, 0],
          delay: stagger(50, { start: 800 }),
          duration: 400,
          ease: "outExpo",
        });
        animate(".hero-image-frame", {
          opacity: [0, 1],
          scale: [0.95, 1],
          duration: 800,
          delay: 200,
          ease: "outExpo",
        });
        animate(".hero-image-floating", {
          translateY: [-10, 10],
          duration: 3500,
          direction: "alternate",
          loop: true,
          ease: "inOutSine",
        });
      }
    } catch (e) {
      console.warn("Hero animations initial state applied:", e);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden bg-[#1A1A1A]"
      id="hero"
      aria-label="Enterprise AI and Custom Software Development Company"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      {/* Background cyber grid with subtle warm tint */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(244,160,73,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(244,160,73,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient glow orbs in Brand Orange & Bronze */}
      <div className="absolute top-1/4 left-0 sm:left-10 w-[280px] sm:w-[450px] lg:w-[600px] h-[280px] sm:h-[450px] lg:h-[600px] bg-[#F4A049]/12 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none animate-float" />
      <div
        className="absolute bottom-1/4 right-0 sm:right-10 w-[280px] sm:w-[450px] lg:w-[600px] h-[280px] sm:h-[450px] lg:h-[600px] bg-[#7E4010]/15 rounded-full blur-[120px] sm:blur-[170px] pointer-events-none"
        style={{ animation: "float 7s ease-in-out infinite alternate" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[320px] lg:w-[450px] h-[200px] sm:h-[320px] lg:h-[450px] bg-[#DCDCDC]/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      {/* Ambient Scanline */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="animate-scanline absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F4A049]/35 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Responsive Grid: Text on Top (order-1), Image on Bottom (order-2) on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-10 items-center">

          {/* Text Container: order-1 on Mobile & Tablet, lg:col-span-7 */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-1">

            {/* Pill Badge — H1 keyword anchor */}
            <div
              className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#333333]/90 border border-[#F4A049]/60 text-[10px] sm:text-xs font-mono text-[#F4A049] mb-5 sm:mb-6 shadow-[0_0_20px_rgba(244,160,73,0.25)] backdrop-blur-md"
              itemProp="name"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F4A049] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F4A049]" />
              </span>
              <span className="text-[#DCDCDC]">Enterprise AI &amp; Custom Software Development Company</span>
              <span className="text-[#7E4010] mx-0.5">|</span>
              <span className="text-[#F4A049] font-semibold">Trusted by 60+ Clients</span>
            </div>

            {/* Kinetic H1 — target keyword: Enterprise AI & Custom Software Development Company */}
            <h1
              className="text-[2.1rem] leading-[1.15] sm:text-5xl lg:text-6xl xl:text-[68px] font-extrabold tracking-tight mb-5 sm:mb-6 flex flex-wrap justify-center lg:justify-start gap-x-[0.22em] gap-y-1.5"
              itemProp="headline"
            >
              {WORDS.map(({ text, accent }, i) => (
                <span
                  key={i}
                  className={`hw inline-block ${
                    accent === "orange-glow"
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] via-[#F4A049] to-[#DCDCDC] drop-shadow-[0_0_18px_rgba(244,160,73,0.35)]"
                      : accent === "silver-orange"
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-[#DCDCDC] to-[#F4A049]"
                        : accent === "orange-bronze"
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] to-[#7E4010]"
                          : "text-white"
                  }`}
                >
                  {text}
                </span>
              ))}
            </h1>

            {/* Subheading Narrative — plain-English + high-intent keyword integration */}
            <p
              className="hero-sub text-sm sm:text-base lg:text-xl text-[#DCDCDC]/90 max-w-2xl leading-relaxed mb-7 sm:mb-8 font-normal"
              itemProp="description"
            >
              NexBridge is an enterprise AI development agency and custom software development company. We design, build, and launch scalable web applications, mobile apps, SaaS platforms, and AI-powered systems — fast, secure, and ready for production from day one.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col xs:flex-row sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto">
              <Link
                href="/services"
                className="hero-cta w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#F4A049] to-[#7E4010] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(244,160,73,0.4)] hover:shadow-[0_0_35px_rgba(244,160,73,0.65)] hover:scale-[1.03] transition-all duration-300"
              >
                <Zap className="w-4 h-4" />
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/book-consultation"
                className="hero-cta w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#333333]/90 border border-[#DCDCDC]/30 hover:border-[#F4A049]/70 text-[#DCDCDC] hover:text-white font-bold text-xs uppercase tracking-wider hover:bg-[#333333] hover:shadow-[0_0_25px_rgba(244,160,73,0.2)] transition-all duration-300 backdrop-blur-sm"
              >
                <Cpu className="w-4 h-4 text-[#F4A049]" />
                <span>Book Strategy Call</span>
              </Link>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 pt-5 sm:pt-6 border-t border-[#7E4010]/35 w-full max-w-2xl mb-5 sm:mb-6">
              {METRICS.map((m) => (
                <div key={m.label} className="hero-metric flex flex-col items-center lg:items-start">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] to-[#DCDCDC]">
                    {m.value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-[#DCDCDC]/75 font-medium mt-0.5 tracking-wide">{m.label}</span>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5">
              {TRUST_BADGES.map((b) => (
                <div
                  key={b.label}
                  className="trust-badge inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-[#333333]/70 border border-[#7E4010]/30 text-[10px] sm:text-[11px] font-mono text-[#DCDCDC] backdrop-blur-sm"
                >
                  <span>{b.icon}</span>
                  <span>{b.label}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Hero Image Container: order-2 on Mobile, lg:col-span-5 */}
          <div className="lg:col-span-5 flex justify-center items-center w-full order-2">
            <div className="hero-image-frame relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">

              {/* Glassmorphism Frame with Orange/Silver Glow */}
              <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-[#333333]/90 via-[#262626]/95 to-[#1A1A1A]/90 border border-[#7E4010]/40 shadow-[0_0_40px_rgba(244,160,73,0.2),0_0_60px_rgba(220,220,220,0.1)] backdrop-blur-xl">

                {/* Circuit Corner Accents */}
                <div className="absolute -top-1.5 -left-1.5 w-4 h-4 rounded-tl-lg border-t-2 border-l-2 border-[#F4A049]" />
                <div className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-tr-lg border-t-2 border-r-2 border-[#DCDCDC]" />
                <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 rounded-bl-lg border-b-2 border-l-2 border-[#7E4010]" />
                <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 rounded-br-lg border-b-2 border-r-2 border-[#F4A049]" />

                {/* Continuous Floating Image Wrapper */}
                <div className="hero-image-floating relative w-full aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-[#141414] border border-[#7E4010]/30 animate-float">
                  <Image
                    src="/hero-tech.png"
                    alt="NexBridge Autonomous AI & Digital Systems Architecture"
                    fill
                    priority
                    className="object-cover rounded-xl sm:rounded-2xl scale-[1.02] hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 550px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Telemetry Pill */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-[#333333]/90 border border-[#DCDCDC]/20 backdrop-blur-md text-[9px] sm:text-[10px] font-mono text-[#DCDCDC] shadow-lg">
                    <Activity className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-[#F4A049] animate-pulse" />
                    <span>SYNAPSE MESH: ACTIVE</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F4A049] animate-ping" />
                  </div>

                  {/* Bottom Stats Overlay */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-[#333333]/95 border border-[#7E4010]/40 backdrop-blur-md flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <div className="p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-[#F4A049]/15 border border-[#F4A049]/30 text-[#F4A049]">
                        <BrainCircuit className="w-3 sm:w-4 h-3 sm:h-4" />
                      </div>
                      <div>
                        <span className="text-[8px] sm:text-[10px] font-mono uppercase tracking-wider text-[#DCDCDC]/80 block leading-tight">
                          Autonomous Core
                        </span>
                        <span className="text-[10px] sm:text-xs font-bold text-white">
                          Multi-Agent Synthesis
                        </span>
                      </div>
                    </div>
                    <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[9px] sm:text-[10px] font-mono font-bold bg-gradient-to-r from-[#F4A049] to-[#7E4010] text-white shadow-[0_0_15px_rgba(244,160,73,0.3)]">
                      99.99% UP
                    </span>
                  </div>
                </div>
              </div>

              {/* Ambient Backlight Halo in Brand Palette */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#F4A049]/20 via-[#7E4010]/15 to-[#DCDCDC]/10 rounded-3xl blur-2xl -z-10 opacity-70 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>

      {/* Interactive Scroll Cue */}
      <div className="mt-10 sm:mt-12 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[10px] font-mono text-[#DCDCDC]/60 tracking-widest uppercase">Scroll to Interact</span>
        <div className="w-5 h-8 rounded-full border border-[#7E4010]/50 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-[#F4A049] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
