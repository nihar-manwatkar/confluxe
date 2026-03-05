"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const HERO_BG_COUNT = 5;
const TRANSITION_INTERVAL_MS = 5000;   // Time each slide stays visible
const TRANSITION_DURATION_MS = 2800;   // Crossfade – slower, smoother

// Grid reveal (disenopublico-style): center-radiating stagger
const GRID_COLS = 14;
const GRID_ROWS = 10;
const GRID_COUNT = GRID_COLS * GRID_ROWS;
const REVEAL_DURATION = 0.55;   // Per-block animation
const REVEAL_STAGGER = 0.048;   // Delay per distance unit from center
const REVEAL_SCALE_END = 0.35;  // Scale down to this before fade

// Stagger delays from center – center cells reveal first, edges last
function useGridRevealData(trigger: number) {
  return useMemo(() => {
    const centerX = (GRID_COLS - 1) / 2;
    const centerY = (GRID_ROWS - 1) / 2;
    return Array.from({ length: GRID_COUNT }, (_, i) => {
      const col = i % GRID_COLS;
      const row = Math.floor(i / GRID_COLS);
      const dx = col - centerX;
      const dy = row - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      return { delay: dist * REVEAL_STAGGER };
    });
  }, [trigger]);
}

// Grid reveal overlay – blocks scale down and fade out from center outward (disenopublico-style)
function GridRevealOverlay({ trigger }: { trigger: number }) {
  const data = useGridRevealData(trigger);
  return (
    <motion.div
      key={trigger}
      className="pointer-events-none absolute inset-0 z-[2] grid"
      style={{
        gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
        gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
      }}
      aria-hidden
    >
      {Array.from({ length: GRID_COUNT }, (_, i) => (
        <motion.div
          key={i}
          className="bg-[#FF3D22] origin-center"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: REVEAL_SCALE_END }}
          transition={{
            delay: data[i].delay,
            duration: REVEAL_DURATION,
            ease: [0.22, 0.61, 0.36, 1],
          }}
        />
      ))}
    </motion.div>
  );
}

// Hero scroll decorative pixels - Figma: Bottom Right (6 rects), Top Left (6 rects), both groups 16% opacity
// Per-frame positions so pixels gently slide and move relative to each other on transition
type PixelRect = { right?: number; bottom?: number; left?: number; top?: number; w: number; h: number; opacity: number };
// Bottom Right: Rect 143, 144, 145, 151, 152, 150 (Figma order)
const BOTTOM_RIGHT_PIXELS: PixelRect[][] = [
  [{ right: 480, bottom: 180, w: 60, h: 60, opacity: 0.65 }, { right: 420, bottom: 120, w: 60, h: 60, opacity: 0.25 }, { right: 360, bottom: 60, w: 60, h: 60, opacity: 1 }, { right: 40, bottom: 60, w: 120, h: 120, opacity: 0.25 }, { right: 20, bottom: 120, w: 60, h: 60, opacity: 1 }, { right: 160, bottom: 120, w: 180, h: 180, opacity: 0.65 }],
  [{ right: 460, bottom: 190, w: 65, h: 58, opacity: 0.65 }, { right: 435, bottom: 115, w: 58, h: 62, opacity: 0.25 }, { right: 345, bottom: 55, w: 62, h: 58, opacity: 1 }, { right: 50, bottom: 55, w: 115, h: 115, opacity: 0.25 }, { right: 30, bottom: 110, w: 58, h: 62, opacity: 1 }, { right: 155, bottom: 110, w: 175, h: 178, opacity: 0.65 }],
  [{ right: 495, bottom: 175, w: 58, h: 62, opacity: 0.65 }, { right: 405, bottom: 125, w: 62, h: 58, opacity: 0.25 }, { right: 370, bottom: 65, w: 58, h: 62, opacity: 1 }, { right: 45, bottom: 65, w: 125, h: 115, opacity: 0.25 }, { right: 10, bottom: 130, w: 62, h: 58, opacity: 1 }, { right: 165, bottom: 130, w: 178, h: 175, opacity: 0.65 }],
  [{ right: 470, bottom: 185, w: 62, h: 58, opacity: 0.65 }, { right: 430, bottom: 112, w: 58, h: 62, opacity: 0.25 }, { right: 355, bottom: 58, w: 62, h: 58, opacity: 1 }, { right: 55, bottom: 58, w: 118, h: 118, opacity: 0.25 }, { right: 25, bottom: 115, w: 58, h: 62, opacity: 1 }, { right: 158, bottom: 115, w: 182, h: 176, opacity: 0.65 }],
  [{ right: 485, bottom: 172, w: 58, h: 62, opacity: 0.65 }, { right: 412, bottom: 128, w: 62, h: 58, opacity: 0.25 }, { right: 365, bottom: 62, w: 58, h: 62, opacity: 1 }, { right: 48, bottom: 62, w: 122, h: 122, opacity: 0.25 }, { right: 15, bottom: 125, w: 62, h: 58, opacity: 1 }, { right: 162, bottom: 125, w: 176, h: 180, opacity: 0.65 }],
];
// Top Left: Rect 143, 144, 145, 151, 152, 150 (Figma order, rotated -90deg)
const TOP_LEFT_PIXELS: PixelRect[][] = [
  [{ left: 200, top: 60, w: 120, h: 120, opacity: 0.65 }, { left: 140, top: 120, w: 60, h: 60, opacity: 0.25 }, { left: 20, top: 180, w: 120, h: 120, opacity: 1 }, { left: 140, top: 240, w: 60, h: 60, opacity: 0.25 }, { left: 260, top: 0, w: 60, h: 60, opacity: 1 }, { left: 140, top: 60, w: 120, h: 120, opacity: 0.65 }],
  [{ left: 198, top: 65, w: 118, h: 122, opacity: 0.65 }, { left: 142, top: 118, w: 58, h: 62, opacity: 0.25 }, { left: 22, top: 176, w: 122, h: 118, opacity: 1 }, { left: 142, top: 238, w: 58, h: 62, opacity: 0.25 }, { left: 258, top: 4, w: 62, h: 58, opacity: 1 }, { left: 138, top: 64, w: 120, h: 120, opacity: 0.65 }],
  [{ left: 202, top: 56, w: 122, h: 118, opacity: 0.65 }, { left: 138, top: 124, w: 62, h: 58, opacity: 0.25 }, { left: 18, top: 184, w: 118, h: 122, opacity: 1 }, { left: 138, top: 242, w: 62, h: 58, opacity: 0.25 }, { left: 262, top: -2, w: 58, h: 62, opacity: 1 }, { left: 142, top: 58, w: 118, h: 122, opacity: 0.65 }],
  [{ left: 199, top: 62, w: 120, h: 120, opacity: 0.65 }, { left: 141, top: 120, w: 60, h: 60, opacity: 0.25 }, { left: 21, top: 178, w: 120, h: 120, opacity: 1 }, { left: 141, top: 239, w: 60, h: 60, opacity: 0.25 }, { left: 259, top: 2, w: 60, h: 60, opacity: 1 }, { left: 141, top: 61, w: 120, h: 120, opacity: 0.65 }],
  [{ left: 201, top: 58, w: 121, h: 119, opacity: 0.65 }, { left: 139, top: 122, w: 61, h: 59, opacity: 0.25 }, { left: 19, top: 182, w: 119, h: 121, opacity: 1 }, { left: 139, top: 241, w: 61, h: 59, opacity: 0.25 }, { left: 261, top: 0, w: 61, h: 59, opacity: 1 }, { left: 139, top: 59, w: 121, h: 121, opacity: 0.65 }],
];

