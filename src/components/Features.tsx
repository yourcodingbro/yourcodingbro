import SectionBadge from "@/components/SectionBadge";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Fast Delivery",
    description: "No endless meetings or scope creep. I move fast, communicate clearly, and get your product shipped.",
    accent: "from-brand to-accent",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Clean Code",
    description: "TypeScript-first, well-tested, and documented. Code you can maintain and scale confidently.",
    accent: "from-violet to-brand",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3" />
      </svg>
    ),
    title: "Mobile-First",
    description: "Every pixel is designed for mobile first, then refined for desktop. Pixel-perfect across all screen sizes.",
    accent: "from-accent to-violet",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Secure by Default",
    description: "Auth, input validation, OWASP best practices, and secure deployments baked in from day one.",
    accent: "from-brand to-violet",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Scalable Architecture",
    description: "Designed to grow with you. From side project to Series A traffic — built to handle it.",
    accent: "from-accent to-brand",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
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
