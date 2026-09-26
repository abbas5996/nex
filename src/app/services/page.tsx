"use client";

import React, { useState, useEffect, useRef, useCallback, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  BrainCircuit, Boxes, Smartphone, Cloud, ChevronDown,
  CheckCircle2, Sparkles, Code2, Zap, LayoutGrid,
  Database, Globe, Layers, Cpu, ExternalLink,
  Shield, Lock, FileCheck2, ServerCrash, BadgeCheck,
  Timer, GitBranch, SlidersHorizontal, ChevronRight,
} from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";

// ─── Data ────────────────────────────────────────────────────────────────────

const SERVICE_CATEGORIES = [
  {
    id: "ai",
    icon: <BrainCircuit className="w-6 h-6 text-[#F4A049]" />,
    label: "Custom AI & Smart Automation",
    badge: "AI Development",
    tagline: "Build custom AI tools that automate work and speed up decisions.",
    description: "We build custom generative AI and smart search tools for your business. From connecting ChatGPT or Claude to your internal company data, to creating automated AI agents that handle repetitive tasks without human mistakes.",
    capabilities: [
      "Custom AI Assistants (ChatGPT, Claude & Gemini)",
      "Accurate & Reliable AI Search (Smart Document Retrieval)",
      "Automated Multi-Agent Task Workflows",
      "Private & Secure AI Model Hosting",
      "Custom Machine Learning & Data Models",
      "Vector Search Databases (Pinecone, Qdrant)",
      "Automated Data Extraction & Analysis",
      "AI Safety, Privacy & Accuracy Auditing",
    ],
    accentBorder: "border-[#F4A049]/70",
    accentBadge: "text-[#F4A049] border-[#F4A049]/40 bg-[#F4A049]/10",
  },
  {
    id: "fullstack",
    icon: <Boxes className="w-6 h-6 text-[#F4A049]" />,
    label: "Web & SaaS Development",
    badge: "Web Applications",
    tagline: "Lightning-fast, reliable web platforms built to scale with your users.",
    description: "Our senior software developers create modern, high-speed web apps and SaaS platforms using proven technologies like Next.js, React, Node.js, and Python. We guarantee clean code, fast load times, and easy maintenance.",
    capabilities: [
      "Custom SaaS Platforms & Web Portals",
      "Modern Next.js & React Web Applications",
      "High-Performance Python & Node.js Backends",
      "Enterprise Cloud APIs & System Integration",
      "Multi-Tenant User Management & Stripe Billing",
      "Fast & Flexible GraphQL & REST APIs",
      "100% Type-Safe Clean Code Architecture",
      "Real-Time Live Chat & Instant Notifications",
    ],
    accentBorder: "border-[#F4A049]/70",
    accentBadge: "text-[#F4A049] border-[#F4A049]/40 bg-[#F4A049]/10",
  },
  {
    id: "mobile",
    icon: <Smartphone className="w-6 h-6 text-[#F4A049]" />,
    label: "Custom Mobile App Development",
    badge: "iOS & Android",
    tagline: "Smooth, responsive mobile apps for iPhone and Android devices.",
    description: "We build beautiful, fast mobile apps for iOS and Android using React Native and Flutter. Your users get a smooth experience that works offline, supports Face ID/Fingerprint logins, and delivers instant push notifications.",
    capabilities: [
      "React Native Apps for iOS & Android",
      "Flutter Cross-Platform Mobile Solutions",
      "Native Apple iOS (Swift) Development",
      "Native Google Android (Kotlin) Development",
      "Offline Mode & Instant Local Data Sync",
      "Face ID, Touch ID & Secure Biometric Login",
      "Instant Over-The-Air (OTA) App Updates",
      "Push Notifications & Deep Link Navigation",
    ],
    accentBorder: "border-[#F4A049]/70",
    accentBadge: "text-[#F4A049] border-[#F4A049]/40 bg-[#F4A049]/10",
  },
  {
    id: "cloud",
    icon: <Cloud className="w-6 h-6 text-[#F4A049]" />,
    label: "Cloud Hosting & DevOps Migration",
    badge: "24/7 Reliability",
    tagline: "Secure cloud infrastructure that never goes down and scales automatically.",
    description: "We set up and manage secure cloud hosting across AWS, Google Cloud, and Microsoft Azure. Enjoy automated daily backups, bank-grade firewalls, zero-downtime updates, and 24/7 monitoring so your site never crashes.",
    capabilities: [
      "Amazon Web Services (AWS) Cloud Setup",
      "Microsoft Azure Enterprise Cloud Infrastructure",
      "Google Cloud Platform & AI Cloud Hosting",
      "Automated Server Scaling & Disaster Recovery",
      "Docker Containers for Fast, Reliable Deploys",
      "Automated Infrastructure Code (Terraform)",
      "Continuous Delivery Pipelines (Automated Testing)",
      "24/7 Live Performance & Security Monitoring",
    ],
    accentBorder: "border-[#F4A049]/70",
    accentBadge: "text-[#F4A049] border-[#F4A049]/40 bg-[#F4A049]/10",
  },
];

