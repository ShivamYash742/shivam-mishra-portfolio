'use client';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  type HTMLMotionProps,
} from 'framer-motion';
import clsx from 'clsx';

type SpotlightCardProps = Omit<HTMLMotionProps<'div'>, 'children'> & {
  children?: React.ReactNode;
  /** Colour of the cursor-following glow. */
  glow?: string;
  /** Subtle 3D tilt toward the cursor. */
  tilt?: boolean;
  /** Raise the card slightly on hover. */
  lift?: boolean;
};

const tiltSpring = { stiffness: 220, damping: 18, mass: 0.4 };
const MAX_TILT_DEG = 5;

/**
 * Card surface with a glow that follows the cursor. Motion values drive it, so
 * moving the pointer never re-renders React.
 *
 * Note the transition list below is explicit: `transition-all` would also ease the
 * inline transform/opacity framer-motion writes every frame, which makes entrance
 * animations feel laggy.
 */
export default function SpotlightCard({
  glow = 'rgba(139, 92, 246, 0.16)',
  tilt = false,
  lift = true,
  className,
  style,
  children,
  onPointerMove,
  onPointerLeave,
  ...rest
}: SpotlightCardProps) {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const rotateX = useSpring(0, tiltSpring);
  const rotateY = useSpring(0, tiltSpring);
  const background = useMotionTemplate`radial-gradient(360px circle at ${x}px ${y}px, ${glow}, transparent 70%)`;

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'touch') {
      const rect = e.currentTarget.getBoundingClientRect();
      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;
      x.set(px);
      y.set(py);
      if (tilt) {
        rotateY.set((px / rect.width - 0.5) * 2 * MAX_TILT_DEG);
        rotateX.set(-(py / rect.height - 0.5) * 2 * MAX_TILT_DEG);
      }
    }
    onPointerMove?.(e);
  };

  const handleLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    rotateX.set(0);
    rotateY.set(0);
    onPointerLeave?.(e);
  };

  return (
    <motion.div
      {...rest}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={tilt ? { ...style, rotateX, rotateY, transformPerspective: 900 } : style}
      className={clsx(
        'group relative isolate border border-white/[0.08] bg-white/[0.03]',
        'transition-[translate,border-color,background-color] duration-300',
        'hover:border-violet-500/25 hover:bg-white/[0.05]',
        lift && 'hover:-translate-y-1',
        className
      )}
    >
      <motion.div
        aria-hidden="true"
        style={{ background }}
        className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      {children}
    </motion.div>
  );
}
