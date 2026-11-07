import { CTA } from "@/types/common";
import { NAV_ITEMS } from "./nav-items";

export const START_PROJECT_CTA: CTA = {
  action: "link",
  href: NAV_ITEMS.contact.href,
  labelKey: "startProject",
} as const;
