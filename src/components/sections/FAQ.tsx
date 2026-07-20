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

        <Accordion>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            {[
              items.slice(0, Math.ceil(items.length / 2)),
              items.slice(Math.ceil(items.length / 2)),
            ].map((col, colIdx) => (
              <div
                key={`faq-col-${colIdx}`}
                className="flex flex-col gap-3 md:gap-4 flex-1"
              >
                {col.map((item, rowIdx) => {
                  const idx = colIdx + rowIdx * 2;
                  return (
                    <Reveal
                      key={`faq-row-${idx}`}
                      delay={(idx + 1) * SLOW_STAGGER_REVEAL_DELAY}
                    >
                      <AccordionItem
                        value={`faq-item-${idx}`}
                        className="gradient-border rounded-xl px-6 border-0"
                      >
                        <AccordionTrigger className="text-left text-sm sm:text-base font-medium text-fg hover:no-underline py-3 gap-4">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-fg-3 text-sm leading-relaxed pb-3">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </Reveal>
                  );
                })}
              </div>
            ))}
          </div>
        </Accordion>
      </Container>
    </Section>
  );
}
