"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import cn from "classnames";
import { ButtonLink } from "@/components/ui/button";
import { typeStyle, statusStyle } from "@/components/cards/PortfolioCard";
import type { PortfolioItem } from "@/lib/constants/portfolio";

interface Props {
  item: PortfolioItem | null;
  onClose: () => void;
}

export default function PortfolioModal({ item, onClose }: Props) {
  useEffect(() => {
    if (!item) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          <motion.div
            key="panel"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-xl bg-bg border border-line rounded-2xl overflow-hidden pointer-events-auto max-h-[90vh] flex flex-col">
              <button
                onClick={onClose}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-lg bg-bg/80 backdrop-blur-sm border border-line flex items-center justify-center text-fg-3 hover:text-fg transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div
                className={cn(
                  "w-full aspect-video bg-gradient-to-br shrink-0",
                  item.gradient
                )}
              />

              <div className="p-6 overflow-y-auto flex flex-col gap-5">
                <div>
                  <h2 className="text-fg font-bold text-xl mb-3">{item.title}</h2>
                  <div className="flex flex-wrap gap-2">
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
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
