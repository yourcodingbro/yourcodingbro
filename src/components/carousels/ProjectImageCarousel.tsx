"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import cn from "classnames";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ItemIndicator } from "@/components/carousels/ItemIndicator";

export type ProjectImageCarouselProps = {
  thumbnail: string;
  hasImage: boolean;
  images: string[];
  title: string;
};

export default function ProjectImageCarousel({
  thumbnail,
  hasImage,
  images,
  title,
}: ProjectImageCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const allImages: (string | null)[] = [hasImage ? thumbnail : null, ...images];
  const total = allImages.length;

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => setSelectedIndex(api.selectedScrollSnap());

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <div className="relative w-full aspect-video shrink-0 overflow-hidden">
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true }}
        className="w-full h-full"
      >
        <CarouselContent className="ml-0 h-full">
          {allImages.map((src, i) => (
            <CarouselItem key={i} className="pl-0">
              <div className="relative aspect-video">
                <ImageOrGradient
                  src={src}
                  gradient={thumbnail}
                  alt={i === 0 ? title : `${title} screenshot ${i}`}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {total > 1 && (
          <>
            <CarouselPrevious
              size="lg"
              variant="secondary"
              className="left-2"
            />
            <CarouselNext size="lg" variant="secondary" className="right-2" />
            <ItemIndicator
              api={api}
              images={allImages}
              selectedIndex={selectedIndex}
            />
          </>
        )}
      </Carousel>
    </div>
  );
}

function ImageOrGradient({
  src,
  gradient,
  alt,
}: {
  src: string | null;
  gradient: string;
  alt: string;
}) {
  if (src) return <Image src={src} alt={alt} fill className="object-cover" />;
  return <div className={cn("absolute inset-0 bg-gradient-to-br", gradient)} />;
}
