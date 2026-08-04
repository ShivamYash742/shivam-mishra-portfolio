"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { phases, type Phase, type TimelineEvent } from "../data";
import { AlertTriangle, ChevronDown, Mail, Star } from "lucide-react";
import EmailCard from "./EmailCard";

function EventCard({
  event,
  index,
}: {
  event: TimelineEvent;
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

  const getGlowColor = () => {
    if (event.isOffer || event.isVictory || event.status === "gold") return "rgba(251,191,36,0.15)";
    if (event.isChallenge || event.status === "red") return "rgba(239,68,68,0.15)";
    if (event.status === "blue") return "rgba(59,130,246,0.15)";
    return "rgba(255,255,255,0.05)";
  };

  // Alternating slide-in direction
  const slideInX = index % 2 === 0 ? 40 : -40;

  return (
    <motion.div
      initial={{ opacity: 0, x: slideInX, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, scale: 1.01 }}
      className={`relative group rounded-2xl border bg-white/[0.02] backdrop-blur-sm p-5 transition-all duration-300 shadow-lg ${getBorderColor()} ${
        event.isOffer ? "shadow-amber-400/20" : ""
      }`}
    >
      {/* Premium shimmer border for special events */}
      {(event.isOffer || event.isVictory) && (
        <div className="absolute -inset-[1px] rounded-2xl bg-[linear-gradient(90deg,transparent,rgba(251,191,36,0.4),transparent)] animate-shimmer pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}

      {/* Neon underglow on hover */}
      <div
        className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
        style={{ background: getGlowColor() }}
      />

      {/* Inner glow overlay for special events */}
      {(event.isOffer || event.isVictory) && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: event.isOffer
              ? "radial-gradient(ellipse at 50% 0%, rgba(251,191,36,0.1), transparent 60%)"
              : "radial-gradient(ellipse at 50% 0%, rgba(212,162,76,0.08), transparent 60%)",
          }}
        />
      )}
      {event.isChallenge && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(239,68,68,0.08), transparent 60%)",
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
            <AlertTriangle size={12} className="text-red-400 ml-auto animate-pulse" />
          )}
          {event.isOffer && (
            <Star size={12} className="text-amber-300 fill-amber-300 ml-auto animate-glow-pulse" />
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
          <span className="text-[11px] font-mono text-amber-400/50 tracking-widest">
            PHASE {phase.number}
          </span>
          <h2 className="text-2xl font-bold text-white/90 tracking-tight">
            {phase.name}
          </h2>
          {phase.note && (
            <span className="text-xs text-amber-400/70 ml-auto border border-amber-400/20 px-2 py-1 rounded-md bg-amber-400/[0.03]">
              {phase.note}
            </span>
          )}
        </div>
        <div className="mt-4 w-full h-[2px] bg-gradient-to-r from-amber-400/20 via-white/5 to-transparent rounded-full" />
      </motion.div>

      {/* Events grid */}
      <div className="space-y-5 pl-2 border-l border-white/5 ml-2 relative">
        <div className="absolute top-0 bottom-0 left-[-1px] w-[2px] bg-gradient-to-b from-amber-400/30 to-transparent opacity-50" />
        {phase.events.map((event, i) => (
          <EventCard
            key={event.id}
            event={event}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
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
      className="relative bg-[#050508] py-32"
      aria-label="Timeline"
    >
      {/* Section title */}
      <div className="text-center mb-24 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>
      </div>

      <div ref={containerRef} className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex gap-12">
          {/* LEFT: Sticky phase navigator with glowing rail */}
          <aside className="hidden lg:flex flex-col w-56 flex-shrink-0 relative">
            <div className="sticky top-32 space-y-2">
              
              {/* Glowing vertical rail */}
              <div className="absolute left-[-20px] top-4 bottom-0 w-[2px] bg-white/[0.05] rounded-full overflow-hidden">
                <motion.div
                  className="w-full bg-gradient-to-b from-amber-400 via-violet-500 to-indigo-500 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.5)]"
                  style={{ height: `${scrollProgress * 100}%` }}
                />
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
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                    activePhaseIndex === i
                      ? "bg-white/[0.06] border border-white/15"
                      : "hover:bg-white/[0.03] border border-transparent"
                  }`}
                  aria-label={`Go to phase ${phase.number} — ${phase.name}`}
                >
                  {/* Active highlight glow */}
                  {activePhaseIndex === i && (
                    <motion.div
                      layoutId="activePhaseGlow"
                      className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-transparent pointer-events-none"
                    />
                  )}

                  <div className="flex items-center gap-3 relative z-10">
                    <div
                      className={`w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300 ${
                        i < activePhaseIndex
                          ? "bg-amber-400/50"
                          : i === activePhaseIndex
                          ? "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)] scale-125"
                          : "bg-white/15 group-hover:bg-white/30"
                      }`}
                    />
                    <div>
                      <span
                        className={`block text-sm font-medium transition-colors duration-300 ${
                          activePhaseIndex === i
                            ? "text-white/90"
                            : i < activePhaseIndex
                            ? "text-white/50"
                            : "text-white/30 group-hover:text-white/50"
                        }`}
                      >
                        {phase.name}
                      </span>
                      <span className="block text-[10px] text-white/20 font-mono mt-0.5 tracking-wider">
                        PHASE {phase.number}
                      </span>
                    </div>
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
