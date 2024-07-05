import type { IMediaPartner } from "@/lib/models/sponsor-medpar-interfaces";

export default function getMediaPartners(): IMediaPartner[] {
  return [
    { name: "Informasi Event", image: "/medpar-1.jpeg" },
    { name: "Ikut Event", image: "/medpar-2.png" },
    { name: "Event Center", image: "/medpar-3.JPG" },
    { name: "EVENT LIST", image: "/medpar-4.png" },
    { name: "Lomba Mahasiswa", image: "/medpar-5.png" },
  ];
}
