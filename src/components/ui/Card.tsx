import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("card", !hover && "hover:shadow-md", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

const CardImage = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("card-image", className)} {...props}>
        {children}
      </div>
    );
  }
);

CardImage.displayName = "CardImage";

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("card-content", className)} {...props}>
        {children}
      </div>
    );
  }
);

CardContent.displayName = "CardContent";

export { Card, CardImage, CardContent };
