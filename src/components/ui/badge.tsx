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
          "border-sky-200 bg-sky-100 text-sky-800",
        destructive:
          "border-transparent bg-red-500 text-white shadow-2xs",
        outline: "border-slate-200 text-slate-700 bg-white",
        success: "border-emerald-200 bg-emerald-100 text-emerald-800",
        amber: "border-amber-200 bg-amber-100 text-amber-800",
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
