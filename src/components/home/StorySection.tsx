"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { animate, stagger } from "animejs";
import {
  BrainCircuit,
  Sparkles,
  Terminal,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Network,
} from "lucide-react";

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    try {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              try {
                animate(".story-text-stagger", {
                  opacity: [0.7, 1],
                  translateY: [15, 0],
                  delay: stagger(80),
                  duration: 650,
                  ease: "outExpo",
                });
                animate(".story-metric-pill", {
                  scale: [0.95, 1],
                  delay: stagger(60, { start: 200 }),
                  duration: 450,
                  ease: "outBack",
                });
                if (pathRef.current) {
                  animate(pathRef.current, {
                    strokeDashoffset: [1000, 0],
                    duration: 2000,
                    ease: "inOutQuad",
                  });
                }
              } catch (err) {
                console.warn("Story animation error:", err);
              }
              observer.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );

      if (containerRef.current) observer.observe(containerRef.current);
      return () => observer.disconnect();
    } catch (e) {
      console.warn("IntersectionObserver skipped in StorySection:", e);
    }
  }, []);

  return (
    <section
      ref={containerRef}
      id="story"
      className="relative py-16 sm:py-24 lg:py-28 bg-[#181818] overflow-hidden border-t border-[#7E4010]/30"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#F4A049]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#7E4010]/15 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none" />

      {/* Decorative SVG Circuit Wave */}
      <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden">
        <svg className="w-full h-full min-w-[800px]" viewBox="0 0 1440 900" fill="none">
          <path
            ref={pathRef}
            d="M -100 450 C 300 200, 600 700, 950 350 C 1200 120, 1400 500, 1600 300"
            stroke="url(#story-gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="story-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F4A049" />
              <stop offset="50%" stopColor="#DCDCDC" />
              <stop offset="100%" stopColor="#7E4010" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Badge */}
        <div className="flex justify-center mb-7 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#333333] border border-[#F4A049]/40 text-[10px] sm:text-xs font-mono text-[#DCDCDC] shadow-[0_0_20px_rgba(244,160,73,0.15)]">
            <BrainCircuit className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#F4A049]" />
            <span className="text-white font-semibold hidden xs:inline">COMPANY ORIGIN &amp; ENGINEERING VISION</span>
            <span className="text-white font-semibold xs:hidden">OUR STORY</span>
            <span className="text-[#F4A049]">•</span>
            <span className="text-[#DCDCDC]/75 hidden sm:inline">Story Arc</span>
          </div>
        </div>

        {/* Narrative Flow - Responsive Dual-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left Arc: Origin & Philosophy */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="story-text-stagger">
              <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#F4A049] uppercase font-bold block mb-2">
                Chapter I — The Genesis of NexBridge
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Why Traditional Consulting{" "}
                <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] via-[#DCDCDC] to-[#7E4010]">
                  Fails Modern Software &amp; AI
                </span>
              </h2>
            </div>

            <div className="story-text-stagger text-[#DCDCDC]/90 text-sm sm:text-base lg:text-lg leading-relaxed space-y-4 sm:space-y-5">
              <p>
                NexBridge was created to solve a simple problem: most companies struggle to turn ideas into fast, secure, scalable digital products without excessive delays.
              </p>
              <p className="text-[#DCDCDC]/75 text-sm sm:text-base">
                Traditional consulting often leaves you with endless slides, bloated bills, and prototypes that break in real life. As a premier custom software development company and AI development agency, we focus exclusively on building working software that delivers measurable business growth.
              </p>
              <div className="pl-4 border-l-2 border-[#F4A049] text-white italic text-sm sm:text-base">
                &ldquo;We don&apos;t just give advice—we build production-grade web applications, custom mobile apps, and reliable AI systems that work seamlessly from day one.&rdquo;
              </div>
            </div>

            {/* Architecture Metrics Pills */}
            <div className="pt-2 flex flex-wrap gap-2 sm:gap-3">
              <div className="story-metric-pill px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-[#333333] border border-[#DCDCDC]/20 flex items-center gap-1.5 sm:gap-2">
                <Terminal className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#F4A049]" />
                <span className="text-[10px] sm:text-xs font-mono text-slate-200">Clean, Future-Proof Code</span>
              </div>
              <div className="story-metric-pill px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-[#333333] border border-[#DCDCDC]/20 flex items-center gap-1.5 sm:gap-2">
                <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#F4A049]" />
                <span className="text-[10px] sm:text-xs font-mono text-slate-200">Bank-Grade Security &amp; Compliance</span>
              </div>
              <div className="story-metric-pill px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-[#333333] border border-[#DCDCDC]/20 flex items-center gap-1.5 sm:gap-2">
                <Cpu className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#DCDCDC]" />
                <span className="text-[10px] sm:text-xs font-mono text-slate-200">Ultra-Fast Response Times</span>
              </div>
            </div>
          </div>

          {/* Right Arc: Architectural Vision & DNA */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 lg:pl-4">
            <div className="story-text-stagger">
              <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#F4A049] uppercase font-bold block mb-2">
                Chapter II — Our Delivery Philosophy
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                Senior Engineers Powered by AI-Assisted Acceleration
              </h3>
            </div>

            <div className="story-text-stagger text-[#DCDCDC]/90 text-sm sm:text-base leading-relaxed space-y-4 sm:space-y-5">
              <p>
                We combine experienced senior software engineers with modern AI automation tools. This gives your business the best of both worlds: lightning-fast delivery with rigorous human quality control.
              </p>
              <p className="text-[#DCDCDC]/75 text-sm">
                From custom SaaS platforms and mobile apps to enterprise cloud migrations, every system is thoroughly tested, securely deployed, and optimized for maximum speed and zero downtime.
              </p>
            </div>

            {/* Kinetic Quote Box */}
            <div className="story-text-stagger relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#333333] to-[#242424] border border-[#7E4010]/35 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 w-1 sm:w-1.5 bg-gradient-to-b from-[#F4A049] via-[#DCDCDC] to-[#7E4010]" />
              <div className="flex items-start gap-3 sm:gap-4 pl-2 sm:pl-0">
                <Network className="w-5 sm:w-6 h-5 sm:h-6 text-[#F4A049] shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white mb-1">Our Engineering Creed</h4>
                  <p className="text-xs text-[#DCDCDC]/80 leading-relaxed">
                    &ldquo;Software only creates real business value when it runs without downtime, protects your customer data, and scales effortlessly as you grow.&rdquo;
                  </p>
                  <span className="mt-2 sm:mt-3 block text-[10px] sm:text-[11px] font-mono text-[#F4A049]">
                    — The NexBridge Team
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Link */}
            <div className="story-text-stagger pt-2 sm:pt-4">
              <Link
                href="/about"
                className="group relative inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#F4A049] to-[#7E4010] shadow-[0_0_25px_rgba(244,160,73,0.4)] hover:shadow-[0_0_40px_rgba(244,160,73,0.65)] hover:scale-[1.02] transition-all duration-300"
              >
                <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-white animate-pulse" />
                <span>Discover Our Full Story &amp; Vision</span>
                <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
