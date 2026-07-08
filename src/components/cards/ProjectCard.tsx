"use client";

import Image from "next/image";
import { Boxes } from "lucide-react";
import cn from "classnames";
import { Button } from "@/components/ui/button";
import type { Project, ProjectType, ProjectStatus } from "@/types/project";

export const typeStyle: Record<ProjectType, string> = {
  "App Development": "bg-brand/10 text-brand border-brand/25",
  Automation: "bg-violet/10 text-violet border-violet/25",
  "UI/UX Design": "bg-accent/10 text-accent border-accent/25",
  Optimization: "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
  SaaS: "bg-orange-400/10 text-orange-400 border-orange-400/25",
  Integration: "bg-pink-500/10 text-pink-400 border-pink-500/25",
};

export const statusStyle: Record<ProjectStatus, string> = {
  Live: "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
  Offline: "bg-fg-4/10 text-fg-4 border-line",
  "In Progress": "bg-amber-400/10 text-amber-400 border-amber-400/25",
};

export type ProjectCardProps = {
  item: Project;
  onClick: () => void;
};

export default function ProjectCard({ item, onClick }: ProjectCardProps) {
  return (
    <Button
      data-card
      variant="ghost"
      onClick={onClick}
      className="border border-elevated rounded-2xl overflow-hidden flex flex-col items-start justify-start text-left w-full h-auto p-0 gap-0 whitespace-normal active:not-aria-[haspopup]:translate-y-0 group transition-all duration-300"
    >
      <div className="relative w-full aspect-video shrink-0">
        <div className="absolute inset-0 z-10 transition-colors duration-300 bg-black/20 group-hover:bg-transparent" />
        {item.has_image ? (
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            sizes="350px"
            className="object-cover"
          />
        ) : (
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br flex items-center justify-center",
              item.thumbnail
            )}
          >
            <Boxes className="w-8 h-8 transition-colors duration-300 text-white/30 group-hover:text-white/60" />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 p-5 w-full rounded-b-2xl transition-colors duration-300 hover:bg-elevated/50">
        <h3 className="text-base font-semibold leading-snug text-fg">
          {item.title}
        </h3>

        <div className="flex flex-wrap gap-1.5">
          {item.type.map((t) => (
            <span
              key={t}
              className={cn(
                "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border",
                typeStyle[t]
              )}
            >
              {t}
            </span>
          ))}
          <span
            className={cn(
              "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border",
              statusStyle[item.status]
            )}
          >
            {item.status}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-fg-3 line-clamp-2">
          {item.short_desc}
        </p>
      </div>
    </Button>
  );
}
