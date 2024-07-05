import { MotionDiv, MotionH1 } from "@/components/motion/motion";
import Image from "next/image";
import React from "react";
import Wave from "react-wavify";

export default function Schrodis() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <MotionH1
        initial={{ scale: 0.8, translateY: 100, opacity: 0 }}
        whileInView={{ scale: 1, translateY: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute top-4 w-full text-center text-7xl font-bold xs:-top-2 xs:text-8xl sm:-top-0"
      >
        JOIN US<span className="hidden md:inline"> NOW</span>!
      </MotionH1>

      <MotionDiv
        initial={{ scale: 0.8, translateY: 100, opacity: 0 }}
        whileInView={{ scale: 1, translateY: 0, opacity: 1 }}
        className="pointer-events-none absolute top-4 mr-12 flex h-full w-max shrink-0 justify-center -space-x-48 xs:-space-x-40 sm:-space-x-40"
      >
        <Image
          src="/schrodi-4.png"
          alt="Schrodi FBSK"
          style={{ width: 350, height: 350 }}
          width="0"
          height="0"
          loading="lazy"
        />
        <Image
          className="mt-2"
          src="/schrodi-1.png"
          alt="Schrodi FIK"
          style={{ width: 350, height: 350 }}
          width="0"
          height="0"
          loading="lazy"
        />
        <Image
          className="mt-4"
          src="/schrodi-2.png"
          alt="Schrodi FNB"
          style={{ width: 350, height: 350 }}
          width="0"
          height="0"
          loading="lazy"
        />
        <Image
          className="mt-9"
          src="/schrodi-6.png"
          alt="Schrodi FIK"
          style={{ width: 350, height: 350 }}
          width="0"
          height="0"
          loading="lazy"
        />
        <Image
          className="mt-2"
          src="/schrodi-5.png"
          alt="Schrodi FTMM"
          style={{ width: 350, height: 350 }}
          width="0"
          height="0"
          loading="lazy"
        />
        <Image
          src="/schrodi-3.png"
          alt="Schrodi FTETI"
          style={{ width: 350, height: 350 }}
          width="0"
          height="0"
          loading="lazy"
        />
      </MotionDiv>

      <Wave
        amplitude={100}
        className="z-[1] h-80 w-full"
        fill="url(#gradient)"
      >
        <defs>
          <linearGradient
            id="gradient"
            gradientTransform="rotate(90)"
          >
            <stop
              offset="50%"
              stopColor="var(--transparent)"
            />
            <stop
              offset="80%"
              stopColor="rgba(1,170,185,0.5)"
            />
            <stop
              offset="100%"
              stopColor="var(--background)"
            />
          </linearGradient>
        </defs>
      </Wave>
    </div>
  );
}
