import {
  Zap,
  Code2,
  Smartphone,
  ShieldCheck,
  BarChart3,
  MessageCircle,
} from "lucide-react";
import Section, { SectionProps } from "@/components/atoms/Section";
import Container from "@/components/atoms/Container";
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

export type ValuePropProps = SectionProps;

export default function ValueProp({ ...props }: ValuePropProps) {
  return (
    <Section id="value-prop" {...props}>
      <Container>
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
      </Container>
    </Section>
  );
}
