"use client";

import { useState, useEffect } from "react";
import cn from "classnames";
import { useTranslations } from "next-intl";
import Section from "@/lib/components/atoms/Section";
import Container from "@/lib/components/atoms/Container";
import Reveal from "@/lib/components/atoms/Reveal";
import SectionBadge from "@/lib/components/badges/SectionBadge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/lib/components/ui/carousel";
import ProjectCard from "@/lib/components/cards/ProjectCard";
import ProjectModal from "@/lib/components/modals/ProjectModal";
import TestimonialCard from "@/lib/components/cards/TestimonialCard";
import { useProjects } from "@/lib/hooks/useProjects";
import type { Project } from "@/types/project";
import { SLOW_STAGGER_REVEAL_DELAY, STAGGER_REVEAL_DELAY } from "@/config";

type TestimonialItem = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  stars: number;
};

export default function PortfolioPage() {
  const tPortfolio = useTranslations("pages.homepage.portfolio");
  const tSocial = useTranslations("pages.homepage.socialProof");
  const testimonials = tSocial.raw("testimonials") as TestimonialItem[];

  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selected, setSelected] = useState<Project | null>(null);
  const { data: projects = [], isLoading, isError } = useProjects();

  useEffect(() => {
    if (!api) return;
    const handleSelect = () => setSelectedIndex(api.selectedScrollSnap());
    api.on("select", handleSelect);
    return () => { api.off("select", handleSelect); };
  }, [api]);

  return (
    <>
      {/* Hero */}
      <Section depth="circles" depthColor="bg-violet/15">
        <Container>
          <Reveal className="pt-8 sm:pt-12 pb-4">
            <SectionBadge>Portfolio</SectionBadge>
            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-fg">
              {tPortfolio("title")}
              <span className="gradient-text">{tPortfolio("titleHighlight")}</span>
            </h1>
            <p className="mt-4 text-fg-3 text-base sm:text-lg max-w-2xl">
              {tPortfolio("description")}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Projects carousel */}
      <Section>
        <Container>
          <Carousel setApi={setApi} opts={{ align: "start", loop: false }}>
            <Reveal delay={SLOW_STAGGER_REVEAL_DELAY}>
              {isError ? (
                <p className="py-12 text-sm text-center text-fg-4">
                  {tPortfolio("error")}
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
                        <ProjectCard item={item} onClick={() => setSelected(item)} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  <div className="flex gap-2 justify-center items-center mt-5">
                    {(api?.scrollSnapList() ?? []).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => api?.scrollTo(i)}
                        aria-label={tPortfolio("goToSlide", { number: i + 1 })}
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
                    <CarouselPrevious size="icon" className="static translate-x-0 translate-y-0" />
                    <CarouselNext size="icon" className="static translate-x-0 translate-y-0" />
                  </div>
                </>
              )}
            </Reveal>
          </Carousel>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section>
        <Container>
          <Reveal className="mb-8 sm:mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-fg">
              {tSocial("title")}
              <span className="gradient-text">{tSocial("titleHighlight")}</span>
            </h2>
            <p className="mt-3 text-fg-3 max-w-2xl text-base sm:text-lg">
              {tSocial("description")}
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {testimonials.map((item, i) => (
              <Reveal key={item.author} delay={i * STAGGER_REVEAL_DELAY}>
                <TestimonialCard {...item} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <ProjectModal item={selected} onClose={() => setSelected(null)} />
    </>
  );
}
