import { getTranslations } from "next-intl/server";
import Section, { SectionProps } from "@/components/atoms/Section";
import Container from "@/components/atoms/Container";
import Reveal from "@/components/atoms/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SLOW_STAGGER_REVEAL_DELAY } from "@/lib/constants/globals";

export type FAQProps = SectionProps;

export default async function FAQ({ ...props }: FAQProps) {
  const t = await getTranslations("pages.homepage.faq");
  const items = t.raw("items") as { question: string; answer: string }[];

  return (
    <Section id="faq" {...props}>
      <Container>
        <Reveal className="text-center mb-8 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-fg mb-4 tracking-tight">
            {t("title")}
            <span className="gradient-text">{t("titleHighlight")}</span>
          </h2>
          <p className="text-fg-3 max-w-2xl mx-auto text-base sm:text-lg">
            {t("description")}
          </p>
        </Reveal>

        <Reveal delay={SLOW_STAGGER_REVEAL_DELAY}>
          <Accordion className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {items.map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="gradient-border rounded-xl px-6 border-0"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-medium text-fg hover:no-underline py-3 gap-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-fg-3 text-sm leading-relaxed pb-3">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </Section>
  );
}
