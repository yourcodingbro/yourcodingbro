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

export const portfolio: PortfolioItem[] = [
  {
    id: "saas-dashboard",
    title: "Analytics SaaS Dashboard",
    gradient: "from-brand to-violet",
    type: "SaaS",
    status: "Live",
    shortDescription:
      "Real-time analytics dashboard for a B2B SaaS platform with role-based access and custom reporting.",
    description:
      "Built a full-stack analytics platform for a B2B SaaS company. Features include real-time charts, user management, role-based access control, and a custom report builder. Reduced manual reporting overhead by 80% and gave the team live visibility into key metrics.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Recharts", "Tailwind CSS"],
  },
  {
    id: "ecommerce-automation",
    title: "E-commerce Automation Suite",
    gradient: "from-violet to-accent",
    type: "Automation",
    status: "Live",
    shortDescription:
      "End-to-end order processing and inventory sync across Shopify, Airtable, and Slack.",
    description:
      "Designed and built an automation suite that synchronises orders from Shopify into Airtable, triggers Slack notifications for fulfilment teams, and auto-generates weekly inventory reports. Eliminated ~15 hours of manual work per week for the operations team.",
    tags: ["Node.js", "Shopify API", "Airtable API", "Slack Webhooks", "Cron"],
  },
  {
    id: "agency-website",
    title: "Creative Agency Website",
    gradient: "from-accent to-brand",
    type: "Web Design",
    status: "Live",
    shortDescription:
      "High-performance marketing site for a creative agency with headless CMS and contact integrations.",
    description:
      "Designed and developed a bespoke marketing website for a creative agency. Built on Next.js with a headless CMS (Sanity), custom animations, and a contact pipeline backed by Resend. Achieved a 98 Lighthouse score at launch.",
    tags: ["Next.js", "Sanity CMS", "Framer Motion", "Tailwind CSS", "Resend"],
  },
  {
    id: "api-optimisation",
    title: "API Performance Overhaul",
    gradient: "from-brand to-accent",
    type: "Optimisation",
    status: "Case Study",
    shortDescription:
      "Reduced API response times by 70% through query optimisation, caching, and CDN offloading.",
    description:
      "Audited and refactored a Node.js REST API returning 4-second average response times under load. Identified N+1 queries, introduced Redis caching for hot paths, and moved static assets to a CDN. Outcome: p95 latency dropped from 4 s to under 300 ms.",
    tags: ["Node.js", "PostgreSQL", "Redis", "AWS CloudFront", "Datadog"],
  },
  {
    id: "lms",
    title: "Learning Management System",
    gradient: "from-violet to-brand",
    type: "App Development",
    status: "In Progress",
    shortDescription:
      "Custom LMS with live code environments, progress tracking, and instructor dashboards.",
    description:
      "Building a tailored LMS for a coding bootcamp. Students get in-browser code sandboxes, auto-graded challenges, and progress dashboards. Instructors have a content authoring tool and cohort analytics. Launching Q3 2026.",
    tags: ["Next.js", "TypeScript", "Supabase", "Monaco Editor", "Prisma"],
  },
  {
    id: "crm-integration",
    title: "CRM Integration Pipeline",
    gradient: "from-accent to-violet",
    type: "Integration",
    status: "Case Study",
    shortDescription:
      "Bidirectional sync between HubSpot and a legacy internal CRM with conflict resolution.",
    description:
      "A mid-size sales team ran two CRMs simultaneously — HubSpot for new leads and a legacy in-house system for accounts. Built a bidirectional sync pipeline with conflict detection, field mapping, and an admin UI for resolving edge cases. Reduced duplicate data entry to zero.",
    tags: ["Node.js", "HubSpot API", "PostgreSQL", "BullMQ", "React"],
  },
];
