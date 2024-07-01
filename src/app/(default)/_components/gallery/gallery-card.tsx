import { Card } from "@/components/shadcn-ui/card";
import Image from "next/image";

import type { TGalleryImage } from "../../_models/gallery-interfaces";

type TGalleryCardProps = {
  image: TGalleryImage;
};

export default function GalleryCard(props: TGalleryCardProps) {
  return (
    <Card className="group relative h-[20vh] w-[40rem] -translate-x-4 -translate-y-9 cursor-pointer overflow-hidden border-4 border-background transition-all ease-out sm:aspect-[2/3] sm:h-[55vh] sm:w-[40rem] sm:hover:-translate-y-4 sm:hover:rotate-2 md:hover:-translate-y-20">
      <Image
        src={props.image.src}
        alt={props.image.alt}
        fill
        className="object-cover object-center grayscale transition-all group-hover:brightness-125 group-hover:contrast-125 group-hover:grayscale-0 group-hover:saturate-100"
      />
    </Card>
  );
}
