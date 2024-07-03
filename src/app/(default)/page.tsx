import { BentoGrid } from "@/components/magicui/bento-grid";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Badge } from "@/components/shadcn-ui/badge";
import { Card } from "@/components/shadcn-ui/card";
import { fontSecondary } from "@/lib/fonts";
import { cn } from "@/lib/utils/shadcn-utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import dynamic from "next/dynamic";

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
      <div className="relative flex size-full max-h-screen flex-grow bg-stars bg-right bg-repeat sm:bg-top">
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

      <div className="container relative flex flex-col items-center justify-center gap-9 pb-32 pt-0">
        <div className="flex flex-col items-center justify-center text-pretty text-center xs:gap-3">
          <h1 className="text-[44px] font-bold italic tracking-tight drop-shadow-blue-glow xs:text-6xl sm:text-7xl lg:text-[5rem]">
            COMPETITIONS
          </h1>

          <h3 className={cn(fontSecondary.className, "text-md xs:text-xl")}>
            What waits for you beyond the horizon
          </h3>
        </div>

        <BentoGrid className="container grid auto-rows-max grid-cols-1 md:grid-cols-2">
          <Card className="hover:drop-shadow-blue-glow-sm group relative flex min-h-[20rem] w-full flex-col items-center justify-center gap-6 px-12 transition-all ease-in-out hover:cursor-pointer">
            <div className="flex flex-col gap-3">
              <h1 className="w-full text-left text-3xl font-bold">
                Scientific Writing
              </h1>

              <p className="text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                officia omnis id corrupti sapiente? Nemo, fugit? Illo nesciunt
                nihil itaque eos optio, quasi sunt magni vel dolore est, dolorem
                similique?
              </p>
            </div>

            <div className="flex w-full items-center justify-between gap-8">
              <Badge className="self-start">Sedang berlangsung</Badge>
              <div className="flex -translate-x-8 items-center gap-2 text-sm opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
                <span className="hidden xs:inline">More information</span>{" "}
                <ArrowRightIcon fontSize={12} />
              </div>
            </div>

            <BorderBeam
              delay={Math.random() + 1}
              duration={3 * Math.random() + 4}
              borderWidth={4}
              colorFrom="var(--purple-500)"
              colorTo="var(--yellow-200)"
              className="transition-all group-hover:opacity-0"
            />
          </Card>

          <Card className="hover:drop-shadow-blue-glow-sm group relative flex min-h-[20rem] w-full flex-col items-center justify-center gap-6 px-12 transition-all ease-in-out hover:cursor-pointer">
            <div className="flex flex-col gap-3">
              <h1 className="w-full text-left text-3xl font-bold">
                Physics Olympiad
              </h1>

              <p className="text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                officia omnis id corrupti sapiente? Nemo, fugit? Illo nesciunt
                nihil itaque eos optio, quasi sunt magni vel dolore est, dolorem
                similique?
              </p>
            </div>

            <div className="flex w-full items-center justify-between gap-8">
              <Badge
                variant="secondary"
                className="self-start"
              >
                22 Juni 2024
              </Badge>
              <div className="flex -translate-x-8 items-center gap-2 text-sm opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
                <span className="hidden xs:inline">More information</span>{" "}
                <ArrowRightIcon fontSize={12} />
              </div>
            </div>

            <BorderBeam
              delay={Math.random() + 1}
              duration={3 * Math.random() + 4}
              borderWidth={4}
              colorFrom="var(--yellow-500)"
              colorTo="var(--purple-200)"
              className="transition-all group-hover:opacity-0"
            />
          </Card>
        </BentoGrid>
      </div>
    </>
  );
}
