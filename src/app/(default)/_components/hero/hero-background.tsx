import { BackgroundBeams } from "@/components/aceternity/background-beams";
import Image from "next/image";

export default function HeroBackground() {
  return (
    <>
      <Image
        src="/line_yellow.png"
        alt="Yellow line"
        className="pointer-events-none absolute left-0 top-0 z-[1] shrink-0 -translate-y-1/4 object-contain mix-blend-exclusion md:-translate-y-[18%]"
        style={{ width: "100%", height: "100%" }}
        loading="eager"
        fill
      />

      <Image
        src="/line_blue.png"
        alt="Blue line"
        className="pointer-events-none absolute left-0 top-0 z-0 shrink-0 -translate-y-[27%] object-contain mix-blend-exclusion md:-translate-y-[22%]"
        style={{ width: "100%", height: "100%" }}
        loading="eager"
        fill
      />

      <div className="pointer-events-none absolute left-0 top-0 -z-20 size-full shrink-0 -translate-y-[20%] bg-gradient-to-t from-sky-500/25 to-transparent" />
      <div className="pointer-events-none absolute inset-0 left-0 top-0 -z-10 flex size-full shrink-0 items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_25%,black)] dark:bg-black" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-1/2 w-full shrink-0 bg-gradient-to-t from-background to-transparent" />
      <BackgroundBeams />
    </>
  );
}
