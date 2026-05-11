"use client";

import Image from "next/image";
import cn from "classnames";
import { ExternalLink } from "lucide-react";
import Modal from "@/components/modals/Modal";
import { ButtonLink } from "@/components/ui/button";
import { typeStyle, statusStyle } from "@/components/cards/PortfolioCard";
import type { PortfolioItem } from "@/types/portfolio";

type Props = {
  item: PortfolioItem | null;
  onClose: () => void;
};

export default function PortfolioModal({ item, onClose }: Props) {
  return (
    <Modal open={item !== null} onClose={onClose}>
      {item && (
        <>
          <div className="relative w-full aspect-video shrink-0">
            {item.hasImage ? (
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className="object-cover"
              />
            ) : (
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br",
                  item.thumbnail
                )}
              />
            )}
          </div>

          <div className="p-6 overflow-y-auto flex flex-col gap-5">
            <div>
              <h2 className="text-fg font-bold text-xl mb-3">{item.title}</h2>
              <div className="flex flex-wrap gap-2">
                {item.type.map((t) => (
                  <span
                    key={t}
                    className={cn(
                      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
                      typeStyle[t]
                    )}
                  >
                    {t}
                  </span>
                ))}
                <span
                  className={cn(
                    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
                    statusStyle[item.status]
                  )}
                >
                  {item.status}
                </span>
              </div>
            </div>

            <p className="text-fg-2 text-sm leading-relaxed">{item.description}</p>

            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-elevated border border-line text-fg-3 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {item.link && (
              <ButtonLink
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                icon={<ExternalLink className="w-4 h-4" />}
                iconPosition="after"
                className="self-start bg-brand text-white hover:bg-brand-hover glow-blue"
              >
                Visit Project
              </ButtonLink>
            )}
          </div>
        </>
      )}
    </Modal>
  );
}
