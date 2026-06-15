"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Boxes, Pencil, Plus, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { statusStyle } from "@/components/cards/ProjectCard";
import AdminProjectModal from "@/components/admin/AdminProjectModal";
import ConfirmDeleteModal from "@/components/modals/ConfirmDeleteModal";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import type { ProjectFormData } from "@/lib/constants/projects";
import type { Project } from "@/types/project";

export type AdminProjectsTableProps = {
  projects: Project[];
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export default function AdminProjectsTable({
  projects,
}: AdminProjectsTableProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [deletingProject, setDeletingProject] = useState<Project | null>(null);

  const openCreate = () => {
    setEditingProject(null);
    setOpen(true);
  };

  const openEdit = (project: Project) => {
    setEditingProject(project);
    setOpen(true);
  };

  const confirmDelete = async () => {
    if (!deletingProject) return;

    const supabase = createClient();
    await supabase.from("projects").delete().eq("id", deletingProject.id);
    router.refresh();
  };

  const handleSubmit = async (data: ProjectFormData) => {
    const supabase = createClient();
    const thumbnail = typeof data.thumbnail === "string" ? data.thumbnail : "";

    const payload = {
      name: data.name,
      title: data.title,
      short_desc: data.short_desc,
      status: data.status,
      type: data.type,
      tags: data.tags,
      link: data.link || null,
      thumbnail,
    };

    if (editingProject) {
      await supabase
        .from("projects")
        .update(payload)
        .eq("id", editingProject.id);
    } else {
      await supabase.from("projects").insert(payload);
    }

    setOpen(false);
    router.refresh();
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <Button type="button" onClick={openCreate} icon={<Plus />}>
          Add project
        </Button>
      </div>

      <div className="overflow-hidden rounded-md border border-line">
        <Table>
          <TableHeader>
            <TableRow className="bg-elevated border-line">
              <TableHead className="w-16">Thumbnail</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Link</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Updated</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow
                key={project.id}
                className="even:bg-elevated/30 border-line"
              >
                <TableCell>
                  <div className="overflow-hidden relative rounded-md border size-10 border-line">
                    {project.has_image ? (
                      <Image
                        src={project.thumbnail}
                        alt={project.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div
                        className={cn(
                          "flex size-full items-center justify-center bg-gradient-to-br",
                          project.thumbnail
                        )}
                      >
                        <Boxes className="size-4 text-white/60" />
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-medium text-fg">{project.name}</span>
                    <span className="text-xs text-fg-3">{project.title}</span>
                  </div>
                </TableCell>
                <TableCell className="text-fg-3">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand hover:underline"
                    >
                      {project.link}
                    </a>
                  ) : (
                    "-"
                  )}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={cn(statusStyle[project.status])}
                  >
                    {project.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-fg-3">
                  {formatDate(project.created_at)}
                </TableCell>
                <TableCell className="text-fg-3">
                  {formatDate(project.updated_at)}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2 justify-end">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon-sm"
                      aria-label={`Edit ${project.name}`}
                      onClick={() => openEdit(project)}
                    >
                      <Pencil className="size-3.5" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon-sm"
                      aria-label={`Delete ${project.name}`}
                      onClick={() => setDeletingProject(project)}
                      className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                    >
                      <Trash2 className="size-3.5" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <AdminProjectModal
        open={open}
        project={editingProject}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmit}
      />

      <ConfirmDeleteModal
        open={deletingProject !== null}
        title="Delete project"
        description={
          deletingProject
            ? `Are you sure you want to delete "${deletingProject.name}"? This action cannot be undone.`
            : undefined
        }
        onConfirm={confirmDelete}
        onClose={() => setDeletingProject(null)}
      />
    </div>
  );
}
