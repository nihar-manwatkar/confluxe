"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Section 6 – Category Block (367:546) – exact Figma layout from Launch Site
// Irregular grid: Row1 [Fashion|Bags], Row2 [Kids|Athleisure], Row3 [Home Decor|Footwear]
// Images include text and red block overlay baked in. Optional imageMobile for mobile-only crop.

const MOBILE_BREAKPOINT_PX = 768;

const categoryBlocks: Array<{
  id: string;
  label: string;
  image: string;
  imageMobile?: string;
  gridArea: string;
}> = [
  { id: "fashion", label: "Fashion", image: "/images/categories/fashion.jpg", gridArea: "fashion" },
  {
    id: "bags",
    label: "Bags, Accessories & Travel",
    image: "/images/categories/bags-accessories-travel.jpg",
    imageMobile: "/images/categories/bags-accessories-travel-mobile.jpg",
    gridArea: "bags",
  },
  { id: "kids", label: "Kids Fashion", image: "/images/categories/kids-fashion.jpg", gridArea: "kids" },
  { id: "athleisure", label: "Athleisure", image: "/images/categories/athleisure.jpg", gridArea: "athleisure" },
  {
    id: "home-decor",
    label: "Home Decor",
    image: "/images/categories/home-decor.jpg",
    imageMobile: "/images/categories/home-decor-mobile.jpg",
    gridArea: "home",
  },
  { id: "footwear", label: "Footwear", image: "/images/categories/footwear.jpg", gridArea: "footwear" },
];

function useIsMobile(breakpointPx: number = MOBILE_BREAKPOINT_PX) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpointPx}px)`);
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [breakpointPx]);
  return isMobile;
}

function CategoryCard({ block, index, isMobile }: { block: (typeof categoryBlocks)[0]; index: number; isMobile: boolean }) {
  const [mobileFailed, setMobileFailed] = useState(false);
  const useMobile = isMobile && block.imageMobile && !mobileFailed;
  const src = useMobile ? block.imageMobile! : block.image;
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="relative w-full aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-0 md:h-full"
      style={{ gridArea: block.gridArea }}
    >
      <div className="absolute inset-0 bg-[#2a2a2a]" aria-hidden />
      <Image
        src={src}
        alt={block.label}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
        unoptimized
        onError={(e) => {
          if (useMobile) setMobileFailed(true);
          else e.currentTarget.style.display = "none";
        }}
      />
    </motion.article>
  );
}

export default function Categories() {
  const isMobile = useIsMobile();
  return (
    <section
      id="categories"
      className="py-16 px-6 md:py-24 md:px-[60px]"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="mx-auto max-w-[1320px]">
        {/* Mobile: stacked full-width; Desktop: Figma grid */}
        <div
          className="flex flex-col gap-3 md:grid md:gap-[10px]"
          style={{
            gridTemplateColumns: "533fr 447fr 450fr",
            gridTemplateRows: "minmax(200px, 328px) minmax(180px, 315px) minmax(200px, 347px)",
            gridTemplateAreas: `
              "fashion bags bags"
              "fashion kids athleisure"
              "home home footwear"
            `,
          }}
        >
          {categoryBlocks.map((block, i) => (
            <CategoryCard key={block.id} block={block} index={i} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </section>
  );
}
