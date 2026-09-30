'use client';
import { motion } from 'framer-motion';
import { chipPop, columnDelay, easeOutExpo, inViewOnce, staggerChildren } from '@/lib/motion';
import { skills } from '@/lib/data';
import SectionHeader from './SectionHeader';
import SpotlightCard from './SpotlightCard';
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
  return (
    <section id="skills" className="py-28 px-6 bg-[#0a0a0f] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Tech Stack" title={<>Skills &amp; Tools</>} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((category, idx) => (
            // The card fades in on its own; its chips then pop in one after another.
            <SpotlightCard
              key={category.category}
              glow={`${category.color}26`}
              className="rounded-2xl"
              initial="hidden"
              whileInView="show"
              viewport={inViewOnce}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: columnDelay(idx),
                    ease: easeOutExpo,
                    delayChildren: 0.25 + columnDelay(idx),
                  },
                },
              }}
            >
              <article aria-labelledby={`skill-cat-${idx}`} className="relative p-6">
                <div
                  aria-hidden="true"
                  className="w-2 h-2 rounded-full mb-4 transition-transform duration-300 group-hover:scale-150"
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
                <motion.ul
                  variants={staggerChildren(0.045, 0)}
                  className="flex flex-wrap gap-2 list-none p-0 m-0"
                >
                  {category.items.map((skill) => {
                    const Icon = skillIconMap[skill];
                    return (
                      <motion.li
                        key={skill}
                        variants={chipPop}
                        whileHover={{ y: -2, scale: 1.06 }}
                        className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-lg bg-white/[0.05] text-slate-300 border border-white/[0.06] group-hover:border-white/[0.12] transition-colors duration-200 hover:!border-white/25 hover:text-white cursor-default"
                      >
                        {Icon && (
                          <Icon
                            size={11}
                            aria-hidden="true"
                            style={{ color: category.color, flexShrink: 0 }}
                          />
                        )}
                        {skill}
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </article>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
