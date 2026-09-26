"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Story & Vision", href: "/story-vision" },
  { label: "Services", href: "/services" },
  { label: "Development Process", href: "/pipeline" },
  { label: "Insights", href: "/insights" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    if (href === "/pipeline") return pathname === "/pipeline" || pathname.startsWith("/process");
    if (href === "/insights") return pathname === "/insights" || pathname.startsWith("/blog");
    return pathname === href || pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-[#333333]/95 backdrop-blur-xl border-b border-[#DCDCDC]/15 shadow-[0_4px_30px_rgba(0,0,0,0.6)] py-2.5"
        : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2.5 sm:gap-3">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-[#F4A049]/50 bg-[#242424] shadow-[0_0_15px_rgba(244,160,73,0.3)] group-hover:border-[#F4A049] transition-all flex items-center justify-center shrink-0">
              <Image src="/title_logo.png" alt="NexBridge Logo" fill sizes="40px" className="object-contain p-1" priority />
              <div className="absolute inset-0 border border-[#F4A049]/40 rounded-xl pointer-events-none animate-pulse" />
            </div>
            <div className="flex flex-col leading-tight">
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-extrabold text-white group-hover:text-[#F4A049] transition-colors">
                  NexBridge
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4A049] shadow-[0_0_8px_#F4A049] animate-pulse" />
              </div>
              <span className="text-[8px] sm:text-[9px] font-mono tracking-widest text-[#DCDCDC]/75 uppercase">
                Tech Consulting
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#333333]/90 border border-[#DCDCDC]/15 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-xs transition-all duration-300 ${active
                    ? "bg-[#F4A049] text-[#333333] font-semibold shadow-[0_0_15px_rgba(244,160,73,0.5)] rounded-full px-4 py-1.5"
                    : "px-3.5 py-1.5 font-medium text-[#DCDCDC] hover:text-[#F4A049] rounded-full hover:bg-[#242424]"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center">
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#F4A049] to-[#7E4010] shadow-[0_0_20px_rgba(244,160,73,0.35)] hover:shadow-[0_0_30px_rgba(244,160,73,0.6)] hover:scale-105 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-[#333333] border border-[#DCDCDC]/20 text-[#DCDCDC] hover:text-white"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-[#F4A049]" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#333333]/98 border-b border-[#DCDCDC]/15 px-5 py-5 backdrop-blur-2xl shadow-2xl">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium py-2.5 px-3.5 rounded-xl border transition-all flex items-center justify-between ${active
                    ? "bg-[#F4A049] text-[#333333] font-semibold border-[#F4A049] shadow-[0_0_15px_rgba(244,160,73,0.4)]"
                    : "text-[#DCDCDC] hover:text-[#F4A049] hover:bg-[#242424] border-transparent"
                    }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${active ? "text-[#333333]" : "text-[#F4A049]"}`} />
                </Link>
              );
            })}
            <div className="pt-3">
              <Link
                href="/book-consultation"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#F4A049] to-[#7E4010] shadow-[0_0_20px_rgba(244,160,73,0.4)]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Free Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
