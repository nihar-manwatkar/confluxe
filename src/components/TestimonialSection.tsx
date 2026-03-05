"use client";

import { motion } from "framer-motion";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  layout?: "quote-left" | "quote-right";
}

export default function TestimonialSection({
  quote,
  name,
  role,
  layout = "quote-left",
}: TestimonialProps) {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-12 bg-cream">
      <div className="max-w-[1200px] mx-auto">
        <div
          className={`flex flex-col ${
            layout === "quote-right" ? "lg:flex-row-reverse" : "lg:flex-row"
          } gap-12 items-center`}
        >
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-xl sm:text-2xl text-dark/90 leading-relaxed italic"
          >
            &ldquo;{quote}&rdquo;
          </motion.blockquote>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center shrink-0"
          >
            <div className="w-24 h-24 rounded-full bg-dark/10 flex items-center justify-center">
              <span className="text-3xl font-bold text-dark/50">{name.charAt(0)}</span>
            </div>
            <p className="mt-4 font-semibold text-dark">{name}</p>
            <p className="text-sm text-dark/60">{role}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
