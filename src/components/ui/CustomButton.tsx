import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex ltr items-center justify-center rounded-[8px] font-medium transition-colors cursor-pointer  h-10",
  {
    variants: {
      variant: {
        primary: "bg-[#3C69E3] text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-black hover:bg-gray-300",
        outline: "border border-[#E4E3E5] text-black hover:bg-gray-100",
        ghost: "text-gray-700 hover:bg-gray-100",
      },
      size: {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  text?: string;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
}

export default function CustomButton({
  text,
  icon,
  className,
  variant,
  size,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
      {text}
    </button>
  );
}
