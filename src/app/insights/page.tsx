import { Metadata } from "next";
import InsightsClientUI from "@/components/insights/InsightsClientUI";
import { BLOG_POSTS } from "@/data/blogData";

export const metadata: Metadata = {
  title: "Tech Insights & AI Engineering Blueprints | NexBridge Consulting",
  description:
    "Deep technical blueprints, battle-tested system patterns, and architectural breakdowns on Autonomous AI Swarms, Next.js 16 Server Components, Enterprise RAG, and Zero-Downtime GitOps.",
  keywords: [
    "Enterprise AI Engineering Agency",
    "Autonomous AI Agent Swarms",
    "Next.js 16 MERN Architecture",
    "Enterprise RAG Benchmarks",
    "Zero-Downtime Kubernetes GitOps",
    "pgvector FastAPI Semantic Search"
  ],
  alternates: {
    canonical: "https://nexbridge.tech/insights",
  },
  openGraph: {
    title: "Tech Insights & AI Engineering Blueprints | NexBridge Consulting",
    description:
      "Deep technical blueprints, battle-tested system patterns, and architectural breakdowns on Autonomous AI Swarms, Next.js 16, and Enterprise RAG.",
    url: "https://nexbridge.tech/insights",
    siteName: "NexBridge Tech Consulting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Insights & AI Engineering Blueprints | NexBridge Consulting",
    description:
      "Deep technical blueprints, battle-tested system patterns, and architectural breakdowns on Autonomous AI Swarms, Next.js 16, and Enterprise RAG.",
  },
};

export default function InsightsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": "https://nexbridge.tech/insights#blog",
        "name": "NexBridge Tech Insights & Engineering Blueprints",
        "description": "Production architectures, AI breakthroughs, and enterprise engineering intelligence.",
        "publisher": {
          "@type": "Organization",
          "name": "NexBridge Tech Consulting",
          "url": "https://nexbridge.tech"
        },
        "blogPost": BLOG_POSTS.map((post) => ({
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "datePublished": post.date,
          "author": {
            "@type": "Person",
            "name": post.author.name,
            "jobTitle": post.author.role
          },
          "articleSection": post.category
        }))
      },
      {
        "@type": "FAQPage",
        "@id": "https://nexbridge.tech/insights#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are the latency tradeoffs between custom LLM fine-tuning and RAG pipelines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "RAG introduces retrieval latency (typically 40–120ms for vector search and reranking) but provides real-time access to dynamic data with zero training overhead. Custom fine-tuning eliminates vector retrieval latency, achieving faster first-token responses (<150ms), but requires high upfront GPU costs and cannot reflect real-time enterprise data changes without continuous retraining pipelines."
            }
          },
          {
            "@type": "Question",
            "name": "How do multi-agent AI swarms achieve sub-250ms execution in enterprise environments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "By leveraging async event-driven orchestration (LangChain LCEL with Redis semantic cache), compiled prompt templates, and streaming WebSocket payloads. Agents utilize localized small language models (SLMs) like Mistral-NeMo or Llama 3 for routing, delegating only heavy synthesis tasks to frontier models like GPT-4o."
            }
          },
          {
            "@type": "Question",
            "name": "What cloud infrastructure is required for zero-downtime microservice migration?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We architect multi-region Kubernetes clusters (EKS/GKE) with blue/green deployment ingress controllers, automated health check rollbacks, and dual-write database replication. Traffic is progressively shifted via DNS-weighted edge routing to guarantee 99.99% availability during version cutovers."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InsightsClientUI />
    </>
  );
}
