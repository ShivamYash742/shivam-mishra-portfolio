"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Building2, Briefcase, CalendarCheck } from "lucide-react";
import confetti from "canvas-confetti";
import AnimatedBackground from "./AnimatedBackground";

const offerDetails = [
  { icon: <Building2 size={16} />, label: "Company", value: "ZS Associates" },
  {
    icon: <Briefcase size={16} />,
    label: "Role",
    value: "Business Technology Solutions Associate",
  },
  { icon: <Star size={16} />, label: "Package", value: "₹14.2 LPA" },
  { icon: <CalendarCheck size={16} />, label: "Offer Date", value: "20 July 2026" },
];

export default function Offer() {
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

      const duration = 3000;
      const animationEnd = Date.now() + duration;

      const frame = () => {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return;

        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.65 },
          colors: ["#f59e0b", "#fbbf24", "#fde68a", "#ffffff"],
          scalar: 0.9,
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.65 },
          colors: ["#f59e0b", "#fbbf24", "#fde68a", "#ffffff"],
          scalar: 0.9,
        });

        requestAnimationFrame(frame);
      };

      setTimeout(frame, 500);
    }
  }, [isInView]);

  // Split into words so wrapping only happens between words, never mid-word
  const missionWords = "MISSION COMPLETE".split(" ").map((w) => w.split(""));

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 overflow-hidden bg-[#050508]"
      aria-label="Final Offer — Mission Complete"
    >
      <AnimatedBackground variant="offer" />

      {/* Radial gold background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 2 }}
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(251,191,36,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Slow golden vignette */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.6 } : {}}
        transition={{ duration: 3, delay: 1 }}
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 50%, rgba(245,158,11,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Star icon */}
        <motion.div
          className="relative mb-10"
          initial={{ scale: 0, rotate: -20 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={
              isInView
                ? {
                    boxShadow: [
                      "0 0 20px rgba(251,191,36,0.2)",
                      "0 0 60px rgba(251,191,36,0.5)",
                      "0 0 20px rgba(251,191,36,0.2)",
                    ],
                  }
                : {}
            }
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="w-20 h-20 rounded-full border border-amber-400/50 bg-gradient-to-b from-amber-400/25 to-amber-600/10 flex items-center justify-center">
            <Star size={36} className="text-amber-300 fill-amber-300" />
          </div>
        </motion.div>

        {/* "MISSION COMPLETE" letter reveal — words stay intact, never break */}
        <div className="mb-8">
          <h2
            className="text-[clamp(2.2rem,8vw,6rem)] font-black tracking-[-0.02em] leading-none flex flex-wrap justify-center gap-x-[0.3em] gap-y-2"
            aria-label="Mission Complete"
          >
            {missionWords.map((word, wi) => {
              const wordStartIndex = missionWords
                .slice(0, wi)
                .reduce((a, w) => a + w.length, 0);
              return (
                <span key={wi} className="whitespace-nowrap inline-flex">
                  {word.map((char, ci) => (
                    <motion.span
                      key={ci}
                      initial={{ y: 80, opacity: 0 }}
                      animate={isInView ? { y: 0, opacity: 1 } : {}}
                      transition={{
                        duration: 0.7,
                        delay: 0.4 + (wordStartIndex + ci) * 0.04,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="inline-block"
                      style={{
                        background:
                          "linear-gradient(180deg, #fde68a 0%, #f59e0b 40%, #d97706 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              );
            })}
          </h2>
        </div>

        {/* PPO badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-sm font-medium text-amber-300/80 tracking-widest uppercase">
              Pre-Placement Offer · FTE
            </span>
          </div>
        </motion.div>

        {/* Offer details grid */}
        <motion.div
          className="grid sm:grid-cols-2 gap-4 w-full max-w-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          {offerDetails.map((detail, i) => (
            <motion.div
              key={detail.label}
              className="group relative rounded-2xl border border-amber-400/20 bg-amber-400/[0.03] backdrop-blur-sm p-5 text-left hover:border-amber-400/40 transition-all duration-300"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.5 + i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-2 text-amber-400/60 mb-2">
                {detail.icon}
                <span className="text-[10px] uppercase tracking-widest font-medium">
                  {detail.label}
                </span>
              </div>
              <div
                className={`font-bold text-white/90 ${
                  detail.label === "Package"
                    ? "text-2xl text-amber-300"
                    : detail.label === "Role"
                    ? "text-sm leading-snug"
                    : "text-lg"
                }`}
              >
                {detail.value}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing note */}
        <motion.p
          className="text-white/30 text-sm tracking-wider"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 2, duration: 1 }}
        >
          Acceptance form due Jul 24, 2026
        </motion.p>
      </div>
    </section>
  );
}
