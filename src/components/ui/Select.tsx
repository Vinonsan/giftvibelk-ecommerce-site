import {
  useId,
  type ReactNode,
  type SelectHTMLAttributes,
} from "react";
import { ChevronDown } from "lucide-react";

type SelectState = "default" | "error" | "success";

type SelectOption = {
  disabled?: boolean;
  label: string;
  value: string;
};

export type SelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "size"
> & {
  error?: string;
  helperText?: string;
  inputSize?: "sm" | "md" | "lg";
  label?: string;
  leadingIcon?: ReactNode;
  options: SelectOption[];
  placeholder?: string;
  state?: SelectState;
};

const stateClasses: Record<SelectState, string> = {
  default:
    "border-secondary/12 focus-within:border-secondary focus-within:ring-secondary/15",
  error:
    "border-rose-300 focus-within:border-rose-500 focus-within:ring-rose-100",
  success:
    "border-emerald-300 focus-within:border-emerald-500 focus-within:ring-emerald-100",
};

const inputSizeClasses = {
  sm: "min-h-10 px-3 text-sm",
  md: "min-h-12 px-4 text-sm",
  lg: "min-h-14 px-5 text-base",
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Select({
  className,
  disabled,
  error,
  helperText,
  id,
  inputSize = "md",
  label,
  leadingIcon,
  options,
  placeholder,
  state = "default",
  ...props
}: SelectProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;

  const effectiveState = error ? "error" : state;

  const describedById =
    error || helperText ? `${selectId}-description` : undefined;

  return (
    <div className="w-full space-y-2">
      {/* Label */}
      {label ? (
        <label
          htmlFor={selectId}
          className="block text-sm font-medium text-foreground"
        >
          {label}
        </label>
      ) : null}

      {/* Select Wrapper */}
      <div
        className={cn(
          "flex w-full items-center gap-3 rounded-2xl border bg-transparent shadow-sm transition duration-200 focus-within:ring-4",
          stateClasses[effectiveState],
          disabled && "cursor-not-allowed bg-slate-50 opacity-70",
          className,
        )}
      >
        {/* Leading Icon */}
        {leadingIcon ? (
          <span className="pl-4 text-primary/60">
            {leadingIcon}
          </span>
        ) : null}

        {/* Select */}
        <select
          id={selectId}
          disabled={disabled}
          aria-invalid={effectiveState === "error"}
          aria-describedby={describedById}
          className={cn(
            "w-full appearance-none bg-transparent outline-none",
            "text-secondary",
            "placeholder:text-secondary/50",
            inputSizeClasses[inputSize],
            leadingIcon ? "pl-0" : undefined,
            "pr-0",
          )}
          defaultValue={placeholder ? "" : props.defaultValue}
          {...props}
        >
          {/* Placeholder */}
          {placeholder ? (
            <option
              value=""
              disabled
              className="text-secondary/50 bg-background"
            >
              {placeholder}
            </option>
          ) : null}

          {/* Options */}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
              className="bg-background text-secondary"
            >
              {option.label}
            </option>
          ))}
        </select>

        {/* Chevron */}
        <span className="pointer-events-none pr-4 text-secondary/60">
          <ChevronDown size={18} />
        </span>
      </div>

      {/* Error / Helper Text */}
      {error ? (
        <p id={describedById} className="text-sm text-red-600">
          {error}
        </p>
      ) : helperText ? (
        <p
          id={describedById}
          className="text-sm text-muted-foreground"
        >
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
