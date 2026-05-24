'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, Phone, ArrowUpRight } from 'lucide-react';
import { profile } from '@/lib/data';

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    color: '#7C3AED',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/shivamyash742',
    href: 'https://github.com/shivamyash742',
    color: '#6D28D9',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/shivamyash742',
    href: 'https://linkedin.com/in/shivamyash742',
    color: '#06B6D4',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone}`,
    color: '#8B5CF6',
  },
] as const;

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="py-28 px-6 bg-[#0a0a0f] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-violet-400 text-sm tracking-[0.2em] uppercase">
            Let&apos;s connect
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mt-4 mx-auto" />
          <p className="text-slate-400 mt-6 max-w-xl mx-auto leading-relaxed">
            Currently open to internship and full-time opportunities. Whether you have a project
            in mind or just want to say hi — I&apos;m all ears.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactItems.map(({ icon: Icon, label, value, href, color }, idx) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-violet-500/25 hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1 flex items-center gap-4"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${color}18`, border: `1px solid ${color}30` }}
              >
                <Icon size={18} style={{ color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-slate-500 text-xs font-medium mb-0.5">{label}</p>
                <p className="text-slate-300 text-sm group-hover:text-white transition-colors truncate">
                  {value}
                </p>
              </div>
              <ArrowUpRight
                size={14}
                className="text-slate-600 group-hover:text-violet-400 transition-colors shrink-0"
              />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5 text-base"
          >
            <Mail size={18} />
            Send Me an Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
