"use client";

import { motion } from "framer-motion";

// Figma MCP – Section 3 "3 - What we are" (node 367:594)
// Design tokens: Black Ink #1C1C1C, Confluxe Red #FF3D22, Muslin #FCFDF3, Digital Mist #9FC9CB

// Corner pixel clusters – Figma Pixel Cluster (367:618)
const TOP_RIGHT_PIXELS = [
  { right: 142, top: 125, w: 31, h: 31, opacity: 0.2 },
  { right: 111, top: 96, w: 31, h: 31, opacity: 0.2 },
  { right: 53, top: 127, w: 58, h: 58, opacity: 0.32 },
  { right: 53, top: 0, w: 73, h: 73, opacity: 0.1 },
  { right: 173, top: 156, w: 73, h: 73, opacity: 0.1 },
  { right: 0, top: 74, w: 53, h: 53, opacity: 0.2 },
];
// Top-left: mirrored from top-right (left = right value for symmetry)
const TOP_LEFT_PIXELS = TOP_RIGHT_PIXELS.map(({ right, top, w, h, opacity }) => ({
  left: right,
  top,
  w,
  h,
  opacity,
}));

// Figma Talking Points – Frame 21–24: itemSpacing 106, column widths per auto layout
const items = [
  { num: "01", title: "Licensed operating control.", maxWidth: 202 },
  { num: "02", title: "Disciplined execution under brand stewardship.", maxWidth: 291 },
  { num: "03", title: "Technology and data embedded in daily operations.", maxWidth: 251 }, // 251px forces 3-line wrap
  { num: "04", title: "Growth designed for longevity, not speed alone.", maxWidth: 268 },
];

export default function WhatWeAre() {
  return (
    <section
      id="what-we-are"
      className="relative py-16 px-6 overflow-hidden md:py-24 md:px-[60px]"
      style={{ backgroundColor: "var(--black-ink)" }}
    >
      {/* Corner pixel clusters - top left */}
      <div className="pointer-events-none absolute left-0 top-0 z-0 hidden md:block" aria-hidden>
        {TOP_LEFT_PIXELS.map((rect, i) => (
          <div
            key={`tl-${i}`}
            className="absolute"
            style={{
              left: rect.left,
              top: rect.top,
              width: rect.w,
              height: rect.h,
              opacity: rect.opacity,
              backgroundColor: "var(--muslin)",
            }}
          />
        ))}
      </div>
      {/* Corner pixel clusters - top right */}
      <div className="pointer-events-none absolute right-0 top-0 z-0 hidden md:block" aria-hidden>
        {TOP_RIGHT_PIXELS.map((rect, i) => (
          <div
            key={`tr-${i}`}
            className="absolute"
            style={{
              right: rect.right,
              top: rect.top,
              width: rect.w,
              height: rect.h,
              opacity: rect.opacity,
              backgroundColor: "var(--muslin)",
            }}
          />
        ))}
      </div>
      <div className="relative z-10 max-w-[1320px] mx-auto">
        {/* Section title: red square above "What we are.", both centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-center text-center mb-12 md:mb-20"
        >
          <div className="flex flex-col items-center gap-[19px] mb-8 md:mb-[60px]">
            <div
              className="w-[10px] h-[10px] md:w-5 md:h-5 shrink-0"
              style={{ backgroundColor: "var(--confluxe-red)" }}
            />
            <h2
              className="text-[17px] font-medium tracking-[-0.17px] md:text-[28px] md:tracking-[-0.28px]"
              style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif", color: "var(--muslin)" }}
            >
              What we are
            </h2>
          </div>
          <p
            className="text-[22px] font-medium max-w-full leading-[1.3] tracking-[-0.22px] text-center md:text-[36px] md:max-w-[724px] md:leading-[1.19] md:tracking-[-0.36px]"
            style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif", color: "var(--muslin)" }}
          >
            We build the India chapter for global brands.
          </p>
        </motion.div>

        {/* Talking Points – Figma Group 80: mobile stacked with separators; desktop grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[5fr_6fr_6fr_5fr] lg:items-start">
          {items.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              className={`relative flex flex-col pl-0 lg:pl-[40px] pb-[40px] md:pb-0 ${i > 0 ? "border-t border-[var(--separator)] pt-[40px] md:border-t-0 lg:border-l lg:border-[var(--separator)] lg:pt-0" : "lg:pl-0"}`}
              style={{ gap: "clamp(1.5rem, 4vw, 106px)" }}
            >
              <p
                className="text-[54px] font-medium leading-[1.19] tracking-[-0.48px] shrink-0 md:text-[60px] md:tracking-[-0.6px] lg:text-[69px] lg:tracking-[-0.69px]"
                style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif", color: "var(--digital-mist)" }}
              >
                {item.num}
              </p>
              <p
                className="text-[20px] font-normal leading-[1.36] tracking-[-0.18px] max-w-full md:text-[22px] md:tracking-[-0.22px]"
                style={{
                  fontFamily: "var(--font-noticia), Georgia, serif",
                  color: "var(--muslin)",
                  maxWidth: "min(100%, 300px)",
                }}
              >
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
