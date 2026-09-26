"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "What services does NexBridge Tech Consulting offer?",
    a: "NexBridge is a full-service custom software development company and AI development agency. We build custom web applications, mobile apps (iOS & Android), enterprise SaaS platforms, CRM and ERP systems, AI-powered chatbots and automation tools, and cloud infrastructure on AWS, Azure, and Google Cloud. Every solution is engineered from scratch to match your exact business requirements.",
  },
  {
    q: "How does NexBridge build custom AI solutions and SaaS applications?",
    a: "We follow a structured, four-step process: Discovery & Architecture, Working Prototype, Full Software Build, and Zero-Downtime Launch. Our senior engineers integrate AI models (OpenAI, LangChain, custom ML pipelines) directly into your product. Every SaaS platform we build includes isolated multi-tenant data storage, automated billing via Stripe, user role management, and bank-grade security — all production-ready.",
  },
  {
    q: "How fast can NexBridge deliver a working software prototype?",
    a: "We deliver a fully clickable, testable prototype within 2 to 4 weeks of project kickoff. For smaller MVPs and AI proof-of-concept tools, we often launch a working demo in as little as 7 to 10 business days. Our AI-assisted engineering workflow allows us to move significantly faster than traditional development agencies without compromising on code quality or security.",
  },
  {
    q: "How do you ensure enterprise data security and compliance?",
    a: "Security is built into every layer of our development process — not added as an afterthought. We implement bank-grade encryption (AES-256 at rest, TLS 1.3 in transit), role-based access control, automated vulnerability scanning, and full audit logging. All systems are designed to meet SOC-2 alignment standards and GDPR/HIPAA compliance requirements where applicable. Every project includes a formal security audit before launch.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative py-16 sm:py-24 bg-[#181818] border-t border-[#7E4010]/30 overflow-hidden"
      itemScope
      itemType="https://schema.org/FAQPage"
      aria-label="Frequently Asked Questions about NexBridge Custom Software and AI Development"
    >
      {/* Ambient blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#F4A049]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#7E4010]/12 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#333333] border border-[#F4A049]/40 text-[10px] sm:text-xs font-mono text-[#DCDCDC] mb-4 shadow-[0_0_15px_rgba(244,160,73,0.15)]">
            <HelpCircle className="w-3.5 h-3.5 text-[#F4A049]" />
            <span className="text-white font-semibold">COMMON CLIENT QUESTIONS</span>
            <span className="text-[#F4A049]">•</span>
            <span className="text-[#DCDCDC]/75 hidden sm:inline">Answered in Plain English</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] via-[#DCDCDC] to-[#7E4010]">
              Questions
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#DCDCDC]/80 max-w-2xl mx-auto">
            Everything you need to know before starting your custom software or AI development project with NexBridge.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#F4A049]/60 bg-[#2A2A2A] shadow-[0_8px_30px_rgba(244,160,73,0.15)]"
                    : "border-[#DCDCDC]/15 bg-[#242424]/80 hover:border-[#F4A049]/40"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-sm sm:text-base font-semibold leading-snug transition-colors ${
                      isOpen ? "text-[#F4A049]" : "text-white"
                    }`}
                    itemProp="name"
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 w-7 h-7 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-[#F4A049] rotate-180"
                        : "bg-[#333333] border border-[#DCDCDC]/20"
                    }`}
                  >
                    <ChevronDown className={`w-4 h-4 ${isOpen ? "text-white" : "text-[#DCDCDC]"}`} />
                  </span>
                </button>

                {isOpen && (
                  <div
                    className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <div className="border-t border-[#DCDCDC]/10 pt-4">
                      <p
                        className="text-sm sm:text-base text-[#DCDCDC]/85 leading-relaxed"
                        itemProp="text"
                      >
                        {faq.a}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom nudge */}
        <p className="mt-8 sm:mt-10 text-center text-sm text-[#DCDCDC]/60 font-mono">
          Still have questions?{" "}
          <a
            href="/book-consultation"
            className="text-[#F4A049] hover:text-white underline underline-offset-4 transition-colors"
          >
            Book a free 30-minute discovery call
          </a>{" "}
          and speak directly with our engineers.
        </p>
      </div>
    </section>
  );
}
