"use client";

import Link from "next/link";
import Image from "next/image";

// Figma 10 - Footer (367:334) – rebuilt from figma-export.json
// Background: 5:172 Indian Earth #361E1C
// Text: 5:169 Muslin #FCFDF3 | Labels: 5:174 Digital Mist #9FC9CB
// Links group: opacity 0.4 | Line Separator: opacity 0.1

export default function Footer() {
  return (
    <footer
      id="contact"
      className="px-6 pt-16 pb-12 md:px-[60px] md:pt-[150px] md:pb-20"
      style={{ backgroundColor: "#361E1C" }}
    >
      <div className="max-w-[1320px] mx-auto flex flex-col">
        {/* Body – Confluxe Symbol, Tagline, Email|Contact|Address (full opacity for readability) */}
        <div className="flex flex-col gap-10 md:gap-[60px] mb-10 md:mb-[60px]">
          {/* Confluxe Symbol + Tagline */}
          <div className="flex flex-col gap-6 md:gap-[57px]">
            <div className="w-[37px] h-[45px] md:w-[50px] md:h-[60px] shrink-0">
              <Image
                src="/images/confluxe-icon.png"
                alt="Confluxe"
                width={50}
                height={60}
                className="w-full h-full object-contain"
              />
            </div>
            <p
              className="text-[28px] font-medium leading-[1.4] tracking-[-0.22px] text-[var(--muslin)] max-w-full md:text-[36px] md:leading-[43px] md:tracking-[-0.36px] md:max-w-[852px]"
              style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif" }}
            >
              Let&apos;s build something amazing. Your Move. :)
            </p>
          </div>

          {/* Body – Email | Contact | Address */}
          <div className="flex flex-col gap-[34px] md:flex-row md:flex-wrap md:gap-[238px]">
            <div className="flex flex-col gap-1">
              <p className="text-[14px] font-medium text-[var(--digital-mist)] md:text-[18px]" style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif" }}>
                Email
              </p>
              <a
                href="mailto:curious@confluxe.in"
                className="text-[14px] text-[var(--muslin)] hover:opacity-90 underline transition-opacity md:text-[22px]"
                style={{ fontFamily: "var(--font-noticia), Georgia, serif" }}
              >
                curious@confluxe.in
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[14px] font-medium text-[var(--digital-mist)] md:text-[18px]" style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif" }}>
                Contact
              </p>
              <a
                href="tel:+916361526909"
                className="text-[19px] text-[var(--muslin)] hover:opacity-90 transition-opacity md:text-[22px]"
                style={{ fontFamily: "var(--font-noticia), Georgia, serif" }}
              >
                +91 6361526909
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[14px] font-medium text-[var(--digital-mist)] md:text-[18px]" style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif" }}>
                Address
              </p>
              <p className="text-[14px] text-[var(--muslin)] md:text-[22px]" style={{ fontFamily: "var(--font-noticia), Georgia, serif" }}>
                Bangalore Karnataka India 560093
              </p>
            </div>
          </div>
        </div>

        {/* Line Separator (y:10225) – opacity 0.1 */}
        <hr className="border-t border-[var(--muslin)] opacity-10 mb-[43px]" />

        {/* Links row – mobile: stacked; desktop: horizontal */}
        <div
          className="flex flex-col gap-6 md:flex-row md:flex-wrap md:items-center md:gap-[206px]"
          aria-label="Footer navigation"
        >
          <Link
            href="/"
            className="shrink-0 hover:opacity-90 transition-opacity"
            aria-label="Confluxe home"
          >
            <Image
              src="/images/confluxe-logo.svg"
              alt="Confluxe"
              width={144}
              height={22}
              className="h-[17px] w-auto object-contain md:h-[21px]"
              unoptimized
            />
          </Link>
          <nav className="flex flex-row flex-wrap items-center gap-4 md:gap-[95px] shrink-0 opacity-40">
            <Link href="#consumer-insights" className="text-[16px] font-medium text-[var(--muslin)] hover:opacity-80 transition-opacity md:text-[18px]" style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif" }}>
              India Scape
            </Link>
            <Link href="#what-we-are" className="text-[16px] font-medium text-[var(--muslin)] hover:opacity-80 transition-opacity md:text-[18px]" style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif" }}>
              What we are
            </Link>
            <Link href="#careers" className="text-[16px] font-medium text-[var(--muslin)] hover:opacity-80 transition-opacity md:text-[18px]" style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif" }}>
              Join the team
            </Link>
            <Link href="#contact" className="text-[16px] font-medium text-[var(--muslin)] hover:opacity-80 transition-opacity md:text-[18px]" style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif" }}>
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-[37px] shrink-0 ml-auto opacity-40">
              <a href="https://instagram.com/confluxe" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                <Image src="/images/icons/instagram.svg" alt="Instagram" width={20} height={20} unoptimized />
              </a>
              <a href="https://linkedin.com/company/confluxe" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                <Image src="/images/icons/linkedin.svg" alt="LinkedIn" width={21} height={20} unoptimized />
              </a>
            </div>
        </div>
      </div>
    </footer>
  );
}
