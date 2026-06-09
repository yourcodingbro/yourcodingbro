import Section, { SectionProps } from "@/components/atoms/Section";
import Container from "@/components/atoms/Container";

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

export type WhyUsProps = SectionProps;

export default function WhyUs({ ...props }: WhyUsProps) {
  return (
    <Section id="why-us" {...props}>
      <Container>
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
      </Container>
    </Section>
  );
}
