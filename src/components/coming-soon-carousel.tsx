import { Card } from "@/components/ui/card";
import React from "react";

export default function ComingSoonCarousel() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h2 className="text-4xl font-semibold">Previously on EUREKA! ITB</h2>
      <div className="flex w-max items-center gap-12">
        {[1, 2, 3].map((e) => (
          <div
            key={e}
            className="relative"
          >
            <Card className="aspect-square h-[35rem] w-[62rem] bg-muted" />

            <h1 className="absolute -bottom-5 left-1/2 z-50 -translate-x-1/2 text-5xl font-bold">
              EUREKA! ITB 2020
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
