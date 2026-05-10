"use client";

import { useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/badges/SectionBadge";
import PortfolioCard from "@/components/cards/PortfolioCard";
import PortfolioModal from "@/components/modals/PortfolioModal";
import { portfolio } from "@/lib/constants/portfolio";
import type { PortfolioItem } from "@/lib/constants/portfolio";

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeDot, setActiveDot] = useState(0);
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  const updateState = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    const card = el.querySelector("[data-card]") as HTMLElement | null;
    const cardWidth = card ? card.offsetWidth + 20 : 0;
    if (cardWidth > 0) setActiveDot(Math.round(el.scrollLeft / cardWidth));
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = containerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]") as HTMLElement | null;
    const amount = card ? card.offsetWidth + 20 : 320;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const scrollToIndex = (i: number) => {
    const el = containerRef.current;
    const card = el?.querySelector("[data-card]") as HTMLElement | null;
    if (!el || !card) return;
    el.scrollTo({ left: i * (card.offsetWidth + 20), behavior: "smooth" });
  };

  return (
    <section id="portfolio" className="py-12 sm:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8 sm:mb-12">
          <div>
            <SectionBadge className="mb-4">Selected Work</SectionBadge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-fg tracking-tight">
              Projects that{" "}
              <span className="gradient-text">shipped.</span>
            </h2>
          </div>

          <div className="hidden sm:flex items-center gap-2 shrink-0 ml-6 mb-1">
            <Button
              variant="outline"
              size="icon"
              icon={<ChevronLeft className="w-4 h-4" />}
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous"
            />
            <Button
              variant="outline"
              size="icon"
              icon={<ChevronRight className="w-4 h-4" />}
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next"
            />
          </div>
        </div>

        <div
          ref={containerRef}
          onScroll={updateState}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {portfolio.map((item) => (
            <div
              key={item.id}
              className="snap-start shrink-0 w-[85vw] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
            >
              <PortfolioCard item={item} onClick={() => setSelected(item)} />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-5">
          {portfolio.map((item, i) => (
            <button
              key={item.id}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to ${item.title}`}
              className={`rounded-full transition-all duration-200 ${
                i === activeDot
                  ? "w-5 h-1.5 bg-accent"
                  : "w-1.5 h-1.5 bg-line hover:bg-fg-4"
              }`}
            />
          ))}
        </div>

        <div className="flex sm:hidden items-center justify-center gap-3 mt-4">
          <Button
            variant="outline"
            size="icon"
            icon={<ChevronLeft className="w-4 h-4" />}
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous"
          />
          <Button
            variant="outline"
            size="icon"
            icon={<ChevronRight className="w-4 h-4" />}
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Next"
          />
        </div>
      </div>

      <PortfolioModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
