"use client";

import { motion } from "framer-motion";

const pillars = [
  "Digital first launch",
  "Integrated omnichannel",
  "Brand & demand",
  "Operational infrastructure",
  "Proprietary retail operating system",
  "Make in India pathway",
];

export default function CorePillars() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-12 bg-cream">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-accent" />
            <div className="w-2 h-2 rounded-full bg-accent" />
            <h2 className="text-2xl sm:text-3xl font-bold text-dark">Our Core Pillars</h2>
          </div>
          <p className="text-dark/70 max-w-2xl leading-relaxed">
            Our core philosophy revolves around creating a sustainable and scalable future for retail.
          </p>
        </motion.div>

        <ul className="space-y-4">
          {pillars.map((pillar, i) => (
            <motion.li
              key={pillar}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4"
            >
              <div className="w-2 h-2 bg-accent shrink-0" />
              <span className="text-lg text-dark">{pillar}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