const TECH_MARQUEE = [
  { label: "TypeScript", role: "Primary Language", targetId: "fullstack", tech: "typescript" },
  { label: "Python", role: "AI & Microservices", targetId: "ai", tech: "python" },
  { label: "Next.js", role: "Full-Stack Web", targetId: "fullstack", tech: "nextjs" },
  { label: "React", role: "Frontend UI", targetId: "fullstack", tech: "react" },
  { label: "Node.js", role: "API Runtime", targetId: "fullstack", tech: "nodejs" },
  { label: "FastAPI", role: "High-Perf AI Backend", targetId: "ai", tech: "fastapi" },
  { label: "Java Spring", role: "Enterprise Core", targetId: "fullstack", tech: "java" },
  { label: "Go (Golang)", role: "Concurrency Engine", targetId: "fullstack", tech: "go" },
  { label: "Rust", role: "High-Speed Systems", targetId: "fullstack", tech: "rust" },
  { label: "React Native", role: "Cross-Platform Mobile", targetId: "mobile", tech: "react-native" },
  { label: "Flutter", role: "Multi-Platform Mobile", targetId: "mobile", tech: "flutter" },
  { label: "Docker", role: "Containerization", targetId: "cloud", tech: "docker" },
  { label: "Kubernetes", role: "Container Orchestration", targetId: "cloud", tech: "kubernetes" },
  { label: "AWS", role: "Cloud Infrastructure", targetId: "cloud", tech: "aws" },
  { label: "Google Cloud", role: "Vertex AI & Cloud Run", targetId: "cloud", tech: "gcp" },
  { label: "Microsoft Azure", role: "Enterprise Cloud", targetId: "cloud", tech: "azure" },
  { label: "Terraform", role: "Infrastructure as Code", targetId: "cloud", tech: "terraform" },
  { label: "PostgreSQL", role: "Relational DB & pgvector", targetId: "cloud", tech: "postgresql" },
  { label: "MongoDB", role: "Document Data Store", targetId: "fullstack", tech: "mongodb" },
  { label: "Redis", role: "In-Memory Cache & Pub/Sub", targetId: "cloud", tech: "redis" },
  { label: "GraphQL", role: "Federated API Mesh", targetId: "fullstack", tech: "graphql" },
  { label: "Pinecone / Qdrant", role: "Vector DB Search", targetId: "ai", tech: "vectordb" },
  { label: "LangChain / CrewAI", role: "AI Agent Swarms", targetId: "ai", tech: "langchain" },
  { label: "Tailwind CSS", role: "Modern Styling", targetId: "fullstack", tech: "tailwind" },
];

const BENTO_SOLUTIONS = [
  {
    id: "saas",
    targetCategory: "fullstack",
    icon: <LayoutGrid className="w-5 h-5 text-[#F4A049]" />,
    title: "Custom SaaS Development",
    badge: "Turnkey Cloud SaaS",
    description: "Multi-tenant cloud platforms engineered to scale revenue. Includes isolated customer data, automated Stripe billing, and user permissions.",
    pills: ["Multi-Tenant Data", "Stripe Billing", "User Permissions"],
    status: "Launch Ready",
    size: "lg", // colspan 2 on large screens
  },
  {
    id: "crm",
    targetCategory: "fullstack",
    icon: <Database className="w-5 h-5 text-[#F4A049]" />,
    title: "Custom CRM Tools & Systems",
    badge: "Enterprise CRM",
    description: "Custom CRM systems that automate leads, streamline deal stages, and connect smoothly to tools like HubSpot and Salesforce.",
    pills: ["Salesforce & HubSpot", "Smart Lead Scoring", "Deal Automation"],
    status: "Enterprise Grade",
    size: "sm",
  },
  {
    id: "erp",
    targetCategory: "fullstack",
    icon: <Layers className="w-5 h-5 text-[#F4A049]" />,
    title: "ERP Business Systems",
    badge: "Core ERP",
    description: "Unified business management systems connecting inventory, supply chain, finances, and HR with real-time reporting.",
    pills: ["Supply Chain", "Finance & Invoicing", "HR Automation"],
    status: "Bank-Grade Security",
    size: "sm",
  },
  {
    id: "enterprise-web",
    targetCategory: "fullstack",
    icon: <Globe className="w-5 h-5 text-[#F4A049]" />,
    title: "Enterprise Web Applications",
    badge: "Web Applications",
    description: "High-speed, high-traffic web applications built for zero downtime, sub-second page loads, and smooth customer experiences worldwide.",
    pills: ["Global CDN", "Sub-250ms Load", "99.99% Uptime"],
    status: "Global Scale",
    size: "sm",
  },
  {
    id: "custom-software",
    targetCategory: "fullstack",
    icon: <Cpu className="w-5 h-5 text-[#F4A049]" />,
    title: "Custom Software Solutions",
    badge: "Custom Software",
    description: "Bespoke software built for your unique business needs—replacing slow legacy systems with fast, modern, automated software.",
    pills: ["Legacy Upgrades", "Automated Workflows", "Custom Logic"],
    status: "Production Ready",
    size: "sm",
  },
  {
    id: "mobile-apps",
    targetCategory: "mobile",
    icon: <Smartphone className="w-5 h-5 text-[#F4A049]" />,
    title: "Custom Mobile App Development",
    badge: "iOS & Android",
    description: "Fast, smooth mobile apps for iPhone and Android from a single codebase, featuring Face ID, offline access, and push notifications.",
    pills: ["React Native", "Flutter", "Offline Sync"],
    status: "Smooth 60 FPS",
    size: "lg",
  },
];

