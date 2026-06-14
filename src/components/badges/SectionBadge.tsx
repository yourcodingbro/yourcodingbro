import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type SectionBadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionBadge({
  children,
  className,
}: SectionBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "h-auto gap-2 px-3 py-1.5 rounded-full bg-elevated border-line text-accent font-medium text-xs",
        className
      )}
    >
      {children}
    </Badge>
  );
}
