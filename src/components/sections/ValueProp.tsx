"use client";

import {
  Zap,
  Code2,
  Smartphone,
  ShieldCheck,
  BarChart3,
  MessageCircle,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Section, { SectionProps } from "@/components/atoms/Section";
import Container from "@/components/atoms/Container";
import ValueCard from "@/components/cards/ValueCard";

const valueVisuals = [
  {
    icon: <Zap className="w-6 h-6" />,
    accent: "from-brand to-accent",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    accent: "from-violet to-brand",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    accent: "from-accent to-violet",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    accent: "from-brand to-violet",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    accent: "from-accent to-brand",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    accent: "from-violet to-accent",
  },
];

export type ValuePropProps = SectionProps;

export default function ValueProp({ ...props }: ValuePropProps) {
  const t = useTranslations("pages.homepage.valueProp");
  const values = t.raw("values") as { title: string; description: string }[];

  return (
    <Section id="value-prop" {...props}>
      <Container>
        <div className="text-center mb-8 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-fg mb-4 tracking-tight">
            {t("title")}
            <span className="gradient-text">{t("titleHighlight")}</span>
          </h2>
          <p className="text-fg-3 max-w-2xl mx-auto text-base sm:text-lg">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-14 sm:mb-20">
          {values.map((value, i) => (
            <ValueCard key={value.title} {...value} {...valueVisuals[i]} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
