import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface GlowButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "accent" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  icon?: boolean;
}

export default function GlowButton({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  icon = false,
}: GlowButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs font-semibold tracking-wide",
    md: "px-6 py-3 text-sm font-semibold tracking-wide",
    lg: "px-8 py-4 text-base font-bold tracking-wide",
  };

  const variantClasses = {
    primary:
      "relative bg-gradient-to-r from-[#F4A049] to-[#7E4010] text-white shadow-[0_0_20px_rgba(244,160,73,0.4)] hover:shadow-[0_0_30px_rgba(244,160,73,0.65)] hover:scale-[1.02] border border-[#F4A049]/30 active:scale-[0.98]",
    secondary:
      "relative bg-[#333333]/90 hover:bg-[#333333] text-[#DCDCDC] hover:text-white border border-[#DCDCDC]/30 hover:border-[#F4A049]/70 shadow-[0_0_15px_rgba(244,160,73,0.15)] hover:shadow-[0_0_25px_rgba(244,160,73,0.3)] hover:scale-[1.02] active:scale-[0.98] backdrop-blur-sm",
    accent:
      "relative bg-[#F4A049] hover:bg-[#F4A049]/90 text-white shadow-[0_0_25px_rgba(244,160,73,0.5)] hover:shadow-[0_0_35px_rgba(244,160,73,0.7)] hover:scale-[1.02] active:scale-[0.98]",
    outline:
      "relative bg-transparent text-[#DCDCDC] hover:text-white border border-[#DCDCDC]/30 hover:border-[#F4A049]/60 hover:bg-[#333333]/40 active:scale-[0.98]",
  };

  const combinedClasses = `inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-300 font-sans cursor-pointer select-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        <span>{children}</span>
        {icon && <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      <span>{children}</span>
      {icon && <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </button>
  );
}
