"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      size="icon"
      variant="ghost"
      icon={
        resolvedTheme !== "light" ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )
      }
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${
        resolvedTheme === "dark" ? "light" : "dark"
      } mode`}
      className="p-0 rounded-lg transition-all duration-150 cursor-pointer text-fg-3 hover:text-fg dark:hover:bg-muted hover:bg-muted"
    />
  );
}
