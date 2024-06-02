import Image, { type StaticImageData } from "next/image";

type TGalleryItem = {
  src: StaticImageData;
  alt: string;
};

export default function ComingSoonGalleryItem({
  item,
}: {
  item: TGalleryItem;
}) {
  return (
    <div className="group relative flex size-full justify-center overflow-hidden object-cover hover:cursor-pointer">
      <Image
        quality={25}
        src={item.src}
        alt={item.alt}
        width={840}
        height={472.5}
        // seems like className filter doesn't work in safari,
        // therefore this inline style is added for compatibility
        style={{ filter: "brightness(.75) saturate(0) contrast(1.25)" }}
        className="h-[472.5px] bg-cover object-cover"
      />

      {/* Below is for color gradient masking */}
      <div className="absolute top-1/2 size-full -translate-y-1/2 border-8 border-background from-accent/50 via-accent/5 to-transparent group-hover:bg-gradient-to-t" />
      <div className="absolute top-1/2 size-full -translate-y-1/2 border-8 border-background bg-gradient-to-b from-background via-background/30 to-transparent" />
      <div className="absolute top-1/2 size-full -translate-y-1/2 border-8 border-background bg-gradient-to-r from-background via-background/5 to-transparent" />
      <div className="absolute top-1/2 size-full -translate-y-1/2 border-8 border-background bg-gradient-to-l from-background via-background/5 to-transparent" />
      <div className="absolute top-1/2 size-full -translate-y-1/2 border-8 border-background bg-gradient-to-t from-background via-background/30 to-transparent" />
    </div>
  );
}
