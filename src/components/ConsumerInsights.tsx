"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

// Design: Muslin #FCF9F3, Black Ink #1C1C1C, Confluxe Red #FF3D22, Indian Earth #36302B

// Incremental counter: animates from 0 to target when in view (quick)
function useCountUp(end: number, suffix: string, durationMs = 1200, inView: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - t, 2.5); // ease-out
      setValue(Math.round(eased * end));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, durationMs, inView]);
  return `${value}${suffix}`;
}

function AnimatedMetric({
  end,
  prefix = "",
  suffix,
  inView,
}: {
  end: number;
  prefix?: string;
  suffix: string;
  inView: boolean;
}) {
  const display = useCountUp(end, suffix, 1200, inView);
  return (
    <span className="tabular-nums">
      {prefix}
      {display}
    </span>
  );
}

const blocks = [
  {
    id: "1",
    title: "Fashion & lifestyle market in India",
    metricValue: 130,
    metricSuffix: "Bn+",
    metricPrefix: "$",
    metricSub: "in 2025",
    statementLeft: "8-10% CAGR through 2030",
    statementRight:
      "Consumers are trading up as aspiration rises faster than supply quality",
    bgColor: "bg-[#FF3D22]",
    textColor: "text-[#FCF9F3]",
    width: 420,
    height: 420,
    x: 240,
    y: 206,
  },
  {
    id: "2",
    title: "Fashion discovery is digital first",
    metricValue: 80,
    metricSuffix: "% +",
    metricDescriptor: "influenced by digital touchpoints.",
    description:
      "Online discovery now shapes purchase intent, even when the transaction is offline.",
    bgColor: "bg-[#36302B]",
    textColor: "text-[#FCF9F3]",
    width: 360,
    height: 360,
    x: 660,
    y: 626,
  },
  {
    id: "3",
    title: "Online shoppers by 2030",
    metricValue: 420,
    metricSuffix: "M+",
    statement:
      "Demand is expanding beyond metros into distinct city clusters and new formats including social and quick commerce.",
    bgColor: "bg-[#36302B]",
    textColor: "text-[#FCF9F3]",
    width: 360,
    height: 360,
    x: 1020,
    y: 206,
  },
];

