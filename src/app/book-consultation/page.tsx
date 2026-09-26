"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { animate } from "animejs";
import {
  ArrowLeft, Sparkles, CheckCircle2, ChevronRight, ChevronLeft,
  Target, Calendar, User, Clock, ShieldCheck, Zap, BrainCircuit,
  Lock, Terminal
} from "lucide-react";

const PROJECT_TYPES = [
  { id: "ai", label: "Enterprise AI & GenAI Swarms", icon: <BrainCircuit className="w-5 h-5" /> },
  { id: "fullstack", label: "Full-Stack Web & Microservices", icon: <Zap className="w-5 h-5" /> },
  { id: "cloud", label: "Cloud Infrastructure & Kubernetes", icon: <Target className="w-5 h-5" /> },
  { id: "mobile", label: "Cross-Platform Mobile Apps", icon: <ShieldCheck className="w-5 h-5" /> },
  { id: "saas", label: "Custom SaaS Enterprise Platform", icon: <BrainCircuit className="w-5 h-5" /> },
  { id: "data", label: "Vector Database & Data Mesh", icon: <Zap className="w-5 h-5" /> },
];

const TIME_SLOTS = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM", "05:30 PM"];

const WHAT_NEXT = [
  { step: "01", title: "Instant Calendar Dispatch", desc: "Receive a calendar invite with a dedicated Google Meet/Zoom video bridge within 5 minutes." },
  { step: "02", title: "Pre-Session Architecture Review", desc: "Our technical principals analyze your requirements to prepare system recommendations in advance." },
  { step: "03", title: "60-Min Strategy Deep-Dive", desc: "Direct 1-on-1 technical review with a Senior AI Architect or Principal Systems Engineer." },
  { step: "04", title: "Architecture RFC & Cost Spec", desc: "Within 48 hours, you receive a documented architecture diagram, tech stack proposal, and roadmap." },
];

function CheckmarkSuccess({ name, date, time }: { name: string; date: string; time: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    animate(ref.current, {
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 600,
      ease: "outBack",
    });
  }, []);

  return (
    <div ref={ref} className="text-center py-12" style={{ opacity: 0 }}>
      <div className="relative inline-block mb-6">
        <div className="w-20 h-20 rounded-full bg-[#282828] border-2 border-[#F4A049] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(244,160,73,0.4)]">
          <CheckCircle2 className="w-10 h-10 text-[#F4A049]" />
        </div>
      </div>
      <h2 className="text-3xl font-extrabold text-white mb-2">Strategy Session Confirmed!</h2>
      <p className="text-[#DCDCDC]/85 max-w-md mx-auto text-sm mb-8 leading-relaxed">
        Your strategy session has been locked in, <span className="text-white font-semibold">{name}</span>. We will meet on{" "}
        <span className="text-[#F4A049] font-mono font-semibold">{date} at {time}</span>. Check your email for the calendar invite.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#333333] border border-[#DCDCDC]/20 hover:border-[#F4A049] text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-[#F4A049] transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home</span>
      </Link>
    </div>
  );
}

