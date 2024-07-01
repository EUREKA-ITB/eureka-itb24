import Image from "next/image";

export default function HeroBackground() {
  return (
    <div className="pointer-events-none">
      <Image
        src="/stars.png"
        alt="Stars background"
        className="object-cover object-top"
        fill
      />

      <Image
        src="/line_yellow.png"
        alt="Yellow line"
        className="z-10 object-contain mix-blend-exclusion"
        fill
      />

      <Image
        src="/line_blue.png"
        alt="Blue line"
        className="z-0 object-contain mix-blend-exclusion"
        fill
      />

      <div className="absolute left-0 top-0 -z-20 size-full bg-gradient-to-t from-sky-500/40 to-transparent" />
      <div className="absolute inset-0 -z-10 flex w-screen items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)] dark:bg-black" />
      <div className="absolute bottom-0 left-0 -z-10 h-1/2 w-full bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
