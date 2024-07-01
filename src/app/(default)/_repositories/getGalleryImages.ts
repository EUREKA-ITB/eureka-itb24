import r1201 from "@public/1201.jpg";
import labFidas from "@public/lab_fidas.jpg";
import plawid from "@public/plawid.jpg";

import type { TGalleryImage } from "../_models/gallery-interfaces";

export default function getGalleryImages(): TGalleryImage[] {
  return [
    { src: labFidas.src, alt: "Lab Fidas" },
    { src: plawid.src, alt: "Plawid" },
    { src: r1201.src, alt: "Ruangan 1201" },
  ];
}
