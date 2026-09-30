import type { Variants } from 'framer-motion';

/** Fast start, long soft landing — reads as more polished than the default easeInOut. */
export const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export const inViewOnce = { once: true, margin: '-60px' } as const;

/**
 * Spread onto any motion element to slide/fade it in when it scrolls into view.
 * Each element watches its own visibility, so items below the fold on mobile
 * don't animate before anyone can see them.
 */
export const reveal = (delay = 0, y = 28) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: inViewOnce,
  transition: { duration: 0.7, delay, ease: easeOutExpo },
});

/** Stagger by column so a wrapped grid cascades row by row instead of all at once. */
export const columnDelay = (index: number, columns = 3, step = 0.1) =>
  (index % columns) * step;

/** Parent variant that staggers any child using `itemFade`/`chipPop`. */
export const staggerChildren = (stagger = 0.06, delayChildren = 0.15): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});

export const itemFade: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOutExpo } },
};

export const itemSlide: Variants = {
  hidden: { opacity: 0, x: -14 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeOutExpo } },
};

export const chipPop: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 320, damping: 20 },
  },
};
