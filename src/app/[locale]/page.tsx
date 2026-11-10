import type { Metadata } from "next";
import type { FAQPage, WithContext } from "schema-dts";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Header from "@/lib/layout/Header";
import Footer from "@/lib/layout/Footer";
import Hero from "@/lib/layout/sections/Hero";
import ValueProp from "@/lib/layout/sections/ValueProp";
import WhyUs from "@/lib/layout/sections/WhyUs";
import Services from "@/lib/layout/sections/Services";
import Portfolio from "@/lib/layout/sections/Portfolio";
import SocialProof from "@/lib/layout/sections/SocialProof";
import Contact from "@/lib/layout/sections/Contact";
import FAQ from "@/lib/layout/sections/FAQ";
import SectionBadgeDivider from "@/lib/components/dividers/SectionBadgeDivider";
import { BASE_URL } from "@/config";
import {
  getPersonSchema,
  getServiceSchema,
  getWebsiteSchema,
} from "@/schemas/rich-schemas";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.homepage.seo" });

  const title = t("title");
  const description = t("description");
  const ogLocale = t("ogLocale");
  const keywords = t("keywords")
    .split(",")
    .map((k) => k.trim());

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    keywords,
    authors: [{ name: "Viktor Nagy", url: BASE_URL }],
    creator: "Viktor Nagy",
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}`,
      siteName: "YourCodingBro",
      locale: ogLocale,
      alternateLocale: routing.locales
        .filter((l) => l !== locale)
        .map((l) => (l === "hu" ? "hu_HU" : "en_US")),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@yourcodingbro",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        ...Object.fromEntries(
          routing.locales.map((l) => [l, `${BASE_URL}/${l}`])
        ),
        "x-default": `${BASE_URL}/en`,
      },
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const [t, tFaq] = await Promise.all([
    getTranslations({ locale, namespace: "pages.homepage.sectionDividers" }),
    getTranslations({ locale, namespace: "pages.homepage.faq" }),
  ]);

  const faqItems = tFaq.raw("items") as { question: string; answer: string }[];

  const [personSchema, websiteSchema, serviceSchema] = await Promise.all([
    getPersonSchema(locale),
    getWebsiteSchema(locale),
    getServiceSchema(locale),
  ]);

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        <Hero />
        <ValueProp depth="row" depthColor="via-violet/10" />
        <SectionBadgeDivider>{t("whyUs")}</SectionBadgeDivider>
        <WhyUs depth="circles" depthColor="bg-brand/10" />
        <Services depth="row" depthColor="via-accent/5" />
        <SectionBadgeDivider>{t("results")}</SectionBadgeDivider>
        <Portfolio depth="circles" depthColor="bg-violet/15" />
        <SocialProof depth="row" depthColor="via-brand/15" />
        <SectionBadgeDivider>{t("faq")}</SectionBadgeDivider>
        <FAQ depth="circles" depthColor="bg-violet/15" />
        <Contact />
      </main>
      {process.env.CONTACT_EMAIL && (
        <Footer contactEmail={process.env.CONTACT_EMAIL} />
      )}
    </>
  );
}
