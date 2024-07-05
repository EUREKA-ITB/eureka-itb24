import { fontSecondary } from "@/lib/fonts";
import { cn } from "@/lib/utils/shadcn-utils";
import React from "react";

export default function CompetitionsSectionTitle() {
  return (
    <div className="container flex flex-col items-center justify-center text-pretty text-center xs:gap-3">
      <h1 className="text-[40px] font-bold italic tracking-tight drop-shadow-blue-glow xs:text-5xl sm:text-7xl lg:text-[5rem]">
        OUR EVENTS
      </h1>

      <h3
        className={cn(
          fontSecondary.className,
          "text-md text-balance xs:text-xl",
        )}
      >
        What waits for you beyond the horizon
      </h3>
    </div>
  );
}
