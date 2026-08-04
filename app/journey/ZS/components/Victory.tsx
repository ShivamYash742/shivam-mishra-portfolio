"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Star } from "lucide-react";
import confetti from "canvas-confetti";

export default function Victory() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const confettiFired = useRef(false);

  useEffect(() => {
    if (isInView && !confettiFired.current) {
      confettiFired.current = true;

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;

      setTimeout(() => {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { x: 0.3, y: 0.6 },
          colors: ["#f59e0b", "#fbbf24", "#f97316", "#ffffff", "#fde68a"],
          shapes: ["circle", "square"],
          scalar: 0.8,
        });
        setTimeout(() => {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { x: 0.7, y: 0.6 },
            colors: ["#f59e0b", "#fbbf24", "#f97316", "#ffffff", "#fde68a"],
            shapes: ["circle", "square"],
            scalar: 0.8,
          });
        }, 300);
      }, 600);
    }
  }, [isInView]);

  const letters = "TOP TEAM".split("");

  return (
    <section
      ref={ref}
      className="relative py-40 px-6 overflow-hidden bg-[#050508] flex flex-col items-center justify-center text-center"
      aria-label="Top Team Victory"
    >
      {/* Gold ambient glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(251,191,36,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Rotating ring */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full border border-amber-400/10 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <div
            key={deg}
            className="absolute w-1.5 h-1.5 rounded-full bg-amber-400/30"
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${deg}deg) translateX(248px) translateY(-50%)`,
            }}
          />
        ))}
      </motion.div>

      {/* Trophy icon */}
      <motion.div
        className="relative mb-8"
        initial={{ scale: 0, rotate: -15 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
      >
        <div className="relative w-24 h-24 mx-auto">
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={isInView ? { opacity: [0, 1, 0.6] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(circle, rgba(251,191,36,0.4) 0%, transparent 70%)",
              filter: "blur(8px)",
            }}
          />
          <div className="relative w-full h-full rounded-full border border-amber-400/40 bg-gradient-to-b from-amber-400/20 to-amber-600/10 flex items-center justify-center">
            <Trophy size={40} className="text-amber-300" />
          </div>
        </div>
      </motion.div>

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-6"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/5">
          <Star size={12} className="text-amber-400 fill-amber-400" />
          <span className="text-xs font-medium text-amber-400/80 tracking-widest uppercase">
            May 1, 2026
          </span>
        </div>
      </motion.div>

      {/* Letter-by-letter heading */}
      <h2 className="text-[clamp(3.5rem,12vw,8rem)] font-black tracking-tighter leading-none mb-4 flex flex-wrap justify-center gap-[0.02em]">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.5 + i * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={
              letter === " "
                ? "w-[0.25em]"
                : "inline-block"
            }
            style={
              letter !== " "
                ? {
                    background:
                      "linear-gradient(180deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "none",
                  }
                : {}
            }
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </h2>

      {/* Subtitle */}
      <motion.p
        className="text-xl text-white/40 font-light max-w-md mb-6"
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        AlgoRhythm confirmed in the Top Teams list.
        <br />
        <span className="text-amber-400/60 font-medium">
          PPO track opened.
        </span>
      </motion.p>

      {/* Scrolling marquee text */}
      <motion.div
        className="relative overflow-hidden w-full mt-12 py-4"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.3 }}
        aria-hidden="true"
      >
        <div className="flex gap-8 whitespace-nowrap animate-marquee">
          {Array(3).fill("✦ TOP TEAM CONFIRMED ✦ MAY 2026 ✦ PPO TRACK OPEN ✦ ZS CAMPUS BEATS").map(
            (text, i) => (
              <span key={i} className="text-sm font-mono tracking-widest text-amber-400/20">
                {text}
              </span>
            )
          )}
        </div>
      </motion.div>
    </section>
  );
}
