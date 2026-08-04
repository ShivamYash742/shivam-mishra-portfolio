"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { challengeMoments } from "../data";
import { AlertTriangle, RefreshCw, Clock } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  AlertTriangle: <AlertTriangle size={24} />,
  RefreshCw: <RefreshCw size={24} />,
  Clock: <Clock size={24} />,
};

export default function ChallengeCard() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 bg-[#050508] overflow-hidden"
      aria-label="Challenge Moments"
    >
      {/* Red ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 50%, rgba(239,68,68,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 mb-6">
            <AlertTriangle size={12} className="text-red-400" />
            <span className="text-xs font-medium text-red-400/80 tracking-widest uppercase">
              Obstacles
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            When Things Got{" "}
            <span className="text-red-400">Hard.</span>
          </h2>
          <p className="mt-4 text-white/40 max-w-sm mx-auto text-base">
            The moments that tested patience, focus, and resolve.
          </p>
        </motion.div>

        {/* Challenge cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {challengeMoments.map((challenge, i) => (
            <motion.div
              key={challenge.id}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="relative rounded-2xl border border-red-500/20 bg-red-500/[0.03] backdrop-blur-sm p-6 h-full overflow-hidden group-hover:border-red-500/40 transition-all duration-300">
                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 0%, rgba(239,68,68,0.08), transparent 60%)",
                  }}
                />

                {/* Pulsing warning indicator */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full bg-red-500"
                  animate={{ opacity: [1, 0.3, 1], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl border border-red-500/20 bg-red-500/5 flex items-center justify-center text-red-400 mb-5">
                    {iconMap[challenge.icon]}
                  </div>

                  {/* Date */}
                  <div className="text-[10px] font-mono text-red-400/50 tracking-widest uppercase mb-2">
                    {challenge.date}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-red-200/80 mb-3 leading-tight">
                    {challenge.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/40 leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              </div>

              {/* Shadow */}
              <div
                className="absolute inset-0 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                style={{
                  background: "rgba(239,68,68,0.08)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
