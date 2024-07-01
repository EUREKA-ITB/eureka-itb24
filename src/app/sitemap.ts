import { sitemap as sitemapData } from "@/lib/sitemap";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapData;
}
