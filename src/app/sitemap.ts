import type { MetadataRoute } from "next";
import { primaryNav } from "@/lib/site";

const base = "https://www.vioracare.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return primaryNav.map((item) => ({
    url: `${base}${item.href === "/" ? "" : item.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
