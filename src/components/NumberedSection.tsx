"use client";

import { motion } from "framer-motion";

const points = [
  { num: "01", title: "Empowering businesses", desc: "With scalable retail infrastructure" },
  { num: "02", title: "Building a future", desc: "Where technology meets human experience" },
  { num: "03", title: "Creating seamless", desc: "Omnichannel experiences at scale" },
  { num: "04", title: "Driving growth", desc: "Through data-driven innovation" },
];

export default function NumberedSection() {
  return (
    <section className="relative py-20 lg:py-28 px-6 lg:px-12 bg-dark overflow-hidden">
      {/* Pixel pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-2 h-2 rounded-full bg-accent mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            A new era of exponential global growth
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {points.map((point, i) => (
            <motion.div
              key={point.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-white/80 mb-4">{point.num}</p>
              <p className="text-lg font-semibold text-white mb-2">{point.title}</p>
              <p className="text-white/70 text-sm">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
