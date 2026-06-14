"use client";

import * as CookieConsent from "vanilla-cookieconsent";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type CookiePreferencesButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function CookiePreferencesButton({
  children,
  className,
}: CookiePreferencesButtonProps) {
  return (
    <Button
      type="button"
      variant="link"
      onClick={() => CookieConsent.showPreferences()}
      className={cn(
        "p-0 text-xs rounded-none dark:hover:text-fg-2 size-auto text-fg-4 hover:text-fg-2 hover:no-underline dark:bg-transparent dark:hover:bg-transparent",
        className
      )}
    >
      {children}
    </Button>
  );
}
