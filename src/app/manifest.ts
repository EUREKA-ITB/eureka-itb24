import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    theme_color: "#01A8B7",
    background_color: "#121212",
    icons: [
      {
        purpose: "maskable",
        sizes: "512x512",
        src: "icon512_maskable.png",
        type: "image/png",
      },
      {
        purpose: "any",
        sizes: "512x512",
        src: "icon512_rounded.png",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    orientation: "any",
    display: "standalone",
    dir: "ltr",
    lang: "en-US",
    name: "EUREKA! ITB 2024",
    short_name: "EUREKA! ITB",
    start_url: "https://eurekaitb.com",
    description:
      "Acara kompetisi fisika tahunan yang diselenggarakan oleh EUREKA! ITB 2024, dan merupakan bagian dari HIMAFI ITB.",
    id: "eurekaitb-24",
  };
}
