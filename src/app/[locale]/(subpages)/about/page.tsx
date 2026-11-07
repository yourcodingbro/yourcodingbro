import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { BASE_URL, PERSON_ID } from "@/config";
import { getPersonSchema } from "@/schemas/rich-schemas";
import AboutPage from "@/views/AboutPage";

const META = {
  en: {
    title: "About Nagy Viktor — YourCodingBro",
    description:
      "Viktor Nagy is an independent full-stack engineer who builds websites, web apps, and automated workflows for founders and businesses.",
    path: "/en/about",
    ogLocale: "en_US",
  },
  hu: {
    title: "Rólam — YourCodingBro",
    description:
      "Nagy Viktor független full-stack fejlesztő, aki weboldalakat, webalkalmazásokat és automatizált munkafolyamatokat épít vállalkozásoknak.",
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
