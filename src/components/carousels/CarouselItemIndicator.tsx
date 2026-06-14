"use client";

import { CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export type CarouselItemIndicatorType = {
  api: CarouselApi;
  images: unknown[];
  selectedIndex: number;
};

export default function CarouselItemIndicator({
  api,
  images,
  selectedIndex,
}: CarouselItemIndicatorType) {
  return (
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 rounded-full bg-elevated p-1.5">
      {images.map((_, i) => (
        <button
          key={i}
          onClick={() => api?.scrollTo(i)}
          aria-label={`Go to image ${i + 1}`}
          className={cn(
            "cursor-pointer rounded-full transition-all duration-200",
            i === selectedIndex
              ? "w-4 h-1.5 bg-accent dark:bg-white"
              : "w-1.5 h-1.5 bg-fg-4 hover:bg-fg-3"
          )}
        />
      ))}
    </div>
  );
}
