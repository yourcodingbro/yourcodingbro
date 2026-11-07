import { getTranslations } from "next-intl/server";
import Section from "@/lib/components/atoms/Section";
import Container from "@/lib/components/atoms/Container";
import Reveal from "@/lib/components/atoms/Reveal";
import SectionBadge from "@/lib/components/badges/SectionBadge";
import ValueCard from "@/lib/components/cards/ValueCard";
import {
  Zap,
  Code2,
  Smartphone,
  Shield,
  Layers,
  MessageCircle,
} from "lucide-react";
import { STAGGER_REVEAL_DELAY } from "@/config";

const VALUES = [
  { icon: Zap, accent: "from-brand to-violet" },
  { icon: Code2, accent: "from-brand to-accent" },
  { icon: Smartphone, accent: "from-violet to-accent" },
  { icon: Shield, accent: "from-brand to-violet" },
  { icon: Layers, accent: "from-accent to-brand" },
  { icon: MessageCircle, accent: "from-violet to-brand" },
];

export default async function AboutPage() {
  const t = await getTranslations("pages.homepage");
  const reasons = t.raw("whyUs.reasons") as {
    number: string;
    title: string;
    description: string;
  }[];
  const values = t.raw("valueProp.values") as {
    title: string;
    description: string;
  }[];

  return (
    <>
      {/* Hero */}
      <Section depth="circles" depthColor="bg-violet/15">
        <Container>
          <Reveal className="pt-8 sm:pt-12 pb-4">
            <SectionBadge>About me</SectionBadge>
            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-fg">
              {t("whyUs.title")}
              <span className="gradient-text">{t("whyUs.titleHighlight")}</span>
            </h1>
            <p className="mt-4 text-fg-3 text-base sm:text-lg max-w-2xl">
              {t("whyUs.description")}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Reasons */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <Reveal key={r.number} delay={i * STAGGER_REVEAL_DELAY}>
                <div className="gradient-border rounded-2xl p-7 h-full">
                  <span className="text-accent text-sm font-mono font-bold">
                    {r.number}
                  </span>
                  <h2 className="mt-2 text-fg font-bold text-xl mb-3">
                    {r.title}
                  </h2>
                  <p className="text-fg-3 text-sm leading-relaxed">
                    {r.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section>
        <Container>
          <Reveal className="mb-8 sm:mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-fg">
              {t("valueProp.title")}
              <span className="gradient-text">
                {t("valueProp.titleHighlight")}
              </span>
            </h2>
            <p className="mt-3 text-fg-3 max-w-2xl text-base sm:text-lg">
              {t("valueProp.description")}
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value, i) => {
              const { icon: Icon, accent } = VALUES[i];

              return (
                <Reveal key={value.title} delay={i * STAGGER_REVEAL_DELAY}>
                  <ValueCard
                    icon={<Icon className="w-5 h-5" />}
                    title={value.title}
                    description={value.description}
                    accent={accent}
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
