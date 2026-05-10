import cn from "classnames";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent: string;
}

export default function ValueCard({
  icon,
  title,
  description,
  accent,
}: ValueCardProps) {
  return (
    <div className="gradient-border rounded-2xl p-6 hover:bg-elevated/50 transition-all duration-300 cursor-default">
      <div
        className={cn("inline-flex p-2.5 rounded-xl bg-gradient-to-br mb-4", accent)}
      >
        <div className="text-white">{icon}</div>
      </div>
      <h3 className="text-fg font-semibold text-base sm:text-lg mb-2">
        {title}
      </h3>
      <p className="text-fg-3 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
