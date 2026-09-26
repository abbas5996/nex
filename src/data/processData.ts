export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  duration: string;
  iconName: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Architecture Design',
    tagline: 'Precision Systems Blueprinting',
    description: 'We perform deep technical discovery, map out high-concurrency microservice topology, design data flows, and establish robust AI orchestration pipelines.',
    deliverables: ['System Architecture Diagram', 'Tech Stack & Cloud Matrix', 'Security & Compliance Blueprint', 'Agile Sprint Roadmap'],
    duration: 'Sprint 0 (1-2 Weeks)',
    iconName: 'Compass',
  },
  {
    number: '02',
    title: 'Agile Prototyping & AI Modeling',
    tagline: 'Rapid Proof-of-Concept & Validation',
    description: 'Our engineers build interactive prototypes, validate custom LLM embeddings, fine-tune model parameters, and benchmark database latency.',
    deliverables: ['Working MVP / Alpha Prototype', 'AI Model Evaluation Metrics', 'Interactive UI Design Specs', 'Core API Contracts'],
    duration: 'Weeks 2 - 4',
    iconName: 'Cpu',
  },
  {
    number: '03',
    title: 'Scalable Engineering & Security Rigor',
    tagline: 'Production-Grade Full-Stack Build',
    description: 'Full-throttle engineering with clean TypeScript, zero-defect code review cycles, automated unit/integration test suites, and strict SOC-2/OWASP compliance.',
    deliverables: ['End-to-End Enterprise Codebase', 'Automated CI/CD Pipeline', 'Security Vulnerability Scan Report', 'Multi-Region Cloud Infrastructure'],
    duration: 'Weeks 4 - 10',
    iconName: 'ShieldCheck',
  },
  {
    number: '04',
    title: 'Continuous Deployment & Hyper-Scaling',
    tagline: 'Zero-Downtime Rollout & 24/7 Monitoring',
    description: 'Blue-green deployment strategies, real-time APM telemetry, auto-scaling Kubernetes clusters, and ongoing iterative feature velocity.',
    deliverables: ['Live Production Deployment', 'Automated Telemetry & APM', 'Disaster Recovery Failover', 'Post-Launch Scale Optimization'],
    duration: 'Continuous / Ongoing',
    iconName: 'Rocket',
  },
];
