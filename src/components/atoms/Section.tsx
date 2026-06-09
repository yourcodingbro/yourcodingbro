import { DetailedHTMLProps, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type SectionProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> &
  (
    | { depth?: never; depthColor?: never }
    | { depth: "row" | "circles"; depthColor: string }
  );

export default function Section({
  children,
  className,
  depth,
  depthColor,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-12 sm:py-20 relative", className)} {...props}>
      {depth === "row" && (
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-b from-transparent to-transparent pointer-events-none",
            depthColor
          )}
        />
      )}
      {depth === "circles" && (
        <>
          <div
            className={cn(
              "absolute -left-32 top-1/4 w-64 h-64 rounded-full blur-3xl pointer-events-none",
              depthColor
            )}
          />
          <div
            className={cn(
              "absolute -right-32 bottom-1/4 w-64 h-64 rounded-full blur-3xl pointer-events-none",
              depthColor
            )}
          />
        </>
      )}
      {children}
    </section>
  );
}
