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
        <svg key={i} className="w-4 h-4 text-[#38bdf8]" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function SocialProof() {
  return (
    <section id="testimonials" className="py-12 sm:py-20 relative overflow-hidden w-full">
      {/* Decorative blobs */}
      <div className="absolute -left-32 top-1/4 w-64 h-64 bg-[#2563eb]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-32 bottom-1/4 w-64 h-64 bg-[#38bdf8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#112240] border border-[#1e3a5f] text-xs font-medium text-[#38bdf8] mb-5">
            Client results
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Trusted by founders{" "}
            <span className="gradient-text">who ship.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base sm:text-lg">
            Real projects. Real results. Here&apos;s what clients say after we&apos;ve
            shipped together.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#1e3a5f] rounded-2xl overflow-hidden mb-8 sm:mb-14">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-[#0c1a2e] px-6 py-6 sm:py-8 text-center hover:bg-[#112240] transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="gradient-border rounded-2xl p-6 sm:p-7 hover:bg-[#112240]/40 transition-all duration-300"
            >
              <Stars count={t.stars} />
              <blockquote className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563eb] to-[#38bdf8] flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.author}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
