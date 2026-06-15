"use client";

import { useId, useRef, useState } from "react";
import { File as FileIcon, Trash2, UploadCloud, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type FileUploadProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "className" | "value" | "defaultValue"
> & {
  className?: string;
  label?: string;
  hint?: string;
  onFilesChange?: (files: File[]) => void;
};

function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function FileUpload({
  className,
  label = "Click to upload or drag and drop",
  hint,
  multiple,
  onFilesChange,
  onChange,
  id,
  disabled,
  ...props
}: FileUploadProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const updateFiles = (next: File[]) => {
    setFiles(next);
    onFilesChange?.(next);
  };

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;

    const incoming = Array.from(fileList);
    updateFiles(multiple ? [...files, ...incoming] : incoming.slice(0, 1));
  };

  const removeFile = (index: number) => {
    updateFiles(files.filter((_, i) => i !== index));
  };

  const removeAllFiles = () => {
    updateFiles([]);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="flex flex-col gap-3">
      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            inputRef.current?.click();
          }
        }}
        onDragOver={(e) => {
          e.preventDefault();
          if (!disabled) setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          if (!disabled) handleFiles(e.dataTransfer.files);
        }}
        className={cn(
          "flex flex-col items-center justify-center gap-3 rounded-md border-2 border-dashed border-line bg-surface px-6 py-12 text-center transition-colors outline-none cursor-pointer",
          "hover:border-brand hover:bg-elevated/50",
          "focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/30",
          isDragging && "border-brand bg-elevated/50",
          disabled && "pointer-events-none opacity-50",
          className
        )}
      >
        <UploadCloud className="size-10 text-fg-3" />
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium text-fg">{label}</p>
          {hint && <p className="text-xs text-fg-4">{hint}</p>}
        </div>
        <input
          ref={inputRef}
          id={inputId}
          type="file"
          multiple={multiple}
          disabled={disabled}
          className="hidden"
          onChange={(e) => {
            handleFiles(e.target.files);
            onChange?.(e);
          }}
          {...props}
        />
      </div>

      {files.length > 0 && (
        <div className="flex flex-col gap-2">
          {files.length > 1 && (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={removeAllFiles}
                className="flex items-center gap-1.5 text-xs text-fg-3 hover:text-destructive transition-colors cursor-pointer"
              >
                <Trash2 className="size-3.5" />
                Remove all
              </button>
            </div>
          )}
          <ul className="flex flex-col gap-2">
            {files.map((file, index) => (
              <li
                key={`${file.name}-${file.lastModified}-${index}`}
                className="flex items-center gap-3 rounded-md border border-line bg-surface px-3 py-2"
              >
                <FileIcon className="size-4 shrink-0 text-fg-3" />
                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="truncate text-sm text-fg">
                    {file.name}
                  </span>
                  <span className="text-xs text-fg-4">
                    {formatFileSize(file.size)}
                  </span>
                </div>
                <button
                  type="button"
                  aria-label={`Remove ${file.name}`}
                  onClick={() => removeFile(index)}
                  className="shrink-0 text-fg-3 hover:text-destructive transition-colors cursor-pointer"
                >
                  <X className="size-4" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
