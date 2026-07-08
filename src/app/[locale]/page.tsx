import type { Metadata } from "next";
import type { Person, WebSite, WithContext } from "schema-dts";
import { getTranslations } from "next-intl/server";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ValueProp from "@/components/sections/ValueProp";
import WhyUs from "@/components/sections/WhyUs";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import SocialProof from "@/components/sections/SocialProof";
import Contact from "@/components/sections/Contact";
import SectionBadgeDivider from "@/components/dividers/SectionBadgeDivider";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourcodingbro.com"),
  title: "YourCodingBro — Expert Dev, Fast Delivery",
  description:
    "Clean code, on-time delivery, and real results. Your dedicated development partner for web apps, automation, and MVPs.",
  keywords: [
    "freelance developer",
    "web development",
    "Next.js developer",
    "full-stack developer",
    "automation",
    "MVP development",
    "React developer",
    "TypeScript",
  ],
  authors: [{ name: "Viktor Nagy", url: "https://yourcodingbro.com" }],
  creator: "Viktor Nagy",
  openGraph: {
    title: "YourCodingBro — Expert Dev, Fast Delivery",
    description:
      "Clean code, on-time delivery, and real results. Your dedicated development partner for web apps, automation, and MVPs.",
    url: "https://yourcodingbro.com",
    siteName: "YourCodingBro",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YourCodingBro — Expert Dev, Fast Delivery",
    description:
      "Clean code, on-time delivery, and real results. Your dedicated development partner for web apps, automation, and MVPs.",
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
    canonical: "https://yourcodingbro.com",
  },
};

const personSchema: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Viktor Nagy",
  url: "https://yourcodingbro.com",
  jobTitle: "Freelance Full-Stack Developer",
  description:
    "Freelance developer specialising in web apps, automation, and MVPs. Clean code, fast delivery, real results.",
  sameAs: [
    "https://www.linkedin.com/in/viktornagy97",
    "https://github.com/kmpizmad",
  ],
};

const websiteSchema: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "YourCodingBro",
  url: "https://yourcodingbro.com",
  description:
    "YourCodingBro — Expert freelance development. Web apps, automation, and MVPs delivered fast.",
};

export default async function Home() {
  const t = await getTranslations("pages.homepage.sectionDividers");

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
        <Contact />
      </main>
      {process.env.CONTACT_EMAIL && (
        <Footer contactEmail={process.env.CONTACT_EMAIL} />
      )}
    </>
  );
}
