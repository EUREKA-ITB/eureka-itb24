import { fontSecondary } from "@/lib/fonts";
import { cn } from "@/lib/utils/shadcn-utils";
import dynamic from "next/dynamic";

import Gallery from "./_components/gallery/gallery";
import HeroText from "./_components/hero/hero-text";
import TimelineTree from "./_components/timeline/timeline-tree";
import SchrodiCameo from "./_components/what-is-eureka/schrodi-cameo";
import WhatIsEureka from "./_components/what-is-eureka/what-is-eureka";

const HeroBackground = dynamic(
  () => import("./_components/hero/hero-background"),
);

export default function Home() {
  return (
    <>
      <div className="relative flex size-full max-h-screen flex-grow bg-stars bg-right bg-repeat sm:bg-top">
        <HeroBackground />

        <div className="flex size-full flex-grow flex-col">
          <div className="relative flex flex-grow flex-col overflow-hidden">
            <HeroText />

            <Gallery />
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center gap-[4.5rem] bg-background">
        <SchrodiCameo />

        <WhatIsEureka />
      </div>

      <div className="relative flex size-full flex-col items-center pb-24 pt-12">
        <div className="container flex flex-col justify-center gap-2 text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">
            The Beginning of Time
          </h1>
          <h3 className={cn("text-xl font-light", fontSecondary.className)}>
            Where it all started
          </h3>
        </div>

        <TimelineTree />
      </div>
    </>
  );
}
