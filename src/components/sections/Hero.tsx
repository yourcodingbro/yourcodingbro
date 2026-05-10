"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import SectionBadge from "@/components/badges/SectionBadge";

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

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }[] = [];
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
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-brand/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(600px,100vw)] h-[min(600px,100vw)] bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Copy */}
        <div className="flex-1 min-w-0 w-full text-center lg:text-left">
          <SectionBadge className="mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Available for new projects
          </SectionBadge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-fg mb-6">
            Your Vision, <span className="gradient-text">Built Fast.</span>
          </h1>

          <p className="text-base sm:text-lg text-fg-3 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
            Expert full-stack development that ships clean, scalable code — on
            time, every time. From MVP to production, I&apos;m your dedicated
            coding partner.
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-8 mb-10">
            {[
              { value: "50+", label: "Projects shipped" },
              { value: "100%", label: "On-time delivery" },
              { value: "4.9★", label: "Client rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold text-fg">
                  {stat.value}
                </div>
                <div className="text-xs text-fg-4">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <ButtonLink
              href="#contact"
              size="xl"
              style="pill"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="after"
              className="w-full sm:w-auto text-white bg-brand hover:bg-brand-hover glow-blue"
            >
              Start Your Project
            </ButtonLink>
            <ButtonLink
              href="#services"
              size="xl"
              style="pill"
              variant="outline"
              className="w-full sm:w-auto text-fg-2 border border-line hover:border-accent/40 hover:text-fg"
            >
              See My Services
            </ButtonLink>
          </div>
        </div>

        {/* Code card — always dark, desktop only */}
        <div className="hidden lg:block flex-1 min-w-0 w-full max-w-lg float-animation">
          <div
            className="rounded-2xl overflow-hidden glow-cyan"
            style={{ border: "1px solid #1e3a5f" }}
          >
            <div
              className="flex items-center gap-2 px-4 py-3 bg-code-bg border-b"
              style={{ borderColor: "#1e3a5f" }}
            >
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-auto text-xs text-slate-500 font-mono">
                project.ts
              </span>
            </div>
            <div className="bg-code-bg p-5 sm:p-6">
              <pre className="text-xs sm:text-sm font-mono text-slate-300 leading-relaxed overflow-x-auto">
                <code>
                  {codeSnippet.split("\n").map((line, i) => (
                    <div key={i} className="flex gap-4">
                      <span className="select-none text-slate-600 w-4 shrink-0 text-right">
                        {i + 1}
                      </span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: line
                            .replace(
                              /"([^"]+)"/g,
                              `<span style="color:#38bdf8">"$1"</span>`
                            )
                            .replace(
                              /\b(const|await|console\.log)\b/g,
                              `<span style="color:#7c3aed">$1</span>`
                            )
                            .replace(
                              /\b(yourCodingBro|project)\b/g,
                              `<span style="color:#38bdf8">$1</span>`
                            )
                            .replace(
                              /\/\/.*/g,
                              (m) => `<span style="color:#64748b">${m}</span>`
                            ),
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

      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-fg-4">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg
          className="w-5 h-5 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
