"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SectionBadge from "@/components/badges/SectionBadge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(20, "Tell me a bit more — at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

const budgetOptions = [
  { value: "under-1k", label: "Under $1,000" },
  { value: "1k-5k",    label: "$1,000 – $5,000" },
  { value: "5k-15k",   label: "$5,000 – $15,000" },
  { value: "15k-plus", label: "$15,000+" },
  { value: "not-sure", label: "Not sure yet" },
];

type SubmitState = "idle" | "loading" | "success" | "error";

const fieldClass = "h-auto px-4 py-3 bg-surface border-line text-fg placeholder:text-fg-4 focus-visible:border-brand focus-visible:ring-brand/30 rounded-xl";

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitState("success");
      reset();
    } catch {
      setSubmitState("error");
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — copy */}
          <div>
            <SectionBadge className="mb-5">Let&apos;s build together</SectionBadge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-fg mb-5 tracking-tight leading-tight">
              Got a project?{" "}
              <span className="gradient-text">Let&apos;s talk.</span>
            </h2>
            <p className="text-fg-3 text-base sm:text-lg leading-relaxed mb-8">
              Tell me what you&apos;re building and I&apos;ll get back to you
              within 24 hours with a plan and estimate. No pushy sales calls.
            </p>

            <div className="flex flex-col gap-4">
              {[
                { icon: "⚡", text: "Response within 24 hours" },
                { icon: "📋", text: "Free project scoping call" },
                { icon: "🔒", text: "NDA available on request" },
                { icon: "🚀", text: "Ready to start immediately" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-fg-2 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="gradient-border rounded-2xl p-6 sm:p-8">
            {submitState === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand to-accent flex items-center justify-center glow-blue">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-fg">Message sent!</h3>
                <p className="text-fg-3 text-sm max-w-xs">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours with next steps.
                </p>
                <Button variant="link" className="text-accent" onClick={() => setSubmitState("idle")}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <Label className="text-xs text-fg-3 uppercase tracking-wide">Your Name</Label>
                  <Input
                    {...register("name")}
                    type="text"
                    placeholder="John Smith"
                    aria-invalid={!!errors.name}
                    className={fieldClass}
                  />
                  {errors.name && <p className="text-xs text-red-400">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <Label className="text-xs text-fg-3 uppercase tracking-wide">Email Address</Label>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="john@company.com"
                    aria-invalid={!!errors.email}
                    className={fieldClass}
                  />
                  {errors.email && <p className="text-xs text-red-400">{errors.email.message}</p>}
                </div>

                {/* Budget */}
                <div className="flex flex-col gap-1.5">
                  <Label className="text-xs text-fg-3 uppercase tracking-wide">Budget Range</Label>
                  <Controller
                    name="budget"
                    control={control}
                    render={({ field }) => (
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger
                          className={`w-full h-auto px-4 py-3 bg-surface border-line text-fg rounded-xl focus-visible:border-brand focus-visible:ring-brand/30 ${errors.budget ? "border-red-500/60" : ""}`}
                        >
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetOptions.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.budget && <p className="text-xs text-red-400">{errors.budget.message}</p>}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <Label className="text-xs text-fg-3 uppercase tracking-wide">Tell me about your project</Label>
                  <Textarea
                    {...register("message")}
                    rows={4}
                    placeholder="I'm building a SaaS app that helps teams..."
                    aria-invalid={!!errors.message}
                    className={`${fieldClass} resize-none`}
                  />
                  {errors.message && <p className="text-xs text-red-400">{errors.message.message}</p>}
                </div>

                {submitState === "error" && (
                  <p className="text-sm text-red-400 text-center">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={submitState === "loading"}
                  className="w-full h-auto py-3.5 rounded-xl bg-brand hover:bg-brand-hover text-white font-semibold glow-blue text-sm sm:text-base gap-2"
                >
                  {submitState === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-fg-4">
                  No spam. No sales pressure. Just a conversation.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
