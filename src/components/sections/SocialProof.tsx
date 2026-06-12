import { getTranslations } from "next-intl/server";
import Section, { SectionProps } from "@/components/atoms/Section";
import Container from "@/components/atoms/Container";
import TestimonialCard from "@/components/cards/TestimonialCard";
import type { Testimonial } from "@/types/testimonial";
import { cn } from "@/lib/utils";

export type SocialProofProps = SectionProps;

export default async function SocialProof({
  className,
  ...props
}: SocialProofProps) {
  const t = await getTranslations("pages.homepage.socialProof");
  const stats = t.raw("stats") as { value: string; label: string }[];
  const testimonials = t.raw("testimonials") as Testimonial[];

  return (
    <Section
      id="testimonials"
      className={cn("overflow-hidden w-full", className)}
      {...props}
    >
      <Container>
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-fg mb-4 tracking-tight">
            {t("title")}
            <span className="gradient-text">{t("titleHighlight")}</span>
          </h2>
          <p className="text-fg-3 max-w-xl mx-auto text-base sm:text-lg">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-line rounded-2xl overflow-hidden mb-8 sm:mb-14">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-surface px-6 py-6 sm:py-8 text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm text-fg-4">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {testimonials.map((testimonialProps) => (
            <TestimonialCard
              key={testimonialProps.author}
              {...testimonialProps}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
