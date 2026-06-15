import { ComponentProps, forwardRef } from "react";
import { Input, InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type PropKeys =
  | "id"
  | "name"
  | "value"
  | "placeholder"
  | "disabled"
  | "onChange"
  | "onBlur";
type ContainerProps = Omit<ComponentProps<"div">, PropKeys>;
type TopLevelInputProps = Pick<InputProps, PropKeys>;

export type TextInputProps = ContainerProps &
  TopLevelInputProps & {
    inputProps?: Omit<InputProps, keyof TopLevelInputProps>;
    iconBefore?: React.ReactNode;
    iconAfter?: React.ReactNode;
  };

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      id,
      name,
      value,
      placeholder,
      disabled,
      onChange,
      onBlur,
      iconBefore,
      iconAfter,
      className,
      inputProps,
      ...props
    },
    ref
  ) => {
    const { className: inputClassName, ...restInputProps } = inputProps ?? {};

    return (
      <div
        className={cn(
          "flex gap-3 items-center px-4 py-3 w-full min-w-0 rounded-md border transition-colors outline-none border-line bg-surface text-fg focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/30 has-disabled:pointer-events-none has-disabled:opacity-50 has-aria-invalid:border-destructive has-aria-invalid:ring-3 has-aria-invalid:ring-destructive/20",
          className
        )}
        {...props}
      >
        {iconBefore && (
          <div className="size-6 shrink-0 text-fg-3 [&_svg]:size-full">
            {iconBefore}
          </div>
        )}
        <Input
          ref={ref}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          className={cn(
            "p-0 w-full h-auto bg-transparent rounded-none border-0 shadow-none dark:bg-transparent text-fg placeholder:text-fg-4 focus-visible:border-0 focus-visible:outline-none focus-visible:ring-0",
            inputClassName
          )}
          {...restInputProps}
        />
        {iconAfter && (
          <div className="size-6 shrink-0 text-fg-3 [&_svg]:size-full">
            {iconAfter}
          </div>
        )}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
