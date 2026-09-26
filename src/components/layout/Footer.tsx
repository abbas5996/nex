import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  MapPin,
  ShieldCheck,
  Cpu,
  Sparkles,
} from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Story & Vision", href: "/story-vision" },
    { label: "Services", href: "/services" },
    { label: "Development Process", href: "/pipeline" },
    { label: "Insights & Guides", href: "/insights" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  const serviceLinks = [
    { label: "Custom AI & Smart Automation", href: "/services?target=ai" },
    { label: "Web Development & Modern Apps", href: "/services?target=saas" },
    { label: "Enterprise SaaS Development", href: "/services?target=custom-software" },
    { label: "Custom Mobile App Development", href: "/services?target=mobile-apps" },
    { label: "Cloud Migration Services", href: "/services?target=cloud" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "X (Twitter)",
      href: "https://x.com",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-[#333333] border-t border-[#7E4010]/30 pt-16 pb-10 overflow-hidden text-[#DCDCDC]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F4A049]/8 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7E4010]/12 rounded-full blur-[140px] pointer-events-none translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-14 border-b border-[#DCDCDC]/10">
          
          {/* Column 1: Brand & Social Links */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="group inline-block">
              <div className="relative h-12 w-48 opacity-95 group-hover:opacity-100 transition-opacity">
                <Image
                  src="/heading_logo.png"
                  alt="NexBridge Tech Consulting"
                  fill
                  sizes="192px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-xs text-[#DCDCDC]/80 leading-relaxed max-w-sm mt-1">
              A premier custom software development company and AI development agency. Delivering high-performance web applications, mobile apps, and scalable cloud systems.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-8 h-8 rounded-lg bg-[#282828] border border-[#DCDCDC]/15 flex items-center justify-center text-[#DCDCDC]/70 hover:text-[#F4A049] hover:border-[#F4A049]/60 hover:bg-[#333333] transition-all cursor-pointer"
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F4A049] font-bold mb-4 flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-[#F4A049]" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-2.5 text-xs">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#DCDCDC]/75 hover:text-[#F4A049] hover:translate-x-0.5 transition-all inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Enterprise Services */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F4A049] font-bold mb-4 flex items-center gap-2">
              <Cpu className="w-3 h-3 text-[#F4A049]" />
              <span>Services</span>
            </h4>
            <ul className="space-y-2.5 text-xs">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#DCDCDC]/75 hover:text-[#F4A049] hover:translate-x-0.5 transition-all inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Consultation CTA */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F4A049] font-bold mb-1 flex items-center gap-2">
              <Mail className="w-3 h-3 text-[#F4A049]" />
              <span>Contact Us</span>
            </h4>

            <div className="space-y-3 text-xs font-mono">
              <div>
                <span className="text-[10px] text-[#DCDCDC]/50 block uppercase">Direct Inquiries</span>
                <a
                  href="mailto:contact@nexbridge.tech"
                  className="text-white hover:text-[#F4A049] font-semibold transition-colors flex items-center gap-1.5 mt-0.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#F4A049] shrink-0" />
                  <span>contact@nexbridge.tech</span>
                </a>
              </div>

              <div>
                <span className="text-[10px] text-[#DCDCDC]/50 block uppercase">Global Engineering HQ</span>
                <div className="text-[#DCDCDC]/85 flex items-start gap-1.5 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F4A049] shrink-0 mt-0.5" />
                  <span>San Francisco • New York • London</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <GlowButton href="/book-consultation" variant="primary" size="sm" icon className="w-full">
                Book Consultation
              </GlowButton>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DCDCDC]/60">
          <div>
            © 2026 NexBridge Tech Consulting. All rights reserved.
          </div>

          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-[#F4A049] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#DCDCDC]/20">•</span>
            <Link href="/terms" className="hover:text-[#F4A049] transition-colors">
              Terms of Service
            </Link>
            <span className="text-[#DCDCDC]/20">•</span>
            <span className="flex items-center gap-1 text-[#DCDCDC]/80">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F4A049]" />
              <span>SOC-2 Type II</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
