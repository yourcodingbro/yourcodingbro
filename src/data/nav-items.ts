import { Navigation, NavigationItem } from "@/types/common";

export const NAV_ITEMS: Navigation = {
  about: {
    href: "/about",
    labelKey: "navLinks.whyUs",
  },
  services: {
    href: "/services",
    labelKey: "navLinks.services",
  },
  portfolio: {
    href: "/portfolio",
    labelKey: "navLinks.work",
  },
  testimonials: {
    href: "#testimonials",
    labelKey: "navLinks.testimonials",
  },
  contact: {
    href: "/contact",
    labelKey: "navLinks.contact",
  },
} as const;

export const NAV_ITEMS_ARRAY: NavigationItem[] = Object.values(NAV_ITEMS);
