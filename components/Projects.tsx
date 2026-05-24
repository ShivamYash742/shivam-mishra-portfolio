'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Check } from 'lucide-react';
import { projects } from '@/lib/data';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="py-28 px-6 bg-[#0a0a0f] relative">
      <div className="absolute right-0 top-1/2 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-violet-400 text-sm tracking-[0.2em] uppercase">
            What I&apos;ve built
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative p-7 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-violet-500/25 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(400px circle at 50% 0%, ${project.accentColor}08, transparent)`,
                }}
              />

              <div className="mb-5 relative z-10">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} on GitHub`}
                      className="text-slate-500 hover:text-violet-400 transition-colors"
                    >
                      <Github size={18} aria-hidden="true" />
                    </a>
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} live demo`}
                        className="text-slate-500 hover:text-cyan-400 transition-colors"
                      >
                        <ExternalLink size={18} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm font-mono" style={{ color: project.accentColor }}>
                  {project.subtitle}
                </p>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-5 relative z-10">
                {project.description}
              </p>

              <ul className="space-y-2 mb-6 relative z-10 flex-1">
                {project.points.slice(0, 4).map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                    <Check size={14} className="text-violet-400 mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 relative z-10">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium rounded-lg text-slate-300 border border-white/[0.08] bg-white/[0.04]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
