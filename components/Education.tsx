'use client';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { reveal } from '@/lib/motion';
import { education } from '@/lib/data';
import SectionHeader from './SectionHeader';
import SpotlightCard from './SpotlightCard';

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto">
        <SectionHeader eyebrow="Academic Background" title="Education" className="mb-12" />

        <SpotlightCard lift={false} className="p-8 rounded-2xl" {...reveal(0.1, 30)}>
          <div className="flex items-start gap-5">
            <motion.div
              initial={{ scale: 0, rotate: -25 }}
              whileInView={{
                scale: 1,
                rotate: 0,
                transition: { type: 'spring', stiffness: 260, damping: 15, delay: 0.35 },
              }}
              viewport={{ once: true }}
              whileHover={{ rotate: -8, scale: 1.08 }}
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20 border border-violet-500/20 flex items-center justify-center shrink-0"
            >
              <GraduationCap size={24} className="text-violet-400" />
            </motion.div>
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
        </SpotlightCard>
      </div>
    </section>
  );
}
