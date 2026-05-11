"use client";

import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const VISIBLE_COUNT = 4;

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  accent: string;
  expanded: boolean;
  onToggle: () => void;
}

export default function ServiceCard({
  icon,
  title,
  tagline,
  description,
  bullets,
  accent,
  expanded,
  onToggle,
}: ServiceCardProps) {
  const initial = bullets.slice(0, VISIBLE_COUNT);
  const extra = bullets.slice(VISIBLE_COUNT);
  const hasMore = extra.length > 0;

  return (
    <div className="gradient-border rounded-2xl p-7 flex flex-col hover:bg-elevated/50 transition-all duration-300">
      <div
        className={cn(
          "inline-flex p-3 rounded-xl bg-gradient-to-br mb-5 self-start",
          accent
        )}
      >
        <div className="text-white">{icon}</div>
      </div>

      <h3 className="text-fg font-bold text-xl mb-1">{title}</h3>
      <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">
        {tagline}
      </p>

      <p className="text-fg-3 text-sm leading-relaxed mb-6">{description}</p>

      <ul className="flex flex-col gap-2.5">
        {initial.map((b) => (
          <li key={b} className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <span className="text-fg-2 text-sm">{b}</span>
          </li>
        ))}

        <AnimatePresence initial={false}>
          {expanded &&
            extra.map((b, i) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 10 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.2, delay: i * 0.04, ease: "easeOut" }}
                className="flex items-start gap-2.5 overflow-hidden"
              >
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-fg-2 text-sm">{b}</span>
              </motion.li>
            ))}
        </AnimatePresence>
      </ul>

      {hasMore && (
        <div className="pt-8">
          <Button
            size="lg"
            icon={
              expanded ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )
            }
            iconPosition="after"
            className="w-full"
            onClick={onToggle}
          >
            {expanded ? "Show less" : "See more"}
          </Button>
        </div>
      )}
    </div>
  );
}
