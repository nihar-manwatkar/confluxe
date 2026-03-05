"use client";

import { motion } from "framer-motion";

export default function JoinTheTeam() {
  return (
    <section
      id="careers"
      className="relative py-16 sm:py-24 lg:py-32 px-6 lg:px-[60px] overflow-hidden bg-[#1C1C1C]/5"
    >
      <div className="max-w-[1320px] mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-[#1C1C1C] mb-6"
        >
          Join the Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg sm:text-xl lg:text-2xl text-[#1C1C1C]/70 max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          We are building a digital omnichannel bridge to India. If you are
          ready to weave technology with soul, you belong with us.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-base sm:text-lg text-[#1C1C1C]/60 max-w-xl mx-auto mb-10"
        >
          Joining Confluxe in the first years is a commitment to being a
          Co-Builder, not an employee.
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#1C1C1C] text-[#FCF9F3] font-medium rounded-full hover:bg-[#1C1C1C]/90 transition-colors"
        >
          Explore Careers With Confluxe
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}
