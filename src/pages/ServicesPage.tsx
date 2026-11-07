"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Section from "@/lib/components/atoms/Section";
import Container from "@/lib/components/atoms/Container";
import ServiceCard from "@/lib/components/cards/ServiceCard";
import Reveal from "@/lib/components/atoms/Reveal";
import SectionBadge from "@/lib/components/badges/SectionBadge";
import { serviceVisuals } from "@/data/services";
import { SLOW_STAGGER_REVEAL_DELAY } from "@/config";

type ServiceItem = {
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
};

export default function ServicesPage() {
  const t = useTranslations("pages.homepage.services");
  const items = t.raw("items") as ServiceItem[];
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) =>
    setExpandedIndex((prev) => (prev === index ? null : index));

  return (
    <>
      {/* Hero */}
      <Section depth="circles" depthColor="bg-accent/5">
        <Container>
          <Reveal className="pt-8 sm:pt-12 pb-4">
            <SectionBadge>Services</SectionBadge>
            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-fg">
              {t("title")}
              <span className="gradient-text">{t("titleHighlight")}</span>
            </h1>
            <p className="mt-4 text-fg-3 text-base sm:text-lg max-w-2xl">
              {t("description")}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Service cards */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-start">
            {items.map((item, i) => {
              const ServiceIcon = serviceVisuals[i].icon;
              return (
                <Reveal key={item.title} delay={(i + 1) * SLOW_STAGGER_REVEAL_DELAY}>
                  <ServiceCard
                    {...item}
                    icon={<ServiceIcon className="w-7 h-7" />}
                    accent={serviceVisuals[i].accent}
                    expanded={expandedIndex === i}
                    onToggle={() => handleToggle(i)}
                  />
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
