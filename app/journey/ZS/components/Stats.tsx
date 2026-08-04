"use client";

import { useRef, useState, useEffect } from "react";
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
    glow: "rgba(139,92,246,0.25)",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    value: "26",
    label: "Milestones",
    sub: "Across 6 phases",
    icon: <Flag size={20} />,
    color: "text-blue-400",
    border: "border-blue-500/20",
    bg: "from-blue-500/10 to-blue-500/5",
    glow: "rgba(59,130,246,0.25)",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    value: "3×",
    label: "Reschedules",
    sub: "In 48 hours",
    icon: <RefreshCw size={20} />,
    color: "text-red-400",
    border: "border-red-500/20",
    bg: "from-red-500/10 to-red-500/5",
    glow: "rgba(239,68,68,0.25)",
    gradient: "from-red-500 to-rose-600",
  },
  {
    value: "₹14.2L",
    label: "PPO · FTE",
    sub: "BTSA · ZS Associates",
    icon: <IndianRupee size={20} />,
    color: "text-amber-400",
    border: "border-amber-500/30",
    bg: "from-amber-500/15 to-amber-500/5",
    glow: "rgba(251,191,36,0.3)",
    gradient: "from-amber-400 to-orange-500",
  },
];

/* Slot-machine counter for stat values */
function SlotCounter({ value, delay }: { value: string; delay: number }) {
  const [display, setDisplay] = useState("0");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const chars = value.split("");
    let frame = 0;
    const totalFrames = 20;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        frame++;
        if (frame >= totalFrames) {
          setDisplay(value);
          clearInterval(interval);
          return;
        }
        const progress = frame / totalFrames;
        let result = "";
        for (let i = 0; i < chars.length; i++) {
          const isDigit = /\d/.test(chars[i]);
          if (!isDigit || i < Math.floor(progress * chars.length)) {
            result += chars[i];
          } else {
            result += String(Math.floor(Math.random() * 10));
          }
        }
        setDisplay(result);
      }, 40);
    }, delay);
    return () => clearTimeout(timer);
  }, [started, value, delay]);

  return <span ref={ref}>{display}</span>;
}

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

        {/* Connecting line behind cards (desktop) */}
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-[8%] right-[8%] h-px -translate-y-1/2 z-0">
            <motion.div
              className="h-full rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(139,92,246,0.3), rgba(59,130,246,0.3), rgba(239,68,68,0.3), rgba(251,191,36,0.3))",
              }}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              aria-hidden="true"
            />
            {/* Traveling dot */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/60 shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
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
                whileHover={{ y: -6, scale: 1.03 }}
              >
                {/* Rotating gradient border */}
                <div className="absolute -inset-[1px] rounded-2xl animate-border-rotate opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Neon underglow */}
                <div
                  className="absolute -inset-3 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
                  style={{ background: stat.glow }}
                />

                <div
                  className={`relative h-full rounded-2xl border bg-gradient-to-b ${stat.bg} ${stat.border} backdrop-blur-sm p-6 overflow-hidden transition-all duration-300 group-hover:border-opacity-60`}
                >
                  {/* Icon with glow ring */}
                  <div className="relative mb-4">
                    <div className={`${stat.color} relative z-10`}>
                      {stat.icon}
                    </div>
                    <div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-0"
                      style={{ background: stat.glow }}
                    />
                  </div>

                  {/* Value */}
                  <div className={`text-3xl sm:text-4xl font-black mb-1 ${stat.color} tabular-nums`}>
                    <SlotCounter value={stat.value} delay={i * 150} />
                  </div>

                  {/* Label */}
                  <div className="text-sm font-semibold text-white/70 mb-1">
                    {stat.label}
                  </div>

                  {/* Sub */}
                  <div className="text-xs text-white/30">{stat.sub}</div>

                  {/* Hover top glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at 50% 0%, ${stat.glow}, transparent 60%)`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
