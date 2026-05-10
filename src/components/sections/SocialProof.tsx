import { Star } from "lucide-react";
import SectionBadgeDivider from "@/components/SectionBadgeDivider";

const testimonials = [
  {
    quote:
      "Working with YourCodingBro was a game-changer. He delivered our MVP in 3 weeks — clean code, zero drama, and it just works.",
    author: "Sarah Chen",
    role: "Founder, LaunchPad AI",
    avatar: "SC",
    stars: 5,
  },
  {
    quote:
      "I've hired 5 developers before. None came close to the speed and quality I got here. My app went from idea to App Store in 6 weeks.",
    author: "Marcus Williams",
    role: "CEO, FitTrackr",
    avatar: "MW",
    stars: 5,
  },
  {
    quote:
      "The codebase is so clean I'm still surprised. Excellent TypeScript, great architecture. Our in-house team took it over with zero headaches.",
    author: "Elena Kowalski",
    role: "CTO, Finova",
    avatar: "EK",
    stars: 5,
  },
  {
    quote:
      "Communication was top-tier. Daily updates, quick responses, honest estimates. Exactly what a startup needs. Will hire again without hesitation.",
    author: "James Oduya",
    role: "Co-founder, Stackly",
    avatar: "JO",
    stars: 5,
  },
];

const stats = [
  { value: "50+", label: "Projects Shipped" },
  { value: "30+", label: "Happy Clients" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "3 weeks", label: "Avg. MVP Time" },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-accent fill-current" />
      ))}
    </div>
  );
}

export default function SocialProof() {
  return (
    <section
      id="testimonials"
      className="py-12 sm:py-20 relative overflow-hidden w-full"
    >
      <div className="absolute -left-32 top-1/4 w-64 h-64 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-32 bottom-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBadgeDivider>Client results</SectionBadgeDivider>

        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-fg mb-4 tracking-tight">
            Trusted by founders <span className="gradient-text">who ship.</span>
          </h2>
          <p className="text-fg-3 max-w-xl mx-auto text-base sm:text-lg">
            Real projects. Real results. Here&apos;s what clients say after
            we&apos;ve shipped together.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-line rounded-2xl overflow-hidden mb-8 sm:mb-14">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-surface px-6 py-6 sm:py-8 text-center hover:bg-elevated transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm text-fg-4">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="gradient-border rounded-2xl p-6 sm:p-7 hover:bg-elevated/40 transition-all duration-300"
            >
              <Stars count={t.stars} />
              <blockquote className="mt-4 text-fg-2 text-sm sm:text-base leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand to-accent flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-fg font-semibold text-sm">
                    {t.author}
                  </div>
                  <div className="text-fg-4 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
