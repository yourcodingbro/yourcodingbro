import { Workflow, Globe, GraduationCap } from "lucide-react";
import ServiceCard from "@/components/cards/ServiceCard";

const services = [
  {
    icon: <Workflow className="w-7 h-7" />,
    title: "Automation",
    tagline: "Save hours every week",
    description:
      "I design and build automated workflows that eliminate repetitive work, connect your tools, and let your team focus on what actually matters.",
    bullets: [
      "Internal process automation",
      "API & webhook integrations",
      "Scheduled jobs & triggers",
      "Custom internal dashboards",
    ],
    accent: "from-brand to-violet",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Web Development",
    tagline: "From idea to production",
    description:
      "Full-stack web applications built to scale — from polished landing pages to complex SaaS products, pixel-perfect and production-ready.",
    bullets: [
      "Frontend — React, Next.js, Tailwind CSS",
      "Backend — Node.js, REST & GraphQL APIs",
      "Database design & optimisation",
      "Deployment, CI/CD & monitoring",
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
      "Web development fundamentals",
      "React, TypeScript & modern JavaScript",
      "Code reviews & best practices",
      "Interview prep & career coaching",
    ],
    accent: "from-violet to-accent",
  },
];

const stack = [
  "Next.js",
  "TypeScript",
  "React",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Prisma",
  "Supabase",
  "Vercel",
  "Docker",
];

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-fg mb-4 tracking-tight">
            Services built for{" "}
            <span className="gradient-text">real outcomes.</span>
          </h2>
          <p className="text-fg-3 max-w-2xl mx-auto text-base sm:text-lg">
            Three focused offerings — each designed to deliver tangible value
            without the overhead of a larger agency.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-14 sm:mb-20">
          {services.map((serviceProps) => (
            <ServiceCard key={serviceProps.title} {...serviceProps} />
          ))}
        </div>

        {/* Tech stack */}
        <div className="text-center">
          <p className="text-fg-4 text-xs uppercase tracking-widest mb-6">
            Technologies I work with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-elevated border border-line text-fg-2 text-sm hover:border-accent/40 hover:text-fg transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
