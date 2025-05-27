import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full py-16 md:py-24 lg:py-28",
        className
      )}
    >
      <div className="container mx-auto max-w-screen-lg px-4 md:px-6">
        {children}
      </div>
    </section>
  );
}
