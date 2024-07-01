import { MotionDiv } from "@/components/motion/motion";

import getGalleryImages from "../../_repositories/getGalleryImages";
import GalleryCard from "./gallery-card";

export default function Gallery() {
  const images = getGalleryImages();

  return (
    <div className="max-h-[45vh] flex-grow flex-col items-center lg:max-h-[35vh]">
      <MotionDiv className="relative z-10 -mt-28 grid grid-rows-3 place-items-center first:z-0 first:-rotate-3 first:pt-28 sm:grid-cols-3 first:lg:-mr-14 first:xl:-mr-20">
        {images.map((image) => (
          <div key={image.src}>
            <GalleryCard image={image} />
          </div>
        ))}
      </MotionDiv>

      <div className="pointer-events-none absolute bottom-0 z-20 h-[35rem] w-full bg-gradient-to-t from-background to-transparent lg:h-[30rem]" />
    </div>
  );
}
