import ComingSoonHero from "@/components/coming-soon-hero";
import ComingSoonMultiline from "@/components/coming-soon-multiline";
import ComingSoonPreviously from "@/components/coming-soon-previously";
import ComingSoonSocials from "@/components/coming-soon-socials";

export default function Home() {
  return (
    <main className="flex size-full min-h-screen flex-col gap-0 overflow-hidden pb-16">
      <div className="bg-stars relative">
        <ComingSoonHero />

        <ComingSoonMultiline />
      </div>

      <section className="flex flex-grow flex-col items-center justify-center gap-32 pb-16">
        <ComingSoonPreviously />

        <ComingSoonSocials />
      </section>
    </main>
  );
}
