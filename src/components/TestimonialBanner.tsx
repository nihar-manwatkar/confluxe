"use client";

import { motion } from "framer-motion";

export default function TestimonialBanner() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-[60px] bg-[#FCF9F3]">
      <div className="max-w-[900px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-10 items-center"
        >
          <div className="w-24 h-24 rounded-full bg-[#1C1C1C]/10 flex items-center justify-center shrink-0">
            <span className="text-4xl font-bold text-[#1C1C1C]/50">J</span>
          </div>
          <div className="text-center md:text-left">
            <blockquote className="text-xl sm:text-2xl lg:text-3xl text-[#1C1C1C] leading-relaxed italic mb-6">
              &ldquo;Confluxe&apos;s expertise transformed our digital presence, leading to significant engagement and customer acquisition. Their team is a true partner in innovation.&rdquo;
            </blockquote>
            <p className="font-semibold text-[#1C1C1C]">John Doe</p>
            <p className="text-sm text-[#1C1C1C]/60">CEO, Company Name</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mt-8"
        >
          <div className="w-2 h-2 rounded-full bg-[#1C1C1C]/30" />
          <div className="w-2 h-2 rounded-full bg-[#1C1C1C]/20" />
          <div className="w-2 h-2 rounded-full bg-[#1C1C1C]/20" />
        </motion.div>
      </div>
    </section>
  );
}
