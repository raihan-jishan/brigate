import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none   [&_svg]:shrink-0`,
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// navBtn
const BtnPrimary = ({ label, icon, variant, onClick }) => {
  return (
    <Button
     
      className={buttonVariants({
        // if varient was nav then apply nav-styles else default style included
        className: `${
          variant === "nav"
            ? "p-7 px-6  bg-gradient-to-r from-slate-900 to-orange-200 border-2 border-black/80  font-bold  "
            : variant === "vidio-btn"
            ? "p-7 px-16 capitalize rounded-lg  text-lg   bg-gray-200 hover:bg-gray-200/90 text-black border-2 border-black/80  font-bold"
            : "p-8 px-12  text-[1rem]"
        }   flex gap-2  hover:scale-95 transition-all  font-semibold rounded-full `,
      })}
      onClick={onClick}
    >
      {label}

      <span
        className={`${
          variant === "nav"
            ? "text-black"
            : variant === "vidio"
            ? "text-black"
            : ""
        }`}
      >
        {icon}
      </span>
    </Button>
  );
};
export { BtnPrimary, Button, buttonVariants };

