import lineBlue from "@/../public/line_blue.png";
import lineYellow from "@/../public/line_yellow.png";
import Image from "next/image";
import React from "react";

export default function ComingSoonMultiline() {
  return (
    <>
      <Image
        className="pointer-events-none absolute top-1/2 z-[1] w-full -translate-y-1/2 scale-125 mix-blend-exclusion lg:scale-100"
        src={lineYellow}
        alt="yellow line"
      />

      <Image
        className="pointer-events-none absolute top-1/2 z-[1] w-full -translate-y-1/2 scale-125 mix-blend-exclusion lg:scale-100"
        src={lineBlue}
        alt="blue line"
      />
    </>
  );
}
