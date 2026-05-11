import { Star } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  stars: number;
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-accent fill-current" />
      ))}
    </div>
  );
}

export default function TestimonialCard({
  quote,
  author,
  role,
  avatar,
  stars,
}: TestimonialCardProps) {
  return (
    <div className="gradient-border rounded-2xl p-6 sm:p-7 hover:bg-elevated/40 transition-all duration-300">
      <Stars count={stars} />
      <blockquote className="mt-4 text-fg-2 text-sm sm:text-base leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-5 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand to-accent flex items-center justify-center text-white text-sm font-bold shrink-0">
          {avatar}
        </div>
        <div>
          <div className="text-fg font-semibold text-sm">{author}</div>
          <div className="text-fg-4 text-xs">{role}</div>
        </div>
      </div>
    </div>
  );
}
