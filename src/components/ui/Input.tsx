import { useId, type InputHTMLAttributes, type ReactNode } from "react";

type InputState = "default" | "error" | "success";

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  error?: string;
  helperText?: string;
  inputSize?: "sm" | "md" | "lg";
  label?: string;
  leadingIcon?: ReactNode;
  state?: InputState;
  trailingIcon?: ReactNode;
};

const stateClasses: Record<InputState, string> = {
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

export default function Input({
  className,
  disabled,
  error,
  helperText,
  id,
  inputSize = "md",
  label,
  leadingIcon,
  state = "default",
  trailingIcon,
  type = "text",
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const effectiveState = error ? "error" : state;
  const describedById =
    error || helperText ? `${inputId}-description` : undefined;

  return (
    <div className="w-full space-y-2">
      {label ? (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-foreground"
        >
          {label}
        </label>
      ) : null}

      <div
        className={cn(
          "flex w-full items-center gap-3 rounded-2xl border bg-white shadow-sm transition focus-within:ring-4",
          stateClasses[effectiveState],
          disabled && "cursor-not-allowed bg-slate-50 opacity-70",
          className,
        )}
      >
        {leadingIcon ? (
          <span className="pl-4 text-muted-foreground">{leadingIcon}</span>
        ) : null}

        <input
          id={inputId}
          type={type}
          disabled={disabled}
          aria-invalid={effectiveState === "error"}
          aria-describedby={describedById}
          className={cn(
            "w-full bg-transparent text-foreground outline-none placeholder:text-muted-foreground/80",
            inputSizeClasses[inputSize],
            leadingIcon ? "pl-0" : undefined,
            trailingIcon ? "pr-0" : undefined,
          )}
          {...props}
        />

        {trailingIcon ? (
          <span className="pr-4 text-muted-foreground">{trailingIcon}</span>
        ) : null}
      </div>

      {error ? (
        <p id={describedById} className="text-sm text-red-600">
          {error}
        </p>
      ) : helperText ? (
        <p id={describedById} className="text-sm text-muted-foreground">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
