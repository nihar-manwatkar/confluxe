import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ConsumerInsights from "@/components/ConsumerInsights";
import WhatWeAre from "@/components/WhatWeAre";
import OurCapabilities from "@/components/OurCapabilities";
import Testimonial from "@/components/Testimonial";
import Categories from "@/components/Categories";
import OurValues from "@/components/OurValues";
import PixelClusterSection from "@/components/PixelClusterSection";
import JoinTeam from "@/components/JoinTeam";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="bg-[#FCF9F3]">
      <Header />
      <div className="flex flex-col [&>*+*]:mt-16 md:[&>*+*]:mt-[140px]">
        <Hero />
        <ScrollReveal>
          <ConsumerInsights />
        </ScrollReveal>
        <ScrollReveal>
          <WhatWeAre />
        </ScrollReveal>
        <ScrollReveal>
          <OurCapabilities />
        </ScrollReveal>
        <ScrollReveal>
          <Testimonial
            quote="India is no longer a peripheral market; it is a definitive consumption engine. Our mission is to ensure global excellence is never lost in translation."
            name="Rajesh Narkar"
            role="CEO & Co-Founder"
            align="right"
          />
        </ScrollReveal>
        <ScrollReveal>
          <Categories />
        </ScrollReveal>
        <ScrollReveal>
          <OurValues />
        </ScrollReveal>
        <ScrollReveal>
          <Testimonial
            quote="Infrastructure and intimacy are not mutually exclusive. The strongest brands are those built on a backbone of technical precision and cultural soul."
            name="Louis Coucke"
            role="COO & Co-Founder"
            imageSrc="/images/louis-profile.png"
            imagePosition="left"
          />
        </ScrollReveal>
        <ScrollReveal>
          <PixelClusterSection />
        </ScrollReveal>
        <ScrollReveal className="!mt-0">
          <JoinTeam />
        </ScrollReveal>
        <ScrollReveal className="!mt-0">
          <Footer />
        </ScrollReveal>
      </div>
    </main>
  );
}
