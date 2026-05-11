export type ProjectType =
  | "App Development"
  | "Automation"
  | "Web Design"
  | "Optimisation"
  | "SaaS"
  | "Integration";

export type ProjectStatus = "Live" | "Offline" | "In Progress" | "Case Study";

export type PortfolioItem = {
  id: string;
  title: string;
  thumbnail: string;
  hasImage: boolean;
  type: ProjectType[];
  status: ProjectStatus;
  shortDescription: string;
  description: string;
  tags: string[];
  link?: string;
}
