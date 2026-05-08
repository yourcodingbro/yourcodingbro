"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(20, "Tell me a bit more — at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

const budgetOptions = [
  { value: "",         label: "Select budget range" },
  { value: "under-1k", label: "Under $1,000" },
  { value: "1k-5k",    label: "$1,000 – $5,000" },
  { value: "5k-15k",   label: "$5,000 – $15,000" },
  { value: "15k-plus", label: "$15,000+" },
  { value: "not-sure", label: "Not sure yet" },
];

type SubmitState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const {
    register,
    handleSubmit,
    reset,
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

  const fieldClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl bg-surface border text-white placeholder-slate-500 text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-brand/50 ${
      hasError
        ? "border-red-500/60 focus:border-red-500"
        : "border-line focus:border-brand"
    }`;

  return (
    <section id="contact" className="py-12 sm:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-elevated border border-line text-xs font-medium text-accent mb-5">
              Let&apos;s build together
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight leading-tight">
              Got a project?{" "}
              <span className="gradient-text">Let&apos;s talk.</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
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
                  <span className="text-slate-300 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="gradient-border rounded-2xl p-6 sm:p-8">
            {submitState === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand to-accent flex items-center justify-center glow-blue">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Message sent!</h3>
                <p className="text-slate-400 text-sm max-w-xs">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours with next steps.
                </p>
                <button
                  onClick={() => setSubmitState("idle")}
                  className="mt-2 text-sm text-accent hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wide">
                    Your Name
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="John Smith"
                    className={fieldClass(!!errors.name)}
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="john@company.com"
                    className={fieldClass(!!errors.email)}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wide">
                    Budget Range
                  </label>
                  <select
                    {...register("budget")}
                    className={`${fieldClass(!!errors.budget)} appearance-none`}
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.budget && <p className="mt-1.5 text-xs text-red-400">{errors.budget.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wide">
                    Tell me about your project
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="I'm building a SaaS app that helps teams..."
                    className={`${fieldClass(!!errors.message)} resize-none`}
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>}
                </div>

                {submitState === "error" && (
                  <p className="text-sm text-red-400 text-center">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitState === "loading"}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white bg-brand hover:bg-brand-hover disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 glow-blue text-sm sm:text-base"
                >
                  {submitState === "loading" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-500">
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
