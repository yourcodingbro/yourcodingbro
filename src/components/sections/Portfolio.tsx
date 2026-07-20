"use client";

import { useState, useEffect } from "react";
import cn from "classnames";
import { useTranslations } from "next-intl";
import Section, { SectionProps } from "@/components/atoms/Section";
import Container from "@/components/atoms/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import ProjectCard from "@/components/cards/ProjectCard";
import ProjectModal from "@/components/modals/ProjectModal";
import Reveal from "@/components/atoms/Reveal";
import { useProjects } from "@/hooks/useProjects";
import type { Project } from "@/types/project";
import { SLOW_STAGGER_REVEAL_DELAY } from "@/lib/constants/globals";

export type PortfolioProps = SectionProps;

export default function Portfolio({ ...props }: PortfolioProps) {
  const t = useTranslations("pages.homepage.portfolio");
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selected, setSelected] = useState<Project | null>(null);
  const { data: projects = [], isLoading, isError } = useProjects();

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => setSelectedIndex(api.selectedScrollSnap());

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <Section id="portfolio" {...props}>
      <Container>
        <Carousel setApi={setApi} opts={{ align: "start", loop: false }}>
          {/* Header */}
          <Reveal className="flex justify-between items-center mb-8 sm:mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-fg mb-2">
                {t("title")}
                <span className="gradient-text">{t("titleHighlight")}</span>
              </h2>
              <p className="text-fg-3 max-w-2xl text-base sm:text-lg">
                {t("description")}
              </p>
            </div>

            <div className="hidden gap-2 items-center mb-1 ml-6 sm:flex shrink-0">
              <CarouselPrevious
                size="icon"
                className="static translate-x-0 translate-y-0"
              />
              <CarouselNext
                size="icon"
                className="static translate-x-0 translate-y-0"
              />
            </div>
          </Reveal>

          <Reveal delay={SLOW_STAGGER_REVEAL_DELAY}>
            {isError ? (
              <p className="py-12 text-sm text-center text-fg-4">
                {t("error")}
              </p>
            ) : isLoading ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-2xl animate-pulse gradient-border"
                  >
                    <div className="aspect-video bg-elevated" />
                    <div className="flex flex-col gap-3 p-5">
                      <div className="w-3/4 h-4 rounded bg-elevated" />
                      <div className="w-1/2 h-3 rounded bg-elevated" />
                      <div className="w-full h-3 rounded bg-elevated" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <CarouselContent className="-ml-5">
                  {projects.map((item) => (
                    <CarouselItem
                      key={item.id}
                      className="pl-5 basis-[85%] sm:basis-1/2 lg:basis-1/3"
                    >
                      <ProjectCard
                        item={item}
                        onClick={() => setSelected(item)}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <div className="flex gap-2 justify-center items-center mt-5">
                  {(api?.scrollSnapList() ?? []).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => api?.scrollTo(i)}
                      aria-label={t("goToSlide", { number: i + 1 })}
                      className={cn(
                        "rounded-full transition-all duration-200",
                        i === selectedIndex
                          ? "w-5 h-1.5 bg-accent"
                          : "w-1.5 h-1.5 bg-line hover:bg-fg-4"
                      )}
                    />
                  ))}
                </div>

                <div className="flex gap-3 justify-center items-center mt-4 sm:hidden">
                  <CarouselPrevious
                    size="icon"
                    className="static translate-x-0 translate-y-0"
                  />
                  <CarouselNext
                    size="icon"
                    className="static translate-x-0 translate-y-0"
                  />
                </div>
              </>
            )}
          </Reveal>
        </Carousel>
      </Container>

      <ProjectModal item={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
