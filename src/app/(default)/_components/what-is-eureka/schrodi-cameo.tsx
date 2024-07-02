import { MotionDiv } from "@/components/motion/motion";
import Image from "next/image";
import React from "react";

export default function SchrodiCameo() {
  return (
    <MotionDiv
      initial={{ translateY: 50, zIndex: 20, opacity: 0 }}
      animate={{ translateY: 0, zIndex: 20, opacity: 100 }}
      className="pointer-events-none relative -top-7 z-20 flex size-full items-center justify-center"
      transition={{
        delay: 0.7,
        bounce: 0.5,
        type: "spring",
      }}
    >
      <Image
        src="/schrodi-1.png"
        alt="Schrodi with a laser and magnet"
        width="0"
        height="0"
        style={{ width: 340, height: 340 }}
        className="absolute z-20"
      />

      <div className="pointer-events-none absolute -top-16 z-[21] h-[15rem] w-full shrink-0 bg-gradient-to-t from-background to-transparent" />
    </MotionDiv>
  );
}
