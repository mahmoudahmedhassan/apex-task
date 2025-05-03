 

import { cn } from "@/lib/utils";
import React from "react";

type HTMLElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "div";

type VariantExclude = Exclude<HTMLElement, "p" | "span" | "div">;

interface Props extends React.HTMLAttributes<HTMLElement> {
  as?: HTMLElement;
  children: React.ReactNode;
  className?: string;
  variant?: VariantExclude | "body1" | "body2";
  gutter?: "none" | "sm" | "md" | "lg";
}

export const Typography = ({
  as,
  children,
  className,
  variant = "body1",
  gutter,
}: Props) => {
  const variantClasses = {
    h1: "text-4xl font-extrabold tracking-tight lg:text-5xl",
    h2: "text-3xl font-semibold tracking-tight",
    h3: "text-2xl font-semibold tracking-tight",
    h4: "text-xl font-semibold tracking-tight",
    h5: "text-lg font-semibold tracking-tight",
    h6: "text-base font-semibold tracking-tight",
    p: "leading-7 [&:not(:first-child)]:mt-6",
    span: "text-sm font-medium leading-none",
    div: "text-sm text-slate-500",
    body1: "text-base leading-7",
    body2: "text-sm leading-6",
  };
  const Component = as || "p";
  return (
    <Component
      className={cn(
        variantClasses[variant],
        {
          "mb-4": gutter,
        },
        className
      )}
    >
      {children}
    </Component>
  );
};
