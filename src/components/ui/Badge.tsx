import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "success" | "warning" | "danger";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const variants = {
      primary: "badge-primary",
      secondary: "badge-secondary",
      success: "bg-green-100 text-green-800",
      warning: "bg-yellow-100 text-yellow-800",
      danger: "bg-red-100 text-red-800",
    };

    return (
      <span
        ref={ref}
        className={cn("badge", variants[variant], className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;
