"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import "locomotive-scroll/dist/locomotive-scroll.css";

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const pathname = usePathname();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollInstanceRef = useRef<any>(null);

  useEffect(() => {
    let isDestroyed = false;

    const initScroll = async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;

        if (isDestroyed) return;

        // Initialize Locomotive Scroll v5 with slow-motion silky inertia
        const scroll = new LocomotiveScroll({
          lenisOptions: {
            lerp: 0.065, // Low lerp gives that luxurious cinematic "slow motion" deceleration
            duration: 1.6, // Longer duration for buttery inertia
            smoothWheel: true,
            wheelMultiplier: 0.85, // Controlled wheel sensitivity
            touchMultiplier: 1.5,
            infinite: false,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential decay
          },
        });

        scrollInstanceRef.current = scroll;
      } catch (err) {
        console.error("Locomotive Scroll initialization failed:", err);
      }
    };

    initScroll();

    return () => {
      isDestroyed = true;
      if (scrollInstanceRef.current) {
        try {
          scrollInstanceRef.current.destroy();
        } catch (e) {
          console.warn("Locomotive Scroll destroy warning:", e);
        }
        scrollInstanceRef.current = null;
      }
    };
  }, []);

  // Update & scroll to top on route change
  useEffect(() => {
    if (scrollInstanceRef.current) {
      try {
        scrollInstanceRef.current.scrollTo(0, { immediate: true });
        setTimeout(() => {
          scrollInstanceRef.current?.resize();
        }, 100);
      } catch {
        // Fallback to window scrollTo
        window.scrollTo(0, 0);
      }
    }
  }, [pathname]);

  return <>{children}</>;
}
