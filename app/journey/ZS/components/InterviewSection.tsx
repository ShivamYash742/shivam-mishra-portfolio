"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Clock, CheckCircle2, MessageSquare, HelpCircle } from "lucide-react";

interface InterviewRound {
  id: string;
  icon: React.ReactNode;
  date: string;
  label: string;
  title: string;
  description: string;
  status: "completed" | "waiting" | "scheduled";
  color: string;
  borderColor: string;
  glow: string;
}

const interviewRounds: InterviewRound[] = [
  {
    id: "r1-prep",
    icon: <Brain size={20} />,
    date: "JUN 13–17",
    label: "Preparation",
    title: "R1 Prep Under Chaos",
    description:
      "Three reschedules between Jun 13–17. Prep stretched across five days of uncertainty — restarting focus every time the slot changed.",
    status: "completed",
    color: "from-violet-500/15 to-violet-500/5",
    borderColor: "border-violet-500/25",
    glow: "rgba(139,92,246,0.2)",
  },
  {
    id: "round-1",
    icon: <CheckCircle2 size={20} />,
    date: "JUN 18",
    label: "Round 1",
    title: "Case/Tech Round 1",
    description:
      "First round conducted after three reschedules. Case study + technical discussion. The wait made this moment feel even more significant.",
    status: "completed",
    color: "from-blue-500/15 to-blue-500/5",
    borderColor: "border-blue-500/25",
    glow: "rgba(59,130,246,0.2)",
  },
  {
    id: "r2-scheduled",
    icon: <Clock size={20} />,
    date: "JUN 23",
    label: "R2 Scheduled",
    title: "Round 2 Confirmed",
    description:
      "Round 2 scheduled for Jun 24, 3:00–4:00 PM IST. A signal that R1 went well.",
    status: "scheduled",
    color: "from-emerald-500/15 to-emerald-500/5",
    borderColor: "border-emerald-500/25",
    glow: "rgba(16,185,129,0.2)",
  },
  {
    id: "round-2",
    icon: <CheckCircle2 size={20} />,
    date: "JUN 24",
    label: "Round 2",
    title: "Case/Tech Round 2",
    description:
      "Second and final interview round. The decisive conversation. Everything came down to this 60-minute session.",
    status: "completed",
    color: "from-amber-500/15 to-amber-500/5",
    borderColor: "border-amber-500/25",
    glow: "rgba(251,191,36,0.2)",
  },
  {
    id: "follow-up",
    icon: <MessageSquare size={20} />,
    date: "JUN 30",
    label: "Follow-up",
    title: "Post-Interview Correspondence",
    description:
      "Follow-up messages sent. Gratitude, persistence, and professionalism — all three after both rounds concluded.",
    status: "completed",
    color: "from-indigo-500/15 to-indigo-500/5",
    borderColor: "border-indigo-500/25",
    glow: "rgba(99,102,241,0.2)",
  },
  {
    id: "waiting",
    icon: <HelpCircle size={20} />,
    date: "JUL 1–16",
    label: "Silence",
    title: "26 Days. No Update.",
    description:
      "The hardest stretch. Jun 30 to Jul 17 — nothing but time, doubt, and the discipline to keep moving forward while waiting for a call that might never come.",
    status: "waiting",
    color: "from-red-500/10 to-red-500/5",
    borderColor: "border-red-500/20",
    glow: "rgba(239,68,68,0.2)",
  },
];

export default function InterviewSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 bg-[#050508] overflow-hidden"
      aria-label="Interview Rounds"
    >
      {/* Radar sweep background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
        <div
          className="w-[800px] h-[800px] rounded-full animate-radar"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0%, rgba(99,102,241,0.4) 10%, transparent 20%)",
          }}
        />
      </div>

      {/* Concentric circle decorations */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-white/[0.02]" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-white/[0.03]" />
        <div className="absolute w-[200px] h-[200px] rounded-full border border-white/[0.04]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-6">
            <Brain size={12} className="text-indigo-400" />
            <span className="text-xs font-medium text-white/40 tracking-widest uppercase">
              Interview Process
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            The Rooms That{" "}
            <span className="text-indigo-400">Mattered.</span>
          </h2>
          <p className="mt-4 text-white/40 max-w-sm mx-auto text-base">
            Two rounds. Three reschedules. 26 days of silence.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {interviewRounds.map((round, i) => (
            <motion.div
              key={round.id}
              className="relative group"
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              {/* Rotating border on hover */}
              <div className="absolute -inset-[1px] rounded-2xl animate-border-rotate opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Neon underglow */}
              <div
                className="absolute -inset-3 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
                style={{ background: round.glow }}
              />

              <div
                className={`relative h-full rounded-2xl border bg-gradient-to-b ${round.color} ${round.borderColor} backdrop-blur-sm p-5 overflow-hidden group-hover:border-opacity-60 transition-all duration-300`}
              >
                {/* Status indicator */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl border ${round.borderColor} bg-white/[0.04] flex items-center justify-center text-white/60 group-hover:shadow-lg transition-shadow duration-300`}
                    style={{
                      boxShadow: "none",
                    }}
                  >
                    {round.icon}
                  </div>
                  <div
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                      round.status === "completed"
                        ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
                        : round.status === "waiting"
                        ? "text-red-400 bg-red-500/10 border border-red-500/20"
                        : "text-blue-400 bg-blue-500/10 border border-blue-500/20"
                    }`}
                  >
                    {round.status === "completed"
                      ? "Done"
                      : round.status === "waiting"
                      ? "Hardest"
                      : "Confirmed"}
                  </div>
                </div>

                {/* Pulsing live dot for waiting card */}
                {round.status === "waiting" && (
                  <motion.div
                    className="absolute top-3 right-3 flex items-center gap-1.5"
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.8)]" />
                    <span className="text-[9px] font-bold text-red-400/80 tracking-widest uppercase">
                      LIVE
                    </span>
                  </motion.div>
                )}

                {/* Date */}
                <div className="text-[10px] font-mono text-white/25 tracking-widest uppercase mb-1">
                  {round.date}
                </div>

                {/* Label */}
                <div className="text-[11px] text-white/35 uppercase tracking-widest mb-2 font-medium">
                  {round.label}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white/85 mb-3 leading-snug">
                  {round.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/40 leading-relaxed">
                  {round.description}
                </p>

                {/* Hover top glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 50% 0%, ${round.glow}, transparent 60%)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
