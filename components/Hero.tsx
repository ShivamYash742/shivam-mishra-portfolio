'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Mail, Phone, ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { profile } from '@/lib/data';

const Hero3D = dynamic(() => import('./Hero3D'), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden="true"
      className="absolute inset-0 w-full h-full bg-gradient-to-br from-violet-900/10 to-cyan-900/10 animate-pulse"
    />
  ),
});

const socials = [
  { icon: Github, href: 'https://github.com/shivamyash742', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/shivammishra', label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
  { icon: Phone, href: `tel:${profile.phone}`, label: 'Phone' },
] as const;

function ImageAvatar() {
  return (
    <div className="relative">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-[-18px] rounded-full border-2 border-dashed border-violet-500/25"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-[-9px] rounded-full border border-cyan-400/20"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-[-20px] rounded-full"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-violet-400 shadow-[0_0_8px_3px_rgba(167,139,250,0.7)]" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-[-20px] rounded-full"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_3px_rgba(34,211,238,0.7)]" />
      </motion.div>

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

      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0, 0.35] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 rounded-full bg-violet-500/25 blur-sm pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0, 0.2] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute inset-0 rounded-full bg-cyan-500/15 blur-md pointer-events-none"
      />
    </div>
  );
}

function ThoughtBubble({
  opacity,
  y,
}: {
  opacity?: MotionValue<number>;
  y?: MotionValue<number>;
}) {
  return (
    <motion.div
      style={opacity && y ? { opacity, y } : undefined}
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.0, duration: 0.6, type: 'spring', stiffness: 100 }}
      className="absolute left-1/2 -translate-x-1/2 bottom-full mb-20 w-72 z-30 pointer-events-none"
    >
      <div className="relative bg-white/[0.06] backdrop-blur-xl border border-violet-500/30 rounded-2xl p-5 shadow-[0_8px_40px_rgba(124,58,237,0.25)]">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles size={13} className="text-violet-400" />
          <span className="font-mono text-violet-400 text-[10px] tracking-[0.2em] uppercase">
            Thinking about
          </span>
        </div>
        <h3 className="text-white font-bold text-base leading-tight mb-1">{profile.name}</h3>
        <p className="text-slate-400 text-xs leading-snug">{profile.title}</p>
      </div>

      <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          className="w-2.5 h-2.5 rounded-full bg-violet-500/60 shadow-[0_0_8px_2px_rgba(167,139,250,0.5)]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          className="w-1.5 h-1.5 rounded-full bg-violet-500/40"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          className="w-1 h-1 rounded-full bg-violet-500/30"
        />
      </div>
    </motion.div>
  );
}

function InfoPanel({ centered = false }: { centered?: boolean }) {
  const alignment = centered ? 'items-center text-center' : 'items-start text-left';
  const btnRow = centered ? 'justify-center' : '';
  return (
    <div className={`flex flex-col ${alignment}`}>
      <span className="inline-block font-mono text-violet-400 text-sm tracking-[0.2em] uppercase mb-4">
        Hi, I&apos;m
      </span>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
        <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
          {profile.name}
        </span>
      </h1>
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
        {profile.title}
      </h2>
      <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-10 max-w-lg">
        {profile.tagline}
      </p>
      <div className={`flex flex-wrap gap-3 mb-10 ${btnRow}`}>
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
      </div>
      <div className={`flex items-center gap-5 ${btnRow}`}>
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
      </div>
    </div>
  );
}

function EdgeFades() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0a0a0f] to-transparent" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0a0a0f] to-transparent" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0a0a0f] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Image slides quick. Info starts appearing immediately on scroll (scrollY > 0) and becomes fully visible by 150px scroll, holding visible until section scroll completes.
  const unitX = useTransform(scrollY, [0, 150], ['0vw', '-22vw']);
  const unitScale = useTransform(scrollY, [0, 150], [1.05, 0.92]);

  const infoOpacity = useTransform(scrollY, [0, 150], [0, 1]);
  const infoX = useTransform(scrollY, [0, 150], [40, 0]);

  const bubbleOpacity = useTransform(scrollY, [0, 50], [1, 0]);
  const bubbleY = useTransform(scrollY, [0, 50], [0, -30]);

  const hintOpacity = useTransform(scrollY, [0, 30], [1, 0]);

  return (
    <>
      {/* Mobile: simple static stacked */}
      <section
        id="home"
        className="lg:hidden min-h-screen bg-[#0a0a0f] relative overflow-hidden flex flex-col items-center justify-center px-6 pt-32 pb-16"
      >
        <div className="absolute inset-0 opacity-60">
          <Hero3D />
        </div>
        <EdgeFades />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/6 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-20 flex flex-col items-center gap-16 w-full">
          <div className="relative pt-24">
            <ThoughtBubble />
            <ImageAvatar />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-full"
          >
            <InfoPanel centered />
          </motion.div>
        </div>
      </section>

      {/* Desktop: scrollytelling */}
      <section
        ref={sectionRef}
        id="home"
        className="hidden lg:block relative bg-[#0a0a0f] h-[200vh]"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Ambient background glows (stationary) */}
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-violet-600/8 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/6 rounded-full blur-[100px] pointer-events-none" />

          {/* 3D + Image unit — moves together */}
          <motion.div
            style={{ x: unitX, scale: unitScale }}
            className="absolute left-1/2 top-0 -translate-x-1/2 h-screen aspect-square z-20"
          >
            {/* 3D fills this container — radial mask blends edges into background */}
            <div
              className="absolute inset-0"
              style={{
                maskImage: 'radial-gradient(circle at center, black 30%, transparent 72%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 72%)',
              }}
            >
              <Hero3D />
            </div>

            {/* Image + bubble — absolute-centered exactly on 3D origin */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, type: 'spring', stiffness: 80 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <ThoughtBubble opacity={bubbleOpacity} y={bubbleY} />
              <ImageAvatar />
            </motion.div>
          </motion.div>

          {/* Info panel — slides in from right */}
          <motion.div
            style={{ opacity: infoOpacity, x: infoX }}
            className="absolute right-0 top-0 h-full w-1/2 flex items-center pr-20 pl-12 z-10"
          >
            <InfoPanel />
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            style={{ opacity: hintOpacity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 z-30 flex flex-col items-center gap-2 pointer-events-none"
          >
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown size={22} />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
