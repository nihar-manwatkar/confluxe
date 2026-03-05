"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Figma 7- Our Values: Section header, four values in one row, icons from PNG
// Save PNGs to: public/images/values/value-icon-1.png … value-icon-4.png

const VALUE_ICONS = [
  "/images/values/value-icon-1.png",
  "/images/values/value-icon-2.png",
  "/images/values/value-icon-3.png",
  "/images/values/value-icon-4.png",
];

const values = [
  { title: "We take responsibility", desc: "We operate the brands we build with a long term owner mindset." },
  { title: "We build with discipline", desc: "Clear priorities, aligned teams and consistent execution protect the brand as it scales." },
  { title: "Tech-first from day one", desc: "Data and systems guide demand, connect channels and ensure coherence at every touchpoint." },
  { title: "We think in decades", desc: "We design for durability because capability, trust and brand value compound over time." },
];

export default function OurValues() {
  return (
    <section className="relative py-16 px-6 bg-[var(--cream)] md:py-24 md:px-[60px]">
      {/* Subtle vertical lines – left and right edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{ backgroundColor: "var(--confluxe-red)", opacity: 0.15 }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-px"
        style={{ backgroundColor: "var(--confluxe-red)", opacity: 0.15 }}
      />
      <div className="max-w-[1320px] mx-auto relative">
        {/* Section Header – red square above title, left-aligned */}
        <div className="flex flex-col items-start gap-8 md:gap-[60px] mb-12 md:mb-[120px]">
          <div className="flex flex-row items-center gap-[19px]">
            <div
              className="w-[10px] h-[10px] md:w-5 md:h-5 shrink-0"
              style={{ backgroundColor: "var(--confluxe-red)" }}
            />
            <h2
              className="text-[17px] font-medium tracking-[-0.17px] md:text-[28px] md:tracking-[-0.28px]"
              style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif", color: "var(--black-ink)" }}
            >
              Our Values
            </h2>
          </div>
          <p
            className="text-[20px] font-medium text-left leading-[1.3] tracking-[-0.2px] max-w-full md:text-[36px] md:leading-[1.19] md:tracking-[-0.36px] md:max-w-[811px]"
            style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif", color: "var(--black-ink)" }}
          >
            We believe the strongest brands are built on technical precision, cultural depth, and long-term alignment. We
            do not chase scale for its own sake. We design it.
          </p>
        </div>

        {/* Values – mobile: 1 col; tablet: 2 col; desktop: 4 col */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-[62px] gap-y-[58px] md:gap-y-[38px]">
          {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <div className="flex justify-start mb-6 w-[120px] h-[120px] shrink-0 md:mb-[60px] md:w-[160px] md:h-[160px]">
                  <Image
                    src={VALUE_ICONS[i]}
                    alt=""
                    width={160}
                    height={160}
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>
                <h3
                  className="text-[20px] font-medium tracking-[-0.2px] text-[var(--black-ink)] mb-2 text-left md:text-[28px] md:tracking-[-0.28px] md:text-left"
                  style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-[16px] leading-[1.4] tracking-[-0.16px] text-[var(--black-ink)]/80 text-left md:text-[18px] md:leading-[24.56px] md:tracking-[-0.18px] md:text-left"
                  style={{ fontFamily: "var(--font-noticia), Georgia, serif" }}
                >
                  {value.desc}
                </p>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