export default function BookConsultationPage() {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [form, setForm] = useState({ name: "", email: "", company: "", details: "" });
  const [submitted, setSubmitted] = useState(false);

  const canProceed1 = !!projectType;
  const canProceed2 = !!selectedDate && !!selectedTime;
  const canProceed3 = form.name && form.email;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#333333] text-[#DCDCDC] flex flex-col items-center justify-center px-4 pt-24 pb-20">
        <CheckmarkSuccess name={form.name} date={selectedDate} time={selectedTime} />

        {/* What Happens Next */}
        <div className="max-w-3xl w-full mt-12 px-4">
          <h3 className="text-xl font-bold text-white text-center mb-6">What Happens Next?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHAT_NEXT.map((item) => (
              <div key={item.step} className="p-5 rounded-2xl bg-[#333333] border border-[#DCDCDC]/15 shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] to-[#7E4010]">
                    {item.step}
                  </span>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                </div>
                <p className="text-xs text-[#DCDCDC]/75 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#333333] text-[#DCDCDC] pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Nav */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#DCDCDC]/70 hover:text-[#F4A049] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO HOME</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#282828] border border-[#F4A049]/40 text-[11px] font-mono text-[#F4A049]">
            <Sparkles className="w-3 h-3 text-[#F4A049]" />
            <span>FREE 60-MIN SESSION</span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-[1.15]">
            Schedule a 1-on-1{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] via-[#DCDCDC] to-[#7E4010]">
              Technical Strategy Session
            </span>
          </h1>
          <p className="mt-4 text-[#DCDCDC]/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Direct access to a Senior AI Architect or Principal Systems Engineer. No sales friction — pure architectural roadmap.
          </p>
        </div>

        {/* Step Progress Header */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8">
          {[1, 2, 3].map((s) => (
            <React.Fragment key={s}>
              <div
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono font-bold transition-all ${
                  step === s
                    ? "bg-gradient-to-r from-[#F4A049] to-[#7E4010] text-white shadow-[0_0_15px_rgba(244,160,73,0.4)]"
                    : step > s
                      ? "bg-[#282828] border border-[#F4A049]/50 text-[#F4A049]"
                      : "bg-[#282828] border border-[#DCDCDC]/15 text-[#DCDCDC]/50"
                }`}
              >
                {step > s ? (
                  <CheckCircle2 className="w-3.5 h-3.5" />
                ) : (
                  <span>
                    {s === 1 ? <Target className="w-3.5 h-3.5" /> : s === 2 ? <Calendar className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                  </span>
                )}
                <span className="hidden sm:inline">
                  {s === 1 ? "Project Focus" : s === 2 ? "Date & Time" : "Contact Brief"}
                </span>
                <span className="sm:hidden">Step {s}</span>
              </div>
              {s < 3 && <ChevronRight className="w-4 h-4 text-[#DCDCDC]/30" />}
            </React.Fragment>
          ))}
        </div>

        {/* Step Card */}
        <div className="p-7 sm:p-10 rounded-3xl bg-[#333333] border border-[#DCDCDC]/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          {/* STEP 1 */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Select Your Primary Engineering Focus</h2>
              <p className="text-[#DCDCDC]/75 text-xs sm:text-sm mb-6">Choose the domain you would like to analyze during the strategy session.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {PROJECT_TYPES.map((pt) => (
                  <button
                    key={pt.id}
                    onClick={() => setProjectType(pt.id)}
                    className={`flex items-center gap-3.5 p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
                      projectType === pt.id
                        ? "bg-gradient-to-br from-[#333333] to-[#282828] border-[#F4A049] text-white shadow-[0_0_15px_rgba(244,160,73,0.3)] ring-1 ring-[#F4A049]"
                        : "bg-[#282828]/70 border-[#DCDCDC]/15 text-[#DCDCDC]/75 hover:border-[#F4A049]/50 hover:text-white"
                    }`}
                  >
                    <div className={projectType === pt.id ? "text-[#F4A049]" : "text-[#DCDCDC]/50"}>
                      {pt.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold">{pt.label}</span>
                    {projectType === pt.id && <CheckCircle2 className="w-4 h-4 ml-auto text-[#F4A049]" />}
                  </button>
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  disabled={!canProceed1}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F4A049] to-[#7E4010] text-white font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(244,160,73,0.5)] disabled:opacity-40 transition-all cursor-pointer shadow-lg"
                >
                  <span>Select Date & Time</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Select Your Time Slot</h2>
              <p className="text-[#DCDCDC]/75 text-xs sm:text-sm mb-6">Choose an available slot. Times synchronize automatically to your locale.</p>

              <div className="mb-6">
                <label className="block text-[11px] font-mono text-[#DCDCDC]/70 mb-2 uppercase">PREFERRED DATE *</label>
                <input
                  type="date"
                  value={selectedDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full sm:w-72 px-4 py-3 rounded-xl bg-[#282828] border border-[#DCDCDC]/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#F4A049] focus:ring-1 focus:ring-[#F4A049]"
                />
              </div>

              <div className="mb-8">
                <label className="block text-[11px] font-mono text-[#DCDCDC]/70 mb-3 uppercase">AVAILABLE SLOTS *</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {TIME_SLOTS.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`py-3 rounded-xl text-xs font-mono font-bold border transition-all cursor-pointer ${
                        selectedTime === t
                          ? "bg-gradient-to-r from-[#F4A049] to-[#7E4010] border-[#F4A049] text-white shadow-md"
                          : "bg-[#282828] border-[#DCDCDC]/15 text-[#DCDCDC]/75 hover:border-[#F4A049]/50 hover:text-white"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#282828] border border-[#DCDCDC]/15 text-xs font-mono text-[#DCDCDC] hover:text-white transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!canProceed2}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F4A049] to-[#7E4010] text-white font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(244,160,73,0.5)] disabled:opacity-40 transition-all cursor-pointer shadow-lg"
                >
                  <span>Continue to Brief</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <form onSubmit={handleSubmit}>
              <h2 className="text-xl font-bold text-white mb-2">Technical Brief & Contact Details</h2>
              <p className="text-[#DCDCDC]/75 text-xs sm:text-sm mb-6">Provide technical context so our architects can prepare a customized analysis.</p>

              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-[#DCDCDC]/70 mb-1.5 uppercase">FULL NAME *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      placeholder="Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-[#282828] border border-[#DCDCDC]/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#F4A049] focus:ring-1 focus:ring-[#F4A049]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-[#DCDCDC]/70 mb-1.5 uppercase">WORK EMAIL *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#282828] border border-[#DCDCDC]/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#F4A049] focus:ring-1 focus:ring-[#F4A049]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-[#DCDCDC]/70 mb-1.5 uppercase">COMPANY / ORGANIZATION</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                    placeholder="Company Name"
                    className="w-full px-4 py-3 rounded-xl bg-[#282828] border border-[#DCDCDC]/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#F4A049] focus:ring-1 focus:ring-[#F4A049]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-[#DCDCDC]/70 mb-1.5 uppercase">SYSTEM GOALS / CONSTRAINTS</label>
                  <textarea
                    rows={3}
                    value={form.details}
                    onChange={(e) => setForm((p) => ({ ...p, details: e.target.value }))}
                    placeholder="Current stack, LLM latency budgets, concurrency requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-[#282828] border border-[#DCDCDC]/20 text-white text-xs sm:text-sm placeholder-[#DCDCDC]/50 focus:outline-none focus:border-[#F4A049] focus:ring-1 focus:ring-[#F4A049] resize-none"
                  />
                </div>
              </div>

              {/* Summary Pill */}
              <div className="p-4 rounded-xl bg-[#282828] border border-[#DCDCDC]/15 text-xs font-mono text-[#DCDCDC] mb-6 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#F4A049]" />
                  <span>{selectedDate} at {selectedTime}</span>
                </div>
                <div className="flex items-center gap-2 text-[#F4A049]">
                  <Target className="w-3.5 h-3.5" />
                  <span>{PROJECT_TYPES.find((p) => p.id === projectType)?.label}</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#282828] border border-[#DCDCDC]/15 text-xs font-mono text-[#DCDCDC] hover:text-white transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  disabled={!canProceed3}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-[#F4A049] to-[#7E4010] text-white font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_25px_rgba(244,160,73,0.5)] disabled:opacity-40 transition-all cursor-pointer shadow-lg"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Confirm Strategy Session</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
