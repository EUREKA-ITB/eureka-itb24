import Marquee from "@/components/magicui/marquee";
import Image from "next/image";
import React from "react";

import getMediaPartners from "../../_repositories/getMediaPartners";

export default function MedparMarquee() {
  const mediaPartners = getMediaPartners();

  return (
    <Marquee>
      <div className="pointer-events-none relative flex size-fit max-h-64 items-center gap-8">
        {mediaPartners.map((mediaPartner) => (
          <div
            className="overflow-hidden rounded-xl bg-foreground"
            key={mediaPartner.name}
          >
            <Image
              src={mediaPartner.image}
              alt={`${mediaPartner.name} (Media Partner)`}
              style={{ width: "auto", height: 175 }}
              width="0"
              height="0"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </Marquee>
  );
}
