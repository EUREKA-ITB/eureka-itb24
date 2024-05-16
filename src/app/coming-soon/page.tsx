import ComingSoonCarousel from "@/components/coming-soon-carousel";
import ComingSoonHero from "@/components/coming-soon-hero";
import ComingSoonSocials from "@/components/coming-soon-socials";
import React from "react";

export default function ComingSoonPage() {
  return (
    <main className="flex size-full min-h-screen flex-col gap-0 overflow-x-hidden py-16">
      <ComingSoonHero />

      <section className="flex flex-grow flex-col items-center justify-center gap-32 pb-16">
        <ComingSoonCarousel />

        <ComingSoonSocials />
      </section>
    </main>
  );
}
