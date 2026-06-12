"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Section, { SectionProps } from "@/components/atoms/Section";
import Container from "@/components/atoms/Container";
import ServiceCard from "@/components/cards/ServiceCard";
import { serviceVisuals } from "@/lib/constants/services";

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
        <div className="text-center mb-8 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-fg mb-4 tracking-tight">
            {t("title")}
            <span className="gradient-text">{t("titleHighlight")}</span>
          </h2>
          <p className="text-fg-3 max-w-2xl mx-auto text-base sm:text-lg">
            {t("description")}
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-start">
          {items.map((item, i) => (
            <ServiceCard
              key={item.title}
              {...item}
              {...serviceVisuals[i]}
              expanded={expandedIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
