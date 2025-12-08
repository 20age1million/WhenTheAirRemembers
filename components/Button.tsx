import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "ghost";
};

export function Button({ className, variant = "solid", ...rest }: ButtonProps) {
  const base =
    "rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2";
  const styles =
    variant === "solid"
      ? "bg-white text-green-700 hover:bg-stone-50 shadow-sm"
      : "border border-white/60 text-white hover:bg-white/10";

  const classes = [base, styles, className].filter(Boolean).join(" ");

  return <button className={classes} {...rest} />;
}
