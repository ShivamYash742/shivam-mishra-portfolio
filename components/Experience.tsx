'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';
import { experience } from '@/lib/data';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="py-28 px-6 bg-[#0a0a0f] relative">
      <div className="absolute left-0 top-0 w-[300px] h-[300px] bg-violet-600/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-violet-400 text-sm tracking-[0.2em] uppercase">
            Where I&apos;ve worked
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mt-4" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-violet-500/20 to-transparent" />

          <div className="space-y-10">
            {experience.map((item, idx) => (
              <motion.div
                key={item.org}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative pl-16"
              >
                <div className="absolute left-[18px] top-4 w-3 h-3 rounded-full bg-violet-500 ring-4 ring-violet-500/20" />

                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-violet-500/20 transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-white font-semibold text-lg group-hover:text-violet-300 transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-violet-400 text-sm font-medium flex items-center gap-1.5 mt-0.5">
                        <Briefcase size={13} />
                        {item.org}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {item.current && (
                        <span className="px-2 py-0.5 bg-emerald-500/15 text-emerald-400 text-xs font-medium rounded-full border border-emerald-500/20">
                          Current
                        </span>
                      )}
                      <span className="text-slate-500 text-sm font-mono">{item.timeline}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {item.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                        <span className="text-violet-400 mt-0.5 shrink-0">–</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
