import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold transition-colors focus:outline-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-sky-600 text-white shadow-2xs",
        secondary:
          "border-sky-200 dark:border-sky-800 bg-sky-100 dark:bg-sky-950/50 text-sky-800 dark:text-sky-300",
        destructive:
          "border-transparent bg-red-500 text-white shadow-2xs",
        outline: "border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900",
        success: "border-emerald-200 dark:border-emerald-800 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300",
        amber: "border-amber-200 dark:border-amber-800 bg-amber-100 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
