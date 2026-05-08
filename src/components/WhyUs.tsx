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

export default function WhyUs() {
  return (
    <section id="why-us" className="py-12 sm:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c1a2e]/40 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — header */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#112240] border border-[#1e3a5f] text-xs font-medium text-[#38bdf8] mb-5">
              Why work with me
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight leading-tight">
              Not just another{" "}
              <span className="gradient-text">dev for hire.</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              There are thousands of developers available. Here&apos;s why
              founders keep coming back — and referring their friends.
            </p>
          </div>

          {/* Right — reasons list */}
          <div className="flex flex-col gap-6">
            {reasons.map((r) => (
              <div key={r.number} className="flex gap-5 group">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#112240] border border-[#1e3a5f] flex items-center justify-center group-hover:border-[#2563eb]/50 transition-colors">
                  <span className="text-xs font-bold text-[#38bdf8]">{r.number}</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm sm:text-base mb-1 group-hover:text-[#38bdf8] transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
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
