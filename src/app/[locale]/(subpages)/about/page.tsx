import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { BASE_URL, PERSON_ID } from "@/config";
import { getPersonSchema } from "@/schemas/rich-schemas";
import AboutPage from "@/views/AboutPage";

const META = {
  en: {
    title: "About — Viktor Nagy, websites and automations for small businesses | Your Coding Bro",
    description:
      "Viktor Nagy builds websites, webshops, and automations for small businesses — reducing manual admin and repetitive tasks so owners spend time on work that matters.",
    path: "/en/about",
    ogLocale: "en_US",
  },
  hu: {
    title: "Nagy Viktor – weboldalkészítés, webshop és automatizálás kisvállalkozásoknak | Your Coding Bro",
    description:
      "Nagy Viktor szoftverfejlesztő weboldalakat, webshopokat és folyamatautomatizálásokat készít kisvállalkozásoknak. Kevesebb kézi adminisztráció, egyszerűbb rendszerek.",
    path: "/rolam",
    ogLocale: "hu_HU",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale as keyof typeof META] ?? META.en;

  return {
    metadataBase: new URL(BASE_URL),
    title: m.title,
    description: m.description,
    authors: [{ name: "Viktor Nagy", url: BASE_URL }],
    creator: "Viktor Nagy",
    openGraph: {
      title: m.title,
      description: m.description,
      url: `${BASE_URL}${m.path}`,
      siteName: "YourCodingBro",
      locale: m.ogLocale,
      alternateLocale: routing.locales
        .filter((l) => l !== locale)
        .map((l) => (l === "hu" ? "hu_HU" : "en_US")),
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      creator: "@yourcodingbro",
    },
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${BASE_URL}${m.path}`,
      languages: {
        en: `${BASE_URL}/en/about`,
        hu: `${BASE_URL}/rolam`,
        "x-default": `${BASE_URL}/en/about`,
      },
    },
  };
}

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const m = META[locale as keyof typeof META] ?? META.en;
  const personSchema = await getPersonSchema(locale);

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${BASE_URL}${m.path}`,
    url: `${BASE_URL}${m.path}`,
    name: m.title,
    description: m.description,
    mainEntity: { "@id": PERSON_ID },
    about: { "@id": PERSON_ID },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <AboutPage />
    </>
  );
}
