import dynamic from "next/dynamic";

import CompetitionsList from "./_components/competitions/competitions-list";
import CompetitionsSectionTitle from "./_components/competitions/competitions-section-title";
import Gallery from "./_components/gallery/gallery";
import HeroText from "./_components/hero/hero-text";
import Timeline from "./_components/timeline/timeline";
import SchrodiCameo from "./_components/what-is-eureka/schrodi-cameo";
import WhatIsEureka from "./_components/what-is-eureka/what-is-eureka";

const HeroBackground = dynamic(
  () => import("./_components/hero/hero-background"),
);

export default function Home() {
  return (
    <>
      <div className="relative flex size-full max-h-screen flex-grow">
        <HeroBackground />

        <div className="relative flex flex-grow flex-col overflow-hidden">
          <HeroText />

          <Gallery />
        </div>
      </div>

      <div className="relative flex flex-col items-center gap-[4.5rem] bg-background">
        <SchrodiCameo />

        <WhatIsEureka />
      </div>

      <Timeline />

      <div className="container relative flex flex-col items-center justify-center gap-9 overflow-hidden pb-32 pt-4">
        <CompetitionsSectionTitle />

        <CompetitionsList />
      </div>
    </>
  );
}
