import { Card } from "@/components/shadcn-ui/card";
import Image from "next/image";

import type { TGalleryImage } from "../../_models/gallery-interfaces";

type TGalleryCardProps = {
  image: TGalleryImage;
};

export default function GalleryCard(props: TGalleryCardProps) {
  return (
    <Card className="group relative h-[20vh] w-[50rem] cursor-pointer overflow-hidden border-4 border-background transition-all ease-out md:aspect-[2/3] md:h-[55vh] md:w-[40rem] md:hover:-translate-y-4 md:hover:rotate-2 lg:hover:-translate-y-12">
      <Image
        src={props.image.src}
        alt={props.image.alt}
        fill
        className="z-[1] object-cover object-center grayscale transition-all group-hover:brightness-125 group-hover:contrast-125 group-hover:grayscale-0 group-hover:saturate-100"
        loading="lazy"
      />

      <div className="z-0 size-full animate-pulse bg-gradient-to-tr from-blue-950 to-yellow-200/20" />
    </Card>
  );
}
