import { Meteors } from "@/components/aceternity/meteors";

import Gallery from "./_components/gallery/gallery";
import HeroBackground from "./_components/hero/hero-background";
import HeroText from "./_components/hero/hero-text";
import SchrodiCameo from "./_components/what-is-eureka/schrodi-cameo";
import WhatIsEureka from "./_components/what-is-eureka/what-is-eureka";

export default function Home() {
  return (
    <>
      <div className="relative flex size-full max-h-screen flex-grow">
        <HeroBackground />

        <div className="flex size-full flex-grow flex-col">
          <div className="relative flex flex-grow flex-col overflow-hidden">
            <HeroText />

            <Meteors
              className="right-0 top-0 -z-10 -translate-y-1/2 translate-x-1/2"
              number={10}
            />

            <Gallery />
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center gap-[4.5rem] bg-background pb-16">
        <SchrodiCameo />

        <WhatIsEureka />
      </div>
    </>
  );
}
