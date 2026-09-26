"use client";

import React, { useState, useMemo } from "react";
import {
  Clock, ArrowRight, Search, Rss, Sparkles, Mail, CheckCircle2,
  BookOpen, User, Zap, ChevronDown, Download, SlidersHorizontal,
  Bot, Database, Check
} from "lucide-react";
import { BLOG_POSTS } from "@/data/blogData";

const FILTERS = ["All", "AI & Autonomous Systems", "Full-Stack Web", "Cloud & DevOps", "UI/UX Systems"] as const;

const SYSTEM_FAQS = [
  {
    q: "What is the difference between AI Search (RAG) and Custom Model Training?",
    a: "AI Search (RAG) connects an AI model directly to your company's live documents and databases. It gives instant, accurate answers with zero training cost. Custom model training teaches the AI new specialized behaviors or vocabulary from scratch, which is great for unique proprietary tasks but requires ongoing server and retraining costs. Most businesses start with AI Search for fast, low-cost results."
  },
  {
    q: "How do automated AI workflows deliver fast, accurate results?",
    a: "We design automated AI workflows using smart task routing and instant caching. Simpler questions are handled immediately by lightweight, ultra-fast models in under 250 milliseconds, while complex tasks are sent to advanced models like GPT-4o. This keeps response times ultra-fast while cutting overall API costs by up to 40%."
  },
  {
    q: "How do you guarantee zero downtime during cloud and software migrations?",
    a: "We run modern and legacy systems side-by-side during the migration process. Traffic is gradually shifted in small percentages while automated health checks monitor performance. If any issue is detected, traffic instantly routes back to the stable system, ensuring your customers experience 100% uptime with zero service interruptions."
  }
];

