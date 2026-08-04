"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const statItems = [
  { value: 125, label: "Days", suffix: "" },
  { value: 26, label: "Milestones", suffix: "" },
  { value: 3, label: "Reschedules", suffix: "" },
  { value: 1, label: "PPO", suffix: "" },
];

/* ── Scramble Counter: digits slot-machine through random values before landing ── */
function ScrambleCounter({
  target,
  delay = 0,
}: {
  target: number;
  delay?: number;
}) {
  const [display, setDisplay] = useState("0");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const targetStr = String(target);
    const digits = targetStr.length;
    let frame = 0;
    const totalFrames = 30;
    const scrambleDuration = 800;
    const frameInterval = scrambleDuration / totalFrames;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        frame++;
        if (frame >= totalFrames) {
          setDisplay(targetStr);
          clearInterval(interval);
          return;
        }
        // progressively lock digits from left to right
        const lockCount = Math.floor((frame / totalFrames) * digits);
        let result = "";
        for (let i = 0; i < digits; i++) {
          if (i < lockCount) {
            result += targetStr[i];
          } else {
            result += String(Math.floor(Math.random() * 10));
          }
        }
        setDisplay(result);
      }, frameInterval);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [started, target, delay]);

  return <span ref={ref}>{display}</span>;
}

/* ── Floating decorative particle ── */
function FloatingParticle({
  x,
  y,
  size,
  delay,
  color,
}: {
  x: string;
  y: string;
  size: number;
  delay: number;
  color: string;
}) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: [0, 0.8, 0],
        y: [20, -80, -140],
        x: [0, Math.random() * 30 - 15],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        delay,
        ease: "easeOut",
      }}
    >
      <div
        className="rotate-45"
        style={{
          width: size,
          height: size,
          background: color,
          boxShadow: `0 0 ${size * 3}px ${color}`,
        }}
      />
    </motion.div>
  );
}

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 30, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 30 });
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  // Golden floating particles data
  const particles = [
    { x: "10%", y: "20%", size: 4, delay: 0, color: "rgba(251,191,36,0.6)" },
    { x: "85%", y: "30%", size: 3, delay: 1.2, color: "rgba(251,191,36,0.4)" },
    { x: "70%", y: "60%", size: 5, delay: 0.8, color: "rgba(245,158,11,0.5)" },
    { x: "25%", y: "70%", size: 3, delay: 2, color: "rgba(251,191,36,0.3)" },
    { x: "50%", y: "80%", size: 4, delay: 1.5, color: "rgba(139,92,246,0.4)" },
    { x: "90%", y: "50%", size: 3, delay: 0.5, color: "rgba(139,92,246,0.3)" },
    { x: "15%", y: "45%", size: 5, delay: 2.5, color: "rgba(251,191,36,0.5)" },
    { x: "60%", y: "15%", size: 3, delay: 1.8, color: "rgba(245,158,11,0.4)" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#050508]"
      aria-label="Hero — ZS Campus Beats"
    >
      <AnimatedBackground variant="hero" />

      {/* Mouse spotlight */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-10"
        style={{
          background: `radial-gradient(600px circle at ${springX}px ${springY}px, rgba(124,58,237,0.06), transparent 50%)`,
        }}
        aria-hidden="true"
      />

      {/* Floating golden particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {particles.map((p, i) => (
          <FloatingParticle key={i} {...p} />
        ))}
      </div>

      {/* Pulsing outer ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div
          className="w-[700px] h-[700px] rounded-full border border-amber-400/[0.07]"
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Back link */}
      <motion.div
        className="absolute top-6 left-6 z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors duration-200 group"
          aria-label="Back to portfolio"
        >
          <ChevronLeft
            size={16}
            className="group-hover:-translate-x-0.5 transition-transform duration-200"
          />
          <span>Portfolio</span>
        </Link>
      </motion.div>

      {/* ZS Badge */}
      <motion.div
        className="absolute top-6 right-6 z-20"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/5 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs font-medium text-amber-400/80 tracking-widest uppercase">
            PPO · FTE
          </span>
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-20 flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <Sparkles size={14} className="text-violet-400" />
            <span className="text-xs font-medium text-white/60 tracking-widest uppercase">
              Interactive Case Study
            </span>
          </div>
        </motion.div>

        {/* Primary headline — "125" scrambles in, "DAYS TO" slides, "One Offer." scales up */}
        <motion.div variants={itemVariants} className="mb-4">
          <h1 className="leading-[0.9] tracking-tighter text-white">
            {/* 125 — digit scramble */}
            <motion.span
              className="block text-[clamp(4rem,14vw,10rem)] font-black tabular-nums"
              initial={{ filter: "blur(10px)", opacity: 0 }}
              animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ScrambleCounter target={125} delay={600} />
            </motion.span>

            {/* DAYS TO — slides in from sides */}
            <span className="block text-[clamp(2rem,6vw,4.5rem)] font-light text-white/30 tracking-[0.3em] uppercase my-2 overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "100%", opacity: 0 }}
                animate={isInView ? { y: "0%", opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                days to
              </motion.span>
            </span>

            {/* One Offer. — dramatic scale-up with blur to sharp */}
            <motion.span
              className="block text-[clamp(4rem,14vw,10rem)] font-black"
              initial={{ scale: 0.3, filter: "blur(20px)", opacity: 0 }}
              animate={isInView ? { scale: 1, filter: "blur(0px)", opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 40%, #f97316 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              One Offer.
            </motion.span>
          </h1>
        </motion.div>

        {/* Sub-headline */}
        <motion.div variants={itemVariants} className="mb-12 mt-6">
          <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-white/40 font-light tracking-wide">
            ZS Campus Beats ·{" "}
            <span className="text-white/60">
              Business Technology Solutions Associate
            </span>{" "}
            · ₹14.2 LPA
          </p>
          <p className="mt-2 text-sm text-white/25 tracking-widest uppercase">
            Mar 17, 2026 – Jul 20, 2026 · MSIT Delhi
          </p>
        </motion.div>

        {/* Stat cards with rotating gradient borders */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl mb-16"
        >
          {statItems.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="relative group"
              whileHover={{ y: -4, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Rotating gradient border */}
              <div className="absolute -inset-[1px] rounded-2xl animate-border-rotate opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Neon underglow on hover */}
              <div
                className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
                style={{
                  background:
                    i === 0
                      ? "rgba(139,92,246,0.15)"
                      : i === 1
                      ? "rgba(59,130,246,0.15)"
                      : i === 2
                      ? "rgba(239,68,68,0.15)"
                      : "rgba(251,191,36,0.15)",
                }}
              />

              <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300">
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${
                      i === 0
                        ? "rgba(139,92,246,0.12)"
                        : i === 1
                        ? "rgba(59,130,246,0.12)"
                        : i === 2
                        ? "rgba(239,68,68,0.12)"
                        : "rgba(251,191,36,0.12)"
                    }, transparent 70%)`,
                  }}
                />
                <div className="relative">
                  <div className="text-3xl sm:text-4xl font-black text-white tabular-nums">
                    {stat.label === "PPO" ? (
                      <span>1</span>
                    ) : (
                      <ScrambleCounter target={stat.value} delay={i * 200 + 400} />
                    )}
                  </div>
                  <div className="text-xs text-white/35 uppercase tracking-widest mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-3 text-white/25"
        >
          <span className="text-xs uppercase tracking-widest">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050508] to-transparent pointer-events-none" />
    </section>
  );
}
