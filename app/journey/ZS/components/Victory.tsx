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
          particleCount: 100,
          spread: 80,
          origin: { x: 0.3, y: 0.6 },
          colors: ["#f59e0b", "#fbbf24", "#f97316", "#ffffff", "#fde68a"],
          shapes: ["circle", "square"],
          scalar: 0.9,
        });
        setTimeout(() => {
          confetti({
            particleCount: 100,
            spread: 80,
            origin: { x: 0.7, y: 0.6 },
            colors: ["#f59e0b", "#fbbf24", "#f97316", "#ffffff", "#fde68a"],
            shapes: ["circle", "square"],
            scalar: 0.9,
          });
        }, 300);
      }, 600);
    }
  }, [isInView]);

  // Split into words to prevent mid-word line breaks
  const words = "TOP TEAM".split(" ").map((w) => w.split(""));

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
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(251,191,36,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Multiple concentric rotating rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Outer ring — slow */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full border border-amber-400/[0.06]"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[0, 90, 180, 270].map((deg) => (
            <div
              key={deg}
              className="absolute w-1 h-1 rounded-full bg-amber-400/20"
              style={{
                top: "50%",
                left: "50%",
                transform: `rotate(${deg}deg) translateX(298px) translateY(-50%)`,
              }}
            />
          ))}
        </motion.div>

        {/* Middle ring — medium */}
        <motion.div
          className="absolute w-[450px] h-[450px] rounded-full border border-amber-400/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <div
              key={deg}
              className="absolute w-1.5 h-1.5 rounded-full bg-amber-400/30"
              style={{
                top: "50%",
                left: "50%",
                transform: `rotate(${deg}deg) translateX(223px) translateY(-50%)`,
              }}
            />
          ))}
        </motion.div>

        {/* Inner ring — fast, dashed */}
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-amber-400/15"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          {[0, 120, 240].map((deg) => (
            <div
              key={deg}
              className="absolute w-2 h-2 rounded-full bg-amber-400/40"
              style={{
                top: "50%",
                left: "50%",
                transform: `rotate(${deg}deg) translateX(148px) translateY(-50%)`,
                boxShadow: "0 0 8px rgba(251,191,36,0.5)",
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Trophy icon with golden burst */}
      <motion.div
        className="relative mb-8 z-10"
        initial={{ scale: 0, rotate: -15 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
      >
        <div className="relative w-28 h-28 mx-auto">
          {/* Pulsing golden burst */}
          <motion.div
            className="absolute -inset-6 rounded-full"
            animate={isInView ? { scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] } : {}}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(circle, rgba(251,191,36,0.4) 0%, rgba(245,158,11,0.15) 40%, transparent 70%)",
              filter: "blur(12px)",
            }}
          />
          {/* Secondary burst */}
          <motion.div
            className="absolute -inset-10 rounded-full"
            animate={isInView ? { scale: [1.1, 1.5, 1.1], opacity: [0.1, 0.3, 0.1] } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            style={{
              background:
                "radial-gradient(circle, rgba(251,191,36,0.2) 0%, transparent 60%)",
              filter: "blur(20px)",
            }}
          />
          <div className="relative w-full h-full rounded-full border-2 border-amber-400/40 bg-gradient-to-b from-amber-400/20 to-amber-600/10 flex items-center justify-center shadow-[0_0_40px_rgba(251,191,36,0.3)]">
            <Trophy size={44} className="text-amber-300" />
          </div>
        </div>
      </motion.div>

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-6 z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/5">
          <Star size={12} className="text-amber-400 fill-amber-400" />
          <span className="text-xs font-medium text-amber-400/80 tracking-widest uppercase">
            May 1, 2026
          </span>
        </div>
      </motion.div>

      {/* "TOP TEAM" — words as units, glow breathing */}
      <h2
        className="text-[clamp(3.5rem,12vw,8rem)] font-black tracking-tighter leading-none mb-4 flex flex-wrap justify-center gap-x-[0.25em] gap-y-2 z-10 animate-text-glow"
        aria-label="Top Team"
      >
        {words.map((word, wi) => {
          const wordStartIndex = words
            .slice(0, wi)
            .reduce((a, w) => a + w.length, 0);
          return (
            <span key={wi} className="whitespace-nowrap inline-flex">
              {word.map((letter, ci) => (
                <motion.span
                  key={ci}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + (wordStartIndex + ci) * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block"
                  style={{
                    background:
                      "linear-gradient(180deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          );
        })}
      </h2>

      {/* Subtitle */}
      <motion.p
        className="text-xl text-white/40 font-light max-w-md mb-6 z-10"
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
        className="relative overflow-hidden w-full mt-12 py-4 z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.3 }}
        aria-hidden="true"
      >
        <div className="flex gap-8 whitespace-nowrap animate-marquee">
          {Array(4)
            .fill(
              "✦ TOP TEAM CONFIRMED ✦ MAY 2026 ✦ PPO TRACK OPEN ✦ ZS CAMPUS BEATS"
            )
            .map((text, i) => (
              <span
                key={i}
                className="text-sm font-mono tracking-widest text-amber-400/20"
              >
                {text}
              </span>
            ))}
        </div>
      </motion.div>
    </section>
  );
}
