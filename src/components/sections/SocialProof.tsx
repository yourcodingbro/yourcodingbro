import TestimonialCard from "@/components/cards/TestimonialCard";
import { stats, testimonials } from "@/lib/constants/social-proof";

export default function SocialProof() {
  return (
    <section
      id="testimonials"
      className="py-12 sm:py-20 relative overflow-hidden w-full"
    >
      <div className="absolute -left-32 top-1/4 w-64 h-64 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-32 bottom-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="bg-surface px-6 py-6 sm:py-8 text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm text-fg-4">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {testimonials.map((testimonialProps) => (
            <TestimonialCard
              key={testimonialProps.author}
              {...testimonialProps}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
