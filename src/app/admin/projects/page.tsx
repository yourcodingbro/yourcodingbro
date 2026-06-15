import AdminProjectsTable from "@/components/admin/AdminProjectsTable";
import { createClient } from "@/lib/supabase/server";

export default async function AdminProjectsPage() {
  const supabase = await createClient();
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="mb-2 text-2xl font-bold text-fg">Projects</h1>
        <p className="text-fg-3">Projects content coming soon.</p>
      </div>
      <AdminProjectsTable projects={projects ?? []} />
    </div>
  );
}
