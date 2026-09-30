'use client';
import { motion, useSpring } from 'framer-motion';

const spring = { stiffness: 220, damping: 16, mass: 0.3 };

/** Pulls its child a little toward the cursor while hovered, then springs back. */
export default function Magnetic({
  children,
  strength = 0.25,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  return (
    <motion.div
      style={{ x, y }}
      onPointerMove={(e) => {
        if (e.pointerType === 'touch') return;
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
        y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={className ?? 'inline-block'}
    >
      {children}
    </motion.div>
  );
}
