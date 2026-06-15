"use client";

import Modal from "@/components/modals/Modal";
import ProjectForm from "@/components/forms/ProjectForm";
import type { ProjectFormData } from "@/lib/constants/projects";
import type { Project } from "@/types/project";

export type AdminProjectModalProps = {
  open: boolean;
  project: Project | null;
  onClose: () => void;
  onSubmit: (data: ProjectFormData) => void | Promise<void>;
};

function toDefaultValues(project: Project): Partial<ProjectFormData> {
  return {
    name: project.name,
    title: project.title,
    short_desc: project.short_desc,
    status: project.status,
    thumbnail: project.thumbnail,
    type: project.type,
    tags: project.tags,
    link: project.link ?? "",
  };
}

export default function AdminProjectModal({
  open,
  project,
  onClose,
  onSubmit,
}: AdminProjectModalProps) {
  return (
    <Modal open={open} onClose={onClose} className="max-w-2xl">
      <div className="flex overflow-y-auto flex-col gap-5 p-6 scrollbar-hover">
        <h2 className="text-xl font-bold text-fg">
          {project ? "Edit project" : "Add project"}
        </h2>
        <ProjectForm
          key={project?.id ?? "new"}
          defaultValues={project ? toDefaultValues(project) : undefined}
          onSubmit={onSubmit}
          submitLabel={project ? "Update project" : "Create project"}
        />
      </div>
    </Modal>
  );
}
