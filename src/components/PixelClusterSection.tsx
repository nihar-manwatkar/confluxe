"use client";

// Pixel Cluster – standalone section between Testimonial (Section 8) and Join the Team (Section 10)

const PIXEL_CLUSTER_RECTS = [
  { left: 0, bottom: 240, w: 60, h: 60, opacity: 0.1 },
  { left: 60, bottom: 120, w: 120, h: 120, opacity: 0.2 },
  { left: 180, bottom: 0, w: 120, h: 120, opacity: 0.4 },
  { left: 300, bottom: 120, w: 60, h: 60, opacity: 0.2 },
  { left: 360, bottom: 180, w: 60, h: 60, opacity: 0.1 },
];

export default function PixelClusterSection() {
  return (
    <section
      className="relative flex w-[209px] h-[110px] min-h-[146px] px-0 py-0 bg-[var(--cream)] overflow-visible md:min-h-[300px] justify-center items-start"
    >
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 z-0 w-[420px] h-[300px] origin-bottom scale-[0.486] md:left-0 md:translate-x-0 md:scale-100"
        aria-hidden
      >
        {PIXEL_CLUSTER_RECTS.map((rect, i) => (
          <div
            key={`pc-${i}`}
            className="absolute"
            style={{
              left: rect.left,
              bottom: rect.bottom,
              width: rect.w,
              height: rect.h,
              opacity: rect.opacity,
              backgroundColor: "var(--terracotta)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
