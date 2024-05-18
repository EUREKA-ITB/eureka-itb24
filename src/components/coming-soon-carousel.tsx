import Image, { type StaticImageData } from "next/image";
import React from "react";

import MotionDiv from "./motion/motion-div";

type TCarouselItemType = {
  src: StaticImageData;
  alt: string;
  width?: number;
  height?: number;
};

type TComingSoonCarouselProps = {
  items: TCarouselItemType[];
};

export default function ComingSoonCarousel({
  items,
}: TComingSoonCarouselProps) {
  return (
    <div className="flex w-max items-center -space-x-48">
      <MotionDiv
        initial={{ translateX: "calc(-25%)" }}
        animate={{ translateX: "calc(25%)" }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex w-full items-center -space-x-48"
      >
        {items.map((item, index) => (
          <div
            key={index.toString()}
            className="relative flex justify-center"
          >
            <Image
              quality={25}
              src={item.src}
              alt={item.alt}
              width={840}
              height={472.5}
              style={{
                backgroundSize: "cover",
                filter: "saturate(0) contrast(1.2) brightness(.75)",
              }}
              className="h-[520px] w-[840px] rounded-[3rem] bg-cover brightness-75 contrast-200 saturate-0 transition-all ease-in"
            />

            <div className="absolute top-1/2 size-full -translate-y-1/2 bg-gradient-to-b from-background via-background/30 to-transparent" />

            <div className="absolute top-1/2 size-full -translate-y-1/2 bg-gradient-to-t from-background via-background/30 to-transparent" />
          </div>
        ))}
      </MotionDiv>
    </div>
  );
}
