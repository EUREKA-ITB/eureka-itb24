import bg1 from "@/../public/DSC02956.png";
import bg2 from "@/../public/DSC_0030.png";
import bg3 from "@/../public/DSC_0192.png";
import bg4 from "@/../public/IMG_0009.png";
import bg5 from "@/../public/IMG_0151.png";

import ComingSoonCarousel from "./coming-soon-carousel";

const items = [
  {
    src: bg1,
    title: "EUREKA! ITB 2020",
    alt: "EUREKA! ITB 2020",
  },
  {
    src: bg2,
    title: "EUREKA! ITB 2020",
    alt: "EUREKA! ITB 2020",
  },
  {
    src: bg3,
    title: "EUREKA! ITB 2020",
    alt: "EUREKA! ITB 2020",
  },
  {
    src: bg4,
    title: "EUREKA! ITB 2020",
    alt: "EUREKA! ITB 2020",
  },
  {
    src: bg5,
    title: "EUREKA! ITB 2020",
    alt: "EUREKA! ITB 2020",
  },
];

export default function ComingSoonPreviously() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-8">
      <h2 className="absolute -top-10 z-[1] mx-16 text-balance rounded-full bg-background/60 px-6 py-4 text-center text-2xl font-semibold shadow-2xl shadow-background drop-shadow-[0px_50px_96px_rgba(1,_170,_185,_0.5)] backdrop-blur sm:px-16 md:px-32 md:text-3xl xl:text-4xl">
        Our previous journey
      </h2>

      <ComingSoonCarousel items={items} />

      <p className="text-md absolute -bottom-8 z-[1] mx-16 text-balance rounded-full bg-background/40 px-6 py-4 text-center font-light shadow-2xl shadow-background drop-shadow-[0px_-50px_96px_rgba(1,_170,_185,_0.5)] backdrop-blur sm:px-6 sm:text-lg md:px-12 md:text-xl xl:text-2xl">
        The last EUREKA! ITB that was held offline was EUREKA! ITB 2020.
      </p>
    </div>
  );
}
