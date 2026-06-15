"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Tag from "@/components/atoms/Tag";
import { cn } from "@/lib/utils";

export type TagInputOption = { value: string; label: string };

export type TagInputProps = {
  options: TagInputOption[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  className?: string;
};

export default function TagInput({
  options,
  value,
  onChange,
  placeholder = "Select...",
  className,
}: TagInputProps) {
  const availableOptions = options.filter((o) => !value.includes(o.value));

  const addTag = (tagValue: string) => {
    if (!value.includes(tagValue)) {
      onChange([...value, tagValue]);
    }
  };

  const removeTag = (tagValue: string) => {
    onChange(value.filter((v) => v !== tagValue));
  };

  const labelFor = (tagValue: string) =>
    options.find((o) => o.value === tagValue)?.label ?? tagValue;

  return (
    <Select
      key={value.length}
      value=""
      onValueChange={(val) => val && addTag(val as string)}
      disabled={availableOptions.length === 0}
    >
      <SelectTrigger
        className={cn("h-auto min-h-9 w-full flex-wrap py-1.5", className)}
      >
        <SelectValue>
          {() =>
            value.length === 0 ? (
              <span className="text-muted-foreground">{placeholder}</span>
            ) : (
              <div className="flex flex-wrap gap-1.5">
                {value.map((tagValue) => (
                  <Tag
                    key={tagValue}
                    label={labelFor(tagValue)}
                    onRemove={() => removeTag(tagValue)}
                  />
                ))}
              </div>
            )
          }
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {availableOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
