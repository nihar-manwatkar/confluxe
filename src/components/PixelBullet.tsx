"use client";

import { motion } from "framer-motion";

// Figma pixel bullets for 4- Our Capabilities – use PNG exports from Figma
// Node IDs to export: 289:1137, 289:1144, 289:1203, 289:1220, 289:1238, 289:1258
// Save as: public/images/capabilities/pixel-bullet-1.png through pixel-bullet-6.png

const IMAGES = [
  "/images/capabilities/pixel-bullet-1.png",
  "/images/capabilities/pixel-bullet-2.png",
  "/images/capabilities/pixel-bullet-3.png",
  "/images/capabilities/pixel-bullet-4.png",
  "/images/capabilities/pixel-bullet-5.png",
  "/images/capabilities/pixel-bullet-6.png",
] as const;

export default function PixelBullet({
  variant,
  isHovered = false,
}: {
  variant: 1 | 2 | 3 | 4 | 5 | 6;
  isHovered?: boolean;
}) {
  const src = IMAGES[variant - 1];
  return (
    <motion.div
      className="static shrink-0 flex items-start origin-center self-start"
      initial={false}
      animate={{ rotate: isHovered ? 360 : 0 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 0.61, 0.36, 1],
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        className="h-auto w-auto max-h-[46px] object-contain object-left pointer-events-none"
      />
    </motion.div>
  );
}
