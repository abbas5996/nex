"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { animate, stagger } from "animejs";
import {
  Cpu, ShieldCheck, ArrowRight, Rocket, Layers, GitMerge,
  Globe, Zap, Code2, BrainCircuit, Sparkles, Users, Target, Lightbulb
} from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";

const CORE_VALUES = [
  {
    id: "innovation",
    icon: <Lightbulb className="w-6 h-6 text-[#0066FF]" />,
    title: "Relentless Innovation",
    desc: "We pioneer at the intersection of AI research and enterprise engineering — from foundation model fine-tuning to autonomous multi-agent orchestration.",
    color: "from-blue-600/20 to-blue-900/10",
    border: "hover:border-[#0066FF]/60",
    glow: "hover:shadow-[0_10px_30px_-10px_rgba(0,102,255,0.35)]",
  },
  {
    id: "security",
    icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
    title: "Zero-Trust Security",
    desc: "SOC-2 Type II adherence, OWASP-grade threat modeling, end-to-end encryption, and zero-trust network architecture are non-negotiables in everything we build.",
    color: "from-cyan-600/20 to-cyan-900/10",
    border: "hover:border-cyan-500/60",
    glow: "hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.35)]",
  },
  {
    id: "scalability",
    icon: <Rocket className="w-6 h-6 text-purple-400" />,
    title: "Infinite Scalability",
    desc: "Kubernetes-native, event-driven, multi-region architectures designed to serve 10 users or 10 million with identical sub-50ms latency and 99.99% SLA.",
    color: "from-purple-600/20 to-purple-900/10",
    border: "hover:border-purple-500/60",
    glow: "hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.35)]",
  },
  {
    id: "ethics",
    icon: <Target className="w-6 h-6 text-[#FF007A]" />,
    title: "Ethical AI Governance",
    desc: "Responsible AI deployment with explainability frameworks, bias auditing pipelines, GDPR compliance, and human-in-the-loop guardrails at every model boundary.",
    color: "from-pink-600/20 to-pink-900/10",
    border: "hover:border-[#FF007A]/60",
    glow: "hover:shadow-[0_10px_30px_-10px_rgba(255,0,122,0.35)]",
  },
];

const DNA_PILLARS = [
  { icon: <Globe className="w-5 h-5" />, label: "Cloud-Native First", desc: "12-Factor App principles, serverless-ready, multi-cloud portable." },
  { icon: <Layers className="w-5 h-5" />, label: "Microservices Architecture", desc: "Domain-driven design, event sourcing, CQRS patterns." },
  { icon: <Code2 className="w-5 h-5" />, label: "Clean Code Doctrine", desc: "SOLID principles, DRY, zero tech-debt engineering culture." },
  { icon: <BrainCircuit className="w-5 h-5" />, label: "AI-Augmented Dev", desc: "LLM-assisted engineering, semantic code review, AI test generation." },
  { icon: <GitMerge className="w-5 h-5" />, label: "CI/CD Velocity", desc: "Blue-green deploys, canary releases, automated rollback pipelines." },
  { icon: <Users className="w-5 h-5" />, label: "Human-Centered UX", desc: "Accessibility-first, WCAG 2.1 AA, inclusive design systems." },
];

const COUNTERS = [
  { label: "SLA Uptime Guarantee", target: 99.99, suffix: "%", decimals: 2, color: "text-[#0066FF]" },
  { label: "Cloud Scalability", target: 100, suffix: "%", decimals: 0, color: "text-[#FF007A]" },
  { label: "Projects Delivered", target: 150, suffix: "+", decimals: 0, color: "text-cyan-400" },
  { label: "Enterprise Clients", target: 60, suffix: "+", decimals: 0, color: "text-purple-400" },
];

function CounterStat({ label, target, suffix, decimals, color }: typeof COUNTERS[0]) {
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          const obj = { v: 0 };
          animate(obj, {
            v: [0, target],
            duration: 2000,
            ease: "outQuad",
            onUpdate: () => {
              if (ref.current) {
                ref.current.textContent = `${obj.v.toFixed(decimals)}${suffix}`;
              }
            },
          });
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, suffix, decimals]);

  return (
    <div className="text-center p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all">
      <span ref={ref} className={`text-4xl sm:text-5xl font-extrabold font-mono ${color}`}>
        0{suffix}
      </span>
      <div className="mt-3 text-sm text-slate-400 font-medium">{label}</div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0B0F17]">
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden cyber-grid-bg">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#0066FF]/20 via-purple-600/15 to-[#FF007A]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-mono text-[#0066FF] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#FF007A]" />
            <span>ABOUT NEXBRIDGE TECH CONSULTING</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1]">
            Pioneering the Synergy of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-purple-400 to-[#FF007A]">
              Human Expertise & Artificial Intelligence
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            NexBridge architects the future where breakthrough AI intelligence amplifies elite human engineering — delivering enterprise systems that scale to infinity and adapt in real time.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <GlowButton href="/book-consultation" variant="primary" size="lg" icon>
              Book Free Consultation
            </GlowButton>
            <GlowButton href="/services" variant="secondary" size="lg">
              Explore Our Services
            </GlowButton>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-24 bg-[#070A0F] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-[#FF007A] mb-4">
              <Target className="w-3.5 h-3.5" />
              <span>FOUNDATIONAL PRINCIPLES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              The Four Pillars of Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#FF007A]">Engineering DNA</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CORE_VALUES.map((val) => (
              <div
                key={val.id}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br ${val.color} border border-slate-800 ${val.border} ${val.glow} transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/20 transition-all" />
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 group-hover:scale-110 transition-transform shrink-0">
                    {val.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{val.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering DNA / Architectural Philosophy */}
      <section className="py-24 bg-[#0B0F17] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-[#0066FF] mb-6">
                <Code2 className="w-3.5 h-3.5" />
                <span>ARCHITECTURAL PHILOSOPHY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
                Engineering DNA Built for the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#0066FF]">Next Decade</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Every line of code, every deployment pipeline, every AI model we ship is anchored in battle-tested architectural principles — ensuring your platform remains maintainable, auditable, and infinitely scalable as your ambitions grow.
              </p>
              <GlowButton href="/process" variant="secondary" size="md" icon>
                View Our Engineering Process
              </GlowButton>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DNA_PILLARS.map((pillar) => (
                <div
                  key={pillar.label}
                  className="group p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-[#0066FF]/40 transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-[#0066FF] group-hover:scale-110 transition-transform">
                      {pillar.icon}
                    </div>
                    <h4 className="text-sm font-bold text-white">{pillar.label}</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capability Counters */}
      <section className="py-24 bg-[#070A0F] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-400 mb-4">
              <Zap className="w-3.5 h-3.5" />
              <span>CAPABILITY METRICS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Numbers That Define Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#FF007A]">Engineering Standard</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {COUNTERS.map((c) => (
              <CounterStat key={c.label} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#0B0F17] border-t border-slate-800/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Architect Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#FF007A]">Competitive Edge?</span>
          </h2>
          <p className="text-slate-400 mb-10 text-base sm:text-lg">
            Schedule a zero-obligation technical strategy session with our Principal AI & Full-Stack Architects.
          </p>
          <GlowButton href="/book-consultation" variant="primary" size="lg" icon>
            Book Free Consultation
          </GlowButton>
        </div>
      </section>
    </div>
  );
}
