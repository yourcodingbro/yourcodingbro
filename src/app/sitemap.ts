import type { MetadataRoute } from "next";
import { BASE_URL } from "@/config";

// localePrefix: "as-needed", defaultLocale: "hu" — no prefix for hu, /en/ for en
const PAGES = [
  { hu: "", en: "" }, // homepage
  { hu: "/rolam", en: "/about" },
  { hu: "/szolgaltatasok", en: "/services" },
  { hu: "/portfolio", en: "/portfolio" },
  { hu: "/kapcsolat", en: "/contact" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ hu, en }) => ({
    url: `${BASE_URL}${hu}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: hu === "" ? 1 : 0.8,
    alternates: {
      languages: {
        hu: `${BASE_URL}${hu}`,
        en: `${BASE_URL}/en${en}`,
      },
    },
  }));
}
