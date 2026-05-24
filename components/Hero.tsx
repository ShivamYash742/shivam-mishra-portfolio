'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ArrowRight, ChevronDown } from 'lucide-react';
import { profile } from '@/lib/data';

const Hero3D = dynamic(() => import('./Hero3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-violet-900/10 to-cyan-900/10 animate-pulse rounded-3xl" />
  ),
});

const socials = [
  { icon: Github, href: 'https://github.com/shivamyash742', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/shivammishra', label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
  { icon: Phone, href: `tel:${profile.phone}`, label: 'Phone' },
] as const;

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center relative overflow-hidden bg-[#0a0a0f]"
    >
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-violet-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/6 rounded-full blur-[100px] pointer-events-none" />

      {/* Left: 3D Scene + Profile Image overlay */}
      <div className="flex-1 relative h-[480px] sm:h-[560px] lg:h-screen w-full">
        <Hero3D />

        {/* Edge fade overlays — soften ring clipping */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0f] to-transparent" />
          <div className="absolute inset-y-0 right-0 w-36 bg-gradient-to-l from-[#0a0a0f] to-transparent" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0a0a0f] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
        </div>

        {/* Profile image centered on canvas */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.9, type: 'spring', stiffness: 80 }}
            className="relative"
          >
            {/* Outer slow-spinning dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-18px] rounded-full border-2 border-dashed border-violet-500/25"
            />
            {/* Inner counter-spinning ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-9px] rounded-full border border-cyan-400/20"
            />
            {/* Dot orbiting the outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-20px] rounded-full"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-violet-400 shadow-[0_0_8px_3px_rgba(167,139,250,0.7)]" />
            </motion.div>
            {/* Second orbiting dot offset 180° */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-20px] rounded-full"
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_3px_rgba(34,211,238,0.7)]" />
            </motion.div>

            {/* Gradient border frame */}
            <div className="w-44 h-44 sm:w-52 sm:h-52 lg:w-64 lg:h-64 rounded-full p-[3px] bg-gradient-to-br from-violet-500 via-purple-400 to-cyan-400 shadow-[0_0_70px_rgba(124,58,237,0.55),0_0_120px_rgba(124,58,237,0.2)]">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0a0f] ring-2 ring-black/40">
                <Image
                  src="/shivam.png"
                  alt="Shivam Mishra"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Breathing glow pulse behind image */}
            <motion.div
              animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0, 0.35] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-full bg-violet-500/25 blur-sm"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0, 0.2] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute inset-0 rounded-full bg-cyan-500/15 blur-md"
            />
          </motion.div>
        </div>
      </div>

      {/* Right: Content */}
      <div className="flex-1 px-8 lg:pl-12 lg:pr-20 pt-32 pb-16 lg:py-0 relative z-10 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="inline-block font-mono text-violet-400 text-sm tracking-[0.2em] uppercase mb-4"
          >
            Hi, I&apos;m
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-xl sm:text-2xl font-semibold mb-6 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"
          >
            {profile.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed mb-10 max-w-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 border border-violet-500/40 text-violet-300 hover:bg-violet-500/10 hover:border-violet-400/60 font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="flex items-center gap-5"
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="text-slate-400 hover:text-violet-400 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ delay: 1.5, repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 z-10"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
