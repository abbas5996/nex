"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Cpu, HeartHandshake, Zap } from "lucide-react";

// ─── Robotic Cybernetic Hand (AI) — Extends right towards center ─────────────
const RoboticHandSVG = React.memo(function RoboticHandSVG({
  innerRef,
}: {
  innerRef: React.RefObject<SVGSVGElement | null>;
}) {
  return (
    <svg
      ref={innerRef as React.RefObject<SVGSVGElement>}
      viewBox="0 0 500 260"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto will-change-transform select-none"
      style={{ filter: "drop-shadow(0 0 25px rgba(244,160,73,0.3))" }}
      aria-hidden="true"
    >
      <defs>
        {/* Sleek Carbon Armor Gradient */}
        <linearGradient id="robo-chassis" x1="0%" y1="0%" x2="100%" y2="80%">
          <stop offset="0%" stopColor="#2D2D2D" />
          <stop offset="45%" stopColor="#1E1E1E" />
          <stop offset="100%" stopColor="#141414" />
        </linearGradient>

        {/* Polished Metallic Bevel */}
        <linearGradient id="robo-metallic" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="35%" stopColor="#2A2A2A" />
          <stop offset="100%" stopColor="#171717" />
        </linearGradient>

        {/* Titanium Finger Segment */}
        <linearGradient id="robo-finger" x1="0%" y1="30%" x2="100%" y2="70%">
          <stop offset="0%" stopColor="#383838" />
          <stop offset="50%" stopColor="#242424" />
          <stop offset="100%" stopColor="#121212" />
        </linearGradient>

        {/* Warm Orange Glow for Joints */}
        <radialGradient id="joint-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F4A049" stopOpacity="1" />
          <stop offset="40%" stopColor="#F4A049" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#F4A049" stopOpacity="0" />
        </radialGradient>

        {/* Sensor Fingertip Light */}
        <radialGradient id="sensor-tip" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="35%" stopColor="#F4A049" stopOpacity="0.9" />
          <stop offset="80%" stopColor="#7E4010" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#F4A049" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="robo-highlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* ── FOREARM CHASSIS ── */}
      {/* Main tapered forearm shell */}
      <path
        d="M 10 95 C 60 92, 120 95, 175 102 C 205 106, 225 110, 240 118 L 240 148 C 225 156, 205 160, 175 164 C 120 170, 60 172, 10 170 Z"
        fill="url(#robo-chassis)"
        stroke="#383838"
        strokeWidth="1.2"
      />
      {/* Specular top highlight */}
      <path
        d="M 10 95 C 60 92, 120 95, 175 102 C 205 106, 225 110, 240 118 L 240 125 C 220 118, 180 112, 120 106 C 70 101, 25 100, 10 101 Z"
        fill="url(#robo-highlight)"
      />

      {/* Segmented Armor Plates */}
      <path
        d="M 35 105 C 70 103, 100 105, 115 107 L 112 158 C 95 159, 65 161, 35 160 Z"
        fill="url(#robo-metallic)"
        stroke="#2E2E2E"
        strokeWidth="1"
      />
      <path
        d="M 125 108 C 150 110, 175 113, 188 116 L 186 153 C 172 155, 148 157, 123 157 Z"
        fill="#1C1C1C"
        stroke="#333333"
        strokeWidth="1"
      />

      {/* Futuristic Inscribed Circuitry & Vent Grills */}
      <path d="M 45 118 H 85 M 45 125 H 75 M 45 132 H 88" stroke="#F4A049" strokeWidth="0.8" strokeOpacity="0.5" />
      <circle cx="90" cy="118" r="1.8" fill="#F4A049" opacity="0.8" />
      <circle cx="80" cy="125" r="1.8" fill="#DCDCDC" opacity="0.6" />
      <circle cx="93" cy="132" r="1.8" fill="#F4A049" opacity="0.8" />

      {/* Micro Status LEDs */}
      <circle cx="140" cy="126" r="2.2" fill="#F4A049" opacity="0.9" />
      <circle cx="150" cy="126" r="2.2" fill="#F4A049" opacity="0.6" />
      <circle cx="160" cy="126" r="2.2" fill="#7E4010" opacity="0.8" />
      <circle cx="170" cy="126" r="2.2" fill="#DCDCDC" opacity="0.3" />

      {/* Pneumatic Hydraulic Tubing Under Arm */}
      <path
        d="M 30 166 C 70 178, 140 178, 190 168 C 215 163, 230 155, 238 150"
        stroke="#242424"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 30 166 C 70 178, 140 178, 190 168 C 215 163, 230 155, 238 150"
        stroke="#F4A049"
        strokeWidth="1"
        strokeDasharray="4 6"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />

      {/* ── WRIST JOINT ── */}
      <rect x="238" y="112" width="22" height="42" rx="6" fill="#181818" stroke="#F4A049" strokeWidth="1.2" strokeOpacity="0.7" />
      <circle cx="249" cy="133" r="11" fill="#0F0F0F" stroke="#333333" strokeWidth="1" />
      <circle cx="249" cy="133" r="7" fill="#1C1C1C" stroke="#F4A049" strokeWidth="0.8" strokeOpacity="0.8" />
      <circle cx="249" cy="133" r="3.5" fill="#F4A049" opacity="0.9" />

      {/* ── PALM & METACARPAL HOUSING ── */}
      <path
        d="M 260 114 C 285 110, 315 112, 335 118 C 342 120, 345 125, 345 133 C 345 141, 342 146, 335 148 C 315 154, 285 156, 260 152 Z"
        fill="url(#robo-chassis)"
        stroke="#333333"
        strokeWidth="1"
      />
      {/* Palm glowing core ring */}
      <circle cx="298" cy="133" r="9" fill="#121212" stroke="#F4A049" strokeWidth="0.8" strokeOpacity="0.6" />
      <circle cx="298" cy="133" r="4" fill="#F4A049" opacity="0.5" />

      {/* ── LOWER CURVED FINGERS (Middle, Ring, Pinky naturally relaxed) ── */}
      {/* Pinky Finger (subtle lower curve) */}
      <path
        d="M 330 148 C 345 156, 360 162, 375 160 C 382 159, 385 154, 382 149 C 372 146, 355 145, 338 144"
        fill="url(#robo-finger)"
        stroke="#282828"
        strokeWidth="0.8"
      />
      {/* Ring Finger */}
      <path
        d="M 334 142 C 352 148, 375 152, 395 149 C 402 148, 404 142, 398 138 C 382 135, 360 136, 340 137"
        fill="url(#robo-finger)"
        stroke="#2E2E2E"
        strokeWidth="0.8"
      />
      {/* Middle Finger */}
      <path
        d="M 338 135 C 362 138, 390 140, 415 137 C 424 136, 426 129, 418 126 C 395 124, 368 126, 342 128"
        fill="url(#robo-finger)"
        stroke="#333333"
        strokeWidth="0.8"
      />

      {/* Thumb (curled naturally underneath) */}
      <path
        d="M 285 148 C 298 160, 315 170, 335 168 C 342 167, 344 160, 336 156 C 320 152, 305 146, 292 142"
        fill="url(#robo-finger)"
        stroke="#2E2E2E"
        strokeWidth="0.8"
      />

      {/* ── HERO EXTENDED INDEX FINGER (Points to Center x=485, y=130) ── */}
      {/* Knuckle Joint Pivot */}
      <circle cx="344" cy="126" r="6.5" fill="#1A1A1A" stroke="#F4A049" strokeWidth="1" strokeOpacity="0.8" />
      <circle cx="344" cy="126" r="3" fill="#F4A049" opacity="0.85" />

      {/* Proximal Phalanx (Segment 1) */}
      <path
        d="M 349 122 C 365 121, 385 122, 398 123 L 398 133 C 385 134, 365 134, 349 132 Z"
        fill="url(#robo-finger)"
        stroke="#3A3A3A"
        strokeWidth="1"
      />
      <rect x="358" y="124" width="28" height="3" rx="1.5" fill="#111111" />

      {/* Mid Joint Pivot */}
      <circle cx="403" cy="128" r="5" fill="#1C1C1C" stroke="#F4A049" strokeWidth="0.8" strokeOpacity="0.7" />
      <circle cx="403" cy="128" r="2.2" fill="#F4A049" opacity="0.9" />

      {/* Middle Phalanx (Segment 2) */}
      <path
        d="M 407 124 C 420 124, 436 125, 446 126 L 445 134 C 435 134, 420 133, 407 132 Z"
        fill="url(#robo-finger)"
        stroke="#383838"
        strokeWidth="0.9"
      />

      {/* Distal Joint Pivot */}
      <circle cx="449" cy="129.5" r="4.2" fill="#1E1E1E" stroke="#F4A049" strokeWidth="0.7" strokeOpacity="0.8" />
      <circle cx="449" cy="129.5" r="1.8" fill="#F4A049" opacity="0.9" />

      {/* Distal Fingertip Segment (Reaches toward x=485, y=130) */}
      <path
        d="M 453 126 C 465 126.5, 478 128, 484 130 C 478 132, 465 133.5, 453 133 Z"
        fill="url(#robo-finger)"
        stroke="#444444"
        strokeWidth="0.8"
      />

      {/* Illuminated Sensor Tip Node */}
      <circle cx="484" cy="130" r="3.5" fill="#F4A049" />
      <circle cx="484" cy="130" r="1.8" fill="#FFFFFF" />
      <ellipse cx="484" cy="130" rx="9" ry="8" fill="url(#sensor-tip)" />
    </svg>
  );
});

