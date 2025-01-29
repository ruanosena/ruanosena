import { cn } from "@/lib/utils";
import React from "react";

export default function Title({
  children,
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div className={cn("w-fit", className)} {...props}>
      <h1 className="text-3xl font-bold transition-all group-hover:text-orange-400">
        {children}
      </h1>
      <div className="h-2 w-56 translate-x-[2.5%] rounded-full bg-orange-500 sm:w-[77%]" />
      <div className="h-2 w-56 translate-x-[5%] rounded-full bg-violet-500 sm:w-[77%]" />
    </div>
  );
}
