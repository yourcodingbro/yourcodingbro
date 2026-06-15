import { Label } from "@/components/ui/label";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import TextInput, { TextInputProps } from "@/components/atoms/form/TextInput";

export type FormControlProps = TextInputProps & {
  label: string;
  helperText?: {
    content: string;
    alignment?: "left" | "middle" | "right";
    className?: string;
  };
  errorText?: string;
};

const FormControl = forwardRef<HTMLInputElement, FormControlProps>(
  ({ label, helperText, errorText, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        <Label className="text-fg-2">{label}</Label>
        <TextInput ref={ref} {...props} />
        {helperText && (
          <p
            className={cn(
              "w-full text-xs text-fg-3",
              helperText.className,
              {
                "text-center": helperText.alignment === "middle",
                "text-right": helperText.alignment === "right",
              }
            )}
          >
            {helperText.content}
          </p>
        )}
        {errorText && (
          <p className="text-xs text-destructive">{errorText}</p>
        )}
      </div>
    );
  }
);

FormControl.displayName = "FormControl";

export default FormControl;
