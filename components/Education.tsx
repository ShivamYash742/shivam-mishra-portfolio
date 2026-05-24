'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { education } from '@/lib/data';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="py-20 px-6 bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-violet-400 text-sm tracking-[0.2em] uppercase">
            Academic Background
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-violet-500/20 transition-all duration-300 group"
        >
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20 border border-violet-500/20 flex items-center justify-center shrink-0">
              <GraduationCap size={24} className="text-violet-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold text-xl mb-1 group-hover:text-violet-300 transition-colors">
                {education.degree}
              </h3>
              <p className="text-violet-400 font-medium mb-4">{education.institute}</p>
              <div className="flex flex-wrap gap-5">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Calendar size={14} className="text-violet-400" />
                  {education.timeline}
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Award size={14} className="text-cyan-400" />
                  GPA:{' '}
                  <span className="text-white font-semibold ml-1">{education.gpa}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
