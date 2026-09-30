'use client';
import { Mail, Github, Linkedin, Phone, ArrowUpRight } from 'lucide-react';
import { columnDelay, reveal } from '@/lib/motion';
import { profile } from '@/lib/data';
import Magnetic from './Magnetic';
import SectionHeader from './SectionHeader';
import SpotlightCard from './SpotlightCard';
import { motion } from 'framer-motion';

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
  return (
    <section id="contact" className="py-28 px-6 bg-[#0a0a0f] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto">
        <SectionHeader eyebrow="Let's connect" title="Get In Touch" align="center">
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            Currently open to internship and full-time opportunities. Whether you have a project
            in mind or just want to say hi — I&apos;m all ears.
          </p>
        </SectionHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactItems.map(({ icon: Icon, label, value, href, color }, idx) => (
            <SpotlightCard
              key={label}
              glow={`${color}2b`}
              className="rounded-2xl"
              {...reveal(columnDelay(idx, 2, 0.1), 24)}
            >
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-5 flex items-center gap-4"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6"
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
                  className="text-slate-600 group-hover:text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0"
                />
              </a>
            </SpotlightCard>
          ))}
        </div>

        <motion.div {...reveal(0.4, 20)} className="mt-12 text-center">
          <Magnetic>
            <span className="relative inline-block">
              <span
                aria-hidden="true"
                className="absolute -inset-1 rounded-2xl bg-violet-500/40 blur-xl animate-glow-pulse"
              />
              <a
                href={`mailto:${profile.email}`}
                className="btn-shine relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white font-semibold rounded-xl transition-[background-color,box-shadow,transform] duration-200 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 active:scale-[0.97] text-base"
              >
                <Mail size={18} />
                Send Me an Email
              </a>
            </span>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
