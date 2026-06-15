"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FileUpload from "@/components/atoms/form/FileUpload";
import TagInput from "@/components/atoms/form/TagInput";
import FreeTextTagInput from "@/components/atoms/form/FreeTextTagInput";
import FormControl from "@/components/atoms/form/FormControl";
import {
  projectSchema,
  projectStatusOptions,
  projectTypeOptions,
  type ProjectFormData,
} from "@/lib/constants/projects";

export type ProjectFormProps = {
  defaultValues?: Partial<ProjectFormData>;
  submitLabel?: string;
};

const typeOptions = projectTypeOptions.map((type) => ({
  value: type,
  label: type,
}));

export default function ProjectForm({
  defaultValues,
  submitLabel = "Save project",
}: ProjectFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      name: "",
      title: "",
      short_desc: "",
      status: "In Progress",
      thumbnail: null,
      type: [],
      tags: [],
      link: "",
      ...defaultValues,
    },
  });

  const onSubmit = (data: ProjectFormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 max-w-xl"
    >
      {/* Name */}
      <FormControl
        label="Name"
        id="name"
        placeholder="Project name"
        aria-invalid={!!errors.name}
        errorText={errors.name?.message}
        {...register("name")}
      />

      {/* Title */}
      <FormControl
        label="Title"
        id="title"
        placeholder="Project title"
        aria-invalid={!!errors.title}
        errorText={errors.title?.message}
        {...register("title")}
      />

      {/* Short description */}
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="short_desc">Short description</Label>
        <Textarea
          id="short_desc"
          rows={4}
          placeholder="A short summary of the project"
          aria-invalid={!!errors.short_desc}
          {...register("short_desc")}
        />
        {errors.short_desc && (
          <p className="text-xs text-destructive">
            {errors.short_desc.message}
          </p>
        )}
      </div>

      {/* Status */}
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="status">Status</Label>
        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger id="status" className="w-full">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                {projectStatusOptions.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.status && (
          <p className="text-xs text-destructive">{errors.status.message}</p>
        )}
      </div>

      {/* Thumbnail */}
      <div className="flex flex-col gap-1.5">
        <Label>Thumbnail</Label>
        <Controller
          name="thumbnail"
          control={control}
          render={({ field }) => (
            <FileUpload
              accept="image/*"
              label="Click to upload or drag and drop a thumbnail"
              hint="PNG, JPG or WEBP"
              onFilesChange={(files) => field.onChange(files[0] ?? null)}
            />
          )}
        />
        {errors.thumbnail && (
          <p className="text-xs text-destructive">{errors.thumbnail.message}</p>
        )}
      </div>

      {/* Type */}
      <div className="flex flex-col gap-1.5">
        <Label>Type</Label>
        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <TagInput
              options={typeOptions}
              value={field.value}
              onChange={field.onChange}
              placeholder="Select project type(s)"
            />
          )}
        />
        {errors.type && (
          <p className="text-xs text-destructive">{errors.type.message}</p>
        )}
      </div>

      {/* Tags */}
      <div className="flex flex-col gap-1.5">
        <Label>Tags</Label>
        <Controller
          name="tags"
          control={control}
          render={({ field }) => (
            <FreeTextTagInput
              value={field.value}
              onChange={field.onChange}
              placeholder="Type a tag and press Enter"
            />
          )}
        />
        {errors.tags && (
          <p className="text-xs text-destructive">{errors.tags.message}</p>
        )}
      </div>

      {/* Link */}
      <FormControl
        label="Link"
        id="link"
        placeholder="https://example.com"
        aria-invalid={!!errors.link}
        errorText={errors.link?.message}
        {...register("link")}
      />

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {submitLabel}
      </Button>
    </form>
  );
}
