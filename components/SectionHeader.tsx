'use client';
import { motion, type Variants } from 'framer-motion';
import clsx from 'clsx';
import { easeOutExpo, inViewOnce } from '@/lib/motion';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const eyebrowVariant: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOutExpo } },
};

// The title rises out from behind a mask instead of just fading.
const titleVariant: Variants = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 0.8, ease: easeOutExpo } },
};

const ruleVariant: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.8, delay: 0.1, ease: easeOutExpo } },
};

const bodyVariant: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutExpo } },
};

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
  children?: React.ReactNode;
}

export default function SectionHeader({
  eyebrow,
  title,
  align = 'left',
  className = 'mb-16',
  children,
}: SectionHeaderProps) {
  const center = align === 'center';

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={inViewOnce}
      variants={container}
      className={clsx(className, center && 'text-center')}
    >
      <motion.span
        variants={eyebrowVariant}
        className="inline-block font-mono text-violet-400 text-sm tracking-[0.2em] uppercase"
      >
        {eyebrow}
      </motion.span>

      {/* overflow-hidden is the mask; the padding/negative margin pair keeps descenders from being clipped */}
      <h2 className="mt-2 overflow-hidden -mb-2">
        <motion.span
          variants={titleVariant}
          className="block pb-2 text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent"
        >
          {title}
        </motion.span>
      </h2>

      <motion.div
        variants={ruleVariant}
        className={clsx(
          'w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mt-4',
          center ? 'mx-auto origin-center' : 'origin-left'
        )}
      />

      {children && (
        <motion.div variants={bodyVariant} className="mt-6">
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
