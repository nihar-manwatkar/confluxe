"use client";

import { motion } from "framer-motion";

const services = [
  { num: "01", title: "Strategy & Consultation" },
  { num: "02", title: "Digital Transformation" },
  { num: "03", title: "Marketing & Growth" },
  { num: "04", title: "Technology & Innovation" },
];

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="py-20 lg:py-28 px-6 lg:px-[60px] bg-[#1C1C1C]"
    >
      <div className="max-w-[1320px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[#FF3D22] tracking-wider mb-2">WHAT WE DO</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Our comprehensive services.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {services.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-white/80 mb-4">{item.num}</p>
              <p className="text-lg text-white leading-relaxed">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
