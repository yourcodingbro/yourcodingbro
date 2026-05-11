"use client";

import { ExternalLink } from "lucide-react";
import cn from "classnames";
import { Button } from "@/components/ui/button";
import type {
  PortfolioItem,
  ProjectType,
  ProjectStatus,
} from "@/lib/constants/portfolio";

export const typeStyle: Record<ProjectType, string> = {
  "App Development": "bg-brand/10 text-brand border-brand/25",
  Automation: "bg-violet/10 text-violet border-violet/25",
  "Web Design": "bg-accent/10 text-accent border-accent/25",
  Optimisation: "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
  SaaS: "bg-orange-400/10 text-orange-400 border-orange-400/25",
  Integration: "bg-pink-500/10 text-pink-400 border-pink-500/25",
};

export const statusStyle: Record<ProjectStatus, string> = {
  Live: "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
  Offline: "bg-fg-4/10 text-fg-4 border-line",
  "In Progress": "bg-amber-400/10 text-amber-400 border-amber-400/25",
  "Case Study": "bg-brand/10 text-brand border-brand/25",
};

interface Props {
  item: PortfolioItem;
  onClick: () => void;
}

export default function PortfolioCard({ item, onClick }: Props) {
  return (
    <Button
      data-card
      variant="ghost"
      onClick={onClick}
      className="gradient-border rounded-2xl overflow-hidden flex flex-col items-start justify-start text-left w-full h-auto p-0 gap-0 whitespace-normal [background-clip:border-box] active:not-aria-[haspopup]:translate-y-0 group hover:bg-elevated/50 transition-all duration-300"
    >
      <div
        className={cn(
          "w-full aspect-video bg-gradient-to-br flex items-center justify-center shrink-0",
          item.gradient
        )}
      >
        <ExternalLink className="w-8 h-8 text-white/30 group-hover:text-white/60 transition-colors duration-300" />
      </div>

      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-fg font-semibold text-base leading-snug">
          {item.title}
        </h3>

        <div className="flex flex-wrap gap-1.5">
          <span
            className={cn(
              "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border",
              typeStyle[item.type]
            )}
          >
            {item.type}
          </span>
          <span
            className={cn(
              "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border",
              statusStyle[item.status]
            )}
          >
            {item.status}
          </span>
        </div>

        <p className="text-fg-3 text-sm leading-relaxed line-clamp-2">
          {item.shortDescription}
        </p>
      </div>
    </Button>
  );
}
