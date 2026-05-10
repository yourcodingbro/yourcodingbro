import { CheckCircle2 } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  accent: string;
}

export default function ServiceCard({
  icon,
  title,
  tagline,
  description,
  bullets,
  accent,
}: ServiceCardProps) {
  return (
    <div className="gradient-border rounded-2xl p-7 flex flex-col hover:bg-elevated/50 transition-all duration-300">
      <div
        className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${accent} mb-5 self-start`}
      >
        <div className="text-white">{icon}</div>
      </div>

      <h3 className="text-fg font-bold text-xl mb-1">{title}</h3>
      <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">
        {tagline}
      </p>

      <p className="text-fg-3 text-sm leading-relaxed mb-6">{description}</p>

      <ul className="flex flex-col gap-2.5 mt-auto">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <span className="text-fg-2 text-sm">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
