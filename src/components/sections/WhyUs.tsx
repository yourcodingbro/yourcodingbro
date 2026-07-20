import { getTranslations } from "next-intl/server";
import Section, { SectionProps } from "@/components/atoms/Section";
import Container from "@/components/atoms/Container";
import Reveal from "@/components/atoms/Reveal";
import { STAGGER_REVEAL_DELAY } from "@/lib/constants/globals";

export type WhyUsProps = SectionProps;

export default async function WhyUs({ ...props }: WhyUsProps) {
  const t = await getTranslations("pages.homepage.whyUs");
  const reasons = t.raw("reasons") as {
    number: string;
    title: string;
    description: string;
  }[];

  return (
    <Section id="why-us" {...props}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-fg mb-5 tracking-tight leading-tight">
              {t("title")}
              <span className="gradient-text">{t("titleHighlight")}</span>
            </h2>
            <p className="text-fg-3 text-base sm:text-lg leading-relaxed">
              {t("description")}
            </p>
          </Reveal>

          <div className="flex flex-col gap-6">
            {reasons.map((r, i) => (
              <Reveal key={r.number} delay={(i + 1) * STAGGER_REVEAL_DELAY}>
                <div className="flex gap-5">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-elevated border border-line flex items-center justify-center group-hover:border-brand/50 transition-colors">
                    <span className="text-xs font-bold text-accent">
                      {r.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-fg font-semibold text-sm sm:text-base mb-1">
                      {r.title}
                    </h3>
                    <p className="text-fg-3 text-sm leading-relaxed">
                      {r.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
