"use client";

import { useEffect, useRef } from "react";

interface AnimatedBackgroundProps {
  variant?: "hero" | "offer" | "default";
  className?: string;
}

export default function AnimatedBackground({
  variant = "default",
  className = "",
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Floating particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      opacity: number;
      size: number;
      color: string;
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const colors =
      variant === "offer"
        ? ["rgba(212,162,76,", "rgba(251,191,36,", "rgba(245,158,11,"]
        : variant === "hero"
        ? ["rgba(139,92,246,", "rgba(99,102,241,", "rgba(59,130,246,"]
        : ["rgba(139,92,246,", "rgba(99,102,241,", "rgba(148,163,184,"];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.05,
        size: Math.random() * 1.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    };

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!prefersReduced) {
      animate();
    }

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [variant]);

  const blobColors =
    variant === "offer"
      ? {
          b1: "radial-gradient(ellipse, rgba(212,162,76,0.18) 0%, transparent 70%)",
          b2: "radial-gradient(ellipse, rgba(251,191,36,0.12) 0%, transparent 60%)",
          b3: "radial-gradient(ellipse, rgba(180,83,9,0.1) 0%, transparent 70%)",
        }
      : {
          b1: "radial-gradient(ellipse, rgba(124,58,237,0.2) 0%, transparent 70%)",
          b2: "radial-gradient(ellipse, rgba(99,102,241,0.15) 0%, transparent 60%)",
          b3: "radial-gradient(ellipse, rgba(59,130,246,0.1) 0%, transparent 70%)",
        };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Gradient blobs */}
      <div
        className="absolute w-[60vw] h-[60vw] top-[-10%] left-[-10%] rounded-full opacity-60 animate-blob"
        style={{ background: blobColors.b1 }}
      />
      <div
        className="absolute w-[50vw] h-[50vw] bottom-[10%] right-[-10%] rounded-full opacity-50 animate-blob-delay"
        style={{ background: blobColors.b2 }}
      />
      <div
        className="absolute w-[40vw] h-[40vw] top-[40%] left-[30%] rounded-full opacity-40 animate-blob-slow"
        style={{ background: blobColors.b3 }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}
