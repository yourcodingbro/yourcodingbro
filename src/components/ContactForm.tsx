"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import cn from "classnames";
import { useTranslations } from "next-intl";
import { Check, Send, Loader2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SectionBadge from "@/components/badges/SectionBadge";
import {
  getContactSchema,
  type ContactFormData,
} from "@/lib/constants/contact";
import type { SubmitState } from "@/types/contact";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const fieldClass =
  "h-auto px-4 py-3 bg-surface border-line text-fg placeholder:text-fg-4 focus-visible:border-brand focus-visible:ring-brand/30 rounded-lg";

export default function ContactForm() {
  const t = useTranslations("pages.homepage.contactForm");
  const perks = t.raw("perks") as { icon: string; text: string }[];
  const budgetOptions = t.raw("form.budget.options") as {
    value: string;
    label: string;
  }[];

  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [rateLimitMessage, setRateLimitMessage] = useState("");

  const contactSchema = getContactSchema({
    nameMin: t("form.errors.nameMin"),
    emailInvalid: t("form.errors.emailInvalid"),
    budgetRequired: t("form.errors.budgetRequired"),
    messageMin: t("form.errors.messageMin"),
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.status === 429) {
        const data = await res.json();
        setRateLimitMessage(data.message ?? t("rateLimited.defaultMessage"));
        setSubmitState("rate_limited");
        return;
      }
      if (!res.ok) throw new Error("Failed to send");
      setSubmitState("success");
      reset();
    } catch {
      setSubmitState("error");
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-20 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — copy */}
          <div>
            <SectionBadge className="mb-5">{t("badge")}</SectionBadge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-fg mb-5 tracking-tight leading-tight">
              {t("title")}
              <span className="gradient-text">{t("titleHighlight")}</span>
            </h2>
            <p className="text-fg-3 text-base sm:text-lg leading-relaxed mb-8">
              {t("description")}
            </p>

            <div className="flex flex-col gap-4">
              {perks.map((item) => (
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
                <h3 className="text-xl font-bold text-fg">
                  {t("success.title")}
                </h3>
                <p className="text-fg-3 text-sm max-w-xs">
                  {t("success.description")}
                </p>
                <Button
                  variant="link"
                  className="text-accent"
                  onClick={() => setSubmitState("idle")}
                >
                  {t("success.sendAnother")}
                </Button>
              </div>
            ) : submitState === "rate_limited" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/25 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-fg">
                  {t("rateLimited.title")}
                </h3>
                <p className="text-fg-3 text-sm max-w-xs">{rateLimitMessage}</p>
                <Button
                  variant="link"
                  className="text-accent"
                  onClick={() => setSubmitState("idle")}
                >
                  {t("rateLimited.backToForm")}
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="flex flex-col gap-5"
              >
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <Label className="text-xs text-fg-3 uppercase tracking-wide">
                    {t("form.name.label")}
                  </Label>
                  <Input
                    {...register("name")}
                    type="text"
                    placeholder={t("form.name.placeholder")}
                    aria-invalid={!!errors.name}
                    className={fieldClass}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <Label className="text-xs text-fg-3 uppercase tracking-wide">
                    {t("form.email.label")}
                  </Label>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder={t("form.email.placeholder")}
                    aria-invalid={!!errors.email}
                    className={fieldClass}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Budget */}
                <div className="flex flex-col gap-1.5">
                  <Label className="text-xs text-fg-3 uppercase tracking-wide">
                    {t("form.budget.label")}
                  </Label>
                  <Controller
                    name="budget"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger
                          className={cn(fieldClass, "w-full", {
                            "border-red-500/60": !!errors.budget,
                          })}
                        >
                          <SelectValue
                            placeholder={t("form.budget.placeholder")}
                          >
                            {
                              budgetOptions.find((o) => o.value === field.value)
                                ?.label
                            }
                          </SelectValue>
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
                  {errors.budget && (
                    <p className="text-xs text-red-400">
                      {errors.budget.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <Label className="text-xs text-fg-3 uppercase tracking-wide">
                    {t("form.message.label")}
                  </Label>
                  <Textarea
                    {...register("message")}
                    rows={4}
                    placeholder={t("form.message.placeholder")}
                    aria-invalid={!!errors.message}
                    className={cn(fieldClass, "resize-none")}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {submitState === "error" && (
                  <p className="text-sm text-red-400 text-center">
                    {t("form.errors.generic")}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={submitState === "loading"}
                  icon={
                    submitState === "loading" ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )
                  }
                  iconPosition={submitState === "loading" ? "before" : "after"}
                  className="w-full h-auto py-3.5 rounded-xl bg-brand hover:bg-brand-hover text-white font-semibold glow-blue text-sm sm:text-base gap-2"
                >
                  {submitState === "loading"
                    ? t("form.sending")
                    : t("form.submit")}
                </Button>

                <p className="text-center text-xs text-fg-4">
                  {t("form.privacyNote")}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
