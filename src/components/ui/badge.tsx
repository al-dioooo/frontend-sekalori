import type { ReactNode } from "react";
import { cn } from "@/lib/classnames";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-[#1a6b3a] px-4 py-2 font-sans text-sm font-semibold leading-5 text-[#dde9e1]",
        className,
      )}
    >
      {children}
    </span>
  );
}
