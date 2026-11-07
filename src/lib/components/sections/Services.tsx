"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Section, { SectionProps } from "@/lib/components/atoms/Section";
import Container from "@/lib/components/atoms/Container";
import ServiceCard from "@/lib/components/cards/ServiceCard";
import Reveal from "@/lib/components/atoms/Reveal";
import { serviceVisuals } from "@/data/services";
import { SLOW_STAGGER_REVEAL_DELAY } from "@/config";

export type ServicesProps = SectionProps;

type ServiceItem = {
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
};

export default function Services({ ...props }: ServicesProps) {
  const t = useTranslations("pages.homepage.services");
  const items = t.raw("items") as ServiceItem[];
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) =>
    setExpandedIndex((prev) => (prev === index ? null : index));

  return (
    <Section id="services" {...props}>
      <Container>
        {/* Header */}
        <Reveal className="text-center mb-8 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-fg mb-4 tracking-tight">
            {t("title")}
            <span className="gradient-text">{t("titleHighlight")}</span>
          </h2>
          <p className="text-fg-3 max-w-2xl mx-auto text-base sm:text-lg">
            {t("description")}
          </p>
        </Reveal>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-start">
          {items.map((item, i) => {
            const ServiceIcon = serviceVisuals[i].icon;
            const serviceAccent = serviceVisuals[i].accent;

            return (
              <Reveal
                key={item.title}
                delay={(i + 1) * SLOW_STAGGER_REVEAL_DELAY}
              >
                <ServiceCard
                  {...item}
                  icon={<ServiceIcon className="w-7 h-7" />}
                  accent={serviceAccent}
                  expanded={expandedIndex === i}
                  onToggle={() => handleToggle(i)}
                />
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

// Sections részt húzzuk be a layout alá, vagy valahogy jelöljük hogy ez a főoldalhoz tartozik csak
// Az aloldalaknak külön komponenst csináljunk
