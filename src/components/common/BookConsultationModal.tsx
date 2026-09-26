"use client";

import React, { useState, useEffect, useRef } from "react";
import { animate } from "animejs";
import {
  Sparkles, X, ChevronRight, ChevronLeft, CheckCircle2,
  Calendar, Clock, Target, User, ShieldCheck, Zap, BrainCircuit,
  ArrowRight
} from "lucide-react";

interface BookConsultationModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  triggerText?: string;
  triggerClassName?: string;
  showTrigger?: boolean;
}

const PROJECT_TYPES = [
  { id: "ai", label: "Autonomous AI & GenAI Systems", icon: <BrainCircuit className="w-4 h-4" /> },
  { id: "fullstack", label: "Full-Stack Web & Microservices", icon: <Zap className="w-4 h-4" /> },
  { id: "cloud", label: "Cloud Mesh & Kubernetes GitOps", icon: <Target className="w-4 h-4" /> },
  { id: "mobile", label: "Cross-Platform Mobile (iOS/Android)", icon: <ShieldCheck className="w-4 h-4" /> },
];

const TIME_SLOTS = ["09:00 AM", "11:00 AM", "01:30 PM", "03:30 PM", "05:00 PM"];

export default function BookConsultationModal({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
  triggerText = "Book Free Consultation",
  triggerClassName = "",
  showTrigger = true,
}: BookConsultationModalProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", company: "", details: "" });
  const [submitted, setSubmitted] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    if (!isControlled) setInternalIsOpen(true);
  };

  const handleClose = () => {
    if (isControlled && controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (modalRef.current) {
        animate(modalRef.current, {
          scale: [0.94, 1],
          opacity: [0, 1],
          duration: 300,
          ease: "outExpo",
        });
      }
    } else {
      document.body.style.overflow = "unset";
      setStep(1);
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {showTrigger && (
        <button
          type="button"
          onClick={handleOpen}
          className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#F4A049] to-[#7E4010] shadow-[0_0_20px_rgba(244,160,73,0.35)] hover:shadow-[0_0_30px_rgba(244,160,73,0.6)] hover:scale-105 transition-all cursor-pointer ${triggerClassName}`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{triggerText}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div
            ref={backdropRef}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <div
            ref={modalRef}
            className="relative w-full max-w-2xl rounded-3xl bg-[#333333] border border-[#DCDCDC]/20 shadow-[0_25px_60px_rgba(0,0,0,0.8)] p-6 sm:p-8 z-10 overflow-hidden text-[#DCDCDC]"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#F4A049]/15 to-[#7E4010]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header / Close */}
            <div className="flex items-center justify-between pb-4 border-b border-[#DCDCDC]/10 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#282828] border border-[#F4A049]/40 flex items-center justify-center text-[#F4A049]">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Technical Strategy Session
                </span>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="p-1.5 rounded-lg bg-[#282828] border border-[#DCDCDC]/15 text-[#DCDCDC]/70 hover:text-white hover:border-[#F4A049]/50 transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Success State */}
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#282828] border-2 border-[#F4A049] flex items-center justify-center mx-auto text-[#F4A049] shadow-[0_0_25px_rgba(244,160,73,0.4)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Strategy Session Confirmed!</h3>
                <p className="text-sm text-[#DCDCDC]/80 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. A calendar invitation and Zoom link for{" "}
                  <span className="text-[#F4A049] font-mono font-semibold">{selectedDate} ({selectedTime})</span> have been dispatched to{" "}
                  <span className="text-white font-semibold">{formData.email}</span>.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-6 py-2.5 rounded-xl bg-[#282828] border border-[#DCDCDC]/20 text-xs font-mono font-bold uppercase text-white hover:border-[#F4A049] transition-all"
                  >
                    Close Modal
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Step Indicators */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-mono text-center border transition-all ${
                        step === s
                          ? "bg-gradient-to-r from-[#F4A049] to-[#7E4010] text-white border-[#F4A049] font-bold shadow-md"
                          : step > s
                            ? "bg-[#282828] border-[#F4A049]/50 text-[#F4A049]"
                            : "bg-[#282828] border-[#DCDCDC]/10 text-[#DCDCDC]/40"
                      }`}
                    >
                      {s === 1 ? "1. Goal" : s === 2 ? "2. Schedule" : "3. Brief"}
                    </div>
                  ))}
                </div>

                {/* Step 1: Project Scope */}
                {step === 1 && (
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-white">Select Primary Technical Focus</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {PROJECT_TYPES.map((pt) => (
                        <button
                          key={pt.id}
                          type="button"
                          onClick={() => setProjectType(pt.id)}
                          className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                            projectType === pt.id
                              ? "bg-gradient-to-r from-[#333333] to-[#282828] border-[#F4A049] text-white shadow-[0_0_15px_rgba(244,160,73,0.3)] ring-1 ring-[#F4A049]"
                              : "bg-[#282828]/60 border-[#DCDCDC]/15 text-[#DCDCDC]/75 hover:border-[#F4A049]/50 hover:text-white"
                          }`}
                        >
                          <div className={`p-2 rounded-lg ${projectType === pt.id ? "bg-[#F4A049] text-black" : "bg-[#333333] text-[#F4A049]"}`}>
                            {pt.icon}
                          </div>
                          <span className="text-xs font-semibold">{pt.label}</span>
                        </button>
                      ))}
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        disabled={!projectType}
                        onClick={() => setStep(2)}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#F4A049] to-[#7E4010] text-white text-xs font-mono font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(244,160,73,0.4)] disabled:opacity-40 transition-all cursor-pointer"
                      >
                        <span>Choose Time Slot</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Date & Time Picker */}
                {step === 2 && (
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-white">Select Preferred Date & Time</h4>

                    <div>
                      <label className="block text-[11px] font-mono text-[#DCDCDC]/70 mb-1.5 uppercase">DATE *</label>
                      <input
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#282828] border border-[#DCDCDC]/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#F4A049] focus:ring-1 focus:ring-[#F4A049]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-[#DCDCDC]/70 mb-2 uppercase">AVAILABLE SLOTS *</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {TIME_SLOTS.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setSelectedTime(t)}
                            className={`py-2 px-3 rounded-xl text-xs font-mono border transition-all cursor-pointer ${
                              selectedTime === t
                                ? "bg-gradient-to-r from-[#F4A049] to-[#7E4010] border-[#F4A049] text-white shadow-md font-bold"
                                : "bg-[#282828] border-[#DCDCDC]/15 text-[#DCDCDC]/75 hover:border-[#F4A049]/50"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#282828] border border-[#DCDCDC]/15 text-xs font-mono text-[#DCDCDC] hover:text-white"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                        <span>Back</span>
                      </button>
                      <button
                        type="button"
                        disabled={!selectedDate || !selectedTime}
                        onClick={() => setStep(3)}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#F4A049] to-[#7E4010] text-white text-xs font-mono font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(244,160,73,0.4)] disabled:opacity-40 transition-all cursor-pointer"
                      >
                        <span>Contact Brief</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Details */}
                {step === 3 && (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-mono text-[#DCDCDC]/70 mb-1 uppercase">NAME *</label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                          placeholder="Alex Morgan"
                          className="w-full px-3.5 py-2 rounded-xl bg-[#282828] border border-[#DCDCDC]/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#F4A049] focus:ring-1 focus:ring-[#F4A049]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-[#DCDCDC]/70 mb-1 uppercase">WORK EMAIL *</label>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                          placeholder="alex@company.com"
                          className="w-full px-3.5 py-2 rounded-xl bg-[#282828] border border-[#DCDCDC]/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#F4A049] focus:ring-1 focus:ring-[#F4A049]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-[#DCDCDC]/70 mb-1 uppercase">COMPANY (OPTIONAL)</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData((p) => ({ ...p, company: e.target.value }))}
                        placeholder="Organization or Project Name"
                        className="w-full px-3.5 py-2 rounded-xl bg-[#282828] border border-[#DCDCDC]/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#F4A049] focus:ring-1 focus:ring-[#F4A049]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-[#DCDCDC]/70 mb-1 uppercase">TECHNICAL GOALS / CHALLENGES</label>
                      <textarea
                        rows={2}
                        value={formData.details}
                        onChange={(e) => setFormData((p) => ({ ...p, details: e.target.value }))}
                        placeholder="Current stack, latency targets, model constraints..."
                        className="w-full px-3.5 py-2 rounded-xl bg-[#282828] border border-[#DCDCDC]/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#F4A049] focus:ring-1 focus:ring-[#F4A049] resize-none"
                      />
                    </div>

                    <div className="pt-3 flex items-center justify-between border-t border-[#DCDCDC]/10">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#282828] border border-[#DCDCDC]/15 text-xs font-mono text-[#DCDCDC] hover:text-white"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                        <span>Back</span>
                      </button>
                      <button
                        type="submit"
                        disabled={!formData.name || !formData.email}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#F4A049] to-[#7E4010] text-white text-xs font-mono font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(244,160,73,0.5)] disabled:opacity-40 transition-all cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Confirm Booking</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
