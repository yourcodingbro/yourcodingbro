import { createClient } from "@supabase/supabase-js";

// Bypasses RLS — only use in server-side code (API routes, Server Actions).
// Never import this in Client Components or middleware.
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!
);
