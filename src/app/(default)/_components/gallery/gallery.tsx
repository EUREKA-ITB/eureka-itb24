import getGalleryImages from "../../_repositories/getGalleryImages";
import GalleryCard from "./gallery-card";

export default function Gallery() {
  const images = getGalleryImages();

  return (
    <div className="h-[45vh] flex-grow flex-col items-center lg:h-[35vh]">
      <div className="relative z-10 -ml-4 grid grid-rows-3 place-items-center first:z-0 first:-rotate-3 md:grid-cols-3 first:lg:-mr-14 first:xl:-mr-20">
        {images.map((image) => (
          <div
            className="translate-y-0 transition-all first:translate-y-0 last:translate-y-0 md:-translate-y-8 lg:-translate-y-10 lg:first:-translate-y-12 lg:first:rotate-12 lg:last:-translate-y-12 lg:last:-rotate-6"
            key={image.src}
          >
            <GalleryCard image={image} />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute bottom-0 z-20 h-2/5 w-full bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
