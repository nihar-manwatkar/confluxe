"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

type TestimonialProps = {
  quote: string;
  name: string;
  role: string;
  imageSrc?: string;
  imagePosition?: "left" | "right";
  align?: "left" | "center" | "right";
  className?: string;
};

// Figma Section 5 – Testimonial Block (367:581): Quote left, Profile right
// Layout: Quote 612px | 125px gap | Profile 303×303 + name/role
// Background: 195×195 terracotta square, offset 124px right, 108px down from image top
// Section 8 – Testimonial Block: Profile left, Quote right (per design)

export default function Testimonial({
  quote,
  name,
  role,
  imageSrc = "/images/rajesh-profile.png",
  imagePosition = "right",
  align = "left",
  className = "",
}: TestimonialProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [imageError, setImageError] = useState(false);

  const isProfileRight = imagePosition === "right";

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`relative py-16 px-6 bg-[var(--cream)] overflow-visible md:py-24 md:px-[60px] ${className}`}
    >
      <div className="relative z-10 max-w-[1320px] mx-auto">
        {/* Figma: horizontal layout – Quote left, Profile right (Section 5); reversed for Section 8 */}
        <div
          className={`flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[125px] ${
            isProfileRight ? "" : "lg:flex-row-reverse"
          } ${align === "right" ? "items-end lg:items-start lg:justify-end" : align === "center" ? "lg:justify-center" : ""}`}
        >
          {/* Quote – 612px max, 24px between decorative commas and quote text */}
          <div className="flex flex-col gap-[24px] w-full max-w-[612px] shrink-0 lg:max-w-[612px]">
            {/* Decorative inverted commas – closer together, +30px size, 20% opacity terracotta */}
            <div className="flex gap-[32px] h-[72px] md:h-[102px] items-end" aria-hidden>
              <span
                className="text-[72px] md:text-[102px] font-serif leading-none inline-block"
                style={{ color: "var(--terracotta)", opacity: 0.2, fontFamily: "var(--font-noticia), Georgia, serif" }}
              >
                &ldquo;
              </span>
              <span
                className="text-[72px] md:text-[102px] font-serif leading-none inline-block"
                style={{ color: "var(--terracotta)", opacity: 0.2, fontFamily: "var(--font-noticia), Georgia, serif" }}
              >
                &rdquo;
              </span>
            </div>
            <blockquote
              className="text-[20px] font-medium leading-[1.4] tracking-[-0.2px] md:text-[42px] md:leading-[1.19] md:tracking-[-0.36px]"
              style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif", color: "var(--terracotta)" }}
            >
              {quote}
            </blockquote>
          </div>

          {/* Profile – Figma: 303×303 image, 195×195 background at bottom-right (offset 124px, 108px) */}
          <div
            className={`static shrink-0 w-full flex items-start lg:w-auto ${
              isProfileRight ? "justify-end" : "justify-start"
            }`}
          >
            <div className="relative">
              {/* Background Container – 195×195 behind bottom-right of image (Figma: offset 124px, 108px); mobile ~40% larger */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute z-0 left-[66px] top-[57px] w-[88px] h-[88px] md:left-[80px] md:top-[70px] md:w-[195px] md:h-[195px] lg:left-[124px] lg:top-[108px]"
                style={{
                  backgroundColor: "var(--terracotta)",
                  transformOrigin: "center center",
                }}
              />
              {/* Profile content – image + name/role, 41px gap (Figma itemSpacing); mobile ~40% larger */}
              <div className="relative z-10 flex flex-col w-[175px] md:w-[195px] lg:w-[303px]">
                <div className="relative w-[160px] h-[160px] overflow-hidden shrink-0 md:w-[195px] md:h-[195px] lg:w-[303px] lg:h-[303px]">
                  {!imageError ? (
                    <Image
                      src={imageSrc}
                      alt={name}
                      width={303}
                      height={303}
                      className="w-full h-full object-cover grayscale"
                      unoptimized
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center text-[var(--black-ink)] opacity-50 text-sm"
                      aria-hidden
                    >
                      Photo
                    </div>
                  )}
                </div>
                {/* Name & role – 41px from image, 7px between (Figma Frame 14) */}
                <div className="mt-[14px] flex flex-col gap-[7px] md:mt-[41px]">
                  <p
                    className="text-[19px] font-medium tracking-[-0.19px] leading-[23px] md:text-[36px] md:tracking-[-0.36px] md:leading-[43px]"
                    style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif", color: "var(--terracotta)" }}
                  >
                    {name}
                  </p>
                  <p
                    className="text-[14px] font-normal tracking-[-0.14px] md:text-[22px] md:tracking-[-0.22px]"
                    style={{ fontFamily: "var(--font-noticia), Georgia, serif", color: "var(--black-ink)" }}
                  >
                    {role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
