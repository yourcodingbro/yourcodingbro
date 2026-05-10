"use client";

import cn from "classnames";
import { X, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ButtonLink } from "@/components/ui/button";
import { typeStyle, statusStyle } from "@/components/cards/PortfolioCard";
import type { PortfolioItem } from "@/lib/constants/portfolio";

interface Props {
  item: PortfolioItem | null;
  onClose: () => void;
}

export default function PortfolioModal({ item, onClose }: Props) {
  return (
    <Dialog
      open={item !== null}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent
        showCloseButton={false}
        className="max-w-xl p-0 gap-0 overflow-hidden bg-bg border-line rounded-2xl max-h-[90vh] flex flex-col sm:max-w-xl"
      >
        {item && (
          <>
            <DialogClose className="absolute top-3 right-3 z-10 w-8 h-8 rounded-lg bg-bg/80 backdrop-blur-sm border border-line flex items-center justify-center text-fg-3 hover:text-fg transition-colors">
              <X className="w-4 h-4" />
              <span className="sr-only">Close</span>
            </DialogClose>

            <div
              className={cn(
                "w-full aspect-video bg-gradient-to-br shrink-0",
                item.gradient
              )}
            />

            <div className="p-6 overflow-y-auto flex flex-col gap-5">
              <DialogHeader>
                <DialogTitle className="text-fg font-bold text-xl">
                  {item.title}
                </DialogTitle>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span
                    className={cn(
                      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
                      typeStyle[item.type]
                    )}
                  >
                    {item.type}
                  </span>
                  <span
                    className={cn(
                      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
                      statusStyle[item.status]
                    )}
                  >
                    {item.status}
                  </span>
                </div>
              </DialogHeader>

              <p className="text-fg-2 text-sm leading-relaxed">
                {item.description}
              </p>

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
      </DialogContent>
    </Dialog>
  );
}
