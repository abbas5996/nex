"use client";

import React, { useState, useEffect, useRef, useTransition, MouseEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { animate, stagger } from "animejs";
import {
  Boxes,
  Workflow,
  DatabaseZap,
  Globe,
  Terminal,
  Radio,
  Cpu,
  Flame,
  Layout,
  ShieldCheck,
  Palette,
  FileCode,
  Sparkles,
  Server,
  Layers,
  Binary,
  Zap,
  Network,
  Activity,
  Database,
  Bot,
  Cloud,
  Package,
  HardDrive,
  ArrowUpRight,
  ChevronRight,
  GitBranch,
} from "lucide-react";

export type CategoryId = "all" | "frontend" | "backend" | "fullstack" | "aiml" | "cloud";

export interface TechItem {
  id: string;
  name: string;
  category: CategoryId;
  tag: string;
  level: string;
  icon: React.ReactNode;
  accent: string;
}

export interface EnterpriseSolution {
  id: string;
  title: string;
  badge: string;
  category: CategoryId;
  tagline: string;
  description: string;
  seoKeyword: string;
  metrics: string;
  capabilities: string[];
  gradient: string;
  glowColor: string;
  circuitColor: string;
  icon: React.ReactNode;
  colSpan: string;
}

const MARQUEE_TECHS: TechItem[] = [
  // Frontend
  { id: "react", name: "React.js", category: "frontend", tag: "Concurrent UI", level: "Enterprise Tier", accent: "#F4A049", icon: <Boxes className="w-4 h-4 text-[#F4A049]" /> },
  { id: "nextjs", name: "Next.js", category: "frontend", tag: "App Router / SSR", level: "Core Platform", accent: "#FFFFFF", icon: <Flame className="w-4 h-4 text-[#DCDCDC]" /> },
  { id: "vue", name: "Vue.js", category: "frontend", tag: "Reactive Core", level: "Production Grade", accent: "#42B883", icon: <Layout className="w-4 h-4 text-emerald-400" /> },
  { id: "angular", name: "Angular", category: "frontend", tag: "Strict DI", level: "Corporate Spec", accent: "#DD0031", icon: <ShieldCheck className="w-4 h-4 text-rose-500" /> },
  { id: "html5", name: "HTML5", category: "frontend", tag: "Semantic DOM", level: "A11y Compliant", accent: "#E34F26", icon: <Globe className="w-4 h-4 text-orange-500" /> },
  { id: "css3", name: "CSS3", category: "frontend", tag: "GPU Accelerated", level: "Hardware Layer", accent: "#1572B6", icon: <Palette className="w-4 h-4 text-sky-400" /> },
  { id: "javascript", name: "JavaScript", category: "frontend", tag: "ESNext V8", level: "Universal runtime", accent: "#F7DF1E", icon: <FileCode className="w-4 h-4 text-yellow-400" /> },
  { id: "typescript", name: "TypeScript", category: "frontend", tag: "Static Typings", level: "Strict Standard", accent: "#3178C6", icon: <Cpu className="w-4 h-4 text-blue-400" /> },
  { id: "tailwind", name: "Tailwind CSS", category: "frontend", tag: "Utility Mesh", level: "Sub-millisecond JIT", accent: "#F4A049", icon: <Sparkles className="w-4 h-4 text-[#F4A049]" /> },

  // Backend
  { id: "nodejs", name: "Node.js", category: "backend", tag: "Event Loop", level: "Non-blocking I/O", accent: "#339933", icon: <Server className="w-4 h-4 text-green-500" /> },
  { id: "express", name: "Express.js", category: "backend", tag: "REST Middleware", level: "Micro-Routing", accent: "#DCDCDC", icon: <Layers className="w-4 h-4 text-[#DCDCDC]" /> },
  { id: "python", name: "Python (Django/FastAPI)", category: "backend", tag: "Async ASGI", level: "High Throughput", accent: "#3776AB", icon: <Terminal className="w-4 h-4 text-yellow-500" /> },
  { id: "java", name: "Java (Spring Boot)", category: "backend", tag: "Enterprise JVM", level: "Fault Tolerant", accent: "#F4A049", icon: <Binary className="w-4 h-4 text-[#F4A049]" /> },
  { id: "php", name: "PHP (Laravel)", category: "backend", tag: "Eloquent Engine", level: "Multi-Tenant", accent: "#777BB4", icon: <Workflow className="w-4 h-4 text-indigo-400" /> },
  { id: "go", name: "Go", category: "backend", tag: "Goroutines", level: "Ultra Concurrency", accent: "#00ADD8", icon: <Zap className="w-4 h-4 text-cyan-400" /> },
  { id: "graphql", name: "GraphQL", category: "backend", tag: "Federated Schema", level: "Zero Overfetching", accent: "#DCDCDC", icon: <Network className="w-4 h-4 text-[#DCDCDC]" /> },
  { id: "restapi", name: "REST APIs", category: "backend", tag: "OpenAPI 3.1", level: "Idempotent Gateway", accent: "#F4A049", icon: <Activity className="w-4 h-4 text-[#F4A049]" /> },

  // Full Stack
  { id: "mern", name: "MERN Stack", category: "fullstack", tag: "Full JS/TS", level: "Unified Isomorphic", accent: "#F4A049", icon: <Boxes className="w-4 h-4 text-[#F4A049]" /> },
  { id: "mean", name: "MEAN Stack", category: "fullstack", tag: "Angular-Node", level: "Enterprise Tier", accent: "#7E4010", icon: <ShieldCheck className="w-4 h-4 text-[#F4A049]" /> },
  { id: "jamstack", name: "JAMstack", category: "fullstack", tag: "Edge Static/API", level: "Global CDN Edge", accent: "#DCDCDC", icon: <Globe className="w-4 h-4 text-[#DCDCDC]" /> },

  // AI & ML
  { id: "openai", name: "OpenAI API", category: "aiml", tag: "GPT-4o & O-Series", level: "Cognitive Inference", accent: "#10A37F", icon: <Sparkles className="w-4 h-4 text-emerald-400" /> },
  { id: "langchain", name: "LangChain", category: "aiml", tag: "Orchestration", level: "Autonomous Chains", accent: "#F4A049", icon: <GitBranch className="w-4 h-4 text-[#F4A049]" /> },
  { id: "pytorch", name: "PyTorch", category: "aiml", tag: "Dynamic Tensors", level: "Deep Learning", accent: "#EE4C2C", icon: <Cpu className="w-4 h-4 text-orange-500" /> },
  { id: "tensorflow", name: "TensorFlow", category: "aiml", tag: "Distributed ML", level: "Production TFLite", accent: "#F4A049", icon: <Binary className="w-4 h-4 text-[#F4A049]" /> },
  { id: "vectordb", name: "Vector DBs (Pinecone/Qdrant)", category: "aiml", tag: "HNSW Embeddings", level: "Sub-5ms Recall", accent: "#F4A049", icon: <DatabaseZap className="w-4 h-4 text-[#F4A049]" /> },
  { id: "aiagents", name: "Autonomous AI Agents", category: "aiml", tag: "Multi-Agent Swarm", level: "Goal Directed", accent: "#F4A049", icon: <Bot className="w-4 h-4 text-[#F4A049]" /> },

  // Cloud & DevOps
  { id: "aws", name: "AWS", category: "cloud", tag: "EC2/Lambda/ECS", level: "Multi-AZ Cloud", accent: "#F4A049", icon: <Cloud className="w-4 h-4 text-[#F4A049]" /> },
  { id: "azure", name: "Azure", category: "cloud", tag: "AKS / Cognitive", level: "Sovereign Cloud", accent: "#0078D4", icon: <Cloud className="w-4 h-4 text-blue-500" /> },
  { id: "gcp", name: "Google Cloud", category: "cloud", tag: "GKE / Vertex AI", level: "Hyperscale AI", accent: "#4285F4", icon: <Cloud className="w-4 h-4 text-sky-400" /> },
  { id: "docker", name: "Docker", category: "cloud", tag: "OCI Containers", level: "Multi-Stage Build", accent: "#2496ED", icon: <Package className="w-4 h-4 text-blue-400" /> },
  { id: "kubernetes", name: "Kubernetes", category: "cloud", tag: "K8s Mesh Orchestration", level: "Zero-Downtime Auto", accent: "#7E4010", icon: <Layers className="w-4 h-4 text-[#F4A049]" /> },
  { id: "postgresql", name: "PostgreSQL", category: "cloud", tag: "ACID Relational", level: "High Concurrency", accent: "#336791", icon: <Database className="w-4 h-4 text-blue-400" /> },
  { id: "mysql", name: "MySQL", category: "cloud", tag: "Clustered InnoDB", level: "Transaction Heavy", accent: "#4479A1", icon: <Database className="w-4 h-4 text-sky-400" /> },
  { id: "mongodb", name: "MongoDB", category: "cloud", tag: "Document Sharding", level: "Horizontal Petabyte", accent: "#47A248", icon: <HardDrive className="w-4 h-4 text-green-400" /> },
  { id: "redis", name: "Redis", category: "cloud", tag: "In-Memory Pub/Sub", level: "Sub-millisecond Cache", accent: "#DC382D", icon: <Zap className="w-4 h-4 text-rose-400" /> },
];

const ENTERPRISE_SOLUTIONS: EnterpriseSolution[] = [
  {
    id: "saas",
    title: "Custom SaaS Development",
    badge: "Turnkey Cloud SaaS",
    category: "fullstack",
    tagline: "Scalable multi-tenant cloud software built to grow revenue",
    description: "Full-cycle SaaS development with bank-grade security, isolated customer data, automated Stripe billing, and user access management that scales effortlessly.",
    seoKeyword: "Enterprise SaaS Development",
    metrics: "99.99% Uptime • Under 50ms Edge Response",
    capabilities: ["Isolated Customer Data", "Automated Usage Billing", "Stripe & Payment Integrations", "Bank-Grade Security & SOC-2"],
    gradient: "from-[#F4A049]/20 via-[#F4A049]/5 to-transparent",
    glowColor: "#F4A049",
    circuitColor: "#F4A049",
    icon: <Boxes className="w-6 h-6 text-[#F4A049]" />,
    colSpan: "lg:col-span-2",
  },
  {
    id: "crm",
    title: "Custom CRM Tools & Systems",
    badge: "Enterprise CRM",
    category: "backend",
    tagline: "Automated sales pipelines & smart customer intelligence",
    description: "Connect your sales, marketing, and support into a single dashboard. Includes smart lead scoring, instant notifications, and automated follow-ups.",
    seoKeyword: "Custom CRM Development",
    metrics: "Zero Data Silos • Real-Time Sync",
    capabilities: ["ERP & Accounting Connectors", "Smart Lead Scoring", "Automated Email & SMS Triggers", "Real-Time Sales Dashboards"],
    gradient: "from-[#7E4010]/25 via-[#7E4010]/10 to-transparent",
    glowColor: "#F4A049",
    circuitColor: "#7E4010",
    icon: <Workflow className="w-6 h-6 text-[#F4A049]" />,
    colSpan: "lg:col-span-1",
  },
  {
    id: "erp",
    title: "ERP Business Systems",
    badge: "Core ERP",
    category: "cloud",
    tagline: "All-in-one business management & inventory automation",
    description: "Connect your finances, inventory, supply chain, and HR in one seamless system with real-time data sync and accurate financial reporting.",
    seoKeyword: "ERP Systems Architecture",
    metrics: "100% Data Accuracy • Real-Time Inventory",
    capabilities: ["Live Inventory Tracking", "Automated Order Processing", "Financial Audit Trails", "Real-Time Executive Dashboards"],
    gradient: "from-[#333333]/40 via-[#7E4010]/20 to-transparent",
    glowColor: "#DCDCDC",
    circuitColor: "#DCDCDC",
    icon: <DatabaseZap className="w-6 h-6 text-[#DCDCDC]" />,
    colSpan: "lg:col-span-1",
  },
  {
    id: "enterprise-web",
    title: "Enterprise Web Applications",
    badge: "Web Applications",
    category: "frontend",
    tagline: "Ultra-fast web platforms built to handle millions of users",
    description: "High-speed web portals, customer dashboards, and web applications that load in under 250 milliseconds with guaranteed 99.99% uptime.",
    seoKeyword: "Enterprise Web Applications",
    metrics: "<250ms Load Time • Zero Downtime Deploys",
    capabilities: ["Next.js & React Frontends", "Ultra-Fast Page Loads (<250ms)", "Accessible & Mobile-Ready", "Live Data & Real-Time Sync"],
    gradient: "from-[#F4A049]/20 via-[#7E4010]/10 to-transparent",
    glowColor: "#F4A049",
    circuitColor: "#F4A049",
    icon: <Globe className="w-6 h-6 text-[#F4A049]" />,
    colSpan: "lg:col-span-2",
  },
  {
    id: "custom-software",
    title: "Custom Software Solutions",
    badge: "Custom Software",
    category: "backend",
    tagline: "Custom software built specifically for your unique workflows",
    description: "We replace slow, outdated legacy systems with clean, modern software that automates manual tasks and handles millions of operations with ease.",
    seoKeyword: "Custom Software Development Company",
    metrics: "1M+ Daily Operations • Sub-5ms Backend",
    capabilities: ["Upgrading Old Systems to Modern Software", "High-Volume Data Processing", "Custom Business Logic Engines", "Private Cloud & On-Premise"],
    gradient: "from-[#7E4010]/30 via-[#333333]/40 to-transparent",
    glowColor: "#F4A049",
    circuitColor: "#7E4010",
    icon: <Terminal className="w-6 h-6 text-[#F4A049]" />,
    colSpan: "lg:col-span-1",
  },
  {
    id: "mobile-apps",
    title: "Custom Mobile App Development",
    badge: "iOS & Android",
    category: "fullstack",
    tagline: "Smooth, responsive mobile apps for iPhone and Android devices",
    description: "Modern mobile apps built with React Native and Flutter. Features offline access, Face ID & Fingerprint login, and instant push notifications.",
    seoKeyword: "Custom Mobile App Development",
    metrics: "60 FPS Smooth • Offline-Ready",
    capabilities: ["Face ID & Biometric Security", "Offline Mode & Auto-Sync", "Push Notifications & GPS", "Instant App Updates"],
    gradient: "from-[#DCDCDC]/20 via-[#333333]/30 to-transparent",
    glowColor: "#DCDCDC",
    circuitColor: "#DCDCDC",
    icon: <Radio className="w-6 h-6 text-[#DCDCDC]" />,
    colSpan: "lg:col-span-2",
  },
];

const FILTER_TABS: { id: CategoryId; label: string; count: number }[] = [
  { id: "all", label: "Full Ecosystem", count: 41 },
  { id: "frontend", label: "Frontend", count: 9 },
  { id: "backend", label: "Backend", count: 8 },
  { id: "fullstack", label: "MERN / Full Stack", count: 3 },
  { id: "aiml", label: "AI & ML / Agents", count: 6 },
  { id: "cloud", label: "Cloud & DevOps", count: 9 },
];

export default function TechStackGrid() {
  const [activeTab, setActiveTab] = useState<CategoryId>("all");
  const [, startTransition] = useTransition();
  const [rippleTarget, setRippleTarget] = useState<string | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleTabChange = (category: CategoryId) => {
    startTransition(() => {
      setActiveTab(category);
    });

    if (bentoRef.current) {
      animate(".bento-node", {
        opacity: [0.3, 1],
        scale: [0.97, 1],
        translateY: [15, 0],
        delay: stagger(60),
        duration: 450,
        ease: "outExpo",
      });
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleNodeClick = (e: MouseEvent<HTMLDivElement>, solutionId: string) => {
    setRippleTarget(solutionId);
    animate(`#node-${solutionId}`, {
      scale: [1, 0.98, 1],
      duration: 300,
      ease: "outBack",
    });

    setTimeout(() => {
      setRippleTarget(null);
      router.push(`/services?target=${solutionId}`);
    }, 280);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(".matrix-header-elem", {
              opacity: [0, 1],
              translateY: [25, 0],
              delay: stagger(90),
              duration: 700,
              ease: "outExpo",
            });
            animate(".marquee-badge", {
              opacity: [0, 1],
              scale: [0.95, 1],
              delay: stagger(25),
              duration: 500,
              ease: "outExpo",
            });
            animate(".bento-node", {
              opacity: [0, 1],
              translateY: [35, 0],
              delay: stagger(75, { start: 200 }),
              duration: 750,
              ease: "outExpo",
            });
            animate(".circuit-wire", {
              strokeDashoffset: [100, 0],
              duration: 1800,
              delay: stagger(120),
              ease: "inOutSine",
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const isMarqueeFiltered = activeTab !== "all";
  const displayedSolutions = ENTERPRISE_SOLUTIONS.filter(
    (item) => activeTab === "all" || item.category === activeTab || (activeTab === "fullstack" && item.category === "frontend")
  );

  return (
    <section
      ref={sectionRef}
      id="tech-stack-matrix"
      aria-labelledby="tech-matrix-heading"
      className="relative py-16 sm:py-24 lg:py-32 bg-[#1A1A1A] overflow-x-hidden select-none"
      itemScope
      itemType="https://schema.org/ItemList"
      data-entity="NexBridge Technology & Autonomous Solutions Matrix"
      data-seo-keywords="MERN Stack Development, Custom SaaS Architecture, Enterprise Web Applications, Generative AI Integration, ERP Systems Architecture, Cross-Platform Mobile Apps, AI Engineering Agency"
    >
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Enterprise Technology Matrix & Autonomous Solution Ecosystem",
            description:
              "A battle-tested full-stack technology arsenal engineered for sub-millisecond concurrency, enterprise security compliance, and hyper-scalable AI workflows.",
            numberOfItems: 41,
            itemListElement: [
              ...ENTERPRISE_SOLUTIONS.map((s, idx) => ({
                "@type": "ListItem",
                position: idx + 1,
                name: s.title,
                description: s.description,
                url: `https://nexbridgetech.com/services?target=${s.id}`,
              })),
              ...MARQUEE_TECHS.map((t, idx) => ({
                "@type": "ListItem",
                position: idx + 7,
                name: t.name,
                description: `${t.name} (${t.tag}) - ${t.level}`,
                url: `https://nexbridgetech.com/services?tech=${t.id}`,
              })),
            ],
          }),
        }}
      />

      {/* Cyber Grid Background & Ambient Particle Glow Fields in Brand Palette */}
      <div className="absolute inset-0 cyber-grid-bg opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] lg:w-[900px] h-[200px] sm:h-[300px] lg:h-[350px] bg-gradient-to-r from-[#F4A049]/15 via-[#7E4010]/15 to-[#DCDCDC]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-12 left-0 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#F4A049]/10 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none" />
      <div className="absolute bottom-12 right-0 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#7E4010]/15 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* --- 1. SEMANTIC HEADER & CATEGORY FILTER BAR --- */}
        <header className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="matrix-header-elem inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 rounded-full bg-[#333333]/90 border border-[#F4A049]/40 text-[10px] sm:text-xs font-mono text-[#F4A049] mb-5 sm:mb-6 shadow-[0_0_15px_rgba(244,160,73,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#F4A049] animate-pulse" />
            <span className="tracking-widest uppercase font-semibold hidden sm:inline">MODERN TECH STACK &amp; SOLUTIONS</span>
            <span className="tracking-widest uppercase font-semibold sm:hidden">TECH SOLUTIONS</span>
          </div>

          <h2
            id="tech-matrix-heading"
            className="matrix-header-elem text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.15]"
          >
            Enterprise Technology Stack &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] via-[#DCDCDC] to-[#7E4010]">
              Custom Software Solutions
            </span>
          </h2>

          <p className="matrix-header-elem mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-[#DCDCDC]/90 max-w-3xl mx-auto leading-relaxed font-normal px-2 sm:px-0">
            A battle-tested technology foundation engineered for ultra-fast performance, bank-grade data security, and scalable AI-powered business growth.
          </p>

          {/* Pill Filter Bar */}
          <div className="matrix-header-elem mt-8 sm:mt-10 overflow-x-auto no-scrollbar -mx-4 sm:mx-0 px-4 sm:px-0">
            <nav
              aria-label="Technology and Ecosystem Filter Categories"
              className="flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-xl sm:rounded-2xl bg-[#282828] border border-[#DCDCDC]/15 backdrop-blur-xl shadow-2xl w-max mx-auto"
            >
              {FILTER_TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    suppressHydrationWarning
                    onClick={() => handleTabChange(tab.id)}
                    className={`relative px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-medium transition-all duration-300 flex items-center gap-1.5 sm:gap-2 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? "text-white bg-gradient-to-r from-[#F4A049] to-[#7E4010] shadow-[0_0_20px_rgba(244,160,73,0.45)] border border-[#F4A049]/50"
                        : "text-[#DCDCDC]/75 hover:text-white hover:bg-[#333333] border border-transparent"
                    }`}
                    aria-pressed={isActive}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded-md text-[9px] sm:text-[10px] font-mono font-bold transition-colors ${
                        isActive ? "bg-white/20 text-white" : "bg-[#333333] text-[#DCDCDC]/70"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        </header>

        {/* --- 2. INFINITE HORIZONTAL TECH MARQUEE --- */}
        <div
          ref={marqueeRef}
          className="relative mb-8 group overflow-x-hidden py-3"
          aria-label="Infinite scrolling technology stack frameworks"
        >
          {/* Edge Blur Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/90 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#1A1A1A] via-[#1A1A1A]/90 to-transparent z-20 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex w-max space-x-4 items-center marquee-track">
            {[...MARQUEE_TECHS, ...MARQUEE_TECHS].map((tech, index) => {
              const isMatch = !isMarqueeFiltered || tech.category === activeTab;
              return (
                <Link
                  key={`${tech.id}-${index}`}
                  href={`/services?tech=${tech.id}`}
                  data-entity={tech.name}
                  data-category={tech.category}
                  className={`marquee-badge group/badge flex items-center gap-3 px-4 py-2.5 rounded-xl border transition-all duration-300 cursor-pointer backdrop-blur-md ${
                    isMatch
                      ? "bg-[#333333]/90 border-[#DCDCDC]/20 hover:border-[#F4A049] hover:bg-[#333333] hover:shadow-[0_0_15px_rgba(244,160,73,0.35)]"
                      : "bg-[#282828]/40 border-[#DCDCDC]/10 opacity-40 hover:opacity-80"
                  }`}
                  title={`${tech.name} - ${tech.tag} (${tech.level})`}
                >
                  <div
                    className="p-1.5 rounded-lg bg-[#242424] border border-[#DCDCDC]/15 group-hover/badge:scale-110 transition-transform"
                    style={{ borderColor: `${tech.accent}44` }}
                  >
                    {tech.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-white group-hover/badge:text-[#F4A049] flex items-center gap-1.5 whitespace-nowrap">
                      {tech.name}
                      <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-[#242424] text-[#DCDCDC]/75">
                        {tech.tag}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* --- 3. INTERACTIVE SVG CIRCUIT CONNECTOR --- */}
        <div className="hidden sm:flex relative w-full h-16 sm:h-20 justify-center items-center pointer-events-none -my-2">
          <svg
            className="w-full max-w-5xl h-full overflow-visible"
            viewBox="0 0 1000 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="circuit-wire"
              d="M 50 10 L 950 10"
              stroke="rgba(244, 160, 73, 0.25)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
            />
            <path
              className="circuit-wire"
              d="M 200 10 L 200 45 L 260 75"
              stroke="#F4A049"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.8"
            />
            <path
              className="circuit-wire"
              d="M 500 10 L 500 75"
              stroke="#7E4010"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.8"
            />
            <path
              className="circuit-wire"
              d="M 800 10 L 800 45 L 740 75"
              stroke="#DCDCDC"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.75"
            />

            <circle cx="200" cy="10" r="3.5" fill="#F4A049" className="animate-ping" />
            <circle cx="500" cy="10" r="3.5" fill="#7E4010" className="animate-ping" style={{ animationDelay: "400ms" }} />
            <circle cx="800" cy="10" r="3.5" fill="#DCDCDC" className="animate-ping" style={{ animationDelay: "800ms" }} />
            <circle cx="260" cy="75" r="3" fill="#F4A049" />
            <circle cx="500" cy="75" r="3" fill="#7E4010" />
            <circle cx="740" cy="75" r="3" fill="#DCDCDC" />
          </svg>
        </div>

        {/* --- 4. ENTERPRISE SOLUTIONS (KINETIC BENTO MESH) --- */}
        <div
          ref={bentoRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 relative mt-4 sm:mt-0"
          aria-label="Enterprise Solutions Kinetic Bento Mesh"
        >
          {displayedSolutions.map((solution) => {
            const isRippling = rippleTarget === solution.id;

            return (
              <div
                key={solution.id}
                id={`node-${solution.id}`}
                onMouseMove={handleMouseMove}
                onClick={(e) => handleNodeClick(e, solution.id)}
                itemScope
                itemProp="itemListElement"
                itemType="https://schema.org/Service"
                data-entity={solution.title}
                data-seo-keyword={solution.seoKeyword}
                style={{
                  background: `radial-gradient(420px circle at var(--mouse-x, 150px) var(--mouse-y, 150px), rgba(244, 160, 73, 0.12), transparent 75%)`,
                }}
                className={`bento-node relative p-5 sm:p-6 lg:p-7 xl:p-8 rounded-2xl sm:rounded-3xl border border-[#DCDCDC]/15 bg-[#282828]/80 backdrop-blur-2xl transition-all duration-300 hover:border-[#F4A049]/60 hover:shadow-[0_15px_40px_-15px_rgba(244,160,73,0.25)] cursor-pointer group flex flex-col justify-between overflow-hidden sm:col-span-1 ${solution.colSpan}`}
              >
                <meta itemProp="name" content={solution.title} />
                <meta itemProp="serviceType" content={solution.seoKeyword} />
                <meta itemProp="description" content={solution.description} />
                <meta itemProp="provider" content="NexBridge Tech Consulting" />

                {/* Ambient Cyber Light Spill Accent */}
                <div
                  className="absolute -right-16 -top-16 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity"
                  style={{ backgroundColor: solution.glowColor }}
                />

                {/* Animated Ripple Pulse */}
                {isRippling && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F4A049]/30 to-[#7E4010]/30 animate-pulse pointer-events-none z-30" />
                )}

                {/* Top Bar: Icon, Badges & Interactive Vector Arrow */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className="p-3 rounded-2xl bg-[#333333] border border-[#7E4010]/40 shadow-inner group-hover:scale-110 transition-transform duration-300"
                        style={{ borderColor: `${solution.glowColor}55` }}
                      >
                        {solution.icon}
                      </div>
                      <div>
                        <span className="text-[11px] font-mono tracking-wider text-[#DCDCDC]/70 uppercase block">
                          SOLUTION VECTOR
                        </span>
                        <span
                          className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border bg-[#333333] inline-block mt-0.5"
                          style={{
                            borderColor: `${solution.glowColor}66`,
                            color: solution.glowColor,
                          }}
                        >
                          {solution.badge}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/services?target=${solution.id}`}
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-xl bg-[#333333] border border-[#DCDCDC]/20 text-[#DCDCDC] group-hover:text-white group-hover:border-[#F4A049]/60 transition-all hover:scale-105"
                      title={`Deep dive into ${solution.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4 text-[#DCDCDC] group-hover:text-[#F4A049] transition-colors" />
                    </Link>
                  </div>

                  {/* Title & SEO Keywords */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-[#DCDCDC] group-hover:to-[#F4A049] transition-all">
                    {solution.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm font-medium text-[#F4A049]/90 font-mono">
                    {solution.tagline}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-[#DCDCDC]/85 leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                {/* Capabilities Mesh */}
                <div className="mt-6 pt-5 border-t border-[#DCDCDC]/10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                    {solution.capabilities.map((cap, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#DCDCDC]/80">
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: solution.circuitColor }}
                        />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer Bar */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#DCDCDC]/60 pt-3 border-t border-[#333333]">
                    <span className="text-[#DCDCDC] font-medium">{solution.metrics}</span>
                    <Link
                      href={`/services?target=${solution.id}`}
                      className="flex items-center gap-1 text-xs font-semibold text-[#F4A049] hover:text-white transition-colors"
                    >
                      <span>Explore Spec</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom Dispatch Bar */}
        <div className="mt-10 sm:mt-14 p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#242424] via-[#333333] to-[#242424] border border-[#7E4010]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6 shadow-2xl">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-[#F4A049] mb-1">
              <span className="w-2 h-2 rounded-full bg-[#F4A049] animate-pulse" />
              <span>FREE TECHNICAL CONSULTATION AVAILABLE</span>
            </div>
            <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white">
              Need a custom AI system, SaaS platform, or enterprise web application?
            </h4>
            <p className="text-[11px] sm:text-xs lg:text-sm text-[#DCDCDC]/75 mt-1">
              Our senior engineers and AI specialists will audit your requirements and design the right solution for your business — no jargon, just clear technical guidance.
            </p>
          </div>

          <div className="flex flex-col xs:flex-row sm:flex-col lg:flex-row items-stretch sm:items-center gap-2 sm:gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="/book-consultation"
              className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#F4A049] to-[#7E4010] text-white text-[11px] sm:text-xs lg:text-sm font-semibold hover:opacity-95 shadow-[0_0_20px_rgba(244,160,73,0.4)] text-center transition-all hover:scale-105"
            >
              Book Architecture Session
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-[#333333] border border-[#DCDCDC]/30 text-[#DCDCDC] hover:text-white text-[11px] sm:text-xs lg:text-sm font-semibold hover:bg-[#282828] text-center transition-all"
            >
              All 41 Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
