"use client";

import { motion } from "framer-motion";

const offerings = [
  "Digital-first launch",
  "Integrated omnichannel",
  "Grand A.I. demand",
  "Operational infrastructure",
  "Proprietary retail operating system",
  "Made in India pathway",
];

export default function OurOfferings() {
  return (
    <section
      id="our-work"
      className="py-20 lg:py-28 px-6 lg:px-[60px] bg-[#FCF9F3]"
    >
      <div className="max-w-[1320px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-sm font-semibold text-[#FF3D22] tracking-wider mb-2">OUR OFFERINGS</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1C1C] max-w-2xl">
            Core capabilities that drive measurable business outcomes.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <ul className="space-y-4">
              {offerings.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-2 h-2 bg-[#FF3D22] shrink-0 mt-2" />
                  <span className="text-lg text-[#1C1C1C]">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Testimonial blocks */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="w-16 h-16 rounded-full bg-[#1C1C1C]/10 flex items-center justify-center shrink-0">
                <span className="text-xl font-bold text-[#1C1C1C]/50">R</span>
              </div>
              <div>
                <p className="text-[#1C1C1C] leading-relaxed mb-4">
                  Confluxe helped us redefine our brand identity and achieve remarkable growth in a competitive market.
                </p>
                <p className="font-semibold text-[#1C1C1C]">Richard Smith</p>
                <p className="text-sm text-[#1C1C1C]/60">CEO, Company Name</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex gap-6"
            >
              <div className="w-16 h-16 rounded-full bg-[#1C1C1C]/10 flex items-center justify-center shrink-0">
                <span className="text-xl font-bold text-[#1C1C1C]/50">S</span>
              </div>
              <div>
                <p className="text-[#1C1C1C] leading-relaxed mb-4">
                  Their strategic insights and innovative solutions were instrumental in our digital transformation journey.
                </p>
                <p className="font-semibold text-[#1C1C1C]">Sarah Chen</p>
                <p className="text-sm text-[#1C1C1C]/60">Founder, TechCo</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
