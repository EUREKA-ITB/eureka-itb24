import bg1 from "@/../public/DSC02956.png";
import bg6 from "@/../public/DSC03070.jpg";
import bg2 from "@/../public/DSC_0030.png";
import bg3 from "@/../public/DSC_0192.png";
import bg4 from "@/../public/IMG_0009.png";
import bg5 from "@/../public/IMG_0151.png";

import ComingSoonGalleryItem from "./coming-soon-gallery-item";

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
    <div className="flex w-full flex-col justify-center -space-y-6">
      <div className="no-scrollbar w-full overflow-x-hidden">
        <div className="grid grid-cols-1 md:hidden xl:grid xl:grid-cols-3">
          {items.slice(0, 3).map((item) => (
            <ComingSoonGalleryItem
              key={item.src.src}
              item={item}
            />
          ))}
        </div>
      </div>

      <div className="no-scrollbar w-full overflow-x-auto">
        <div className="grid grid-cols-1 md:hidden xl:grid xl:grid-cols-3">
          {items.slice(3).map((item) => (
            <ComingSoonGalleryItem
              key={item.src.src}
              item={item}
            />
          ))}
        </div>
      </div>

      <div className="no-scrollbar w-full overflow-x-hidden xl:overflow-x-auto">
        <div className="hidden md:grid md:grid-cols-2 xl:hidden">
          {items.slice(0, 2).map((item) => (
            <ComingSoonGalleryItem
              key={item.src.src}
              item={item}
            />
          ))}
        </div>
      </div>

      <div className="no-scrollbar w-full overflow-x-auto">
        <div className="hidden md:grid  md:grid-cols-2 xl:hidden">
          {items.slice(2, 4).map((item) => (
            <ComingSoonGalleryItem
              key={item.src.src}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
