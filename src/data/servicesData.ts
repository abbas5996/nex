export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  badge: string;
  highlights: string[];
  gradient: string;
  slug: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'enterprise-ai',
    title: 'Enterprise AI & GenAI Systems',
    shortDesc: 'Custom LLM architectures, fine-tuned foundational models, autonomous agent orchestration, and enterprise RAG pipelines.',
    iconName: 'BrainCircuit',
    badge: 'Flagship AI',
    highlights: ['Autonomous Agent Swarms', 'Sub-second Vector Search', 'Enterprise Guardrails & RAG', 'Proprietary Fine-Tuning'],
    gradient: 'from-blue-600/30 via-indigo-600/20 to-pink-600/20',
    slug: '/services#enterprise-ai',
  },
  {
    id: 'fullstack-web',
    title: 'Full-Stack Web & MERN Applications',
    shortDesc: 'High-throughput modern web architectures with React, Next.js, Node.js, and Express designed for mission-critical scale.',
    iconName: 'Boxes',
    badge: 'MERN Stack',
    highlights: ['Server-Driven Microfrontends', 'Real-time WebSocket Engines', 'Sub-100ms API Latency', 'SEO & Core Web Vitals Dominance'],
    gradient: 'from-cyan-600/30 via-blue-600/20 to-violet-600/20',
    slug: '/services#fullstack-web',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Infrastructure & DevOps',
    shortDesc: 'Automated CI/CD pipelines, Kubernetes microservices, multi-region resilience, and zero-trust cloud security models.',
    iconName: 'CloudCog',
    badge: 'Cloud Native',
    highlights: ['Multi-Cloud (AWS, GCP, Azure)', 'Infrastructure as Code (Terraform)', 'Kubernetes Cluster Meshes', '99.99% Guaranteed SLA Uptime'],
    gradient: 'from-blue-500/30 via-emerald-600/20 to-teal-600/20',
    slug: '/services#cloud-devops',
  },
  {
    id: 'custom-saas',
    title: 'Custom SaaS & Enterprise Software',
    shortDesc: 'Bespoke multi-tenant SaaS platforms engineered with scalable subscription billing, RBAC authorization, and high security.',
    iconName: 'Layers',
    badge: 'Enterprise SaaS',
    highlights: ['Multi-Tenant Data Isolation', 'Automated Stripe & Metered Billing', 'SOC-2 Compliance Architecture', 'Custom Workflow Automation'],
    gradient: 'from-pink-600/30 via-rose-600/20 to-purple-600/20',
    slug: '/services#custom-saas',
  },
  {
    id: 'mobile-engineering',
    title: 'Mobile & Cross-Platform Solutions',
    shortDesc: 'Native-feel iOS and Android applications built with React Native and Flutter with seamless cloud syncing and offline support.',
    iconName: 'Smartphone',
    badge: 'Cross-Platform',
    highlights: ['60 FPS Native Performance', 'Offline-First SQLite Architecture', 'Biometric & Hardware Interop', 'Instant OTA Updates'],
    gradient: 'from-violet-600/30 via-pink-600/20 to-amber-600/20',
    slug: '/services#mobile-engineering',
  },
  {
    id: 'data-engineering',
    title: 'Database & High-Throughput Data',
    shortDesc: 'Distributed SQL & NoSQL engineering, low-latency Redis caching layers, and high-volume event streaming pipelines.',
    iconName: 'DatabaseZap',
    badge: 'Data Mesh',
    highlights: ['pgvector & Hybrid Semantic Indexing', 'Kafka & Event-Driven Streaming', 'Zero-Downtime Live Migrations', 'Ultra-Low Latency In-Memory Mesh'],
    gradient: 'from-blue-600/30 via-cyan-600/20 to-indigo-600/20',
    slug: '/services#data-engineering',
  },
];
