import { manifestData } from "@/lib/manifest";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return manifestData;
}
