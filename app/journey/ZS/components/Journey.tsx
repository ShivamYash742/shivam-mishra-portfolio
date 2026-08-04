"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { journeyStages } from "../data";
import {
  UserCheck,
  Code2,
  Trophy,
  MessageSquare,
  Brain,
  Star,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  UserCheck: <UserCheck size={20} />,
  Code2: <Code2 size={20} />,
  Trophy: <Trophy size={20} />,
  MessageSquare: <MessageSquare size={20} />,
  Brain: <Brain size={20} />,
  Star: <Star size={20} />,
};

const stageColors = [
  "from-violet-500/20 to-violet-500/5 border-violet-500/30",
  "from-blue-500/20 to-blue-500/5 border-blue-500/30",
  "from-amber-500/20 to-amber-500/5 border-amber-500/30",
  "from-emerald-500/20 to-emerald-500/5 border-emerald-500/30",
  "from-indigo-500/20 to-indigo-500/5 border-indigo-500/30",
  "from-amber-400/25 to-amber-400/5 border-amber-400/40",
];

const iconColors = [
  "text-violet-400",
  "text-blue-400",
  "text-amber-400",
  "text-emerald-400",
  "text-indigo-400",
  "text-amber-300",
];

const glowColors = [
  "rgba(139,92,246,0.4)",
  "rgba(59,130,246,0.4)",
  "rgba(251,191,36,0.4)",
  "rgba(16,185,129,0.4)",
  "rgba(99,102,241,0.4)",
  "rgba(251,191,36,0.6)",
];

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 bg-[#050508] overflow-hidden"
      aria-label="Journey Overview"
    >
      {/* Section label */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-6">
          <span className="text-xs font-medium text-white/40 tracking-widest uppercase">
            The Journey
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Six Phases.
          <br />
          <span className="text-white/30">One Destination.</span>
        </h2>
        <p className="mt-4 text-white/40 max-w-md mx-auto text-base">
          Every stage of the process, from first webinar to final offer.
        </p>
      </motion.div>

      {/* Journey stages */}
      <div className="max-w-6xl mx-auto">
        {/* Desktop: horizontal flow */}
        <div className="hidden lg:flex items-center justify-between gap-0">
          {journeyStages.map((stage, i) => (
            <div key={stage.id} className="flex items-center">
              <motion.div
                className="flex flex-col items-center gap-3 cursor-default group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                style={{ perspective: "800px" }}
              >
                {/* Icon container with spinning ring on hover + 3D tilt */}
                <motion.div
                  className="relative"
                  whileHover={{ rotateY: 12, rotateX: -8 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  {/* Spinning ring on hover */}
                  <div
                    className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow"
                    style={{
                      background: `conic-gradient(from 0deg, transparent 60%, ${glowColors[i]} 80%, transparent 100%)`,
                      borderRadius: "16px",
                    }}
                  />
                  
                  {/* Glow behind icon on hover */}
                  <div
                    className="absolute -inset-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg pointer-events-none"
                    style={{ background: glowColors[i] }}
                  />

                  <div
                    className={`relative w-16 h-16 rounded-2xl border bg-gradient-to-b ${stageColors[i]} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
                  >
                    <span className={iconColors[i]}>
                      {iconMap[stage.icon]}
                    </span>
                    {/* Last stage golden glow */}
                    {i === journeyStages.length - 1 && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl"
                        style={{
                          boxShadow: "0 0 25px rgba(251,191,36,0.4)",
                        }}
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>
                </motion.div>

                <span className="text-xs font-medium text-white/50 text-center max-w-[80px] group-hover:text-white/80 transition-colors duration-200">
                  {stage.label}
                </span>
                <span className="text-[10px] text-white/20 font-mono tracking-wider">
                  Phase {stage.phase}
                </span>
              </motion.div>

              {/* Glowing animated connector */}
              {i < journeyStages.length - 1 && (
                <motion.div
                  className="relative flex-1 mx-2 h-px"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 + 0.3 }}
                  style={{ transformOrigin: "left" }}
                >
                  {/* Base line with gradient */}
                  <div
                    className="w-full h-[2px] rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${glowColors[i]}, ${glowColors[i + 1]})`,
                      opacity: 0.4,
                    }}
                  />
                  {/* Glow behind the line */}
                  <div
                    className="absolute inset-0 blur-sm"
                    style={{
                      background: `linear-gradient(90deg, ${glowColors[i]}, ${glowColors[i + 1]})`,
                      opacity: 0.3,
                    }}
                  />
                  {/* Traveling particle */}
                  <motion.div
                    className="absolute top-0 left-0 w-3 h-3 -translate-y-1/2 rounded-full"
                    style={{
                      background: glowColors[i],
                      boxShadow: `0 0 8px ${glowColors[i]}`,
                    }}
                    animate={{ x: ["0%", "calc(100% - 12px)"] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.4,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical flow */}
        <div className="flex lg:hidden flex-col items-center gap-0">
          {journeyStages.map((stage, i) => (
            <div key={stage.id} className="flex flex-col items-center">
              <motion.div
                className="flex items-center gap-4 w-full max-w-xs"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className={`w-12 h-12 rounded-xl border bg-gradient-to-b ${stageColors[i]} flex items-center justify-center flex-shrink-0`}
                >
                  <span className={iconColors[i]}>{iconMap[stage.icon]}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white/80">
                    {stage.label}
                  </div>
                  <div className="text-xs text-white/30 font-mono">
                    Phase {stage.phase}
                  </div>
                </div>
              </motion.div>
              {i < journeyStages.length - 1 && (
                <div
                  className="w-[2px] h-8 my-2 ml-6 self-start rounded-full"
                  style={{
                    background: `linear-gradient(to bottom, ${glowColors[i]}, transparent)`,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
