import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/algemene-voorwaarden`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.url}/privacyverklaring`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
