import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function detectLocale(fallback: string): string {
  try {
    return (
      new Intl.Locale(navigator.language).region?.toLowerCase() ?? fallback
    );
  } catch {
    return fallback;
  }
}
