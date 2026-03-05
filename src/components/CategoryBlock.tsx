"use client";

import { motion } from "framer-motion";

const categories = [
  "Fashion",
  "Footwear",
  "Athleisure",
  "Kids Fashion",
  "Home Decor",
  "Bags, Accessories & Travel",
];

export default function CategoryBlock() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-6 lg:px-[60px] bg-[#1C1C1C]/5">
      <div className="max-w-[1320px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1C1C1C] mb-12 lg:mb-16"
        >
          Categories We Serve
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category, i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group aspect-[4/3] rounded-lg overflow-hidden bg-[#1C1C1C]/10 hover:bg-[#1C1C1C]/15 transition-colors cursor-pointer flex items-center justify-center p-6"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-[#1C1C1C] group-hover:scale-105 transition-transform text-center">
                {category}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
