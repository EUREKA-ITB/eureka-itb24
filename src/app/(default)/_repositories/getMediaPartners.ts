import type { IMediaPartner } from "@/lib/models/sponsor-medpar-interfaces";

export default function getMediaPartners(): IMediaPartner[] {
  return [
    { name: "EVENT LIST", image: "/medpar-1.png" },
    { name: "Info Lomba Gratis", image: "/medpar-2.png" },
    { name: "Kompetisi Online", image: "/medpar-3.jpeg" },
    { name: "Lomba SMA", image: "/medpar-4.png" },
    { name: "Lomba Ilmiah Co", image: "/medpar-5.PNG" },
  ];
}
