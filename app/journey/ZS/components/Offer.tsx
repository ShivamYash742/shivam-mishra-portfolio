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

      const duration = 4000;
      const animationEnd = Date.now() + duration;

      const frame = () => {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return;

        confetti({
          particleCount: 4,
          angle: 60,
          spread: 60,
          origin: { x: 0, y: 0.65 },
          colors: ["#f59e0b", "#fbbf24", "#fde68a", "#ffffff"],
          scalar: 1,
        });
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 60,
          origin: { x: 1, y: 0.65 },
          colors: ["#f59e0b", "#fbbf24", "#fde68a", "#ffffff"],
          scalar: 1,
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

      {/* Golden aurora effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div
          className="w-full h-full animate-aurora"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, rgba(251,191,36,0.3) 0%, rgba(245,158,11,0.1) 40%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(217,119,6,0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(253,230,138,0.2) 0%, transparent 50%)",
            filter: "blur(40px)",
          }}
        />
      </div>

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
                      "0 0 60px rgba(251,191,36,0.6)",
                      "0 0 20px rgba(251,191,36,0.2)",
                    ],
                  }
                : {}
            }
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="w-20 h-20 rounded-full border-2 border-amber-400/50 bg-gradient-to-b from-amber-400/25 to-amber-600/10 flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.3)] relative overflow-hidden">
             {/* Golden shimmer passing over star */}
             <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent,rgba(255,255,255,0.4),transparent)] animate-shimmer pointer-events-none" />
             <Star size={36} className="text-amber-300 fill-amber-300 relative z-10" />
          </div>
        </motion.div>

        {/* "MISSION COMPLETE" letter reveal */}
        <div className="mb-8">
          <h2
            className="text-[clamp(2.2rem,8vw,6rem)] font-black tracking-[-0.02em] leading-none flex flex-wrap justify-center gap-x-[0.3em] gap-y-2 animate-text-glow relative"
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
                      className="inline-block relative"
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
            
            {/* Shimmer sweep over the text */}
            <motion.div
               className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] animate-shimmer pointer-events-none"
               style={{ WebkitBackgroundClip: "text" }}
               initial={{ opacity: 0 }}
               animate={isInView ? { opacity: 1 } : {}}
               transition={{ delay: 1 }}
            />
          </h2>
        </div>

        {/* PPO badge - Stamp animation */}
        <div className="mb-12 h-10 flex items-center justify-center">
          {isInView && (
            <div className="animate-stamp">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/50 bg-amber-400/10 shadow-[0_0_20px_rgba(251,191,36,0.3)]">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-sm font-bold text-amber-300 tracking-widest uppercase">
                  Pre-Placement Offer · FTE
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Offer details grid with rotating golden borders */}
        <motion.div
          className="grid sm:grid-cols-2 gap-4 w-full max-w-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          {offerDetails.map((detail, i) => (
            <motion.div
              key={detail.label}
              className="group relative"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.5 + i * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              {/* Rotating golden border */}
              <div className="absolute -inset-[1px] rounded-2xl animate-border-rotate-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Neon underglow */}
              <div
                className="absolute -inset-3 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none bg-amber-400/20"
              />

              <div className="relative rounded-2xl border border-amber-400/20 bg-amber-400/[0.03] backdrop-blur-sm p-5 text-left transition-all duration-300 group-hover:border-transparent h-full">
                
                {/* Glow overlay */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at 50% 0%, rgba(251,191,36,0.1), transparent 60%)",
                  }}
                />

                <div className="flex items-center gap-2 text-amber-400/60 mb-2 relative z-10">
                  {detail.icon}
                  <span className="text-[10px] uppercase tracking-widest font-medium">
                    {detail.label}
                  </span>
                </div>
                <div
                  className={`font-bold text-white/90 relative z-10 ${
                    detail.label === "Package"
                      ? "text-2xl text-amber-300 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]"
                      : detail.label === "Role"
                      ? "text-sm leading-snug"
                      : "text-lg"
                  }`}
                >
                  {detail.value}
                </div>
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
