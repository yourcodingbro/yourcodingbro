"use client";

import { useState, useEffect } from "react";
import cn from "classnames";
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
import PortfolioCard from "@/components/cards/PortfolioCard";
import PortfolioModal from "@/components/modals/PortfolioModal";
import { useProjects } from "@/hooks/useProjects";
import type { PortfolioItem } from "@/types/project";

export type PortfolioProps = SectionProps;

export default function Portfolio({ ...props }: PortfolioProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selected, setSelected] = useState<PortfolioItem | null>(null);
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
          <div className="flex items-end justify-between mb-8 sm:mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-fg tracking-tight">
                Projects that <span className="gradient-text">shipped.</span>
              </h2>
            </div>

            <div className="hidden sm:flex items-center gap-2 shrink-0 ml-6 mb-1">
              <CarouselPrevious
                size="icon"
                className="static translate-y-0 translate-x-0"
              />
              <CarouselNext
                size="icon"
                className="static translate-y-0 translate-x-0"
              />
            </div>
          </div>

          {isError ? (
            <p className="text-fg-4 text-sm text-center py-12">
              Could not load projects. Please try again later.
            </p>
          ) : isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="gradient-border rounded-2xl overflow-hidden animate-pulse"
                >
                  <div className="aspect-video bg-elevated" />
                  <div className="p-5 flex flex-col gap-3">
                    <div className="h-4 bg-elevated rounded w-3/4" />
                    <div className="h-3 bg-elevated rounded w-1/2" />
                    <div className="h-3 bg-elevated rounded w-full" />
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
                    <PortfolioCard
                      item={item}
                      onClick={() => setSelected(item)}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="flex items-center justify-center gap-2 mt-5">
                {(api?.scrollSnapList() ?? []).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => api?.scrollTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={cn(
                      "rounded-full transition-all duration-200",
                      i === selectedIndex
                        ? "w-5 h-1.5 bg-accent"
                        : "w-1.5 h-1.5 bg-line hover:bg-fg-4"
                    )}
                  />
                ))}
              </div>

              <div className="flex sm:hidden items-center justify-center gap-3 mt-4">
                <CarouselPrevious
                  size="icon"
                  className="static translate-y-0 translate-x-0"
                />
                <CarouselNext
                  size="icon"
                  className="static translate-y-0 translate-x-0"
                />
              </div>
            </>
          )}
        </Carousel>
      </Container>

      <PortfolioModal item={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
