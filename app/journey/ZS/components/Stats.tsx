"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  Flag,
  RefreshCw,
  IndianRupee,
} from "lucide-react";

const displayStats = [
  {
    value: "125",
    label: "Days",
    sub: "Mar 17 → Jul 20",
    icon: <Calendar size={20} />,
    color: "text-violet-400",
    border: "border-violet-500/20",
    bg: "from-violet-500/10 to-violet-500/5",
  },
  {
    value: "26",
    label: "Milestones",
    sub: "Across 6 phases",
    icon: <Flag size={20} />,
    color: "text-blue-400",
    border: "border-blue-500/20",
    bg: "from-blue-500/10 to-blue-500/5",
  },
  {
    value: "3×",
    label: "Reschedules",
    sub: "In 48 hours",
    icon: <RefreshCw size={20} />,
    color: "text-red-400",
    border: "border-red-500/20",
    bg: "from-red-500/10 to-red-500/5",
  },
  {
    value: "₹14.2L",
    label: "PPO · FTE",
    sub: "BTSA · ZS Associates",
    icon: <IndianRupee size={20} />,
    color: "text-amber-400",
    border: "border-amber-500/30",
    bg: "from-amber-500/15 to-amber-500/5",
  },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 bg-[#050508]"
      aria-label="Journey Statistics"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs text-white/25 uppercase tracking-[0.3em] font-medium">
            By the numbers
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {displayStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -3 }}
            >
              <div
                className={`relative h-full rounded-2xl border bg-gradient-to-b ${stat.bg} ${stat.border} backdrop-blur-sm p-6 overflow-hidden transition-all duration-300 group-hover:border-opacity-60`}
              >
                {/* Icon */}
                <div className={`mb-4 ${stat.color}`}>{stat.icon}</div>

                {/* Value */}
                <div
                  className={`text-3xl sm:text-4xl font-black mb-1 ${stat.color}`}
                >
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-sm font-semibold text-white/70 mb-1">
                  {stat.label}
                </div>

                {/* Sub */}
                <div className="text-xs text-white/30">{stat.sub}</div>

                {/* Hover glow */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  style={{
                    background: `radial-gradient(ellipse at 50% 0%, ${
                      i === 0
                        ? "rgba(139,92,246,0.1)"
                        : i === 1
                        ? "rgba(59,130,246,0.1)"
                        : i === 2
                        ? "rgba(239,68,68,0.1)"
                        : "rgba(251,191,36,0.1)"
                    }, transparent 60%)`,
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
