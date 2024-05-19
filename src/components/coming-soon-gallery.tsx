import bg1 from "@/../public/DSC02956.png";
import bg6 from "@/../public/DSC03070.jpg";
import bg2 from "@/../public/DSC_0030.png";
import bg3 from "@/../public/DSC_0192.png";
import bg4 from "@/../public/IMG_0009.png";
import bg5 from "@/../public/IMG_0151.png";
import Image from "next/image";
import React from "react";

const items = [
  {
    src: bg1,
    alt: "EUREKA! ITB 2020",
  },
  {
    src: bg2,
    alt: "EUREKA! ITB 2020",
  },
  {
    src: bg3,
    alt: "EUREKA! ITB 2020",
  },
  {
    src: bg4,
    alt: "EUREKA! ITB 2020",
  },
  {
    src: bg5,
    alt: "EUREKA! ITB 2020",
  },
  {
    src: bg6,
    alt: "EUREKA! ITB 2020",
  },
];

export default function ComingSoonGallery() {
  return (
    <div className="grid w-max grid-cols-3">
      {items.map((item, index) => (
        <div
          key={index.toString()}
          className="group relative flex size-full justify-center overflow-hidden hover:cursor-pointer"
        >
          <Image
            quality={25}
            src={item.src}
            alt={item.alt}
            width={840}
            height={472.5}
            className="h-[472.5px] bg-cover brightness-75 contrast-125 saturate-0 group-hover:brightness-105 group-hover:contrast-100 group-hover:saturate-150 group-hover:filter"
          />

          <h1 className="absolute -bottom-16 z-[1] text-4xl font-bold opacity-40 shadow-xl drop-shadow-xl transition-all ease-in-out group-hover:bottom-16 lg:text-5xl">
            {item.alt}
          </h1>

          {/* Below is for color gradient masking */}
          <div className="absolute top-1/2 size-full -translate-y-1/2 from-accent via-accent/5 to-transparent blur group-hover:bg-gradient-to-t" />
          <div className="absolute top-1/2 size-full -translate-y-1/2 bg-gradient-to-b from-background via-background/30 to-transparent" />
          <div className="absolute top-1/2 size-full -translate-y-1/2 bg-gradient-to-r from-background via-background/5 to-transparent" />
          <div className="absolute top-1/2 size-full -translate-y-1/2 bg-gradient-to-l from-background via-background/5 to-transparent" />
          <div className="absolute top-1/2 size-full -translate-y-1/2 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </div>
      ))}
    </div>
  );
}
