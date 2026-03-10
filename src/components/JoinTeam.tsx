"use client";

// Figma 9 - Join The Team (367:446)
// Background: <video> layer (join-team.mp4) + multiply overlay #36281C on top
// Content: accent square → "Join the Team" 28px → quote 64px → subtitle 22px → CTA

export default function JoinTeam({ className = "" }: { className?: string }) {
  return (
    <section
      id="careers"
      className={`relative py-16 px-6 overflow-hidden md:py-24 md:px-[60px] ${className}`}
    >
      {/* Background video – plays silently, looped, full-cover */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/join-team.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Multiply overlay matching Figma #36281C */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#36281C",
          mixBlendMode: "multiply",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1320px] mx-auto flex flex-col items-center text-center gap-4 md:gap-[19px]">
        {/* Section Title */}
        <div className="flex flex-col items-center gap-[19px] mb-6 md:mb-[41px]">
          <div
            className="w-[10px] h-[10px] md:w-5 md:h-5 shrink-0"
            style={{ backgroundColor: "var(--digital-mist)" }}
          />
          <h2
            className="text-[17px] font-medium tracking-[-0.17px] leading-[20px] md:text-[28px] md:tracking-[-0.28px] md:leading-[33px]"
            style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif", color: "#FCFDF3" }}
          >
            Join the team
          </h2>
        </div>

        {/* Quote */}
        <p
          className="text-[28px] font-medium tracking-[-0.28px] leading-[1.3] max-w-full mb-8 md:text-[64px] md:leading-[76px] md:tracking-[-0.64px] md:max-w-[852px] md:mb-[66px]"
          style={{ fontFamily: "var(--font-sf-pro), system-ui, sans-serif", color: "#FCFDF3" }}
        >
          Joining Confluxe in the first years is a commitment to being a{" "}
          <span style={{ color: "var(--digital-mist)" }}>Co-Builder</span>, not an employee.
        </p>

        {/* Subtitle */}
        <p
          className="text-[16px] leading-[1.4] tracking-[-0.16px] max-w-full mb-10 md:text-[22px] md:leading-[1.36] md:tracking-[-0.22px] md:max-w-[700px] md:mb-[77px]"
          style={{ fontFamily: "var(--font-noticia), Georgia, serif", color: "#FCFDF3" }}
        >
          We are building a digital omnichannel bridge to India. If you are ready to weave technology with soul, you
          belong with us.
        </p>

        {/* CTA */}
        <a
          href="mailto:curious@confluxe.in"
          className="inline-flex items-center gap-[9px] text-[16px] font-medium tracking-[-0.16px] hover:opacity-90 transition-opacity shrink-0 md:text-[18px] md:tracking-[-0.18px]"
          style={{
            fontFamily: "var(--font-sf-pro), system-ui, sans-serif",
            color: "var(--digital-mist)",
          }}
        >
          Explore careers with Confluxe
          <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