// ─── Human Realistic Hand (Humanity) — Extends left towards center ───────────
const HumanHandSVG = React.memo(function HumanHandSVG({
  innerRef,
}: {
  innerRef: React.RefObject<SVGSVGElement | null>;
}) {
  return (
    <svg
      ref={innerRef as React.RefObject<SVGSVGElement>}
      viewBox="0 0 500 260"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto will-change-transform select-none"
      style={{ filter: "drop-shadow(0 0 25px rgba(126,64,16,0.35))" }}
      aria-hidden="true"
    >
      <defs>
        {/* Warm Natural Skin Palette */}
        <linearGradient id="skin-body" x1="100%" y1="0%" x2="0%" y2="80%">
          <stop offset="0%" stopColor="#C47E3A" />
          <stop offset="45%" stopColor="#BA7230" />
          <stop offset="85%" stopColor="#9E5820" />
          <stop offset="100%" stopColor="#7E3F12" />
        </linearGradient>

        <linearGradient id="skin-finger-grad" x1="100%" y1="30%" x2="0%" y2="70%">
          <stop offset="0%" stopColor="#D28D4E" />
          <stop offset="50%" stopColor="#BE7634" />
          <stop offset="100%" stopColor="#944F18" />
        </linearGradient>

        {/* Ambient Top Light */}
        <linearGradient id="skin-ambient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.16" />
          <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>

        {/* Synergy Rim Light from Center (Left) */}
        <linearGradient id="warm-rim" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#F4A049" stopOpacity="0.35" />
          <stop offset="35%" stopColor="#F4A049" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#F4A049" stopOpacity="0" />
        </linearGradient>

        {/* Fingertip Warm Bloom */}
        <radialGradient id="human-tip-bloom" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#F4A049" stopOpacity="0.8" />
          <stop offset="75%" stopColor="#B55A1A" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#7E4010" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ── WRIST CUFF (Sleek dark sleeve at right edge) ── */}
      <path
        d="M 460 92 C 480 90, 495 89, 500 88 L 500 178 C 490 177, 475 175, 460 173 Z"
        fill="#222222"
        stroke="#333333"
        strokeWidth="1.2"
      />
      <rect x="455" y="90" width="10" height="85" rx="5" fill="#2E2E2E" />

      {/* ── HUMAN FOREARM ── */}
      <path
        d="M 460 93 C 410 93, 350 97, 290 106 C 265 110, 248 116, 235 121 L 235 146 C 250 152, 270 156, 305 160 C 360 167, 415 170, 460 172 Z"
        fill="url(#skin-body)"
      />
      {/* Forearm Top Ambient Highlight */}
      <path
        d="M 460 93 C 410 93, 350 97, 290 106 C 265 110, 248 116, 235 121 L 235 127 C 255 121, 285 114, 340 106 C 390 100, 435 98, 460 98 Z"
        fill="url(#skin-ambient)"
      />
      {/* Subtle Anatomical Vein Line */}
      <path
        d="M 420 115 C 380 113, 345 118, 305 122 C 285 124, 265 128, 250 132"
        stroke="#803D14"
        strokeWidth="1.1"
        strokeOpacity="0.3"
        fill="none"
      />

      {/* ── PALM & THENAR EMINENCE ── */}
      <path
        d="M 238 118 C 215 114, 185 116, 165 122 C 158 124, 154 130, 154 136 C 154 142, 158 147, 166 149 C 185 154, 215 155, 238 148 Z"
        fill="url(#skin-body)"
      />
      {/* Knuckle Creases */}
      <path d="M 175 122 C 172 130, 172 138, 175 146" stroke="#682F0B" strokeWidth="1" strokeOpacity="0.35" fill="none" strokeLinecap="round" />
      <path d="M 185 120 C 182 130, 182 140, 185 148" stroke="#682F0B" strokeWidth="0.8" strokeOpacity="0.25" fill="none" strokeLinecap="round" />

      {/* ── LOWER RELAXED FINGERS (Middle, Ring, Pinky naturally curved) ── */}
      {/* Pinky (gentle soft curl) */}
      <path
        d="M 170 148 C 155 156, 140 162, 125 159 C 118 158, 115 153, 118 148 C 128 145, 145 144, 162 144"
        fill="url(#skin-finger-grad)"
      />
      {/* Ring Finger */}
      <path
        d="M 166 142 C 148 148, 125 152, 105 148 C 98 147, 96 141, 102 137 C 118 134, 140 135, 160 137"
        fill="url(#skin-finger-grad)"
      />
      {/* Middle Finger */}
      <path
        d="M 162 135 C 138 138, 110 140, 85 137 C 76 136, 74 129, 82 126 C 105 124, 132 126, 158 128"
        fill="url(#skin-finger-grad)"
      />

      {/* Thumb (curled gracefully inward) */}
      <path
        d="M 215 147 C 202 159, 185 168, 165 166 C 158 165, 156 158, 164 154 C 180 150, 195 145, 208 141"
        fill="url(#skin-finger-grad)"
      />

      {/* ── HERO EXTENDED INDEX FINGER (Points to Center x=15, y=130) ── */}
      {/* Proximal Phalanx */}
      <path
        d="M 152 122 C 135 121, 115 122, 102 123 L 102 133 C 115 134, 135 134, 152 132 Z"
        fill="url(#skin-finger-grad)"
      />
      {/* Knuckle skin folds */}
      <path d="M 103 124 C 102 128, 102 131, 103 133" stroke="#682F0B" strokeWidth="0.8" strokeOpacity="0.4" fill="none" />

      {/* Middle Phalanx */}
      <path
        d="M 97 124 C 84 124, 68 125, 58 126 L 58 134 C 70 134, 84 133, 97 132 Z"
        fill="url(#skin-finger-grad)"
      />
      {/* Distal joint skin fold */}
      <path d="M 59 126 C 58 129, 58 132, 59 134" stroke="#682F0B" strokeWidth="0.8" strokeOpacity="0.4" fill="none" />

      {/* Distal Phalanx & Fingertip (Reaches toward x=15, y=130) */}
      <path
        d="M 52 126 C 38 126.5, 24 128, 16 130 C 24 132, 38 133.5, 52 133 Z"
        fill="url(#skin-finger-grad)"
      />

      {/* Realistic Fingernail */}
      <path
        d="M 23 127 C 28 126.8, 33 127.2, 36 128 C 36 130, 33 131, 28 131 C 24 131, 22 129, 23 127 Z"
        fill="#D9A872"
        opacity="0.65"
      />
      <path d="M 24 127.5 C 28 127.2, 33 127.6, 35 128.2" stroke="#FFFFFF" strokeWidth="0.6" strokeOpacity="0.5" fill="none" />

      {/* Warm Golden Synergy Glow on Fingertip */}
      <circle cx="16" cy="130" r="3.5" fill="#F4A049" />
      <circle cx="16" cy="130" r="1.8" fill="#FFFFFF" />
      <ellipse cx="16" cy="130" rx="9" ry="8" fill="url(#human-tip-bloom)" />

      {/* Warm Rim Lighting along Hand Silhouette */}
      <path
        d="M 238 118 C 215 114, 185 116, 165 122 L 152 122 L 102 123 L 58 126 L 16 130 L 52 133 L 102 133 L 152 132 L 166 149"
        fill="none"
        stroke="url(#warm-rim)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
});

// ─── Main Component ─────────────────────────────────────────────────────────

export default function HandTouchAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<SVGSVGElement | null>(null);
  const humanRef = useRef<SVGSVGElement | null>(null);
  const energyCoreRef = useRef<HTMLDivElement>(null);
  const energyRingRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  const particlesRef = useRef<
    { x: number; y: number; angle: number; speed: number; radius: number; alpha: number; decay: number; color: string }[]
  >([]);
  const particleActiveRef = useRef(false);

  const [progress, setProgress] = useState(0);
  const [isTouching, setIsTouching] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ── Particle system for subtle dust at convergence ──
  const spawnParticles = useCallback((intensity: number) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const count = Math.floor(intensity * 4);
    const colors = ["#F4A049", "#F5B876", "#7E4010", "#FFFFFF"];
    for (let i = 0; i < count; i++) {
      particlesRef.current.push({
        x: cx + (Math.random() - 0.5) * 16,
        y: cy + (Math.random() - 0.5) * 16,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 2 * intensity + 0.3,
        radius: Math.random() * 2 + 0.8,
        alpha: 0.8,
        decay: Math.random() * 0.018 + 0.012,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    if (particlesRef.current.length > 70) {
      particlesRef.current = particlesRef.current.slice(-70);
    }
  }, []);

  const renderParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesRef.current = particlesRef.current.filter((p) => p.alpha > 0);
    particlesRef.current.forEach((p) => {
      p.x += Math.cos(p.angle) * p.speed;
      p.y += Math.sin(p.angle) * p.speed;
      p.speed *= 0.96;
      p.alpha -= p.decay;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 6;
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    if (particleActiveRef.current || particlesRef.current.length > 0) {
      rafRef.current = requestAnimationFrame(renderParticles);
    }
  }, []);

  // ── Apply convergence progress [0..1] ──
  const applyProgress = useCallback(
    (val: number) => {
      const p = Math.max(0, Math.min(1, val));
      setProgress(p);

      const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
      const isTablet = typeof window !== "undefined" && window.innerWidth < 1024;
      // Generous max offset to guarantee hands start completely FAR APART
      const maxOff = isMobile ? 160 : isTablet ? 260 : 380;
      const offset = (1 - p) * maxOff;

      // Hands: translateX + subtle scaling
      const handScale = 0.9 + p * 0.1;
      if (robotRef.current) {
        robotRef.current.style.transform = `translateX(-${offset}px) scale(${handScale})`;
      }
      if (humanRef.current) {
        humanRef.current.style.transform = `translateX(${offset}px) scale(${handScale})`;
      }

      // Spherical central energy orb
      if (energyCoreRef.current) {
        const coreOpacity = Math.max(0, (p - 0.2) / 0.8);
        const coreScale = 0.2 + p * 0.85;
        energyCoreRef.current.style.opacity = String(coreOpacity);
        energyCoreRef.current.style.transform = `translate(-50%, -50%) scale(${coreScale})`;
      }

      // Energy pulsing ring
      if (energyRingRef.current) {
        const ringOpacity = Math.max(0, (p - 0.35) / 0.65);
        const ringScale = 0.3 + p * 0.7;
        energyRingRef.current.style.opacity = String(ringOpacity);
        energyRingRef.current.style.transform = `translate(-50%, -50%) scale(${ringScale})`;
      }

      // Particles trigger near convergence
      if (p > 0.45) {
        spawnParticles((p - 0.45) / 0.55);
        if (!particleActiveRef.current) {
          particleActiveRef.current = true;
          renderParticles();
        }
      } else {
        particleActiveRef.current = false;
      }

      setIsTouching(p >= 0.92);
    },
    [spawnParticles, renderParticles]
  );

  // ── Bidirectional Scroll Listener: Converges at Center, Separates on Exit ──
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      applyProgress(0.5);
      return;
    }

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // Center of the stage relative to the viewport's center
      const stageCenter = rect.top + rect.height / 2;
      const viewportCenter = vh / 2;
      const distFromCenter = Math.abs(stageCenter - viewportCenter);

      // Active zone: within 58% of viewport height
      const activeRange = vh * 0.58;

      if (distFromCenter >= activeRange) {
        // Outside visible focus: hands stay completely far apart
        applyProgress(0);
      } else {
        // Approaching center: smoothly converges (0 -> 1)
        // Leaving center in either direction: smoothly separates (1 -> 0)
        const raw = 1 - distFromCenter / activeRange;
        // Ease-in-out sine curve for natural physical acceleration
        const smoothed = Math.sin((raw * Math.PI) / 2);
        applyProgress(smoothed);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [applyProgress]);

  // Resize particle canvas
  useEffect(() => {
    const resize = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = canvasRef.current.offsetWidth;
      canvasRef.current.height = canvasRef.current.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section
      ref={containerRef}
      id="hand-touch-experience"
      className="relative py-20 sm:py-28 lg:py-36 bg-[#1A1A1A] overflow-hidden border-y border-[#7E4010]/30"
      aria-label="AI and Human Convergence"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[580px] lg:w-[780px] h-[220px] sm:h-[340px] lg:h-[420px] bg-gradient-to-r from-[#F4A049]/12 via-[#7E4010]/15 to-[#F4A049]/10 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 cyber-dots-bg opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#333333] border border-[#F4A049]/40 text-[10px] sm:text-xs font-mono text-[#DCDCDC] mb-4 shadow-[0_0_15px_rgba(244,160,73,0.2)]">
            <Cpu className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#F4A049]" />
            <span>Interactive Synergy Experience</span>
            <span className="text-[#F4A049]">•</span>
            <HeartHandshake className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#7E4010]" />
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Where{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A049] to-[#DCDCDC]">
              Silicon
            </span>{" "}
            Meets{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DCDCDC] to-[#7E4010]">
              Humanity
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#DCDCDC]/80">
            Scroll down or up to initiate the convergence between Autonomous AI and Human Creativity.
          </p>
        </div>

        {/* Animation Stage */}
        <div className="relative w-full max-w-5xl mx-auto h-[220px] sm:h-[320px] lg:h-[420px] rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#242424]/95 to-[#161616]/98 border border-[#7E4010]/30 shadow-[0_25px_70px_rgba(0,0,0,0.85)] overflow-hidden flex items-center">
          {/* Particle canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-30"
          />

          {/* Center Spherical Energy Elements (No line cutting across) */}
          <div className="absolute top-1/2 left-1/2 z-20 pointer-events-none">
            {/* Core Radiant Orb */}
            <div
              ref={energyCoreRef}
              className="absolute w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 rounded-full"
              style={{
                opacity: 0,
                transform: "translate(-50%, -50%) scale(0.2)",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.98) 0%, rgba(244,160,73,0.85) 30%, rgba(126,64,16,0.35) 65%, transparent 100%)",
                boxShadow:
                  "0 0 35px rgba(244,160,73,0.8), 0 0 70px rgba(244,160,73,0.4), 0 0 110px rgba(126,64,16,0.25)",
              }}
            />
            {/* Soft Ambient Pulsing Ring */}
            <div
              ref={energyRingRef}
              className="absolute w-24 sm:w-36 lg:w-52 h-24 sm:h-36 lg:h-52 rounded-full border border-[#F4A049]/50"
              style={{
                opacity: 0,
                transform: "translate(-50%, -50%) scale(0.3)",
                boxShadow: "0 0 20px rgba(244,160,73,0.4), inset 0 0 20px rgba(244,160,73,0.15)",
              }}
            />
            {/* Touch Point Glow Bloom */}
            {isTouching && (
              <div
                className="absolute w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-white"
                style={{
                  transform: "translate(-50%, -50%)",
                  boxShadow:
                    "0 0 20px #FFFFFF, 0 0 40px #F4A049, 0 0 65px rgba(244,160,73,0.8)",
                  animation: "pulse-glow 0.8s ease-in-out infinite",
                }}
              />
            )}
          </div>

          {/* Hands Stage */}
          <div className="relative w-full h-full flex items-center justify-between z-10 px-2 sm:px-4">
            {/* AI Robotic Hand — Left */}
            <div className="flex-1 flex items-center justify-end" style={{ maxWidth: "50%" }}>
              <div
                className="w-[170px] sm:w-[280px] md:w-[360px] lg:w-[460px]"
                style={{ flexShrink: 0 }}
              >
                <RoboticHandSVG innerRef={robotRef} />
              </div>
            </div>

            {/* Human Hand — Right */}
            <div className="flex-1 flex items-center justify-start" style={{ maxWidth: "50%" }}>
              <div
                className="w-[170px] sm:w-[280px] md:w-[360px] lg:w-[460px]"
                style={{ flexShrink: 0 }}
              >
                <HumanHandSVG innerRef={humanRef} />
              </div>
            </div>
          </div>

          {/* HUD Badges */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-5 z-20 flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[#222222]/80 border border-[#F4A049]/30 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4A049] animate-pulse" />
            <span className="text-[9px] sm:text-[10px] font-mono text-[#F4A049] tracking-wider uppercase">
              AI Core
            </span>
          </div>
          <div className="absolute top-3 sm:top-4 right-3 sm:right-5 z-20 flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[#222222]/80 border border-[#7E4010]/40 backdrop-blur-sm">
            <span className="text-[9px] sm:text-[10px] font-mono text-[#C88040] tracking-wider uppercase">
              Human
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C88040] animate-pulse" />
          </div>

          {/* Status Bar */}
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#1A1A1A]/90 border border-[#DCDCDC]/15 text-[10px] sm:text-xs font-mono backdrop-blur-md whitespace-nowrap">
            <span className="flex items-center gap-1 sm:gap-1.5 text-[#F4A049]">
              <Zap className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
              <span>Convergence: {mounted ? Math.round(progress * 100) : 0}%</span>
            </span>
            <span className="text-[#DCDCDC]/30">|</span>
            <span
              className={`font-semibold transition-colors duration-300 ${
                isTouching ? "text-[#F4A049]" : "text-[#DCDCDC]/60"
              }`}
            >
              {isTouching ? "✦ SYNERGY SYNCHRONIZED" : "CONVERGING"}
            </span>
          </div>
        </div>

        {/* Scroll Helper Hint */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <div className="flex flex-col items-center gap-1.5 text-[#DCDCDC]/40">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest">
              Scroll down or up to converge
            </span>
            <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-[#F4A049]/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}