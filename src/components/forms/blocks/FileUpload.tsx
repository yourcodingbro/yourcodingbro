"use client";

export type FileUploadProps = {
  onChange: (file: File | null) => void;
  accept?: string;
};

export default function FileUpload({ onChange, accept }: FileUploadProps) {
  return (
    <input
      type="file"
      accept={accept}
      onChange={(e) => onChange(e.target.files?.[0] ?? null)}
      className="block w-full text-sm text-fg-3 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-line file:text-sm file:font-medium file:bg-surface file:text-fg-2 hover:file:bg-elevated cursor-pointer"
    />
  );
}
