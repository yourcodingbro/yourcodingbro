"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Mail, Check } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const loginSchema = z.object({
  email: z.email("Please enter a valid email address"),
});

type LoginFormData = z.infer<typeof loginSchema>;

type Status = "idle" | "loading" | "sent" | "error";

export default function LoginForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [sentEmail, setSentEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async ({ email }: LoginFormData) => {
    setStatus("loading");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/api/auth/callback`,
      },
    });

    if (error) {
      setStatus("error");
      return;
    }

    setSentEmail(email);
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col gap-3 items-center text-center">
        <div className="flex justify-center items-center w-12 h-12 rounded-full bg-brand/10">
          <Check className="w-6 h-6 text-brand" />
        </div>
        <h2 className="text-lg font-semibold text-fg">Check your inbox</h2>
        <p className="text-sm text-fg-3">
          We sent a sign-in link to{" "}
          <span className="text-fg-2">{sentEmail}</span>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email.message}</p>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm text-destructive">
          Something went wrong. Please try again.
        </p>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        icon={
          status === "loading" ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Mail className="w-4 h-4" />
          )
        }
        className="w-full"
      >
        {status === "loading" ? "Sending link..." : "Send sign-in link"}
      </Button>
    </form>
  );
}
