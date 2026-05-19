"use client";

import { useQuery } from "@tanstack/react-query";
import { queries } from "@/lib/queries";

export function useProjects() {
  return useQuery({
    ...queries.projects.all,
  });
}
