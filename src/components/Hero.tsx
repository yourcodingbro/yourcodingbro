"use client";

import { useEffect, useRef } from "react";

const codeSnippet = `// Your idea → production-ready code
const project = await yourCodingBro.build({
  idea: "Your vision",
  stack: ["Next.js", "TypeScript"],
  timeline: "fast",
  quality: "exceptional",
});

console.log(project.status); // "shipped 🚀"`;

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`; // --accent
        ctx.fill();
      });

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.15 * (1 - dist / 120)})`; // --brand
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-grid noise-overlay pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-brand/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(600px,100vw)] h-[min(600px,100vw)] bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Copy */}
        <div className="flex-1 min-w-0 w-full text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-elevated border border-line text-xs font-medium text-accent mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-glow" />
            Available for new projects
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
            Your Vision,{" "}
            <span className="gradient-text">Built Fast.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
            Expert full-stack development that ships clean, scalable code —
            on time, every time. From MVP to production, I&apos;m your dedicated
            coding partner.
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-8 mb-10">
            {[
              { value: "50+", label: "Projects shipped" },
              { value: "100%", label: "On-time delivery" },
              { value: "4.9★", label: "Client rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-brand hover:bg-brand-hover transition-all duration-200 text-sm sm:text-base glow-blue"
            >
              Start Your Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-slate-300 border border-line hover:border-accent/40 hover:text-white transition-all duration-200 text-sm sm:text-base"
            >
              See My Services
            </a>
          </div>
        </div>

        {/* Code card — desktop only */}
        <div className="hidden lg:block flex-1 min-w-0 w-full max-w-lg float-animation">
          <div className="gradient-border rounded-2xl overflow-hidden glow-cyan">
            <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-line">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-auto text-xs text-slate-500 font-mono">project.ts</span>
            </div>
            <div className="bg-surface p-5 sm:p-6">
              <pre className="text-xs sm:text-sm font-mono text-slate-300 leading-relaxed overflow-x-auto">
                <code>
                  {codeSnippet.split("\n").map((line, i) => (
                    <div key={i} className="flex gap-4">
                      <span className="select-none text-slate-600 w-4 shrink-0 text-right">{i + 1}</span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: line
                            .replace(/\/\/.*/g, (m) => `<span class="text-slate-500">${m}</span>`)
                            .replace(/"([^"]+)"/g, `<span class="text-accent">"$1"</span>`)
                            .replace(/\b(const|await|console\.log)\b/g, `<span class="text-violet">$1</span>`)
                            .replace(/\b(yourCodingBro|project)\b/g, `<span class="text-accent">$1</span>`),
                        }}
                      />
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-slate-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