export default function InsightsClientUI() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState<number>(4);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Estimator State
  const [docCount, setDocCount] = useState<number>(50000);
  const [queryRps, setQueryRps] = useState<number>(20);

  // Newsletter State
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [leadDownloaded, setLeadDownloaded] = useState(false);

  // Cost & Latency Calculations
  const ragLatency = useMemo(() => Math.round(95 + (docCount / 100000) * 35), [docCount]);
  const ftLatency = useMemo(() => 140, []);
  const ragMonthlyCost = useMemo(() => Math.round(180 + (docCount * 0.002) + (queryRps * 35)), [docCount, queryRps]);
  const ftMonthlyCost = useMemo(() => Math.round(1200 + (queryRps * 48)), [queryRps]);

  const filtered = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesFilter = activeFilter === "All" || post.category === activeFilter;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const featured = filtered.find((p) => p.featured) ?? filtered[0];
  const rest = filtered.filter((p) => p.id !== featured?.id);
  const visibleRest = rest.slice(0, visibleCount);
  const hasMore = visibleCount < rest.length;

  return (
    <div className="min-h-screen bg-[#333333] text-[#DCDCDC]">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-16 sm:pb-20 overflow-hidden border-b border-[#7E4010]/30">
        <div className="absolute inset-0 cyber-grid-bg opacity-25 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#F4A049]/20 via-[#7E4010]/25 to-[#F4A049]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#282828] border border-[#F4A049]/40 text-xs font-mono text-[#F4A049] mb-6 shadow-[0_0_20px_rgba(244,160,73,0.25)]">
            <Rss className="w-3.5 h-3.5 text-[#F4A049]" />
            <span className="font-semibold text-[#DCDCDC]">SOFTWARE &amp; AI INSIGHTS</span>
            <span className="text-[#F4A049]">•</span>
            <span className="text-[#DCDCDC]/75">Expert Guides</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1] max-w-4xl mx-auto">
            Practical Tech Insights &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] via-[#DCDCDC] to-[#7E4010]">
              AI Architecture Guides
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#DCDCDC]/90 max-w-2xl mx-auto leading-relaxed">
            Actionable guides, real-world case studies, and practical technology advice from our custom software developers and enterprise AI consultants.
          </p>

          {/* Search & Tag Filter Bar */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-1.5 flex-wrap justify-center p-1.5 rounded-2xl bg-[#282828] border border-[#DCDCDC]/15 shadow-md">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => {
                    setActiveFilter(f);
                    setVisibleCount(4);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                    activeFilter === f
                      ? "bg-gradient-to-r from-[#F4A049] to-[#7E4010] text-white shadow-[0_0_15px_rgba(244,160,73,0.4)] scale-105"
                      : "text-[#DCDCDC]/75 hover:text-white hover:bg-[#333333]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-[#F4A049] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(4);
                }}
                placeholder="Search articles & topics..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#282828] border border-[#DCDCDC]/20 text-xs sm:text-sm text-white placeholder-[#DCDCDC]/50 focus:outline-none focus:border-[#F4A049] focus:ring-1 focus:ring-[#F4A049] transition-all shadow-inner"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED ARTICLE WITH KEY TAKEAWAYS ───────────────────────── */}
      {featured && (
        <section className="py-12 sm:py-16 bg-[#333333] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-xs font-mono text-[#F4A049] mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F4A049]" />
              <span className="uppercase tracking-wider">FEATURED GUIDE</span>
            </div>

            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#2C2C2C] via-[#222222] to-[#2C2C2C] border border-[#F4A049]/50 hover:border-[#F4A049] shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_0_35px_rgba(244,160,73,0.25)] transition-all group">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold text-[#F4A049] border border-[#F4A049]/40 bg-[#F4A049]/10">
                  {featured.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[#DCDCDC]/70">
                  <Clock className="w-3.5 h-3.5 text-[#F4A049]" />
                  {featured.readTime}
                </span>
                <span className="text-xs text-[#DCDCDC]/50">•</span>
                <span className="text-xs text-[#DCDCDC]/70">{featured.date}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 group-hover:text-[#F4A049] transition-colors max-w-4xl leading-tight">
                {featured.title}
              </h2>

              <p className="text-[#DCDCDC]/85 text-base sm:text-lg leading-relaxed max-w-4xl mb-8">
                {featured.excerpt}
              </p>

              {/* Executive Summary / Key Takeaways Box */}
              <div
                className="mb-8 p-5 sm:p-6 rounded-2xl bg-[#1e1e1e] border border-[#F4A049]/35"
                itemProp="abstract"
              >
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#F4A049] mb-3">
                  <Zap className="w-4 h-4 text-[#F4A049]" />
                  <span>Key Takeaways &amp; Executive Summary</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {featured.takeaways.map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#282828] border border-[#DCDCDC]/10 text-xs text-[#DCDCDC]">
                      <Check className="w-4 h-4 text-[#F4A049] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#DCDCDC]/15">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#333333] border border-[#F4A049]/40 flex items-center justify-center text-[#F4A049] font-bold text-sm">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{featured.author.name}</div>
                    <div className="text-[11px] font-mono text-[#DCDCDC]/60">{featured.author.role}</div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#F4A049] group-hover:text-white transition-colors">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── INTERACTIVE RAG VS FINE-TUNING ESTIMATOR ──────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#282828] border-y border-[#7E4010]/30 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#333333] border border-[#F4A049]/40 text-xs font-mono text-[#F4A049] mb-4 shadow-[0_0_15px_rgba(244,160,73,0.2)]">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#F4A049]" />
              <span className="text-white font-semibold">INTERACTIVE COST SIMULATOR</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              AI Document Search vs Custom Model:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] to-[#7E4010]">
                Speed &amp; Cloud Cost Estimator
              </span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#DCDCDC]/75">
              Compare estimated monthly cloud hosting costs and response speeds between live AI document search and dedicated custom model training.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#333333] border border-[#DCDCDC]/15 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Document Volume Slider */}
              <div className="p-4 rounded-xl bg-[#282828] border border-[#DCDCDC]/10">
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-[#DCDCDC]/80">Knowledge Base / Document Volume:</span>
                  <span className="text-[#F4A049] font-bold">{docCount.toLocaleString()} documents</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="500000"
                  step="5000"
                  value={docCount}
                  onChange={(e) => setDocCount(Number(e.target.value))}
                  className="w-full accent-[#F4A049] cursor-pointer"
                />
              </div>

              {/* Query RPS Slider */}
              <div className="p-4 rounded-xl bg-[#282828] border border-[#DCDCDC]/10">
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-[#DCDCDC]/80">Estimated User Traffic Load:</span>
                  <span className="text-[#F4A049] font-bold">{queryRps} queries/sec</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="150"
                  step="5"
                  value={queryRps}
                  onChange={(e) => setQueryRps(Number(e.target.value))}
                  className="w-full accent-[#F4A049] cursor-pointer"
                />
              </div>
            </div>

            {/* Architecture Comparison Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* RAG Architecture */}
              <div className="p-5 rounded-xl bg-[#282828] border border-[#F4A049]/40 relative">
                <div className="flex items-center gap-2 mb-3">
                  <Database className="w-4 h-4 text-[#F4A049]" />
                  <span className="text-sm font-bold text-white">Live AI Search (RAG)</span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#F4A049]/15 text-[#F4A049] ml-auto">
                    Recommended for Most Companies
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div>
                    <span className="text-[#DCDCDC]/60">Response Speed:</span>
                    <div className="text-base font-bold text-white mt-0.5">{ragLatency} ms</div>
                  </div>
                  <div>
                    <span className="text-[#DCDCDC]/60">Est. Monthly Cloud Cost:</span>
                    <div className="text-base font-bold text-[#F4A049] mt-0.5">${ragMonthlyCost} / mo</div>
                  </div>
                </div>
                <p className="mt-3 text-[11px] text-[#DCDCDC]/70">
                  Zero training fees. Connects directly to your company&apos;s files and databases for real-time accurate answers.
                </p>
              </div>

              {/* Custom Fine-Tuning */}
              <div className="p-5 rounded-xl bg-[#282828] border border-[#DCDCDC]/15">
                <div className="flex items-center gap-2 mb-3">
                  <Bot className="w-4 h-4 text-[#DCDCDC]" />
                  <span className="text-sm font-bold text-white">Custom Model Training</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div>
                    <span className="text-[#DCDCDC]/60">Response Speed:</span>
                    <div className="text-base font-bold text-white mt-0.5">{ftLatency} ms</div>
                  </div>
                  <div>
                    <span className="text-[#DCDCDC]/60">Est. Monthly Cloud Cost:</span>
                    <div className="text-base font-bold text-[#DCDCDC] mt-0.5">${ftMonthlyCost} / mo</div>
                  </div>
                </div>
                <p className="mt-3 text-[11px] text-[#DCDCDC]/70">
                  Ideal for proprietary tasks. Requires dedicated GPU servers and periodic model retraining.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE CARD GRID WITH PAGINATION ─────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#333333] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                All Articles, Case Studies &amp; Tech Guides
              </h2>
              <p className="text-xs text-[#DCDCDC]/70 mt-1">
                Showing {visibleRest.length} of {rest.length} articles
              </p>
            </div>

            {/* Category Lead Magnet Trigger */}
            <button
              onClick={() => setLeadDownloaded(true)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#282828] border border-[#F4A049]/40 text-xs font-mono text-[#F4A049] hover:bg-[#F4A049] hover:text-black transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{leadDownloaded ? "Whitepaper Sent to Email!" : "Download Architecture Whitepaper (PDF)"}</span>
            </button>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="w-12 h-12 text-[#F4A049]/50 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">No articles match your search</h3>
              <p className="text-xs text-[#DCDCDC]/60">Try clearing filters or adjusting your query terms.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleRest.map((post) => (
                <article
                  key={post.id}
                  className="flex flex-col p-6 rounded-2xl bg-[#282828] border border-[#DCDCDC]/15 hover:border-[#F4A049]/60 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(244,160,73,0.2)] transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold text-[#F4A049] border border-[#F4A049]/30 bg-[#F4A049]/10">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-[#DCDCDC]/60">
                      <Clock className="w-3 h-3 text-[#F4A049]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#F4A049] transition-colors mb-3 leading-snug flex-1">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#DCDCDC]/75 leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-4 border-t border-[#DCDCDC]/10 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold text-white">{post.author.name}</div>
                      <div className="text-[10px] font-mono text-[#DCDCDC]/50">{post.date}</div>
                    </div>
                    <span className="flex items-center gap-1 text-xs font-mono font-semibold text-[#F4A049] group-hover:gap-1.5 transition-all">
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Load More Pagination */}
          {hasMore && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setVisibleCount((prev) => prev + 3)}
                className="px-6 py-3 rounded-xl bg-[#282828] border border-[#F4A049]/50 text-xs font-mono font-bold text-white uppercase tracking-wider hover:bg-[#F4A049] hover:text-black hover:shadow-[0_0_20px_rgba(244,160,73,0.4)] transition-all cursor-pointer"
              >
                Load More Articles ({rest.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── HIGH-INTENT SYSTEM FAQ ACCORDION ─────────────────────────── */}
      <section className="py-20 bg-[#282828] border-t border-[#7E4010]/30 relative" aria-labelledby="insights-faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#333333] border border-[#F4A049]/40 text-xs font-mono text-[#F4A049] mb-4 shadow-[0_0_15px_rgba(244,160,73,0.2)]">
              <Zap className="w-3.5 h-3.5 text-[#F4A049]" />
              <span className="text-white font-semibold">COMMON QUESTIONS &amp; ADVICE</span>
            </div>
            <h2 id="insights-faq" className="text-2xl sm:text-3xl font-extrabold text-white">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] to-[#7E4010]">
                Questions About Software &amp; AI
              </span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#DCDCDC]/75">
              Clear, transparent answers to common questions about building custom software, AI apps, and scalable cloud systems.
            </p>
          </div>

          <div className="space-y-4">
            {SYSTEM_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#333333] border border-[#DCDCDC]/15 hover:border-[#F4A049]/50 transition-all cursor-pointer"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-sm sm:text-base font-bold text-white hover:text-[#F4A049] transition-colors">
                    {faq.q}
                  </h3>
                  <ChevronDown
                    className={`w-4 h-4 text-[#F4A049] shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openFaq === idx && (
                  <p className="mt-3 pt-3 border-t border-[#DCDCDC]/10 text-xs sm:text-sm text-[#DCDCDC]/85 leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGINEERING NEWSLETTER ───────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-[#333333] to-[#282828] border-t border-[#7E4010]/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#282828] border border-[#F4A049]/40 text-xs font-mono text-[#F4A049] mb-6 shadow-[0_0_15px_rgba(244,160,73,0.25)]">
            <Mail className="w-3.5 h-3.5 text-[#F4A049]" />
            <span>WEEKLY TECH &amp; AI BRIEFING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Stay Ahead with Modern{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] via-[#DCDCDC] to-[#7E4010]">
              Tech &amp; AI Strategies
            </span>
          </h2>

          <p className="text-[#DCDCDC]/80 mb-8 text-sm sm:text-base max-w-xl mx-auto">
            Practical advice on custom software development, enterprise AI adoption, and cloud scaling — delivered weekly to your inbox.
          </p>

          {subscribed ? (
            <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#282828] border border-emerald-500/50 text-emerald-400 font-semibold text-sm shadow-lg">
              <CheckCircle2 className="w-5 h-5" />
              <span>Subscribed! Welcome to the NexBridge Engineering Feed.</span>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="founder@company.com"
                className="flex-1 px-4 py-3 rounded-xl bg-[#282828] border border-[#DCDCDC]/20 text-white placeholder-[#DCDCDC]/50 text-sm focus:outline-none focus:border-[#F4A049] focus:ring-1 focus:ring-[#F4A049]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#F4A049] to-[#7E4010] text-white text-xs font-mono font-bold uppercase tracking-wider hover:shadow-[0_0_25px_rgba(244,160,73,0.5)] transition-all cursor-pointer shrink-0"
              >
                Subscribe Free
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
