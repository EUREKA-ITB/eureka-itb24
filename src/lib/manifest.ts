import icon512_maskable from "@public/metadata/icon512_maskable.png";
import icon512_rounded from "@public/metadata/icon512_rounded.png";
import type { MetadataRoute } from "next";

export const manifest: MetadataRoute.Manifest = {
  theme_color: "#121212",
  background_color: "#121212",
  icons: [
    {
      purpose: "maskable" as const,
      sizes: "512x512",
      src: icon512_maskable.src,
      type: "image/png",
    },
    {
      purpose: "any" as const,
      sizes: "512x512",
      src: icon512_rounded.src,
      type: "image/png",
    },
    {
      src: "/favicon.ico",
      sizes: "96x96",
      type: "image/x-icon",
    },
  ],
  orientation: "portrait-primary" as const,
  display: "standalone" as const,
  dir: "ltr" as const,
  lang: "en-US",
  name: "EUREKA! ITB 2024",
  short_name: "EUREKA! ITB",
  description:
    "Acara kompetisi fisika tahunan yang diselenggarakan oleh EUREKA! ITB 2024, dan merupakan bagian dari HIMAFI ITB.",
  id: "eurekaitb-24",
};
