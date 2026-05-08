import { Zap, Code2, Smartphone, ShieldCheck, BarChart3, MessageCircle } from "lucide-react";
import SectionBadge from "@/components/SectionBadge";

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Fast Delivery",
    description: "No endless meetings or scope creep. I move fast, communicate clearly, and get your product shipped.",
    accent: "from-brand to-accent",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Clean Code",
    description: "TypeScript-first, well-tested, and documented. Code you can maintain and scale confidently.",
    accent: "from-violet to-brand",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile-First",
    description: "Every pixel is designed for mobile first, then refined for desktop. Pixel-perfect across all screen sizes.",
    accent: "from-accent to-violet",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Secure by Default",
    description: "Auth, input validation, OWASP best practices, and secure deployments baked in from day one.",
    accent: "from-brand to-violet",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Scalable Architecture",
    description: "Designed to grow with you. From side project to Series A traffic — built to handle it.",
    accent: "from-accent to-brand",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Clear Communication",
    description: "Daily updates, async-friendly, timezone-aware. You always know what's happening with your project.",
    accent: "from-violet to-accent",
  },
];

const stack = ["Next.js", "TypeScript", "React", "Node.js", "PostgreSQL", "Tailwind CSS", "Prisma", "Supabase", "Vercel", "Docker"];

export default function Features() {
  return (
    <section id="services" className="py-12 sm:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <SectionBadge className="mb-5">What I bring to your project</SectionBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-fg mb-4 tracking-tight">
            Everything you need,{" "}
            <span className="gradient-text">nothing you don&apos;t.</span>
          </h2>
          <p className="text-fg-3 max-w-2xl mx-auto text-base sm:text-lg">
            Full-stack development from idea to deployment. I handle the hard
            parts so you can focus on growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {features.map((f) => (
            <div
              key={f.title}
              className="group gradient-border rounded-2xl p-6 hover:bg-elevated/50 transition-all duration-300 cursor-default"
            >
              <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${f.accent} mb-4`}>
                <div className="text-white">{f.icon}</div>
              </div>
              <h3 className="text-fg font-semibold text-base sm:text-lg mb-2 group-hover:text-accent transition-colors">
                {f.title}
              </h3>
              <p className="text-fg-3 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

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
