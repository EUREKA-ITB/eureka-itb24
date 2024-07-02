import { Meteors } from "@/components/aceternity/meteors";

import Gallery from "./_components/gallery/gallery";
import HeroBackground from "./_components/hero/hero-background";
import HeroText from "./_components/hero/hero-text";

export default function Home() {
  return (
    <>
      <HeroBackground />

      <div className="relative flex flex-grow flex-col overflow-hidden">
        <HeroText />

        <Meteors
          className="right-0 top-0 -z-10 -translate-y-1/2 translate-x-1/2"
          number={10}
        />

        <Gallery />
      </div>
    </>
  );
}
