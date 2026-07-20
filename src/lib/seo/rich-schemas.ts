import { getTranslations } from "next-intl/server";
import { Person, Service, WebSite, WithContext } from "schema-dts";
import {
  BASE_URL,
  PERSON_ID,
  SERVICE_ID,
  WEBSITE_ID,
} from "@/lib/constants/globals";

export async function getWebsiteSchema(
  locale: string
): Promise<WithContext<WebSite>> {
  const t = await getTranslations({ locale, namespace: "pages.homepage.seo" });

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: "YourCodingBro",
    alternateName: "YCB",
    url: `${BASE_URL}/${locale}`,
    description: t("description"),
  };
}

export async function getPersonSchema(
  locale: string
): Promise<WithContext<Person>> {
  const t = await getTranslations({ locale, namespace: "pages.homepage.seo" });

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Viktor Nagy",
    url: `${BASE_URL}/${locale}`,
    // image: `${BASE_URL}/images/viktor-nagy.jpg`,
    jobTitle: "Freelance Full-Stack Developer",
    description: t("description"),
    sameAs: [
      "https://www.linkedin.com/in/viktornagy97",
      "https://github.com/kmpizmad",
    ],
    knowsAbout: [
      "Full-stack web development",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "SaaS development",
      "API integration",
      "Web performance optimization",
    ],
  };
}

export async function getServiceSchema(
  locale: string
): Promise<WithContext<Service>> {
  const t = await getTranslations({ locale, namespace: "pages.homepage.seo" });

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": SERVICE_ID,
    name: "YourCodingBro",
    url: `${BASE_URL}/${locale}#services`,
    description: t("description"),
    provider: {
      "@id": PERSON_ID,
    },
    serviceType: [
      "Full-Stack Web Development",
      "SaaS Development",
      "MVP Development",
      "Business Process Automation",
      "API Integration",
    ],
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    mainEntityOfPage: {
      "@id": WEBSITE_ID,
    },
  };
}
