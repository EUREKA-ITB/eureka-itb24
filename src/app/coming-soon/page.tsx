import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import React from "react";

export default function ComingSoonPage() {
  return (
    <main className="flex size-full min-h-screen flex-col gap-0 overflow-x-hidden py-16">
      <section className="flex h-[71dvh] w-full flex-col items-center justify-center gap-2">
        <h3 className="text-5xl font-semibold">EUREKA! ITB 2024</h3>
        <h1 className="text-9xl font-bold">COMING SOON</h1>
        <h3 className="text-4xl font-semibold">The Physics Multiverse</h3>
      </section>

      <section className="flex flex-grow flex-col items-center justify-center gap-32 pb-16">
        <div className="flex flex-col items-center justify-center gap-8">
          <h2 className="text-4xl font-semibold">Previously on EUREKA! ITB</h2>
          <div className="flex w-max items-center gap-12">
            {[1, 2, 3].map((e) => (
              <div
                key={e}
                className="relative"
              >
                <Card className="aspect-square h-[35rem] w-[62rem] bg-muted"></Card>
                <h1 className="absolute -bottom-5 left-1/2 z-50 -translate-x-1/2 text-5xl font-bold">
                  EUREKA! ITB 2020
                </h1>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-max flex-col justify-center gap-8 ">
          <h3 className="text-3xl">Stay tuned on our social media</h3>
          <div className="flex w-full items-center justify-evenly gap-2">
            {[1, 2, 3].map((e) => (
              <Avatar
                className="size-16"
                key={e + 100}
              >
                <AvatarFallback>{e}</AvatarFallback>
              </Avatar>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
