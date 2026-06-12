"use client";

import { useLocale, useTranslations } from "next-intl";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const localeLabels: Record<string, string> = {
  en: "EN",
  hu: "HU",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("globals.header");

  return (
    <Select
      value={locale}
      onValueChange={(value) => {
        if (value) {
          router.replace(pathname, {
            locale: value as (typeof routing.locales)[number],
          });
        }
      }}
    >
      <SelectTrigger
        size="sm"
        hasIcon={false}
        aria-label={t("languageLabel")}
        className={cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "cursor-pointer data-[size=sm]:rounded-lg p-0 data-[size=sm]:size-9 text-fg-3 hover:text-fg transition-all duration-150 dark:bg-transparent dark:hover:bg-muted hover:bg-muted"
        )}
      >
        <Globe className="w-5 h-5" />
      </SelectTrigger>
      <SelectContent align="center" className="min-w-20">
        {routing.locales.map((loc) => (
          <SelectItem key={loc} value={loc}>
            {localeLabels[loc]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
