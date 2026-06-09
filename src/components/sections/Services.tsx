"use client";

import { useState } from "react";
import Section, { SectionProps } from "@/components/atoms/Section";
import Container from "@/components/atoms/Container";
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

export type ServicesProps = SectionProps;

export default function Services({ ...props }: ServicesProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) =>
    setExpandedIndex((prev) => (prev === index ? null : index));

  return (
    <Section id="services" {...props}>
      <Container>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-start">
          {services.map((serviceProps, i) => (
            <ServiceCard
              key={serviceProps.title}
              {...serviceProps}
              expanded={expandedIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
