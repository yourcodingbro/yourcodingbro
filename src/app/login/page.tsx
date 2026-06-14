import { redirect } from "next/navigation";
import LoginForm from "@/components/forms/LoginForm";
import { createClient } from "@/lib/supabase/server";

export default async function LoginPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  if (data.user) {
    redirect("/admin/dashboard");
  }

  return (
    <main className="flex justify-center items-center px-4 min-h-svh bg-bg">
      <div className="p-8 w-full max-w-sm rounded-2xl gradient-border">
        <h1 className="mb-1 text-xl font-bold text-fg">Sign in</h1>
        <p className="mb-6 text-sm text-fg-3">
          Enter your email to receive a sign-in link.
        </p>
        <LoginForm />
      </div>
    </main>
  );
}
