"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { phases, type Phase, type TimelineEvent } from "../data";
import { AlertTriangle, ChevronDown, Mail, Star } from "lucide-react";
import EmailCard from "./EmailCard";

function EventCard({
  event,
  isActive,
  index,
}: {
  event: TimelineEvent;
  isActive: boolean;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  const getBorderColor = () => {
    if (event.isOffer) return "border-amber-400/50 shadow-amber-400/10";
    if (event.isVictory) return "border-amber-500/40 shadow-amber-500/10";
    if (event.isChallenge) return "border-red-500/40 shadow-red-500/10";
    if (event.status === "blue") return "border-blue-500/25";
    if (event.status === "gold") return "border-amber-500/25";
    return "border-white/10";
  };

  const getBadgeColor = () => {
    if (event.isOffer) return "bg-amber-400/10 text-amber-300 border-amber-400/30";
    if (event.isVictory) return "bg-amber-500/10 text-amber-400 border-amber-500/25";
    if (event.isChallenge) return "bg-red-500/10 text-red-400 border-red-500/25";
    if (event.status === "blue") return "bg-blue-500/10 text-blue-400 border-blue-500/25";
    if (event.status === "gold") return "bg-amber-500/10 text-amber-400 border-amber-500/25";
    return "bg-white/5 text-white/40 border-white/10";
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className={`relative group rounded-2xl border bg-white/[0.02] backdrop-blur-sm p-5 transition-all duration-300 shadow-lg ${getBorderColor()} ${
        event.isOffer ? "shadow-amber-400/10" : ""
      }`}
    >
      {/* Glow overlay for special events */}
      {(event.isOffer || event.isVictory) && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: event.isOffer
              ? "radial-gradient(ellipse at 50% 0%, rgba(251,191,36,0.07), transparent 60%)"
              : "radial-gradient(ellipse at 50% 0%, rgba(212,162,76,0.05), transparent 60%)",
          }}
        />
      )}
      {event.isChallenge && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(239,68,68,0.05), transparent 60%)",
          }}
        />
      )}

      <div className="relative">
        {/* Meta row */}
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <span className="text-[11px] font-mono text-white/30 tracking-widest uppercase">
            {event.date}
          </span>
          <span
            className={`text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full border ${getBadgeColor()}`}
          >
            {event.badge}
          </span>
          {event.isChallenge && (
            <AlertTriangle size={12} className="text-red-400 ml-auto" />
          )}
          {event.isOffer && (
            <Star size={12} className="text-amber-300 fill-amber-300 ml-auto" />
          )}
        </div>

        {/* Title */}
        <h3
          className={`font-semibold text-base mb-2 ${
            event.isOffer
              ? "text-amber-200"
              : event.isVictory
              ? "text-amber-300/90"
              : event.isChallenge
              ? "text-red-300/90"
              : "text-white/90"
          }`}
        >
          {event.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-white/45 leading-relaxed mb-3">
          {event.description}
        </p>

        {/* Email expand */}
        {event.emailData && (
          <>
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60 transition-colors duration-200 group/btn"
              aria-expanded={expanded}
              aria-label={expanded ? "Collapse email" : "View email details"}
            >
              <Mail size={12} className="group-hover/btn:text-blue-400 transition-colors" />
              <span>{expanded ? "Hide email" : "View email"}</span>
              <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={12} />
              </motion.div>
            </button>
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden mt-3"
                >
                  <EmailCard data={event.emailData} />
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </motion.div>
  );
}

function PhaseSection({ phase, phaseIndex }: { phase: Phase; phaseIndex: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useRef(false);

  const iconColorMap: Record<string, string> = {
    Target: "text-violet-400",
    Code2: "text-blue-400",
    Trophy: "text-amber-400",
    Calendar: "text-emerald-400",
    Brain: "text-indigo-400",
    Sparkles: "text-amber-300",
  };

  return (
    <div ref={ref} className="mb-20" id={`phase-${phase.id}`}>
      {/* Phase header */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-baseline gap-3 flex-wrap">
          <span className="text-[11px] font-mono text-white/20 tracking-widest">
            {phase.number}
          </span>
          <h2 className="text-xl font-bold text-white/80 tracking-tight">
            {phase.name}
          </h2>
          {phase.note && (
            <span className="text-xs text-amber-400/70 ml-auto">
              {phase.note}
            </span>
          )}
        </div>
        <div className="mt-3 w-full h-px bg-gradient-to-r from-white/10 to-transparent" />
      </motion.div>

      {/* Events grid */}
      <div className="space-y-4">
        {phase.events.map((event, i) => (
          <EventCard
            key={event.id}
            event={event}
            isActive={false}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setScrollProgress(v);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  // Track active phase based on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const idx = phases.findIndex((p) => `phase-${p.id}` === id);
            if (idx !== -1) setActivePhaseIndex(idx);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -60% 0px" }
    );

    phases.forEach((p) => {
      const el = document.getElementById(`phase-${p.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative bg-[#050508] py-24"
      aria-label="Timeline"
    >
      {/* Section title */}
      <div className="text-center mb-20 px-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-6">
          <span className="text-xs font-medium text-white/40 tracking-widest uppercase">
            Full Timeline
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Every Milestone.
          <br />
          <span className="text-white/30">In Chronological Order.</span>
        </h2>
      </div>

      <div ref={containerRef} className="max-w-6xl mx-auto px-6">
        <div className="flex gap-12">
          {/* LEFT: Sticky phase navigator */}
          <aside className="hidden lg:flex flex-col w-48 flex-shrink-0">
            <div className="sticky top-24 space-y-1">
              {/* Progress bar */}
              <div className="mb-6">
                <div className="h-32 w-px bg-white/[0.06] relative mx-auto">
                  <motion.div
                    className="absolute top-0 left-0 w-full bg-gradient-to-b from-violet-500 to-amber-400 rounded-full"
                    style={{ height: `${scrollProgress * 100}%` }}
                    transition={{ duration: 0 }}
                  />
                </div>
              </div>

              {/* Phase nav items */}
              {phases.map((phase, i) => (
                <button
                  key={phase.id}
                  onClick={() => {
                    document
                      .getElementById(`phase-${phase.id}`)
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-xl transition-all duration-300 group ${
                    activePhaseIndex === i
                      ? "bg-white/[0.06] border border-white/15"
                      : "hover:bg-white/[0.03]"
                  }`}
                  aria-label={`Go to phase ${phase.number} — ${phase.name}`}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 ${
                        i < activePhaseIndex
                          ? "bg-amber-400"
                          : i === activePhaseIndex
                          ? "bg-violet-400 shadow-[0_0_6px_rgba(139,92,246,0.8)]"
                          : "bg-white/15"
                      }`}
                    />
                    <span
                      className={`text-xs font-medium transition-colors duration-300 ${
                        activePhaseIndex === i
                          ? "text-white/80"
                          : i < activePhaseIndex
                          ? "text-white/40"
                          : "text-white/20"
                      }`}
                    >
                      {phase.name}
                    </span>
                  </div>
                  <div className="ml-4 text-[10px] text-white/20 font-mono mt-0.5">
                    {phase.number}
                  </div>
                </button>
              ))}
            </div>
          </aside>

          {/* RIGHT: Content */}
          <div className="flex-1 min-w-0">
            {phases.map((phase, i) => (
              <PhaseSection key={phase.id} phase={phase} phaseIndex={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
