import {
  Zap,
  Code2,
  Smartphone,
  ShieldCheck,
  BarChart3,
  MessageCircle,
} from "lucide-react";
import SectionBadgeDivider from "@/components/badges/SectionBadgeDivider";
import ValueCard from "@/components/cards/ValueCard";

const values = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Fast Delivery",
    description:
      "No endless meetings or scope creep. I move fast, communicate clearly, and get your product shipped.",
    accent: "from-brand to-accent",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Clean Code",
    description:
      "TypeScript-first, well-tested, and documented. Code you can maintain and scale confidently.",
    accent: "from-violet to-brand",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile-First",
    description:
      "Every pixel is designed for mobile first, then refined for desktop. Pixel-perfect across all screen sizes.",
    accent: "from-accent to-violet",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Secure by Default",
    description:
      "Auth, input validation, OWASP best practices, and secure deployments baked in from day one.",
    accent: "from-brand to-violet",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Scalable Architecture",
    description:
      "Designed to grow with you. From side project to Series A traffic — built to handle it.",
    accent: "from-accent to-brand",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Clear Communication",
    description:
      "Daily updates, async-friendly, timezone-aware. You always know what's happening with your project.",
    accent: "from-violet to-accent",
  },
];

const reasons = [
  {
    number: "01",
    title: "No freelancer roulette",
    description:
      "You get one dedicated developer who owns your project start to finish — not a rotating cast of contractors or an account manager forwarding your requests.",
  },
  {
    number: "02",
    title: "Async-first, always available",
    description:
      "I work across timezones and communicate clearly in writing. No scheduling hell — just fast, reliable responses and daily progress updates.",
  },
  {
    number: "03",
    title: "You own everything",
    description:
      "Full IP transfer, clean git history, documented code. When we're done you can hand it to any developer and they'll understand it immediately.",
  },
  {
    number: "04",
    title: "Honest scoping, no surprises",
    description:
      "I'll tell you upfront what's realistic in your budget and timeline. No lowball estimates to win the deal, no scope creep invoices later.",
  },
];

export default function ValueProp() {
  return (
    <section id="why-us" className="py-12 sm:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── What I bring ── */}
        <div className="text-center mb-8 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-fg mb-4 tracking-tight">
            Everything you need,{" "}
            <span className="gradient-text">nothing you don&apos;t.</span>
          </h2>
          <p className="text-fg-3 max-w-2xl mx-auto text-base sm:text-lg">
            From idea to deployment — I handle the hard parts so you can focus
            on growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-14 sm:mb-20">
          {values.map((valueProps) => (
            <ValueCard key={valueProps.title} {...valueProps} />
          ))}
        </div>

        <SectionBadgeDivider>Why work with me</SectionBadgeDivider>

        {/* ── Why Us ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-fg mb-5 tracking-tight leading-tight">
              Not just another{" "}
              <span className="gradient-text">dev for hire.</span>
            </h2>
            <p className="text-fg-3 text-base sm:text-lg leading-relaxed">
              There are thousands of developers available. Here&apos;s why
              founders keep coming back — and referring their friends.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {reasons.map((r) => (
              <div key={r.number} className="flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-elevated border border-line flex items-center justify-center group-hover:border-brand/50 transition-colors">
                  <span className="text-xs font-bold text-accent">
                    {r.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-fg font-semibold text-sm sm:text-base mb-1">
                    {r.title}
                  </h3>
                  <p className="text-fg-3 text-sm leading-relaxed">
                    {r.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
