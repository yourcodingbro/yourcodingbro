import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "hu"],
  defaultLocale: "hu",
  localePrefix: "as-needed",

  pathnames: {
    "/": "/",
    "/about": {
      hu: "/rolam",
      en: "/about",
    },
    "/services": {
      hu: "/szolgaltatasok",
      en: "/services",
    },
    "/contact": {
      hu: "/kapcsolat",
      en: "/contact",
    },
  },
});
