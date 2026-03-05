"use client";

import { motion } from "framer-motion";

type ScrollRevealProps = {
  children: React.ReactNode;
  /** Optional delay before animation starts (seconds) */
  delay?: number;
  /** Optional custom className for the wrapper */
  className?: string;
  /** Amount of element visible (0-1) to trigger animation. Default 0.15 */
  amount?: number;
};

/**
 * Wraps content with a scroll-triggered fade-in + slide-up animation.
 * Uses Framer Motion's whileInView for smooth, performant reveals.
 */
export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  amount = 0.15,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
