"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { reflectionText } from "../data";
import { Quote } from "lucide-react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function Reflection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-40 px-6 bg-[#050508] overflow-hidden"
      aria-label="Reflection"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(124,58,237,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto">
        {/* Quote icon */}
        <motion.div
          className="mb-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <div className="w-16 h-16 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center">
            <Quote size={28} className="text-white/20" />
          </div>
        </motion.div>

        {/* Quote lines — staggered word-by-word reveal */}
        <div className="text-center space-y-1 mb-20">
          {reflectionText.map((line, i) => {
            const isMainLine = i === 0;
            const isLastLines = i >= 7;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`leading-relaxed ${
                  isMainLine
                    ? "text-2xl sm:text-3xl font-semibold text-white/80 mb-6"
                    : isLastLines
                    ? "text-2xl sm:text-3xl font-semibold text-amber-300/80"
                    : i === 1
                    ? "text-lg sm:text-xl text-white/50 font-light mt-4"
                    : "text-lg sm:text-xl text-white/35 font-light"
                }`}
              >
                {line}
              </motion.div>
            );
          })}
        </div>

        {/* Divider line */}
        <motion.div
          className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent mx-auto mb-12"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ delay: 2.5, duration: 0.8 }}
          style={{ transformOrigin: "top" }}
        />

        {/* Attribution */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2.8, duration: 0.6 }}
        >
          <div className="inline-flex flex-col items-center gap-2">
            <div className="text-sm text-white/30 font-medium tracking-wide">
              Shivam Mishra
            </div>
            <div className="text-xs text-white/20 tracking-widest uppercase">
              MSIT Delhi · B.Tech CSE · 2026
            </div>
          </div>
        </motion.div>

        {/* Nav buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mt-16"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 3, duration: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-white/50 hover:text-white/80 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-200 group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-0.5 transition-transform duration-200"
            />
            Back to Portfolio
          </Link>
          <Link
            href="https://linkedin.com/in/shivamyash742"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-amber-400/20 bg-amber-400/[0.04] text-sm text-amber-400/70 hover:text-amber-300 hover:border-amber-400/40 transition-all duration-200 group"
          >
            Connect on LinkedIn
            <ExternalLink
              size={14}
              className="group-hover:translate-x-0.5 transition-transform duration-200"
            />
          </Link>
        </motion.div>
      </div>

      {/* Footer line */}
      <motion.div
        className="mt-32 text-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 3.2 }}
      >
        <div className="text-[10px] font-mono text-white/15 tracking-widest">
          ZS CAMPUS BEATS · 2026–27 · 125 DAYS · ₹14.2 LPA
        </div>
      </motion.div>
    </section>
  );
}
