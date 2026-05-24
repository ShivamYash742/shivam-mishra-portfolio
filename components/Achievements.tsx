'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { achievements } from '@/lib/data';

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="achievements" className="py-28 px-6 bg-[#0a0a0f] relative">
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-violet-400 text-sm tracking-[0.2em] uppercase">
            Notable wins
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="group p-5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-violet-500/25 hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1 flex gap-4 items-start"
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="text-white text-sm font-semibold leading-snug mb-1">{item.text}</p>
                <p className="text-slate-500 text-xs">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
