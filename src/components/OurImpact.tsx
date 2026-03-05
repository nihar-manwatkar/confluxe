"use client";

import { motion } from "framer-motion";

export default function OurImpact() {
  return (
    <section id="about" className="relative py-20 lg:py-28 px-6 lg:px-[60px] bg-[#FCF9F3] overflow-hidden">
      {/* World map background */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200' fill='none' stroke='%231C1C1C' stroke-width='0.5'%3E%3Cpath d='M50 100 Q 150 50 250 100 T 400 100'/%3E%3Cpath d='M50 50 Q 200 100 350 50'/%3E%3Cpath d='M100 0 V 200'/%3E%3Cpath d='M200 0 V 200'/%3E%3Cpath d='M300 0 V 200'/%3E%3C/svg%3E")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
        }}
      />

      <div className="relative max-w-[1320px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-sm font-semibold text-[#FF3D22] tracking-wider mb-2">OUR IMPACT</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1C]">
            Driving growth, worldwide.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-[#FF3D22] text-white p-8 lg:p-10 rounded-lg">
            <p className="text-xs font-semibold tracking-wider opacity-90 mb-2">TOTAL BRAND VALUE</p>
            <p className="text-4xl sm:text-5xl lg:text-6xl font-bold">$100Bn+</p>
            <p className="mt-2 text-white/90 text-sm">across industries</p>
          </div>
          <div className="bg-[#5C2C26] text-white p-8 lg:p-10 rounded-lg">
            <p className="text-xs font-semibold tracking-wider opacity-90 mb-2">TOTAL REACH</p>
            <p className="text-4xl sm:text-5xl lg:text-6xl font-bold">420M+</p>
            <p className="mt-2 text-white/90 text-sm">in customer base</p>
          </div>
          <div className="bg-[#5C2C26] text-white p-8 lg:p-10 rounded-lg md:col-span-1">
            <p className="text-xs font-semibold tracking-wider opacity-90 mb-2">Avg. Increase in Sales</p>
            <p className="text-4xl sm:text-5xl lg:text-6xl font-bold">80%+</p>
            <p className="mt-2 text-white/90 text-sm">Year-on-Year</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
