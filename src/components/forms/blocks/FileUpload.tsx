"use client";

import { useRef, useState, useCallback } from "react";
import { CloudUpload, X, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export type FileUploadProps = {
  onChange: (file: File | null) => void;
  accept?: string;
  compact?: boolean;
};

export default function FileUpload({
  onChange,
  accept,
  compact = false,
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState<boolean>(false);

  const handleFile = useCallback(
    (file: File | null) => {
      setFile(file);
      onChange(file);
    },
    [onChange]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragging(false);

      const dropped = e.dataTransfer.files[0] ?? null;
      if (dropped) handleFile(dropped);
    },
    [handleFile]
  );

  const handleRemove = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      handleFile(null);

      if (inputRef.current) inputRef.current.value = "";
    },
    [handleFile]
  );

  return (
    <div
      onClick={() => !file && inputRef.current?.click()}
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      className={cn(
        "h-16 relative flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed px-3 transition-colors border-line hover:border-brand/50 hover:bg-surface/50 cursor-pointer",
        {
          "border-brand/40 bg-brand/5 cursor-default hover:border-brand/40 hover:bg-brand/5":
            !!file,
          "border-brand bg-brand/10": dragging,
        }
      )}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
      />

      {file ? (
        <div className="flex w-full items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-brand/15">
            <FileText className="h-4 w-4 text-brand" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-fg">{file.name}</p>
            <p className="text-xs text-fg-4">
              {(file.size / 1024).toFixed(0)} KB
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            icon={<X className="h-4 w-4" />}
            iconPosition="after"
            onClick={handleRemove}
            className="size-7 text-fg-3 rounded-md transition-colors hover:text-fg dark:hover:bg-line"
          />
        </div>
      ) : (
        <div
          className={cn(
            "flex items-center justify-center gap-2",
            compact ? "flex-col" : "flex-row"
          )}
        >
          {!compact && (
            <CloudUpload className="size-6 transition-colors text-fg-3 hover:text-brand" />
          )}
          <div className="text-center">
            <p className="text-sm text-fg-3">
              <span className="font-medium text-fg-2">Click to upload</span> or
              drag & drop
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
