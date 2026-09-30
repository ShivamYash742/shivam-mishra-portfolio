'use client';
import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400 shadow-[0_0_12px_rgba(139,92,246,0.7)]"
    />
  );
}

/**
 * Wraps the home page so every framer-motion animation honours the visitor's
 * "reduce motion" setting (the CSS animations already did), and adds the
 * reading-progress bar.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      {children}
    </MotionConfig>
  );
}
