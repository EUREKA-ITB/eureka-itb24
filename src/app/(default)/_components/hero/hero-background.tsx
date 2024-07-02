import Image from "next/image";

export default function HeroBackground() {
  return (
    <div className="pointer-events-none shrink-0">
      <Image
        src="/line_yellow.png"
        alt="Yellow line"
        className="absolute left-0 top-0 z-[1] w-screen -translate-y-1/4 object-contain mix-blend-exclusion md:-translate-y-[20%]"
        fill
      />

      <Image
        src="/line_blue.png"
        alt="Blue line"
        className="absolute left-0 top-0 z-0 w-screen -translate-y-1/4 object-contain mix-blend-exclusion md:-translate-y-[20%]"
        fill
      />
      <Image
        src="/stars.png"
        alt="Stars background"
        className="object-cover object-top"
        fill
      />

      <div className="absolute left-0 top-0 -z-20 size-full -translate-y-[20%] bg-gradient-to-t from-sky-500/25 to-transparent" />
      <div className="absolute inset-0 left-0 top-0 -z-10 flex size-full items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_25%,black)] dark:bg-black" />
      <div className="absolute bottom-0 left-0 -z-10 h-1/2 w-full bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
