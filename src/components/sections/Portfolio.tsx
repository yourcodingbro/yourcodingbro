"use client";

import { useState, useEffect } from "react";
import cn from "classnames";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import SectionBadgeDivider from "@/components/badges/SectionBadgeDivider";
import PortfolioCard from "@/components/cards/PortfolioCard";
import PortfolioModal from "@/components/modals/PortfolioModal";
import { portfolio } from "@/lib/constants/portfolio";
import type { PortfolioItem } from "@/lib/constants/portfolio";

export default function Portfolio() {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => setSelectedIndex(api.selectedScrollSnap());

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <section id="portfolio" className="py-12 sm:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel setApi={setApi} opts={{ align: "start", loop: false }}>
          <SectionBadgeDivider>Results</SectionBadgeDivider>

          {/* Header */}
          <div className="flex items-end justify-between mb-8 sm:mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-fg tracking-tight">
                Projects that <span className="gradient-text">shipped.</span>
              </h2>
            </div>

            {/* Desktop arrows — pulled out of the default absolute positioning */}
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

          {/* Slides */}
          <CarouselContent className="-ml-5">
            {portfolio.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-5 basis-[85%] sm:basis-1/2 lg:basis-1/3"
              >
                <PortfolioCard item={item} onClick={() => setSelected(item)} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Dots */}
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

          {/* Mobile arrows */}
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
        </Carousel>
      </div>

      <PortfolioModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
