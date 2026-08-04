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

/* Glitch text — doubles the heading with offset colored shadows */
function GlitchText({ children }: { children: string }) {
  return (
    <span className="relative inline-block">
      {/* Red offset layer */}
      <span
        className="absolute top-0 left-0 w-full h-full"
        style={{
          color: "rgba(239,68,68,0.6)",
          clipPath: "inset(0 0 65% 0)",
          transform: "translate(-2px, -1px)",
          animation: "glitch 3s ease-in-out infinite alternate",
        }}
        aria-hidden="true"
      >
        {children}
      </span>
      {/* Cyan offset layer */}
      <span
        className="absolute top-0 left-0 w-full h-full"
        style={{
          color: "rgba(56,189,248,0.4)",
          clipPath: "inset(65% 0 0 0)",
          transform: "translate(2px, 1px)",
          animation: "glitch 3s ease-in-out infinite alternate-reverse",
        }}
        aria-hidden="true"
      >
        {children}
      </span>
      {/* Main text */}
      <span className="relative">{children}</span>
    </span>
  );
}

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
            "radial-gradient(ellipse 80% 40% at 50% 50%, rgba(239,68,68,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Animated scanline */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.04]"
        aria-hidden="true"
      >
        <div
          className="absolute left-0 right-0 h-[2px] bg-red-500 animate-scanline"
          style={{ boxShadow: "0 0 20px 4px rgba(239,68,68,0.3)" }}
        />
      </div>

      {/* Noise/static overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header with glitch effect */}
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
            <GlitchText>When Things Got</GlitchText>{" "}
            <span className="text-red-400">Hard.</span>
          </h2>
          <p className="mt-4 text-white/40 max-w-sm mx-auto text-base">
            The moments that tested patience, focus, and resolve.
          </p>
        </motion.div>

        {/* Challenge cards with hazard stripes */}
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
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="relative rounded-2xl border border-red-500/20 bg-red-500/[0.03] backdrop-blur-sm p-6 h-full overflow-hidden group-hover:border-red-500/40 transition-all duration-300">
                {/* Hazard stripes overlay */}
                <div className="absolute inset-0 rounded-2xl hazard-stripes opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 0%, rgba(239,68,68,0.1), transparent 60%)",
                  }}
                />

                {/* Static/noise intensifies on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300 pointer-events-none mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "100px",
                  }}
                />

                {/* Pulsing warning indicator */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full bg-red-500"
                  animate={{ opacity: [1, 0.2, 1], scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                />

                {/* Neon underglow */}
                <div
                  className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
                  style={{ background: "rgba(239,68,68,0.12)" }}
                />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl border border-red-500/20 bg-red-500/5 flex items-center justify-center text-red-400 mb-5 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.2)] transition-shadow duration-300">
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
                style={{ background: "rgba(239,68,68,0.08)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