function AnimatedPixels({ frameIndex }: { frameIndex: number }) {
  const br = BOTTOM_RIGHT_PIXELS[frameIndex];
  const tl = TOP_LEFT_PIXELS[frameIndex];
  const t = { duration: TRANSITION_DURATION_MS / 1000, ease: [0.4, 0, 0.2, 1] as const };

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] hidden md:block" aria-hidden>
      {/* Bottom Right - Figma: group opacity 16% */}
      <div className="absolute bottom-0 right-0 opacity-[0.16]">
        {br.map((rect, i) => (
        <motion.div
          key={`br-${i}`}
          initial={false}
          animate={{
            right: rect.right ?? 0,
            bottom: rect.bottom ?? 0,
            width: rect.w,
            height: rect.h,
            opacity: rect.opacity,
          }}
          transition={t}
          className="absolute bg-white"
          style={{ right: rect.right ?? 0, bottom: rect.bottom ?? 0 }}
        />
      ))}
      </div>
      {/* Top Left - rotated -90deg, Figma: group opacity 16% */}
      <div className="absolute left-0 top-0 -rotate-90 origin-top-left opacity-[0.16]" style={{ width: 540, height: 300 }}>
        {tl.map((rect, i) => (
          <motion.div
            key={`tl-${i}`}
            initial={false}
            animate={{
              left: rect.left ?? 0,
              top: rect.top ?? 0,
              width: rect.w,
              height: rect.h,
              opacity: rect.opacity,
            }}
            transition={t}
            className="absolute bg-white"
            style={{ left: rect.left ?? 0, top: rect.top ?? 0 }}
          />
        ))}
      </div>
    </div>
  );
}

const navLinks = [
  { href: "#consumer-insights", label: "India Scape" },
  { href: "#what-we-are", label: "What we are" },
  { href: "#careers", label: "Join the team" },
  { href: "#contact", label: "Contact" },
];

