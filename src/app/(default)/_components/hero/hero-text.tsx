import { MotionH1, MotionH3 } from "@/components/motion/motion";
import { fontSecondary } from "@/lib/fonts";
import { cn } from "@/lib/utils/shadcn-utils";

export default function HeroText() {
  return (
    <div
      className={cn(
        "flex size-full h-[40vh] -rotate-3 flex-col items-center justify-center gap-2 text-balance text-center md:h-[60vh]",
        fontSecondary.className,
      )}
    >
      <MotionH1
        initial={{ translateY: 10, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="text-2xl font-light sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-7xl"
      >
        Explore and Experience
      </MotionH1>

      <MotionH1
        initial={{ translateY: 10, scale: 0.9, opacity: 0 }}
        animate={{ translateY: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="font-sans text-6xl font-bold tracking-tight drop-shadow-blue-glow sm:text-8xl lg:text-9xl xl:text-[9.5rem] xl:tracking-tighter 2xl:text-[13rem]"
      >
        EUREKA! ITB
      </MotionH1>

      <MotionH3
        initial={{ translateY: -10, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="text-xl font-light sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-6xl"
      >
        The Physics Multiverse
      </MotionH3>
    </div>
  );
}
