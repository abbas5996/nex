"use client";

import React, { useState, useRef, useEffect } from "react";
import { animate } from "animejs";
import {
  Mail, Clock, MapPin, ShieldCheck, ArrowRight,
  CheckCircle2, Sparkles, Send, Phone, Lock, Terminal
} from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";

const SERVICES = [
  "Enterprise AI & Autonomous Systems",
  "Full-Stack Web & Polyglot Engineering",
  "Cloud Infrastructure, Kubernetes & DevOps",
  "Custom SaaS Enterprise Platforms",
  "Mobile & Cross-Platform Apps (React Native / Flutter)",
  "Vector Database & High-Throughput Data Engineering",
];

const BUDGETS = ["< $15k", "$15k – $35k", "$35k – $80k", "$80k – $150k", "$150k+", "Enterprise Retainer"];

function FloatInput({
  label, type = "text", value, onChange, required = false, placeholder = ""
}: {
  label: string; type?: string; value: string; onChange: (v: string) => void;
  required?: boolean; placeholder?: string;
}) {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;
  return (
    <div className="relative">
      <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${
        focused || hasValue
          ? "-top-2.5 text-[10px] font-mono font-bold text-[#F4A049] bg-[#333333] px-1 z-10"
          : "top-3.5 text-xs sm:text-sm text-[#DCDCDC]/60"
      }`}>
        {label}{required && " *"}
      </label>
      <input
        type={type}
        value={value}
        required={required}
        placeholder={focused ? placeholder : ""}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 pt-4 pb-3 rounded-xl bg-[#333333] border border-[#DCDCDC]/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#F4A049] focus:ring-1 focus:ring-[#F4A049] transition-all shadow-inner"
      />
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", budget: "", details: "" });
  const [submitted, setSubmitted] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted && successRef.current) {
      animate(successRef.current, {
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 600,
        ease: "outBack",
      });
    }
  }, [submitted]);

  const set = (k: keyof typeof form) => (v: string) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <div className="min-h-screen bg-[#333333] text-[#DCDCDC]">
      {/* Structured SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact NexBridge Tech Consulting",
            "description": "Direct communication with Senior Technical Principals and AI Architects.",
            "mainEntity": {
              "@type": "Organization",
              "name": "NexBridge Tech Consulting",
              "email": "contact@nexbridgetechconsulting.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Technical Consulting & Sales",
                "email": "contact@nexbridgetechconsulting.com",
                "availableLanguage": ["English"]
              }
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-36 pb-16 sm:pb-20 overflow-hidden border-b border-[#7E4010]/30">
        <div className="absolute inset-0 cyber-grid-bg opacity-25 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#F4A049]/20 via-[#7E4010]/25 to-[#F4A049]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#333333]/90 border border-[#F4A049]/40 text-xs font-mono text-[#F4A049] mb-6 shadow-[0_0_20px_rgba(244,160,73,0.25)]">
            <Sparkles className="w-3.5 h-3.5 text-[#F4A049]" />
            <span className="font-semibold text-[#DCDCDC]">DIRECT PRINCIPAL ACCESS</span>
            <span className="text-[#F4A049]">•</span>
            <span className="text-[#DCDCDC]/75">No Sales Middlemen</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]">
            Let&apos;s Architect Your Next{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] via-[#DCDCDC] to-[#7E4010]">
              Technology Advantage
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#DCDCDC]/90 max-w-2xl mx-auto leading-relaxed">
            Reach our engineering leadership directly. Expect a comprehensive technical response from a Senior Principal within 24 business hours.
          </p>
        </div>
      </section>

      {/* Two-Column Form & Direct Channels */}
      <section className="py-16 sm:py-24 bg-[#333333] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 sm:gap-12">

            {/* Left Column: Direct Access & Channels */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-white mb-2">Direct Access to Principals</h2>
                <p className="text-[#DCDCDC]/80 text-sm leading-relaxed">
                  Every inquiry is reviewed directly by senior software architects and AI specialists — not marketing intermediaries.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:contact@nexbridgetechconsulting.com"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-[#333333] border border-[#DCDCDC]/15 hover:border-[#F4A049]/60 hover:shadow-[0_0_20px_rgba(244,160,73,0.25)] transition-all group"
                >
                  <div className="p-3 rounded-xl bg-[#282828] border border-[#F4A049]/30 text-[#F4A049] group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#F4A049] uppercase tracking-wider mb-0.5">DIRECT EMAIL</div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#F4A049] transition-colors">
                      contact@nexbridgetechconsulting.com
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#333333] border border-[#DCDCDC]/15">
                  <div className="p-3 rounded-xl bg-[#282828] border border-[#7E4010]/50 text-[#F4A049]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#F4A049] uppercase tracking-wider mb-0.5">SLA GUARANTEE</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">&lt; 24 Business Hours — Principal Response</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#333333] border border-[#DCDCDC]/15">
                  <div className="p-3 rounded-xl bg-[#282828] border border-[#DCDCDC]/20 text-[#DCDCDC]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#DCDCDC]/60 uppercase tracking-wider mb-0.5">GLOBAL ENGINEERING HUBS</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">San Francisco, CA • Remote Global</div>
                    <div className="text-[11px] text-[#DCDCDC]/50 mt-0.5">NYC • London • Dubai • Singapore</div>
                  </div>
                </div>
              </div>

              {/* Consultation Prompt Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#333333] via-[#282828] to-[#333333] border border-[#F4A049]/40 shadow-lg">
                <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#F4A049]" />
                  <span>Need an Immediate Architecture Session?</span>
                </h3>
                <p className="text-xs text-[#DCDCDC]/80 mb-4 leading-relaxed">
                  Skip the contact form and lock in a direct 1-on-1 strategy deep dive on our live calendar.
                </p>
                <GlowButton href="/book-consultation" variant="primary" size="sm" icon>
                  Book 60-Min Strategy Session
                </GlowButton>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div
                  ref={successRef}
                  className="flex flex-col items-center justify-center text-center p-8 sm:p-12 rounded-3xl bg-[#333333] border border-[#F4A049]/60 shadow-[0_15px_40px_rgba(0,0,0,0.6)] h-full min-h-[420px]"
                  style={{ opacity: 0 }}
                >
                  <div className="w-16 h-16 rounded-full bg-[#282828] border-2 border-[#F4A049] flex items-center justify-center mb-6 text-[#F4A049] shadow-[0_0_20px_rgba(244,160,73,0.4)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Dispatched!</h3>
                  <p className="text-[#DCDCDC]/85 max-w-md text-sm leading-relaxed mb-6">
                    Thank you, <span className="text-white font-semibold">{form.name}</span>. A Principal Technical Architect has received your specs and will respond to{" "}
                    <span className="text-[#F4A049] font-semibold">{form.email}</span> within 24 hours.
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-[#DCDCDC]/60 bg-[#282828] px-4 py-2 rounded-xl border border-[#DCDCDC]/15">
                    <Lock className="w-3.5 h-3.5 text-[#F4A049]" />
                    <span>Non-Disclosure Agreement Protected</span>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-7 sm:p-10 rounded-3xl bg-[#333333] border border-[#DCDCDC]/15 shadow-[0_15px_40px_rgba(0,0,0,0.6)] space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FloatInput label="Full Name" value={form.name} onChange={set("name")} required placeholder="Alex Morgan" />
                    <FloatInput label="Business Email" type="email" value={form.email} onChange={set("email")} required placeholder="alex@company.com" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FloatInput label="Phone (Optional)" type="tel" value={form.phone} onChange={set("phone")} placeholder="+1 555 000 0000" />
                    <div className="relative">
                      <label className="block text-[11px] font-mono text-[#DCDCDC]/70 mb-1.5 uppercase">Primary Domain *</label>
                      <select
                        required
                        value={form.service}
                        onChange={(e) => set("service")(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#333333] border border-[#DCDCDC]/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#F4A049] focus:ring-1 focus:ring-[#F4A049] transition-all"
                      >
                        <option value="" className="bg-[#282828]">Select capability domain...</option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s} className="bg-[#282828]">
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#DCDCDC]/70 mb-2 uppercase">Estimated Budget Scope</label>
                    <div className="flex flex-wrap gap-2">
                      {BUDGETS.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => set("budget")(b)}
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-mono border transition-all cursor-pointer ${
                            form.budget === b
                              ? "bg-gradient-to-r from-[#F4A049] to-[#7E4010] border-[#F4A049] text-white shadow-[0_0_12px_rgba(244,160,73,0.4)]"
                              : "bg-[#282828] border-[#DCDCDC]/15 text-[#DCDCDC]/75 hover:border-[#F4A049]/50 hover:text-white"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#DCDCDC]/70 mb-1.5 uppercase">Technical Problem & Vision *</label>
                    <textarea
                      required
                      rows={4}
                      value={form.details}
                      onChange={(e) => set("details")(e.target.value)}
                      placeholder="Outline your current tech stack, concurrency bottlenecks, model latency goals, or system scaling targets..."
                      className="w-full px-4 py-3 rounded-xl bg-[#333333] border border-[#DCDCDC]/20 text-white text-xs sm:text-sm placeholder-[#DCDCDC]/50 focus:outline-none focus:border-[#F4A049] focus:ring-1 focus:ring-[#F4A049] transition-all resize-none shadow-inner"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-[#DCDCDC]/10">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#DCDCDC]/60">
                      <ShieldCheck className="w-4 h-4 text-[#F4A049]" />
                      <span>Confidentiality & NDA Guaranteed</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#F4A049] to-[#7E4010] text-white font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_25px_rgba(244,160,73,0.5)] hover:scale-105 transition-all cursor-pointer shadow-lg"
                    >
                      <Send className="w-4 h-4" />
                      <span>Dispatch Request</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
