"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { reflectionText } from "../data";
import { Quote } from "lucide-react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

// Typewriter effect hook
function useTypewriter(text: string, start: boolean, delay: number, speed = 40) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!start) return;

    let timeoutId: NodeJS.Timeout;

    // Initial delay before starting to type
    const startTimeoutId = setTimeout(() => {
      setIsTyping(true);
      let i = 0;

      const typeNextChar = () => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1));
          i++;
          // Randomize typing speed slightly for realism
          timeoutId = setTimeout(typeNextChar, speed + (Math.random() * 30 - 15));
        } else {
          setIsTyping(false);
          setIsDone(true);
        }
      };

      typeNextChar();
    }, delay);

    return () => {
      clearTimeout(startTimeoutId);
      clearTimeout(timeoutId);
    };
  }, [text, start, delay, speed]);

  return { displayedText, isTyping, isDone };
}

function TypewriterLine({
  text,
  index,
  start,
  isMainLine,
  isLastLine,
  isInView
}: {
  text: string;
  index: number;
  start: boolean;
  isMainLine: boolean;
  isLastLine: boolean;
  isInView: boolean;
}) {
  // Base delay + staggered delay based on previous lines
  const delay = isMainLine ? 600 : 1200 + (index * 600);
  const { displayedText, isTyping, isDone } = useTypewriter(text, start, delay);

  // Fallback to motion reveal if reduced motion is enabled
  const prefersReduced = typeof window !== 'undefined' ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;

  if (prefersReduced) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3 + index * 0.12 }}
        className={`leading-relaxed ${isMainLine
            ? "text-2xl sm:text-3xl font-semibold text-white/80 mb-6"
            : isLastLine
              ? "text-2xl sm:text-3xl font-semibold text-amber-300/80"
              : index === 1
                ? "text-lg sm:text-xl text-white/50 font-light mt-4"
                : "text-lg sm:text-xl text-white/35 font-light"
          }`}
      >
        {text}
      </motion.div>
    );
  }

  return (
    <div
      className={`leading-relaxed min-h-[1.5em] ${isMainLine
          ? "text-2xl sm:text-3xl font-semibold text-white/90 mb-6 drop-shadow-lg"
          : isLastLine
            ? "text-2xl sm:text-3xl font-semibold text-amber-300 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]"
            : index === 1
              ? "text-lg sm:text-xl text-white/60 font-light mt-4"
              : "text-lg sm:text-xl text-white/40 font-light"
        }`}
    >
      {displayedText}
      {/* Blinking cursor */}
      {((isTyping) || (isLastLine && isDone)) && (
        <span
          className={`inline-block w-[2px] h-[1em] ml-1 align-middle animate-cursor-blink ${isLastLine ? "bg-amber-300" : "bg-white/50"
            }`}
        />
      )}
    </div>
  );
}

export default function Reflection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-48 px-6 bg-[#050508] overflow-hidden flex flex-col items-center justify-center min-h-screen"
      aria-label="Reflection"
    >
      {/* Aurora morphing background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
        <div
          className="w-full h-full animate-aurora"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 30%, rgba(139,92,246,0.15) 0%, transparent 60%), radial-gradient(circle at 70% 70%, rgba(59,130,246,0.1) 0%, transparent 60%), radial-gradient(circle at 50% 50%, rgba(124,58,237,0.05) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Floating background quotes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[10%] left-[10%] text-white/[0.02] rotate-12"
          animate={{ y: [0, -30, 0], x: [0, 20, 0], rotate: [12, 5, 12] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          <Quote size={300} />
        </motion.div>
        <motion.div
          className="absolute bottom-[10%] right-[10%] text-white/[0.015] -rotate-12"
          animate={{ y: [0, 40, 0], x: [0, -20, 0], rotate: [-12, -20, -12] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Quote size={400} />
        </motion.div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10 w-full">
        {/* Quote icon */}
        <motion.div
          className="mb-16 flex justify-center"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: "spring", damping: 15 }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-xl animate-glow-pulse" />
            <div className="relative w-20 h-20 rounded-full border border-violet-500/30 bg-violet-500/10 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.15)]">
              <Quote size={32} className="text-violet-300" />
            </div>
          </div>
        </motion.div>

        {/* Quote lines — Typewriter reveal */}
        <div className="text-center space-y-1 mb-24 min-h-[300px] flex flex-col justify-center">
          {reflectionText.map((line, i) => (
            <TypewriterLine
              key={i}
              text={line}
              index={i}
              start={isInView}
              isMainLine={i === 0}
              isLastLine={i === reflectionText.length - 1}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Divider line */}
        <motion.div
          className="w-px h-24 bg-gradient-to-b from-violet-500/40 via-white/10 to-transparent mx-auto mb-16"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ delay: 2.5, duration: 1.2, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />

        {/* Attribution */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 3, duration: 0.8 }}
        >
          <div className="inline-flex flex-col items-center gap-2">
            <div className="text-base text-white/60 font-medium tracking-wide relative group">
              Shivam Mishra
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-px bg-violet-400/50 group-hover:w-full transition-all duration-300" />
            </div>
            <div className="text-xs text-white/20 tracking-widest uppercase mt-2">
              MSIT Delhi · B.Tech CSE · 2027
            </div>
          </div>
        </motion.div>

        {/* Nav buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mt-20"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 3.5, duration: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-white/50 hover:text-white/80 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 group shadow-lg"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform duration-300"
            />
            Back to Portfolio
          </Link>
          <Link
            href="https://linkedin.com/in/shivamyash742"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-amber-400/20 bg-amber-400/[0.04] text-sm text-amber-400/70 hover:text-amber-300 hover:border-amber-400/40 transition-all duration-300 group shadow-[0_0_15px_rgba(251,191,36,0.05)] hover:shadow-[0_0_25px_rgba(251,191,36,0.1)]"
          >
            Connect on LinkedIn
            <ExternalLink
              size={16}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
            />
          </Link>
        </motion.div>
      </div>

      {/* Footer line */}
      <motion.div
        className="absolute bottom-8 text-center w-full"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 4, duration: 1 }}
      >
        <div className="text-[10px] font-mono text-white/10 tracking-[0.3em]">
          ZS CAMPUS BEATS · 2026–27 · 125 DAYS · ₹14.2 LPA
        </div>
      </motion.div>
    </section>
  );
}
