import { Workflow, Globe, GraduationCap } from "lucide-react";

export const services = [
  {
    icon: <Workflow className="w-7 h-7" />,
    title: "Workflow Automation",
    tagline: "Save hours every week",
    description:
      "I design and build automated workflows that eliminate repetitive work, connect your tools, and let your team focus on what actually matters.",
    bullets: [
      "Internal process automation",
      "API & webhook integrations",
      "Scheduled jobs & triggers",
      "Custom internal dashboards",
      "Notification & alert pipelines",
      "Data sync & ETL workflows",
      "Legacy tool modernisation",
    ],
    accent: "from-brand to-violet",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Full-Stack Development",
    tagline: "From idea to production",
    description:
      "Full-stack applications built to scale — from polished landing pages to complex SaaS products, pixel-perfect and production-ready.",
    bullets: [
      "MVP building & rapid prototyping",
      "UI/UX development",
      "API development & third-party integrations",
      "Database design",
      "Deployment (CI/CD)",
      "Performance audits & optimisation",
      "Technical consultation",
    ],
    accent: "from-brand to-accent",
  },
  {
    icon: <GraduationCap className="w-7 h-7" />,
    title: "Tutoring",
    tagline: "Learn at your pace",
    description:
      "1-on-1 coding sessions tailored to your level and goals — whether you're just starting out or levelling up to land your next role.",
    bullets: [
      "Development fundamentals",
      "React, TypeScript & modern JavaScript",
      "System design & architecture basics",
      "Building your first project end-to-end",
      "Code reviews & best practices",
      "Interview prep & career coaching",
    ],
    accent: "from-violet to-accent",
  },
];

export const serviceNames = services.map((service) => service.title);
