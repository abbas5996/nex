import type { Metadata } from "next";
import StoryVisionPart1 from "@/components/about/StoryVisionPart1";
import StoryVisionPart2 from "@/components/about/StoryVisionPart2";

export const metadata: Metadata = {
  title: "Story & Vision | NexBridge Tech Consulting | Custom Software & AI Development",
  description:
    "Discover the mission and technology vision of NexBridge Tech Consulting. A premier custom software development company and enterprise AI agency delivering modern web applications, mobile apps, and scalable cloud solutions.",
  keywords: [
    "Custom Software Development Company",
    "AI Development Agency",
    "Enterprise SaaS Development",
    "Custom Mobile App Development",
    "Cloud Migration Services",
    "AI Integration Consultants",
    "Web Development Agency",
    "Full-Stack Web Development",
    "Bank-Grade Security"
  ],
  authors: [{ name: "NexBridge Tech Consulting" }],
  creator: "NexBridge Tech Consulting",
  publisher: "NexBridge Tech Consulting",
  openGraph: {
    title: "Story & Vision | NexBridge Tech Consulting",
    description:
      "Discover the mission, technology standards, and future vision of NexBridge. Delivering custom software, enterprise AI solutions, and high-performance cloud platforms.",
    url: "https://nexbridge.tech/story-vision",
    siteName: "NexBridge Tech Consulting",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Story & Vision | NexBridge Tech Consulting",
    description:
      "Discover the mission and technology roadmap of NexBridge Tech Consulting. Custom Software Development, Enterprise AI Solutions, and Scalable Cloud Hosting.",
  },
  alternates: {
    canonical: "https://nexbridge.tech/story-vision",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nexbridge.tech/#organization",
      name: "NexBridge Tech Consulting",
      url: "https://nexbridge.tech",
      logo: "https://nexbridge.tech/title_logo.png",
      slogan: "Senior Human Architecture Amplified by Autonomous AI Engineering",
      description:
        "Tier-1 Technology Consulting firm specializing in Enterprise AI Strategy, Sovereign AI Infrastructure, Zero-Trust Microservices, and High-Throughput Cloud Infrastructure.",
      knowsAbout: [
        "Autonomous AI Agent Swarms",
        "Sovereign AI Architecture",
        "Deterministic RAG Workflows",
        "Next.js Enterprise Systems",
        "Zero-Trust Cloud Mesh",
        "EU AI Act Governance"
      ],
      publishingPrinciples: "https://nexbridge.tech/story-vision#ethics",
      sameAs: [
        "https://linkedin.com/company/nexbridge-tech",
        "https://github.com/nexbridge-tech",
        "https://twitter.com/nexbridgetech",
      ],
    },
    {
      "@type": "AboutPage",
      "@id": "https://nexbridge.tech/story-vision/#webpage",
      url: "https://nexbridge.tech/story-vision",
      name: "Story & Vision | NexBridge Tech Consulting",
      isPartOf: { "@id": "https://nexbridge.tech/#website" },
      about: { "@id": "https://nexbridge.tech/#organization" },
      description:
        "Discover the origins and future roadmap of NexBridge Tech Consulting. We pioneer autonomous multi-agent AI ecosystems, sovereign AI architectures, and high-concurrency cloud systems.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://nexbridge.tech",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Story & Vision",
            item: "https://nexbridge.tech/story-vision",
          },
        ],
      },
    },
  ],
};

export default function StoryVisionPage() {
  return (
    <main
      className="min-h-screen bg-[#333333] text-[#DCDCDC] overflow-x-hidden selection:bg-[#F4A049] selection:text-[#333333]"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      {/* Search Engine Optimization JSON-LD (AEO/GEO Schema) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Part 1: Hero Header, Origin Timeline & Inflection Milestones */}
      <StoryVisionPart1 />

      {/* Part 2: Future Vision Bento Matrix, Sovereign AI Matrix, AI Governance Grid & Strategy CTA */}
      <StoryVisionPart2 />
    </main>
  );
}
