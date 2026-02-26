import * as React from "react";
import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "animate-pulse rounded-md bg-gray-900/10 dark:bg-gray-50/10",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
