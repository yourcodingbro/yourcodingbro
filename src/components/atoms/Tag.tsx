"use client";

import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type TagProps = {
  label: string;
  className?: string;
  onRemove?: () => void;
};

export default function Tag({ label, className, onRemove }: TagProps) {
  return (
    <Badge
      variant="outline"
      className={cn("gap-1 py-1 pr-1 h-auto text-fg-2", className)}
    >
      {label}
      {onRemove && (
        <span
          role="button"
          tabIndex={0}
          aria-label={`Remove ${label}`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onRemove();
          }}
          onPointerDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              e.stopPropagation();
              onRemove();
            }
          }}
          className="flex size-4 cursor-pointer items-center justify-center rounded-full text-fg-3 transition-colors hover:text-destructive"
        >
          <X className="size-3" />
        </span>
      )}
    </Badge>
  );
}
