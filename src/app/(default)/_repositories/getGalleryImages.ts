import type { TGalleryImage } from "../_models/gallery-interfaces";

export default function getGalleryImages(): TGalleryImage[] {
  return [
    { src: "/lab_fidas.jpg", alt: "Lab Fidas" },
    { src: "/plawid.jpg", alt: "Plawid" },
    { src: "/1201.jpg", alt: "Ruangan 1201" },
  ];
}
