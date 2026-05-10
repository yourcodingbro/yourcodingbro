"use client";

import { useState } from "react";
import ServiceCard from "@/components/cards/ServiceCard";
import { services } from "@/lib/constants/services";

const stack = [
  "Next.js",
  "TypeScript",
  "React",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Prisma",
  "Supabase",
  "Vercel",
  "Docker",
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) =>
    setExpandedIndex((prev) => (prev === index ? null : index));

  return (
    <section id="services" className="py-12 sm:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-fg mb-4 tracking-tight">
            Services built for{" "}
            <span className="gradient-text">real outcomes.</span>
          </h2>
          <p className="text-fg-3 max-w-2xl mx-auto text-base sm:text-lg">
            Three focused offerings — each designed to deliver tangible value
            without the overhead of a larger agency.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-14 sm:mb-20 items-start">
          {services.map((serviceProps, i) => (
            <ServiceCard
              key={serviceProps.title}
              {...serviceProps}
              expanded={expandedIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>

        {/* Tech stack */}
        <div className="text-center">
          <p className="text-fg-4 text-xs uppercase tracking-widest mb-6">
            Technologies I work with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-elevated border border-line text-fg-2 text-sm hover:border-accent/40 hover:text-fg transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
