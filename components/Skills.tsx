'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '@/lib/data';
import {
  SiPython, SiJavascript, SiTypescript, SiCplusplus,
  SiReact, SiNextdotjs, SiTailwindcss, SiHtml5,
  SiFastapi, SiNodedotjs, SiExpress,
  SiMysql, SiPostgresql, SiMongodb,
  SiPandas, SiScikitlearn, SiOpencv,
  SiGit, SiGithub, SiClerk,
} from 'react-icons/si';
import { Database, Globe, Brain, Video, Lock } from 'lucide-react';
import type { IconType } from 'react-icons';
import type { LucideIcon } from 'lucide-react';

type AnyIcon = IconType | LucideIcon;

const skillIconMap: Record<string, AnyIcon> = {
  'Python': SiPython,
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'C++': SiCplusplus,
  'SQL': Database,
  'React.js': SiReact,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  'HTML/CSS': SiHtml5,
  'FastAPI': SiFastapi,
  'Node.js': SiNodedotjs,
  'REST APIs': Globe,
  'Express.js': SiExpress,
  'MySQL': SiMysql,
  'PostgreSQL': SiPostgresql,
  'MongoDB': SiMongodb,
  'Pandas': SiPandas,
  'NLP': Brain,
  'Scikit-learn': SiScikitlearn,
  'OpenCV': SiOpencv,
  'MediaPipe': Video,
  'Git': SiGit,
  'GitHub': SiGithub,
  'Clerk': SiClerk,
  'NextAuth': Lock,
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-28 px-6 bg-[#0a0a0f] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-violet-400 text-sm tracking-[0.2em] uppercase">
            Tech Stack
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Skills &amp; Tools
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((category, idx) => (
            <motion.article
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              aria-labelledby={`skill-cat-${idx}`}
              className="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-violet-500/30 hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1"
            >
              <div
                aria-hidden="true"
                className="w-2 h-2 rounded-full mb-4"
                style={{
                  backgroundColor: category.color,
                  boxShadow: `0 0 12px ${category.color}60`,
                }}
              />
              <h3
                id={`skill-cat-${idx}`}
                className="text-white font-semibold text-base mb-4"
              >
                {category.category}
              </h3>
              <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                {category.items.map((skill) => {
                  const Icon = skillIconMap[skill];
                  return (
                    <li
                      key={skill}
                      className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-lg bg-white/[0.05] text-slate-300 border border-white/[0.06] group-hover:border-white/[0.12] transition-colors duration-200"
                    >
                      {Icon && (
                        <Icon
                          size={11}
                          aria-hidden="true"
                          style={{ color: category.color, flexShrink: 0 }}
                        />
                      )}
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
