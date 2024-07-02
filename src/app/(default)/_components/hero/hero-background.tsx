import Image from "next/image";

export default function HeroBackground() {
  return (
    <>
      <Image
        src="/line_yellow.png"
        alt="Yellow line"
        className="pointer-events-none absolute left-0 top-0 z-[1] w-screen shrink-0 -translate-y-1/4 object-contain mix-blend-exclusion md:-translate-y-[20%]"
        fill
        priority
      />

      <Image
        src="/line_blue.png"
        alt="Blue line"
        className="pointer-events-none absolute left-0 top-0 z-0 w-screen shrink-0 -translate-y-1/4 object-contain mix-blend-exclusion md:-translate-y-[20%]"
        fill
        priority
      />
      <Image
        src="/stars.png"
        alt="Stars background"
        className="pointer-events-none shrink-0 object-cover object-top"
        fill
        priority
      />

      <div className="pointer-events-none absolute left-0 top-0 -z-20 size-full shrink-0 -translate-y-[20%] bg-gradient-to-t from-sky-500/25 to-transparent" />
      <div className="pointer-events-none absolute inset-0 left-0 top-0 -z-10 flex size-full shrink-0 items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_25%,black)] dark:bg-black" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-1/2 w-full shrink-0 bg-gradient-to-t from-background to-transparent" />
    </>
  );
}
