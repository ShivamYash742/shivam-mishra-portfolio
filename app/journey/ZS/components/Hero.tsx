"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
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

function AnimatedCounter({
  target,
  suffix,
  delay = 0,
}: {
  target: number;
  suffix: string;
  delay?: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const timer = setTimeout(() => {
      let start = 0;
      const duration = 1800;
      const step = 16;
      const increment = target / (duration / step);
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(interval);
        } else {
          setCount(Math.floor(start));
        }
      }, step);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [started, target, delay]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 30, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 30 });

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

  return (
    <section
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

        {/* Primary headline */}
        <motion.div variants={itemVariants} className="mb-4">
          <h1 className="text-[clamp(4rem,14vw,10rem)] font-black leading-[0.9] tracking-tighter text-white">
            125{" "}
            <span className="block text-[clamp(2rem,6vw,4.5rem)] font-light text-white/30 tracking-[0.3em] uppercase my-2">
              days to
            </span>
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 40%, #f97316 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              One Offer.
            </span>
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

        {/* Animated stat counters */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl mb-16"
        >
          {statItems.map((stat, i) => (
            <div
              key={stat.label}
              className="relative group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(124,58,237,0.1), transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="text-3xl sm:text-4xl font-black text-white tabular-nums">
                  {stat.label === "PPO" ? (
                    <span>1</span>
                  ) : (
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      delay={i * 200}
                    />
                  )}
                </div>
                <div className="text-xs text-white/35 uppercase tracking-widest mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
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