export default function Hero() {
  const [heroImageError, setHeroImageError] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Cycle through 5 background images every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % HERO_BG_COUNT);
    }, TRANSITION_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[900px] w-full overflow-hidden">
      {/* Hero scroll (Figma): entire background layer - cycling images, multiply overlay, decorative pixels. Content sits above. */}
      <div className="absolute inset-0 z-0" aria-hidden>
        {/* Cycling variants + multiply overlay */}
        <div className="absolute inset-0 bg-[#FF3D22]">
          {!heroImageError && (
            <>
              <AnimatePresence mode="sync" initial={false}>
                <motion.div
                  key={currentBgIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: TRANSITION_DURATION_MS / 1000, ease: [0.22, 0.61, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={`/images/hero-bg-${currentBgIndex + 1}.jpg`}
                    alt=""
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                    unoptimized
                    onError={() => setHeroImageError(true)}
                  />
                </motion.div>
              </AnimatePresence>
              <GridRevealOverlay trigger={currentBgIndex} />
              <div
                className="absolute inset-0 mix-blend-multiply"
                style={{ backgroundColor: "#FF3D22" }}
              />
            </>
          )}
        </div>
        {/* Decorative pixels - Bottom Right & Top Left, animate between positions per frame */}
        <AnimatedPixels frameIndex={currentBgIndex} />
      </div>

      {/* Content container - Figma: 1320px max, 60px padding; mobile: 30px padding */}
      <div className="relative z-10 mx-auto flex min-h-[900px] w-full max-w-[1320px] flex-col px-6 md:px-[60px]">
        {/* Header: Icon (left) + CONFLUXE (center) + Primary Navigation (right) - Figma: y=59; mobile: y=30 */}
        <header className="relative flex min-h-[90px] w-full items-start justify-between pt-[30px] md:min-h-[231px] md:pt-[59px]">
          {/* Mobile: 3-column flex - logo | CONFLUXE | burger - all aligned on same line */}
          <div className="flex w-full items-start justify-between md:contents">
            {/* Left: Logo */}
            <Link
              href="/"
              className="relative z-10 flex shrink-0 items-start justify-center md:justify-start"
              aria-label="Confluxe home"
            >
              <Image
                src="/images/confluxe-icon.png"
                alt=""
                width={24}
                height={29}
                className="block h-[24px] w-6 object-contain md:h-[29px]"
                unoptimized
              />
            </Link>
            {/* Center: CONFLUXE - in flex flow for proper alignment with logo & burger */}
            <Link
              href="/"
              className="relative z-10 flex shrink-0 items-start justify-center text-[18px] font-medium leading-none tracking-[-0.18px] text-[#FCF9F3] md:hidden"
              style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif" }}
            >
              CONFLUXE
            </Link>
            {/* Right: Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative z-10 flex shrink-0 items-start justify-center p-2 md:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="h-6 w-6 text-[#FCF9F3]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Desktop: CONFLUXE centered */}
          <Link
            href="/"
            className="absolute left-1/2 top-[30px] hidden -translate-x-1/2 text-[24px] font-medium tracking-[-0.24px] text-[#FCF9F3] md:block md:top-[59px]"
            style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif" }}
          >
            CONFLUXE
          </Link>
          {/* Desktop nav */}
          <nav
            className="hidden flex-col items-end gap-[30px] md:flex"
            style={{ width: 117 }}
          >
            <Link
              href="#"
              className="text-[18px] font-medium tracking-[-0.18px] text-[#FCF9F3]"
              style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif" }}
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[18px] font-medium tracking-[-0.18px] text-[#FCF9F3]/40 transition-colors hover:text-[#FCF9F3]/70"
                style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </header>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-[#FCF9F3]/10 md:hidden"
            >
              <nav className="flex flex-col gap-4 py-4">
                <Link
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[16px] font-medium text-[#FCF9F3]"
                  style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif" }}
                >
                  Home
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[16px] font-medium text-[#FCF9F3]/80"
                    style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main content - Figma: Scale Meets Soul stacked on mobile; single line on desktop */}
        <div className="flex flex-1 flex-col justify-center pb-16 md:pb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-normal"
            style={{
              color: "var(--muslin, #FCFDF3)",
              fontFamily: "var(--font-sf-pro), system-ui, sans-serif",
              fontSize: "4rem",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "97%",
              letterSpacing: "-0.04rem",
            }}
          >
            <span className="block md:inline">Scale</span>
            <span className="block md:inline"> Meets</span>
            <span className="block md:inline"> Soul.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-[116px] max-w-full text-[22px] font-normal leading-[1.5] tracking-[-0.2px] text-[#FCF9F3] md:max-w-[563px] md:text-[18px] md:leading-[1.36] md:tracking-[-0.22px] lg:text-[22px]"
            style={{ fontFamily: "var(--font-noticia), Georgia, serif" }}
          >
            A tech-led retail omnichannel partner for global fashion & lifestyle
            brands in India
          </motion.p>
        </div>
      </div>
    </section>
  );
}
