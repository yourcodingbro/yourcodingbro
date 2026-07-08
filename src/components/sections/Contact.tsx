"use client";

import SectionBadge from "@/components/badges/SectionBadge";
import ContactForm from "@/components/forms/ContactForm";
import { useTranslations } from "next-intl";

const RESPONSE_HOURS = 48;

type Perk = {
  id: string;
  icon: string;
  text: string;
};

export default function Contact() {
  const t = useTranslations("pages.homepage.contact");
  const perks = t.raw("perks") as Perk[];

  return (
    <section id="contact" className="py-12 sm:py-20 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — copy */}
          <div>
            <SectionBadge className="mb-5">{t("badge")}</SectionBadge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-fg mb-5 tracking-tight leading-tight">
              <div>{t("title")}</div>
              <div className="gradient-text">{t("titleHighlight")}</div>
            </h2>
            <p className="text-fg-3 text-base sm:text-lg leading-relaxed mb-8">
              {t("description", { hours: RESPONSE_HOURS })}
            </p>

            <div className="flex flex-col gap-4">
              {perks.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-fg-2 text-sm">{getPerkText(item)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function getPerkText(perk: Perk) {
  if (perk.id === "responseTime") {
    return perk.text.replace("{hours}", String(RESPONSE_HOURS));
  }

  return perk.text;
}
