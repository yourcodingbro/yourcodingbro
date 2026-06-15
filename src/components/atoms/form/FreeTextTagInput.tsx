"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import Tag from "@/components/atoms/Tag";
import { cn } from "@/lib/utils";

export type FreeTextTagInputProps = {
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  className?: string;
};

export default function FreeTextTagInput({
  value,
  onChange,
  placeholder = "Type and press Enter...",
  className,
}: FreeTextTagInputProps) {
  const [draft, setDraft] = useState("");

  const addTag = () => {
    const tag = draft.trim();
    if (tag && !value.includes(tag)) {
      onChange([...value, tag]);
    }
    setDraft("");
  };

  const removeTag = (tag: string) => {
    onChange(value.filter((v) => v !== tag));
  };

  return (
    <div
      className={cn(
        "flex w-full min-w-0 flex-wrap items-center gap-1.5 rounded-md border border-line bg-surface px-4 py-2 transition-colors outline-none focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/30",
        className
      )}
    >
      {value.map((tag) => (
        <Tag key={tag} label={tag} onRemove={() => removeTag(tag)} />
      ))}
      <Input
        value={draft}
        placeholder={value.length === 0 ? placeholder : ""}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === ",") {
            e.preventDefault();
            addTag();
          } else if (e.key === "Backspace" && !draft && value.length > 0) {
            removeTag(value[value.length - 1]);
          }
        }}
        onBlur={addTag}
        className="h-auto flex-1 min-w-20 border-0 bg-transparent p-0 shadow-none placeholder:text-fg-4 focus-visible:border-0 focus-visible:outline-none focus-visible:ring-0 dark:bg-transparent"
      />
    </div>
  );
}
