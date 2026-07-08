"use client";

import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { queries } from "@/lib/queries";
import type { Project } from "@/types/project";

export function useProjects() {
  const locale = useLocale();

  return useQuery({
    ...queries.projects.all(locale),
    select: (data: Project[]) => {
      return [...data].sort((a, b) => {
        if (a.showcase_order === null) return 1;
        if (b.showcase_order === null) return -1;
        return a.showcase_order - b.showcase_order;
      });
    },
  });
}
