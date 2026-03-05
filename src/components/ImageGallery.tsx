"use client";

import { motion } from "framer-motion";

const gridClasses = [
  "col-span-2 row-span-2",
  "col-span-1",
  "col-span-1",
  "col-span-1",
  "col-span-1",
  "col-span-1",
];

export default function ImageGallery() {
  return (
    <section className="py-16 lg:py-24 px-6 lg:px-[60px] bg-[#FCF9F3]">
      <div className="max-w-[1320px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[160px]"
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-lg overflow-hidden bg-[#1C1C1C]/10 ${gridClasses[i - 1]}`}
              style={{ minHeight: i === 1 ? 320 : 160 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-[#1C1C1C]/15 to-[#1C1C1C]/5 flex items-center justify-center">
                <span className="text-[#1C1C1C]/20 text-2xl font-light">{i}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
