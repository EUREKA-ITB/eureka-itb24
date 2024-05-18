import Image, { type StaticImageData } from "next/image";
import React from "react";

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
      <div className="flex w-full animate-infinite-horizontal-scroll items-center -space-x-48">
        {[...items, ...items].map((item) => (
          <div
            key={item.src.blurDataURL + "1"}
            className="relative flex justify-center hover:cursor-pointer"
          >
            <Image
              quality={25}
              src={item.src}
              alt={item.alt}
              width={840}
              height={472.5}
              style={{ backgroundSize: "cover" }}
              className="constrast-200 h-[472.5px] w-[840px] rounded-[3rem] bg-cover shadow-2xl shadow-background brightness-75 drop-shadow-2xl saturate-0 transition-all ease-in"
            />

            <div className="absolute top-1/2 size-full -translate-y-1/2 bg-gradient-to-t from-background to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}
