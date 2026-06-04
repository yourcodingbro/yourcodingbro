"use client";

import { CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export type ItemIndicatorType = {
  api: CarouselApi;
  images: unknown[];
  selectedIndex: number;
};

export function ItemIndicator({
  api,
  images,
  selectedIndex,
}: ItemIndicatorType) {
  return (
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 rounded-full bg-elevated/80 p-1.5">
      {images.map((_, i) => (
        <button
          key={i}
          onClick={() => api?.scrollTo(i)}
          aria-label={`Go to image ${i + 1}`}
          className={cn(
            "cursor-pointer rounded-full transition-all duration-200",
            i === selectedIndex
              ? "w-4 h-1.5 bg-white"
              : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
          )}
        />
      ))}
    </div>
  );
}