export default function ConsumerInsights() {
  const sectionRef = useRef<HTMLElement>(null);
  const blocksRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(blocksRef, { amount: 0.15, once: true });

  return (
    <section
      id="consumer-insights"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#FCF9F3] px-6 pb-16 pt-12 md:px-[60px] md:pb-24 md:pt-20"
    >
      {/* World map background - bottom-left corner per design (Figma: 1011×570, ~45% opacity); scaled on mobile */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 z-0 h-[335px] w-[594px] opacity-[0.45] md:h-[570px] md:w-[1011px]"
        aria-hidden
      >
        <Image
          src="/images/consumer-insights-map.jpg"
          alt=""
          fill
          className="object-contain object-left-bottom"
          sizes="(max-width: 768px) 594px, 1011px"
          unoptimized
          priority={false}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-[120px]">
          <div className="flex items-center gap-[19px]">
            <div className="h-[10px] w-[10px] shrink-0 bg-[#FF3D22] md:h-[16px] md:w-[16px]" aria-hidden />
            <h2
              className="text-[17px] font-medium leading-[1.2] tracking-[-0.17px] text-[#1C1C1C] md:text-[28px] md:tracking-[-0.28px]"
              style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif" }}
            >
              Consumer Insights
            </h2>
          </div>
          <p
            className="max-w-full text-[22px] font-normal leading-[1.3] tracking-[-0.22px] text-[#1C1C1C] md:max-w-[594px] md:text-[36px] md:leading-[1.19] md:tracking-[-0.36px]"
            style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif" }}
          >
            The structural forces shaping India&apos;s fashion and lifestyle market.
          </p>
        </div>

        {/* Mobile: stacked blocks; Desktop: absolute positioned cards */}
        <div ref={blocksRef} className="relative pt-10 md:min-h-[1000px] md:pt-[140px]">
          {/* Mobile layout - vertical stack */}
          <div className="flex flex-col gap-5 md:hidden">
            {blocks.map((block, i) => (
              <motion.div
                key={block.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={`flex flex-col ${block.bgColor} ${block.textColor} aspect-square w-full rounded-none px-5 pt-4 pb-5`}
              >
                {/* Figma block "1": Top (x=20,y=16) + Metric (y=96) + Line (y=189) + Bottom (y=216) */}
                <div className="flex flex-1 flex-col">
                  {/* Top: title - Figma 423:735 */}
                  <p
                    className="text-[16px] font-medium leading-[1.36] tracking-[-0.16px] text-[#FCF9F3]"
                    style={{ fontFamily: "var(--font-noticia), Georgia, serif" }}
                  >
                    {block.title}
                  </p>
                  {/* Metric: Figma 423:736 - $130Bn+ left, "in 2025" right (x=209), bottom-aligned */}
                  <div className="mt-12 flex items-end justify-between">
                    <span className="text-[48px] font-medium leading-[1.19] tracking-[-0.48px] text-[#FCF9F3]" style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif" }}>
                      <AnimatedMetric
                        end={block.metricValue}
                        prefix={"metricPrefix" in block ? block.metricPrefix : ""}
                        suffix={block.metricSuffix}
                        inView={isInView}
                      />
                    </span>
                    {"metricSub" in block && block.metricSub && (
                      <span className="text-[14px] font-normal tracking-[-0.14px] text-[#FCF9F3] shrink-0 pb-1" style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif" }}>
                        {block.metricSub}
                      </span>
                    )}
                    {"metricDescriptor" in block && block.metricDescriptor && (
                      <span className="text-[14px] font-normal tracking-[-0.14px] text-[#FCF9F3] shrink-0 pb-1" style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif" }}>
                        {block.metricDescriptor}
                      </span>
                    )}
                  </div>
                  {/* Line Separator + Bottom: Figma 423:739, 423:740 - bottom-aligned */}
                  <div className="mt-auto pt-7 flex flex-col">
                    <div className="border-t border-[#FCF9F3]/25" />
                    <div className="pt-7 flex flex-row items-end justify-between gap-4">
                    {"statementLeft" in block && "statementRight" in block && (
                      <>
                        <p
                          className="text-[14px] font-normal leading-[1.35] text-[#FCF9F3] max-w-[45%] shrink-0"
                          style={{ fontFamily: "var(--font-noticia), Georgia, serif" }}
                        >
                          {block.statementLeft}
                        </p>
                        <p
                          className="text-[14px] font-normal leading-[1.35] text-[#FCF9F3] text-right flex-1 min-w-0"
                          style={{ fontFamily: "var(--font-noticia), Georgia, serif" }}
                        >
                          {block.statementRight}
                        </p>
                      </>
                    )}
                    {"statement" in block && block.statement && (
                      <p
                        className="text-[14px] font-normal leading-[1.35] text-[#FCF9F3]"
                        style={{ fontFamily: "var(--font-noticia), Georgia, serif" }}
                      >
                        {block.statement}
                      </p>
                    )}
                    {"description" in block && block.description && (
                      <p
                        className="text-[14px] font-normal leading-[1.35] text-[#FCF9F3]"
                        style={{ fontFamily: "var(--font-noticia), Georgia, serif" }}
                      >
                        {block.description}
                      </p>
                    )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            {/* World Map - Figma 423:758, 594×335 - visible after blocks on mobile; centered on pink region */}
            <div className="relative mt-8 w-full overflow-visible md:hidden">
              <div className="relative -ml-8 aspect-[594/335] w-[calc(100%+4rem)]">
                <Image
                  src="/images/consumer-insights-map.jpg"
                  alt=""
                  fill
                  className="object-contain opacity-[0.45]"
                  style={{ objectPosition: "42% 50%" }}
                  sizes="(max-width: 768px) 120vw, 0"
                  unoptimized
                  priority={false}
                />
                {/* Radial highlight on center pink region */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: "radial-gradient(ellipse 45% 50% at 50% 50%, rgba(255,200,180,0.25) 0%, transparent 70%)",
                  }}
                  aria-hidden
                />
              </div>
            </div>
          </div>

          {/* Desktop layout - absolute positioned */}
          {blocks.map((block, i) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`absolute hidden flex-col md:flex ${block.bgColor} ${block.textColor}`}
              style={{
                left: block.x - 60,
                top: block.y,
                width: block.width,
                height: block.height,
              }}
            >
              <div className="flex flex-1 flex-col justify-between p-8">
                <div>
                  <p
                    className="text-[22px] font-normal leading-[1.36] tracking-[-0.22px] text-[#FCF9F3]"
                    style={{ fontFamily: "var(--font-noticia), Georgia, serif" }}
                  >
                    {block.title}
                  </p>
                  <div className="mt-5 flex flex-wrap items-baseline gap-3">
                    <span className="text-[64px] font-medium leading-[1.19] tracking-[-0.64px]" style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif" }}>
                      <AnimatedMetric
                        end={block.metricValue}
                        prefix={"metricPrefix" in block ? block.metricPrefix : ""}
                        suffix={block.metricSuffix}
                        inView={isInView}
                      />
                    </span>
                    {"metricSub" in block && block.metricSub && (
                      <span className="text-[18px] font-medium tracking-[-0.18px] text-[#FCF9F3]/90" style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif" }}>
                        {block.metricSub}
                      </span>
                    )}
                    {"metricDescriptor" in block && block.metricDescriptor && (
                      <span className="text-[18px] font-medium tracking-[-0.18px] text-[#FCF9F3]/90" style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif" }}>
                        {block.metricDescriptor}
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-8 border-t border-[#FCF9F3]/25 pt-6">
                  {"statementLeft" in block && "statementRight" in block && (
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <p
                        className="max-w-[45%] text-[14px] font-normal leading-[1.35] text-[#FCF9F3]/90"
                        style={{ fontFamily: "var(--font-noticia), Georgia, serif" }}
                      >
                        {block.statementLeft}
                      </p>
                      <p
                        className="max-w-[50%] text-right text-[14px] font-normal leading-[1.35] text-[#FCF9F3]/90"
                        style={{ fontFamily: "var(--font-noticia), Georgia, serif" }}
                      >
                        {block.statementRight}
                      </p>
                    </div>
                  )}
                  {"statement" in block && block.statement && (
                    <p
                      className="text-[14px] font-normal leading-[1.35] text-[#FCF9F3]/90"
                      style={{ fontFamily: "var(--font-noticia), Georgia, serif" }}
                    >
                      {block.statement}
                    </p>
                  )}
                  {"description" in block && block.description && (
                    <p
                      className="mt-1 text-[14px] font-normal leading-[1.35] text-[#FCF9F3]/90"
                      style={{ fontFamily: "var(--font-noticia), Georgia, serif" }}
                    >
                      {block.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
