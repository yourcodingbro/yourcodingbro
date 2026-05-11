export type ProjectType =
  | "App Development"
  | "Automation"
  | "Web Design"
  | "Optimisation"
  | "SaaS"
  | "Integration";

export type ProjectStatus = "Live" | "Offline" | "In Progress" | "Case Study";

export interface PortfolioItem {
  id: string;
  title: string;
  gradient: string;
  type: ProjectType;
  status: ProjectStatus;
  shortDescription: string;
  description: string;
  tags: string[];
  link?: string;
}
