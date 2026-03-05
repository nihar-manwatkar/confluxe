"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PixelBullet from "./PixelBullet";

// Figma component 4- Our Capabilities (289:1640 / 367:593)
// Accordion: only first (Digital first) expanded by default; others collapsed
// Tokens: Black Ink #1C1C1C, Confluxe Red #FF3D22, cream bg #FCF9F3

const capabilities = [
  { title: "Digital first", desc: "D2C and marketplaces as the primary test-and-scale engine." },
  { title: "Integrated Omnichannel", desc: "Digital and physical retail operated as one coordinated system." },
  { title: "Brand & Community", desc: "Local relevance built in alignment with global brand positioning." },
  { title: "Operating System", desc: "A shared technology and analytics architecture across brands." },
  { title: "Operational Infrastructure", desc: "Planning, inventory, logistics and financial discipline at scale." },
  { title: "Make in India", desc: "A defined path from import to sourcing and manufacturing." },
];

export default function OurCapabilities() {
  const [expanded, setExpanded] = useState(0);

  return (
    <section
      id="capabilities"
      className="py-16 px-6 md:py-24 md:px-[60px]"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="flex flex-col items-end gap-12 md:gap-[8.625rem] w-full max-w-[82.5rem] mx-auto">
        {/* Section Header – mobile: stacked; desktop: horizontal */}
        <div className="flex flex-col gap-6 md:flex-row md:flex-nowrap md:items-center md:gap-[190px] md:min-h-[86px] w-full">
          <div className="flex items-center gap-[19px] shrink-0">
            <div
              className="w-[10px] h-[10px] md:w-5 md:h-5 shrink-0"
              style={{ backgroundColor: "var(--confluxe-red)" }}
            />
            <h2
              className="text-[17px] font-medium tracking-[-0.17px] md:text-[28px] md:tracking-[-0.28px]"
              style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif", color: "var(--black-ink)" }}
            >
              Our operating model
            </h2>
          </div>
          <p
            className="text-[20px] font-medium max-w-full leading-[1.3] tracking-[-0.2px] md:text-[36px] md:w-[580px] md:leading-[1.19] md:tracking-[-0.36px] shrink-0"
            style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif", color: "var(--black-ink)" }}
          >
            Technology is the operating layer across every brand and every channel.
          </p>
        </div>

        {/* Points – mobile: no left indent; desktop: pl-[142px] */}
        <div className="space-y-0 pl-0 md:pl-[142px] w-full">
          {capabilities.map((cap, i) => {
            const isExpanded = expanded === i;
            return (
              <div
                key={cap.title}
                className="pb-8 flex flex-col md:pb-[60px]"
              >
                <button
                  type="button"
                  onClick={() => setExpanded(expanded === i ? -1 : i)}
                  onMouseEnter={() => setExpanded(i)}
                  className="w-full text-left group cursor-pointer flex-1 flex flex-col"
                  aria-expanded={isExpanded}
                >
                  <div className="flex gap-4 md:gap-[52px] lg:gap-[36px] items-start flex-1">
                    <PixelBullet
                      variant={(i + 1) as 1 | 2 | 3 | 4 | 5 | 6}
                      isHovered={isExpanded}
                    />
                    <div className="flex flex-col min-w-0 flex-1">
                      <h3
                        className="text-[28px] font-medium leading-[1] tracking-[-0.28px] shrink-0 md:text-[48px] md:tracking-[-0.48px] lg:text-[64px] lg:tracking-[-0.64px]"
                        style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif", color: "var(--black-ink)" }}
                      >
                        {cap.title}
                      </h3>
                      <motion.div
                        initial={false}
                        animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p
                          className="pt-6 pointer-events-none text-[16px] leading-[1.36] tracking-[-0.16px] md:pt-[40px] md:text-[22px] md:tracking-[-0.22px]"
                          style={{ fontFamily: "var(--font-noticia), Georgia, serif", color: "var(--black-ink)" }}
                        >
                          {cap.desc}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </button>
                {i < capabilities.length - 1 && (
                  <div
                    className={`h-px w-full shrink-0 ${isExpanded ? "mt-8 md:mt-[80px]" : "mt-6 md:mt-[1.5rem]"}`}
                    style={{ backgroundColor: "var(--black-ink)" }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