// ─── Infinite Marquee Component ───────────────────────────────────────────────

function TechMarquee({
  onBadgeClick,
}: {
  onBadgeClick: (targetId: string) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  // Duplicate array so infinite loop is seamless
  const doubled = [...TECH_MARQUEE, ...TECH_MARQUEE];

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 w-24 sm:w-40 h-full bg-gradient-to-r from-[#333333] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-24 sm:w-40 h-full bg-gradient-to-l from-[#333333] to-transparent z-10 pointer-events-none" />

      <div
        ref={trackRef}
        className="flex gap-3 w-max"
        style={{
          animation: "marquee 55s linear infinite",
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {doubled.map((badge, i) => (
          <button
            key={`${badge.label}-${i}`}
            type="button"
            onClick={() => onBadgeClick(badge.targetId)}
            className="flex-shrink-0 group flex flex-col items-center justify-center gap-0.5 px-4 py-2.5 rounded-xl bg-[#282828] border border-[#DCDCDC]/12 hover:border-[#F4A049]/70 hover:bg-[#2E2E2E] hover:shadow-[0_0_18px_rgba(244,160,73,0.28)] transition-all duration-200 cursor-pointer min-w-[110px]"
            aria-label={`Filter by ${badge.label}`}
          >
            <span className="text-xs font-bold text-white group-hover:text-[#F4A049] transition-colors whitespace-nowrap">
              {badge.label}
            </span>
            <span className="text-[9px] font-mono text-[#DCDCDC]/50 uppercase tracking-wider whitespace-nowrap">
              {badge.role}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Bento Node Mesh ─────────────────────────────────────────────────────────

function BentoMesh({
  onNodeClick,
}: {
  onNodeClick: (targetCategory: string) => void;
}) {
  return (
    <section
      className="py-20 sm:py-24 bg-[#333333] border-b border-[#7E4010]/30 relative overflow-hidden"
      aria-label="Enterprise Solutions Bento Mesh"
    >
      {/* Background pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#F4A049]/8 via-[#7E4010]/10 to-[#F4A049]/6 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#282828] border border-[#F4A049]/40 text-xs font-mono text-[#F4A049] mb-4 shadow-[0_0_15px_rgba(244,160,73,0.2)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-white font-semibold">ENTERPRISE SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            What We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] via-[#DCDCDC] to-[#7E4010]">
              Engineer
            </span>{" "}
            For You
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#DCDCDC]/80">
            Click any solution node to explore the full engineering capability stack behind it.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {BENTO_SOLUTIONS.map((node) => (
            <button
              key={node.id}
              type="button"
              onClick={() => onNodeClick(node.targetCategory)}
              itemScope
              itemType="https://schema.org/Service"
              className={`group relative text-left rounded-2xl border bg-gradient-to-br from-[#2C2C2C] to-[#1E1E1E] border-[#DCDCDC]/12 hover:border-[#F4A049]/65 hover:shadow-[0_0_30px_rgba(244,160,73,0.22),_inset_0_1px_0_rgba(244,160,73,0.08)] transition-all duration-300 cursor-pointer overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4A049] ${node.size === "lg" ? "sm:col-span-2 lg:col-span-1" : ""}`}
              aria-label={`Explore ${node.title}`}
            >
              {/* Glass inner layer */}
              <div className="relative z-10 p-6 h-full flex flex-col gap-4">
                {/* Top row: icon + badge */}
                <div className="flex items-start justify-between">
                  <div className="p-2.5 rounded-xl bg-[#333333] border border-[#F4A049]/30 group-hover:border-[#F4A049]/70 group-hover:shadow-[0_0_15px_rgba(244,160,73,0.3)] transition-all">
                    {node.icon}
                  </div>
                  <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border text-[#F4A049] border-[#F4A049]/40 bg-[#F4A049]/10 uppercase tracking-wider">
                    {node.badge}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3
                    className="text-base sm:text-lg font-bold text-white group-hover:text-[#F4A049] transition-colors"
                    itemProp="name"
                  >
                    {node.title}
                  </h3>
                  <p
                    className="mt-1.5 text-xs sm:text-sm text-[#DCDCDC]/75 leading-relaxed"
                    itemProp="description"
                  >
                    {node.description}
                  </p>
                </div>

                {/* Capability pills */}
                <div className="flex flex-wrap gap-1.5">
                  {node.pills.map((pill) => (
                    <span
                      key={pill}
                      className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-[#333333] border border-[#DCDCDC]/15 text-[#DCDCDC]/70 group-hover:border-[#F4A049]/30 group-hover:text-[#DCDCDC] transition-colors"
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                {/* Footer status */}
                <div className="mt-auto flex items-center justify-between pt-3 border-t border-[#DCDCDC]/8">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F4A049] animate-pulse" />
                    <span className="text-[9px] font-mono text-[#DCDCDC]/55 uppercase tracking-wider">
                      {node.status}
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#DCDCDC]/30 group-hover:text-[#F4A049] transition-colors" />
                </div>
              </div>

              {/* Ambient corner glow on hover */}
              <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-[#F4A049]/8 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Main Page Content ────────────────────────────────────────────────────────

function ServicesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [openId, setOpenId] = useState<string>("ai");
  const accordionRef = useRef<HTMLDivElement>(null);

  // ── URL query deep-link sync ──
  useEffect(() => {
    const target = searchParams.get("target")?.toLowerCase();
    const tech = searchParams.get("tech")?.toLowerCase();

    if (target) {
      if (["saas", "crm", "erp", "enterprise-web", "custom-software"].includes(target)) setOpenId("fullstack");
      else if (["mobile-apps", "mobile"].includes(target)) setOpenId("mobile");
      else if (["ai", "aiml", "openai", "langchain"].includes(target)) setOpenId("ai");
      else if (["cloud", "devops"].includes(target)) setOpenId("cloud");
    } else if (tech) {
      if (["openai", "langchain", "pytorch", "tensorflow", "vectordb", "aiagents", "fastapi", "python"].includes(tech)) setOpenId("ai");
      else if (["react", "nextjs", "vue", "angular", "typescript", "nodejs", "java", "go", "graphql", "mern", "tailwind", "mongodb", "rust"].includes(tech)) setOpenId("fullstack");
      else if (["react-native", "flutter"].includes(tech)) setOpenId("mobile");
      else if (["aws", "azure", "gcp", "docker", "kubernetes", "postgresql", "redis", "terraform"].includes(tech)) setOpenId("cloud");
    }
  }, [searchParams]);

  // ── Badge click → deep-link + scroll to accordion ──
  const handleBadgeClick = useCallback(
    (targetId: string) => {
      setOpenId(targetId);
      router.push(`/services?target=${targetId}`, { scroll: false });
      setTimeout(() => {
        accordionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    },
    [router]
  );

  // ── Bento node click → expand category + scroll ──
  const handleBentoClick = useCallback(
    (targetCategory: string) => {
      setOpenId(targetCategory);
      setTimeout(() => {
        accordionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    },
    []
  );

  return (
    <div
      className="min-h-screen bg-[#333333] text-[#DCDCDC]"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Enterprise AI & Software Engineering Consulting",
            "provider": {
              "@type": "Organization",
              "name": "NexBridge Tech Consulting",
              "url": "https://nexbridge.tech",
            },
            "areaServed": "Global",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Engineering Capabilities",
              "itemListElement": SERVICE_CATEGORIES.map((cat) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": cat.label,
                  "description": cat.description,
                },
              })),
            },
          }),
        }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative pt-36 pb-20 sm:pb-24 overflow-hidden border-b border-[#7E4010]/30"
        aria-labelledby="services-hero-heading"
      >
        <div className="absolute inset-0 cyber-grid-bg opacity-25 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-gradient-to-r from-[#F4A049]/20 via-[#7E4010]/25 to-[#F4A049]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#282828] border border-[#F4A049]/40 text-xs font-mono text-[#F4A049] mb-6 shadow-[0_0_20px_rgba(244,160,73,0.25)]">
            <Zap className="w-3.5 h-3.5" />
            <span className="font-semibold text-[#DCDCDC]">CUSTOM SOFTWARE &amp; AI AGENCY</span>
            <span className="text-[#F4A049]">•</span>
            <span className="text-[#DCDCDC]/75">Built for Real Business Growth</span>
          </div>

          <h1
            id="services-hero-heading"
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1]"
            itemProp="name"
          >
            Custom Software Development &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] via-[#DCDCDC] to-[#7E4010]">
              AI Integration Services
            </span>
          </h1>

          <p
            className="mt-6 text-lg sm:text-xl text-[#DCDCDC]/90 max-w-3xl mx-auto leading-relaxed"
            itemProp="description"
          >
            From web platforms and mobile apps to custom AI systems and reliable cloud hosting—we build fast, secure software tailored to your exact business goals.
          </p>

          {/* Quick Stats Strip */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: "Uptime Reliability", value: "99.99%" },
              { label: "Ultra-Fast Response", value: "< 250ms" },
              { label: "Weekly Progress Demos", value: "Every Friday" },
              { label: "Bank-Grade Security", value: "100% Protected" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-xl bg-[#282828] border border-[#DCDCDC]/15 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
              >
                <div className="text-2xl font-extrabold font-mono text-[#F4A049]">{stat.value}</div>
                <div className="text-xs font-mono text-[#DCDCDC]/70 uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INFINITE TECH MARQUEE ────────────────────────────────────────── */}
      <section className="py-14 bg-[#2E2E2E] border-b border-[#7E4010]/25 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#282828] border border-[#F4A049]/35 text-xs font-mono text-[#F4A049] shadow-[0_0_12px_rgba(244,160,73,0.18)]">
            <Code2 className="w-3.5 h-3.5" />
            <span className="text-white font-semibold">MULTI-LANGUAGE SOFTWARE DEVELOPMENT</span>
            <span className="text-[#DCDCDC]/50">— Click any technology to explore what we build with it</span>
          </div>
        </div>
        <TechMarquee onBadgeClick={handleBadgeClick} />
      </section>

      {/* ── KINETIC BENTO MESH ───────────────────────────────────────────── */}
      <BentoMesh onNodeClick={handleBentoClick} />

      {/* ── ACCORDION SERVICE CATEGORIES ────────────────────────────────── */}
      <section
        id="services-mesh"
        ref={accordionRef}
        className="py-20 sm:py-24 bg-[#333333] relative scroll-mt-20"
        aria-label="Engineering Service Categories"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Disciplines &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] to-[#7E4010]">
                Technical Capabilities
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#DCDCDC]/80">
              Select a service vertical to inspect architecture scopes, specialized tools, and delivery deliverables.
            </p>
          </div>

          <div className="space-y-5">
            {SERVICE_CATEGORIES.map((cat) => {
              const isOpen = openId === cat.id;
              return (
                <div
                  key={cat.id}
                  id={cat.id}
                  itemScope
                  itemType="https://schema.org/Service"
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? `bg-gradient-to-br from-[#333333] to-[#282828] ${cat.accentBorder} shadow-[0_15px_40px_rgba(0,0,0,0.6)] ring-1 ring-[#F4A049]/30`
                      : "bg-[#2C2C2C] border-[#DCDCDC]/12 hover:border-[#F4A049]/50 hover:bg-[#2E2E2E]"
                  }`}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => setOpenId(isOpen ? "" : cat.id)}
                    className="w-full flex items-center justify-between p-6 sm:p-8 cursor-pointer text-left group"
                    aria-expanded={isOpen}
                    aria-controls={`panel-${cat.id}`}
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div
                        className={`p-3.5 rounded-xl border transition-all group-hover:scale-110 ${
                          isOpen
                            ? "bg-[#333333] border-[#F4A049] shadow-[0_0_20px_rgba(244,160,73,0.4)]"
                            : "bg-[#282828] border-[#DCDCDC]/20 group-hover:border-[#F4A049]/60"
                        }`}
                      >
                        {cat.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1 flex-wrap">
                          <span
                            className="text-lg sm:text-xl font-bold text-white group-hover:text-[#F4A049] transition-colors"
                            itemProp="name"
                          >
                            {cat.label}
                          </span>
                          <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${cat.accentBadge}`}>
                            {cat.badge}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#DCDCDC]/75">{cat.tagline}</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#DCDCDC] shrink-0 ml-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#F4A049]" : "group-hover:text-white"
                      }`}
                    />
                  </button>

                  {/* Accordion Body */}
                  {isOpen && (
                    <div
                      id={`panel-${cat.id}`}
                      className="px-6 sm:px-8 pb-8 space-y-6"
                    >
                      <p
                        className="text-[#DCDCDC]/90 text-sm sm:text-base leading-relaxed border-t border-[#DCDCDC]/15 pt-6"
                        itemProp="description"
                      >
                        {cat.description}
                      </p>

                      {/* Capability grid with AEO micro-data */}
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-[#F4A049] mb-3">
                          Engineering Deliverables & Protocols
                        </h4>
                        <div
                          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                          itemScope
                          itemType="https://schema.org/ItemList"
                        >
                          {cat.capabilities.map((cap, idx) => (
                            <div
                              key={cap}
                              className="flex items-center gap-2.5 text-xs sm:text-sm text-[#DCDCDC] p-2.5 rounded-lg bg-[#282828]/70 border border-[#DCDCDC]/10 hover:border-[#F4A049]/30 transition-colors"
                              itemProp="itemListElement"
                              itemScope
                              itemType="https://schema.org/ListItem"
                            >
                              <meta itemProp="position" content={String(idx + 1)} />
                              <CheckCircle2 className="w-4 h-4 text-[#F4A049] shrink-0" />
                              <span itemProp="name">{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Accordion footer CTA */}
                      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#DCDCDC]/10">
                        <span className="text-xs text-[#DCDCDC]/60 font-mono">
                          Ready to deploy for enterprise workloads
                        </span>
                        <GlowButton href="/contact" variant="primary" size="md" icon>
                          Discuss This Capability
                        </GlowButton>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROJECT SCOPE ESTIMATOR ───────────────────────────────────────── */}
      <ProjectEstimator />

      {/* ── AEO / GEO FAQ ACCORDION ──────────────────────────────────────── */}
      <FAQSection />

      {/* ── SECURITY & COMPLIANCE TRUST MATRIX ───────────────────────────── */}
      <TrustMatrix />

      {/* ── BOTTOM CTA ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-[#333333] to-[#282828] border-t border-[#7E4010]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex p-3 rounded-2xl bg-[#282828] border border-[#F4A049]/40 mb-6 shadow-[0_0_25px_rgba(244,160,73,0.3)]">
            <Sparkles className="w-6 h-6 text-[#F4A049]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Transform Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] via-[#DCDCDC] to-[#7E4010]">
              Technology Architecture?
            </span>
          </h2>
          <p className="text-[#DCDCDC]/80 mb-10 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Speak directly with our senior engineers and AI architects about your production roadmap, latency requirements, and system design.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <GlowButton href="/book-consultation" variant="primary" size="lg" icon>
              Book Architecture Session
            </GlowButton>
            <Link
              href="/pipeline"
              className="px-6 py-3.5 rounded-xl border border-[#DCDCDC]/20 text-xs font-mono font-bold uppercase tracking-wider text-[#DCDCDC] hover:text-[#F4A049] hover:border-[#F4A049]/50 hover:bg-[#2E2E2E] transition-all"
            >
              Inspect Engineering Pipeline
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── Project Scope Estimator ─────────────────────────────────────────────────

const ESTIMATOR_DATA: Record<
  string,
  Record<string, { sprint: string; sla: string; arch: string; stack: string[] }>
> = {
  saas: {
    mvp:        { sprint: "6–10 Weeks",  sla: "99.9% Uptime",  arch: "Monolith → Modular",    stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"] },
    growth:     { sprint: "12–18 Weeks", sla: "99.95% Uptime", arch: "Multi-Tenant Microservices", stack: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "Kafka"] },
    enterprise: { sprint: "20–28 Weeks", sla: "99.99% Uptime", arch: "Federated Cloud-Native",   stack: ["Next.js", "Go", "PostgreSQL", "Kubernetes", "Terraform"] },
  },
  ai: {
    mvp:        { sprint: "4–8 Weeks",   sla: "< 400ms P95",   arch: "Serverless Inference",     stack: ["FastAPI", "OpenAI", "Pinecone", "LangChain"] },
    growth:     { sprint: "10–16 Weeks", sla: "< 250ms P95",   arch: "RAG + Agent Orchestration", stack: ["FastAPI", "LangChain", "CrewAI", "Qdrant", "Redis"] },
    enterprise: { sprint: "18–26 Weeks", sla: "< 150ms P95",   arch: "Multi-Agent LLM Cluster",  stack: ["Kubernetes", "vLLM", "CrewAI", "pgvector", "Kafka"] },
  },
  mobile: {
    mvp:        { sprint: "6–10 Weeks",  sla: "60 FPS / 99.5%", arch: "Expo Managed",            stack: ["React Native", "Expo", "Firebase", "AsyncStorage"] },
    growth:     { sprint: "10–16 Weeks", sla: "60 FPS / 99.9%", arch: "Bare Workflow + CI/CD",   stack: ["React Native", "Kotlin", "Swift", "WatermelonDB"] },
    enterprise: { sprint: "16–24 Weeks", sla: "60 FPS / 99.99%",arch: "Native Dual-Track",       stack: ["SwiftUI", "Jetpack Compose", "GraphQL", "Biometrics"] },
  },
  cloud: {
    mvp:        { sprint: "4–6 Weeks",   sla: "99.9% Uptime",  arch: "Managed Cloud (ECS)",      stack: ["Docker", "AWS ECS", "RDS", "GitHub Actions"] },
    growth:     { sprint: "8–14 Weeks",  sla: "99.95% Uptime", arch: "Kubernetes GitOps",        stack: ["EKS", "ArgoCD", "Terraform", "Prometheus", "Grafana"] },
    enterprise: { sprint: "14–22 Weeks", sla: "99.99% Multi-Region", arch: "Zero-Trust IaC Mesh", stack: ["Terraform", "EKS", "Istio", "Vault", "Datadog"] },
  },
};

const SERVICE_LABELS: Record<string, string> = { saas: "Custom SaaS Platform", ai: "AI Agent Swarm", mobile: "Mobile App", cloud: "Cloud Infrastructure" };
const SCALE_LABELS: Record<string, string> = { mvp: "MVP / Prototype", growth: "Growth / Scale", enterprise: "Enterprise / Mission-Critical" };

function ProjectEstimator() {
  const [svc, setSvc] = useState("saas");
  const [scale, setScale] = useState("mvp");
  const result = ESTIMATOR_DATA[svc][scale];

  const svcBtns = Object.keys(SERVICE_LABELS);
  const scaleBtns = Object.keys(SCALE_LABELS);

  return (
    <section className="py-20 sm:py-24 bg-[#2E2E2E] border-t border-[#7E4010]/30 relative overflow-hidden" aria-labelledby="estimator-heading">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[260px] bg-gradient-to-r from-[#F4A049]/8 via-[#7E4010]/10 to-[#F4A049]/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#282828] border border-[#F4A049]/40 text-xs font-mono text-[#F4A049] mb-4 shadow-[0_0_14px_rgba(244,160,73,0.2)]">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span className="text-white font-semibold">PROJECT SCOPE ESTIMATOR</span>
          </div>
          <h2 id="estimator-heading" className="text-3xl sm:text-4xl font-extrabold text-white">
            Estimate Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] to-[#7E4010]">Sprint & SLA</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#DCDCDC]/75 max-w-2xl mx-auto">Select your service type and project scale to receive a real-time engineering estimate.</p>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-[#2C2C2C] to-[#1E1E1E] border border-[#DCDCDC]/12 p-6 sm:p-8 space-y-8">
          {/* Service Type Selector */}
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#DCDCDC]/55 mb-3">Service Type</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {svcBtns.map((k) => (
                <button key={k} type="button" onClick={() => setSvc(k)}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    svc === k
                      ? "bg-[#F4A049]/15 border-[#F4A049] text-[#F4A049] shadow-[0_0_14px_rgba(244,160,73,0.25)]"
                      : "bg-[#282828] border-[#DCDCDC]/12 text-[#DCDCDC]/70 hover:border-[#F4A049]/40 hover:text-white"
                  }`}
                >{SERVICE_LABELS[k]}</button>
              ))}
            </div>
          </div>

          {/* Scale Selector */}
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#DCDCDC]/55 mb-3">Project Scale</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {scaleBtns.map((k) => (
                <button key={k} type="button" onClick={() => setScale(k)}
                  className={`py-2.5 px-4 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    scale === k
                      ? "bg-[#F4A049]/15 border-[#F4A049] text-[#F4A049] shadow-[0_0_14px_rgba(244,160,73,0.25)]"
                      : "bg-[#282828] border-[#DCDCDC]/12 text-[#DCDCDC]/70 hover:border-[#F4A049]/40 hover:text-white"
                  }`}
                >{SCALE_LABELS[k]}</button>
              ))}
            </div>
          </div>

          {/* Live Estimate Output */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#DCDCDC]/10">
            {[
              { icon: <Timer className="w-4 h-4 text-[#F4A049]" />, label: "Sprint Duration", value: result.sprint },
              { icon: <BadgeCheck className="w-4 h-4 text-[#F4A049]" />, label: "SLA Tier", value: result.sla },
              { icon: <GitBranch className="w-4 h-4 text-[#F4A049]" />, label: "Architecture Pattern", value: result.arch },
            ].map((item) => (
              <div key={item.label} className="p-4 rounded-xl bg-[#282828] border border-[#F4A049]/25 shadow-[0_0_18px_rgba(244,160,73,0.1)]">
                <div className="flex items-center gap-2 mb-2">{item.icon}<span className="text-[10px] font-mono uppercase tracking-wider text-[#DCDCDC]/55">{item.label}</span></div>
                <div className="text-sm sm:text-base font-bold text-white">{item.value}</div>
              </div>
            ))}
          </div>

          {/* Recommended Stack */}
          <div className="p-4 rounded-xl bg-[#282828] border border-[#DCDCDC]/10">
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#DCDCDC]/55 mb-3">Recommended Stack</p>
            <div className="flex flex-wrap gap-2">
              {result.stack.map((t) => (
                <span key={t} className="px-3 py-1 rounded-lg bg-[#333333] border border-[#F4A049]/30 text-xs font-mono text-[#F4A049]">{t}</span>
              ))}
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <GlowButton href="/book-consultation" variant="primary" size="md" icon>Lock In This Architecture</GlowButton>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ Section ─────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: "What is the average timeline for custom enterprise SaaS application development?",
    a: "A production-ready SaaS application typically takes 6 to 18 weeks depending on project scope. A working MVP takes 6–10 weeks; a growth-stage platform with automated billing and team permissions takes 12–18 weeks; and large enterprise systems take 20–28 weeks. We deliver working software every Friday with weekly demos and clear milestone gates.",
  },
  {
    q: "How does NexBridge guarantee ultra-fast response times under 250ms for AI applications?",
    a: "We design AI systems using smart caching and lightweight routing. Common questions are answered instantly from memory in under 50 milliseconds, while complex queries are routed to advanced models like GPT-4o or Claude. This keeps response times ultra-fast while cutting overall API costs by up to 40%.",
  },
  {
    q: "Can you upgrade our old legacy software to modern systems without downtime?",
    a: "Yes. We run your new modern software side-by-side with your existing legacy system during the upgrade. User traffic is shifted gradually with continuous automated health checks. If any issue occurs, traffic instantly routes back, ensuring your customers experience 100% uptime with zero interruptions.",
  },
  {
    q: "What security and data privacy standards (SOC-2, GDPR, HIPAA) do you follow?",
    a: "Every system we build includes bank-grade security by default. We implement automated data encryption (AES-256), strict role-based access controls, daily automated backups, and full compliance with SOC-2 Type II, GDPR, and HIPAA data privacy regulations.",
  },
];

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      className="py-20 sm:py-24 bg-[#333333] border-t border-[#7E4010]/30"
      aria-labelledby="faq-heading"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQ_ITEMS.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#282828] border border-[#F4A049]/40 text-xs font-mono text-[#F4A049] mb-4 shadow-[0_0_14px_rgba(244,160,73,0.2)]">
            <Zap className="w-3.5 h-3.5" />
            <span className="text-white font-semibold">EXPERT ANSWERS</span>
          </div>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-extrabold text-white">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] to-[#7E4010]">Questions</span>
          </h2>
          <p className="mt-3 text-sm text-[#DCDCDC]/75 max-w-2xl mx-auto">Clear, direct answers to common questions about our custom software development and AI integration services.</p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                open === i
                  ? "bg-gradient-to-br from-[#2C2C2C] to-[#1E1E1E] border-[#F4A049]/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)] ring-1 ring-[#F4A049]/20"
                  : "bg-[#2C2C2C] border-[#DCDCDC]/12 hover:border-[#F4A049]/40"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer group"
                aria-expanded={open === i}
              >
                <span
                  className="text-sm sm:text-base font-semibold text-white group-hover:text-[#F4A049] transition-colors pr-4 leading-snug"
                  itemProp="name"
                >
                  {item.q}
                </span>
                <ChevronDown className={`w-5 h-5 text-[#DCDCDC]/50 shrink-0 transition-transform duration-300 ${
                  open === i ? "rotate-180 text-[#F4A049]" : "group-hover:text-white"
                }`} />
              </button>
              {open === i && (
                <div
                  className="px-5 sm:px-6 pb-6 border-t border-[#DCDCDC]/10 pt-4"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p className="text-sm sm:text-base text-[#DCDCDC]/85 leading-relaxed" itemProp="text">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Security & Compliance Trust Matrix ──────────────────────────────────────

const TRUST_BADGES = [
  {
    icon: <FileCheck2 className="w-7 h-7 text-[#F4A049]" />,
    title: "SOC-2 Type II",
    sub: "Audit-Ready Security",
    desc: "Rigorous security, privacy, and confidentiality controls with continuous compliance verification to protect enterprise data.",
  },
  {
    icon: <Shield className="w-7 h-7 text-[#F4A049]" />,
    title: "OWASP Top 10",
    sub: "Application Defense",
    desc: "Every API and web interface is fortified against hacking attempts, data injections, and unauthorized access.",
  },
  {
    icon: <Globe className="w-7 h-7 text-[#F4A049]" />,
    title: "GDPR Compliant",
    sub: "Data Privacy by Design",
    desc: "Complete privacy protection, right-to-be-forgotten workflows, and strict compliance with European and global data laws.",
  },
  {
    icon: <ServerCrash className="w-7 h-7 text-[#F4A049]" />,
    title: "AWS Architecture",
    sub: "Proven Cloud Standards",
    desc: "Every cloud deployment follows official best practices for high availability, fast performance, and cost optimization.",
  },
  {
    icon: <Lock className="w-7 h-7 text-[#F4A049]" />,
    title: "AES-256 Encryption",
    sub: "Bank-Grade Encryption",
    desc: "All client and user data is protected with military-grade AES-256 encryption both in storage and across the network.",
  },
  {
    icon: <BadgeCheck className="w-7 h-7 text-[#F4A049]" />,
    title: "Bank-Grade Security",
    sub: "Multi-Layer Protection",
    desc: "Multi-tier security firewalls, strict user role permissions, and continuous automated scans ensure zero unauthorized access.",
  },
];

function TrustMatrix() {
  return (
    <section
      className="py-20 sm:py-24 bg-[#2E2E2E] border-t border-[#7E4010]/30 relative overflow-hidden"
      aria-labelledby="trust-heading"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-[#7E4010]/8 via-[#F4A049]/6 to-[#7E4010]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#282828] border border-[#F4A049]/40 text-xs font-mono text-[#F4A049] mb-4 shadow-[0_0_14px_rgba(244,160,73,0.2)]">
            <Shield className="w-3.5 h-3.5" />
            <span className="text-white font-semibold">ENTERPRISE COMPLIANCE</span>
          </div>
          <h2 id="trust-heading" className="text-3xl sm:text-4xl font-extrabold text-white" itemProp="name">
            Security & Compliance{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] via-[#DCDCDC] to-[#7E4010]">Trust Matrix</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#DCDCDC]/80" itemProp="description">
            Every NexBridge architecture is engineered to the highest enterprise security, privacy, and compliance standards — by default, not as an afterthought.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TRUST_BADGES.map((badge) => (
            <div
              key={badge.title}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#2C2C2C] to-[#1E1E1E] border border-[#DCDCDC]/12 hover:border-[#F4A049]/65 hover:shadow-[0_0_28px_rgba(244,160,73,0.2)] transition-all duration-300 overflow-hidden"
            >
              {/* Icon row */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-[#282828] border border-[#F4A049]/25 group-hover:border-[#F4A049]/60 group-hover:shadow-[0_0_14px_rgba(244,160,73,0.25)] transition-all">
                  {badge.icon}
                </div>
                <ChevronRight className="w-4 h-4 text-[#DCDCDC]/25 group-hover:text-[#F4A049] transition-colors mt-1" />
              </div>
              {/* Text */}
              <h3 className="text-base font-bold text-white group-hover:text-[#F4A049] transition-colors">{badge.title}</h3>
              <p className="text-[10px] font-mono uppercase tracking-wider text-[#F4A049]/75 mt-0.5 mb-3">{badge.sub}</p>
              <p className="text-xs sm:text-sm text-[#DCDCDC]/70 leading-relaxed">{badge.desc}</p>
              {/* Corner ambient glow */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#F4A049]/6 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Compliance CTA strip */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 p-5 rounded-2xl bg-[#282828] border border-[#DCDCDC]/10">
          <div className="flex items-center gap-3">
            <BadgeCheck className="w-5 h-5 text-[#F4A049]" />
            <span className="text-sm text-[#DCDCDC]/80 font-medium">Need a compliance-first architecture for regulated industries?</span>
          </div>
          <GlowButton href="/contact" variant="primary" size="sm" icon>Request Compliance Audit</GlowButton>
        </div>
      </div>
    </section>
  );
}

// ─── Root Export with Suspense ────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#333333]" />}>
      <ServicesContent />
    </Suspense>
  );
}
