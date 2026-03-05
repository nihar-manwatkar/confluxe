"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section
      id="careers"
      className="relative py-20 lg:py-28 px-6 lg:px-12 bg-dark-brown overflow-hidden"
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-2 h-2 rounded-full bg-accent mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white max-w-4xl mx-auto leading-tight mb-6">
            Joining Confluxe in the first years is a commitment to being a Co-Builder, not an employee.
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            We are seeking passionate individuals ready to shape the future of retail.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded hover:bg-accent/90 transition-colors"
          >
            Explore Open Roles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
