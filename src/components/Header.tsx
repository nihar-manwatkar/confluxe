"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#consumer-insights", label: "India Scape" },
  { href: "#what-we-are", label: "What we are" },
  { href: "#careers", label: "Join the team" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hero is min-h-[900px]; show sticky header after ~80% scroll
      setScrolledPastHero(window.scrollY > 720);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {scrolledPastHero && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed left-0 right-0 top-0 z-50 bg-[#1C1C1C]/95 backdrop-blur-sm"
        >
          <nav className="relative mx-auto flex h-20 max-w-[1320px] items-center justify-between px-6 md:px-[60px]">
            {/* Logo icon only - no CONFLUXE text in sticky nav */}
            <Link
              href="/"
              className="relative flex shrink-0 items-center"
              aria-label="Confluxe home"
            >
              <Image
                src="/images/confluxe-icon.png"
                alt=""
                width={24}
                height={29}
                className="h-[24px] w-6 object-contain md:h-[29px]"
                unoptimized
              />
            </Link>
            {/* Desktop nav - horizontal row; Home full opacity, others 40% */}
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[18px] font-medium tracking-[-0.18px] transition-colors hover:text-[#FCF9F3]/70 ${
                    link.label === "Home" ? "text-[#FCF9F3]" : "text-[#FCF9F3]/40"
                  }`}
                  style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="h-6 w-6 text-[#FCF9F3]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                )}
              </svg>
            </button>
          </nav>
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="border-t border-[#FCF9F3]/10 bg-[#1C1C1C] md:hidden"
              >
                <div className="flex flex-col gap-4 px-6 py-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2 text-[18px] font-medium text-[#FCF9F3]"
                      style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif" }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
