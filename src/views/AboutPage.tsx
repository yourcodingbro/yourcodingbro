// Static copy — extract to translations when HU localization is needed

import Link from "next/link";
import { ArrowDown, Zap, Layers, Users } from "lucide-react";
import Section from "@/lib/components/atoms/Section";
import Container from "@/lib/components/atoms/Container";
import Reveal from "@/lib/components/atoms/Reveal";
import SectionBadge from "@/lib/components/badges/SectionBadge";
import { STAGGER_REVEAL_DELAY } from "@/config";

const SKILLS = [
  "Next.js",
  "TypeScript",
  "React",
  "Node.js",
  "Supabase",
  "Automation",
];

const HELP_CARDS = [
  {
    icon: Layers,
    accent: "from-brand to-violet",
    title: "Websites & web apps",
    body: "Your site is slow, hard to update, or not converting. I rebuild it as a fast, modern web app that you can actually manage — from local business pages to full SaaS platforms.",
  },
  {
    icon: Zap,
    accent: "from-brand to-accent",
    title: "Workflow automation",
    body: "Your team spends hours on repetitive tasks — copying data, sending emails, chasing approvals. I connect your tools and automate the manual work so your team can focus on what matters.",
  },
  {
    icon: Users,
    accent: "from-violet to-accent",
    title: "Dev partnership",
    body: "You need a reliable engineer for a sprint, a feature, or an ongoing engagement. I slot into your process, write clean code, and hand over work your team can maintain.",
  },
];

const HOW_STEPS = [
  {
    n: "01",
    title: "First conversation",
    body: "Tell me what you're building. No NDA, no commitment required. I'll ask the right questions to understand what you actually need.",
  },
  {
    n: "02",
    title: "Scoping",
    body: "I break the project into phases with realistic timelines and fixed pricing. No scope creep, no surprise invoices.",
  },
  {
    n: "03",
    title: "Delivery",
    body: "Daily updates, async communication across timezones. You can track progress and give feedback at every step.",
  },
  {
    n: "04",
    title: "Handover",
    body: "Clean git history, documented code, and a walkthrough. Any developer can pick it up the day after I'm done.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Introduction */}
      <Section depth="circles" depthColor="bg-violet/15">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-8 sm:pt-12 pb-4">
            <Reveal>
              <SectionBadge>Independent Software Engineer</SectionBadge>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-fg">
                Nagy Viktor
              </h1>
              <p className="mt-1 text-accent font-semibold text-lg">
                YourCodingBro
              </p>
              <p className="mt-5 text-fg-3 text-base sm:text-lg leading-relaxed max-w-lg">
                I&apos;m an independent full-stack engineer. I build websites,
                web applications, and automated workflows for founders and
                businesses who need something that actually works — delivered on
                time, without the agency overhead.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {SKILLS.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-elevated border border-line text-fg-3 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal
              delay={STAGGER_REVEAL_DELAY}
              className="flex justify-center lg:justify-end"
            >
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl bg-gradient-to-br from-brand/30 via-violet/20 to-accent/30 border border-line flex flex-col items-center justify-center gap-3 glow-blue">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand to-accent flex items-center justify-center text-white text-3xl font-bold select-none">
                  VN
                </div>
                <div className="text-center">
                  <p className="text-fg font-semibold text-sm">Viktor Nagy</p>
                  <p className="text-fg-4 text-xs">Full-Stack Engineer</p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* What I help with */}
      <Section>
        <Container>
          <Reveal className="mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">
              What I help with
            </h2>
            <p className="mt-3 text-fg-3 max-w-2xl text-base sm:text-lg">
              Three areas where I do my best work.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {HELP_CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={(i + 1) * STAGGER_REVEAL_DELAY}>
                  <div className="gradient-border rounded-2xl p-7 h-full">
                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${card.accent} mb-5`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-fg font-bold text-lg mb-2">
                      {card.title}
                    </h3>
                    <p className="text-fg-3 text-sm leading-relaxed">
                      {card.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Selected work */}
      <Section depth="row" depthColor="via-brand/10">
        <Container>
          <Reveal className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg mb-4">
              Real projects, shipped for real clients
            </h2>
            <p className="text-fg-3 text-base sm:text-lg mb-8">
              From rebuilding a cinema ticketing system to building internal ops
              dashboards — browse the full portfolio to see the work.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand hover:bg-brand-hover text-white font-semibold text-sm transition-colors"
            >
              View portfolio
            </Link>
          </Reveal>
        </Container>
      </Section>

      {/* How I work */}
      <Section>
        <Container>
          <Reveal className="mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">
              How I work
            </h2>
            <p className="mt-3 text-fg-3 max-w-2xl text-base sm:text-lg">
              From first message to finished product.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOW_STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * STAGGER_REVEAL_DELAY}>
                <div className="gradient-border rounded-2xl p-7 h-full">
                  <span className="text-accent text-sm font-mono font-bold">
                    {step.n}
                  </span>
                  <h3 className="mt-2 text-fg font-bold text-lg mb-3">
                    {step.title}
                  </h3>
                  <p className="text-fg-3 text-sm leading-relaxed">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact CTA */}
      <Section>
        <Container>
          <Reveal className="text-center max-w-2xl mx-auto py-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg mb-4">
              Got a project in mind?
            </h2>
            <p className="text-fg-3 text-base sm:text-lg mb-8">
              Describe what you&apos;re building — or the process you want to
              simplify. I&apos;ll get back to you within 24 hours.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand hover:bg-brand-hover text-white font-semibold text-sm transition-colors"
            >
              <ArrowDown className="w-4 h-4" />
              Get in touch
            </a>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
